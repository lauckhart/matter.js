/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ExtendedColorLight", tag: "deviceType",
    classification: "simple",
    details: "An Extended Color Light is a lighting device that is capable of being switched on or off, the " +
        "intensity of its light adjusted, and its color adjusted by means of a bound controller device such " +
        "as a Color Dimmer Switch or Control Bridge. The device supports adjustment of color by means of " +
        "hue/saturation, enhanced hue, color looping, XY coordinates, and color temperature. In addition, the " +
        "extended color light is also capable of being switched by means of a bound occupancy sensor.",
    xref: "device§4.4",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§4.4.4" },
        { name: "Groups", tag: "requirement", xref: "device§4.4.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§4.4.4" },
        { name: "OnOff", tag: "requirement", xref: "device§4.4.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§4.4.4" },
        { name: "ColorControl", tag: "requirement", xref: "device§4.4.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§4.4.4" }
    ]
});
