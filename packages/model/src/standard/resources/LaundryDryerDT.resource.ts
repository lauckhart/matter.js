/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "LaundryDryer", tag: "deviceType",
    classification: "simple",
    details: "A Laundry Dryer represents a device that is capable of drying laundry items.",
    xref: "device§13.6",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§13.6.4" },
        { name: "LaundryWasherMode", tag: "requirement", xref: "device§13.6.4" },
        { name: "OnOff", tag: "requirement", xref: "device§13.6.4" },
        { name: "LaundryDryerControls", tag: "requirement", xref: "device§13.6.4" },
        { name: "TemperatureControl", tag: "requirement", xref: "device§13.6.4" },
        { name: "OperationalState", tag: "requirement", xref: "device§13.6.4" }
    ]
});
