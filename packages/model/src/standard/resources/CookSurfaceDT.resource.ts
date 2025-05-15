/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "CookSurface", tag: "deviceType",
    classification: "simple",
    details: "A Cook Surface device type represents a heating object on a cooktop or other similar device. It " +
        "shall only be used when composed as part of another device type.",
    xref: "device§13.7",
    children: [
        { name: "TemperatureControl", tag: "requirement", xref: "device§13.7.4" },
        { name: "TemperatureMeasurement", tag: "requirement", xref: "device§13.7.4" },
        { name: "OnOff", tag: "requirement", xref: "device§13.7.4" }
    ]
});
