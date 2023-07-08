/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { OptionalFixedAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";



/**
 * Standard WakeOnLan cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.10
 */
export const WakeOnLanMetadata = ClusterMetadata({ id: 0x503, name: "WakeOnLan", revision: 1 });

/**
 * A WakeOnLanCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This SHALL indicate the current MAC address of the device. Only 48-bit MAC Addresses SHALL be used for this
         * attribute as required by the Wake on LAN protocol.
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

export type WakeOnLanCluster<T extends TypeFromPartialBitSchema<typeof WakeOnLanMetadata.features>> = 
    typeof WakeOnLanMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function WakeOnLanCluster<T extends (keyof typeof WakeOnLanMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...WakeOnLanMetadata,
        supportedFeatures: BitFlags(WakeOnLanMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as WakeOnLanCluster<BitFlags<typeof WakeOnLanMetadata.features, T>>;
};