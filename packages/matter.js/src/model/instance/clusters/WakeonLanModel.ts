/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x0503, name: "WakeonLan",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "MacAddress", base: "hwadr",
            access: "R V", conformance: "O", constraint: "desc", default: "", quality: "F",
            details: "This SHALL indicate the current MAC address of the device. Only 48-bit MAC Addresses SHALL be used for this attribute as required by the Wake on LAN protocol.",
            xref: { section: "1.10.2.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "LinkLocalAddress", base: "ipv6adr",
            access: "R V", conformance: "O", constraint: "desc", default: "", quality: "F",
            details: "This SHALL indicate the current link-local address of the device. Only 128-bit IPv6 link-local addresses SHALL be used for this attribute.",
            xref: { section: "1.10.2.2", document: "cluster", version: "1.1" }
        })
    ]
}))
