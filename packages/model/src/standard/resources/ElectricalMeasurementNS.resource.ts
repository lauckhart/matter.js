/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ElectricalMeasurementNs } from "#index.js";

ElectricalMeasurementNs.patch({
    details: "The tags contained in this namespace are restricted for use in the electrical measurement domain and " +
        "shall NOT be used in any other domain or context.",
    xref: { document: "namespace", section: "12" },

    children: [
        { description: "Indicates values measured for a DC load" },
        {
            description: "Indicates values measured for a single-phase AC load, or values measured for the collective load on a polyphase AC power supply"
        },
        { description: "Indicates values measured for an AC load on phase 1 of a polyphase power supply" },
        { description: "Indicates values measured for an AC load on phase 2 of a polyphase power supply" },
        { description: "Indicates values measured for an AC load on phase 3 of a polyphase power supply" }
    ]
});
