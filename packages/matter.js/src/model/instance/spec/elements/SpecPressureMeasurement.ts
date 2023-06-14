/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0403, name: "PressureMeasurement",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 3, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "EXT",
                    conformance: "O", description: "The cluster is capable of extended range and resolution",
                    xref: { document: "cluster", section: "2.4.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "MeasuredValue", base: "int16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P",
            details: "This attribute represents the pressure in kPa as follows:",
            xref: { document: "cluster", section: "2.4.5.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MinMeasuredValue", base: "int16",
            access: "R V", conformance: "M", default: 0, quality: "X",
            details: "This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.4.5.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxMeasuredValue", base: "int16",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 32767", default: 0, quality: "X",
            details: "This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for more details.",
            xref: { document: "cluster", section: "2.4.5.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "Tolerance", base: "uint16",
            access: "R V", conformance: "O", constraint: "0 to 2048", default: 0,
            details: "This attribute indicates the magnitude of the possible error that is associated with ScaledValue.",
            xref: { document: "cluster", section: "2.4.5.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "ScaledValue", base: "int16",
            access: "R V", conformance: "EXT", constraint: "MinScaledValue to MaxScaledValue", default: 0, quality: "X",
            details: "ScaledValue represents the pressure in Pascals as follows:",
            xref: { document: "cluster", section: "2.4.5.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "MinScaledValue", base: "int16",
            access: "R V", conformance: "EXT", default: 0, quality: "X",
            details: "The MinScaledValue attribute indicates the minimum value of ScaledValue that can be measured. The null value indicates that the value is not available.",
            xref: { document: "cluster", section: "2.4.5.6", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "MaxScaledValue", base: "int16",
            access: "R V", conformance: "EXT", constraint: "MinScaledValue1 to 32767", default: 0, quality: "X",
            details: "This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue SHALL be greater than MinScaledValue.",
            xref: { document: "cluster", section: "2.4.5.7", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "ScaledTolerance", base: "uint16",
            access: "R V", conformance: "[EXT]", constraint: "0 to 2048", default: 0,
            details: "This attribute indicates the magnitude of the possible error that is associated with ScaledValue. The true value is located in the range",
            xref: { document: "cluster", section: "2.4.5.8", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0014, name: "Scale", base: "int8",
            access: "R V", conformance: "EXT", constraint: "-127 to 127", default: 0,
            details: "This attribute indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue Attribute).",
            xref: { document: "cluster", section: "2.4.5.9", version: "1.1" }
        })
    ]
}));
