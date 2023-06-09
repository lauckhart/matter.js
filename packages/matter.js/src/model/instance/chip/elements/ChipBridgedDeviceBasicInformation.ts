/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0039, name: "BridgedDeviceBasicInformation",
    description: "Bridged Device Basic Information",
    details: "This Cluster serves two purposes towards a Node communicating with a Bridge: indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged from a non-CHIP technology; and provide a centralized collection of attributes that the Node MAY collect to aid in conveying information regarding the Bridged Device to a user, such as the vendor name, the model name, or user-assigned name.",
    children: [
        AttributeElement({
            id: 0x0001, name: "VendorName", base: "VendorName",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", base: "VendorID",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", base: "ProductName",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", base: "NodeLabel",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", base: "HardwareVersion",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", base: "HardwareVersionString",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", base: "SoftwareVersion",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", base: "SoftwareVersionString",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000b, name: "ManufacturingDate", base: "ManufacturingDate",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000c, name: "PartNumber", base: "PartNumber",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000d, name: "ProductUrl", base: "ProductURL",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000e, name: "ProductLabel", base: "ProductLabel",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000f, name: "SerialNumber", base: "SerialNumber",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "Reachable", base: "Reachable",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0012, name: "UniqueId", base: "UniqueID",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0014, name: "ProductAppearance", base: "ProductAppearance",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        EventElement({
            id: 0x0000, name: "StartUp", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SoftwareVersion", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ShutDown", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x0002, name: "Leave", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "ReachableNewValue", base: "boolean",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ReachableNewValue", base: "boolean",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}))