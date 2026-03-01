/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@matter/general";
import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import type { ClientStructure } from "#node/client/ClientStructure.js";
import { RemotePeerNode } from "./RemotePeerNode.js";
import type { RemoteNode } from "./RemoteNode.js";

const logger = Logger.get("RemotePeers");

/**
 * Manages peer discovery from a remote ServerNode's subscription stream.
 *
 * When changes arrive for an unknown node ID, a new {@link RemotePeerNode} is created.  When a root endpoint delete
 * arrives for a peer, it is removed.
 */
export class RemotePeers extends EndpointContainer<RemotePeerNode> {
    #storeFactory: ClientStructure.StoreFactory;

    constructor(owner: RemoteNode, storeFactory: ClientStructure.StoreFactory) {
        super(owner);
        this.#storeFactory = storeFactory;
    }

    override get owner() {
        return super.owner as RemoteNode;
    }

    /**
     * Get or create a {@link RemotePeerNode} for a remote peer node ID.
     */
    getOrCreate(remoteNodeId: string): RemotePeerNode {
        const existing = this.get(remoteNodeId);
        if (existing) {
            return existing;
        }

        logger.debug("Discovered peer", remoteNodeId);
        const peer = new RemotePeerNode({ remoteNodeId, owner: this.owner });
        peer.installInitializer(this.#storeFactory);
        this.add(peer);
        return peer;
    }

    /**
     * Remove a peer (e.g. on root endpoint delete).
     */
    async remove(remoteNodeId: string) {
        const peer = this.get(remoteNodeId);
        if (peer) {
            logger.debug("Removing peer", remoteNodeId);
            this.delete(peer);
            await peer.close();
        }
    }
}
