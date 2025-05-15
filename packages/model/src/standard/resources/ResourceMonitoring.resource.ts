/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ResourceMonitoring", tag: "cluster",
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

    xref: "cluster§2.8",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§2.8.4",

            children: [
                {
                    name: "CON", tag: "field",
                    details: "Supports monitoring the condition of the resource in percentage"
                },
                { name: "WRN", tag: "field", details: "Supports warning indication" },
                { name: "REP", tag: "field", details: "Supports specifying the list of replacement products" }
            ]
        },

        {
            name: "Condition", tag: "attribute",
            details: "Indicates the current condition of the resource in percent.",
            xref: "cluster§2.8.6.1"
        },

        {
            name: "DegradationDirection", tag: "attribute",
            details: "Indicates the direction of change for the condition of the resource over time, which helps to " +
                "determine whether a higher or lower condition value is considered optimal.",
            xref: "cluster§2.8.6.2"
        },

        {
            name: "ChangeIndication", tag: "attribute",
            details: "This attribute shall be populated with a value from ChangeIndicationEnum that is indicative of the " +
                "current requirement to change the resource.",
            xref: "cluster§2.8.6.3"
        },

        {
            name: "InPlaceIndicator", tag: "attribute",
            details: "Indicates whether a resource is currently installed. A value of true shall indicate that a resource " +
                "is installed. A value of false shall indicate that a resource is not installed.",
            xref: "cluster§2.8.6.4"
        },

        {
            name: "LastChangedTime", tag: "attribute",
            details: "This attribute may indicates the time at which the resource has been changed, if supported by the " +
                "server. The attribute shall be null if it was never set or is unknown.",
            xref: "cluster§2.8.6.5"
        },

        {
            name: "ReplacementProductList", tag: "attribute",
            details: "Indicates the list of supported products that may be used as replacements for the current resource. " +
                "Each item in this list represents a unique ReplacementProductStruct.",
            xref: "cluster§2.8.6.6"
        },

        {
            name: "ResetCondition", tag: "command",
            details: "Upon receipt, the device shall reset the Condition and ChangeIndicator attributes, indicating full " +
                "resource availability and readiness for use, as initially configured. Invocation of this command may " +
                "cause the LastChangedTime to be updated automatically based on the clock of the server, if the " +
                "server supports setting the attribute.",
            xref: "cluster§2.8.7.1"
        },

        {
            name: "DegradationDirectionEnum", tag: "datatype",
            details: "Indicates the direction in which the condition of the resource changes over time.",
            xref: "cluster§2.8.5.1",

            children: [
                {
                    name: "Up", tag: "field",
                    description: "The degradation of the resource is indicated by an upwards moving/increasing value"
                },
                {
                    name: "Down", tag: "field",
                    description: "The degradation of the resource is indicated by a downwards moving/decreasing value"
                }
            ]
        },

        {
            name: "ChangeIndicationEnum", tag: "datatype",
            xref: "cluster§2.8.5.2",

            children: [
                { name: "Ok", tag: "field", description: "Resource is in good condition, no intervention required" },
                {
                    name: "Warning", tag: "field",
                    description: "Resource will be exhausted soon, intervention will shortly be required"
                },
                {
                    name: "Critical", tag: "field",
                    description: "Resource is exhausted, immediate intervention is required"
                }
            ]
        },

        {
            name: "ProductIdentifierTypeEnum", tag: "datatype",
            details: "Indicate the type of identifier used to describe the product. Devices SHOULD use globally-recognized " +
                "IDs over OEM specific ones.",
            xref: "cluster§2.8.5.3",

            children: [
                { name: "Upc", tag: "field", description: "12-digit Universal Product Code" },
                { name: "Gtin8", tag: "field", description: "8-digit Global Trade Item Number" },
                { name: "Ean", tag: "field", description: "13-digit European Article Number" },
                { name: "Gtin14", tag: "field", description: "14-digit Global Trade Item Number" },
                { name: "Oem", tag: "field", description: "Original Equipment Manufacturer part number" }
            ]
        },

        {
            name: "ReplacementProductStruct", tag: "datatype",
            details: "Indicates the product identifier that can be used as a replacement for the resource.",
            xref: "cluster§2.8.5.4"
        }
    ]
});
