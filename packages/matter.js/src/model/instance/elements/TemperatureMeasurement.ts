/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0402, name: "TemperatureMeasurement",
    classification: "application", description: "Temperature Measurement",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Measured",
            access: "R V", conformance: "M", constraint: "MinMea", default: 0, quality: "X P", type: "int16",
            xref: { document: "cluster", section: "2.3.4" }
        },

        {
            tag: "attribute", id: 0x0001, name: "TempMinMeasuredValue",
            access: "R V", conformance: "M", default: 32768, quality: "X", type: "int16",
            details: "The MinMeasuredValue attribute indicates the minimum value of " +
                     "MeasuredValue that is capable of being measured. See Measured Value " +
                     "for more details",
            xref: { document: "cluster", section: "2.3.4.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "TempMaxMeasuredValue",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 32767", default: 32768, quality: "X", type: "int16",
            details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                     "MeasuredValue that is capable of being measured. See Measured Value " +
                     "for more details",
            xref: { document: "cluster", section: "2.3.4.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "TempTolerance",
            access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
            details: "See Measured Value",
            xref: { document: "cluster", section: "2.3.4.4" }
        },

        {
            tag: "attribute", id: 0x0000, name: "TempMeasuredValue",
            conformance: "M", quality: "X", type: "int16"
        }
    ]
});
