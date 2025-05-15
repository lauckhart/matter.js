/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThermostatUserInterfaceConfiguration } from "#index.js";

ThermostatUserInterfaceConfiguration.patch({
    details: "This cluster provides an interface to allow configuration of the user interface for a thermostat, or " +
        "a thermostat controller device, that supports a keypad and LCD screen.",
    xref: { document: "cluster", section: "4.5" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Temperature displayed in °C" },
                { description: "Temperature displayed in °F" }
            ]
        },

        {
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
            children: [
                { description: "Local schedule programming functionality is enabled at the thermostat" },
                { description: "Local schedule programming functionality is disabled at the thermostat" }
            ]
        }
    ]
});
