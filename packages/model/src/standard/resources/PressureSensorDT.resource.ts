/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "PressureSensor", tag: "deviceType",
    classification: "simple",
    details: "A Pressure Sensor device measures and reports the pressure of a fluid.",
    xref: "device§7.5",
    children: [
        { name: "PressureMeasurement", tag: "requirement", xref: "device§7.5.4" },
        { name: "Identify", tag: "requirement", xref: "device§7.5.4" }
    ]
});
