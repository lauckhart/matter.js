/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "WakeOnLan", id: 0x503, classification: "application",
    description: "Wake on LAN",
    details: "This cluster provides an interface for managing low power mode on a device that supports the Wake On" +
             " LAN protocol",
    xref: { document: "cluster", section: "1.10" },
    children: [
        {
            tag: "attribute", name: "MacAddress", id: 0x0, type: "hwadr", access: "R V", conformance: "O",
            constraint: "desc", quality: "F",
            details: "This SHALL indicate the current MAC address of the device. Only 48-bit MAC Addresses SHALL be used " +
                     "for this attribute as required by the Wake on LAN protocol",
            xref: { document: "cluster", section: "1.10.2.1" }
        },

        {
            tag: "attribute", name: "LinkLocalAddress", id: 0x1, type: "ipv6adr", access: "R V",
            conformance: "O", constraint: "desc", quality: "F",
            details: "This SHALL indicate the current link-local address of the device. Only 128-bit IPv6 link-local " +
                     "addresses SHALL be used for this attribute",
            xref: { document: "cluster", section: "1.10.2.2" }
        },

        {
            tag: "attribute", name: "WakeOnLanMacAddress", id: 0x0, type: "string", conformance: "O"
        }
    ]
});
