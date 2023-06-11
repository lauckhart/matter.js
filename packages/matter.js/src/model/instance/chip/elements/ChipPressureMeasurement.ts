/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0403, name: "PressureMeasurement",
    description: "Pressure Measurement",
    details: "Attributes and commands for configuring the measurement of pressure, and reporting pressure measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "pressureMeasuredValue", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "pressureMinMeasuredValue", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "pressureMaxMeasuredValue", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "pressureTolerance", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0010, name: "pressureScaledValue", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0011, name: "pressureMinScaledValue", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0012, name: "pressureMaxScaledValue", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0013, name: "pressureScaledTolerance", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0014, name: "pressureScale", base: "int8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        DatatypeElement({
            name: "PressureMeasurementFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "extended",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "extended",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                })
            ]
        })
    ]
}));
