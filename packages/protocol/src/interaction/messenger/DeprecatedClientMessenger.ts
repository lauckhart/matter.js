/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, Duration, InternalError, Logger, MatterFlowError, UnexpectedDataError } from "#general";
import { DecodedAttributeReportValue } from "#interaction/AttributeDataDecoder.js";
import { DecodedDataReport } from "#interaction/DecodedDataReport.js";
import { Specification } from "#model";
import { ExchangeProvider } from "#protocol/ExchangeProvider.js";
import { ChannelNotConnectedError } from "#protocol/MessageChannel.js";
import { ExchangeSendOptions, MessageExchange, RetransmissionLimitReachedError } from "#protocol/MessageExchange.js";
import {
    AttributeId,
    ClusterId,
    EndpointNumber,
    InvokeRequest,
    Status,
    TlvAttributeReport,
    TlvInvokeRequest,
    TlvInvokeResponse,
    TlvSchema,
    TlvStatusResponse,
    TlvSubscribeResponse,
    TlvTimedRequest,
    TlvWriteRequest,
    TlvWriteResponse,
    TypeFromSchema,
    WriteRequest,
} from "#types";
import { ClientMessenger } from "./ClientMessenger.js";
import { MessageType } from "./MessageType.js";

const logger = Logger.get("DeprecatedClientMessenger");

/**
 * Interaction client messenger that supports deprecated APIs.
 *
 * @deprecated use {@link ClientMessenger} for new code
 */
export class DeprecatedClientMessenger extends ClientMessenger {
    #exchangeProvider?: ExchangeProvider;

    static async create(exchangeProvider: ExchangeProvider) {
        const exchange = await exchangeProvider.initiateExchange();
        return new this(exchange, exchangeProvider);
    }

    constructor(exchange: MessageExchange, exchangeProvider?: ExchangeProvider) {
        super(exchange);
        this.#exchangeProvider = exchangeProvider;
    }

