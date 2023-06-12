/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0036, name: "WiFiNetworkDiagnostics",
    description: "WiFi Network Diagnostics",
    details: "The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Bssid", base: "octstr",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "SecurityType", base: "SecurityTypeEnum",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "WifiVersion", base: "WiFiVersionEnum",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "ChannelNumber", base: "uint16",
            access: "R", conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "Rssi", base: "int8",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "BeaconLostCount", base: "uint32",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "BeaconRxCount", base: "uint32",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "PacketMulticastRxCount", base: "uint32",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0008, name: "PacketMulticastTxCount", base: "uint32",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0009, name: "PacketUnicastRxCount", base: "uint32",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x000a, name: "PacketUnicastTxCount", base: "uint32",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x000b, name: "CurrentMaxRate", base: "uint64",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "OverrunCount", base: "uint64",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            access: "R", conformance: "O", direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "Disconnection",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ReasonCode", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AssociationFailure",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "AssociationFailure", base: "AssociationFailureCauseEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "ConnectionStatus",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ConnectionStatus", base: "ConnectionStatusEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SecurityTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "None",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Wep",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Wpa",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Wpa2",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Wpa3",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiVersionEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "A",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "B",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "G",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "N",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Ac",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Ax",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AssociationFailureCauseEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AssociationFailed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AuthenticationFailed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "SsidNotFound",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ConnectionStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Connected",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NotConnected",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiNetworkDiagnosticsFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PacketCounts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ErrorCounts",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
