/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "deviceType", name: "HumiditySensor",
    classification: "simple",
    details: "A humidity sensor (in most cases a Relative humidity sensor) reports humidity measurements.",
    xref: "device§7.7",
    children: [
        { tag: "requirement", name: "Identify", xref: "device§7.7.4" },
        { tag: "requirement", name: "RelativeHumidityMeasurement", xref: "device§7.7.4" }
    ]
});
