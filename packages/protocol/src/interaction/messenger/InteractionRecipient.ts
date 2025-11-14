/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "#codec/MessageCodec.js";
import { DataReportPayloadIterator } from "#interaction/AttributeDataEncoder.js";
import { MessageExchange } from "#protocol/MessageExchange.js";
import {
    DataReport,
    InvokeRequest,
    ReadRequest,
    SubscribeRequest,
    TimedRequest,
    WriteRequest,
    WriteResponse,
} from "#types";
import { InteractionServerMessenger } from "./ServerMessenger.js";

export interface InteractionRecipient {
    handleReadRequest(
        exchange: MessageExchange,
        request: ReadRequest,
        message: Message,
    ): Promise<{ dataReport: DataReport; payload?: DataReportPayloadIterator }>;
    handleWriteRequest(exchange: MessageExchange, request: WriteRequest, message: Message): Promise<WriteResponse>;
    handleSubscribeRequest(
        exchange: MessageExchange,
        request: SubscribeRequest,
        messenger: InteractionServerMessenger,
        message: Message,
    ): Promise<void>;
    handleInvokeRequest(
        exchange: MessageExchange,
        request: InvokeRequest,
        messenger: InteractionServerMessenger,
        message: Message,
    ): Promise<void>;
    handleTimedRequest(exchange: MessageExchange, request: TimedRequest, message: Message): void;
}
