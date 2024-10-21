/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningDiscovery, Discovery, InstanceDiscovery, TimedDiscovery } from "#behavior/index.js";
import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import { PeerAddress, PeerAddressStore } from "#protocol";
import { ClientNode } from "../ClientNode.js";
import type { ServerNode } from "../ServerNode.js";
import { ClientNodeFactory } from "./ClientNodeFactory.js";
import { NodePeerStore } from "./NodePeerStore.js";

/**
 * Manages the set of known remote nodes.
 *
 * Remote nodes are either peers (commissioned into a fabric we share) or commissionable.
 */
export class RemoteNodes extends EndpointContainer<ClientNode> {
    constructor(owner: ServerNode) {
        super(owner);

        const self = this;

        if (!owner.env.has(ClientNodeFactory)) {
            owner.env.set(
                ClientNodeFactory,
                new (class extends ClientNodeFactory {
                    create(options: ClientNode.Options) {
                        const node = new ClientNode(options);
                        self.add(node);
                        return node;
                    }

                    get nodes() {
                        return self;
                    }
                })(),
            );
        }

        const factory = owner.env.get(ClientNodeFactory);

        const peerStores = this.owner.env.get(ServerNodeStore).peerStores;
        for (const id of peerStores.knownIds) {
            this.add(
                factory.create({
                    id,
                    owner,
                }),
            );
        }

        owner.env.set(PeerAddressStore, new NodePeerStore(owner));
    }

    /**
     * Find a specific commissionable node.
     */
    locate(options?: Discovery.Options) {
        return new InstanceDiscovery(this.owner, options);
    }

    /**
     * Employ discovery to find a set of commissionable nodes.
     */
    discover(options?: Discovery.Options) {
        return new TimedDiscovery(this.owner, options);
    }

    /**
     * Find a specific commissionable node and commission.
     */
    commission(options: CommissioningDiscovery.Options) {
        return new CommissioningDiscovery(this.owner, options);
    }

    override get(id: string | PeerAddress) {
        if (typeof id !== "string") {
            const address = PeerAddress(id);
            for (const node of this) {
                const nodeAddress = node.state.commissioning.peerAddress;
                if (nodeAddress && PeerAddress(nodeAddress) === address) {
                    return node;
                }
            }
            return undefined;
        }

        return super.get(id);
    }

    override get owner() {
        return super.owner as ServerNode;
    }

    override add(node: ClientNode) {
        node.owner = this.owner;
        if (!node.lifecycle.hasId) {
            node.id = this.owner.env.get(ServerNodeStore).peerStores.allocateId();
        }
        super.add(node);
    }
}
