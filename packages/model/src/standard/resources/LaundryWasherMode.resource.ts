/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryWasherMode } from "#index.js";

LaundryWasherMode.patch({
    classification: "application", pics: "LWM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for laundry washer as well as laundry dryer devices.",
    xref: "cluster§8.5",

    children: [
        undefined,
        { xref: "cluster§8.5.4", children: [{ description: "OnOff", details: "Dependency with the OnOff cluster" }] },
        {
            details: "At least one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
                "field list.",
            xref: "cluster§8.5.6.1"
        },
        { xref: "cluster§8.5.6" },
        { xref: "cluster§8.5.6" },
        { xref: "cluster§8.5.6" },
        {
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§8.5.5.1"
        },

        {
            children: [
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { xref: "cluster§8.5.7.1" },
                { details: "The normal regime of operation.", xref: "cluster§8.5.7.1.1" },
                { details: "Mode optimized for washing delicate garments.", xref: "cluster§8.5.7.1.2" },
                { details: "Mode optimized for heavy washing.", xref: "cluster§8.5.7.1.3" },
                { details: "Mode optimized for stain removal on white fabrics.", xref: "cluster§8.5.7.1.4" }
            ]
        }
    ]
});
