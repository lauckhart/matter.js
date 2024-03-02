/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Attribute, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace FlowMeasurement {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x404,
        name: "FlowMeasurement",
        revision: 3,

        attributes: {
            /**
             * MeasuredValue represents the flow in m/h as follows: MeasuredValue = 10 x Flow
             *
             * The null value indicates that the flow measurement is unknown, otherwise the range shall be as described
             * in Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.1
             */
            measuredValue: Attribute(0x0, TlvNullable(TlvUInt16), { default: null }),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. See
             * Measured Value for more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.2
             */
            minMeasuredValue: Attribute(0x1, TlvNullable(TlvUInt16)),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. See
             * Measured Value for more details.
             *
             * The null value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.3
             */
            maxMeasuredValue: Attribute(0x2, TlvNullable(TlvUInt16.bound({ max: 65534 }))),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.4
             */
            tolerance: OptionalAttribute(0x3, TlvUInt16.bound({ max: 2048 }), { default: 0 })
        }
    })

    /**
     * Flow Measurement
     *
     * This cluster provides an interface to flow measurement functionality, including configuration and provision of
     * notifications of flow measurements.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type FlowMeasurementCluster = FlowMeasurement.Cluster;
export const FlowMeasurementCluster = FlowMeasurement.Cluster;
ClusterRegistry.register(FlowMeasurement.Complete);
