/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ValveConfigurationAndControl } from "#index.js";

ValveConfigurationAndControl.patch({
    details: "This cluster is used to configure a valve.",
    xref: { document: "cluster", section: "4.6" },

    children: [
        undefined,
        { children: [{ description: "TimeSync" }, { description: "Level" }] },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Unspecified fault detected" },
                { description: "Valve is blocked" },
                { description: "Valve has detected a leak" },
                { description: "No valve is connected to controller" },
                { description: "Short circuit is detected" },
                { description: "The available current has been exceeded" }
            ]
        },

        {
            children: [
                { description: "Valve is in closed position" },
                { description: "Valve is in open position" },
                { description: "Valve is transitioning between closed and open positions or between levels" }
            ]
        },

        { children: [{ description: "The requested action could not be performed due to a fault on the valve." }] }
    ]
});
