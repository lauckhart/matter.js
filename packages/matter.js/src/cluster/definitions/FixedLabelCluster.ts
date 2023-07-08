/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

export const TlvLabelStruct = TlvObject({ label: TlvField(0, TlvString), value: TlvField(1, TlvString) });

/**
 * Standard FixedLabel cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.8
 */
export const FixedLabelMetadata = ClusterMetadata({ id: 0x40, name: "FixedLabel", revision: 1 });

/**
 * A FixedLabelCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * @see {@link MatterCoreSpecificationV1_1} § 9.8.4
         */
        labelList: Attribute(0, TlvArray(TlvLabelStruct), { persistent: true, default: [], readAcl: AccessLevel.View })
    }
});

export type FixedLabelCluster<T extends TypeFromPartialBitSchema<typeof FixedLabelMetadata.features>> = 
    typeof FixedLabelMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function FixedLabelCluster<T extends (keyof typeof FixedLabelMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...FixedLabelMetadata,
        supportedFeatures: BitFlags(FixedLabelMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as FixedLabelCluster<BitFlags<typeof FixedLabelMetadata.features, T>>;
};