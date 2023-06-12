/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0028, name: "BasicInformation",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "DataModelRevision", base: "uint16",
            access: "R V", default: "MS", quality: "F",
            details: "This attribute SHALL be set to the revision number of the Data Model against which the Node is certified.",
            xref: { document: "core", section: "11.1.5.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "VendorName", base: "string",
            access: "R V", constraint: "max 32", default: "MS", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the vendor for the Node.",
            xref: { document: "core", section: "11.1.5.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", base: "vendor-id",
            access: "R V", default: "MS", quality: "F",
            details: "This attribute SHALL specify the Vendor ID.",
            xref: { document: "core", section: "11.1.5.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", base: "string",
            access: "R V", constraint: "max 32", default: "MS", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the model for the Node such as the model number (or other identifier) assigned by the vendor.",
            xref: { document: "core", section: "11.1.5.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "ProductId", base: "uint16",
            access: "R V", default: "MS", quality: "F",
            details: "This attribute SHALL specify the Product ID assigned by the vendor that is unique to the specific product of the Node.",
            xref: { document: "core", section: "11.1.5.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", base: "string",
            access: "RW VM", constraint: "max 32", default: "\"\"", quality: "N",
            details: "This attribute SHALL represent a user defined name for the Node. This attribute SHOULD be set during initial commissioning and MAY be updated by further reconfigurations.",
            xref: { document: "core", section: "11.1.5.6", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "Location", base: "string",
            access: "RW VA", constraint: "2", default: "\"XX\"", quality: "N",
            details: "This attribute SHALL be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, or special area of geographic interest in which the Node is located at the time of the attribute being set. This attribute SHALL be set during initial commissioning (unless already set) and MAY be updated by further reconfigurations. This attribute MAY affect some regulatory aspects of the Node’s operation, such as radio transmission power levels in given spectrum allocation bands if technologies where this is applicable are used. The Location’s region code SHALL be interpreted in a case-insensitive manner. If the Node cannot understand the location code with which it was configured, or the location code has not yet been configured, it SHALL configure itself in a region- agnostic manner as determined by the vendor, avoiding region-specific assumptions as much as is practical. The special value XX SHALL indicate that region-agnostic mode is used.",
            xref: { document: "core", section: "11.1.5.7", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", base: "uint16",
            access: "R V", default: 0, quality: "F",
            details: "This attribute SHALL specify the version number of the hardware of the Node. The meaning of its value, and the versioning scheme, are vendor defined.",
            xref: { document: "core", section: "11.1.5.8", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", base: "string",
            access: "R V", constraint: "1 to 64", default: "MS", quality: "F",
            details: "This attribute SHALL specify the version number of the hardware of the Node. The meaning of its value, and the versioning scheme, are vendor defined. The HardwareVersionString attribute SHALL be used to provide a more user-friendly value than that represented by the HardwareVersion attribute.",
            xref: { document: "core", section: "11.1.5.9", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", base: "uint32",
            access: "R V", constraint: "desc", default: 0, quality: "F",
            details: "This attribute SHALL contain the current version number for the software running on this Node. The version number can be compared using a total ordering to determine if a version is logically newer than another one. A larger value of SoftwareVersion is newer than a lower value, from the perspective of software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes MAY query this field to determine the currently running version of software on another given Node.",
            xref: { document: "core", section: "11.1.5.10", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", base: "string",
            access: "R V", constraint: "1 to 64", default: "MS", quality: "F",
            details: "This attribute SHALL contain a current human-readable representation for the software running on the Node. This version information MAY be conveyed to users. The maximum length of the SoftwareVersionString attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple 7-bit ASCII alphanumeric and punctuation characters, so as to simplify the conveyance of the value to a variety of cultures.",
            xref: { document: "core", section: "11.1.5.11", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000b, name: "ManufacturingDate", base: "string",
            access: "R V", conformance: "O", constraint: "8 to 16", default: "MS", quality: "F",
            details: "This attribute SHALL specify the date that the Node was manufactured. The first 8 characters SHALL specify the date of manufacture of the Node in international date notation according to ISO 8601, i.e., YYYYMMDD, e.g., 20060814. The final 8 characters MAY include country, factory, line, shift or other related information at the option of the vendor. The format of this information is vendor",
            xref: { document: "core", section: "11.1.5.12", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000c, name: "PartNumber", base: "string",
            access: "R V", conformance: "O", constraint: "max 32", default: "MS", quality: "F",
            details: "This attribute SHALL specify a human-readable (displayable) vendor assigned part number for the Node whose meaning and numbering scheme is vendor defined.",
            xref: { document: "core", section: "11.1.5.13", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000d, name: "ProductUrl", base: "string",
            access: "R V", conformance: "O", constraint: "max 256", default: "MS", quality: "F",
            details: "This attribute SHALL specify a link to a product specific web page. The syntax of the ProductURL attribute SHALL follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. The specified URL SHOULD resolve to a maintained web page available for the lifetime of the product. The maximum length of the ProductUrl attribute is 256 ASCII characters.",
            xref: { document: "core", section: "11.1.5.14", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000e, name: "ProductLabel", base: "string",
            access: "R V", conformance: "O", constraint: "max 64", default: "MS", quality: "F",
            details: "This attribute SHALL specify a vendor specific human readable (displayable) product label. The ProductLabel attribute MAY be used to provide a more user-friendly value than that represented by the ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as defined within the VendorName attribute.",
            xref: { document: "core", section: "11.1.5.15", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000f, name: "SerialNumber", base: "string",
            access: "R V", conformance: "O", constraint: "max 32", default: "MS", quality: "F",
            details: "This attributes SHALL specify a human readable (displayable) serial number.",
            xref: { document: "core", section: "11.1.5.16", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "LocalConfigDisabled", base: "bool",
            access: "RW VM", conformance: "O", default: true, quality: "N",
            details: "This attribute SHALL allow a local Node configuration to be disabled. When this attribute is set to True the Node SHALL disable the ability to configure the Node through an on-Node user interface. The value of the LocalConfigDisabled attribute SHALL NOT in any way modify, disable, or otherwise affect the user’s ability to trigger a factory reset on the Node.",
            xref: { document: "core", section: "11.1.5.17", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "Reachable", base: "bool",
            access: "R V", conformance: "O", default: true,
            details: "This attribute (when used) SHALL indicate whether the Node can be reached. For a native Node this is implicitly True (and its use is optional).",
            xref: { document: "core", section: "11.1.5.18", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "UniqueId", base: "string",
            access: "R V", conformance: "O", constraint: "max 32", default: "MS", quality: "F",
            details: "This attribute (when used) SHALL indicate a unique identifier for the device, which is constructed in a manufacturer specific manner.",
            xref: { document: "core", section: "11.1.5.19", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "CapabilityMinima", base: "CapabilityMinimaStruct",
            access: "R V", default: "MS", quality: "F",
            details: "This attribute SHALL provide the minimum guaranteed value for some system-wide resource capabilities that are not otherwise cluster-specific and do not appear elsewhere. This attribute MAY be used by clients to optimize communication with Nodes by allowing them to use more than the strict minimum values required by this specification, wherever available.",
            xref: { document: "core", section: "11.1.5.20", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            access: "V", priority: "critical",
            details: "The StartUp event SHALL be generated by a Node as soon as reasonable after completing a boot or reboot process. The StartUp event SHOULD be the first Data Model event recorded by the Node after it completes a boot or reboot process.",
            xref: { document: "core", section: "11.1.6.1", version: "1.1" }
        }),

        EventElement({
            id: 0x0001, name: "ShutDown",
            access: "V", conformance: "O", priority: "critical",
            details: "The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a best-effort basis. When a ShutDown event is generated, it SHOULD be the last Data Model event recorded by the Node. This event SHOULD be delivered urgently to current subscribers on a best- effort basis. Any subsequent incoming interactions to the Node MAY be dropped until the completion of a future boot or reboot process.",
            xref: { document: "core", section: "11.1.6.2", version: "1.1" }
        }),

        EventElement({
            id: 0x0002, name: "Leave",
            access: "V", conformance: "O", priority: "info",
            details: "The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as when the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some other manufacturer specific action to disable or reset the operational data in the Node. When a Leave event is generated, it SHOULD be assumed that the fabric recorded in the event is no longer usable, and subsequent interactions targeting that fabric will most likely fail.",
            xref: { document: "core", section: "11.1.6.3", version: "1.1" }
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged",
            access: "V", conformance: "desc", priority: "info",
            details: "This event SHALL be supported if and only if the Reachable attribute is supported.",
            xref: { document: "core", section: "11.1.6.4", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "CapabilityMinimaStruct", base: "struct",
            details: "This structure provides constant values related to overall global capabilities of this Node, that are not cluster-specific.",
            xref: { document: "core", section: "11.1.4.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CaseSessionsPerFabric", base: "uint16",
                    constraint: "min 3", default: 3,
                    xref: { document: "core", section: "11.1.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "SubscriptionsPerFabric", base: "uint16",
                    constraint: "min 3", default: 3,
                    xref: { document: "core", section: "11.1.4.1", version: "1.1" }
                })
            ]
        })
    ]
}));
