/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0031, name: "NetworkCommissioning",
    description: "Network Commissioning",
    details: "Functionality to configure, enable, disable network credentials and access on a Matter device.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MaxNetworks", base: "uint8",
            access: "R A", conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "Networks", base: "list",
            access: "R A", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "NetworkInfo"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "ScanMaxTimeSeconds", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0003, name: "ConnectMaxTimeSeconds", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0004, name: "InterfaceEnabled", base: "bool",
            access: "W VA", conformance: "M"
        }),

        AttributeElement({
            id: 0x0005, name: "LastNetworkingStatus", base: "NetworkCommissioningStatus",
            access: "R A", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "LastNetworkId", base: "octstr",
            access: "R A", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "LastConnectErrorValue", base: "int32",
            access: "R A", conformance: "M", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ScanNetworks",
            access: "R A", conformance: "M", direction: "request", response: "ScanNetworksResponse",
            children: [
                DatatypeElement({
                    name: "Ssid", base: "octstr",
                    access: "R", conformance: "O", quality: "X"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ScanNetworksResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "WiFiScanResults", base: "WiFiInterfaceScanResult",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "ThreadScanResults", base: "ThreadInterfaceScanResult",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "AddOrUpdateWiFiNetwork",
            access: "R A", conformance: "O", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "Ssid", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Credentials", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "AddOrUpdateThreadNetwork",
            access: "R A", conformance: "O", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "OperationalDataset", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveNetwork",
            access: "R A", conformance: "M", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "NetworkConfigResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "uint8",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "ConnectNetwork",
            access: "R A", conformance: "M", direction: "request", response: "ConnectNetworkResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ConnectNetworkResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "ErrorValue", base: "int32",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "ReorderNetwork",
            access: "R A", conformance: "M", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningStatus", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OutOfRange",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BoundsExceeded",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NetworkIdNotFound",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DuplicateNetworkId",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "NetworkNotFound",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "RegulatoryError",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "AuthFailure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "UnsupportedSecurity",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "OtherConnectionFailure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Ipv6Failed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "IpBindFailed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "UnknownError",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiBand", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "2G4",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "3G65",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "5G",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "6G",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "60G",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiSecurity", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unencrypted",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Wep",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WpaPersonal",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wpa2Personal",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Wpa3Personal",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiInterfaceScanResult", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Security", base: "WiFiSecurity",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Ssid", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Bssid", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Channel", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "WiFiBand", base: "WiFiBand",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Rssi", base: "int8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadInterfaceScanResult", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "PanId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtendedPanId", base: "uint64",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NetworkName", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Channel", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Version", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtendedAddress", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Rssi", base: "int8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Lqi", base: "uint8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInfo", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Connected", base: "bool",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "WiFiNetworkInterface",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ThreadNetworkInterface",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "EthernetNetworkInterface",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
