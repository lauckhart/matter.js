/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Thermostat", tag: "deviceType",
    classification: "simple",
    details: "A Thermostat device is capable of having either built-in or separate sensors for temperature, " +
        "humidity or occupancy. It allows the desired temperature to be set either remotely or locally. The " +
        "thermostat is capable of sending heating and/or cooling requirement notifications to a " +
        "heating/cooling unit (for example, an indoor air handler) or is capable of including a mechanism to " +
        "control a heating or cooling unit directly.",
    xref: "device§9.1",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§9.1.4" },
        { name: "Groups", tag: "requirement", xref: "device§9.1.4" },
        { name: "Thermostat", tag: "requirement", xref: "device§9.1.4" },
        { name: "ThermostatUserInterfaceConfiguration", tag: "requirement", xref: "device§9.1.4" },
        { name: "EnergyPreference", tag: "requirement", xref: "device§9.1.4" },
        { name: "FanControl", tag: "requirement", xref: "device§9.1.4" },
        { name: "TemperatureMeasurement", tag: "requirement", xref: "device§9.1.4" },
        { name: "RelativeHumidityMeasurement", tag: "requirement", xref: "device§9.1.4" },
        { name: "OccupancySensing", tag: "requirement", xref: "device§9.1.4" }
    ]
});
