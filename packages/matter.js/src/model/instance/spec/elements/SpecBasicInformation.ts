/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0028, name: "BasicInformation",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "DataModelRevision", base: "uint16",
            access: "R V", conformance: "M", value: "MS", quality: "F",
            details: "This attribute SHALL be set to the revision number of the Data Model against which the Node is certified.",
            xref: { section: "11.1.5.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "VendorName", base: "string",
            access: "R V", conformance: "M", constraint: "max 32", value: "MS", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the vendor for the Node.",
            xref: { section: "11.1.5.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "VendorId", base: "vendor-id",
            access: "R V", conformance: "M", value: "MS", quality: "F",
            details: "This attribute SHALL specify the Vendor ID.",
            xref: { section: "11.1.5.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "ProductName", base: "string",
            access: "R V", conformance: "M", constraint: "max 32", value: "MS", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the model for the Node such as the model number (or other identifier) assigned by the vendor.",
            xref: { section: "11.1.5.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "ProductId", base: "uint16",
            access: "R V", conformance: "M", value: "MS", quality: "F",
            details: "This attribute SHALL specify the Product ID assigned by the vendor that is unique to the specific product of the Node.",
            xref: { section: "11.1.5.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "NodeLabel", base: "string",
            access: "RW VM", conformance: "M", constraint: "max 32", value: "\"\"", quality: "N",
            details: "This attribute SHALL represent a user defined name for the Node. This attribute SHOULD be set during initial commissioning and MAY be updated by further reconfigurations.",
            xref: { section: "11.1.5.6", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "Location", base: "string",
            access: "RW VA", conformance: "M", constraint: "2", value: "\"XX\"", quality: "N",
            details: "This attribute SHALL be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, or special area of geographic interest in which the Node is located at the time of the attribute being set. This attribute SHALL be set during initial commissioning (unless already set) and MAY be updated by further reconfigurations. This attribute MAY affect some regulatory aspects of the Node’s operation, such as radio transmission power levels in given spectrum allocation bands if technologies where this is applicable are used. The Location’s region code SHALL be interpreted in a case-insensitive manner. If the Node cannot understand the location code with which it was configured, or the location code has not yet been configured, it SHALL configure itself in a region- agnostic manner as determined by the vendor, avoiding region-specific assumptions as much as is practical. The special value XX SHALL indicate that region-agnostic mode is used.",
            xref: { section: "11.1.5.7", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "HardwareVersion", base: "uint16",
            access: "R V", conformance: "M", value: "0", quality: "F",
            details: "This attribute SHALL specify the version number of the hardware of the Node. The meaning of its value, and the versioning scheme, are vendor defined.",
            xref: { section: "11.1.5.8", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "HardwareVersionString", base: "string",
            access: "R V", conformance: "M", constraint: "1 to 64", value: "MS", quality: "F",
            details: "This attribute SHALL specify the version number of the hardware of the Node. The meaning of its value, and the versioning scheme, are vendor defined. The HardwareVersionString attribute SHALL be used to provide a more user-friendly value than that represented by the HardwareVersion attribute.",
            xref: { section: "11.1.5.9", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "SoftwareVersion", base: "uint32",
            access: "R V", conformance: "M", constraint: "desc", value: "0", quality: "F",
            details: "This attribute SHALL contain the current version number for the software running on this Node. The version number can be compared using a total ordering to determine if a version is logically newer than another one. A larger value of SoftwareVersion is newer than a lower value, from the perspective of software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes MAY query this field to determine the currently running version of software on another given Node.",
            xref: { section: "11.1.5.10", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000a, name: "SoftwareVersionString", base: "string",
            access: "R V", conformance: "M", constraint: "1 to 64", value: "MS", quality: "F",
            details: "This attribute SHALL contain a current human-readable representation for the software running on the Node. This version information MAY be conveyed to users. The maximum length of the SoftwareVersionString attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple 7-bit ASCII alphanumeric and punctuation characters, so as to simplify the conveyance of the value to a variety of cultures.",
            xref: { section: "11.1.5.11", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000b, name: "ManufacturingDate", base: "string",
            access: "R V", conformance: "O", constraint: "8 to 16", value: "MS", quality: "F",
            details: "This attribute SHALL specify the date that the Node was manufactured. The first 8 characters SHALL specify the date of manufacture of the Node in international date notation according to ISO 8601, i.e., YYYYMMDD, e.g., 20060814. The final 8 characters MAY include country, factory, line, shift or other related information at the option of the vendor. The format of this information is vendor",
            xref: { section: "11.1.5.12", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000c, name: "PartNumber", base: "string",
            access: "R V", conformance: "O", constraint: "max 32", value: "MS", quality: "F",
            details: "This attribute SHALL specify a human-readable (displayable) vendor assigned part number for the Node whose meaning and numbering scheme is vendor defined.",
            xref: { section: "11.1.5.13", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000d, name: "ProductUrl", base: "string",
            access: "R V", conformance: "O", constraint: "max 256", value: "MS", quality: "F",
            details: "This attribute SHALL specify a link to a product specific web page. The syntax of the ProductURL attribute SHALL follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. The specified URL SHOULD resolve to a maintained web page available for the lifetime of the product. The maximum length of the ProductUrl attribute is 256 ASCII characters.",
            xref: { section: "11.1.5.14", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000e, name: "ProductLabel", base: "string",
            access: "R V", conformance: "O", constraint: "max 64", value: "MS", quality: "F",
            details: "This attribute SHALL specify a vendor specific human readable (displayable) product label. The ProductLabel attribute MAY be used to provide a more user-friendly value than that represented by the ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as defined within the VendorName attribute.",
            xref: { section: "11.1.5.15", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000f, name: "SerialNumber", base: "string",
            access: "R V", conformance: "O", constraint: "max 32", value: "MS", quality: "F",
            details: "This attributes SHALL specify a human readable (displayable) serial number.",
            xref: { section: "11.1.5.16", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "LocalConfigDisabled", base: "bool",
            access: "RW VM", conformance: "O", value: "False", quality: "N",
            details: "This attribute SHALL allow a local Node configuration to be disabled. When this attribute is set to True the Node SHALL disable the ability to configure the Node through an on-Node user interface. The value of the LocalConfigDisabled attribute SHALL NOT in any way modify, disable, or otherwise affect the user’s ability to trigger a factory reset on the Node.",
            xref: { section: "11.1.5.17", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "Reachable", base: "bool",
            access: "R V", conformance: "O", value: "True",
            details: "This attribute (when used) SHALL indicate whether the Node can be reached. For a native Node this is implicitly True (and its use is optional).",
            xref: { section: "11.1.5.18", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "UniqueId", base: "string",
            access: "R V", conformance: "O", constraint: "max 32", value: "MS", quality: "F",
            details: "This attribute (when used) SHALL indicate a unique identifier for the device, which is constructed in a manufacturer specific manner.",
            xref: { section: "11.1.5.19", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "CapabilityMinima", base: "CapabilityMinimaStruct",
            access: "R V", conformance: "M", value: "MS", quality: "F",
            details: "This attribute SHALL provide the minimum guaranteed value for some system-wide resource capabilities that are not otherwise cluster-specific and do not appear elsewhere. This attribute MAY be used by clients to optimize communication with Nodes by allowing them to use more than the strict minimum values required by this specification, wherever available.",
            xref: { section: "11.1.5.20", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "CapabilityMinimaStruct", base: "struct",
            details: "This structure provides constant values related to overall global capabilities of this Node, that are not cluster-specific.",
            xref: { section: "11.1.4.1", document: "core", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CaseSessionsPerFabric", base: "uint16",
                    conformance: "M", constraint: "min 3", value: "3",
                    xref: { section: "11.1.4.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "SubscriptionsPerFabric", base: "uint16",
                    conformance: "M", constraint: "min 3", value: "3",
                    xref: { section: "11.1.4.1", document: "core", version: "1.1" }
                })
            ]
        })
    ]
}));
