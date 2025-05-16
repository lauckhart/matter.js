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
    { name: "Groups", id: 0x4 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "GN", default: 1, constraint: "0", longName: "GroupNames" })
    ),

    Attribute(
        {
            name: "NameSupport", id: 0x0, type: "NameSupportBitmap",
            default: 0, constraint: "desc", access: "R V", quality: "F"
        },
        Field({ name: "NameSupport", default: 1, constraint: "7" })
    ),

    Command(
        {
            name: "AddGroup", id: 0x0,
            conformance: "M", access: "F M", direction: "request", response: "AddGroupResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", constraint: "min 1", conformance: "M" }),
        Field({ name: "GroupName", id: 0x1, type: "string", constraint: "max 16", conformance: "M" })
    ),

    Command(
        {
            name: "ViewGroup", id: 0x1,
            conformance: "M", access: "F O", direction: "request", response: "ViewGroupResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", constraint: "min 1", conformance: "M" })
    ),

    Command(
        {
            name: "GetGroupMembership", id: 0x2,
            conformance: "M", access: "F O", direction: "request", response: "GetGroupMembershipResponse"
        },
        Field(
            { name: "GroupList", id: 0x0, type: "list", constraint: "all[min 1]", conformance: "M" },
            Field({ name: "entry", type: "group-id" })
        )
    ),

    Command(
        {
            name: "RemoveGroup", id: 0x3,
            conformance: "M", access: "F M", direction: "request", response: "RemoveGroupResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", constraint: "min 1", conformance: "M" })
    ),

    Command(
        { name: "RemoveAllGroups", id: 0x4, conformance: "M", access: "F M", direction: "request", response: "status" }
    ),

    Command(
        {
            name: "AddGroupIfIdentifying", id: 0x5,
            conformance: "M", access: "F M", direction: "request", response: "status"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", constraint: "min 1", conformance: "M" }),
        Field({ name: "GroupName", id: 0x1, type: "string", constraint: "max 16", conformance: "M" })
    ),

    Command(
        { name: "AddGroupResponse", id: 0x0, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupId", id: 0x1, type: "group-id", constraint: "min 1", conformance: "M" })
    ),

    Command(
        { name: "ViewGroupResponse", id: 0x1, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupId", id: 0x1, type: "group-id", constraint: "min 1", conformance: "M" }),
        Field({ name: "GroupName", id: 0x2, type: "string", constraint: "max 16", conformance: "M" })
    ),

    Command(
        { name: "GetGroupMembershipResponse", id: 0x2, conformance: "M", direction: "response" },
        Field({ name: "Capacity", id: 0x0, type: "uint8", conformance: "M", quality: "X" }),
        Field(
            { name: "GroupList", id: 0x1, type: "list", constraint: "all[min 1]", conformance: "M" },
            Field({ name: "entry", type: "group-id" })
        )
    ),

    Command(
        { name: "RemoveGroupResponse", id: 0x3, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupId", id: 0x1, type: "group-id", constraint: "min 1", conformance: "M" })
    ),
    Datatype({ name: "NameSupportBitmap", type: "map8" }, Field({ name: "GroupNames", constraint: "7" }))
);

MatterDefinition.children.push(Groups);
