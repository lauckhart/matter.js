/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0408, name: "SoilMoistureMeasurement",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 3, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "MeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", value: "", quality: "XP",
            details: "MeasuredValue represents the water content in % as follows:",
            xref: { section: "2.6.4.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MinMeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "0 to MaxMeasuredValue-1", value: "", quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. The null value means this attribute is not defined. See Measured Value for more details.",
            xref: { section: "2.6.4.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxMeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue+1 to 10000", value: "", quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. The null value means this attribute is not defined. See Measured Value for more details.",
            xref: { section: "2.6.4.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "Tolerance", base: "uint16",
            access: "R V", conformance: "O", constraint: "0 to 2048", value: "",
            details: "See Measured Value.",
            xref: { section: "2.6.4.4", document: "cluster", version: "1.1" }
        })
    ]
}));
