/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0039, name: "BridgedDeviceBasicInformation",
    description: "Bridged Device Basic Information",
    details: "This Cluster serves two purposes towards a Node communicating with a Bridge: indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged from a non-CHIP technology; and provide a centralized collection of attributes that the Node MAY collect to aid in conveying information regarding the Bridged Device to a user, such as the vendor name, the model name, or user-assigned name.",
    children: [
        AttributeElement({
            id: 0x0001, name: "VendorName", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", base: "vendor-id",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", base: "string",
            access: "RW", conformance: "O", default: ""
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", base: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000b, name: "ManufacturingDate", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000c, name: "PartNumber", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000d, name: "ProductUrl", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000e, name: "ProductLabel", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000f, name: "SerialNumber", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0011, name: "Reachable", base: "bool",
            default: true
        }),

        AttributeElement({
            id: 0x0012, name: "UniqueId", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0014, name: "ProductAppearance", base: "ProductAppearanceStruct",
            conformance: "O"
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ShutDown",
            conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x0002, name: "Leave",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged",
            priority: "info",
            children: [
                DatatypeElement({
                    name: "ReachableNewValue", base: "bool"
                })
            ]
        }),

        DatatypeElement({
            name: "ProductFinishEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Matte"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Satin"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Polished"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rugged"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Fabric"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Black"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Navy"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Green"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Teal"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Maroon"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Purple"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Olive"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Gray"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Blue"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Lime"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Aqua"
                }),

                DatatypeElement({
                    id: 0x000b, name: "Red"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Fuchsia"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Yellow"
                }),

                DatatypeElement({
                    id: 0x000e, name: "White"
                }),

                DatatypeElement({
                    id: 0x000f, name: "Nickel"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Chrome"
                }),

                DatatypeElement({
                    id: 0x0011, name: "Brass"
                }),

                DatatypeElement({
                    id: 0x0012, name: "Copper"
                }),

                DatatypeElement({
                    id: 0x0013, name: "Silver"
                }),

                DatatypeElement({
                    id: 0x0014, name: "Gold"
                })
            ]
        }),

        DatatypeElement({
            name: "ProductAppearanceStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Finish", base: "ProductFinishEnum"
                }),

                DatatypeElement({
                    name: "PrimaryColor", base: "ColorEnum",
                    quality: "X"
                })
            ]
        })
    ]
}));
