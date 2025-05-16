/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "BooleanState",
    classification: "application", pics: "BOOL",
    details: "This cluster provides an interface to a boolean state.",
    xref: "cluster§1.7",

    children: [
        {
            tag: "attribute", name: "StateValue",
            details: "This represents a boolean state." +
                "\n" +
                "The semantics of this boolean state are defined by the device type using this cluster." +
                "\n" +
                "For example, in a Contact Sensor device type, FALSE=open or no contact, TRUE=closed or contact.",
            xref: "cluster§1.7.4.1"
        },

        {
            tag: "event", name: "StateChange",
            details: "If this event is supported, it shall be generated when the StateValue attribute changes.",
            xref: "cluster§1.7.5.1",
            children: [{
                tag: "field", name: "StateValue",
                details: "This field shall indicate the new value of the StateValue attribute.",
                xref: "cluster§1.7.5.1.1"
            }]
        }
    ]
});
