/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x001f, name: "AccessControl",
    description: "Access Control",
    details: "The Access Control Cluster exposes a data model view of a Node's Access Control List (ACL), which codifies the rules used to manage and enforce Access Control for the Node's endpoints and their associated cluster instances.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Acl", base: "list",
            access: "W A", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "AccessControlEntryStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "Extension", base: "list",
            access: "W A", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "AccessControlExtensionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SubjectsPerAccessControlEntry", base: "uint16",
            access: "R V", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "TargetsPerAccessControlEntry", base: "uint16",
            access: "R V", conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "AccessControlEntriesPerFabric", base: "uint16",
            access: "R V", conformance: "M"
        }),

        EventElement({
            id: 0x0000, name: "AccessControlEntryChanged",
            access: "R S A", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "AdminNodeId", base: "node-id",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "ChangeType", base: "ChangeTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LatestValue", base: "AccessControlEntryStruct",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AccessControlExtensionChanged",
            access: "R S A", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "AdminNodeId", base: "node-id",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "ChangeType", base: "ChangeTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LatestValue", base: "AccessControlExtensionStruct",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryPrivilegeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "View",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProxyView",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Operate",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Manage",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Administer",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryAuthModeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Pase",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Case",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Group",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ChangeTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Changed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Added",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Removed",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "Target", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Cluster", base: "cluster-id",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "DeviceType", base: "devtype-id",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryStruct", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Privilege", base: "AccessControlEntryPrivilegeEnum",
                    access: "R S", conformance: "M"
                }),

                DatatypeElement({
                    name: "AuthMode", base: "AccessControlEntryAuthModeEnum",
                    access: "R S", conformance: "M"
                }),

                DatatypeElement({
                    name: "Subjects", base: "uint64",
                    access: "R S", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Targets", base: "Target",
                    access: "R S", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlExtensionStruct", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Data", base: "octstr",
                    access: "R S", conformance: "M"
                })
            ]
        })
    ]
}));
