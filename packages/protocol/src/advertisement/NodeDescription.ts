/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PairingHintBitmap } from "#advertisement/PairingHintBitmap.js";
import type { Fabric } from "#fabric/Fabric.js";
import type { SessionIntervals } from "#session/Session.js";
import type { ProductDescription, TypeFromPartialBitSchema, VendorId } from "@matter/types";
import { CommissioningMode } from "./CommissioningMode.js";

export interface NodeDescription extends Partial<SessionIntervals> {
    /**
     * The IP port for the Matter protocol.
     */
    port?: number;
}

export namespace NodeDescription {
    export interface Commissionable extends NodeDescription, ProductDescription {
        /**
         * The commissioning mode.
         */
        mode: CommissioningMode;

        /**
         * Device discriminator for commissionable announcements.
         */
        discriminator: number;

        /**
         * Pairing hint of the device for commissionable announcements.
         */
        pairingHint?: TypeFromPartialBitSchema<typeof PairingHintBitmap>;

        /**
         * Pairing instruction of the device for commissionable announcements.
         */
        pairingInstructions?: string;
    }

    export interface Operational extends NodeDescription {
        /**
         * The advertised fabric.
         */
        fabric: Fabric;
    }

    export interface Commissioner extends NodeDescription {
        /**
         * Device name for commissionable announcements.
         */
        deviceName: string;

        /**
         * Device type for commissionable announcements.
         */
        vendorId: VendorId;

        /**
         * Vendor ID for commissionable announcements.
         */
        productId: number;

        /**
         * Device type for commissionable announcements.
         */
        deviceType?: number;
    }
}
