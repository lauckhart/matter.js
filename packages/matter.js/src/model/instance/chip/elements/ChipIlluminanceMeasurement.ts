/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0400, name: "IlluminanceMeasurement",
    description: "Illuminance Measurement",
    details: "Attributes and commands for configuring the measurement of illuminance, and reporting illuminance measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "IllumMeasuredValue", type: "uint16",
            conformance: "M", default: 0, quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "IllumMinMeasuredValue", type: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "IllumMaxMeasuredValue", type: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "IllumTolerance", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0004, name: "IllumLightSensorType", type: "enum8",
            conformance: "O", default: 255, quality: "X"
        }),

        DatatypeElement({
            name: "LightSensorType", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Photodiode",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Cmos",
                    conformance: "M"
                })
            ]
        })
    ]
}));
