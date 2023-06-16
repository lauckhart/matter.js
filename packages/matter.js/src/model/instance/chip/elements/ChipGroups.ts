/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0004, name: "Groups",
    description: "Groups",
    details: "Attributes and commands for group configuration and manipulation.",
    children: [
        AttributeElement({
            id: 0x0000, name: "GroupNameSupport", type: "map8",
            conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "AddGroup",
            access: "R F M", conformance: "M", direction: "request", response: "AddGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupName", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroup",
            access: "R F", conformance: "M", direction: "request", response: "ViewGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembership",
            access: "R F", conformance: "M", direction: "request", response: "GetGroupMembershipResponse",
            children: [
                DatatypeElement({
                    name: "GroupList", type: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroup",
            access: "R F M", conformance: "M", direction: "request", response: "RemoveGroupResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
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
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupName", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "AddGroupResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroupResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupName", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembershipResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Capacity", type: "uint8",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "GroupList", type: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroupResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupsFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "GroupNames",
                    conformance: "M"
                })
            ]
        })
    ]
}));
