/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterElement } from "../src/model/index.js";

export const SpecMatter: MatterElement = {
    tag: "matter", name: "SpecMatter",
    children: [
        {
            tag: "cluster", id: 0x0003, name: "Identify",
            classification: "endpoint",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "IdentifyTime",
                    access: "RW VO", conformance: "M", default: 0, type: "uint16",
                    details: "This attribute specifies the remaining length of time, in seconds, " +
                             "that the endpoint will continue to identify itself",
                    xref: { document: "cluster", section: "1.2.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "IdentifyType",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, type: "enum8",
                    details: "This attribute specifies how the identification state is presented to " +
                             "the user. This field SHALL contain one of the values listed below",
                    xref: { document: "cluster", section: "1.2.5.2" }
                },

                {
                    tag: "command", id: 0x0000, name: "Identify",
                    access: "M", conformance: "M", direction: "request", response: "status",
                    details: "This command starts or stops the receiving device identifying itself. " +
                             "This command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.2.6.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "IdentifyQuery",
                    access: "M", conformance: "QRY", direction: "request", response: "IdentifyQueryResponse",
                    details: "This command allows the sending device to request the target or " +
                             "targets to respond if they are currently identifying themselves",
                    xref: { document: "cluster", section: "1.2.6.2" }
                },

                {
                    tag: "command", id: 0x0040, name: "TriggerEffect",
                    access: "M", conformance: "O", direction: "request", response: "status",
                    details: "This command allows the support of feedback to the user, such as a " +
                             "certain light effect. It is used to allow an implementation to provide" +
                             " visual feedback to the user under certain circumstances such as a " +
                             "color light turning green when it has successfully connected to a " +
                             "network. The use of this command and the effects themselves are " +
                             "entirely up to the implementer to use whenever a visual feedback is " +
                             "useful but it is not the same as and does not replace the identify " +
                             "mechanism used during commissioning",
                    xref: { document: "cluster", section: "1.2.6.3" }
                },

                {
                    tag: "command", id: 0x0000, name: "IdentifyQueryResponse",
                    conformance: "QRY", direction: "response",
                    details: "This command is generated in response to receiving an IdentifyQuery " +
                             "command, see IdentifyQuery Command, in the case that the device is " +
                             "currently identifying itself",
                    xref: { document: "cluster", section: "1.2.6.4" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0004, name: "Groups",
            classification: "endpoint",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "NameSupport",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, quality: "F", type: "map8",
                    details: "This attribute provides legacy, read-only access to whether the Group " +
                             "Names feature is supported. The most significant bit, bit 7, SHALL be " +
                             "equal to bit 0 of the FeatureMap attribute. All other bits SHALL be 0",
                    xref: { document: "cluster", section: "1.3.6.1" }
                },

                {
                    tag: "command", id: 0x0000, name: "AddGroup",
                    access: "F M", conformance: "M", direction: "request", response: "AddGroupResponse",
                    details: "The AddGroup command allows a client to add group membership in a " +
                             "particular group for the server endpoint",
                    xref: { document: "cluster", section: "1.3.7.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "ViewGroup",
                    access: "F O", conformance: "M", direction: "request", response: "ViewGroupResponse",
                    details: "The ViewGroup command allows a client to request that the server " +
                             "responds with a ViewGroupResponse command containing the name string " +
                             "for a particular group",
                    xref: { document: "cluster", section: "1.3.7.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "GetGroupMembership",
                    access: "F O", conformance: "M", direction: "request", response: "GetGroupMembershipResponse",
                    details: "The GetGroupMembership command allows a client to inquire about the " +
                             "group membership of the server endpoint, in a number of ways",
                    xref: { document: "cluster", section: "1.3.7.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "RemoveGroup",
                    access: "F M", conformance: "M", direction: "request", response: "RemoveGroupResponse",
                    details: "The RemoveGroup command allows a client to request that the server " +
                             "removes the membership for the server endpoint, if any, in a " +
                             "particular group",
                    xref: { document: "cluster", section: "1.3.7.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "RemoveAllGroups",
                    access: "F M", conformance: "M", direction: "request", response: "status",
                    details: "The RemoveAllGroups command allows a client to direct the server to " +
                             "remove all group associations for the server endpoint",
                    xref: { document: "cluster", section: "1.3.7.5" }
                },

                {
                    tag: "command", id: 0x0005, name: "AddGroupIfIdentifying",
                    access: "F M", conformance: "M", direction: "request", response: "status",
                    details: "The AddGroupIfIdentifying command allows a client to add group " +
                             "membership in a particular group for the server endpoint, on condition" +
                             " that the endpoint is identifying itself. Identifying functionality is" +
                             " controlled using the Identify cluster, (see Identify",
                    xref: { document: "cluster", section: "1.3.7.6" }
                },

                {
                    tag: "command", id: 0x0000, name: "AddGroupResponse",
                    conformance: "M", direction: "response",
                    details: "The AddGroupResponse is sent by the Groups cluster server in response " +
                             "to an AddGroup command. The AddGroupResponse command SHALL have the " +
                             "following data fields",
                    xref: { document: "cluster", section: "1.3.7.7" }
                },

                {
                    tag: "command", id: 0x0001, name: "ViewGroupResponse",
                    conformance: "M", direction: "response",
                    details: "The ViewGroupResponse command is sent by the Groups cluster server in " +
                             "response to a ViewGroup command",
                    xref: { document: "cluster", section: "1.3.7.8" }
                },

                {
                    tag: "command", id: 0x0002, name: "GetGroupMembershipResponse",
                    conformance: "M", direction: "response",
                    details: "The GetGroupMembershipResponse command is sent by the Groups cluster " +
                             "server in response to a GetGroupMembership command",
                    xref: { document: "cluster", section: "1.3.7.9" }
                },

                {
                    tag: "command", id: 0x0003, name: "RemoveGroupResponse",
                    conformance: "M", direction: "response",
                    details: "The RemoveGroupResponse command is generated by the server in response" +
                             " to the receipt of a RemoveGroup command",
                    xref: { document: "cluster", section: "1.3.7.10" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0005, name: "Scenes",
            classification: "application",
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
                    tag: "attribute", id: 0x0004, name: "NameSupport",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, type: "map8",
                    details: "This attribute provides legacy, read-only access to whether the Scene " +
                             "Names feature is supported. The most significant bit, bit 7, SHALL be " +
                             "equal to bit 0 of the FeatureMap attribute. All other bits SHALL be 0",
                    xref: { document: "cluster", section: "1.4.7.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "LastConfiguredBy",
                    access: "R V", conformance: "O", constraint: "", default: "null", quality: "X", type: "node-id",
                    details: "The LastConfiguredBy attribute holds the Node ID (the IEEE address in " +
                             "case of Zigbee) of the node that last configured the Scene Table",
                    xref: { document: "cluster", section: "1.4.7.6" }
                },

                {
                    tag: "command", id: 0x0000, name: "AddScene",
                    access: "M", conformance: "M", direction: "request", response: "AddSceneResponse",
                    details: "The AddScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.2" }
                },

                {
                    tag: "command", id: 0x0001, name: "ViewScene",
                    access: "O", conformance: "M", direction: "request", response: "ViewSceneResponse",
                    details: "The ViewScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.3" }
                },

                {
                    tag: "command", id: 0x0002, name: "RemoveScene",
                    access: "M", conformance: "M", direction: "request", response: "RemoveSceneResponse",
                    details: "The RemoveScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.4" }
                },

                {
                    tag: "command", id: 0x0003, name: "RemoveAllScenes",
                    access: "M", conformance: "M", direction: "request", response: "RemoveAllScenesResponse",
                    details: "The RemoveAllScenes command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.5" }
                },

                {
                    tag: "command", id: 0x0004, name: "StoreScene",
                    access: "M", conformance: "M", direction: "request", response: "StoreSceneResponse",
                    details: "The StoreScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.6" }
                },

                {
                    tag: "command", id: 0x0005, name: "RecallScene",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The RecallScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.7" }
                },

                {
                    tag: "command", id: 0x0006, name: "GetSceneMembership",
                    access: "O", conformance: "M", direction: "request", response: "GetSceneMembershipResponse",
                    details: "The GetSceneMembership command can be used to find an unused scene " +
                             "identifier within a certain group when no commissioning tool is in the" +
                             " network, or for a commissioning tool to get the used scene " +
                             "identifiers within a certain group, for the endpoint that implements " +
                             "this cluster",
                    xref: { document: "cluster", section: "1.4.9.8" }
                },

                {
                    tag: "command", id: 0x0040, name: "EnhancedAddScene",
                    access: "M", conformance: "O", direction: "request", response: "EnhancedAddSceneResponse",
                    details: "The EnhancedAddScene command allows a scene to be added using a finer " +
                             "scene transition time than the AddScene command",
                    xref: { document: "cluster", section: "1.4.9.9" }
                },

                {
                    tag: "command", id: 0x0041, name: "EnhancedViewScene",
                    access: "O", conformance: "O", direction: "request", response: "EnhancedViewSceneResponse",
                    details: "The EnhancedViewScene command allows a scene to be retrieved using a " +
                             "finer scene transition time than the ViewScene command",
                    xref: { document: "cluster", section: "1.4.9.10" }
                },

                {
                    tag: "command", id: 0x0042, name: "CopyScene",
                    access: "M", conformance: "O", direction: "request", response: "CopySceneResponse",
                    details: "The CopyScene command allows a client to efficiently copy scenes from " +
                             "one group/scene identifier pair to another group/scene identifier pair",
                    xref: { document: "cluster", section: "1.4.9.11" }
                },

                {
                    tag: "command", id: 0x0000, name: "AddSceneResponse",
                    conformance: "M", direction: "response",
                    details: "The AddSceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.12" }
                },

                {
                    tag: "command", id: 0x0001, name: "ViewSceneResponse",
                    conformance: "M", direction: "response",
                    details: "The ViewSceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.13" }
                },

                {
                    tag: "command", id: 0x0002, name: "RemoveSceneResponse",
                    conformance: "M", direction: "response",
                    details: "The RemoveSceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.14" }
                },

                {
                    tag: "command", id: 0x0003, name: "RemoveAllScenesResponse",
                    conformance: "M", direction: "response",
                    details: "The RemoveAllScenesResponse command SHALL have the following data " +
                             "fields",
                    xref: { document: "cluster", section: "1.4.9.15" }
                },

                {
                    tag: "command", id: 0x0004, name: "StoreSceneResponse",
                    conformance: "M", direction: "response",
                    details: "The StoreSceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.16" }
                },

                {
                    tag: "command", id: 0x0006, name: "GetSceneMembershipResponse",
                    conformance: "M", direction: "response",
                    details: "The GetSceneMembershipResponse command SHALL have the following data " +
                             "fields",
                    xref: { document: "cluster", section: "1.4.9.17" }
                },

                {
                    tag: "command", id: 0x0040, name: "EnhancedAddSceneResponse",
                    conformance: "O", direction: "response",
                    details: "The EnhancedAddSceneResponse command allows a server to respond to an " +
                             "EnhancedAddScene command, see EnhancedAddScene Command",
                    xref: { document: "cluster", section: "1.4.9.18" }
                },

                {
                    tag: "command", id: 0x0041, name: "EnhancedViewSceneResponse",
                    conformance: "O", direction: "response",
                    details: "The EnhancedViewSceneResponse command allows a server to respond to an" +
                             " EnhancedViewScene command using a finer scene transition time",
                    xref: { document: "cluster", section: "1.4.9.19" }
                },

                {
                    tag: "command", id: 0x0042, name: "CopySceneResponse",
                    conformance: "O", direction: "response",
                    details: "The CopySceneResponse command allows a server to respond to a " +
                             "CopyScene command. The CopySceneResponse command SHALL have the " +
                             "following data fields",
                    xref: { document: "cluster", section: "1.4.9.20" }
                },

                {
                    tag: "datatype", name: "AttributeValuePair",
                    type: "struct",
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
                            tag: "datatype", id: 0x0001, name: "AttributeValue",
                            access: "RW", conformance: "M", default: "", type: "variable",
                            details: "This is the attribute value as part of an extension field set. See " +
                                     "AttributeID to determine the data type for this field",
                            xref: { document: "cluster", section: "1.4.6.1.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0006, name: "OnOff",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "OnOff",
                    access: "R V", conformance: "M", default: true, quality: "N S", type: "bool",
                    details: "The OnOff attribute indicates whether the device type implemented on " +
                             "the endpoint is turned off or turned on, in these cases the value of " +
                             "the OnOff attribute equals FALSE, or TRUE respectively",
                    xref: { document: "cluster", section: "1.5.6.1" }
                },

                {
                    tag: "attribute", id: 0x4000, name: "GlobalSceneControl",
                    access: "R V", conformance: "LT", default: true, type: "bool",
                    details: "In order to support the use case where the user gets back the last " +
                             "setting of a set of devices (e.g. level settings for lights), a global" +
                             " scene is introduced which is stored when the devices are turned off " +
                             "and recalled when the devices are turned on. The global scene is " +
                             "defined as the scene that is stored with group identifier 0 and scene " +
                             "identifier 0",
                    xref: { document: "cluster", section: "1.5.6.2" }
                },

                {
                    tag: "attribute", id: 0x4001, name: "OnTime",
                    access: "RW VO", conformance: "LT", default: 0, quality: "X", type: "uint16",
                    details: "The OnTime attribute specifies the length of time (in 1/10ths second) " +
                             "that the ‘On’ state SHALL be maintained before automatically " +
                             "transitioning to the ‘Off’ state when using the OnWithTimedOff command" +
                             ". This attribute can be written at any time, but writing a value only " +
                             "has effect when in the ‘Timed On’ state. See OnWithTimedOff Command " +
                             "for more details",
                    xref: { document: "cluster", section: "1.5.6.3" }
                },

                {
                    tag: "attribute", id: 0x4002, name: "OffWaitTime",
                    access: "RW VO", conformance: "LT", default: 0, quality: "X", type: "uint16",
                    details: "The OffWaitTime attribute specifies the length of time (in 1/10ths " +
                             "second) that the ‘Off’ state SHALL be guarded to prevent another " +
                             "OnWithTimedOff command turning the server back to its ‘On’ state (e.g" +
                             "., when leaving a room, the lights are turned off but an occupancy " +
                             "sensor detects the leaving person and attempts to turn the lights back" +
                             " on). This attribute can be written at any time, but writing a value " +
                             "only has an effect when in the ‘Timed On’ state followed by a " +
                             "transition to the ‘Delayed Off' state, or in the ‘Delayed Off’ state. " +
                             "See OnWithTimedOff Command for more details",
                    xref: { document: "cluster", section: "1.5.6.4" }
                },

                {
                    tag: "attribute", id: 0x4003, name: "StartUpOnOff",
                    access: "RW VM", conformance: "LT", constraint: "desc", default: "MS", quality: "X N", type: "StartUpOnOffEnum",
                    details: "The StartUpOnOff attribute SHALL define the desired startup behavior " +
                             "of a device when it is supplied with power and this state SHALL be " +
                             "reflected in the OnOff attribute. If the value is null, the OnOff " +
                             "attribute is set to its previous value. Otherwise, the behavior is " +
                             "defined in the table defining StartUpOnOffEnum",
                    xref: { document: "cluster", section: "1.5.6.5" }
                },

                {
                    tag: "command", id: 0x0000, name: "Off",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "This command does not have any data fields",
                    xref: { document: "cluster", section: "1.5.7.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "On",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "This command does not have any data fields",
                    xref: { document: "cluster", section: "1.5.7.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "Toggle",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "This command does not have any data fields",
                    xref: { document: "cluster", section: "1.5.7.3" }
                },

                {
                    tag: "command", id: 0x0040, name: "OffWithEffect",
                    access: "O", conformance: "LT", direction: "request", response: "status",
                    details: "The OffWithEffect command allows devices to be turned off using " +
                             "enhanced ways of fading. The OffWithEffect command SHALL have the " +
                             "following data fields",
                    xref: { document: "cluster", section: "1.5.7.4" }
                },

                {
                    tag: "command", id: 0x0041, name: "OnWithRecallGlobalScene",
                    access: "O", conformance: "LT", direction: "request", response: "status",
                    details: "The OnWithRecallGlobalScene command allows the recall of the settings " +
                             "when the device was turned off",
                    xref: { document: "cluster", section: "1.5.7.5" }
                },

                {
                    tag: "command", id: 0x0042, name: "OnWithTimedOff",
                    access: "O", conformance: "LT", direction: "request", response: "status",
                    details: "The OnWithTimedOff command allows devices to be turned on for a " +
                             "specific duration with a guarded off duration so that SHOULD the " +
                             "device be subsequently turned off, further OnWithTimedOff commands, " +
                             "received during this time, are prevented from turning the devices back" +
                             " on. Further",
                    xref: { document: "cluster", section: "1.5.7.6" }
                },

                {
                    tag: "datatype", name: "StartUpOnOffEnum",
                    type: "enum8",
                    details: "The data type StartUpOnOffEnum is derived from enum8. The values of " +
                             "the StartUpOnOffEnum data type are listed below",
                    xref: { document: "cluster", section: "1.5.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Off",
                            conformance: "M", description: "Set the OnOff attribute to FALSE",
                            xref: { document: "cluster", section: "1.5.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "On",
                            conformance: "M", description: "Set the OnOff attribute to TRUE",
                            xref: { document: "cluster", section: "1.5.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Toggle",
                            conformance: "M", description: "If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).",
                            xref: { document: "cluster", section: "1.5.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0008, name: "LevelControlforLighting",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "CurrentLevel",
                    access: "R V", conformance: "M", constraint: "MinLevel to MaxLevel", default: "null", quality: "X N S", type: "uint8",
                    details: "The CurrentLevel attribute represents the current level of this device" +
                             ". The meaning of 'level' is device dependent",
                    xref: { document: "cluster", section: "1.6.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "RemainingTime",
                    access: "R V", conformance: "LT", default: 0, type: "uint16",
                    details: "The RemainingTime attribute represents the time remaining until the " +
                             "current command is complete - it is specified in 1/10ths of a second",
                    xref: { document: "cluster", section: "1.6.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MinLevel",
                    access: "R V", conformance: "O", default: "!LT:0LT:1", type: "uint8",
                    details: "The MinLevel attribute indicates the minimum value of CurrentLevel " +
                             "that is capable of being assigned",
                    xref: { document: "cluster", section: "1.6.5.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "MaxLevel",
                    access: "R V", conformance: "O", constraint: "MinLevel to 254", default: 254, type: "uint8",
                    details: "The MaxLevel attribute indicates the maximum value of CurrentLevel " +
                             "that is capable of being assigned",
                    xref: { document: "cluster", section: "1.6.5.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "CurrentFrequency",
                    access: "R V", conformance: "FQ", constraint: "MinFrequency to MaxFrequency", default: 0, quality: "S P", type: "uint16",
                    details: "The CurrentFrequency attribute represents the frequency at which the " +
                             "device is at CurrentLevel. A CurrentFrequency of 0 is unknown",
                    xref: { document: "cluster", section: "1.6.5.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "MinFrequency",
                    access: "R V", conformance: "FQ", constraint: "0 to MaxFrequency", default: 0, type: "uint16",
                    details: "The MinFrequency attribute indicates the minimum value of " +
                             "CurrentFrequency that is capable of being assigned. MinFrequency SHALL" +
                             " be less than or equal to MaxFrequency. A value of 0 indicates " +
                             "undefined",
                    xref: { document: "cluster", section: "1.6.5.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "MaxFrequency",
                    access: "R V", conformance: "FQ", constraint: "min MinFrequency", default: 0, type: "uint16",
                    details: "The MaxFrequency attribute indicates the maximum value of " +
                             "CurrentFrequency that is capable of being assigned. MaxFrequency SHALL" +
                             " be greater than or equal to MinFrequency. A value of 0 indicates " +
                             "undefined",
                    xref: { document: "cluster", section: "1.6.5.7" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "OnOffTransitionTime",
                    access: "RW VO", conformance: "O", default: 0, type: "uint16",
                    details: "The OnOffTransitionTime attribute represents the time taken to move to" +
                             " or from the target level when On or Off commands are received by an " +
                             "On/Off cluster on the same endpoint. It is specified in 1/10ths of a " +
                             "second",
                    xref: { document: "cluster", section: "1.6.5.9" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "OnLevel",
                    access: "RW VO", conformance: "M", constraint: "MinLevel to MaxLevel", default: "null", quality: "X", type: "uint8",
                    details: "The OnLevel attribute determines the value that the CurrentLevel " +
                             "attribute is set to when the OnOff attribute of an On/Off cluster on " +
                             "the same endpoint is set to TRUE, as a result of processing an On/Off " +
                             "cluster command. If the OnLevel attribute is not implemented, or is " +
                             "set to the null value, it has no effect. For more details see Effect " +
                             "of On/Off Commands on the CurrentLevel Attribute",
                    xref: { document: "cluster", section: "1.6.5.10" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "OnTransitionTime",
                    access: "RW VO", conformance: "O", default: "null", quality: "X", type: "uint16",
                    details: "The OnTransitionTime attribute represents the time taken to move the " +
                             "current level from the minimum level to the maximum level when an On " +
                             "command is received by an On/Off cluster on the same endpoint. It is " +
                             "specified in 10ths of a second. If this attribute is not implemented, " +
                             "or contains a null value, the OnOffTransitionTime will be used instead",
                    xref: { document: "cluster", section: "1.6.5.11" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "OffTransitionTime",
                    access: "RW VO", conformance: "O", default: "null", quality: "X", type: "uint16",
                    details: "The OffTransitionTime attribute represents the time taken to move the " +
                             "current level from the maximum level to the minimum level when an Off " +
                             "command is received by an On/Off cluster on the same endpoint. It is " +
                             "specified in 10ths of a second. If this attribute is not implemented, " +
                             "or contains a null value, the OnOffTransitionTime will be used instead",
                    xref: { document: "cluster", section: "1.6.5.12" }
                },

                {
                    tag: "attribute", id: 0x0014, name: "DefaultMoveRate",
                    access: "RW VO", conformance: "O", default: "MS", quality: "X", type: "uint8",
                    details: "The DefaultMoveRate attribute determines the movement rate, in units " +
                             "per second, when a Move command is received with a null value Rate " +
                             "parameter",
                    xref: { document: "cluster", section: "1.6.5.13" }
                },

                {
                    tag: "attribute", id: 0x000f, name: "Options",
                    access: "RW VO", conformance: "M", constraint: "desc", default: 0, type: "map8",
                    details: "The Options attribute is meant to be changed only during commissioning" +
                             ". The Options attribute is a bitmap that determines the default " +
                             "behavior of some cluster commands. Each command that is dependent on " +
                             "the Options attribute SHALL first construct a temporary Options bitmap" +
                             " that is in effect during the command processing. The temporary " +
                             "Options bitmap has the same format and meaning as the Options " +
                             "attribute, but includes any bits that may be overridden by command " +
                             "fields",
                    xref: { document: "cluster", section: "1.6.5.8" }
                },

                {
                    tag: "attribute", id: 0x4000, name: "StartUpCurrentLevel",
                    access: "RW VM", conformance: "LT", constraint: "desc", default: "MS", quality: "X N", type: "uint8",
                    details: "The StartUpCurrentLevel attribute SHALL define the desired startup " +
                             "level for a device when it is supplied with power and this level SHALL" +
                             " be reflected in the CurrentLevel attribute. The values of the " +
                             "StartUpCurrentLevel attribute are listed below",
                    xref: { document: "cluster", section: "1.6.5.14" }
                },

                {
                    tag: "command", id: 0x0000, name: "MoveToLevel",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The MoveToLevel command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "Move",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The Move command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "Step",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The Step command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "Stop",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The Stop command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "MoveToLevelWithOnOff",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", id: 0x0005, name: "MoveWithOnOff",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", id: 0x0006, name: "StepWithOnOff",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", id: 0x0007, name: "StopWithOnOff",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", id: 0x0008, name: "MoveToClosestFrequency",
                    access: "O", conformance: "FQ", direction: "request", response: "status",
                    details: "The MoveToClosestFrequency command SHALL have the following data " +
                             "fields",
                    xref: { document: "cluster", section: "1.6.6.5" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x001c, name: "PulseWidthModulation",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "CurrentLevel",
                    access: "R V", conformance: "M", constraint: "MinLevel to MaxLevel", default: "null", quality: "X N S", type: "uint8",
                    details: "The CurrentLevel attribute represents the current level of this device" +
                             ". The meaning of 'level' is device dependent",
                    xref: { document: "cluster", section: "1.6.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "RemainingTime",
                    access: "R V", conformance: "LT", default: 0, type: "uint16",
                    details: "The RemainingTime attribute represents the time remaining until the " +
                             "current command is complete - it is specified in 1/10ths of a second",
                    xref: { document: "cluster", section: "1.6.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MinLevel",
                    access: "R V", conformance: "O", default: "!LT:0LT:1", type: "uint8",
                    details: "The MinLevel attribute indicates the minimum value of CurrentLevel " +
                             "that is capable of being assigned",
                    xref: { document: "cluster", section: "1.6.5.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "MaxLevel",
                    access: "R V", conformance: "O", constraint: "MinLevel to 254", default: 254, type: "uint8",
                    details: "The MaxLevel attribute indicates the maximum value of CurrentLevel " +
                             "that is capable of being assigned",
                    xref: { document: "cluster", section: "1.6.5.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "CurrentFrequency",
                    access: "R V", conformance: "FQ", constraint: "MinFrequency to MaxFrequency", default: 0, quality: "S P", type: "uint16",
                    details: "The CurrentFrequency attribute represents the frequency at which the " +
                             "device is at CurrentLevel. A CurrentFrequency of 0 is unknown",
                    xref: { document: "cluster", section: "1.6.5.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "MinFrequency",
                    access: "R V", conformance: "FQ", constraint: "0 to MaxFrequency", default: 0, type: "uint16",
                    details: "The MinFrequency attribute indicates the minimum value of " +
                             "CurrentFrequency that is capable of being assigned. MinFrequency SHALL" +
                             " be less than or equal to MaxFrequency. A value of 0 indicates " +
                             "undefined",
                    xref: { document: "cluster", section: "1.6.5.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "MaxFrequency",
                    access: "R V", conformance: "FQ", constraint: "min MinFrequency", default: 0, type: "uint16",
                    details: "The MaxFrequency attribute indicates the maximum value of " +
                             "CurrentFrequency that is capable of being assigned. MaxFrequency SHALL" +
                             " be greater than or equal to MinFrequency. A value of 0 indicates " +
                             "undefined",
                    xref: { document: "cluster", section: "1.6.5.7" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "OnOffTransitionTime",
                    access: "RW VO", conformance: "O", default: 0, type: "uint16",
                    details: "The OnOffTransitionTime attribute represents the time taken to move to" +
                             " or from the target level when On or Off commands are received by an " +
                             "On/Off cluster on the same endpoint. It is specified in 1/10ths of a " +
                             "second",
                    xref: { document: "cluster", section: "1.6.5.9" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "OnLevel",
                    access: "RW VO", conformance: "M", constraint: "MinLevel to MaxLevel", default: "null", quality: "X", type: "uint8",
                    details: "The OnLevel attribute determines the value that the CurrentLevel " +
                             "attribute is set to when the OnOff attribute of an On/Off cluster on " +
                             "the same endpoint is set to TRUE, as a result of processing an On/Off " +
                             "cluster command. If the OnLevel attribute is not implemented, or is " +
                             "set to the null value, it has no effect. For more details see Effect " +
                             "of On/Off Commands on the CurrentLevel Attribute",
                    xref: { document: "cluster", section: "1.6.5.10" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "OnTransitionTime",
                    access: "RW VO", conformance: "O", default: "null", quality: "X", type: "uint16",
                    details: "The OnTransitionTime attribute represents the time taken to move the " +
                             "current level from the minimum level to the maximum level when an On " +
                             "command is received by an On/Off cluster on the same endpoint. It is " +
                             "specified in 10ths of a second. If this attribute is not implemented, " +
                             "or contains a null value, the OnOffTransitionTime will be used instead",
                    xref: { document: "cluster", section: "1.6.5.11" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "OffTransitionTime",
                    access: "RW VO", conformance: "O", default: "null", quality: "X", type: "uint16",
                    details: "The OffTransitionTime attribute represents the time taken to move the " +
                             "current level from the maximum level to the minimum level when an Off " +
                             "command is received by an On/Off cluster on the same endpoint. It is " +
                             "specified in 10ths of a second. If this attribute is not implemented, " +
                             "or contains a null value, the OnOffTransitionTime will be used instead",
                    xref: { document: "cluster", section: "1.6.5.12" }
                },

                {
                    tag: "attribute", id: 0x0014, name: "DefaultMoveRate",
                    access: "RW VO", conformance: "O", default: "MS", quality: "X", type: "uint8",
                    details: "The DefaultMoveRate attribute determines the movement rate, in units " +
                             "per second, when a Move command is received with a null value Rate " +
                             "parameter",
                    xref: { document: "cluster", section: "1.6.5.13" }
                },

                {
                    tag: "attribute", id: 0x000f, name: "Options",
                    access: "RW VO", conformance: "M", constraint: "desc", default: 0, type: "map8",
                    details: "The Options attribute is meant to be changed only during commissioning" +
                             ". The Options attribute is a bitmap that determines the default " +
                             "behavior of some cluster commands. Each command that is dependent on " +
                             "the Options attribute SHALL first construct a temporary Options bitmap" +
                             " that is in effect during the command processing. The temporary " +
                             "Options bitmap has the same format and meaning as the Options " +
                             "attribute, but includes any bits that may be overridden by command " +
                             "fields",
                    xref: { document: "cluster", section: "1.6.5.8" }
                },

                {
                    tag: "attribute", id: 0x4000, name: "StartUpCurrentLevel",
                    access: "RW VM", conformance: "LT", constraint: "desc", default: "MS", quality: "X N", type: "uint8",
                    details: "The StartUpCurrentLevel attribute SHALL define the desired startup " +
                             "level for a device when it is supplied with power and this level SHALL" +
                             " be reflected in the CurrentLevel attribute. The values of the " +
                             "StartUpCurrentLevel attribute are listed below",
                    xref: { document: "cluster", section: "1.6.5.14" }
                },

                {
                    tag: "command", id: 0x0000, name: "MoveToLevel",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The MoveToLevel command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "Move",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The Move command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "Step",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The Step command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "Stop",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "The Stop command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "MoveToLevelWithOnOff",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", id: 0x0005, name: "MoveWithOnOff",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", id: 0x0006, name: "StepWithOnOff",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", id: 0x0007, name: "StopWithOnOff",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", id: 0x0008, name: "MoveToClosestFrequency",
                    access: "O", conformance: "FQ", direction: "request", response: "status",
                    details: "The MoveToClosestFrequency command SHALL have the following data " +
                             "fields",
                    xref: { document: "cluster", section: "1.6.6.5" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0045, name: "BooleanState",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "StateValue",
                    access: "R V", conformance: "M", default: false, quality: "P", type: "bool",
                    details: "This represents a Boolean state",
                    xref: { document: "cluster", section: "1.7.4.1" }
                },

                {
                    tag: "event", id: 0x0000, name: "StateChange",
                    access: "V", conformance: "O", priority: "info",
                    details: "This event SHALL be generated when the StateValue attribute changes",
                    xref: { document: "cluster", section: "1.7.5.1" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0050, name: "ModeSelect",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Description",
                    access: "R V", conformance: "M", constraint: "max 64", default: "MS", quality: "F", type: "string",
                    details: "This attribute describes the purpose of the server, in readable text",
                    xref: { document: "cluster", section: "1.8.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "StandardNamespace",
                    access: "R V", conformance: "M", constraint: "desc", default: "null", quality: "X F", type: "enum16",
                    details: "This attribute, when not null, SHALL indicate a single standard " +
                             "namespace for any standard semantic tag value supported in this or any" +
                             " other cluster instance with the same value of this attribute. A null " +
                             "value indicates no standard namespace, and therefore, no standard " +
                             "semantic tags are provided in this cluster instance. Each standard " +
                             "namespace and corresponding values and value meanings SHALL be defined" +
                             " in another document",
                    xref: { document: "cluster", section: "1.8.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "SupportedModes",
                    access: "R V", conformance: "M", constraint: "max 255", default: "MS", quality: "F", type: "list",
                    details: "This attribute is the list of supported modes that may be selected for" +
                             " the CurrentMode attribute. Each item in this list represents a unique" +
                             " mode as indicated by the Mode field of the ModeOptionStruct. Each " +
                             "entry in this list SHALL have a unique value for the Mode field",
                    xref: { document: "cluster", section: "1.8.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ModeOptionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0003, name: "CurrentMode",
                    access: "R V", conformance: "M", constraint: "desc", default: "MS", quality: "N S", type: "uint8",
                    details: "This attribute represents the current mode of the server",
                    xref: { document: "cluster", section: "1.8.5.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "StartUpMode",
                    access: "RW VO", conformance: "O", constraint: "desc", default: "MS", quality: "X N", type: "uint8",
                    details: "The StartUpMode attribute value indicates the desired startup mode for" +
                             " the server when it is supplied with power",
                    xref: { document: "cluster", section: "1.8.5.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "OnMode",
                    access: "RW VO", conformance: "D, EPONOFF", constraint: "desc", default: "null", quality: "X N", type: "uint8",
                    details: "This attribute SHALL indicate the value of CurrentMode that depends on" +
                             " the state of the On/Off cluster on the same endpoint. If this " +
                             "attribute is not present or is set to null, it SHALL NOT have an " +
                             "effect, otherwise the CurrentMode attribute SHALL depend on the OnOff " +
                             "attribute of the On/Off cluster as described in the table below",
                    xref: { document: "cluster", section: "1.8.5.6" }
                },

                {
                    tag: "command", id: 0x0000, name: "ChangeToMode",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "On receipt of this command, if the NewMode field indicates a valid " +
                             "mode transition within the supported list, the server SHALL set the " +
                             "CurrentMode attribute to the NewMode value, otherwise, the",
                    xref: { document: "cluster", section: "1.8.6.1" }
                },

                {
                    tag: "datatype", name: "ModeOptionStruct",
                    type: "struct",
                    details: "This is a struct representing a possible mode of the server",
                    xref: { document: "cluster", section: "1.8.8.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Label",
                            conformance: "M", constraint: "max 64", default: "MS", quality: "F", type: "string",
                            details: "This field is readable text that describes the mode option that can be" +
                                     " used by a client to indicate to the user what this option means. This" +
                                     " field is meant to be readable and understandable by the user",
                            xref: { document: "cluster", section: "1.8.8.1.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Mode",
                            conformance: "M", default: "MS", quality: "F", type: "uint8",
                            details: "The Mode field is used to identify the mode option. The value SHALL be" +
                                     " unique for every item in the SupportedModes attribute",
                            xref: { document: "cluster", section: "1.8.8.1.2" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "SemanticTags",
                            conformance: "M", constraint: "max 64", default: "MS", quality: "F", type: "list",
                            details: "This field is a list of semantic tags that map to the mode option. " +
                                     "This MAY be used by clients to determine the meaning of the mode " +
                                     "option as defined in a standard or manufacturer specific namespace. " +
                                     "Semantic tags can help clients look for options that meet certain " +
                                     "criteria. A semantic tag SHALL be either a standard tag or " +
                                     "manufacturer specific tag as defined in each SemanticTagStruct list " +
                                     "entry",
                            xref: { document: "cluster", section: "1.8.8.1.3" },
                            children: [
                                {
                                    tag: "datatype", name: "entry",
                                    type: "SemanticTagStruct"
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0508, name: "LowPower",
            classification: "application",
            children: [
                {
                    tag: "command", id: 0x0000, name: "Sleep",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "This command shall put the device into low power mode",
                    xref: { document: "cluster", section: "1.9.3.1" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0503, name: "WakeonLan",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MacAddress",
                    access: "R V", conformance: "O", constraint: "desc", default: "", quality: "F", type: "hwadr",
                    details: "This SHALL indicate the current MAC address of the device. Only 48-bit" +
                             " MAC Addresses SHALL be used for this attribute as required by the " +
                             "Wake on LAN protocol",
                    xref: { document: "cluster", section: "1.10.2.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "LinkLocalAddress",
                    access: "R V", conformance: "O", constraint: "desc", default: "", quality: "F", type: "ipv6adr",
                    details: "This SHALL indicate the current link-local address of the device. Only" +
                             " 128-bit IPv6 link-local addresses SHALL be used for this attribute",
                    xref: { document: "cluster", section: "1.10.2.2" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x003b, name: "Switch",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "NumberOfPositions",
                    conformance: "M", constraint: "min 2", default: 2, quality: "F", type: "uint8",
                    details: "This attribute SHALL indicate the maximum number of positions the " +
                             "switch has. Any kind of switch has a minimum of 2 positions. Also see " +
                             "Section 1.11.10, “NumberOfPositions > 2” for the case " +
                             "NumberOfPositions>2",
                    xref: { document: "cluster", section: "1.11.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentPosition",
                    conformance: "M", constraint: "0 to NumberOfPositions1", default: 0, quality: "N", type: "uint8",
                    details: "This attribute SHALL indicate the position of the switch. The valid " +
                             "range is zero to NumberOfPositions-1. CurrentPosition value 0 SHALL be" +
                             " assigned to the default position of the switch: for example the \"open" +
                             "\" state of a rocker switch, or the \"idle\" state of a push button " +
                             "switch",
                    xref: { document: "cluster", section: "1.11.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MultiPressMax",
                    conformance: "M, SM", constraint: "min 2", default: 2, quality: "F", type: "uint8",
                    details: "This attribute SHALL indicate how many consecutive presses can be " +
                             "detected and reported by a momentary switch which supports multi-press" +
                             " (e.g. it will report the value 3 if it can detect single press, " +
                             "double press and triple press, but not quad press and beyond",
                    xref: { document: "cluster", section: "1.11.5.3" }
                },

                {
                    tag: "event", id: 0x0000, name: "SwitchLatched",
                    access: "V", conformance: "LS", priority: "critical",
                    details: "This event SHALL be generated, when the latching switch is moved to a " +
                             "new position. It MAY have been delayed by debouncing within the switch",
                    xref: { document: "cluster", section: "1.11.7.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "InitialPress",
                    access: "V", conformance: "M, S", priority: "critical",
                    details: "This event SHALL be generated, when the momentary switch starts to be " +
                             "pressed (after debouncing",
                    xref: { document: "cluster", section: "1.11.7.2" }
                },

                {
                    tag: "event", id: 0x0002, name: "LongPress",
                    access: "V", conformance: "M, SL", priority: "critical",
                    details: "This event SHALL be generated, when the momentary switch has been " +
                             "pressed for a \"long\" time (this time interval is manufacturer " +
                             "determined (e.g. since it depends on the switch physics",
                    xref: { document: "cluster", section: "1.11.7.3" }
                },

                {
                    tag: "event", id: 0x0003, name: "ShortRelease",
                    access: "V", conformance: "M, SR", priority: "critical",
                    details: "This event SHALL be generated, when the momentary switch has been " +
                             "released (after debouncing",
                    xref: { document: "cluster", section: "1.11.7.4" }
                },

                {
                    tag: "event", id: 0x0004, name: "LongRelease",
                    access: "V", conformance: "M, SL", priority: "critical",
                    details: "This event SHALL be generated, when the momentary switch has been " +
                             "released (after debouncing) and after having been pressed for a long " +
                             "time, i.e. this event SHALL be generated when the switch is released " +
                             "if a LongPress event has been generated since since the previous " +
                             "InitialPress event. Also see Section 1.11.8, “Sequence of generated " +
                             "events",
                    xref: { document: "cluster", section: "1.11.7.5" }
                },

                {
                    tag: "event", id: 0x0005, name: "MultiPressOngoing",
                    access: "V", conformance: "M, SM", priority: "critical",
                    details: "This event SHALL be generated to indicate how many times the momentary" +
                             " switch has been pressed in a multi-press sequence, during that " +
                             "sequence. See Section 1.11.9, “Sequence of events for MultiPress” " +
                             "below",
                    xref: { document: "cluster", section: "1.11.7.6" }
                },

                {
                    tag: "event", id: 0x0006, name: "MultiPressComplete",
                    access: "V", conformance: "M, SM", priority: "critical",
                    details: "This event SHALL be generated to indicate how many times the momentary" +
                             " switch has been pressed in a multi-press sequence, after it has been " +
                             "detected that the sequence has ended. See Section 1.11.9, “Sequence of" +
                             " events for MultiPress” below",
                    xref: { document: "cluster", section: "1.11.7.7" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0400, name: "IlluminanceMeasurement",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MeasuredValue",
                    access: "R V", conformance: "M", constraint: "0, MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P", type: "uint16",
                    details: "The MeasuredValue attribute represents the illuminance in Lux (symbol " +
                             "lx) as follows",
                    xref: { document: "cluster", section: "2.2.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
                    access: "R V", conformance: "M", constraint: "1 to MaxMeasuredValue1", default: 0, quality: "X", type: "uint16",
                    details: "The MinMeasuredValue attribute indicates the minimum value of " +
                             "MeasuredValue that can be measured. A value of null indicates that " +
                             "this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.2.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 65534", default: 0, quality: "X", type: "uint16",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                             "MeasuredValue that can be measured. A value of null indicates that " +
                             "this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.2.5.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "Tolerance",
                    access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.2.5.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "LightSensorType",
                    access: "R V", conformance: "O", default: "null", quality: "X", type: "enum8",
                    details: "The LightSensorType attribute specifies the electronic type of the " +
                             "light sensor. This attribute shall be set to one of the non-reserved " +
                             "values listed in Values of the LightSensorType Attribute",
                    xref: { document: "cluster", section: "2.2.5.5" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0402, name: "TemperatureMeasurement",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Measured",
                    access: "R V", conformance: "M", constraint: "MinMea", default: 0, quality: "X P", type: "int16",
                    xref: { document: "cluster", section: "2.3.4" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "int16",
                    details: "The MinMeasuredValue attribute indicates the minimum value of " +
                             "MeasuredValue that is capable of being measured. See Measured Value " +
                             "for more details",
                    xref: { document: "cluster", section: "2.3.4.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 32767", default: 0, quality: "X", type: "int16",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                             "MeasuredValue that is capable of being measured. See Measured Value " +
                             "for more details",
                    xref: { document: "cluster", section: "2.3.4.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "Tolerance",
                    access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.3.4.4" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0403, name: "PressureMeasurement",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P", type: "int16",
                    details: "This attribute represents the pressure in kPa as follows",
                    xref: { document: "cluster", section: "2.4.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "int16",
                    details: "This attribute indicates the minimum value of MeasuredValue that can " +
                             "be measured. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.4.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 32767", default: 0, quality: "X", type: "int16",
                    details: "This attribute indicates the maximum value of MeasuredValue that can " +
                             "be measured. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.4.5.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "Tolerance",
                    access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
                    details: "This attribute indicates the magnitude of the possible error that is " +
                             "associated with ScaledValue",
                    xref: { document: "cluster", section: "2.4.5.4" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "ScaledValue",
                    access: "R V", conformance: "EXT", constraint: "MinScaledValue to MaxScaledValue", default: 0, quality: "X", type: "int16",
                    details: "ScaledValue represents the pressure in Pascals as follows",
                    xref: { document: "cluster", section: "2.4.5.5" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "MinScaledValue",
                    access: "R V", conformance: "EXT", default: 0, quality: "X", type: "int16",
                    details: "The MinScaledValue attribute indicates the minimum value of " +
                             "ScaledValue that can be measured. The null value indicates that the " +
                             "value is not available",
                    xref: { document: "cluster", section: "2.4.5.6" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "MaxScaledValue",
                    access: "R V", conformance: "EXT", constraint: "MinScaledValue1 to 32767", default: 0, quality: "X", type: "int16",
                    details: "This attribute indicates the maximum value of ScaledValue that can be " +
                             "measured. MaxScaledValue SHALL be greater than MinScaledValue",
                    xref: { document: "cluster", section: "2.4.5.7" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "ScaledTolerance",
                    access: "R V", conformance: "[EXT]", constraint: "0 to 2048", default: 0, type: "uint16",
                    details: "This attribute indicates the magnitude of the possible error that is " +
                             "associated with ScaledValue. The true value is located in the range",
                    xref: { document: "cluster", section: "2.4.5.8" }
                },

                {
                    tag: "attribute", id: 0x0014, name: "Scale",
                    access: "R V", conformance: "EXT", constraint: "-127 to 127", default: 0, type: "int8",
                    details: "This attribute indicates the base 10 exponent used to obtain " +
                             "ScaledValue (see ScaledValue Attribute",
                    xref: { document: "cluster", section: "2.4.5.9" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0404, name: "FlowMeasurement",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: "null", quality: "X P", type: "uint16",
                    details: "MeasuredValue represents the flow in m3/h as follows: MeasuredValue = " +
                             "10 x Flow",
                    xref: { document: "cluster", section: "2.5.4.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
                    access: "R V", conformance: "M", constraint: "0 to MaxMeasuredValue1", default: 0, quality: "X", type: "uint16",
                    details: "The MinMeasuredValue attribute indicates the minimum value of " +
                             "MeasuredValue that can be measured. See Measured Value for more " +
                             "details",
                    xref: { document: "cluster", section: "2.5.4.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 65534", default: 0, quality: "X", type: "uint16",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                             "MeasuredValue that can be measured. See Measured Value for more " +
                             "details",
                    xref: { document: "cluster", section: "2.5.4.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "Tolerance",
                    access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.5.4.4" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0405, name: "RelativeHumidityMeasurement",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P", type: "uint16",
                    details: "MeasuredValue represents the water content in % as follows",
                    xref: { document: "cluster", section: "2.6.4.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
                    access: "R V", conformance: "M", constraint: "0 to MaxMeasuredValue1", default: 0, quality: "X", type: "uint16",
                    details: "The MinMeasuredValue attribute indicates the minimum value of " +
                             "MeasuredValue that can be measured. The null value means this " +
                             "attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 10000", default: 0, quality: "X", type: "uint16",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                             "MeasuredValue that can be measured. The null value means this " +
                             "attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "Tolerance",
                    access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.6.4.4" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0407, name: "LeafWetnessMeasurement",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P", type: "uint16",
                    details: "MeasuredValue represents the water content in % as follows",
                    xref: { document: "cluster", section: "2.6.4.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
                    access: "R V", conformance: "M", constraint: "0 to MaxMeasuredValue1", default: 0, quality: "X", type: "uint16",
                    details: "The MinMeasuredValue attribute indicates the minimum value of " +
                             "MeasuredValue that can be measured. The null value means this " +
                             "attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 10000", default: 0, quality: "X", type: "uint16",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                             "MeasuredValue that can be measured. The null value means this " +
                             "attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "Tolerance",
                    access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.6.4.4" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0408, name: "SoilMoistureMeasurement",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P", type: "uint16",
                    details: "MeasuredValue represents the water content in % as follows",
                    xref: { document: "cluster", section: "2.6.4.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "MinMeasuredValue",
                    access: "R V", conformance: "M", constraint: "0 to MaxMeasuredValue1", default: 0, quality: "X", type: "uint16",
                    details: "The MinMeasuredValue attribute indicates the minimum value of " +
                             "MeasuredValue that can be measured. The null value means this " +
                             "attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxMeasuredValue",
                    access: "R V", conformance: "M", constraint: "MinMeasuredValue1 to 10000", default: 0, quality: "X", type: "uint16",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of " +
                             "MeasuredValue that can be measured. The null value means this " +
                             "attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "Tolerance",
                    access: "R V", conformance: "O", constraint: "0 to 2048", default: 0, type: "uint16",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.6.4.4" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0406, name: "OccupancySensing",
            classification: "application",
            children: [
                {
                    tag: "datatype", name: "OccupancyBitmap",
                    type: "map8",
                    details: "This data type is derived from bitmap8",
                    xref: { document: "cluster", section: "2.7.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Occupied",
                            description: "Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.",
                            xref: { document: "cluster", section: "2.7.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0300, name: "ColorControl",
            classification: "application",
            children: [
                {
                    tag: "command", id: 0x0000, name: "MoveToHue",
                    access: "O", conformance: "HS", direction: "request", response: "status",
                    details: "The MoveToHue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.4" }
                },

                {
                    tag: "command", id: 0x0001, name: "MoveHue",
                    access: "O", conformance: "HS", direction: "request", response: "status",
                    details: "The MoveHue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.5" }
                },

                {
                    tag: "command", id: 0x0002, name: "StepHue",
                    access: "O", conformance: "HS", direction: "request", response: "status",
                    details: "The StepHue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.6" }
                },

                {
                    tag: "command", id: 0x0003, name: "MoveToSaturation",
                    access: "O", conformance: "HS", direction: "request", response: "status",
                    details: "The MoveToSaturation command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.7" }
                },

                {
                    tag: "command", id: 0x0004, name: "MoveSaturation",
                    access: "O", conformance: "HS", direction: "request", response: "status",
                    details: "The MoveSaturation command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.8" }
                },

                {
                    tag: "command", id: 0x0005, name: "StepSaturation",
                    access: "O", conformance: "HS", direction: "request", response: "status",
                    details: "The StepSaturation command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.9" }
                },

                {
                    tag: "command", id: 0x0006, name: "MoveToHueAndSaturation",
                    access: "O", conformance: "HS", direction: "request", response: "status",
                    details: "The MoveToHueAndSaturation command SHALL have the following data " +
                             "fields",
                    xref: { document: "cluster", section: "3.2.11.10" }
                },

                {
                    tag: "command", id: 0x0007, name: "MoveToColor",
                    access: "O", conformance: "X, Y", direction: "request", response: "status",
                    details: "The MoveToColor command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.11" }
                },

                {
                    tag: "command", id: 0x0008, name: "MoveColor",
                    access: "O", conformance: "X, Y", direction: "request", response: "status",
                    details: "The MoveColor command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.12" }
                },

                {
                    tag: "command", id: 0x0009, name: "StepColor",
                    access: "O", conformance: "X, Y", direction: "request", response: "status",
                    details: "The StepColor command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.13" }
                },

                {
                    tag: "command", id: 0x000a, name: "MoveToColorTemperature",
                    access: "O", conformance: "CT", direction: "request", response: "status",
                    details: "The MoveToColorTemperature command SHALL have the following data " +
                             "fields",
                    xref: { document: "cluster", section: "3.2.11.14" }
                },

                {
                    tag: "command", id: 0x0040, name: "EnhancedMoveToHue",
                    access: "O", conformance: "EHUE", direction: "request", response: "status",
                    details: "The EnhancedMoveToHue command allows lamps to be moved in a smooth " +
                             "continuous transition from their current hue to a target hue",
                    xref: { document: "cluster", section: "3.2.11.15" }
                },

                {
                    tag: "command", id: 0x0041, name: "EnhancedMoveHue",
                    access: "O", conformance: "EHUE", direction: "request", response: "status",
                    details: "The EnhancedMoveHue command allows lamps to be moved in a continuous " +
                             "stepped transition from their current hue to a target hue",
                    xref: { document: "cluster", section: "3.2.11.16" }
                },

                {
                    tag: "command", id: 0x0042, name: "EnhancedStepHue",
                    access: "O", conformance: "EHUE", direction: "request", response: "status",
                    details: "The EnhancedStepHue command allows lamps to be moved in a stepped " +
                             "transition from their current hue to a target hue, resulting in a " +
                             "linear transition through XY space",
                    xref: { document: "cluster", section: "3.2.11.17" }
                },

                {
                    tag: "command", id: 0x0043, name: "EnhancedMoveToHueAndSaturation",
                    access: "O", conformance: "EHUE", direction: "request", response: "status",
                    details: "The EnhancedMoveToHueAndSaturation command allows lamps to be moved in" +
                             " a smooth continuous transition from their current hue to a target hue" +
                             " and from their current saturation to a target saturation",
                    xref: { document: "cluster", section: "3.2.11.18" }
                },

                {
                    tag: "command", id: 0x0044, name: "ColorLoopSet",
                    access: "O", conformance: "CL", direction: "request", response: "status",
                    details: "The Color Loop Set command allows a color loop to be activated such " +
                             "that the color lamp cycles through its range of hues",
                    xref: { document: "cluster", section: "3.2.11.19" }
                },

                {
                    tag: "command", id: 0x0047, name: "StopMoveStep",
                    access: "O", conformance: "HS | X, Y | CT", direction: "request", response: "status",
                    details: "The StopMoveStep command is provided to allow MoveTo and Step commands" +
                             " to be stopped. (Note this automatically provides symmetry to the " +
                             "Level Control cluster",
                    xref: { document: "cluster", section: "3.2.11.20" }
                },

                {
                    tag: "command", id: 0x004b, name: "MoveColorTemperature",
                    access: "O", conformance: "CT", direction: "request", response: "status",
                    details: "The MoveColorTemperature command allows the color temperature of a " +
                             "lamp to be moved at a specified rate",
                    xref: { document: "cluster", section: "3.2.11.21" }
                },

                {
                    tag: "command", id: 0x004c, name: "StepColorTemperature",
                    access: "O", conformance: "CT", direction: "request", response: "status",
                    details: "The StepColorTemperature command allows the color temperature of a " +
                             "lamp to be stepped with a specified step size",
                    xref: { document: "cluster", section: "3.2.11.22" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0301, name: "BallastConfiguration",
            classification: "application"
        },

        {
            tag: "cluster", id: 0x0200, name: "PumpConfigurationandControl",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MaxPressure",
                    access: "R V", conformance: "M", default: "null", quality: "X F", type: "int16",
                    details: "This attribute specifies the maximum pressure the pump can achieve. It" +
                             " is a physical limit, and does not apply to any specific control mode " +
                             "or operation mode",
                    xref: { document: "cluster", section: "4.2.7.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "MaxSpeed",
                    access: "R V", conformance: "M", default: "null", quality: "X F", type: "uint16",
                    details: "This attribute specifies the maximum speed the pump can achieve. It is" +
                             " a physical limit, and does not apply to any specific control mode or " +
                             "operation mode",
                    xref: { document: "cluster", section: "4.2.7.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxFlow",
                    access: "R V", conformance: "M", default: "null", quality: "X F", type: "uint16",
                    details: "This attribute specifies the maximum flow the pump can achieve. It is " +
                             "a physical limit, and does not apply to any specific control mode or " +
                             "operation mode",
                    xref: { document: "cluster", section: "4.2.7.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "MinConstPressure",
                    access: "R V", conformance: "P, RSCONST, [AUTO]", default: "null", quality: "X F", type: "int16",
                    details: "This attribute specifies the minimum pressure the pump can achieve " +
                             "when it is working with the ControlMode attribute set to " +
                             "ConstantPressure",
                    xref: { document: "cluster", section: "4.2.7.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "MaxConstPressure",
                    access: "R V", conformance: "P, RSCONST, [AUTO]", default: "null", quality: "X F", type: "int16",
                    details: "This attribute specifies the maximum pressure the pump can achieve " +
                             "when it is working with the ControlMode attribute set to " +
                             "ConstantPressure",
                    xref: { document: "cluster", section: "4.2.7.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "MinCompPressure",
                    access: "R V", conformance: "P, RSCOMP, [AUTO]", default: "null", quality: "X F", type: "int16",
                    details: "This attribute specifies the minimum compensated pressure the pump can" +
                             " achieve when it is working with the ControlMode attribute set to " +
                             "ProportionalPressure",
                    xref: { document: "cluster", section: "4.2.7.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "MaxCompPressure",
                    access: "R V", conformance: "P, RSCOMP, [AUTO]", default: "null", quality: "X F", type: "int16",
                    details: "This attribute specifies the maximum compensated pressure the pump can" +
                             " achieve when it is working with the ControlMode attribute set to " +
                             "ProportionalPressure",
                    xref: { document: "cluster", section: "4.2.7.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "MinConstSpeed",
                    access: "R V", conformance: "SPD, [AUTO]", default: "null", quality: "X F", type: "uint16",
                    details: "This attribute specifies the minimum speed the pump can achieve when " +
                             "it is working with the ControlMode attribute set to ConstantSpeed",
                    xref: { document: "cluster", section: "4.2.7.8" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "MaxConstSpeed",
                    access: "R V", conformance: "SPD, [AUTO]", default: "null", quality: "X F", type: "uint16",
                    details: "This attribute specifies the maximum speed the pump can achieve when " +
                             "it is working with the ControlMode attribute set to ConstantSpeed",
                    xref: { document: "cluster", section: "4.2.7.9" }
                },

                {
                    tag: "attribute", id: 0x0009, name: "MinConstFlow",
                    access: "R V", conformance: "FLW, [AUTO]", default: "null", quality: "X F", type: "uint16",
                    details: "This attribute specifies the minimum flow the pump can achieve when it" +
                             " is working with the Con",
                    xref: { document: "cluster", section: "4.2.7.10" }
                },

                {
                    tag: "attribute", id: 0x000a, name: "MaxConstFlow",
                    access: "R V", conformance: "FLW, [AUTO]", default: "null", quality: "X F", type: "uint16",
                    details: "This attribute specifies the maximum flow the pump can achieve when it" +
                             " is working with the ControlMode attribute set to ConstantFlow",
                    xref: { document: "cluster", section: "4.2.7.11" }
                },

                {
                    tag: "attribute", id: 0x000b, name: "MinConstTemp",
                    access: "R V", conformance: "TEMP, [AUTO]", default: "null", quality: "X F", type: "int16",
                    details: "This attribute specifies the minimum temperature the pump can maintain" +
                             " in the system when it is working with the ControlMode attribute set " +
                             "to ConstantTemperature",
                    xref: { document: "cluster", section: "4.2.7.12" }
                },

                {
                    tag: "attribute", id: 0x000c, name: "MaxConstTemp",
                    access: "R V", conformance: "TEMP, [AUTO]", default: "null", quality: "X F", type: "int16",
                    details: "This attribute specifies the maximum temperature the pump can maintain" +
                             " in the system when it is working with the ControlMode attribute set " +
                             "to ConstantTemperature",
                    xref: { document: "cluster", section: "4.2.7.13" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "PumpStatus",
                    access: "R V", conformance: "O", constraint: "desc", default: 0, quality: "P", type: "PumpStatusBitmap",
                    details: "This attribute specifies the activity status of the pump functions as " +
                             "listed in PumpStatusBitmap. Where a pump controller function is active" +
                             ", the corresponding bit SHALL be set to 1. Where a pump controller " +
                             "function is not active, the corresponding bit SHALL be set to 0",
                    xref: { document: "cluster", section: "4.2.7.14" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "EffectiveOperationMode",
                    access: "R V", conformance: "M", constraint: "desc", default: "desc", quality: "N", type: "OperationModeEnum",
                    details: "This attribute specifies current effective operation mode of the pump " +
                             "as defined in OperationModeEnum",
                    xref: { document: "cluster", section: "4.2.7.15" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "EffectiveControlMode",
                    access: "R V", conformance: "M", constraint: "desc", default: "desc", quality: "N", type: "ControlModeEnum",
                    details: "This attribute specifies the current effective control mode of the " +
                             "pump as defined in ControlModeEnum",
                    xref: { document: "cluster", section: "4.2.7.16" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "Capacity",
                    access: "R V", conformance: "M", default: "null", quality: "X P", type: "int16",
                    details: "This attribute specifies the actual capacity of the pump as a " +
                             "percentage of the effective maximum setpoint value. It is updated " +
                             "dynamically as the speed of the pump changes",
                    xref: { document: "cluster", section: "4.2.7.17" }
                },

                {
                    tag: "attribute", id: 0x0014, name: "Speed",
                    access: "R V", conformance: "O", default: "null", quality: "X", type: "uint16",
                    details: "This attribute specifies the actual speed of the pump measured in RPM" +
                             ". It is updated dynamically as the speed of the pump changes",
                    xref: { document: "cluster", section: "4.2.7.18" }
                },

                {
                    tag: "attribute", id: 0x0015, name: "LifetimeRunningHours",
                    access: "RW VM", conformance: "O", default: 0, quality: "X N", type: "uint24",
                    details: "This attribute specifies the accumulated number of hours that the pump" +
                             " has been powered and the motor has been running. It is updated " +
                             "dynamically as it increases. It is preserved over power cycles of the " +
                             "pump. If LifeTimeRunningHours rises above maximum value it “rolls over" +
                             "” and starts at 0 (zero",
                    xref: { document: "cluster", section: "4.2.7.19" }
                },

                {
                    tag: "attribute", id: 0x0016, name: "Power",
                    access: "R V", conformance: "O", default: "null", quality: "X", type: "uint24",
                    details: "This attribute specifies the actual power consumption of the pump in " +
                             "Watts. The value of this attribute is updated dynamically as the power" +
                             " consumption of the pump changes",
                    xref: { document: "cluster", section: "4.2.7.20" }
                },

                {
                    tag: "attribute", id: 0x0017, name: "LifetimeEnergyConsumed",
                    access: "RW VM", conformance: "O", default: 0, quality: "X N", type: "uint32",
                    details: "This attribute specifies the accumulated energy consumption of the " +
                             "pump through the entire lifetime of the pump in kWh. The value of the " +
                             "LifetimeEnergyConsumed attribute is updated dynamically as the energy " +
                             "consumption of the pump increases. If LifetimeEnergyConsumed rises " +
                             "above maximum value it “rolls over” and starts at 0 (zero",
                    xref: { document: "cluster", section: "4.2.7.21" }
                },

                {
                    tag: "attribute", id: 0x0020, name: "OperationMode",
                    access: "RW VM", conformance: "M", constraint: "desc", default: "0", quality: "N", type: "OperationModeEnum",
                    details: "This attribute specifies the operation mode of the pump as defined in " +
                             "OperationModeEnum",
                    xref: { document: "cluster", section: "4.2.7.22" }
                },

                {
                    tag: "attribute", id: 0x0021, name: "ControlMode",
                    access: "RW VM", conformance: "O", constraint: "desc", default: "0", quality: "N", type: "ControlModeEnum",
                    details: "This attribute specifies the control mode of the pump as defined in " +
                             "ControlModeEnum",
                    xref: { document: "cluster", section: "4.2.7.23" }
                },

                {
                    tag: "attribute", id: 0x0022, name: "AlarmMask",
                    access: "R V", conformance: "D", constraint: "desc", default: 0, quality: "N", type: "map16",
                    xref: { document: "cluster", section: "4.2.7" }
                },

                {
                    tag: "event", id: 0x0000, name: "SupplyVoltageLow",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0001, name: "SupplyVoltageHigh",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0002, name: "PowerMissingPhase",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0003, name: "SystemPressureLow",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0004, name: "SystemPressureHigh",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0005, name: "DryRunning",
                    access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0006, name: "MotorTemperatureHigh",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0007, name: "PumpMotorFatalFailure",
                    access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0008, name: "ElectronicTemperatureHigh",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0009, name: "PumpBlocked",
                    access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x000a, name: "SensorFailure",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x000b, name: "ElectronicNonFatalFailure",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x000c, name: "ElectronicFatalFailure",
                    access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x000d, name: "GeneralFault",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x000e, name: "Leakage",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x000f, name: "AirDetection",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", id: 0x0010, name: "TurbineOperation",
                    access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "datatype", name: "PumpStatusBitmap",
                    type: "map16",
                    details: "This data type is derived from map16",
                    xref: { document: "cluster", section: "4.2.6.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "DeviceFault",
                            description: "A fault related to the system or pump device is detected.",
                            details: "If this bit is set, it MAY correspond to an event in the range 2-16, " +
                                     "see Events",
                            xref: { document: "cluster", section: "4.2.6.1.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "SupplyFault",
                            description: "A fault related to the supply to the pump is detected.",
                            details: "If this bit is set, it MAY correspond to an event in the range 0-1 or " +
                                     "13, see Events",
                            xref: { document: "cluster", section: "4.2.6.1.2" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "SpeedLow",
                            description: "Setpoint is too low to achieve.",
                            xref: { document: "cluster", section: "4.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "SpeedHigh",
                            description: "Setpoint is too high to achieve.",
                            xref: { document: "cluster", section: "4.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "LocalOverride",
                            description: "Device control is overridden by hardware, such as an external STOP button or via a local HMI.",
                            details: "While this bit is set, the EffectiveOperationMode is adjusted to Local" +
                                     ". Any request changing OperationMode SHALL generate a FAILURE error " +
                                     "status until LocalOverride is cleared on the physical device. When " +
                                     "LocalOverride is cleared, the device SHALL return to the operation " +
                                     "mode set in OperationMode",
                            xref: { document: "cluster", section: "4.2.6.1.3" }
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Running",
                            description: "Pump is currently running",
                            xref: { document: "cluster", section: "4.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "RemotePressure",
                            description: "A remote pressure sensor is used as the sensor for the regulation of the pump.",
                            details: "If this bit is set, EffectiveControlMode is ConstantPressure and the " +
                                     "setpoint for the pump is interpreted as a percentage of the range of " +
                                     "the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                            xref: { document: "cluster", section: "4.2.6.1.4" }
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "RemoteFlow",
                            description: "A remote flow sensor is used as the sensor for the regulation of the pump.",
                            details: "If this bit is set, EffectiveControlMode is ConstantFlow, and the " +
                                     "setpoint for the pump is interpreted as a percentage of the range of " +
                                     "the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                            xref: { document: "cluster", section: "4.2.6.1.5" }
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "RemoteTemperature",
                            description: "A remote temperature sensor is used as the sensor for the regulation of the pump.",
                            details: "If this bit is set, EffectiveControlMode is ConstantTemperature, and " +
                                     "the setpoint for the pump is interpreted as a percentage of the range " +
                                     "of the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                            xref: { document: "cluster", section: "4.2.6.1.6" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0201, name: "Thermostat",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "LocalTemperature",
                    access: "R V", conformance: "M", default: "null", quality: "X P", type: "temperature",
                    details: "This attribute indicates the current LocalTemperature value, when " +
                             "available. The value may be local, or remote, depending on the value " +
                             "of the RemoteSensing attribute when supported",
                    xref: { document: "cluster", section: "4.3.7.2" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "OutdoorTemperature",
                    access: "R V", conformance: "O", default: "null", quality: "X", type: "temperature",
                    details: "This attribute represents the outdoor temperature, as measured locally" +
                             " or remotely (over the network",
                    xref: { document: "cluster", section: "4.3.7.3" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "Occupancy",
                    access: "R V", conformance: "O, CC", constraint: "desc", default: 1, type: "map8",
                    details: "This attribute specifies whether the heated/cooled space is occupied " +
                             "or not, as measured locally or remotely (over the network). If bit 0" +
                             " = 1, the space is occupied, else it is unoccupied. All other bits are" +
                             " reserved",
                    xref: { document: "cluster", section: "4.3.7.4" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "AbsMinHeatSetpointLimit",
                    access: "R V", conformance: "[HEAT]", constraint: "desc", default: "7°C", quality: "F", type: "temperature",
                    details: "This attribute specifies the absolute minimum level that the heating " +
                             "setpoint MAY be set to. This is a limitation imposed by the " +
                             "manufacturer",
                    xref: { document: "cluster", section: "4.3.7.5" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "AbsMaxHeatSetpointLimit",
                    access: "R V", conformance: "[HEAT]", constraint: "desc", default: "30°C", quality: "F", type: "temperature",
                    details: "This attribute specifies the absolute maximum level that the heating " +
                             "setpoint MAY be set to. This is a limitation imposed by the " +
                             "manufacturer",
                    xref: { document: "cluster", section: "4.3.7.6" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "AbsMinCoolSetpointLimit",
                    access: "R V", conformance: "[COOL]", constraint: "desc", default: "16°C", quality: "F", type: "temperature",
                    details: "This attribute specifies the absolute minimum level that the cooling " +
                             "setpoint MAY be set to. This is a limitation imposed by the " +
                             "manufacturer",
                    xref: { document: "cluster", section: "4.3.7.7" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "AbsMaxCoolSetpointLimit",
                    access: "R V", conformance: "[COOL]", constraint: "desc", default: "32°C", quality: "F", type: "temperature",
                    details: "This attribute specifies the absolute maximum level that the cooling " +
                             "setpoint MAY be set to. This is a limitation imposed by the " +
                             "manufacturer",
                    xref: { document: "cluster", section: "4.3.7.8" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "PiCoolingDemand",
                    access: "R V", conformance: "[COOL]", default: "-", quality: "P", type: "uint8",
                    details: "This attribute specifies the level of cooling demanded by the PI (" +
                             "proportional integral) control loop in use by the thermostat (if any" +
                             "), in percent. This value is 0 when the thermostat is in “off” or “" +
                             "heating” mode",
                    xref: { document: "cluster", section: "4.3.7.9" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "PiHeatingDemand",
                    access: "R V", conformance: "[HEAT]", default: "-", quality: "P", type: "uint8",
                    details: "This attribute specifies the level of heating demanded by the PI loop " +
                             "in percent. This value is 0 when the thermostat is in “off” or “" +
                             "cooling” mode",
                    xref: { document: "cluster", section: "4.3.7.10" }
                },

                {
                    tag: "attribute", id: 0x0009, name: "HvacSystemTypeConfiguration",
                    access: "R[W] VM", conformance: "D", constraint: "desc", default: 0, quality: "N", type: "map8",
                    details: "This attribute specifies the HVAC system type controlled by the " +
                             "thermostat. If the thermostat uses physical DIP switches to set these " +
                             "parameters, this information SHALL be available read-only from the DIP" +
                             " switches. If these parameters are set via software, there SHALL be " +
                             "read/write access in order to provide remote programming capability. " +
                             "The meanings of individual bits are detailed below. Each bit " +
                             "represents a type of system configuration",
                    xref: { document: "cluster", section: "4.3.7.11" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "LocalTemperatureCalibration",
                    access: "RW VM", conformance: "[!LTNE]", constraint: "-2.5 to 2.5", default: "0°C", quality: "N", type: "temp-s8",
                    details: "This attribute specifies the offset the Thermostat server SHALL make " +
                             "to the measured temperature (locally or remotely) to adjust the " +
                             "LocalTemperature Value prior to using, displaying or reporting it",
                    xref: { document: "cluster", section: "4.3.7.12" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "OccupiedCoolingSetpoint",
                    access: "RW VO", conformance: "COOL", constraint: "desc", default: "26°C", quality: "N S", type: "temperature",
                    details: "This attribute specifies the cooling mode setpoint when the room is " +
                             "occupied",
                    xref: { document: "cluster", section: "4.3.7.13" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "OccupiedHeatingSetpoint",
                    access: "RW VO", conformance: "HEAT", constraint: "desc", default: "20°C", quality: "N S", type: "temperature",
                    details: "This attribute specifies the heating mode setpoint when the room is " +
                             "occupied",
                    xref: { document: "cluster", section: "4.3.7.14" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "UnoccupiedCoolingSetpoint",
                    access: "RW VO", conformance: "COOL & O, CC", constraint: "desc", default: "26°C", quality: "N", type: "temperature",
                    details: "This attribute specifies the cooling mode setpoint when the room is " +
                             "unoccupied",
                    xref: { document: "cluster", section: "4.3.7.15" }
                },

                {
                    tag: "attribute", id: 0x0014, name: "UnoccupiedHeatingSetpoint",
                    access: "RW VO", conformance: "HEAT & O, CC", constraint: "desc", default: "20°C", quality: "N", type: "temperature",
                    details: "This attribute specifies the heating mode setpoint when the room is " +
                             "unoccupied",
                    xref: { document: "cluster", section: "4.3.7.16" }
                },

                {
                    tag: "attribute", id: 0x0015, name: "MinHeatSetpointLimit",
                    access: "RW VM", conformance: "[HEAT]", constraint: "desc", default: "AbsMinHeatSetpointLimit", quality: "N", type: "temperature",
                    details: "This attribute specifies the minimum level that the heating setpoint " +
                             "MAY be set to",
                    xref: { document: "cluster", section: "4.3.7.17" }
                },

                {
                    tag: "attribute", id: 0x0016, name: "MaxHeatSetpointLimit",
                    access: "RW VM", conformance: "[HEAT]", constraint: "desc", default: "AbsMaxHeatSetpointLimit", quality: "N", type: "temperature",
                    details: "This attribute specifies the maximum level that the heating setpoint " +
                             "MAY be set to",
                    xref: { document: "cluster", section: "4.3.7.18" }
                },

                {
                    tag: "attribute", id: 0x0017, name: "MinCoolSetpointLimit",
                    access: "RW VM", conformance: "[COOL]", constraint: "desc", default: "AbsMinCoolSetpointLimit", quality: "N", type: "temperature",
                    details: "This attribute specifies the minimum level that the cooling setpoint " +
                             "MAY be set to",
                    xref: { document: "cluster", section: "4.3.7.19" }
                },

                {
                    tag: "attribute", id: 0x0018, name: "MaxCoolSetpointLimit",
                    access: "RW VM", conformance: "[COOL]", constraint: "desc", default: "AbsMaxCoolSetpointLimit", quality: "N", type: "temperature",
                    details: "This attribute specifies the maximum level that the cooling setpoint " +
                             "MAY be set to",
                    xref: { document: "cluster", section: "4.3.7.20" }
                },

                {
                    tag: "attribute", id: 0x0019, name: "MinSetpointDeadBand",
                    access: "R[W] VM", conformance: "AUTO", constraint: "0 to 2.5", default: "2.5°C", quality: "N", type: "temp-s8",
                    details: "On devices which support the AUTO feature, this attribute specifies " +
                             "the minimum difference between the Heat Setpoint and the Cool Setpoint",
                    xref: { document: "cluster", section: "4.3.7.21" }
                },

                {
                    tag: "attribute", id: 0x001a, name: "RemoteSensing",
                    access: "RW VM", conformance: "O", constraint: "0", default: 0, quality: "N", type: "map8",
                    details: "This attribute indicates when the local temperature, outdoor " +
                             "temperature and occupancy are being sensed by remote networked sensors" +
                             ", rather than internal sensors",
                    xref: { document: "cluster", section: "4.3.7.22" }
                },

                {
                    tag: "attribute", id: 0x001b, name: "ControlSequenceOfOperation",
                    access: "RW VM", conformance: "M", constraint: "desc", default: 4, quality: "N", type: "enum8",
                    details: "This attribute specifies the overall operating environment of the " +
                             "thermostat, and thus the possible system modes that the thermostat can" +
                             " operate in. It SHALL be set to one of the following values",
                    xref: { document: "cluster", section: "4.3.7.23" }
                },

                {
                    tag: "attribute", id: 0x001c, name: "SystemMode",
                    access: "RW VM", conformance: "M", constraint: "desc", default: 1, quality: "N S", type: "enum8",
                    details: "This attribute specifies the current operating mode of the thermostat" +
                             ", It SHALL be set to one of the following values, as limited by the " +
                             "ControlSequenceOfOperation Attribute",
                    xref: { document: "cluster", section: "4.3.7.24" }
                },

                {
                    tag: "attribute", id: 0x001d, name: "AlarmMask",
                    access: "R V", conformance: "O", constraint: "desc", default: 0, type: "map8",
                    details: "This attribute specifies whether each of the alarms listed below is " +
                             "enabled. When the bit number corresponding to the alarm code is set to" +
                             " 1, the alarm is enabled, else it is disabled. Bits not corresponding " +
                             "to a code in the table are reserved",
                    xref: { document: "cluster", section: "4.3.7.25" }
                },

                {
                    tag: "attribute", id: 0x001e, name: "ThermostatRunningMode",
                    access: "R V", conformance: "[AUTO]", constraint: "desc", default: 0, type: "enum8",
                    xref: { document: "cluster", section: "4.3.7" }
                },

                {
                    tag: "attribute", id: 0x0020, name: "StartOfWeek",
                    access: "R V", conformance: "SCH", constraint: "desc", default: "–", quality: "F", type: "enum8",
                    details: "This attribute represents the day of the week that this thermostat " +
                             "considers to be the start of week for weekly set point scheduling",
                    xref: { document: "cluster", section: "4.3.7.27" }
                },

                {
                    tag: "attribute", id: 0x0021, name: "NumberOfWeeklyTransitions",
                    access: "R V", conformance: "SCH", default: 0, quality: "F", type: "uint8",
                    details: "This attribute determines how many weekly schedule transitions the " +
                             "thermostat is capable of handling",
                    xref: { document: "cluster", section: "4.3.7.28" }
                },

                {
                    tag: "attribute", id: 0x0022, name: "NumberOfDailyTransitions",
                    access: "R V", conformance: "SCH", default: 0, quality: "F", type: "uint8",
                    details: "This attribute determines how many daily schedule transitions the " +
                             "thermostat is capable of handling",
                    xref: { document: "cluster", section: "4.3.7.29" }
                },

                {
                    tag: "attribute", id: 0x0023, name: "TemperatureSetpointHold",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
                    details: "This attribute specifies the temperature hold status on the thermostat" +
                             ". If hold status is on, the thermostat SHOULD maintain the temperature" +
                             " set point for the current mode until a system mode change. If hold " +
                             "status is off, the thermostat SHOULD follow the setpoint transitions " +
                             "specified by its internal scheduling program. If the thermostat " +
                             "supports setpoint hold for a specific duration, it SHOULD also " +
                             "implement the TemperatureSetpointHoldDuration attribute",
                    xref: { document: "cluster", section: "4.3.7.30" }
                },

                {
                    tag: "attribute", id: 0x0024, name: "TemperatureSetpointHoldDuration",
                    access: "RW VM", conformance: "O", constraint: "0 to 1440", default: "null", quality: "X N", type: "uint16",
                    details: "This attribute sets the period in minutes for which a setpoint hold is" +
                             " active. Thermostats that support hold for a specified duration SHOULD" +
                             " implement this attribute. The null value indicates the field is " +
                             "unused. All other values are reserved",
                    xref: { document: "cluster", section: "4.3.7.31" }
                },

                {
                    tag: "attribute", id: 0x0025, name: "ThermostatProgrammingOperationMode",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P", type: "map8",
                    details: "This attribute determines the operational state of the thermostat’s " +
                             "programming. The thermostat SHALL modify its programming operation " +
                             "when this attribute is modified by a client and update this attribute " +
                             "when its programming operation is modified locally by a user. The " +
                             "thermostat MAY support more than one active " +
                             "ThermostatProgrammingOperationMode. For example, the thermostat MAY " +
                             "operate simultaneously in Schedule Programming Mode and Recovery Mode",
                    xref: { document: "cluster", section: "4.3.7.32" }
                },

                {
                    tag: "attribute", id: 0x0029, name: "ThermostatRunningState",
                    access: "R V", conformance: "O", constraint: "desc", default: "-", type: "map16",
                    details: "This attribute represents the current relay state of the heat, cool, " +
                             "and fan relays",
                    xref: { document: "cluster", section: "4.3.7.33" }
                },

                {
                    tag: "attribute", id: 0x0030, name: "SetpointChangeSource",
                    access: "R V", conformance: "O", constraint: "desc", default: 0, type: "enum8",
                    details: "This attribute specifies the source of the current active " +
                             "OccupiedCoolingSetpoint or OccupiedHeatingSetpoint (i.e., who or what " +
                             "determined the current setpoint",
                    xref: { document: "cluster", section: "4.3.7.34" }
                },

                {
                    tag: "attribute", id: 0x0031, name: "SetpointChangeAmount",
                    access: "R V", conformance: "O", default: "null", quality: "X", type: "temp-diff",
                    details: "This attribute specifies the delta between the current active " +
                             "OccupiedCoolingSetpoint or OccupiedHeatingSetpoint and the previous " +
                             "active setpoint. This attribute is meant to accompany the " +
                             "SetpointChangeSource attribute; devices implementing " +
                             "SetpointChangeAmount SHOULD also implement SetpointChangeSource",
                    xref: { document: "cluster", section: "4.3.7.35" }
                },

                {
                    tag: "attribute", id: 0x0032, name: "SetpointChangeSourceTimestamp",
                    access: "R V", conformance: "O", default: 0, type: "utc",
                    details: "This attribute specifies the time in UTC at which the " +
                             "SetpointChangeSourceAmount attribute change was recorded",
                    xref: { document: "cluster", section: "4.3.7.36" }
                },

                {
                    tag: "attribute", id: 0x0034, name: "OccupiedSetback",
                    access: "RW VM", conformance: "SB", constraint: "OccupiedSetbackMin to OccupiedSetbackMax", default: "null", quality: "X N", type: "temp-u8",
                    details: "This attribute specifies the amount that the Thermostat server will " +
                             "allow the LocalTemperature Value to float above the OccupiedCooling " +
                             "setpoint (i.e., OccupiedCooling + OccupiedSetback) or below the " +
                             "OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) " +
                             "before initiating a state change to bring the temperature back to the " +
                             "user’s desired setpoint. This attribute is sometimes also referred to " +
                             "as the “span",
                    xref: { document: "cluster", section: "4.3.7.37" }
                },

                {
                    tag: "attribute", id: 0x0035, name: "OccupiedSetbackMin",
                    access: "R V", conformance: "SB", constraint: "0 to OccupiedSetbackMax", default: "null", quality: "X F", type: "temp-u8",
                    details: "This attribute specifies the minimum value that the Thermostat server " +
                             "will allow the OccupiedSetback attribute to be configured by a user",
                    xref: { document: "cluster", section: "4.3.7.38" }
                },

                {
                    tag: "attribute", id: 0x0036, name: "OccupiedSetbackMax",
                    access: "R V", conformance: "SB", constraint: "OccupiedSetbackMin to 25.4", default: "null", quality: "X F", type: "temp-u8",
                    details: "This attribute specifies the maximum value that the Thermostat server " +
                             "will allow the OccupiedSetback attribute to be configured by a user",
                    xref: { document: "cluster", section: "4.3.7.39" }
                },

                {
                    tag: "attribute", id: 0x0037, name: "UnoccupiedSetback",
                    access: "RW VM", conformance: "SB & O, CC", constraint: "UnoccupiedSetbackMin to UnoccupiedSetbackMax", default: "null", quality: "X N", type: "temp-u8",
                    details: "This attribute specifies the amount that the Thermostat server will " +
                             "allow the LocalTemperature Value to float above the UnoccupiedCooling " +
                             "setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) or below the " +
                             "UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - " +
                             "UnoccupiedSetback) before initiating a state change to bring the " +
                             "temperature back to the user’s desired setpoint. This attribute is " +
                             "sometimes also referred to as the “span",
                    xref: { document: "cluster", section: "4.3.7.40" }
                },

                {
                    tag: "attribute", id: 0x0038, name: "UnoccupiedSetbackMin",
                    access: "R V", conformance: "SB & O, CC", constraint: "0 to UnoccupiedSetbackMax", default: "null", quality: "X F", type: "temp-u8",
                    details: "This attribute specifies the minimum value that the Thermostat server " +
                             "will allow the UnoccupiedSetback attribute to be configured by a user",
                    xref: { document: "cluster", section: "4.3.7.41" }
                },

                {
                    tag: "attribute", id: 0x0039, name: "UnoccupiedSetbackMax",
                    access: "R V", conformance: "SB & O, CC", constraint: "UnoccupiedSetbackMin to 25.4", default: "null", quality: "X F", type: "temp-u8",
                    details: "This attribute specifies the maximum value that the Thermostat server " +
                             "will allow the UnoccupiedSetback attribute to be configured by a user",
                    xref: { document: "cluster", section: "4.3.7.42" }
                },

                {
                    tag: "attribute", id: 0x003a, name: "EmergencyHeatDelta",
                    access: "RW VM", conformance: "O", default: "25.5°C", quality: "N", type: "temp-u8",
                    details: "This attribute specifies the delta between the LocalTemperature Value " +
                             "and the OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint " +
                             "attributes at which the Thermostat server will operate in emergency " +
                             "heat mode",
                    xref: { document: "cluster", section: "4.3.7.43" }
                },

                {
                    tag: "attribute", id: 0x0040, name: "AcType",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
                    details: "This attribute indicates the type of Mini Split ACType of Mini Split " +
                             "AC is defined depending on how Cooling and Heating condition is " +
                             "achieved by Mini Split AC",
                    xref: { document: "cluster", section: "4.3.7.44" }
                },

                {
                    tag: "attribute", id: 0x0041, name: "AcCapacity",
                    access: "RW VM", conformance: "O", default: 0, quality: "N", type: "uint16",
                    details: "This attribute indicates capacity of Mini Split AC in terms of the " +
                             "format defined by the ACCapacityFormat attribute",
                    xref: { document: "cluster", section: "4.3.7.45" }
                },

                {
                    tag: "attribute", id: 0x0042, name: "AcRefrigerantType",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
                    details: "This attribute indicates type of refrigerant used within the Mini " +
                             "Split AC",
                    xref: { document: "cluster", section: "4.3.7.46" }
                },

                {
                    tag: "attribute", id: 0x0043, name: "AcCompressorType",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
                    details: "This attribute indicates type of Compressor used within the Mini Split" +
                             " AC",
                    xref: { document: "cluster", section: "4.3.7.47" }
                },

                {
                    tag: "attribute", id: 0x0044, name: "AcErrorCode",
                    access: "RW VM", conformance: "O", default: 0, type: "map32",
                    details: "This attribute indicates the type of errors encountered within the " +
                             "Mini Split AC. Error values are reported with four bytes values. Each " +
                             "bit within the four bytes indicates the unique error",
                    xref: { document: "cluster", section: "4.3.7.48" }
                },

                {
                    tag: "attribute", id: 0x0045, name: "AcLouverPosition",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
                    details: "This attribute indicates the position of Louver on the AC",
                    xref: { document: "cluster", section: "4.3.7.49" }
                },

                {
                    tag: "attribute", id: 0x0046, name: "AcCoilTemperature",
                    access: "R V", conformance: "O", default: "null", quality: "X", type: "temperature",
                    details: "This attribute represents the temperature of the AC coil, as measured " +
                             "locally or remotely (over the network",
                    xref: { document: "cluster", section: "4.3.7.50" }
                },

                {
                    tag: "attribute", id: 0x0047, name: "AcCapacityFormat",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
                    details: "This attribute specifies the format for the ACCapacity attribute",
                    xref: { document: "cluster", section: "4.3.7.51" }
                },

                {
                    tag: "command", id: 0x0000, name: "SetpointRaiseLower",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", id: 0x0001, name: "SetWeeklySchedule",
                    access: "M", conformance: "SCH", direction: "request", response: "status",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", id: 0x0002, name: "GetWeeklySchedule",
                    access: "O", conformance: "SCH", direction: "request", response: "GetWeeklyScheduleResponse",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", id: 0x0003, name: "ClearWeeklySchedule",
                    access: "M", conformance: "SCH", direction: "request",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", id: 0x0004, name: "GetRelayStatusLog",
                    access: "O", conformance: "O", direction: "request", response: "GetRelayStatusLogResponse",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", id: 0x0000, name: "GetWeeklyScheduleResponse",
                    conformance: "SCH", direction: "response",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", id: 0x0001, name: "GetRelayStatusLogResponse",
                    conformance: "O", direction: "response",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "datatype", name: "ThermostatScheduleTransition",
                    type: "struct",
                    details: "This represents a single transition in a Thermostat schedule",
                    xref: { document: "cluster", section: "4.3.9.5" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "TransitionTime",
                            access: "RW", conformance: "M", constraint: "0 to 1439", default: 0, type: "uint16",
                            details: "This field represents the start time of the schedule transition during" +
                                     " the associated day. The time will be represented by a 16 bits " +
                                     "unsigned integer to designate the minutes since midnight. For example" +
                                     ", 6am will be represented by 360 minutes since midnight and 11:30pm " +
                                     "will be represented by 1410 minutes since midnight",
                            xref: { document: "cluster", section: "4.3.9.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "HeatSetpoint",
                            access: "RW", conformance: "M", default: "", type: "temperature",
                            details: "This field represents the heat setpoint to be applied at this " +
                                     "associated transition start time",
                            xref: { document: "cluster", section: "4.3.9.6" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "CoolSetpoint",
                            access: "RW", conformance: "M", default: "", type: "temperature",
                            details: "This field represents the cool setpoint to be applied at this " +
                                     "associated transition start time",
                            xref: { document: "cluster", section: "4.3.9.7" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0202, name: "FanControl",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "FanMode",
                    access: "RW VO", conformance: "M", constraint: "0 to 6", default: 0, quality: "N", type: "enum8",
                    details: "This attribute SHALL indicate the current speed mode of the fan. This " +
                             "attribute MAY be written by the client to indicate a new speed mode of" +
                             " the fan. This attribute SHALL be set to one of the values in the " +
                             "table below",
                    xref: { document: "cluster", section: "4.4.6.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "FanModeSequence",
                    access: "R[W] VO", conformance: "M", constraint: "0 to 5", default: "MS", quality: "N", type: "enum8",
                    details: "This indicates the fan speed ranges that SHALL be supported",
                    xref: { document: "cluster", section: "4.4.6.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "PercentSetting",
                    access: "RW VO", conformance: "M", constraint: "0 to 100", default: 0, quality: "X", type: "uint8",
                    details: "This attribute SHALL indicate the speed setting for the fan. This " +
                             "attribute MAY be written by the client to indicate a new fan speed. If" +
                             " the client writes null to this attribute, the attribute value SHALL " +
                             "NOT change. If this is set to 0, the server SHALL set the FanMode " +
                             "attribute value to Off",
                    xref: { document: "cluster", section: "4.4.6.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "PercentCurrent",
                    access: "R V", conformance: "M", constraint: "0 to 100", default: "desc", type: "uint8",
                    details: "This attribute SHALL indicate the actual currently operating fan speed" +
                             ", or zero to indicate that the fan is off. See Section 4.4.6.3.1 for " +
                             "more details",
                    xref: { document: "cluster", section: "4.4.6.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "SpeedMax",
                    access: "R V", conformance: "SPD", constraint: "1 to 100", default: "MS", quality: "F", type: "uint8",
                    details: "This attribute SHALL indicate that the fan has one speed (value of 1) " +
                             "or the maximum speed, if the fan is capable of multiple speeds",
                    xref: { document: "cluster", section: "4.4.6.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "SpeedSetting",
                    access: "RW VO", conformance: "SPD", constraint: "0 to SpeedMax", default: 0, quality: "X", type: "uint8",
                    details: "This attribute SHALL indicate the speed setting for the fan. This " +
                             "attribute MAY be written by the client to indicate a new fan speed. If" +
                             " the client writes null to this attribute, the attribute value SHALL " +
                             "NOT change. If this is set to 0, the server SHALL set the FanMode " +
                             "attribute value to Off. Please see the Section 4.4.6.6.1 for details " +
                             "on other values",
                    xref: { document: "cluster", section: "4.4.6.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "SpeedCurrent",
                    access: "R V", conformance: "SPD", constraint: "0 to SpeedMax", default: "desc", quality: "P", type: "uint8",
                    details: "This attribute SHALL indicate the actual currently operating fan speed" +
                             ", or zero to indicate that the fan is off",
                    xref: { document: "cluster", section: "4.4.6.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "RockSupport",
                    access: "R V", conformance: "RCK", constraint: "desc", default: 0, quality: "F", type: "map8",
                    details: "This attribute is a bitmap that indicates what rocking motions the " +
                             "server supports. The bitmap is shown in the table below",
                    xref: { document: "cluster", section: "4.4.6.8" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "RockSetting",
                    access: "RW VO", conformance: "RCK", constraint: "desc", default: 0, quality: "P", type: "map8",
                    details: "This attribute is a bitmap that indicates the current active fan " +
                             "rocking motion settings. Each bit SHALL only be set to 1, if the " +
                             "corresponding bit in the RockSupport attribute is set to 1, otherwise " +
                             "a status code of CONSTRAINT_ERROR SHALL be returned",
                    xref: { document: "cluster", section: "4.4.6.9" }
                },

                {
                    tag: "attribute", id: 0x0009, name: "WindSupport",
                    access: "R V", conformance: "WND", constraint: "desc", default: 0, quality: "F", type: "map8",
                    details: "This attribute is a bitmap that indicates what wind modes the server " +
                             "supports. At least one wind mode bit SHALL be set. The bitmap is shown" +
                             " in the table below",
                    xref: { document: "cluster", section: "4.4.6.10" }
                },

                {
                    tag: "attribute", id: 0x000a, name: "WindSetting",
                    access: "RW VO", conformance: "WND", constraint: "desc", default: 0, quality: "P", type: "map8",
                    details: "This attribute is a bitmap that indicates the current active fan wind " +
                             "feature settings. Each bit SHALL only be set to 1, if the " +
                             "corresponding bit in the WindSupport attribute is set to 1, otherwise " +
                             "a status code of CONSTRAINT_ERROR SHALL be returned",
                    xref: { document: "cluster", section: "4.4.6.11" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0204, name: "ThermostatUserInterfaceConfiguration",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "TemperatureDisplayMode",
                    access: "RW VO", conformance: "M", constraint: "desc", default: "0(Celsius)", type: "enum8",
                    details: "The TemperatureDisplayMode attribute specifies the units of the " +
                             "temperature displayed on the thermostat screen",
                    xref: { document: "cluster", section: "4.5.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "KeypadLockout",
                    access: "RW VM", conformance: "M", constraint: "desc", default: "0(nolockout)", type: "enum8",
                    details: "The KeypadLockout attribute specifies the level of functionality that " +
                             "is available to the user via the keypad",
                    xref: { document: "cluster", section: "4.5.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "ScheduleProgrammingVisibility",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, type: "enum8",
                    details: "The ScheduleProgrammingVisibility attribute is used to hide the weekly" +
                             " schedule programming functionality or menu on a thermostat from a " +
                             "user to prevent local user programming of the weekly schedule. The " +
                             "schedule programming MAY still be performed via a remote interface, " +
                             "and the thermostat MAY operate in schedule programming mode",
                    xref: { document: "cluster", section: "4.5.5.3" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0101, name: "DoorLock",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "LockState",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, quality: "X S P", type: "enum8",
                    details: "This attribute has the following possible values",
                    xref: { document: "cluster", section: "5.2.3.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "LockType",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, type: "enum8",
                    details: "The LockType attribute is indicated by an enumeration",
                    xref: { document: "cluster", section: "5.2.3.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "ActuatorEnabled",
                    access: "R V", conformance: "M", default: false, type: "bool",
                    details: "The ActuatorEnabled attribute indicates if the lock is currently able " +
                             "to (Enabled) or not able to (Disabled) process remote Lock, Unlock, or" +
                             " Unlock with Timeout commands",
                    xref: { document: "cluster", section: "5.2.3.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "DoorState",
                    access: "R V", conformance: "D, P, S", constraint: "desc", default: 0, quality: "X P", type: "enum8",
                    details: "The current door state as defined in DoorStateEnum",
                    xref: { document: "cluster", section: "5.2.3.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "DoorOpenEvents",
                    access: "RW VM", conformance: "[D, P, S]", default: 0, type: "uint32",
                    details: "This attribute holds the number of door open events that have occurred" +
                             " since it was last zeroed",
                    xref: { document: "cluster", section: "5.2.3.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "DoorClosedEvents",
                    access: "RW VM", conformance: "[D, P, S]", default: 0, type: "uint32",
                    details: "This attribute holds the number of door closed events that have " +
                             "occurred since it was last zeroed",
                    xref: { document: "cluster", section: "5.2.3.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "OpenPeriod",
                    access: "RW VM", conformance: "[D, P, S]", default: 0, type: "uint16",
                    details: "This attribute holds the number of minutes the door has been open " +
                             "since the last time it transitioned from closed to open",
                    xref: { document: "cluster", section: "5.2.3.7" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "NumberOfLogRecordsSupported",
                    access: "R V", conformance: "LOG", default: 0, quality: "F", type: "uint16",
                    details: "The number of available log records",
                    xref: { document: "cluster", section: "5.2.3.8" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "NumberOfTotalUsersSupported",
                    access: "R V", conformance: "USR", default: 0, quality: "F", type: "uint16",
                    details: "Number of total users supported by the lock",
                    xref: { document: "cluster", section: "5.2.3.9" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "NumberOfPinUsersSupported",
                    access: "R V", conformance: "P, IN", default: 0, quality: "F", type: "uint16",
                    details: "The number of PIN users supported",
                    xref: { document: "cluster", section: "5.2.3.10" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "NumberOfRfidUsersSupported",
                    access: "R V", conformance: "RID", default: 0, quality: "F", type: "uint16",
                    details: "The number of RFID users supported",
                    xref: { document: "cluster", section: "5.2.3.11" }
                },

                {
                    tag: "attribute", id: 0x0014, name: "NumberOfWeekDaySchedulesSupportedPerUser",
                    access: "R V", conformance: "WDSCH", default: 0, quality: "F", type: "uint8",
                    details: "The number of configurable week day schedule supported per user",
                    xref: { document: "cluster", section: "5.2.3.12" }
                },

                {
                    tag: "attribute", id: 0x0015, name: "NumberOfYearDaySchedulesSupportedPerUser",
                    access: "R V", conformance: "YDSCH", default: 0, quality: "F", type: "uint8",
                    details: "The number of configurable year day schedule supported per user",
                    xref: { document: "cluster", section: "5.2.3.13" }
                },

                {
                    tag: "attribute", id: 0x0016, name: "NumberOfHolidaySchedulesSupported",
                    access: "R V", conformance: "HDSCH", default: 0, quality: "F", type: "uint8",
                    details: "The number of holiday schedules supported for the entire door lock " +
                             "device",
                    xref: { document: "cluster", section: "5.2.3.14" }
                },

                {
                    tag: "attribute", id: 0x0017, name: "MaxPinCodeLength",
                    access: "R V", conformance: "P, IN", default: "MS", quality: "F", type: "uint8",
                    details: "An 8 bit value indicates the maximum length in bytes of a PIN Code on " +
                             "this device",
                    xref: { document: "cluster", section: "5.2.3.15" }
                },

                {
                    tag: "attribute", id: 0x0018, name: "MinPinCodeLength",
                    access: "R V", conformance: "P, IN", default: "MS", quality: "F", type: "uint8",
                    details: "An 8 bit value indicates the minimum length in bytes of a PIN Code on " +
                             "this device",
                    xref: { document: "cluster", section: "5.2.3.16" }
                },

                {
                    tag: "attribute", id: 0x0019, name: "MaxRfidCodeLength",
                    access: "R V", conformance: "RID", default: "MS", quality: "F", type: "uint8",
                    details: "An 8 bit value indicates the maximum length in bytes of a RFID Code on" +
                             " this device. The value depends on the RFID code range specified by " +
                             "the manufacturer, if media anti-collision identifiers (UID) are used " +
                             "as RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is " +
                             "recommended",
                    xref: { document: "cluster", section: "5.2.3.17" }
                },

                {
                    tag: "attribute", id: 0x001a, name: "MinRfidCodeLength",
                    access: "R V", conformance: "RID", default: "MS", quality: "F", type: "uint8",
                    details: "An 8 bit value indicates the minimum length in bytes of a RFID Code on" +
                             " this device. The value depends on the RFID code range specified by " +
                             "the manufacturer, if media anti-collision identifiers (UID) are used " +
                             "as RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is " +
                             "recommended",
                    xref: { document: "cluster", section: "5.2.3.18" }
                },

                {
                    tag: "attribute", id: 0x001b, name: "CredentialRulesSupport",
                    access: "R V", conformance: "USR", default: 1, quality: "F", type: "map8",
                    details: "This bitmap contains a bit for every value of CredentialRuleEnum " +
                             "supported on this device",
                    xref: { document: "cluster", section: "5.2.3.19" }
                },

                {
                    tag: "attribute", id: 0x001c, name: "NumberOfCredentialsSupportedPerUser",
                    access: "R V", conformance: "USR", default: 0, quality: "F", type: "uint8",
                    details: "The number of credentials that could be assigned for each user",
                    xref: { document: "cluster", section: "5.2.3.20" }
                },

                {
                    tag: "attribute", id: 0x0020, name: "EnableLogging",
                    access: "R[W] VA", conformance: "LOG", default: true, quality: "P", type: "bool",
                    details: "Enable/disable event logging. When event logging is enabled, all event" +
                             " messages are stored on the lock for retrieval. Logging events can be " +
                             "but not limited to Tamper Alarm, Lock, Unlock, AutoRelock, User Code " +
                             "Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a " +
                             "full detail of all the possible alarms and events, please refer to the" +
                             " full list in the Alarm and Event Masks Attribute Set",
                    xref: { document: "cluster", section: "5.2.3.21" }
                },

                {
                    tag: "attribute", id: 0x0021, name: "Language",
                    access: "R[W] VM", conformance: "O", constraint: "max 3", default: "MS", quality: "P", type: "string",
                    details: "Modifies the language for the on-screen or audible user interface " +
                             "using a 2-byte language code from ISO-639-1",
                    xref: { document: "cluster", section: "5.2.3.22" }
                },

                {
                    tag: "attribute", id: 0x0022, name: "LedSettings",
                    access: "R[W] VM", conformance: "O", constraint: "desc", default: 0, quality: "P", type: "uint8",
                    details: "The settings for the LED support three different modes, shown below",
                    xref: { document: "cluster", section: "5.2.3.25" }
                },

                {
                    tag: "attribute", id: 0x0023, name: "AutoRelockTime",
                    access: "R[W] VM", conformance: "O", default: "MS", quality: "P", type: "uint32",
                    details: "The number of seconds to wait after unlocking a lock before it " +
                             "automatically locks again. 0=disabled. If set, unlock operations from " +
                             "any source will be timed. For one time unlock with timeout use the " +
                             "specific command",
                    xref: { document: "cluster", section: "5.2.3.26" }
                },

                {
                    tag: "attribute", id: 0x0024, name: "SoundVolume",
                    access: "R[W] VM", conformance: "O", constraint: "desc", default: 0, quality: "P", type: "uint8",
                    details: "The sound volume on a door lock has four possible settings: silent, " +
                             "low, high and medium volumes, shown below",
                    xref: { document: "cluster", section: "5.2.3.27" }
                },

                {
                    tag: "attribute", id: 0x0025, name: "OperatingMode",
                    access: "R[W] VM", conformance: "M", constraint: "desc", default: 0, quality: "P", type: "enum8",
                    details: "The current operating mode of the lock (see OperatingModeEnum",
                    xref: { document: "cluster", section: "5.2.3.23" }
                },

                {
                    tag: "attribute", id: 0x0026, name: "SupportedOperatingModes",
                    access: "R V", conformance: "M", default: 65526, quality: "F", type: "map16",
                    details: "This bitmap contains all operating bits of the Operating Mode " +
                             "Attribute supported by the lock. All operating modes NOT supported by " +
                             "a lock SHALL be set to one. The value of the OperatingMode enumeration" +
                             " defines the related bit to be set, as shown below",
                    xref: { document: "cluster", section: "5.2.3.24" }
                },

                {
                    tag: "attribute", id: 0x0027, name: "DefaultConfigurationRegister",
                    access: "R V", conformance: "O", default: 0, quality: "P", type: "map16",
                    details: "This attribute represents the default configurations as they are " +
                             "physically set on the device (example: hardware dip switch setting, " +
                             "etc…) and represents the default setting for some of the attributes " +
                             "within this cluster (for example: LED, Auto Lock, Sound Volume, and " +
                             "Operating Mode attributes",
                    xref: { document: "cluster", section: "5.2.3.28" }
                },

                {
                    tag: "attribute", id: 0x0028, name: "EnableLocalProgramming",
                    access: "R[W] VA", conformance: "O", default: true, quality: "P", type: "bool",
                    details: "Enable/disable local programming on the door lock of certain features" +
                             " (see LocalProgrammingFeatures attribute). If this value is set to " +
                             "TRUE then local programming is enabled on the door lock for all " +
                             "features. If it is set to FALSE then local programming is disabled on " +
                             "the door lock for those features whose bit is set to 0 in the " +
                             "LocalProgrammingFeatures attribute. Local programming SHALL be enabled" +
                             " by default",
                    xref: { document: "cluster", section: "5.2.3.29" }
                },

                {
                    tag: "attribute", id: 0x0029, name: "EnableOneTouchLocking",
                    access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool",
                    details: "Enable/disable the ability to lock the door lock with a single touch " +
                             "on the door lock",
                    xref: { document: "cluster", section: "5.2.3.30" }
                },

                {
                    tag: "attribute", id: 0x002a, name: "EnableInsideStatusLed",
                    access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool",
                    details: "Enable/disable an inside LED that allows the user to see at a glance " +
                             "if the door is locked",
                    xref: { document: "cluster", section: "5.2.3.31" }
                },

                {
                    tag: "attribute", id: 0x002b, name: "EnablePrivacyModeButton",
                    access: "RW VM", conformance: "O", default: true, quality: "P", type: "bool",
                    details: "Enable/disable a button inside the door that is used to put the lock " +
                             "into privacy mode. When the lock is in privacy mode it cannot be " +
                             "manipulated from the outside",
                    xref: { document: "cluster", section: "5.2.3.32" }
                },

                {
                    tag: "attribute", id: 0x002c, name: "LocalProgrammingFeatures",
                    access: "R[W] VA", conformance: "O", default: 0, quality: "P", type: "map8",
                    details: "The local programming features that will be disabled when " +
                             "EnableLocalProgramming attribute is set to False. If a door lock doesn" +
                             "’t support disabling one aspect of local programming it SHALL return " +
                             "CONSTRAINT_ERROR during a write operation of this attribute. If the " +
                             "EnableLocalProgramming attribute is set to True then all local " +
                             "programming features SHALL be enabled regardless of the bits set to 0 " +
                             "in this attribute",
                    xref: { document: "cluster", section: "5.2.3.33" }
                },

                {
                    tag: "attribute", id: 0x0030, name: "WrongCodeEntryLimit",
                    access: "R[W] VA", conformance: "P, IN | RID", constraint: "1 to 255", default: "MS", quality: "P", type: "uint8",
                    details: "The number of incorrect Pin codes or RFID presentment attempts a user " +
                             "is allowed to enter before the lock will enter a lockout state. The " +
                             "value of this attribute is compared to all failing forms of credential" +
                             " presentation, including Pin codes used in an Unlock Command when " +
                             "RequirePINforRemoteOperation is set to true. Valid range is 1-255 " +
                             "incorrect attempts. The lockout state will be for the duration of " +
                             "UserCodeTemporaryDisableTime. If the attribute accepts writes and an " +
                             "attempt to write the value 0 is made, the device SHALL respond with " +
                             "CONSTRAINT_ERROR",
                    xref: { document: "cluster", section: "5.2.3.34" }
                },

                {
                    tag: "attribute", id: 0x0031, name: "UserCodeTemporaryDisableTime",
                    access: "R[W] VA", conformance: "P, IN | RID", constraint: "1 to 255", default: "MS", quality: "P", type: "uint8",
                    details: "The number of seconds that the lock shuts down following wrong code " +
                             "entry. Valid range is 1-255 seconds. Device can shut down to lock user" +
                             " out for specified amount of time. (Makes it difficult to try and " +
                             "guess a PIN for the device.) If the attribute accepts writes and an " +
                             "attempt to write the attribute to 0 is made, the device SHALL respond " +
                             "with CONSTRAINT_ERROR",
                    xref: { document: "cluster", section: "5.2.3.35" }
                },

                {
                    tag: "attribute", id: 0x0032, name: "SendPinOverTheAir",
                    access: "R[W] VA", conformance: "[P, IN]", default: true, quality: "P", type: "bool",
                    details: "Boolean set to True if it is ok for the door lock server to send PINs " +
                             "over the air. This attribute determines the behavior of the server’s " +
                             "TX operation. If it is false, then it is not ok for the device to send" +
                             " PIN in any messages over the air",
                    xref: { document: "cluster", section: "5.2.3.36" }
                },

                {
                    tag: "attribute", id: 0x0033, name: "RequirePiNforRemoteOperation",
                    access: "R[W] VA", conformance: "COTA & P, IN", default: true, quality: "P", type: "bool",
                    details: "Boolean set to True if the door lock server requires that an optional " +
                             "PINs be included in the payload of remote lock operation events like " +
                             "Lock, Unlock, Unlock with Timeout and Toggle in order to function",
                    xref: { document: "cluster", section: "5.2.3.37" }
                },

                {
                    tag: "attribute", id: 0x0035, name: "ExpiringUserTimeout",
                    access: "R[W] VA", conformance: "[USR]", constraint: "1 to 2880", default: "MS", quality: "P", type: "uint16",
                    details: "Number of minutes a PIN, RFID, Fingerprint, or other credential " +
                             "associated with a user of type ExpiringUser SHALL remain valid after " +
                             "its first use before expiring. When the credential expires the " +
                             "UserStatus for the corresponding user record SHALL be set to " +
                             "OccupiedDisabled",
                    xref: { document: "cluster", section: "5.2.3.38" }
                },

                {
                    tag: "attribute", id: 0x0040, name: "AlarmMask",
                    access: "RW VA", conformance: "O", default: 65535, quality: "P", type: "map16",
                    details: "This attribute is only supported if the Alarms cluster is on the same " +
                             "endpoint. The alarm mask is used to turn on/off alarms for particular " +
                             "functions. Alarms for an alarm group are enabled if the associated " +
                             "alarm mask bit is set. Each bit represents a group of alarms. Entire " +
                             "alarm groups can be turned on or off by setting or clearing the " +
                             "associated bit in the alarm mask",
                    xref: { document: "cluster", section: "5.2.3.39" }
                },

                {
                    tag: "attribute", id: 0x0041, name: "KeypadOperationEventMask",
                    access: "RW VA", conformance: "[NOT & P, IN]", default: 65535, quality: "P", type: "map16",
                    details: "Event mask used to turn on and off the transmission of keypad " +
                             "operation events. This mask DOES NOT apply to the storing of events in" +
                             " the event log. This mask only applies to the Operation Event " +
                             "Notification Command",
                    xref: { document: "cluster", section: "5.2.3.40" }
                },

                {
                    tag: "attribute", id: 0x0042, name: "RemoteOperationEventMask",
                    access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P", type: "map16",
                    details: "Event mask used to turn on and off the transmission of remote " +
                             "operation events. This mask DOES NOT apply to the storing of events in" +
                             " the event log. This mask only applies to the Operation Event",
                    xref: { document: "cluster", section: "5.2.3.41" }
                },

                {
                    tag: "attribute", id: 0x0043, name: "ManualOperationEventMask",
                    access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P", type: "map16",
                    details: "Event mask used to turn on and off manual operation events. This mask " +
                             "DOES NOT apply to the storing of events in the event log. This mask " +
                             "only applies to the Operation Event Notification Command",
                    xref: { document: "cluster", section: "5.2.3.42" }
                },

                {
                    tag: "attribute", id: 0x0044, name: "RfidOperationEventMask",
                    access: "RW VA", conformance: "[NOT & RID]", default: 65535, quality: "P", type: "map16",
                    details: "Event mask used to turn on and off RFID operation events. This mask " +
                             "DOES NOT apply to the storing of events in the event log. This mask " +
                             "only applies to the Operation Event Notification Command",
                    xref: { document: "cluster", section: "5.2.3.43" }
                },

                {
                    tag: "attribute", id: 0x0045, name: "KeypadProgrammingEventMask",
                    access: "RW VA", conformance: "[NOT & P, IN]", default: 65535, quality: "P", type: "map16",
                    details: "Event mask used to turn on and off keypad programming events. This " +
                             "mask DOES NOT apply to the storing of events in the event log. This " +
                             "mask only applies to the Programming Event Notification Command",
                    xref: { document: "cluster", section: "5.2.3.44" }
                },

                {
                    tag: "attribute", id: 0x0046, name: "RemoteProgrammingEventMask",
                    access: "RW VA", conformance: "[NOT]", default: 65535, quality: "P", type: "map16",
                    details: "Event mask used to turn on and off remote programming events. This " +
                             "mask DOES NOT apply to the storing of events in the event log. This " +
                             "mask only applies to the Programming Event Notification Command",
                    xref: { document: "cluster", section: "5.2.3.45" }
                },

                {
                    tag: "attribute", id: 0x0047, name: "RfidProgrammingEventMask",
                    access: "RW VA", conformance: "[NOT & RID]", default: 65535, quality: "P", type: "map16",
                    details: "Event mask used to turn on and off RFID programming events. This mask " +
                             "DOES NOT apply to the storing of events in the event log. This mask " +
                             "only applies to the Programming Event Notification Command",
                    xref: { document: "cluster", section: "5.2.3.46" }
                },

                {
                    tag: "event", id: 0x0000, name: "DoorLockAlarm",
                    access: "V", conformance: "M", priority: "critical",
                    details: "The door lock cluster provides several alarms which can be sent when " +
                             "there is a critical state on the door lock. The alarms available for " +
                             "the door lock cluster are listed in the AlarmCodeEnum section below",
                    xref: { document: "cluster", section: "5.2.5.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "DoorStateChange",
                    access: "V", conformance: "D, P, S", priority: "critical",
                    details: "The door lock server sends out a DoorStateChange event when the door " +
                             "lock door state changes. The data of this event SHALL contain the " +
                             "following information",
                    xref: { document: "cluster", section: "5.2.5.2" }
                },

                {
                    tag: "event", id: 0x0002, name: "LockOperation",
                    access: "V", conformance: "M", priority: "critical",
                    details: "The door lock server sends out a LockOperation event when the event is" +
                             " triggered by the various lock operation sources",
                    xref: { document: "cluster", section: "5.2.5.3" }
                },

                {
                    tag: "event", id: 0x0003, name: "LockOperationError",
                    access: "V", conformance: "M", priority: "critical",
                    details: "The door lock server sends out a LockOperationError event when a lock " +
                             "operation fails for various reasons",
                    xref: { document: "cluster", section: "5.2.5.4" }
                },

                {
                    tag: "event", id: 0x0004, name: "LockUserChange",
                    access: "V", conformance: "USR", priority: "info",
                    details: "The door lock server sends out a LockUserChange event when a lock user" +
                             ", schedule, or credential change has occurred",
                    xref: { document: "cluster", section: "5.2.5.5" }
                },

                {
                    tag: "command", id: 0x0000, name: "LockDoor",
                    access: "O T", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0001, name: "UnlockDoor",
                    access: "O T", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0002, name: "Toggle",
                    access: "O T", conformance: "X", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0003, name: "UnlockwithTimeout",
                    access: "O T", conformance: "O", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "GetLogRecord",
                    access: "M", conformance: "LOG", direction: "request", response: "GetLogRecordResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "GetLogRecordResponse",
                    conformance: "LOG", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0005, name: "SetPinCode",
                    access: "A T", conformance: "!USR & P, IN", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0006, name: "GetPinCode",
                    access: "A", conformance: "!USR & P, IN", direction: "request", response: "GetPinCodeResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0006, name: "GetPinCodeResponse",
                    conformance: "!USR & P, IN", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0007, name: "ClearPinCode",
                    access: "A T", conformance: "!USR & P, IN", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0008, name: "ClearAllPinCodes",
                    access: "A T", conformance: "!USR & P, IN", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0009, name: "SetUserStatus",
                    access: "A", conformance: "!USR & (P, IN | RID)", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000a, name: "GetUserStatus",
                    access: "A", conformance: "!USR & (P, IN | RID)", direction: "request", response: "GetUserStatusResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000a, name: "GetUserStatusResponse",
                    conformance: "!USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000b, name: "SetWeekDaySchedule",
                    access: "A", conformance: "WDSCH", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000c, name: "GetWeekDaySchedule",
                    access: "A", conformance: "WDSCH", direction: "request", response: "GetWeekDayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000c, name: "GetWeekDayScheduleResponse",
                    conformance: "WDSCH", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000d, name: "ClearWeekDaySchedule",
                    access: "A", conformance: "WDSCH", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000e, name: "SetYearDaySchedule",
                    access: "A", conformance: "YDSCH", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000f, name: "GetYearDaySchedule",
                    access: "A", conformance: "YDSCH", direction: "request", response: "GetYearDayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x000f, name: "GetYearDayScheduleResponse",
                    conformance: "YDSCH", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0010, name: "ClearYearDaySchedule",
                    access: "A", conformance: "YDSCH", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0011, name: "SetHolidaySchedule",
                    access: "A", conformance: "HDSCH", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0012, name: "GetHolidaySchedule",
                    access: "A", conformance: "HDSCH", direction: "request", response: "GetHolidayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0012, name: "GetHolidayScheduleResponse",
                    conformance: "HDSCH", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0013, name: "ClearHolidaySchedule",
                    access: "A", conformance: "HDSCH", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0014, name: "SetUserType",
                    access: "A", conformance: "!USR & (P, IN | RID)", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0015, name: "GetUserType",
                    access: "A", conformance: "!USR & (P, IN | RID)", direction: "request", response: "GetUserTypeResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0015, name: "GetUserTypeResponse",
                    conformance: "!USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0016, name: "SetRfidCode",
                    access: "A T", conformance: "!USR & RID", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0017, name: "GetRfidCode",
                    access: "A", conformance: "!USR & RID", direction: "request", response: "GetRfidCodeResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0017, name: "GetRfidCodeResponse",
                    conformance: "!USR & RID", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0018, name: "ClearRfidCode",
                    access: "A T", conformance: "!USR & RID", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0019, name: "ClearAllRfidCodes",
                    access: "A T", conformance: "!USR & RID", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x001a, name: "SetUser",
                    access: "A T", conformance: "USR", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x001b, name: "GetUser",
                    access: "A", conformance: "USR", direction: "request", response: "GetUserResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x001c, name: "GetUserResponse",
                    conformance: "USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x001d, name: "ClearUser",
                    access: "A T", conformance: "USR", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0020, name: "OperatingEventNotification",
                    conformance: "[NOT]", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0021, name: "ProgrammingEventNotification",
                    conformance: "[NOT]", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0022, name: "SetCredential",
                    access: "A T", conformance: "USR", direction: "request", response: "SetCredentialResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0023, name: "SetCredentialResponse",
                    conformance: "USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0024, name: "GetCredentialStatus",
                    access: "A", conformance: "USR", direction: "request", response: "GetCredentialStatusResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0025, name: "GetCredentialStatusResponse",
                    conformance: "USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", id: 0x0026, name: "ClearCredential",
                    access: "A T", conformance: "USR", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "datatype", name: "AlarmCodeEnum",
                    type: "enum8",
                    details: "The Alarm Code enum SHALL indicate the alarm type. The data type of " +
                             "the Alarm Code enum is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "LockJammed",
                            conformance: "M", description: "Locking Mechanism Jammed",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "LockFactoryReset",
                            conformance: "O", description: "Lock Reset to Factory Defaults",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "LockRadioPowerCycled",
                            conformance: "O", description: "Lock Radio Power Cycled",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "WrongCodeEntryLimit",
                            conformance: "[USR]", description: "Tamper Alarm - wrong code entry limit",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "FrontEsceutcheonRemoved",
                            conformance: "O", description: "Tamper Alarm - front escutcheon removed from main",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "DoorForcedOpen",
                            conformance: "[D, P, S]", description: "Forced Door Open under Door Locked Condition",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "DoorAjar",
                            conformance: "[D, P, S]", description: "Door ajar",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "ForcedUser",
                            conformance: "[USR]", description: "Force User SOS alarm",
                            details: "User has ability to open lock but a ForcedUser LockOperationType and " +
                                     "ForcedUser silent alarm will be emitted to allow a notified Node to " +
                                     "alert emergency services or contacts on the user account when used",
                            xref: { document: "cluster", section: "5.2.6.16.6" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0102, name: "WindowCovering",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Type",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, quality: "F", type: "enum8",
                    details: "The Type attribute identifies the type of window covering being " +
                             "controlled by this endpoint and SHALL be set to one of the non-" +
                             "reserved values in the table below",
                    xref: { document: "cluster", section: "5.3.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "PhysicalClosedLimitLift",
                    access: "R V", conformance: "[LF & P, A_LF & ABS]", default: 0, quality: "F", type: "uint16",
                    details: "The PhysicalClosedLimitLift attribute identifies the maximum possible " +
                             "encoder position possible (in centimeters) to position the height of " +
                             "the window covering Lift",
                    xref: { document: "cluster", section: "5.3.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "PhysicalClosedLimitTilt",
                    access: "R V", conformance: "[TL & P, A_TL & ABS]", default: 0, quality: "F", type: "uint16",
                    details: "The PhysicalClosedLimitTilt attribute identifies the maximum possible " +
                             "encoder position possible (tenth of a degrees) to position the angle " +
                             "of the window covering Tilt",
                    xref: { document: "cluster", section: "5.3.5.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "CurrentPositionLift1",
                    access: "R V", conformance: "[LF & P, A_LF & ABS]", constraint: "InstalledOpenLimitLift to InstalledClosedLimitLift", default: "null", quality: "X N", type: "uint16",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "CurrentPositionTilt1",
                    access: "R V", conformance: "[TL & P, A_TL & ABS]", constraint: "InstalledOpenLimitTilt to InstalledClosedLimitTilt", default: "null", quality: "X N", type: "uint16",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "NumberOfActuationsLift",
                    access: "R V", conformance: "[LF]", default: 0, quality: "N", type: "uint16",
                    details: "The NumberOfActuationsLift attribute identifies the total number of " +
                             "lift/slide actuations applied to the Window Covering since the device " +
                             "was installed",
                    xref: { document: "cluster", section: "5.3.5.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "NumberOfActuationsTilt",
                    access: "R V", conformance: "[TL]", default: 0, quality: "N", type: "uint16",
                    details: "The NumberOfActuationsTilt attribute identifies the total number of " +
                             "tilt actuations applied to the Window Covering since the device was " +
                             "installed",
                    xref: { document: "cluster", section: "5.3.5.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "ConfigStatus",
                    access: "R V", conformance: "M", constraint: "desc", default: "desc", quality: "N", type: "map8",
                    details: "The ConfigStatus attribute makes configuration and status information " +
                             "available. To change settings, devices SHALL write to the Mode " +
                             "attribute of the Window Covering Settings Attribute Set. The behavior " +
                             "causing the setting or clearing of each bit is vendor specific. See " +
                             "table below for details on each bit",
                    xref: { document: "cluster", section: "5.3.5.8" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "CurrentPositionLiftPercentage1",
                    access: "R V", conformance: "[LF & P, A_LF]", constraint: "0 to 100", default: "null", quality: "X N S P", type: "percent",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", id: 0x0009, name: "CurrentPositionTiltPercentage1",
                    access: "R V", conformance: "[TL & P, A_TL]", constraint: "0 to 100", default: "null", quality: "X N S P", type: "percent",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", id: 0x000a, name: "OperationalStatus",
                    access: "R V", conformance: "M", default: 0, quality: "P", type: "map8",
                    details: "The OperationalStatus attribute keeps track of currently ongoing " +
                             "operations and applies to all type of devices. See below for details " +
                             "about the meaning of individual bits",
                    xref: { document: "cluster", section: "5.3.5.15" }
                },

                {
                    tag: "attribute", id: 0x000b, name: "TargetPositionLiftPercent100Ths2",
                    access: "R V", conformance: "LF & P, A_LF", constraint: "0 to 10000", default: "null", quality: "X S P", type: "percent100ths",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", id: 0x000c, name: "TargetPositionTiltPercent100Ths2",
                    access: "R V", conformance: "TL & P, A_TL", constraint: "0 to 10000", default: "null", quality: "X S P", type: "percent100ths",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", id: 0x000d, name: "EndProductType",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, quality: "F", type: "enum8",
                    details: "The EndProductType attribute identifies the product type in complement" +
                             " of the main category indicated by the Type attribute. The window " +
                             "covering SHALL set this value to one of the values in the table below",
                    xref: { document: "cluster", section: "5.3.5.16" }
                },

                {
                    tag: "attribute", id: 0x000e, name: "CurrentPositionLiftPercent100Ths1",
                    access: "R V", conformance: "LF & P, A_LF", constraint: "0 to 10000", default: "null", quality: "X N P", type: "percent100ths",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", id: 0x000f, name: "CurrentPositionTiltPercent100Ths1",
                    access: "R V", conformance: "TL & P, A_TL", constraint: "0 to 10000", default: "null", quality: "X N P", type: "percent100ths",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "InstalledOpenLimitLift",
                    access: "R V", conformance: "LF & P, A_LF & ABS", constraint: "0 to 65534", default: 0, quality: "N", type: "uint16",
                    details: "The InstalledOpenLimitLift attribute identifies the Open Limit for " +
                             "Lifting the Window Covering whether position (in centimeters) is " +
                             "encoded or timed",
                    xref: { document: "cluster", section: "5.3.5.17" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "InstalledClosedLimitLift",
                    access: "R V", conformance: "LF & P, A_LF & ABS", constraint: "0 to 65534", default: 65534, quality: "N", type: "uint16",
                    details: "The InstalledClosedLimitLift attribute identifies the Closed Limit for" +
                             " Lifting the Window Covering whether position (in centimeters) is " +
                             "encoded or timed",
                    xref: { document: "cluster", section: "5.3.5.18" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "InstalledOpenLimitTilt",
                    access: "R V", conformance: "TL & P, A_TL & ABS", constraint: "0 to 65534", default: 0, quality: "N", type: "uint16",
                    details: "The InstalledOpenLimitTilt attribute identifies the Open Limit for " +
                             "Tilting the Window Covering whether position (in tenth of a degree) is" +
                             " encoded or timed",
                    xref: { document: "cluster", section: "5.3.5.19" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "InstalledClosedLimitTilt",
                    access: "R V", conformance: "TL & P, A_TL & ABS", constraint: "0 to 65534", default: 65534, quality: "N", type: "uint16",
                    details: "The InstalledClosedLimitTilt attribute identifies the Closed Limit for" +
                             " Tilting the Window Covering whether position (in tenth of a degree) " +
                             "is encoded or timed",
                    xref: { document: "cluster", section: "5.3.5.20" }
                },

                {
                    tag: "attribute", id: 0x0017, name: "Mode",
                    access: "RW VM", conformance: "M", default: 0, quality: "N", type: "map8",
                    details: "The Mode attribute allows configuration of the Window Covering, such " +
                             "as: reversing the motor direction, placing the Window Covering into " +
                             "calibration mode, placing the motor into maintenance mode, disabling " +
                             "the network, and disabling status LEDs. See below for details",
                    xref: { document: "cluster", section: "5.3.5.21" }
                },

                {
                    tag: "attribute", id: 0x001a, name: "SafetyStatus",
                    access: "R V", conformance: "O", constraint: "desc", default: 0, quality: "P", type: "map16",
                    details: "The SafetyStatus attribute reflects the state of the safety sensors " +
                             "and the common issues preventing movements. By default for nominal " +
                             "operation all flags are cleared (0). A device might support none, one " +
                             "or several bit flags from this attribute (all optional). See below for" +
                             " details about the meaning of individual bits",
                    xref: { document: "cluster", section: "5.3.5.22" }
                },

                {
                    tag: "command", id: 0x0000, name: "UpOrOpen",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "Upon receipt of this command, the Window Covering will adjust its " +
                             "position so the physical lift/slide and tilt is at the maximum open/up" +
                             " position. This will happen as fast as possible. The server attributes" +
                             " SHALL be updated as follows",
                    xref: { document: "cluster", section: "5.3.6.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "DownOrClose",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "Upon receipt of this command, the Window Covering will adjust its " +
                             "position so the physical lift/slide and tilt is at the maximum closed/" +
                             "down position. This will happen as fast as possible. The server " +
                             "attributes supported SHALL be updated as follows",
                    xref: { document: "cluster", section: "5.3.6.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "StopMotion",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "Upon receipt of this command, the Window Covering will stop any " +
                             "adjusting to the physical tilt and lift/slide that is currently " +
                             "occurring. The server attributes supported SHALL be updated as follows",
                    xref: { document: "cluster", section: "5.3.6.3" }
                },

                {
                    tag: "command", id: 0x0004, name: "GoToLiftValue",
                    access: "O", conformance: "[LF & ABS]", direction: "request", response: "status",
                    details: "The GoToLiftValue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "5.3.6.4" }
                },

                {
                    tag: "command", id: 0x0005, name: "GoToLiftPercentage",
                    access: "O", conformance: "LF & P, A_LF, [LF]", direction: "request", response: "status",
                    details: "The GoToLiftPercentage command SHALL have the following data fields",
                    xref: { document: "cluster", section: "5.3.6.5" }
                },

                {
                    tag: "command", id: 0x0007, name: "GoToTiltValue",
                    access: "O", conformance: "[TL & ABS]", direction: "request", response: "status",
                    details: "The GoToTiltValue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "5.3.6.6" }
                },

                {
                    tag: "command", id: 0x0008, name: "GoToTiltPercentage",
                    access: "O", conformance: "TL & P, A_TL, [TL]", direction: "request", response: "status",
                    details: "The GoToTiltPercentage command SHALL have the following data fields",
                    xref: { document: "cluster", section: "5.3.6.7" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x050e, name: "AccountLogin",
            classification: "application",
            children: [
                {
                    tag: "command", id: 0x0000, name: "GetSetupPin",
                    access: "A T", conformance: "M", direction: "request", response: "GetSetupPinResponse",
                    details: "The purpose of this command is to determine if the active user account" +
                             " of the given Content App matches the active user account of a given " +
                             "Commissionee, and when it does, return a Setup PIN code which can be " +
                             "used for password-authenticated session establishment (PASE) with the " +
                             "Commissionee",
                    xref: { document: "cluster", section: "6.2.4.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "GetSetupPinResponse",
                    conformance: "M", direction: "response",
                    details: "This message is sent in response to the GetSetupPIN command, and " +
                             "contains the Setup PIN code, or null when the account identified in " +
                             "the request does not match the active account of the running Content " +
                             "App",
                    xref: { document: "cluster", section: "6.2.4.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "Login",
                    access: "A T", conformance: "M", direction: "request", response: "status",
                    details: "The purpose of this command is to allow the Content App to assume the " +
                             "user account of a given Commissionee by leveraging the Setup PIN code " +
                             "input by the user during the commissioning process",
                    xref: { document: "cluster", section: "6.2.4.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "Logout",
                    access: "O T", conformance: "M", direction: "request", response: "status",
                    details: "The purpose of this command is to instruct the Content App to clear " +
                             "the current user account. This command SHOULD be used by clients of a " +
                             "Content App to indicate the end of a user session",
                    xref: { document: "cluster", section: "6.2.4.4" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x050d, name: "ApplicationBasic",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "VendorName",
                    access: "R V", conformance: "O", constraint: "max 32", default: "empty", quality: "F", type: "string",
                    details: "This attribute SHALL specify a human readable (displayable) name of " +
                             "the vendor for the Content App",
                    xref: { document: "cluster", section: "6.3.3.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "VendorId",
                    access: "R V", conformance: "O", default: 0, quality: "F", type: "vendor-id",
                    details: "This attribute, if present, SHALL specify the Connectivity Standards " +
                             "Alliance assigned Vendor ID for the Content App",
                    xref: { document: "cluster", section: "6.3.3.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "ApplicationName",
                    access: "R V", conformance: "M", constraint: "desc", default: "", quality: "F", type: "string",
                    details: "This attribute SHALL specify a human readable (displayable) name of " +
                             "the Content App assigned by the vendor. For example, \"NPR On Demand\". " +
                             "The maximum length of the ApplicationName attribute is 256 bytes of " +
                             "UTF-8 characters",
                    xref: { document: "cluster", section: "6.3.3.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "ProductId",
                    access: "R V", conformance: "O", default: 0, quality: "F", type: "uint16",
                    details: "This attribute, if present, SHALL specify a numeric ID assigned by the" +
                             " vendor to identify a specific Content App made by them. If the " +
                             "Content App is certified by the Connectivity Standards Alliance, then " +
                             "this would be the Product ID as specified by the vendor for the " +
                             "certification",
                    xref: { document: "cluster", section: "6.3.3.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "Application",
                    access: "R V", conformance: "M", constraint: "desc", default: "", quality: "F", type: "ApplicationStruct",
                    details: "This attribute SHALL specify a Content App which consists of an " +
                             "Application ID using a specified catalog",
                    xref: { document: "cluster", section: "6.3.3.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "Status",
                    access: "R V", conformance: "M", constraint: "desc", default: "ms", type: "ApplicationStatusEnum",
                    details: "This attribute SHALL specify the current running status of the " +
                             "application",
                    xref: { document: "cluster", section: "6.3.3.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "ApplicationVersion",
                    access: "R V", conformance: "M", constraint: "max 32", default: "", quality: "F", type: "string",
                    details: "This attribute SHALL specify a human readable (displayable) version of" +
                             " the Content App assigned by the vendor. The maximum length of the " +
                             "ApplicationVersion attribute is 32 bytes of UTF-8 charac",
                    xref: { document: "cluster", section: "6.3.3.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "AllowedVendorList",
                    access: "R A", conformance: "M", constraint: "None", default: "", quality: "F", type: "list",
                    details: "This is a list of vendor IDs. Each entry is a vendor-id",
                    xref: { document: "cluster", section: "6.3.3.8" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "vendor-id"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationStruct",
                    type: "struct",
                    details: "This indicates a global identifier for an Application given a catalog",
                    xref: { document: "cluster", section: "6.3.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "CatalogVendorId",
                            conformance: "M", default: 0, type: "uint16",
                            details: "This SHALL indicate the Connectivity Standards Alliance issued vendor " +
                                     "ID for the catalog. The DIAL registry SHALL use value 0x0000",
                            xref: { document: "cluster", section: "6.3.4.1.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "ApplicationId",
                            conformance: "M", default: "", type: "string",
                            details: "This SHALL indicate the application identifier, expressed as a string" +
                                     ", such as \"123456-5433\", \"PruneVideo\" or \"Company X\". This field SHALL" +
                                     " be unique within a catalog",
                            xref: { document: "cluster", section: "6.3.4.1.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x050c, name: "ApplicationLauncher",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "CatalogList",
                    access: "R V", conformance: "AP", constraint: "None", default: "", quality: "N", type: "list",
                    details: "This attribute SHALL specify the list of supported application " +
                             "catalogs, where each entry in the list is the CSA-issued vendor ID for" +
                             " the catalog. The DIAL registry (see [DIAL Registry]) SHALL use value " +
                             "0x0000",
                    xref: { document: "cluster", section: "6.4.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "uint16"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentApp",
                    access: "R V", conformance: "O", constraint: "desc", default: "null", quality: "X", type: "ApplicationEPStruct",
                    details: "This attribute SHALL specify the current in-focus application, " +
                             "identified using an Application ID, catalog vendor ID and the " +
                             "corresponding endpoint number when the application is represented by a" +
                             " Content App endpoint. A null SHALL be used to indicate there is no " +
                             "current in-focus application",
                    xref: { document: "cluster", section: "6.4.3.2" }
                },

                {
                    tag: "command", id: 0x0000, name: "LaunchApp",
                    access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
                    details: "Upon receipt of this command, the server SHALL launch the application " +
                             "with optional data. The application SHALL be either",
                    xref: { document: "cluster", section: "6.4.4.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "StopApp",
                    access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
                    details: "Upon receipt of this command, the server SHALL stop the application if" +
                             " it is running. The application SHALL be either",
                    xref: { document: "cluster", section: "6.4.4.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "HideApp",
                    access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
                    details: "Upon receipt of this command, the server SHALL hide the application. " +
                             "The application SHALL be either",
                    xref: { document: "cluster", section: "6.4.4.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "LauncherResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to LaunchApp/StopApp/" +
                             "HideApp commands",
                    xref: { document: "cluster", section: "6.4.4.4" }
                },

                {
                    tag: "datatype", name: "StatusEnum",
                    type: "enum8",
                    details: "StatusEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.4.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.4.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "AppNotAvailable",
                            conformance: "M", description: "Requested app is not available.",
                            xref: { document: "cluster", section: "6.4.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "SystemBusy",
                            conformance: "M", description: "Video platform unable to honor command.",
                            xref: { document: "cluster", section: "6.4.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x050b, name: "AudioOutput",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "OutputList",
                    access: "R V", conformance: "M", constraint: "None", default: "", type: "list",
                    details: "This list provides the outputs supported by the device",
                    xref: { document: "cluster", section: "6.5.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "OutputInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentOutput",
                    access: "R V", conformance: "M", default: 0, type: "uint8",
                    details: "This field contains the value of the index field of the currently " +
                             "selected OutputInfoStruct",
                    xref: { document: "cluster", section: "6.5.3.2" }
                },

                {
                    tag: "command", id: 0x0000, name: "SelectOutput",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "6.5.4" }
                },

                {
                    tag: "command", id: 0x0001, name: "RenameOutput",
                    access: "M", conformance: "NU", direction: "request", response: "status",
                    details: "Upon receipt, this SHALL rename the output at a specific index in the " +
                             "Output List",
                    xref: { document: "cluster", section: "6.5.4.2" }
                },

                {
                    tag: "datatype", name: "OutputInfoStruct",
                    type: "struct",
                    details: "This contains information about an output",
                    xref: { document: "cluster", section: "6.5.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Index",
                            conformance: "M", default: 0, type: "uint8",
                            details: "This SHALL indicate the unique index into the list of outputs",
                            xref: { document: "cluster", section: "6.5.5.1.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "OutputType",
                            conformance: "M", constraint: "desc", default: "", type: "OutputTypeEnum",
                            details: "This SHALL indicate the type of output",
                            xref: { document: "cluster", section: "6.5.5.1.2" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Name",
                            conformance: "M", default: "", type: "string",
                            details: "The device defined and user editable output name, such as “Soundbar" +
                                     "”, “Speakers”. This field may be blank, but SHOULD be provided when " +
                                     "known",
                            xref: { document: "cluster", section: "6.5.5.1.3" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0504, name: "Channel",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ChannelList",
                    access: "R V", conformance: "CL", constraint: "None", default: "empty", type: "list",
                    details: "This optional list provides the channels supported",
                    xref: { document: "cluster", section: "6.6.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ChannelInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "Lineup",
                    access: "R V", conformance: "LI", constraint: "desc", default: "", type: "LineupInfoStruct",
                    details: "This optional field identifies the channel lineup using external data " +
                             "sources",
                    xref: { document: "cluster", section: "6.6.3.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "CurrentChannel",
                    access: "R V", conformance: "O", constraint: "desc", default: undefined, quality: "X", type: "ChannelInfoStruct",
                    details: "This optional field contains the current channel. When supported but a" +
                             " channel is not currently tuned to (if a content application is in " +
                             "foreground), the value of the field SHALL be null",
                    xref: { document: "cluster", section: "6.6.3.3" }
                },

                {
                    tag: "command", id: 0x0000, name: "ChangeChannel",
                    access: "O", conformance: "CL, LI", direction: "request", response: "ChangeChannelResponse",
                    details: "Change the channel to the channel case-insensitive exact matching the " +
                             "value passed as an argument",
                    xref: { document: "cluster", section: "6.6.4.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "ChangeChannelResponse",
                    conformance: "CL, LI", direction: "response",
                    details: "This command SHALL be generated in response to a ChangeChannel command" +
                             ". The data for this command SHALL be as follows",
                    xref: { document: "cluster", section: "6.6.4.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "ChangeChannelByNumber",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "Change the channel to the channel with the given Number in the " +
                             "ChannelList attribute. The data for this command SHALL be as follows",
                    xref: { document: "cluster", section: "6.6.4.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "SkipChannel",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "This command provides channel up and channel down functionality, but " +
                             "allows channel index jumps of size Count",
                    xref: { document: "cluster", section: "6.6.4.4" }
                },

                {
                    tag: "datatype", name: "ChannelInfoStruct",
                    type: "struct",
                    details: "This indicates a channel in a channel lineup",
                    xref: { document: "cluster", section: "6.6.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "MajorNumber",
                            conformance: "M", default: 0, type: "uint16",
                            details: "This SHALL indicate the channel major number value (for example, using" +
                                     " ATSC format). When the channel number is expressed as a string, such " +
                                     "as \"13.1\" or \"256\", the major number would be 13 or 256, respectively",
                            xref: { document: "cluster", section: "6.6.5.1.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "MinorNumber",
                            conformance: "M", default: 0, type: "uint16",
                            details: "This SHALL indicate the channel minor number value (for example, using" +
                                     " ATSC format). When the channel number is expressed as a string, such " +
                                     "as \"13.1\" or \"256\", the minor number would be 1 or 0, respectively",
                            xref: { document: "cluster", section: "6.6.5.1.2" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Name",
                            conformance: "O", default: "empty", type: "string",
                            details: "This SHALL indicate the marketing name for the channel, such as “The " +
                                     "CW\" or \"Comedy Central\". This field is optional, but SHOULD be " +
                                     "provided when known",
                            xref: { document: "cluster", section: "6.6.5.1.3" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "CallSign",
                            conformance: "O", default: "empty", type: "string",
                            details: "This SHALL indicate the call sign of the channel, such as \"PBS\". This " +
                                     "field is optional, but SHOULD be provided when known",
                            xref: { document: "cluster", section: "6.6.5.1.4" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "AffiliateCallSign",
                            conformance: "O", default: "empty", type: "string",
                            details: "This SHALL indicate the local affiliate call sign, such as \"KCTS\". " +
                                     "This field is optional, but SHOULD be provided when known",
                            xref: { document: "cluster", section: "6.6.5.1.5" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x050a, name: "ContentLauncher",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "AcceptHeader",
                    access: "R V", conformance: "UP", constraint: "max 100[max 1024]", default: "empty", quality: "N", type: "list",
                    details: "This list provides list of content types supported by the Video Player" +
                             " or Content App in the form of entries in the HTTP \"Accept\" request " +
                             "header",
                    xref: { document: "cluster", section: "6.7.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "string"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "SupportedStreamingProtocols",
                    access: "R V", conformance: "UP", default: 0, quality: "N", type: "map32",
                    details: "This attribute provides information about supported streaming " +
                             "protocols",
                    xref: { document: "cluster", section: "6.7.3.2" }
                },

                {
                    tag: "command", id: 0x0000, name: "LaunchContent",
                    access: "O", conformance: "CS", direction: "request", response: "LauncherResponse",
                    details: "Upon receipt, this SHALL launch the specified content with optional " +
                             "search criteria. This command returns a Launch Response",
                    xref: { document: "cluster", section: "6.7.4.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "LaunchUrl",
                    access: "O", conformance: "UP", direction: "request", response: "LauncherResponse",
                    details: "Upon receipt, this SHALL launch content from the specified URL",
                    xref: { document: "cluster", section: "6.7.4.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "LauncherResponse",
                    conformance: "CS | UP", direction: "response",
                    details: "This command SHALL be generated in response to LaunchContent and " +
                             "LaunchURL commands",
                    xref: { document: "cluster", section: "6.7.4.3" }
                },

                {
                    tag: "datatype", name: "StatusEnum",
                    type: "enum8",
                    details: "StatusEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.7.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.7.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "UrlNotAvailable",
                            conformance: "M", description: "Requested URL could not be reached by device.",
                            xref: { document: "cluster", section: "6.7.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "AuthFailed",
                            conformance: "M", description: "Requested URL returned 401 error code.",
                            xref: { document: "cluster", section: "6.7.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0509, name: "KeypadInput",
            classification: "application",
            children: [
                {
                    tag: "command", id: 0x0000, name: "SendKey",
                    access: "O", conformance: "M", direction: "request", response: "SendKeyResponse",
                    details: "Upon receipt, this SHALL process a keycode as input to the media " +
                             "device",
                    xref: { document: "cluster", section: "6.8.3.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "SendKeyResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to a SendKey command. The " +
                             "data for this command SHALL be as follows",
                    xref: { document: "cluster", section: "6.8.3.2" }
                },

                {
                    tag: "datatype", name: "StatusEnum",
                    type: "enum8",
                    details: "Status Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.8.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Success",
                            conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.8.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "UnsupportedKey",
                            conformance: "M", description: "Command failed: Key code is not supported.",
                            xref: { document: "cluster", section: "6.8.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "InvalidKeyInCurrentState",
                            conformance: "M", description: "Command failed: Requested key code is invalid in the context of the responder’s current state.",
                            xref: { document: "cluster", section: "6.8.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0507, name: "MediaInput",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "InputList",
                    access: "R V", conformance: "M", default: "", type: "list",
                    details: "This list provides the media inputs supported by the device",
                    xref: { document: "cluster", section: "6.9.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "InputInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentInput",
                    access: "R V", conformance: "M", default: 0, type: "uint8",
                    details: "This field contains the value of the index field of the currently " +
                             "selected InputInfoStruct",
                    xref: { document: "cluster", section: "6.9.3.2" }
                },

                {
                    tag: "command", id: 0x0000, name: "SelectInput",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "Upon receipt, this SHALL change the media input on the device to the " +
                             "input at a specific index in the Input List",
                    xref: { document: "cluster", section: "6.9.4.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "ShowInputStatus",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "Upon receipt, this SHALL display the active status of the input list " +
                             "on screen",
                    xref: { document: "cluster", section: "6.9.4.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "HideInputStatus",
                    access: "O", conformance: "M", direction: "request", response: "status",
                    details: "Upon receipt, this SHALL hide the input list from the screen",
                    xref: { document: "cluster", section: "6.9.4.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "RenameInput",
                    access: "M", conformance: "NU", direction: "request", response: "status",
                    details: "Upon receipt, this SHALL rename the input at a specific index in the " +
                             "Input List. Updates to the input name SHALL appear in the device’s " +
                             "settings menus",
                    xref: { document: "cluster", section: "6.9.4.4" }
                },

                {
                    tag: "datatype", name: "InputInfoStruct",
                    type: "struct",
                    details: "This contains information about an input",
                    xref: { document: "cluster", section: "6.9.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Index",
                            conformance: "M", default: 0, type: "uint8",
                            details: "This SHALL indicate the unique index into the list of Inputs",
                            xref: { document: "cluster", section: "6.9.5.1.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "InputType",
                            conformance: "M", constraint: "desc", default: "", type: "InputTypeEnum",
                            details: "This SHALL indicate the type of input",
                            xref: { document: "cluster", section: "6.9.5.1.2" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Name",
                            conformance: "M", default: "", type: "string",
                            details: "This SHALL indicate the input name, such as “HDMI 1”. This field may " +
                                     "be blank, but SHOULD be provided when known",
                            xref: { document: "cluster", section: "6.9.5.1.3" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Description",
                            conformance: "M", default: "", type: "string",
                            details: "This SHALL indicate the user editable input description, such as “" +
                                     "Living room Playstation”. This field may be blank, but SHOULD be " +
                                     "provided when known",
                            xref: { document: "cluster", section: "6.9.5.1.4" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0506, name: "MediaPlayback",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "CurrentState",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, type: "PlaybackStateEnum",
                    details: "This SHALL indicate the current playback state of media",
                    xref: { document: "cluster", section: "6.10.3.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "StartTime",
                    access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X", type: "epoch-us",
                    details: "This SHALL indicate the start time of the media, in case the media has" +
                             " a fixed start time (for example, live stream or television broadcast" +
                             "), or null when start time does not apply to the current",
                    xref: { document: "cluster", section: "6.10.3.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "Duration",
                    access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X", type: "uint64",
                    details: "This SHALL indicate the duration, in milliseconds, of the current " +
                             "media being played back or null when duration is not applicable (for " +
                             "example, in live streaming content with no known duration). This " +
                             "attribute SHALL never be 0",
                    xref: { document: "cluster", section: "6.10.3.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "SampledPosition",
                    access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X", type: "PlaybackPositionStruct",
                    details: "This SHALL indicate the position of playback (Position field) at the " +
                             "time (UpdateAt field) specified in the attribute. The client MAY use " +
                             "the SampledPosition attribute to compute the current position within " +
                             "the media stream based on the PlaybackSpeed, PlaybackPositionStruct." +
                             "UpdatedAt and PlaybackPositionStruct.Position fields. To enable this, " +
                             "the SampledPosition attribute SHALL be updated whenever a change in " +
                             "either the playback speed or the playback position is triggered " +
                             "outside the normal playback of the media. The events which MAY cause " +
                             "this to happen include",
                    xref: { document: "cluster", section: "6.10.3.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "PlaybackSpeed",
                    access: "R V", conformance: "AS", constraint: "desc", default: 0, type: "single",
                    details: "This SHALL indicate the speed at which the current media is being " +
                             "played. The new PlaybackSpeed",
                    xref: { document: "cluster", section: "6.10.3.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "SeekRangeEnd",
                    access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X", type: "uint64",
                    details: "This SHALL indicate the furthest forward valid position to which a " +
                             "client MAY seek forward, in milliseconds from the start of the media. " +
                             "When the media has an associated StartTime, a value of null SHALL " +
                             "indicate that a seek forward is valid only until the current time " +
                             "within the media, using a position computed from the difference " +
                             "between the current time offset and StartTime, in milliseconds from " +
                             "start of the media, truncating fractional milliseconds towards 0. A " +
                             "value of Nas when StartTime is not specified SHALL indicate that " +
                             "seeking forward is not allowed",
                    xref: { document: "cluster", section: "6.10.3.7" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "SeekRangeStart",
                    access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X", type: "uint64",
                    details: "This SHALL indicate the earliest valid position to which a client MAY " +
                             "seek back, in milliseconds from start of the media. A value of Nas " +
                             "SHALL indicate that seeking backwards is not allowed",
                    xref: { document: "cluster", section: "6.10.3.6" }
                },

                {
                    tag: "command", id: 0x0000, name: "Play",
                    access: "O", conformance: "M", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL play media. If content is currently in a " +
                             "FastForward or Rewind state. Play SHALL return media to normal " +
                             "playback speed",
                    xref: { document: "cluster", section: "6.10.4.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "Pause",
                    access: "O", conformance: "M", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL pause playback of the media",
                    xref: { document: "cluster", section: "6.10.4.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "Stop",
                    access: "O", conformance: "M", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL stop playback of the media. User-visible " +
                             "outcome is context-specific. This MAY navigate the user back to the " +
                             "location from where the media was originally launched",
                    xref: { document: "cluster", section: "6.10.4.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "StartOver",
                    access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL Start Over with the current media playback " +
                             "item",
                    xref: { document: "cluster", section: "6.10.4.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "Previous",
                    access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL cause the handler to be invoked for \"Previous" +
                             "\". User experience is context-specific. This will often Go back to the" +
                             " previous media playback item",
                    xref: { document: "cluster", section: "6.10.4.5" }
                },

                {
                    tag: "command", id: 0x0005, name: "Next",
                    access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL cause the handler to be invoked for \"Next\". " +
                             "User experience is context- specific. This will often Go forward to " +
                             "the next media playback item",
                    xref: { document: "cluster", section: "6.10.4.6" }
                },

                {
                    tag: "command", id: 0x0006, name: "Rewind",
                    access: "O", conformance: "VS", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL start playback of the media backward in case " +
                             "the media is currently playing in the forward direction or is not " +
                             "playing. If the playback is already happening in the backwards " +
                             "direction receipt of this command SHALL increase the speed of the " +
                             "media playback back",
                    xref: { document: "cluster", section: "6.10.4.7" }
                },

                {
                    tag: "command", id: 0x0007, name: "FastForward",
                    access: "O", conformance: "VS", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL start playback of the media in the forward " +
                             "direction in case the media is currently playing in the backward " +
                             "direction or is not playing. If the playback is already happening in " +
                             "the forward direction receipt of this command SHALL increase the speed" +
                             " of the media playback",
                    xref: { document: "cluster", section: "6.10.4.8" }
                },

                {
                    tag: "command", id: 0x0008, name: "SkipForward",
                    access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL Skip forward in the media by the given number" +
                             " of milliseconds, using the data as follows",
                    xref: { document: "cluster", section: "6.10.4.9" }
                },

                {
                    tag: "command", id: 0x0009, name: "SkipBackward",
                    access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL Skip backward in the media by the given " +
                             "number of milliseconds, using the data as follows",
                    xref: { document: "cluster", section: "6.10.4.10" }
                },

                {
                    tag: "command", id: 0x000a, name: "PlaybackResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to various Playback " +
                             "Commands. The data for this command SHALL be as follows",
                    xref: { document: "cluster", section: "6.10.4.12" }
                },

                {
                    tag: "command", id: 0x000b, name: "Seek",
                    access: "O", conformance: "AS", direction: "request", response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL change the playback position in the media to " +
                             "the given position using data as follows",
                    xref: { document: "cluster", section: "6.10.4.11" }
                },

                {
                    tag: "datatype", name: "PlaybackStateEnum",
                    type: "enum8",
                    details: "PlaybackStateEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.10.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Playing",
                            conformance: "M", description: "Media is currently playing (includes FF and REW)",
                            xref: { document: "cluster", section: "6.10.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Paused",
                            conformance: "M", description: "Media is currently paused",
                            xref: { document: "cluster", section: "6.10.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "NotPlaying",
                            conformance: "M", description: "Media is not currently playing",
                            xref: { document: "cluster", section: "6.10.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Buffering",
                            conformance: "M", description: "Media is not currently buffering and playback will start when buffer has been filled",
                            xref: { document: "cluster", section: "6.10.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0505, name: "TargetNavigator",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "TargetList",
                    access: "R V", conformance: "M", default: "", type: "list",
                    details: "The TargetList attribute SHALL represent a list of targets that can be" +
                             " navigated to within the experience presented to the user by the " +
                             "Endpoint (Video Player or Content App). The list SHALL not contain any" +
                             " entries with the same Identifier in the TargetInfoStruct object",
                    xref: { document: "cluster", section: "6.11.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "TargetInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentTarget",
                    access: "R V", conformance: "O", constraint: "desc", default: "null", quality: "X", type: "uint8",
                    details: "The CurrentTarget attribute SHALL represent the Identifier for the " +
                             "target which is currently in foreground on the corresponding Endpoint" +
                             " (Video Player or Content App), or null to indicate that no target is " +
                             "in the foreground",
                    xref: { document: "cluster", section: "6.11.3.2" }
                },

                {
                    tag: "command", id: 0x0000, name: "NavigateTarget",
                    access: "O", conformance: "M", direction: "request", response: "NavigateTargetResponse",
                    details: "Upon receipt, this SHALL navigation the UX to the target identified",
                    xref: { document: "cluster", section: "6.11.4.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "NavigateTargetResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to NavigateTarget command",
                    xref: { document: "cluster", section: "6.11.4.2" }
                },

                {
                    tag: "datatype", name: "TargetInfoStruct",
                    type: "struct",
                    details: "This indicates an object describing the navigable target",
                    xref: { document: "cluster", section: "6.11.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Identifier",
                            conformance: "M", default: 0, type: "uint8",
                            details: "An unique id within the TargetList",
                            xref: { document: "cluster", section: "6.11.5.1.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Name",
                            conformance: "M", default: "", type: "string",
                            details: "A name string for the TargetInfoStruct",
                            xref: { document: "cluster", section: "6.11.5.1.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x001d, name: "Descriptor",
            classification: "endpoint",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "DeviceTypeList",
                    access: "R V", conformance: "M", constraint: "min 1", default: "desc", quality: "F", type: "list",
                    details: "This is a list of device types and corresponding revisions declaring " +
                             "endpoint conformance (see DeviceTypeStruct). At least one device type " +
                             "entry SHALL be present",
                    xref: { document: "core", section: "9.5.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "DeviceTypeStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "ServerList",
                    access: "R V", conformance: "M", default: "empty", quality: "F", type: "list",
                    details: "This attribute SHALL list each cluster ID for the server clusters " +
                             "present on the endpoint instance",
                    xref: { document: "core", section: "9.5.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "cluster-id"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "ClientList",
                    access: "R V", conformance: "M", default: "empty", quality: "F", type: "list",
                    details: "This attribute SHALL list each cluster ID for the client clusters " +
                             "present on the endpoint instance",
                    xref: { document: "core", section: "9.5.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "cluster-id"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0003, name: "PartsList",
                    access: "R V", conformance: "M", default: "empty", type: "list",
                    details: "This attribute indicates composition of the device type instance. " +
                             "Device type instance composition SHALL include the endpoints in this " +
                             "list. See Endpoint Composition for more information which endpoints to" +
                             " include in this list",
                    xref: { document: "core", section: "9.5.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "endpoint-no"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DeviceTypeStruct",
                    type: "struct",
                    details: "The device type and revision define endpoint conformance to a release " +
                             "of a device type definition. See the Data Model specification for more" +
                             " information",
                    xref: { document: "core", section: "9.5.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "DeviceType",
                            conformance: "M", default: 0, type: "devtype-id",
                            xref: { document: "core", section: "9.5.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Revision",
                            conformance: "M", constraint: "min 1", default: 0, type: "uint16",
                            xref: { document: "core", section: "9.5.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x001e, name: "Binding",
            classification: "endpoint",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Binding",
                    access: "RW F VM", conformance: "M", constraint: "desc", default: "[]", quality: "N", type: "list",
                    details: "Each entry SHALL represent a binding. Here are some examples",
                    xref: { document: "core", section: "9.6.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "TargetStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TargetStruct",
                    type: "struct",
                    details: "Node Field",
                    xref: { document: "core", section: "9.6.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "Node",
                            access: "F", conformance: "Endpoint", default: 0, type: "node-id",
                            xref: { document: "core", section: "9.6.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Group",
                            access: "F", conformance: "!Endpoint", default: 0, type: "group-id",
                            xref: { document: "core", section: "9.6.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Endpoint",
                            access: "F", conformance: "!Group", default: 0, type: "endpoint-no",
                            xref: { document: "core", section: "9.6.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Cluster",
                            access: "F", conformance: "O", default: 0, type: "cluster-id",
                            xref: { document: "core", section: "9.6.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0040, name: "FixedLabel",
            classification: "endpoint",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "LabelList",
                    access: "R V", conformance: "M", default: "empty", quality: "N", type: "list",
                    xref: { document: "core", section: "9.8.4" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "LabelStruct"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0041, name: "UserLabel",
            classification: "endpoint",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "LabelList",
                    access: "RW VM", conformance: "M", default: "empty", quality: "N", type: "list",
                    details: "An implementation SHALL support at least 4 list entries per node for " +
                             "all User Label cluster instances on the node",
                    xref: { document: "core", section: "9.9.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "LabelStruct"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x001f, name: "AccessControl",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Acl",
                    access: "RW F A", conformance: "M", constraint: "desc", default: "desc", type: "list",
                    details: "An attempt to add an Access Control Entry when no more entries are " +
                             "available SHALL result in a RESOURCE_EXHAUSTED error being reported " +
                             "and the ACL attribute SHALL NOT have the entry",
                    xref: { document: "core", section: "9.10.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "AccessControlEntryStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "Extension",
                    access: "RW F A", conformance: "O", constraint: "desc", default: "desc", type: "list",
                    details: "If present, the Access Control Extensions MAY be used by " +
                             "Administrators to store arbitrary data related to fabric’s Access " +
                             "Control Entries",
                    xref: { document: "core", section: "9.10.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "AccessControlExtensionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "SubjectsPerAccessControlEntry",
                    access: "R V", conformance: "M", constraint: "min 4", default: 4, quality: "F", type: "uint16",
                    details: "This attribute SHALL provide the minimum number of Subjects per entry " +
                             "that are supported by this server",
                    xref: { document: "core", section: "9.10.5.5" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "TargetsPerAccessControlEntry",
                    access: "R V", conformance: "M", constraint: "min 3", default: 3, quality: "F", type: "uint16",
                    details: "This attribute SHALL provide the minimum number of Targets per entry " +
                             "that are supported by this server",
                    xref: { document: "core", section: "9.10.5.6" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "AccessControlEntriesPerFabric",
                    access: "R V", conformance: "M", constraint: "min 4", default: 4, quality: "F", type: "uint16",
                    details: "This attribute SHALL provide the minimum number of ACL Entries per " +
                             "fabric that are supported by this server",
                    xref: { document: "core", section: "9.10.5.7" }
                },

                {
                    tag: "event", id: 0x0000, name: "AccessControlEntryChanged",
                    access: "S A", conformance: "M", priority: "info",
                    details: "The cluster SHALL send AccessControlEntryChanged events whenever its " +
                             "ACL attribute data is changed by an Administrator",
                    xref: { document: "core", section: "9.10.7.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "AccessControlExtensionChanged",
                    access: "S A", conformance: "M", priority: "info",
                    details: "The cluster SHALL send AccessControlExtensionChanged events whenever " +
                             "its extension attribute data is changed by an Administrator",
                    xref: { document: "core", section: "9.10.7.2" }
                },

                {
                    tag: "datatype", name: "ChangeTypeEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "9.10.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Changed",
                            conformance: "M",
                            xref: { document: "core", section: "9.10.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Added",
                            conformance: "M",
                            xref: { document: "core", section: "9.10.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Removed",
                            conformance: "M",
                            xref: { document: "core", section: "9.10.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0039, name: "BridgedDeviceBasicInformation",
            classification: "endpoint",
            children: [
                {
                    tag: "event", id: 0x0000, name: "StartUp",
                    conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                },

                {
                    tag: "event", id: 0x0001, name: "ShutDown",
                    conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                },

                {
                    tag: "event", id: 0x0002, name: "Leave",
                    conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                },

                {
                    tag: "event", id: 0x0003, name: "ReachableChanged",
                    conformance: "M", priority: "critical",
                    details: "This event SHALL be generated when there is a change in the Reachable " +
                             "attribute. Its purpose is to provide an indication towards interested " +
                             "parties that the reachability of a bridged device (over the non-Matter" +
                             " network) has changed, so they MAY take appropriate action",
                    xref: { document: "core", section: "9.13.5.1" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x0025, name: "Actions",
            classification: "application",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ActionList",
                    access: "R V", conformance: "M", constraint: "max 256", default: "empty", type: "list",
                    details: "The ActionList attribute holds the list of actions. Each entry SHALL " +
                             "have an unique ActionID, and its EndpointListID SHALL exist in the " +
                             "EndpointLists attribute",
                    xref: { document: "core", section: "9.14.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ActionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "EndpointLists",
                    access: "R V", conformance: "M", constraint: "max 256", default: "empty", type: "list",
                    details: "The EndpointLists attribute holds the list of endpoint lists. Each " +
                             "entry SHALL have an unique EndpointListID",
                    xref: { document: "core", section: "9.14.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "EndpointListStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "SetupUrl",
                    access: "R V", conformance: "O", constraint: "max 512", default: "empty", type: "string",
                    details: "The SetupURL attribute (when provided) SHALL indicate a URL; its " +
                             "syntax SHALL follow the syntax as specified in RFC 3986, max. 512 " +
                             "ASCII characters. The location referenced by this URL SHALL provide " +
                             "additional information for the actions provided",
                    xref: { document: "core", section: "9.14.5.3" }
                },

                {
                    tag: "event", id: 0x0000, name: "StateChanged",
                    access: "V", conformance: "M", priority: "info",
                    details: "This event SHALL be generated when there is a change in the State of " +
                             "an ActionID during the execution of an action and the most recent " +
                             "command using that ActionID used an InvokeID data field",
                    xref: { document: "core", section: "9.14.7.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "ActionFailed",
                    access: "V", conformance: "M", priority: "info",
                    details: "This event SHALL be generated when there is some error which prevents " +
                             "the action from its normal planned execution and the most recent " +
                             "command using that ActionID used an InvokeID data field",
                    xref: { document: "core", section: "9.14.7.2" }
                },

                {
                    tag: "command", id: 0x0000, name: "InstantAction",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "InstantActionWithTransition",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "StartAction",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "StartActionWithDuration",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "StopAction",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.5" }
                },

                {
                    tag: "command", id: 0x0005, name: "PauseAction",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.6" }
                },

                {
                    tag: "command", id: 0x0006, name: "PauseActionWithDuration",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.7" }
                },

                {
                    tag: "command", id: 0x0007, name: "ResumeAction",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.8" }
                },

                {
                    tag: "command", id: 0x0008, name: "EnableAction",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.9" }
                },

                {
                    tag: "command", id: 0x0009, name: "EnableActionWithDuration",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.10" }
                },

                {
                    tag: "command", id: 0x000a, name: "DisableAction",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.11" }
                },

                {
                    tag: "command", id: 0x000b, name: "DisableActionWithDuration",
                    access: "O", conformance: "desc", direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.12" }
                },

                {
                    tag: "datatype", name: "CommandBits",
                    type: "map16",
                    details: "This data type is derived from map16",
                    xref: { document: "core", section: "9.14.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "InstantAction",
                            description: "Indicate support for InstantAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "InstantActionWithTransition",
                            description: "Indicate support for InstantActionWithTransition command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "StartAction",
                            description: "Indicate support for StartAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "StartActionWithDuration",
                            description: "Indicate support for StartActionWithDuration command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "StopAction",
                            description: "Indicate support for StopAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "PauseAction",
                            description: "Indicate support for PauseAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "PauseActionWithDuration",
                            description: "Indicate support for PauseActionWithDuration command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "ResumeAction",
                            description: "Indicate support for ResumeAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "EnableAction",
                            description: "Indicate support for EnableAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "EnableActionWithDuration",
                            description: "Indicate support for EnableActionWithDuration command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "DisableAction",
                            description: "Indicate support for DisableAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x000b, name: "DisableActionWithDuration",
                            description: "Indicate support for DisableActionWithDuration command",
                            xref: { document: "core", section: "9.14.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0042, name: "ProxyConfiguration",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ConfigurationList",
                    access: "RW", conformance: "M", default: "empty", quality: "N", type: "list",
                    details: "List of proxy configurations. There SHALL NOT be multiple entries in " +
                             "this list for the same fabric",
                    xref: { document: "core", section: "9.15.14.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ConfigurationStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ConfigurationStruct",
                    type: "struct",
                    xref: { document: "core", section: "9.15.14.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "ProxyAllNodes",
                            access: "RW", conformance: "M", constraint: "desc", default: true, type: "bool",
                            xref: { document: "core", section: "9.15.14.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "SourceList",
                            access: "RW", conformance: "M", constraint: "desc", default: "empty", type: "list",
                            xref: { document: "core", section: "9.15.14.4.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry",
                                    type: "node-id"
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0044, name: "ValidProxies",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ValidProxyList",
                    access: "RW", conformance: "M", default: "empty", quality: "N F", type: "list",
                    details: "List of valid proxies that can proxy this Node. Each entry in this " +
                             "list is fabric-scoped",
                    xref: { document: "core", section: "9.15.15.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ValidProxyStruct"
                        }
                    ]
                },

                {
                    tag: "command", id: 0x0000, name: "GetValidProxiesRequest",
                    access: "O", conformance: "M", direction: "request", response: "GetValidProxiesResponse",
                    xref: { document: "core", section: "9.15.15.6" }
                },

                {
                    tag: "command", id: 0x0001, name: "GetValidProxiesResponse",
                    conformance: "M", direction: "response",
                    xref: { document: "core", section: "9.15.15.6" }
                },

                {
                    tag: "datatype", name: "ValidProxyStruct",
                    type: "struct",
                    details: "Encapsulates the Node ID of a Valid Proxy",
                    xref: { document: "core", section: "9.15.15.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "NodeId",
                            access: "RW", conformance: "M", default: "", type: "node-idx",
                            xref: { document: "core", section: "9.15.15.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0028, name: "BasicInformation",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "DataModelRevision",
                    access: "R V", conformance: "M", default: "MS", quality: "F", type: "uint16",
                    details: "This attribute SHALL be set to the revision number of the Data Model " +
                             "against which the Node is certified",
                    xref: { document: "core", section: "11.1.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "VendorName",
                    access: "R V", conformance: "M", constraint: "max 32", default: "MS", quality: "F", type: "string",
                    details: "This attribute SHALL specify a human readable (displayable) name of " +
                             "the vendor for the Node",
                    xref: { document: "core", section: "11.1.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "VendorId",
                    access: "R V", conformance: "M", default: "MS", quality: "F", type: "vendor-id",
                    details: "This attribute SHALL specify the Vendor ID",
                    xref: { document: "core", section: "11.1.5.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "ProductName",
                    access: "R V", conformance: "M", constraint: "max 32", default: "MS", quality: "F", type: "string",
                    details: "This attribute SHALL specify a human readable (displayable) name of " +
                             "the model for the Node such as the model number (or other identifier) " +
                             "assigned by the vendor",
                    xref: { document: "core", section: "11.1.5.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "ProductId",
                    access: "R V", conformance: "M", default: "MS", quality: "F", type: "uint16",
                    details: "This attribute SHALL specify the Product ID assigned by the vendor " +
                             "that is unique to the specific product of the Node",
                    xref: { document: "core", section: "11.1.5.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "NodeLabel",
                    access: "RW VM", conformance: "M", constraint: "max 32", default: "\"\"", quality: "N", type: "string",
                    details: "This attribute SHALL represent a user defined name for the Node. This " +
                             "attribute SHOULD be set during initial commissioning and MAY be " +
                             "updated by further reconfigurations",
                    xref: { document: "core", section: "11.1.5.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "Location",
                    access: "RW VA", conformance: "M", constraint: "2", default: "\"XX\"", quality: "N", type: "string",
                    details: "This attribute SHALL be an ISO 3166-1 alpha-2 code to represent the " +
                             "country, dependent territory, or special area of geographic interest " +
                             "in which the Node is located at the time of the attribute being set. " +
                             "This attribute SHALL be set during initial commissioning (unless " +
                             "already set) and MAY be updated by further reconfigurations. This " +
                             "attribute MAY affect some regulatory aspects of the Node’s operation, " +
                             "such as radio transmission power levels in given spectrum allocation " +
                             "bands if technologies where this is applicable are used. The Location’" +
                             "s region code SHALL be interpreted in a case-insensitive manner. If " +
                             "the Node cannot understand the location code with which it was " +
                             "configured, or the location code has not yet been configured, it SHALL" +
                             " configure itself in a region- agnostic manner as determined by the " +
                             "vendor, avoiding region-specific assumptions as much as is practical. " +
                             "The special value XX SHALL indicate that region-agnostic mode is used",
                    xref: { document: "core", section: "11.1.5.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "HardwareVersion",
                    access: "R V", conformance: "M", default: 0, quality: "F", type: "uint16",
                    details: "This attribute SHALL specify the version number of the hardware of the" +
                             " Node. The meaning of its value, and the versioning scheme, are vendor" +
                             " defined",
                    xref: { document: "core", section: "11.1.5.8" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "HardwareVersionString",
                    access: "R V", conformance: "M", constraint: "1 to 64", default: "MS", quality: "F", type: "string",
                    details: "This attribute SHALL specify the version number of the hardware of the" +
                             " Node. The meaning of its value, and the versioning scheme, are vendor" +
                             " defined. The HardwareVersionString attribute SHALL be used to provide" +
                             " a more user-friendly value than that represented by the " +
                             "HardwareVersion attribute",
                    xref: { document: "core", section: "11.1.5.9" }
                },

                {
                    tag: "attribute", id: 0x0009, name: "SoftwareVersion",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, quality: "F", type: "uint32",
                    details: "This attribute SHALL contain the current version number for the " +
                             "software running on this Node. The version number can be compared " +
                             "using a total ordering to determine if a version is logically newer " +
                             "than another one. A larger value of SoftwareVersion is newer than a " +
                             "lower value, from the perspective of software updates (see Section 11." +
                             "19.3.3, “Availability of Software Images”). Nodes MAY query this field" +
                             " to determine the currently running version of software on another " +
                             "given Node",
                    xref: { document: "core", section: "11.1.5.10" }
                },

                {
                    tag: "attribute", id: 0x000a, name: "SoftwareVersionString",
                    access: "R V", conformance: "M", constraint: "1 to 64", default: "MS", quality: "F", type: "string",
                    details: "This attribute SHALL contain a current human-readable representation " +
                             "for the software running on the Node. This version information MAY be " +
                             "conveyed to users. The maximum length of the SoftwareVersionString " +
                             "attribute is 64 bytes of UTF-8 characters. The contents SHOULD only " +
                             "use simple 7-bit ASCII alphanumeric and punctuation characters, so as " +
                             "to simplify the conveyance of the value to a variety of cultures",
                    xref: { document: "core", section: "11.1.5.11" }
                },

                {
                    tag: "attribute", id: 0x000b, name: "ManufacturingDate",
                    access: "R V", conformance: "O", constraint: "8 to 16", default: "MS", quality: "F", type: "string",
                    details: "This attribute SHALL specify the date that the Node was manufactured. " +
                             "The first 8 characters SHALL specify the date of manufacture of the " +
                             "Node in international date notation according to ISO 8601, i.e., " +
                             "YYYYMMDD, e.g., 20060814. The final 8 characters MAY include country, " +
                             "factory, line, shift or other related information at the option of the" +
                             " vendor. The format of this information is vendor",
                    xref: { document: "core", section: "11.1.5.12" }
                },

                {
                    tag: "attribute", id: 0x000c, name: "PartNumber",
                    access: "R V", conformance: "O", constraint: "max 32", default: "MS", quality: "F", type: "string",
                    details: "This attribute SHALL specify a human-readable (displayable) vendor " +
                             "assigned part number for the Node whose meaning and numbering scheme " +
                             "is vendor defined",
                    xref: { document: "core", section: "11.1.5.13" }
                },

                {
                    tag: "attribute", id: 0x000d, name: "ProductUrl",
                    access: "R V", conformance: "O", constraint: "max 256", default: "MS", quality: "F", type: "string",
                    details: "This attribute SHALL specify a link to a product specific web page. " +
                             "The syntax of the ProductURL attribute SHALL follow the syntax as " +
                             "specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. The " +
                             "specified URL SHOULD resolve to a maintained web page available for " +
                             "the lifetime of the product. The maximum length of the ProductUrl " +
                             "attribute is 256 ASCII characters",
                    xref: { document: "core", section: "11.1.5.14" }
                },

                {
                    tag: "attribute", id: 0x000e, name: "ProductLabel",
                    access: "R V", conformance: "O", constraint: "max 64", default: "MS", quality: "F", type: "string",
                    details: "This attribute SHALL specify a vendor specific human readable (" +
                             "displayable) product label. The ProductLabel attribute MAY be used to " +
                             "provide a more user-friendly value than that represented by the " +
                             "ProductName attribute. The ProductLabel attribute SHOULD NOT include " +
                             "the name of the vendor as defined within the VendorName attribute",
                    xref: { document: "core", section: "11.1.5.15" }
                },

                {
                    tag: "attribute", id: 0x000f, name: "SerialNumber",
                    access: "R V", conformance: "O", constraint: "max 32", default: "MS", quality: "F", type: "string",
                    details: "This attributes SHALL specify a human readable (displayable) serial " +
                             "number",
                    xref: { document: "core", section: "11.1.5.16" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "LocalConfigDisabled",
                    access: "RW VM", conformance: "O", default: true, quality: "N", type: "bool",
                    details: "This attribute SHALL allow a local Node configuration to be disabled. " +
                             "When this attribute is set to True the Node SHALL disable the ability " +
                             "to configure the Node through an on-Node user interface. The value of " +
                             "the LocalConfigDisabled attribute SHALL NOT in any way modify, disable" +
                             ", or otherwise affect the user’s ability to trigger a factory reset on" +
                             " the Node",
                    xref: { document: "core", section: "11.1.5.17" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "Reachable",
                    access: "R V", conformance: "O", default: true, type: "bool",
                    details: "This attribute (when used) SHALL indicate whether the Node can be " +
                             "reached. For a native Node this is implicitly True (and its use is " +
                             "optional",
                    xref: { document: "core", section: "11.1.5.18" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "UniqueId",
                    access: "R V", conformance: "O", constraint: "max 32", default: "MS", quality: "F", type: "string",
                    details: "This attribute (when used) SHALL indicate a unique identifier for the " +
                             "device, which is constructed in a manufacturer specific manner",
                    xref: { document: "core", section: "11.1.5.19" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "CapabilityMinima",
                    access: "R V", conformance: "M", default: "MS", quality: "F", type: "CapabilityMinimaStruct",
                    details: "This attribute SHALL provide the minimum guaranteed value for some " +
                             "system-wide resource capabilities that are not otherwise cluster-" +
                             "specific and do not appear elsewhere. This attribute MAY be used by " +
                             "clients to optimize communication with Nodes by allowing them to use " +
                             "more than the strict minimum values required by this specification, " +
                             "wherever available",
                    xref: { document: "core", section: "11.1.5.20" }
                },

                {
                    tag: "event", id: 0x0000, name: "StartUp",
                    access: "V", conformance: "M", priority: "critical",
                    details: "The StartUp event SHALL be generated by a Node as soon as reasonable " +
                             "after completing a boot or reboot process. The StartUp event SHOULD be" +
                             " the first Data Model event recorded by the Node after it completes a " +
                             "boot or reboot process",
                    xref: { document: "core", section: "11.1.6.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "ShutDown",
                    access: "V", conformance: "O", priority: "critical",
                    details: "The ShutDown event SHOULD be generated by a Node prior to any orderly " +
                             "shutdown sequence on a best-effort basis. When a ShutDown event is " +
                             "generated, it SHOULD be the last Data Model event recorded by the Node" +
                             ". This event SHOULD be delivered urgently to current subscribers on a " +
                             "best- effort basis. Any subsequent incoming interactions to the Node " +
                             "MAY be dropped until the completion of a future boot or reboot process",
                    xref: { document: "core", section: "11.1.6.2" }
                },

                {
                    tag: "event", id: 0x0002, name: "Leave",
                    access: "V", conformance: "O", priority: "info",
                    details: "The Leave event SHOULD be generated by a Node prior to permanently " +
                             "leaving a given Fabric, such as when the RemoveFabric command is " +
                             "invoked for a given fabric, or triggered by factory reset or some " +
                             "other manufacturer specific action to disable or reset the operational" +
                             " data in the Node. When a Leave event is generated, it SHOULD be " +
                             "assumed that the fabric recorded in the event is no longer usable, and" +
                             " subsequent interactions targeting that fabric will most likely fail",
                    xref: { document: "core", section: "11.1.6.3" }
                },

                {
                    tag: "event", id: 0x0003, name: "ReachableChanged",
                    access: "V", conformance: "desc", priority: "info",
                    details: "This event SHALL be supported if and only if the Reachable attribute " +
                             "is supported",
                    xref: { document: "core", section: "11.1.6.4" }
                },

                {
                    tag: "datatype", name: "CapabilityMinimaStruct",
                    type: "struct",
                    details: "This structure provides constant values related to overall global " +
                             "capabilities of this Node, that are not cluster-specific",
                    xref: { document: "core", section: "11.1.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "CaseSessionsPerFabric",
                            conformance: "M", constraint: "min 3", default: 3, type: "uint16",
                            xref: { document: "core", section: "11.1.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "SubscriptionsPerFabric",
                            conformance: "M", constraint: "min 3", default: 3, type: "uint16",
                            xref: { document: "core", section: "11.1.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x003f, name: "GroupKeyManagement",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "GroupKeyMap",
                    access: "RW F VM", conformance: "M", constraint: "desc", default: "empty", quality: "N", type: "list",
                    details: "This attribute is a list of GroupKeyMapStruct entries. Each entry " +
                             "associates a logical Group Id with a particular group key set",
                    xref: { document: "core", section: "11.2.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "GroupKeyMapStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "GroupTable",
                    access: "R F", conformance: "M", constraint: "desc", default: "empty", type: "list",
                    details: "This attribute is a list of GroupInfoMapStruct entries. Each entry " +
                             "provides read-only information about how a given logical Group ID maps" +
                             " to a particular set of endpoints, and a name for the group. The " +
                             "content of this attribute reflects data managed via the Groups cluster" +
                             " (see AppClusters), and is in general terms referred to as the 'node-" +
                             "wide Group Table",
                    xref: { document: "core", section: "11.2.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "GroupInfoMapStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "MaxGroupsPerFabric",
                    conformance: "M", default: 0, quality: "F", type: "uint16",
                    details: "This attribute SHALL indicate the maximum number of groups that this " +
                             "node supports per fabric. The value of this attribute SHALL be set to " +
                             "be no less than the required minimum supported groups as specified in " +
                             "Group Limits. The length of the GroupKeyMap and GroupTable list " +
                             "attributes SHALL NOT exceed the value of the MaxGroupsPerFabric " +
                             "attribute multiplied by the number of supported fabrics",
                    xref: { document: "core", section: "11.2.7.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "MaxGroupKeysPerFabric",
                    conformance: "M", constraint: "1 to 65535", default: 1, quality: "F", type: "uint16",
                    details: "This attribute SHALL indicate the maximum number of group key sets " +
                             "this node supports per fabric. The value of this attribute SHALL be " +
                             "set according to the minimum number of group key sets to support as " +
                             "specified in Group Limits",
                    xref: { document: "core", section: "11.2.7.4" }
                },

                {
                    tag: "command", id: 0x0000, name: "KeySetWrite",
                    access: "F A", conformance: "M", direction: "request", response: "status",
                    details: "This command is used by Administrators to set the state of a given " +
                             "Group Key Set, including atomi",
                    xref: { document: "core", section: "11.2.8.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "KeySetRead",
                    access: "F A", conformance: "M", direction: "request", response: "KeySetReadResponse",
                    details: "This command is used by Administrators to read the state of a given " +
                             "Group Key Set",
                    xref: { document: "core", section: "11.2.8.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "KeySetReadResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to the KeySetRead command" +
                             ", if a valid Group Key Set was found. It SHALL contain the " +
                             "configuration of the requested Group Key Set, with the EpochKey0, " +
                             "EpochKey1 and EpochKey2 key contents replaced by null",
                    xref: { document: "core", section: "11.2.8.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "KeySetRemove",
                    access: "F A", conformance: "M", direction: "request", response: "status",
                    details: "This command is used by Administrators to remove all state of a given " +
                             "Group Key Set",
                    xref: { document: "core", section: "11.2.8.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "KeySetReadAllIndices",
                    access: "F A", conformance: "M", direction: "request", response: "KeySetReadAllIndicesResponse",
                    details: "This command is used by Administrators to query a list of all Group " +
                             "Key Sets associated with the accessing fabric",
                    xref: { document: "core", section: "11.2.8.5" }
                },

                {
                    tag: "command", id: 0x0005, name: "KeySetReadAllIndicesResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to KeySetReadAllIndices " +
                             "and it SHALL contain the list of GroupKeySetID for all Group Key Sets " +
                             "associated with the scoped Fabric",
                    xref: { document: "core", section: "11.2.8.6" }
                },

                {
                    tag: "datatype", name: "GroupKeySecurityPolicyEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.2.6.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "TrustFirst",
                            conformance: "M",
                            xref: { document: "core", section: "11.2.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "CacheAndSync",
                            conformance: "CS",
                            xref: { document: "core", section: "11.2.6.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002b, name: "LocalizationConfiguration",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ActiveLocale",
                    access: "RW VM", conformance: "M", constraint: "max 35", default: "MS", quality: "N", type: "string",
                    details: "The ActiveLocale attribute SHALL represent the locale that the Node is" +
                             " currently configured to use when conveying information. The " +
                             "ActiveLocale attribute SHALL be a Language Tag as defined by BCP47 [" +
                             "https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute " +
                             "SHALL have a default value assigned by the Vendor and SHALL be a value" +
                             " contained within the SupportedLocales attribute list",
                    xref: { document: "core", section: "11.3.4.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "SupportedLocales",
                    access: "R V", conformance: "M", constraint: "max 32[max 35]", default: "MS", quality: "F", type: "list",
                    details: "The SupportedLocales attribute SHALL represent a list of locale " +
                             "strings that are valid values for the ActiveLocale attribute. The list" +
                             " SHALL NOT contain any duplicate entries. The ordering of items within" +
                             " the list SHOULD NOT express any meaning",
                    xref: { document: "core", section: "11.3.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "string"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002c, name: "TimeFormatLocalization",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "HourFormat",
                    access: "RW VM", conformance: "M", default: "null", quality: "X N", type: "HourFormatEnum",
                    details: "The HourFormat attribute SHALL represent the format that the Node is " +
                             "currently configured to use when conveying the hour unit of time. If " +
                             "provided, this value SHALL take priority over any unit",
                    xref: { document: "core", section: "11.4.6.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "ActiveCalendarType",
                    access: "RW VM", conformance: "CALFMT", default: "null", quality: "X N", type: "CalendarTypeEnum",
                    details: "The ActiveCalendarType attribute SHALL represent the calendar format " +
                             "that the Node is currently configured to use when conveying dates. If " +
                             "provided, this value SHALL take priority over any unit implied through" +
                             " the ActiveLocale Attribute",
                    xref: { document: "core", section: "11.4.6.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "SupportedCalendarTypes",
                    access: "R V", conformance: "CALFMT", constraint: "desc", default: "N/A", quality: "F", type: "list",
                    details: "The SupportedCalendarTypes attribute SHALL represent a list of " +
                             "CalendarTypeEnum values that are supported by the Node. The list SHALL" +
                             " NOT contain any duplicate entries. The ordering of items within the " +
                             "list SHOULD NOT express any meaning. The maximum length of the " +
                             "SupportedCalendarTypes list SHALL be equivalent to the number of " +
                             "enumerations within CalendarTypeEnum",
                    xref: { document: "core", section: "11.4.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "CalendarTypeEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HourFormatEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.4.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "12Hr",
                            conformance: "M",
                            xref: { document: "core", section: "11.4.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "24Hr",
                            conformance: "M",
                            xref: { document: "core", section: "11.4.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002d, name: "UnitLocalization",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "TemperatureUnit",
                    access: "RW VM", conformance: "TEMP", default: "null", quality: "X N", type: "TempUnitEnum",
                    details: "The TemperatureUnit attribute SHALL indicate the unit for the Node to " +
                             "use only when conveying temperature in communication to the user. If " +
                             "provided, this value SHALL take priority over any unit implied through" +
                             " the ActiveLocale Attribute",
                    xref: { document: "core", section: "11.5.6.1" }
                },

                {
                    tag: "datatype", name: "TempUnitEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.5.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Fahrenheit",
                            conformance: "M",
                            xref: { document: "core", section: "11.5.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Celsius",
                            conformance: "M",
                            xref: { document: "core", section: "11.5.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Kelvin",
                            conformance: "M",
                            xref: { document: "core", section: "11.5.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002e, name: "PowerSourceConfiguration",
            classification: "endpoint",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Sources",
                    access: "R V", conformance: "M", constraint: "max 6", default: "", quality: "N", type: "list",
                    details: "This list SHALL contain the set of all power sources capable of " +
                             "participating in the power system of this Node. Each entry in the list" +
                             " SHALL be the endpoint number of an endpoint having a Power Source " +
                             "cluster, which corresponds to a physical power source. The endpoint " +
                             "number SHALL be unique within the list",
                    xref: { document: "core", section: "11.6.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "endpoint-no"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x002f, name: "PowerSource",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Status",
                    access: "R V", conformance: "M", constraint: "desc", default: "", type: "PowerSourceStatusEnum",
                    details: "This attribute SHALL indicate the participation of this power source " +
                             "in providing power to the Node as specified in PowerSourceStatusEnum",
                    xref: { document: "core", section: "11.7.6.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "Order",
                    access: "R V", conformance: "M", default: 0, quality: "N", type: "uint8",
                    details: "This attribute SHALL indicate the relative preference with which the " +
                             "Node will select this source to provide power. A source with a lower " +
                             "order SHALL be selected by the Node to provide power before any other " +
                             "source with a higher order, if the lower order source is available (" +
                             "see Status",
                    xref: { document: "core", section: "11.7.6.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "Description",
                    access: "R V", conformance: "M", constraint: "max 60", default: "", quality: "F", type: "string",
                    details: "This attribute SHALL provide a user-facing description of this source" +
                             ", used to distinguish it from other power sources, e.g. \"DC Power\", \"" +
                             "Primary Battery\" or \"Battery back-up\". This attribute SHALL NOT be " +
                             "used to convey information such as battery form factor, or chemistry",
                    xref: { document: "core", section: "11.7.6.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "WiredAssessedInputVoltage",
                    access: "R V", conformance: "[WIRED]", default: 0, quality: "X C", type: "uint32",
                    details: "This attribute SHALL indicate the assessed RMS or DC voltage currently" +
                             " provided by the hard-wired source, in mV (millivolts). A value of " +
                             "NULL SHALL indicate the Node is currently unable to assess the value. " +
                             "If the wired source is not connected, but the Node is still able to " +
                             "assess a value, then the assessed value MAY be reported",
                    xref: { document: "core", section: "11.7.6.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "WiredAssessedInputFrequency",
                    access: "R V", conformance: "[WIRED]", default: 0, quality: "X C", type: "uint16",
                    details: "This attribute SHALL indicate the assessed frequency of the voltage, " +
                             "currently provided by the hard-wired source, in Hz. A value of NULL " +
                             "SHALL indicate the Node is currently unable to assess the value. If " +
                             "the wired source is not connected, but the Node is still able to " +
                             "assess a value, then the assessed value MAY be reported",
                    xref: { document: "core", section: "11.7.6.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "WiredCurrentType",
                    access: "R V", conformance: "WIRED", constraint: "desc", default: "", quality: "F", type: "WiredCurrentTypeEnum",
                    details: "This attribute SHALL indicate the type of current the Node expects to " +
                             "be provided by the hard- wired source as specified in " +
                             "WiredCurrentTypeEnum",
                    xref: { document: "core", section: "11.7.6.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "WiredAssessedCurrent",
                    access: "R V", conformance: "[WIRED]", default: 0, quality: "X C", type: "uint32",
                    details: "This attribute SHALL indicate the assessed instantaneous current draw " +
                             "of the Node on the hard- wired source, in mA (milliamps). A value of " +
                             "NULL SHALL indicate the Node is currently unable to assess the value. " +
                             "If the wired source is not connected, but the Node is still able to " +
                             "assess a value, then the assessed value MAY be reported",
                    xref: { document: "core", section: "11.7.6.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "WiredNominalVoltage",
                    access: "R V", conformance: "[WIRED]", default: 0, quality: "F", type: "uint32",
                    details: "This attribute SHALL indicate the nominal voltage, printed as part of " +
                             "the Node’s regulatory compliance label in mV (millivolts), expected to" +
                             " be provided by the hard-wired source",
                    xref: { document: "core", section: "11.7.6.8" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "WiredMaximumCurrent",
                    access: "R V", conformance: "[WIRED]", default: 0, quality: "F", type: "uint32",
                    details: "This attribute SHALL indicate the maximum current, printed as part of " +
                             "the Node’s regulatory compliance label in mA (milliamps), expected to " +
                             "be provided by the hard-wired source",
                    xref: { document: "core", section: "11.7.6.9" }
                },

                {
                    tag: "attribute", id: 0x0009, name: "WiredPresent",
                    access: "R V", conformance: "[WIRED]", default: false, type: "bool",
                    details: "This attribute SHALL indicate if the Node detects that the hard-wired " +
                             "power source is properly connected",
                    xref: { document: "core", section: "11.7.6.10" }
                },

                {
                    tag: "attribute", id: 0x000a, name: "ActiveWiredFaults",
                    access: "R V", conformance: "[WIRED]", default: "", type: "list",
                    details: "This attribute SHALL indicate the set of wired faults currently " +
                             "detected by the Node on this power source. This set is represented as " +
                             "a list of WiredFaultEnum. When the Node detects a fault has been " +
                             "raised, the appropriate WiredFaultEnum value SHALL be added to this " +
                             "list, provided it is not already present. This list SHALL NOT contain " +
                             "more than one instance of a specific WiredFaultEnum value. When the " +
                             "Node detects all conditions contributing to a fault have been cleared" +
                             ", the corresponding WiredFaultEnum value SHALL be removed from this " +
                             "list. An empty list SHALL indicate there are currently no active " +
                             "faults. The order of this list SHOULD have no significance. Clients " +
                             "interested in monitoring changes in active faults MAY subscribe to " +
                             "this attribute, or they MAY subscribe to WiredFaultChange",
                    xref: { document: "core", section: "11.7.6.11" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "WiredFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x000b, name: "BatVoltage",
                    access: "R V", conformance: "[BAT]", default: 0, quality: "X C", type: "uint32",
                    details: "This attribute SHALL indicate the currently measured output voltage of" +
                             " the battery in mV (millivolts). A value of NULL SHALL indicate the " +
                             "Node is currently unable to assess the value",
                    xref: { document: "core", section: "11.7.6.12" }
                },

                {
                    tag: "attribute", id: 0x000c, name: "BatPercentRemaining",
                    access: "R V", conformance: "[BAT]", constraint: "0 to 200", default: 0, quality: "X C", type: "uint8",
                    details: "This attribute SHALL indicate the estimated percentage of battery " +
                             "charge remaining until the battery will no longer be able to provide " +
                             "power to the Node. Values are expressed in half percent units, ranging" +
                             " from 0 to 200. E.g. a value of 48 is equivalent to 24%. A value of " +
                             "NULL SHALL indicate the Node is currently unable to assess the value",
                    xref: { document: "core", section: "11.7.6.13" }
                },

                {
                    tag: "attribute", id: 0x000d, name: "BatTimeRemaining",
                    access: "R V", conformance: "[BAT]", default: 0, quality: "X C", type: "uint32",
                    details: "This attribute SHALL indicate the estimated time in seconds before the" +
                             " battery will no longer be able to provide power to the Node. A value " +
                             "of NULL SHALL indicate the Node is currently unable to assess the " +
                             "value",
                    xref: { document: "core", section: "11.7.6.14" }
                },

                {
                    tag: "attribute", id: 0x000e, name: "BatChargeLevel",
                    access: "R V", conformance: "BAT", constraint: "desc", default: "", type: "BatChargeLevelEnum",
                    details: "This attribute SHALL indicate a coarse ranking of the charge level of " +
                             "the battery, used to indicate when intervention is required as " +
                             "specified in BatChargeLevelEnum",
                    xref: { document: "core", section: "11.7.6.15" }
                },

                {
                    tag: "attribute", id: 0x000f, name: "BatReplacementNeeded",
                    access: "R V", conformance: "BAT", default: false, type: "bool",
                    details: "This attribute SHALL indicate if the battery needs to be replaced. " +
                             "Replacement MAY be simple routine maintenance, such as with a single " +
                             "use, non-rechargeable cell. Replacement, however, MAY also indicate " +
                             "end of life, or serious fault with a rechargeable or even non-" +
                             "replaceable cell",
                    xref: { document: "core", section: "11.7.6.16" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "BatReplaceability",
                    access: "R V", conformance: "BAT", default: "", quality: "F", type: "BatReplaceabilityEnum",
                    details: "This attribute SHALL indicate the replaceability of the battery as " +
                             "specified in BatReplaceabilityEnum",
                    xref: { document: "core", section: "11.7.6.17" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "BatPresent",
                    access: "R V", conformance: "[BAT]", default: false, type: "bool",
                    details: "This attribute SHALL indicate whether the Node detects that the " +
                             "batteries are properly installed",
                    xref: { document: "core", section: "11.7.6.18" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "ActiveBatFaults",
                    access: "R V", conformance: "[BAT]", default: "", type: "list",
                    details: "This attribute SHALL indicate the set of battery faults currently " +
                             "detected by the Node on this power source. This set is represented as " +
                             "a list of BatFaultEnum. When the Node detects a fault has been raised" +
                             ", the appropriate BatFaultEnum value SHALL be added to this list, " +
                             "provided it is not already present. This list SHALL NOT contain more " +
                             "than one instance of a specific BatFaultEnum value. When the Node " +
                             "detects all conditions contributing to a fault have been cleared, the " +
                             "corresponding BatFaultEnum value SHALL be removed from this list. An " +
                             "empty list SHALL indicate there are currently no active faults. The " +
                             "order of this list SHOULD have no significance. Clients interested in " +
                             "monitoring changes in active faults MAY subscribe to this attribute, " +
                             "or they MAY subscribe to Section 11.7.7.2, “BatFaultChange Event",
                    xref: { document: "core", section: "11.7.6.19" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "BatFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0013, name: "BatReplacementDescription",
                    access: "R V", conformance: "REPLC", constraint: "max 60", default: "", quality: "F", type: "string",
                    details: "This attribute SHALL provide a user-facing description of this battery" +
                             ", which SHOULD contain information required to identify a replacement" +
                             ", such as form factor, chemistry or preferred manufacturer",
                    xref: { document: "core", section: "11.7.6.20" }
                },

                {
                    tag: "attribute", id: 0x0014, name: "BatCommonDesignation",
                    access: "R V", conformance: "[REPLC]", constraint: "desc", default: "", quality: "F", type: "BatCommonDesignationEnum",
                    details: "This attribute SHALL indicate the ID of the common or colloquial " +
                             "designation of the battery, as specified in BatCommonDesignationEnum",
                    xref: { document: "core", section: "11.7.6.21" }
                },

                {
                    tag: "attribute", id: 0x0015, name: "BatAnsiDesignation",
                    access: "R V", conformance: "[REPLC]", constraint: "max 20", default: "", quality: "F", type: "string",
                    details: "This attribute SHALL indicate the string representing the ANSI " +
                             "designation for the battery as specified in ANSI C18",
                    xref: { document: "core", section: "11.7.6.22" }
                },

                {
                    tag: "attribute", id: 0x0016, name: "BatIecDesignation",
                    access: "R V", conformance: "[REPLC]", constraint: "max 20", default: "", quality: "F", type: "string",
                    details: "This attribute SHALL indicate the string representing the IEC " +
                             "designation for the battery as specified in IEC 60086",
                    xref: { document: "core", section: "11.7.6.23" }
                },

                {
                    tag: "attribute", id: 0x0017, name: "BatApprovedChemistry",
                    access: "R V", conformance: "[REPLC]", constraint: "desc", default: "", quality: "F", type: "BatApprovedChemistryEnum",
                    details: "This attribute SHALL indicate the ID of the preferred chemistry of the" +
                             " battery source as specified in BatApprovedChemistryEnum",
                    xref: { document: "core", section: "11.7.6.24" }
                },

                {
                    tag: "attribute", id: 0x0018, name: "BatCapacity",
                    access: "R V", conformance: "[REPLC]", default: 0, quality: "F", type: "uint32",
                    details: "This attribute SHALL indicate the preferred minimum charge capacity " +
                             "rating in mAh of individual, user- or factory-serviceable battery " +
                             "cells or packs in the battery source",
                    xref: { document: "core", section: "11.7.6.25" }
                },

                {
                    tag: "attribute", id: 0x0019, name: "BatQuantity",
                    access: "R V", conformance: "REPLC", default: 0, quality: "F", type: "uint8",
                    details: "This attribute SHALL indicate the quantity of individual, user- or " +
                             "factory-serviceable battery cells or packs in the battery source",
                    xref: { document: "core", section: "11.7.6.26" }
                },

                {
                    tag: "attribute", id: 0x001a, name: "BatChargeState",
                    access: "R V", conformance: "RECHG", constraint: "desc", default: "", type: "BatChargeStateEnum",
                    details: "This attribute SHALL indicate the current state of the battery source " +
                             "with respect to charging as specified in BatChargeStateEnum",
                    xref: { document: "core", section: "11.7.6.27" }
                },

                {
                    tag: "attribute", id: 0x001b, name: "BatTimeToFullCharge",
                    access: "R V", conformance: "[RECHG]", default: 0, quality: "X C", type: "uint32",
                    details: "This attribute SHALL indicate the estimated time in seconds before the" +
                             " battery source will be at full charge. A value of NULL SHALL indicate" +
                             " the Node is currently unable to assess the value",
                    xref: { document: "core", section: "11.7.6.28" }
                },

                {
                    tag: "attribute", id: 0x001c, name: "BatFunctionalWhileCharging",
                    access: "R V", conformance: "RECHG", default: false, type: "bool",
                    details: "This attribute SHALL indicate whether the Node can remain operational " +
                             "while the battery source is charging",
                    xref: { document: "core", section: "11.7.6.29" }
                },

                {
                    tag: "attribute", id: 0x001d, name: "BatChargingCurrent",
                    access: "R V", conformance: "[RECHG]", default: 0, quality: "X C", type: "uint32",
                    details: "This attribute SHALL indicate assessed current in mA (milliamps) " +
                             "presently supplied to charge the battery source. A value of NULL SHALL" +
                             " indicate the Node is currently unable to assess the value",
                    xref: { document: "core", section: "11.7.6.30" }
                },

                {
                    tag: "attribute", id: 0x001e, name: "ActiveBatChargeFaults",
                    access: "R V", conformance: "[RECHG]", default: "", type: "list",
                    details: "This attribute SHALL indicate the set of charge faults currently " +
                             "detected by the Node on this power source. This set is represented as " +
                             "a list of BatChargeFaultEnum. When the Node detects a fault has been " +
                             "raised, the appropriate BatChargeFaultEnum value SHALL be added to " +
                             "this list, provided it is not already present. This list SHALL NOT " +
                             "contain more than one instance of a specific BatChargeFaultEnum value" +
                             ". When the Node detects all conditions contributing to a fault have " +
                             "been cleared, the corresponding BatChargeFaultEnum value SHALL be " +
                             "removed from this list. An empty list SHALL indicate there are " +
                             "currently no active faults. The order of this list SHOULD have no " +
                             "significance. Clients interested in monitoring changes in active " +
                             "faults MAY subscribe to this attribute, or they MAY subscribe to the " +
                             "BatFaultChange event",
                    xref: { document: "core", section: "11.7.6.31" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "BatChargeFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0000, name: "WiredFaultChange",
                    access: "V", conformance: "[WIRED]", priority: "info",
                    details: "The WiredFaultChange Event SHALL be generated when the set of wired " +
                             "faults currently detected by the Node on this wired power source " +
                             "changes. This event SHALL correspond to a change in value of " +
                             "ActiveWiredFaults",
                    xref: { document: "core", section: "11.7.7.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "BatFaultChange",
                    access: "V", conformance: "[BAT]", priority: "info",
                    details: "The BatFaultChange Event SHALL be generated when the set of battery " +
                             "faults currently detected by the Node on this battery power source " +
                             "changes. This event SHALL correspond to a change in value of " +
                             "ActiveBatFaults",
                    xref: { document: "core", section: "11.7.7.2" }
                },

                {
                    tag: "event", id: 0x0002, name: "BatChargeFaultChange",
                    access: "V", conformance: "[RECHG]", priority: "info",
                    details: "The BatChargeFaultChange Event SHALL be generated when the set of " +
                             "charge faults currently",
                    xref: { document: "core", section: "11.7.7.3" }
                },

                {
                    tag: "datatype", name: "WiredFaultEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M",
                            xref: { document: "core", section: "11.7.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "OverVoltage",
                            conformance: "M",
                            xref: { document: "core", section: "11.7.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "UnderVoltage",
                            conformance: "M",
                            xref: { document: "core", section: "11.7.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0031, name: "NetworkCommissioning",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "MaxNetworks",
                    access: "R A", conformance: "M", constraint: "min 1", default: 0, quality: "F", type: "uint8",
                    details: "This SHALL indicate the maximum number of network configuration " +
                             "entries that can be added, based on available device resources. The " +
                             "length of the Networks attribute list SHALL be less than or equal to " +
                             "this value",
                    xref: { document: "core", section: "11.8.6.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "Networks",
                    access: "R A", conformance: "M", constraint: "max MaxNetworks", default: "empty", type: "list",
                    details: "This attribute SHALL indicate the network configurations that are " +
                             "usable on the network interface represented by this cluster server " +
                             "instance",
                    xref: { document: "core", section: "11.8.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NetworkInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "ScanMaxTimeSeconds",
                    access: "R V", conformance: "WI | TH", constraint: "desc", default: 0, quality: "F", type: "uint8",
                    details: "This attribute SHALL indicate the maximum duration taken, in seconds, " +
                             "by the network interface on this cluster server instance to provide " +
                             "scan results",
                    xref: { document: "core", section: "11.8.6.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "ConnectMaxTimeSeconds",
                    access: "R V", conformance: "WI | TH", constraint: "desc", default: 0, quality: "F", type: "uint8",
                    details: "This attribute SHALL indicate the maximum duration taken, in seconds, " +
                             "by the network interface on this cluster server instance to report a " +
                             "successful or failed network connection indication. This maximum time " +
                             "SHALL account for all operations needed until a successful network " +
                             "connection is deemed to have occurred, including, for example, " +
                             "obtaining IP addresses, or the execution of necessary internal retries",
                    xref: { document: "core", section: "11.8.6.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "InterfaceEnabled",
                    access: "RW VA", conformance: "M", default: true, quality: "N", type: "bool",
                    details: "This attribute SHALL indicate whether the associated network interface" +
                             " is enabled or not. By default all network interfaces SHOULD be " +
                             "enabled during initial commissioning (InterfaceEnabled set to true",
                    xref: { document: "core", section: "11.8.6.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "LastNetworkingStatus",
                    access: "R A", conformance: "M", default: "null", quality: "X", type: "NetworkCommissioningStatusEnum",
                    details: "This attribute SHALL indicate the status of the last attempt either " +
                             "scan or connect to an operational network, using this interface, " +
                             "whether by invocation of the ConnectNetwork command or by autonomous " +
                             "connection after loss of connectivity or during initial establishment" +
                             ". If no such attempt was made, or no network configurations exist in " +
                             "the Networks attribute, then this attribute SHALL be set to null",
                    xref: { document: "core", section: "11.8.6.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "LastNetworkId",
                    access: "R A", conformance: "M", constraint: "1 to 32", default: "null", quality: "X", type: "octstr",
                    details: "This attribute SHALL indicate the NetworkID used in the last attempt " +
                             "to connect to an operational network, using this interface, whether by" +
                             " invocation of the ConnectNetwork command or by autonomous connection " +
                             "after loss of connectivity or during initial establishment. If no such" +
                             " attempt was made, or no network configurations exist in the Networks " +
                             "attribute, then this attribute SHALL be set to null",
                    xref: { document: "core", section: "11.8.6.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "LastConnectErrorValue",
                    access: "R A", conformance: "M", default: "null", quality: "X", type: "int32",
                    details: "This attribute SHALL indicate the ErrorValue used in the last failed " +
                             "attempt to connect to an operational network, using this interface, " +
                             "whether by invocation of the ConnectNetwork command or by autonomous " +
                             "connection after loss of connectivity or during initial establishment" +
                             ". If no such attempt was made, or no network configurations exist in " +
                             "the Networks attribute, then this attribute SHALL be set to null",
                    xref: { document: "core", section: "11.8.6.8" }
                },

                {
                    tag: "command", id: 0x0000, name: "ScanNetworks",
                    access: "A", conformance: "WI | TH", direction: "request", response: "ScanNetworksResponse",
                    details: "This command SHALL scan on the Cluster instance’s associated network " +
                             "interface for either of",
                    xref: { document: "core", section: "11.8.7.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "ScanNetworksResponse",
                    conformance: "WI | TH", direction: "response",
                    details: "This command SHALL contain the status of the last ScanNetworks command" +
                             ", and the associated scan results if the operation was successful",
                    xref: { document: "core", section: "11.8.7.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "AddOrUpdateWiFiNetwork",
                    access: "A", conformance: "WI", direction: "request", response: "NetworkConfigResponse",
                    details: "This command SHALL be used to add or modify Wi-Fi network " +
                             "configurations",
                    xref: { document: "core", section: "11.8.7.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "AddOrUpdateThreadNetwork",
                    access: "A", conformance: "TH", direction: "request", response: "NetworkConfigResponse",
                    details: "This command SHALL be used to add or modify Thread network " +
                             "configurations",
                    xref: { document: "core", section: "11.8.7.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "RemoveNetwork",
                    access: "A", conformance: "WI | TH", direction: "request", response: "NetworkConfigResponse",
                    details: "This command SHALL remove the network configuration from the Cluster " +
                             "if there was already a network configuration with the same NetworkID. " +
                             "The relative order of the entries in the Networks attribute list SHALL" +
                             " remain unchanged, except for the removal of the requested network " +
                             "configuration",
                    xref: { document: "core", section: "11.8.7.7" }
                },

                {
                    tag: "command", id: 0x0005, name: "NetworkConfigResponse",
                    conformance: "WI | TH", direction: "response",
                    details: "This response command relates status information for some commands " +
                             "which require it as their response command. See each individual " +
                             "cluster server command for the situations that may cause a " +
                             "NetworkingStatus different than Success",
                    xref: { document: "core", section: "11.8.7.8" }
                },

                {
                    tag: "command", id: 0x0006, name: "ConnectNetwork",
                    access: "A", conformance: "WI | TH", direction: "request", response: "ConnectNetworkResponse",
                    details: "This command SHALL attempt to connect to a network whose configuration" +
                             " was previously added by either the AddOrUpdateWiFiNetwork or " +
                             "AddOrUpdateThreadNetwork commands. Network is identified by its " +
                             "NetworkID",
                    xref: { document: "core", section: "11.8.7.9" }
                },

                {
                    tag: "command", id: 0x0007, name: "ConnectNetworkResponse",
                    conformance: "WI | TH", direction: "response",
                    details: "The data for this command is as follows",
                    xref: { document: "core", section: "11.8.7.10" }
                },

                {
                    tag: "command", id: 0x0008, name: "ReorderNetwork",
                    access: "A", conformance: "WI | TH", direction: "request", response: "NetworkConfigResponse",
                    details: "This command SHALL set the specific order of the network configuration" +
                             " selected by its NetworkID in the Networks attribute list to match the" +
                             " position given by NetworkIndex",
                    xref: { document: "core", section: "11.8.7.11" }
                },

                {
                    tag: "datatype", name: "WiFiSecurityBitmap",
                    type: "map8",
                    details: "This data type is derived from map8",
                    xref: { document: "core", section: "11.8.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unencrypted",
                            description: "Supports unencrypted Wi-Fi",
                            xref: { document: "core", section: "11.8.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Wep",
                            description: "Supports Wi-Fi using WEP security",
                            xref: { document: "core", section: "11.8.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "WpaPersonal",
                            description: "Supports Wi-Fi using WPA-Personal security",
                            xref: { document: "core", section: "11.8.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Wpa2Personal",
                            description: "Supports Wi-Fi using WPA2-Personal security",
                            xref: { document: "core", section: "11.8.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Wpa3Personal",
                            description: "Supports Wi-Fi using WPA3-Personal security",
                            xref: { document: "core", section: "11.8.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0030, name: "GeneralCommissioning",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Breadcrumb",
                    access: "RW VA", conformance: "M", default: 0, type: "uint64",
                    details: "This attribute allows for the storage of a client-provided small " +
                             "payload which Administrators and Commissioners MAY write and then " +
                             "subsequently read, to keep track of their own progress. This MAY be " +
                             "used by the Commissioner to avoid repeating already-executed actions " +
                             "upon re-establishing a commissioning link after an error",
                    xref: { document: "core", section: "11.9.5.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "BasicCommissioningInfo",
                    access: "R V", conformance: "M", constraint: "desc", default: "", quality: "F", type: "BasicCommissioningInfo",
                    details: "This attribute SHALL describe critical parameters needed at the " +
                             "beginning of commissioning flow. See BasicCommissioningInfo for more " +
                             "information",
                    xref: { document: "core", section: "11.9.5.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "RegulatoryConfig",
                    access: "R V", conformance: "M", default: "LocationCapability", type: "RegulatoryLocationTypeEnum",
                    details: "This attribute SHALL indicate the regulatory configuration for the " +
                             "product",
                    xref: { document: "core", section: "11.9.5.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "LocationCapability",
                    access: "R V", conformance: "M", default: "IndoorOutdoor", quality: "F", type: "RegulatoryLocationTypeEnum",
                    details: "LocationCapability is statically set by the manufacturer and indicates" +
                             " if this Node needs to be told an exact RegulatoryLocation. For " +
                             "example a Node which is \"Indoor Only\" would not be certified for " +
                             "outdoor use at all, and thus there is no need for a commissioner to " +
                             "set or ask the user about whether the device will be used inside or " +
                             "outside. However a device which states its capability is \"Indoor/" +
                             "Outdoor\" means it would like clarification if possible",
                    xref: { document: "core", section: "11.9.5.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "SupportsConcurrentConnection",
                    access: "R V", conformance: "M", default: true, quality: "F", type: "bool",
                    details: "This attribute SHALL indicate whether this device supports \"concurrent" +
                             " connection flow\" commissioning mode (see Section 5.5, “Commissioning " +
                             "Flows”). If false, the device only supports \"non-concurrent connection" +
                             " flow\" mode",
                    xref: { document: "core", section: "11.9.5.5" }
                },

                {
                    tag: "command", id: 0x0000, name: "ArmFailSafe",
                    access: "A", conformance: "M", direction: "request", response: "ArmFailSafeResponse",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "ArmFailSafeResponse",
                    conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", id: 0x0002, name: "SetRegulatoryConfig",
                    access: "A", conformance: "M", direction: "request", response: "SetRegulatoryConfigResponse",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", id: 0x0003, name: "SetRegulatoryConfigResponse",
                    conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", id: 0x0004, name: "CommissioningComplete",
                    access: "F A", conformance: "M", direction: "request", response: "CommissioningCompleteResponse",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", id: 0x0005, name: "CommissioningCompleteResponse",
                    conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "datatype", name: "CommissioningErrorEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.9.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Ok",
                            conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "ValueOutsideRange",
                            conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "InvalidAuthentication",
                            conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "NoFailSafe",
                            conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "BusyWithOtherAdmin",
                            conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0032, name: "DiagnosticLogs",
            classification: "node",
            children: [
                {
                    tag: "command", id: 0x0000, name: "RetrieveLogsRequest",
                    access: "O", conformance: "M", direction: "request", response: "RetrieveLogsResponse",
                    details: "Reception of this command starts the process of retrieving diagnostic " +
                             "logs from a Node. The data for this command is as follows",
                    xref: { document: "core", section: "11.10.5.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "RetrieveLogsResponse",
                    conformance: "M", direction: "response",
                    details: "This SHALL be generated as a response to the RetrieveLogsRequest. The " +
                             "data for this command is shown in the following",
                    xref: { document: "core", section: "11.10.5.2" }
                },

                {
                    tag: "datatype", name: "IntentEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.10.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "EndUserSupport",
                            conformance: "M",
                            xref: { document: "core", section: "11.10.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "NetworkDiag",
                            conformance: "M",
                            xref: { document: "core", section: "11.10.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "CrashLogs",
                            conformance: "M",
                            xref: { document: "core", section: "11.10.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0033, name: "GeneralDiagnostics",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "NetworkInterfaces",
                    access: "R V", conformance: "M", constraint: "max 8", default: "", type: "list",
                    details: "The NetworkInterfaces attribute SHALL be a list of NetworkInterface " +
                             "structs. Each logical network interface on the Node SHALL be " +
                             "represented by a single entry within the NetworkInterfaces attribute",
                    xref: { document: "core", section: "11.11.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NetworkInterface"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "RebootCount",
                    access: "R V", conformance: "M", default: 0, quality: "N", type: "uint16",
                    details: "The RebootCount attribute SHALL indicate a best-effort count of the " +
                             "number of times the Node has rebooted. The RebootCount attribute " +
                             "SHOULD be incremented each time the Node reboots. The RebootCount " +
                             "attribute SHALL NOT be incremented when a Node wakes from a low-power " +
                             "or sleep state. The RebootCount attribute SHALL only be reset to 0 " +
                             "upon a factory reset of the Node",
                    xref: { document: "core", section: "11.11.6.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "UpTime",
                    access: "R V", conformance: "O", default: 0, quality: "C", type: "uint64",
                    details: "The UpTime attribute SHALL indicate a best-effort assessment of the " +
                             "length of time, in seconds, since the Node’s last reboot. The UpTime " +
                             "attribute SHOULD be incremented to account for the periods of time " +
                             "that a Node is in a low-power or sleep state. The UpTime attribute " +
                             "SHALL only be reset upon a device reboot",
                    xref: { document: "core", section: "11.11.6.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "TotalOperationalHours",
                    access: "R V", conformance: "O", default: 0, quality: "N C", type: "uint32",
                    details: "The TotalOperationalHours attribute SHALL indicate a best-effort " +
                             "attempt at tracking the length of time, in hours, that the Node has " +
                             "been operational. The TotalOperationalHours attribute SHOULD be " +
                             "incremented to account for the periods of time that a Node is in a low" +
                             "-power or sleep state. The",
                    xref: { document: "core", section: "11.11.6.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "BootReason",
                    access: "R V", conformance: "O", default: "", type: "BootReasonEnum",
                    details: "The BootReason attribute SHALL indicate the reason for the Node’s most" +
                             " recent boot",
                    xref: { document: "core", section: "11.11.6.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "ActiveHardwareFaults",
                    access: "R V", conformance: "O", constraint: "max 11", default: "", type: "list",
                    details: "The ActiveHardwareFaults attribute SHALL indicate the set of faults " +
                             "currently detected by the Node. When the Node detects a fault has been" +
                             " raised, the appropriate HardwareFaultEnum value SHALL be added to " +
                             "this list. This list SHALL NOT contain more than one instance of a " +
                             "specific HardwareFaultEnum value. When the Node detects that all " +
                             "conditions contributing to a fault has been cleared, the corresponding" +
                             " HardwareFaultEnum value SHALL be removed from this list. An empty " +
                             "list SHALL indicate there are currently no active faults. The order of" +
                             " this list SHOULD have no significance. Clients interested in " +
                             "monitoring changes in active faults MAY subscribe to this attribute, " +
                             "or they MAY subscribe to HardwareFaultChange",
                    xref: { document: "core", section: "11.11.6.6" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "HardwareFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0006, name: "ActiveRadioFaults",
                    access: "R V", conformance: "O", constraint: "max 7", default: "", type: "list",
                    details: "The ActiveRadioFaults attribute SHALL indicate the set of faults " +
                             "currently detected by the Node. When the Node detects a fault has been" +
                             " raised, the appropriate RadioFaultEnum value SHALL be added to this " +
                             "list. This list SHALL NOT contain more than one instance of a specific" +
                             " RadioFaultEnum value. When the Node detects that all conditions " +
                             "contributing to a fault has been cleared, the corresponding " +
                             "RadioFaultEnum value SHALL be removed from this list. An empty list " +
                             "SHALL indicate there are currently no active faults. The order of this" +
                             " list SHOULD have no significance. Clients interested in monitoring " +
                             "changes in active faults MAY subscribe to this attribute, or they MAY " +
                             "subscribe to RadioFaultChange",
                    xref: { document: "core", section: "11.11.6.7" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "RadioFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0007, name: "ActiveNetworkFaults",
                    access: "R V", conformance: "O", constraint: "max 4", default: "", type: "list",
                    details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults " +
                             "currently detected by the Node. When the Node detects a fault has been" +
                             " raised, the appropriate NetworkFaultEnum value SHALL be added to this" +
                             " list. This list SHALL NOT contain more than one instance of a " +
                             "specific NetworkFaultEnum value. When the Node detects that all " +
                             "conditions contributing to a fault has been cleared, the corresponding" +
                             " NetworkFaultEnum value SHALL be removed from this list. An empty list" +
                             " SHALL indicate there are currently no active faults. The order of " +
                             "this list SHOULD have no significance. Clients interested in " +
                             "monitoring changes in active faults MAY subscribe to this attribute, " +
                             "or they MAY subscribe to NetworkFaultChange",
                    xref: { document: "core", section: "11.11.6.8" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NetworkFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0008, name: "TestEventTriggersEnabled",
                    access: "R V", conformance: "M", default: false, type: "bool",
                    details: "The TestEventTriggersEnabled attribute SHALL indicate whether the Node" +
                             " has any TestEventTrigger configured. When this attribute is true, the" +
                             " Node has been configured with one or more test event triggers by " +
                             "virtue of the internally programmed EnableKey value (see Section 11.11" +
                             ".7.1, “TestEventTrigger Command”) being set to a non-zero value. This " +
                             "attribute can be used by Administrators to detect if a device was " +
                             "inadvertently commissioned with test event trigger mode enabled, and " +
                             "take appropriate action (e.g. warn the user and/or offer to remove all" +
                             " fabrics on the Node",
                    xref: { document: "core", section: "11.11.6.9" }
                },

                {
                    tag: "event", id: 0x0000, name: "HardwareFaultChange",
                    access: "V", conformance: "O", priority: "critical",
                    details: "The HardwareFaultChange Event SHALL indicate a change in the set of " +
                             "hardware faults currently detected by the Node",
                    xref: { document: "core", section: "11.11.8.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "RadioFaultChange",
                    access: "V", conformance: "O", priority: "critical",
                    details: "The RadioFaultChange Event SHALL indicate a change in the set of radio" +
                             " faults currently detected by the Node",
                    xref: { document: "core", section: "11.11.8.2" }
                },

                {
                    tag: "event", id: 0x0002, name: "NetworkFaultChange",
                    access: "V", conformance: "O", priority: "critical",
                    details: "The NetworkFaultChange Event SHALL indicate a change in the set of " +
                             "network faults currently detected by the Node",
                    xref: { document: "core", section: "11.11.8.3" }
                },

                {
                    tag: "event", id: 0x0003, name: "BootReason",
                    access: "V", conformance: "M", priority: "critical",
                    details: "The BootReason Event SHALL indicate the reason that caused the device " +
                             "to start-up. The data of this event SHALL contain the following " +
                             "information",
                    xref: { document: "core", section: "11.11.8.4" }
                },

                {
                    tag: "command", id: 0x0000, name: "TestEventTrigger",
                    access: "M", conformance: "M", direction: "request", response: "status",
                    details: "This command SHALL be supported to provide a means for certification " +
                             "tests to trigger some test- plan-specific events, necessary to assist " +
                             "in automation of device interactions for some certification test cases" +
                             ". This command SHALL NOT cause any changes to the state of the device " +
                             "that persist after the last fabric is removed",
                    xref: { document: "core", section: "11.11.7.1" }
                },

                {
                    tag: "datatype", name: "HardwareFaultEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.11.4.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Radio",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Sensor",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "ResettableOverTemp",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "NonResettableOverTemp",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "PowerSource",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "VisualDisplayFault",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "AudioOutputFault",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "UserInterfaceFault",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "NonVolatileMemoryError",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", id: 0x000a, name: "TamperDetected",
                            conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0034, name: "SoftwareDiagnostics",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "ThreadMetrics",
                    access: "R V", conformance: "O", constraint: "max 64", default: "", type: "list",
                    details: "The ThreadMetrics attribute SHALL be a list of ThreadMetricsStruct " +
                             "structs. Each active thread on the Node SHALL be represented by a " +
                             "single entry within the ThreadMetrics attribute",
                    xref: { document: "core", section: "11.12.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ThreadMetricsStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "CurrentHeapFree",
                    access: "R V", conformance: "O", default: 0, type: "uint64",
                    details: "The CurrentHeapFree attribute SHALL indicate the current amount of " +
                             "heap memory, in bytes, that are free for allocation. The effective " +
                             "amount MAY be smaller due to heap fragmentation or other reasons",
                    xref: { document: "core", section: "11.12.6.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "CurrentHeapUsed",
                    access: "R V", conformance: "O", default: 0, type: "uint64",
                    details: "The CurrentHeapUsed attribute SHALL indicate the current amount of " +
                             "heap memory, in bytes, that is being used",
                    xref: { document: "core", section: "11.12.6.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "CurrentHeapHighWatermark",
                    access: "R V", conformance: "WTRMRK", default: 0, type: "uint64",
                    details: "The CurrentHeapHighWatermark attribute SHALL indicate the maximum " +
                             "amount of heap memory, in bytes, that has been used by the Node. This " +
                             "value SHALL only be reset upon a Node reboot or upon receiving of the " +
                             "ResetWatermarks command",
                    xref: { document: "core", section: "11.12.6.4" }
                },

                {
                    tag: "event", id: 0x0000, name: "SoftwareFault",
                    access: "V", conformance: "O", priority: "info",
                    details: "The SoftwareFault Event SHALL be generated when a software fault takes" +
                             " place on the Node. The event’s data are as follows",
                    xref: { document: "core", section: "11.12.8.1" }
                },

                {
                    tag: "command", id: 0x0000, name: "ResetWatermarks",
                    access: "M", conformance: "WTRMRK", direction: "request", response: "status",
                    details: "Receipt of this command SHALL reset the following values which track " +
                             "high and lower watermarks",
                    xref: { document: "core", section: "11.12.7.1" }
                },

                {
                    tag: "datatype", name: "ThreadMetricsStruct",
                    type: "struct",
                    details: "ID Field",
                    xref: { document: "core", section: "11.12.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Id",
                            conformance: "M", default: 0, type: "uint64",
                            xref: { document: "core", section: "11.12.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Name",
                            conformance: "O", constraint: "max 8", default: "empty", type: "string",
                            xref: { document: "core", section: "11.12.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "StackFreeCurrent",
                            conformance: "O", default: "MS", type: "uint32",
                            xref: { document: "core", section: "11.12.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "StackFreeMinimum",
                            conformance: "O", default: "MS", type: "uint32",
                            xref: { document: "core", section: "11.12.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "StackSize",
                            conformance: "O", default: "MS", type: "uint32",
                            xref: { document: "core", section: "11.12.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0035, name: "ThreadNetworkDiagnostics",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Channel",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "uint16",
                    details: "The Channel attribute SHALL indicate the 802.15.4 channel number " +
                             "configured on the Node’s Thread interface (that is, the Active " +
                             "Operational Dataset’s current Channel value). A value of null SHALL " +
                             "indicate that the Thread interface is not currently configured or " +
                             "operational",
                    xref: { document: "core", section: "11.13.6.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "RoutingRole",
                    access: "R V", conformance: "M", default: "", quality: "X", type: "RoutingRoleEnum",
                    details: "The RoutingRole attribute SHALL indicate the role that this Node has " +
                             "within the routing of messages through the Thread network, as defined " +
                             "by RoutingRoleEnum. The potential roles are defined in the following " +
                             "table. A value of null SHALL indicate that the Thread interface is not" +
                             " currently configured or operational",
                    xref: { document: "core", section: "11.13.6.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "NetworkName",
                    access: "R V", conformance: "M", constraint: "max 16", default: "", quality: "X", type: "String",
                    details: "The NetworkName attribute SHALL indicate a human-readable (displayable" +
                             ") name for the Thread network that the Node has been configured to " +
                             "join to. A value of null SHALL indicate that the Thread interface is " +
                             "not currently configured or operational",
                    xref: { document: "core", section: "11.13.6.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "PanId",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "uint16",
                    details: "The PanId attribute SHALL indicate the 16-bit identifier of the Node " +
                             "on the Thread network. A value of null SHALL indicate that the Thread " +
                             "interface is not currently configured or operational",
                    xref: { document: "core", section: "11.13.6.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "ExtendedPanId",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "uint64",
                    details: "The ExtendedPanId attribute SHALL indicate the unique 64-bit " +
                             "identifier of the Node on the Thread network. A value of null SHALL " +
                             "indicate that the Thread interface is not currently configured or " +
                             "operational",
                    xref: { document: "core", section: "11.13.6.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "MeshLocalPrefix",
                    access: "R V", conformance: "M", default: "", quality: "X", type: "ipv6pre",
                    details: "The MeshLocalPrefix attribute SHALL indicate the mesh-local IPv6 " +
                             "prefix for the Thread network that the Node has been configured to " +
                             "join to. A value of null SHALL indicate that the Thread interface is " +
                             "not currently configured or operational",
                    xref: { document: "core", section: "11.13.6.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "OverrunCount",
                    access: "R V", conformance: "ERRCNT", default: 0, quality: "C", type: "uint64",
                    details: "The OverrunCount attribute SHALL indicate the number of packets " +
                             "dropped either at ingress or egress, due to lack of buffer memory to " +
                             "retain all packets on the ethernet network interface. The OverrunCount" +
                             " attribute SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.13.6.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "NeighborTable",
                    access: "R V", conformance: "M", default: "[]", type: "list",
                    details: "The NeighborTable attribute SHALL indicate the current list of Nodes " +
                             "that comprise the neighbor table on the Node",
                    xref: { document: "core", section: "11.13.6.8" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NeighborTableStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0008, name: "RouteTable",
                    access: "R V", conformance: "M", default: "[]", type: "list",
                    details: "The RouteTable attribute SHALL indicate the current list of router " +
                             "capable Nodes for which routes have been established",
                    xref: { document: "core", section: "11.13.6.9" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "RouteTableStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0009, name: "PartitionId",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "uint32",
                    details: "The PartitionId attribute SHALL indicate the Thread Leader Partition " +
                             "Id for the Thread network to which the Node is joined. This attribute " +
                             "SHALL be null if not attached to a Thread network",
                    xref: { document: "core", section: "11.13.6.10" }
                },

                {
                    tag: "attribute", id: 0x000a, name: "Weighting",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "uint8",
                    details: "The Weighting attribute SHALL indicate the Thread Leader Weight used " +
                             "when operating in the Leader role. This attribute SHALL be null if not" +
                             " attached to a Thread network",
                    xref: { document: "core", section: "11.13.6.11" }
                },

                {
                    tag: "attribute", id: 0x000b, name: "DataVersion",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "uint8",
                    details: "The DataVersion attribute SHALL indicate the full Network Data Version" +
                             " the Node currently uses. This attribute SHALL be null if not attached" +
                             " to a Thread network",
                    xref: { document: "core", section: "11.13.6.12" }
                },

                {
                    tag: "attribute", id: 0x000c, name: "StableDataVersion",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "uint8",
                    details: "The StableDataVersion attribute SHALL indicate the Network Data " +
                             "Version for the stable subset of",
                    xref: { document: "core", section: "11.13.6.13" }
                },

                {
                    tag: "attribute", id: 0x000d, name: "LeaderRouterId",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "uint8",
                    details: "The LeaderRouterId attribute SHALL indicate the 8-bit LeaderRouterId " +
                             "the Node shall attempt to utilize upon becoming a router or leader on " +
                             "the Thread network. This attribute SHALL be null if not attached to a " +
                             "Thread network",
                    xref: { document: "core", section: "11.13.6.14" }
                },

                {
                    tag: "attribute", id: 0x000e, name: "DetachedRoleCount",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C", type: "uint16",
                    details: "The DetachedRoleCount attribute SHALL indicate the number of times the" +
                             " Node entered the OT_DEVICE_ROLE_DETACHED role as specified within the" +
                             " Thread specification. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.15" }
                },

                {
                    tag: "attribute", id: 0x000f, name: "ChildRoleCount",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C", type: "uint16",
                    details: "The ChildRoleCount attribute SHALL indicate the number of times the " +
                             "Node entered the OT_DEVICE_ROLE_CHILD role as specified within the " +
                             "Thread specification. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.16" }
                },

                {
                    tag: "attribute", id: 0x0010, name: "RouterRoleCount",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C", type: "uint16",
                    details: "The RouterRoleCount attribute SHALL indicate the number of times the " +
                             "Node entered the OT_DEVICE_ROLE_ROUTER role as specified within the " +
                             "Thread specification. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.17" }
                },

                {
                    tag: "attribute", id: 0x0011, name: "LeaderRoleCount",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C", type: "uint16",
                    details: "The LeaderRoleCount attribute SHALL indicate the number of times the " +
                             "Node entered the OT_DEVICE_ROLE_LEADER role as specified within the " +
                             "Thread specification. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.18" }
                },

                {
                    tag: "attribute", id: 0x0012, name: "AttachAttemptCount",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C", type: "uint16",
                    details: "The AttachAttemptCount attribute SHALL indicate the number of attempts" +
                             " that have been made to attach to a Thread network while the Node was " +
                             "detached from all Thread networks. This value SHALL only be reset upon" +
                             " a Node reboot",
                    xref: { document: "core", section: "11.13.6.19" }
                },

                {
                    tag: "attribute", id: 0x0013, name: "PartitionIdChangeCount",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C", type: "uint16",
                    details: "The PartitionIdChangeCount attribute SHALL indicate the number of " +
                             "times that the Thread network that the Node is connected to has " +
                             "changed its Partition ID. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.20" }
                },

                {
                    tag: "attribute", id: 0x0014, name: "BetterPartitionAttachAttemptCount",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C", type: "uint16",
                    details: "The BetterPartitionAttachAttemptCount attribute SHALL indicate the " +
                             "number of times a Node has attempted to attach to a different Thread " +
                             "partition that it has determined is better than the partition it is " +
                             "currently attached to. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.21" }
                },

                {
                    tag: "attribute", id: 0x0015, name: "ParentChangeCount",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C", type: "uint16",
                    details: "The ParentChangeCount attribute SHALL indicate the number of times a " +
                             "Node has changed its parent. This value SHALL only be reset upon a " +
                             "Node reboot",
                    xref: { document: "core", section: "11.13.6.22" }
                },

                {
                    tag: "attribute", id: 0x0016, name: "TxTotalCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxTotalCount attribute SHALL indicate the total number of unique " +
                             "MAC frame transmission requests. The TxTotalCount attribute SHALL only" +
                             " be incremented by 1 for each MAC transmission request regardless of " +
                             "the amount of CCA failures, CSMA-CA attempts, or retransmissions. This" +
                             " value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.23" }
                },

                {
                    tag: "attribute", id: 0x0017, name: "TxUnicastCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxUnicastCount attribute SHALL indicate the total number of unique" +
                             " unicast MAC frame transmission requests. The TxUnicastCount attribute" +
                             " SHALL only be incremented by 1 for each unicast MAC transmission " +
                             "request regardless of the amount of CCA failures, CSMA-CA attempts, or" +
                             " retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.24" }
                },

                {
                    tag: "attribute", id: 0x0018, name: "TxBroadcastCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxBroadcastCount attribute SHALL indicate the total number of " +
                             "unique broadcast MAC frame transmission requests. The TxBroadcastCount" +
                             " attribute SHALL only be incremented by 1 for each broadcast MAC " +
                             "transmission request regardless of the amount of CCA failures, CSMA-CA" +
                             " attempts, or retransmissions. This value SHALL only be reset upon a " +
                             "Node reboot",
                    xref: { document: "core", section: "11.13.6.25" }
                },

                {
                    tag: "attribute", id: 0x0019, name: "TxAckRequestedCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxAckRequestedCount attribute SHALL indicate the total number of " +
                             "unique MAC frame transmission requests with requested acknowledgment. " +
                             "The TxAckRequestedCount attribute SHALL only be incremented by 1 for " +
                             "each MAC transmission request with requested acknowledgment regardless" +
                             " of the amount of CCA failures, CSMA-CA attempts, or retransmissions. " +
                             "This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.26" }
                },

                {
                    tag: "attribute", id: 0x001a, name: "TxAckedCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxAckedCount attribute SHALL indicate the total number of unique " +
                             "MAC frame transmission requests that were acked. The TxAckedCount " +
                             "attribute SHALL only be incremented by 1 for each MAC transmission " +
                             "request that is acked regardless of the amount of CCA failures, CSMA-" +
                             "CA attempts, or retransmissions. This value SHALL only be reset upon a" +
                             " Node reboot",
                    xref: { document: "core", section: "11.13.6.27" }
                },

                {
                    tag: "attribute", id: 0x001b, name: "TxNoAckRequestedCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxNoAckRequestedCount attribute SHALL indicate the total number of" +
                             " unique MAC frame transmission requests without requested " +
                             "acknowledgment. The TxNoAckRequestedCount attribute SHALL only be " +
                             "incremented by 1 for each MAC transmission request that is does not " +
                             "request acknowledgement regardless of the amount of CCA failures, CSMA" +
                             "-CA attempts, or retransmissions",
                    xref: { document: "core", section: "11.13.6.28" }
                },

                {
                    tag: "attribute", id: 0x001c, name: "TxDataCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxDataCount attribute SHALL indicate the total number of unique " +
                             "MAC Data frame transmission requests. The TxDataCount attribute SHALL " +
                             "only be incremented by 1 for each MAC Data frame transmission request " +
                             "regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                             "retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.29" }
                },

                {
                    tag: "attribute", id: 0x001d, name: "TxDataPollCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxDataPollCount attribute SHALL indicate the total number of " +
                             "unique MAC Data Poll frame transmission requests. The TxDataPollCount " +
                             "attribute SHALL only be incremented by 1 for each MAC Data Poll frame " +
                             "transmission request regardless of the amount of CCA failures, CSMA-CA" +
                             " attempts, or retransmissions. This value SHALL only be reset upon a " +
                             "Node reboot",
                    xref: { document: "core", section: "11.13.6.30" }
                },

                {
                    tag: "attribute", id: 0x001e, name: "TxBeaconCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxBeaconCount attribute SHALL indicate the total number of unique " +
                             "MAC Beacon frame transmission requests. The TxBeaconCount attribute " +
                             "SHALL only be incremented by 1 for each MAC Beacon frame transmission " +
                             "request regardless of the amount of CCA failures, CSMA-CA attempts, or" +
                             " retransmissions",
                    xref: { document: "core", section: "11.13.6.31" }
                },

                {
                    tag: "attribute", id: 0x001f, name: "TxBeaconRequestCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxBeaconRequestCount attribute SHALL indicate the total number of " +
                             "unique MAC Beacon Request frame transmission requests. The " +
                             "TxBeaconRequestCount attribute SHALL only be incremented by 1 for each" +
                             " MAC Beacon Request frame transmission request regardless of the " +
                             "amount of CCA failures, CSMA-CA attempts, or retransmissions. This " +
                             "value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.32" }
                },

                {
                    tag: "attribute", id: 0x0020, name: "TxOtherCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxOtherCount attribute SHALL indicate the total number of unique " +
                             "MAC frame transmission requests that are not counted by any other " +
                             "attribute. The TxOtherCount attribute SHALL only be incremented by 1 " +
                             "for each MAC frame transmission request regardless of the amount of " +
                             "CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL " +
                             "only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.33" }
                },

                {
                    tag: "attribute", id: 0x0021, name: "TxRetryCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxRetryCount attribute SHALL indicate the total number of MAC " +
                             "retransmission attempts. The TxRetryCount attribute SHALL only be " +
                             "incremented by 1 for each retransmission attempt that may be triggered" +
                             " by lack of acknowledgement, CSMA/CA failure, or other type of " +
                             "transmission error. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.34" }
                },

                {
                    tag: "attribute", id: 0x0022, name: "TxDirectMaxRetryExpiryCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxDirectMaxRetryExpiryCount attribute SHALL indicate the total " +
                             "number of unique MAC transmission packets that meet maximal retry " +
                             "limit for direct packets. The TxDirectMaxRetryExpiryCount attribute " +
                             "SHALL only be incremented by 1 for each unique MAC transmission " +
                             "packets that meets the maximal retry limit for direct packets. This " +
                             "value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.35" }
                },

                {
                    tag: "attribute", id: 0x0023, name: "TxIndirectMaxRetryExpiryCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxIndirectMaxRetryExpiryCount attribute SHALL indicate the total " +
                             "number of unique MAC transmission packets that meet maximal retry " +
                             "limit for indirect packets. The TxIndirectMaxRetryExpiryCount " +
                             "attribute SHALL only be incremented by 1 for each unique MAC " +
                             "transmission packets that meets the maximal retry limit for indirect " +
                             "packets. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.36" }
                },

                {
                    tag: "attribute", id: 0x0024, name: "TxErrCcaCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxErrCcaCount attribute SHALL indicate the total number of CCA " +
                             "failures. The TxErrCcaCount attribute SHALL only be incremented by 1 " +
                             "for each instance of a CCA failure. This value SHALL only be reset " +
                             "upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.37" }
                },

                {
                    tag: "attribute", id: 0x0025, name: "TxErrAbortCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxErrAbortCount attribute SHALL indicate the total number of " +
                             "unique MAC transmission request failures caused by an abort error. The" +
                             " TxErrAbortCount attribute SHALL only be incremented by 1 for each " +
                             "unique MAC transmission request failure caused by an abort error",
                    xref: { document: "core", section: "11.13.6.38" }
                },

                {
                    tag: "attribute", id: 0x0026, name: "TxErrBusyChannelCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The TxErrBusyChannelCount attribute SHALL indicate the total number of" +
                             " unique MAC transmission request failures caused by an error as the " +
                             "result of a busy channel (a CSMA/CA fail). The TxErrBusyChannelCount " +
                             "attribute SHALL only be incremented by 1 for each unique MAC " +
                             "transmission request failure caused by a busy channel such as a CSMA/" +
                             "CA failure",
                    xref: { document: "core", section: "11.13.6.39" }
                },

                {
                    tag: "attribute", id: 0x0027, name: "RxTotalCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxTotalCount attribute SHALL indicate the total number of received" +
                             " unique MAC frames. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.40" }
                },

                {
                    tag: "attribute", id: 0x0028, name: "RxUnicastCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxUnicastCount attribute SHALL indicate the total number of " +
                             "received unique unicast MAC frames. This value SHALL only be reset " +
                             "upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.41" }
                },

                {
                    tag: "attribute", id: 0x0029, name: "RxBroadcastCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxBroadcastCount attribute SHALL indicate the total number of " +
                             "received unique broadcast MAC frames. This value SHALL only be reset " +
                             "upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.42" }
                },

                {
                    tag: "attribute", id: 0x002a, name: "RxDataCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxDataCount attribute SHALL indicate the total number of received " +
                             "unique MAC Data frames. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.43" }
                },

                {
                    tag: "attribute", id: 0x002b, name: "RxDataPollCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxDataPollCount attribute SHALL indicate the total number of " +
                             "received unique MAC Data Poll frames. This value SHALL only be reset " +
                             "upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.44" }
                },

                {
                    tag: "attribute", id: 0x002c, name: "RxBeaconCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxBeaconCount attribute SHALL indicate the total number of " +
                             "received unique MAC Beacon frames. This value SHALL only be reset upon" +
                             " a Node reboot",
                    xref: { document: "core", section: "11.13.6.45" }
                },

                {
                    tag: "attribute", id: 0x002d, name: "RxBeaconRequestCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxBeaconRequestCount attribute SHALL indicate the total number of " +
                             "received unique MAC Beacon Request frames. This value SHALL only be " +
                             "reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.46" }
                },

                {
                    tag: "attribute", id: 0x002e, name: "RxOtherCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxOtherCount attribute SHALL indicate the total number of received" +
                             " unique MAC frame requests that are not counted by any other attribute" +
                             ". This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.47" }
                },

                {
                    tag: "attribute", id: 0x002f, name: "RxAddressFilteredCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxAddressFilteredCount attribute SHALL indicate the total number " +
                             "of received unique MAC frame requests that have been dropped as a " +
                             "result of MAC filtering. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.48" }
                },

                {
                    tag: "attribute", id: 0x0030, name: "RxDestAddrFilteredCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxDestAddrFilteredCount attribute SHALL indicate the total number " +
                             "of received unique MAC frame requests that have been dropped as a " +
                             "result of a destination address check. This value SHALL only be reset " +
                             "upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.49" }
                },

                {
                    tag: "attribute", id: 0x0031, name: "RxDuplicatedCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxDuplicatedCount attribute SHALL indicate the total number of " +
                             "received MAC frame requests that have been dropped as a result of " +
                             "being a duplicate of a previously received MAC frame request. This " +
                             "value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.50" }
                },

                {
                    tag: "attribute", id: 0x0032, name: "RxErrNoFrameCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxErrNoFrameCount attribute SHALL indicate the total number of " +
                             "received unique MAC frame requests that have been dropped as a result " +
                             "of missing or malformed frame contents. This value SHALL only be reset" +
                             " upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.51" }
                },

                {
                    tag: "attribute", id: 0x0033, name: "RxErrUnknownNeighborCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxErrUnknownNeighborCount attribute SHALL indicate the total " +
                             "number of received unique MAC frame requests that have been dropped as" +
                             " a result of originating from an unknown neighbor device. This value " +
                             "SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.52" }
                },

                {
                    tag: "attribute", id: 0x0034, name: "RxErrInvalidScrAddrCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxErrInvalidScrAddrCount attribute SHALL indicate the total number" +
                             " of received unique MAC frame requests that have been dropped as a " +
                             "result of containing an invalid source address. This value SHALL only " +
                             "be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.53" }
                },

                {
                    tag: "attribute", id: 0x0035, name: "RxErrSecCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxErrSecCount attribute SHALL indicate the total number of " +
                             "received unique MAC frame requests that have been dropped as a result " +
                             "of an error with the security of the received frame. This value SHALL " +
                             "only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.54" }
                },

                {
                    tag: "attribute", id: 0x0036, name: "RxErrFcsCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxErrFcsCount attribute SHALL indicate the total number of " +
                             "received unique MAC frame requests that have been dropped as a result " +
                             "of an error with the FCS of the received frame. This value SHALL only " +
                             "be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.55" }
                },

                {
                    tag: "attribute", id: 0x0037, name: "RxErrOtherCount",
                    access: "R V", conformance: "[M, ACCNT]", default: 0, quality: "C", type: "uint32",
                    details: "The RxErrOtherCount attribute SHALL indicate the total number of " +
                             "received unique MAC frame requests that have been dropped as a result " +
                             "of an error that is not counted by any other attribute. This value " +
                             "SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.56" }
                },

                {
                    tag: "attribute", id: 0x0038, name: "ActiveTimestamp",
                    access: "R V", conformance: "O", default: 0, quality: "X", type: "uint64",
                    details: "This attribute SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.57" }
                },

                {
                    tag: "attribute", id: 0x0039, name: "PendingTimestamp",
                    access: "R V", conformance: "O", default: 0, quality: "X", type: "uint64",
                    details: "This attribute SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.58" }
                },

                {
                    tag: "attribute", id: 0x003a, name: "Delay",
                    access: "R V", conformance: "O", default: 0, quality: "X", type: "uint32",
                    details: "This attribute SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.59" }
                },

                {
                    tag: "attribute", id: 0x003b, name: "SecurityPolicy",
                    access: "R V", conformance: "M", default: "", quality: "X", type: "SecurityPolicy",
                    details: "The SecurityPolicy attribute indicates the current security policies " +
                             "for the Thread partition to which a Node is connected. This attribute " +
                             "SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.60" }
                },

                {
                    tag: "attribute", id: 0x003c, name: "ChannelPage0Mask",
                    access: "R V", conformance: "M", constraint: "4", default: "", quality: "X", type: "octstr",
                    details: "The ChannelPage0Mask attribute indicates the channels within channel " +
                             "page 0, in the 2.4GHz ISM band. The channels are represented in most " +
                             "significant bit order, with bit value 1 meaning selected, bit value 0 " +
                             "meaning unselected. For example, the most significant bit of the left-" +
                             "most byte indicates channel 0. If channel 0 and channel 10 are " +
                             "selected, the mask would be: 80 20 00 00. This attribute SHALL be null" +
                             " when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.61" }
                },

                {
                    tag: "attribute", id: 0x003d, name: "OperationalDatasetComponents",
                    access: "R V", conformance: "M", default: "", quality: "X", type: "OperationalDatasetComponents",
                    details: "The OperationalDatasetComponents attribute is a collection of flags to" +
                             " indicate the presence of various operationally acquired values",
                    xref: { document: "core", section: "11.13.6.62" }
                },

                {
                    tag: "attribute", id: 0x003e, name: "ActiveNetworkFaults",
                    access: "R V", conformance: "M", constraint: "max 4", default: "", type: "list",
                    details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults " +
                             "currently detected by the Node",
                    xref: { document: "core", section: "11.13.6.63" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NetworkFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", id: 0x0000, name: "ConnectionStatus",
                    access: "V", conformance: "O", priority: "info",
                    details: "The ConnectionStatus Event SHALL indicate that a Node’s connection " +
                             "status to a Thread network has changed",
                    xref: { document: "core", section: "11.13.8.2" }
                },

                {
                    tag: "event", id: 0x0001, name: "NetworkFaultChange",
                    access: "V", conformance: "O", priority: "info",
                    details: "The NetworkFaultChange Event SHALL indicate a change in the set of " +
                             "network faults currently detected by the Node",
                    xref: { document: "core", section: "11.13.8.1" }
                },

                {
                    tag: "command", id: 0x0000, name: "ResetCounts",
                    access: "M", conformance: "ERRCNT", direction: "request", response: "status",
                    details: "Reception of this command SHALL reset the following attributes to 0",
                    xref: { document: "core", section: "11.13.7.1" }
                },

                {
                    tag: "datatype", name: "NetworkFaultEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.13.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M",
                            xref: { document: "core", section: "11.13.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "LinkDown",
                            conformance: "M",
                            xref: { document: "core", section: "11.13.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "HardwareFailure",
                            conformance: "M",
                            xref: { document: "core", section: "11.13.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "NetworkJammed",
                            conformance: "M",
                            xref: { document: "core", section: "11.13.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0036, name: "WiFiNetworkDiagnostics",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Bssid",
                    access: "R V", conformance: "M", constraint: "6", default: "null", quality: "X", type: "octstr",
                    details: "The BSSID attribute SHALL indicate the BSSID for which the Wi-Fi " +
                             "network the Node is currently connected",
                    xref: { document: "core", section: "11.14.6.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "SecurityType",
                    access: "R V", conformance: "M", default: "null", quality: "X", type: "SecurityTypeEnum",
                    details: "The SecurityType attribute SHALL indicate the current type of Wi-Fi " +
                             "security used",
                    xref: { document: "core", section: "11.14.6.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "WiFiVersion",
                    access: "R V", conformance: "M", default: "null", quality: "X", type: "WiFiVersionEnum",
                    details: "The WiFiVersion attribute SHALL indicate the current 802.11 standard " +
                             "version in use by the Node, per the table below",
                    xref: { document: "core", section: "11.14.6.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "ChannelNumber",
                    access: "R V", conformance: "M", default: "null", quality: "X", type: "uint16",
                    details: "The ChannelNumber attribute SHALL indicate the channel that Wi-Fi " +
                             "communication is currently operating on",
                    xref: { document: "core", section: "11.14.6.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "Rssi",
                    access: "R V", conformance: "M", constraint: "-120 to 0", default: "null", quality: "X C", type: "int8",
                    details: "The RSSI attribute SHALL indicate the current RSSI of the Node’s Wi-Fi" +
                             " radio in dBm",
                    xref: { document: "core", section: "11.14.6.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "BeaconLostCount",
                    access: "R V", conformance: "ERRCNT", default: 0, quality: "X C", type: "uint32",
                    details: "The BeaconLostCount attribute SHALL indicate the count of the number " +
                             "of missed beacons the Node has detected. If the Node does not have an " +
                             "ability to count beacons expected and not received, this value MAY " +
                             "remain set to zero",
                    xref: { document: "core", section: "11.14.6.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "BeaconRxCount",
                    access: "R V", conformance: "P, KTCNT", default: 0, quality: "X C", type: "uint32",
                    details: "The BeaconRxCount attribute SHALL indicate the count of the number of " +
                             "received beacons. The total number of expected beacons that could have" +
                             " been received during the interval since association SHOULD match the " +
                             "sum of BeaconRxCount and BeaconLostCount. If the Node does not have an" +
                             " ability to report count of beacons received, this value MAY remain " +
                             "set to zero",
                    xref: { document: "core", section: "11.14.6.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "PacketMulticastRxCount",
                    access: "R V", conformance: "P, KTCNT", default: 0, quality: "X C", type: "uint32",
                    details: "The PacketMulticastRxCount attribute SHALL indicate the number of " +
                             "multicast packets received by",
                    xref: { document: "core", section: "11.14.6.8" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "PacketMulticastTxCount",
                    access: "R V", conformance: "P, KTCNT", default: 0, quality: "X C", type: "uint32",
                    details: "The PacketMulticastTxCount attribute SHALL indicate the number of " +
                             "multicast packets transmitted by the Node",
                    xref: { document: "core", section: "11.14.6.9" }
                },

                {
                    tag: "attribute", id: 0x0009, name: "PacketUnicastRxCount",
                    access: "R V", conformance: "P, KTCNT", default: 0, quality: "X C", type: "uint32",
                    details: "The PacketUnicastRxCount attribute SHALL indicate the number of " +
                             "unicast packets received by the Node",
                    xref: { document: "core", section: "11.14.6.10" }
                },

                {
                    tag: "attribute", id: 0x000a, name: "PacketUnicastTxCount",
                    access: "R V", conformance: "P, KTCNT", default: 0, quality: "X C", type: "uint32",
                    details: "The PacketUnicastTxCount attribute SHALL indicate the number of " +
                             "unicast packets transmitted by the Node",
                    xref: { document: "core", section: "11.14.6.11" }
                },

                {
                    tag: "attribute", id: 0x000b, name: "CurrentMaxRate",
                    access: "R V", conformance: "O", default: 0, quality: "X C", type: "uint64",
                    details: "The CurrentMaxRate attribute SHALL indicate the current maximum PHY " +
                             "rate of transfer of data in bits-per-second",
                    xref: { document: "core", section: "11.14.6.12" }
                },

                {
                    tag: "attribute", id: 0x000c, name: "OverrunCount",
                    access: "R V", conformance: "ERRCNT", default: 0, quality: "X C", type: "uint64",
                    details: "The OverrunCount attribute SHALL indicate the number of packets " +
                             "dropped either at ingress or egress, due to lack of buffer memory to " +
                             "retain all packets on the network interface. The OverrunCount " +
                             "attribute SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.14.6.13" }
                },

                {
                    tag: "event", id: 0x0000, name: "Disconnection",
                    access: "V", conformance: "O", priority: "info",
                    details: "The Disconnection Event SHALL indicate that a Node’s Wi-Fi connection " +
                             "has been disconnected as a result of de-authenticated or dis-" +
                             "association and indicates the reason",
                    xref: { document: "core", section: "11.14.8.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "AssociationFailure",
                    access: "V", conformance: "O", priority: "info",
                    details: "The AssociationFailure event SHALL indicate that a Node has attempted " +
                             "to connect, or reconnect, to a Wi-Fi access point, but is unable to " +
                             "successfully associate or authenticate, after exhausting all internal " +
                             "retries of its supplicant",
                    xref: { document: "core", section: "11.14.8.2" }
                },

                {
                    tag: "event", id: 0x0002, name: "ConnectionStatus",
                    access: "V", conformance: "O", priority: "info",
                    details: "The ConnectionStatus Event SHALL indicate that a Node’s connection " +
                             "status to a Wi-Fi network has changed. Connected, in this context, " +
                             "SHALL mean that a Node acting as a Wi-Fi station is successfully " +
                             "associated to a Wi-Fi Access Point",
                    xref: { document: "core", section: "11.14.8.3" }
                },

                {
                    tag: "command", id: 0x0000, name: "ResetCounts",
                    access: "O", conformance: "ERRCNT", direction: "request", response: "status",
                    details: "Reception of this command SHALL reset the following attributes to 0",
                    xref: { document: "core", section: "11.14.7.1" }
                },

                {
                    tag: "datatype", name: "SecurityTypeEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.14.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Unspecified",
                            conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "None",
                            conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Wep",
                            conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Wpa",
                            conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Wpa2",
                            conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Wpa3",
                            conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0037, name: "EthernetNetworkDiagnostics",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "PhyRate",
                    access: "R V", conformance: "O", default: "null", quality: "X", type: "PHYRateEnum",
                    details: "The PHYRate attribute SHALL indicate the current nominal, usable speed" +
                             " at the top of the physical layer of the Node. A value of null SHALL " +
                             "indicate that the interface is not currently configured or operational",
                    xref: { document: "core", section: "11.15.6.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "FullDuplex",
                    access: "R V", conformance: "O", default: true, quality: "X", type: "bool",
                    details: "The FullDuplex attribute SHALL indicate if the Node is currently " +
                             "utilizing the full-duplex operating mode. A value of null SHALL " +
                             "indicate that the interface is not currently configured or operational",
                    xref: { document: "core", section: "11.15.6.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "PacketRxCount",
                    access: "R V", conformance: "P, KTCNT", default: 0, type: "uint64",
                    details: "The PacketRxCount attribute SHALL indicate the number of packets that " +
                             "have been received on the ethernet network interface. The " +
                             "PacketRxCount attribute SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.15.6.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "PacketTxCount",
                    access: "R V", conformance: "P, KTCNT", default: 0, quality: "C", type: "uint64",
                    details: "The PacketTxCount attribute SHALL indicate the number of packets that " +
                             "have been successfully transferred on the ethernet network interface. " +
                             "The PacketTxCount attribute SHALL be reset to 0 upon a reboot of the " +
                             "Node",
                    xref: { document: "core", section: "11.15.6.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "TxErrCount",
                    access: "R V", conformance: "ERRCNT", default: 0, quality: "C", type: "uint64",
                    details: "The TxErrCount attribute SHALL indicate the number of failed packet " +
                             "transmissions that have occurred on the ethernet network interface. " +
                             "The TxErrCount attribute SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.15.6.5" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "CollisionCount",
                    access: "R V", conformance: "ERRCNT", default: 0, quality: "C", type: "uint64",
                    details: "The CollisionCount attribute SHALL indicate the number of collisions " +
                             "that have occurred while attempting to transmit a packet on the " +
                             "ethernet network interface. The CollisionCount attribute SHALL be " +
                             "reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.15.6.6" }
                },

                {
                    tag: "attribute", id: 0x0006, name: "OverrunCount",
                    access: "R V", conformance: "ERRCNT", default: 0, quality: "C", type: "uint64",
                    details: "The OverrunCount attribute SHALL indicate the number of packets " +
                             "dropped either at ingress or egress, due to lack of buffer memory to " +
                             "retain all packets on the ethernet network interface. The OverrunCount" +
                             " attribute SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.15.6.7" }
                },

                {
                    tag: "attribute", id: 0x0007, name: "CarrierDetect",
                    access: "R V", conformance: "O", default: true, quality: "X C", type: "bool",
                    details: "The CarrierDetect attribute SHALL indicate the value of the Carrier " +
                             "Detect control signal present on the ethernet network interface. A " +
                             "value of null SHALL indicate that the interface is not currently " +
                             "configured or operational",
                    xref: { document: "core", section: "11.15.6.8" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "TimeSinceReset",
                    access: "R V", conformance: "O", default: 0, quality: "C", type: "uint64",
                    xref: { document: "core", section: "11.15.6" }
                },

                {
                    tag: "command", id: 0x0000, name: "ResetCounts",
                    access: "M", conformance: "P, KTCNT | ERRCNT", direction: "request", response: "status",
                    details: "Reception of this command SHALL reset the following attributes to 0",
                    xref: { document: "core", section: "11.15.7.1" }
                },

                {
                    tag: "datatype", name: "PHYRateEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.15.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "Rate10M",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "Rate100M",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "Rate1G",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "Rate25G",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "Rate5G",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0005, name: "Rate10G",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0006, name: "Rate40G",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0007, name: "Rate100G",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0008, name: "Rate200G",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0009, name: "Rate400G",
                            conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0038, name: "TimeSync",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "UtcTime",
                    access: "R V", conformance: "M", default: "null", quality: "X C", type: "epoch-us",
                    details: "If the server has achieved time synchronization, this SHALL indicate " +
                             "the current time as a UTC epoch-us (Epoch Time in Microseconds",
                    xref: { document: "core", section: "11.16.8.1" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "Granularity",
                    access: "R V", conformance: "M", constraint: "desc", default: 0, type: "GranularityEnum",
                    details: "The granularity of the error that the server is willing to guarantee " +
                             "on the time synchronization. It is of type GranularityEnum",
                    xref: { document: "core", section: "11.16.8.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "TimeSource",
                    access: "R V", conformance: "O", constraint: "desc", default: "None", type: "TimeSourceEnum",
                    details: "The server’s time source. This attribute indicates what method the " +
                             "server is using to sync, whether the source uses NTS or not and " +
                             "whether the source is internal or external to the Fabric. This " +
                             "attribute MAY be used by a client to determine its level of trust in " +
                             "the UTCTime. It is of type TimeSourceEnum",
                    xref: { document: "core", section: "11.16.8.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "TrustedTimeNodeId",
                    access: "RW VA", conformance: "M", default: "null", quality: "X", type: "node-id",
                    details: "The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is " +
                             "used as a check on external time sync sources and MAY be used as the " +
                             "primary time source if other time sources are unavailable. See Section" +
                             " 11.16.13, “Time source prioritization”. This attribute is writeable " +
                             "only by an Administrator. It SHOULD be set by the Commissioner during " +
                             "commissioning. If no appropriate TrustedTimeNodeId is available, the " +
                             "commissioner MAY set this value to null",
                    xref: { document: "core", section: "11.16.8.5" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "DefaultNtp",
                    access: "RW VA", conformance: "NTPC", constraint: "max 128", default: "null", quality: "X", type: "string",
                    details: "The default NTP server the server’s Node may use if other time sources" +
                             " are unavailable. This attribute may contain a domain name or a static" +
                             " IPv6 address in text format as specified in RFC 5952 [https://tools." +
                             "ietf.org/html/rfc5952]. See Section 11.16.13, “Time source " +
                             "prioritization”. This attribute is writeable only by an Administrator" +
                             ". It SHOULD be set by the Commissioner during commissioning. If no " +
                             "default NTP is available, the Commissioner MAY set this value to null",
                    xref: { document: "core", section: "11.16.8.4" }
                },

                {
                    tag: "attribute", id: 0x0005, name: "TimeZone",
                    access: "RW VM", conformance: "TZ", constraint: "1 to 2", default: "{0,0}", type: "list",
                    details: "A list of time zone offsets from UTC and when they SHALL take effect. " +
                             "This attribute uses a list of time offset configurations to allow " +
                             "Nodes to handle scheduled regulatory time zone changes. This attribute" +
                             " SHALL NOT be used to indicate daylight savings time changes (see " +
                             "Section 11.16.8.7, “DSTOffset Attribute” for daylight savings time",
                    xref: { document: "core", section: "11.16.8.6" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "TimeZoneStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0006, name: "DstOffset",
                    access: "RW VM", conformance: "TZ", constraint: "max 20", default: "{}", type: "list",
                    details: "A list of offsets to apply for daylight savings time, and their " +
                             "validity period. List entries SHALL be sorted by ValidStarting time",
                    xref: { document: "core", section: "11.16.8.7" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "DSTOffsetStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0007, name: "LocalTime",
                    access: "R V", conformance: "TZ", default: 0, quality: "X C", type: "epoch-us",
                    details: "The computed current local time of the server as a epoch-us (Epoch " +
                             "Time in Microseconds). The local time offset of the value is the sum " +
                             "of the currently used TimeZoneEntry’s offset and the currently used " +
                             "DST offset, if any",
                    xref: { document: "core", section: "11.16.8.8" }
                },

                {
                    tag: "attribute", id: 0x0008, name: "TimeZoneDatabase",
                    access: "R V", conformance: "TZ", default: true, quality: "F", type: "bool",
                    details: "Indicates whether the server has access to a time zone database. Nodes" +
                             " with a time zone database MAY update their own DSTOffset attribute to" +
                             " add new entries and MAY push DSTOffset updates to other Nodes in the " +
                             "same time zone as required",
                    xref: { document: "core", section: "11.16.8.9" }
                },

                {
                    tag: "attribute", id: 0x0009, name: "NtpServerPort",
                    access: "R V", conformance: "NTPS", default: "null", quality: "X", type: "uint16",
                    details: "If the server is running an NTP server, this value SHALL be the port " +
                             "number for the service. If the server is not currently running an NTP " +
                             "server, this value SHALL be null",
                    xref: { document: "core", section: "11.16.8.10" }
                },

                {
                    tag: "event", id: 0x0000, name: "DstTableEmpty",
                    access: "V", conformance: "TZ", priority: "info",
                    details: "This event SHALL be generated when the server stops applying the " +
                             "current DSTOffset and there are no entries in the list with a larger " +
                             "ValidStarting time, indicating the need to possibly get new DST data",
                    xref: { document: "core", section: "11.16.10.1" }
                },

                {
                    tag: "event", id: 0x0001, name: "DstStatus",
                    access: "V", conformance: "TZ", priority: "info",
                    details: "This event SHALL be generated when the server starts or stops applying" +
                             " a DST offset",
                    xref: { document: "core", section: "11.16.10.2" }
                },

                {
                    tag: "event", id: 0x0002, name: "TimeZoneStatus",
                    access: "V", conformance: "TZ", priority: "info",
                    details: "This event SHALL be generated when the server changes its time zone " +
                             "offset or name. It SHALL NOT be sent for DST changes that are not " +
                             "accompanied by a time zone change",
                    xref: { document: "core", section: "11.16.10.3" }
                },

                {
                    tag: "command", id: 0x0000, name: "SetUtcTime",
                    access: "A", conformance: "M", direction: "request", response: "status",
                    details: "The data for this command are as follows",
                    xref: { document: "core", section: "11.16.9.1" }
                },

                {
                    tag: "datatype", name: "GranularityEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.16.6.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "NoTimeGranularity",
                            conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "MinutesGranularity",
                            conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "SecondsGranularity",
                            conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0003, name: "MillisecondsGranularity",
                            conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        },

                        {
                            tag: "datatype", id: 0x0004, name: "MicrosecondsGranularity",
                            conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x003e, name: "OperationalCredentials",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "NoCs",
                    access: "R F A", conformance: "M", constraint: "max SupportedFabrics", default: "", quality: "N C", type: "list",
                    details: "This attribute contains all NOCs applicable to this Node, encoded as a" +
                             " read-only list of NOCStruct",
                    xref: { document: "core", section: "11.17.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "NOCStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "Fabrics",
                    access: "R F V", conformance: "M", constraint: "max SupportedFabrics", default: "", quality: "N", type: "list",
                    details: "This attribute describes all fabrics to which this Node is " +
                             "commissioned, encoded as a read-only list of FabricDescriptorStruct. " +
                             "This information MAY be computed directly from the NOCs attribute",
                    xref: { document: "core", section: "11.17.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "FabricDescriptorStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0002, name: "SupportedFabrics",
                    access: "R V", conformance: "M", constraint: "5 to 254", default: 0, quality: "F", type: "uint8",
                    details: "This attribute contains the number of Fabrics that are supported by " +
                             "the device. This value is fixed for a particular device",
                    xref: { document: "core", section: "11.17.5.3" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "CommissionedFabrics",
                    access: "R V", conformance: "M", constraint: "max SupportedFabrics", default: 0, quality: "N", type: "uint8",
                    details: "This attribute contains the number of Fabrics to which the device is " +
                             "currently commissioned. This attribute SHALL be equal to the following",
                    xref: { document: "core", section: "11.17.5.4" }
                },

                {
                    tag: "attribute", id: 0x0004, name: "TrustedRootCertificates",
                    access: "R V", conformance: "M", constraint: "max SupportedFabrics[max 400]", default: "", quality: "N C", type: "list",
                    details: "This attribute SHALL contain a read-only list of Trusted Root CA " +
                             "Certificates installed on the Node, as octet strings containing their " +
                             "Matter Certificate Encoding representation",
                    xref: { document: "core", section: "11.17.5.5" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "octstr"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0005, name: "CurrentFabricIndex",
                    access: "R V", conformance: "M", default: 0, type: "uint8",
                    details: "This attribute SHALL contain accessing fabric index",
                    xref: { document: "core", section: "11.17.5.6" }
                },

                {
                    tag: "command", id: 0x0000, name: "AttestationRequest",
                    access: "A", conformance: "M", direction: "request", response: "AttestationResponse",
                    details: "This command SHALL be generated to request the Attestation Information" +
                             ", in the form of an AttestationResponse Command. If the " +
                             "AttestationNonce that is provided in the command is malformed, a",
                    xref: { document: "core", section: "11.17.6.1" }
                },

                {
                    tag: "command", id: 0x0001, name: "AttestationResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to an Attestation Request " +
                             "command",
                    xref: { document: "core", section: "11.17.6.2" }
                },

                {
                    tag: "command", id: 0x0002, name: "CertificateChainRequest",
                    access: "A", conformance: "M", direction: "request", response: "CertificateChainResponse",
                    details: "If the CertificateType is not a valid value per " +
                             "CertificateChainTypeEnum then the command SHALL fail with a Status " +
                             "Code of INVALID_COMMAND",
                    xref: { document: "core", section: "11.17.6.3" }
                },

                {
                    tag: "command", id: 0x0003, name: "CertificateChainResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to a " +
                             "CertificateChainRequest command",
                    xref: { document: "core", section: "11.17.6.4" }
                },

                {
                    tag: "command", id: 0x0004, name: "CsrRequest",
                    access: "A", conformance: "M", direction: "request", response: "CsrResponse",
                    details: "This command SHALL be generated to execute the Node Operational CSR " +
                             "Procedure and subsequently return the NOCSR Information, in the form " +
                             "of a CSRResponse Command",
                    xref: { document: "core", section: "11.17.6.5" }
                },

                {
                    tag: "command", id: 0x0005, name: "CsrResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to a CSRRequest Command",
                    xref: { document: "core", section: "11.17.6.6" }
                },

                {
                    tag: "command", id: 0x0006, name: "AddNoc",
                    access: "A", conformance: "M", direction: "request", response: "NocResponse",
                    details: "This command SHALL add a new NOC chain to the device and commission a " +
                             "new Fabric association upon successful validation of all arguments and" +
                             " preconditions",
                    xref: { document: "core", section: "11.17.6.8" }
                },

                {
                    tag: "command", id: 0x0007, name: "UpdateNoc",
                    access: "F A", conformance: "M", direction: "request", response: "NocResponse",
                    details: "This command SHALL replace the NOC and optional associated ICAC (if " +
                             "present) scoped under the accessing fabric upon successful validation " +
                             "of all arguments and preconditions. The new value SHALL immediately be" +
                             " reflected in the NOCs list attribute",
                    xref: { document: "core", section: "11.17.6.9" }
                },

                {
                    tag: "command", id: 0x0008, name: "NocResponse",
                    conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to the following commands",
                    xref: { document: "core", section: "11.17.6.10" }
                },

                {
                    tag: "command", id: 0x0009, name: "UpdateFabricLabel",
                    access: "F A", conformance: "M", direction: "request", response: "NocResponse",
                    details: "This command SHALL be used by an Administrator to set the user-visible" +
                             " Label field for a given Fabric, as reflected by entries in the " +
                             "Fabrics attribute",
                    xref: { document: "core", section: "11.17.6.11" }
                },

                {
                    tag: "command", id: 0x000a, name: "RemoveFabric",
                    access: "A", conformance: "M", direction: "request", response: "NocResponse",
                    details: "This command is used by Administrators to remove a given Fabric and " +
                             "delete all associated fabric-scoped data",
                    xref: { document: "core", section: "11.17.6.12" }
                },

                {
                    tag: "command", id: 0x000b, name: "AddTrustedRootCertificate",
                    access: "A", conformance: "M", direction: "request", response: "status",
                    details: "This command SHALL add a Trusted Root CA Certificate, provided as its " +
                             "Matter Certificate Encoding representation, to the " +
                             "TrustedRootCertificates Attribute list and SHALL ensure the next " +
                             "AddNOC command executed uses the provided certificate as its root of " +
                             "trust",
                    xref: { document: "core", section: "11.17.6.13" }
                },

                {
                    tag: "datatype", name: "CertificateChainTypeEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.17.4.2" },
                    children: [
                        {
                            tag: "datatype", id: 0x0001, name: "DacCertificate",
                            conformance: "M",
                            xref: { document: "core", section: "11.17.4.2" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "PaiCertificate",
                            conformance: "M",
                            xref: { document: "core", section: "11.17.4.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x003c, name: "AdministratorCommissioning",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "Window",
                    access: "R V", conformance: "M", default: "", type: "Commis",
                    xref: { document: "core", section: "11.18.7" }
                },

                {
                    tag: "attribute", id: 0x0001, name: "AdminFabricIndex",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "fabric-idx",
                    details: "When the WindowStatus attribute is not set to WindowNotOpen, this " +
                             "attribute SHALL indicate the FabricIndex associated with the Fabric " +
                             "scoping of the Administrator that opened the window. This MAY be used " +
                             "to cross-reference in the Fabrics attribute of the Node Operational " +
                             "Credentials cluster",
                    xref: { document: "core", section: "11.18.7.2" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "AdminVendorId",
                    access: "R V", conformance: "M", default: 0, quality: "X", type: "vendor-id",
                    details: "When the WindowStatus attribute is not set to WindowNotOpen, this " +
                             "attribute SHALL indicate the Vendor ID associated with the Fabric " +
                             "scoping of the Administrator that opened the window. This field SHALL " +
                             "match the VendorID field of the Fabrics attribute list entry " +
                             "associated with the Administrator having opened the window, at the " +
                             "time of window opening. If the fabric for the Administrator that " +
                             "opened the window is removed from the node while the commissioning " +
                             "window is still open, this attribute SHALL NOT be updated",
                    xref: { document: "core", section: "11.18.7.3" }
                },

                {
                    tag: "command", id: 0x0000, name: "OpenCommissioningWindow",
                    access: "A T", conformance: "M", direction: "request", response: "status",
                    xref: { document: "core", section: "11.18.8" }
                },

                {
                    tag: "command", id: 0x0001, name: "OpenBasicCommissioningWindow",
                    access: "A T", conformance: "BC", direction: "request", response: "status",
                    xref: { document: "core", section: "11.18.8" }
                },

                {
                    tag: "command", id: 0x0002, name: "RevokeCommissioning",
                    access: "A T", conformance: "M", direction: "request", response: "status",
                    details: "This command is used by a current Administrator to instruct a Node to " +
                             "revoke any active Open Commissioning Window or Open Basic " +
                             "Commissioning Window command. This is an idempotent command and the " +
                             "Node SHALL (for ECM) delete the temporary PAKEPasscodeVerifier and " +
                             "associated data, and stop publishing the DNS-SD record associated with" +
                             " the Open Commissioning Window or Open Basic Commissioning Window " +
                             "command, see Section 4.3.1, “Commissionable Node Discovery",
                    xref: { document: "core", section: "11.18.8.3" }
                },

                {
                    tag: "datatype", name: "CommissioningWindowStatusEnum",
                    type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.18.5.1" },
                    children: [
                        {
                            tag: "datatype", id: 0x0000, name: "WindowNotOpen",
                            conformance: "M",
                            xref: { document: "core", section: "11.18.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0001, name: "EnhancedWindowOpen",
                            conformance: "M",
                            xref: { document: "core", section: "11.18.5.1" }
                        },

                        {
                            tag: "datatype", id: 0x0002, name: "BasicWindowOpen",
                            conformance: "BC",
                            xref: { document: "core", section: "11.18.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", id: 0x0029, name: "OtaSoftwareUpdateProvider",
            classification: "node",
            children: [
                {
                    tag: "command", id: 0x0000, name: "QueryImage",
                    conformance: "M", direction: "request", response: "QueryImageResponse",
                    xref: { document: "core", section: "11.19.6.5" }
                },

                {
                    tag: "command", id: 0x0001, name: "QueryImageResponse",
                    conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.19.6.5" }
                },

                {
                    tag: "command", id: 0x0002, name: "ApplyUpdateRequest",
                    conformance: "M", direction: "request", response: "ApplyUpdateResponse",
                    xref: { document: "core", section: "11.19.6.5" }
                },

                {
                    tag: "command", id: 0x0003, name: "ApplyUpdateResponse",
                    conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.19.6.5" }
                },

                {
                    tag: "command", id: 0x0004, name: "NotifyUpdateApplied",
                    conformance: "M", direction: "request", response: "status",
                    xref: { document: "core", section: "11.19.6.5" }
                }
            ]
        },

        {
            tag: "cluster", id: 0x002a, name: "OtaSoftwareUpdateRequestor",
            classification: "node",
            children: [
                {
                    tag: "attribute", id: 0x0000, name: "DefaultOtaProviders",
                    access: "RW F VA", conformance: "M", constraint: "desc", default: "[]", type: "list",
                    xref: { document: "core", section: "11.19.7.5" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "ProviderLocationStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", id: 0x0001, name: "UpdatePossible",
                    access: "R V", conformance: "M", default: true, type: "bool",
                    xref: { document: "core", section: "11.19.7.5" }
                },

                {
                    tag: "attribute", id: 0x0002, name: "UpdateState",
                    access: "R V", conformance: "M", default: "Unknown", type: "UpdateStateEnum",
                    xref: { document: "core", section: "11.19.7.5" }
                },

                {
                    tag: "attribute", id: 0x0003, name: "UpdateStateProgress",
                    access: "R V", conformance: "M", constraint: "0 to 100", default: "null", quality: "X", type: "uint8",
                    xref: { document: "core", section: "11.19.7.5" }
                },

                {
                    tag: "event", id: 0x0000, name: "StateTransition",
                    access: "V", conformance: "M", priority: "info",
                    xref: { document: "core", section: "11.19.7.7" }
                },

                {
                    tag: "event", id: 0x0001, name: "VersionApplied",
                    access: "V", conformance: "M", priority: "critical",
                    xref: { document: "core", section: "11.19.7.7" }
                },

                {
                    tag: "event", id: 0x0002, name: "DownloadError",
                    access: "V", conformance: "M", priority: "info",
                    xref: { document: "core", section: "11.19.7.7" }
                },

                {
                    tag: "command", id: 0x0000, name: "AnnounceOtaProvider",
                    access: "A", conformance: "O", direction: "request", response: "status",
                    xref: { document: "core", section: "11.19.7.6" }
                }
            ]
        }
    ]
}