/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BallastConfiguration } from "#index.js";

BallastConfiguration.patch({
    details: "This cluster is used for configuring a lighting ballast." +
        "\n" +
        "NOTE Support for Ballast Configuration cluster is provisional.",
    xref: { document: "cluster", section: "3.3" },

    children: [
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
                { description: "Operational state of the ballast." },
                { description: "Operational state of the lamps." }
            ]
        },

        { children: [{ description: "State of LampBurnHours alarm generation" }] }
    ]
});
