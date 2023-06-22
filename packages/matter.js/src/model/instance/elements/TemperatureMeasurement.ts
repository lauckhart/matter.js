/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "TemperatureMeasurement", id: 0x402, classification: "application",
    description: "Temperature Measurement",
    details: "Attributes and commands for configuring the measurement of temperature, and reporting temperature " +
             "measurements",
    xref: { document: "cluster", section: "2.3" },
    children: [
        {
            tag: "attribute", name: "MeasuredValue", id: 0x0, type: "int16", access: "R V", conformance: "M",
            constraint: "MinMeasuredValuetoMaxMeasuredValue", quality: "X P",
            details: "Represents the temperature in degrees Celsius as follows",
            xref: { document: "cluster", section: "2.3.4.1" }
        },

        {
            tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "int16", access: "R V", conformance: "M",
            default: 32768, quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being" +
                     " measured. See Measured Value for more details",
            xref: { document: "cluster", section: "2.3.4.2" }
        },

        {
            tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "int16", access: "R V", conformance: "M",
            constraint: "MinMeasuredValue1 to 32767", default: 32768, quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being" +
                     " measured. See Measured Value for more details",
            xref: { document: "cluster", section: "2.3.4.3" }
        },

        {
            tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
            constraint: "0 to 2048",
            details: "See Measured Value",
            xref: { document: "cluster", section: "2.3.4.4" }
        },

        {
            tag: "attribute", name: "TempMeasuredValue", id: 0x0, type: "int16", conformance: "M", quality: "X"
        }
    ]
});
