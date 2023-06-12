/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0005, name: "Scenes",
    description: "Scenes",
    details: "Attributes and commands for scene configuration and manipulation.",
    children: [
        AttributeElement({
            id: 0x0000, name: "SceneCount", base: "uint8",
            default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentScene", base: "uint8",
            default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentGroup", base: "group-id",
            default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "SceneValid", base: "bool",
            default: true
        }),

        AttributeElement({
            id: 0x0004, name: "SceneNameSupport", base: "map8",
            default: 0
        }),

        AttributeElement({
            id: 0x0005, name: "LastConfiguredBy", base: "node-id",
            conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "AddScene",
            access: "R F M", direction: "request", response: "AddSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16"
                }),

                DatatypeElement({
                    name: "SceneName", base: "string"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", base: "ExtensionFieldSet"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewScene",
            access: "R F", direction: "request", response: "ViewSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RemoveScene",
            access: "R F M", direction: "request", response: "RemoveSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenes",
            access: "R F M", direction: "request", response: "RemoveAllScenesResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StoreScene",
            access: "R F M", direction: "request", response: "StoreSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "RecallScene",
            access: "R F", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembership",
            access: "R F", direction: "request", response: "GetSceneMembershipResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddScene",
            access: "R F", conformance: "O", direction: "request", response: "EnhancedAddSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16"
                }),

                DatatypeElement({
                    name: "SceneName", base: "string"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", base: "ExtensionFieldSet"
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewScene",
            access: "R F", conformance: "O", direction: "request", response: "EnhancedViewSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0042, name: "CopyScene",
            access: "R F", conformance: "O", direction: "request", response: "CopySceneResponse",
            children: [
                DatatypeElement({
                    name: "Mode", base: "ScenesCopyMode"
                }),

                DatatypeElement({
                    name: "GroupIdentifierFrom", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneIdentifierFrom", base: "uint8"
                }),

                DatatypeElement({
                    name: "GroupIdentifierTo", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneIdentifierTo", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "AddSceneResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewSceneResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "SceneName", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", base: "ExtensionFieldSet",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RemoveSceneResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenesResponse",
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
            id: 0x0004, name: "StoreSceneResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembershipResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "Capacity", base: "uint8",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneList", base: "uint8",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddSceneResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewSceneResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "SceneName", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", base: "ExtensionFieldSet",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0042, name: "CopySceneResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8"
                }),

                DatatypeElement({
                    name: "GroupIdentifierFrom", base: "group-id"
                }),

                DatatypeElement({
                    name: "SceneIdentifierFrom", base: "uint8"
                })
            ]
        }),

        DatatypeElement({
            name: "ScenesCopyMode", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "CopyAllScenes"
                })
            ]
        }),

        DatatypeElement({
            name: "AttributeValuePair", base: "struct",
            children: [
                DatatypeElement({
                    name: "AttributeId", base: "attrib-id",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "AttributeValue", base: "uint8"
                })
            ]
        }),

        DatatypeElement({
            name: "ExtensionFieldSet", base: "struct",
            children: [
                DatatypeElement({
                    name: "ClusterId", base: "cluster-id"
                }),

                DatatypeElement({
                    name: "AttributeValueList", base: "AttributeValuePair"
                })
            ]
        }),

        DatatypeElement({
            name: "ScenesFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "SceneNames"
                })
            ]
        })
    ]
}));
