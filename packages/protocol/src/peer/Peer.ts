/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "#codec/MessageCodec.js";
import { OperationalDevice } from "#common/Scanner.js";
import { FabricManager } from "#fabric/FabricManager.js";
import {
    Abort,
    BasicSet,
    ConnectionlessTransportSet,
    InternalError,
    isDeepEqual,
    Logger,
    MaybePromise,
    Minutes,
    RetrySchedule,
    Seconds,
    ServerAddressUdp,
    Time,
} from "#general";
import { MdnsClient } from "#mdns/MdnsClient.js";
import { ExchangeManager } from "#protocol/ExchangeManager.js";
import { MessageChannel } from "#protocol/MessageChannel.js";
import { MessageExchange } from "#protocol/MessageExchange.js";
import { SessionParameters } from "#session/Session.js";
import { OperationalPeer } from "./OperationalPeer.js";
import { PeerAddress } from "./PeerAddress.js";
import { PeerDataStore } from "./PeerAddressStore.js";
import { CaseSession } from "./PeerPairing.js";

const logger = Logger.get("Peer");

const DEFAULT_INITIATE_TIMEOUT = Seconds(30);
const MAXIMUM_CONCURRENT_EXCHANGES_PER_SESSION = 5;

const PAIR_RETRIES = RetrySchedule.Configuration({
    maximumInterval: Minutes(1),
    jitterFactor: 0.25,
});

/**
 * Protocol-level representation of a peer.
 */
export class Peer implements OperationalPeer {
    #context: Peer.Context;
    #sessions = Array<MessageChannel>();
    #exchanges = new BasicSet<MessageExchange>();

    // Active pairing
    #pairing?: Promise<void>;
    #abortPairing?: Abort;

    // Peer information
    readonly address: PeerAddress;
    operationalAddress?: ServerAddressUdp;
    sessionParameters?: SessionParameters;
    discoveryData?: OperationalDevice;

    /** @deprecated */
    dataStore?: PeerDataStore;

    constructor(
        { address, operationalAddress, sessionParameters, discoveryData, dataStore }: OperationalPeer,
        context: Peer.Context,
    ) {
        this.address = PeerAddress(address);
        this.operationalAddress = operationalAddress;
        this.sessionParameters = sessionParameters;
        this.discoveryData = discoveryData;
        this.dataStore = dataStore;
        this.#context = context;

        if (operationalAddress) {
            this.#discovered.value = true;
        }
    }

    /**
     * Initiate a new exchange.
     */
    async initiateExchange(abort = new Abort({ timeout: DEFAULT_INITIATE_TIMEOUT })) {}

    /**
     * Create a new exchange initiated by the peer.
     */
    async joinExchange(initialMessage: Message) {}

    /**
     * Obtain a channel for a new exchange.
     */
    async #obtainAvailableSession(abort: Abort.Signal) {
        while (true) {
            for (const channel of this.#sessions) {
                if (channel.exchanges.size < MAXIMUM_CONCURRENT_EXCHANGES_PER_SESSION) {
                    return channel;
                }
            }

            const session = await CaseSession(this, abort);
            if (!session) {
                continue;
            }

            this.#sessions.push(session);
            return session;
        }
    }

    /**
     * Establish a new session.
     */
    async #establishNewSession(abort?: Abort) {
        let lastAttemptedAddresses: undefined | ServerAddressUdp[];
        while (true) {
            const retries = new RetrySchedule(this.#context.fabrics.crypto, PAIR_RETRIES);
            for (const retry of retries) {
                // Initiate discovery if we consider the node undiscovered
                if (!this.#discovered.value) {
                    this.#initiateDiscovery();
                }

                const addresses = this.#operationalAddresses(abort);
                while (true) {
                    if (this.operationalAddress) {
                        addresses.push(this.operationalAddress);
                    }
                    if (this.discoveryData?.addresses) {
                        for (const addr of this.discoveryData.addresses) {
                            if (addresses.find(addr2 => isDeepEqual(addr, addr2))) {
                                continue;
                            }

                            addresses.push(addr);
                        }
                    }

                    if (addresses.length) {
                        break;
                    }

                    await Abort.race(abort, this.#discovered);
                    abort?.throwIfAborted();
                }

                // If addresses have changed, restart so the retry schedule resets
                if (lastAttemptedAddresses) {
                    if (!isDeepEqual(lastAttemptedAddresses, addresses)) {
                        lastAttemptedAddresses = undefined;
                        break;
                    }
                }

                for (const addr of addresses) {
                    const session = await this.#newSessionat(addr, abort);
                    if (session) {
                        return session;
                    }
                }

                await Time.sleep("session establishment retry", retry);
            }
        }
    }

    /**
     * Obtain operational addresses.
     */
    async #operationalAddresses(abort?: Abort) {
        if (!this.#discovered.value) {
            this.#initiateDiscovery();
        }

        const addresses = Array<ServerAddressUdp>();
        while (true) {
            if (this.operationalAddress) {
                addresses.push(this.operationalAddress);
            }
            if (this.discoveryData?.addresses) {
                for (const addr of this.discoveryData.addresses) {
                    if (addresses.find(addr2 => isDeepEqual(addr, addr2))) {
                        continue;
                    }

                    addresses.push(addr);
                }
            }

            if (addresses.length) {
                break;
            }

            await Abort.race(abort, this.#discovered);
            abort?.throwIfAborted();
        }
    }

    /**
     * Establish a new session at a specific address.
     */
    async #newSessionAt(addr: PeerAddress, abort?: Abort) {
        const { ip, port } = addr;
    }

    /**
     * Initiate active discovery.
     */
    #initiateDiscovery() {
        if (this.#discovery) {
            return;
        }
        this.#discovered.emit(false);
        this.#abortDiscovery = new Abort();
        this.#discovery = this.#discover();
    }

    async #discover() {
        try {
            const discovered = await Abort.race(
                this.#abortDiscovery,
                this.#context.mdns.findOperationalDevice(this.#fabric, this.address.nodeId, undefined, true),
            );

            if (!discovered) {
                // Aborted
                return;
            }

            this.discoveryData = discovered;

            this.#discovered.emit(true);

            await this.#context.store.updatePeer(this);
        } catch (e) {
            logger.error(`Unhandled error during device discovery`);
        } finally {
            this.#discovery = this.#abortDiscovery = undefined;
        }
    }

    get #fabric() {
        const fabric = this.#context.fabrics.findByIndex(this.address.fabricIndex);
        if (fabric === undefined) {
            throw new InternalError(`Fabric index ${this.address.fabricIndex} does not exist`);
        }
        return fabric;
    }
}

export namespace Peer {
    export interface Store {
        updatePeer(peer: OperationalPeer): MaybePromise<void>;
        deletePeer(address: PeerAddress): MaybePromise<void>;
    }

    export interface Context {
        store: Store;
        maxExchanges: number;
        exchanges: ExchangeManager;
        fabrics: FabricManager;
        transports: ConnectionlessTransportSet;
        mdns: MdnsClient;
    }
}
