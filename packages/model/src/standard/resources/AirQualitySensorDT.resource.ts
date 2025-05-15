/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "AirQualitySensor", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance for the Air Quality Sensor device type." +
        "\n" +
        "An air quality sensor is a device designed to monitor and measure various parameters related to the " +
        "quality of ambient air in indoor or outdoor environments.",
    xref: "device§7.10",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§7.10.4" },
        { name: "AirQuality", tag: "requirement", xref: "device§7.10.4" },
        { name: "TemperatureMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "RelativeHumidityMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "CarbonMonoxideConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "CarbonDioxideConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "NitrogenDioxideConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "OzoneConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "FormaldehydeConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "Pm1ConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "Pm25ConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "Pm10ConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "RadonConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" },
        { name: "TotalVolatileOrganicCompoundsConcentrationMeasurement", tag: "requirement", xref: "device§7.10.4" }
    ]
});
