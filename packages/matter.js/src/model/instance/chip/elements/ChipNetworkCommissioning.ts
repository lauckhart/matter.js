/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

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
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0003, name: "ConnectMaxTimeSeconds", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0004, name: "InterfaceEnabled", base: "bool",
            access: "RW VA", conformance: "M"
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
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    conformance: "M"
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
                    name: "Ssid", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Credentials", base: "octstr",
                    conformance: "M"
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
                    name: "OperationalDataset", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveNetwork",
            access: "R A", conformance: "M", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr",
                    conformance: "M"
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
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    conformance: "M"
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
            access: "R A", conformance: "M", direction: "request", response: "ConnectNetworkResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ConnectNetworkResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ErrorValue", base: "int32",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "ReorderNetwork",
            access: "R A", conformance: "M", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "uint64",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningStatus", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "OutOfRange",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BoundsExceeded",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NetworkIdNotFound",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "DuplicateNetworkId",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "NetworkNotFound",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "RegulatoryError",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "AuthFailure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "UnsupportedSecurity",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "OtherConnectionFailure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Ipv6Failed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "IpBindFailed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "UnknownError",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiBand", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "2G4",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "3G65",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "5G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "6G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "60G",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiSecurity", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Unencrypted",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Wep",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WpaPersonal",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wpa2Personal",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Wpa3Personal",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "WiFiInterfaceScanResult", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Security", base: "WiFiSecurity",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Ssid", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Bssid", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Channel", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "WiFiBand", base: "WiFiBand",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rssi", base: "int8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadInterfaceScanResult", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "PanId", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtendedPanId", base: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NetworkName", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Channel", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Version", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtendedAddress", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rssi", base: "int8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Lqi", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInfo", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Connected", base: "bool",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "WiFiNetworkInterface",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ThreadNetworkInterface",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "EthernetNetworkInterface",
                    conformance: "M"
                })
            ]
        })
    ]
}));
