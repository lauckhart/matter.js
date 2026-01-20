/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeProtocol } from "#action/protocols.js";
import { BasicInformation } from "#clusters/basic-information";
import { DiscoveryData } from "#common/Scanner.js";
import {
    Abort,
    AbortedError,
    BasicMultiplex,
    BasicSet,
    ClosedError,
    Diagnostic,
    DnssdNames,
    Identity,
    IpService,
    isIpNetworkChannel,
    Lifetime,
    Logger,
    MaybePromise,
    Millis,
    ObserverGroup,
    Time,
} from "#general";
import type { MdnsClient } from "#mdns/MdnsClient.js";
import { getOperationalDeviceQname } from "#mdns/MdnsConsts.js";
import { ExchangeProvider } from "#protocol/ExchangeProvider.js";
import type { NodeSession } from "#session/NodeSession.js";
import type { SecureSession } from "#session/SecureSession.js";
import { SessionParameters } from "#session/SessionParameters.js";
import { GlobalAttributes, TypeFromSchema } from "#types";
import { PeerConnection } from "./PeerConnection.js";
import { ObservablePeerDescriptor, PeerDescriptor } from "./PeerDescriptor.js";
import { PeerExchangeProvider } from "./PeerExchangeProvider.js";
import { PeerNetworks } from "./PeerNetwork.js";
import type { NodeDiscoveryType } from "./PeerSet.js";
import { PhysicalDeviceProperties } from "./PhysicalDeviceProperties.js";

const logger = Logger.get("Peer");

/**
 * A node on a fabric we are a member of.
 */
export class Peer {
    #lifetime: Lifetime;
    #descriptor: PeerDescriptor;
    #context: Peer.Context;
    #sessions = new BasicSet<NodeSession>();
    #workers: BasicMultiplex;
    #isSaving = false;
    #protocol?: NodeProtocol;
    #physicalProperties?: PhysicalDeviceProperties;
    #abort = new Abort();
    #connecting?: Promise<NodeSession | undefined>;
    #service: IpService;
    #observers = new ObserverGroup();
    #exchangeProvider?: ExchangeProvider;

    /** @deprecated */
    activeDiscovery?: Peer.ActiveDiscovery;

    /** @deprecated */
    activeReconnection?: Peer.ActiveReconnection;

