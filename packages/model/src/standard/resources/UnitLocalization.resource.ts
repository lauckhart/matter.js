/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "UnitLocalization", tag: "cluster",
    classification: "node", pics: "LUNIT",

    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
        "may have differing preferences for the units in which values are conveyed in communication to a " +
        "user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism " +
        "by which they can be configured to use a user’s preferred unit." +
        "\n" +
        "This cluster supports an interface to a Node. It provides attributes for determining and configuring " +
        "the units that a Node shall utilize when conveying values in communication to a user.",

    xref: "core§11.5",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "core§11.5.4",
            children: [{
                name: "TEMP", tag: "field",
                details: "The Node can be configured to use different units of temperature when conveying values to a user."
            }]
        },

        {
            name: "TemperatureUnit", tag: "attribute",
            details: "The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying " +
                "temperature in communication to the user. If provided, this value shall take priority over any unit " +
                "implied through the ActiveLocale Attribute.",
            xref: "core§11.5.6.1"
        },

        {
            name: "TempUnitEnum", tag: "datatype",
            xref: "core§11.5.5.1",
            children: [
                { name: "Fahrenheit", tag: "field", description: "Temperature conveyed in Fahrenheit" },
                { name: "Celsius", tag: "field", description: "Temperature conveyed in Celsius" },
                { name: "Kelvin", tag: "field", description: "Temperature conveyed in Kelvin" }
            ]
        }
    ]
});
