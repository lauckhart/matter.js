/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0503, name: "WakeOnLan",
    classification: "application", description: "Wake on LAN",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "MacAddress",
            access: "R V", conformance: "O", constraint: "desc", default: "", quality: "F", type: "hwadr",
            details: "This SHALL indicate the current MAC address of the device. Only 48-bit" +
                     " MAC Addresses SHALL be used for this attribute as required by the " +
                     "Wake on LAN protocol",
            xref: { document: "cluster", section: "1.10.2.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "LinkLocalAddress",
            access: "R V", conformance: "O", constraint: "desc", default: "", quality: "F", type: "ipv6adr",
            details: "This SHALL indicate the current link-local address of the device. Only" +
                     " 128-bit IPv6 link-local addresses SHALL be used for this attribute",
            xref: { document: "cluster", section: "1.10.2.2" }
        },

        {
            tag: "attribute", id: 0x0000, name: "WakeOnLanMacAddress",
            conformance: "O", type: "string"
        }
    ]
});
