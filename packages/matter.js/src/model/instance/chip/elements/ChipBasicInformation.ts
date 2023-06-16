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
            id: 0x0000, name: "DataModelRevision", type: "uint16",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "VendorName", type: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", type: "vendor-id",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", type: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "ProductId", type: "uint16",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", type: "string",
            access: "RW VM", conformance: "M", default: ""
        }),

        AttributeElement({
            id: 0x0006, name: "Location", type: "string",
            access: "RW VA", conformance: "M", default: "XX"
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", type: "uint16",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", type: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", type: "uint32",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", type: "string",
            conformance: "M"
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
            id: 0x0010, name: "LocalConfigDisabled", type: "bool",
            access: "RW VM", conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0011, name: "Reachable", type: "bool",
            conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0012, name: "UniqueId", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0013, name: "CapabilityMinima", type: "CapabilityMinimaStruct",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0014, name: "ProductAppearance", type: "ProductAppearanceStruct",
            conformance: "O"
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            conformance: "M", priority: "critical",
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
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "FabricIndex", type: "fabric-idx",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ReachableNewValue", type: "bool",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CapabilityMinimaStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "CaseSessionsPerFabric", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SubscriptionsPerFabric", type: "uint16",
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
