/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0404, name: "FlowMeasurement",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 3, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "MeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", quality: "X P",
            details: "MeasuredValue represents the flow in m3/h as follows: MeasuredValue = 10 x Flow",
            xref: { document: "cluster", section: "2.5.4.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MinMeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "0 to MaxMeasuredValue1", quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.5.4.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxMeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 65534", quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.5.4.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "Tolerance", base: "uint16",
            access: "R V", conformance: "O", constraint: "0 to 2048",
            details: "See Measured Value.",
            xref: { document: "cluster", section: "2.5.4.4", version: "1.1" }
        })
    ]
}));
