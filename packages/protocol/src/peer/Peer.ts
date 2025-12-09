/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Abort,
    BasicMultiplex,
    BasicSet,
    Diagnostic,
    isIpNetworkChannel,
    Lifetime,
    Logger,
    MaybePromise,
} from "#general";
import type { MdnsClient } from "#mdns/MdnsClient.js";
import { ExchangeManager } from "#protocol/ExchangeManager.js";
import { MessageExchange } from "#protocol/MessageExchange.js";
import type { NodeSession } from "#session/NodeSession.js";
import type { SecureSession } from "#session/SecureSession.js";
import { ObservablePeerDescriptor, PeerDescriptor } from "./PeerDescriptor.js";
import type { NodeDiscoveryType } from "./PeerSet.js";
import { SessionEstablishment } from "./SessionEstablishment.js";

const logger = Logger.get("Peer");

/**
 * A node on a fabric we are a member of.
 */
export class Peer {
    #lifetime: Lifetime;
    #descriptor: PeerDescriptor;
    #context: Peer.Context;
    #sessions = new BasicSet<NodeSession>();
    #exchanges = new BasicSet<MessageExchange>();
    #workers: BasicMultiplex;
    #isSaving = false;
    #abort = new Abort();
    #sessionEstablishment?: SessionEstablishment;

    /**
     * TODO - remove when no longer used
     *
     * @deprecated
     */
    activeDiscovery?: Peer.ActiveDiscovery;

    /**
     * TODO - remove when no longer used
     *
     * @deprecated
     */
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

            // Track exchanges
            session.exchanges.added.on(this.#exchanges.add.bind(this.#exchanges));
            session.exchanges.deleted.on(() => {
                this.#exchanges.delete.bind(this.#exchanges);
            });
        });
    }

    get fabric() {
        return this.#context.exchanges.sessions.fabricFor(this.address);
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

    async initiateExchange(signal?: Abort.Signal) {
        const signals = Array<Abort.Signal>(this.#abort);
        if (signal) {
            signals.push(signal);
        }
        const abort = new Abort({ abort: signals });

        const { exchangesPerPeer, exchangesPerSession } = this.#descriptor.limits;

        while (!true) {
            // Wait for a free exchange slot
            while (this.#exchanges.size > exchangesPerPeer) {
                using _waitingForExchange = this.#lifetime.join("waiting for exchange");
                await abort.race(this.#exchanges.deleted);
                abort.throwIfAborted();
            }

            // Find an existing live session with a free exchange slot.  Prefer newer sessions because older ones are
            // more likely to have been closed by the peer
            let session: undefined | NodeSession;
            for (const candidateSession of this.#sessions) {
                if (
                    candidateSession.isClosing ||
                    candidateSession.isPeerLost ||
                    candidateSession.exchanges.size > exchangesPerSession
                ) {
                    continue;
                }

                if (session && candidateSession.activeTimestamp < session.activeTimestamp) {
                    continue;
                }

                session = candidateSession;
            }

            // If we have a session, create the exchange
            if (session) {
                return this.#context.exchanges.initiateExchangeForSession(session);
            }

            // Initialize establishment of new session
            if (!this.#sessionEstablishment) {
                this.#sessionEstablishment = new SessionEstablishment(this, this.#context);
            }
            using _dependent = this.#sessionEstablishment.addDependent();

            // Wait for the new session, then cycle again
            using _waitingForSession = this.#lifetime.join("waiting for new session");
            await abort.race(this.#sessions.added);
            abort.throwIfAborted();
        }
    }

    /**
     * Permanently forget the peer.
     */
    async delete() {
        logger.info("Removing", Diagnostic.strong(this.toString()));
        await this.close();
        await this.#context.deletePeer(this);
        await this.#context.exchanges.sessions.deleteResumptionRecord(this.address);
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

        for (const session of this.#context.exchanges.sessions.sessionsFor(this.address)) {
            await session.initiateClose();
        }

        await this.#workers;

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
        exchanges: ExchangeManager;
        savePeer(peer: Peer): MaybePromise<void>;
        deletePeer(peer: Peer): MaybePromise<void>;
        closed(peer: Peer): void;
        interfaceFor(address: string): void;
    }

    export interface Limits {}

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
