/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "semanticNamespace", name: "PowerSource",
    details: "The tags contained in this namespace are restricted for use in the power source domain and shall NOT " +
        "be used in any other domain or context.",
    xref: "namespace§15",

    children: [
        {
            tag: "semanticTag", name: "Unknown",
            description: "The Power Source cluster is related to power provided from an unknown source"
        },

        {
            tag: "semanticTag", name: "Grid",
            description: "The Power Source cluster is related to power provided from the electrical grid",
            details: "Power Source clusters with this tag shall implement the WIRED feature.",
            xref: "namespace§15.1"
        },

        {
            tag: "semanticTag", name: "Solar",
            description: "The Power Source cluster is related to power provided from a solar panel array",
            details: "Power Source clusters with this tag shall implement the WIRED feature.",
            xref: "namespace§15.2"
        },

        {
            tag: "semanticTag", name: "Battery",
            description: "The Power Source cluster is related to power provided from a battery",
            details: "Power Source clusters with this tag shall implement the BAT feature.",
            xref: "namespace§15.3"
        },

        {
            tag: "semanticTag", name: "EV",
            description: "The Power Source cluster is related to power provided from an electric vehicle",
            details: "Power Source clusters with this tag shall implement the BAT feature.",
            xref: "namespace§15.4"
        }
    ]
});
