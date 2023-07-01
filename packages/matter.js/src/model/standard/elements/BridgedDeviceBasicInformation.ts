/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "BridgedDeviceBasicInformation", id: 0x39, type: "BasicInformation",
    classification: "endpoint", description: "Bridged Device Basic Information",
    details: "This Cluster serves two purposes towards a Node communicating with a Bridge: indicate that the " +
             "functionality on the Endpoint where it is placed (and its Parts) is bridged from a non-CHIP " +
             "technology; and provide a centralized collection of attributes that the Node MAY collect to aid in " +
             "conveying information regarding the Bridged Device to a user, such as the vendor name, the model " +
             "name, or user-assigned name.",
    xref: { document: "core", section: "9.13" },

    children: [
        {
            tag: "attribute", name: "DataModelRevision", id: 0x0, conformance: "X",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "VendorName", id: 0x1, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "VendorId", id: 0x2, type: "vendor-id", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "ProductName", id: 0x3, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "ProductId", id: 0x4, conformance: "X",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "NodeLabel", id: 0x5, type: "string", access: "RW", conformance: "O",
            default: "",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "Location", id: 0x6, conformance: "X",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "HardwareVersion", id: 0x7, type: "uint16", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "HardwareVersionString", id: 0x8, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "SoftwareVersion", id: 0x9, type: "uint32", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "SoftwareVersionString", id: 0xa, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "ManufacturingDate", id: 0xb, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "PartNumber", id: 0xc, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "ProductUrl", id: 0xd, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "ProductLabel", id: 0xe, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "SerialNumber", id: 0xf, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "LocalConfigDisabled", id: 0x10, conformance: "X",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "Reachable", id: 0x11, type: "bool", conformance: "M", default: true,
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "UniqueId", id: 0x12, type: "string", conformance: "O",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "CapabilityMinima", id: 0x13, conformance: "X",
            xref: { document: "core", section: "9.13.4" }
        },
        {
            tag: "attribute", name: "ProductAppearance", id: 0x14, type: "ProductAppearanceStruct",
            conformance: "O"
        },
        {
            tag: "event", name: "StartUp", id: 0x0, conformance: "O", priority: "critical",
            xref: { document: "core", section: "9.13.5" },
            children: [ { tag: "datatype", name: "SoftwareVersion", type: "uint32", conformance: "M" } ]
        },
        {
            tag: "event", name: "ShutDown", id: 0x1, conformance: "O", priority: "critical",
            xref: { document: "core", section: "9.13.5" }
        },
        {
            tag: "event", name: "Leave", id: 0x2, conformance: "O", priority: "info",
            xref: { document: "core", section: "9.13.5" }
        },

        {
            tag: "event", name: "ReachableChanged", id: 0x3, conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is a change in the Reachable attribute. Its purpose is to " +
                     "provide an indication towards interested parties that the reachability of a bridged device (over " +
                     "the non-Matter network) has changed, so they MAY take appropriate action.",
            xref: { document: "core", section: "9.13.5.1" },
            children: [ { tag: "datatype", name: "ReachableNewValue", type: "bool", conformance: "M" } ]
        },

        {
            tag: "datatype", name: "ProductAppearanceStruct", type: "struct", conformance: "M",
            children: [
                { tag: "datatype", name: "Finish", type: "ProductFinishEnum", conformance: "M" },
                { tag: "datatype", name: "PrimaryColor", type: "ColorEnum", conformance: "M", quality: "X" }
            ]
        },

        {
            tag: "datatype", name: "ProductFinishEnum", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Other", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Matte", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Satin", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Polished", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Rugged", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Fabric", id: 0x5, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "ColorEnum", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Black", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Navy", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Green", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Teal", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Maroon", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Purple", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Olive", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "Gray", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "Blue", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "Lime", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "Aqua", id: 0xa, conformance: "M" },
                { tag: "datatype", name: "Red", id: 0xb, conformance: "M" },
                { tag: "datatype", name: "Fuchsia", id: 0xc, conformance: "M" },
                { tag: "datatype", name: "Yellow", id: 0xd, conformance: "M" },
                { tag: "datatype", name: "White", id: 0xe, conformance: "M" },
                { tag: "datatype", name: "Nickel", id: 0xf, conformance: "M" },
                { tag: "datatype", name: "Chrome", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "Brass", id: 0x11, conformance: "M" },
                { tag: "datatype", name: "Copper", id: 0x12, conformance: "M" },
                { tag: "datatype", name: "Silver", id: 0x13, conformance: "M" },
                { tag: "datatype", name: "Gold", id: 0x14, conformance: "M" }
            ]
        }
    ]
});