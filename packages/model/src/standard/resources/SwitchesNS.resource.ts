/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SwitchesNs } from "#index.js";

SwitchesNs.patch({
    details: "The tags contained in this namespace are restricted for use in the switches domain and shall NOT be " +
        "used in any other domain or context. They are intended to indicate the function of a button on a " +
        "switch device to allow a client to make an optimized user interface which matches the actual device " +
        "without requiring a-priori knowledge of the layout of each specific switch device." +
        "\n" +
        "Please see the rules for applying these and other tags for switch devices, e.g. from the Common " +
        "Position Namespace and the Common Number Namespace in the Generic Switch device type section in the " +
        "Device Library.",

    xref: { document: "namespace", section: "18" },

    children: [
        undefined,
        undefined,
        undefined,
        { description: "e.g. dim up (light)" },
        { description: "e.g. dim down (light)" },
        { description: "e.g. select next scene" },
        { description: "e.g. select previous scene" },
        undefined,
        { description: "Textual description provided in Label field" }
    ]
});
