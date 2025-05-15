/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Switch } from "#index.js";

Switch.patch({
    details: "This cluster exposes interactions with a switch device, for the purpose of using those interactions " +
        "by other devices." +
        "\n" +
        "Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary switch " +
        "(e.g. push button), distinguished with their feature flags." +
        "\n" +
        "Interactions with the switch device are exposed as attributes (for the latching switch) and as " +
        "events (for both types of switches)." +
        "\n" +
        "An interested client may subscribe to these attributes/events and thus be informed of the " +
        "interactions, and can perform actions based on this, for example by sending commands to perform an " +
        "action such as controlling a light or a window shade.",

    xref: { document: "cluster", section: "1.13" },

    children: [
        undefined,

        {
            children: [
                { description: "LatchingSwitch" },
                { description: "MomentarySwitch" },
                { description: "MomentarySwitchRelease" },
                { description: "MomentarySwitchLongPress" },
                { description: "MomentarySwitchMultiPress" },
                { description: "ActionSwitch" }
            ]
        }
    ]
});
