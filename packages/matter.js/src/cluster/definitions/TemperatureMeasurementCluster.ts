/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";



export namespace TemperatureMeasurementCluster {
    /**
     * Temperature Measurement
     *
     * Attributes and commands for configuring the measurement of temperature,
     * and reporting temperature measurements.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `TemperatureMeasurement.with()` and a
     * list of supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3
     */
    export const Complete = Cluster({
        id: 0x402,
        name: "TemperatureMeasurement",
        revision: 1,

        attributes: {
            /**
             * Represents the temperature in degrees Celsius as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.1
             */
            measuredValue: Attribute(0, TlvNullable(TlvInt16), { readAcl: AccessLevel.View }),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of
             * MeasuredValue that is capable of being measured. See Measured
             * Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.2
             */
            minMeasuredValue: Attribute(1, TlvNullable(TlvInt16), { default: 32768, readAcl: AccessLevel.View }),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of
             * MeasuredValue that is capable of being measured. See Measured
             * Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.3
             */
            maxMeasuredValue: Attribute(2, TlvNullable(TlvInt16), { default: 32768, readAcl: AccessLevel.View }),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.3.4.4
             */
            tolerance: OptionalAttribute(3, TlvUInt16, { readAcl: AccessLevel.View })
        }
    });
};