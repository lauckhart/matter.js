/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, OptionalFixedAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvByteString } from "../../tlv/TlvString.js";



export namespace WakeOnLanCluster {
    /**
     * Wake on LAN
     *
     * This cluster provides an interface for managing low power mode on a
     * device that supports the Wake On LAN protocol.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `WakeOnLan.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10
     */
    export const Complete = Cluster({
        id: 0x503,
        name: "WakeOnLan",
        revision: 1,

        attributes: {
            /**
             * This SHALL indicate the current MAC address of the device. Only
             * 48-bit MAC Addresses SHALL be used for this attribute as
             * required by the Wake on LAN protocol.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10.2.1
             */
            macAddress: OptionalFixedAttribute(0, TlvByteString, { readAcl: AccessLevel.View }),

            /**
             * This SHALL indicate the current link-local address of the
             * device. Only 128-bit IPv6 link-local addresses SHALL be used for
             * this attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10.2.2
             */
            linkLocalAddress: OptionalFixedAttribute(1, TlvByteString, { readAcl: AccessLevel.View })
        }
    });
};