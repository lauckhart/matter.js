/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0004, name: "Groups",
    description: "Groups",
    details: "Attributes and commands for group configuration and manipulation.",
    children: [
        AttributeElement({
            id: 0x0000, name: "GroupNameSupport", base: "map8",
            access: "R", conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "AddGroup",
            access: "R F M", conformance: "M", direction: "request", response: "AddGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupName", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroup",
            access: "R F", conformance: "M", direction: "request", response: "ViewGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembership",
            access: "R F", conformance: "M", direction: "request", response: "GetGroupMembershipResponse",
            children: [
                DatatypeElement({
                    name: "GroupList", base: "group-id",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroup",
            access: "R F M", conformance: "M", direction: "request", response: "RemoveGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveAllGroups",
            access: "R F M", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0005, name: "AddGroupIfIdentifying",
            access: "R F M", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupName", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "AddGroupResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroupResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupName", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembershipResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Capacity", base: "uint8",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "GroupList", base: "group-id",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroupResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupsFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "GroupNames",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
