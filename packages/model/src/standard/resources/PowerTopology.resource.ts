/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerTopology } from "#index.js";

PowerTopology.patch({
    classification: "application", pics: "PWRTL",
    details: "The Power Topology Cluster provides a mechanism for expressing how power is flowing between " +
        "endpoints.",
    xref: { document: "core", section: "11.8" },

    children: [
        undefined,

        {
            xref: { document: "core", section: "11.8.4" },

            children: [
                {
                    description: "NodeTopology",
                    details: "This endpoint provides or consumes power to/from the entire node"
                },
                {
                    description: "TreeTopology",
                    details: "This endpoint provides or consumes power to/from itself and its child endpoints"
                },
                {
                    description: "SetTopology",
                    details: "This endpoint provides or consumes power to/from a specified set of endpoints"
                },
                { description: "DynamicPowerFlow", details: "The specified set of endpoints may change" }
            ]
        },

        {
            details: "Indicates the list of endpoints capable of providing power to and/or consuming power from the " +
                "endpoint hosting this server.",
            xref: { document: "core", section: "11.8.5.1" }
        },

        {
            details: "Indicates the current list of endpoints currently providing or consuming power to or from the " +
                "endpoint hosting this server. This list shall be a subset of the value of the AvailableEndpoints " +
                "attribute.",
            xref: { document: "core", section: "11.8.5.2" }
        }
    ]
});
