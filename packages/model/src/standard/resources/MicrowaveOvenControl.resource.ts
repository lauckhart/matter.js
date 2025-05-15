/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MicrowaveOvenControl } from "#index.js";

MicrowaveOvenControl.patch({
    details: "This cluster defines the requirements for the Microwave Oven Control cluster." +
        "\n" +
        "This cluster has dependencies with the Operational State and Microwave Oven Mode clusters. The " +
        "Operational State cluster and the Microwave Oven Mode clusters, or derivatives of those clusters " +
        "shall appear on the same endpoint as this cluster.",
    xref: { document: "cluster", section: "8.13" },

    children: [
        undefined,

        {
            children: [
                { description: "PowerAsNumber" },
                { description: "PowerInWatts" },
                { description: "PowerNumberLimits" }
            ]
        }
    ]
});
