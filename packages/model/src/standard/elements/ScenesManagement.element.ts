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

export const ScenesManagement = Cluster(
    { id: 0x62, name: "ScenesManagement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "SN", conformance: "O", constraint: "0", description: "SceneNames" })
    ),
    Attribute({
        id: 0x0, name: "LastConfiguredBy", type: "node-id",
        access: "R V", conformance: "O", default: null, quality: "X"
    }),
    Attribute({
        id: 0x1, name: "SceneTableSize", type: "uint16",
        access: "R V", conformance: "M", constraint: "desc", default: 16, quality: "F"
    }),
    Attribute(
        { id: 0x2, name: "FabricSceneInfo", type: "list", access: "R F V", conformance: "M", constraint: "desc" },
        Field({ name: "entry", type: "SceneInfoStruct" })
    ),

    Command(
        {
            id: 0x0, name: "AddScene",
            access: "F M", conformance: "M", direction: "request", response: "AddSceneResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x1, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint32", conformance: "M", constraint: "max 60000000" }),
        Field({ id: 0x3, name: "SceneName", type: "string", conformance: "M", constraint: "max 16" }),
        Field(
            { id: 0x4, name: "ExtensionFieldSetStructs", type: "list", conformance: "M", constraint: "desc" },
            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    ),

    Command(
        { id: 0x0, name: "AddSceneResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x2, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" })
    ),

    Command(
        {
            id: 0x1, name: "ViewScene",
            access: "F O", conformance: "M", direction: "request", response: "ViewSceneResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x1, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" })
    ),

    Command(
        { id: 0x1, name: "ViewSceneResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x2, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x3, name: "TransitionTime", type: "uint32", conformance: "desc", constraint: "max 60000000" }),
        Field({ id: 0x4, name: "SceneName", type: "string", conformance: "desc", constraint: "max 16" }),
        Field(
            { id: 0x5, name: "ExtensionFieldSetStructs", type: "list", conformance: "desc" },
            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    ),

    Command(
        {
            id: 0x2, name: "RemoveScene",
            access: "F M", conformance: "M", direction: "request", response: "RemoveSceneResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x1, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" })
    ),

    Command(
        { id: 0x2, name: "RemoveSceneResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x2, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" })
    ),

    Command(
        {
            id: 0x3, name: "RemoveAllScenes",
            access: "F M", conformance: "M", direction: "request", response: "RemoveAllScenesResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M" })
    ),

    Command(
        { id: 0x3, name: "RemoveAllScenesResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupId", type: "group-id", conformance: "M" })
    ),

    Command(
        {
            id: 0x4, name: "StoreScene",
            access: "F M", conformance: "M", direction: "request", response: "StoreSceneResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x1, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" })
    ),

    Command(
        { id: 0x4, name: "StoreSceneResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x2, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" })
    ),

    Command(
        { id: 0x5, name: "RecallScene", access: "F O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x1, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint32", conformance: "O", constraint: "max 60000000", quality: "X" })
    ),

    Command(
        {
            id: 0x6, name: "GetSceneMembership",
            access: "F O", conformance: "M", direction: "request", response: "GetSceneMembershipResponse"
        },
        Field({ id: 0x0, name: "GroupId", type: "group-id", conformance: "M" })
    ),

    Command(
        { id: 0x6, name: "GetSceneMembershipResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Capacity", type: "uint8", conformance: "M", quality: "X" }),
        Field({ id: 0x2, name: "GroupId", type: "group-id", conformance: "M" }),
        Field(
            { id: 0x3, name: "SceneList", type: "list", conformance: "Status == Success" },
            Field({ name: "entry", type: "uint8" })
        )
    ),

    Command(
        {
            id: 0x40, name: "CopyScene",
            access: "F M", conformance: "O", direction: "request", response: "CopySceneResponse"
        },
        Field({ id: 0x0, name: "Mode", type: "CopyModeBitmap", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupIdentifierFrom", type: "group-id", conformance: "M" }),
        Field({ id: 0x2, name: "SceneIdentifierFrom", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x3, name: "GroupIdentifierTo", type: "group-id", conformance: "M" }),
        Field({ id: 0x4, name: "SceneIdentifierTo", type: "uint8", conformance: "M", constraint: "max 254" })
    ),

    Command(
        { id: 0x40, name: "CopySceneResponse", conformance: "CopyScene", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "status", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "GroupIdentifierFrom", type: "group-id", conformance: "M" }),
        Field({ id: 0x2, name: "SceneIdentifierFrom", type: "uint8", conformance: "M", constraint: "max 254" })
    ),

    Datatype({ name: "CopyModeBitmap", type: "map8" }, Field({ name: "CopyAllScenes", constraint: "0" })),

    Datatype(
        { name: "SceneInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "SceneCount", type: "uint8", access: "F", conformance: "M", default: 0 }),
        Field({
            id: 0x1, name: "CurrentScene", type: "uint8",
            access: "S", conformance: "M", constraint: "desc", default: 255
        }),
        Field({ id: 0x2, name: "CurrentGroup", type: "group-id", access: "S", conformance: "M", default: 0 }),
        Field({ id: 0x3, name: "SceneValid", type: "bool", access: "S", conformance: "M", default: false }),
        Field({ id: 0x4, name: "RemainingCapacity", type: "uint8", access: "F", conformance: "M", constraint: "max 253" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "AttributeValuePairStruct", type: "struct" },
        Field({ id: 0x0, name: "AttributeId", type: "attrib-id", conformance: "M" }),
        Field({ id: 0x1, name: "ValueUnsigned8", type: "uint8", conformance: "O.a" }),
        Field({ id: 0x2, name: "ValueSigned8", type: "int8", conformance: "O.a" }),
        Field({ id: 0x3, name: "ValueUnsigned16", type: "uint16", conformance: "O.a" }),
        Field({ id: 0x4, name: "ValueSigned16", type: "int16", conformance: "O.a" }),
        Field({ id: 0x5, name: "ValueUnsigned32", type: "uint32", conformance: "O.a" }),
        Field({ id: 0x6, name: "ValueSigned32", type: "int32", conformance: "O.a" }),
        Field({ id: 0x7, name: "ValueUnsigned64", type: "uint64", conformance: "O.a" }),
        Field({ id: 0x8, name: "ValueSigned64", type: "int64", conformance: "O.a" })
    ),

    Datatype(
        { name: "ExtensionFieldSetStruct", type: "struct" },
        Field({ id: 0x0, name: "ClusterId", type: "cluster-id", conformance: "M" }),
        Field(
            { id: 0x1, name: "AttributeValueList", type: "list", conformance: "M", constraint: "desc" },
            Field({ name: "entry", type: "AttributeValuePairStruct" })
        )
    ),

    Datatype(
        { name: "LogicalSceneTable", type: "struct" },
        Field({ id: 0x0, name: "SceneGroupId", type: "group-id", conformance: "M" }),
        Field({ id: 0x1, name: "SceneId", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x2, name: "SceneName", type: "string", conformance: "SN", constraint: "max 16" }),
        Field({
            id: 0x3, name: "SceneTransitionTime", type: "uint32",
            conformance: "M", constraint: "max 60000000", default: 0
        }),
        Field(
            { id: 0x4, name: "ExtensionFields", type: "list", conformance: "M", default: [] },
            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    )
);

MatterDefinition.children.push(ScenesManagement);
