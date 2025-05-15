/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "TemperatureSensor", tag: "deviceType",
    classification: "simple",
    details: "A Temperature Sensor device reports measurements of temperature.",
    xref: "device§7.4",
    children: [
        { name: "TemperatureMeasurement", tag: "requirement", xref: "device§7.4.4" },
        { name: "Identify", tag: "requirement", xref: "device§7.4.4" }
    ]
});
