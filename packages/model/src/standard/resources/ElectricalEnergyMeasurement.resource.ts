/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ElectricalEnergyMeasurement } from "#index.js";

ElectricalEnergyMeasurement.patch({
    details: "This cluster provides a mechanism for querying data about the electrical energy imported or provided " +
        "by the server.",
    xref: { document: "cluster", section: "2.12" },

    children: [
        undefined,

        {
            children: [
                { description: "ImportedEnergy" },
                { description: "ExportedEnergy" },
                { description: "CumulativeEnergy" },
                { description: "PeriodicEnergy" }
            ]
        }
    ]
});
