/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0004, name: "Groups",
    description: "Groups",
    details: "Attributes and commands for group configuration and manipulation.",
    children: [
        AttributeElement({
            id: 0x0000, name: "GroupNameSupport", base: "NameSupport",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "AddGroup", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "M" }, conformance: [ "M" ], direction: "request", response: "AddGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroup", base: "struct",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ], direction: "request", response: "ViewGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembership", base: "struct",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ], direction: "request", response: "GetGroupMembershipResponse",
            children: [
                DatatypeElement({
                    name: "GroupList", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupList", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroup", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "M" }, conformance: [ "M" ], direction: "request", response: "RemoveGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveAllGroups", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "M" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0005, name: "AddGroupIfIdentifying", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "AddGroupResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ENUM8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "ENUM8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroupResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ENUM8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "ENUM8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupName", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembershipResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Capacity", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Capacity", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "GroupList", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupList", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroupResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ENUM8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "ENUM8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupId", base: "group_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
