/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReadResult } from "#action/index.js";
import { SessionType } from "#codec/MessageCodec.js";
import { Diagnostic, InternalError, Logger, MatterFlowError, Millis, NoResponseTimeoutError } from "#general";
import {
    AttributeReportPayload,
    BaseDataReport,
    DataReportPayloadIterator,
    EventReportPayload,
    canAttributePayloadBeChunked,
    chunkAttributePayload,
    encodeAttributePayload,
    encodeAttributePayloadData,
    encodeEventPayload,
} from "#interaction/AttributeDataEncoder.js";
import { UnexpectedMessageError } from "#protocol/MessageExchange.js";
import {
    Status,
    StatusCode,
    StatusResponseError,
    TlvAny,
    TlvDataReportForSend,
    TlvInvokeRequest,
    TlvReadRequest,
    TlvStream,
    TlvSubscribeRequest,
    TlvTimedRequest,
    TlvWriteRequest,
    TlvWriteResponse,
    TypeFromSchema,
} from "@matter/types";
import {
    DATA_REPORT_MAX_QUEUED_ATTRIBUTE_MESSAGES,
    DATA_REPORT_MIN_AVAILABLE_BYTES_BEFORE_SENDING,
    InteractionMessenger,
} from "./InteractionMessenger.js";
import { InteractionRecipient } from "./InteractionRecipient.js";
import { MessageType } from "./MessageType.js";

const logger = Logger.get("ServerMessenger");

/**
 * Message processor for the server (device) side of the Matter protocol.
 */
export class InteractionServerMessenger extends InteractionMessenger {
    async handleRequest(recipient: InteractionRecipient) {
        let continueExchange = true; // are more messages expected in this "transaction"?
        let isGroupSession = false;
        try {
            while (continueExchange) {
                const message = await this.exchange.nextMessage();
                isGroupSession = message.packetHeader.sessionType === SessionType.Group;
                continueExchange = false;
                switch (message.payloadHeader.messageType) {
                    case MessageType.ReadRequest: {
                        if (isGroupSession) {
                            throw new StatusResponseError(
                                `ReadRequest is not supported in group sessions`,
                                Status.InvalidAction,
                            );
                        }
                        const readRequest = TlvReadRequest.decode(message.payload);

                        const { dataReport, payload } = await recipient.handleReadRequest(
                            this.exchange,
                            readRequest,
                            message,
                        );

                        // This potentially sends multiple DataReport Messages
                        await this.sendDataReport({
                            baseDataReport: dataReport,
                            forFabricFilteredRead: readRequest.isFabricFiltered,
                            payload,
                        });
                        break;
                    }
                    case MessageType.WriteRequest: {
                        const writeRequest = TlvWriteRequest.decode(message.payload);
                        const { suppressResponse } = writeRequest;
                        const writeResponse = await recipient.handleWriteRequest(this.exchange, writeRequest, message);
                        if (!suppressResponse && !isGroupSession) {
                            await this.send(MessageType.WriteResponse, TlvWriteResponse, writeResponse);
                        }
                        break;
                    }
                    case MessageType.SubscribeRequest: {
                        if (isGroupSession) {
                            throw new StatusResponseError(
                                `SubscribeRequest is not supported in group sessions`,
                                Status.InvalidAction,
                            );
                        }
                        const subscribeRequest = TlvSubscribeRequest.decode(message.payload);
                        await recipient.handleSubscribeRequest(this.exchange, subscribeRequest, this, message);
                        // response is sent by handler
                        break;
                    }
                    case MessageType.InvokeRequest: {
                        const invokeRequest = TlvInvokeRequest.decode(message.payload);
                        await recipient.handleInvokeRequest(this.exchange, invokeRequest, this, message);
                        // response is sent by the handler
                        break;
                    }
                    case MessageType.TimedRequest: {
                        if (isGroupSession) {
                            throw new StatusResponseError(
                                `TimedRequest is not supported in group sessions`,
                                Status.InvalidAction,
                            );
                        }
                        const timedRequest = TlvTimedRequest.decode(message.payload);
                        recipient.handleTimedRequest(this.exchange, timedRequest, message);
                        await this.sendStatus(StatusCode.Success, {
                            logContext: { for: "TimedRequest" },
                        });
                        continueExchange = true;
                        break;
                    }
                    default:
                        throw new StatusResponseError(
                            `Unsupported message type ${MessageType[message.payloadHeader.messageType]} (${message.payloadHeader.messageType})`,
                            Status.InvalidAction,
                        );
                }
                if (isGroupSession) {
                    break; // We do not support multiple messages in group sessions
                }
            }
        } catch (error: any) {
            let errorStatusCode = StatusCode.Failure;
            if (error instanceof StatusResponseError) {
                logger.info(`Sending status response ${error.code} for interaction error: ${error.message}`);
                errorStatusCode = error.code;
            } else if (error instanceof NoResponseTimeoutError) {
                logger.info(error);
            } else {
                logger.warn(error);
            }
            if (!isGroupSession && !(error instanceof NoResponseTimeoutError)) {
                await this.sendStatus(errorStatusCode);
            }
        } finally {
            await this.exchange.close();
        }
    }

