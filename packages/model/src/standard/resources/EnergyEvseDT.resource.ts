/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "EnergyEvse", tag: "deviceType",
    classification: "simple",
    details: "An EVSE (Electric Vehicle Supply Equipment) is a device that allows an EV (Electric Vehicle) to be " +
        "connected to the mains electricity supply to allow it to be charged (or discharged in case of " +
        "Vehicle to Grid / Vehicle to Home applications).",
    xref: "device§14.1",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§14.1.6" },
        { name: "EnergyEvse", tag: "requirement", xref: "device§14.1.6" },
        { name: "EnergyEvseMode", tag: "requirement", xref: "device§14.1.6" },
        { name: "TemperatureMeasurement", tag: "requirement", xref: "device§14.1.6" }
    ]
});
