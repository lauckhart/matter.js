/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "deviceType", name: "FlowSensor",
    classification: "simple",
    details: "A Flow Sensor device measures and reports the flow rate of a fluid.",
    xref: "device§7.6",
    children: [
        { tag: "requirement", name: "FlowMeasurement", xref: "device§7.6.4" },
        { tag: "requirement", name: "Identify", xref: "device§7.6.4" }
    ]
});
