/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { OptionalFixedAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvByteString } from "../../tlv/TlvString.js";

/**
 * Wake on LAN
 *
 * This cluster provides an interface for managing low power mode on a device that supports the Wake On LAN protocol.
 *
 * This function creates a WakeOnLan cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10
 */
export function WakeOnLanCluster() {
    const cluster = { ...WakeOnLanCluster.Metadata, ...WakeOnLanCluster.BaseComponent };
    return cluster as unknown as WakeOnLanCluster.Type;
};

export namespace WakeOnLanCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * WakeOnLan cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10
     */
    export const Metadata = ClusterMetadata({ id: 0x503, name: "WakeOnLan", revision: 1 });

    /**
     * A WakeOnLanCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This SHALL indicate the current MAC address of the device. Only 48-bit MAC Addresses SHALL be used for
             * this attribute as required by the Wake on LAN protocol.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10.2.1
             */
            macAddress: OptionalFixedAttribute(0, TlvByteString, { readAcl: AccessLevel.View }),

            /**
             * This SHALL indicate the current link-local address of the device. Only 128-bit IPv6 link-local addresses
             * SHALL be used for this attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10.2.2
             */
            linkLocalAddress: OptionalFixedAttribute(1, TlvByteString, { readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all WakeOnLan features.
     */
    export const Complete = { ...Metadata, attributes: { ...BaseComponent.attributes } };
};
