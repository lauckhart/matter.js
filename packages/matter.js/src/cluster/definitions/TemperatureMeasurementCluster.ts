/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, AccessLevel, OptionalAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvInt16, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Temperature Measurement
 *
 * Attributes and commands for configuring the measurement of temperature, and reporting temperature measurements.
 *
 * This function creates a TemperatureMeasurement cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3
 */
export function TemperatureMeasurementCluster() {
    const cluster = Cluster({ ...TemperatureMeasurementCluster.Metadata, ...TemperatureMeasurementCluster.BaseComponent });
    return cluster as unknown as TemperatureMeasurementCluster.Type;
}

export namespace TemperatureMeasurementCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * TemperatureMeasurement cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3
     */
    export const Metadata = ClusterMetadata({ id: 0x402, name: "TemperatureMeasurement", revision: 1, features: {} });

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
            tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all TemperatureMeasurement features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
