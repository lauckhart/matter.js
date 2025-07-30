/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PairingHintBitmap } from "#advertisement/PairingHintBitmap.js";
import type { Fabric } from "#fabric/Fabric.js";
import { SessionIntervals } from "#session/SessionIntervals.js";
import type { ProductDescription, TypeFromPartialBitSchema } from "@matter/types";
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

    export function Commissionable(definition: Omit<Commissionable, "kind">): Commissionable {
        return {
            ...definition,
            kind: "commissionable",
        };
    }

    export interface Operational extends Base {
        kind: "operational";

        /**
         * The advertised fabric.
         */
        fabric: Fabric;
    }

    export function Operational(definition: Omit<Operational, "kind">): Operational {
        return {
            ...definition,
            kind: "operational",
        };
    }

    export interface Commissioner extends Omit<ProductDescription, "deviceType">, Base {
        kind: "commissioner";

        /**
         * The device type.
         *
         * This is optional for commissioner advertisement.
         */
        deviceType?: number;
    }

    export function Commissioner(definition: Omit<Commissioner, "kind">): Commissioner {
        return {
            ...definition,
            kind: "commissioner",
        };
    }
}
