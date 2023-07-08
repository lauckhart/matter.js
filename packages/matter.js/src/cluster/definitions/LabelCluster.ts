/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

/**
 * This is a string tuple with strings that are user defined.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.7.4.1
 */
export const TlvLabelStruct = TlvObject({
    /**
     * The Label or Value semantic is not defined here. Label examples: "room", "zone", "group", "direction".
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.7.4.1.1
     */
    label: TlvField(0, TlvString.bound({ maxLength: 16 })),

    /**
     * The Label or Value semantic is not defined here. The Value is a discriminator for a Label that may have multiple
     * instances. Label:Value examples: "room":"bedroom 2", "orientation":"North", "floor":"2", "direction":"up"
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.7.4.1.2
     */
    value: TlvField(1, TlvString.bound({ maxLength: 16 }))
});

/**
 * Standard Label cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.7
 */
export const LabelMetadata = ClusterMetadata({ name: "Label", revision: 1 });

/**
 * A LabelCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This is a list of string tuples. Each entry is a LabelStruct.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 9.7.5.1
         */
        labelList: Attribute(0, TlvArray(TlvLabelStruct), { default: [] })
    }
});

export type LabelCluster<T extends TypeFromPartialBitSchema<typeof LabelMetadata.features>> = 
    typeof LabelMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function LabelCluster<T extends (keyof typeof LabelMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = { ...LabelMetadata, supportedFeatures: BitFlags(LabelMetadata.features, ...features), ...BaseComponent };
    
    return cluster as unknown as LabelCluster<BitFlags<typeof LabelMetadata.features, T>>;
};