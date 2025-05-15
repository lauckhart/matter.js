/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThermostatUserInterfaceConfiguration } from "#index.js";

ThermostatUserInterfaceConfiguration.patch({
    classification: "application", pics: "TSUIC",
    details: "This cluster provides an interface to allow configuration of the user interface for a thermostat, or " +
        "a thermostat controller device, that supports a keypad and LCD screen.",
    xref: { document: "cluster", section: "4.5" },

    children: [
        undefined,
        {
            details: "Indicates the units of the temperature displayed on the thermostat screen.",
            xref: { document: "cluster", section: "4.5.6.1" }
        },
        {
            details: "Indicates the level of functionality that is available to the user via the keypad.",
            xref: { document: "cluster", section: "4.5.6.2" }
        },

        {
            details: "This attribute is used to hide the weekly schedule programming functionality or menu on a thermostat " +
                "from a user to prevent local user programming of the weekly schedule. The schedule programming may " +
                "still be performed via a remote interface, and the thermostat may operate in schedule programming " +
                "mode." +
                "\n" +
                "This attribute is designed to prevent local tampering with or disabling of schedules that may have " +
                "been programmed by users or service providers via a more capable remote interface. The programming " +
                "schedule shall continue to run even though it is not visible to the user locally at the thermostat.",

            xref: { document: "cluster", section: "4.5.6.3" }
        },

        {
            xref: { document: "cluster", section: "4.5.5.1" },
            children: [
                { description: "Temperature displayed in °C" },
                { description: "Temperature displayed in °F" }
            ]
        },

        {
            details: "The interpretation of the various levels is device-dependent.",
            xref: { document: "cluster", section: "4.5.5.2" },

            children: [
                { description: "All functionality available to the user" },
                { description: "Level 1 reduced functionality" },
                { description: "Level 2 reduced functionality" },
                { description: "Level 3 reduced functionality" },
                { description: "Level 4 reduced functionality" },
                { description: "Least functionality available to the user" }
            ]
        },

        {
            xref: { document: "cluster", section: "4.5.5.3" },
            children: [
                { description: "Local schedule programming functionality is enabled at the thermostat" },
                { description: "Local schedule programming functionality is disabled at the thermostat" }
            ]
        }
    ]
});
