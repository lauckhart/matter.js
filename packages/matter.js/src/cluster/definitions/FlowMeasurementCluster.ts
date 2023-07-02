/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, AccessLevel, OptionalAttribute } from "../../cluster/Cluster.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";



export namespace FlowMeasurementCluster {
    export const id = 0x404;
    export const name = "FlowMeasurement";
    export const revision = 1;

    const Base = {
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
            tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};