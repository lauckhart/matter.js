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
            quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "SecurityType", base: "SecurityTypeEnum",
            quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "WifiVersion", base: "WiFiVersionEnum",
            quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "ChannelNumber", base: "uint16",
            default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "Rssi", base: "int8",
            quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "BeaconLostCount", base: "uint32",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "BeaconRxCount", base: "uint32",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "PacketMulticastRxCount", base: "uint32",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0008, name: "PacketMulticastTxCount", base: "uint32",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0009, name: "PacketUnicastRxCount", base: "uint32",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x000a, name: "PacketUnicastTxCount", base: "uint32",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x000b, name: "CurrentMaxRate", base: "uint64",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "OverrunCount", base: "uint64",
            conformance: "O", default: 0, quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            conformance: "O", direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "Disconnection",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ReasonCode", base: "uint16"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AssociationFailure",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "AssociationFailure", base: "AssociationFailureCauseEnum"
                }),

                DatatypeElement({
                    name: "Status", base: "uint16"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "ConnectionStatus",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ConnectionStatus", base: "ConnectionStatusEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "SecurityTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "None"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Wep"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Wpa"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Wpa2"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Wpa3"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiVersionEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "A"
                }),

                DatatypeElement({
                    id: 0x0001, name: "B"
                }),

                DatatypeElement({
                    id: 0x0002, name: "G"
                }),

                DatatypeElement({
                    id: 0x0003, name: "N"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Ac"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Ax"
                })
            ]
        }),

        DatatypeElement({
            name: "AssociationFailureCauseEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AssociationFailed"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AuthenticationFailed"
                }),

                DatatypeElement({
                    id: 0x0003, name: "SsidNotFound"
                })
            ]
        }),

        DatatypeElement({
            name: "ConnectionStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Connected"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NotConnected"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiNetworkDiagnosticsFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PacketCounts"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ErrorCounts"
                })
            ]
        })
    ]
}));
