/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0039, name: "BridgedDeviceBasicInformation",
    classification: "endpoint", description: "Bridged Device Basic Information",
    children: [
        {
            tag: "event", id: 0x0000, name: "StartUp",
            conformance: "O", priority: "critical",
            xref: { document: "core", section: "9.13.5" },
            children: [
                {
                    tag: "datatype", name: "SoftwareVersion",
                    conformance: "M", type: "uint32"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "ShutDown",
            conformance: "O", priority: "critical",
            xref: { document: "core", section: "9.13.5" }
        },

        {
            tag: "event", id: 0x0002, name: "Leave",
            conformance: "O", priority: "info",
            xref: { document: "core", section: "9.13.5" }
        },

        {
            tag: "event", id: 0x0003, name: "ReachableChanged",
            conformance: "M", priority: "info",
            details: "This event SHALL be generated when there is a change in the Reachable " +
                     "attribute. Its purpose is to provide an indication towards interested " +
                     "parties that the reachability of a bridged device (over the non-Matter" +
                     " network) has changed, so they MAY take appropriate action",
            xref: { document: "core", section: "9.13.5.1" },
            children: [
                {
                    tag: "datatype", name: "ReachableNewValue",
                    conformance: "M", type: "bool"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "VendorName",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x0002, name: "VendorId",
            conformance: "O", type: "vendor-id"
        },

        {
            tag: "attribute", id: 0x0003, name: "ProductName",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x0005, name: "NodeLabel",
            access: "RW", conformance: "O", default: "", type: "string"
        },

        {
            tag: "attribute", id: 0x0007, name: "HardwareVersion",
            conformance: "O", default: undefined, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0008, name: "HardwareVersionString",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x0009, name: "SoftwareVersion",
            conformance: "O", default: undefined, type: "uint32"
        },

        {
            tag: "attribute", id: 0x000a, name: "SoftwareVersionString",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x000b, name: "ManufacturingDate",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x000c, name: "PartNumber",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x000d, name: "ProductUrl",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x000e, name: "ProductLabel",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x000f, name: "SerialNumber",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x0011, name: "Reachable",
            conformance: "M", default: true, type: "bool"
        },

        {
            tag: "attribute", id: 0x0012, name: "UniqueId",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x0014, name: "ProductAppearance",
            conformance: "O", type: "ProductAppearanceStruct"
        },

        {
            tag: "datatype", name: "ProductFinishEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Other",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Matte",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Satin",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Polished",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Rugged",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Fabric",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ColorEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Black",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Navy",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Green",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Teal",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Maroon",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Purple",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Olive",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "Gray",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Blue",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "Lime",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "Aqua",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "Red",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "Fuchsia",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000d, name: "Yellow",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000e, name: "White",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000f, name: "Nickel",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "Chrome",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0011, name: "Brass",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0012, name: "Copper",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0013, name: "Silver",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0014, name: "Gold",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ProductAppearanceStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Finish",
                    conformance: "M", type: "ProductFinishEnum"
                },

                {
                    tag: "datatype", name: "PrimaryColor",
                    conformance: "M", quality: "X", type: "ColorEnum"
                }
            ]
        }
    ]
});