    /**
     * Reads data report stream and aggregates them into a single report.
     * Additionally, a callback can be provided that is called for each cluster chunk received.
     *
     * @deprecated
     */
    async readAggregateDataReport(
        chunkListener?: (chunk: DecodedAttributeReportValue<any>[]) => Promise<void>,
        expectedSubscriptionIds?: number[],
    ): Promise<DecodedDataReport> {
        let result: DecodedDataReport | undefined = undefined;
        let currentEndpointId: EndpointNumber | undefined = undefined;
        let currentClusterId: ClusterId | undefined = undefined;
        const currentClusterChunk = new Array<DecodedAttributeReportValue<any>>();
        let pendingAttributeReports: TypeFromSchema<typeof TlvAttributeReport>[] | undefined = undefined;

        const handleAttributeReportEntries = (
            attributeReports: TypeFromSchema<typeof TlvAttributeReport>[] | undefined,
            previousPendingAttributeReports: TypeFromSchema<typeof TlvAttributeReport>[] | undefined,
        ) => {
            if (previousPendingAttributeReports?.length) {
                attributeReports = attributeReports ?? [];
                attributeReports.unshift(...previousPendingAttributeReports);
            }

            let lastAttributeDataIndex = -1;
            if (attributeReports?.length) {
                let lastEndpointId: EndpointNumber | undefined = undefined;
                let lastClusterId: ClusterId | undefined = undefined;
                let lastAttributeId: AttributeId | undefined = undefined;
                for (let i = attributeReports.length - 1; i >= 0; i--) {
                    const attributeReport = attributeReports[i];
                    if (attributeReport.attributeData === undefined) {
                        break; // No data report, so nothing more to search for
                    }
                    const {
                        path: { endpointId, clusterId, attributeId },
                    } = attributeReport.attributeData;
                    if (lastEndpointId === undefined && lastClusterId === undefined && lastAttributeId === undefined) {
                        // Remember path of the last attribute data entry and check if previous entries match
                        lastEndpointId = endpointId;
                        lastClusterId = clusterId;
                        lastAttributeId = attributeId;
                    }
                    if (
                        endpointId === lastEndpointId &&
                        clusterId === lastClusterId &&
                        attributeId === lastAttributeId
                    ) {
                        lastAttributeDataIndex = i;
                        continue;
                    }
                    break; // We found an attribute that does not match the last one, so we are done
                }

                if (lastAttributeDataIndex > 0) {
                    return attributeReports.splice(lastAttributeDataIndex);
                }
            }
        };

        const processDecodedReport = async (
            decodedReport: DecodedDataReport,
            result: DecodedDataReport | undefined,
        ) => {
            if (!result) {
                result = decodedReport;
            } else {
                if (!result.attributeReports) {
                    result.attributeReports = decodedReport.attributeReports;
                } else {
                    result.attributeReports.push(...decodedReport.attributeReports);
                }
                if (Array.isArray(decodedReport.eventReports)) {
                    if (!result.eventReports) {
                        result.eventReports = decodedReport.eventReports;
                    } else {
                        result.eventReports.push(...decodedReport.eventReports);
                    }
                }
            }

            if (chunkListener !== undefined && decodedReport.attributeReports) {
                for (const data of decodedReport.attributeReports) {
                    const {
                        path: { endpointId, clusterId },
                    } = data;
                    if (currentEndpointId !== endpointId || currentClusterId !== clusterId) {
                        // We switched the cluster, so we need to send the current chunk first
                        if (currentClusterChunk.length > 0) {
                            await chunkListener(currentClusterChunk);
                            currentClusterChunk.length = 0;
                        }
                        currentEndpointId = endpointId;
                        currentClusterId = clusterId;
                    }
                    currentClusterChunk.push(data);
                }
            }
            return result;
        };

        for await (const report of this.receiveDataReports()) {
            if (expectedSubscriptionIds !== undefined) {
                if (report.subscriptionId === undefined || !expectedSubscriptionIds.includes(report.subscriptionId)) {
                    await this.sendStatus(Status.InvalidSubscription, {
                        multipleMessageInteraction: true,
                        logContext: {
                            subId: report.subscriptionId,
                        },
                    });
                    throw new UnexpectedDataError(
                        report.subscriptionId === undefined
                            ? "Invalid Data report without Subscription ID"
                            : `Invalid Data report with unexpected subscription ID ${report.subscriptionId}`,
                    );
                }
            }

            if (result?.subscriptionId !== undefined && report.subscriptionId !== result.subscriptionId) {
                throw new UnexpectedDataError(`Invalid subscription ID ${report.subscriptionId} received`);
            }

            report.attributeReports = report.attributeReports ?? [];
            pendingAttributeReports = handleAttributeReportEntries(report.attributeReports, pendingAttributeReports);

            result = await processDecodedReport(DecodedDataReport(report), result);
        }

        if (pendingAttributeReports?.length && result !== undefined) {
            result = await processDecodedReport(
                DecodedDataReport({
                    interactionModelRevision: result.interactionModelRevision,
                    attributeReports: pendingAttributeReports,
                }),
                result,
            );
        }

        if (chunkListener !== undefined && currentClusterChunk.length > 0) {
            await chunkListener(currentClusterChunk);
            currentClusterChunk.length = 0;
        }

        if (result === undefined) {
            // readDataReports should have thrown
            throw new InternalError("No data reports loaded during read");
        }

        return result;
    }

    /**
     * Implements a send method with an automatic reconnection mechanism
     */
    override async send<T extends TlvSchema<unknown>>(
        messageType: number,
        tlv: T,
        payload: TypeFromSchema<T>,
        options?: ExchangeSendOptions,
    ) {
        try {
            if (this.exchange.channel.closed) {
                throw new ChannelNotConnectedError("The exchange channel is closed. Please connect the device first.");
            }

            return await super.send(messageType, tlv, payload, options);
        } catch (error) {
            if (
                this.#exchangeProvider?.supportsReconnect &&
                (error instanceof RetransmissionLimitReachedError || error instanceof ChannelNotConnectedError) &&
                !options?.multipleMessageInteraction
            ) {
                // When retransmission failed (most likely due to a lost connection or invalid session),
                // try to reconnect if possible and resend the message once
                logger.debug(
                    `${error instanceof RetransmissionLimitReachedError ? "Retransmission limit reached" : "Channel not connected"}, trying to reconnect and resend the message.`,
                );
                await this.exchange.close();
                if (await this.#exchangeProvider.reconnectChannel()) {
                    this.exchange = await this.#exchangeProvider.initiateExchange();
                    return await super.send(messageType, tlv, payload, options);
                }
            } else {
                throw error;
            }
        }
    }

