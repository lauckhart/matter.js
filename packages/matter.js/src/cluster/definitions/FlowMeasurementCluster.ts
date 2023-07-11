/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, OptionalAttribute } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Flow Measurement
 *
 * This cluster provides an interface to flow measurement functionality, including configuration and provision of
 * notifications of flow measurements.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5
 */
export const FlowMeasurementCluster = Cluster({
    id: 0x404,
    name: "FlowMeasurement",
    revision: 1,
    features: {},

    attributes: {
        /**
         * MeasuredValue represents the flow in m/h as follows: MeasuredValue = 10 x Flow
         *
         * The null value indicates that the flow measurement is unknown, otherwise the range shall be as described in
         * Measured Value.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.1
         */
        measuredValue: Attribute(0, TlvNullable(TlvUInt16), { default: null }),

        /**
         * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. See
         * Measured Value for more details.
         *
         * The null value indicates that the value is not available.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.2
         */
        minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16)),

        /**
         * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. See
         * Measured Value for more details.
         *
         * The null value indicates that the value is not available.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.3
         */
        maxMeasuredValue: Attribute(2, TlvNullable(TlvUInt16.bound({ max: 65534 }))),

        /**
         * See Measured Value.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.5.4.4
         */
        tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { default: 0 })
    }
});
