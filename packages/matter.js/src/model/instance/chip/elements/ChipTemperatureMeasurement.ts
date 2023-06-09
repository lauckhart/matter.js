/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0402, name: "TemperatureMeasurement",
    description: "Temperature Measurement",
    details: "Attributes and commands for configuring the measurement of temperature, and reporting temperature measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "TempMeasuredValue", base: "MeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "TempMinMeasuredValue", base: "MinMeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "TempMaxMeasuredValue", base: "MaxMeasuredValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "TempTolerance", base: "Tolerance",
            access: { rw: "R" }, conformance: [ "O" ]
        })
    ]
}))