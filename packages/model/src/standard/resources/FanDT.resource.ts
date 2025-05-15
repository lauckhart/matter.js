/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Fan", tag: "deviceType",
    classification: "simple",
    details: "A Fan device is typically standalone or mounted on a ceiling or wall and is used to circulate air in " +
        "a room.",
    xref: "device§9.2",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§9.2.5" },
        { name: "Groups", tag: "requirement", xref: "device§9.2.5" },
        { name: "OnOff", tag: "requirement", xref: "device§9.2.5" },
        { name: "FanControl", tag: "requirement", xref: "device§9.2.5" }
    ]
});
