/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ElectricalMeasurement", tag: "semanticNamespace",
    details: "The tags contained in this namespace are restricted for use in the electrical measurement domain and " +
        "shall NOT be used in any other domain or context.",
    xref: "namespace§12",

    children: [
        { name: "DC", tag: "semanticTag", description: "Indicates values measured for a DC load" },
        {
            name: "AC", tag: "semanticTag",
            description: "Indicates values measured for a single-phase AC load, or values measured for the collective load on a polyphase AC power supply"
        },
        {
            name: "ACPhase1", tag: "semanticTag",
            description: "Indicates values measured for an AC load on phase 1 of a polyphase power supply"
        },
        {
            name: "ACPhase2", tag: "semanticTag",
            description: "Indicates values measured for an AC load on phase 2 of a polyphase power supply"
        },
        {
            name: "ACPhase3", tag: "semanticTag",
            description: "Indicates values measured for an AC load on phase 3 of a polyphase power supply"
        }
    ]
});
