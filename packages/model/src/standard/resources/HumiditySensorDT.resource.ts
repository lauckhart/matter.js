/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "HumiditySensor", tag: "deviceType",
    classification: "simple",
    details: "A humidity sensor (in most cases a Relative humidity sensor) reports humidity measurements.",
    xref: "device§7.7",
    children: [
        { name: "Identify", tag: "requirement", xref: "device§7.7.4" },
        { name: "RelativeHumidityMeasurement", tag: "requirement", xref: "device§7.7.4" }
    ]
});
