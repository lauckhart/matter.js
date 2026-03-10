/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import type { RemoteResponse } from "#behavior/system/remote/api/RemoteResponse.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import type { Node } from "#node/Node.js";
import type { ClientStructure } from "#node/client/ClientStructure.js";
import type { StateStream } from "#node/integration/StateStream.js";
import { Logger } from "@matter/general";
import type { RemoteEndpointInitializer } from "./RemoteEndpointInitializer.js";
import type { RemotePeers } from "./RemotePeers.js";
import type { RemoteNode } from "./RemoteNode.js";
import type { WebSocketConnection } from "./WebSocketConnection.js";

const logger = Logger.get("RemoteNetworkRuntime");

/**
 * Network runtime for remote nodes.
 *
 * For {@link RemoteNode}, manages the WebSocket connection lifecycle and the `/changes` subscription, routing
 * incoming state updates to the appropriate {@link ClientStructure}.
 *
 * For {@link RemotePeerNode}, this is a lightweight no-op runtime since the parent RemoteNode manages its subscription.
 */
export class RemoteNetworkRuntime extends NetworkRuntime {
    #isRemoteNode: boolean;
    #startupAbort?: AbortSignal;

    constructor(owner: Node, startupAbort?: AbortSignal) {
        super(owner);
        // RemoteNode has a connection; RemotePeerNode does not
        this.#isRemoteNode = "connection" in owner;
        this.#startupAbort = startupAbort;
    }

    protected override async start() {
        if (!this.#isRemoteNode) {
            // RemotePeerNode: nothing to start, the parent RemoteNode's runtime manages us
            this.owner.lifecycle.online.emit(await this.owner.act(agent => agent.context));
            return;
        }

        const serverRemote = this.owner as RemoteNode;
        const connection = serverRemote.connection;

        // Open the WebSocket connection
        await connection.open(this.#startupAbort);

        // Subscribe to changes
        const subscriptionId = await this.#subscribe(serverRemote, connection);

        // Set up abort handler to clean up subscription
        const signal = this.abortSignal;
        if (signal) {
            signal.addEventListener("abort", () => {
                if (subscriptionId) {
                    connection.unsubscribe(subscriptionId);
                }
            });
        }

        this.owner.lifecycle.online.emit(await this.owner.act(agent => agent.context));
    }

    async #subscribe(serverRemote: RemoteNode, connection: WebSocketConnection): Promise<string | undefined> {
        const structure = serverRemote.structure;
        const peers = serverRemote.peers;

        let subscriptionId: string | undefined;

        const response = await connection.subscribe(
            {
                method: "subscribe",
                target: "changes",
            },
            (response: RemoteResponse) => {
                this.#handleChange(response, serverRemote.id, structure, peers);
            },
        );

        if (response.kind === "ok") {
            subscriptionId = response.id;
            logger.debug("Subscription established for", serverRemote.id);
        } else if (response.kind === "error") {
            logger.error("Subscription failed:", response.message);
        }

        return subscriptionId;
    }

    #handleChange(response: RemoteResponse, serverNodeId: string, structure: ClientStructure, peers: RemotePeers) {
        if (response.kind !== "update" && response.kind !== "delete") {
            return;
        }
        const wireChange = response as StateStream.WireChange;
        const nodeId = wireChange.node;

        if (nodeId === serverNodeId) {
            // Route to server remote's structure
            structure.applyWireChanges([wireChange]).catch(e => {
                logger.error("Error applying wire changes to server structure:", e);
            });
        } else {
            // Route to peer
            if (wireChange.kind === "delete" && wireChange.endpoint === 0) {
                // Root endpoint delete = peer removed
                peers.remove(nodeId).catch(e => {
                    logger.error(`Error removing peer ${nodeId}:`, e);
                });
            } else {
                const peer = peers.getOrCreate(nodeId);

                // Wait for peer construction before applying wire changes
                Promise.resolve(peer.construction.ready)
                    .then(() => {
                        const peerInitializer = peer.env.get(EndpointInitializer) as
                            | RemoteEndpointInitializer
                            | undefined;
                        if (peerInitializer) {
                            peerInitializer.structure.applyWireChanges([wireChange]).catch(e => {
                                logger.error(`Error applying wire changes to peer ${nodeId}:`, e);
                            });
                        }
                    })
                    .catch(e => {
                        logger.error(`Error initializing peer ${nodeId}:`, e);
                    });
            }
        }
    }

    protected override async stop() {
        if (this.#isRemoteNode) {
            const serverRemote = this.owner as RemoteNode;
            await serverRemote.peers.close();
            await serverRemote.connection.close();
        }
    }
}
