/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0407, name: "LeafWetnessMeasurement",
    classification: "application",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "MeasuredValue",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P", type: "uint16",
            details: "MeasuredValue represents the water content in % as follows",
            xref: { document: "cluster", section: "2.6.4.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
            access: "R V", conformance: "M", constraint: "0 to MaxMeasuredValue1", default: 0, quality: "X", type: "uint16",
            details: "The MinMeasuredValue attribute indicates the minimum value of " +
                     "MeasuredValue that can be measured. The null value means this " +
                     "attribute is not defined. See Measured Value for more details",
            xref: { document: "cluster", section: "2.6.4.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 10000", default: 0, quality: "X", type: "uint16",
            details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                     "MeasuredValue that can be measured. The null value means this " +
                     "attribute is not defined. See Measured Value for more details",
            xref: { document: "cluster", section: "2.6.4.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "Tolerance",
            access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
            details: "See Measured Value",
            xref: { document: "cluster", section: "2.6.4.4" }
        }
    ]
});
