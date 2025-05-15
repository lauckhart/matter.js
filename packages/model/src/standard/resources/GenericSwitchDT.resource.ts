/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "GenericSwitch", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance for the Generic Switch device type.",
    xref: "device§6.6",
    children: [
        { name: "Identify", tag: "requirement", xref: "device§6.6.4" },
        { name: "Switch", tag: "requirement", xref: "device§6.6.4" }
    ]
});
