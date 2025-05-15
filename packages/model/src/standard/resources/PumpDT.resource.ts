/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Pump", tag: "deviceType",
    classification: "simple",
    details: "A Pump device is a pump that may have variable speed. It may have optional built-in sensors and a " +
        "regulation mechanism. It is typically used for pumping fluids like water.",
    xref: "device§5.5",

    children: [
        { name: "OnOff", tag: "requirement", xref: "device§5.5.4" },
        { name: "PumpConfigurationAndControl", tag: "requirement", xref: "device§5.5.4" },
        { name: "Identify", tag: "requirement", xref: "device§5.5.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§5.5.4" },
        { name: "Groups", tag: "requirement", xref: "device§5.5.4" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§5.5.4" },
        { discriminator: "O", name: "TemperatureMeasurement", tag: "requirement", xref: "device§5.5.4" },
        { discriminator: "O", name: "PressureMeasurement", tag: "requirement", xref: "device§5.5.4" },
        { discriminator: "O", name: "FlowMeasurement", tag: "requirement", xref: "device§5.5.4" },
        { discriminator: "O", name: "TemperatureMeasurement", tag: "requirement", xref: "device§5.5.4" },
        { discriminator: "O", name: "PressureMeasurement", tag: "requirement", xref: "device§5.5.4" },
        { discriminator: "O", name: "FlowMeasurement", tag: "requirement", xref: "device§5.5.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§5.5.4" }
    ]
});
