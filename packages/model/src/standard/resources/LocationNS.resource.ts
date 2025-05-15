/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Location", tag: "semanticNamespace",
    details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
        "association with a location of a device (e.g. an outdoor temperature sensor).",
    xref: "namespace§7",

    children: [
        {
            name: "Indoor", tag: "semanticTag",
            description: "Element is indoors or related to indoor equipment/conditions (e.g. the \"indoor\" temperature)."
        },
        {
            name: "Outdoor", tag: "semanticTag",
            description: "Element is outdoors or related to outdoor equipment/conditions (e.g. the \"outdoor\" temperature)."
        },
        {
            name: "Inside", tag: "semanticTag",
            description: "Element is located inside the equipment (e.g. a sensor \"inside\" a cabinet)."
        },
        {
            name: "Outside", tag: "semanticTag",
            description: "Element is located outside the equipment (e.g. a sensor \"outside\" a cabinet)"
        }
    ]
});
