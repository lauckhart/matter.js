/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Peer } from "./Peer.js";

/**
 * Pairing manager for a single peer.
 */
export class PeerPairing {
    #peer: Peer;

    constructor(peer: Peer) {
        this.#peer = peer;
    }
}
