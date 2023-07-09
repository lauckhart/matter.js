/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "BasicInformation", id: 0x28, classification: "node",
    description: "Basic Information", singleton: true,
    details: "This cluster provides attributes and events for determining basic information about Nodes, which " +
        "supports both Commissioning and operational determination of Node characteristics, such as Vendor " +
        "ID, Product ID and serial number, which apply to the whole Node. Also allows setting user device " +
        "information such as location.",
    xref: { document: "core", section: "11.1" },

    children: [
        {
            tag: "attribute", name: "DataModelRevision", id: 0x0, type: "uint16", access: "R V",
            conformance: "M", quality: "F",
            details: "This attribute SHALL be set to the revision number of the Data Model against which the Node is " +
                "certified.",
            xref: { document: "core", section: "11.1.5.1" }
        },

        {
            tag: "attribute", name: "VendorName", id: 0x1, type: "string", access: "R V", conformance: "M",
            constraint: "max 32", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the vendor for the Node.",
            xref: { document: "core", section: "11.1.5.2" }
        },

        {
            tag: "attribute", name: "VendorId", id: 0x2, type: "vendor-id", access: "R V", conformance: "M",
            quality: "F",
            details: "This attribute SHALL specify the Vendor ID.",
            xref: { document: "core", section: "11.1.5.3" }
        },

        {
            tag: "attribute", name: "ProductName", id: 0x3, type: "string", access: "R V", conformance: "M",
            constraint: "max 32", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the model for the Node such as " +
                "the model number (or other identifier) assigned by the vendor.",
            xref: { document: "core", section: "11.1.5.4" }
        },

        {
            tag: "attribute", name: "ProductId", id: 0x4, type: "uint16", access: "R V", conformance: "M",
            quality: "F",
            details: "This attribute SHALL specify the Product ID assigned by the vendor that is unique to the specific " +
                "product of the Node.",
            xref: { document: "core", section: "11.1.5.5" }
        },

        {
            tag: "attribute", name: "NodeLabel", id: 0x5, type: "string", access: "RW VM", conformance: "M",
            constraint: "max 32", default: "", quality: "N",
            details: "This attribute SHALL represent a user defined name for the Node. This attribute SHOULD be set " +
                "during initial commissioning and MAY be updated by further reconfigurations.",
            xref: { document: "core", section: "11.1.5.6" }
        },

        {
            tag: "attribute", name: "Location", id: 0x6, type: "string", access: "RW VA", conformance: "M",
            constraint: "2", default: "XX", quality: "N",

            details: "This attribute SHALL be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, " +
                "or special area of geographic interest in which the Node is located at the time of the attribute " +
                "being set. This attribute SHALL be set during initial commissioning (unless already set) and MAY be " +
                "updated by further reconfigurations. This attribute MAY affect some regulatory aspects of the " +
                "Node’s operation, such as radio transmission power levels in given spectrum allocation bands if " +
                "technologies where this is applicable are used. The Location’s region code SHALL be interpreted in " +
                "a case-insensitive manner. If the Node cannot understand the location code with which it was " +
                "configured, or the location code has not yet been configured, it SHALL configure itself in a " +
                "region- agnostic manner as determined by the vendor, avoiding region-specific assumptions as much " +
                "as is practical. The special value XX SHALL indicate that region-agnostic mode is used.",

            xref: { document: "core", section: "11.1.5.7" }
        },

        {
            tag: "attribute", name: "HardwareVersion", id: 0x7, type: "uint16", access: "R V", conformance: "M",
            default: 0, quality: "F",
            details: "This attribute SHALL specify the version number of the hardware of the Node. The meaning of its " +
                "value, and the versioning scheme, are vendor defined.",
            xref: { document: "core", section: "11.1.5.8" }
        },

        {
            tag: "attribute", name: "HardwareVersionString", id: 0x8, type: "string", access: "R V",
            conformance: "M", constraint: "1 to 64", quality: "F",
            details: "This attribute SHALL specify the version number of the hardware of the Node. The meaning of its " +
                "value, and the versioning scheme, are vendor defined. The HardwareVersionString attribute SHALL be " +
                "used to provide a more user-friendly value than that represented by the HardwareVersion attribute.",
            xref: { document: "core", section: "11.1.5.9" }
        },

        {
            tag: "attribute", name: "SoftwareVersion", id: 0x9, type: "uint32", access: "R V", conformance: "M",
            constraint: "desc", default: 0, quality: "F",
            details: "This attribute SHALL contain the current version number for the software running on this Node. The " +
                "version number can be compared using a total ordering to determine if a version is logically newer " +
                "than another one. A larger value of SoftwareVersion is newer than a lower value, from the " +
                "perspective of software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes " +
                "MAY query this field to determine the currently running version of software on another given Node.",
            xref: { document: "core", section: "11.1.5.10" }
        },

        {
            tag: "attribute", name: "SoftwareVersionString", id: 0xa, type: "string", access: "R V",
            conformance: "M", constraint: "1 to 64", quality: "F",
            details: "This attribute SHALL contain a current human-readable representation for the software running on " +
                "the Node. This version information MAY be conveyed to users. The maximum length of the " +
                "SoftwareVersionString attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use " +
                "simple 7-bit ASCII alphanumeric and punctuation characters, so as to simplify the conveyance of the " +
                "value to a variety of cultures.",
            xref: { document: "core", section: "11.1.5.11" }
        },

        {
            tag: "attribute", name: "ManufacturingDate", id: 0xb, type: "string", access: "R V",
            conformance: "O", constraint: "8 to 16", quality: "F",
            details: "This attribute SHALL specify the date that the Node was manufactured. The first 8 characters SHALL " +
                "specify the date of manufacture of the Node in international date notation according to ISO 8601, " +
                "i.e., YYYYMMDD, e.g., 20060814. The final 8 characters MAY include country, factory, line, shift or " +
                "other related information at the option of the vendor. The format of this information is vendor",
            xref: { document: "core", section: "11.1.5.12" }
        },

        {
            tag: "attribute", name: "PartNumber", id: 0xc, type: "string", access: "R V", conformance: "O",
            constraint: "max 32", quality: "F",
            details: "This attribute SHALL specify a human-readable (displayable) vendor assigned part number for the " +
                "Node whose meaning and numbering scheme is vendor defined.",
            xref: { document: "core", section: "11.1.5.13" }
        },

        {
            tag: "attribute", name: "ProductUrl", id: 0xd, type: "string", access: "R V", conformance: "O",
            constraint: "max 256", quality: "F",
            details: "This attribute SHALL specify a link to a product specific web page. The syntax of the ProductURL " +
                "attribute SHALL follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. " +
                "The specified URL SHOULD resolve to a maintained web page available for the lifetime of the " +
                "product. The maximum length of the ProductUrl attribute is 256 ASCII characters.",
            xref: { document: "core", section: "11.1.5.14" }
        },

        {
            tag: "attribute", name: "ProductLabel", id: 0xe, type: "string", access: "R V", conformance: "O",
            constraint: "max 64", quality: "F",
            details: "This attribute SHALL specify a vendor specific human readable (displayable) product label. The " +
                "ProductLabel attribute MAY be used to provide a more user-friendly value than that represented by " +
                "the ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as " +
                "defined within the VendorName attribute.",
            xref: { document: "core", section: "11.1.5.15" }
        },

        {
            tag: "attribute", name: "SerialNumber", id: 0xf, type: "string", access: "R V", conformance: "O",
            constraint: "max 32", quality: "F",
            details: "This attributes SHALL specify a human readable (displayable) serial number.",
            xref: { document: "core", section: "11.1.5.16" }
        },

        {
            tag: "attribute", name: "LocalConfigDisabled", id: 0x10, type: "bool", access: "RW VM",
            conformance: "O", default: true, quality: "N",
            details: "This attribute SHALL allow a local Node configuration to be disabled. When this attribute is set to " +
                "True the Node SHALL disable the ability to configure the Node through an on-Node user interface. " +
                "The value of the LocalConfigDisabled attribute SHALL NOT in any way modify, disable, or otherwise " +
                "affect the user’s ability to trigger a factory reset on the Node.",
            xref: { document: "core", section: "11.1.5.17" }
        },

        {
            tag: "attribute", name: "Reachable", id: 0x11, type: "bool", access: "R V", conformance: "O",
            default: true,
            details: "This attribute (when used) SHALL indicate whether the Node can be reached. For a native Node this " +
                "is implicitly True (and its use is optional).",
            xref: { document: "core", section: "11.1.5.18" }
        },

        {
            tag: "attribute", name: "UniqueId", id: 0x12, type: "string", access: "R V", conformance: "O",
            constraint: "max 32", quality: "F",
            details: "This attribute (when used) SHALL indicate a unique identifier for the device, which is constructed " +
                "in a manufacturer specific manner.",
            xref: { document: "core", section: "11.1.5.19" }
        },

        {
            tag: "attribute", name: "CapabilityMinima", id: 0x13, type: "CapabilityMinimaStruct", access: "R V",
            conformance: "M", quality: "F",
            details: "This attribute SHALL provide the minimum guaranteed value for some system-wide resource " +
                "capabilities that are not otherwise cluster-specific and do not appear elsewhere. This attribute " +
                "MAY be used by clients to optimize communication with Nodes by allowing them to use more than the " +
                "strict minimum values required by this specification, wherever available.",
            xref: { document: "core", section: "11.1.5.20" }
        },

        { tag: "attribute", name: "ProductAppearance", id: 0x14, type: "ProductAppearanceStruct", conformance: "O" },

        {
            tag: "event", name: "StartUp", id: 0x0, access: "V", conformance: "M", priority: "critical",
            details: "The StartUp event SHALL be generated by a Node as soon as reasonable after completing a boot or " +
                "reboot process. The StartUp event SHOULD be the first Data Model event recorded by the Node after " +
                "it completes a boot or reboot process.",
            xref: { document: "core", section: "11.1.6.1" },

            children: [{
                tag: "datatype", name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M",
                details: "This field SHALL be set to the same value as the one available in the Software Version attribute of " +
                    "the Basic Information Cluster.",
                xref: { document: "core", section: "11.1.6.1.1" }
            }]
        },

        {
            tag: "event", name: "ShutDown", id: 0x1, access: "V", conformance: "O", priority: "critical",
            details: "The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a " +
                "best-effort basis. When a ShutDown event is generated, it SHOULD be the last Data Model event " +
                "recorded by the Node. This event SHOULD be delivered urgently to current subscribers on a best- " +
                "effort basis. Any subsequent incoming interactions to the Node MAY be dropped until the completion " +
                "of a future boot or reboot process.",
            xref: { document: "core", section: "11.1.6.2" }
        },

        {
            tag: "event", name: "Leave", id: 0x2, access: "V", conformance: "O", priority: "info",
            details: "The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as " +
                "when the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some " +
                "other manufacturer specific action to disable or reset the operational data in the Node. When a " +
                "Leave event is generated, it SHOULD be assumed that the fabric recorded in the event is no longer " +
                "usable, and subsequent interactions targeting that fabric will most likely fail.",
            xref: { document: "core", section: "11.1.6.3" },

            children: [{
                tag: "datatype", name: "FabricIndex", id: 0x0, type: "fabric-idx", conformance: "M",
                constraint: "1 to 254",
                details: "This field SHALL contain the local Fabric Index of the fabric which the node is about to leave.",
                xref: { document: "core", section: "11.1.6.3.1" }
            }]
        },

        {
            tag: "event", name: "ReachableChanged", id: 0x3, access: "V", conformance: "desc", priority: "info",
            details: "This event SHALL be supported if and only if the Reachable attribute is supported.",
            xref: { document: "core", section: "11.1.6.4" },
            children: [{
                tag: "datatype", name: "ReachableNewValue", id: 0x0, type: "bool", conformance: "M",
                details: "This field SHALL indicate the value of the Reachable attribute after it was changed.",
                xref: { document: "core", section: "11.1.6.4.1" }
            }]
        },

        {
            tag: "datatype", name: "CapabilityMinimaStruct", type: "struct", conformance: "M",
            details: "This structure provides constant values related to overall global capabilities of this Node, that " +
                "are not cluster-specific.",
            xref: { document: "core", section: "11.1.4.1" },

            children: [
                {
                    tag: "datatype", name: "CaseSessionsPerFabric", id: 0x0, type: "uint16", conformance: "M",
                    constraint: "min 3", default: 3,
                    details: "This field SHALL indicate the actual minimum number of concurrent CASE sessions that are supported " +
                        "per fabric.",
                    xref: { document: "core", section: "11.1.4.1.1" }
                },

                {
                    tag: "datatype", name: "SubscriptionsPerFabric", id: 0x1, type: "uint16", conformance: "M",
                    constraint: "min 3", default: 3,
                    details: "This field SHALL indicate the actual minimum number of concurrent subscriptions supported per " +
                        "fabric.",
                    xref: { document: "core", section: "11.1.4.1.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "ProductAppearanceStruct", type: "struct", conformance: "M",
            children: [
                { tag: "datatype", name: "Finish", id: 0x0, type: "ProductFinishEnum", conformance: "M" },
                { tag: "datatype", name: "PrimaryColor", id: 0x1, type: "ColorEnum", conformance: "M", quality: "X" }
            ]
        },

        {
            tag: "datatype", name: "ProductFinishEnum", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Other", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Matte", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Satin", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Polished", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Rugged", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Fabric", id: 0x5, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "ColorEnum", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Black", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Navy", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Green", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Teal", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Maroon", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Purple", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Olive", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "Gray", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "Blue", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "Lime", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "Aqua", id: 0xa, conformance: "M" },
                { tag: "datatype", name: "Red", id: 0xb, conformance: "M" },
                { tag: "datatype", name: "Fuchsia", id: 0xc, conformance: "M" },
                { tag: "datatype", name: "Yellow", id: 0xd, conformance: "M" },
                { tag: "datatype", name: "White", id: 0xe, conformance: "M" },
                { tag: "datatype", name: "Nickel", id: 0xf, conformance: "M" },
                { tag: "datatype", name: "Chrome", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "Brass", id: 0x11, conformance: "M" },
                { tag: "datatype", name: "Copper", id: 0x12, conformance: "M" },
                { tag: "datatype", name: "Silver", id: 0x13, conformance: "M" },
                { tag: "datatype", name: "Gold", id: 0x14, conformance: "M" }
            ]
        }
    ]
});
