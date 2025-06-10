/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Interactable, InteractionSession } from "#action/Interactable.js";
import { Invoke } from "#action/request/Invoke.js";
import { Read } from "#action/request/Read.js";
import { Subscribe } from "#action/request/Subscribe.js";
import { Write } from "#action/request/Write.js";
import { InvokeResult } from "#action/response/InvokeResult.js";
import { ReadResult } from "#action/response/ReadResult.js";
import { SubscribeResult } from "#action/response/SubscribeResult.js";
import { WriteResult } from "#action/response/WriteResult.js";
import { BasicSet, Environment, Environmental, ImplementationError, PromiseQueue } from "#general";
import { DecodedDataReport } from "#interaction/DecodedDataReport.js";
import { InteractionClientMessenger, MessageType } from "#interaction/InteractionMessenger.js";
import { SubscriptionClient } from "#interaction/SubscriptionClient.js";
import { InteractionQueue } from "#peer/InteractionQueue.js";
import { ExchangeProvider } from "#protocol/ExchangeProvider.js";
import { Status, TlvAny, TlvSubscribeResponse } from "#types";

export interface ClientInteractionContext {
    exchanges: ExchangeProvider;
    subscriptions: SubscriptionClient;
    queue: PromiseQueue;
}

export const DEFAULT_MIN_INTERVAL_FLOOR_SECONDS = 1;

/**
 * Client-side implementation of the Matter protocol.
 */
