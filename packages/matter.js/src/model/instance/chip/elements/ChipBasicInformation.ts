/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0028, name: "BasicInformation",
    description: "Basic Information", singleton: true,
    details: "This cluster provides attributes and events for determining basic information about Nodes, which supports both Commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial number, which apply to the whole Node. Also allows setting user device information such as location.",
    children: [
        AttributeElement({
            id: 0x0000, name: "DataModelRevision", base: "uint16",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "VendorName", base: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", base: "vendor-id",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", base: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "ProductId", base: "uint16",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", base: "string",
            access: "RW VM", conformance: "M", default: ""
        }),

        AttributeElement({
            id: 0x0006, name: "Location", base: "string",
            access: "RW VA", conformance: "M", default: "XX"
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", base: "uint16",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", base: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", base: "uint32",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", base: "string",
            conformance: "M"
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
            id: 0x0013, name: "CapabilityMinima", base: "CapabilityMinimaStruct",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0014, name: "ProductAppearance", base: "ProductAppearanceStruct",
            conformance: "O"
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "SoftwareVersion", base: "uint32",
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
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ReachableNewValue", base: "bool",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CapabilityMinimaStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "CaseSessionsPerFabric", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SubscriptionsPerFabric", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ProductFinishEnum", base: "enum8",
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
            name: "ColorEnum", base: "enum8",
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
            name: "ProductAppearanceStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Finish", base: "ProductFinishEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PrimaryColor", base: "ColorEnum",
                    conformance: "M", quality: "X"
                })
            ]
        })
    ]
}));
