/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0202, name: "FanControl",
    classification: "application", description: "Fan Control",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "FanMode",
            access: "RW", conformance: "M", constraint: "0 to 6", default: undefined, quality: "N", type: "enum8",
            details: "This attribute SHALL indicate the current speed mode of the fan. This " +
                     "attribute MAY be written by the client to indicate a new speed mode of" +
                     " the fan. This attribute SHALL be set to one of the values in the " +
                     "table below",
            xref: { document: "cluster", section: "4.4.6.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "FanModeSequence",
            access: "RW", conformance: "M", constraint: "0 to 5", default: 2, quality: "N", type: "enum8",
            details: "This indicates the fan speed ranges that SHALL be supported",
            xref: { document: "cluster", section: "4.4.6.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "PercentSetting",
            access: "RW", conformance: "M", constraint: "0 to 100", default: undefined, quality: "X", type: "uint8",
            details: "This attribute SHALL indicate the speed setting for the fan. This " +
                     "attribute MAY be written by the client to indicate a new fan speed. If" +
                     " the client writes null to this attribute, the attribute value SHALL " +
                     "NOT change. If this is set to 0, the server SHALL set the FanMode " +
                     "attribute value to Off",
            xref: { document: "cluster", section: "4.4.6.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "PercentCurrent",
            access: "R V", conformance: "M", constraint: "0 to 100", default: undefined, type: "uint8",
            details: "This attribute SHALL indicate the actual currently operating fan speed" +
                     ", or zero to indicate that the fan is off. See Section 4.4.6.3.1 for " +
                     "more details",
            xref: { document: "cluster", section: "4.4.6.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "SpeedMax",
            access: "R V", conformance: "SPD", constraint: "1 to 100", default: 1, quality: "F", type: "uint8",
            details: "This attribute SHALL indicate that the fan has one speed (value of 1) " +
                     "or the maximum speed, if the fan is capable of multiple speeds",
            xref: { document: "cluster", section: "4.4.6.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "SpeedSetting",
            access: "RW", conformance: "SPD", constraint: "0 to SpeedMax", default: undefined, quality: "X", type: "uint8",
            details: "This attribute SHALL indicate the speed setting for the fan. This " +
                     "attribute MAY be written by the client to indicate a new fan speed. If" +
                     " the client writes null to this attribute, the attribute value SHALL " +
                     "NOT change. If this is set to 0, the server SHALL set the FanMode " +
                     "attribute value to Off. Please see the Section 4.4.6.6.1 for details " +
                     "on other values",
            xref: { document: "cluster", section: "4.4.6.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "SpeedCurrent",
            access: "R V", conformance: "SPD", constraint: "0 to SpeedMax", default: undefined, quality: "P", type: "uint8",
            details: "This attribute SHALL indicate the actual currently operating fan speed" +
                     ", or zero to indicate that the fan is off",
            xref: { document: "cluster", section: "4.4.6.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "RockSupport",
            access: "R V", conformance: "RCK", constraint: "desc", default: undefined, quality: "F", type: "map8",
            details: "This attribute is a bitmap that indicates what rocking motions the " +
                     "server supports. The bitmap is shown in the table below",
            xref: { document: "cluster", section: "4.4.6.8" }
        },

        {
            tag: "attribute", id: 0x0008, name: "RockSetting",
            access: "RW", conformance: "RCK", constraint: "desc", default: undefined, quality: "P", type: "map8",
            details: "This attribute is a bitmap that indicates the current active fan " +
                     "rocking motion settings. Each bit SHALL only be set to 1, if the " +
                     "corresponding bit in the RockSupport attribute is set to 1, otherwise " +
                     "a status code of CONSTRAINT_ERROR SHALL be returned",
            xref: { document: "cluster", section: "4.4.6.9" }
        },

        {
            tag: "attribute", id: 0x0009, name: "WindSupport",
            access: "R V", conformance: "WND", constraint: "desc", default: undefined, quality: "F", type: "map8",
            details: "This attribute is a bitmap that indicates what wind modes the server " +
                     "supports. At least one wind mode bit SHALL be set. The bitmap is shown" +
                     " in the table below",
            xref: { document: "cluster", section: "4.4.6.10" }
        },

        {
            tag: "attribute", id: 0x000a, name: "WindSetting",
            access: "RW", conformance: "WND", constraint: "desc", default: undefined, quality: "P", type: "map8",
            details: "This attribute is a bitmap that indicates the current active fan wind " +
                     "feature settings. Each bit SHALL only be set to 1, if the " +
                     "corresponding bit in the WindSupport attribute is set to 1, otherwise " +
                     "a status code of CONSTRAINT_ERROR SHALL be returned",
            xref: { document: "cluster", section: "4.4.6.11" }
        },

        {
            tag: "datatype", name: "FanControlFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "MultiSpeed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Auto",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Rocking",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Wind",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "FanModeType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Off",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Low",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Medium",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "High",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "On",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Auto",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Smart",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "FanModeSequenceType",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "OffLowMedHigh",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "OffLowHigh",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "OffLowMedHighAuto",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "OffLowHighAuto",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "OffOnAuto",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "OffOn",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "RockSupportMask",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "RockLeftRight",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "RockUpDown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "RockRound",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WindSupportMask",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "SleepWind",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "NaturalWind",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WindSettingMask",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "SleepWind",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "NaturalWind",
                    conformance: "M"
                }
            ]
        }
    ]
});
