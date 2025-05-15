/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "WindowCoveringController", tag: "deviceType",
    classification: "simple",
    details: "A Window Covering Controller is a device that controls an automatic window covering.",
    xref: "device§8.4",

    children: [
        { discriminator: "O", name: "Identify", tag: "requirement", xref: "device§8.4.4" },
        { discriminator: "O", name: "Identify", tag: "requirement", xref: "device§8.4.4" },
        { name: "Groups", tag: "requirement", xref: "device§8.4.4" },
        { name: "WindowCovering", tag: "requirement", xref: "device§8.4.4" }
    ]
});
