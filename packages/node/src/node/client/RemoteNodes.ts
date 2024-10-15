/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ControllerBehavior } from "#behavior/system/controller/ControllerBehavior.js";
import { EndpointContainer } from "#endpoint/properties/EndpointContainer.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import { OperationalPeer, PeerAddress, PeerAddressStore, PeerDataStore } from "#protocol";
import { InternalError, MaybePromise } from "@matter/general";
import { CommissioningDiscovery } from "../../behavior/system/controller/CommissioningDiscovery.js";
import { ClientNode } from "../ClientNode.js";
import type { ServerNode } from "../ServerNode.js";
import { ClientRegistryService } from "./ClientRegistryService.js";

/**
 * Manages the set of known remote nodes.
 *
 * Remote nodes are either peers (commissioned into a fabric we share) or commissionable.
 */
export class RemoteNodes extends EndpointContainer<ClientNode> {
    #peersInitialized = true;

    constructor(owner: ServerNode) {
        super(owner);

        owner.env.set(
            ClientRegistryService,
            new (class extends ClientRegistryService {
                add(node: ClientNode) {
                    if (node.id === undefined) {
                        node.id = owner.env.get(ServerNodeStore).peerStores.allocateId();
                    }
                    this.add(node);
                }

                delete(node: ClientNode) {
                    this.delete(node);
                }
            })(),
        );

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

    /**
     * Find a specific commissionable node.
     */
    locate(options?: CommissioningDiscovery.Options) {
        return this.#withController("locate node", controller => controller.locate(options));
    }

    /**
     * Employ discovery to find a set of commissionable nodes.
     */
    discover(options?: CommissioningDiscovery.Options) {
        return this.#withController("discover node", controller => controller.discover(options));
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

    #withController<T>(purpose: string, actor: (controller: ControllerBehavior) => T) {
        return this.#initializePeers().then(() =>
            this.endpoint.act(purpose, agent => {
                const controller = agent.load(ControllerBehavior);
                if (MaybePromise.is(controller)) {
                    return controller.then(controller => actor(controller));
                }
                return actor(controller);
            }),
        );
    }

    async #initializePeers() {
        if (this.#peersInitialized) {
            return;
        }

        const { endpoint: owner } = this;

        const nodes = this;

        await owner.act("initialize controller", agent => agent.load(ControllerBehavior));

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
                        await node.close();
                    }
                }

                async createNodeStore(): Promise<PeerDataStore> {
                    throw new InternalError("Node store creation not supported");
                }
            })(),
        );

        this.#peersInitialized = true;
    }
}
