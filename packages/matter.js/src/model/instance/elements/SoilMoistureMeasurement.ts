/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "SoilMoistureMeasurement", id: 0x408, classification: "application",
    xref: { document: "cluster", section: "2.6" },
    children: [
        {
            tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
            constraint: "MinMeasuredValue to MaxMeasuredValue", quality: "X P",
            details: "MeasuredValue represents the water content in % as follows",
            xref: { document: "cluster", section: "2.6.4.1" }
        },

        {
            tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
            conformance: "M", constraint: "0 to MaxMeasuredValue1", quality: "X",
            details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. " +
                     "The null value means this attribute is not defined. See Measured Value for more details",
            xref: { document: "cluster", section: "2.6.4.2" }
        },

        {
            tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
            conformance: "M", constraint: "MinMeasuredValue1 to 10000", quality: "X",
            details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. " +
                     "The null value means this attribute is not defined. See Measured Value for more details",
            xref: { document: "cluster", section: "2.6.4.3" }
        },

        {
            tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
            constraint: "0 to 2048",
            details: "See Measured Value",
            xref: { document: "cluster", section: "2.6.4.4" }
        }
    ]
});
