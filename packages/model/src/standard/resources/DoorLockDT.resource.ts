/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DoorLock", tag: "deviceType",
    classification: "simple",
    details: "A Door Lock is a device used to secure a door. It is possible to actuate a door lock either by means " +
        "of a manual or a remote method.",
    xref: "device§8.1",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§8.1.4" },
        { name: "Groups", tag: "requirement", xref: "device§8.1.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§8.1.4" },
        { name: "DoorLock", tag: "requirement", xref: "device§8.1.4" }
    ]
});
