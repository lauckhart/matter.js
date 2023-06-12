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
            access: "RW A",
            children: [
                DatatypeElement({
                    name: "entry", base: "AccessControlEntryStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "Extension", base: "list",
            access: "RW A", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "AccessControlExtensionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SubjectsPerAccessControlEntry", base: "uint16",
            access: "R V"
        }),

        AttributeElement({
            id: 0x0003, name: "TargetsPerAccessControlEntry", base: "uint16",
            access: "R V"
        }),

        AttributeElement({
            id: 0x0004, name: "AccessControlEntriesPerFabric", base: "uint16",
            access: "R V"
        }),

        EventElement({
            id: 0x0000, name: "AccessControlEntryChanged",
            access: "R S A", priority: "info",
            children: [
                DatatypeElement({
                    name: "AdminNodeId", base: "node-id",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", base: "uint16",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "ChangeType", base: "ChangeTypeEnum"
                }),

                DatatypeElement({
                    name: "LatestValue", base: "AccessControlEntryStruct",
                    quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AccessControlExtensionChanged",
            access: "R S A", priority: "info",
            children: [
                DatatypeElement({
                    name: "AdminNodeId", base: "node-id",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", base: "uint16",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "ChangeType", base: "ChangeTypeEnum"
                }),

                DatatypeElement({
                    name: "LatestValue", base: "AccessControlExtensionStruct",
                    quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryPrivilegeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "View"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProxyView"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Operate"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Manage"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Administer"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryAuthModeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Pase"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Case"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Group"
                })
            ]
        }),

        DatatypeElement({
            name: "ChangeTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Changed"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Added"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Removed"
                })
            ]
        }),

        DatatypeElement({
            name: "Target", base: "struct",
            children: [
                DatatypeElement({
                    name: "Cluster", base: "cluster-id",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "DeviceType", base: "devtype-id",
                    quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryStruct", base: "struct",
            access: "R F",
            children: [
                DatatypeElement({
                    name: "Privilege", base: "AccessControlEntryPrivilegeEnum",
                    access: "R S"
                }),

                DatatypeElement({
                    name: "AuthMode", base: "AccessControlEntryAuthModeEnum",
                    access: "R S"
                }),

                DatatypeElement({
                    name: "Subjects", base: "uint64",
                    access: "R S", quality: "X"
                }),

                DatatypeElement({
                    name: "Targets", base: "Target",
                    access: "R S", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlExtensionStruct", base: "struct",
            access: "R F",
            children: [
                DatatypeElement({
                    name: "Data", base: "octstr",
                    access: "R S"
                })
            ]
        })
    ]
}));
