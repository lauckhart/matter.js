/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ControlBridge", tag: "deviceType",
    classification: "simple",
    details: "A Control Bridge is a controller device that, when bound to a lighting device such as an Extended " +
        "Color Light, is capable of being used to switch the device on or off, adjust the intensity of the " +
        "light being emitted and adjust the color of the light being emitted. In addition, a Control Bridge " +
        "device is capable of being used for setting scenes.",
    xref: "device§6.4",

    children: [
        { discriminator: "M", name: "Identify", tag: "requirement", xref: "device§6.4.4" },
        { discriminator: "M", name: "Identify", tag: "requirement", xref: "device§6.4.4" },
        { name: "Groups", tag: "requirement", xref: "device§6.4.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§6.4.4" },
        { name: "OnOff", tag: "requirement", xref: "device§6.4.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§6.4.4" },
        { name: "ColorControl", tag: "requirement", xref: "device§6.4.4" },
        { name: "IlluminanceMeasurement", tag: "requirement", xref: "device§6.4.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§6.4.4" }
    ]
});
