/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "WaterValve", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance to the Water Valve device type.",
    xref: "device§5.6",

    children: [
        { name: "Identify", tag: "requirement", xref: "device§5.6.4" },
        { name: "ValveConfigurationAndControl", tag: "requirement", xref: "device§5.6.4" },
        { discriminator: "O", name: "FlowMeasurement", tag: "requirement", xref: "device§5.6.4" },
        { discriminator: "O", name: "FlowMeasurement", tag: "requirement", xref: "device§5.6.4" }
    ]
});
