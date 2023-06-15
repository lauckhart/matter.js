/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0005, name: "Scenes",
    description: "Scenes",
    details: "Attributes and commands for scene configuration and manipulation.",
    children: [
        AttributeElement({
            id: 0x0000, name: "SceneCount", base: "uint8",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentScene", base: "uint8",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentGroup", base: "group-id",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "SceneValid", base: "bool",
            conformance: "M", default: true
        }),

        AttributeElement({
            id: 0x0004, name: "SceneNameSupport", base: "map8",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0005, name: "LastConfiguredBy", base: "node-id",
            conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "AddScene",
            access: "R F M", conformance: "M", direction: "request", response: "AddSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneName", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", base: "ExtensionFieldSet",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewScene",
            access: "R F", conformance: "M", direction: "request", response: "ViewSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RemoveScene",
            access: "R F M", conformance: "M", direction: "request", response: "RemoveSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenes",
            access: "R F M", conformance: "M", direction: "request", response: "RemoveAllScenesResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StoreScene",
            access: "R F M", conformance: "M", direction: "request", response: "StoreSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "RecallScene",
            access: "R F", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembership",
            access: "R F", conformance: "M", direction: "request", response: "GetSceneMembershipResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddScene",
            access: "R F", conformance: "O", direction: "request", response: "EnhancedAddSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneName", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", base: "ExtensionFieldSet",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewScene",
            access: "R F", conformance: "O", direction: "request", response: "EnhancedViewSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0042, name: "CopyScene",
            access: "R F", conformance: "O", direction: "request", response: "CopySceneResponse",
            children: [
                DatatypeElement({
                    name: "Mode", base: "ScenesCopyMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupIdentifierFrom", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneIdentifierFrom", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupIdentifierTo", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneIdentifierTo", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "AddSceneResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewSceneResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
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
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenesResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StoreSceneResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembershipResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Capacity", base: "uint8",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
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
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewSceneResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", base: "uint8",
                    conformance: "M"
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
                    name: "Status", base: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupIdentifierFrom", base: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneIdentifierFrom", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ScenesCopyMode", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "CopyAllScenes",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AttributeValuePair", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "AttributeId", base: "attrib-id",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "AttributeValue", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ExtensionFieldSet", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ClusterId", base: "cluster-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AttributeValueList", base: "AttributeValuePair",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ScenesFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "SceneNames",
                    conformance: "M"
                })
            ]
        })
    ]
}));
