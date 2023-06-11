/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0006, name: "OnOff",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "OnOff", base: "bool",
            access: "R V", conformance: "M", value: "FALSE", quality: "SN",
            details: "The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.",
            xref: { section: "1.5.6.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4000, name: "GlobalSceneControl", base: "bool",
            access: "R V", conformance: "LT", value: "TRUE",
            details: "In order to support the use case where the user gets back the last setting of a set of devices (e.g. level settings for lights), a global scene is introduced which is stored when the devices are turned off and recalled when the devices are turned on. The global scene is defined as the scene that is stored with group identifier 0 and scene identifier 0.",
            xref: { section: "1.5.6.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4001, name: "OnTime", base: "uint16",
            access: "RW VO", conformance: "LT", value: "0", quality: "X",
            details: "The OnTime attribute specifies the length of time (in 1/10ths second) that the ‘On’ state SHALL be maintained before automatically transitioning to the ‘Off’ state when using the OnWithTimedOff command. This attribute can be written at any time, but writing a value only has effect when in the ‘Timed On’ state. See OnWithTimedOff Command for more details.",
            xref: { section: "1.5.6.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4002, name: "OffWaitTime", base: "uint16",
            access: "RW VO", conformance: "LT", value: "0", quality: "X",
            details: "The OffWaitTime attribute specifies the length of time (in 1/10ths second) that the ‘Off’ state SHALL be guarded to prevent another OnWithTimedOff command turning the server back to its ‘On’ state (e.g., when leaving a room, the lights are turned off but an occupancy sensor detects the leaving person and attempts to turn the lights back on). This attribute can be written at any time, but writing a value only has an effect when in the ‘Timed On’ state followed by a transition to the ‘Delayed Off' state, or in the ‘Delayed Off’ state. See OnWithTimedOff Command for more details.",
            xref: { section: "1.5.6.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4003, name: "StartUpOnOff", base: "StartUpOnOffEnum",
            access: "RW VM", conformance: "LT", constraint: "desc", value: "MS", quality: "XN",
            details: "The StartUpOnOff attribute SHALL define the desired startup behavior of a device when it is supplied with power and this state SHALL be reflected in the OnOff attribute. If the value is null, the OnOff attribute is set to its previous value. Otherwise, the behavior is defined in the table defining StartUpOnOffEnum.",
            xref: { section: "1.5.6.5", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "StartUpOnOffEnum", base: "enum8",
            details: "The data type StartUpOnOffEnum is derived from enum8. The values of the StartUpOnOffEnum data type are listed below.",
            xref: { section: "1.5.5.1", document: "cluster", version: "1.1" }
        })
    ]
}));
