/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ResourceMonitoring } from "#index.js";

ResourceMonitoring.patch({
    details: "This generic cluster provides an interface to the current condition of a resource. A resource is a" +
        "\n" +
        "component of a device that is designed to be replaced, refilled, or emptied when exhausted or full. " +
        "Examples of resources include filters, cartridges, and water tanks. While batteries fit this " +
        "definition they are not intended to be used with this cluster. Use the power source cluster for " +
        "batteries instead." +
        "\n" +
        "NOTE" +
        "\n" +
        "This cluster is not meant to be used for monitoring of the system resources, such as processing, " +
        "memory utilization, networking properties, etc." +
        "\n" +
        "This cluster shall be used via an alias to a specific resource type (see Cluster IDs).",

    xref: { document: "cluster", section: "2.8" },

    children: [
        undefined,

        {
            children: [
                { description: "Condition" },
                { description: "Warning" },
                { description: "ReplacementProductList" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "The degradation of the resource is indicated by an upwards moving/increasing value" },
                { description: "The degradation of the resource is indicated by a downwards moving/decreasing value" }
            ]
        },

        {
            children: [
                { description: "Resource is in good condition, no intervention required" },
                { description: "Resource will be exhausted soon, intervention will shortly be required" },
                { description: "Resource is exhausted, immediate intervention is required" }
            ]
        },

        {
            children: [
                { description: "12-digit Universal Product Code" },
                { description: "8-digit Global Trade Item Number" },
                { description: "13-digit European Article Number" },
                { description: "14-digit Global Trade Item Number" },
                { description: "Original Equipment Manufacturer part number" }
            ]
        }
    ]
});
