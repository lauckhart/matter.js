/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertisement } from "#advertisement/Advertisement.js";
import type { Advertiser } from "#advertisement/Advertiser.js";
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

    #needsRecordsGenerator = true;

    constructor(advertiser: Advertiser, qname: string, description: T) {
        description = {
            ...description,
            ...SessionIntervals(description),
        };
        super(advertiser, `mdns:${qname}`, description);
        this.qname = qname;
    }

    protected abstract ptrRecords: DnsRecord[];

    protected get txtValues(): Record<string, unknown> {
        return {};
    }

    override async run() {
        const { server, retrySchedule } = this.advertiser;

        let announced = false;
        let isPrivacyMasked = false;

        let interruptedBy: unknown;
        try {
            for (const retryInterval of retrySchedule) {
                if (!isPrivacyMasked && this.isPrivacyMasked) {
                    this.#needsRecordsGenerator = true;
                    isPrivacyMasked = true;
                }

                await this.broadcast();
                announced = true;
                this.sleep("MDNS repeat", retryInterval);
            }
        } catch (e) {
            interruptedBy = e;

            if (announced) {
                try {
                    await server.expireAnnouncements(this.service);
                } catch (e) {
                    logger.error("Error expiring announcements for", Diagnostic.strong(this.service), e);
                }
            }
        }

        throw interruptedBy;
    }

    /**
     * Begin responding to MDNS requests.
     */
    async serve() {
        if (this.#needsRecordsGenerator) {
            await this.advertiser.server.setRecordsGenerator(this.service, this.#recordsGenerator);
        }
    }

    /**
     * Send an MDNS broadcast immediately.
     */
    async broadcast() {
        await this.serve();
        await this.advertiser.server.broadcast(this.service);
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
