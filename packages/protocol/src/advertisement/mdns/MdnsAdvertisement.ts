/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertisement } from "#advertisement/Advertisement.js";
import type { Advertiser } from "#advertisement/Advertiser.js";
import type { ServiceDescription } from "#advertisement/ServiceDescription.js";
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

    constructor(advertiser: Advertiser, qname: string, description: T) {
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

        let interruptedBy: unknown;
        try {
            await server.setRecordsGenerator(this.service, this.#recordsGenerator);
            for (const retryInterval of retrySchedule) {
                await server.announce(this.service);
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

    get #txtValues(): Record<string, unknown> {
        return {
            SII: this.description.idleIntervalMs /* Session Idle Interval */,
            SAI: this.description.activeIntervalMs /* Session Active Interval */,
            SAT: this.description.activeThresholdMs /* Session Active Threshold */,
            //`T=${TCP_SUPPORTED}` /* TODO TCP not supported */,
            //`ICD=${ICD_SUPPORTED}` /* ICD not supported */,
            ...this.txtValues,
        };
    }
}
