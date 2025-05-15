/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BooleanState } from "#index.js";

BooleanState.patch({
    classification: "application", pics: "BOOL",
    details: "This cluster provides an interface to a boolean state.",
    xref: { document: "cluster", section: "1.7" },

    children: [
        undefined,

        {
            details: "This represents a boolean state." +
                "\n" +
                "The semantics of this boolean state are defined by the device type using this cluster." +
                "\n" +
                "For example, in a Contact Sensor device type, FALSE=open or no contact, TRUE=closed or contact.",
            xref: { document: "cluster", section: "1.7.4.1" }
        },

        {
            details: "If this event is supported, it shall be generated when the StateValue attribute changes.",
            xref: { document: "cluster", section: "1.7.5.1" },
            children: [{
                details: "This field shall indicate the new value of the StateValue attribute.",
                xref: { document: "cluster", section: "1.7.5.1.1" }
            }]
        }
    ]
});
