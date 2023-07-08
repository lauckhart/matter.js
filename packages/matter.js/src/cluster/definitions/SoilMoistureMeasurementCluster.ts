/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * This function creates a SoilMoistureMeasurement cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6
 */
export function SoilMoistureMeasurementCluster() {
    const cluster = { ...SoilMoistureMeasurementCluster.Metadata, ...SoilMoistureMeasurementCluster.BaseComponent };
    return cluster as unknown as SoilMoistureMeasurementCluster.Type;
};

export namespace SoilMoistureMeasurementCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * SoilMoistureMeasurement cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6
     */
    export const Metadata = ClusterMetadata({ id: 0x408, name: "SoilMoistureMeasurement", revision: 1 });

    /**
     * A SoilMoistureMeasurementCluster supports these elements for all feature combinations.
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
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The
             * null value means this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.2
             */
            minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The
             * null value means this attribute is not defined. See Measured Value for more details.
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

    /**
     * This cluster supports all SoilMoistureMeasurement features.
     */
    export const Complete = { ...Metadata, attributes: { ...BaseComponent.attributes } };
};
