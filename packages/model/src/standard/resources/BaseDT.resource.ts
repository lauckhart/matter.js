/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Base", tag: "deviceType",
    classification: "base",
    xref: "device§1.1",

    children: [
        {
            name: "conditions", tag: "field",

            children: [
                { name: "Zha", tag: "field", description: "Zigbee Home Automation standard", xref: "device§1.1.3.1" },
                { name: "Zse", tag: "field", description: "Zigbee Smart Energy standard", xref: "device§1.1.3.1" },
                { name: "Gp", tag: "field", description: "Zigbee Green Power standard", xref: "device§1.1.3.1" },
                { name: "Zigbee", tag: "field", description: "Zigbee standard", xref: "device§1.1.3.1" },
                { name: "SuZi", tag: "field", description: "Zigbee PRO Sub-GHz standard", xref: "device§1.1.3.1" },
                { name: "Matter", tag: "field", description: "Matter standard", xref: "device§1.1.3.1" },
                {
                    name: "LanguageLocale", tag: "field",
                    description: "The node supports localization for conveying text to the user",
                    xref: "device§1.1.3.3"
                },
                {
                    name: "TimeLocale", tag: "field",
                    description: "The node supports localization for conveying time to the user",
                    xref: "device§1.1.3.3"
                },
                {
                    name: "UnitLocale", tag: "field",
                    description: "The node supports localization for conveying units of measure to the user",
                    xref: "device§1.1.3.3"
                },
                {
                    name: "Sit", tag: "field",
                    description: "The node is a short idle time intermittently connected device",
                    xref: "device§1.1.4"
                },
                {
                    name: "Lit", tag: "field",
                    description: "The node is a long idle time intermittently connected device",
                    xref: "device§1.1.4"
                },
                {
                    name: "Active", tag: "field",
                    description: "The node is always able to communicate",
                    xref: "device§1.1.4"
                },
                { name: "Node", tag: "field", xref: "device§1.1.5" },
                { name: "App", tag: "field", xref: "device§1.1.5" },
                { name: "Simple", tag: "field", xref: "device§1.1.5" },
                { name: "Dynamic", tag: "field", xref: "device§1.1.5" },
                { name: "Composed", tag: "field", xref: "device§1.1.5" },
                { name: "Client", tag: "field", xref: "device§1.1.6" },
                { name: "Server", tag: "field", xref: "device§1.1.6" },
                { name: "Duplicate", tag: "field", xref: "device§1.1.6" },
                { name: "BridgedPowerSourceInfo", tag: "field", xref: "device§1.1.6" }
            ]
        },

        { name: "Descriptor", tag: "requirement", xref: "device§1.1.7" },
        { name: "Binding", tag: "requirement", xref: "device§1.1.7" },
        { name: "FixedLabel", tag: "requirement", xref: "device§1.1.7" },
        { name: "UserLabel", tag: "requirement", xref: "device§1.1.7" }
    ]
});
