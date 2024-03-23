/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductDescription } from "../behavior/system/product-description/ProductDescription.js";
import { InstanceBroadcaster } from "../common/InstanceBroadcaster.js";
import { MatterError, NoProviderError } from "../common/MatterError.js";
import { Scanner } from "../common/Scanner.js";
import { TransportInterface } from "../common/TransportInterface.js";
import { NetInterface } from "../net/NetInterface.js";
import { ByteArray } from "../util/ByteArray.js";

export class BleError extends MatterError {}

function BleDisabled(): Ble {
    throw new NoProviderError("No provider configured");
}

export abstract class Ble {
    // TODO - remove this singleton
    static get = BleDisabled;

    // TODO - remove
    static get enabled() {
        return this.get !== BleDisabled;
    }

    abstract getBlePeripheralInterface(): TransportInterface;
    abstract getBleCentralInterface(): NetInterface;
    abstract getBleBroadcaster(
        product: ProductDescription,
        discriminator: number,
        additionalAdvertisementData?: ByteArray,
    ): InstanceBroadcaster;
    abstract getBleScanner(): Scanner;
}

export namespace Ble {
    export abstract class Provider {
        abstract get(address?: string | number): Ble;
    }
}
