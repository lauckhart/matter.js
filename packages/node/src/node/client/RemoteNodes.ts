/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import { FabricAuthorityConfigurationProvider, OperationalPeer, PeerAddress, PeerStore } from "#protocol";
import { ClientNode } from "../ClientNode.js";
import { ServerNode } from "../ServerNode.js";
import { ServerNodeStore } from "../storage/ServerNodeStore.js";
import { CommissioningDiscoveryService } from "./CommissioningDiscovery.js";

/**
 * Manages the set of known remote nodes.
 *
 * Remote nodes are either peers (commissioned into a fabric we share) or commissionable.
 */
export class RemoteNodes extends EndpointContainer<ClientNode> {
    constructor(owner: ServerNode) {
        super(owner);

        this.#configureController();

        const peerStores = this.endpoint.env.get(ServerNodeStore).peerStores;
        for (const id of peerStores.knownIds) {
            this.add(
                new ClientNode({
                    id,
                    owner,
                }),
            );
        }
    }

    get discovery() {
        return this.endpoint.env.get(CommissioningDiscoveryService);
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

    override get endpoint() {
        return super.endpoint as ServerNode;
    }

    #configureController() {
        const { endpoint: owner } = this;

        if (!owner.env.has(FabricAuthorityConfigurationProvider)) {
            owner.env.set(
                FabricAuthorityConfigurationProvider,
                new (class extends FabricAuthorityConfigurationProvider {
                    get vendorId() {
                        return owner.state.basicInformation.vendorId;
                    }
                })(),
            );
        }

        const nodes = this;

        owner.env.set(
            PeerStore,
            new (class extends PeerStore {
                async loadPeers(): Promise<OperationalPeer[]> {
                    return [...nodes]
                        .map(node => {
                            const commissioning = node.state.commissioning;
                            if (!commissioning.peerAddress) {
                                return;
                            }
                            return {
                                address: commissioning.peerAddress,
                                operationalAddress: commissioning.operationalAddresses?.find(
                                    addr => addr.type === "udp",
                                ),
                                discoveryData: commissioning.discoveryPayload,
                            };
                        })
                        .filter(addr => addr !== undefined);
                }

                async updatePeer(peer: OperationalPeer) {
                    const node = nodes.get(peer.address);
                    if (!node) {
                        return;
                    }

                    await node.set({
                        commissioning: {
                            operationalAddresses: peer.operationalAddress ? [peer.operationalAddress] : undefined,
                            discoveryPayload: peer.discoveryData,
                        },
                    });
                }

                async deletePeer(address: PeerAddress) {
                    const node = nodes.get(address);
                    if (node) {
                        nodes.delete(node);
                    }
                }
            })(),
        );
    }
}
