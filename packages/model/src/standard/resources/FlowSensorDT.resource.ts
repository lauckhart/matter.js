/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "FlowSensor", tag: "deviceType",
    classification: "simple",
    details: "A Flow Sensor device measures and reports the flow rate of a fluid.",
    xref: "device§7.6",
    children: [
        { name: "FlowMeasurement", tag: "requirement", xref: "device§7.6.4" },
        { name: "Identify", tag: "requirement", xref: "device§7.6.4" }
    ]
});
