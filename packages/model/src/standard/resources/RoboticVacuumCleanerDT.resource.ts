/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "RoboticVacuumCleaner", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance for the Robotic Vacuum Cleaner device type.",
    xref: "device§12.1",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§12.1.4" },
        { name: "RvcRunMode", tag: "requirement", xref: "device§12.1.4" },
        { name: "RvcCleanMode", tag: "requirement", xref: "device§12.1.4" },
        { name: "RvcOperationalState", tag: "requirement", xref: "device§12.1.4" },
        { name: "ServiceArea", tag: "requirement", xref: "device§12.1.4" }
    ]
});
