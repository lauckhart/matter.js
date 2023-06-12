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
            access: "R A"
        }),

        AttributeElement({
            id: 0x0001, name: "Networks", base: "list",
            access: "R A",
            children: [
                DatatypeElement({
                    name: "entry", base: "NetworkInfo"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "ScanMaxTimeSeconds", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0003, name: "ConnectMaxTimeSeconds", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0004, name: "InterfaceEnabled", base: "bool",
            access: "RW VA"
        }),

        AttributeElement({
            id: 0x0005, name: "LastNetworkingStatus", base: "NetworkCommissioningStatus",
            access: "R A", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "LastNetworkId", base: "octstr",
            access: "R A", quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "LastConnectErrorValue", base: "int32",
            access: "R A", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ScanNetworks",
            access: "R A", direction: "request", response: "ScanNetworksResponse",
            children: [
                DatatypeElement({
                    name: "Ssid", base: "octstr",
                    conformance: "O", quality: "X"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ScanNetworksResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "WiFiScanResults", base: "WiFiInterfaceScanResult",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ThreadScanResults", base: "ThreadInterfaceScanResult",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "AddOrUpdateWiFiNetwork",
            access: "R A", conformance: "O", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "Ssid", base: "octstr"
                }),

                DatatypeElement({
                    name: "Credentials", base: "octstr"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "AddOrUpdateThreadNetwork",
            access: "R A", conformance: "O", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "OperationalDataset", base: "octstr"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveNetwork",
            access: "R A", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "NetworkConfigResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "uint8",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "ConnectNetwork",
            access: "R A", direction: "request", response: "ConnectNetworkResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ConnectNetworkResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ErrorValue", base: "int32",
                    quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "ReorderNetwork",
            access: "R A", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr"
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "uint8"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningStatus", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OutOfRange"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BoundsExceeded"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NetworkIdNotFound"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DuplicateNetworkId"
                }),

                DatatypeElement({
                    id: 0x0005, name: "NetworkNotFound"
                }),

                DatatypeElement({
                    id: 0x0006, name: "RegulatoryError"
                }),

                DatatypeElement({
                    id: 0x0007, name: "AuthFailure"
                }),

                DatatypeElement({
                    id: 0x0008, name: "UnsupportedSecurity"
                }),

                DatatypeElement({
                    id: 0x0009, name: "OtherConnectionFailure"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Ipv6Failed"
                }),

                DatatypeElement({
                    id: 0x000b, name: "IpBindFailed"
                }),

                DatatypeElement({
                    id: 0x000c, name: "UnknownError"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiBand", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "2G4"
                }),

                DatatypeElement({
                    id: 0x0001, name: "3G65"
                }),

                DatatypeElement({
                    id: 0x0002, name: "5G"
                }),

                DatatypeElement({
                    id: 0x0003, name: "6G"
                }),

                DatatypeElement({
                    id: 0x0004, name: "60G"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiSecurity", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unencrypted"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Wep"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WpaPersonal"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wpa2Personal"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Wpa3Personal"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiInterfaceScanResult", base: "struct",
            children: [
                DatatypeElement({
                    name: "Security", base: "WiFiSecurity"
                }),

                DatatypeElement({
                    name: "Ssid", base: "octstr"
                }),

                DatatypeElement({
                    name: "Bssid", base: "octstr"
                }),

                DatatypeElement({
                    name: "Channel", base: "uint16"
                }),

                DatatypeElement({
                    name: "WiFiBand", base: "WiFiBand"
                }),

                DatatypeElement({
                    name: "Rssi", base: "int8"
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadInterfaceScanResult", base: "struct",
            children: [
                DatatypeElement({
                    name: "PanId", base: "uint16"
                }),

                DatatypeElement({
                    name: "ExtendedPanId", base: "uint64"
                }),

                DatatypeElement({
                    name: "NetworkName", base: "string"
                }),

                DatatypeElement({
                    name: "Channel", base: "uint16"
                }),

                DatatypeElement({
                    name: "Version", base: "uint8"
                }),

                DatatypeElement({
                    name: "ExtendedAddress", base: "octstr"
                }),

                DatatypeElement({
                    name: "Rssi", base: "int8"
                }),

                DatatypeElement({
                    name: "Lqi", base: "uint8"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInfo", base: "struct",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr"
                }),

                DatatypeElement({
                    name: "Connected", base: "bool"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "WiFiNetworkInterface"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ThreadNetworkInterface"
                }),

                DatatypeElement({
                    id: 0x0004, name: "EthernetNetworkInterface"
                })
            ]
        })
    ]
}));
