/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "deviceType", name: "WaterHeater",
    classification: "simple",
    details: "A water heater is a device that is generally installed in properties to heat water for showers, " +
        "baths etc.",
    xref: "device§14.2",

    children: [
        { tag: "requirement", name: "Identify", xref: "device§14.2.6" },
        { tag: "requirement", name: "Thermostat", xref: "device§14.2.6" },
        { tag: "requirement", name: "WaterHeaterManagement", xref: "device§14.2.6" },
        { tag: "requirement", name: "WaterHeaterMode", xref: "device§14.2.6" }
    ]
});
