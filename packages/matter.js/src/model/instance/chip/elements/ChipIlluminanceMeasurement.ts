/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0400, name: "IlluminanceMeasurement",
    description: "Illuminance Measurement",
    details: "Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "IllumMeasuredValue", base: "uint16",
            access: "R", conformance: "M", default: 0, quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "IllumMinMeasuredValue", base: "uint16",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "IllumMaxMeasuredValue", base: "uint16",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "IllumTolerance", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0004, name: "IllumLightSensorType", base: "enum8",
            access: "R", conformance: "O", default: 255, quality: "X"
        }),

        DatatypeElement({
            name: "LightSensorType", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Photodiode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Cmos",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
