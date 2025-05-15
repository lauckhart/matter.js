/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceEnergyManagementDt } from "#index.js";

DeviceEnergyManagementDt.patch({
    classification: "utility",
    details: "A Device Energy Management device provides reporting and optionally adjustment of the electrical " +
        "power planned on being consumed or produced by the device.",
    xref: { document: "device", section: "2.7" },

    children: [
        undefined,
        { xref: { document: "device", section: "2.7.4" } },
        { xref: { document: "device", section: "2.7.4" } },

        {
            children: [{
                description: "The DEM cluster on this endpoint accepts commands to adjust its energy operation.",
                xref: { document: "device", section: "2.7.3" }
            }]
        }
    ]
});
