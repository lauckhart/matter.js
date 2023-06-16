/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0006, name: "OnOff",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "LT",
                    description: "Behavior that supports lighting applications.",
                    xref: { document: "cluster", section: "1.5.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "OnOff", base: "bool",
            access: "R V", conformance: "M", default: true, quality: "N S",
            details: "The OnOff attribute indicates whether the device type implemented on " +
                     "the endpoint is turned off or turned on, in these cases the value of " +
                     "the OnOff attribute equals FALSE, or TRUE respectively",
            xref: { document: "cluster", section: "1.5.6.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4000, name: "GlobalSceneControl", base: "bool",
            access: "R V", conformance: "LT", default: true,
            details: "In order to support the use case where the user gets back the last " +
                     "setting of a set of devices (e.g. level settings for lights), a global" +
                     " scene is introduced which is stored when the devices are turned off " +
                     "and recalled when the devices are turned on. The global scene is " +
                     "defined as the scene that is stored with group identifier 0 and scene " +
                     "identifier 0",
            xref: { document: "cluster", section: "1.5.6.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4001, name: "OnTime", base: "uint16",
            access: "RW VO", conformance: "LT", default: 0, quality: "X",
            details: "The OnTime attribute specifies the length of time (in 1/10ths second) " +
                     "that the ‘On’ state SHALL be maintained before automatically " +
                     "transitioning to the ‘Off’ state when using the OnWithTimedOff command" +
                     ". This attribute can be written at any time, but writing a value only " +
                     "has effect when in the ‘Timed On’ state. See OnWithTimedOff Command " +
                     "for more details",
            xref: { document: "cluster", section: "1.5.6.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4002, name: "OffWaitTime", base: "uint16",
            access: "RW VO", conformance: "LT", default: 0, quality: "X",
            details: "The OffWaitTime attribute specifies the length of time (in 1/10ths " +
                     "second) that the ‘Off’ state SHALL be guarded to prevent another " +
                     "OnWithTimedOff command turning the server back to its ‘On’ state (e.g" +
                     "., when leaving a room, the lights are turned off but an occupancy " +
                     "sensor detects the leaving person and attempts to turn the lights back" +
                     " on). This attribute can be written at any time, but writing a value " +
                     "only has an effect when in the ‘Timed On’ state followed by a " +
                     "transition to the ‘Delayed Off' state, or in the ‘Delayed Off’ state. " +
                     "See OnWithTimedOff Command for more details",
            xref: { document: "cluster", section: "1.5.6.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4003, name: "StartUpOnOff", base: "StartUpOnOffEnum",
            access: "RW VM", conformance: "LT", constraint: "desc", default: "MS", quality: "X N",
            details: "The StartUpOnOff attribute SHALL define the desired startup behavior " +
                     "of a device when it is supplied with power and this state SHALL be " +
                     "reflected in the OnOff attribute. If the value is null, the OnOff " +
                     "attribute is set to its previous value. Otherwise, the behavior is " +
                     "defined in the table defining StartUpOnOffEnum",
            xref: { document: "cluster", section: "1.5.6.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "Off",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command does not have any data fields",
            xref: { document: "cluster", section: "1.5.7.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "On",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command does not have any data fields",
            xref: { document: "cluster", section: "1.5.7.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "Toggle",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command does not have any data fields",
            xref: { document: "cluster", section: "1.5.7.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0040, name: "OffWithEffect",
            access: "O", conformance: "LT", direction: "request", response: "status",
            details: "The OffWithEffect command allows devices to be turned off using " +
                     "enhanced ways of fading. The OffWithEffect command SHALL have the " +
                     "following data fields",
            xref: { document: "cluster", section: "1.5.7.4", version: "1.1" }
        }),

        CommandElement({
            id: 0x0041, name: "OnWithRecallGlobalScene",
            access: "O", conformance: "LT", direction: "request", response: "status",
            details: "The OnWithRecallGlobalScene command allows the recall of the settings " +
                     "when the device was turned off",
            xref: { document: "cluster", section: "1.5.7.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0042, name: "OnWithTimedOff",
            access: "O", conformance: "LT", direction: "request", response: "status",
            details: "The OnWithTimedOff command allows devices to be turned on for a " +
                     "specific duration with a guarded off duration so that SHOULD the " +
                     "device be subsequently turned off, further OnWithTimedOff commands, " +
                     "received during this time, are prevented from turning the devices back" +
                     " on. Further",
            xref: { document: "cluster", section: "1.5.7.6", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "StartUpOnOffEnum", base: "enum8",
            details: "The data type StartUpOnOffEnum is derived from enum8. The values of " +
                     "the StartUpOnOffEnum data type are listed below",
            xref: { document: "cluster", section: "1.5.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    conformance: "M", description: "Set the OnOff attribute to FALSE",
                    xref: { document: "cluster", section: "1.5.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "On",
                    conformance: "M", description: "Set the OnOff attribute to TRUE",
                    xref: { document: "cluster", section: "1.5.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Toggle",
                    conformance: "M", description: "If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).",
                    xref: { document: "cluster", section: "1.5.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
