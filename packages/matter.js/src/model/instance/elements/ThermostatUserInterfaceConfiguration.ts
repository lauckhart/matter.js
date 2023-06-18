/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0204, name: "ThermostatUserInterfaceConfiguration",
    classification: "application", description: "Thermostat User Interface Configuration",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "TemperatureDisplayMode",
            access: "RW", conformance: "M", constraint: "desc", default: 0, type: "enum8",
            details: "The TemperatureDisplayMode attribute specifies the units of the " +
                     "temperature displayed on the thermostat screen",
            xref: { document: "cluster", section: "4.5.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "KeypadLockout",
            access: "RW VM", conformance: "M", constraint: "desc", default: 0, type: "enum8",
            details: "The KeypadLockout attribute specifies the level of functionality that " +
                     "is available to the user via the keypad",
            xref: { document: "cluster", section: "4.5.5.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "ScheduleProgrammingVisibility",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, type: "enum8",
            details: "The ScheduleProgrammingVisibility attribute is used to hide the weekly" +
                     " schedule programming functionality or menu on a thermostat from a " +
                     "user to prevent local user programming of the weekly schedule. The " +
                     "schedule programming MAY still be performed via a remote interface, " +
                     "and the thermostat MAY operate in schedule programming mode",
            xref: { document: "cluster", section: "4.5.5.3" }
        }
    ]
});
