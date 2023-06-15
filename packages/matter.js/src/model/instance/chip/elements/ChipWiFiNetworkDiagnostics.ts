/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, EventElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0036, name: "WiFiNetworkDiagnostics",
    description: "WiFi Network Diagnostics",
    details: "The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Bssid", base: "octstr",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "SecurityType", base: "SecurityTypeEnum",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "WifiVersion", base: "WiFiVersionEnum",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "ChannelNumber", base: "uint16",
            conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "Rssi", base: "int8",
            conformance: "M", quality: "X"
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
                    name: "ReasonCode", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AssociationFailure",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "AssociationFailure", base: "AssociationFailureCauseEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Status", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "ConnectionStatus",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ConnectionStatus", base: "ConnectionStatusEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SecurityTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "None",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Wep",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Wpa",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Wpa2",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Wpa3",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiVersionEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "A",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "B",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "N",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Ac",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Ax",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AssociationFailureCauseEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AssociationFailed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AuthenticationFailed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "SsidNotFound",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ConnectionStatusEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Connected",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NotConnected",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiNetworkDiagnosticsFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PacketCounts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ErrorCounts",
                    conformance: "M"
                })
            ]
        })
    ]
}));
