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
    { name: "ScenesManagement", id: 0x62 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "SN", constraint: "0", conformance: "O", longName: "SceneNames" })
    ),
    Attribute({
        name: "LastConfiguredBy", id: 0x0, type: "node-id",
        default: null, conformance: "O", access: "R V", quality: "X"
    }),
    Attribute({
        name: "SceneTableSize", id: 0x1, type: "uint16",
        default: 16, constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute(
        { name: "FabricSceneInfo", id: 0x2, type: "list", constraint: "desc", conformance: "M", access: "R F V" },
        Field({ name: "entry", type: "SceneInfoStruct" })
    ),

    Command(
        {
            name: "AddScene", id: 0x0,
            conformance: "M", access: "F M", direction: "request", response: "AddSceneResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x1, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint32", constraint: "max 60000000", conformance: "M" }),
        Field({ name: "SceneName", id: 0x3, type: "string", constraint: "max 16", conformance: "M" }),
        Field(
            { name: "ExtensionFieldSetStructs", id: 0x4, type: "list", constraint: "desc", conformance: "M" },
            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    ),

    Command(
        { name: "AddSceneResponse", id: 0x0, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x2, type: "uint8", constraint: "max 254", conformance: "M" })
    ),

    Command(
        {
            name: "ViewScene", id: 0x1,
            conformance: "M", access: "F O", direction: "request", response: "ViewSceneResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x1, type: "uint8", constraint: "max 254", conformance: "M" })
    ),

    Command(
        { name: "ViewSceneResponse", id: 0x1, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x2, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x3, type: "uint32", constraint: "max 60000000", conformance: "desc" }),
        Field({ name: "SceneName", id: 0x4, type: "string", constraint: "max 16", conformance: "desc" }),
        Field(
            { name: "ExtensionFieldSetStructs", id: 0x5, type: "list", conformance: "desc" },
            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    ),

    Command(
        {
            name: "RemoveScene", id: 0x2,
            conformance: "M", access: "F M", direction: "request", response: "RemoveSceneResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x1, type: "uint8", constraint: "max 254", conformance: "M" })
    ),

    Command(
        { name: "RemoveSceneResponse", id: 0x2, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x2, type: "uint8", constraint: "max 254", conformance: "M" })
    ),

    Command(
        {
            name: "RemoveAllScenes", id: 0x3,
            conformance: "M", access: "F M", direction: "request", response: "RemoveAllScenesResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" })
    ),

    Command(
        { name: "RemoveAllScenesResponse", id: 0x3, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" })
    ),

    Command(
        {
            name: "StoreScene", id: 0x4,
            conformance: "M", access: "F M", direction: "request", response: "StoreSceneResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x1, type: "uint8", constraint: "max 254", conformance: "M" })
    ),

    Command(
        { name: "StoreSceneResponse", id: 0x4, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x2, type: "uint8", constraint: "max 254", conformance: "M" })
    ),

    Command(
        { name: "RecallScene", id: 0x5, conformance: "M", access: "F O", direction: "request", response: "status" },
        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x1, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint32", constraint: "max 60000000", conformance: "O", quality: "X" })
    ),

    Command(
        {
            name: "GetSceneMembership", id: 0x6,
            conformance: "M", access: "F O", direction: "request", response: "GetSceneMembershipResponse"
        },
        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" })
    ),

    Command(
        { name: "GetSceneMembershipResponse", id: 0x6, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "Capacity", id: 0x1, type: "uint8", conformance: "M", quality: "X" }),
        Field({ name: "GroupId", id: 0x2, type: "group-id", conformance: "M" }),
        Field(
            { name: "SceneList", id: 0x3, type: "list", conformance: "Status == Success" },
            Field({ name: "entry", type: "uint8" })
        )
    ),

    Command(
        {
            name: "CopyScene", id: 0x40,
            conformance: "O", access: "F M", direction: "request", response: "CopySceneResponse"
        },
        Field({ name: "Mode", id: 0x0, type: "CopyModeBitmap", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M" }),
        Field({ name: "SceneIdentifierFrom", id: 0x2, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "GroupIdentifierTo", id: 0x3, type: "group-id", conformance: "M" }),
        Field({ name: "SceneIdentifierTo", id: 0x4, type: "uint8", constraint: "max 254", conformance: "M" })
    ),

    Command(
        { name: "CopySceneResponse", id: 0x40, conformance: "CopyScene", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "status", constraint: "desc", conformance: "M" }),
        Field({ name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M" }),
        Field({ name: "SceneIdentifierFrom", id: 0x2, type: "uint8", constraint: "max 254", conformance: "M" })
    ),

    Datatype({ name: "CopyModeBitmap", type: "map8" }, Field({ name: "CopyAllScenes", constraint: "0" })),

    Datatype(
        { name: "SceneInfoStruct", type: "struct" },
        Field({ name: "SceneCount", id: 0x0, type: "uint8", default: 0, conformance: "M", access: "F" }),
        Field({
            name: "CurrentScene", id: 0x1, type: "uint8",
            default: 255, constraint: "desc", conformance: "M", access: "S"
        }),
        Field({ name: "CurrentGroup", id: 0x2, type: "group-id", default: 0, conformance: "M", access: "S" }),
        Field({ name: "SceneValid", id: 0x3, type: "bool", default: false, conformance: "M", access: "S" }),
        Field({ name: "RemainingCapacity", id: 0x4, type: "uint8", constraint: "max 253", conformance: "M", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "AttributeValuePairStruct", type: "struct" },
        Field({ name: "AttributeId", id: 0x0, type: "attrib-id", conformance: "M" }),
        Field({ name: "ValueUnsigned8", id: 0x1, type: "uint8", conformance: "O.a" }),
        Field({ name: "ValueSigned8", id: 0x2, type: "int8", conformance: "O.a" }),
        Field({ name: "ValueUnsigned16", id: 0x3, type: "uint16", conformance: "O.a" }),
        Field({ name: "ValueSigned16", id: 0x4, type: "int16", conformance: "O.a" }),
        Field({ name: "ValueUnsigned32", id: 0x5, type: "uint32", conformance: "O.a" }),
        Field({ name: "ValueSigned32", id: 0x6, type: "int32", conformance: "O.a" }),
        Field({ name: "ValueUnsigned64", id: 0x7, type: "uint64", conformance: "O.a" }),
        Field({ name: "ValueSigned64", id: 0x8, type: "int64", conformance: "O.a" })
    ),

    Datatype(
        { name: "ExtensionFieldSetStruct", type: "struct" },
        Field({ name: "ClusterId", id: 0x0, type: "cluster-id", conformance: "M" }),
        Field(
            { name: "AttributeValueList", id: 0x1, type: "list", constraint: "desc", conformance: "M" },
            Field({ name: "entry", type: "AttributeValuePairStruct" })
        )
    ),

    Datatype(
        { name: "LogicalSceneTable", type: "struct" },
        Field({ name: "SceneGroupId", id: 0x0, type: "group-id", conformance: "M" }),
        Field({ name: "SceneId", id: 0x1, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "SceneName", id: 0x2, type: "string", constraint: "max 16", conformance: "SN" }),
        Field({
            name: "SceneTransitionTime", id: 0x3, type: "uint32",
            default: 0, constraint: "max 60000000", conformance: "M"
        }),
        Field(
            { name: "ExtensionFields", id: 0x4, type: "list", default: [], conformance: "M" },
            Field({ name: "entry", type: "ExtensionFieldSetStruct" })
        )
    )
);

MatterDefinition.children.push(ScenesManagement);
