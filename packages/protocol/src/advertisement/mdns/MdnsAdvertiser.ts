/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Advertisement } from "#advertisement/Advertisement.js";
import { Advertiser } from "#advertisement/Advertiser.js";
import { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { Bytes, Crypto, ImplementationError, RetrySchedule } from "#general";
import type { MdnsServer } from "#mdns/MdnsServer.js";
import { MAXIMUM_COMMISSIONING_TIMEOUT_S } from "#types";
import { CommissionableMdnsAdvertisement } from "./CommissionableMdnsAdvertisement.js";
import { CommissionerMdnsAdvertisement } from "./CommissionerMdnsAdvertisement.js";
import { OperationalMdnsAdvertisement } from "./OperationalMdnsAdvertisement.js";

/**
 * An {@link Advertiser} that advertises using an in-process MDNS implementation.
 */
export class MdnsAdvertiser extends Advertiser {
    readonly retrySchedule: RetrySchedule;

    constructor(
        readonly crypto: Crypto,
        readonly server: MdnsServer,
        readonly port = 5540,
        retryOptions?: RetrySchedule.Options,
    ) {
        super();

        const retryConfig = RetrySchedule.Configuration(MdnsAdvertiser.RetryDefaults, retryOptions);
        this.retrySchedule = new RetrySchedule(crypto, retryConfig);
    }

    createAdvertisement(description: ServiceDescription): Advertisement | undefined {
        switch (description.kind) {
            case "operational":
                return new OperationalMdnsAdvertisement(this, description);

            case "commissionable":
                return new CommissionableMdnsAdvertisement(this, description);

            case "commissioner":
                return new CommissionerMdnsAdvertisement(this, description);

            default:
                throw new ImplementationError(
                    `Unsupported service description kind "${(description as ServiceDescription).kind}`,
                );
        }
    }

    createInstanceId() {
        return Bytes.toHex(this.crypto.randomBytes(8)).toUpperCase();
    }
}

export namespace MdnsAdvertiser {
    /**
     * MDNS advertisement configuration options.
     */
    export interface Options {
        /**
         * The port of the Matter service to advertise.
         *
         * Defaults to 5540.
         */
        port?: number;

        /**
         * Omit the vendor and product ID from announcements for privacy reasons.
         */
        omitVendorAndProduct?: boolean;

        /**
         * Broadcast schedule.
         *
         * These control the intervals at which the server broadcasts the advertisement.
         *
         * By default all broadcasts are configured using {@link RetryDefaults}.
         */
        schedules?: BroadcastSchedule[];
    }

    /**
     * Configuration for a
     */
    export interface BroadcastSchedule extends RetrySchedule.Configuration {
        serviceKind?: ServiceDescription["kind"];
        limitTo?: "startup" | "reconnect";
    }

    /**
     * Default broadcast conditions
     */
    export const RetryDefaults: RetrySchedule.Configuration = {
        // Mandated by MDNS specification
        initialInterval: 1_000,

        // Maximum commissioning timeout per Matter specification 5.4.2.3.1, although
        timeout: MAXIMUM_COMMISSIONING_TIMEOUT_S * 1000,

        // Minimum per MDNS specification
        backoffFactor: 2,

        // Technically this may result in us emitting more than 8 packets which is the maximum per the MDNS
        // specification but extra packets will only come every 90 seconds
        maximumInterval: 90_000,

        // Not in any specification AFAIK but common sense to reduce thundering herd
        jitterFactor: 0.25,
    };
}
