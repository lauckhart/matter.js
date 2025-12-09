/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Abort } from "#general";
import { Peer } from "./Peer.js";

/**
 * Utility class that establishes a new session for a peer.
 */
export class SessionEstablishment {
    #dependents = 0;
    #peer: Peer;
    #context: Peer.Context;
    done: Promise<void>;
    #abort = new Abort();

    constructor(peer: Peer, context: Peer.Context) {
        this.#peer = peer;
        this.#context = context;
        this.done = this.#establishSession();
    }

    /**
     * Note an additional task waiting on the new session.
     *
     * This engages reference counting; when there are no more dependents session establishment aborts.
     */
    addDependent(): Disposable {
        this.#dependents++;
        return {
            [Symbol.dispose]: () => {
                if (this.#dependents--) {
                    return;
                }

                this.#abort();
            },
        };
    }

    async #establishSession(): Promise<void> {
        // TODO
    }
}
