/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Identify } from "#index.js";

Identify.patch({
    details: "This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to " +
        "an observer (e.g., an installer) which of several nodes and/or endpoints it is. It also supports a " +
        "multicast request that any endpoint that is identifying itself to respond to the initiator." +
        "\n" +
        "The state of this cluster may be shared on more than one endpoint on a node." +
        "\n" +
        "For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, " +
        "may both share the same cluster instance and therefore identification state (e.g. single LED on the " +
        "node).",

    xref: { document: "cluster", section: "1.2" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "No presentation." },
                { description: "Light output of a lighting product." },
                { description: "Typically a small LED." },
                undefined,
                { description: "Presentation will be visible on display screen." },
                {
                    description: "Presentation will be conveyed by actuator functionality such as through a window blind operation or in- wall relay."
                }
            ]
        },

        {
            children: [
                { description: "e.g., Light is turned on/off once." },
                { description: "e.g., Light is turned on/off over 1 second and repeated 15 times." },
                { description: "e.g., Colored light turns green for 1 second; non-colored light flashes twice." },
                {
                    description: "e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for 0.5s and then minimum brightness for 7.5s."
                },
                {
                    description: "Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as above), first complete the current 1s breathe effect and then terminate the effect."
                },
                { description: "Terminate the effect as soon as possible." }
            ]
        },

        { children: [{ description: "Indicates the default effect is used" }] }
    ]
});
