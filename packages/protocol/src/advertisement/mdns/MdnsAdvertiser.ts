/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Advertisement } from "#advertisement/Advertisement.js";
import type { Advertiser } from "#advertisement/Advertiser.js";
import { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { Crypto, MatterAggregateError, Network, Observable } from "#general";
import type { MdnsServer } from "#mdns/MdnsServer.js";
import { MAXIMUM_COMMISSIONING_TIMEOUT_S } from "#types";
import { RetrySchedule } from "../../../../general/src/net/RetrySchedule.js";
import type { MdnsAdvertisement } from "./MdnsAdvertisement.js";

export class MdnsAdvertiser implements Advertiser {
    #advertisements = new Set<MdnsAdvertisement>();
    #advertisementDeleted = new Observable<[]>();

    constructor(
        readonly crypto: Crypto,
        readonly network: Network,
        readonly server: MdnsServer,
        retrySchedule?: Partial<RetrySchedule>,
    ) {}

    advertise(description: ServiceDescription): Advertisement | undefined {
        throw new Error("Method not implemented.");
    }

    async close() {
        await MatterAggregateError.allSettled([...this.#advertisements].map(advertisement => advertisement.close()));
    }
}

export namespace MdnsAdvertiser {
    export const RetryDefaults: RetrySchedule.Configuration = {
        // Mandated by MDNS specification
        initialInterval: 1_000,

        // Commissioning timeout mandated by Matter specification
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
