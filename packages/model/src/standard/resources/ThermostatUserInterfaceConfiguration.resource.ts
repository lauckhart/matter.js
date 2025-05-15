/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ThermostatUserInterfaceConfiguration", tag: "cluster",
    classification: "application", pics: "TSUIC",
    details: "This cluster provides an interface to allow configuration of the user interface for a thermostat, or " +
        "a thermostat controller device, that supports a keypad and LCD screen.",
    xref: "cluster§4.5",

    children: [
        {
            name: "TemperatureDisplayMode", tag: "attribute",
            details: "Indicates the units of the temperature displayed on the thermostat screen.",
            xref: "cluster§4.5.6.1"
        },
        {
            name: "KeypadLockout", tag: "attribute",
            details: "Indicates the level of functionality that is available to the user via the keypad.",
            xref: "cluster§4.5.6.2"
        },

        {
            name: "ScheduleProgrammingVisibility", tag: "attribute",

            details: "This attribute is used to hide the weekly schedule programming functionality or menu on a thermostat " +
                "from a user to prevent local user programming of the weekly schedule. The schedule programming may " +
                "still be performed via a remote interface, and the thermostat may operate in schedule programming " +
                "mode." +
                "\n" +
                "This attribute is designed to prevent local tampering with or disabling of schedules that may have " +
                "been programmed by users or service providers via a more capable remote interface. The programming " +
                "schedule shall continue to run even though it is not visible to the user locally at the thermostat.",

            xref: "cluster§4.5.6.3"
        },

        {
            name: "TemperatureDisplayModeEnum", tag: "datatype",
            xref: "cluster§4.5.5.1",
            children: [
                { name: "Celsius", tag: "field", description: "Temperature displayed in °C" },
                { name: "Fahrenheit", tag: "field", description: "Temperature displayed in °F" }
            ]
        },

        {
            name: "KeypadLockoutEnum", tag: "datatype",
            details: "The interpretation of the various levels is device-dependent.",
            xref: "cluster§4.5.5.2",

            children: [
                { name: "NoLockout", tag: "field", description: "All functionality available to the user" },
                { name: "Lockout1", tag: "field", description: "Level 1 reduced functionality" },
                { name: "Lockout2", tag: "field", description: "Level 2 reduced functionality" },
                { name: "Lockout3", tag: "field", description: "Level 3 reduced functionality" },
                { name: "Lockout4", tag: "field", description: "Level 4 reduced functionality" },
                { name: "Lockout5", tag: "field", description: "Least functionality available to the user" }
            ]
        },

        {
            name: "ScheduleProgrammingVisibilityEnum", tag: "datatype",
            xref: "cluster§4.5.5.3",

            children: [
                {
                    name: "ScheduleProgrammingPermitted", tag: "field",
                    description: "Local schedule programming functionality is enabled at the thermostat"
                },
                {
                    name: "ScheduleProgrammingDenied", tag: "field",
                    description: "Local schedule programming functionality is disabled at the thermostat"
                }
            ]
        }
    ]
});
