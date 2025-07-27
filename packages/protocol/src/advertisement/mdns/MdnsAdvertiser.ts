/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Advertisement } from "#advertisement/Advertisement.js";
import type { Advertiser } from "#advertisement/Advertiser.js";
import { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { Bytes, Crypto, ImplementationError, Network } from "#general";
import type { MdnsServer } from "#mdns/MdnsServer.js";
import { MAXIMUM_COMMISSIONING_TIMEOUT_S } from "#types";
import { RetrySchedule } from "../../../../general/src/net/RetrySchedule.js";
import { CommissionableMdnsAdvertisement } from "./CommissionableMdnsAdvertisement.js";
import { CommissionerMdnsAdvertisement } from "./CommissionerMdnsAdvertisement.js";
import { OperationalMdnsAdvertisement } from "./OperationalMdnsAdvertisement.js";

/**
 * An {@link Advertiser} that advertises using an in-process MDNS implementation.
 */
export class MdnsAdvertiser implements Advertiser {
    readonly retrySchedule: RetrySchedule;

    constructor(
        readonly crypto: Crypto,
        readonly network: Network,
        readonly server: MdnsServer,
        retryOptions?: RetrySchedule.Options,
    ) {
        const retryConfig = RetrySchedule.Configuration(MdnsAdvertiser.RetryDefaults, retryOptions);
        this.retrySchedule = new RetrySchedule(crypto, retryConfig);
    }

    advertise(description: ServiceDescription): Advertisement | undefined {
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

    async close() {}

    createInstanceId() {
        return Bytes.toHex(this.crypto.randomBytes(8)).toUpperCase();
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
