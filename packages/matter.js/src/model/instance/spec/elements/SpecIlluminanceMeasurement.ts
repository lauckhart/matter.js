/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0400, name: "IlluminanceMeasurement",
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
            access: "R V", conformance: "M", constraint: "0, MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P",
            details: "The MeasuredValue attribute represents the illuminance in Lux (symbol lx) as follows:",
            xref: { document: "cluster", section: "2.2.5.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MinMeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "1 to MaxMeasuredValue1", default: 0, quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. A value of null indicates that this attribute is not defined. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.2.5.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxMeasuredValue", base: "uint16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 65534", default: 0, quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A value of null indicates that this attribute is not defined. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.2.5.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "Tolerance", base: "uint16",
            access: "R V", conformance: "O", constraint: "0 to 2048", default: 0,
            details: "See Measured Value.",
            xref: { document: "cluster", section: "2.2.5.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "LightSensorType", base: "enum8",
            access: "R V", conformance: "O", default: "null", quality: "X",
            details: "The LightSensorType attribute specifies the electronic type of the light sensor. This attribute shall be set to one of the non-reserved values listed in Values of the LightSensorType Attribute.",
            xref: { document: "cluster", section: "2.2.5.5", version: "1.1" }
        })
    ]
}));
