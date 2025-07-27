/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { NotImplementedError } from "#general";
import { getCommissionerDeviceQname } from "#mdns/MdnsConsts.js";
import { MdnsServer } from "#mdns/MdnsServer.js";
import { MdnsAdvertisement } from "./MdnsAdvertisement.js";
import { MdnsAdvertiser } from "./MdnsAdvertiser.js";

export class CommissionerMdnsAdvertisement extends MdnsAdvertisement<ServiceDescription.Commissioner> {
    instanceId: string;

    constructor(advertiser: MdnsAdvertiser, description: ServiceDescription.Commissioner) {
        const instanceId = advertiser.createInstanceId();
        const qname = getCommissionerDeviceQname(instanceId);

        super(advertiser, qname, description);

        this.instanceId = instanceId;
    }

    override get recordsGenerator(): MdnsServer.RecordGenerator {
        throw new NotImplementedError();
    }
}
