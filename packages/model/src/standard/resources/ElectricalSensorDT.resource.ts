/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ElectricalSensor", tag: "deviceType",
    classification: "utility",
    details: "An Electrical Sensor device measures the electrical power and/or energy being imported and/or " +
        "exported.",
    xref: "device§2.6",
    children: [
        { name: "PowerTopology", tag: "requirement", xref: "device§2.6.4" },
        { name: "ElectricalPowerMeasurement", tag: "requirement", xref: "device§2.6.4" },
        { name: "ElectricalEnergyMeasurement", tag: "requirement", xref: "device§2.6.4" }
    ]
});
