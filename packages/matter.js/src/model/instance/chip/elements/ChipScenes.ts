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
            id: 0x0000, name: "SceneCount", type: "uint8",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentScene", type: "uint8",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentGroup", type: "group-id",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "SceneValid", type: "bool",
            conformance: "M", default: true
        }),

        AttributeElement({
            id: 0x0004, name: "SceneNameSupport", type: "map8",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0005, name: "LastConfiguredBy", type: "node-id",
            conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "AddScene",
            access: "R F M", conformance: "M", direction: "request", response: "AddSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneName", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", type: "ExtensionFieldSet",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewScene",
            access: "R F", conformance: "M", direction: "request", response: "ViewSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RemoveScene",
            access: "R F M", conformance: "M", direction: "request", response: "RemoveSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenes",
            access: "R F M", conformance: "M", direction: "request", response: "RemoveAllScenesResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "StoreScene",
            access: "R F M", conformance: "M", direction: "request", response: "StoreSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "RecallScene",
            access: "R F", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "O", quality: "X"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembership",
            access: "R F", conformance: "M", direction: "request", response: "GetSceneMembershipResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddScene",
            access: "R F", conformance: "O", direction: "request", response: "EnhancedAddSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneName", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", type: "ExtensionFieldSet",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewScene",
            access: "R F", conformance: "O", direction: "request", response: "EnhancedViewSceneResponse",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0042, name: "CopyScene",
            access: "R F", conformance: "O", direction: "request", response: "CopySceneResponse",
            children: [
                DatatypeElement({
                    name: "Mode", type: "ScenesCopyMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupIdentifierFrom", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneIdentifierFrom", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupIdentifierTo", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneIdentifierTo", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "AddSceneResponse",
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
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ViewSceneResponse",
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
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "SceneName", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", type: "ExtensionFieldSet",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RemoveSceneResponse",
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
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenesResponse",
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
            id: 0x0004, name: "StoreSceneResponse",
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
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembershipResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Capacity", type: "uint8",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneList", type: "uint8",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddSceneResponse",
            conformance: "O", direction: "response",
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
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewSceneResponse",
            conformance: "O", direction: "response",
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
                    name: "SceneId", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "SceneName", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ExtensionFieldSets", type: "ExtensionFieldSet",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0042, name: "CopySceneResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "enum8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupIdentifierFrom", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SceneIdentifierFrom", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ScenesCopyMode", type: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "CopyAllScenes",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AttributeValuePair", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "AttributeId", type: "attrib-id",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "AttributeValue", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ExtensionFieldSet", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ClusterId", type: "cluster-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AttributeValueList", type: "AttributeValuePair",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ScenesFeature", type: "map32",
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
