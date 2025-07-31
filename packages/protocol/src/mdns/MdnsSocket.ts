/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BasicObservable,
    Diagnostic,
    DnsCodec,
    DnsMessage,
    DnsMessagePartiallyPreEncoded,
    DnsMessageType,
    ImplementationError,
    Logger,
    MatterAggregateError,
    MAX_MDNS_MESSAGE_SIZE,
    MaybePromise,
    Network,
    UdpMulticastServer,
} from "#general";
import { MDNS_BROADCAST_IPV4, MDNS_BROADCAST_IPV6, MDNS_BROADCAST_PORT } from "./MdnsConsts.js";

const logger = Logger.get("MdnsListener");

/**
 * Manages the UDP socket for {@link MdnsServer} and {@link MdnsClient}.
 */
export class MdnsSocket {
    #socket: UdpMulticastServer;
    #handlers?: Set<PromiseLike<void>>;
    #isClosed = false;
    #receipt = new BasicObservable<[message: MdnsSocket.Message]>(
        error => logger.error("Unhandled error in MDNS listener", error),
        true,
    );

    static async create(network: Network, options?: { enableIpv4?: boolean; netInterface?: string }) {
        const { enableIpv4 = true, netInterface } = options ?? {};
        const socket = new MdnsSocket(
            await UdpMulticastServer.create({
                network,
                netInterface,
                broadcastAddressIpv4: enableIpv4 ? MDNS_BROADCAST_IPV4 : undefined,
                broadcastAddressIpv6: MDNS_BROADCAST_IPV6,
                listeningPort: MDNS_BROADCAST_PORT,
            }),
        );
        return socket;
    }

    constructor(socket: UdpMulticastServer) {
        this.#socket = socket;
        socket.onMessage(this.#handleMessage.bind(this));
    }

    get network() {
        return this.#socket.network;
    }

    get supportsIpv4() {
        return this.#socket.supportsIpv4;
    }

    get netInterface() {
        return this.#socket.netInterface;
    }

    get receipt() {
        return this.#receipt;
    }

    async send(message: Partial<DnsMessage>, intf?: string, unicastDest?: string) {
        let intermediateMessageType: DnsMessageType, finalMessageType: DnsMessageType;
        switch (message.messageType) {
            case DnsMessageType.Query:
            case DnsMessageType.TruncatedQuery:
                intermediateMessageType = DnsMessageType.TruncatedQuery;
                finalMessageType = DnsMessageType.Query;
                break;

            case DnsMessageType.Response:
            case DnsMessageType.TruncatedResponse:
                intermediateMessageType = DnsMessageType.TruncatedResponse;
                finalMessageType = DnsMessageType.Response;
                break;

            default:
                throw new ImplementationError(`Invalid DNS message type ${message.messageType}`);
        }

        const chunk: DnsMessagePartiallyPreEncoded = {
            transactionId: 0,
            queries: [],
            authorities: [],

            ...message,

            messageType: intermediateMessageType,

            answers: [],
            additionalRecords: [],
        };

        // Note - for size calculations we assume queries are relatively small.  We only split answers across messages
        let encodedChunkWithoutAnswers = DnsCodec.encode(chunk);
        let currentMessageSize = encodedChunkWithoutAnswers.length;

        // Add answers, splitting message as necessary
        const answers = message.answers ?? [];
        while (true) {
            if (answers.length > 0) {
                const nextAnswer = answers.shift();
                if (nextAnswer === undefined) {
                    break;
                }

                const nextAnswerEncoded = DnsCodec.encodeRecord(nextAnswer);
                currentMessageSize += nextAnswerEncoded.length; // Add additional record as long as size is ok

                if (currentMessageSize > MAX_MDNS_MESSAGE_SIZE) {
                    if (chunk.answers.length === 0) {
                        // The first answer is already too big, log at least a warning
                        logger.warn(
                            `MDNS message with ${Diagnostic.json(
                                chunk.queries,
                            )} is too big to fit into a single MDNS message. Send anyway, but please report!`,
                        );
                    }

                    // New answer do not fit anymore, send out the message
                    await this.#send(chunk, intf, unicastDest);

                    // Reset the message, length counter and included answers to count for next message
                    if (chunk.queries.length) {
                        chunk.queries.length = 0;
                        encodedChunkWithoutAnswers = DnsCodec.encode(chunk);
                    }
                    chunk.answers.length = 0;
                    currentMessageSize = encodedChunkWithoutAnswers.length + nextAnswerEncoded.length;
                }
                chunk.answers.push(nextAnswerEncoded);
            } else {
                break;
            }
        }

        // Add "additional records"...  We include these but only if they fit
        const additionalRecords = message.additionalRecords ?? [];
        for (const additionalRecord of additionalRecords) {
            const additionalRecordEncoded = DnsCodec.encodeRecord(additionalRecord);
            currentMessageSize += additionalRecordEncoded.length;
            if (currentMessageSize > MAX_MDNS_MESSAGE_SIZE) {
                break;
            }
            chunk.additionalRecords.push(additionalRecordEncoded);
        }

        chunk.messageType = finalMessageType;
        await this.#send(chunk, intf, unicastDest);
    }

    async #send(message: DnsMessagePartiallyPreEncoded, intf?: string, unicastDest?: string) {
        await this.#socket.send(DnsCodec.encode(message), intf, unicastDest);
    }

    async close() {
        this.#isClosed = true;
        await this.#socket.close();
        if (this.#handlers) {
            await MatterAggregateError.allSettled(this.#handlers);
        }
    }

    #handleMessage(bytes: Uint8Array, sourceIp: string, sourceIntf: string) {
        // Ignore if closed
        if (this.#isClosed) {
            return;
        }

        // Skip unsupported source interface (not sure why this would happen, copied from old code)
        if (sourceIntf === undefined) {
            return;
        }

        // Parse
        const parsed = DnsCodec.decode(bytes);

        // Skip unparseable
        if (parsed === undefined) {
            return;
        }

        let promise = this.#receipt.emit({
            ...parsed,
            sourceIp,
            sourceIntf,
        }) as MaybePromise;

        if (MaybePromise.is(promise)) {
            if (this.#handlers === undefined) {
                this.#handlers = new Set();
            }
            promise = Promise.resolve(promise).finally(() => this.#handlers?.delete(promise as PromiseLike<void>));
        }
    }
}

export namespace MdnsSocket {
    export interface Message extends DnsMessage {
        sourceIp: string;
        sourceIntf: string;
    }
}
