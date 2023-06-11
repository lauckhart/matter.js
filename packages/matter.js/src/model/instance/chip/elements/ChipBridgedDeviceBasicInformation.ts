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
            id: 0x0001, name: "vendorName", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0002, name: "vendorId", base: "vendorId",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "productName", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "nodeLabel", base: "string",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "hardwareVersion", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0008, name: "hardwareVersionString", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0009, name: "softwareVersion", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x000a, name: "softwareVersionString", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000b, name: "manufacturingDate", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000c, name: "partNumber", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000d, name: "productUrl", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000e, name: "productLabel", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000f, name: "serialNumber", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "reachable", base: "bool",
            access: { rw: "R" }, conformance: [ "M" ], value: "1"
        }),

        AttributeElement({
            id: 0x0012, name: "uniqueId", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0014, name: "productAppearance", base: "ProductAppearanceStruct",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "softwareVersion", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "softwareVersion", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ShutDown",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x0002, name: "Leave",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "reachableNewValue", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "reachableNewValue", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "ProductFinishEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "other",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "other",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "matte",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "matte",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "satin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "satin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "polished",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "polished",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "rugged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "rugged",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "fabric",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "fabric",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "black",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "black",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0"
                }),

                DatatypeElement({
                    name: "navy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "navy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "1"
                }),

                DatatypeElement({
                    name: "green",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "green",
                    access: { rw: "R" }, conformance: [ "M" ], value: "2"
                }),

                DatatypeElement({
                    name: "teal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "teal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "3"
                }),

                DatatypeElement({
                    name: "maroon",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "maroon",
                    access: { rw: "R" }, conformance: [ "M" ], value: "4"
                }),

                DatatypeElement({
                    name: "purple",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "purple",
                    access: { rw: "R" }, conformance: [ "M" ], value: "5"
                }),

                DatatypeElement({
                    name: "olive",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "olive",
                    access: { rw: "R" }, conformance: [ "M" ], value: "6"
                }),

                DatatypeElement({
                    name: "gray",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "gray",
                    access: { rw: "R" }, conformance: [ "M" ], value: "7"
                }),

                DatatypeElement({
                    name: "blue",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "blue",
                    access: { rw: "R" }, conformance: [ "M" ], value: "8"
                }),

                DatatypeElement({
                    name: "lime",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "lime",
                    access: { rw: "R" }, conformance: [ "M" ], value: "9"
                }),

                DatatypeElement({
                    name: "aqua",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "aqua",
                    access: { rw: "R" }, conformance: [ "M" ], value: "10"
                }),

                DatatypeElement({
                    name: "red",
                    access: { rw: "R" }, conformance: [ "M" ], value: "11"
                }),

                DatatypeElement({
                    name: "red",
                    access: { rw: "R" }, conformance: [ "M" ], value: "11"
                }),

                DatatypeElement({
                    name: "fuchsia",
                    access: { rw: "R" }, conformance: [ "M" ], value: "12"
                }),

                DatatypeElement({
                    name: "fuchsia",
                    access: { rw: "R" }, conformance: [ "M" ], value: "12"
                }),

                DatatypeElement({
                    name: "yellow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "13"
                }),

                DatatypeElement({
                    name: "yellow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "13"
                }),

                DatatypeElement({
                    name: "white",
                    access: { rw: "R" }, conformance: [ "M" ], value: "14"
                }),

                DatatypeElement({
                    name: "white",
                    access: { rw: "R" }, conformance: [ "M" ], value: "14"
                }),

                DatatypeElement({
                    name: "nickel",
                    access: { rw: "R" }, conformance: [ "M" ], value: "15"
                }),

                DatatypeElement({
                    name: "nickel",
                    access: { rw: "R" }, conformance: [ "M" ], value: "15"
                }),

                DatatypeElement({
                    name: "chrome",
                    access: { rw: "R" }, conformance: [ "M" ], value: "16"
                }),

                DatatypeElement({
                    name: "chrome",
                    access: { rw: "R" }, conformance: [ "M" ], value: "16"
                }),

                DatatypeElement({
                    name: "brass",
                    access: { rw: "R" }, conformance: [ "M" ], value: "17"
                }),

                DatatypeElement({
                    name: "brass",
                    access: { rw: "R" }, conformance: [ "M" ], value: "17"
                }),

                DatatypeElement({
                    name: "copper",
                    access: { rw: "R" }, conformance: [ "M" ], value: "18"
                }),

                DatatypeElement({
                    name: "copper",
                    access: { rw: "R" }, conformance: [ "M" ], value: "18"
                }),

                DatatypeElement({
                    name: "silver",
                    access: { rw: "R" }, conformance: [ "M" ], value: "19"
                }),

                DatatypeElement({
                    name: "silver",
                    access: { rw: "R" }, conformance: [ "M" ], value: "19"
                }),

                DatatypeElement({
                    name: "gold",
                    access: { rw: "R" }, conformance: [ "M" ], value: "20"
                }),

                DatatypeElement({
                    name: "gold",
                    access: { rw: "R" }, conformance: [ "M" ], value: "20"
                })
            ]
        }),

        DatatypeElement({
            name: "ProductAppearanceStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "finish", base: "ProductFinishEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "finish", base: "ProductFinishEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "primaryColor", base: "ColorEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "primaryColor", base: "ColorEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        })
    ]
}));
