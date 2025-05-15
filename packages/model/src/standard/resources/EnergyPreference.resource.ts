/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EnergyPreference } from "#index.js";

EnergyPreference.patch({
    details: "This cluster provides an interface to specify preferences for how devices should consume energy." +
        "\n" +
        "NOTE Support for Energy Preference cluster is provisional.",
    xref: { document: "cluster", section: "9.7" },

    children: [
        undefined,
        { children: [{ description: "EnergyBalance" }, { description: "LowPowerModeSensitivity" }] },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "User comfort" },
                { description: "Speed of operation" },
                { description: "Amount of Energy consumed by the device" },
                { description: "Amount of water consumed by the device" }
            ]
        }
    ]
});
