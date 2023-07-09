/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "OnOff", id: 0x6, classification: "application", description: "On/Off",
    details: "Attributes and commands for switching devices between 'On' and 'Off' states.",
    xref: { document: "cluster", section: "1.5" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "1.5.4" },
            children: [ {
                tag: "datatype", name: "LT", id: 0x0, description: "LevelControlForLighting",
                details: "Behavior that supports lighting applications."
            } ]
        },

        {
            tag: "attribute", name: "OnOff", id: 0x0, type: "bool", access: "R V", conformance: "M",
            default: true, quality: "N S",
            details: "The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or " +
                     "turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.",
            xref: { document: "cluster", section: "1.5.6.1" }
        },

        {
            tag: "attribute", name: "GlobalSceneControl", id: 0x4000, type: "bool", access: "R V",
            conformance: "LT", default: true,
            details: "In order to support the use case where the user gets back the last setting of a set of devices " +
                     "(e.g. level settings for lights), a global scene is introduced which is stored when the devices are " +
                     "turned off and recalled when the devices are turned on. The global scene is defined as the scene " +
                     "that is stored with group identifier 0 and scene identifier 0.",
            xref: { document: "cluster", section: "1.5.6.2" }
        },

        {
            tag: "attribute", name: "OnTime", id: 0x4001, type: "uint16", access: "RW VO", conformance: "LT",
            default: 0, quality: "X",
            details: "The OnTime attribute specifies the length of time (in 1/10ths second) that the ‘On’ state SHALL be " +
                     "maintained before automatically transitioning to the ‘Off’ state when using the OnWithTimedOff " +
                     "command. This attribute can be written at any time, but writing a value only has effect when in the " +
                     "‘Timed On’ state. See OnWithTimedOff Command for more details.",
            xref: { document: "cluster", section: "1.5.6.3" }
        },

        {
            tag: "attribute", name: "OffWaitTime", id: 0x4002, type: "uint16", access: "RW VO",
            conformance: "LT", default: 0, quality: "X",

            details: "The OffWaitTime attribute specifies the length of time (in 1/10ths second) that the ‘Off’ state " +
                     "SHALL be guarded to prevent another OnWithTimedOff command turning the server back to its ‘On’ " +
                     "state (e.g., when leaving a room, the lights are turned off but an occupancy sensor detects the " +
                     "leaving person and attempts to turn the lights back on). This attribute can be written at any time, " +
                     "but writing a value only has an effect when in the ‘Timed On’ state followed by a transition to the " +
                     "‘Delayed Off' state, or in the ‘Delayed Off’ state. See OnWithTimedOff Command for more details.",

            xref: { document: "cluster", section: "1.5.6.4" }
        },

        {
            tag: "attribute", name: "StartUpOnOff", id: 0x4003, type: "StartUpOnOffEnum", access: "RW VM",
            conformance: "LT", constraint: "desc", quality: "X N",
            details: "The StartUpOnOff attribute SHALL define the desired startup behavior of a device when it is " +
                     "supplied with power and this state SHALL be reflected in the OnOff attribute. If the value is null, " +
                     "the OnOff attribute is set to its previous value. Otherwise, the behavior is defined in the table " +
                     "defining StartUpOnOffEnum.",
            xref: { document: "cluster", section: "1.5.6.5" }
        },

        {
            tag: "command", name: "Off", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "This command does not have any data fields.",
            xref: { document: "cluster", section: "1.5.7.1" }
        },

        {
            tag: "command", name: "On", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "This command does not have any data fields.",
            xref: { document: "cluster", section: "1.5.7.2" }
        },

        {
            tag: "command", name: "Toggle", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "This command does not have any data fields.",
            xref: { document: "cluster", section: "1.5.7.3" }
        },

        {
            tag: "command", name: "OffWithEffect", id: 0x40, access: "O", conformance: "LT",
            direction: "request", response: "status",
            details: "The OffWithEffect command allows devices to be turned off using enhanced ways of fading. The " +
                     "OffWithEffect command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.5.7.4" },

            children: [
                {
                    tag: "datatype", name: "EffectIdentifier", id: 0x0, type: "OnOffEffectIdentifier", conformance: "M",
                    constraint: "desc",
                    details: "The EffectIdentifier field specifies the fading effect to use when turning the device off. This " +
                             "field SHALL contain one of the non-reserved values listed in Values of the EffectIdentifier Field " +
                             "of the OffWithEffect Command.",
                    xref: { document: "cluster", section: "1.5.7.4.1" }
                },

                {
                    tag: "datatype", name: "EffectVariant", id: 0x1, type: "uint8", conformance: "M",
                    constraint: "desc",
                    details: "The EffectVariant field is used to indicate which variant of the effect, indicated in the " +
                             "EffectIdentifier field, SHOULD be triggered. If the server does not support the given variant, it " +
                             "SHALL use the default variant. This field is dependent on the value of the EffectIdentifier field " +
                             "and SHALL contain one of the non-reserved values listed in Values of the EffectVariant Field of the " +
                             "OffWithEffect Command.",
                    xref: { document: "cluster", section: "1.5.7.4.2" }
                }
            ]
        },

        {
            tag: "command", name: "OnWithRecallGlobalScene", id: 0x41, access: "O", conformance: "LT",
            direction: "request", response: "status",
            details: "The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned " +
                     "off.",
            xref: { document: "cluster", section: "1.5.7.5" }
        },

        {
            tag: "command", name: "OnWithTimedOff", id: 0x42, access: "O", conformance: "LT",
            direction: "request", response: "status",
            details: "The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded " +
                     "off duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, " +
                     "received during this time, are prevented from turning the devices back on. Further",
            xref: { document: "cluster", section: "1.5.7.6" },

            children: [
                {
                    tag: "datatype", name: "OnOffControl", id: 0x0, type: "map8", conformance: "M",
                    details: "The OnOffControl field contains information on how the server is to be operated. This field SHALL " +
                             "be formatted as illustrated in Format of the OnOffControl Field of the OnWithTimedOff Command.",
                    xref: { document: "cluster", section: "1.5.7.6.1" },
                    children: [
                        { tag: "datatype", name: "AcceptOnlyWhenOn", id: 0x0 },
                        { tag: "datatype", name: "Reserved", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "OnTime", id: 0x1, type: "uint16", conformance: "M", quality: "X",
                    details: "The OnTime field is used to adjust the value of the OnTime attribute.",
                    xref: { document: "cluster", section: "1.5.7.6.2" }
                },
                {
                    tag: "datatype", name: "OffWaitTime", id: 0x2, type: "uint16", conformance: "M", quality: "X",
                    details: "The OffWaitTime field is used to adjust the value of the OffWaitTime attribute.",
                    xref: { document: "cluster", section: "1.5.7.6.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "StartUpOnOffEnum", type: "enum8", conformance: "M",
            xref: { document: "cluster", section: "1.5.5.1" },

            children: [
                { tag: "datatype", name: "Off", id: 0x0, conformance: "M", description: "Set the OnOff attribute to FALSE" },
                { tag: "datatype", name: "On", id: 0x1, conformance: "M", description: "Set the OnOff attribute to TRUE" },
                {
                    tag: "datatype", name: "Toggle", id: 0x2, conformance: "M",
                    description: "If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle)."
                }
            ]
        },

        {
            tag: "datatype", name: "OnOffEffectIdentifier", type: "enum8", conformance: "M",
            children: [
                { tag: "datatype", name: "DelayedAllOff", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "DyingLight", id: 0x1, conformance: "M" }
            ]
        }
    ]
});
