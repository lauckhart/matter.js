/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0508, name: "LowPower",
    description: "Low Power",
    details: "This cluster provides an interface for managing low power mode on a device.",
    children: [
        CommandElement({
            id: 0x0000, name: "Sleep",
            conformance: "M", direction: "request"
        })
    ]
}));
