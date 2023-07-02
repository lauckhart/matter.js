/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt16, TlvInt8 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";



export namespace PressureMeasurementCluster {
    export const id = 0x403;
    export const name = "PressureMeasurement";
    export const revision = 1;

    export const featureMap = {
        /**
         * Extended
         *
         * The cluster is capable of extended range and resolution
         */
        extended: BitFlag(0)
    };

    const Base = {
        attributes: {
            /**
             * This attribute represents the pressure in kPa as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.1
             */
            measuredValue: Attribute(0, TlvNullable(TlvInt16), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
             * more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.2
             */
            minMeasuredValue: Attribute(1, TlvNullable(TlvInt16.bound({ min: -32767 })), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
             * more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.3
             */
            maxMeasuredValue: Attribute(2, TlvNullable(TlvInt16.bound({ max: 32767 })), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the magnitude of the possible error that is associated with ScaledValue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.4
             */
            tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { readAcl: AccessLevel.View })
        }
    };

    const Extended = {
        attributes: {
            /**
             * ScaledValue represents the pressure in Pascals as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.5
             */
            scaledValue: Attribute(16, TlvNullable(TlvInt16), { readAcl: AccessLevel.View }),

            /**
             * The MinScaledValue attribute indicates the minimum value of ScaledValue that can be measured. The null
             * value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.6
             */
            minScaledValue: Attribute(17, TlvNullable(TlvInt16.bound({ min: -32767 })), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue SHALL be
             * greater than MinScaledValue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.7
             */
            maxScaledValue: Attribute(18, TlvNullable(TlvInt16.bound({ max: 32767 })), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the magnitude of the possible error that is associated with ScaledValue. The
             * true value is located in the range
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.8
             */
            scaledTolerance: OptionalAttribute(19, TlvUInt16.bound({ max: 2048 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue Attribute).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.9
             */
            scale: Attribute(20, TlvInt8.bound({ min: -127, max: 127 }), { readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { extended: true },
        elements: [ Base, Extended ]
    });
};