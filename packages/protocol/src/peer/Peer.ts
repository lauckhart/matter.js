/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformation } from "#clusters/basic-information";
import { DiscoveryData } from "#common/Scanner.js";
import {
    Abort,
    BasicMultiplex,
    BasicSet,
    Diagnostic,
    DnssdNames,
    IpService,
    isIpNetworkChannel,
    Lifetime,
    Logger,
    MaybePromise,
    ObserverGroup,
} from "#general";
import type { MdnsClient } from "#mdns/MdnsClient.js";
import { getOperationalDeviceQname } from "#mdns/MdnsConsts.js";
import { CaseClient } from "#session/case/CaseClient.js";
import type { NodeSession } from "#session/NodeSession.js";
import type { SecureSession } from "#session/SecureSession.js";
import { SessionParameters } from "#session/SessionParameters.js";
import { PeerConnection } from "./PeerConnection.js";
import { ObservablePeerDescriptor, PeerDescriptor } from "./PeerDescriptor.js";
import type { NodeDiscoveryType } from "./PeerSet.js";

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
    #limits: BasicInformation.CapabilityMinima = {
        caseSessionsPerFabric: 3,
        subscriptionsPerFabric: 3,
    };
    #abort = new Abort();
    #connecting?: Promise<NodeSession | undefined>;
    #service: IpService;
    #observers = new ObserverGroup();

    // TODO - manage these internally and/or factor away
    activeDiscovery?: Peer.ActiveDiscovery;
    activeReconnection?: Peer.ActiveReconnection;

    constructor(descriptor: PeerDescriptor, context: Peer.Context) {
        this.#lifetime = context.lifetime.join(descriptor.address.toString());
        this.#workers = new BasicMultiplex();
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

        this.#descriptor = new ObservablePeerDescriptor(descriptor, () => {
            if (this.#isSaving) {
                return;
            }

            this.#isSaving = true;
            this.#workers.add(this.#save());
        });

        this.#context = context;

        this.#observers.on(this.#service.changed, () => {
            // Update persisted discovery data
            this.#descriptor.discoveryData = {
                ...this.#descriptor.discoveryData,
                ...DiscoveryData(this.#service.kvs),
            };
        });

        this.#observers.on(this.#sessions.added, session => {
            // Remove channel when destroyed
            session.closing.on(() => {
                this.#sessions.delete(session);
            });

            // Ensure operational address is always the most recent IP
            const { channel } = session.channel;
            if (isIpNetworkChannel(channel)) {
                this.#descriptor.operationalAddress = channel.networkAddress;
            }
        });
    }

    get lifetime() {
        return this.#lifetime;
    }

    get fabric() {
        return this.#context.sessions.fabricFor(this.address);
    }

    get limits() {
        return this.#limits;
    }

    set limits(limits: BasicInformation.CapabilityMinima) {
        this.#limits = limits;
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

    get service() {
        return this.#service;
    }

    get sessionParameters() {
        const sessionParameters = {} as SessionParameters.Config;

        const { SII, SAI, SAT } = this.descriptor.discoveryData ?? {};
        if (SII !== undefined) {
            sessionParameters.idleInterval = SII;
        }
        if (SAI !== undefined) {
            sessionParameters.activeInterval = SAI;
        }
        if (SAT !== undefined) {
            sessionParameters.activeThreshold = SAT;
        }

        return sessionParameters;
    }

    /**
     * Obtain a session with the peer, establishing anew as necessary.
     */
    async connect(options?: CaseClient.PairOptions) {
        while (true) {
            const session = this.#sessions.find(session => !session.isClosing && !session.isPeerLost);
            if (session) {
                return session;
            }

            if (!this.#connecting) {
                this.#connecting = PeerConnection(this, this.#context, { ...options, abort: this.#abort }).finally(
                    (this.#connecting = undefined),
                );
                this.#workers.add(this.#connecting);
            }

            const aborts = new Array<AbortSignal>(this.#abort);
            if (options?.abort) {
                aborts.push(options?.abort);
            }

            const localAbort = new Abort({ abort: aborts });
            await localAbort.race(this.#connecting);

            localAbort.throwIfAborted();
        }
    }

    /**
     * Permanently forget the peer.
     */
    async delete() {
        logger.info("Removing", Diagnostic.strong(this.toString()));
        await this.close();
        await this.#context.deletePeer(this);
        await this.#context.sessions.deleteResumptionRecord(this.address);
    }

    /**
     * Close the peer without removing persistent state.
     */
    async close() {
        using _lifetime = this.#lifetime.closing();

        this.#observers.close();

        this.#abort();

        if (this.activeDiscovery) {
            this.activeDiscovery.stopTimerFunc?.();

            // This ends discovery without triggering promises
            this.activeDiscovery.mdnsClient?.cancelOperationalDeviceDiscovery(this.fabric, this.address.nodeId, false);

            this.activeDiscovery = undefined;
        }

        if (this.activeReconnection) {
            this.activeReconnection.rejecter("Peer closed");
            this.activeReconnection = undefined;
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
}

export namespace Peer {
    export interface Context extends PeerConnection.Context {
        lifetime: Lifetime.Owner;
        names: DnssdNames;
        savePeer(peer: Peer): MaybePromise<void>;
        deletePeer(peer: Peer): MaybePromise<void>;
        closed(peer: Peer): void;
    }

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
