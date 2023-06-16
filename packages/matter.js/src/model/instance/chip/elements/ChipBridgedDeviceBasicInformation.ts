/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0039, name: "BridgedDeviceBasicInformation",
    description: "Bridged Device Basic Information",
    details: "This Cluster serves two purposes towards a Node communicating with a Bridge: indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged from a non-CHIP technology; and provide a centralized collection of attributes that the Node MAY collect to aid in conveying information regarding the Bridged Device to a user, such as the vendor name, the model name, or user-assigned name.",
    children: [
        AttributeElement({
            id: 0x0001, name: "VendorName", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", type: "vendor-id",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", type: "string",
            access: "RW", conformance: "O", default: ""
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000b, name: "ManufacturingDate", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000c, name: "PartNumber", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000d, name: "ProductUrl", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000e, name: "ProductLabel", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x000f, name: "SerialNumber", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0011, name: "Reachable", type: "bool",
            conformance: "M", default: true
        }),

        AttributeElement({
            id: 0x0012, name: "UniqueId", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0014, name: "ProductAppearance", type: "ProductAppearanceStruct",
            conformance: "O"
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", type: "uint32",
                    conformance: "M"
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
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "ReachableNewValue", type: "bool",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ProductFinishEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Matte",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Satin",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Polished",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rugged",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Fabric",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Black",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Navy",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Green",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Teal",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Maroon",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Purple",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Olive",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Gray",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Blue",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Lime",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Aqua",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "Red",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Fuchsia",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Yellow",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "White",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "Nickel",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Chrome",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "Brass",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0012, name: "Copper",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0013, name: "Silver",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0014, name: "Gold",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ProductAppearanceStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Finish", type: "ProductFinishEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PrimaryColor", type: "ColorEnum",
                    conformance: "M", quality: "X"
                })
            ]
        })
    ]
}));
