/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ColorTemperatureLight", tag: "deviceType",
    classification: "simple",
    details: "A Color Temperature Light is a lighting device that is capable of being switched on or off, the " +
        "intensity of its light adjusted, and its color temperature adjusted by means of a bound controller " +
        "device such as a Color Dimmer Switch.",
    xref: "device§4.3",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§4.3.4" },
        { name: "Groups", tag: "requirement", xref: "device§4.3.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§4.3.4" },
        { name: "OnOff", tag: "requirement", xref: "device§4.3.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§4.3.4" },
        { name: "ColorControl", tag: "requirement", xref: "device§4.3.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§4.3.4" }
    ]
});
