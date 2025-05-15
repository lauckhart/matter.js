/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RvcCleanMode } from "#index.js";

RvcCleanMode.patch({
    classification: "application", pics: "RVCCLEANM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for the cleaning type of robotic vacuum cleaner devices.",
    xref: "cluster§7.3",

    children: [
        undefined,
        { xref: "cluster§7.3.4", children: [{ description: "OnOff", details: "Dependency with the OnOff cluster" }] },
        {
            details: "At least one entry in the SupportedModes attribute shall include the Vacuum and/or the Mop mode tag " +
                "in the ModeTags field list.",
            xref: "cluster§7.3.6.1"
        },
        { xref: "cluster§7.3.6" },
        { xref: "cluster§7.3.6" },
        { xref: "cluster§7.3.6" },
        {
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§7.3.5.1"
        },
        { children: [{ xref: "cluster§7.3.7.1" }] },

        {
            children: [
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { xref: "cluster§7.3.7.2" },
                { details: "The device’s vacuuming feature is enabled in this mode.", xref: "cluster§7.3.7.2.2" },
                { details: "The device’s mopping feature is enabled in this mode.", xref: "cluster§7.3.7.2.3" }
            ]
        }
    ]
});
