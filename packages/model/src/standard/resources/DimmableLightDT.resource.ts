/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DimmableLight", tag: "deviceType",
    classification: "simple",
    details: "A Dimmable Light is a lighting device that is capable of being switched on or off and the intensity " +
        "of its light adjusted by means of a bound controller device such as a Dimmer Switch or a Color " +
        "Dimmer Switch. In addition, a Dimmable Light device is also capable of being switched by means of a " +
        "bound occupancy sensor or other device(s).",
    xref: "device§4.2",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§4.2.4" },
        { name: "Groups", tag: "requirement", xref: "device§4.2.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§4.2.4" },
        { name: "OnOff", tag: "requirement", xref: "device§4.2.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§4.2.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§4.2.4" }
    ]
});
