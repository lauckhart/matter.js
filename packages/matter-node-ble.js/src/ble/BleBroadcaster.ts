/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductDescription } from "@project-chip/matter.js/behavior/system/product-description";
import { BtpCodec } from "@project-chip/matter.js/codec";
import { ImplementationError, InstanceBroadcaster } from "@project-chip/matter.js/common";
import { Diagnostic, Logger } from "@project-chip/matter.js/log";
import { ByteArray } from "@project-chip/matter.js/util";
import { BlenoBleServer } from "./BlenoBleServer.js";

const logger = Logger.get("BleBroadcaster");

export class BleBroadcaster implements InstanceBroadcaster {
    #blenoServer: BlenoBleServer;
    #product: ProductDescription;
    #discriminator: number;
    #additionalAdvertisementData?: ByteArray;
    #advertise = false;
    #isClosed = false;

    constructor(
        blenoServer: BlenoBleServer,
        product: ProductDescription,
        discriminator: number,
        additionalAdvertisementData?: ByteArray,
    ) {
        this.#product = product;
        this.#discriminator = discriminator;
        this.#blenoServer = blenoServer;
        this.#additionalAdvertisementData = additionalAdvertisementData;
    }

    async enterCommissioningMode(mode: number) {
        this.#assertOpen();

        const diagnostic = Diagnostic.dict({
            ...this.#product,
            discriminator: this.#discriminator,
        });

        if (mode !== 1) {
            this.#advertise = false;
            logger.info(`skip BLE announce because of commissioning mode ${mode}`, diagnostic);
            await this.#blenoServer.stopAdvertising();
            return;
        }
        logger.debug(`set commissioning mode ${mode}`, diagnostic);

        process.env["BLENO_DEVICE_NAME"] = this.#product.name;
        this.#advertise = true;
    }

    async enterOperationalMode() {
        this.#assertOpen();
        this.#advertise = false;
        logger.info(`skip BLE announce because announcing an operational device is not supported`);
        await this.#blenoServer.stopAdvertising();
        return; // Not needed because we only advertise un-commissioned devices
    }

    async enterCommissionerDiscoveryMode() {
        this.#assertOpen();
        this.#advertise = false;
        logger.error(`skip BLE announce because announcing a commissioner is not supported`);
    }

    async announce() {
        this.#assertOpen();
        if (!this.#advertise) {
            logger.debug(`skip BLE announce because nothing to advertise`);
            return;
        }

        const advertisementData = BtpCodec.encodeBleAdvertisementData(
            this.#discriminator,
            this.#product.vendorId,
            this.#product.productId,
            this.#additionalAdvertisementData !== undefined && this.#additionalAdvertisementData.length > 0,
        );

        // TODO if needed implement this according to the spec 5.4.2.5.3. (first 30s 20-60ms, 150-1285ms after)
        process.env["BLENO_ADVERTISING_INTERVAL"] = "100"; // use statically 100ms for now

        await this.#blenoServer.advertise(advertisementData, this.#additionalAdvertisementData);
    }

    async expireCommissioningAnnouncement() {
        this.#assertOpen();
        this.#advertise = false;
        await this.#blenoServer.stopAdvertising();
    }

    async expireFabricAnnouncement() {
        // nothing to do
    }

    async expireAllAnnouncements() {
        this.#assertOpen();
        this.#advertise = false;
        await this.#blenoServer.stopAdvertising();
    }

    async close() {
        if (this.#isClosed) {
            return;
        }
        this.#isClosed = true;

        await this.#blenoServer.stopAdvertising();
    }

    #assertOpen() {
        if (this.#isClosed) {
            throw new ImplementationError("Illegal operation on closed BleBroadcaster");
        }
    }
}
