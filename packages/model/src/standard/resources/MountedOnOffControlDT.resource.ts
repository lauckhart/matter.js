/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "MountedOnOffControl", tag: "deviceType",
    classification: "simple",
    details: "A Mounted On/Off Control is a fixed device that provides power to another device that is plugged " +
        "into it, and is capable of switching that provided power on or off.",
    xref: "device§5.3",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§5.3.4" },
        { name: "Groups", tag: "requirement", xref: "device§5.3.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§5.3.4" },
        { name: "OnOff", tag: "requirement", xref: "device§5.3.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§5.3.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§5.3.4" }
    ]
});
