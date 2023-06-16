/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0204, name: "ThermostatUserInterfaceConfiguration",
    description: "Thermostat User Interface Configuration",
    details: "An interface for configuring the user interface of a thermostat (which may be remote from the thermostat).",
    children: [
        AttributeElement({
            id: 0x0000, name: "TemperatureDisplayMode", type: "enum8",
            access: "RW", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "KeypadLockout", type: "enum8",
            access: "RW VM", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "ScheduleProgrammingVisibility", type: "enum8",
            access: "RW VM", conformance: "O"
        })
    ]
}));
