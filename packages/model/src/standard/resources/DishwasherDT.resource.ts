/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Dishwasher", tag: "deviceType",
    classification: "simple",
    details: "A dishwasher is a device that is generally installed in residential homes and is capable of washing " +
        "dishes, cutlery, and other items associate with food preparation and consumption. The device can be " +
        "permanently installed or portable and can have variety of filling and draining methods.",
    xref: "device§13.5",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§13.5.4" },
        { name: "OnOff", tag: "requirement", xref: "device§13.5.4" },
        { name: "TemperatureControl", tag: "requirement", xref: "device§13.5.4" },
        { name: "DishwasherMode", tag: "requirement", xref: "device§13.5.4" },
        { name: "DishwasherAlarm", tag: "requirement", xref: "device§13.5.4" },
        { name: "OperationalState", tag: "requirement", xref: "device§13.5.4" }
    ]
});
