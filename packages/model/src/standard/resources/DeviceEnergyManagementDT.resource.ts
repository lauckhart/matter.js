/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DeviceEnergyManagement", tag: "deviceType",
    classification: "utility",
    details: "A Device Energy Management device provides reporting and optionally adjustment of the electrical " +
        "power planned on being consumed or produced by the device.",
    xref: "device§2.7",

    children: [
        { name: "DeviceEnergyManagement", tag: "requirement", xref: "device§2.7.4" },
        { name: "DeviceEnergyManagementMode", tag: "requirement", xref: "device§2.7.4" },

        {
            name: "conditions", tag: "field",
            children: [{
                name: "ControllableEsa", tag: "field",
                description: "The DEM cluster on this endpoint accepts commands to adjust its energy operation.",
                xref: "device§2.7.3"
            }]
        }
    ]
});
