/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, OptionalFixedAttribute } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvByteString } from "../../tlv/TlvString.js";

/**
 * Wake on LAN
 *
 * This cluster provides an interface for managing low power mode on a device that supports the Wake On LAN or Wake On
 * Wireless LAN (WLAN) protocol (see [Wake On LAN]).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10
 */
export const WakeOnLanCluster = Cluster({
    id: 0x503,
    name: "WakeOnLan",
    revision: 1,

    attributes: {
        /**
         * This shall indicate the current MAC address of the device. Only 48-bit MAC Addresses shall be used for this
         * attribute as required by the Wake on LAN protocol.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10.2.1
         */
        macAddress: OptionalFixedAttribute(0x0, TlvByteString.bound({ minLength: 6, maxLength: 8 })),

        /**
         * This shall indicate the current link-local address of the device. Only 128-bit IPv6 link-local addresses
         * shall be used for this attribute.
         *
         * NOTE
         *
         * Some companies may consider MAC Address to be protected data subject to PII handling considerations and will
         * therefore choose not to include it or read it. The MAC Address can often be determined using ARP in IPv4 or
         * NDP in IPv6.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10.2.2
         */
        linkLocalAddress: OptionalFixedAttribute(0x1, TlvByteString.bound({ length: 16 }))
    }
});
