/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0400, name: "IlluminanceMeasurement",
    description: "Illuminance Measurement",
    details: "Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "IllumMeasuredValue", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "IllumMinMeasuredValue", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "IllumMaxMeasuredValue", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "IllumTolerance", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0004, name: "IllumLightSensorType", base: "enum8",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        DatatypeElement({
            name: "LightSensorType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "Photodiode", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Photodiode", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Cmos", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Cmos", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
