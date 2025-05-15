/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "OtaProvider", tag: "deviceType",
    classification: "utility",
    details: "An OTA Provider is a node that is capable of providing an OTA software update to other nodes on the " +
        "same fabric.",
    xref: "device§2.4",
    children: [
        { name: "OtaSoftwareUpdateRequestor", tag: "requirement", xref: "device§2.4.3" },
        { name: "OtaSoftwareUpdateProvider", tag: "requirement", xref: "device§2.4.3" }
    ]
});
