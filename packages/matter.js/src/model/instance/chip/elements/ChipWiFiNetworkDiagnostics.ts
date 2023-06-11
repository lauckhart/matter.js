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
            id: 0x0000, name: "bssid", base: "octstr",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "securityType", base: "SecurityTypeEnum",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "wifiVersion", base: "WiFiVersionEnum",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "channelNumber", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }, value: "0x0000"
        }),

        AttributeElement({
            id: 0x0004, name: "rssi", base: "int8",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "beaconLostCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00000000"
        }),

        AttributeElement({
            id: 0x0006, name: "beaconRxCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00000000"
        }),

        AttributeElement({
            id: 0x0007, name: "packetMulticastRxCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00000000"
        }),

        AttributeElement({
            id: 0x0008, name: "packetMulticastTxCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00000000"
        }),

        AttributeElement({
            id: 0x0009, name: "packetUnicastRxCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00000000"
        }),

        AttributeElement({
            id: 0x000a, name: "packetUnicastTxCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00000000"
        }),

        AttributeElement({
            id: 0x000b, name: "currentMaxRate", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x000c, name: "overrunCount", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x0000000000000000"
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "Disconnection",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "reasonCode", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "reasonCode", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AssociationFailure",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "associationFailure", base: "AssociationFailureCauseEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "associationFailure", base: "AssociationFailureCauseEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "ConnectionStatus",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "connectionStatus", base: "ConnectionStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "connectionStatus", base: "ConnectionStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "SecurityTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "none",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "none",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "wep",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "wep",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "wpa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "wpa",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "wpa2",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "wpa2",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "wpa3",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "wpa3",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiVersionEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "a",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "a",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "b",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "b",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "g",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "g",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "n",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "n",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "ac",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "ac",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "ax",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "ax",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                })
            ]
        }),

        DatatypeElement({
            name: "AssociationFailureCauseEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "associationFailed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "associationFailed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "authenticationFailed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "authenticationFailed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "ssidNotFound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "ssidNotFound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "ConnectionStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "connected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "connected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "notConnected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "notConnected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiNetworkDiagnosticsFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "packetCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "packetCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "errorCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "errorCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                })
            ]
        })
    ]
}));
