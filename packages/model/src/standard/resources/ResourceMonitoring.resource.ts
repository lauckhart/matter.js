/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ResourceMonitoring } from "#index.js";

ResourceMonitoring.patch({
    classification: "application", pics: "REPM",

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
            xref: { document: "cluster", section: "2.8.4" },

            children: [
                {
                    description: "Condition",
                    details: "Supports monitoring the condition of the resource in percentage"
                },
                { description: "Warning", details: "Supports warning indication" },
                {
                    description: "ReplacementProductList",
                    details: "Supports specifying the list of replacement products"
                }
            ]
        },

        {
            details: "Indicates the current condition of the resource in percent.",
            xref: { document: "cluster", section: "2.8.6.1" }
        },
        {
            details: "Indicates the direction of change for the condition of the resource over time, which helps to " +
                "determine whether a higher or lower condition value is considered optimal.",
            xref: { document: "cluster", section: "2.8.6.2" }
        },
        {
            details: "This attribute shall be populated with a value from ChangeIndicationEnum that is indicative of the " +
                "current requirement to change the resource.",
            xref: { document: "cluster", section: "2.8.6.3" }
        },
        {
            details: "Indicates whether a resource is currently installed. A value of true shall indicate that a resource " +
                "is installed. A value of false shall indicate that a resource is not installed.",
            xref: { document: "cluster", section: "2.8.6.4" }
        },
        {
            details: "This attribute may indicates the time at which the resource has been changed, if supported by the " +
                "server. The attribute shall be null if it was never set or is unknown.",
            xref: { document: "cluster", section: "2.8.6.5" }
        },
        {
            details: "Indicates the list of supported products that may be used as replacements for the current resource. " +
                "Each item in this list represents a unique ReplacementProductStruct.",
            xref: { document: "cluster", section: "2.8.6.6" }
        },

        {
            details: "Upon receipt, the device shall reset the Condition and ChangeIndicator attributes, indicating full " +
                "resource availability and readiness for use, as initially configured. Invocation of this command may " +
                "cause the LastChangedTime to be updated automatically based on the clock of the server, if the " +
                "server supports setting the attribute.",
            xref: { document: "cluster", section: "2.8.7.1" }
        },

        {
            details: "Indicates the direction in which the condition of the resource changes over time.",
            xref: { document: "cluster", section: "2.8.5.1" },
            children: [
                { description: "The degradation of the resource is indicated by an upwards moving/increasing value" },
                { description: "The degradation of the resource is indicated by a downwards moving/decreasing value" }
            ]
        },

        {
            xref: { document: "cluster", section: "2.8.5.2" },
            children: [
                { description: "Resource is in good condition, no intervention required" },
                { description: "Resource will be exhausted soon, intervention will shortly be required" },
                { description: "Resource is exhausted, immediate intervention is required" }
            ]
        },

        {
            details: "Indicate the type of identifier used to describe the product. Devices SHOULD use globally-recognized " +
                "IDs over OEM specific ones.",
            xref: { document: "cluster", section: "2.8.5.3" },

            children: [
                { description: "12-digit Universal Product Code" },
                { description: "8-digit Global Trade Item Number" },
                { description: "13-digit European Article Number" },
                { description: "14-digit Global Trade Item Number" },
                { description: "Original Equipment Manufacturer part number" }
            ]
        },

        {
            details: "Indicates the product identifier that can be used as a replacement for the resource.",
            xref: { document: "cluster", section: "2.8.5.4" }
        }
    ]
});
