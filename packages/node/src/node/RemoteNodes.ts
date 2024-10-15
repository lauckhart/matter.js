/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import {
    CommissionableDeviceIdentifiers,
    Fabric,
    FabricAuthorityConfigurationProvider,
    OperationalPeer,
    PeerAddress,
    PeerAddressStore,
    PeerDataStore,
} from "#protocol";
import { InternalError } from "@matter/general";
import { ClientNode } from "./ClientNode.js";
import { ServerNode } from "./ServerNode.js";
import { ServerNodeStore } from "./storage/ServerNodeStore.js";

/**
 * Manages the set of known remote nodes.
 *
 * Remote nodes are either peers (commissioned into a fabric we share) or commissionable.
 */
export class Nodes extends EndpointContainer<ClientNode> {
    #controllerFabric?: Fabric;

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

    set controllerFabric(fabric: Fabric) {
        this.#controllerFabric = fabric;
    }

    override get endpoint() {
        return super.endpoint as ServerNode;
    }

    /**
     * Find a specific commissionable node.
     */
    async find(): Promise<ClientNode> {
        // TODO
    }

    /**
     * Employ discovery to find a set of commissionable nodes.
     */
    async discovery(): Promise<ClientNode[]> {
        // TODO
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
            PeerAddressStore,
            new (class extends PeerAddressStore {
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

                async createNodeStore(): Promise<PeerDataStore> {
                    throw new InternalError("Node store creation not supported");
                }
            })(),
        );
    }
}

export namespace Nodes {
    export type DiscoveryFilter = CommissionableDeviceIdentifiers;

    export interface DiscoveryOptions {
        filter?: DiscoveryFilter;
        timeoutSeconds?: number;
    }

    export interface OngoingDiscovery {
        complete: Promise<ClientNode[]>;
        cancel(): void;
    }
}
