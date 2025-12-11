/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { RemoteDescriptor } from "#behavior/system/commissioning/RemoteDescriptor.js";
import { BasicInformationBehavior } from "#behaviors/basic-information";
import { AggregatorEndpoint } from "#endpoints/aggregator";
import { Observable, ServerAddressUdp } from "#general";
import { DatatypeModel, FieldElement } from "#model";
import { ClientStructureEvents } from "#node/client/ClientStructureEvents.js";
import type { ClientNode } from "#node/ClientNode.js";
import { Node } from "#node/Node.js";
import { ActiveSubscription, PeerDescriptor, PeerSet, Subscribe } from "#protocol";
import { CaseAuthenticatedTag, EventNumber } from "#types";
import { ClientNetworkRuntime } from "./ClientNetworkRuntime.js";
import { NetworkBehavior } from "./NetworkBehavior.js";
import type { NetworkServer } from "./NetworkServer.js";

export class NetworkClient extends NetworkBehavior {
    declare internal: NetworkClient.Internal;
    declare state: NetworkClient.State;
    declare events: NetworkClient.Events;

    override initialize() {
        if (this.#node.isGroup) {
            // Groups can never subscribe
            this.state.autoSubscribe = false;
            this.state.defaultSubscription = undefined;
        } else {
            this.reactTo(this.events.autoSubscribe$Changed, this.#handleAutoSubscribeChanged, { offline: true });
            this.reactTo(this.events.defaultSubscription$Changed, this.#handleDefaultSubscriptionChange);

            const structureEvents = this.env.get(ClientStructureEvents);
            this.reactTo(structureEvents.clusterInstalled(BasicInformationBehavior), this.#updateDiscoveredLimits);
            this.reactTo(structureEvents.endpointInstalled(AggregatorEndpoint), this.#configureAsBridge);
        }
    }

    #updateDiscoveredLimits() {
        const capabilityMinima = this.#node.maybeStateOf(BasicInformationBehavior)?.capabilityMinima;
        const defaults = this.internal.isBridge
            ? this.#node.owner?.state.network.defaultBridgeLimits
            : this.#node.owner?.state.network.defaultDeviceLimits;
        this.internal.limits = { ...PeerDescriptor.defaultLimits, ...defaults, ...capabilityMinima };
    }

    #configureAsBridge() {
        if (this.internal.isBridge) {
            return;
        }
        this.internal.isBridge = true;
        this.#updateDiscoveredLimits();
    }

    override async startup() {
        const peerAddress = this.#node.state.commissioning.peerAddress;
        if (peerAddress !== undefined) {
            const peerSet = this.env.get(PeerSet);
            if (!peerSet.has(peerAddress)) {
                const udpAddresses = this.#node.state.commissioning.addresses?.filter(a => a.type === "udp");
                if (udpAddresses?.length) {
                    // Make sure the PeerSet knows about this peer now too
                    await peerSet.addKnownPeer(
                        peerAddress,
                        udpAddresses as ServerAddressUdp[],
                        RemoteDescriptor.fromLongForm(this.#node.state.commissioning),
                    );
                }
            }
        }

        await this.#handleAutoSubscribeChanged();
    }

    async #handleDefaultSubscriptionChange() {
        // Terminate any existing subscription
        await this.#handleAutoSubscribeChanged(false);

        if (this.state.autoSubscribe && !this.state.isDisabled) {
            await this.#handleAutoSubscribeChanged(true);
        }
    }

    async #handleAutoSubscribeChanged(desiredState = this.state.autoSubscribe) {
        const { isDisabled } = this.state;
        const subscriptionDesired = desiredState && !isDisabled;

        if (subscriptionDesired === !!this.internal.activeSubscription) {
            return;
        }

        if (subscriptionDesired) {
            const subscribe = Subscribe({
                fabricFilter: true,
                keepSubscriptions: false,
                attributes: [{}],
                events: [{ isUrgent: true }],
                ...this.state.defaultSubscription,
            });

            // First, read.  This allows us to retrieve attributes that do not support subscription and gives us
            // physical device information required to optimize subscription parameters
            for await (const _chunk of this.#node.interaction.read(subscribe));

            // Now subscribe for subsequent updates
            const subscription = await this.#node.interaction.subscribe(subscribe);

            this.internal.activeSubscription = subscription;
        } else {
            this.internal.activeSubscription?.close();
            this.internal.activeSubscription = undefined;
        }
    }

    get #node() {
        return this.env.get(Node) as ClientNode;
    }

    /**
     * Define logical schema for fields that should persist.
     */
    static override readonly schema = new DatatypeModel({
        name: "NetworkState",
        type: "struct",

        children: [
            FieldElement({
                name: "defaultSubscription",
                type: "any",
                default: { type: "properties", properties: {} },
                conformance: "O",
                quality: "N",
            }),

            FieldElement({
                name: "isDisabled",
                type: "bool",
                quality: "N",
                default: false,
            }),

            FieldElement({
                name: "autoSubscribe",
                type: "bool",
                quality: "N",
                default: false,
            }),

            FieldElement({
                name: "maxEventNumber",
                type: "event-no",
                quality: "N",
                default: EventNumber(0),
            }),

            FieldElement({
                name: "caseAuthenticatedTags",
                type: "list",
                quality: "N",
                conformance: "O",
                children: [
                    FieldElement({
                        name: "entry",
                        type: "uint32",
                    }),
                ],
            }),
        ],
    });
}

export namespace NetworkClient {
    export class Internal extends NetworkBehavior.Internal {
        declare runtime?: ClientNetworkRuntime;

