/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";



/**
 * Standard FlowMeasurement cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5
 */
export const FlowMeasurementMetadata = ClusterMetadata({ id: 0x404, name: "FlowMeasurement", revision: 1 });

/**
 * A FlowMeasurementCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * MeasuredValue represents the flow in m/h as follows: MeasuredValue = 10 x Flow
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.1
         */
        measuredValue: Attribute(0, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

        /**
         * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. See
         * Measured Value for more details.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.2
         */
        minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

        /**
         * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. See
         * Measured Value for more details.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.3
         */
        maxMeasuredValue: Attribute(2, TlvNullable(TlvUInt16.bound({ max: 65534 })), { readAcl: AccessLevel.View }),

        /**
         * See Measured Value.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.4
         */
        tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { readAcl: AccessLevel.View })
    }
});

export type FlowMeasurementCluster<T extends TypeFromPartialBitSchema<typeof FlowMeasurementMetadata.features>> = 
    typeof FlowMeasurementMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function FlowMeasurementCluster<T extends (keyof typeof FlowMeasurementMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...FlowMeasurementMetadata,
        supportedFeatures: BitFlags(FlowMeasurementMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as FlowMeasurementCluster<BitFlags<typeof FlowMeasurementMetadata.features, T>>;
};