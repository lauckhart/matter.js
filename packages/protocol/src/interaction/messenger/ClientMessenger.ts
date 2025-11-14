/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, Duration, Logger, MatterFlowError } from "#general";
import { Specification } from "#model";
import {
    DataReport,
    InvokeRequest,
    ReadRequest,
    ReceivedStatusResponseError,
    Status,
    SubscribeRequest,
    TlvDataReport,
    TlvDataVersionFilter,
    TlvInvokeRequest,
    TlvInvokeResponse,
    TlvReadRequest,
    TlvSchema,
    TlvStatusResponse,
    TlvSubscribeRequest,
    TlvTimedRequest,
    TlvWriteRequest,
    TlvWriteResponse,
    TypeFromSchema,
    WriteRequest,
} from "#types";
import { InteractionMessenger } from "./InteractionMessenger.js";
import { MessageType } from "./MessageType.js";

export const logger = Logger.get("ClientMessenger");

/**
 * Message processor for the client side of the Matter protocol.
 */
export class ClientMessenger extends InteractionMessenger {
    /**
     * Wait for an inbound message.
     *
     * Throws if the next message on the exchange is not the expected type.
     */
    async waitFor(expectedMessageInfo: string, messageType: number, timeout?: Duration) {
        const message = await this.anyNextMessage(expectedMessageInfo, { timeout });
        const {
            payloadHeader: { messageType: receivedMessageType },
        } = message;
        if (receivedMessageType !== messageType) {
            if (receivedMessageType === MessageType.StatusResponse) {
                const statusCode = TlvStatusResponse.decode(message.payload).status;
                throw new ReceivedStatusResponseError(`Received status response ${statusCode}`, statusCode);
            }
            throw new MatterFlowError(
                `Received unexpected message type ${receivedMessageType.toString(16)}. Expected ${messageType.toString(
                    16,
                )}`,
            );
        }
        return message;
    }

    /**
     * Send a read request.
     */
    async requestRead(readRequest: ReadRequest) {
        await this.send(MessageType.ReadRequest, TlvReadRequest, readRequest);
    }

    /**
     * Send a subscribe request.
     */
    async requestSubscribe(subscribeRequest: SubscribeRequest) {
        const request = this.#encodeReadRequest(TlvSubscribeRequest, subscribeRequest);
        await this.exchange.send(MessageType.SubscribeRequest, request);
    }

    /**
     * Read data reports.
     *
     * Data reports payloads are decoded but list attributes may be split across messages; these will require reassembly.
     */
    async *receiveDataReports() {
        while (true) {
            const report = await this.#readDataReport();

            yield report;

            if (report.moreChunkedMessages) {
                await this.sendStatus(Status.Success, {
                    multipleMessageInteraction: true,
                    logContext: this.#logContextOf(report),
                });
            } else if (!report.suppressResponse) {
                // We received the last message and need to send a final success, but we do not need to wait for it and
                // also don't care if it fails
                this.sendStatus(Status.Success, {
                    multipleMessageInteraction: true,
                    logContext: this.#logContextOf(report),
                }).catch(error => logger.info("Error sending success after final data report chunk", error));
            }

            if (!report.moreChunkedMessages) {
                break;
            }
        }
    }

    /**
     * Send a write request.
     */
    async requestWrite(writeRequest: WriteRequest) {
        await this.send(MessageType.WriteRequest, TlvWriteRequest, writeRequest);
    }

    /**
     * Receive a write response.
     */
    async receiveWriteResponse() {
        await this.receive(MessageType.WriteResponse, TlvWriteResponse);
    }

    /**
     * Send an invoke request.
     */
    async requestInvoke(invokeRequest: InvokeRequest) {
        await this.send(MessageType.InvokeRequest, TlvInvokeRequest, invokeRequest);
    }

    /**
     * Receive an invoke response.
     */
    async receiveInvokeResponse() {
        await this.receive(MessageType.InvokeResponse, TlvInvokeResponse);
    }

    /**
     * Initiate a timed interaction.
     */
    async requestTimed(timeout: Duration) {
        await this.send(MessageType.TimedRequest, TlvTimedRequest, {
            timeout,
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
        });
    }

    #encodeReadRequest<T extends TlvSchema<any>>(schema: T, request: TypeFromSchema<T>) {
        const encoded = schema.encode(request);
        if (encoded.byteLength <= this.exchange.maxPayloadSize) {
            return encoded;
        }

        const originalDataVersionFilters = [...(request.dataVersionFilters ?? [])];

        const requestWithoutDataVersionFilters = schema.encode({
            ...request,
            dataVersionFilters: [],
        });
        if (requestWithoutDataVersionFilters.byteLength > this.exchange.maxPayloadSize) {
            throw new MatterFlowError(
                `Request is too long to fit in a single chunk, This should not happen! Data: ${Diagnostic.json(request)}`,
            );
        }

        return schema.encode({
            ...request,
            dataVersionFilters: this.#shortenDataVersionFilters(
                originalDataVersionFilters,
                this.exchange.maxPayloadSize - requestWithoutDataVersionFilters.byteLength,
            ),
        });
    }

    #shortenDataVersionFilters(
        originalDataVersionFilters: TypeFromSchema<typeof TlvDataVersionFilter>[],
        availableBytes: number,
    ) {
        const dataVersionFilters = new Array<TypeFromSchema<typeof TlvDataVersionFilter>>();

        while (availableBytes > 0 && originalDataVersionFilters.length > 0) {
            const dataVersionFilter = originalDataVersionFilters.shift();
            if (dataVersionFilter === undefined) {
                break;
            }
            const encodedDataVersionFilter = TlvDataVersionFilter.encode(dataVersionFilter);
            const encodedDataVersionFilterLength = encodedDataVersionFilter.byteLength;
            if (encodedDataVersionFilterLength > availableBytes) {
                originalDataVersionFilters.unshift(dataVersionFilter);
                break;
            }
            dataVersionFilters.push(dataVersionFilter);
            availableBytes -= encodedDataVersionFilterLength;
        }
        logger.debug(
            `Removed ${originalDataVersionFilters.length} DataVersionFilters from Request to fit into a single message`,
        );

        return dataVersionFilters;
    }

    async #readDataReport() {
        const dataReportMessage = await this.waitFor("DataReport", MessageType.ReportData);
        return TlvDataReport.decode(dataReportMessage.payload);
    }

    #logContextOf(report: DataReport) {
        return {
            subId: report.subscriptionId,
            dataReportFlags: Diagnostic.asFlags({
                empty: !report.attributeReports?.length && !report.eventReports?.length,
                suppressResponse: report.suppressResponse,
                moreChunkedMessages: report.moreChunkedMessages,
            }),
            attr: report.attributeReports?.length,
            ev: report.eventReports?.length,
        };
    }
}
