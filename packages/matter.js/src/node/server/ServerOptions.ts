/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OperationalCredentialsServerConf } from "../../cluster/server/OperationalCredentialsServer.js";
import { RootEndpoint } from "../../endpoint/definitions/system/RootEndpoint.js";
import { CommissioningFlowType } from "../../schema/PairingCodeSchema.js";
import { Storage } from "../../storage/Storage.js";
import { ByteArray } from "../../util/ByteArray.js";

/**
 * ServerNode configuration, used for automatic ServerContext management.
 */
export type ServerOptions = {
    /**
     * The root endpoint type for the server.  
     */
    root?: typeof RootEndpoint;

    /**
     * Storage used for persistent server state.  By default creates a storage
     * pool for the server's name using Storage.create().
     */
    storage?: Storage;

    /**
     * The next ID assigned to a new endpoint.
     */
    nextEndpointId?: number;

    /**
     * Certification information for the OperationalCredentials cluster.
     *
     * If omitted the server automatically generates development certificates.
     */
    certification?: OperationalCredentialsServerConf;

    /**
     * Networking options.
     */
    network?: {
        // TODO - change to "announce addresses"
        announceInterface?: string;

        // TODO - change these to "listen addresses"
        port?: number;
        listeningAddressIpv4?: string;
        listeningAddressIpv6?: string;
        disableIpv4?: boolean;
    };

    /**
     * Commissioning options.
     */
    commissioning?: {
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

        /**
         * The device type included in announcements.
         */
        deviceType?: number;

        /**
         * The device name included in announcements.
         */
        deviceName?: string;
    };

    /**
     * Attribute and event subscription options.
     */
    subscription?: {
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
