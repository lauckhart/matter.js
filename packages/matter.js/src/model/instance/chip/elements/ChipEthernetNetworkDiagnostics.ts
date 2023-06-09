/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0037, name: "EthernetNetworkDiagnostics",
    description: "Ethernet Network Diagnostics",
    details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "PhyRate", base: "PHYRate",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "FullDuplex", base: "FullDuplex",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "PacketRxCount", base: "PacketRxCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "PacketTxCount", base: "PacketTxCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0004, name: "TxErrCount", base: "TxErrCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "CollisionCount", base: "CollisionCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "EthernetOverrunCount", base: "OverrunCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "CarrierDetect", base: "CarrierDetect",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0008, name: "TimeSinceReset", base: "TimeSinceReset",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        })
    ]
}))