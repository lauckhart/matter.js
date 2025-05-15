/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Cooktop", tag: "deviceType",
    classification: "simple",
    details: "A cooktop is a cooking surface that heats food either by transferring currents from an " +
        "electromagnetic field located below the glass surface directly to the magnetic induction cookware " +
        "placed above or through traditional gas or electric burners.",
    xref: "device§13.8",
    children: [
        { name: "Identify", tag: "requirement", xref: "device§13.8.5" },
        { name: "OnOff", tag: "requirement", xref: "device§13.8.5" }
    ]
});
