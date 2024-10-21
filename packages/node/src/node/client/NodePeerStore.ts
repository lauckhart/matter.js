/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningClient } from "#behavior/index.js";
import { RemoteDescriptor } from "#behavior/system/commissioning/RemoteDescriptor.js";
import { ServerNode } from "#node/ServerNode.js";
import { OperationalPeer, PeerAddress, PeerAddressStore, PeerDataStore } from "#protocol";
import { InternalError } from "#general";

/**
 * This is an adapter for lower-level components in the protocol package.
 */
export class NodePeerStore extends PeerAddressStore {
    #owner: ServerNode;

    constructor(owner: ServerNode) {
        super();
        this.#owner = owner;
    }

    async loadPeers(): Promise<OperationalPeer[]> {
        return [...this.#owner.nodes]
            .map(node => {
                const commissioning = node.state.commissioning;
                if (!commissioning.peerAddress) {
                    return;
                }
                return {
                    address: commissioning.peerAddress,
                    operationalAddress: commissioning.addresses?.find(addr => addr.type === "udp"),
                    discoveryData: RemoteDescriptor.fromState(commissioning),
                };
            })
            .filter(addr => addr !== undefined);
    }

    async updatePeer(peer: OperationalPeer) {
        const node = this.#owner.nodes.get(peer.address);
        if (!node) {
            return;
        }

        const commissioning: CommissioningClient.State = {};
        RemoteDescriptor.toState(peer.discoveryData, commissioning);
        commissioning.addresses = peer.operationalAddress ? [peer.operationalAddress] : undefined;

        await node.set({ commissioning });
    }

    async deletePeer(address: PeerAddress) {
        // TODO - should we be doing this separately?
        const node = this.#owner.nodes.get(address);
        if (node) {
            await node.close();
        }
    }

    async createNodeStore(): Promise<PeerDataStore> {
        throw new InternalError("Node store creation not supported");
    }
}
