/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0031, name: "NetworkCommissioning",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "MaxNetworks", base: "uint8",
            access: "R A", conformance: "M", constraint: "min 1", value: "", quality: "F",
            details: "This SHALL indicate the maximum number of network configuration entries that can be added, based on available device resources. The length of the Networks attribute list SHALL be less than or equal to this value.",
            xref: { section: "11.8.6.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "Networks", base: "list[NetworkInfoStruct]",
            access: "R A", conformance: "M", constraint: "max MaxNetworks", value: "empty",
            details: "This attribute SHALL indicate the network configurations that are usable on the network interface represented by this cluster server instance.",
            xref: { section: "11.8.6.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "ScanMaxTimeSeconds", base: "uint8",
            access: "R V", conformance: "WI | TH", constraint: "desc", value: "", quality: "F",
            details: "This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on this cluster server instance to provide scan results.",
            xref: { section: "11.8.6.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "ConnectMaxTimeSeconds", base: "uint8",
            access: "R V", conformance: "WI | TH", constraint: "desc", value: "", quality: "F",
            details: "This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on this cluster server instance to report a successful or failed network connection indication. This maximum time SHALL account for all operations needed until a successful network connection is deemed to have occurred, including, for example, obtaining IP addresses, or the execution of necessary internal retries.",
            xref: { section: "11.8.6.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "InterfaceEnabled", base: "bool",
            access: "RW VA", conformance: "M", constraint: "", value: "true", quality: "N",
            details: "This attribute SHALL indicate whether the associated network interface is enabled or not. By default all network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true).",
            xref: { section: "11.8.6.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "LastNetworkingStatus", base: "NetworkCommissioningStatusEnum",
            access: "R A", conformance: "M", constraint: "", value: "null", quality: "X",
            details: "This attribute SHALL indicate the status of the last attempt either scan or connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute SHALL be set to null.",
            xref: { section: "11.8.6.6", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "LastNetworkId", base: "octstr",
            access: "R A", conformance: "M", constraint: "1 to 32", value: "null", quality: "X",
            details: "This attribute SHALL indicate the NetworkID used in the last attempt to connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute SHALL be set to null.",
            xref: { section: "11.8.6.7", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "LastConnectErrorValue", base: "int32",
            access: "R A", conformance: "M", constraint: "", value: "null", quality: "X",
            details: "This attribute SHALL indicate the ErrorValue used in the last failed attempt to connect to an operational network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous connection after loss of connectivity or during initial establishment. If no such attempt was made, or no network configurations exist in the Networks attribute, then this attribute SHALL be set to null.",
            xref: { section: "11.8.6.8", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "WiFiSecurityBitmap", base: "map8",
            details: "This data type is derived from map8.",
            xref: { section: "11.8.5.1", document: "core", version: "1.1" }
        })
    ]
}));
