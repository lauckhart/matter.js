/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DishwasherMode } from "#index.js";

DishwasherMode.patch({
    classification: "application", pics: "DISHM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for dishwasher devices.",
    xref: "cluster§8.3",

    children: [
        undefined,
        { xref: "cluster§8.3.4", children: [{ description: "OnOff", details: "Dependency with the OnOff cluster" }] },
        {
            details: "At least one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
                "field list.",
            xref: "cluster§8.3.6.1"
        },
        { xref: "cluster§8.3.6" },
        { xref: "cluster§8.3.6" },
        { xref: "cluster§8.3.6" },
        {
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§8.3.5.1"
        },

        {
            children: [
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { xref: "cluster§8.3.7.1" },
                { details: "The normal regime of operation.", xref: "cluster§8.3.7.1.1" },
                { details: "Mode optimized for washing heavily-soiled dishes.", xref: "cluster§8.3.7.1.2" },
                { details: "Mode optimized for light washing.", xref: "cluster§8.3.7.1.3" }
            ]
        }
    ]
});
