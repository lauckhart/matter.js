/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertiser } from "#advertisement/Advertiser.js";
import { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { Bytes, Crypto, ImplementationError, InternalError, RetrySchedule, STANDARD_MATTER_PORT } from "#general";
import type { MdnsServer } from "#mdns/MdnsServer.js";
import { DatatypeModel, FieldElement } from "#model";
import { MAXIMUM_COMMISSIONING_TIMEOUT_S } from "#types";
import { CommissionableMdnsAdvertisement } from "./CommissionableMdnsAdvertisement.js";
import { CommissionerMdnsAdvertisement } from "./CommissionerMdnsAdvertisement.js";
import type { MdnsAdvertisement } from "./MdnsAdvertisement.js";
import { OperationalMdnsAdvertisement } from "./OperationalMdnsAdvertisement.js";

/**
 * An {@link Advertiser} that advertises using an in-process MDNS implementation.
 */
export class MdnsAdvertiser extends Advertiser {
    readonly port: number;
    readonly omitPrivateDetails: boolean;

    #schedules = new Array<{ options: MdnsAdvertiser.BroadcastSchedule; schedule?: RetrySchedule }>();

    constructor(
        readonly crypto: Crypto,
        readonly server: MdnsServer,
        options?: MdnsAdvertiser.Options,
    ) {
        super();

        this.port = options?.port ?? STANDARD_MATTER_PORT;
        this.omitPrivateDetails = options?.omitPrivateDetails ?? false;

        let hasDefaultSchedule = false;
        if (options?.schedules) {
            for (const schedule of options.schedules) {
                if (schedule.serviceKind === undefined && schedule.event === undefined) {
                    hasDefaultSchedule = true;
                }

                this.#schedules.push({ options: schedule });
            }
        }

        if (!hasDefaultSchedule) {
            this.#schedules.push({ options: MdnsAdvertiser.DefaultBroadcastOptions });
        }
    }

    /**
     * Create an advertisement for the specific service.
     */
    createAdvertisement(description: ServiceDescription): MdnsAdvertisement | undefined {
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

    /**
     * Generate a random 8-byte Matter instance identifier.
     */
    createInstanceId() {
        return Bytes.toHex(this.crypto.randomBytes(8)).toUpperCase();
    }

    /**
     * Retrieve the broadcast schedule for a specific advertisement.
     */
    broadcastScheduleFor(advertisement: MdnsAdvertisement, event?: MdnsAdvertiser.BroadcastEvent): RetrySchedule {
        if (!event) {
            event = "startup";
        }

        for (const entry of this.#schedules) {
            const { serviceKind, event: event2 } = entry.options;

            if (serviceKind !== undefined && serviceKind !== advertisement.description.kind) {
                continue;
            }

            if (event2 !== undefined && event2 !== event) {
                continue;
            }

            if (entry.schedule === undefined) {
                entry.schedule = new RetrySchedule(
                    this.crypto,
                    RetrySchedule.Configuration(MdnsAdvertiser.DefaultBroadcastOptions, entry.options),
                );
            }

            return entry.schedule;
        }

        throw new InternalError("Default retry schedule not present");
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
        readonly port?: number;

        /**
         * Omit the vendor and product ID from announcements for privacy reasons.
         */
        readonly omitPrivateDetails?: boolean;

        /**
         * Broadcast schedule.
         *
         * These control the intervals at which the server broadcasts the advertisement.
         *
         * By default all broadcasts are configured using {@link DefaultBroadcastOptions}.
         */
        readonly schedules?: readonly BroadcastSchedule[];
    }

    /**
     * A hint for scheduling regarding why broadcast is initiated.
     */
    export type BroadcastEvent = "startup" | "reconnect";

    /**
     * Schedule for automatic broadcasts.
     *
     * Schedules apply conditionally with {@link DefaultBroadcastOptions} as the fallback.
     */
    export interface BroadcastSchedule extends RetrySchedule.Options {
        /**
         * Limit this schedule to a particular service kind.
         */
        readonly serviceKind?: ServiceDescription["kind"];

        /**
         * Limit this schedule to initial broadcast or broadcast when reconnecting.
         */
        readonly event?: BroadcastEvent;
    }

    /**
     * Default broadcast schedule for initial broadcast.
     */
    export const DefaultBroadcastOptions: RetrySchedule.Configuration = {
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

    /**
     * Data model for MDNS advertiser configuration.
     */
    export const OptionsSchema = new DatatypeModel(
        { name: "MdnsAdvertiserOptions", type: "struct" },
        FieldElement({ name: "omitPrivateDetails", type: "bool" }),
        FieldElement(
            { name: "schedules", type: "list" },
            FieldElement(
                { name: "entry", type: "struct" },
                FieldElement({ name: "initialInterval", type: "uint32" }),
                FieldElement({ name: "timeout", type: "uint32" }),
                FieldElement({ name: "backoffFactor", type: "uint8" }),
                FieldElement({ name: "maximumInterval", type: "uint32" }),
                FieldElement({ name: "jitterFactor", type: "single" }),
                FieldElement({ name: "serviceKind", type: "string" }),
                FieldElement({ name: "event", type: "string" }),
            ),
        ),
    );
}
