/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0400, name: "IlluminanceMeasurement",
    description: "Illuminance Measurement",
    details: "Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "IllumMeasuredValue", base: "MeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "IllumMinMeasuredValue", base: "MinMeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "IllumMaxMeasuredValue", base: "MaxMeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "IllumTolerance", base: "Tolerance",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0004, name: "IllumLightSensorType", base: "LightSensorType",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        })
    ]
}))