/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, AccessLevel, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * The LightSensorType attribute specifies the electronic type of the light sensor. This attribute shall be set to one
 * of the non-reserved values listed in Values of the LightSensorType Attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.5
 */
export const enum TlvLightSensorType {
    Photodiode = 0,
    Cmos = 1
};

export namespace IlluminanceMeasurementCluster {
    export const id = 0x400;
    export const name = "IlluminanceMeasurement";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * The MeasuredValue attribute represents the illuminance in Lux (symbol lx) as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.1
             */
            measuredValue: Attribute(0, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View }),

            /**
             * The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. A
             * value of null indicates that this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.2
             */
            minMeasuredValue: Attribute(1, TlvNullable(TlvUInt16.bound({ min: 1 })), { readAcl: AccessLevel.View }),

            /**
             * The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A
             * value of null indicates that this attribute is not defined. See Measured Value for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.3
             */
            maxMeasuredValue: Attribute(2, TlvNullable(TlvUInt16.bound({ max: 65534 })), { readAcl: AccessLevel.View }),

            /**
             * See Measured Value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.4
             */
            tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { readAcl: AccessLevel.View }),

            /**
             * The LightSensorType attribute specifies the electronic type of the light sensor. This attribute shall be
             * set to one of the non-reserved values listed in Values of the LightSensorType Attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.2.5.5
             */
            lightSensorType: OptionalAttribute(
                4,
                TlvNullable(TlvEnum<TlvLightSensorType>()),
                { default: 255, readAcl: AccessLevel.View }
            )
        }
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};