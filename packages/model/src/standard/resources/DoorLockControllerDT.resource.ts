/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DoorLockController", tag: "deviceType",
    classification: "simple",
    details: "A Door Lock Controller is a device capable of controlling a door lock.",
    xref: "device§8.2",

    children: [
        { name: "Groups", tag: "requirement", xref: "device§8.2.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§8.2.4" },
        { name: "TimeSynchronization", tag: "requirement", xref: "device§8.2.4" },
        { name: "DoorLock", tag: "requirement", xref: "device§8.2.4" }
    ]
});
