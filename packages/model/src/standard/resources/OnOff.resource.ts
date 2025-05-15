/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOff } from "#index.js";

OnOff.patch({
    details: "Attributes and commands for turning devices on and off.",
    xref: { document: "cluster", section: "1.5" },

    children: [
        undefined,
        { children: [{ description: "Lighting" }, { description: "DeadFrontBehavior" }, { description: "OffOnly" }] },
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
        { children: [{ description: "Indicates a command is only accepted when in On state." }] },

        {
            children: [
                { description: "Set the OnOff attribute to FALSE" },
                { description: "Set the OnOff attribute to TRUE" },
                {
                    description: "If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle)."
                }
            ]
        },

        { children: [{ description: "Delayed All Off" }, { description: "Dying Light" }] },

        {
            children: [
                { description: "Fade to off in 0.8 seconds" },
                { description: "No fade" },
                { description: "50% dim down in 0.8 seconds then fade to off in 12 seconds" }
            ]
        },

        { children: [{ description: "20% dim up in 0.5s then fade to off in 1 second" }] }
    ]
});
