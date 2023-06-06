/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x0005, name: "Scenes",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "SCENENAMES",
                    default: 0, description: "The ability to store a name for a scene.",
                    xref: { section: "1.4.4", document: "cluster", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "SceneCount", base: "uint8",
            access: "R V", conformance: "M", default: 0,
            details: "The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.",
            xref: { section: "1.4.7.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentScene", base: "uint8",
            access: "R V", conformance: "M", default: 0,
            details: "The CurrentScene attribute holds the scene identifier of the scene last invoked.",
            xref: { section: "1.4.7.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentGroup", base: "group-id",
            access: "R V", conformance: "M", default: "0",
            details: "The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last invoked is not associated with a group.",
            xref: { section: "1.4.7.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "SceneValid", base: "bool",
            access: "R V", conformance: "M", default: {},
            details: "The SceneValid attribute indicates whether the state of the server corresponds to that associated with the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE indicates that they are not valid.",
            xref: { section: "1.4.7.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "NameSupport", base: "map8",
            access: "R V", conformance: "M", constraint: "desc", default: 0,
            details: "This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other bits SHALL be 0.",
            xref: { section: "1.4.7.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "LastConfiguredBy", base: "node-id",
            access: "R V", conformance: "O", constraint: "-", default: "null", quality: "X",
            details: "The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that last configured the Scene Table.",
            xref: { section: "1.4.7.6", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "AddScene",
            access: "M", conformance: "M", direction: "request", response: "AddSceneResponse",
            details: "The AddScene command SHALL have the following data fields:",
            xref: { section: "1.4.9.2", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "ViewScene",
            access: "O", conformance: "M", direction: "request", response: "ViewSceneResponse",
            details: "The ViewScene command SHALL have the following data fields:",
            xref: { section: "1.4.9.3", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "RemoveScene",
            access: "M", conformance: "M", direction: "request", response: "RemoveSceneResponse",
            details: "The RemoveScene command SHALL have the following data fields:",
            xref: { section: "1.4.9.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenes",
            access: "M", conformance: "M", direction: "request", response: "RemoveAllScenesResponse",
            details: "The RemoveAllScenes command SHALL have the following data fields:",
            xref: { section: "1.4.9.5", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "StoreScene",
            access: "M", conformance: "M", direction: "request", response: "StoreSceneResponse",
            details: "The StoreScene command SHALL have the following data fields:",
            xref: { section: "1.4.9.6", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "RecallScene",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "The RecallScene command SHALL have the following data fields:",
            xref: { section: "1.4.9.7", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembership",
            access: "O", conformance: "M", direction: "request", response: "GetSceneMembershipResponse",
            details: "The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a certain group, for the endpoint that implements this cluster.",
            xref: { section: "1.4.9.8", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddScene",
            access: "M", conformance: "O", direction: "request", response: "EnhancedAddSceneResponse",
            details: "The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the AddScene command.",
            xref: { section: "1.4.9.9", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewScene",
            access: "O", conformance: "O", direction: "request", response: "EnhancedViewSceneResponse",
            details: "The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than the ViewScene command.",
            xref: { section: "1.4.9.10", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0042, name: "CopyScene",
            access: "M", conformance: "O", direction: "request", response: "CopySceneResponse",
            details: "The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to another group/scene identifier pair.",
            xref: { section: "1.4.9.11", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "AddSceneResponse",
            conformance: "M", direction: "response",
            details: "The AddSceneResponse command SHALL have the following data fields:",
            xref: { section: "1.4.9.12", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "ViewSceneResponse",
            conformance: "M", direction: "response",
            details: "The ViewSceneResponse command SHALL have the following data fields:",
            xref: { section: "1.4.9.13", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "RemoveSceneResponse",
            conformance: "M", direction: "response",
            details: "The RemoveSceneResponse command SHALL have the following data fields:",
            xref: { section: "1.4.9.14", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "RemoveAllScenesResponse",
            conformance: "M", direction: "response",
            details: "The RemoveAllScenesResponse command SHALL have the following data fields:",
            xref: { section: "1.4.9.15", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "StoreSceneResponse",
            conformance: "M", direction: "response",
            details: "The StoreSceneResponse command SHALL have the following data fields:",
            xref: { section: "1.4.9.16", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0006, name: "GetSceneMembershipResponse",
            conformance: "M", direction: "response",
            details: "The GetSceneMembershipResponse command SHALL have the following data fields:",
            xref: { section: "1.4.9.17", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedAddSceneResponse",
            conformance: "O", direction: "response",
            details: "The EnhancedAddSceneResponse command allows a server to respond to an EnhancedAddScene command, see EnhancedAddScene Command.",
            xref: { section: "1.4.9.18", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedViewSceneResponse",
            conformance: "O", direction: "response",
            details: "The EnhancedViewSceneResponse command allows a server to respond to an EnhancedViewScene command using a finer scene transition time.",
            xref: { section: "1.4.9.19", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0042, name: "CopySceneResponse",
            conformance: "O", direction: "response",
            details: "The CopySceneResponse command allows a server to respond to a CopyScene command. The CopySceneResponse command SHALL have the following data fields:",
            xref: { section: "1.4.9.20", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "AttributeValuePair", base: "struct",
            details: "This data type indicates a combination of an identifier and the value of an attribute.",
            xref: { section: "1.4.6.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "AttributeId", base: "attribute-id",
                    access: "RW", conformance: "Matter!Zigbee", default: "",
                    details: "This field SHALL be present or not present, for all instances in the Scenes cluster. If this field is not present, then the data type of AttributeValue SHALL be determined by the order and data type defined in the cluster specification. Otherwise the data type of AttributeValue SHALL be the data type of the attribute indicated by AttributeID.",
                    xref: { section: "1.4.6.1.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "AttributeValue", base: "variable",
                    access: "RW", conformance: "M", constraint: "", default: "",
                    details: "This is the attribute value as part of an extension field set. See AttributeID to determine the data type for this field.",
                    xref: { section: "1.4.6.1.2", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}))
