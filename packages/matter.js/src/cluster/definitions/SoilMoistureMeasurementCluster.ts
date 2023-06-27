/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";



export namespace SoilMoistureMeasurementCluster {
    /**
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `SoilMoistureMeasurement.with()` and a
     * list of supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6
     */
    export const Complete = Cluster({
        id: 0x408,
        name: "SoilMoistureMeasurement",
        revision: 1,

        attributes: {
            /**
             * MeasuredValue represents the water content in % as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.1
             */
            measuredValue: Attribute(0, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of
             * MeasuredValue that can be measured. The null value means this
             * attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.2
             */
            minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of
             * MeasuredValue that can be measured. The null value means this
             * attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.3
             */
            maxMeasuredValue: Attribute(2, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.6.4.4
             */
            tolerance: OptionalAttribute(3, TlvUInt16, { readAcl: AccessLevel.View })
        }
    });
};