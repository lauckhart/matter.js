/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OptionalFixedAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";



export namespace WakeOnLanCluster {
    export const id = 1283;
    export const name = "WakeOnLan";
    export const revision = 1;

    const Base = {
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
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};