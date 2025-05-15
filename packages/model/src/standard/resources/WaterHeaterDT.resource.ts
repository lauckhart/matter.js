/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "WaterHeater", tag: "deviceType",
    classification: "simple",
    details: "A water heater is a device that is generally installed in properties to heat water for showers, " +
        "baths etc.",
    xref: "device§14.2",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§14.2.6" },
        { name: "Thermostat", tag: "requirement", xref: "device§14.2.6" },
        { name: "WaterHeaterManagement", tag: "requirement", xref: "device§14.2.6" },
        { name: "WaterHeaterMode", tag: "requirement", xref: "device§14.2.6" }
    ]
});