    /**
     * Handle a DataReport with a Payload Iterator for a DataReport to send, split them into multiple DataReport
     * messages and send them out based on the size.
     */
    async sendDataReport(options: {
        baseDataReport: BaseDataReport;
        forFabricFilteredRead: boolean;
        payload?: DataReportPayloadIterator;
        waitForAck?: boolean;
        suppressEmptyReport?: boolean;
    }) {
        const {
            baseDataReport,
            forFabricFilteredRead,
            payload,
            waitForAck = true,
            suppressEmptyReport = false,
        } = options;
        const { subscriptionId, suppressResponse, interactionModelRevision } = baseDataReport;

        const dataReport: TypeFromSchema<typeof TlvDataReportForSend> = {
            subscriptionId,
            suppressResponse,
            interactionModelRevision,
            attributeReports: undefined,
            eventReports: undefined,
        };

        if (payload !== undefined) {
            // TODO Add tag compressing once https://github.com/project-chip/connectedhomeip/issues/29359 is solved
            //  (or likely remove it)
            dataReport.moreChunkedMessages = true; // Assume we have multiple chunks, also for size calculation

            /** The empty data report to calculate the size of the message. */
            const emptyDataReportBytes = TlvDataReportForSend.encode(dataReport);

            /** Do we have received all data? In that case only the queue is left if filled. */
            let allDataReceived = false;

            /** Should the queue be sent out first? This defaults to true and is set to false if we try to fill up the message. */
            let processQueueFirst = true;

            /** Helper method to send out the current dataReport and reset the relevant state for the next chunk. */
            const sendAndResetReport = async () => {
                await this.sendDataReportMessage(dataReport, waitForAck);
                // Empty the dataReport data fields for the next chunk and reset the messageSize
                delete dataReport.attributeReports;
                delete dataReport.eventReports;
                messageSize = emptyDataReportBytes.byteLength;
                processQueueFirst = true; // After sending a message we first try to process queue
            };

            /** Current size of the message */
            let messageSize = emptyDataReportBytes.byteLength;

            /** Queue of attribute reports to send */
            const attributeReportsToSend = new Array<{
                /** The attribute report to send */
                attributeReport: AttributeReportPayload;
                /** The encoded attribute report */
                encoded: TlvStream;
                /** The size of the encoded attribute report */
                encodedSize: number;

                /** If the attribute report needs to be sent in the next message. When set no new data are added. */
                needSendNext?: boolean;
            }>();

            /** Queue of event reports to send */
            const eventReportsToSend = new Array<{
                /** The event report to send */
                eventReport: EventReportPayload;

                /** The encoded event report */
                encoded: TlvStream;

                /** The size of the encoded event report */
                encodedSize: number;
            }>();

            while (true) {
                // Decide if entries in the queue are processed first or if we read new data
                if (
                    !allDataReceived &&
                    ((attributeReportsToSend.length === 0 && eventReportsToSend.length === 0) ||
                        (attributeReportsToSend.length <= DATA_REPORT_MAX_QUEUED_ATTRIBUTE_MESSAGES &&
                            !processQueueFirst &&
                            !attributeReportsToSend[0].needSendNext))
                ) {
                    const { done, value } = await payload.next();
                    if (done) {
                        allDataReceived = true;
                        if (attributeReportsToSend.length === 0 && eventReportsToSend.length === 0) {
                            // No more chunks to send and queue is empty, so we are done
                            delete dataReport.moreChunkedMessages;
                            break;
                        } else {
                            // We got all data, so only queue needs to be sent now, so flag all values to be sent next
                            // but leave moreChunkedMessages flag set because we do not know if all queue entries match
                            // into the message
                            for (const attributeReport of attributeReportsToSend) {
                                attributeReport.needSendNext = true;
                            }
                            continue;
                        }
                    }
                    if (value === undefined) {
                        // Should never happen but better handle here
                        continue;
                    }

                    if ("attributeData" in value || "attributeStatus" in value) {
                        // If read value is an attributeReport, encode it and add it to the queue
                        const allowMissingFieldsForNonFabricFilteredRead =
                            !forFabricFilteredRead && value.hasFabricSensitiveData;
                        const encoded = encodeAttributePayload(value, {
                            allowMissingFieldsForNonFabricFilteredRead,
                        });
                        const encodedSize = TlvAny.getEncodedByteLength(encoded);
                        if (attributeReportsToSend.length === 0) {
                            attributeReportsToSend.push({
                                attributeReport: value,
                                encoded,
                                encodedSize,
                            });
                        } else {
                            // Check if the new attribute belongs to the same endpoint and cluster as the first queued attribute
                            // Remove once https://github.com/project-chip/connectedhomeip/issues/37384 is fixed and some time passed
                            const firstQueuedAttributeData = attributeReportsToSend[0].attributeReport.attributeData;
                            if (
                                firstQueuedAttributeData !== undefined &&
                                value.attributeData !== undefined &&
                                firstQueuedAttributeData.path.nodeId === value.attributeData.path.nodeId &&
                                firstQueuedAttributeData.path.endpointId === value.attributeData.path.endpointId &&
                                firstQueuedAttributeData.path.clusterId === value.attributeData.path.clusterId
                            ) {
                                // Prioritize this attribute in queue because we know others are too big for current message
                                attributeReportsToSend.unshift({
                                    attributeReport: value,
                                    encoded,
                                    encodedSize,
                                });
                            } else {
                                // No, we have a cluster change: Queue needs to go out next before we can process this one
                                // SO flag all queued entries to be sent next and add the new one to the end of the queue
                                for (const attributeReport of attributeReportsToSend) {
                                    attributeReport.needSendNext = true;
                                }
                                attributeReportsToSend.push({
                                    attributeReport: value,
                                    encoded,
                                    encodedSize,
                                });
                            }
                        }
                    } else if ("eventData" in value || "eventStatus" in value) {
                        // If read value is an eventReport, encode it and add it to the queue
                        const allowMissingFieldsForNonFabricFilteredRead =
                            !forFabricFilteredRead && value.hasFabricSensitiveData;

                        const encoded = encodeEventPayload(value, { allowMissingFieldsForNonFabricFilteredRead });
                        const encodedSize = TlvAny.getEncodedByteLength(encoded);
                        eventReportsToSend.push({
                            eventReport: value,
                            encoded,
                            encodedSize,
                        });
                    } else {
                        throw new InternalError(`Invalid report type: ${value}`);
                    }
                }

                // If we have attribute data to send, we add them first
                if (attributeReportsToSend.length > 0) {
                    const attributeToSend = attributeReportsToSend.shift();
                    if (attributeToSend === undefined) {
                        continue; // should never happen, but better check
                    }

                    const { attributeReport, encoded, encodedSize, needSendNext } = attributeToSend;

                    /** Number of bytes available in the message. */
                    let availableBytes = this.exchange.maxPayloadSize - messageSize - 3; // 3 bytes for the attributeReports array

                    /** Does the message need to be sent out before we can send this packet? */
                    let sendOutTheMessage = false;
                    if (encodedSize > availableBytes) {
                        // This packet is too big for the current message ...
                        if ((allDataReceived || needSendNext) && canAttributePayloadBeChunked(attributeReport)) {
                            // Attribute is a non-empty array: chunk it and try to get as much as possible into the
                            // initial REPLACE ALL message and add rest to the queue
                            const chunks = chunkAttributePayload(attributeReport);

                            // Get the Array and the first data chunk of the list and pack them together.
                            // If this is already too big, it is more optimal to postpone this list completely to the next message
                            const initialChunk = chunks.shift(); // This is the empty array chunk
                            const firstDataChunk = chunks.shift(); // First data chunk
                            if (initialChunk === undefined || firstDataChunk === undefined) {
                                throw new InternalError(
                                    "Chunked attribute payload is unexpected. This should not happen!",
                                );
                            }
                            initialChunk.attributeData!.payload.push(firstDataChunk.attributeData!.payload);

                            // Let's encode the initial REPLACE-ALL entry including one array entry
                            const allowMissingFieldsForNonFabricFilteredRead =
                                !forFabricFilteredRead && attributeReport.hasFabricSensitiveData;
                            const encodedInitialChunk = encodeAttributePayload(initialChunk, {
                                allowMissingFieldsForNonFabricFilteredRead,
                            });
                            const encodedInitialChunkSize = TlvAny.getEncodedByteLength(encodedInitialChunk);
                            if (availableBytes > encodedInitialChunkSize) {
                                // The initial chunk fits into the message, so lets see how much more we can add
                                availableBytes -= encodedInitialChunkSize;
                                messageSize += encodedInitialChunkSize;
                                while (chunks.length > 0) {
                                    const nextChunk = chunks.shift();
                                    if (nextChunk === undefined) {
                                        throw new InternalError(
                                            "Chunked attribute payload is undefined. This should not happen!",
                                        );
                                    }
                                    const encodedChunkData = encodeAttributePayloadData(nextChunk, {
                                        allowMissingFieldsForNonFabricFilteredRead,
                                    });
                                    const encodedChunkDataSize = TlvAny.getEncodedByteLength(encodedChunkData);
                                    if (encodedChunkDataSize > availableBytes) {
                                        // This chunks does not match anymore, put it and next chunks back to the queue
                                        chunks.unshift(nextChunk);
                                        for (let i = chunks.length - 1; i >= 0; i--) {
                                            const chunk = chunks[i];
                                            const encodedChunk = encodeAttributePayload(chunk, {
                                                allowMissingFieldsForNonFabricFilteredRead,
                                            });
                                            const encodedChunkSize = TlvAny.getEncodedByteLength(encodedChunk);
                                            attributeReportsToSend.unshift({
                                                attributeReport: chunk,
                                                encoded: encodedChunk,
                                                encodedSize: encodedChunkSize,
                                                needSendNext: true,
                                            });
                                        }
                                        if (dataReport.attributeReports === undefined) {
                                            dataReport.attributeReports = [];
                                        }
                                        dataReport.attributeReports.push(
                                            encodeAttributePayload(initialChunk, {
                                                allowMissingFieldsForNonFabricFilteredRead,
                                            }),
                                        );
                                        break;
                                    }
                                    availableBytes -= encodedChunkDataSize;
                                    messageSize += encodedChunkDataSize;
                                    initialChunk.attributeData!.payload.push(nextChunk.attributeData!.payload);
                                }
                                continue;
                            } else if (needSendNext) {
                                // The initial chunk does not fit into the message, but we need to send it next, flag that
                                sendOutTheMessage = true;
                            }
                        } else {
                            // Current attribute is too big for the current message, and we can't/won't chunk it
                            if (needSendNext) {
                                // ... but if we need to send it now, flag that we need to send it next
                                sendOutTheMessage = true;
                            } else {
                                // ... otherwise we start filling up the queue
                                processQueueFirst = false;
                            }
                        }

                        let messageWasSent = false;
                        // If only 40 bytes are left, or we added a chunked array element as prio,
                        // or the queue has reached its maximum size, then we send the message now because it is full
                        if (
                            sendOutTheMessage ||
                            availableBytes < DATA_REPORT_MIN_AVAILABLE_BYTES_BEFORE_SENDING ||
                            (attributeReportsToSend.length > 0 && attributeReportsToSend[0].needSendNext) ||
                            attributeReportsToSend.length >= DATA_REPORT_MAX_QUEUED_ATTRIBUTE_MESSAGES
                        ) {
                            await sendAndResetReport();
                            messageWasSent = true;
                        }
                        if (!messageWasSent) {
                            // We did not send the message, means assumption is that there is more space in the message
                            // So we add the current attribute to the end of the queue
                            attributeReportsToSend.push(attributeToSend);
                            continue;
                        }
                        if (encodedSize > this.exchange.maxPayloadSize - emptyDataReportBytes.byteLength - 3) {
                            // We sent the message but the current attribute is too big for a message alone so needs to
                            // be chunked, so add it to the queue at the beginning
                            attributeReportsToSend.unshift(attributeToSend);
                            continue;
                        }
                    }
                    messageSize += encodedSize;
                    if (dataReport.attributeReports === undefined) {
                        dataReport.attributeReports = [];
                    }
                    dataReport.attributeReports.push(encoded);
                } else if (eventReportsToSend.length > 0) {
                    const eventToSend = eventReportsToSend.shift();
                    if (eventToSend === undefined) {
                        continue;
                    }

                    const { encoded, encodedSize } = eventToSend;
                    if (
                        messageSize + 3 + (dataReport.attributeReports ? 3 : 0) + encodedSize >
                        this.exchange.maxPayloadSize
                    ) {
                        await sendAndResetReport();
                    }
                    messageSize += encodedSize;
                    if (dataReport.eventReports === undefined) {
                        dataReport.eventReports = [];
                    }
                    dataReport.eventReports.push(encoded);
                } else if (allDataReceived) {
                    // We have received all data and queue is empty, so we are done
                    delete dataReport.moreChunkedMessages;
                    break;
                }
            }
        }

        if (!suppressEmptyReport || dataReport.attributeReports?.length || dataReport.eventReports?.length) {
            await this.sendDataReportMessage(dataReport, waitForAck);
        }
    }

