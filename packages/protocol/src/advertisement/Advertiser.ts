/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic, Logger } from "#general";
import { Advertisement } from "./Advertisement.js";
import { ServiceDescription } from "./ServiceDescription.js";

const logger = Logger.get("Advertiser");

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
            ad.catch(error => logger.error("Error in advertiser", Diagnostic.strong(ad.service), error)).finally(() =>
                this.#advertisements.delete(ad),
            );
            this.#advertisements.add(ad);
            ad.start();
        }

        return ad;
    }

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
