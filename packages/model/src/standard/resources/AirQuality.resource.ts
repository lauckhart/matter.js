/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AirQuality } from "#index.js";

AirQuality.patch({
    details: "This cluster provides an interface to air quality classification using distinct levels with " +
        "human-readable labels.",
    xref: { document: "cluster", section: "2.9" },

    children: [
        undefined,

        {
            children: [
                { description: "Fair" },
                { description: "Moderate" },
                { description: "VeryPoor" },
                { description: "ExtremelyPoor" }
            ]
        },

        undefined,

        {
            children: [
                { description: "The air quality is unknown." },
                { description: "The air quality is good." },
                { description: "The air quality is fair." },
                { description: "The air quality is moderate." },
                { description: "The air quality is poor." },
                { description: "The air quality is very poor." },
                { description: "The air quality is extremely poor." }
            ]
        }
    ]
});
