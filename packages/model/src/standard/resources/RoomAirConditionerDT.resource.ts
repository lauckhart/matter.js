/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "RoomAirConditioner", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance to the Room Air Conditioner device type." +
        "\n" +
        "A Room Air Conditioner is a device with the primary function of controlling the air temperature in a " +
        "single room.",
    xref: "device§13.3",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§13.3.6" },
        { name: "Groups", tag: "requirement", xref: "device§13.3.6" },
        { name: "ScenesManagement", tag: "requirement", xref: "device§13.3.6" },
        { name: "OnOff", tag: "requirement", xref: "device§13.3.6" },
        { name: "Thermostat", tag: "requirement", xref: "device§13.3.6" },
        { name: "FanControl", tag: "requirement", xref: "device§13.3.6" },
        { name: "ThermostatUserInterfaceConfiguration", tag: "requirement", xref: "device§13.3.6" },
        { name: "TemperatureMeasurement", tag: "requirement", xref: "device§13.3.6" },
        { name: "RelativeHumidityMeasurement", tag: "requirement", xref: "device§13.3.6" }
    ]
});
