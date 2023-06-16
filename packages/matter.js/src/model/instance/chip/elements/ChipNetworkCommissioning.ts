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
            id: 0x0000, name: "MaxNetworks", type: "uint8",
            access: "R A", conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "Networks", type: "list",
            access: "R A", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "NetworkInfo"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "ScanMaxTimeSeconds", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0003, name: "ConnectMaxTimeSeconds", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0004, name: "InterfaceEnabled", type: "bool",
            access: "RW VA", conformance: "M"
        }),

        AttributeElement({
            id: 0x0005, name: "LastNetworkingStatus", type: "NetworkCommissioningStatus",
            access: "R A", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "LastNetworkId", type: "octstr",
            access: "R A", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "LastConnectErrorValue", type: "int32",
            access: "R A", conformance: "M", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "ScanNetworks",
            access: "R A", conformance: "M", direction: "request", response: "ScanNetworksResponse",
            children: [
                DatatypeElement({
                    name: "Ssid", type: "octstr",
                    conformance: "O", quality: "X"
                }),

                DatatypeElement({
                    name: "Breadcrumb", type: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ScanNetworksResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", type: "NetworkCommissioningStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "WiFiScanResults", type: "WiFiInterfaceScanResult",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ThreadScanResults", type: "ThreadInterfaceScanResult",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "AddOrUpdateWiFiNetwork",
            access: "R A", conformance: "O", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "Ssid", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Credentials", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", type: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "AddOrUpdateThreadNetwork",
            access: "R A", conformance: "O", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "OperationalDataset", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", type: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveNetwork",
            access: "R A", conformance: "M", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", type: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "NetworkConfigResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", type: "NetworkCommissioningStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "NetworkIndex", type: "uint8",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "ConnectNetwork",
            access: "R A", conformance: "M", direction: "request", response: "ConnectNetworkResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", type: "uint64",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ConnectNetworkResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", type: "NetworkCommissioningStatus",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DebugText", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ErrorValue", type: "int32",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "ReorderNetwork",
            access: "R A", conformance: "M", direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NetworkIndex", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Breadcrumb", type: "uint64",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningStatus", type: "enum8",
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
            name: "WiFiBand", type: "enum8",
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
            name: "WiFiSecurity", type: "map8",
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
            name: "WiFiInterfaceScanResult", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Security", type: "WiFiSecurity",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Ssid", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Bssid", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Channel", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "WiFiBand", type: "WiFiBand",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rssi", type: "int8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadInterfaceScanResult", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "PanId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtendedPanId", type: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NetworkName", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Channel", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Version", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtendedAddress", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rssi", type: "int8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Lqi", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInfo", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "NetworkId", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Connected", type: "bool",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkCommissioningFeature", type: "map32",
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
