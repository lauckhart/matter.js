/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0402, name: "TemperatureMeasurement",
    description: "Temperature Measurement",
    details: "Attributes and commands for configuring the measurement of temperature, and reporting temperature measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "TempMeasuredValue", type: "int16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "TempMinMeasuredValue", type: "int16",
            conformance: "M", default: 32768, quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "TempMaxMeasuredValue", type: "int16",
            conformance: "M", default: 32768, quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "TempTolerance", type: "uint16",
            conformance: "O", default: 0
        })
    ]
}));
