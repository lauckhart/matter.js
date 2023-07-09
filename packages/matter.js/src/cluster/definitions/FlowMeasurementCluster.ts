/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, AccessLevel, OptionalAttribute, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Flow Measurement
 *
 * Attributes and commands for configuring the measurement of flow, and reporting flow measurements.
 *
 * This function creates a FlowMeasurement cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5
 */
export function FlowMeasurementCluster() {
    const cluster = Cluster({ ...FlowMeasurementCluster.Metadata, ...FlowMeasurementCluster.BaseComponent });
    return cluster as unknown as FlowMeasurementCluster.Type;
}

export namespace FlowMeasurementCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * FlowMeasurement cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5
     */
    export const Metadata = ClusterMetadata({ id: 0x404, name: "FlowMeasurement", revision: 1, features: {} });

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
            tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all FlowMeasurement features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
}
