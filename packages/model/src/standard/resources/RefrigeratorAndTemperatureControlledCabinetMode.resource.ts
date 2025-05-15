/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RefrigeratorAndTemperatureControlledCabinetMode } from "#index.js";

RefrigeratorAndTemperatureControlledCabinetMode.patch({
    classification: "application", pics: "TCCM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for refrigerator and temperature controlled cabinet devices.",
    xref: { document: "cluster", section: "8.7" },

    children: [
        undefined,
        {
            xref: { document: "cluster", section: "8.7.4" },
            children: [{ description: "OnOff", details: "Dependency with the OnOff cluster" }]
        },
        {
            details: "At least one entry in the SupportedModes attribute shall include the Auto mode tag in the ModeTags " +
                "field list.",
            xref: { document: "cluster", section: "8.7.6.1" }
        },
        { xref: { document: "cluster", section: "8.7.6" } },
        { xref: { document: "cluster", section: "8.7.6" } },
        { xref: { document: "cluster", section: "8.7.6" } },
        {
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: { document: "cluster", section: "8.7.5.1" }
        },

        {
            children: [
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                { xref: { document: "cluster", section: "8.7.7.1" } },
                {
                    details: "This mode reduces the temperature rapidly, typically above freezing grade.",
                    xref: { document: "cluster", section: "8.7.7.1.1" }
                },
                {
                    details: "This mode reduces the temperature rapidly, below freezing grade.",
                    xref: { document: "cluster", section: "8.7.7.1.2" }
                }
            ]
        }
    ]
});
