/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0204, name: "ThermostatUserInterfaceConfiguration",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 2, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "TemperatureDisplayMode", base: "enum8",
            access: "RW VO", conformance: "M", constraint: "desc",
            details: "The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the thermostat screen.",
            xref: { document: "cluster", section: "4.5.5.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "KeypadLockout", base: "enum8",
            access: "RW VM", conformance: "M", constraint: "desc",
            details: "The KeypadLockout attribute specifies the level of functionality that is available to the user via the keypad.",
            xref: { document: "cluster", section: "4.5.5.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "ScheduleProgrammingVisibility", base: "enum8",
            access: "RW VM", conformance: "O", constraint: "desc",
            details: "The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming functionality or menu on a thermostat from a user to prevent local user programming of the weekly schedule. The schedule programming MAY still be performed via a remote interface, and the thermostat MAY operate in schedule programming mode.",
            xref: { document: "cluster", section: "4.5.5.3", version: "1.1" }
        })
    ]
}));
