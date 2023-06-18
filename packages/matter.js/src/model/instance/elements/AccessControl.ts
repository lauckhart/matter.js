/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x001f, name: "AccessControl",
    classification: "node", description: "Access Control",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Acl",
            access: "RW A", conformance: "M", constraint: "desc", default: "desc", type: "list",
            details: "An attempt to add an Access Control Entry when no more entries are " +
                     "available SHALL result in a RESOURCE_EXHAUSTED error being reported " +
                     "and the ACL attribute SHALL NOT have the entry",
            xref: { document: "core", section: "9.10.5.3" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "AccessControlEntryStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "Extension",
            access: "RW A", conformance: "O", constraint: "desc", default: "desc", type: "list",
            details: "If present, the Access Control Extensions MAY be used by " +
                     "Administrators to store arbitrary data related to fabric’s Access " +
                     "Control Entries",
            xref: { document: "core", section: "9.10.5.4" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "AccessControlExtensionStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0002, name: "SubjectsPerAccessControlEntry",
            access: "R V", conformance: "M", constraint: "min 4", default: 4, quality: "F", type: "uint16",
            details: "This attribute SHALL provide the minimum number of Subjects per entry " +
                     "that are supported by this server",
            xref: { document: "core", section: "9.10.5.5" }
        },

        {
            tag: "attribute", id: 0x0003, name: "TargetsPerAccessControlEntry",
            access: "R V", conformance: "M", constraint: "min 3", default: 3, quality: "F", type: "uint16",
            details: "This attribute SHALL provide the minimum number of Targets per entry " +
                     "that are supported by this server",
            xref: { document: "core", section: "9.10.5.6" }
        },

        {
            tag: "attribute", id: 0x0004, name: "AccessControlEntriesPerFabric",
            access: "R V", conformance: "M", constraint: "min 4", default: 4, quality: "F", type: "uint16",
            details: "This attribute SHALL provide the minimum number of ACL Entries per " +
                     "fabric that are supported by this server",
            xref: { document: "core", section: "9.10.5.7" }
        },

        {
            tag: "event", id: 0x0000, name: "AccessControlEntryChanged",
            access: "R S A", conformance: "M", priority: "info",
            details: "The cluster SHALL send AccessControlEntryChanged events whenever its " +
                     "ACL attribute data is changed by an Administrator",
            xref: { document: "core", section: "9.10.7.1" },
            children: [
                {
                    tag: "datatype", name: "AdminNodeId",
                    conformance: "M", quality: "X", type: "node-id"
                },

                {
                    tag: "datatype", name: "AdminPasscodeId",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "datatype", name: "ChangeType",
                    conformance: "M", type: "ChangeTypeEnum"
                },

                {
                    tag: "datatype", name: "LatestValue",
                    conformance: "M", quality: "X", type: "AccessControlEntryStruct"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "AccessControlExtensionChanged",
            access: "R S A", conformance: "M", priority: "info",
            details: "The cluster SHALL send AccessControlExtensionChanged events whenever " +
                     "its extension attribute data is changed by an Administrator",
            xref: { document: "core", section: "9.10.7.2" },
            children: [
                {
                    tag: "datatype", name: "AdminNodeId",
                    conformance: "M", quality: "X", type: "node-id"
                },

                {
                    tag: "datatype", name: "AdminPasscodeId",
                    conformance: "M", quality: "X", type: "uint16"
                },

                {
                    tag: "datatype", name: "ChangeType",
                    conformance: "M", type: "ChangeTypeEnum"
                },

                {
                    tag: "datatype", name: "LatestValue",
                    conformance: "M", quality: "X", type: "AccessControlExtensionStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "AccessControlExtensionStruct",
            access: "R F", conformance: "M", type: "struct",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "9.10.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Changed",
                    conformance: "M",
                    xref: { document: "core", section: "9.10.4.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Added",
                    conformance: "M",
                    xref: { document: "core", section: "9.10.4.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Removed",
                    conformance: "M",
                    xref: { document: "core", section: "9.10.4.1" }
                },

                {
                    tag: "datatype", name: "Data",
                    access: "R S", conformance: "M", type: "octstr"
                }
            ]
        },

        {
            tag: "datatype", name: "AccessControlEntryPrivilegeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "View",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ProxyView",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Operate",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Manage",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Administer",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "AccessControlEntryAuthModeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Pase",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Case",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Group",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "Target",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Cluster",
                    conformance: "M", quality: "X", type: "cluster-id"
                },

                {
                    tag: "datatype", name: "Endpoint",
                    conformance: "M", quality: "X", type: "endpoint-no"
                },

                {
                    tag: "datatype", name: "DeviceType",
                    conformance: "M", quality: "X", type: "devtype-id"
                }
            ]
        },

        {
            tag: "datatype", name: "AccessControlEntryStruct",
            access: "R F", conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Privilege",
                    access: "R S", conformance: "M", type: "AccessControlEntryPrivilegeEnum"
                },

                {
                    tag: "datatype", name: "AuthMode",
                    access: "R S", conformance: "M", type: "AccessControlEntryAuthModeEnum"
                },

                {
                    tag: "datatype", name: "Subjects",
                    access: "R S", conformance: "M", quality: "X", type: "uint64"
                },

                {
                    tag: "datatype", name: "Targets",
                    access: "R S", conformance: "M", quality: "X", type: "Target"
                }
            ]
        }
    ]
});
