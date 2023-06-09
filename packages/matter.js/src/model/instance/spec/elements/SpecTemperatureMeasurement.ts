/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0402, name: "TemperatureMeasurement",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Measured", base: "int16",
            access: "R V", conformance: "M", constraint: "MinMea", default: "", quality: "XP",
            xref: { section: "2.3.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MinMeasuredValue", base: "int16",
            access: "R V", conformance: "M", constraint: "-27315 toMaxMeasuredValue-1", default: "", quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being measured. See Measured Value for more details.",
            xref: { section: "2.3.4.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxMeasuredValue", base: "int16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue+1 to 32767", default: "", quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being measured. See Measured Value for more details.",
            xref: { section: "2.3.4.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "Tolerance", base: "uint16",
            access: "R V", conformance: "O", constraint: "0 to 2048", default: "0",
            details: "See Measured Value.",
            xref: { section: "2.3.4.4", document: "cluster", version: "1.1" }
        })
    ]
}));
