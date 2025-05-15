/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Groups = Cluster(
    { id: 0x4, name: "Groups" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 4 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "GN", constraint: "0", default: 1, description: "GroupNames" })
    ),

    Attribute(
        {
            id: 0x0, name: "NameSupport", type: "NameSupportBitmap",
            access: "R V", constraint: "desc", default: 0, quality: "F"
        },
        Field({ name: "NameSupport", constraint: "7", default: 1 })
    ),

    Command(
        {
            id: 0x0, name: "AddGroup",
            access: "F M", conformance: "M", direction: "request", response: "AddGroupResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M", constraint: "min 1" }),
        Field({ id: 0x1, name: "GroupName", type: "string", conformance: "M", constraint: "max 16" })
    ),

    Command(
        {
            id: 0x1, name: "ViewGroup",
            access: "F O", conformance: "M", direction: "request", response: "ViewGroupResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M", constraint: "min 1" })
    ),

    Command(
        {
            id: 0x2, name: "GetGroupMembership",
            access: "F O", conformance: "M", direction: "request", response: "GetGroupMembershipResponse"
        },
        Field(
            { id: 0x0, name: "GroupList", type: "list", conformance: "M", constraint: "all[min 1]" },
            Field({ name: "entry", type: "group-id" })
        )
    ),

    Command(
        {
            id: 0x3, name: "RemoveGroup",
            access: "F M", conformance: "M", direction: "request", response: "RemoveGroupResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M", constraint: "min 1" })
    ),

    Command(
        { id: 0x4, name: "RemoveAllGroups", access: "F M", conformance: "M", direction: "request", response: "status" }
    ),

    Command(
        {
            id: 0x5, name: "AddGroupIfIdentifying",
            access: "F M", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M", constraint: "min 1" }),
        Field({ id: 0x1, name: "GroupName", type: "string", conformance: "M", constraint: "max 16" })
    ),

    Command(
        { id: 0x0, name: "AddGroupResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupId", type: "group-id", conformance: "M", constraint: "min 1" })
    ),

    Command(
        { id: 0x1, name: "ViewGroupResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupId", type: "group-id", conformance: "M", constraint: "min 1" }),
        Field({ id: 0x2, name: "GroupName", type: "string", conformance: "M", constraint: "max 16" })
    ),

    Command(
        { id: 0x2, name: "GetGroupMembershipResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Capacity", type: "uint8", conformance: "M", quality: "X" }),
        Field(
            { id: 0x1, name: "GroupList", type: "list", conformance: "M", constraint: "all[min 1]" },
            Field({ name: "entry", type: "group-id" })
        )
    ),

    Command(
        { id: 0x3, name: "RemoveGroupResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupId", type: "group-id", conformance: "M", constraint: "min 1" })
    ),
    Datatype({ name: "NameSupportBitmap", type: "map8" }, Field({ name: "GroupNames", constraint: "7" }))
);

MatterDefinition.children.push(Groups);
