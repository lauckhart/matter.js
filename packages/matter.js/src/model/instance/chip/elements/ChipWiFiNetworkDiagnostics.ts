/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0036, name: "WiFiNetworkDiagnostics",
    description: "WiFi Network Diagnostics",
    details: "The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Bssid", base: "BSSID",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "SecurityType", base: "SecurityType",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "WifiVersion", base: "WiFiVersion",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "ChannelNumber", base: "ChannelNumber",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "Rssi", base: "RSSI",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "BeaconLostCount", base: "BeaconLostCount",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "BeaconRxCount", base: "BeaconRxCount",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0007, name: "PacketMulticastRxCount", base: "PacketMulticastRxCount",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0008, name: "PacketMulticastTxCount", base: "PacketMulticastTxCount",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0009, name: "PacketUnicastRxCount", base: "PacketUnicastRxCount",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000a, name: "PacketUnicastTxCount", base: "PacketUnicastTxCount",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000b, name: "CurrentMaxRate", base: "CurrentMaxRate",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "OverrunCount", base: "OverrunCount",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "Disconnection", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "ReasonCode", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ReasonCode", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AssociationFailure", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "AssociationFailure", base: "AssociationFailureCauseEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AssociationFailure", base: "AssociationFailureCauseEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "ConnectionStatus", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "ConnectionStatus", base: "ConnectionStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ConnectionStatus", base: "ConnectionStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}))