    async sendDataReportMessage(dataReport: TypeFromSchema<typeof TlvDataReportForSend>, waitForAck = true) {
        const dataReportToSend = {
            ...dataReport,
            suppressResponse: dataReport.moreChunkedMessages ? false : dataReport.suppressResponse, // always false when moreChunkedMessages is true
        };
        const encodedMessage = TlvDataReportForSend.encode(dataReportToSend);
        if (encodedMessage.byteLength > this.exchange.maxPayloadSize) {
            throw new MatterFlowError(
                `DataReport with ${encodedMessage.byteLength}bytes is too long to fit in a single chunk (${this.exchange.maxPayloadSize}bytes), This should not happen! Data: ${Diagnostic.json(
                    dataReportToSend,
                )}`,
            );
        }

        const logContext = {
            subId: dataReportToSend.subscriptionId,
            interactionFlags: Diagnostic.asFlags({
                empty: !dataReportToSend.attributeReports?.length && !dataReportToSend.eventReports?.length,
                suppressResponse: dataReportToSend.suppressResponse,
                moreChunkedMessages: dataReportToSend.moreChunkedMessages,
            }),
            attr: dataReportToSend.attributeReports?.length,
            ev: dataReportToSend.eventReports?.length,
        };

        if (dataReportToSend.suppressResponse) {
            // We do not expect a response other than a Standalone Ack, so if we receive anything else, we throw an error
            try {
                await this.exchange.send(MessageType.ReportData, encodedMessage, {
                    disableMrpLogic: !waitForAck,
                    logContext,
                });
                this.expectAckOnly();
            } catch (e) {
                UnexpectedMessageError.accept(e);

                const { receivedMessage } = e;
                this.throwIfErrorStatusMessage(receivedMessage);
            }
        } else {
            await this.exchange.send(MessageType.ReportData, encodedMessage, {
                disableMrpLogic: !waitForAck,
                logContext,
            });
            // We wait for a Success Message - when we don't request an Ack only wait 500ms
            await this.waitForSuccess("DataReport", { timeout: waitForAck ? undefined : Millis(500) });
        }
    }

