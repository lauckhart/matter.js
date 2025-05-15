/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "LaundryWasher", tag: "deviceType",
    classification: "simple",
    details: "A Laundry Washer represents a device that is capable of laundering consumer items. Any laundry " +
        "washer product may utilize this device type." +
        "\n" +
        "A Laundry Washer shall be composed of at least one endpoint with the Laundry Washer device type.",
    xref: "device§13.1",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§13.1.4" },
        { name: "LaundryWasherMode", tag: "requirement", xref: "device§13.1.4" },
        { name: "OnOff", tag: "requirement", xref: "device§13.1.4" },
        { name: "LaundryWasherControls", tag: "requirement", xref: "device§13.1.4" },
        { name: "TemperatureControl", tag: "requirement", xref: "device§13.1.4" },
        { name: "OperationalState", tag: "requirement", xref: "device§13.1.4" }
    ]
});
