/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ColorDimmerSwitch", tag: "deviceType",
    classification: "simple",
    details: "A Color Dimmer Switch is a controller device that, when bound to a lighting device such as an " +
        "Extended Color Light, is capable of being used to adjust the color of the light being emitted.",
    xref: "device§6.3",

    children: [
        { discriminator: "M", name: "Identify", tag: "requirement", xref: "device§6.3.4" },
        { discriminator: "M", name: "Identify", tag: "requirement", xref: "device§6.3.4" },
        { name: "Groups", tag: "requirement", xref: "device§6.3.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§6.3.4" },
        { name: "OnOff", tag: "requirement", xref: "device§6.3.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§6.3.4" },
        { name: "ColorControl", tag: "requirement", xref: "device§6.3.4" }
    ]
});
