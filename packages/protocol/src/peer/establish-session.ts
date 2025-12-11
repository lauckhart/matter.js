/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Abort } from "#general";
import { Peer } from "./Peer.js";

export async function establishSession(peer: Peer, context: Peer.Context, abort?: Abort.Signal) {}

/**
 * Utility class that establishes new sessions for a peer.
 */
export class SessionEstablishment {
    #peer: Peer;
    #context: Peer.Context;
    done: Promise<void>;
    #abort = new Abort();

    constructor(peer: Peer, context: Peer.Context) {
        this.#peer = peer;
        this.#context = context;
        this.done = this.#establishSession();
    }

    async #establishSession() {
        const address = this.#peer.descriptor.operationalAddress;

        const channel = this.#context.transportFor(address);
    }
}
