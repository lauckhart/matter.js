/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0031, name: "NetworkCommissioning",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "WI",
                    description: "Wi-Fi related features",
                    xref: { section: "11.8.4", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "TH",
                    description: "Thread related features",
                    xref: { section: "11.8.4", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "ET",
                    description: "Ethernet related features",
                    xref: { section: "11.8.4", document: "core", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "MaxNetworks", base: "uint8",
            access: "R A", conformance: "M", constraint: "min 1", default: "", quality: "F",
            details: "This SHALL indicate the maximum number of network configuration entries that can be added, based on available device resources. The length of the Networks attribute list SHALL be less than or equal to this value.",
            xref: { section: "11.8.6.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "Networks", base: "list[NetworkInfoStruct]",
            access: "R A", conformance: "M", constraint: "max MaxNetworks", default: "empty",
            details: "This attribute SHALL indicate the network configurations that are usable on the network interface represented by this cluster server instance.",
            xref: { section: "11.8.6.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "ScanMaxTimeSeconds", base: "uint8",
            access: "R V", conformance: "WI | TH", constraint: "desc", default: "", quality: "F",
            details: "This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on this cluster server instance to provide scan results.",
            xref: { section: "11.8.6.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "ConnectMaxTimeSeconds", base: "uint8",
            access: "R V", conformance: "WI | TH", constraint: "desc", default: "", quality: "F",
            details: "This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on this cluster server instance to report a successful or failed network connection indication. This maximum time SHALL account for all operations needed until a successful network connection is deemed to have occurred, including, for example, obtaining IP addresses, or the execution of necessary internal retries.",
            xref: { section: "11.8.6.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "InterfaceEnabled", base: "bool",
            access: "RW VA", conformance: "M", constraint: "", default: "true", quality: "N",
            details: "This attribute SHALL indicate whether the associated network interface is enabled or not. By default all network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).",
            xref: { section: "11.8.6.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "LastNetworkingStatus", base: "NetworkCommissioningStatusEnum",
            access: "R A", conformance: "M", constraint: "", default: "null", quality: "X",
            details: "This attribute SHALL indicate the status of the last attempt either scan or connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute SHALL be set to null.",
            xref: { section: "11.8.6.6", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "LastNetworkId", base: "octstr",
            access: "R A", conformance: "M", constraint: "1 to 32", default: "null", quality: "X",
            details: "This attribute SHALL indicate the NetworkID used in the last attempt to connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute SHALL be set to null.",
            xref: { section: "11.8.6.7", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "LastConnectErrorValue", base: "int32",
            access: "R A", conformance: "M", constraint: "", default: "null", quality: "X",
            details: "This attribute SHALL indicate the ErrorValue used in the last failed attempt to connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute SHALL be set to null.",
            xref: { section: "11.8.6.8", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "ScanNetworks",
            access: "A", conformance: "WI | TH", direction: "request", response: "ScanNetworksResponse",
            details: "This command SHALL scan on the Cluster instance’s associated network interface for either of:",
            xref: { section: "11.8.7.1", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "ScanNetworksResponse",
            conformance: "WI | TH", direction: "response",
            details: "This command SHALL contain the status of the last ScanNetworks command, and the associated scan results if the operation was successful.",
            xref: { section: "11.8.7.2", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "AddOrUpdateWiFiNetwork",
            access: "A", conformance: "WI", direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL be used to add or modify Wi-Fi network configurations.",
            xref: { section: "11.8.7.3", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "AddOrUpdateThreadNetwork",
            access: "A", conformance: "TH", direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL be used to add or modify Thread network configurations.",
            xref: { section: "11.8.7.4", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "RemoveNetwork",
            access: "A", conformance: "WI | TH", direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL remove the network configuration from the Cluster if there was already a network configuration with the same NetworkID. The relative order of the entries in the Networks attribute list SHALL remain unchanged, except for the removal of the requested network configuration.",
            xref: { section: "11.8.7.7", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "NetworkConfigResponse",
            conformance: "WI | TH", direction: "response",
            details: "This response command relates status information for some commands which require it as their response command. See each individual cluster server command for the situations that may cause a NetworkingStatus different than Success.",
            xref: { section: "11.8.7.8", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0006, name: "ConnectNetwork",
            access: "A", conformance: "WI | TH", direction: "request", response: "ConnectNetworkResponse",
            details: "This command SHALL attempt to connect to a network whose configuration was previously added by either the AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.",
            xref: { section: "11.8.7.9", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0007, name: "ConnectNetworkResponse",
            conformance: "WI | TH", direction: "response",
            details: "The data for this command is as follows:",
            xref: { section: "11.8.7.10", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0008, name: "ReorderNetwork",
            access: "A", conformance: "WI | TH", direction: "request", response: "NetworkConfigResponse",
            details: "This command SHALL set the specific order of the network configuration selected by its NetworkID in the Networks attribute list to match the position given by NetworkIndex.",
            xref: { section: "11.8.7.11", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "WiFiSecurityBitmap", base: "map8.",
            details: "This data type is derived from map8.",
            xref: { section: "11.8.5.1", document: "core", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unencrypted",
                    description: "Supports unencrypted Wi-Fi",
                    xref: { section: "11.8.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Wep",
                    description: "Supports Wi-Fi using WEP security",
                    xref: { section: "11.8.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "WpaPersonal",
                    description: "Supports Wi-Fi using WPA-Personal security",
                    xref: { section: "11.8.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "Wpa2Personal",
                    description: "Supports Wi-Fi using WPA2-Personal security",
                    xref: { section: "11.8.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "Wpa3Personal",
                    description: "Supports Wi-Fi using WPA3-Personal security",
                    xref: { section: "11.8.5.1", document: "core", version: "1.1" }
                })
            ]
        })
    ]
}));
