/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Scenes", id: 0x5, classification: "application", description: "Scenes",
    details: "Attributes and commands for scene configuration and manipulation.",
    xref: { document: "cluster", section: "1.4" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "1.4.4" },

            children: [
                {
                    tag: "datatype", name: "SN", id: 0x0, description: "SceneNames",
                    details: "The ability to store a name for a scene."
                }
            ]
        },

        {
            tag: "attribute", name: "SceneCount", id: 0x0, type: "uint8", access: "R V", conformance: "M",
            details: "The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.",
            xref: { document: "cluster", section: "1.4.7.1" }
        },
        {
            tag: "attribute", name: "CurrentScene", id: 0x1, type: "uint8", access: "R V", conformance: "M",
            details: "The CurrentScene attribute holds the scene identifier of the scene last invoked.",
            xref: { document: "cluster", section: "1.4.7.2" }
        },

        {
            tag: "attribute", name: "CurrentGroup", id: 0x2, type: "group-id", access: "R V", conformance: "M",
            details: "The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene " +
                     "last invoked is not associated with a group.",
            xref: { document: "cluster", section: "1.4.7.3" }
        },

        {
            tag: "attribute", name: "SceneValid", id: 0x3, type: "bool", access: "R V", conformance: "M",
            default: true,
            details: "The SceneValid attribute indicates whether the state of the server corresponds to that associated " +
                     "with the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, " +
                     "FALSE indicates that they are not valid.",
            xref: { document: "cluster", section: "1.4.7.4" }
        },

        {
            tag: "attribute", name: "NameSupport", id: 0x4, type: "map8", access: "R V", conformance: "M",
            constraint: "desc",
            details: "This attribute provides legacy, read-only access to whether the Scene Names feature is supported. " +
                     "The most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other " +
                     "bits SHALL be 0.",
            xref: { document: "cluster", section: "1.4.7.5" },

            children: [
                {
                    tag: "datatype", name: "SceneNames", id: 0x7,
                    description: "The ability to store a name for a scene."
                }
            ]
        },

        {
            tag: "attribute", name: "LastConfiguredBy", id: 0x5, type: "node-id", access: "R V",
            conformance: "O", default: null, quality: "X",
            details: "The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node " +
                     "that last configured the Scene Table.",
            xref: { document: "cluster", section: "1.4.7.6" }
        },

        {
            tag: "command", name: "AddScene", id: 0x0, access: "M", conformance: "M", direction: "request",
            response: "AddSceneResponse",
            details: "The AddScene command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.2" },

            children: [
                { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "SceneName", id: 0x3, type: "string", conformance: "M", constraint: "max 16" },
                {
                    tag: "datatype", name: "ExtensionFieldSets", id: 0x4, type: "list", conformance: "M",
                    children: [ { tag: "datatype", name: "entry", type: "ExtensionFieldSet" } ]
                }
            ]
        },

        {
            tag: "command", name: "ViewScene", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "ViewSceneResponse",
            details: "The ViewScene command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.3" },
            children: [
                { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "RemoveScene", id: 0x2, access: "M", conformance: "M", direction: "request",
            response: "RemoveSceneResponse",
            details: "The RemoveScene command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.4" },
            children: [
                { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "RemoveAllScenes", id: 0x3, access: "M", conformance: "M",
            direction: "request", response: "RemoveAllScenesResponse",
            details: "The RemoveAllScenes command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.5" },
            children: [ { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M" } ]
        },

        {
            tag: "command", name: "StoreScene", id: 0x4, access: "M", conformance: "M", direction: "request",
            response: "StoreSceneResponse",
            details: "The StoreScene command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.6" },
            children: [
                { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "RecallScene", id: 0x5, access: "O", conformance: "M", direction: "request",
            response: "status",
            details: "The RecallScene command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.7" },
            children: [
                { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "O", quality: "X" }
            ]
        },

        {
            tag: "command", name: "GetSceneMembership", id: 0x6, access: "O", conformance: "M",
            direction: "request", response: "GetSceneMembershipResponse",
            details: "The GetSceneMembership command can be used to find an unused scene identifier within a certain " +
                     "group when no commissioning tool is in the network, or for a commissioning tool to get the used " +
                     "scene identifiers within a certain group, for the endpoint that implements this cluster.",
            xref: { document: "cluster", section: "1.4.9.8" },
            children: [ { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M" } ]
        },

        {
            tag: "command", name: "EnhancedAddScene", id: 0x40, access: "M", conformance: "O",
            direction: "request", response: "EnhancedAddSceneResponse",
            details: "The EnhancedAddScene command allows a scene to be added using a finer scene transition time than " +
                     "the AddScene command.",
            xref: { document: "cluster", section: "1.4.9.9" },

            children: [
                { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "SceneName", type: "string", conformance: "M" },
                { tag: "datatype", name: "ExtensionFieldSets", type: "ExtensionFieldSet", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "EnhancedViewScene", id: 0x41, access: "O", conformance: "O",
            direction: "request", response: "EnhancedViewSceneResponse",
            details: "The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time " +
                     "than the ViewScene command.",
            xref: { document: "cluster", section: "1.4.9.10" },
            children: [
                { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "CopyScene", id: 0x42, access: "M", conformance: "O", direction: "request",
            response: "CopySceneResponse",
            details: "The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier " +
                     "pair to another group/scene identifier pair.",
            xref: { document: "cluster", section: "1.4.9.11" },

            children: [
                {
                    tag: "datatype", name: "Mode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                    details: "The Mode field contains information of how the scene copy is to proceed. This field SHALL be " +
                             "formatted as illustrated in Format of the Mode Field of the CopyScene Command.",
                    xref: { document: "cluster", section: "1.4.9.11.1" },
                    children: [
                        { tag: "datatype", name: "CopyAllScenes", id: 0x0 },
                        { tag: "datatype", name: "Reserved", id: 0x1, conformance: "M" }
                    ]
                },

                {
                    tag: "datatype", name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
                    details: "The GroupIdentifierFrom field specifies the identifier of the group from which the scene is to be " +
                             "copied. Together with the SceneIdentifierFrom field, this field uniquely identifies the scene to " +
                             "copy from the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.11.2" }
                },

                {
                    tag: "datatype", name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M",
                    details: "The SceneIdentifierFrom field specifies the identifier of the scene from which the scene is to be " +
                             "copied. Together with the GroupIdentifierFrom field, this field uniquely identifies the scene to " +
                             "copy from the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.11.3" }
                },

                {
                    tag: "datatype", name: "GroupIdentifierTo", id: 0x3, type: "group-id", conformance: "M",
                    details: "The GroupIdentifierTo field specifies the identifier of the group to which the scene is to be " +
                             "copied. Together with the SceneIdentifierTo field, this field uniquely identifies the scene to copy " +
                             "to the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.11.4" }
                },

                {
                    tag: "datatype", name: "SceneIdentifierTo", id: 0x4, type: "uint8", conformance: "M",
                    details: "The SceneIdentifierTo field specifies the identifier of the scene to which the scene is to be " +
                             "copied. Together with the GroupIdentifierTo field, this field uniquely identifies the scene to copy " +
                             "to the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.11.5" }
                }
            ]
        },

        {
            tag: "command", name: "AddSceneResponse", id: 0x0, conformance: "M", direction: "response",
            details: "The AddSceneResponse command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.12" },
            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x2, type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "ViewSceneResponse", id: 0x1, conformance: "M", direction: "response",
            details: "The ViewSceneResponse command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.13" },

            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x2, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "TransitionTime", id: 0x3, type: "uint16", conformance: "desc" },
                {
                    tag: "datatype", name: "SceneName", id: 0x4, type: "string", conformance: "desc",
                    constraint: "max 16"
                },
                {
                    tag: "datatype", name: "ExtensionFieldSets", id: 0x5, type: "list", conformance: "desc",
                    children: [ { tag: "datatype", name: "entry", type: "ExtensionFieldSet" } ]
                }
            ]
        },

        {
            tag: "command", name: "RemoveSceneResponse", id: 0x2, conformance: "M", direction: "response",
            details: "The RemoveSceneResponse command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.14" },
            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x2, type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "RemoveAllScenesResponse", id: 0x3, conformance: "M", direction: "response",
            details: "The RemoveAllScenesResponse command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.15" },
            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "StoreSceneResponse", id: 0x4, conformance: "M", direction: "response",
            details: "The StoreSceneResponse command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.16" },
            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", id: 0x2, type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "GetSceneMembershipResponse", id: 0x6, conformance: "M",
            direction: "response",
            details: "The GetSceneMembershipResponse command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.17" },

            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "Capacity", id: 0x1, type: "uint8", conformance: "M", quality: "X" },
                { tag: "datatype", name: "GroupId", id: 0x2, type: "group-id", conformance: "M" },
                {
                    tag: "datatype", name: "SceneList", id: 0x3, type: "list", conformance: "O",
                    children: [ { tag: "datatype", name: "entry", type: "uint8" } ]
                }
            ]
        },

        {
            tag: "command", name: "EnhancedAddSceneResponse", id: 0x40, conformance: "O", direction: "response",
            details: "The EnhancedAddSceneResponse command allows a server to respond to an EnhancedAddScene command, see " +
                     "EnhancedAddScene Command.",
            xref: { document: "cluster", section: "1.4.9.18" },
            children: [
                { tag: "datatype", name: "Status", type: "enum8", conformance: "M" },
                { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "EnhancedViewSceneResponse", id: 0x41, conformance: "O",
            direction: "response",
            details: "The EnhancedViewSceneResponse command allows a server to respond to an EnhancedViewScene command " +
                     "using a finer scene transition time.",
            xref: { document: "cluster", section: "1.4.9.19" },

            children: [
                { tag: "datatype", name: "Status", type: "enum8", conformance: "M" },
                { tag: "datatype", name: "GroupId", type: "group-id", conformance: "M" },
                { tag: "datatype", name: "SceneId", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "TransitionTime", type: "uint16", conformance: "O" },
                { tag: "datatype", name: "SceneName", type: "string", conformance: "O" },
                { tag: "datatype", name: "ExtensionFieldSets", type: "ExtensionFieldSet", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "CopySceneResponse", id: 0x42, conformance: "O", direction: "response",
            details: "The CopySceneResponse command allows a server to respond to a CopyScene command. The " +
                     "CopySceneResponse command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.4.9.20" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                    details: "The Status field contains the status of the copy scene attempt. This field SHALL be set to one of " +
                             "the non-reserved values listed in Values of the Status Field of the CopySceneResponse Command.",
                    xref: { document: "cluster", section: "1.4.9.20.1" }
                },

                {
                    tag: "datatype", name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
                    details: "The GroupIdentifierFrom field specifies the identifier of the group from which the scene was " +
                             "copied, as specified in the CopyScene command. Together with the SceneIdentifierFrom field, this " +
                             "field uniquely identifies the scene that was copied from the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.20.2" }
                },

                {
                    tag: "datatype", name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M",
                    details: "The SceneIdentifierFrom field is specifies the identifier of the scene from which the scene was " +
                             "copied, as specified in the CopyScene command. Together with the GroupIdentifierFrom field, this " +
                             "field uniquely identifies the scene that was copied from the Scene Table.",
                    xref: { document: "cluster", section: "1.4.9.20.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "AttributeValuePair", type: "struct", conformance: "M",
            details: "This data type indicates a combination of an identifier and the value of an attribute.",
            xref: { document: "cluster", section: "1.4.6.1" },

            children: [
                {
                    tag: "datatype", name: "AttributeId", id: 0x0, type: "attrib-id", access: "RW",
                    conformance: "Matter, !Zigbee",
                    details: "This field SHALL be present or not present, for all instances in the Scenes cluster. If this field " +
                             "is not present, then the data type of AttributeValue SHALL be determined by the order and data type " +
                             "defined in the cluster specification. Otherwise the data type of AttributeValue SHALL be the data " +
                             "type of the attribute indicated by AttributeID.",
                    xref: { document: "cluster", section: "1.4.6.1.1" }
                },

                {
                    tag: "datatype", name: "AttributeValue", id: 0x1, type: "any", access: "RW", conformance: "M",
                    details: "This is the attribute value as part of an extension field set. See AttributeID to determine the " +
                             "data type for this field.",
                    xref: { document: "cluster", section: "1.4.6.1.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "ExtensionFieldSet", type: "struct", conformance: "M",
            details: "This data type indicates for a given cluster a set of attributes and their values. Only attributes " +
                     "which have the \"S\" designation in the Quality column of the cluster specification shall be used in " +
                     "the AttributeValueList field.",
            xref: { document: "cluster", section: "1.4.6.2" },

            children: [
                { tag: "datatype", name: "ClusterId", id: 0x0, type: "cluster-id", access: "RW", conformance: "M" },
                {
                    tag: "datatype", name: "AttributeValueList", id: 0x1, type: "list", access: "RW", conformance: "M",
                    children: [ { tag: "datatype", name: "entry", type: "AttributeValuePair" } ]
                }
            ]
        }
    ]
});