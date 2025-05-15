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

export const GroupKeyManagement = Cluster(
    { id: 0x3f, name: "GroupKeyManagement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "CS", conformance: "P", constraint: "0", description: "CacheAndSync" })
    ),

    Attribute(
        {
            id: 0x0, name: "GroupKeyMap", type: "list",
            access: "RW F VM", conformance: "M", constraint: "desc", default: [], quality: "N"
        },
        Field({ name: "entry", type: "GroupKeyMapStruct" })
    ),

    Attribute(
        {
            id: 0x1, name: "GroupTable", type: "list",
            access: "R F V", conformance: "M", constraint: "desc", default: []
        },
        Field({ name: "entry", type: "GroupInfoMapStruct" })
    ),

    Attribute({ id: 0x2, name: "MaxGroupsPerFabric", type: "uint16", access: "R V", conformance: "M", default: 0, quality: "F" }),
    Attribute({
        id: 0x3, name: "MaxGroupKeysPerFabric", type: "uint16",
        access: "R V", conformance: "M", constraint: "1 to 65535", default: 1, quality: "F"
    }),
    Command(
        { id: 0x0, name: "KeySetWrite", access: "F A", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "GroupKeySet", type: "GroupKeySetStruct", conformance: "M" })
    ),

    Command(
        {
            id: 0x1, name: "KeySetRead",
            access: "F A", conformance: "M", direction: "request", response: "KeySetReadResponse"
        },
        Field({ id: 0x0, name: "GroupKeySetId", type: "uint16", conformance: "M" })
    ),

    Command(
        { id: 0x2, name: "KeySetReadResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "GroupKeySet", type: "GroupKeySetStruct", conformance: "M" })
    ),
    Command(
        { id: 0x3, name: "KeySetRemove", access: "F A", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "GroupKeySetId", type: "uint16", conformance: "M" })
    ),

    Command(
        {
            id: 0x4, name: "KeySetReadAllIndices",
            access: "F A", conformance: "M", direction: "request", response: "KeySetReadAllIndicesResponse"
        },
        Field({ id: 0x0, name: "DoNotUse", conformance: "X" })
    ),

    Command(
        { id: 0x5, name: "KeySetReadAllIndicesResponse", conformance: "M", direction: "response" },
        Field(
            { id: 0x0, name: "GroupKeySetIDs", type: "list", conformance: "M" },
            Field({ name: "entry", type: "uint16" })
        )
    ),

    Datatype(
        { name: "GroupKeySecurityPolicyEnum", type: "enum8" },
        Field({ id: 0x0, name: "TrustFirst", conformance: "M" }),
        Field({ id: 0x1, name: "CacheAndSync", conformance: "CS" })
    ),
    Datatype(
        { name: "GroupKeyMulticastPolicyEnum", type: "enum8" },
        Field({ id: 0x0, name: "PerGroupId", conformance: "M" }),
        Field({ id: 0x1, name: "AllNodes", conformance: "M" })
    ),

    Datatype(
        { name: "GroupKeyMapStruct", type: "struct" },
        Field({ id: 0x1, name: "GroupId", type: "group-id", access: "F", conformance: "M" }),
        Field({ id: 0x2, name: "GroupKeySetId", type: "uint16", access: "F", conformance: "M", constraint: "1 to 65535" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "GroupKeySetStruct", type: "struct" },
        Field({ id: 0x0, name: "GroupKeySetId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "GroupKeySecurityPolicy", type: "GroupKeySecurityPolicyEnum", access: "S", conformance: "M" }),
        Field({ id: 0x2, name: "EpochKey0", type: "octstr", access: "S", conformance: "M", constraint: "16", quality: "X" }),
        Field({ id: 0x3, name: "EpochStartTime0", type: "epoch-us", access: "S", conformance: "M", quality: "X" }),
        Field({ id: 0x4, name: "EpochKey1", type: "octstr", access: "S", conformance: "M", constraint: "16", quality: "X" }),
        Field({ id: 0x5, name: "EpochStartTime1", type: "epoch-us", access: "S", conformance: "M", quality: "X" }),
        Field({ id: 0x6, name: "EpochKey2", type: "octstr", access: "S", conformance: "M", constraint: "16", quality: "X" }),
        Field({ id: 0x7, name: "EpochStartTime2", type: "epoch-us", access: "S", conformance: "M", quality: "X" }),
        Field({
            id: 0x8, name: "GroupKeyMulticastPolicy", type: "GroupKeyMulticastPolicyEnum",
            access: "S", conformance: "O", default: 0
        })
    ),

    Datatype(
        { name: "GroupInfoMapStruct", type: "struct" },
        Field({ id: 0x1, name: "GroupId", type: "group-id", access: "F", conformance: "M" }),
        Field(
            { id: 0x2, name: "Endpoints", type: "list", access: "F", conformance: "M", constraint: "min 1" },
            Field({ name: "entry", type: "endpoint-no" })
        ),
        Field({ id: 0x3, name: "GroupName", type: "string", access: "F", conformance: "O", constraint: "max 16" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    )
);

MatterDefinition.children.push(GroupKeyManagement);
