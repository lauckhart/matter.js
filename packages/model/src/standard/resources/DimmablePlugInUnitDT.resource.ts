/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DimmablePlugInUnit", tag: "deviceType",
    classification: "simple",
    details: "A Dimmable Plug-In Unit is a device that provides power to another device that is plugged into it, " +
        "and is capable of being switched on or off and have its level adjusted. The Dimmable Plug-in Unit is " +
        "typically used to control a conventional non-communicating light through its mains connection using " +
        "phase cutting.",
    xref: "device§5.2",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§5.2.4" },
        { name: "Groups", tag: "requirement", xref: "device§5.2.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§5.2.4" },
        { name: "OnOff", tag: "requirement", xref: "device§5.2.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§5.2.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§5.2.4" }
    ]
});
