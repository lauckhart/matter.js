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
            id: 0x0000, name: "GroupNameSupport", base: "map8"
        }),

        CommandElement({
            id: 0x0000, name: "AddGroup",
            access: "R F M", direction: "request", response: "AddGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "GroupName", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroup",
            access: "R F", direction: "request", response: "ViewGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembership",
            access: "R F", direction: "request", response: "GetGroupMembershipResponse",
            children: [
                DatatypeElement({
                    name: "GroupList", base: "group-id"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroup",
            access: "R F M", direction: "request", response: "RemoveGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "RemoveAllGroups",
            access: "R F M", direction: "request"
        }),

        CommandElement({
            id: 0x0005, name: "AddGroupIfIdentifying",
            access: "R F M", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "GroupName", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "AddGroupResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroupResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "GroupName", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembershipResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Capacity", base: "uint8",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "GroupList", base: "group-id"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroupResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupsFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "GroupNames"
                })
            ]
        })
    ]
}));
