/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertisement } from "./Advertisement.js";
import { ServiceDescription } from "./ServiceDescription.js";

/**
 * A component that advertises a Matter service.
 */
export abstract class Advertiser {
    #advertisements = new Set<Advertisement>();
    #isClosed = false;

    /**
     * Begin advertising on configured schedule.
     *
     * Returns undefined if the advertiser does not support this type of advertisement.
     */
    advertise(description: ServiceDescription): Advertisement | undefined {
        if (this.#isClosed) {
            return;
        }

        const ad = this.createAdvertisement(description);
        if (ad) {
            ad.start();
        }

        return ad;
    }

    /**
     * Create an advertiser.
     */
    protected abstract createAdvertisement(description: ServiceDescription): Advertisement | undefined;

    /**
     * Destroy the instance.
     */
    async close() {
        this.#isClosed = true;
        await Advertisement.closeAll(this.#advertisements);
    }

    /**
     * The set of advertisements active for this advertiser.
     */
    get advertisements() {
        return this.#advertisements;
    }

    /**
     * Select advertisements using a predicate.
     */
    filter(predicate: (ad: Advertisement) => boolean) {
        return [...this.#advertisements].filter(predicate);
    }
}
