/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PairingHintBitmap } from "#advertisement/PairingHintBitmap.js";
import type { Fabric } from "#fabric/Fabric.js";
import { SessionIntervals } from "#session/SessionIntervals.js";
import type { ProductDescription, TypeFromPartialBitSchema, VendorId } from "@matter/types";
import { CommissioningMode } from "./CommissioningMode.js";

export type ServiceDescription =
    | ServiceDescription.Operational
    | ServiceDescription.Commissionable
    | ServiceDescription.Commissioner;

export namespace ServiceDescription {
    export function isCommissioning(description: ServiceDescription): description is Commissionable | Commissioner {
        return description.kind === "commissionable" || description.kind === "commissioner";
    }

    export function isOperational(description: ServiceDescription): description is Operational {
        return description.kind === "operational";
    }

    export interface Base extends Partial<SessionIntervals> {
        /**
         * The IP port for the Matter protocol.
         */
        port?: number;
    }

    export interface Commissionable extends Base, ProductDescription {
        kind: "commissionable";

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

    export interface Operational extends Base {
        kind: "operational";

        /**
         * The advertised fabric.
         */
        fabric: Fabric;
    }

    export interface Commissioner extends Base {
        kind: "commissioner";

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
