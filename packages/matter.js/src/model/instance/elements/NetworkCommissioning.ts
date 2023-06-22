/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "NetworkCommissioning", id: 0x31, classification: "node",
    description: "Network Commissioning",
    details: "Functionality to configure, enable, disable network credentials and access on a Matter device",
    xref: { document: "core", section: "11.8" },
    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            children: [
                {
                    tag: "datatype", name: "WI", id: 0x0, conformance: "O.a1", description: "Wi-Fi related features",
                    xref: { document: "core", section: "11.8.4" }
                },

                {
                    tag: "datatype", name: "TH", id: 0x1, conformance: "O.a1", description: "Thread related features",
                    xref: { document: "core", section: "11.8.4" }
                },

                {
                    tag: "datatype", name: "ET", id: 0x2, conformance: "O.a1", description: "Ethernet related features",
                    xref: { document: "core", section: "11.8.4" }
                }
            ]
        },

        {
            tag: "attribute", name: "MaxNetworks", id: 0x0, type: "uint8", access: "R A", conformance: "M",
            constraint: "min 1", quality: "F",
            details: "This SHALL indicate the maximum number of network configuration entries that can be added, based on " +
                     "available device resources. The length of the Networks attribute list SHALL be less than or equal to" +
                     " this value",
            xref: { document: "core", section: "11.8.6.1" }
        },

        {
            tag: "attribute", name: "Networks", id: 0x1, type: "list", access: "R A", conformance: "M",
            constraint: "max MaxNetworks",
            details: "This attribute SHALL indicate the network configurations that are usable on the network interface " +
                     "represented by this cluster server instance",
            xref: { document: "core", section: "11.8.6.2" },
            children: [
                {
                    tag: "datatype", name: "entry", type: "NetworkInfoStruct"
                }
            ]
        },

        {
            tag: "attribute", name: "ScanMaxTimeSeconds", id: 0x2, type: "uint8", access: "R V",
            conformance: "WI | TH", constraint: "desc", quality: "F",
            details: "This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on " +
                     "this cluster server instance to provide scan results",
            xref: { document: "core", section: "11.8.6.3" }
        },

        {
            tag: "attribute", name: "ConnectMaxTimeSeconds", id: 0x3, type: "uint8", access: "R V",
            conformance: "WI | TH", constraint: "desc", quality: "F",
            details: "This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on " +
                     "this cluster server instance to report a successful or failed network connection indication. This " +
                     "maximum time SHALL account for all operations needed until a successful network connection is deemed" +
                     " to have occurred, including, for example, obtaining IP addresses, or the execution of necessary " +
                     "internal retries",
            xref: { document: "core", section: "11.8.6.4" }
        },

        {
            tag: "attribute", name: "InterfaceEnabled", id: 0x4, type: "bool", access: "RW VA",
            conformance: "M", default: true, quality: "N",
            details: "This attribute SHALL indicate whether the associated network interface is enabled or not. By default" +
                     " all network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true",
            xref: { document: "core", section: "11.8.6.5" }
        },

        {
            tag: "attribute", name: "LastNetworkingStatus", id: 0x5, type: "NetworkCommissioningStatusEnum",
            access: "R A", conformance: "M", default: null, quality: "X",
            details: "This attribute SHALL indicate the status of the last attempt either scan or connect to an " +
                     "operational network, using this interface, whether by invocation of the ConnectNetwork command or by" +
                     " autonomous connection after loss of connectivity or during initial establishment. If no such " +
                     "attempt was made, or no network configurations exist in the Networks attribute, then this attribute " +
                     "SHALL be set to null",
            xref: { document: "core", section: "11.8.6.6" }
        },

        {
            tag: "attribute", name: "LastNetworkId", id: 0x6, type: "octstr", access: "R A", conformance: "M",
            constraint: "1 to 32", default: null, quality: "X",
            details: "This attribute SHALL indicate the NetworkID used in the last attempt to connect to an operational " +
                     "network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous " +
                     "connection after loss of connectivity or during initial establishment. If no such attempt was made, " +
                     "or no network configurations exist in the Networks attribute, then this attribute SHALL be set to " +
                     "null",
            xref: { document: "core", section: "11.8.6.7" }
        },

        {
            tag: "attribute", name: "LastConnectErrorValue", id: 0x7, type: "int32", access: "R A",
            conformance: "M", default: null, quality: "X",
            details: "This attribute SHALL indicate the ErrorValue used in the last failed attempt to connect to an " +
                     "operational network, using this interface, whether by invocation of the ConnectNetwork command or by" +
                     " autonomous connection after loss of connectivity or during initial establishment. If no such " +
                     "attempt was made, or no network configurations exist in the Networks attribute, then this attribute " +
                     "SHALL be set to null",
            xref: { document: "core", section: "11.8.6.8" }
        },

        {
            tag: "command", name: "ScanNetworks", id: 0x0, access: "R A", conformance: "WI | TH",
            direction: "request", response: "ScanNetworksResponse",
            details: "This command SHALL scan on the Cluster instance’s associated network interface for either of",
            xref: { document: "core", section: "11.8.7.1" },
            children: [
                {
                    tag: "datatype", name: "Ssid", id: 0x0, type: "octstr", conformance: "[WI]", constraint: "1 to 32",
                    default: null, quality: "X",
                    xref: { document: "core", section: "11.8.7.1" }
                },

                {
                    tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                    xref: { document: "core", section: "11.8.7.1" }
                }
            ]
        },

        {
            tag: "command", name: "ScanNetworksResponse", id: 0x1, conformance: "WI | TH",
            direction: "response",
            details: "This command SHALL contain the status of the last ScanNetworks command, and the associated scan " +
                     "results if the operation was successful",
            xref: { document: "core", section: "11.8.7.2" },
            children: [
                {
                    tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                    conformance: "M", constraint: "desc",
                    xref: { document: "core", section: "11.8.7.2" }
                },

                {
                    tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O",
                    constraint: "max 512",
                    xref: { document: "core", section: "11.8.7.2" }
                },

                {
                    tag: "datatype", name: "WiFiScanResults", id: 0x2, type: "list", conformance: "WI",
                    constraint: "desc",
                    xref: { document: "core", section: "11.8.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "WiFiInterfaceScanResultStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThreadScanResults", id: 0x3, type: "list", conformance: "TH",
                    constraint: "desc",
                    xref: { document: "core", section: "11.8.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "ThreadInterfaceScanResultStruct"
                        }
                    ]
                }
            ]
        },

        {
            tag: "command", name: "AddOrUpdateWiFiNetwork", id: 0x2, access: "R A", conformance: "WI",
            direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL be used to add or modify Wi-Fi network configurations",
            xref: { document: "core", section: "11.8.7.3" },
            children: [
                {
                    tag: "datatype", name: "Ssid", id: 0x0, type: "octstr", conformance: "M", constraint: "max 32",
                    xref: { document: "core", section: "11.8.7.3" }
                },

                {
                    tag: "datatype", name: "Credentials", id: 0x1, type: "octstr", conformance: "M",
                    constraint: "max 64",
                    xref: { document: "core", section: "11.8.7.3" }
                },

                {
                    tag: "datatype", name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O",
                    xref: { document: "core", section: "11.8.7.3" }
                }
            ]
        },

        {
            tag: "command", name: "AddOrUpdateThreadNetwork", id: 0x3, access: "R A", conformance: "TH",
            direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL be used to add or modify Thread network configurations",
            xref: { document: "core", section: "11.8.7.4" },
            children: [
                {
                    tag: "datatype", name: "OperationalDataset", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max 254",
                    xref: { document: "core", section: "11.8.7.4" }
                },

                {
                    tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                    xref: { document: "core", section: "11.8.7.4" }
                }
            ]
        },

        {
            tag: "command", name: "RemoveNetwork", id: 0x4, access: "R A", conformance: "WI | TH",
            direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL remove the network configuration from the Cluster if there was already a network " +
                     "configuration with the same NetworkID. The relative order of the entries in the Networks attribute " +
                     "list SHALL remain unchanged, except for the removal of the requested network configuration",
            xref: { document: "core", section: "11.8.7.7" },
            children: [
                {
                    tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "1 to 32",
                    xref: { document: "core", section: "11.8.7.7" }
                },

                {
                    tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                    xref: { document: "core", section: "11.8.7.7" }
                }
            ]
        },

        {
            tag: "command", name: "NetworkConfigResponse", id: 0x5, conformance: "WI | TH",
            direction: "response",
            details: "This response command relates status information for some commands which require it as their " +
                     "response command. See each individual cluster server command for the situations that may cause a " +
                     "NetworkingStatus different than Success",
            xref: { document: "core", section: "11.8.7.8" },
            children: [
                {
                    tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                    conformance: "M", constraint: "desc",
                    xref: { document: "core", section: "11.8.7.8" }
                },

                {
                    tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O",
                    constraint: "max 512",
                    xref: { document: "core", section: "11.8.7.8" }
                },

                {
                    tag: "datatype", name: "NetworkIndex", id: 0x2, type: "uint8", conformance: "O",
                    xref: { document: "core", section: "11.8.7.8" }
                }
            ]
        },

        {
            tag: "command", name: "ConnectNetwork", id: 0x6, access: "R A", conformance: "WI | TH",
            direction: "request", response: "ConnectNetworkResponse",
            details: "This command SHALL attempt to connect to a network whose configuration was previously added by " +
                     "either the AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its" +
                     " NetworkID",
            xref: { document: "core", section: "11.8.7.9" },
            children: [
                {
                    tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "1 to 32",
                    xref: { document: "core", section: "11.8.7.9" }
                },

                {
                    tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                    xref: { document: "core", section: "11.8.7.9" }
                }
            ]
        },

        {
            tag: "command", name: "ConnectNetworkResponse", id: 0x7, conformance: "WI | TH",
            direction: "response",
            details: "The data for this command is as follows",
            xref: { document: "core", section: "11.8.7.10" },
            children: [
                {
                    tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                    conformance: "M",
                    xref: { document: "core", section: "11.8.7.10" }
                },

                {
                    tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O",
                    xref: { document: "core", section: "11.8.7.10" }
                },

                {
                    tag: "datatype", name: "ErrorValue", id: 0x2, type: "int32", conformance: "M", quality: "X",
                    xref: { document: "core", section: "11.8.7.10" }
                }
            ]
        },

        {
            tag: "command", name: "ReorderNetwork", id: 0x8, access: "R A", conformance: "WI | TH",
            direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL set the specific order of the network configuration selected by its NetworkID in " +
                     "the Networks attribute list to match the position given by NetworkIndex",
            xref: { document: "core", section: "11.8.7.11" },
            children: [
                {
                    tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "1 to 32",
                    xref: { document: "core", section: "11.8.7.11" }
                },

                {
                    tag: "datatype", name: "NetworkIndex", id: 0x1, type: "uint8", conformance: "M", constraint: "desc",
                    xref: { document: "core", section: "11.8.7.11" }
                },

                {
                    tag: "datatype", name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O",
                    xref: { document: "core", section: "11.8.7.11" }
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiSecurityBitmap", type: "map8",
            details: "This data type is derived from map8",
            xref: { document: "core", section: "11.8.5.1" },
            children: [
                {
                    tag: "datatype", name: "Unencrypted", id: 0x0, description: "Supports unencrypted Wi-Fi",
                    xref: { document: "core", section: "11.8.5.1" }
                },

                {
                    tag: "datatype", name: "Wep", id: 0x1, description: "Supports Wi-Fi using WEP security",
                    xref: { document: "core", section: "11.8.5.1" }
                },

                {
                    tag: "datatype", name: "WpaPersonal", id: 0x2,
                    description: "Supports Wi-Fi using WPA-Personal security",
                    xref: { document: "core", section: "11.8.5.1" }
                },

                {
                    tag: "datatype", name: "Wpa2Personal", id: 0x3,
                    description: "Supports Wi-Fi using WPA2-Personal security",
                    xref: { document: "core", section: "11.8.5.1" }
                },

                {
                    tag: "datatype", name: "Wpa3Personal", id: 0x4,
                    description: "Supports Wi-Fi using WPA3-Personal security",
                    xref: { document: "core", section: "11.8.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiBandEnum", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.8.5.2" },
            children: [
                {
                    tag: "datatype", name: "2G4", id: 0x0, conformance: "O.a1+",
                    xref: { document: "core", section: "11.8.5.2" }
                },

                {
                    tag: "datatype", name: "3G65", id: 0x1, conformance: "O.a1+",
                    xref: { document: "core", section: "11.8.5.2" }
                },

                {
                    tag: "datatype", name: "5G", id: 0x2, conformance: "O.a1+",
                    xref: { document: "core", section: "11.8.5.2" }
                },

                {
                    tag: "datatype", name: "6G", id: 0x3, conformance: "O.a1+",
                    xref: { document: "core", section: "11.8.5.2" }
                },

                {
                    tag: "datatype", name: "60G", id: 0x4, conformance: "O.a1+",
                    xref: { document: "core", section: "11.8.5.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkCommissioningStatusEnum", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.8.5.3" },
            children: [
                {
                    tag: "datatype", name: "Success", id: 0x0,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "OutOfRange", id: 0x1,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "BoundsExceeded", id: 0x2,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "NetworkIdNotFound", id: 0x3,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "DuplicateNetworkId", id: 0x4,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "NetworkNotFound", id: 0x5,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "RegulatoryError", id: 0x6,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "AuthFailure", id: 0x7,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "UnsupportedSecurity", id: 0x8,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "OtherConnectionFailure", id: 0x9,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "Ipv6Failed", id: 0xa,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "IpBindFailed", id: 0xb,
                    xref: { document: "core", section: "11.8.5.3" }
                },

                {
                    tag: "datatype", name: "UnknownError", id: 0xc,
                    xref: { document: "core", section: "11.8.5.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkInfoStruct", type: "struct",
            details: "NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks " +
                     "attribute",
            xref: { document: "core", section: "11.8.5.4" },
            children: [
                {
                    tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "1 to 32",
                    xref: { document: "core", section: "11.8.5.4" }
                },

                {
                    tag: "datatype", name: "Connected", id: 0x1, type: "bool", conformance: "M",
                    xref: { document: "core", section: "11.8.5.4" }
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiInterfaceScanResultStruct", type: "struct",
            details: "WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result",
            xref: { document: "core", section: "11.8.5.5" },
            children: [
                {
                    tag: "datatype", name: "Security", id: 0x0, type: "WiFiSecurityBitmap", conformance: "WI",
                    xref: { document: "core", section: "11.8.5.5" }
                },

                {
                    tag: "datatype", name: "Ssid", id: 0x1, type: "octstr", conformance: "WI", constraint: "max 32",
                    xref: { document: "core", section: "11.8.5.5" }
                },

                {
                    tag: "datatype", name: "Bssid", id: 0x2, type: "octstr", conformance: "WI", constraint: "6",
                    xref: { document: "core", section: "11.8.5.5" }
                },

                {
                    tag: "datatype", name: "Channel", id: 0x3, type: "uint16", conformance: "WI",
                    xref: { document: "core", section: "11.8.5.5" }
                },

                {
                    tag: "datatype", name: "WiFiBand", id: 0x4, type: "WiFiBandEnum", conformance: "[WI]",
                    xref: { document: "core", section: "11.8.5.5" }
                },

                {
                    tag: "datatype", name: "Rssi", id: 0x5, type: "int8", conformance: "[WI]",
                    xref: { document: "core", section: "11.8.5.5" }
                }
            ]
        },

        {
            tag: "datatype", name: "ThreadInterfaceScanResultStruct", type: "struct",
            details: "ThreadInterfaceScanResultStruct represents a single Thread network scan result",
            xref: { document: "core", section: "11.8.5.6" },
            children: [
                {
                    tag: "datatype", name: "PanId", id: 0x0, type: "uint16", conformance: "TH",
                    constraint: "0 to 65534",
                    xref: { document: "core", section: "11.8.5.6" }
                },

                {
                    tag: "datatype", name: "ExtendedPanId", id: 0x1, type: "uint64", conformance: "TH",
                    xref: { document: "core", section: "11.8.5.6" }
                },

                {
                    tag: "datatype", name: "NetworkName", id: 0x2, type: "string", conformance: "TH",
                    constraint: "1 to 16",
                    xref: { document: "core", section: "11.8.5.6" }
                },

                {
                    tag: "datatype", name: "Channel", id: 0x3, type: "uint16", conformance: "TH",
                    xref: { document: "core", section: "11.8.5.6" }
                },

                {
                    tag: "datatype", name: "Version", id: 0x4, type: "uint8", conformance: "TH",
                    xref: { document: "core", section: "11.8.5.6" }
                },

                {
                    tag: "datatype", name: "ExtendedAddress", id: 0x5, type: "hwadr", conformance: "TH",
                    xref: { document: "core", section: "11.8.5.6" }
                },

                {
                    tag: "datatype", name: "Rssi", id: 0x6, type: "int8", conformance: "TH",
                    xref: { document: "core", section: "11.8.5.6" }
                },

                {
                    tag: "datatype", name: "Lqi", id: 0x7, type: "uint8", conformance: "TH",
                    xref: { document: "core", section: "11.8.5.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkInfo", type: "struct", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "NetworkId", type: "octstr", conformance: "M"
                },

                {
                    tag: "datatype", name: "Connected", type: "bool", conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkCommissioningStatus", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Success", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "OutOfRange", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "BoundsExceeded", id: 0x2, conformance: "M"
                },

                {
                    tag: "datatype", name: "NetworkIdNotFound", id: 0x3, conformance: "M"
                },

                {
                    tag: "datatype", name: "DuplicateNetworkId", id: 0x4, conformance: "M"
                },

                {
                    tag: "datatype", name: "NetworkNotFound", id: 0x5, conformance: "M"
                },

                {
                    tag: "datatype", name: "RegulatoryError", id: 0x6, conformance: "M"
                },

                {
                    tag: "datatype", name: "AuthFailure", id: 0x7, conformance: "M"
                },

                {
                    tag: "datatype", name: "UnsupportedSecurity", id: 0x8, conformance: "M"
                },

                {
                    tag: "datatype", name: "OtherConnectionFailure", id: 0x9, conformance: "M"
                },

                {
                    tag: "datatype", name: "Ipv6Failed", id: 0xa, conformance: "M"
                },

                {
                    tag: "datatype", name: "IpBindFailed", id: 0xb, conformance: "M"
                },

                {
                    tag: "datatype", name: "UnknownError", id: 0xc, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiInterfaceScanResult", type: "struct", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Security", type: "WiFiSecurity", conformance: "M"
                },

                {
                    tag: "datatype", name: "Ssid", type: "octstr", conformance: "M"
                },

                {
                    tag: "datatype", name: "Bssid", type: "octstr", conformance: "M"
                },

                {
                    tag: "datatype", name: "Channel", type: "uint16", conformance: "M"
                },

                {
                    tag: "datatype", name: "WiFiBand", type: "WiFiBand", conformance: "M"
                },

                {
                    tag: "datatype", name: "Rssi", type: "int8", conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiSecurity", type: "map8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Unencrypted", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Wep", id: 0x2, conformance: "M"
                },

                {
                    tag: "datatype", name: "WpaPersonal", id: 0x4, conformance: "M"
                },

                {
                    tag: "datatype", name: "Wpa2Personal", id: 0x8, conformance: "M"
                },

                {
                    tag: "datatype", name: "Wpa3Personal", id: 0x10, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiBand", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "2G4", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "3G65", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "5G", id: 0x2, conformance: "M"
                },

                {
                    tag: "datatype", name: "6G", id: 0x3, conformance: "M"
                },

                {
                    tag: "datatype", name: "60G", id: 0x4, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ThreadInterfaceScanResult", type: "struct", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "PanId", type: "uint16", conformance: "M"
                },

                {
                    tag: "datatype", name: "ExtendedPanId", type: "uint64", conformance: "M"
                },

                {
                    tag: "datatype", name: "NetworkName", type: "string", conformance: "M"
                },

                {
                    tag: "datatype", name: "Channel", type: "uint16", conformance: "M"
                },

                {
                    tag: "datatype", name: "Version", type: "uint8", conformance: "M"
                },

                {
                    tag: "datatype", name: "ExtendedAddress", type: "octstr", conformance: "M"
                },

                {
                    tag: "datatype", name: "Rssi", type: "int8", conformance: "M"
                },

                {
                    tag: "datatype", name: "Lqi", type: "uint8", conformance: "M"
                }
            ]
        }
    ]
});
