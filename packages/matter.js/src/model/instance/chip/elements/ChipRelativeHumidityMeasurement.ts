/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0405, name: "RelativeHumidityMeasurement",
    description: "Relative Humidity Measurement",
    details: "Attributes and commands for configuring the measurement of relative humidity, and reporting relative humidity measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "RelativeHumidityMeasuredValue", type: "uint16",
            conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "RelativeHumidityMinMeasuredValue", type: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "RelativeHumidityMaxMeasuredValue", type: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "RelativeHumidityTolerance", type: "uint16",
            conformance: "O"
        })
    ]
}));
