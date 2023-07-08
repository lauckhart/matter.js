/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { OptionalWritableAttribute, WritableAttribute, OptionalAttribute, Attribute } from "../../cluster/Cluster.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt8, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";



/**
 * Standard BinaryInputBasic cluster properties.
 */
export const BinaryInputBasicMetadata = ClusterMetadata({ id: 0xf, name: "BinaryInputBasic", revision: 1 });

/**
 * A BinaryInputBasicCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({ attributes: {
    activeText: OptionalWritableAttribute(4, TlvString, { default: "" }),
    description: OptionalWritableAttribute(28, TlvString, { default: "" }),
    inactiveText: OptionalWritableAttribute(46, TlvString, { default: "" }),
    outOfService: WritableAttribute(81, TlvBoolean, { default: true }),
    polarity: OptionalAttribute(84, TlvUInt8),
    presentValue: WritableAttribute(85, TlvBoolean),
    reliability: OptionalWritableAttribute(103, TlvUInt8),
    statusFlags: Attribute(111, TlvUInt8),
    applicationType: OptionalAttribute(256, TlvUInt32)
} });

export type BinaryInputBasicCluster<T extends TypeFromPartialBitSchema<typeof BinaryInputBasicMetadata.features>> = 
    typeof BinaryInputBasicMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function BinaryInputBasicCluster<T extends (keyof typeof BinaryInputBasicMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...BinaryInputBasicMetadata,
        supportedFeatures: BitFlags(BinaryInputBasicMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as BinaryInputBasicCluster<BitFlags<typeof BinaryInputBasicMetadata.features, T>>;
};