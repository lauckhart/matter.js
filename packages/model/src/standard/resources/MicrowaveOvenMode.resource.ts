/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MicrowaveOvenMode } from "#index.js";

MicrowaveOvenMode.patch({
    classification: "application", pics: "MWOM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for microwave oven devices.",
    xref: "cluster§8.12",

    children: [
        undefined,
        { xref: "cluster§8.12.4", children: [{ description: "OnOff", details: "Dependency with the OnOff cluster" }] },

        {
            details: "Exactly one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
                "field." +
                "\n" +
                "The Normal and Defrost mode tags are mutually exclusive and shall NOT both be used together in a " +
                "mode’s ModeTags.",
            xref: "cluster§8.12.5.1"
        },

        { xref: "cluster§8.12.5" },
        { xref: "cluster§8.12.5" },
        { xref: "cluster§8.12.5" },
        { xref: "cluster§8.12.6" },
        { xref: "cluster§8.12.6" },

        {
            children: [
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                { xref: "cluster§8.12.7.1" },
                {
                    details: "This is the normal mode of operation for general cooking of food.",
                    xref: "cluster§8.12.7.1.1"
                },
                { details: "This is a mode optimized for defrosting food.", xref: "cluster§8.12.7.1.2" }
            ]
        }
    ]
});
