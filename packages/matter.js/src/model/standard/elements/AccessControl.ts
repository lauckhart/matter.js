/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "AccessControl", id: 0x1f, classification: "node",
    description: "Access Control",
    details: "The Access Control Cluster exposes a data model view of a Node's Access Control List (ACL), which " +
             "codifies the rules used to manage and enforce Access Control for the Node's endpoints and their " +
             "associated cluster instances.",
    xref: { document: "core", section: "9.10" },

    children: [
        {
            tag: "attribute", name: "Acl", id: 0x0, type: "list", access: "RW A", conformance: "M",
            constraint: "desc",
            details: "An attempt to add an Access Control Entry when no more entries are available SHALL result in a " +
                     "RESOURCE_EXHAUSTED error being reported and the ACL attribute SHALL NOT have the entry",
            xref: { document: "core", section: "9.10.5.3" },
            children: [ { tag: "datatype", name: "entry", type: "AccessControlEntryStruct" } ]
        },

        {
            tag: "attribute", name: "Extension", id: 0x1, type: "list", access: "RW A", conformance: "O",
            constraint: "desc",
            details: "If present, the Access Control Extensions MAY be used by Administrators to store arbitrary data " +
                     "related to fabric’s Access Control Entries.",
            xref: { document: "core", section: "9.10.5.4" },
            children: [ { tag: "datatype", name: "entry", type: "AccessControlExtensionStruct" } ]
        },

        {
            tag: "attribute", name: "SubjectsPerAccessControlEntry", id: 0x2, type: "uint16", access: "R V",
            conformance: "M", constraint: "min 4", default: 4, quality: "F",
            details: "This attribute SHALL provide the minimum number of Subjects per entry that are supported by this " +
                     "server.",
            xref: { document: "core", section: "9.10.5.5" }
        },

        {
            tag: "attribute", name: "TargetsPerAccessControlEntry", id: 0x3, type: "uint16", access: "R V",
            conformance: "M", constraint: "min 3", default: 3, quality: "F",
            details: "This attribute SHALL provide the minimum number of Targets per entry that are supported by this " +
                     "server.",
            xref: { document: "core", section: "9.10.5.6" }
        },

        {
            tag: "attribute", name: "AccessControlEntriesPerFabric", id: 0x4, type: "uint16", access: "R V",
            conformance: "M", constraint: "min 4", default: 4, quality: "F",
            details: "This attribute SHALL provide the minimum number of ACL Entries per fabric that are supported by " +
                     "this server.",
            xref: { document: "core", section: "9.10.5.7" }
        },

        {
            tag: "event", name: "AccessControlEntryChanged", id: 0x0, access: "R S A", conformance: "M",
            priority: "info",
            details: "The cluster SHALL send AccessControlEntryChanged events whenever its ACL attribute data is changed " +
                     "by an Administrator.",
            xref: { document: "core", section: "9.10.7.1" },

            children: [
                {
                    tag: "datatype", name: "AdminNodeId", id: 0x1, type: "node-id", access: "S", conformance: "M",
                    constraint: "desc", quality: "X",
                    details: "The Node ID of the Administrator that made the change, if the change occurred via a CASE session.",
                    xref: { document: "core", section: "9.10.7.1.1" }
                },

                {
                    tag: "datatype", name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", access: "S", conformance: "M",
                    quality: "X",
                    details: "The type of change as appropriate.",
                    xref: { document: "core", section: "9.10.7.1.3" }
                },

                {
                    tag: "datatype", name: "LatestValue", id: 0x4, type: "AccessControlEntryStruct", access: "S",
                    conformance: "M", quality: "X",
                    details: "The latest value of the changed entry.",
                    xref: { document: "core", section: "9.10.7.1.4" }
                }
            ]
        },

        {
            tag: "event", name: "AccessControlExtensionChanged", id: 0x1, access: "R S A", conformance: "M",
            priority: "info",
            details: "The cluster SHALL send AccessControlExtensionChanged events whenever its extension attribute data " +
                     "is changed by an Administrator.",
            xref: { document: "core", section: "9.10.7.2" },

            children: [
                {
                    tag: "datatype", name: "AdminNodeId", id: 0x1, type: "node-id", access: "S", conformance: "M",
                    constraint: "desc", quality: "X"
                },
                {
                    tag: "datatype", name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", access: "S", conformance: "M",
                    quality: "X"
                },
                {
                    tag: "datatype", name: "LatestValue", id: 0x4, type: "AccessControlExtensionStruct", access: "S",
                    conformance: "M", quality: "X"
                }
            ]
        },

        {
            tag: "datatype", name: "ChangeTypeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "9.10.4.1" },
            children: [
                { tag: "datatype", name: "Changed", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Added", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Removed", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "AccessControlEntryAuthModeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "9.10.4.3" },
            children: [
                { tag: "datatype", name: "Pase", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Case", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Group", id: 0x3, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "AccessControlTargetStruct", type: "struct",
            xref: { document: "core", section: "9.10.4.4" },
            children: [
                { tag: "datatype", name: "Cluster", id: 0x0, type: "cluster-id", conformance: "M", quality: "X" },
                { tag: "datatype", name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "M", quality: "X" },
                { tag: "datatype", name: "DeviceType", id: 0x2, type: "devtype-id", conformance: "M", quality: "X" }
            ]
        },

        {
            tag: "datatype", name: "AccessControlEntryStruct", type: "struct", access: "R F", conformance: "M",
            xref: { document: "core", section: "9.10.4.5" },

            children: [
                {
                    tag: "datatype", name: "AuthMode", id: 0x2, type: "AccessControlEntryAuthModeEnum", access: "R S",
                    conformance: "M", quality: "X",
                    details: "The AuthMode field SHALL specify the authentication mode required by this Access Control Entry.",
                    xref: { document: "core", section: "9.10.4.5.2" }
                },

                {
                    tag: "datatype", name: "Targets", id: 0x4, type: "list", access: "R S", conformance: "M",
                    constraint: "max TargetsPerAccessControlEntry", quality: "X",
                    details: "The targets field SHALL specify a list of AccessControlTargetStruct, which define the clusters on " +
                             "this Node to which this Access Control Entry grants access.",
                    xref: { document: "core", section: "9.10.4.5.4" },
                    children: [ { tag: "datatype", name: "entry", type: "AccessControlTargetStruct" } ]
                },

                {
                    tag: "datatype", name: "Privilege", type: "AccessControlEntryPrivilegeEnum", access: "R S",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "AccessControlExtensionStruct", type: "struct", access: "R F",
            conformance: "M",
            xref: { document: "core", section: "9.10.4.6" },

            children: [
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", access: "R S", conformance: "M",
                    constraint: "max 128",
                    details: "This field MAY be used by manufacturers to store arbitrary TLV-encoded data related to a fabric’s",
                    xref: { document: "core", section: "9.10.4.6.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "AccessControlEntryPrivilegeEnum", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "View", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "ProxyView", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Operate", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Manage", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Administer", id: 0x5, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "Target", type: "struct", conformance: "M",
            children: [
                { tag: "datatype", name: "Cluster", type: "cluster-id", conformance: "M", quality: "X" },
                { tag: "datatype", name: "Endpoint", type: "endpoint-no", conformance: "M", quality: "X" },
                { tag: "datatype", name: "DeviceType", type: "devtype-id", conformance: "M", quality: "X" }
            ]
        }
    ]
});