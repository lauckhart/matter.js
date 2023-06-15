/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0404, name: "FlowMeasurement",
    description: "Flow Measurement",
    details: "Attributes and commands for configuring the measurement of flow, and reporting flow measurements.",
    children: [
        AttributeElement({
            id: 0x0000, name: "FlowMeasuredValue", base: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "FlowMinMeasuredValue", base: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "FlowMaxMeasuredValue", base: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "FlowTolerance", base: "uint16",
            conformance: "O", default: 0
        })
    ]
}));
