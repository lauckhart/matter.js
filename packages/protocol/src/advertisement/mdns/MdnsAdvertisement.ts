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

    constructor(advertiser: Advertiser, service: string, description: T) {
        super(advertiser, `mdns:${service}`, description);
    }

    abstract recordsGenerator: MdnsServer.RecordGenerator;

    override async run() {
        // TODO
    }
}
