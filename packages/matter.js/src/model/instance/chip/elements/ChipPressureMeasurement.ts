/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0403, name: "PressureMeasurement",
    description: "Pressure Measurement",
    details: "Attributes and commands for configuring the measurement of pressure, and reporting pressure measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "PressureMeasuredValue", base: "int16",
            conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "PressureMinMeasuredValue", base: "int16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "PressureMaxMeasuredValue", base: "int16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "PressureTolerance", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "PressureScaledValue", base: "int16",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0011, name: "PressureMinScaledValue", base: "int16",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0012, name: "PressureMaxScaledValue", base: "int16",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0013, name: "PressureScaledTolerance", base: "uint16",
            conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0014, name: "PressureScale", base: "int8",
            conformance: "O", default: 0
        }),

        DatatypeElement({
            name: "PressureMeasurementFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Extended",
                    conformance: "M"
                })
            ]
        })
    ]
}));
