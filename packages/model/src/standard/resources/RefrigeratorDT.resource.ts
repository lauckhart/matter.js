/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Refrigerator", tag: "deviceType",
    classification: "simple",
    details: "A refrigerator represents a device that contains one or more cabinets that are capable of chilling " +
        "or freezing food. Examples of consumer products that may make use of this device type include " +
        "refrigerators, freezers, and wine coolers.",
    xref: "device§13.2",
    children: [
        { name: "Identify", tag: "requirement", xref: "device§13.2.6" },
        { name: "RefrigeratorAndTemperatureControlledCabinetMode", tag: "requirement", xref: "device§13.2.6" },
        { name: "RefrigeratorAlarm", tag: "requirement", xref: "device§13.2.6" }
    ]
});
