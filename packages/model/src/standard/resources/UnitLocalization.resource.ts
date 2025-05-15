/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { UnitLocalization } from "#index.js";

UnitLocalization.patch({
    classification: "node", pics: "LUNIT",

    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
        "may have differing preferences for the units in which values are conveyed in communication to a " +
        "user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism " +
        "by which they can be configured to use a user’s preferred unit." +
        "\n" +
        "This cluster supports an interface to a Node. It provides attributes for determining and configuring " +
        "the units that a Node shall utilize when conveying values in communication to a user.",

    xref: { document: "core", section: "11.5" },

    children: [
        undefined,

        {
            xref: { document: "core", section: "11.5.4" },
            children: [{
                description: "TemperatureUnit",
                details: "The Node can be configured to use different units of temperature when conveying values to a user."
            }]
        },

        {
            details: "The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying " +
                "temperature in communication to the user. If provided, this value shall take priority over any unit " +
                "implied through the ActiveLocale Attribute.",
            xref: { document: "core", section: "11.5.6.1" }
        },

        {
            xref: { document: "core", section: "11.5.5.1" },
            children: [
                { description: "Temperature conveyed in Fahrenheit" },
                { description: "Temperature conveyed in Celsius" },
                { description: "Temperature conveyed in Kelvin" }
            ]
        }
    ]
});
