/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0005, name: "Scenes",
    description: "Scenes",
    details: "Attributes and commands for scene configuration and manipulation.",
    children: [
        AttributeElement({
            id: 0x0000, name: "sceneCount", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0001, name: "currentScene", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0002, name: "currentGroup", base: "groupId",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0003, name: "sceneValid", base: "bool",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0004, name: "sceneNameSupport", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0005, name: "lastConfiguredBy", base: "nodeId",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "AddScene",
            access: { rw: "R", fabric: "F", writePriv: "M" }, conformance: [ "M" ], direction: "request", response: "AddSceneResponse",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extensionFieldSets", base: "ExtensionFieldSet",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extensionFieldSets", base: "ExtensionFieldSet",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewScene",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ], direction: "request", response: "ViewSceneResponse",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RemoveScene",
            access: { rw: "R", fabric: "F", writePriv: "M" }, conformance: [ "M" ], direction: "request", response: "RemoveSceneResponse",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenes",
            access: { rw: "R", fabric: "F", writePriv: "M" }, conformance: [ "M" ], direction: "request", response: "RemoveAllScenesResponse",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StoreScene",
            access: { rw: "R", fabric: "F", writePriv: "M" }, conformance: [ "M" ], direction: "request", response: "StoreSceneResponse",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "RecallScene",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembership",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ], direction: "request", response: "GetSceneMembershipResponse",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddScene",
            access: { rw: "R", fabric: "F" }, conformance: [ "O" ], direction: "request", response: "EnhancedAddSceneResponse",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneName", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extensionFieldSets", base: "ExtensionFieldSet",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extensionFieldSets", base: "ExtensionFieldSet",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewScene",
            access: { rw: "R", fabric: "F" }, conformance: [ "O" ], direction: "request", response: "EnhancedViewSceneResponse",
            children: [
                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0042, name: "CopyScene",
            access: { rw: "R", fabric: "F" }, conformance: [ "O" ], direction: "request", response: "CopySceneResponse",
            children: [
                DatatypeElement({
                    name: "mode", base: "ScenesCopyMode",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "mode", base: "ScenesCopyMode",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupIdentifierFrom", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupIdentifierFrom", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneIdentifierFrom", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneIdentifierFrom", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupIdentifierTo", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupIdentifierTo", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneIdentifierTo", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneIdentifierTo", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "AddSceneResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewSceneResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "sceneName", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "sceneName", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "extensionFieldSets", base: "ExtensionFieldSet",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "extensionFieldSets", base: "ExtensionFieldSet",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RemoveSceneResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenesResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StoreSceneResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembershipResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "capacity", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "capacity", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneList", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "sceneList", base: "uint8",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddSceneResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewSceneResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupId", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "sceneName", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "sceneName", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "extensionFieldSets", base: "ExtensionFieldSet",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "extensionFieldSets", base: "ExtensionFieldSet",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0042, name: "CopySceneResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "enum8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupIdentifierFrom", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "groupIdentifierFrom", base: "groupId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneIdentifierFrom", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "sceneIdentifierFrom", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "ScenesCopyMode", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "copyAllScenes",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "copyAllScenes",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                })
            ]
        }),

        DatatypeElement({
            name: "AttributeValuePair", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "attributeId", base: "attributeId",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "attributeId", base: "attributeId",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "attributeValue", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "attributeValue", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "ExtensionFieldSet", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "clusterId", base: "clusterId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "clusterId", base: "clusterId",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "attributeValueList", base: "AttributeValuePair",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "attributeValueList", base: "AttributeValuePair",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "ScenesFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "sceneNames",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "sceneNames",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                })
            ]
        })
    ]
}));
