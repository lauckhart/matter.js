/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicInformation } from "#clusters/basic-information";
import {
    Abort,
    BasicMultiplex,
    BasicSet,
    Diagnostic,
    DiscoveryNames,
    DiscoveryService,
    isIpNetworkChannel,
    Lifetime,
    Logger,
    MaybePromise,
} from "#general";
import type { MdnsClient } from "#mdns/MdnsClient.js";
import { getOperationalDeviceQname } from "#mdns/MdnsConsts.js";
import type { NodeSession } from "#session/NodeSession.js";
import type { SecureSession } from "#session/SecureSession.js";
import type { SessionManager } from "#session/SessionManager.js";
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
    #isConnecting = false;
    #service: DiscoveryService;

    // TODO - manage these internally and/or factor away
    activeDiscovery?: Peer.ActiveDiscovery;
    activeReconnection?: Peer.ActiveReconnection;

    constructor(descriptor: PeerDescriptor, context: Peer.Context) {
        this.#lifetime = context.lifetime.join(descriptor.address.toString());
        this.#workers = new BasicMultiplex();
        this.#service = new DiscoveryService(
            getOperationalDeviceQname(
                context.sessions.fabricFor(descriptor.address).globalId,
                descriptor.address.nodeId,
            ),
            context.names,
        );

        this.#descriptor = new ObservablePeerDescriptor(descriptor, () => {
            if (this.#isSaving) {
                return;
            }

            this.#isSaving = true;
            this.#workers.add(this.#save());
        });
        this.#context = context;

        this.#sessions.added.on(session => {
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

    // WIP
    async connect(abort?: AbortSignal) {
        const aborts = new Array<AbortSignal>(this.#abort);
        if (abort) {
            aborts.push(abort);
        }
        const localAbort = new Abort({ abort: aborts });
        while (true) {
            const session = this.#sessions.find(session => !session.isClosing && !session.isPeerLost);
            if (session) {
                return session;
            }

            if (!this.#isConnecting) {
                this.#isConnecting = true;
                this.#workers.add(this.#connect());
            }

            const added = new Promise(resolve => this.#sessions.added.once(resolve));
            await localAbort.race(added);
            localAbort.throwIfAborted();
        }
    }

    // WIP
    async #connect() {
        using connecting = this.#lifetime.join("connecting");
        let attempt = 0;
        try {
            while (!this.#abort.aborted) {
                connecting.details.attempt = ++attempt;
            }

            // TODO
        } finally {
            this.#isConnecting = false;
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
    export interface Context {
        lifetime: Lifetime.Owner;
        sessions: SessionManager;
        names: DiscoveryNames;
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