    constructor(descriptor: PeerDescriptor, context: Peer.Context) {
        this.#lifetime = context.lifetime.join(descriptor.address.toString());
        this.#workers = new BasicMultiplex();

        this.#descriptor = new ObservablePeerDescriptor(descriptor, () => {
            if (this.#isSaving) {
                return;
            }

            this.#isSaving = true;
            this.#workers.add(this.#save());
        });

        this.#service = new IpService(
            getOperationalDeviceQname(
                context.sessions.fabricFor(descriptor.address).globalId,
                descriptor.address.nodeId,
            ),

            Diagnostic.via(this.address.toString()),

            context.names,
        );

        // Consider service initially reachable if we have a known operational address
        if (descriptor.operationalAddress) {
            this.#service.status.isReachable = true;
        }

        this.#context = context;

        this.#observers.on(this.#service.changed, () => {
            // Update persisted discovery data
            this.#descriptor.discoveryData = {
                ...this.#descriptor.discoveryData,
                ...DiscoveryData(this.#service.kvs),
            };
        });

        this.#observers.on(this.#sessions.added, session => {
            // Remove session when destroyed
            session.closing.on(() => {
                this.#sessions.delete(session);
            });

            // Ensure operational address is always the most recent IP
            if (!session.isClosed) {
                const { channel } = session.channel;
                if (isIpNetworkChannel(channel)) {
                    this.#descriptor.operationalAddress = channel.networkAddress;
                }
            }

            // Ensure session parameters reflect those most recently reported by peer
            this.#descriptor.sessionParameters = session.parameters;
        });
    }

    get lifetime() {
        return this.#lifetime;
    }

    get fabric() {
        return this.#context.sessions.fabricFor(this.address);
    }

    get protocol() {
        return this.#protocol;
    }

    set protocol(protocol: NodeProtocol | undefined) {
        this.#protocol = protocol;
    }

    get physicalProperties() {
        return this.#physicalProperties;
    }

    set physicalProperties(props: PhysicalDeviceProperties | undefined) {
        this.#physicalProperties = props;
    }

    get basicInformation() {
        return this.#protocol?.[0]?.[BasicInformation.Cluster.id]?.readState({}) as Peer.BasicInformation | undefined;
    }

    get limits() {
        return {
            caseSessionsPerFabric: 3,
            subscriptionsPerFabric: 3,
            ...this.basicInformation?.capabilityMinima,
        };
    }

    get address() {
        return this.#descriptor.address;
    }

    get descriptor() {
        return this.#descriptor;
    }

    get sessions() {
        return this.#sessions;
    }

    get subscriptions() {
        // TODO - this should just be #subscriptions
        return [...this.#sessions].flatMap(session => [...session.subscriptions]);
    }

    get exchangeProvider() {
        if (this.#exchangeProvider === undefined) {
            this.#exchangeProvider = new PeerExchangeProvider(this, this.#context);
        }
        return this.#exchangeProvider;
    }

    get service() {
        return this.#service;
    }

    /**
     * "Best guess" {@link SessionParameters} for the peer based on available information.
     */
    get sessionParameters() {
        const bi = this.basicInformation;
        const dd = this.descriptor.discoveryData;

        return SessionParameters({
            dataModelRevision: bi?.dataModelRevision,
            maxPathsPerInvoke: bi?.maxPathsPerInvoke,
            specificationVersion: bi?.specificationVersion,
            idleInterval: dd?.SII,
            activeInterval: dd?.SAI,
            activeThreshold: dd?.SAT,
            ...this.#descriptor.sessionParameters,
        });
    }

    get network() {
        return this.#context.networks.forPeer(this);
    }

    /**
     * Obtain a session with the peer, establishing anew as necessary.
     */
    async connect(options?: PeerConnection.Options) {
        while (true) {
            const session = this.#newestSession;
            if (session) {
                return session;
            }

            const aborts = new Array<AbortSignal>(this.#abort);
            if (options?.abort) {
                aborts.push(options?.abort);
            }

            let timeout;
            if (options?.connectionTimeout) {
                timeout = options.connectionTimeout;
                if (this.service.status.connectionInitiatedAt) {
                    timeout = Millis(timeout - (Time.nowMs - this.service.status.connectionInitiatedAt));
                }
            } else {
                timeout = undefined;
            }

            if (!this.#connecting) {
                this.#connecting = PeerConnection(this, this.#context, { ...options, abort: this.#abort }).finally(
                    (this.#connecting = undefined),
                );
                this.#workers.add(this.#connecting);
            }

            const localAbort = new Abort({ abort: aborts, timeout });
            localAbort.throwIfAborted();

            await localAbort.race(this.#connecting);

            localAbort.throwIfAborted();
        }
    }

    /**
     * Permanently forget the peer.
     */
    async delete() {
        logger.info("Removing", Diagnostic.strong(this.toString()));
        try {
            await this.close();
        } catch (error) {
            // When there are open reconnections, we could expect a peer closed abort error here, so ignore this error case
            AbortedError.accept(error);
        }
        await this.#context.deletePeer(this);
        await this.#context.sessions.deleteResumptionRecord(this.address);
    }

    /**
     * Close the peer without removing persistent state.
     */
    async close() {
        using _lifetime = this.#lifetime.closing();

        this.#observers.close();

        this.#abort(new ClosedError("Peer closed"));

        if (this.activeDiscovery) {
            this.activeDiscovery.stopTimerFunc?.();

            // This ends discovery without triggering promises
            this.activeDiscovery.mdnsClient?.cancelOperationalDeviceDiscovery(this.fabric, this.address.nodeId, false);

            this.activeDiscovery = undefined;
        }

        if (this.activeReconnection) {
            const rejecter = this.activeReconnection.rejecter;
            this.activeReconnection = undefined;
            rejecter(new ClosedError("Peer closed"));
        }

        for (const session of this.#context.sessions.sessionsFor(this.address)) {
            await session.initiateClose();
        }

        await this.#workers;

        await this.#service.close();

        this.#context.closed(this);
    }

    toString() {
        return this.address.toString();
    }

    async #save() {
        using _lifetime = this.#lifetime.join("saving");
        this.#isSaving = false;
        await this.#context.savePeer(this);
    }

    get #newestSession() {
        // Prefer the most recently used session.  Older ones may not work with broken peers (e.g. CHIP test harness)
        let found: NodeSession | undefined;

        for (const session of this.#sessions) {
            if (session.isClosing || session.isPeerLost) {
                continue;
            }

            if (!found || found.timestamp < session.timestamp) {
                found = session;
            }
        }

        return found;
    }
}

export namespace Peer {
    export interface Context extends PeerConnection.Context {
        lifetime: Lifetime.Owner;
        names: DnssdNames;
        networks: PeerNetworks;
        savePeer(peer: Peer): MaybePromise<void>;
        deletePeer(peer: Peer): MaybePromise<void>;
        closed(peer: Peer): void;
    }

    export interface BasicInformation extends Identity<{
        readonly [N in keyof Omit<
            typeof BasicInformation.Complete.attributes,
            keyof typeof GlobalAttributes
        >]?: TypeFromSchema<(typeof BasicInformation.Complete.attributes)[N]["schema"]>;
    }> {}

    // TODO - factor away
    export interface ActiveDiscovery {
        type: NodeDiscoveryType;
        promises?: (() => Promise<SecureSession>)[];
        stopTimerFunc?: (() => void) | undefined;
        mdnsClient?: MdnsClient;
    }

    // TODO - factor away
    export interface ActiveReconnection {
        promise: Promise<SecureSession>;
        rejecter: (reason?: any) => void;
    }
}
