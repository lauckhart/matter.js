/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ElectricalPowerMeasurement } from "#index.js";

ElectricalPowerMeasurement.patch({
    details: "This cluster provides a mechanism for querying data about electrical power as measured by the " +
        "server.",
    xref: { document: "cluster", section: "2.13" },

    children: [
        undefined,

        {
            children: [
                { description: "DirectCurrent" },
                { description: "AlternatingCurrent" },
                { description: "PolyphasePower" },
                { description: "Harmonics" },
                { description: "PowerQuality" }
            ]
        },

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
                undefined,
                { description: "Direct current" },
                { description: "Alternating current, either single-phase or polyphase" }
            ]
        }
    ]
});
