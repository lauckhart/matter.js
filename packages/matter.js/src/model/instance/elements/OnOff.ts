/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0006, name: "OnOff",
    classification: "application", description: "On/Off",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "OnOff",
            access: "R V", conformance: "M", default: true, quality: "N S", type: "bool",
            details: "The OnOff attribute indicates whether the device type implemented on " +
                     "the endpoint is turned off or turned on, in these cases the value of " +
                     "the OnOff attribute equals FALSE, or TRUE respectively",
            xref: { document: "cluster", section: "1.5.6.1" }
        },

        {
            tag: "attribute", id: 0x4000, name: "GlobalSceneControl",
            access: "R V", conformance: "LT", default: true, type: "bool",
            details: "In order to support the use case where the user gets back the last " +
                     "setting of a set of devices (e.g. level settings for lights), a global" +
                     " scene is introduced which is stored when the devices are turned off " +
                     "and recalled when the devices are turned on. The global scene is " +
                     "defined as the scene that is stored with group identifier 0 and scene " +
                     "identifier 0",
            xref: { document: "cluster", section: "1.5.6.2" }
        },

        {
            tag: "attribute", id: 0x4001, name: "OnTime",
            access: "RW", conformance: "LT", default: 0, quality: "X", type: "uint16",
            details: "The OnTime attribute specifies the length of time (in 1/10ths second) " +
                     "that the ‘On’ state SHALL be maintained before automatically " +
                     "transitioning to the ‘Off’ state when using the OnWithTimedOff command" +
                     ". This attribute can be written at any time, but writing a value only " +
                     "has effect when in the ‘Timed On’ state. See OnWithTimedOff Command " +
                     "for more details",
            xref: { document: "cluster", section: "1.5.6.3" }
        },

        {
            tag: "attribute", id: 0x4002, name: "OffWaitTime",
            access: "RW", conformance: "LT", default: 0, quality: "X", type: "uint16",
            details: "The OffWaitTime attribute specifies the length of time (in 1/10ths " +
                     "second) that the ‘Off’ state SHALL be guarded to prevent another " +
                     "OnWithTimedOff command turning the server back to its ‘On’ state (e.g" +
                     "., when leaving a room, the lights are turned off but an occupancy " +
                     "sensor detects the leaving person and attempts to turn the lights back" +
                     " on). This attribute can be written at any time, but writing a value " +
                     "only has an effect when in the ‘Timed On’ state followed by a " +
                     "transition to the ‘Delayed Off' state, or in the ‘Delayed Off’ state. " +
                     "See OnWithTimedOff Command for more details",
            xref: { document: "cluster", section: "1.5.6.4" }
        },

        {
            tag: "attribute", id: 0x4003, name: "StartUpOnOff",
            access: "RW VM", conformance: "LT", constraint: "desc", default: "MS", quality: "X N", type: "OnOffStartUpOnOff",
            details: "The StartUpOnOff attribute SHALL define the desired startup behavior " +
                     "of a device when it is supplied with power and this state SHALL be " +
                     "reflected in the OnOff attribute. If the value is null, the OnOff " +
                     "attribute is set to its previous value. Otherwise, the behavior is " +
                     "defined in the table defining StartUpOnOffEnum",
            xref: { document: "cluster", section: "1.5.6.5" }
        },

        {
            tag: "command", id: 0x0000, name: "Off",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command does not have any data fields",
            xref: { document: "cluster", section: "1.5.7.1" }
        },

        {
            tag: "command", id: 0x0001, name: "On",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command does not have any data fields",
            xref: { document: "cluster", section: "1.5.7.2" }
        },

        {
            tag: "command", id: 0x0002, name: "Toggle",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command does not have any data fields",
            xref: { document: "cluster", section: "1.5.7.3" }
        },

        {
            tag: "command", id: 0x0040, name: "OffWithEffect",
            access: "O", conformance: "LT", direction: "request", response: "status",
            details: "The OffWithEffect command allows devices to be turned off using " +
                     "enhanced ways of fading. The OffWithEffect command SHALL have the " +
                     "following data fields",
            xref: { document: "cluster", section: "1.5.7.4" },
            children: [
                {
                    tag: "datatype", name: "EffectIdentifier",
                    conformance: "M", type: "OnOffEffectIdentifier"
                },

                {
                    tag: "datatype", name: "EffectVariant",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0041, name: "OnWithRecallGlobalScene",
            access: "O", conformance: "LT", direction: "request", response: "status",
            details: "The OnWithRecallGlobalScene command allows the recall of the settings " +
                     "when the device was turned off",
            xref: { document: "cluster", section: "1.5.7.5" }
        },

        {
            tag: "command", id: 0x0042, name: "OnWithTimedOff",
            access: "O", conformance: "LT", direction: "request", response: "status",
            details: "The OnWithTimedOff command allows devices to be turned on for a " +
                     "specific duration with a guarded off duration so that SHOULD the " +
                     "device be subsequently turned off, further OnWithTimedOff commands, " +
                     "received during this time, are prevented from turning the devices back" +
                     " on. Further",
            xref: { document: "cluster", section: "1.5.7.6" },
            children: [
                {
                    tag: "datatype", name: "OnOffControl",
                    conformance: "M", type: "OnOffControl"
                },

                {
                    tag: "datatype", name: "OnTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "OffWaitTime",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "datatype", name: "OnOffFeature",
            conformance: "M", type: "map32",
            details: "The data type StartUpOnOffEnum is derived from enum8. The values of " +
                     "the StartUpOnOffEnum data type are listed below",
            xref: { document: "cluster", section: "1.5.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Off",
                    conformance: "M", description: "Set the OnOff attribute to FALSE",
                    xref: { document: "cluster", section: "1.5.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Lighting",
                    conformance: "M", description: "Set the OnOff attribute to TRUE",
                    xref: { document: "cluster", section: "1.5.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Toggle",
                    conformance: "M", description: "If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).",
                    xref: { document: "cluster", section: "1.5.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "OnOffStartUpOnOff",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Off",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "On",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "TogglePreviousOnOff",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OnOffEffectIdentifier",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "DelayedAllOff",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "DyingLight",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OnOffDelayedAllOffEffectVariant",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "FadeToOffIn0P8Seconds",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "NoFade",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "50PercentDimDownIn0P8SecondsThenFadeToOffIn12Seconds",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OnOffDyingLightEffectVariant",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "20PercenterDimUpIn0P5SecondsThenFadeToOffIn1Second",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OnOffControl",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "AcceptOnlyWhenOn",
                    conformance: "M"
                }
            ]
        }
    ]
});
