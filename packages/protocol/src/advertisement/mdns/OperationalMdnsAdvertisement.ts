/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDescription } from "#advertisement/ServiceDescription.js";
import { Bytes, NotImplementedError } from "#general";
import { getOperationalDeviceQname } from "#mdns/MdnsConsts.js";
import { MdnsServer } from "#mdns/MdnsServer.js";
import { NodeId } from "#types";
import { MdnsAdvertisement } from "./MdnsAdvertisement.js";
import { MdnsAdvertiser } from "./MdnsAdvertiser.js";

export class OperationalMdnsAdvertisement extends MdnsAdvertisement<ServiceDescription.Operational> {
    constructor(advertiser: MdnsAdvertiser, description: ServiceDescription.Operational) {
        const {
            fabric: { operationalId, nodeId },
        } = description;

        const qname = getOperationalDeviceQname(Bytes.toHex(operationalId).toUpperCase(), NodeId.toHexString(nodeId));

        super(advertiser, qname, description);
    }

    override get recordsGenerator(): MdnsServer.RecordGenerator {
        throw new NotImplementedError();
    }
}
