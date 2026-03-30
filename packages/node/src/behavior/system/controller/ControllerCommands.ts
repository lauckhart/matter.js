/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { field, string, uint16, uint32 } from "@matter/model";

/**
 * Definitions for the controller management interface.
 */
export namespace ControllerCommands {
    /**
     * Request parameters for commissioning a device.
     */
    export class CommissionRequest {
        /**
         * The device's setup passcode.
         *
         * Either passcode or pairingCode is required.
         */
        @field(uint32)
        passcode?: number;

        /**
         * The device's pairing code (manual or QR).
         *
         * Either passcode or pairingCode is required.
         */
        @field(string)
        pairingCode?: string;

        /**
         * The device's long discriminator.
         */
        @field(uint16)
        discriminator?: number;

        /**
         * Discovery and commissioning timeout in seconds.
         */
        @field(uint32)
        timeout?: number;

        /**
         * Local node ID to assign.
         */
        @field(string)
        id?: string;
    }

    /**
     * Request parameters for decommissioning or deleting a node.
     */
    export class NodeRequest {
        /**
         * The local node ID (e.g. "node0").
         */
        @field(string)
        id!: string;
    }

    /**
     * Request parameters for device discovery.
     */
    export class DiscoverRequest {
        /**
         * Filter by long discriminator.
         */
        @field(uint16)
        longDiscriminator?: number;

        /**
         * Filter by short discriminator.
         */
        @field(uint16)
        shortDiscriminator?: number;

        /**
         * Filter by vendor ID.
         */
        @field(uint16)
        vendorId?: number;

        /**
         * Filter by product ID.
         */
        @field(uint16)
        productId?: number;

        /**
         * Filter by device type.
         */
        @field(uint32)
        deviceType?: number;

        /**
         * Filter by instance ID.
         */
        @field(string)
        instanceId?: string;

        /**
         * Discovery timeout in seconds.
         */
        @field(uint32)
        timeout?: number;
    }
}
