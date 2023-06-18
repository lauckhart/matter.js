/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0400, name: "IlluminanceMeasurement",
    classification: "application", description: "Illuminance Measurement",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "MeasuredValue",
            access: "R V", conformance: "M", constraint: "0, MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P", type: "uint16",
            details: "The MeasuredValue attribute represents the illuminance in Lux (symbol " +
                     "lx) as follows",
            xref: { document: "cluster", section: "2.2.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "IllumMinMeasuredValue",
            access: "R V", conformance: "M", constraint: "1 to MaxMeasuredValue1", default: 0, quality: "X", type: "uint16",
            details: "The MinMeasuredValue attribute indicates the minimum value of " +
                     "MeasuredValue that can be measured. A value of null indicates that " +
                     "this attribute is not defined. See Measured Value for more details",
            xref: { document: "cluster", section: "2.2.5.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "IllumMaxMeasuredValue",
            access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 65534", default: 0, quality: "X", type: "uint16",
            details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                     "MeasuredValue that can be measured. A value of null indicates that " +
                     "this attribute is not defined. See Measured Value for more details",
            xref: { document: "cluster", section: "2.2.5.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "IllumTolerance",
            access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
            details: "See Measured Value",
            xref: { document: "cluster", section: "2.2.5.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "IllumLightSensorType",
            access: "R V", conformance: "O", default: 255, quality: "X", type: "enum8",
            details: "The LightSensorType attribute specifies the electronic type of the " +
                     "light sensor. This attribute shall be set to one of the non-reserved " +
                     "values listed in Values of the LightSensorType Attribute",
            xref: { document: "cluster", section: "2.2.5.5" }
        },

        {
            tag: "attribute", id: 0x0000, name: "IllumMeasuredValue",
            conformance: "M", default: 0, quality: "X P", type: "uint16"
        },

        {
            tag: "datatype", name: "LightSensorType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Photodiode",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Cmos",
                    conformance: "M"
                }
            ]
        }
    ]
});
