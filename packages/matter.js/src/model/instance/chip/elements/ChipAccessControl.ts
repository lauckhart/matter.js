/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x001f, name: "AccessControl",
    description: "Access Control",
    details: "The Access Control Cluster exposes a data model view of a Node's Access Control List (ACL), which codifies the rules used to manage and enforce Access Control for the Node's endpoints and their associated cluster instances.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Acl", type: "list",
            access: "RW A", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "AccessControlEntryStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "Extension", type: "list",
            access: "RW A", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "AccessControlExtensionStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SubjectsPerAccessControlEntry", type: "uint16",
            access: "R V", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "TargetsPerAccessControlEntry", type: "uint16",
            access: "R V", conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "AccessControlEntriesPerFabric", type: "uint16",
            access: "R V", conformance: "M"
        }),

        EventElement({
            id: 0x0000, name: "AccessControlEntryChanged",
            access: "R S A", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "AdminNodeId", type: "node-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", type: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "ChangeType", type: "ChangeTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LatestValue", type: "AccessControlEntryStruct",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AccessControlExtensionChanged",
            access: "R S A", conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "AdminNodeId", type: "node-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", type: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "ChangeType", type: "ChangeTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LatestValue", type: "AccessControlExtensionStruct",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryPrivilegeEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "View",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProxyView",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Operate",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Manage",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Administer",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryAuthModeEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Pase",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Case",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Group",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ChangeTypeEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Changed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Added",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Removed",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "Target", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Cluster", type: "cluster-id",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Endpoint", type: "endpoint-no",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "DeviceType", type: "devtype-id",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryStruct", type: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Privilege", type: "AccessControlEntryPrivilegeEnum",
                    access: "R S", conformance: "M"
                }),

                DatatypeElement({
                    name: "AuthMode", type: "AccessControlEntryAuthModeEnum",
                    access: "R S", conformance: "M"
                }),

                DatatypeElement({
                    name: "Subjects", type: "uint64",
                    access: "R S", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "Targets", type: "Target",
                    access: "R S", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlExtensionStruct", type: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Data", type: "octstr",
                    access: "R S", conformance: "M"
                })
            ]
        })
    ]
}));
