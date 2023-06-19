/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0031, name: "NetworkCommissioning",
    classification: "node", description: "Network Commissioning",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "MaxNetworks",
            access: "R A", conformance: "M", constraint: "min 1", default: undefined, quality: "F", type: "uint8",
            details: "This SHALL indicate the maximum number of network configuration " +
                     "entries that can be added, based on available device resources. The " +
                     "length of the Networks attribute list SHALL be less than or equal to " +
                     "this value",
            xref: { document: "core", section: "11.8.6.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "Networks",
            access: "R A", conformance: "M", constraint: "max MaxNetworks", default: [], type: "list",
            details: "This attribute SHALL indicate the network configurations that are " +
                     "usable on the network interface represented by this cluster server " +
                     "instance",
            xref: { document: "core", section: "11.8.6.2" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "NetworkInfoStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0002, name: "ScanMaxTimeSeconds",
            access: "R V", conformance: "WI | TH", constraint: "desc", default: undefined, quality: "F", type: "uint8",
            details: "This attribute SHALL indicate the maximum duration taken, in seconds, " +
                     "by the network interface on this cluster server instance to provide " +
                     "scan results",
            xref: { document: "core", section: "11.8.6.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "ConnectMaxTimeSeconds",
            access: "R V", conformance: "WI | TH", constraint: "desc", default: undefined, quality: "F", type: "uint8",
            details: "This attribute SHALL indicate the maximum duration taken, in seconds, " +
                     "by the network interface on this cluster server instance to report a " +
                     "successful or failed network connection indication. This maximum time " +
                     "SHALL account for all operations needed until a successful network " +
                     "connection is deemed to have occurred, including, for example, " +
                     "obtaining IP addresses, or the execution of necessary internal retries",
            xref: { document: "core", section: "11.8.6.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "InterfaceEnabled",
            access: "RW VA", conformance: "M", default: true, quality: "N", type: "bool",
            details: "This attribute SHALL indicate whether the associated network interface" +
                     " is enabled or not. By default all network interfaces SHOULD be " +
                     "enabled during initial commissioning (InterfaceEnabled set to true",
            xref: { document: "core", section: "11.8.6.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "LastNetworkingStatus",
            access: "R A", conformance: "M", default: "null", quality: "X", type: "NetworkCommissioningStatusEnum",
            details: "This attribute SHALL indicate the status of the last attempt either " +
                     "scan or connect to an operational network, using this interface, " +
                     "whether by invocation of the ConnectNetwork command or by autonomous " +
                     "connection after loss of connectivity or during initial establishment" +
                     ". If no such attempt was made, or no network configurations exist in " +
                     "the Networks attribute, then this attribute SHALL be set to null",
            xref: { document: "core", section: "11.8.6.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "LastNetworkId",
            access: "R A", conformance: "M", constraint: "1 to 32", default: undefined, quality: "X", type: "octstr",
            details: "This attribute SHALL indicate the NetworkID used in the last attempt " +
                     "to connect to an operational network, using this interface, whether by" +
                     " invocation of the ConnectNetwork command or by autonomous connection " +
                     "after loss of connectivity or during initial establishment. If no such" +
                     " attempt was made, or no network configurations exist in the Networks " +
                     "attribute, then this attribute SHALL be set to null",
            xref: { document: "core", section: "11.8.6.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "LastConnectErrorValue",
            access: "R A", conformance: "M", default: undefined, quality: "X", type: "int32",
            details: "This attribute SHALL indicate the ErrorValue used in the last failed " +
                     "attempt to connect to an operational network, using this interface, " +
                     "whether by invocation of the ConnectNetwork command or by autonomous " +
                     "connection after loss of connectivity or during initial establishment" +
                     ". If no such attempt was made, or no network configurations exist in " +
                     "the Networks attribute, then this attribute SHALL be set to null",
            xref: { document: "core", section: "11.8.6.8" }
        },

        {
            tag: "command", id: 0x0000, name: "ScanNetworks",
            access: "R A", conformance: "WI | TH", direction: "request", response: "ScanNetworksResponse",
            details: "This command SHALL scan on the Cluster instance’s associated network " +
                     "interface for either of",
            xref: { document: "core", section: "11.8.7.1" },
            children: [
                {
                    tag: "datatype", name: "Ssid",
                    conformance: "O", quality: "X", type: "octstr"
                },

                {
                    tag: "datatype", name: "Breadcrumb",
                    conformance: "O", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "ScanNetworksResponse",
            conformance: "WI | TH", direction: "response",
            details: "This command SHALL contain the status of the last ScanNetworks command" +
                     ", and the associated scan results if the operation was successful",
            xref: { document: "core", section: "11.8.7.2" },
            children: [
                {
                    tag: "datatype", name: "NetworkingStatus",
                    conformance: "M", type: "NetworkCommissioningStatus"
                },

                {
                    tag: "datatype", name: "DebugText",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "WiFiScanResults",
                    conformance: "O", type: "WiFiInterfaceScanResult"
                },

                {
                    tag: "datatype", name: "ThreadScanResults",
                    conformance: "O", type: "ThreadInterfaceScanResult"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "AddOrUpdateWiFiNetwork",
            access: "R A", conformance: "WI", direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL be used to add or modify Wi-Fi network " +
                     "configurations",
            xref: { document: "core", section: "11.8.7.3" },
            children: [
                {
                    tag: "datatype", name: "Ssid",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Credentials",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Breadcrumb",
                    conformance: "O", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "AddOrUpdateThreadNetwork",
            access: "R A", conformance: "TH", direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL be used to add or modify Thread network " +
                     "configurations",
            xref: { document: "core", section: "11.8.7.4" },
            children: [
                {
                    tag: "datatype", name: "OperationalDataset",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Breadcrumb",
                    conformance: "O", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "RemoveNetwork",
            access: "R A", conformance: "WI | TH", direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL remove the network configuration from the Cluster " +
                     "if there was already a network configuration with the same NetworkID. " +
                     "The relative order of the entries in the Networks attribute list SHALL" +
                     " remain unchanged, except for the removal of the requested network " +
                     "configuration",
            xref: { document: "core", section: "11.8.7.7" },
            children: [
                {
                    tag: "datatype", name: "NetworkId",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Breadcrumb",
                    conformance: "O", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0005, name: "NetworkConfigResponse",
            conformance: "WI | TH", direction: "response",
            details: "This response command relates status information for some commands " +
                     "which require it as their response command. See each individual " +
                     "cluster server command for the situations that may cause a " +
                     "NetworkingStatus different than Success",
            xref: { document: "core", section: "11.8.7.8" },
            children: [
                {
                    tag: "datatype", name: "NetworkingStatus",
                    conformance: "M", type: "NetworkCommissioningStatus"
                },

                {
                    tag: "datatype", name: "DebugText",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "NetworkIndex",
                    conformance: "O", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0006, name: "ConnectNetwork",
            access: "R A", conformance: "WI | TH", direction: "request", response: "ConnectNetworkResponse",
            details: "This command SHALL attempt to connect to a network whose configuration" +
                     " was previously added by either the AddOrUpdateWiFiNetwork or " +
                     "AddOrUpdateThreadNetwork commands. Network is identified by its " +
                     "NetworkID",
            xref: { document: "core", section: "11.8.7.9" },
            children: [
                {
                    tag: "datatype", name: "NetworkId",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Breadcrumb",
                    conformance: "O", type: "uint64"
                }
            ]
        },

        {
            tag: "command", id: 0x0007, name: "ConnectNetworkResponse",
            conformance: "WI | TH", direction: "response",
            details: "The data for this command is as follows",
            xref: { document: "core", section: "11.8.7.10" },
            children: [
                {
                    tag: "datatype", name: "NetworkingStatus",
                    conformance: "M", type: "NetworkCommissioningStatus"
                },

                {
                    tag: "datatype", name: "DebugText",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "ErrorValue",
                    conformance: "M", quality: "X", type: "int32"
                }
            ]
        },

        {
            tag: "command", id: 0x0008, name: "ReorderNetwork",
            access: "R A", conformance: "WI | TH", direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL set the specific order of the network configuration" +
                     " selected by its NetworkID in the Networks attribute list to match the" +
                     " position given by NetworkIndex",
            xref: { document: "core", section: "11.8.7.11" },
            children: [
                {
                    tag: "datatype", name: "NetworkId",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "NetworkIndex",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "Breadcrumb",
                    conformance: "O", type: "uint64"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiSecurityBitmap",
            conformance: "M", type: "map8",
            details: "This data type is derived from map8",
            xref: { document: "core", section: "11.8.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unencrypted",
                    description: "Supports unencrypted Wi-Fi",
                    xref: { document: "core", section: "11.8.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Wep",
                    conformance: "M", description: "Supports Wi-Fi using WEP security",
                    xref: { document: "core", section: "11.8.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "WpaPersonal",
                    conformance: "M", description: "Supports Wi-Fi using WPA-Personal security",
                    xref: { document: "core", section: "11.8.5.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "Wpa2Personal",
                    description: "Supports Wi-Fi using WPA2-Personal security",
                    xref: { document: "core", section: "11.8.5.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "Wpa3Personal",
                    conformance: "M", description: "Supports Wi-Fi using WPA3-Personal security",
                    xref: { document: "core", section: "11.8.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkCommissioningStatus",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "OutOfRange",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "BoundsExceeded",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "NetworkIdNotFound",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "DuplicateNetworkId",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "NetworkNotFound",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "RegulatoryError",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "AuthFailure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "UnsupportedSecurity",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "OtherConnectionFailure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "Ipv6Failed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "IpBindFailed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "UnknownError",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiBand",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "2G4",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "3G65",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "5G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "6G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "60G",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiSecurity",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Unencrypted",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Wep",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "WpaPersonal",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Wpa2Personal",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "Wpa3Personal",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiInterfaceScanResult",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Security",
                    conformance: "M", type: "WiFiSecurity"
                },

                {
                    tag: "datatype", name: "Ssid",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Bssid",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Channel",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "WiFiBand",
                    conformance: "M", type: "WiFiBand"
                },

                {
                    tag: "datatype", name: "Rssi",
                    conformance: "M", type: "int8"
                }
            ]
        },

        {
            tag: "datatype", name: "ThreadInterfaceScanResult",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "PanId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "ExtendedPanId",
                    conformance: "M", type: "uint64"
                },

                {
                    tag: "datatype", name: "NetworkName",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "Channel",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "Version",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "ExtendedAddress",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Rssi",
                    conformance: "M", type: "int8"
                },

                {
                    tag: "datatype", name: "Lqi",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkInfo",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "NetworkId",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Connected",
                    conformance: "M", type: "bool"
                }
            ]
        }
    ]
});
