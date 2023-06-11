/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0031, name: "NetworkCommissioning",
    description: "Network Commissioning",
    details: "Functionality to configure, enable, disable network credentials and access on a Matter device.",
    children: [
        AttributeElement({
            id: 0x0000, name: "maxNetworks", base: "uint8",
            access: { rw: "R", readPriv: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "networks", base: "list",
            access: { rw: "R", readPriv: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "scanMaxTimeSeconds", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "connectMaxTimeSeconds", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0004, name: "interfaceEnabled", base: "bool",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0005, name: "lastNetworkingStatus", base: "NetworkCommissioningStatus",
            access: { rw: "R", readPriv: "A" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "lastNetworkId", base: "octstr",
            access: { rw: "R", readPriv: "A" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0007, name: "lastConnectErrorValue", base: "int32",
            access: { rw: "R", readPriv: "A" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "ScanNetworks",
            access: { rw: "R", writePriv: "A" }, conformance: [ "M" ], direction: "request", response: "ScanNetworksResponse",
            children: [
                DatatypeElement({
                    name: "ssid", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "ssid", base: "octstr",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ScanNetworksResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "networkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "wiFiScanResults", base: "WiFiInterfaceScanResult",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "wiFiScanResults", base: "WiFiInterfaceScanResult",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "threadScanResults", base: "ThreadInterfaceScanResult",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "threadScanResults", base: "ThreadInterfaceScanResult",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "AddOrUpdateWiFiNetwork",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "ssid", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ssid", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credentials", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "credentials", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "AddOrUpdateThreadNetwork",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "operationalDataset", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "operationalDataset", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveNetwork",
            access: { rw: "R", writePriv: "A" }, conformance: [ "M" ], direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "networkId", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkId", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "NetworkConfigResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "networkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "networkIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "networkIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "ConnectNetwork",
            access: { rw: "R", writePriv: "A" }, conformance: [ "M" ], direction: "request", response: "ConnectNetworkResponse",
            children: [
                DatatypeElement({
                    name: "networkId", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkId", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ConnectNetworkResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "networkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "debugText", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "errorValue", base: "int32",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "errorValue", base: "int32",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "ReorderNetwork",
            access: { rw: "R", writePriv: "A" }, conformance: [ "M" ], direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "networkId", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkId", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkIndex", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "breadcrumb", base: "uint64",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningStatus", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "outOfRange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "outOfRange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "boundsExceeded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "boundsExceeded",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "networkIdNotFound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "networkIdNotFound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "duplicateNetworkId",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "duplicateNetworkId",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "networkNotFound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "networkNotFound",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "regulatoryError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6"
                }),

                DatatypeElement({
                    name: "regulatoryError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6"
                }),

                DatatypeElement({
                    name: "authFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x7"
                }),

                DatatypeElement({
                    name: "authFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x7"
                }),

                DatatypeElement({
                    name: "unsupportedSecurity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "unsupportedSecurity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "otherConnectionFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x9"
                }),

                DatatypeElement({
                    name: "otherConnectionFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x9"
                }),

                DatatypeElement({
                    name: "ipv6Failed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xa"
                }),

                DatatypeElement({
                    name: "ipv6Failed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xa"
                }),

                DatatypeElement({
                    name: "ipBindFailed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xb"
                }),

                DatatypeElement({
                    name: "ipBindFailed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xb"
                }),

                DatatypeElement({
                    name: "unknownError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xc"
                }),

                DatatypeElement({
                    name: "unknownError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xc"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiBand", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "2G4",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "2G4",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "3G65",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "3G65",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "5G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "5G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "6G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "6G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "60G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "60G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiSecurity", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unencrypted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "unencrypted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "wep",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "wep",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "wpaPersonal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "wpaPersonal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "wpa2Personal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "wpa2Personal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "wpa3Personal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "wpa3Personal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiInterfaceScanResult", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "security", base: "WiFiSecurity",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "security", base: "WiFiSecurity",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ssid", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ssid", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "bssid", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "bssid", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "channel", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "channel", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "wiFiBand", base: "WiFiBand",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "wiFiBand", base: "WiFiBand",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rssi", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rssi", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadInterfaceScanResult", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "panId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "panId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extendedPanId", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extendedPanId", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "channel", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "channel", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "version", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "version", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extendedAddress", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extendedAddress", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rssi", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rssi", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lqi", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lqi", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInfo", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "networkId", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkId", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "connected", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "connected", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "wiFiNetworkInterface",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "wiFiNetworkInterface",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "threadNetworkInterface",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "threadNetworkInterface",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "ethernetNetworkInterface",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "ethernetNetworkInterface",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                })
            ]
        })
    ]
}));
