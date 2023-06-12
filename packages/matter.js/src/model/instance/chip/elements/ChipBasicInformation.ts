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
            id: 0x0000, name: "DataModelRevision", base: "uint16",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "VendorName", base: "string",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", base: "vendor-id",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", base: "string",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "ProductId", base: "uint16",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", base: "string",
            access: "W VM", conformance: "M", default: ""
        }),

        AttributeElement({
            id: 0x0006, name: "Location", base: "string",
            access: "W VA", conformance: "M", default: "XX"
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", base: "uint16",
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", base: "string",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", base: "uint32",
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", base: "string",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x000b, name: "ManufacturingDate", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x000c, name: "PartNumber", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x000d, name: "ProductUrl", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x000e, name: "ProductLabel", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x000f, name: "SerialNumber", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0010, name: "LocalConfigDisabled", base: "bool",
            access: "W VM", conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0011, name: "Reachable", base: "bool",
            access: "R", conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0012, name: "UniqueId", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0013, name: "CapabilityMinima", base: "CapabilityMinimaStruct",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0014, name: "ProductAppearance", base: "ProductAppearanceStruct",
            access: "R", conformance: "O"
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            access: "R", conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "ShutDown",
            access: "R", conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x0002, name: "Leave",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ReachableNewValue", base: "bool",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CapabilityMinimaStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "CaseSessionsPerFabric", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "SubscriptionsPerFabric", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ProductFinishEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Other",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Matte",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Satin",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Polished",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rugged",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Fabric",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Black",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Navy",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Green",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Teal",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Maroon",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Purple",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Olive",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Gray",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Blue",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Lime",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Aqua",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "Red",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Fuchsia",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Yellow",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "White",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "Nickel",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Chrome",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0011, name: "Brass",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0012, name: "Copper",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0013, name: "Silver",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0014, name: "Gold",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ProductAppearanceStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Finish", base: "ProductFinishEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "PrimaryColor", base: "ColorEnum",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        })
    ]
}));
