/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0508, name: "LowPower",
    classification: "application", description: "Low Power",
    children: [
        {
            tag: "command", id: 0x0000, name: "Sleep",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command shall put the device into low power mode",
            xref: { document: "cluster", section: "1.9.3.1" }
        }
    ]
});
