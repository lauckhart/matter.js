/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Duration, Environment, Environmental, Millis, Semaphore } from "#general";
import { Peer } from "./Peer.js";

/**
 * A single logical Matter networking segment.
 *
 * A "peer network" is a logical grouping of nodes that shares rate limits.  By default matter.js selects a network
 * based on medium, falling back to {@link PeerNetworks.conservative} if the medium is unknown.
 */
export interface PeerNetwork {
    id: string;
    semaphore: Semaphore;
}

/**
 * Controls how we interact with peers based on the network in which the peer resides.
 */
export class PeerNetworks {
    #networks = new Map<string, PeerNetwork>();
    #defaults: PeerNetworks.Profiles;

    constructor(options?: PeerNetworks.Options) {
        this.#defaults = {
            ...PeerNetworks.defaults,
            ...options,
        };
    }

    static [Environmental.create](env: Environment) {
        const instance = new this();
        env.set(PeerNetworks, instance);
        return instance;
    }

    select(peer: Peer, id?: string) {
        if (id !== undefined) {
            return this.get(id);
        }

        return this.forPeer(peer);
    }

    get(id: string) {
        const network = this.#networks.get(id);

        if (network) {
            return network;
        }

        if (!(id in PeerNetworks.defaults)) {
            id = "conservative";
        }

        return this.configure(id, PeerNetworks.defaults[id as keyof PeerNetworks.Profiles]);
    }

    configure(id: string, parameters: PeerNetworks.Limits) {
        const network: PeerNetwork = {
            id,
            semaphore: new Semaphore(`network semaphore ${id}`, parameters.exchanges, parameters.delay),
        };
        this.#networks.set(id, network);
        return network;
    }

    forPeer(peer: Peer) {
        const pp = peer.physicalProperties;

        let id: string, defaults: PeerNetworks.Limits;
        if (pp === undefined) {
            id = "unknown";
            defaults = this.#defaults.conservative;
        } else if (pp.threadActive || (pp.threadActive === undefined && pp.supportsThread)) {
            if (pp.threadChannel) {
                id = `thread:${pp.threadChannel}`;
            } else {
                id = "thread";
            }
            defaults = this.#defaults.thread;
        } else if (pp.supportsWifi || pp.supportsEthernet) {
            id = "fast";
            defaults = this.#defaults.fast;
        } else {
            id = "unknown";
            defaults = this.#defaults.conservative;
        }

        return this.#networks.get(id) ?? this.configure(id, defaults);
    }
}

export namespace PeerNetworks {
    export interface Options extends Partial<Profiles> {}

    /**
     * Parameters that control exchange throttling for a specific medium.
     */
    export interface Limits {
        /**
         * Maximum number of concurrent exchanges.
         */
        exchanges: number;

        /**
         * Delay between new exchanges.
         */
        delay?: Duration;
    }

    /**
     * Standard profiles, selected automatically based on transfer medium.
     */
    export interface Profiles {
        /**
         * Limit for "fast" networks.
         *
         * We use this value for ethernet and WiFi.
         */
        fast: Limits;

        /**
         * Limit for thread networks, by channel.
         *
         * Each channel has a separate network, plus an additional one for devices that do not report their channel.
         * If the device indicates thread is disabled then we use {@link fast}.
         */
        thread: Limits;

        /**
         * Fallback limits for unknown profiles.
         */
        conservative: Limits;

        /**
         * Limit for "unlimited" networks.
         *
         * This profile is only selectable manually.
         */
        unlimited: Limits;
    }

    /**
     * The fallback used for unknown network IDs or mediums.
     */
    export const conservative: Limits = {
        exchanges: 4,
        delay: Millis(100),
    };

    export const defaults: Profiles = {
        unlimited: { exchanges: Infinity },
        fast: { exchanges: 200 },
        thread: conservative,
        conservative,
    };
}
