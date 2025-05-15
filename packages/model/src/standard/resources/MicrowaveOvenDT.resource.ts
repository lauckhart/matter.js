/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "MicrowaveOven", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance to the Microwave Oven device type." +
        "\n" +
        "A Microwave Oven is a device with the primary function of heating foods and beverages using a " +
        "magnetron.",
    xref: "device§13.11",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§13.11.6" },
        { name: "OperationalState", tag: "requirement", xref: "device§13.11.6" },
        { name: "FanControl", tag: "requirement", xref: "device§13.11.6" },
        { name: "MicrowaveOvenMode", tag: "requirement", xref: "device§13.11.6" },
        { name: "MicrowaveOvenControl", tag: "requirement", xref: "device§13.11.6" }
    ]
});
