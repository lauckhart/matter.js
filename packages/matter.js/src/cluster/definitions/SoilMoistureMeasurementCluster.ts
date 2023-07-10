/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, OptionalAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Use this factory function to create a SoilMoistureMeasurement cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6
 */
export function SoilMoistureMeasurementCluster() {
    const cluster = Cluster({ ...SoilMoistureMeasurementCluster.Metadata, ...SoilMoistureMeasurementCluster.BaseComponent });
    return cluster as unknown as SoilMoistureMeasurementCluster.Type;
}

export namespace SoilMoistureMeasurementCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * SoilMoistureMeasurement cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6
     */
    export const Metadata = ClusterMetadata({ id: 0x408, name: "SoilMoistureMeasurement", revision: 1, features: {} });

    /**
     * A SoilMoistureMeasurementCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * MeasuredValue represents the water content in % as follows:
             *
             * MeasuredValue = 100 x water content
             *
             * Where 0% < = water content < = 100%, corresponding to a MeasuredValue in the range 0 to 10000. The
             * maximum resolution this format allows is 0.01%.
             *
             * MinMeasuredValue and MaxMeasuredValue define the range of the sensor.
             *
             * The null value indicates that the measurement is unknown, otherwise the range shall be as described in
             * Measured Value.
             *
             * MeasuredValue is updated continuously as new measurements are made.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.1
             */
            measuredValue: Attribute(0, TlvNullable(TlvUInt16)),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
             * null value means this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.2
             */
            minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16)),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
             * null value means this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.3
             */
            maxMeasuredValue: Attribute(2, TlvNullable(TlvUInt16.bound({ max: 10000 }))),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.4
             */
            tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }))
        }
    });

    /**
     * This cluster supports all SoilMoistureMeasurement features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