    /**
     * Convert a server interaction report to a DataReport entry
     * TODO remove when anything is migrated completely
     */
    static convertServerInteractionReport(report: ReadResult.Report) {
        switch (report.kind) {
            case "attr-value": {
                const { path, value: payload, version: dataVersion, tlv: schema } = report;
                if (schema === undefined) {
                    throw new InternalError(`Attribute ${path.clusterId}/${path.attributeId} not found`);
                }
                const data: AttributeReportPayload = {
                    attributeData: {
                        path,
                        payload,
                        schema,
                        dataVersion,
                    },
                    hasFabricSensitiveData: true, // With this we disable the validation for missing data in encoding, we trust behavior logic
                };
                return data;
            }
            case "attr-status": {
                const { path, status, clusterStatus } = report;
                const statusReport: AttributeReportPayload = {
                    attributeStatus: {
                        path,
                        status: { status },
                    },
                    hasFabricSensitiveData: false,
                };
                if (clusterStatus !== undefined) {
                    statusReport.attributeStatus!.status.clusterStatus = clusterStatus;
                }
                return statusReport;
            }
            case "event-value": {
                const {
                    path,
                    value: payload,
                    number: eventNumber,
                    priority,
                    timestamp: epochTimestamp,
                    tlv: schema,
                } = report;
                const data: EventReportPayload = {
                    eventData: {
                        path,
                        eventNumber,
                        priority,
                        epochTimestamp,
                        payload,
                        schema,
                    },
                    hasFabricSensitiveData: true, // There are no Fabric sensitive events as of now. If ever added sanitizing needs to be added
                };
                return data;
            }
            case "event-status": {
                const { path, status, clusterStatus } = report;
                const statusReport: EventReportPayload = {
                    eventStatus: {
                        path,
                        status: { status },
                    },
                    hasFabricSensitiveData: false,
                };
                if (clusterStatus !== undefined) {
                    statusReport.eventStatus!.status.clusterStatus = clusterStatus;
                }
                return statusReport;
            }
        }
    }
}
