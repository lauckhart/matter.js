/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LevelControl } from "#index.js";

LevelControl.patch({
    details: "This cluster provides an interface for controlling a characteristic of a device that can be set to a " +
        "level, for example the brightness of a light, the degree of closure of a door, or the power output " +
        "of a heater.",
    xref: { document: "cluster", section: "1.6" },

    children: [
        undefined,
        { children: [{ description: "OnOff" }, { description: "Lighting" }, { description: "Frequency" }] },
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
                { description: "Dependency on On/Off cluster" },
                { description: "Dependency on Color Control cluster" }
            ]
        },

        { children: [{ description: "Increase the level" }, { description: "Decrease the level" }] },
        { children: [{ description: "Step upwards" }, { description: "Step downwards" }] }
    ]
});
