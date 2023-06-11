/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x001f, name: "AccessControl",
    description: "Access Control",
    details: "The Access Control Cluster exposes a data model view of a Node's Access Control List (ACL), which codifies the rules used to manage and enforce Access Control for the Node's endpoints and their associated cluster instances.",
    children: [
        AttributeElement({
            id: 0x0000, name: "acl", base: "list",
            access: { rw: "W", readPriv: "A", writePriv: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "extension", base: "list",
            access: { rw: "W", readPriv: "A", writePriv: "A" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0002, name: "subjectsPerAccessControlEntry", base: "uint16",
            access: { rw: "R", readPriv: "V" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "targetsPerAccessControlEntry", base: "uint16",
            access: { rw: "R", readPriv: "V" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0004, name: "accessControlEntriesPerFabric", base: "uint16",
            access: { rw: "R", readPriv: "V" }, conformance: [ "M" ]
        }),

        EventElement({
            id: 0x0000, name: "AccessControlEntryChanged",
            access: { rw: "R", fabric: "S", readPriv: "A" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "adminNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "adminNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "adminPasscodeId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "adminPasscodeId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "changeType", base: "ChangeTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "changeType", base: "ChangeTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "latestValue", base: "AccessControlEntryStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "latestValue", base: "AccessControlEntryStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AccessControlExtensionChanged",
            access: { rw: "R", fabric: "S", readPriv: "A" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "adminNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "adminNodeId", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "adminPasscodeId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "adminPasscodeId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "changeType", base: "ChangeTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "changeType", base: "ChangeTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "latestValue", base: "AccessControlExtensionStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "latestValue", base: "AccessControlExtensionStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryPrivilegeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "view",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "view",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "proxyView",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "proxyView",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "operate",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "operate",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "manage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "manage",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "administer",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "administer",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryAuthModeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "pase",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "pase",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "case",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "case",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "group",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "group",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "ChangeTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "changed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "changed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "added",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "added",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "removed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "removed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "Target", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "cluster", base: "clusterId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "cluster", base: "clusterId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "endpoint", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "endpoint", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "deviceType", base: "deviceTypeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "deviceType", base: "deviceTypeId",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlEntryStruct", base: "struct",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "privilege", base: "AccessControlEntryPrivilegeEnum",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "privilege", base: "AccessControlEntryPrivilegeEnum",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "authMode", base: "AccessControlEntryAuthModeEnum",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "authMode", base: "AccessControlEntryAuthModeEnum",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "subjects", base: "uint64",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "subjects", base: "uint64",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "targets", base: "Target",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "targets", base: "Target",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        DatatypeElement({
            name: "AccessControlExtensionStruct", base: "struct",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "data", base: "octstr",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "data", base: "octstr",
                    access: { rw: "R", fabric: "S" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
