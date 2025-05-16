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
    { name: "GroupKeyManagement", id: 0x3f },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "CS", constraint: "0", conformance: "P", longName: "CacheAndSync" })
    ),

    Attribute(
        {
            name: "GroupKeyMap", id: 0x0, type: "list",
            default: [], constraint: "desc", conformance: "M", access: "RW F VM", quality: "N"
        },
        Field({ name: "entry", type: "GroupKeyMapStruct" })
    ),

    Attribute(
        {
            name: "GroupTable", id: 0x1, type: "list",
            default: [], constraint: "desc", conformance: "M", access: "R F V"
        },
        Field({ name: "entry", type: "GroupInfoMapStruct" })
    ),

    Attribute({ name: "MaxGroupsPerFabric", id: 0x2, type: "uint16", default: 0, conformance: "M", access: "R V", quality: "F" }),
    Attribute({
        name: "MaxGroupKeysPerFabric", id: 0x3, type: "uint16",
        default: 1, constraint: "1 to 65535", conformance: "M", access: "R V", quality: "F"
    }),
    Command(
        { name: "KeySetWrite", id: 0x0, conformance: "M", access: "F A", direction: "request", response: "status" },
        Field({ name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M" })
    ),

    Command(
        {
            name: "KeySetRead", id: 0x1,
            conformance: "M", access: "F A", direction: "request", response: "KeySetReadResponse"
        },
        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" })
    ),

    Command(
        { name: "KeySetReadResponse", id: 0x2, conformance: "M", direction: "response" },
        Field({ name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M" })
    ),
    Command(
        { name: "KeySetRemove", id: 0x3, conformance: "M", access: "F A", direction: "request", response: "status" },
        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" })
    ),

    Command(
        {
            name: "KeySetReadAllIndices", id: 0x4,
            conformance: "M", access: "F A", direction: "request", response: "KeySetReadAllIndicesResponse"
        },
        Field({ name: "DoNotUse", id: 0x0, conformance: "X" })
    ),

    Command(
        { name: "KeySetReadAllIndicesResponse", id: 0x5, conformance: "M", direction: "response" },
        Field(
            { name: "GroupKeySetIDs", id: 0x0, type: "list", conformance: "M" },
            Field({ name: "entry", type: "uint16" })
        )
    ),

    Datatype(
        { name: "GroupKeySecurityPolicyEnum", type: "enum8" },
        Field({ name: "TrustFirst", id: 0x0, conformance: "M" }),
        Field({ name: "CacheAndSync", id: 0x1, conformance: "CS" })
    ),
    Datatype(
        { name: "GroupKeyMulticastPolicyEnum", type: "enum8" },
        Field({ name: "PerGroupId", id: 0x0, conformance: "M" }),
        Field({ name: "AllNodes", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "GroupKeyMapStruct", type: "struct" },
        Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M", access: "F" }),
        Field({ name: "GroupKeySetId", id: 0x2, type: "uint16", constraint: "1 to 65535", conformance: "M", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "GroupKeySetStruct", type: "struct" },
        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "GroupKeySecurityPolicy", id: 0x1, type: "GroupKeySecurityPolicyEnum", conformance: "M", access: "S" }),
        Field({ name: "EpochKey0", id: 0x2, type: "octstr", constraint: "16", conformance: "M", access: "S", quality: "X" }),
        Field({ name: "EpochStartTime0", id: 0x3, type: "epoch-us", conformance: "M", access: "S", quality: "X" }),
        Field({ name: "EpochKey1", id: 0x4, type: "octstr", constraint: "16", conformance: "M", access: "S", quality: "X" }),
        Field({ name: "EpochStartTime1", id: 0x5, type: "epoch-us", conformance: "M", access: "S", quality: "X" }),
        Field({ name: "EpochKey2", id: 0x6, type: "octstr", constraint: "16", conformance: "M", access: "S", quality: "X" }),
        Field({ name: "EpochStartTime2", id: 0x7, type: "epoch-us", conformance: "M", access: "S", quality: "X" }),
        Field({
            name: "GroupKeyMulticastPolicy", id: 0x8, type: "GroupKeyMulticastPolicyEnum",
            default: 0, conformance: "O", access: "S"
        })
    ),

    Datatype(
        { name: "GroupInfoMapStruct", type: "struct" },
        Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M", access: "F" }),
        Field(
            { name: "Endpoints", id: 0x2, type: "list", constraint: "min 1", conformance: "M", access: "F" },
            Field({ name: "entry", type: "endpoint-no" })
        ),
        Field({ name: "GroupName", id: 0x3, type: "string", constraint: "max 16", conformance: "O", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(GroupKeyManagement);
