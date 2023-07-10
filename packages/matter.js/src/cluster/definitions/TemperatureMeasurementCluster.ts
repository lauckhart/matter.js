/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, OptionalAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvInt16, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Temperature Measurement
 *
 * Attributes and commands for configuring the measurement of temperature, and reporting temperature measurements.
 *
 * Use this factory function to create a TemperatureMeasurement cluster.
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
             * MeasuredValue = 100 x temperature [°C]
             *
             * Where -273.15°C ≤ temperature ≤ 327.67°C, with a resolution of 0.01°C. The null value indicates that the
             * temperature is unknown.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.1
             */
            measuredValue: Attribute(0, TlvNullable(TlvInt16)),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being
             * measured. See Measured Value for more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.2
             */
            minMeasuredValue: Attribute(1, TlvNullable(TlvInt16.bound({ min: -27315 })), { default: 32768 }),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being
             * measured. See Measured Value for more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.3
             */
            maxMeasuredValue: Attribute(2, TlvNullable(TlvInt16.bound({ max: 32767 })), { default: 32768 }),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.4
             */
            tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { default: 0 })
        }
    });

    /**
     * This cluster supports all TemperatureMeasurement features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
