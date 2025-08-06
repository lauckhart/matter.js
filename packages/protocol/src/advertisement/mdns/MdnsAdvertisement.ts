/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertisement } from "#advertisement/Advertisement.js";
import type { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { SupportedTransportsSchema } from "#common/SupportedTransportsBitmap.js";
import {
    AAAARecord,
    ARecord,
    Diagnostic,
    DnsRecord,
    Logger,
    NetworkInterfaceDetails,
    SrvRecord,
    TxtRecord,
} from "#general";
import type { MdnsServer } from "#mdns/MdnsServer.js";
import { SessionIntervals } from "#session/SessionIntervals.js";
import type { MdnsAdvertiser } from "./MdnsAdvertiser.js";

const logger = Logger.get("MdnsAdvertisement");

/**
 * Base class for MDNS advertisements.
 *
 * Individual classes specialize for each type of service.
 */
export abstract class MdnsAdvertisement<T extends ServiceDescription = ServiceDescription> extends Advertisement<T> {
    declare advertiser: MdnsAdvertiser;

    /**
     * The device qname.
     */
    qname: string;

    #isPrivacyMasked: boolean;

    constructor(advertiser: MdnsAdvertiser, qname: string, description: T) {
        description = {
            ...description,
            ...SessionIntervals(description),
        };
        super(advertiser, `mdns:${qname}`, description, { omitPrivateDetails: advertiser.omitPrivateDetails });
        this.qname = qname;
        this.#isPrivacyMasked = this.isPrivacyMasked;
    }

    protected abstract ptrRecords: DnsRecord[];

    protected get txtValues(): Record<string, unknown> {
        return {};
    }

    override async run(context: Advertisement.ActivityContext, event: MdnsAdvertiser.BroadcastEvent = "startup") {
        let number = 0;
        for (const retryInterval of this.advertiser.broadcastScheduleFor(this, event)) {
            number++;
            logger.debug("Broadcast", Diagnostic.dict({ qname: this.qname, number, time: this.duration }));
            await this.broadcast();
            await context.sleep("MDNS repeat", retryInterval);
        }
    }

    /**
     * Broadcast a single announcement immediately.
     */
    async broadcast() {
        if (!this.#isPrivacyMasked && this.isPrivacyMasked) {
            this.#isPrivacyMasked = true;
            await this.advertiser.server.setRecordsGenerator(this.service, this.#recordsGenerator);
        }

        await this.advertiser.server.broadcast(this.service);
    }

    /**
     * Broadcast expiration announcement immediately.
     */
    async expire() {
        logger.debug("Expired", Diagnostic.dict({ qname: this.qname, time: this.duration }));
        await this.advertiser.server.expireAnnouncements(this.service);
    }

    protected override async onCreate() {
        // Use Promise.resolve() to initialize on next microtick so the constructor completes before invocation
        await Promise.resolve().then(() =>
            // Install the records generator.  This will be used for broadcast and to respond to queries
            this.advertiser.server.setRecordsGenerator(this.service, this.#recordsGenerator),
        );
    }

    protected override async onClose() {
        // The MDNS server doesn't currently track which answers have been sent so just expire unconditionally
        await this.expire();
    }

    get #recordsGenerator(): MdnsServer.RecordGenerator {
        return (_intf, addrs) => this.#recordsFor(addrs);
    }

    #recordsFor(addrs: NetworkInterfaceDetails) {
        const hostname = addrs.mac.replace(/:/g, "").toUpperCase() + "0000.local";

        const records: DnsRecord[] = [
            ...this.ptrRecords,
            SrvRecord(this.qname, { priority: 0, weight: 0, port: this.advertiser.port, target: hostname }),
            TxtRecord(
                this.qname,
                Object.entries(this.#txtValues)
                    .filter(([, v]) => v !== undefined)
                    .map(([k, v]) => `${k}=${v}`),
            ),
        ];

        for (const addr of addrs.ipV6) {
            records.push(AAAARecord(hostname, addr));
        }

        if (this.advertiser.server.supportsIpv4) {
            for (const addr of addrs.ipV4) {
                records.push(ARecord(hostname, addr));
            }
        }

        return records;
    }

    get #txtValues() {
        const values: Record<string, unknown> = {
            SII: this.description.idleIntervalMs /* Session Idle Interval */,
            SAI: this.description.activeIntervalMs /* Session Active Interval */,
            SAT: this.description.activeThresholdMs /* Session Active Threshold */,
            ...this.txtValues,
        };

        if (this.description.tcp !== undefined) {
            values.T = SupportedTransportsSchema.encode(this.description.tcp); /* TCP support */
        }

        if (this.description.icd !== undefined) {
            values.ICD = this.description.icd; /* ICD support */
        }

        return values;
    }
}
