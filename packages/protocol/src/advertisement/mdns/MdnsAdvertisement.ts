/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Advertisement } from "#advertisement/Advertisement.js";
import type { Advertiser } from "#advertisement/Advertiser.js";
import type { ServiceDescription } from "#advertisement/ServiceDescription.js";
import type { MdnsServer } from "#mdns/MdnsServer.js";
import type { MdnsAdvertiser } from "./MdnsAdvertiser.js";

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

    abstract recordsGenerator: MdnsServer.RecordGenerator;

    override async run() {
        // TODO
    }
}
