/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "PumpController", tag: "deviceType",
    classification: "simple",
    details: "A Pump Controller device is capable of configuring and controlling a Pump device.",
    xref: "device§6.5",

    children: [
        { name: "OnOff", tag: "requirement", xref: "device§6.5.3" },
        { name: "PumpConfigurationAndControl", tag: "requirement", xref: "device§6.5.3" },
        { discriminator: "M", name: "Identify", tag: "requirement", xref: "device§6.5.3" },
        { discriminator: "O", name: "Identify", tag: "requirement", xref: "device§6.5.3" },
        { name: "Groups", tag: "requirement", xref: "device§6.5.3" },
        { name: "LevelControl", tag: "requirement", xref: "device§6.5.3" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§6.5.3" },
        { name: "TemperatureMeasurement", tag: "requirement", xref: "device§6.5.3" },
        { name: "PressureMeasurement", tag: "requirement", xref: "device§6.5.3" },
        { name: "FlowMeasurement", tag: "requirement", xref: "device§6.5.3" }
    ]
});
