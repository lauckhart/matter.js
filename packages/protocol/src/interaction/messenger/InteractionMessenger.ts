/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, Duration, UnexpectedDataError } from "#general";
import { Specification } from "#model";
import { ReceivedStatusResponseError, StatusCode, TlvSchema, TlvStatusResponse, TypeFromSchema } from "#types";
import { Message } from "../../codec/MessageCodec.js";
import { ExchangeSendOptions, MessageExchange, UnexpectedMessageError } from "../../protocol/MessageExchange.js";
import { MessageType } from "./MessageType.js";

/**
 * Maximum number of messages that can be queued for a DataReport because they were not fitting into
 * the current Report. If we reach this number we send them out forced.
 */
export const DATA_REPORT_MAX_QUEUED_ATTRIBUTE_MESSAGES = 20;

/**
 * An empty DataReport with all fields is roughly 23 bytes without data content.
 * So as soon as available bytes are less than 40 we should send the message. This value is the result
 * of some manual tests with usual device types
 */
export const DATA_REPORT_MIN_AVAILABLE_BYTES_BEFORE_SENDING = 40;

export class InteractionMessenger {
    #exchange: MessageExchange;

    constructor(exchange: MessageExchange) {
        this.#exchange = exchange;
    }

    get exchange() {
        return this.#exchange;
    }

    protected set exchange(value: MessageExchange) {
        this.#exchange = value;
    }

    send<T extends TlvSchema<unknown>>(
        messageType: number,
        tlv: T,
        payload: TypeFromSchema<T>,
        options?: ExchangeSendOptions,
    ) {
        return this.exchange.send(messageType, tlv.encode(payload), options);
    }

    async receive<T extends TlvSchema<unknown>>(
        messageType: number,
        tlv: T,
        options?: InteractionMessenger.ReceiveOptions,
    ) {
        const responseMessage = await this.nextMessage(
            messageType,
            options,
            MessageType[messageType] ?? `Response-${Diagnostic.hex(messageType)}`,
        );
        return tlv.decode(responseMessage.payload) as TypeFromSchema<T>;
    }

    sendStatus(status: StatusCode, options?: ExchangeSendOptions) {
        return this.send(
            MessageType.StatusResponse,
            TlvStatusResponse,
            { status, interactionModelRevision: Specification.INTERACTION_MODEL_REVISION },
            {
                ...options,
                logContext: {
                    for: options?.logContext?.for ? `I/Status-${options?.logContext?.for}` : undefined,
                    status: `${StatusCode[status] ?? "unknown"}(${Diagnostic.hex(status)})`,
                    ...options?.logContext,
                },
            },
        );
    }

    async waitForSuccess(expectedMessageInfo: string, options?: InteractionMessenger.ReceiveOptions) {
        // If the status is not Success, this would throw an Error.
        await this.nextMessage(MessageType.StatusResponse, options, `Success-${expectedMessageInfo}`);
    }

    async nextMessage(
        expectedMessageType: number,
        options?: InteractionMessenger.ReceiveOptions,
        expectedMessageInfo?: string,
    ) {
        return this.#nextMessage(expectedMessageType, options, expectedMessageInfo);
    }

    async anyNextMessage(expectedMessageInfo: string, options?: InteractionMessenger.ReceiveOptions) {
        return this.#nextMessage(undefined, options, expectedMessageInfo);
    }

    expectAckOnly(acceptableBuggySdkResponseMessageType?: MessageType) {
        // If we only expect an Ack without data but got data, throw an error
        const unexpectedMessage = this.#exchange.nextMessageIfReady();
        if (unexpectedMessage) {
            if (unexpectedMessage.payloadHeader.messageType === acceptableBuggySdkResponseMessageType) {
                // Some versions of CHIP will incorrectly return a response when suppressed; ignore this
                return;
            }

            throw new UnexpectedMessageError("Expected ack only", unexpectedMessage);
        }
    }

    async #nextMessage(
        expectedMessageType?: number,
        options?: InteractionMessenger.ReceiveOptions,
        expectedMessageInfo?: string,
    ) {
        const { expectedProcessingTime, timeout } = options ?? {};
        const message = await this.exchange.nextMessage({ expectedProcessingTime, timeout });
        const messageType = message.payloadHeader.messageType;
        if (expectedMessageType !== undefined && expectedMessageInfo === undefined) {
            expectedMessageInfo = MessageType[expectedMessageType];
        }
        this.throwIfErrorStatusMessage(message, expectedMessageInfo);
        if (expectedMessageType !== undefined && messageType !== expectedMessageType) {
            throw new UnexpectedDataError(
                `Received unexpected message for ${expectedMessageInfo} type: ${messageType}, expected: ${expectedMessageType}`,
            );
        }
        return message;
    }

    async close() {
        await this.exchange.close();
    }

    protected throwIfErrorStatusMessage(message: Message, logHint?: string) {
        const {
            payloadHeader: { messageType },
            payload,
        } = message;

        if (messageType !== MessageType.StatusResponse) return;
        const { status } = TlvStatusResponse.decode(payload);
        if (status !== StatusCode.Success)
            throw new ReceivedStatusResponseError(
                `Received error status: ${status}${logHint ? ` (${logHint})` : ""}`,
                status,
            );
    }

    get session() {
        return this.exchange.session;
    }
}

namespace InteractionMessenger {
    export interface ReceiveOptions {
        expectedProcessingTime?: Duration;
        timeout?: Duration;
    }
}
