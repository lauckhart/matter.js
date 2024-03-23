/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DecodedMessage, DecodedPacket, Message, Packet } from "../codec/MessageCodec.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { MessageCounter } from "../protocol/MessageCounter.js";
import { MessageReceptionState } from "../protocol/MessageReceptionState.js";
import { Time } from "../time/Time.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { ByteArray } from "../util/ByteArray.js";
import { TlvSessionParameters } from "./pase/PaseMessages.js";

/**
 * The maximum number of transmission attempts for a given reliable message. The sender MAY choose this value as it
 * sees fit.
 */
export const MRP_MAX_TRANSMISSIONS = 5;

export interface SessionParameterOptions extends TypeFromSchema<typeof TlvSessionParameters> {}

export interface SessionParameters extends Required<SessionParameterOptions> {}

export const DEFAULT_SESSION_PARAMETERS: SessionParameters = {
    activeIntervalMs: 500,
    idleIntervalMs: 300,
    activeThresholdMs: 4000,
};

export const MAX_SESSION_PARAMETERS: SessionParameters = {
    activeIntervalMs: 60 * 60 * 1000,
    idleIntervalMs: 60 * 60 * 1000,
    activeThresholdMs: 65535,
};

export abstract class Session<T> {
    abstract get name(): string;
    abstract get closingAfterExchangeFinished(): boolean;
    timestamp = Time.nowMs();
    activeTimestamp = 0;
    readonly sessionParameters: SessionParameters;
    protected readonly closeCallback: () => Promise<void>;
    protected readonly messageCounter: MessageCounter;
    protected readonly messageReceptionState: MessageReceptionState;

    constructor(args: {
        messageCounter: MessageCounter;
        messageReceptionState: MessageReceptionState;
        closeCallback: () => Promise<void>;
        sessionParameters?: SessionParameterOptions;
        setActiveTimestamp: boolean;
    }) {
        const { messageCounter, messageReceptionState, closeCallback, setActiveTimestamp } = args;
        this.messageCounter = messageCounter;
        this.messageReceptionState = messageReceptionState;
        this.closeCallback = closeCallback;

        const sessionParameters = { ...DEFAULT_SESSION_PARAMETERS, ...args.sessionParameters };
        for (const name of Object.keys(sessionParameters) as (keyof SessionParameters)[]) {
            if (sessionParameters[name] > MAX_SESSION_PARAMETERS[name]) {
                sessionParameters[name] = MAX_SESSION_PARAMETERS[name];
            }
        }
        this.sessionParameters = sessionParameters;

        if (setActiveTimestamp) {
            this.activeTimestamp = this.timestamp;
        }
    }

    notifyActivity(messageReceived: boolean) {
        this.timestamp = Time.nowMs();
        if (messageReceived) {
            // only update active timestamp if we received a message
            this.activeTimestamp = this.timestamp;
        }
    }

    isPeerActive(): boolean {
        return Time.nowMs() - this.activeTimestamp < this.sessionParameters.activeThresholdMs;
    }

    getIncrementedMessageCounter() {
        return this.messageCounter.getIncrementedCounter();
    }

    updateMessageCounter(messageCounter: number, _sourceNodeId?: NodeId) {
        this.messageReceptionState.updateMessageCounter(messageCounter);
    }

    abstract isSecure: boolean;
    abstract isPase: boolean;
    abstract context: T;
    abstract id: number;
    abstract peerSessionId: number;
    abstract nodeId: NodeId | undefined;
    abstract peerNodeId: NodeId | undefined;
    abstract associatedFabric: Fabric;

    abstract decode(packet: DecodedPacket, aad?: ByteArray): DecodedMessage;
    abstract encode(message: Message): Packet;
    abstract end(sendClose: boolean): Promise<void>;
    abstract destroy(sendClose?: boolean, closeAfterExchangeFinished?: boolean): Promise<void>;
}