export class ClientInteraction<SessionT extends InteractionSession = InteractionSession>
    implements Interactable<SessionT>
{
    readonly #exchanges: ExchangeProvider;
    readonly #subscriptions: SubscriptionClient;
    readonly #queue?: PromiseQueue;
    readonly #interactions = new BasicSet<Read | Write | Invoke | Subscribe>();
    #closed = false;

    constructor(context: ClientInteractionContext) {
        this.#exchanges = context.exchanges;
        this.#subscriptions = context.subscriptions;
        this.#queue = context.queue;
    }

    async close() {
        this.#closed = true;

        while (this.#interactions.size) {
            await this.#interactions.deleted;
        }
    }

    get subscriptions() {
        return this.#subscriptions;
    }

    get queue() {
        return this.#queue;
    }

    static [Environmental.create](env: Environment) {
        const instance = new ClientInteraction({
            exchanges: env.get(ExchangeProvider),
            subscriptions: env.get(SubscriptionClient),
            queue: env.get(InteractionQueue),
        });
        env.set(ClientInteraction, instance);
        return instance;
    }

    async *read(request: Read, _session?: SessionT): ReadResult {
        try {
            this.#begin(request);
            const messenger = await InteractionClientMessenger.create(this.#exchanges);

            await messenger.sendReadRequest(request);

            yield* this.#readDataReports(messenger);
        } finally {
            this.#end(request);
        }
    }

    async write<T extends Write>(request: T, _session?: SessionT): WriteResult<T> {
        try {
            this.#begin(request);
            const messenger = await InteractionClientMessenger.create(this.#exchanges);
            const response = await messenger.sendWriteCommand(request);
            if (request.suppressResponse) {
                return undefined as Awaited<WriteResult<T>>;
            }
            if (!response || !response.writeResponses?.length) {
                return new Array<WriteResult.AttributeStatus>() as Awaited<WriteResult<T>>;
            } else {
                return response.writeResponses.map(
                    ({
                        path: { nodeId, endpointId, clusterId, attributeId, listIndex },
                        status: { status, clusterStatus },
                    }) => ({
                        kind: "attr-status",
                        path: {
                            nodeId,
                            endpointId: endpointId!,
                            clusterId: clusterId!,
                            attributeId: attributeId!,
                            listIndex,
                        },
                        status,
                        clusterStatus,
                    }),
                ) as Awaited<WriteResult<T>>;
            }
        } finally {
            this.#end(request);
        }
    }

    async *invoke(request: Invoke, _session?: SessionT): InvokeResult {
        try {
            this.#begin(request);
            const messenger = await InteractionClientMessenger.create(this.#exchanges);
            const result = await messenger.sendInvokeCommand(request);
            if (!request.suppressResponse) {
                if (result && result.invokeResponses?.length) {
                    const chunk: InvokeResult.Chunk = result.invokeResponses
                        .map(response => {
                            if (response.command !== undefined) {
                                const {
                                    commandPath: { endpointId, clusterId, commandId },
                                    commandRef,
                                    commandFields,
                                } = response.command;
                                const res: InvokeResult.CommandResponse = {
                                    kind: "cmd-response",
                                    path: {
                                        endpointId: endpointId!,
                                        clusterId: clusterId,
                                        commandId: commandId,
                                    },
                                    commandRef,
                                    data: commandFields!, // TODO add decoding
                                };
                                return res;
                            } else if (response.status !== undefined) {
                                const {
                                    commandPath: { endpointId, clusterId, commandId },
                                    commandRef,
                                    status: { status, clusterStatus },
                                } = response.status;
                                const res: InvokeResult.CommandStatus = {
                                    kind: "cmd-status",
                                    path: {
                                        endpointId: endpointId!,
                                        clusterId: clusterId,
                                        commandId: commandId,
                                    },
                                    commandRef,
                                    status,
                                    clusterStatus,
                                };
                                return res;
                            } else {
                                // Should not happen but if we ignore the response?
                                return undefined;
                            }
                        })
                        .filter(r => r !== undefined);
                    yield chunk;
                } else {
                    yield [];
                }
            }
        } finally {
            this.#end(request);
        }
    }

    async *subscribe(request: Subscribe, _session?: SessionT): SubscribeResult {
        try {
            this.#begin(request);

            const messenger = await InteractionClientMessenger.create(this.#exchanges);

            await messenger.sendSubscribeRequest({
                ...request,
                minIntervalFloorSeconds: DEFAULT_MIN_INTERVAL_FLOOR_SECONDS,
                maxIntervalCeilingSeconds: DEFAULT_MIN_INTERVAL_FLOOR_SECONDS,
            });

            yield* this.#readDataReports(messenger);

            const subscribeResponseMessage = await messenger.nextMessage(MessageType.SubscribeResponse);
            const subscribeResponse = TlvSubscribeResponse.decode(subscribeResponseMessage.payload);
            yield subscribeResponse;
        } finally {
            this.#end(request);
        }
    }

    async *#readDataReports(messenger: InteractionClientMessenger): ReadResult {
        for await (const report of messenger.readDataReports()[Symbol.asyncIterator]()) {
            yield convertReport(DecodedDataReport(report));
        }

        function* convertReport(report: DecodedDataReport): ReadResult.Chunk {
            for (const attr of report.attributeReports) {
                yield {
                    kind: "attr-value",
                    tlv: TlvAny,
                    ...attr,
                };
            }

            if (report.attributeStatus) {
                for (const attr of report.attributeStatus) {
                    yield {
                        kind: "attr-status",
                        path: attr.path,
                        status: attr.status ?? Status.Failure, // TODO - attr.status shouldn't be optional?
                        clusterStatus: attr.clusterStatus,
                    };
                }
            }

            for (const event of report.eventReports) {
                for (const occurrence of event.events) {
                    yield {
                        kind: "event-value",
                        path: event.path,
                        value: occurrence,
                        number: occurrence.eventNumber,
                        priority: occurrence.priority,
                        timestamp: Number(
                            // TODO - this may not be useful, need to determine correct form
                            occurrence.epochTimestamp ??
                                occurrence.systemTimestamp ??
                                occurrence.deltaEpochTimestamp ??
                                occurrence.deltaSystemTimestamp ??
                                0,
                        ),

                        // TODO - temporary, field will be removed
                        tlv: TlvAny,
                    };
                }
            }

            if (report.eventStatus) {
                for (const event of report.eventStatus) {
                    if (event.status !== undefined) {
                        yield {
                            kind: "event-status",
                            path: event.path,
                            status: event.status,
                            clusterStatus: event.clusterStatus,
                        };
                    }
                    if (event.clusterStatus !== undefined) {
                        yield {
                            kind: "event-status",
                            path: event.path,
                            status: event.status ?? Status.Failure,
                            clusterStatus: event.clusterStatus,
                        };
                    }
                }
            }
        }
    }

    #begin(request: Read | Write | Invoke | Subscribe) {
        if (this.#closed) {
            throw new ImplementationError("Client interaction unavailable after close");
        }
        this.#interactions.add(request);
    }

    #end(request: Read | Write | Invoke | Subscribe) {
        this.#interactions.delete(request);
    }
}
