/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "RainSensor", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance to the Rain Sensor device type.",
    xref: "device§7.13",
    children: [
        { name: "Identify", tag: "requirement", xref: "device§7.13.4" },
        { name: "BooleanState", tag: "requirement", xref: "device§7.13.4" },
        { name: "BooleanStateConfiguration", tag: "requirement", xref: "device§7.13.4" }
    ]
});
