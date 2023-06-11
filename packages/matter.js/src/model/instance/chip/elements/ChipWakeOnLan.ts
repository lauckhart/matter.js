/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0503, name: "WakeOnLan",
    description: "Wake on LAN",
    details: "This cluster provides an interface for managing low power mode on a device that supports the Wake On LAN protocol.",
    children: [
        AttributeElement({
            id: 0x0000, name: "wakeOnLanMacAddress", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        })
    ]
}));