    /**
     * @deprecated
     */
    async readAggregateSubscribeResponse(chunkListener?: (chunk: DecodedAttributeReportValue<any>[]) => Promise<void>) {
        const report = await this.readAggregateDataReport(chunkListener);
        const { subscriptionId } = report;

        if (subscriptionId === undefined) {
            throw new UnexpectedDataError(`Subscription ID not provided in report`);
        }

        const subscribeResponseMessage = await this.nextMessage(MessageType.SubscribeResponse);
        const subscribeResponse = TlvSubscribeResponse.decode(subscribeResponseMessage.payload);

        if (subscribeResponse.subscriptionId !== subscriptionId) {
            throw new MatterFlowError(
                `Received subscription ID ${subscribeResponse.subscriptionId} instead of ${subscriptionId}`,
            );
        }

        return {
            subscribeResponse,
            report,
        };
    }

    /**
     * @deprecated
     */
    async sendInvokeCommand(invokeRequest: InvokeRequest, expectedProcessingTime?: Duration) {
        if (invokeRequest.suppressResponse) {
            await this.#requestWithSuppressedResponse(
                MessageType.InvokeRequest,
                TlvInvokeRequest,
                invokeRequest,
                MessageType.InvokeResponse,
                expectedProcessingTime,
            );
        } else {
            return await this.#request(
                MessageType.InvokeRequest,
                TlvInvokeRequest,
                MessageType.InvokeResponse,
                TlvInvokeResponse,
                invokeRequest,
                expectedProcessingTime,
            );
        }
    }

    /**
     * @deprecated
     */
    async sendWriteCommand(writeRequest: WriteRequest) {
        if (writeRequest.suppressResponse) {
            await this.#requestWithSuppressedResponse(
                MessageType.WriteRequest,
                TlvWriteRequest,
                writeRequest,
                MessageType.WriteResponse,
            );
        } else {
            return await this.#request(
                MessageType.WriteRequest,
                TlvWriteRequest,
                MessageType.WriteResponse,
                TlvWriteResponse,
                writeRequest,
            );
        }
    }

    /**
     * @deprecated
     */
    sendTimedRequest(timeout: Duration) {
        return this.#request(MessageType.TimedRequest, TlvTimedRequest, MessageType.StatusResponse, TlvStatusResponse, {
            timeout,
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
        });
    }

    async #requestWithSuppressedResponse<RequestT>(
        requestMessageType: number,
        requestSchema: TlvSchema<RequestT>,
        request: RequestT,
        acceptableBuggySdkResponseMessageType: MessageType,
        expectedProcessingTime?: Duration,
    ): Promise<void> {
        await this.send(requestMessageType, requestSchema, request, {
            expectedProcessingTime: expectedProcessingTime,
            logContext: {
                invokeFlags: Diagnostic.asFlags({
                    suppressResponse: true,
                }),
            },
        });
        this.expectAckOnly(acceptableBuggySdkResponseMessageType);
    }

    async #request<RequestT, ResponseT>(
        requestMessageType: number,
        requestSchema: TlvSchema<RequestT>,
        responseMessageType: number,
        responseSchema: TlvSchema<ResponseT>,
        request: RequestT,
        expectedProcessingTime?: Duration,
    ): Promise<ResponseT> {
        await this.send(requestMessageType, requestSchema, request, {
            expectedProcessingTime,
        });
        return this.receive(responseMessageType, responseSchema, { expectedProcessingTime });
    }
}