        /**
         * The active default subscription.
         */
        activeSubscription?: ActiveSubscription;

        /**
         * Discovered limits.  These are used if {@link State#limits} are not configured.
         */
        limits?: PeerDescriptor.Limits;

        /**
         * Set when we determine the peer is a bridge.
         */
        isBridge?: boolean;
    }

    export class State extends NetworkBehavior.State {
        /**
         * This subscription defines the default set of attributes and events to which the node will automatically
         * subscribe when started, if autoSubscribe is true.
         *
         * The default subscription is a wildcard for all attributes of the node.  You can set to undefined or filter
         * the fields and values but only values selected by this subscription will update automatically.
         *
         * The default subscription updates automatically if you change this property.
         */
        defaultSubscription?: Subscribe;

        /**
         * Represents the current operational network state of the node. When true the node is enabled and operational.
         * When false the node is disabled and not operational.
         *
         * This state can be changed at any time to enable or disable the node.
         */
        isDisabled = false;

        /**
         * If true, automatically subscribe to the provided default subscription (or all attributes and events) when
         * the node is started. If false, do not automatically subscribe.
         *
         * The subscription will activate or deactivate automatically if you change this property.
         *
         * Newly commissioned nodes default to true.
         */
        autoSubscribe = false;

        /**
         * Case Authenticated Tags (CATs) to use for operational CASE sessions with this node.
         *
         * CATs provide additional authentication context for Matter operational sessions. They are only used
         * for operational CASE connections after commissioning is complete, not during the initial PASE
         * commissioning process.
         */
        caseAuthenticatedTags?: CaseAuthenticatedTag[];

        /**
         * The highest event number seen from this node for the default read/subscription.
         */
        maxEventNumber = EventNumber(0);

        /**
         * Limits that control networking behavior.
         *
         * If undefined, matter.js uses properties returned by the device and values from:
         *
         * - {@link NetworkServer.State#defaultDeviceLimits} for normal Matter devices, or
         *
         * - {@link NetworkServer.State#defaultBridgeLimits} for bridges.
         */
        limits?: Partial<PeerDescriptor.Limits>;
    }

    export function limitsFor(node: ClientNode) {
        let { limits } = node.behaviors.internalsOf(NetworkClient);

        if (!limits) {
            limits = node.owner?.state.network.defaultDeviceLimits;

            if (!limits) {
                limits = PeerDescriptor.defaultLimits;
            }
        }

        const overrides = node.state.network.limits;
        if (overrides) {
            limits = { ...limits, ...overrides };
        }

        return limits;
    }

    export class Events extends NetworkBehavior.Events {
        autoSubscribe$Changed = new Observable<[value: boolean, oldValue: boolean]>();
        defaultSubscription$Changed = new Observable<[value: Subscribe | undefined, oldValue: Subscribe | undefined]>();
    }
}
