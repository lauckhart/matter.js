/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0403, name: "PressureMeasurement",
    classification: "application", description: "Pressure Measurement",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "MeasuredValue",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: undefined, quality: "X P", type: "int16",
            details: "This attribute represents the pressure in kPa as follows",
            xref: { document: "cluster", section: "2.4.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "int16",
            details: "This attribute indicates the minimum value of MeasuredValue that can " +
                     "be measured. See Measured Value for more details",
            xref: { document: "cluster", section: "2.4.5.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 32767", default: undefined, quality: "X", type: "int16",
            details: "This attribute indicates the maximum value of MeasuredValue that can " +
                     "be measured. See Measured Value for more details",
            xref: { document: "cluster", section: "2.4.5.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "Tolerance",
            access: "R V", conformance: "O", constraint: "0 to 2048", default: undefined, type: "uint16",
            details: "This attribute indicates the magnitude of the possible error that is " +
                     "associated with ScaledValue",
            xref: { document: "cluster", section: "2.4.5.4" }
        },

        {
            tag: "attribute", id: 0x0010, name: "ScaledValue",
            access: "R V", conformance: "EXT", constraint: "MinScaledValue to MaxScaledValue", default: undefined, quality: "X", type: "int16",
            details: "ScaledValue represents the pressure in Pascals as follows",
            xref: { document: "cluster", section: "2.4.5.5" }
        },

        {
            tag: "attribute", id: 0x0011, name: "MinScaledValue",
            access: "R V", conformance: "EXT", default: undefined, quality: "X", type: "int16",
            details: "The MinScaledValue attribute indicates the minimum value of " +
                     "ScaledValue that can be measured. The null value indicates that the " +
                     "value is not available",
            xref: { document: "cluster", section: "2.4.5.6" }
        },

        {
            tag: "attribute", id: 0x0012, name: "MaxScaledValue",
            access: "R V", conformance: "EXT", constraint: "MinScaledValue1 to 32767", default: undefined, quality: "X", type: "int16",
            details: "This attribute indicates the maximum value of ScaledValue that can be " +
                     "measured. MaxScaledValue SHALL be greater than MinScaledValue",
            xref: { document: "cluster", section: "2.4.5.7" }
        },

        {
            tag: "attribute", id: 0x0013, name: "ScaledTolerance",
            access: "R V", conformance: "[EXT]", constraint: "0 to 2048", default: undefined, quality: "P", type: "uint16",
            details: "This attribute indicates the magnitude of the possible error that is " +
                     "associated with ScaledValue. The true value is located in the range",
            xref: { document: "cluster", section: "2.4.5.8" }
        },

        {
            tag: "attribute", id: 0x0014, name: "Scale",
            access: "R V", conformance: "EXT", constraint: "-127 to 127", default: undefined, type: "int8",
            details: "This attribute indicates the base 10 exponent used to obtain " +
                     "ScaledValue (see ScaledValue Attribute",
            xref: { document: "cluster", section: "2.4.5.9" }
        },

        {
            tag: "attribute", id: 0x0000, name: "PressureMeasuredValue",
            conformance: "M", quality: "X P", type: "int16"
        },

        {
            tag: "datatype", name: "PressureMeasurementFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Extended",
                    conformance: "M"
                }
            ]
        }
    ]
});
