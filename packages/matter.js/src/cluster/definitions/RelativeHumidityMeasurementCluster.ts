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
 * Standard RelativeHumidityMeasurement cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6
 */
export const RelativeHumidityMeasurementMetadata = ClusterMetadata({
    id: 0x405,
    name: "RelativeHumidityMeasurement",
    revision: 1
});

/**
 * A RelativeHumidityMeasurementCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * MeasuredValue represents the water content in % as follows:
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.1
         */
        measuredValue: Attribute(0, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

        /**
         * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The null
         * value means this attribute is not defined. See Measured Value for more details.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.2
         */
        minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

        /**
         * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The null
         * value means this attribute is not defined. See Measured Value for more details.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.3
         */
        maxMeasuredValue: Attribute(2, TlvNullable(TlvUInt16.bound({ max: 10000 })), { readAcl: AccessLevel.View }),

        /**
         * See Measured Value.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.4
         */
        tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { readAcl: AccessLevel.View })
    }
});

export type RelativeHumidityMeasurementCluster<T extends TypeFromPartialBitSchema<typeof RelativeHumidityMeasurementMetadata.features>> = 
    typeof RelativeHumidityMeasurementMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function RelativeHumidityMeasurementCluster<T extends (keyof typeof RelativeHumidityMeasurementMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...RelativeHumidityMeasurementMetadata,
        supportedFeatures: BitFlags(RelativeHumidityMeasurementMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as RelativeHumidityMeasurementCluster<BitFlags<typeof RelativeHumidityMeasurementMetadata.features, T>>;
};