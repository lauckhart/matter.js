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
            id: 0x0000, name: "MaxNetworks", base: "MaxNetworks",
            access: { rw: "R", readPrivilege: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "Networks", base: "Networks",
            access: { rw: "R", readPrivilege: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "ScanMaxTimeSeconds", base: "ScanMaxTimeSeconds",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "ConnectMaxTimeSeconds", base: "ConnectMaxTimeSeconds",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0004, name: "InterfaceEnabled", base: "InterfaceEnabled",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0005, name: "LastNetworkingStatus", base: "LastNetworkingStatus",
            access: { rw: "R", readPrivilege: "A" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "LastNetworkId", base: "LastNetworkID",
            access: { rw: "R", readPrivilege: "A" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0007, name: "LastConnectErrorValue", base: "LastConnectErrorValue",
            access: { rw: "R", readPrivilege: "A" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "ScanNetworks", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "ScanNetworksResponse",
            children: [
                DatatypeElement({
                    name: "Ssid", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Ssid", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ScanNetworksResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "WiFiScanResults", base: "WiFiInterfaceScanResult",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "WiFiScanResults", base: "WiFiInterfaceScanResult",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "ThreadScanResults", base: "ThreadInterfaceScanResult",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "ThreadScanResults", base: "ThreadInterfaceScanResult",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "AddOrUpdateWiFiNetwork", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "Ssid", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Ssid", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Credentials", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Credentials", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "AddOrUpdateThreadNetwork", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "OperationalDataset", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OperationalDataset", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveNetwork", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NetworkId", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "NetworkConfigResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "ConnectNetwork", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "ConnectNetworkResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NetworkId", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "ConnectNetworkResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NetworkingStatus", base: "NetworkCommissioningStatus",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "ErrorValue", base: "INT32S",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "ErrorValue", base: "INT32S",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "ReorderNetwork", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "NetworkConfigResponse",
            children: [
                DatatypeElement({
                    name: "NetworkId", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NetworkId", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NetworkIndex", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Breadcrumb", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        })
    ]
}))