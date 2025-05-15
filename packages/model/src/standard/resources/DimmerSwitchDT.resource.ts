/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DimmerSwitch", tag: "deviceType",
    classification: "simple",
    details: "A Dimmer Switch is a controller device that, when bound to a lighting device such as a Dimmable " +
        "Light, is capable of being used to switch the device on or off and adjust the intensity of the light " +
        "being emitted.",
    xref: "device§6.2",

    children: [
        { discriminator: "M", name: "Identify", tag: "requirement", xref: "device§6.2.4" },
        { discriminator: "M", name: "Identify", tag: "requirement", xref: "device§6.2.4" },
        { name: "Groups", tag: "requirement", xref: "device§6.2.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§6.2.4" },
        { name: "OnOff", tag: "requirement", xref: "device§6.2.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§6.2.4" }
    ]
});
