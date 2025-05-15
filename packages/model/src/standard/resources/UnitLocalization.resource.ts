/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { UnitLocalization } from "#index.js";

UnitLocalization.patch({
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
        { children: [{ description: "TemperatureUnit" }] },
        undefined,

        {
            children: [
                { description: "Temperature conveyed in Fahrenheit" },
                { description: "Temperature conveyed in Celsius" },
                { description: "Temperature conveyed in Kelvin" }
            ]
        }
    ]
});
