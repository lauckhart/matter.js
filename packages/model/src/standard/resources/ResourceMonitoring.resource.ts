/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "ResourceMonitoring",
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
            tag: "attribute", name: "FeatureMap",
            xref: "cluster§2.8.4",

            children: [
                {
                    tag: "field", name: "CON",
                    details: "Supports monitoring the condition of the resource in percentage"
                },
                { tag: "field", name: "WRN", details: "Supports warning indication" },
                { tag: "field", name: "REP", details: "Supports specifying the list of replacement products" }
            ]
        },

        {
            tag: "attribute", name: "Condition",
            details: "Indicates the current condition of the resource in percent.",
            xref: "cluster§2.8.6.1"
        },

        {
            tag: "attribute", name: "DegradationDirection",
            details: "Indicates the direction of change for the condition of the resource over time, which helps to " +
                "determine whether a higher or lower condition value is considered optimal.",
            xref: "cluster§2.8.6.2"
        },

        {
            tag: "attribute", name: "ChangeIndication",
            details: "This attribute shall be populated with a value from ChangeIndicationEnum that is indicative of the " +
                "current requirement to change the resource.",
            xref: "cluster§2.8.6.3"
        },

        {
            tag: "attribute", name: "InPlaceIndicator",
            details: "Indicates whether a resource is currently installed. A value of true shall indicate that a resource " +
                "is installed. A value of false shall indicate that a resource is not installed.",
            xref: "cluster§2.8.6.4"
        },

        {
            tag: "attribute", name: "LastChangedTime",
            details: "This attribute may indicates the time at which the resource has been changed, if supported by the " +
                "server. The attribute shall be null if it was never set or is unknown.",
            xref: "cluster§2.8.6.5"
        },

        {
            tag: "attribute", name: "ReplacementProductList",
            details: "Indicates the list of supported products that may be used as replacements for the current resource. " +
                "Each item in this list represents a unique ReplacementProductStruct.",
            xref: "cluster§2.8.6.6"
        },

        {
            tag: "command", name: "ResetCondition",
            details: "Upon receipt, the device shall reset the Condition and ChangeIndicator attributes, indicating full " +
                "resource availability and readiness for use, as initially configured. Invocation of this command may " +
                "cause the LastChangedTime to be updated automatically based on the clock of the server, if the " +
                "server supports setting the attribute.",
            xref: "cluster§2.8.7.1"
        },

        {
            tag: "datatype", name: "DegradationDirectionEnum",
            details: "Indicates the direction in which the condition of the resource changes over time.",
            xref: "cluster§2.8.5.1",

            children: [
                {
                    tag: "field", name: "Up",
                    description: "The degradation of the resource is indicated by an upwards moving/increasing value"
                },
                {
                    tag: "field", name: "Down",
                    description: "The degradation of the resource is indicated by a downwards moving/decreasing value"
                }
            ]
        },

        {
            tag: "datatype", name: "ChangeIndicationEnum",
            xref: "cluster§2.8.5.2",

            children: [
                { tag: "field", name: "Ok", description: "Resource is in good condition, no intervention required" },
                {
                    tag: "field", name: "Warning",
                    description: "Resource will be exhausted soon, intervention will shortly be required"
                },
                {
                    tag: "field", name: "Critical",
                    description: "Resource is exhausted, immediate intervention is required"
                }
            ]
        },

        {
            tag: "datatype", name: "ProductIdentifierTypeEnum",
            details: "Indicate the type of identifier used to describe the product. Devices SHOULD use globally-recognized " +
                "IDs over OEM specific ones.",
            xref: "cluster§2.8.5.3",

            children: [
                { tag: "field", name: "Upc", description: "12-digit Universal Product Code" },
                { tag: "field", name: "Gtin8", description: "8-digit Global Trade Item Number" },
                { tag: "field", name: "Ean", description: "13-digit European Article Number" },
                { tag: "field", name: "Gtin14", description: "14-digit Global Trade Item Number" },
                { tag: "field", name: "Oem", description: "Original Equipment Manufacturer part number" }
            ]
        },

        {
            tag: "datatype", name: "ReplacementProductStruct",
            details: "Indicates the product identifier that can be used as a replacement for the resource.",
            xref: "cluster§2.8.5.4"
        }
    ]
});
