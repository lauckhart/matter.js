/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Abort } from "#general";

/**
 * Discovery manager for a single peer.
 */
export class PeerDiscovery {
    #discovered = new ObservableValue();
    #discovery?: Promise<void>;
    #abortDiscovery?: Abort;

    async close() {
        if (this.#discovery) {
            this.#abortDiscovery?.();
            await this.#discovery;
        }
    }
}
