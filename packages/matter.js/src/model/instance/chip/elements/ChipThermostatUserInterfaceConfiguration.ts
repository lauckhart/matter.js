/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0204, name: "ThermostatUserInterfaceConfiguration",
    description: "Thermostat User Interface Configuration",
    details: "An interface for configuring the user interface of a thermostat (which may be remote from the thermostat).",
    children: [
        AttributeElement({
            id: 0x0000, name: "temperatureDisplayMode", base: "enum8",
            access: { rw: "W" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0001, name: "keypadLockout", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0002, name: "scheduleProgrammingVisibility", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ]
        })
    ]
}));
