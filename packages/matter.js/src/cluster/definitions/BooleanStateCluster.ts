/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel, OptionalEvent, EventPriority } from "../../cluster/Cluster.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

/**
 * This event SHALL be generated when the StateValue attribute changes.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
 */
export const TlvStateChangeEvent = TlvObject({ stateValue: TlvField(0, TlvBoolean) });

/**
 * Standard BooleanState cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7
 */
export const BooleanStateMetadata = ClusterMetadata({ id: 0x45, name: "BooleanState", revision: 1 });

/**
 * A BooleanStateCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This represents a Boolean state.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.4.1
         */
        stateValue: Attribute(0, TlvBoolean, { readAcl: AccessLevel.View })
    },

    events: {
        /**
         * This event SHALL be generated when the StateValue attribute changes.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.7.5.1
         */
        stateChange: OptionalEvent(0, EventPriority.Info, TlvStateChangeEvent)
    }
});

export type BooleanStateCluster<T extends TypeFromPartialBitSchema<typeof BooleanStateMetadata.features>> = 
    typeof BooleanStateMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function BooleanStateCluster<T extends (keyof typeof BooleanStateMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...BooleanStateMetadata,
        supportedFeatures: BitFlags(BooleanStateMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as BooleanStateCluster<BitFlags<typeof BooleanStateMetadata.features, T>>;
};