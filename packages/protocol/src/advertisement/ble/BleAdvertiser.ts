/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BlePeripheralInterface } from "#ble/Ble.js";
import { ImplementationError } from "#general";
import { MAXIMUM_COMMISSIONING_TIMEOUT_S } from "@matter/types";
import { Advertisement } from "../Advertisement.js";
import { Advertiser } from "../Advertiser.js";
import { CommissioningMode } from "../CommissioningMode.js";
import { ServiceDescription } from "../ServiceDescription.js";
import { BleAdvertisement } from "./BleAdvertisement.js";

export class BleAdvertiser extends Advertiser {
    #peripheral: BlePeripheralInterface;
    #config: BleAdvertiser.Configuration;
    #isClosed = false;

    constructor(peripheral: BlePeripheralInterface, options?: BleAdvertiser.Options) {
        super();

        this.#peripheral = peripheral;
        this.#config = BleAdvertiser.Configuration(options);
    }

    get peripheral() {
        return this.#peripheral;
    }

    get config() {
        return this.#config;
    }

    createAdvertisement(description: ServiceDescription): Advertisement | undefined {
        this.#assertOpen();

        if (description.kind !== "commissionable" || description.mode !== CommissioningMode.Basic) {
            return;
        }

        return new BleAdvertisement(this, description);
    }

    #assertOpen() {
        if (this.#isClosed) {
            throw new ImplementationError("Illegal operation on closed BleBroadcaster");
        }
    }
}

export namespace BleAdvertiser {
    /**
     * Advertisement configuration.
     *
     * All intervals are in milliseconds.
     */
    export interface Configuration {
        /**
         * Additional advertisement data.
         */
        aad?: Uint8Array;

        /**
         * Commissioning timeout
         *
         * Per Matter specification should be 5-15 minutes.
         */
        timeout: number;

        /**
         * Transmission interval for first 30 seconds.
         *
         * Per core spec 5.4.2.5.3 should be 20-60ms.
         */
        earlyInterval: number;

        /**
         * Transmission interval after first 30 seconds.
         *
         * Per core spec 5.4.2.5.3 should be 150-1285ms.
         */
        lateInterval: number;
    }

    export interface Options extends Partial<Configuration> {}

    export function Configuration(options?: Options) {
        return {
            timeout: MAXIMUM_COMMISSIONING_TIMEOUT_S * 1_000,
            earlyInterval: 20,
            lateInterval: 150,
            ...options,
        };
    }
}
