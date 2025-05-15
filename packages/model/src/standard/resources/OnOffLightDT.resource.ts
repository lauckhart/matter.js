/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "OnOffLight", tag: "deviceType",
    classification: "simple",
    details: "The On/Off Light is a lighting device that is capable of being switched on or off by means of a " +
        "bound controller device such as an On/Off Light Switch or a Dimmer Switch. In addition, an on/off " +
        "light is also capable of being switched by means of a bound occupancy sensor.",
    xref: "device§4.1",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§4.1.4" },
        { name: "Groups", tag: "requirement", xref: "device§4.1.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§4.1.4" },
        { name: "OnOff", tag: "requirement", xref: "device§4.1.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§4.1.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§4.1.4" }
    ]
});
