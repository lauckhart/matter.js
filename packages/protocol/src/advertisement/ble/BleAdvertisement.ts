/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BtpCodec } from "#codec/BtpCodec.js";
import { Advertisement } from "../Advertisement.js";
import { ServiceDescription } from "../ServiceDescription.js";
import { BleAdvertiser } from "./BleAdvertiser.js";

export class BleAdvertisement extends Advertisement<ServiceDescription.Commissionable> {
    declare advertiser: BleAdvertiser;

    #previous?: BleAdvertisement;

    constructor(
        advertiser: BleAdvertiser,
        description: ServiceDescription.Commissionable,
        previous?: BleAdvertisement,
    ) {
        super(advertiser, "ble:commissioning", description);

        this.#previous = previous;
    }

    protected override async run() {
        await this.#previous;

        const {
            peripheral,
            config: { aad, timeout, earlyInterval, lateInterval },
        } = this.advertiser;

        const advertisementData = BtpCodec.encodeBleAdvertisementData(
            this.description.discriminator,
            this.description.vendorId,
            this.description.productId,
            aad !== undefined && aad.length > 0,
        );

        try {
            await peripheral.advertise(advertisementData, aad, earlyInterval);
            await this.sleep("BLE advertisement timeout", Math.min(timeout, 30 * 1_000));

            await peripheral.advertise(advertisementData, aad, lateInterval);
            await this.sleep("BLE advertisement timeout", Math.max(timeout - 30 * 1_000, 0));
        } finally {
            await peripheral.stopAdvertising();
        }
    }
}
