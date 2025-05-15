/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "PowerTopology", tag: "cluster",
    classification: "application", pics: "PWRTL",
    details: "The Power Topology Cluster provides a mechanism for expressing how power is flowing between " +
        "endpoints.",
    xref: "core§11.8",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "core§11.8.4",

            children: [
                {
                    name: "NODE", tag: "field",
                    details: "This endpoint provides or consumes power to/from the entire node"
                },
                {
                    name: "TREE", tag: "field",
                    details: "This endpoint provides or consumes power to/from itself and its child endpoints"
                },
                {
                    name: "SET", tag: "field",
                    details: "This endpoint provides or consumes power to/from a specified set of endpoints"
                },
                { name: "DYPF", tag: "field", details: "The specified set of endpoints may change" }
            ]
        },

        {
            name: "AvailableEndpoints", tag: "attribute",
            details: "Indicates the list of endpoints capable of providing power to and/or consuming power from the " +
                "endpoint hosting this server.",
            xref: "core§11.8.5.1"
        },

        {
            name: "ActiveEndpoints", tag: "attribute",
            details: "Indicates the current list of endpoints currently providing or consuming power to or from the " +
                "endpoint hosting this server. This list shall be a subset of the value of the AvailableEndpoints " +
                "attribute.",
            xref: "core§11.8.5.2"
        }
    ]
});
