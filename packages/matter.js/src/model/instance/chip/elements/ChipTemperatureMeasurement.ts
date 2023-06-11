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
            id: 0x0000, name: "tempMeasuredValue", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "tempMinMeasuredValue", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }, value: "0x8000"
        }),

        AttributeElement({
            id: 0x0002, name: "tempMaxMeasuredValue", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }, value: "0x8000"
        }),

        AttributeElement({
            id: 0x0003, name: "tempTolerance", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        })
    ]
}));
