/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0405, name: "RelativeHumidityMeasurement",
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
            access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P",
            details: "MeasuredValue represents the water content in % as follows",
            xref: { document: "cluster", section: "2.6.4.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MinMeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "0 to MaxMeasuredValue1", default: 0, quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of " +
                     "MeasuredValue that can be measured. The null value means this " +
                     "attribute is not defined. See Measured Value for more details",
            xref: { document: "cluster", section: "2.6.4.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxMeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 10000", default: 0, quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                     "MeasuredValue that can be measured. The null value means this " +
                     "attribute is not defined. See Measured Value for more details",
            xref: { document: "cluster", section: "2.6.4.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "Tolerance", base: "uint16",
            access: "R V", conformance: "O", constraint: "0 to 2048", default: 0,
            details: "See Measured Value",
            xref: { document: "cluster", section: "2.6.4.4", version: "1.1" }
        })
    ]
}));
