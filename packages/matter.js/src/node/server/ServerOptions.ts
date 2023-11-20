/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OperationalCredentialsServerConf } from "../../cluster/server/OperationalCredentialsServer.js";
import { ProductDescription } from "../../common/InstanceBroadcaster.js";
import { Part } from "../../endpoint/Part.js";
import { EndpointType } from "../../endpoint/type/EndpointType.js";
import { CommissioningFlowType } from "../../schema/PairingCodeSchema.js";
import { StorageManager } from "../../storage/StorageManager.js";
import { ByteArray } from "../../util/ByteArray.js";
import type { NodeServer } from "./NodeServer.js";

/**
 * Configuration options for {@link NodeServer}.
 */
export type ServerOptions = {
    /**
     * Initial endpoints published by the server.
     */
    readonly endpoints?: (EndpointType | Part)[];

    /**
     * Storage used for persistent server state.  This is used when running
     * standalone.  If not present, creates a storage pool for the server's
     * name using Storage.create().
     */
    readonly storageManager?: StorageManager;

    /**
     * The next ID assigned to a new endpoint.
     */
    readonly nextEndpointId?: number;

    /**
     * Certification information for the OperationalCredentials cluster.
     *
     * If omitted the server automatically generates development certificates.
     */
    readonly certification?: OperationalCredentialsServerConf;

    /**
     * Networking options.
     */
    readonly network?: {
        announceInterface?: string;
        discoverInterface?: string;
        port?: number;
        listeningAddressIpv4?: string;
        listeningAddressIpv6?: string;
        disableIpv4?: boolean;

        // TODO - change above to the following:
        // addresses: Address | Address[];
        // listen: Address | Address[];
        // announce: Address | Address[];
        // discover: Address | Address[];
    };

    /**
     * Commissioning options.
     */
    readonly commissioning?: {
        /**
         * Product information for commissioning broadcasts.
         */
        productDescription?: Partial<ProductDescription>;

        /**
         * The passcode/pin for initial commissioning.
         *
         * If omitted the server generates a random passcode.
         */
        passcode?: number;

        /**
         * The discriminator for initial commissioning.
         *
         * If omitted the server generates a random discriminator.
         */
        discriminator?: number;

        /**
         * The Flow type of commissioning used in announcements.
         */
        flowType?: CommissioningFlowType;

        /**
         * Vendor-specific BLE advertisement data.
         */
        additionalBleAdvertisementData?: ByteArray;

        /**
         * Should availability be announced automatically or manually via announce()?
         */
        automaticAnnouncement?: boolean;
    };

    /**
     * Attribute and event subscription options.
     */
    readonly subscription?: {
        /**
         * Optional maximum subscription interval to use for sending subscription reports. It will be used if not too
         * low and inside the range requested by the connected controller.
         */
        maxIntervalSeconds?: number;

        /**
         * Optional minimum subscription interval to use for sending subscription reports. It will be used when other
         * calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to
         * set limits.
         */
        minIntervalSeconds?: number;

        /**
         * Optional subscription randomization window to use for sending subscription reports. This specifies a window
         * in seconds from which a random part is added to the calculated maximum interval to make sure that devices
         * that get powered on in parallel not all send at the same timepoint.
         */
        randomizationWindowSeconds?: number;
    };
};
