/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";



/**
 * Standard TemperatureMeasurement cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3
 */
export const TemperatureMeasurementMetadata = ClusterMetadata({ id: 0x402, name: "TemperatureMeasurement", revision: 1 });

/**
 * A TemperatureMeasurementCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * Represents the temperature in degrees Celsius as follows:
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.1
         */
        measuredValue: Attribute(0, TlvNullable(TlvInt16), { readAcl: AccessLevel.View }),

        /**
         * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being
         * measured. See Measured Value for more details.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.2
         */
        minMeasuredValue: Attribute(
            1,
            TlvNullable(TlvInt16.bound({ min: -27315 })),
            { default: 32768, readAcl: AccessLevel.View }
        ),

        /**
         * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being
         * measured. See Measured Value for more details.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.3
         */
        maxMeasuredValue: Attribute(
            2,
            TlvNullable(TlvInt16.bound({ max: 32767 })),
            { default: 32768, readAcl: AccessLevel.View }
        ),

        /**
         * See Measured Value.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.4
         */
        tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { readAcl: AccessLevel.View })
    }
});

export type TemperatureMeasurementCluster<T extends TypeFromPartialBitSchema<typeof TemperatureMeasurementMetadata.features>> = 
    typeof TemperatureMeasurementMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function TemperatureMeasurementCluster<T extends (keyof typeof TemperatureMeasurementMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...TemperatureMeasurementMetadata,
        supportedFeatures: BitFlags(TemperatureMeasurementMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as TemperatureMeasurementCluster<BitFlags<typeof TemperatureMeasurementMetadata.features, T>>;
};