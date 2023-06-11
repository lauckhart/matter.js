/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0403, name: "PressureMeasurement",
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
            id: 0x0000, name: "MeasuredValue", base: "int16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", value: "", quality: "XP",
            details: "This attribute represents the pressure in kPa as follows:",
            xref: { section: "2.4.5.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MinMeasuredValue", base: "int16",
            access: "R V", conformance: "M", constraint: "-32767 toMaxMeasuredValue-1", value: "", quality: "X",
            details: "This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more details.",
            xref: { section: "2.4.5.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxMeasuredValue", base: "int16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue+1 to 32767", value: "", quality: "X",
            details: "This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for more details.",
            xref: { section: "2.4.5.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "Tolerance", base: "uint16",
            access: "R V", conformance: "O", constraint: "0 to 2048", value: "0",
            details: "This attribute indicates the magnitude of the possible error that is associated with ScaledValue.",
            xref: { section: "2.4.5.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "ScaledValue", base: "int16",
            access: "R V", conformance: "EXT", constraint: "MinScaledValue to MaxScaledValue", value: "0", quality: "X",
            details: "ScaledValue represents the pressure in Pascals as follows:",
            xref: { section: "2.4.5.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "MinScaledValue", base: "int16",
            access: "R V", conformance: "EXT", constraint: "-32767 toMaxScaledValue-1", value: "0", quality: "X",
            details: "The MinScaledValue attribute indicates the minimum value of ScaledValue that can be measured. The null value indicates that the value is not available.",
            xref: { section: "2.4.5.6", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "MaxScaledValue", base: "int16",
            access: "R V", conformance: "EXT", constraint: "MinScaledValue+1 to 32767", value: "0", quality: "X",
            details: "This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue SHALL be greater than MinScaledValue.",
            xref: { section: "2.4.5.7", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "ScaledTolerance", base: "uint16",
            access: "R V", conformance: "[EXT]", constraint: "0 to 2048", value: "0",
            details: "This attribute indicates the magnitude of the possible error that is associated with ScaledValue. The true value is located in the range",
            xref: { section: "2.4.5.8", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0014, name: "Scale", base: "int8",
            access: "R V", conformance: "EXT", constraint: "-127 to 127", value: "0",
            details: "This attribute indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue Attribute).",
            xref: { section: "2.4.5.9", document: "cluster", version: "1.1" }
        })
    ]
}));
