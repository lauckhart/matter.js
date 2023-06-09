/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0403, name: "PressureMeasurement",
    description: "Pressure Measurement",
    details: "Attributes and commands for configuring the measurement of pressure, and reporting pressure measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "PressureMeasuredValue", base: "MeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "PressureMinMeasuredValue", base: "MinMeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "PressureMaxMeasuredValue", base: "MaxMeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "PressureTolerance", base: "Tolerance",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0010, name: "PressureScaledValue", base: "ScaledValue",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0011, name: "PressureMinScaledValue", base: "MinScaledValue",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0012, name: "PressureMaxScaledValue", base: "MaxScaledValue",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0013, name: "PressureScaledTolerance", base: "ScaledTolerance",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0014, name: "PressureScale", base: "Scale",
            access: { rw: "R" }, conformance: [ "O" ]
        })
    ]
}));
