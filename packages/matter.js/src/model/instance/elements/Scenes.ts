/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0005, name: "Scenes",
    classification: "application", description: "Scenes",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "SceneCount",
            access: "R V", conformance: "M", default: 0, type: "uint8",
            details: "The SceneCount attribute specifies the number of scenes currently in " +
                     "the server’s Scene Table",
            xref: { document: "cluster", section: "1.4.7.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "CurrentScene",
            access: "R V", conformance: "M", default: 0, type: "uint8",
            details: "The CurrentScene attribute holds the scene identifier of the scene " +
                     "last invoked",
            xref: { document: "cluster", section: "1.4.7.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "CurrentGroup",
            access: "R V", conformance: "M", default: 0, type: "group-id",
            details: "The CurrentGroup attribute holds the group identifier of the scene " +
                     "last invoked, or 0 if the scene last invoked is not associated with a " +
                     "group",
            xref: { document: "cluster", section: "1.4.7.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "SceneValid",
            access: "R V", conformance: "M", default: true, type: "bool",
            details: "The SceneValid attribute indicates whether the state of the server " +
                     "corresponds to that associated with the CurrentScene and CurrentGroup " +
                     "attributes. TRUE indicates that these attributes are valid, FALSE " +
                     "indicates that they are not valid",
            xref: { document: "cluster", section: "1.4.7.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "SceneNameSupport",
            access: "R V", conformance: "M", constraint: "desc", default: 0, type: "map8",
            details: "This attribute provides legacy, read-only access to whether the Scene " +
                     "Names feature is supported. The most significant bit, bit 7, SHALL be " +
                     "equal to bit 0 of the FeatureMap attribute. All other bits SHALL be 0",
            xref: { document: "cluster", section: "1.4.7.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "LastConfiguredBy",
            access: "R V", conformance: "O", default: "null", quality: "X", type: "node-id",
            details: "The LastConfiguredBy attribute holds the Node ID (the IEEE address in " +
                     "case of Zigbee) of the node that last configured the Scene Table",
            xref: { document: "cluster", section: "1.4.7.6" }
        },

        {
            tag: "command", id: 0x0000, name: "AddScene",
            access: "R F M", conformance: "M", direction: "request", response: "AddSceneResponse",
            details: "The AddScene command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.4.9.2" },
            children: [
                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneId",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "SceneName",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "ExtensionFieldSets",
                    conformance: "M", type: "ExtensionFieldSet"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "ViewSceneResponse",
            conformance: "M", direction: "response",
            details: "The ViewSceneResponse command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.4.9.13" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneId",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "datatype", name: "SceneName",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "ExtensionFieldSets",
                    conformance: "O", type: "ExtensionFieldSet"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "RemoveSceneResponse",
            conformance: "M", direction: "response",
            details: "The RemoveSceneResponse command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.4.9.14" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneId",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "RemoveAllScenesResponse",
            conformance: "M", direction: "response",
            details: "The RemoveAllScenesResponse command SHALL have the following data " +
                     "fields",
            xref: { document: "cluster", section: "1.4.9.15" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "StoreSceneResponse",
            conformance: "M", direction: "response",
            details: "The StoreSceneResponse command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.4.9.16" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneId",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0005, name: "RecallScene",
            access: "R F", conformance: "M", direction: "request", response: "status",
            details: "The RecallScene command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.4.9.7" },
            children: [
                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneId",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "O", quality: "X", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0006, name: "GetSceneMembershipResponse",
            conformance: "M", direction: "response",
            details: "The GetSceneMembershipResponse command SHALL have the following data " +
                     "fields",
            xref: { document: "cluster", section: "1.4.9.17" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "Capacity",
                    conformance: "M", quality: "X", type: "uint8"
                },

                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneList",
                    conformance: "O", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0040, name: "EnhancedAddSceneResponse",
            conformance: "O", direction: "response",
            details: "The EnhancedAddSceneResponse command allows a server to respond to an " +
                     "EnhancedAddScene command, see EnhancedAddScene Command",
            xref: { document: "cluster", section: "1.4.9.18" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneId",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0041, name: "EnhancedViewSceneResponse",
            conformance: "O", direction: "response",
            details: "The EnhancedViewSceneResponse command allows a server to respond to an" +
                     " EnhancedViewScene command using a finer scene transition time",
            xref: { document: "cluster", section: "1.4.9.19" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneId",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "O", type: "uint16"
                },

                {
                    tag: "datatype", name: "SceneName",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "ExtensionFieldSets",
                    conformance: "O", type: "ExtensionFieldSet"
                }
            ]
        },

        {
            tag: "command", id: 0x0042, name: "CopySceneResponse",
            conformance: "O", direction: "response",
            details: "The CopySceneResponse command allows a server to respond to a " +
                     "CopyScene command. The CopySceneResponse command SHALL have the " +
                     "following data fields",
            xref: { document: "cluster", section: "1.4.9.20" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "GroupIdentifierFrom",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneIdentifierFrom",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "AddSceneResponse",
            conformance: "M", direction: "response",
            details: "The AddSceneResponse command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.4.9.12" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "enum8"
                },

                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "SceneId",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "datatype", name: "ScenesFeature",
            conformance: "M", type: "map32",
            details: "This data type indicates a combination of an identifier and the value " +
                     "of an attribute",
            xref: { document: "cluster", section: "1.4.6.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "AttributeId",
                    access: "RW", conformance: "M, !Zigbee", default: "", type: "attribute-id",
                    details: "This field SHALL be present or not present, for all instances in the " +
                             "Scenes cluster. If this field is not present, then the data type of " +
                             "AttributeValue SHALL be determined by the order and data type defined " +
                             "in the cluster specification. Otherwise the data type of " +
                             "AttributeValue SHALL be the data type of the attribute indicated by " +
                             "AttributeID",
                    xref: { document: "cluster", section: "1.4.6.1.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "SceneNames",
                    access: "RW", conformance: "M", default: "", type: "variable",
                    details: "This is the attribute value as part of an extension field set. See " +
                             "AttributeID to determine the data type for this field",
                    xref: { document: "cluster", section: "1.4.6.1.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "ScenesCopyMode",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "CopyAllScenes",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ExtensionFieldSet",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ClusterId",
                    conformance: "M", type: "cluster-id"
                },

                {
                    tag: "datatype", name: "AttributeValueList",
                    conformance: "M", type: "AttributeValuePair"
                }
            ]
        }
    ]
});
