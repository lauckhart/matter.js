/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0028, name: "BasicInformation",
    description: "Basic Information", singleton: true,
    details: "This cluster provides attributes and events for determining basic information about Nodes, which supports both Commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial number, which apply to the whole Node. Also allows setting user device information such as location.",
    children: [
        AttributeElement({
            id: 0x0000, name: "DataModelRevision", base: "uint16"
        }),

        AttributeElement({
            id: 0x0001, name: "VendorName", base: "string"
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", base: "vendor-id"
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", base: "string"
        }),

        AttributeElement({
            id: 0x0004, name: "ProductId", base: "uint16"
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", base: "string",
            access: "RW VM", default: ""
        }),

        AttributeElement({
            id: 0x0006, name: "Location", base: "string",
            access: "RW VA", default: "XX"
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", base: "uint16",
            default: 0
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", base: "string"
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", base: "uint32",
            default: 0
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", base: "string"
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
            id: 0x0010, name: "LocalConfigDisabled", base: "bool",
            access: "RW VM", conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0011, name: "Reachable", base: "bool",
            conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0012, name: "UniqueId", base: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0013, name: "CapabilityMinima", base: "CapabilityMinimaStruct"
        }),

        AttributeElement({
            id: 0x0014, name: "ProductAppearance", base: "ProductAppearanceStruct",
            conformance: "O"
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            priority: "critical",
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
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ReachableNewValue", base: "bool"
                })
            ]
        }),

        DatatypeElement({
            name: "CapabilityMinimaStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "CaseSessionsPerFabric", base: "uint16"
                }),

                DatatypeElement({
                    name: "SubscriptionsPerFabric", base: "uint16"
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
