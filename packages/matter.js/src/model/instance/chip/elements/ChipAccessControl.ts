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
            id: 0x0000, name: "Acl", base: "ACL",
            access: { rw: "W", readPrivilege: "A", writePrivilege: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "Extension", base: "Extension",
            access: { rw: "W", readPrivilege: "A", writePrivilege: "A" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0002, name: "SubjectsPerAccessControlEntry", base: "SubjectsPerAccessControlEntry",
            access: { rw: "R", readPrivilege: "V" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "TargetsPerAccessControlEntry", base: "TargetsPerAccessControlEntry",
            access: { rw: "R", readPrivilege: "V" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0004, name: "AccessControlEntriesPerFabric", base: "AccessControlEntriesPerFabric",
            access: { rw: "R", readPrivilege: "V" }, conformance: [ "M" ]
        }),

        EventElement({
            id: 0x0000, name: "AccessControlEntryChanged", base: "struct",
            access: { rw: "R", fabric: "S", readPrivilege: "A" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "AdminNodeId", base: "node_id",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "AdminNodeId", base: "node_id",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "ChangeType", base: "ChangeTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ChangeType", base: "ChangeTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LatestValue", base: "AccessControlEntryStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "LatestValue", base: "AccessControlEntryStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "AccessControlExtensionChanged", base: "struct",
            access: { rw: "R", fabric: "S", readPrivilege: "A" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "AdminNodeId", base: "node_id",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "AdminNodeId", base: "node_id",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "AdminPasscodeId", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "ChangeType", base: "ChangeTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ChangeType", base: "ChangeTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LatestValue", base: "AccessControlExtensionStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "LatestValue", base: "AccessControlExtensionStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        })
    ]
}))