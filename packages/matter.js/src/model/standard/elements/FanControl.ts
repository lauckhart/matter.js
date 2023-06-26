/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "FanControl", id: 0x202, classification: "application",
    description: "Fan Control",
    details: "An interface for controlling a fan in a heating/cooling system.",
    xref: { document: "cluster", section: "4.4" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",

            children: [
                {
                    tag: "datatype", name: "MULTISPEED", id: 0x0, description: "1-100 speeds",
                    xref: { document: "cluster", section: "4.4.5" }
                },
                {
                    tag: "datatype", name: "AUTO", id: 0x1, description: "Automatic mode supported for fan speed",
                    xref: { document: "cluster", section: "4.4.5" }
                },
                {
                    tag: "datatype", name: "ROCKING", id: 0x2, description: "Rocking movement supported",
                    xref: { document: "cluster", section: "4.4.5" }
                },
                {
                    tag: "datatype", name: "WIND", id: 0x3, description: "Wind emulation supported",
                    xref: { document: "cluster", section: "4.4.5" }
                }
            ]
        },

        {
            tag: "attribute", name: "FanMode", id: 0x0, type: "enum8", access: "RW", conformance: "M",
            constraint: "0 to 6", quality: "N",
            details: "This attribute SHALL indicate the current speed mode of the fan. This attribute MAY be written by " +
                     "the client to indicate a new speed mode of the fan. This attribute SHALL be set to one of the " +
                     "values in the table below.",
            xref: { document: "cluster", section: "4.4.6.1" },

            children: [
                {
                    tag: "datatype", name: "Off", id: 0x0, conformance: "M",
                    details: "Setting the attribute value to Off SHALL set the values of these attributes to 0 (zero):",
                    xref: { document: "cluster", section: "4.4.6.1.1" }
                },
                { tag: "datatype", name: "Low", id: 0x1, conformance: "desc" },
                { tag: "datatype", name: "Medium", id: 0x2, conformance: "desc" },
                { tag: "datatype", name: "High", id: 0x3, conformance: "desc" },
                { tag: "datatype", name: "On", id: 0x4, conformance: "D" },
                {
                    tag: "datatype", name: "Auto", id: 0x5, conformance: "AUT",
                    details: "Setting the attribute value to Auto SHALL set the values of these attributes to null:",
                    xref: { document: "cluster", section: "4.4.6.1.3" }
                },
                { tag: "datatype", name: "Smart", id: 0x6, conformance: "D" }
            ]
        },

        {
            tag: "attribute", name: "FanModeSequence", id: 0x1, type: "enum8", access: "RW", conformance: "M",
            constraint: "0 to 5", default: 2, quality: "N",
            details: "This indicates the fan speed ranges that SHALL be supported.",
            xref: { document: "cluster", section: "4.4.6.2" },

            children: [
                { tag: "datatype", name: "OffLowMedHigh", id: 0x0, conformance: "O.a1" },
                { tag: "datatype", name: "OffLowHigh", id: 0x1, conformance: "O.a1" },
                { tag: "datatype", name: "OffLowMedHighAuto", id: 0x2, conformance: "[AUT]" },
                { tag: "datatype", name: "OffLowHighAuto", id: 0x3, conformance: "[AUT]" },
                { tag: "datatype", name: "OffOnAuto", id: 0x4, conformance: "[AUT]" },
                { tag: "datatype", name: "OffOn", id: 0x5, conformance: "O.a1" }
            ]
        },

        {
            tag: "attribute", name: "PercentSetting", id: 0x2, type: "uint8", access: "RW", conformance: "M",
            constraint: "0 to 100", quality: "X",
            details: "This attribute SHALL indicate the speed setting for the fan. This attribute MAY be written by the " +
                     "client to indicate a new fan speed. If the client writes null to this attribute, the attribute " +
                     "value SHALL NOT change. If this is set to 0, the server SHALL set the FanMode attribute value to " +
                     "Off.",
            xref: { document: "cluster", section: "4.4.6.3" }
        },

        {
            tag: "attribute", name: "PercentCurrent", id: 0x3, type: "uint8", access: "R V", conformance: "M",
            constraint: "0 to 100",
            details: "This attribute SHALL indicate the actual currently operating fan speed, or zero to indicate that " +
                     "the fan is off. See Section 4.4.6.3.1 for more details.",
            xref: { document: "cluster", section: "4.4.6.4" }
        },

        {
            tag: "attribute", name: "SpeedMax", id: 0x4, type: "uint8", access: "R V", conformance: "SPD",
            constraint: "1 to 100", default: 1, quality: "F",
            details: "This attribute SHALL indicate that the fan has one speed (value of 1) or the maximum speed, if the " +
                     "fan is capable of multiple speeds.",
            xref: { document: "cluster", section: "4.4.6.5" }
        },

        {
            tag: "attribute", name: "SpeedSetting", id: 0x5, type: "uint8", access: "RW", conformance: "SPD",
            constraint: "0 to SpeedMax", quality: "X",
            details: "This attribute SHALL indicate the speed setting for the fan. This attribute MAY be written by the " +
                     "client to indicate a new fan speed. If the client writes null to this attribute, the attribute " +
                     "value SHALL NOT change. If this is set to 0, the server SHALL set the FanMode attribute value to " +
                     "Off. Please see the Section 4.4.6.6.1 for details on other values.",
            xref: { document: "cluster", section: "4.4.6.6" }
        },

        {
            tag: "attribute", name: "SpeedCurrent", id: 0x6, type: "uint8", access: "R V", conformance: "SPD",
            constraint: "0 to SpeedMax", quality: "P",
            details: "This attribute SHALL indicate the actual currently operating fan speed, or zero to indicate that " +
                     "the fan is off.",
            xref: { document: "cluster", section: "4.4.6.7" }
        },

        {
            tag: "attribute", name: "RockSupport", id: 0x7, type: "map8", access: "R V", conformance: "RCK",
            constraint: "desc", quality: "F",
            details: "This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is " +
                     "shown in the table below.",
            xref: { document: "cluster", section: "4.4.6.8" },
            children: [
                { tag: "datatype", name: "RockLeftRight", id: 0x0 },
                { tag: "datatype", name: "RockUpDown", id: 0x1 },
                { tag: "datatype", name: "RockRound", id: 0x2 }
            ]
        },

        {
            tag: "attribute", name: "RockSetting", id: 0x8, type: "map8", access: "RW", conformance: "RCK",
            constraint: "desc", quality: "P",
            details: "This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit " +
                     "SHALL only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, " +
                     "otherwise a status code of CONSTRAINT_ERROR SHALL be returned.",
            xref: { document: "cluster", section: "4.4.6.9" },
            children: [
                { tag: "datatype", name: "RockLeftRight", id: 0x0 },
                { tag: "datatype", name: "RockUpDown", id: 0x1 },
                { tag: "datatype", name: "RockRound", id: 0x2 }
            ]
        },

        {
            tag: "attribute", name: "WindSupport", id: 0x9, type: "map8", access: "R V", conformance: "WND",
            constraint: "desc", quality: "F",
            details: "This attribute is a bitmap that indicates what wind modes the server supports. At least one wind " +
                     "mode bit SHALL be set. The bitmap is shown in the table below.",
            xref: { document: "cluster", section: "4.4.6.10" },
            children: [
                { tag: "datatype", name: "SleepWind", id: 0x0 },
                { tag: "datatype", name: "NaturalWind", id: 0x1 }
            ]
        },

        {
            tag: "attribute", name: "WindSetting", id: 0xa, type: "map8", access: "RW", conformance: "WND",
            constraint: "desc", quality: "P",
            details: "This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit " +
                     "SHALL only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, " +
                     "otherwise a status code of CONSTRAINT_ERROR SHALL be returned.",
            xref: { document: "cluster", section: "4.4.6.11" },
            children: [
                { tag: "datatype", name: "SleepWind", id: 0x0 },
                { tag: "datatype", name: "NaturalWind", id: 0x1 }
            ]
        }
    ]
});