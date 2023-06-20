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
            tag: "cluster", name: "Identify", id: 0x3, classification: "endpoint",
            xref: { document: "cluster", section: "1.2" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "QUERY", id: 0x0, description: "Multicast query for identification state",
                            details: "This feature supports a unicast, groupcast or multicast query of the cluster state, with a response " +
                                     "back to query initiator, if the identification state is active. This feature is supported for " +
                                     "underlying stacks that support a response to a multicast or groupcast command",
                            xref: { document: "cluster", section: "1.2.4.1" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "IdentifyTime", id: 0x0, type: "uint16", access: "RW VO", conformance: "M",
                    default: 0,
                    details: "This attribute specifies the remaining length of time, in seconds, that the endpoint will continue " +
                             "to identify itself",
                    xref: { document: "cluster", section: "1.2.5.1" }
                },

                {
                    tag: "attribute", name: "IdentifyType", id: 0x1, type: "enum8", access: "R V", conformance: "M",
                    constraint: "desc", default: 0,
                    details: "This attribute specifies how the identification state is presented to the user. This field SHALL " +
                             "contain one of the values listed below",
                    xref: { document: "cluster", section: "1.2.5.2" }
                },

                {
                    tag: "command", name: "Identify", id: 0x0, access: "M", conformance: "M", direction: "request",
                    response: "status",
                    details: "This command starts or stops the receiving device identifying itself. This command SHALL have the " +
                             "following data fields",
                    xref: { document: "cluster", section: "1.2.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "IdentifyTime", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "1.2.6.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "IdentifyQuery", id: 0x1, access: "M", conformance: "QRY",
                    direction: "request", response: "IdentifyQueryResponse",
                    details: "This command allows the sending device to request the target or targets to respond if they are " +
                             "currently identifying themselves",
                    xref: { document: "cluster", section: "1.2.6.2" }
                },

                {
                    tag: "command", name: "TriggerEffect", id: 0x40, access: "M", conformance: "O",
                    direction: "request", response: "status",
                    details: "This command allows the support of feedback to the user, such as a certain light effect. It is used " +
                             "to allow an implementation to provide visual feedback to the user under certain circumstances such " +
                             "as a color light turning green when it has successfully connected to a network. The use of this " +
                             "command and the effects themselves are entirely up to the implementer to use whenever a visual " +
                             "feedback is useful but it is not the same as and does not replace the identify mechanism used during" +
                             " commissioning",
                    xref: { document: "cluster", section: "1.2.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "EffectIdentifier", id: 0x0, type: "enum8", conformance: "M",
                            constraint: "desc",
                            xref: { document: "cluster", section: "1.2.6.3" }
                        },

                        {
                            tag: "datatype", name: "EffectVariant", id: 0x1, type: "enum8", conformance: "M",
                            constraint: "desc",
                            xref: { document: "cluster", section: "1.2.6.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "IdentifyQueryResponse", id: 0x0, conformance: "QRY", direction: "response",
                    details: "This command is generated in response to receiving an IdentifyQuery command, see IdentifyQuery " +
                             "Command, in the case that the device is currently identifying itself",
                    xref: { document: "cluster", section: "1.2.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "Timeout", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "1.2.6.4" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Groups", id: 0x4, classification: "endpoint",
            xref: { document: "cluster", section: "1.3" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "GROUPNAMES", id: 0x0, default: 0,
                            description: "The ability to store a name for a group.",
                            xref: { document: "cluster", section: "1.3.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "NameSupport", id: 0x0, type: "map8", access: "R V", conformance: "M",
                    constraint: "desc", default: 0, quality: "F",
                    details: "This attribute provides legacy, read-only access to whether the Group Names feature is supported. " +
                             "The most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other bits" +
                             " SHALL be 0",
                    xref: { document: "cluster", section: "1.3.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "GroupNames", id: 0x7,
                            description: "The ability to store a name for a group.",
                            xref: { document: "cluster", section: "1.3.6.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "AddGroup", id: 0x0, access: "F M", conformance: "M", direction: "request",
                    response: "AddGroupResponse",
                    details: "The AddGroup command allows a client to add group membership in a particular group for the server " +
                             "endpoint",
                    xref: { document: "cluster", section: "1.3.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
                            xref: { document: "cluster", section: "1.3.7.1" }
                        },

                        {
                            tag: "datatype", name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
                            xref: { document: "cluster", section: "1.3.7.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ViewGroup", id: 0x1, access: "F O", conformance: "M", direction: "request",
                    response: "ViewGroupResponse",
                    details: "The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse " +
                             "command containing the name string for a particular group",
                    xref: { document: "cluster", section: "1.3.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
                            xref: { document: "cluster", section: "1.3.7.2" }
                        }
                    ]
                },

                {
                    tag: "command", name: "GetGroupMembership", id: 0x2, access: "F O", conformance: "M",
                    direction: "request", response: "GetGroupMembershipResponse",
                    details: "The GetGroupMembership command allows a client to inquire about the group membership of the server " +
                             "endpoint, in a number of ways",
                    xref: { document: "cluster", section: "1.3.7.3" },
                    children: [
                        {
                            tag: "datatype", name: "GroupList", id: 0x0, type: "list", conformance: "M",
                            constraint: "all[min 1]",
                            xref: { document: "cluster", section: "1.3.7.3" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "group-id"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveGroup", id: 0x3, access: "F M", conformance: "M", direction: "request",
                    response: "RemoveGroupResponse",
                    details: "The RemoveGroup command allows a client to request that the server removes the membership for the " +
                             "server endpoint, if any, in a particular group",
                    xref: { document: "cluster", section: "1.3.7.4" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
                            xref: { document: "cluster", section: "1.3.7.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveAllGroups", id: 0x4, access: "F M", conformance: "M",
                    direction: "request", response: "status",
                    details: "The RemoveAllGroups command allows a client to direct the server to remove all group associations " +
                             "for the server endpoint",
                    xref: { document: "cluster", section: "1.3.7.5" }
                },

                {
                    tag: "command", name: "AddGroupIfIdentifying", id: 0x5, access: "F M", conformance: "M",
                    direction: "request", response: "status",
                    details: "The AddGroupIfIdentifying command allows a client to add group membership in a particular group for " +
                             "the server endpoint, on condition that the endpoint is identifying itself. Identifying functionality" +
                             " is controlled using the Identify cluster, (see Identify",
                    xref: { document: "cluster", section: "1.3.7.6" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
                            xref: { document: "cluster", section: "1.3.7.6" }
                        },

                        {
                            tag: "datatype", name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
                            xref: { document: "cluster", section: "1.3.7.6" }
                        }
                    ]
                },

                {
                    tag: "command", name: "AddGroupResponse", id: 0x0, conformance: "M", direction: "response",
                    details: "The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command. The " +
                             "AddGroupResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.3.7.7" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.3.7.7" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
                            xref: { document: "cluster", section: "1.3.7.7" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ViewGroupResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup " +
                             "command",
                    xref: { document: "cluster", section: "1.3.7.8" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.3.7.8" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
                            xref: { document: "cluster", section: "1.3.7.8" }
                        },

                        {
                            tag: "datatype", name: "GroupName", id: 0x2, type: "string", conformance: "M", constraint: "max 16",
                            xref: { document: "cluster", section: "1.3.7.8" }
                        }
                    ]
                },

                {
                    tag: "command", name: "GetGroupMembershipResponse", id: 0x2, conformance: "M",
                    direction: "response",
                    details: "The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a " +
                             "GetGroupMembership command",
                    xref: { document: "cluster", section: "1.3.7.9" },
                    children: [
                        {
                            tag: "datatype", name: "Capacity", id: 0x0, type: "uint8", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.3.7.9" }
                        },

                        {
                            tag: "datatype", name: "GroupList", id: 0x1, type: "list", conformance: "M",
                            constraint: "all[min 1]",
                            xref: { document: "cluster", section: "1.3.7.9" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "group-id"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveGroupResponse", id: 0x3, conformance: "M", direction: "response",
                    details: "The RemoveGroupResponse command is generated by the server in response to the receipt of a " +
                             "RemoveGroup command",
                    xref: { document: "cluster", section: "1.3.7.10" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.3.7.10" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
                            xref: { document: "cluster", section: "1.3.7.10" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Scenes", id: 0x5, classification: "application",
            xref: { document: "cluster", section: "1.4" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "SCENENAMES", id: 0x0, default: 0,
                            description: "The ability to store a name for a scene.",
                            xref: { document: "cluster", section: "1.4.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "SceneCount", id: 0x0, type: "uint8", access: "R V", conformance: "M",
                    default: 0,
                    details: "The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table",
                    xref: { document: "cluster", section: "1.4.7.1" }
                },

                {
                    tag: "attribute", name: "CurrentScene", id: 0x1, type: "uint8", access: "R V", conformance: "M",
                    default: 0,
                    details: "The CurrentScene attribute holds the scene identifier of the scene last invoked",
                    xref: { document: "cluster", section: "1.4.7.2" }
                },

                {
                    tag: "attribute", name: "CurrentGroup", id: 0x2, type: "group-id", access: "R V", conformance: "M",
                    default: 0,
                    details: "The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene " +
                             "last invoked is not associated with a group",
                    xref: { document: "cluster", section: "1.4.7.3" }
                },

                {
                    tag: "attribute", name: "SceneValid", id: 0x3, type: "bool", access: "R V", conformance: "M",
                    default: true,
                    details: "The SceneValid attribute indicates whether the state of the server corresponds to that associated " +
                             "with the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, " +
                             "FALSE indicates that they are not valid",
                    xref: { document: "cluster", section: "1.4.7.4" }
                },

                {
                    tag: "attribute", name: "NameSupport", id: 0x4, type: "map8", access: "R V", conformance: "M",
                    constraint: "desc", default: 0,
                    details: "This attribute provides legacy, read-only access to whether the Scene Names feature is supported. " +
                             "The most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other bits" +
                             " SHALL be 0",
                    xref: { document: "cluster", section: "1.4.7.5" },
                    children: [
                        {
                            tag: "datatype", name: "SceneNames", id: 0x7,
                            description: "The ability to store a name for a scene.",
                            xref: { document: "cluster", section: "1.4.7.5" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "LastConfiguredBy", id: 0x5, type: "node-id", access: "R V",
                    conformance: "O", constraint: "", default: undefined, quality: "X",
                    details: "The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node " +
                             "that last configured the Scene Table",
                    xref: { document: "cluster", section: "1.4.7.6" }
                },

                {
                    tag: "command", name: "AddScene", id: 0x0, access: "M", conformance: "M", direction: "request",
                    response: "AddSceneResponse",
                    details: "The AddScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.2" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.2" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.2" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.2" }
                        },

                        {
                            tag: "datatype", name: "SceneName", id: 0x3, type: "string", conformance: "M", constraint: "max 16",
                            xref: { document: "cluster", section: "1.4.9.2" }
                        },

                        {
                            tag: "datatype", name: "ExtensionFieldSets", id: 0x4, type: "list", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.2" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "ExtensionFieldSet"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "command", name: "ViewScene", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "ViewSceneResponse",
                    details: "The ViewScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.3" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.3" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveScene", id: 0x2, access: "M", conformance: "M", direction: "request",
                    response: "RemoveSceneResponse",
                    details: "The RemoveScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.4" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.4" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveAllScenes", id: 0x3, access: "M", conformance: "M",
                    direction: "request", response: "RemoveAllScenesResponse",
                    details: "The RemoveAllScenes command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.5" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.5" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StoreScene", id: 0x4, access: "M", conformance: "M", direction: "request",
                    response: "StoreSceneResponse",
                    details: "The StoreScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.6" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.6" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.6" }
                        }
                    ]
                },

                {
                    tag: "command", name: "RecallScene", id: 0x5, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The RecallScene command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.7" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.7" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.7" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "O", quality: "X",
                            xref: { document: "cluster", section: "1.4.9.7" }
                        }
                    ]
                },

                {
                    tag: "command", name: "GetSceneMembership", id: 0x6, access: "O", conformance: "M",
                    direction: "request", response: "GetSceneMembershipResponse",
                    details: "The GetSceneMembership command can be used to find an unused scene identifier within a certain group" +
                             " when no commissioning tool is in the network, or for a commissioning tool to get the used scene " +
                             "identifiers within a certain group, for the endpoint that implements this cluster",
                    xref: { document: "cluster", section: "1.4.9.8" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.8" }
                        }
                    ]
                },

                {
                    tag: "command", name: "EnhancedAddScene", id: 0x40, access: "M", conformance: "O",
                    direction: "request", response: "EnhancedAddSceneResponse",
                    details: "The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the" +
                             " AddScene command",
                    xref: { document: "cluster", section: "1.4.9.9" }
                },

                {
                    tag: "command", name: "EnhancedViewScene", id: 0x41, access: "O", conformance: "O",
                    direction: "request", response: "EnhancedViewSceneResponse",
                    details: "The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time " +
                             "than the ViewScene command",
                    xref: { document: "cluster", section: "1.4.9.10" }
                },

                {
                    tag: "command", name: "CopyScene", id: 0x42, access: "M", conformance: "O", direction: "request",
                    response: "CopySceneResponse",
                    details: "The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier " +
                             "pair to another group/scene identifier pair",
                    xref: { document: "cluster", section: "1.4.9.11" },
                    children: [
                        {
                            tag: "datatype", name: "Mode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.4.9.11" }
                        },

                        {
                            tag: "datatype", name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.11" }
                        },

                        {
                            tag: "datatype", name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.11" }
                        },

                        {
                            tag: "datatype", name: "GroupIdentifierTo", id: 0x3, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.11" }
                        },

                        {
                            tag: "datatype", name: "SceneIdentifierTo", id: 0x4, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.11" }
                        }
                    ]
                },

                {
                    tag: "command", name: "AddSceneResponse", id: 0x0, conformance: "M", direction: "response",
                    details: "The AddSceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.12" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.4.9.12" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.12" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.12" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ViewSceneResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "The ViewSceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.13" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.4.9.13" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.13" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.13" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x3, type: "uint16", conformance: "desc",
                            xref: { document: "cluster", section: "1.4.9.13" }
                        },

                        {
                            tag: "datatype", name: "SceneName", id: 0x4, type: "string", conformance: "desc",
                            constraint: "max 16",
                            xref: { document: "cluster", section: "1.4.9.13" }
                        },

                        {
                            tag: "datatype", name: "ExtensionFieldSets", id: 0x5, type: "list", conformance: "desc",
                            xref: { document: "cluster", section: "1.4.9.13" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "ExtensionFieldSet"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveSceneResponse", id: 0x2, conformance: "M", direction: "response",
                    details: "The RemoveSceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.14" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.4.9.14" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.14" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.14" }
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveAllScenesResponse", id: 0x3, conformance: "M", direction: "response",
                    details: "The RemoveAllScenesResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.15" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.4.9.15" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.15" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StoreSceneResponse", id: 0x4, conformance: "M", direction: "response",
                    details: "The StoreSceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.16" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.4.9.16" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.16" }
                        },

                        {
                            tag: "datatype", name: "SceneId", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.16" }
                        }
                    ]
                },

                {
                    tag: "command", name: "GetSceneMembershipResponse", id: 0x6, conformance: "M",
                    direction: "response",
                    details: "The GetSceneMembershipResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.17" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.4.9.17" }
                        },

                        {
                            tag: "datatype", name: "Capacity", id: 0x1, type: "uint8", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.4.9.17" }
                        },

                        {
                            tag: "datatype", name: "GroupId", id: 0x2, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.17" }
                        },

                        {
                            tag: "datatype", name: "SceneList", id: 0x3, type: "list", conformance: "O",
                            xref: { document: "cluster", section: "1.4.9.17" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "uint8"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "command", name: "EnhancedAddSceneResponse", id: 0x40, conformance: "O", direction: "response",
                    details: "The EnhancedAddSceneResponse command allows a server to respond to an EnhancedAddScene command, see " +
                             "EnhancedAddScene Command",
                    xref: { document: "cluster", section: "1.4.9.18" }
                },

                {
                    tag: "command", name: "EnhancedViewSceneResponse", id: 0x41, conformance: "O",
                    direction: "response",
                    details: "The EnhancedViewSceneResponse command allows a server to respond to an EnhancedViewScene command " +
                             "using a finer scene transition time",
                    xref: { document: "cluster", section: "1.4.9.19" }
                },

                {
                    tag: "command", name: "CopySceneResponse", id: 0x42, conformance: "O", direction: "response",
                    details: "The CopySceneResponse command allows a server to respond to a CopyScene command. The " +
                             "CopySceneResponse command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.4.9.20" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.4.9.20" }
                        },

                        {
                            tag: "datatype", name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.20" }
                        },

                        {
                            tag: "datatype", name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.4.9.20" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AttributeValuePair", type: "struct",
                    details: "This data type indicates a combination of an identifier and the value of an attribute",
                    xref: { document: "cluster", section: "1.4.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "AttributeId", id: 0x0, type: "attribute-id", access: "RW",
                            conformance: "M, !Zigbee",
                            details: "This field SHALL be present or not present, for all instances in the Scenes cluster. If this field " +
                                     "is not present, then the data type of AttributeValue SHALL be determined by the order and data type " +
                                     "defined in the cluster specification. Otherwise the data type of AttributeValue SHALL be the data " +
                                     "type of the attribute indicated by AttributeID",
                            xref: { document: "cluster", section: "1.4.6.1.1" }
                        },

                        {
                            tag: "datatype", name: "AttributeValue", id: 0x1, type: "variable", access: "RW", conformance: "M",
                            details: "This is the attribute value as part of an extension field set. See AttributeID to determine the data" +
                                     " type for this field",
                            xref: { document: "cluster", section: "1.4.6.1.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ExtensionFieldSet", type: "struct",
                    details: "This data type indicates for a given cluster a set of attributes and their values. Only attributes " +
                             "which have the \"S\" designation in the Quality column of the cluster specification SHALL be used in " +
                             "the AttributeValueList field",
                    xref: { document: "cluster", section: "1.4.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "ClusterId", id: 0x0, type: "cluster-id", access: "RW", conformance: "M",
                            xref: { document: "cluster", section: "1.4.6.2" }
                        },

                        {
                            tag: "datatype", name: "AttributeValueList", id: 0x1, type: "list", access: "RW", conformance: "M",
                            xref: { document: "cluster", section: "1.4.6.2" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "AttributeValuePair"
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "OnOff", id: 0x6, classification: "application",
            xref: { document: "cluster", section: "1.5" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "LT", id: 0x0, description: "Behavior that supports lighting applications.",
                            xref: { document: "cluster", section: "1.5.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "OnOff", id: 0x0, type: "bool", access: "R V", conformance: "M",
                    default: true, quality: "N S",
                    details: "The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or " +
                             "turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively",
                    xref: { document: "cluster", section: "1.5.6.1" }
                },

                {
                    tag: "attribute", name: "GlobalSceneControl", id: 0x4000, type: "bool", access: "R V",
                    conformance: "LT", default: true,
                    details: "In order to support the use case where the user gets back the last setting of a set of devices (e.g" +
                             ". level settings for lights), a global scene is introduced which is stored when the devices are " +
                             "turned off and recalled when the devices are turned on. The global scene is defined as the scene " +
                             "that is stored with group identifier 0 and scene identifier 0",
                    xref: { document: "cluster", section: "1.5.6.2" }
                },

                {
                    tag: "attribute", name: "OnTime", id: 0x4001, type: "uint16", access: "RW VO", conformance: "LT",
                    default: 0, quality: "X",
                    details: "The OnTime attribute specifies the length of time (in 1/10ths second) that the ‘On’ state SHALL be " +
                             "maintained before automatically transitioning to the ‘Off’ state when using the OnWithTimedOff " +
                             "command. This attribute can be written at any time, but writing a value only has effect when in the" +
                             " ‘Timed On’ state. See OnWithTimedOff Command for more details",
                    xref: { document: "cluster", section: "1.5.6.3" }
                },

                {
                    tag: "attribute", name: "OffWaitTime", id: 0x4002, type: "uint16", access: "RW VO",
                    conformance: "LT", default: 0, quality: "X",
                    details: "The OffWaitTime attribute specifies the length of time (in 1/10ths second) that the ‘Off’ state " +
                             "SHALL be guarded to prevent another OnWithTimedOff command turning the server back to its ‘On’ state" +
                             " (e.g., when leaving a room, the lights are turned off but an occupancy sensor detects the leaving " +
                             "person and attempts to turn the lights back on). This attribute can be written at any time, but " +
                             "writing a value only has an effect when in the ‘Timed On’ state followed by a transition to the ‘" +
                             "Delayed Off' state, or in the ‘Delayed Off’ state. See OnWithTimedOff Command for more details",
                    xref: { document: "cluster", section: "1.5.6.4" }
                },

                {
                    tag: "attribute", name: "StartUpOnOff", id: 0x4003, type: "StartUpOnOffEnum", access: "RW VM",
                    conformance: "LT", constraint: "desc", quality: "X N",
                    details: "The StartUpOnOff attribute SHALL define the desired startup behavior of a device when it is supplied" +
                             " with power and this state SHALL be reflected in the OnOff attribute. If the value is null, the " +
                             "OnOff attribute is set to its previous value. Otherwise, the behavior is defined in the table " +
                             "defining StartUpOnOffEnum",
                    xref: { document: "cluster", section: "1.5.6.5" }
                },

                {
                    tag: "command", name: "Off", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "This command does not have any data fields",
                    xref: { document: "cluster", section: "1.5.7.1" }
                },

                {
                    tag: "command", name: "On", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "This command does not have any data fields",
                    xref: { document: "cluster", section: "1.5.7.2" }
                },

                {
                    tag: "command", name: "Toggle", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "This command does not have any data fields",
                    xref: { document: "cluster", section: "1.5.7.3" }
                },

                {
                    tag: "command", name: "OffWithEffect", id: 0x40, access: "O", conformance: "LT",
                    direction: "request", response: "status",
                    details: "The OffWithEffect command allows devices to be turned off using enhanced ways of fading. The " +
                             "OffWithEffect command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.5.7.4" },
                    children: [
                        {
                            tag: "datatype", name: "EffectIdentifier", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "desc",
                            xref: { document: "cluster", section: "1.5.7.4" }
                        },

                        {
                            tag: "datatype", name: "EffectVariant", id: 0x1, type: "uint8", conformance: "M",
                            constraint: "desc",
                            xref: { document: "cluster", section: "1.5.7.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "OnWithRecallGlobalScene", id: 0x41, access: "O", conformance: "LT",
                    direction: "request", response: "status",
                    details: "The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned off",
                    xref: { document: "cluster", section: "1.5.7.5" }
                },

                {
                    tag: "command", name: "OnWithTimedOff", id: 0x42, access: "O", conformance: "LT",
                    direction: "request", response: "status",
                    details: "The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off" +
                             " duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, " +
                             "received during this time, are prevented from turning the devices back on. Further",
                    xref: { document: "cluster", section: "1.5.7.6" },
                    children: [
                        {
                            tag: "datatype", name: "OnOffControl", id: 0x0, type: "map8", conformance: "M",
                            xref: { document: "cluster", section: "1.5.7.6" }
                        },

                        {
                            tag: "datatype", name: "OnTime", id: 0x1, type: "uint16", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.5.7.6" }
                        },

                        {
                            tag: "datatype", name: "OffWaitTime", id: 0x2, type: "uint16", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.5.7.6" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "StartUpOnOffEnum", type: "enum8",
                    details: "The data type StartUpOnOffEnum is derived from enum8. The values of the StartUpOnOffEnum data type " +
                             "are listed below",
                    xref: { document: "cluster", section: "1.5.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Off", id: 0x0, conformance: "M",
                            description: "Set the OnOff attribute to FALSE",
                            xref: { document: "cluster", section: "1.5.5.1" }
                        },

                        {
                            tag: "datatype", name: "On", id: 0x1, conformance: "M",
                            description: "Set the OnOff attribute to TRUE",
                            xref: { document: "cluster", section: "1.5.5.1" }
                        },

                        {
                            tag: "datatype", name: "Toggle", id: 0x2, conformance: "M",
                            description: "If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).",
                            xref: { document: "cluster", section: "1.5.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "LevelControlforLighting", id: 0x8, classification: "application",
            xref: { document: "cluster", section: "1.6" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "ONOFF", id: 0x0, default: 1,
                            description: "Dependency with the On/Off cluster",
                            xref: { document: "cluster", section: "1.6.4" }
                        },

                        {
                            tag: "datatype", name: "LIGHTING", id: 0x1, default: 0,
                            description: "Behavior that supports lighting applications",
                            details: "This feature supports an interface for controlling the level of a light source. For the CurrentLevel" +
                                     " attribute",
                            xref: { document: "cluster", section: "1.6.4.2" }
                        },

                        {
                            tag: "datatype", name: "FREQUENCY", id: 0x2, default: 0,
                            description: "Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency control.",
                            details: "NOTE Frequency feature is provisional",
                            xref: { document: "cluster", section: "1.6.4.3" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
                    constraint: "MinLevel to MaxLevel", default: undefined, quality: "X N S",
                    details: "The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is " +
                             "device dependent",
                    xref: { document: "cluster", section: "1.6.5.1" }
                },

                {
                    tag: "attribute", name: "RemainingTime", id: 0x1, type: "uint16", access: "R V", conformance: "LT",
                    default: 0,
                    details: "The RemainingTime attribute represents the time remaining until the current command is complete - it" +
                             " is specified in 1/10ths of a second",
                    xref: { document: "cluster", section: "1.6.5.2" }
                },

                {
                    tag: "attribute", name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "O",
                    default: "!LT:0LT:1",
                    details: "The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned",
                    xref: { document: "cluster", section: "1.6.5.3" }
                },

                {
                    tag: "attribute", name: "MaxLevel", id: 0x3, type: "uint8", access: "R V", conformance: "O",
                    constraint: "MinLevel to 254", default: 254,
                    details: "The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned",
                    xref: { document: "cluster", section: "1.6.5.4" }
                },

                {
                    tag: "attribute", name: "CurrentFrequency", id: 0x4, type: "uint16", access: "R V",
                    conformance: "FQ", constraint: "MinFrequency to MaxFrequency", default: 0, quality: "S P",
                    details: "The CurrentFrequency attribute represents the frequency at which the device is at CurrentLevel. A " +
                             "CurrentFrequency of 0 is unknown",
                    xref: { document: "cluster", section: "1.6.5.5" }
                },

                {
                    tag: "attribute", name: "MinFrequency", id: 0x5, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "0 to MaxFrequency", default: 0,
                    details: "The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being " +
                             "assigned. MinFrequency SHALL be less than or equal to MaxFrequency. A value of 0 indicates undefined",
                    xref: { document: "cluster", section: "1.6.5.6" }
                },

                {
                    tag: "attribute", name: "MaxFrequency", id: 0x6, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "min MinFrequency", default: 0,
                    details: "The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being " +
                             "assigned. MaxFrequency SHALL be greater than or equal to MinFrequency. A value of 0 indicates " +
                             "undefined",
                    xref: { document: "cluster", section: "1.6.5.7" }
                },

                {
                    tag: "attribute", name: "OnOffTransitionTime", id: 0x10, type: "uint16", access: "RW VO",
                    conformance: "O", default: 0,
                    details: "The OnOffTransitionTime attribute represents the time taken to move to or from the target level when" +
                             " On or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/" +
                             "10ths of a second",
                    xref: { document: "cluster", section: "1.6.5.9" }
                },

                {
                    tag: "attribute", name: "OnLevel", id: 0x11, type: "uint8", access: "RW VO", conformance: "M",
                    constraint: "MinLevel to MaxLevel", default: undefined, quality: "X",
                    details: "The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff " +
                             "attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/" +
                             "Off cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it " +
                             "has no effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute",
                    xref: { document: "cluster", section: "1.6.5.10" }
                },

                {
                    tag: "attribute", name: "OnTransitionTime", id: 0x12, type: "uint16", access: "RW VO",
                    conformance: "O", default: undefined, quality: "X",
                    details: "The OnTransitionTime attribute represents the time taken to move the current level from the minimum " +
                             "level to the maximum level when an On command is received by an On/Off cluster on the same endpoint" +
                             ". It is specified in 10ths of a second. If this attribute is not implemented, or contains a null " +
                             "value, the OnOffTransitionTime will be used instead",
                    xref: { document: "cluster", section: "1.6.5.11" }
                },

                {
                    tag: "attribute", name: "OffTransitionTime", id: 0x13, type: "uint16", access: "RW VO",
                    conformance: "O", default: undefined, quality: "X",
                    details: "The OffTransitionTime attribute represents the time taken to move the current level from the maximum" +
                             " level to the minimum level when an Off command is received by an On/Off cluster on the same " +
                             "endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a " +
                             "null value, the OnOffTransitionTime will be used instead",
                    xref: { document: "cluster", section: "1.6.5.12" }
                },

                {
                    tag: "attribute", name: "DefaultMoveRate", id: 0x14, type: "uint8", access: "RW VO",
                    conformance: "O", quality: "X",
                    details: "The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command" +
                             " is received with a null value Rate parameter",
                    xref: { document: "cluster", section: "1.6.5.13" }
                },

                {
                    tag: "attribute", name: "Options", id: 0xf, type: "map8", access: "RW VO", conformance: "M",
                    constraint: "desc", default: 0,
                    details: "The Options attribute is meant to be changed only during commissioning. The Options attribute is a " +
                             "bitmap that determines the default behavior of some cluster commands. Each command that is dependent" +
                             " on the Options attribute SHALL first construct a temporary Options bitmap that is in effect during " +
                             "the command processing. The temporary Options bitmap has the same format and meaning as the Options " +
                             "attribute, but includes any bits that may be overridden by command fields",
                    xref: { document: "cluster", section: "1.6.5.8" },
                    children: [
                        {
                            tag: "datatype", name: "ExecuteIfOff", id: 0x0,
                            xref: { document: "cluster", section: "1.6.5.8" }
                        },

                        {
                            tag: "datatype", name: "CoupleColorTempToLevel", id: 0x1,
                            xref: { document: "cluster", section: "1.6.5.8" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "StartUpCurrentLevel", id: 0x4000, type: "uint8", access: "RW VM",
                    conformance: "LT", constraint: "desc", quality: "X N",
                    details: "The StartUpCurrentLevel attribute SHALL define the desired startup level for a device when it is " +
                             "supplied with power and this level SHALL be reflected in the CurrentLevel attribute. The values of " +
                             "the StartUpCurrentLevel attribute are listed below",
                    xref: { document: "cluster", section: "1.6.5.14" }
                },

                {
                    tag: "command", name: "MoveToLevel", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The MoveToLevel command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "Level", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254",
                            xref: { document: "cluster", section: "1.6.6.1" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.6.6.1" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "1.6.6.1" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "1.6.6.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "Move", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The Move command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "MoveMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.6.6.2" }
                        },

                        {
                            tag: "datatype", name: "Rate", id: 0x1, type: "uint8", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.6.6.2" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "1.6.6.2" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "1.6.6.2" }
                        }
                    ]
                },

                {
                    tag: "command", name: "Step", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The Step command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "StepMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.6.6.3" }
                        },

                        {
                            tag: "datatype", name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.6.6.3" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.6.6.3" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "1.6.6.3" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "1.6.6.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "Stop", id: 0x3, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The Stop command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "OptionsMask", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "1.6.6.4" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x1, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "1.6.6.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveToLevelWithOnOff", id: 0x4, access: "O", conformance: "M",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", name: "MoveWithOnOff", id: 0x5, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", name: "StepWithOnOff", id: 0x6, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", name: "StopWithOnOff", id: 0x7, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", name: "MoveToClosestFrequency", id: 0x8, access: "O", conformance: "FQ",
                    direction: "request", response: "status",
                    details: "The MoveToClosestFrequency command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.5" },
                    children: [
                        {
                            tag: "datatype", name: "Frequency", id: 0x0, type: "uint16", conformance: "M", default: 0,
                            xref: { document: "cluster", section: "1.6.6.5" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "PulseWidthModulation", id: 0x1c, classification: "application",
            xref: { document: "cluster", section: "1.6" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "ONOFF", id: 0x0, default: 1,
                            description: "Dependency with the On/Off cluster",
                            xref: { document: "cluster", section: "1.6.4" }
                        },

                        {
                            tag: "datatype", name: "LIGHTING", id: 0x1, default: 0,
                            description: "Behavior that supports lighting applications",
                            details: "This feature supports an interface for controlling the level of a light source. For the CurrentLevel" +
                                     " attribute",
                            xref: { document: "cluster", section: "1.6.4.2" }
                        },

                        {
                            tag: "datatype", name: "FREQUENCY", id: 0x2, default: 0,
                            description: "Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency control.",
                            details: "NOTE Frequency feature is provisional",
                            xref: { document: "cluster", section: "1.6.4.3" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
                    constraint: "MinLevel to MaxLevel", default: undefined, quality: "X N S",
                    details: "The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is " +
                             "device dependent",
                    xref: { document: "cluster", section: "1.6.5.1" }
                },

                {
                    tag: "attribute", name: "RemainingTime", id: 0x1, type: "uint16", access: "R V", conformance: "LT",
                    default: 0,
                    details: "The RemainingTime attribute represents the time remaining until the current command is complete - it" +
                             " is specified in 1/10ths of a second",
                    xref: { document: "cluster", section: "1.6.5.2" }
                },

                {
                    tag: "attribute", name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "O",
                    default: "!LT:0LT:1",
                    details: "The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned",
                    xref: { document: "cluster", section: "1.6.5.3" }
                },

                {
                    tag: "attribute", name: "MaxLevel", id: 0x3, type: "uint8", access: "R V", conformance: "O",
                    constraint: "MinLevel to 254", default: 254,
                    details: "The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned",
                    xref: { document: "cluster", section: "1.6.5.4" }
                },

                {
                    tag: "attribute", name: "CurrentFrequency", id: 0x4, type: "uint16", access: "R V",
                    conformance: "FQ", constraint: "MinFrequency to MaxFrequency", default: 0, quality: "S P",
                    details: "The CurrentFrequency attribute represents the frequency at which the device is at CurrentLevel. A " +
                             "CurrentFrequency of 0 is unknown",
                    xref: { document: "cluster", section: "1.6.5.5" }
                },

                {
                    tag: "attribute", name: "MinFrequency", id: 0x5, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "0 to MaxFrequency", default: 0,
                    details: "The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being " +
                             "assigned. MinFrequency SHALL be less than or equal to MaxFrequency. A value of 0 indicates undefined",
                    xref: { document: "cluster", section: "1.6.5.6" }
                },

                {
                    tag: "attribute", name: "MaxFrequency", id: 0x6, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "min MinFrequency", default: 0,
                    details: "The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being " +
                             "assigned. MaxFrequency SHALL be greater than or equal to MinFrequency. A value of 0 indicates " +
                             "undefined",
                    xref: { document: "cluster", section: "1.6.5.7" }
                },

                {
                    tag: "attribute", name: "OnOffTransitionTime", id: 0x10, type: "uint16", access: "RW VO",
                    conformance: "O", default: 0,
                    details: "The OnOffTransitionTime attribute represents the time taken to move to or from the target level when" +
                             " On or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/" +
                             "10ths of a second",
                    xref: { document: "cluster", section: "1.6.5.9" }
                },

                {
                    tag: "attribute", name: "OnLevel", id: 0x11, type: "uint8", access: "RW VO", conformance: "M",
                    constraint: "MinLevel to MaxLevel", default: undefined, quality: "X",
                    details: "The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff " +
                             "attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/" +
                             "Off cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it " +
                             "has no effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute",
                    xref: { document: "cluster", section: "1.6.5.10" }
                },

                {
                    tag: "attribute", name: "OnTransitionTime", id: 0x12, type: "uint16", access: "RW VO",
                    conformance: "O", default: undefined, quality: "X",
                    details: "The OnTransitionTime attribute represents the time taken to move the current level from the minimum " +
                             "level to the maximum level when an On command is received by an On/Off cluster on the same endpoint" +
                             ". It is specified in 10ths of a second. If this attribute is not implemented, or contains a null " +
                             "value, the OnOffTransitionTime will be used instead",
                    xref: { document: "cluster", section: "1.6.5.11" }
                },

                {
                    tag: "attribute", name: "OffTransitionTime", id: 0x13, type: "uint16", access: "RW VO",
                    conformance: "O", default: undefined, quality: "X",
                    details: "The OffTransitionTime attribute represents the time taken to move the current level from the maximum" +
                             " level to the minimum level when an Off command is received by an On/Off cluster on the same " +
                             "endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a " +
                             "null value, the OnOffTransitionTime will be used instead",
                    xref: { document: "cluster", section: "1.6.5.12" }
                },

                {
                    tag: "attribute", name: "DefaultMoveRate", id: 0x14, type: "uint8", access: "RW VO",
                    conformance: "O", quality: "X",
                    details: "The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command" +
                             " is received with a null value Rate parameter",
                    xref: { document: "cluster", section: "1.6.5.13" }
                },

                {
                    tag: "attribute", name: "Options", id: 0xf, type: "map8", access: "RW VO", conformance: "M",
                    constraint: "desc", default: 0,
                    details: "The Options attribute is meant to be changed only during commissioning. The Options attribute is a " +
                             "bitmap that determines the default behavior of some cluster commands. Each command that is dependent" +
                             " on the Options attribute SHALL first construct a temporary Options bitmap that is in effect during " +
                             "the command processing. The temporary Options bitmap has the same format and meaning as the Options " +
                             "attribute, but includes any bits that may be overridden by command fields",
                    xref: { document: "cluster", section: "1.6.5.8" },
                    children: [
                        {
                            tag: "datatype", name: "ExecuteIfOff", id: 0x0,
                            xref: { document: "cluster", section: "1.6.5.8" }
                        },

                        {
                            tag: "datatype", name: "CoupleColorTempToLevel", id: 0x1,
                            xref: { document: "cluster", section: "1.6.5.8" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "StartUpCurrentLevel", id: 0x4000, type: "uint8", access: "RW VM",
                    conformance: "LT", constraint: "desc", quality: "X N",
                    details: "The StartUpCurrentLevel attribute SHALL define the desired startup level for a device when it is " +
                             "supplied with power and this level SHALL be reflected in the CurrentLevel attribute. The values of " +
                             "the StartUpCurrentLevel attribute are listed below",
                    xref: { document: "cluster", section: "1.6.5.14" }
                },

                {
                    tag: "command", name: "MoveToLevel", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The MoveToLevel command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "Level", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254",
                            xref: { document: "cluster", section: "1.6.6.1" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.6.6.1" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "1.6.6.1" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "1.6.6.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "Move", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The Move command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "MoveMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.6.6.2" }
                        },

                        {
                            tag: "datatype", name: "Rate", id: 0x1, type: "uint8", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.6.6.2" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "1.6.6.2" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "1.6.6.2" }
                        }
                    ]
                },

                {
                    tag: "command", name: "Step", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The Step command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "StepMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.6.6.3" }
                        },

                        {
                            tag: "datatype", name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "1.6.6.3" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", quality: "X",
                            xref: { document: "cluster", section: "1.6.6.3" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "1.6.6.3" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "1.6.6.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "Stop", id: 0x3, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "The Stop command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "OptionsMask", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "1.6.6.4" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x1, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "1.6.6.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveToLevelWithOnOff", id: 0x4, access: "O", conformance: "M",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", name: "MoveWithOnOff", id: 0x5, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", name: "StepWithOnOff", id: 0x6, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", name: "StopWithOnOff", id: 0x7, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.6" }
                },

                {
                    tag: "command", name: "MoveToClosestFrequency", id: 0x8, access: "O", conformance: "FQ",
                    direction: "request", response: "status",
                    details: "The MoveToClosestFrequency command SHALL have the following data fields",
                    xref: { document: "cluster", section: "1.6.6.5" },
                    children: [
                        {
                            tag: "datatype", name: "Frequency", id: 0x0, type: "uint16", conformance: "M", default: 0,
                            xref: { document: "cluster", section: "1.6.6.5" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "BooleanState", id: 0x45, classification: "application",
            xref: { document: "cluster", section: "1.7" },
            children: [
                {
                    tag: "attribute", name: "StateValue", id: 0x0, type: "bool", access: "R V", conformance: "M",
                    quality: "P",
                    details: "This represents a Boolean state",
                    xref: { document: "cluster", section: "1.7.4.1" }
                },

                {
                    tag: "event", name: "StateChange", id: 0x0, access: "V", conformance: "O", priority: "info",
                    details: "This event SHALL be generated when the StateValue attribute changes",
                    xref: { document: "cluster", section: "1.7.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "StateValue", id: 0x0, type: "bool", conformance: "M",
                            xref: { document: "cluster", section: "1.7.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ModeSelect", id: 0x50, classification: "application",
            xref: { document: "cluster", section: "1.8" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "ONOFF", id: 0x0, description: "Dependency with the On/Off cluster",
                            xref: { document: "cluster", section: "1.8.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Description", id: 0x0, type: "string", access: "R V", conformance: "M",
                    constraint: "max 64", quality: "F",
                    details: "This attribute describes the purpose of the server, in readable text",
                    xref: { document: "cluster", section: "1.8.5.1" }
                },

                {
                    tag: "attribute", name: "StandardNamespace", id: 0x1, type: "enum16", access: "R V",
                    conformance: "M", constraint: "desc", default: undefined, quality: "X F",
                    details: "This attribute, when not null, SHALL indicate a single standard namespace for any standard semantic " +
                             "tag value supported in this or any other cluster instance with the same value of this attribute. A " +
                             "null value indicates no standard namespace, and therefore, no standard semantic tags are provided in" +
                             " this cluster instance. Each standard namespace and corresponding values and value meanings SHALL be" +
                             " defined in another document",
                    xref: { document: "cluster", section: "1.8.5.2" }
                },

                {
                    tag: "attribute", name: "SupportedModes", id: 0x2, type: "list", access: "R V", conformance: "M",
                    constraint: "max 255", quality: "F",
                    details: "This attribute is the list of supported modes that may be selected for the CurrentMode attribute. " +
                             "Each item in this list represents a unique mode as indicated by the Mode field of the " +
                             "ModeOptionStruct. Each entry in this list SHALL have a unique value for the Mode field",
                    xref: { document: "cluster", section: "1.8.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "ModeOptionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentMode", id: 0x3, type: "uint8", access: "R V", conformance: "M",
                    constraint: "desc", quality: "N S",
                    details: "This attribute represents the current mode of the server",
                    xref: { document: "cluster", section: "1.8.5.4" }
                },

                {
                    tag: "attribute", name: "StartUpMode", id: 0x4, type: "uint8", access: "RW VO", conformance: "O",
                    constraint: "desc", quality: "X N",
                    details: "The StartUpMode attribute value indicates the desired startup mode for the server when it is " +
                             "supplied with power",
                    xref: { document: "cluster", section: "1.8.5.5" }
                },

                {
                    tag: "attribute", name: "OnMode", id: 0x5, type: "uint8", access: "RW VO",
                    conformance: "D, EPONOFF", constraint: "desc", default: undefined, quality: "X N",
                    details: "This attribute SHALL indicate the value of CurrentMode that depends on the state of the On/Off " +
                             "cluster on the same endpoint. If this attribute is not present or is set to null, it SHALL NOT have " +
                             "an effect, otherwise the CurrentMode attribute SHALL depend on the OnOff attribute of the On/Off " +
                             "cluster as described in the table below",
                    xref: { document: "cluster", section: "1.8.5.6" }
                },

                {
                    tag: "command", name: "ChangeToMode", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "On receipt of this command, if the NewMode field indicates a valid mode transition within the " +
                             "supported list, the server SHALL set the CurrentMode attribute to the NewMode value, otherwise, the",
                    xref: { document: "cluster", section: "1.8.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "NewMode", id: 0x0, type: "uint8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "1.8.6.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ModeOptionStruct", type: "struct",
                    details: "This is a struct representing a possible mode of the server",
                    xref: { document: "cluster", section: "1.8.8.1" },
                    children: [
                        {
                            tag: "datatype", name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 64",
                            quality: "F",
                            details: "This field is readable text that describes the mode option that can be used by a client to indicate " +
                                     "to the user what this option means. This field is meant to be readable and understandable by the " +
                                     "user",
                            xref: { document: "cluster", section: "1.8.8.1.1" }
                        },

                        {
                            tag: "datatype", name: "Mode", id: 0x1, type: "uint8", conformance: "M", quality: "F",
                            details: "The Mode field is used to identify the mode option. The value SHALL be unique for every item in the " +
                                     "SupportedModes attribute",
                            xref: { document: "cluster", section: "1.8.8.1.2" }
                        },

                        {
                            tag: "datatype", name: "SemanticTags", id: 0x2, type: "list", conformance: "M",
                            constraint: "max 64", quality: "F",
                            details: "This field is a list of semantic tags that map to the mode option. This MAY be used by clients to " +
                                     "determine the meaning of the mode option as defined in a standard or manufacturer specific namespace" +
                                     ". Semantic tags can help clients look for options that meet certain criteria. A semantic tag SHALL " +
                                     "be either a standard tag or manufacturer specific tag as defined in each SemanticTagStruct list " +
                                     "entry",
                            xref: { document: "cluster", section: "1.8.8.1.3" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "SemanticTagStruct"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SemanticTagStruct", type: "struct",
                    details: "A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves",
                    xref: { document: "cluster", section: "1.8.8.2" },
                    children: [
                        {
                            tag: "datatype", name: "MfgCode", id: 0x0, type: "vendor-id", conformance: "M", constraint: "desc",
                            quality: "X F",
                            details: "If this field is null, the Value field SHALL be defined in a standard namespace as indicated by the " +
                                     "StandardNamespace attribute. If this field is not null, it SHALL indicate a manufacturer code (" +
                                     "Vendor ID), and the Value field SHALL indicate a semantic tag defined by the manufacturer. Each " +
                                     "manufacturer code supports a single namespace of values. The same manufacturer code and semantic tag" +
                                     " value in separate cluster instances are part of the same namespace and have the same meaning. For " +
                                     "example: a manufacturer tag meaning \"pinch\", has the same meaning in a cluster whose purpose is to " +
                                     "choose the amount of sugar, or amount of salt",
                            xref: { document: "cluster", section: "1.8.8.2.2" }
                        },

                        {
                            tag: "datatype", name: "Value", id: 0x1, type: "enum16", conformance: "M", quality: "F",
                            details: "This field SHALL indicate the semantic tag within a semantic tag namespace which is either " +
                                     "manufacturer specific or standard. For semantic tags in a standard namespace, see Standard Namespace",
                            xref: { document: "cluster", section: "1.8.8.2.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "LowPower", id: 0x508, classification: "application",
            xref: { document: "cluster", section: "1.9" },
            children: [
                {
                    tag: "command", name: "Sleep", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "This command shall put the device into low power mode",
                    xref: { document: "cluster", section: "1.9.3.1" }
                }
            ]
        },

        {
            tag: "cluster", name: "WakeonLan", id: 0x503, classification: "application",
            xref: { document: "cluster", section: "1.10" },
            children: [
                {
                    tag: "attribute", name: "MacAddress", id: 0x0, type: "hwadr", access: "R V", conformance: "O",
                    constraint: "desc", quality: "F",
                    details: "This SHALL indicate the current MAC address of the device. Only 48-bit MAC Addresses SHALL be used " +
                             "for this attribute as required by the Wake on LAN protocol",
                    xref: { document: "cluster", section: "1.10.2.1" }
                },

                {
                    tag: "attribute", name: "LinkLocalAddress", id: 0x1, type: "ipv6adr", access: "R V",
                    conformance: "O", constraint: "desc", quality: "F",
                    details: "This SHALL indicate the current link-local address of the device. Only 128-bit IPv6 link-local " +
                             "addresses SHALL be used for this attribute",
                    xref: { document: "cluster", section: "1.10.2.2" }
                }
            ]
        },

        {
            tag: "cluster", name: "Switch", id: 0x3b, classification: "application",
            xref: { document: "cluster", section: "1.11" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "LS", id: 0x0, conformance: "O.a1",
                            xref: { document: "cluster", section: "1.11.4" }
                        },

                        {
                            tag: "datatype", name: "MS", id: 0x1, conformance: "O.a1",
                            xref: { document: "cluster", section: "1.11.4" }
                        },

                        {
                            tag: "datatype", name: "MSR", id: 0x2, conformance: "[M, S]",
                            xref: { document: "cluster", section: "1.11.4" }
                        },

                        {
                            tag: "datatype", name: "MSL", id: 0x3, conformance: "[M, S & M, SR]",
                            xref: { document: "cluster", section: "1.11.4" }
                        },

                        {
                            tag: "datatype", name: "MSM", id: 0x4, conformance: "[M, S & M, SR]",
                            xref: { document: "cluster", section: "1.11.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "NumberOfPositions", id: 0x0, type: "uint8", conformance: "M",
                    constraint: "min 2", default: 2, quality: "F",
                    details: "This attribute SHALL indicate the maximum number of positions the switch has. Any kind of switch has" +
                             " a minimum of 2 positions. Also see Section 1.11.10, “NumberOfPositions > 2” for the case " +
                             "NumberOfPositions>2",
                    xref: { document: "cluster", section: "1.11.5.1" }
                },

                {
                    tag: "attribute", name: "CurrentPosition", id: 0x1, type: "uint8", conformance: "M",
                    constraint: "0 to NumberOfPositions1", default: 0, quality: "N",
                    details: "This attribute SHALL indicate the position of the switch. The valid range is zero to " +
                             "NumberOfPositions-1. CurrentPosition value 0 SHALL be assigned to the default position of the switch" +
                             ": for example the \"open\" state of a rocker switch, or the \"idle\" state of a push button switch",
                    xref: { document: "cluster", section: "1.11.5.2" }
                },

                {
                    tag: "attribute", name: "MultiPressMax", id: 0x2, type: "uint8", conformance: "M, SM",
                    constraint: "min 2", default: 2, quality: "F",
                    details: "This attribute SHALL indicate how many consecutive presses can be detected and reported by a " +
                             "momentary switch which supports multi-press (e.g. it will report the value 3 if it can detect single" +
                             " press, double press and triple press, but not quad press and beyond",
                    xref: { document: "cluster", section: "1.11.5.3" }
                },

                {
                    tag: "event", name: "SwitchLatched", id: 0x0, access: "V", conformance: "LS", priority: "critical",
                    details: "This event SHALL be generated, when the latching switch is moved to a new position. It MAY have been" +
                             " delayed by debouncing within the switch",
                    xref: { document: "cluster", section: "1.11.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to NumberOfPositions1",
                            xref: { document: "cluster", section: "1.11.7.1" }
                        }
                    ]
                },

                {
                    tag: "event", name: "InitialPress", id: 0x1, access: "V", conformance: "M, S", priority: "critical",
                    details: "This event SHALL be generated, when the momentary switch starts to be pressed (after debouncing",
                    xref: { document: "cluster", section: "1.11.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to NumberOfPositions1",
                            xref: { document: "cluster", section: "1.11.7.2" }
                        }
                    ]
                },

                {
                    tag: "event", name: "LongPress", id: 0x2, access: "V", conformance: "M, SL", priority: "critical",
                    details: "This event SHALL be generated, when the momentary switch has been pressed for a \"long\" time (this " +
                             "time interval is manufacturer determined (e.g. since it depends on the switch physics",
                    xref: { document: "cluster", section: "1.11.7.3" },
                    children: [
                        {
                            tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to NumberOfPositions1",
                            xref: { document: "cluster", section: "1.11.7.3" }
                        }
                    ]
                },

                {
                    tag: "event", name: "ShortRelease", id: 0x3, access: "V", conformance: "M, SR",
                    priority: "critical",
                    details: "This event SHALL be generated, when the momentary switch has been released (after debouncing",
                    xref: { document: "cluster", section: "1.11.7.4" },
                    children: [
                        {
                            tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to NumberOfPositions1",
                            xref: { document: "cluster", section: "1.11.7.4" }
                        }
                    ]
                },

                {
                    tag: "event", name: "LongRelease", id: 0x4, access: "V", conformance: "M, SL", priority: "critical",
                    details: "This event SHALL be generated, when the momentary switch has been released (after debouncing) and " +
                             "after having been pressed for a long time, i.e. this event SHALL be generated when the switch is " +
                             "released if a LongPress event has been generated since since the previous InitialPress event. Also " +
                             "see Section 1.11.8, “Sequence of generated events",
                    xref: { document: "cluster", section: "1.11.7.5" },
                    children: [
                        {
                            tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to NumberOfPositions1",
                            xref: { document: "cluster", section: "1.11.7.5" }
                        }
                    ]
                },

                {
                    tag: "event", name: "MultiPressOngoing", id: 0x5, access: "V", conformance: "M, SM",
                    priority: "critical",
                    details: "This event SHALL be generated to indicate how many times the momentary switch has been pressed in a " +
                             "multi-press sequence, during that sequence. See Section 1.11.9, “Sequence of events for MultiPress” " +
                             "below",
                    xref: { document: "cluster", section: "1.11.7.6" },
                    children: [
                        {
                            tag: "datatype", name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to NumberOfPositions1",
                            xref: { document: "cluster", section: "1.11.7.6" }
                        },

                        {
                            tag: "datatype", name: "CurrentNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
                            constraint: "2 to MultiPressMax",
                            xref: { document: "cluster", section: "1.11.7.6" }
                        }
                    ]
                },

                {
                    tag: "event", name: "MultiPressComplete", id: 0x6, access: "V", conformance: "M, SM",
                    priority: "critical",
                    details: "This event SHALL be generated to indicate how many times the momentary switch has been pressed in a " +
                             "multi-press sequence, after it has been detected that the sequence has ended. See Section 1.11.9, “" +
                             "Sequence of events for MultiPress” below",
                    xref: { document: "cluster", section: "1.11.7.7" },
                    children: [
                        {
                            tag: "datatype", name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to NumberOfPositions1",
                            xref: { document: "cluster", section: "1.11.7.7" }
                        },

                        {
                            tag: "datatype", name: "TotalNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
                            constraint: "1 to MultiPressMax",
                            xref: { document: "cluster", section: "1.11.7.7" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "IlluminanceMeasurement", id: 0x400, classification: "application",
            xref: { document: "cluster", section: "2.2" },
            children: [
                {
                    tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0, MinMeasuredValue to MaxMeasuredValue", default: 0, quality: "X P",
                    details: "The MeasuredValue attribute represents the illuminance in Lux (symbol lx) as follows",
                    xref: { document: "cluster", section: "2.2.5.1" }
                },

                {
                    tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
                    conformance: "M", constraint: "1 to MaxMeasuredValue1", quality: "X",
                    details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. A " +
                             "value of null indicates that this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.2.5.2" }
                },

                {
                    tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
                    conformance: "M", constraint: "MinMeasuredValue1 to 65534", quality: "X",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A " +
                             "value of null indicates that this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.2.5.3" }
                },

                {
                    tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.2.5.4" }
                },

                {
                    tag: "attribute", name: "LightSensorType", id: 0x4, type: "enum8", access: "R V", conformance: "O",
                    default: undefined, quality: "X",
                    details: "The LightSensorType attribute specifies the electronic type of the light sensor. This attribute " +
                             "shall be set to one of the non-reserved values listed in Values of the LightSensorType Attribute",
                    xref: { document: "cluster", section: "2.2.5.5" },
                    children: [
                        {
                            tag: "datatype", name: "Photodiode", id: 0x0,
                            xref: { document: "cluster", section: "2.2.5.5" }
                        },

                        {
                            tag: "datatype", name: "Cmos", id: 0x1,
                            xref: { document: "cluster", section: "2.2.5.5" }
                        },

                        {
                            tag: "datatype", name: "Reservedformanufacturerspecificlightsensortypes", id: 0x40,
                            xref: { document: "cluster", section: "2.2.5.5" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "TemperatureMeasurement", id: 0x402, classification: "application",
            xref: { document: "cluster", section: "2.3" },
            children: [
                {
                    tag: "attribute", name: "Measured", id: 0x0, type: "int16", access: "R V", conformance: "M",
                    constraint: "MinMea", quality: "X P",
                    xref: { document: "cluster", section: "2.3.4" }
                },

                {
                    tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "int16", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that is capable of being" +
                             " measured. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.3.4.2" }
                },

                {
                    tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "int16", access: "R V", conformance: "M",
                    constraint: "MinMeasuredValue1 to 32767", quality: "X",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that is capable of being" +
                             " measured. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.3.4.3" }
                },

                {
                    tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048", default: 0,
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.3.4.4" }
                }
            ]
        },

        {
            tag: "cluster", name: "PressureMeasurement", id: 0x403, classification: "application",
            xref: { document: "cluster", section: "2.4" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "EXT", id: 0x0, conformance: "O",
                            description: "The cluster is capable of extended range and resolution",
                            xref: { document: "cluster", section: "2.4.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "MeasuredValue", id: 0x0, type: "int16", access: "R V", conformance: "M",
                    constraint: "MinMeasuredValue to MaxMeasuredValue", quality: "X P",
                    details: "This attribute represents the pressure in kPa as follows",
                    xref: { document: "cluster", section: "2.4.5.1" }
                },

                {
                    tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "int16", access: "R V", conformance: "M",
                    quality: "X",
                    details: "This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value" +
                             " for more details",
                    xref: { document: "cluster", section: "2.4.5.2" }
                },

                {
                    tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "int16", access: "R V", conformance: "M",
                    constraint: "MinMeasuredValue1 to 32767", quality: "X",
                    details: "This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value" +
                             " for more details",
                    xref: { document: "cluster", section: "2.4.5.3" }
                },

                {
                    tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048", default: 0,
                    details: "This attribute indicates the magnitude of the possible error that is associated with ScaledValue",
                    xref: { document: "cluster", section: "2.4.5.4" }
                },

                {
                    tag: "attribute", name: "ScaledValue", id: 0x10, type: "int16", access: "R V", conformance: "EXT",
                    constraint: "MinScaledValue to MaxScaledValue", default: 0, quality: "X",
                    details: "ScaledValue represents the pressure in Pascals as follows",
                    xref: { document: "cluster", section: "2.4.5.5" }
                },

                {
                    tag: "attribute", name: "MinScaledValue", id: 0x11, type: "int16", access: "R V",
                    conformance: "EXT", default: 0, quality: "X",
                    details: "The MinScaledValue attribute indicates the minimum value of ScaledValue that can be measured. The " +
                             "null value indicates that the value is not available",
                    xref: { document: "cluster", section: "2.4.5.6" }
                },

                {
                    tag: "attribute", name: "MaxScaledValue", id: 0x12, type: "int16", access: "R V",
                    conformance: "EXT", constraint: "MinScaledValue1 to 32767", default: 0, quality: "X",
                    details: "This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue SHALL" +
                             " be greater than MinScaledValue",
                    xref: { document: "cluster", section: "2.4.5.7" }
                },

                {
                    tag: "attribute", name: "ScaledTolerance", id: 0x13, type: "uint16", access: "R V",
                    conformance: "[EXT]", constraint: "0 to 2048", default: 0,
                    details: "This attribute indicates the magnitude of the possible error that is associated with ScaledValue. " +
                             "The true value is located in the range",
                    xref: { document: "cluster", section: "2.4.5.8" }
                },

                {
                    tag: "attribute", name: "Scale", id: 0x14, type: "int8", access: "R V", conformance: "EXT",
                    constraint: "-127 to 127", default: 0,
                    details: "This attribute indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue Attribute",
                    xref: { document: "cluster", section: "2.4.5.9" }
                }
            ]
        },

        {
            tag: "cluster", name: "FlowMeasurement", id: 0x404, classification: "application",
            xref: { document: "cluster", section: "2.5" },
            children: [
                {
                    tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
                    constraint: "MinMeasuredValue to MaxMeasuredValue", default: undefined, quality: "X P",
                    details: "MeasuredValue represents the flow in m3/h as follows: MeasuredValue = 10 x Flow",
                    xref: { document: "cluster", section: "2.5.4.1" }
                },

                {
                    tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
                    conformance: "M", constraint: "0 to MaxMeasuredValue1", quality: "X",
                    details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. " +
                             "See Measured Value for more details",
                    xref: { document: "cluster", section: "2.5.4.2" }
                },

                {
                    tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
                    conformance: "M", constraint: "MinMeasuredValue1 to 65534", quality: "X",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. " +
                             "See Measured Value for more details",
                    xref: { document: "cluster", section: "2.5.4.3" }
                },

                {
                    tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048", default: 0,
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.5.4.4" }
                }
            ]
        },

        {
            tag: "cluster", name: "RelativeHumidityMeasurement", id: 0x405, classification: "application",
            xref: { document: "cluster", section: "2.6" },
            children: [
                {
                    tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
                    constraint: "MinMeasuredValue to MaxMeasuredValue", quality: "X P",
                    details: "MeasuredValue represents the water content in % as follows",
                    xref: { document: "cluster", section: "2.6.4.1" }
                },

                {
                    tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
                    conformance: "M", constraint: "0 to MaxMeasuredValue1", quality: "X",
                    details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. " +
                             "The null value means this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.2" }
                },

                {
                    tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
                    conformance: "M", constraint: "MinMeasuredValue1 to 10000", quality: "X",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. " +
                             "The null value means this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.3" }
                },

                {
                    tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.6.4.4" }
                }
            ]
        },

        {
            tag: "cluster", name: "LeafWetnessMeasurement", id: 0x407, classification: "application",
            xref: { document: "cluster", section: "2.6" },
            children: [
                {
                    tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
                    constraint: "MinMeasuredValue to MaxMeasuredValue", quality: "X P",
                    details: "MeasuredValue represents the water content in % as follows",
                    xref: { document: "cluster", section: "2.6.4.1" }
                },

                {
                    tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
                    conformance: "M", constraint: "0 to MaxMeasuredValue1", quality: "X",
                    details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. " +
                             "The null value means this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.2" }
                },

                {
                    tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
                    conformance: "M", constraint: "MinMeasuredValue1 to 10000", quality: "X",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. " +
                             "The null value means this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.3" }
                },

                {
                    tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.6.4.4" }
                }
            ]
        },

        {
            tag: "cluster", name: "SoilMoistureMeasurement", id: 0x408, classification: "application",
            xref: { document: "cluster", section: "2.6" },
            children: [
                {
                    tag: "attribute", name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
                    constraint: "MinMeasuredValue to MaxMeasuredValue", quality: "X P",
                    details: "MeasuredValue represents the water content in % as follows",
                    xref: { document: "cluster", section: "2.6.4.1" }
                },

                {
                    tag: "attribute", name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V",
                    conformance: "M", constraint: "0 to MaxMeasuredValue1", quality: "X",
                    details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. " +
                             "The null value means this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.2" }
                },

                {
                    tag: "attribute", name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V",
                    conformance: "M", constraint: "MinMeasuredValue1 to 10000", quality: "X",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. " +
                             "The null value means this attribute is not defined. See Measured Value for more details",
                    xref: { document: "cluster", section: "2.6.4.3" }
                },

                {
                    tag: "attribute", name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048",
                    details: "See Measured Value",
                    xref: { document: "cluster", section: "2.6.4.4" }
                }
            ]
        },

        {
            tag: "cluster", name: "OccupancySensing", id: 0x406, classification: "application",
            xref: { document: "cluster", section: "2.7" },
            children: [
                {
                    tag: "datatype", name: "OccupancyBitmap", type: "map8",
                    details: "This data type is derived from bitmap8",
                    xref: { document: "cluster", section: "2.7.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Occupied", id: 0x0,
                            description: "Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.",
                            xref: { document: "cluster", section: "2.7.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OccupancySensorTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "cluster", section: "2.7.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "Pir", id: 0x0, conformance: "M",
                            xref: { document: "cluster", section: "2.7.5.2" }
                        },

                        {
                            tag: "datatype", name: "Ultrasonic", id: 0x1, conformance: "M",
                            xref: { document: "cluster", section: "2.7.5.2" }
                        },

                        {
                            tag: "datatype", name: "PirAndUltrasonic", id: 0x2, conformance: "M",
                            xref: { document: "cluster", section: "2.7.5.2" }
                        },

                        {
                            tag: "datatype", name: "PhysicalContact", id: 0x3, conformance: "M",
                            xref: { document: "cluster", section: "2.7.5.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OccupancySensorTypeBitmap", type: "map8",
                    details: "This data type is derived from bitmap8",
                    xref: { document: "cluster", section: "2.7.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "Pir", id: 0x0, description: "Indicates a passive infrared sensor.",
                            xref: { document: "cluster", section: "2.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "Ultrasonic", id: 0x1, description: "Indicates a ultrasonic sensor.",
                            xref: { document: "cluster", section: "2.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "PhysicalContact", id: 0x2,
                            description: "Indicates a physical contact sensor.",
                            xref: { document: "cluster", section: "2.7.5.3" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ColorControl", id: 0x300, classification: "application",
            xref: { document: "cluster", section: "3.2" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "HS", id: 0x0,
                            description: "Supports color specification via hue/saturation.",
                            xref: { document: "cluster", section: "3.2.5" }
                        },

                        {
                            tag: "datatype", name: "EHUE", id: 0x1, description: "Enhanced hue is supported.",
                            xref: { document: "cluster", section: "3.2.5" }
                        },

                        {
                            tag: "datatype", name: "CL", id: 0x2, description: "Color loop is supported.",
                            xref: { document: "cluster", section: "3.2.5" }
                        },

                        {
                            tag: "datatype", name: "XY", id: 0x3, description: "Supports color specification via XY.",
                            xref: { document: "cluster", section: "3.2.5" }
                        },

                        {
                            tag: "datatype", name: "CT", id: 0x4, description: "Supports specification of color temperature.",
                            xref: { document: "cluster", section: "3.2.5" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveToHue", id: 0x0, access: "O", conformance: "HS", direction: "request",
                    response: "status",
                    details: "The MoveToHue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.4" },
                    children: [
                        {
                            tag: "datatype", name: "Hue", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254",
                            xref: { document: "cluster", section: "3.2.11.4" }
                        },

                        {
                            tag: "datatype", name: "Direction", id: 0x1, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.4" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.4" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.4" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveHue", id: 0x1, access: "O", conformance: "HS", direction: "request",
                    response: "status",
                    details: "The MoveHue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.5" },
                    children: [
                        {
                            tag: "datatype", name: "MoveMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.5" }
                        },

                        {
                            tag: "datatype", name: "Rate", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.5" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.5" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.5" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StepHue", id: 0x2, access: "O", conformance: "HS", direction: "request",
                    response: "status",
                    details: "The StepHue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.6" },
                    children: [
                        {
                            tag: "datatype", name: "StepMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.6" }
                        },

                        {
                            tag: "datatype", name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.6" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.6" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.6" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.6" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveToSaturation", id: 0x3, access: "O", conformance: "HS",
                    direction: "request", response: "status",
                    details: "The MoveToSaturation command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.7" },
                    children: [
                        {
                            tag: "datatype", name: "Saturation", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to 254",
                            xref: { document: "cluster", section: "3.2.11.7" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.7" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.7" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.7" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveSaturation", id: 0x4, access: "O", conformance: "HS",
                    direction: "request", response: "status",
                    details: "The MoveSaturation command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.8" },
                    children: [
                        {
                            tag: "datatype", name: "MoveMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.8" }
                        },

                        {
                            tag: "datatype", name: "Rate", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.8" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.8" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.8" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StepSaturation", id: 0x5, access: "O", conformance: "HS",
                    direction: "request", response: "status",
                    details: "The StepSaturation command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.9" },
                    children: [
                        {
                            tag: "datatype", name: "StepMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.9" }
                        },

                        {
                            tag: "datatype", name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.9" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.9" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.9" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.9" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveToHueAndSaturation", id: 0x6, access: "O", conformance: "HS",
                    direction: "request", response: "status",
                    details: "The MoveToHueAndSaturation command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.10" },
                    children: [
                        {
                            tag: "datatype", name: "Hue", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254",
                            xref: { document: "cluster", section: "3.2.11.10" }
                        },

                        {
                            tag: "datatype", name: "Saturation", id: 0x1, type: "uint8", conformance: "M",
                            constraint: "0 to 254",
                            xref: { document: "cluster", section: "3.2.11.10" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.10" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.10" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.10" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveToColor", id: 0x7, access: "O", conformance: "X, Y",
                    direction: "request", response: "status",
                    details: "The MoveToColor command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.11" },
                    children: [
                        {
                            tag: "datatype", name: "ColorX", id: 0x0, type: "uint16", conformance: "M", constraint: "0",
                            xref: { document: "cluster", section: "3.2.11.11" }
                        },

                        {
                            tag: "datatype", name: "ColorY", id: 0x1, type: "uint16", conformance: "M", constraint: "0",
                            xref: { document: "cluster", section: "3.2.11.11" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.11" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.11" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.11" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveColor", id: 0x8, access: "O", conformance: "X, Y", direction: "request",
                    response: "status",
                    details: "The MoveColor command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.12" },
                    children: [
                        {
                            tag: "datatype", name: "RateX", id: 0x0, type: "int16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.12" }
                        },

                        {
                            tag: "datatype", name: "RateY", id: 0x1, type: "int16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.12" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.12" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.12" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StepColor", id: 0x9, access: "O", conformance: "X, Y", direction: "request",
                    response: "status",
                    details: "The StepColor command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.13" },
                    children: [
                        {
                            tag: "datatype", name: "StepX", id: 0x0, type: "int16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.13" }
                        },

                        {
                            tag: "datatype", name: "StepY", id: 0x1, type: "int16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.13" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.13" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.13" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.13" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveToColorTemperature", id: 0xa, access: "O", conformance: "CT",
                    direction: "request", response: "status",
                    details: "The MoveToColorTemperature command SHALL have the following data fields",
                    xref: { document: "cluster", section: "3.2.11.14" },
                    children: [
                        {
                            tag: "datatype", name: "ColorTemperatureMireds", id: 0x0, type: "uint16", conformance: "M",
                            constraint: "0",
                            xref: { document: "cluster", section: "3.2.11.14" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.14" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.14" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.14" }
                        }
                    ]
                },

                {
                    tag: "command", name: "EnhancedMoveToHue", id: 0x40, access: "O", conformance: "EHUE",
                    direction: "request", response: "status",
                    details: "The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their " +
                             "current hue to a target hue",
                    xref: { document: "cluster", section: "3.2.11.15" },
                    children: [
                        {
                            tag: "datatype", name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.15" }
                        },

                        {
                            tag: "datatype", name: "Direction", id: 0x1, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.15" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.15" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.15" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.15" }
                        }
                    ]
                },

                {
                    tag: "command", name: "EnhancedMoveHue", id: 0x41, access: "O", conformance: "EHUE",
                    direction: "request", response: "status",
                    details: "The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their " +
                             "current hue to a target hue",
                    xref: { document: "cluster", section: "3.2.11.16" },
                    children: [
                        {
                            tag: "datatype", name: "MoveMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.16" }
                        },

                        {
                            tag: "datatype", name: "Rate", id: 0x1, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.16" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.16" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.16" }
                        }
                    ]
                },

                {
                    tag: "command", name: "EnhancedStepHue", id: 0x42, access: "O", conformance: "EHUE",
                    direction: "request", response: "status",
                    details: "The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue " +
                             "to a target hue, resulting in a linear transition through XY space",
                    xref: { document: "cluster", section: "3.2.11.17" },
                    children: [
                        {
                            tag: "datatype", name: "StepMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.17" }
                        },

                        {
                            tag: "datatype", name: "StepSize", id: 0x1, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.17" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.17" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.17" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.17" }
                        }
                    ]
                },

                {
                    tag: "command", name: "EnhancedMoveToHueAndSaturation", id: 0x43, access: "O", conformance: "EHUE",
                    direction: "request", response: "status",
                    details: "The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous " +
                             "transition from their current hue to a target hue and from their current saturation to a target " +
                             "saturation",
                    xref: { document: "cluster", section: "3.2.11.18" },
                    children: [
                        {
                            tag: "datatype", name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.18" }
                        },

                        {
                            tag: "datatype", name: "Saturation", id: 0x1, type: "uint8", conformance: "M",
                            constraint: "0 to 254",
                            xref: { document: "cluster", section: "3.2.11.18" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.18" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.18" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.18" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ColorLoopSet", id: 0x44, access: "O", conformance: "CL",
                    direction: "request", response: "status",
                    details: "The Color Loop Set command allows a color loop to be activated such that the color lamp cycles " +
                             "through its range of hues",
                    xref: { document: "cluster", section: "3.2.11.19" },
                    children: [
                        {
                            tag: "datatype", name: "UpdateFlags", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.19" }
                        },

                        {
                            tag: "datatype", name: "Action", id: 0x1, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.19" }
                        },

                        {
                            tag: "datatype", name: "Direction", id: 0x2, type: "enum8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.19" }
                        },

                        {
                            tag: "datatype", name: "Time", id: 0x3, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.19" }
                        },

                        {
                            tag: "datatype", name: "StartHue", id: 0x4, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.19" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x5, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.19" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x6, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.19" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StopMoveStep", id: 0x47, access: "O", conformance: "HS | X, Y | CT",
                    direction: "request", response: "status",
                    details: "The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this " +
                             "automatically provides symmetry to the Level Control cluster",
                    xref: { document: "cluster", section: "3.2.11.20" },
                    children: [
                        {
                            tag: "datatype", name: "OptionsMask", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.20" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x1, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.20" }
                        }
                    ]
                },

                {
                    tag: "command", name: "MoveColorTemperature", id: 0x4b, access: "O", conformance: "CT",
                    direction: "request", response: "status",
                    details: "The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified " +
                             "rate",
                    xref: { document: "cluster", section: "3.2.11.21" },
                    children: [
                        {
                            tag: "datatype", name: "MoveMode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.21" }
                        },

                        {
                            tag: "datatype", name: "Rate", id: 0x1, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.21" }
                        },

                        {
                            tag: "datatype", name: "ColorTemperatureMinimumMireds", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0",
                            xref: { document: "cluster", section: "3.2.11.21" }
                        },

                        {
                            tag: "datatype", name: "ColorTemperatureMaximumMireds", id: 0x3, type: "uint16", conformance: "M",
                            constraint: "0",
                            xref: { document: "cluster", section: "3.2.11.21" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x4, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.21" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x5, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.21" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StepColorTemperature", id: 0x4c, access: "O", conformance: "CT",
                    direction: "request", response: "status",
                    details: "The StepColorTemperature command allows the color temperature of a lamp to be stepped with a " +
                             "specified step size",
                    xref: { document: "cluster", section: "3.2.11.22" },
                    children: [
                        {
                            tag: "datatype", name: "StepMode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "3.2.11.22" }
                        },

                        {
                            tag: "datatype", name: "StepSize", id: 0x1, type: "uint16", conformance: "M",
                            xref: { document: "cluster", section: "3.2.11.22" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65534",
                            xref: { document: "cluster", section: "3.2.11.22" }
                        },

                        {
                            tag: "datatype", name: "ColorTemperatureMinimumMireds", id: 0x3, type: "uint16", conformance: "M",
                            constraint: "0",
                            xref: { document: "cluster", section: "3.2.11.22" }
                        },

                        {
                            tag: "datatype", name: "ColorTemperatureMaximumMireds", id: 0x4, type: "uint16", conformance: "M",
                            constraint: "0",
                            xref: { document: "cluster", section: "3.2.11.22" }
                        },

                        {
                            tag: "datatype", name: "OptionsMask", id: 0x5, type: "map8", conformance: "M", constraint: "desc",
                            default: 0,
                            xref: { document: "cluster", section: "3.2.11.22" }
                        },

                        {
                            tag: "datatype", name: "OptionsOverride", id: 0x6, type: "map8", conformance: "M",
                            constraint: "desc", default: 0,
                            xref: { document: "cluster", section: "3.2.11.22" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "BallastConfiguration", id: 0x301, classification: "application",
            xref: { document: "cluster", section: "3.3" }
        },

        {
            tag: "cluster", name: "PumpConfigurationandControl", id: 0x200, classification: "application",
            xref: { document: "cluster", section: "4.2" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "PRSCONST", id: 0x0, conformance: "O.a1+",
                            description: "Supports operating in constant pressure mode",
                            xref: { document: "cluster", section: "4.2.4" }
                        },

                        {
                            tag: "datatype", name: "PRSCOMP", id: 0x1, conformance: "O.a1+",
                            description: "Supports operating in compensated pressure mode",
                            xref: { document: "cluster", section: "4.2.4" }
                        },

                        {
                            tag: "datatype", name: "FLW", id: 0x2, conformance: "O.a1+",
                            description: "Supports operating in constant flow mode",
                            xref: { document: "cluster", section: "4.2.4" }
                        },

                        {
                            tag: "datatype", name: "SPD", id: 0x3, conformance: "O.a1+",
                            description: "Supports operating in constant speed mode",
                            xref: { document: "cluster", section: "4.2.4" }
                        },

                        {
                            tag: "datatype", name: "TEMP", id: 0x4, conformance: "O.a1+",
                            description: "Supports operating in constant temperature mode",
                            xref: { document: "cluster", section: "4.2.4" }
                        },

                        {
                            tag: "datatype", name: "AUTO", id: 0x5, conformance: "O",
                            description: "Supports operating in automatic mode",
                            xref: { document: "cluster", section: "4.2.4" }
                        },

                        {
                            tag: "datatype", name: "LOCAL", id: 0x6, conformance: "O",
                            description: "Supports operating using local settings",
                            xref: { document: "cluster", section: "4.2.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "MaxPressure", id: 0x0, type: "int16", access: "R V", conformance: "M",
                    default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does" +
                             " not apply to any specific control mode or operation mode",
                    xref: { document: "cluster", section: "4.2.7.1" }
                },

                {
                    tag: "attribute", name: "MaxSpeed", id: 0x1, type: "uint16", access: "R V", conformance: "M",
                    default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does " +
                             "not apply to any specific control mode or operation mode",
                    xref: { document: "cluster", section: "4.2.7.2" }
                },

                {
                    tag: "attribute", name: "MaxFlow", id: 0x2, type: "uint16", access: "R V", conformance: "M",
                    default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not" +
                             " apply to any specific control mode or operation mode",
                    xref: { document: "cluster", section: "4.2.7.3" }
                },

                {
                    tag: "attribute", name: "MinConstPressure", id: 0x3, type: "int16", access: "R V",
                    conformance: "P, RSCONST, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the minimum pressure the pump can achieve when it is working with the " +
                             "ControlMode attribute set to ConstantPressure",
                    xref: { document: "cluster", section: "4.2.7.4" }
                },

                {
                    tag: "attribute", name: "MaxConstPressure", id: 0x4, type: "int16", access: "R V",
                    conformance: "P, RSCONST, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum pressure the pump can achieve when it is working with the " +
                             "ControlMode attribute set to ConstantPressure",
                    xref: { document: "cluster", section: "4.2.7.5" }
                },

                {
                    tag: "attribute", name: "MinCompPressure", id: 0x5, type: "int16", access: "R V",
                    conformance: "P, RSCOMP, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the minimum compensated pressure the pump can achieve when it is working " +
                             "with the ControlMode attribute set to ProportionalPressure",
                    xref: { document: "cluster", section: "4.2.7.6" }
                },

                {
                    tag: "attribute", name: "MaxCompPressure", id: 0x6, type: "int16", access: "R V",
                    conformance: "P, RSCOMP, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum compensated pressure the pump can achieve when it is working " +
                             "with the ControlMode attribute set to ProportionalPressure",
                    xref: { document: "cluster", section: "4.2.7.7" }
                },

                {
                    tag: "attribute", name: "MinConstSpeed", id: 0x7, type: "uint16", access: "R V",
                    conformance: "SPD, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the minimum speed the pump can achieve when it is working with the " +
                             "ControlMode attribute set to ConstantSpeed",
                    xref: { document: "cluster", section: "4.2.7.8" }
                },

                {
                    tag: "attribute", name: "MaxConstSpeed", id: 0x8, type: "uint16", access: "R V",
                    conformance: "SPD, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum speed the pump can achieve when it is working with the " +
                             "ControlMode attribute set to ConstantSpeed",
                    xref: { document: "cluster", section: "4.2.7.9" }
                },

                {
                    tag: "attribute", name: "MinConstFlow", id: 0x9, type: "uint16", access: "R V",
                    conformance: "FLW, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the minimum flow the pump can achieve when it is working with the Con",
                    xref: { document: "cluster", section: "4.2.7.10" }
                },

                {
                    tag: "attribute", name: "MaxConstFlow", id: 0xa, type: "uint16", access: "R V",
                    conformance: "FLW, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum flow the pump can achieve when it is working with the " +
                             "ControlMode attribute set to ConstantFlow",
                    xref: { document: "cluster", section: "4.2.7.11" }
                },

                {
                    tag: "attribute", name: "MinConstTemp", id: 0xb, type: "int16", access: "R V",
                    conformance: "TEMP, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the minimum temperature the pump can maintain in the system when it is " +
                             "working with the ControlMode attribute set to ConstantTemperature",
                    xref: { document: "cluster", section: "4.2.7.12" }
                },

                {
                    tag: "attribute", name: "MaxConstTemp", id: 0xc, type: "int16", access: "R V",
                    conformance: "TEMP, [AUTO]", default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum temperature the pump can maintain in the system when it is " +
                             "working with the ControlMode attribute set to ConstantTemperature",
                    xref: { document: "cluster", section: "4.2.7.13" }
                },

                {
                    tag: "attribute", name: "PumpStatus", id: 0x10, type: "PumpStatusBitmap", access: "R V",
                    conformance: "O", constraint: "desc", default: 0, quality: "P",
                    details: "This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. " +
                             "Where a pump controller function is active, the corresponding bit SHALL be set to 1. Where a pump " +
                             "controller function is not active, the corresponding bit SHALL be set to 0",
                    xref: { document: "cluster", section: "4.2.7.14" }
                },

                {
                    tag: "attribute", name: "EffectiveOperationMode", id: 0x11, type: "OperationModeEnum",
                    access: "R V", conformance: "M", constraint: "desc", quality: "N",
                    details: "This attribute specifies current effective operation mode of the pump as defined in " +
                             "OperationModeEnum",
                    xref: { document: "cluster", section: "4.2.7.15" }
                },

                {
                    tag: "attribute", name: "EffectiveControlMode", id: 0x12, type: "ControlModeEnum", access: "R V",
                    conformance: "M", constraint: "desc", quality: "N",
                    details: "This attribute specifies the current effective control mode of the pump as defined in " +
                             "ControlModeEnum",
                    xref: { document: "cluster", section: "4.2.7.16" }
                },

                {
                    tag: "attribute", name: "Capacity", id: 0x13, type: "int16", access: "R V", conformance: "M",
                    default: undefined, quality: "X P",
                    details: "This attribute specifies the actual capacity of the pump as a percentage of the effective maximum " +
                             "setpoint value. It is updated dynamically as the speed of the pump changes",
                    xref: { document: "cluster", section: "4.2.7.17" }
                },

                {
                    tag: "attribute", name: "Speed", id: 0x14, type: "uint16", access: "R V", conformance: "O",
                    default: undefined, quality: "X",
                    details: "This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as " +
                             "the speed of the pump changes",
                    xref: { document: "cluster", section: "4.2.7.18" }
                },

                {
                    tag: "attribute", name: "LifetimeRunningHours", id: 0x15, type: "uint24", access: "RW VM",
                    conformance: "O", default: 0, quality: "X N",
                    details: "This attribute specifies the accumulated number of hours that the pump has been powered and the " +
                             "motor has been running. It is updated dynamically as it increases. It is preserved over power cycles" +
                             " of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (" +
                             "zero",
                    xref: { document: "cluster", section: "4.2.7.19" }
                },

                {
                    tag: "attribute", name: "Power", id: 0x16, type: "uint24", access: "R V", conformance: "O",
                    default: undefined, quality: "X",
                    details: "This attribute specifies the actual power consumption of the pump in Watts. The value of this " +
                             "attribute is updated dynamically as the power consumption of the pump changes",
                    xref: { document: "cluster", section: "4.2.7.20" }
                },

                {
                    tag: "attribute", name: "LifetimeEnergyConsumed", id: 0x17, type: "uint32", access: "RW VM",
                    conformance: "O", default: 0, quality: "X N",
                    details: "This attribute specifies the accumulated energy consumption of the pump through the entire lifetime " +
                             "of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the " +
                             "energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “" +
                             "rolls over” and starts at 0 (zero",
                    xref: { document: "cluster", section: "4.2.7.21" }
                },

                {
                    tag: "attribute", name: "OperationMode", id: 0x20, type: "OperationModeEnum", access: "RW VM",
                    conformance: "M", constraint: "desc", default: 0, quality: "N",
                    details: "This attribute specifies the operation mode of the pump as defined in OperationModeEnum",
                    xref: { document: "cluster", section: "4.2.7.22" }
                },

                {
                    tag: "attribute", name: "ControlMode", id: 0x21, type: "ControlModeEnum", access: "RW VM",
                    conformance: "O", constraint: "desc", default: 0, quality: "N",
                    details: "This attribute specifies the control mode of the pump as defined in ControlModeEnum",
                    xref: { document: "cluster", section: "4.2.7.23" }
                },

                {
                    tag: "attribute", name: "AlarmMask", id: 0x22, type: "map16", access: "R V", conformance: "D",
                    constraint: "desc", default: 0, quality: "N",
                    xref: { document: "cluster", section: "4.2.7" }
                },

                {
                    tag: "event", name: "SupplyVoltageLow", id: 0x0, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "SupplyVoltageHigh", id: 0x1, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "PowerMissingPhase", id: 0x2, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "SystemPressureLow", id: 0x3, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "SystemPressureHigh", id: 0x4, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "DryRunning", id: 0x5, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "MotorTemperatureHigh", id: 0x6, access: "V", conformance: "O",
                    priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "PumpMotorFatalFailure", id: 0x7, access: "V", conformance: "O",
                    priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "ElectronicTemperatureHigh", id: 0x8, access: "V", conformance: "O",
                    priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "PumpBlocked", id: 0x9, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "SensorFailure", id: 0xa, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "ElectronicNonFatalFailure", id: 0xb, access: "V", conformance: "O",
                    priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "ElectronicFatalFailure", id: 0xc, access: "V", conformance: "O",
                    priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "GeneralFault", id: 0xd, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "Leakage", id: 0xe, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "AirDetection", id: 0xf, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "event", name: "TurbineOperation", id: 0x10, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                },

                {
                    tag: "datatype", name: "PumpStatusBitmap", type: "map16",
                    details: "This data type is derived from map16",
                    xref: { document: "cluster", section: "4.2.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "DeviceFault", id: 0x0,
                            description: "A fault related to the system or pump device is detected.",
                            details: "If this bit is set, it MAY correspond to an event in the range 2-16, see Events",
                            xref: { document: "cluster", section: "4.2.6.1.1" }
                        },

                        {
                            tag: "datatype", name: "SupplyFault", id: 0x1,
                            description: "A fault related to the supply to the pump is detected.",
                            details: "If this bit is set, it MAY correspond to an event in the range 0-1 or 13, see Events",
                            xref: { document: "cluster", section: "4.2.6.1.2" }
                        },

                        {
                            tag: "datatype", name: "SpeedLow", id: 0x2, description: "Setpoint is too low to achieve.",
                            xref: { document: "cluster", section: "4.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "SpeedHigh", id: 0x3, description: "Setpoint is too high to achieve.",
                            xref: { document: "cluster", section: "4.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "LocalOverride", id: 0x4,
                            description: "Device control is overridden by hardware, such as an external STOP button or via a local HMI.",
                            details: "While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing " +
                                     "OperationMode SHALL generate a FAILURE error status until LocalOverride is cleared on the physical " +
                                     "device. When LocalOverride is cleared, the device SHALL return to the operation mode set in " +
                                     "OperationMode",
                            xref: { document: "cluster", section: "4.2.6.1.3" }
                        },

                        {
                            tag: "datatype", name: "Running", id: 0x5, description: "Pump is currently running",
                            xref: { document: "cluster", section: "4.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "RemotePressure", id: 0x6,
                            description: "A remote pressure sensor is used as the sensor for the regulation of the pump.",
                            details: "If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is " +
                                     "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                            xref: { document: "cluster", section: "4.2.6.1.4" }
                        },

                        {
                            tag: "datatype", name: "RemoteFlow", id: 0x7,
                            description: "A remote flow sensor is used as the sensor for the regulation of the pump.",
                            details: "If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is " +
                                     "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                            xref: { document: "cluster", section: "4.2.6.1.5" }
                        },

                        {
                            tag: "datatype", name: "RemoteTemperature", id: 0x8,
                            description: "A remote temperature sensor is used as the sensor for the regulation of the pump.",
                            details: "If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is " +
                                     "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                            xref: { document: "cluster", section: "4.2.6.1.6" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationModeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "cluster", section: "4.2.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "Normal", id: 0x0, conformance: "M",
                            details: "If the pump is running in this operation mode the setpoint is an internal variable which MAY be " +
                                     "controlled between 0% and 100%, e.g., by means of the Level Control cluster",
                            xref: { document: "cluster", section: "4.2.6.2.1" }
                        },

                        {
                            tag: "datatype", name: "Minimum", id: 0x1, conformance: "SPD",
                            xref: { document: "cluster", section: "4.2.6.2" }
                        },

                        {
                            tag: "datatype", name: "Maximum", id: 0x2, conformance: "SPD",
                            xref: { document: "cluster", section: "4.2.6.2" }
                        },

                        {
                            tag: "datatype", name: "Local", id: 0x3, conformance: "LOCAL",
                            xref: { document: "cluster", section: "4.2.6.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ControlModeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "cluster", section: "4.2.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "ConstantSpeed", id: 0x0, conformance: "SPD",
                            details: "The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – " +
                                     "MaxConstSpeed] attributes",
                            xref: { document: "cluster", section: "4.2.6.3.1" }
                        },

                        {
                            tag: "datatype", name: "ConstantPressure", id: 0x1, conformance: "P, RSCONST",
                            details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                                     "In case of the internal pressure sensor, this will be the range derived from the [MinConstPressure" +
                                     " – MaxConstPressure] attributes. In case of a remote pressure sensor, this will be the range derived" +
                                     " from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote pressure sensor",
                            xref: { document: "cluster", section: "4.2.6.3.2" }
                        },

                        {
                            tag: "datatype", name: "ProportionalPressure", id: 0x2, conformance: "P, RSCOMP",
                            details: "The setpoint is interpreted as a percentage of the range derived of the [MinCompPressure – " +
                                     "MaxCompPressure] attributes. The internal setpoint will be lowered (compensated) dependent on the " +
                                     "flow in the pump (lower flow ⇒ lower internal setpoint",
                            xref: { document: "cluster", section: "4.2.6.3.3" }
                        },

                        {
                            tag: "datatype", name: "ConstantFlow", id: 0x3, conformance: "FLW",
                            details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                                     "In case of the internal flow sensor, this will be the range derived from the [MinConstFlow – " +
                                     "MaxConstFlow] attributes. In case of a remote flow sensor, this will be the range derived from the [" +
                                     "MinMeasuredValue – MaxMeasuredValue] attributes of the remote flow sensor",
                            xref: { document: "cluster", section: "4.2.6.3.4" }
                        },

                        {
                            tag: "datatype", name: "ConstantTemperature", id: 0x5, conformance: "TEMP",
                            details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                                     "In case of the internal temperature sensor, this will be the range derived from the [MinConstTemp – " +
                                     "MaxConstTemp] attributes. In case of a remote temperature sensor, this will be the range derived " +
                                     "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote temperature sensor",
                            xref: { document: "cluster", section: "4.2.6.3.5" }
                        },

                        {
                            tag: "datatype", name: "Automatic", id: 0x7, conformance: "AUTO",
                            details: "This behavior is manufacturer defined. The pump can be stopped by setting the setpoint of the level " +
                                     "control cluster to 0, or by using the On/Off cluster. If the pump is started (at any setpoint), the " +
                                     "speed of the pump is entirely determined by the pump",
                            xref: { document: "cluster", section: "4.2.6.3.6" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Thermostat", id: 0x201, classification: "application",
            xref: { document: "cluster", section: "4.3" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "HEAT", id: 0x0, conformance: "AUTO, O.a1+",
                            description: "Thermostat is capable of managing a heating device",
                            xref: { document: "cluster", section: "4.3.3.1" }
                        },

                        {
                            tag: "datatype", name: "COOL", id: 0x1, conformance: "AUTO, O.a1+",
                            description: "Thermostat is capable of managing a cooling device",
                            xref: { document: "cluster", section: "4.3.3.1" }
                        },

                        {
                            tag: "datatype", name: "OCC", id: 0x2, conformance: "O",
                            description: "Supports Occupied and Unoccupied setpoints",
                            xref: { document: "cluster", section: "4.3.3.1" }
                        },

                        {
                            tag: "datatype", name: "SCH", id: 0x3, conformance: "O",
                            description: "Supports remote configuration of a weekly schedule of setpoint transitions",
                            xref: { document: "cluster", section: "4.3.3.1" }
                        },

                        {
                            tag: "datatype", name: "SB", id: 0x4, conformance: "O",
                            description: "Supports configurable setback (or span)",
                            xref: { document: "cluster", section: "4.3.3.1" }
                        },

                        {
                            tag: "datatype", name: "AUTO", id: 0x5, conformance: "O",
                            description: "Supports a System Mode of Auto",
                            xref: { document: "cluster", section: "4.3.3.1" }
                        },

                        {
                            tag: "datatype", name: "LTNE", id: 0x6, conformance: "O",
                            description: "Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute",
                            xref: { document: "cluster", section: "4.3.3.1" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "LocalTemperature", id: 0x0, type: "temperature", access: "R V",
                    conformance: "M", default: undefined, quality: "X P",
                    details: "This attribute indicates the current LocalTemperature value, when available. The value may be local" +
                             ", or remote, depending on the value of the RemoteSensing attribute when supported",
                    xref: { document: "cluster", section: "4.3.7.2" }
                },

                {
                    tag: "attribute", name: "OutdoorTemperature", id: 0x1, type: "temperature", access: "R V",
                    conformance: "O", default: undefined, quality: "X",
                    details: "This attribute represents the outdoor temperature, as measured locally or remotely (over the network",
                    xref: { document: "cluster", section: "4.3.7.3" }
                },

                {
                    tag: "attribute", name: "Occupancy", id: 0x2, type: "map8", access: "R V", conformance: "O, CC",
                    constraint: "desc", default: 1,
                    details: "This attribute specifies whether the heated/cooled space is occupied or not, as measured locally or " +
                             "remotely (over the network). If bit 0 = 1, the space is occupied, else it is unoccupied. All other " +
                             "bits are reserved",
                    xref: { document: "cluster", section: "4.3.7.4" }
                },

                {
                    tag: "attribute", name: "AbsMinHeatSetpointLimit", id: 0x3, type: "temperature", access: "R V",
                    conformance: "[HEAT]", constraint: "desc", default: 700, quality: "F",
                    details: "This attribute specifies the absolute minimum level that the heating setpoint MAY be set to. This is" +
                             " a limitation imposed by the manufacturer",
                    xref: { document: "cluster", section: "4.3.7.5" }
                },

                {
                    tag: "attribute", name: "AbsMaxHeatSetpointLimit", id: 0x4, type: "temperature", access: "R V",
                    conformance: "[HEAT]", constraint: "desc", default: 3000, quality: "F",
                    details: "This attribute specifies the absolute maximum level that the heating setpoint MAY be set to. This is" +
                             " a limitation imposed by the manufacturer",
                    xref: { document: "cluster", section: "4.3.7.6" }
                },

                {
                    tag: "attribute", name: "AbsMinCoolSetpointLimit", id: 0x5, type: "temperature", access: "R V",
                    conformance: "[COOL]", constraint: "desc", default: 1600, quality: "F",
                    details: "This attribute specifies the absolute minimum level that the cooling setpoint MAY be set to. This is" +
                             " a limitation imposed by the manufacturer",
                    xref: { document: "cluster", section: "4.3.7.7" }
                },

                {
                    tag: "attribute", name: "AbsMaxCoolSetpointLimit", id: 0x6, type: "temperature", access: "R V",
                    conformance: "[COOL]", constraint: "desc", default: 3200, quality: "F",
                    details: "This attribute specifies the absolute maximum level that the cooling setpoint MAY be set to. This is" +
                             " a limitation imposed by the manufacturer",
                    xref: { document: "cluster", section: "4.3.7.8" }
                },

                {
                    tag: "attribute", name: "PiCoolingDemand", id: 0x7, type: "uint8", access: "R V",
                    conformance: "[COOL]", quality: "P",
                    details: "This attribute specifies the level of cooling demanded by the PI (proportional integral) control " +
                             "loop in use by the thermostat (if any), in percent. This value is 0 when the thermostat is in “off” " +
                             "or “heating” mode",
                    xref: { document: "cluster", section: "4.3.7.9" }
                },

                {
                    tag: "attribute", name: "PiHeatingDemand", id: 0x8, type: "uint8", access: "R V",
                    conformance: "[HEAT]", quality: "P",
                    details: "This attribute specifies the level of heating demanded by the PI loop in percent. This value is 0 " +
                             "when the thermostat is in “off” or “cooling” mode",
                    xref: { document: "cluster", section: "4.3.7.10" }
                },

                {
                    tag: "attribute", name: "HvacSystemTypeConfiguration", id: 0x9, type: "map8", access: "R[W] VM",
                    conformance: "D", constraint: "desc", default: 0, quality: "N",
                    details: "This attribute specifies the HVAC system type controlled by the thermostat. If the thermostat uses " +
                             "physical DIP switches to set these parameters, this information SHALL be available read-only from " +
                             "the DIP switches. If these parameters are set via software, there SHALL be read/write access in " +
                             "order to provide remote programming capability. The meanings of individual bits are detailed below. " +
                             "Each bit represents a type of system configuration",
                    xref: { document: "cluster", section: "4.3.7.11" },
                    children: [
                        {
                            tag: "datatype", name: "CoolingStage", id: 0x0,
                            description: "00 – Cool Stage 101 – Cool Stage 210 – Cool Stage 311 – Reserved",
                            xref: { document: "cluster", section: "4.3.7.11" }
                        },

                        {
                            tag: "datatype", name: "HeatingStage", id: 0x2,
                            description: "00 – Heat Stage 101 – Heat Stage 210 – Heat Stage 311 – Reserved",
                            xref: { document: "cluster", section: "4.3.7.11" }
                        },

                        {
                            tag: "datatype", name: "HeatingType", id: 0x4, description: "0 – Conventional1 – Heat Pump",
                            xref: { document: "cluster", section: "4.3.7.11" }
                        },

                        {
                            tag: "datatype", name: "HeatingFuel", id: 0x5, description: "0 – Electric / B1 – Gas / O",
                            xref: { document: "cluster", section: "4.3.7.11" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "LocalTemperatureCalibration", id: 0x10, type: "temp-s8", access: "RW VM",
                    conformance: "[!LTNE]", constraint: "-2.5 to 2.5", default: 0, quality: "N",
                    details: "This attribute specifies the offset the Thermostat server SHALL make to the measured temperature (" +
                             "locally or remotely) to adjust the LocalTemperature Value prior to using, displaying or reporting it",
                    xref: { document: "cluster", section: "4.3.7.12" }
                },

                {
                    tag: "attribute", name: "OccupiedCoolingSetpoint", id: 0x11, type: "temperature", access: "RW VO",
                    conformance: "COOL", constraint: "desc", default: 2600, quality: "N S",
                    details: "This attribute specifies the cooling mode setpoint when the room is occupied",
                    xref: { document: "cluster", section: "4.3.7.13" }
                },

                {
                    tag: "attribute", name: "OccupiedHeatingSetpoint", id: 0x12, type: "temperature", access: "RW VO",
                    conformance: "HEAT", constraint: "desc", default: 2000, quality: "N S",
                    details: "This attribute specifies the heating mode setpoint when the room is occupied",
                    xref: { document: "cluster", section: "4.3.7.14" }
                },

                {
                    tag: "attribute", name: "UnoccupiedCoolingSetpoint", id: 0x13, type: "temperature", access: "RW VO",
                    conformance: "COOL & O, CC", constraint: "desc", default: 2600, quality: "N",
                    details: "This attribute specifies the cooling mode setpoint when the room is unoccupied",
                    xref: { document: "cluster", section: "4.3.7.15" }
                },

                {
                    tag: "attribute", name: "UnoccupiedHeatingSetpoint", id: 0x14, type: "temperature", access: "RW VO",
                    conformance: "HEAT & O, CC", constraint: "desc", default: 2000, quality: "N",
                    details: "This attribute specifies the heating mode setpoint when the room is unoccupied",
                    xref: { document: "cluster", section: "4.3.7.16" }
                },

                {
                    tag: "attribute", name: "MinHeatSetpointLimit", id: 0x15, type: "temperature", access: "RW VM",
                    conformance: "[HEAT]", constraint: "desc", default: "AbsMinHeatSetpointLimit", quality: "N",
                    details: "This attribute specifies the minimum level that the heating setpoint MAY be set to",
                    xref: { document: "cluster", section: "4.3.7.17" }
                },

                {
                    tag: "attribute", name: "MaxHeatSetpointLimit", id: 0x16, type: "temperature", access: "RW VM",
                    conformance: "[HEAT]", constraint: "desc", default: "AbsMaxHeatSetpointLimit", quality: "N",
                    details: "This attribute specifies the maximum level that the heating setpoint MAY be set to",
                    xref: { document: "cluster", section: "4.3.7.18" }
                },

                {
                    tag: "attribute", name: "MinCoolSetpointLimit", id: 0x17, type: "temperature", access: "RW VM",
                    conformance: "[COOL]", constraint: "desc", default: "AbsMinCoolSetpointLimit", quality: "N",
                    details: "This attribute specifies the minimum level that the cooling setpoint MAY be set to",
                    xref: { document: "cluster", section: "4.3.7.19" }
                },

                {
                    tag: "attribute", name: "MaxCoolSetpointLimit", id: 0x18, type: "temperature", access: "RW VM",
                    conformance: "[COOL]", constraint: "desc", default: "AbsMaxCoolSetpointLimit", quality: "N",
                    details: "This attribute specifies the maximum level that the cooling setpoint MAY be set to",
                    xref: { document: "cluster", section: "4.3.7.20" }
                },

                {
                    tag: "attribute", name: "MinSetpointDeadBand", id: 0x19, type: "temp-s8", access: "R[W] VM",
                    conformance: "AUTO", constraint: "0 to 2.5", default: 250, quality: "N",
                    details: "On devices which support the AUTO feature, this attribute specifies the minimum difference between " +
                             "the Heat Setpoint and the Cool Setpoint",
                    xref: { document: "cluster", section: "4.3.7.21" }
                },

                {
                    tag: "attribute", name: "RemoteSensing", id: 0x1a, type: "map8", access: "RW VM", conformance: "O",
                    constraint: "0", default: 0, quality: "N",
                    details: "This attribute indicates when the local temperature, outdoor temperature and occupancy are being " +
                             "sensed by remote networked sensors, rather than internal sensors",
                    xref: { document: "cluster", section: "4.3.7.22" },
                    children: [
                        {
                            tag: "datatype", name: "LocalTemperature", id: 0x0,
                            description: "When set, LocalTemperature Value is derived from a remote node",
                            xref: { document: "cluster", section: "4.3.7.22" }
                        },

                        {
                            tag: "datatype", name: "OutdoorTemperature", id: 0x1,
                            description: "When set, OutdoorTemperature is derived from a remote node",
                            xref: { document: "cluster", section: "4.3.7.22" }
                        },

                        {
                            tag: "datatype", name: "Occupancy", id: 0x2,
                            description: "When set, Occupancy is derived from a remote node",
                            xref: { document: "cluster", section: "4.3.7.22" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ControlSequenceOfOperation", id: 0x1b, type: "enum8", access: "RW VM",
                    conformance: "M", constraint: "desc", default: 4, quality: "N",
                    details: "This attribute specifies the overall operating environment of the thermostat, and thus the possible " +
                             "system modes that the thermostat can operate in. It SHALL be set to one of the following values",
                    xref: { document: "cluster", section: "4.3.7.23" },
                    children: [
                        {
                            tag: "datatype", name: "CoolingOnly", id: 0x0, conformance: "[COOL]",
                            description: "Heat and Emergency are not possible",
                            xref: { document: "cluster", section: "4.3.7.23" }
                        },

                        {
                            tag: "datatype", name: "CoolingWithReheat", id: 0x1, conformance: "[COOL]",
                            description: "Heat and Emergency are not possible",
                            xref: { document: "cluster", section: "4.3.7.23" }
                        },

                        {
                            tag: "datatype", name: "HeatingOnly", id: 0x2, conformance: "[HEAT]",
                            description: "Cool and precooling (see Terms) are not possible",
                            xref: { document: "cluster", section: "4.3.7.23" }
                        },

                        {
                            tag: "datatype", name: "HeatingWithReheat", id: 0x3, conformance: "[HEAT]",
                            description: "Cool and precooling are not possible",
                            xref: { document: "cluster", section: "4.3.7.23" }
                        },

                        {
                            tag: "datatype", name: "CoolingAndHeating", id: 0x4, conformance: "[HEAT & COOL]",
                            description: "All modes are possible",
                            xref: { document: "cluster", section: "4.3.7.23" }
                        },

                        {
                            tag: "datatype", name: "CoolingAndHeatingWithReheat", id: 0x5, conformance: "[HEAT & COOL]",
                            description: "All modes are possible",
                            xref: { document: "cluster", section: "4.3.7.23" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "SystemMode", id: 0x1c, type: "enum8", access: "RW VM", conformance: "M",
                    constraint: "desc", default: 1, quality: "N S",
                    details: "This attribute specifies the current operating mode of the thermostat, It SHALL be set to one of the" +
                             " following values, as limited by the ControlSequenceOfOperation Attribute",
                    xref: { document: "cluster", section: "4.3.7.24" },
                    children: [
                        {
                            tag: "datatype", name: "Off", id: 0x0, conformance: "O",
                            description: "The Thermostat does not generate demand for Cooling or Heating",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        },

                        {
                            tag: "datatype", name: "Auto", id: 0x1, conformance: "AUTO",
                            description: "Demand is generated for either Cooling or Heating, as required",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        },

                        {
                            tag: "datatype", name: "Cool", id: 0x3, conformance: "[COOL]",
                            description: "Demand is only generated for Cooling",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        },

                        {
                            tag: "datatype", name: "Heat", id: 0x4, conformance: "[HEAT]",
                            description: "Demand is only generated for Heating",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        },

                        {
                            tag: "datatype", name: "EmergencyHeat", id: 0x5, conformance: "[HEAT]",
                            description: "2nd stage heating is in use to achieve desired temperature",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        },

                        {
                            tag: "datatype", name: "Precooling", id: 0x6, conformance: "[COOL]", description: "(see Terms)",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        },

                        {
                            tag: "datatype", name: "Fanonly", id: 0x7, conformance: "O",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        },

                        {
                            tag: "datatype", name: "Dry", id: 0x8, conformance: "O",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        },

                        {
                            tag: "datatype", name: "Sleep", id: 0x9, conformance: "O",
                            xref: { document: "cluster", section: "4.3.7.24" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "AlarmMask", id: 0x1d, type: "map8", access: "R V", conformance: "O",
                    constraint: "desc", default: 0,
                    details: "This attribute specifies whether each of the alarms listed below is enabled. When the bit number " +
                             "corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not " +
                             "corresponding to a code in the table are reserved",
                    xref: { document: "cluster", section: "4.3.7.25" }
                },

                {
                    tag: "attribute", name: "ThermostatRunningMode", id: 0x1e, type: "enum8", access: "R V",
                    conformance: "[AUTO]", constraint: "desc", default: 0,
                    xref: { document: "cluster", section: "4.3.7" }
                },

                {
                    tag: "attribute", name: "StartOfWeek", id: 0x20, type: "enum8", access: "R V", conformance: "SCH",
                    constraint: "desc", default: "–", quality: "F",
                    details: "This attribute represents the day of the week that this thermostat considers to be the start of week" +
                             " for weekly set point scheduling",
                    xref: { document: "cluster", section: "4.3.7.27" },
                    children: [
                        {
                            tag: "datatype", name: "Sunday", id: 0x0, conformance: "M",
                            xref: { document: "cluster", section: "4.3.7.27" }
                        },

                        {
                            tag: "datatype", name: "Monday", id: 0x1, conformance: "M",
                            xref: { document: "cluster", section: "4.3.7.27" }
                        },

                        {
                            tag: "datatype", name: "Tuesday", id: 0x2, conformance: "M",
                            xref: { document: "cluster", section: "4.3.7.27" }
                        },

                        {
                            tag: "datatype", name: "Wednesday", id: 0x3, conformance: "M",
                            xref: { document: "cluster", section: "4.3.7.27" }
                        },

                        {
                            tag: "datatype", name: "Thursday", id: 0x4, conformance: "M",
                            xref: { document: "cluster", section: "4.3.7.27" }
                        },

                        {
                            tag: "datatype", name: "Friday", id: 0x5, conformance: "M",
                            xref: { document: "cluster", section: "4.3.7.27" }
                        },

                        {
                            tag: "datatype", name: "Saturday", id: 0x6, conformance: "M",
                            xref: { document: "cluster", section: "4.3.7.27" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "NumberOfWeeklyTransitions", id: 0x21, type: "uint8", access: "R V",
                    conformance: "SCH", default: 0, quality: "F",
                    details: "This attribute determines how many weekly schedule transitions the thermostat is capable of handling",
                    xref: { document: "cluster", section: "4.3.7.28" }
                },

                {
                    tag: "attribute", name: "NumberOfDailyTransitions", id: 0x22, type: "uint8", access: "R V",
                    conformance: "SCH", default: 0, quality: "F",
                    details: "This attribute determines how many daily schedule transitions the thermostat is capable of handling",
                    xref: { document: "cluster", section: "4.3.7.29" }
                },

                {
                    tag: "attribute", name: "TemperatureSetpointHold", id: 0x23, type: "enum8", access: "RW VM",
                    conformance: "O", constraint: "desc", default: 0, quality: "N",
                    details: "This attribute specifies the temperature hold status on the thermostat. If hold status is on, the " +
                             "thermostat SHOULD maintain the temperature set point for the current mode until a system mode change" +
                             ". If hold status is off, the thermostat SHOULD follow the setpoint transitions specified by its " +
                             "internal scheduling program. If the thermostat supports setpoint hold for a specific duration, it " +
                             "SHOULD also implement the TemperatureSetpointHoldDuration attribute",
                    xref: { document: "cluster", section: "4.3.7.30" },
                    children: [
                        {
                            tag: "datatype", name: "SetpointHoldOff", id: 0x0, conformance: "M",
                            description: "Follow scheduling program",
                            xref: { document: "cluster", section: "4.3.7.30" }
                        },

                        {
                            tag: "datatype", name: "SetpointHoldOn", id: 0x1, conformance: "M",
                            description: "Maintain current setpoint, regardless of schedule transitions",
                            xref: { document: "cluster", section: "4.3.7.30" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "TemperatureSetpointHoldDuration", id: 0x24, type: "uint16",
                    access: "RW VM", conformance: "O", constraint: "0 to 1440", default: undefined, quality: "X N",
                    details: "This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that " +
                             "support hold for a specified duration SHOULD implement this attribute. The null value indicates the " +
                             "field is unused. All other values are reserved",
                    xref: { document: "cluster", section: "4.3.7.31" }
                },

                {
                    tag: "attribute", name: "ThermostatProgrammingOperationMode", id: 0x25, type: "map8",
                    access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P",
                    details: "This attribute determines the operational state of the thermostat’s programming. The thermostat " +
                             "SHALL modify its programming operation when this attribute is modified by a client and update this " +
                             "attribute when its programming operation is modified locally by a user. The thermostat MAY support " +
                             "more than one active ThermostatProgrammingOperationMode. For example, the thermostat MAY operate " +
                             "simultaneously in Schedule Programming Mode and Recovery Mode",
                    xref: { document: "cluster", section: "4.3.7.32" },
                    children: [
                        {
                            tag: "datatype", name: "ScheduleActive", id: 0x0,
                            description: "Schedule programming mode. This enables any programmed weekly schedule configurations.",
                            xref: { document: "cluster", section: "4.3.7.32" }
                        },

                        {
                            tag: "datatype", name: "AutoRecovery", id: 0x1, description: "Auto/recovery mode",
                            xref: { document: "cluster", section: "4.3.7.32" }
                        },

                        {
                            tag: "datatype", name: "Economy", id: 0x2, description: "Economy/EnergyStar mode",
                            xref: { document: "cluster", section: "4.3.7.32" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ThermostatRunningState", id: 0x29, type: "map16", access: "R V",
                    conformance: "O", constraint: "desc",
                    details: "This attribute represents the current relay state of the heat, cool, and fan relays",
                    xref: { document: "cluster", section: "4.3.7.33" },
                    children: [
                        {
                            tag: "datatype", name: "Heat", id: 0x0, description: "Heat State On",
                            xref: { document: "cluster", section: "4.3.7.33" }
                        },

                        {
                            tag: "datatype", name: "Cool", id: 0x1, description: "Cool State On",
                            xref: { document: "cluster", section: "4.3.7.33" }
                        },

                        {
                            tag: "datatype", name: "Fan", id: 0x2, description: "Fan State On",
                            xref: { document: "cluster", section: "4.3.7.33" }
                        },

                        {
                            tag: "datatype", name: "HeatStage2", id: 0x3, description: "Heat 2nd Stage State On",
                            xref: { document: "cluster", section: "4.3.7.33" }
                        },

                        {
                            tag: "datatype", name: "CoolStage2", id: 0x4, description: "Cool 2nd Stage State On",
                            xref: { document: "cluster", section: "4.3.7.33" }
                        },

                        {
                            tag: "datatype", name: "FanStage2", id: 0x5, description: "Fan 2nd Stage State On",
                            xref: { document: "cluster", section: "4.3.7.33" }
                        },

                        {
                            tag: "datatype", name: "FanStage3", id: 0x6, description: "Fan 3rd Stage Stage On",
                            xref: { document: "cluster", section: "4.3.7.33" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "SetpointChangeSource", id: 0x30, type: "enum8", access: "R V",
                    conformance: "O", constraint: "desc", default: 0,
                    details: "This attribute specifies the source of the current active OccupiedCoolingSetpoint or " +
                             "OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint",
                    xref: { document: "cluster", section: "4.3.7.34" },
                    children: [
                        {
                            tag: "datatype", name: "Manual", id: 0x0, conformance: "O",
                            description: "Manual, user-initiated setpoint change via the thermostat",
                            xref: { document: "cluster", section: "4.3.7.34" }
                        },

                        {
                            tag: "datatype", name: "Schedule", id: 0x1, conformance: "[SCH]",
                            description: "Schedule/internal programming-initiated setpoint change",
                            xref: { document: "cluster", section: "4.3.7.34" }
                        },

                        {
                            tag: "datatype", name: "External", id: 0x2, conformance: "O",
                            description: "Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)",
                            xref: { document: "cluster", section: "4.3.7.34" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "SetpointChangeAmount", id: 0x31, type: "temp-diff", access: "R V",
                    conformance: "O", default: undefined, quality: "X",
                    details: "This attribute specifies the delta between the current active OccupiedCoolingSetpoint or " +
                             "OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the " +
                             "SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement " +
                             "SetpointChangeSource",
                    xref: { document: "cluster", section: "4.3.7.35" }
                },

                {
                    tag: "attribute", name: "SetpointChangeSourceTimestamp", id: 0x32, type: "utc", access: "R V",
                    conformance: "O", default: 0,
                    details: "This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change " +
                             "was recorded",
                    xref: { document: "cluster", section: "4.3.7.36" }
                },

                {
                    tag: "attribute", name: "OccupiedSetback", id: 0x34, type: "temp-u8", access: "RW VM",
                    conformance: "SB", constraint: "OccupiedSetbackMin to OccupiedSetbackMax", default: undefined,
                    quality: "X N",
                    details: "This attribute specifies the amount that the Thermostat server will allow the LocalTemperature Value" +
                             " to float above the OccupiedCooling setpoint (i.e., OccupiedCooling + OccupiedSetback) or below the " +
                             "OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) before initiating a state change " +
                             "to bring the temperature back to the user’s desired setpoint. This attribute is sometimes also " +
                             "referred to as the “span",
                    xref: { document: "cluster", section: "4.3.7.37" }
                },

                {
                    tag: "attribute", name: "OccupiedSetbackMin", id: 0x35, type: "temp-u8", access: "R V",
                    conformance: "SB", constraint: "0 to OccupiedSetbackMax", default: undefined, quality: "X F",
                    details: "This attribute specifies the minimum value that the Thermostat server will allow the OccupiedSetback" +
                             " attribute to be configured by a user",
                    xref: { document: "cluster", section: "4.3.7.38" }
                },

                {
                    tag: "attribute", name: "OccupiedSetbackMax", id: 0x36, type: "temp-u8", access: "R V",
                    conformance: "SB", constraint: "OccupiedSetbackMin to 25.4", default: undefined, quality: "X F",
                    details: "This attribute specifies the maximum value that the Thermostat server will allow the OccupiedSetback" +
                             " attribute to be configured by a user",
                    xref: { document: "cluster", section: "4.3.7.39" }
                },

                {
                    tag: "attribute", name: "UnoccupiedSetback", id: 0x37, type: "temp-u8", access: "RW VM",
                    conformance: "SB & O, CC", constraint: "UnoccupiedSetbackMin to UnoccupiedSetbackMax",
                    default: undefined, quality: "X N",
                    details: "This attribute specifies the amount that the Thermostat server will allow the LocalTemperature Value" +
                             " to float above the UnoccupiedCooling setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) or " +
                             "below the UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - UnoccupiedSetback) before initiating" +
                             " a state change to bring the temperature back to the user’s desired setpoint. This attribute is " +
                             "sometimes also referred to as the “span",
                    xref: { document: "cluster", section: "4.3.7.40" }
                },

                {
                    tag: "attribute", name: "UnoccupiedSetbackMin", id: 0x38, type: "temp-u8", access: "R V",
                    conformance: "SB & O, CC", constraint: "0 to UnoccupiedSetbackMax", default: undefined,
                    quality: "X F",
                    details: "This attribute specifies the minimum value that the Thermostat server will allow the " +
                             "UnoccupiedSetback attribute to be configured by a user",
                    xref: { document: "cluster", section: "4.3.7.41" }
                },

                {
                    tag: "attribute", name: "UnoccupiedSetbackMax", id: 0x39, type: "temp-u8", access: "R V",
                    conformance: "SB & O, CC", constraint: "UnoccupiedSetbackMin to 25.4", default: undefined,
                    quality: "X F",
                    details: "This attribute specifies the maximum value that the Thermostat server will allow the " +
                             "UnoccupiedSetback attribute to be configured by a user",
                    xref: { document: "cluster", section: "4.3.7.42" }
                },

                {
                    tag: "attribute", name: "EmergencyHeatDelta", id: 0x3a, type: "temp-u8", access: "RW VM",
                    conformance: "O", default: 2550, quality: "N",
                    details: "This attribute specifies the delta between the LocalTemperature Value and the " +
                             "OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint attributes at which the Thermostat server will " +
                             "operate in emergency heat mode",
                    xref: { document: "cluster", section: "4.3.7.43" }
                },

                {
                    tag: "attribute", name: "AcType", id: 0x40, type: "enum8", access: "RW VM", conformance: "O",
                    constraint: "desc", default: 0, quality: "N",
                    details: "This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how " +
                             "Cooling and Heating condition is achieved by Mini Split AC",
                    xref: { document: "cluster", section: "4.3.7.44" },
                    children: [
                        {
                            tag: "datatype", name: "Unknown", id: 0x0, conformance: "O", description: "Unknown AC Type",
                            xref: { document: "cluster", section: "4.3.7.44" }
                        },

                        {
                            tag: "datatype", name: "CoolingFixed", id: 0x1, conformance: "O",
                            description: "Cooling and Fixed Speed",
                            xref: { document: "cluster", section: "4.3.7.44" }
                        },

                        {
                            tag: "datatype", name: "HeatPumpFixed", id: 0x2, conformance: "O",
                            description: "Heat Pump and Fixed Speed",
                            xref: { document: "cluster", section: "4.3.7.44" }
                        },

                        {
                            tag: "datatype", name: "CoolingInverter", id: 0x3, conformance: "O",
                            description: "Cooling and Inverter",
                            xref: { document: "cluster", section: "4.3.7.44" }
                        },

                        {
                            tag: "datatype", name: "HeatPumpInverter", id: 0x4, conformance: "O",
                            description: "Heat Pump and Inverter",
                            xref: { document: "cluster", section: "4.3.7.44" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "AcCapacity", id: 0x41, type: "uint16", access: "RW VM", conformance: "O",
                    default: 0, quality: "N",
                    details: "This attribute indicates capacity of Mini Split AC in terms of the format defined by the " +
                             "ACCapacityFormat attribute",
                    xref: { document: "cluster", section: "4.3.7.45" }
                },

                {
                    tag: "attribute", name: "AcRefrigerantType", id: 0x42, type: "enum8", access: "RW VM",
                    conformance: "O", constraint: "desc", default: 0, quality: "N",
                    details: "This attribute indicates type of refrigerant used within the Mini Split AC",
                    xref: { document: "cluster", section: "4.3.7.46" },
                    children: [
                        {
                            tag: "datatype", name: "Unknown", id: 0x0, conformance: "O",
                            description: "Unknown Refrigerant Type",
                            xref: { document: "cluster", section: "4.3.7.46" }
                        },

                        {
                            tag: "datatype", name: "R22", id: 0x1, conformance: "O", description: "R22 Refrigerant",
                            xref: { document: "cluster", section: "4.3.7.46" }
                        },

                        {
                            tag: "datatype", name: "R410A", id: 0x2, conformance: "O", description: "R410a Refrigerant",
                            xref: { document: "cluster", section: "4.3.7.46" }
                        },

                        {
                            tag: "datatype", name: "R407C", id: 0x3, conformance: "O", description: "R407c Refrigerant",
                            xref: { document: "cluster", section: "4.3.7.46" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "AcCompressorType", id: 0x43, type: "enum8", access: "RW VM",
                    conformance: "O", constraint: "desc", default: 0, quality: "N",
                    details: "This attribute indicates type of Compressor used within the Mini Split AC",
                    xref: { document: "cluster", section: "4.3.7.47" },
                    children: [
                        {
                            tag: "datatype", name: "Unknown", id: 0x0, conformance: "O", description: "Unknown compressor type",
                            xref: { document: "cluster", section: "4.3.7.47" }
                        },

                        {
                            tag: "datatype", name: "T1", id: 0x1, conformance: "O", description: "Max working ambient 43 °C",
                            xref: { document: "cluster", section: "4.3.7.47" }
                        },

                        {
                            tag: "datatype", name: "T2", id: 0x2, conformance: "O", description: "Max working ambient 35 °C",
                            xref: { document: "cluster", section: "4.3.7.47" }
                        },

                        {
                            tag: "datatype", name: "T3", id: 0x3, conformance: "O", description: "Max working ambient 52 °C",
                            xref: { document: "cluster", section: "4.3.7.47" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "AcErrorCode", id: 0x44, type: "map32", access: "RW VM", conformance: "O",
                    default: 0,
                    details: "This attribute indicates the type of errors encountered within the Mini Split AC. Error values are " +
                             "reported with four bytes values. Each bit within the four bytes indicates the unique error",
                    xref: { document: "cluster", section: "4.3.7.48" },
                    children: [
                        {
                            tag: "datatype", name: "CompressorFail", id: 0x0,
                            description: "Compressor Failure or Refrigerant Leakage",
                            xref: { document: "cluster", section: "4.3.7.48" }
                        },

                        {
                            tag: "datatype", name: "RoomSensorFail", id: 0x1, description: "Room Temperature Sensor Failure",
                            xref: { document: "cluster", section: "4.3.7.48" }
                        },

                        {
                            tag: "datatype", name: "OutdoorSensorFail", id: 0x2,
                            description: "Outdoor Temperature Sensor Failure",
                            xref: { document: "cluster", section: "4.3.7.48" }
                        },

                        {
                            tag: "datatype", name: "CoilSensorFail", id: 0x3,
                            description: "Indoor Coil Temperature Sensor Failure",
                            xref: { document: "cluster", section: "4.3.7.48" }
                        },

                        {
                            tag: "datatype", name: "FanFail", id: 0x4, description: "Fan Failure",
                            xref: { document: "cluster", section: "4.3.7.48" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "AcLouverPosition", id: 0x45, type: "enum8", access: "RW VM",
                    conformance: "O", constraint: "desc", default: 0, quality: "N",
                    details: "This attribute indicates the position of Louver on the AC",
                    xref: { document: "cluster", section: "4.3.7.49" },
                    children: [
                        {
                            tag: "datatype", name: "Closed", id: 0x1, conformance: "O", description: "Fully Closed",
                            xref: { document: "cluster", section: "4.3.7.49" }
                        },

                        {
                            tag: "datatype", name: "Open", id: 0x2, conformance: "O", description: "Fully Open",
                            xref: { document: "cluster", section: "4.3.7.49" }
                        },

                        {
                            tag: "datatype", name: "Quarter", id: 0x3, conformance: "O", description: "Quarter Open",
                            xref: { document: "cluster", section: "4.3.7.49" }
                        },

                        {
                            tag: "datatype", name: "Half", id: 0x4, conformance: "O", description: "Half Open",
                            xref: { document: "cluster", section: "4.3.7.49" }
                        },

                        {
                            tag: "datatype", name: "ThreeQuarters", id: 0x5, conformance: "O",
                            description: "Three Quarters Open",
                            xref: { document: "cluster", section: "4.3.7.49" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "AcCoilTemperature", id: 0x46, type: "temperature", access: "R V",
                    conformance: "O", default: undefined, quality: "X",
                    details: "This attribute represents the temperature of the AC coil, as measured locally or remotely (over the " +
                             "network",
                    xref: { document: "cluster", section: "4.3.7.50" }
                },

                {
                    tag: "attribute", name: "AcCapacityFormat", id: 0x47, type: "enum8", access: "RW VM",
                    conformance: "O", constraint: "desc", default: 0, quality: "N",
                    details: "This attribute specifies the format for the ACCapacity attribute",
                    xref: { document: "cluster", section: "4.3.7.51" },
                    children: [
                        {
                            tag: "datatype", name: "BtUh", id: 0x0, conformance: "O",
                            description: "British Thermal Unit per Hour",
                            xref: { document: "cluster", section: "4.3.7.51" }
                        }
                    ]
                },

                {
                    tag: "command", name: "SetpointRaiseLower", id: 0x0, access: "O", conformance: "M",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", name: "SetWeeklySchedule", id: 0x1, access: "M", conformance: "SCH",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", name: "GetWeeklySchedule", id: 0x2, access: "O", conformance: "SCH",
                    direction: "request", response: "GetWeeklyScheduleResponse",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", name: "ClearWeeklySchedule", id: 0x3, access: "M", conformance: "SCH",
                    direction: "request",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", name: "GetRelayStatusLog", id: 0x4, access: "O", conformance: "O",
                    direction: "request", response: "GetRelayStatusLogResponse",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", name: "GetWeeklyScheduleResponse", id: 0x0, conformance: "SCH",
                    direction: "response",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "command", name: "GetRelayStatusLogResponse", id: 0x1, conformance: "O", direction: "response",
                    xref: { document: "cluster", section: "4.3.8" }
                },

                {
                    tag: "datatype", name: "temperature", type: "int16", description: "Temperature",
                    details: "This type, derived from int16, represents a temperature on the Celsius scale with a resolution of 0." +
                             "01°C",
                    xref: { document: "cluster", section: "4.3.9.1" }
                },

                {
                    tag: "datatype", name: "temp-diff", type: "int16", description: "Temperature Difference",
                    details: "This type, derived from int16, represents a temperature difference with a resolution of 0.01°C",
                    xref: { document: "cluster", section: "4.3.9.2" }
                },

                {
                    tag: "datatype", name: "temp-s8", type: "int8", description: "Signed Temperature (°C x 10)",
                    details: "This type, derived from int8, represents a temperature from -12.7°C to 12.7°C with a resolution of 0" +
                             ".1°C",
                    xref: { document: "cluster", section: "4.3.9.3" }
                },

                {
                    tag: "datatype", name: "temp-u8", type: "uint8", description: "Unsigned Temperature (°C x 10)",
                    details: "This type, derived from uint8, represents a temperature from 0°C to 25.5°C with a resolution of 0.1°" +
                             "C",
                    xref: { document: "cluster", section: "4.3.9.4" }
                },

                {
                    tag: "datatype", name: "ThermostatScheduleTransition", type: "struct",
                    details: "This represents a single transition in a Thermostat schedule",
                    xref: { document: "cluster", section: "4.3.9.5" },
                    children: [
                        {
                            tag: "datatype", name: "TransitionTime", id: 0x0, type: "uint16", access: "RW", conformance: "M",
                            constraint: "0 to 1439",
                            details: "This field represents the start time of the schedule transition during the associated day. The time " +
                                     "will be represented by a 16 bits unsigned integer to designate the minutes since midnight. For " +
                                     "example, 6am will be represented by 360 minutes since midnight and 11:30pm will be represented by " +
                                     "1410 minutes since midnight",
                            xref: { document: "cluster", section: "4.3.9.5.1" }
                        },

                        {
                            tag: "datatype", name: "HeatSetpoint", id: 0x1, type: "temperature", access: "RW", conformance: "M",
                            xref: { document: "cluster", section: "4.3.9.5" }
                        },

                        {
                            tag: "datatype", name: "CoolSetpoint", id: 0x2, type: "temperature", access: "RW", conformance: "M",
                            xref: { document: "cluster", section: "4.3.9.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HeatSetpoint",
                    details: "This field represents the heat setpoint to be applied at this associated transition start time",
                    xref: { document: "cluster", section: "4.3.9.6" }
                },

                {
                    tag: "datatype", name: "CoolSetpoint",
                    details: "This field represents the cool setpoint to be applied at this associated transition start time",
                    xref: { document: "cluster", section: "4.3.9.7" }
                }
            ]
        },

        {
            tag: "cluster", name: "FanControl", id: 0x202, classification: "application",
            xref: { document: "cluster", section: "4.4" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "MULTISPEED", id: 0x0, description: "1-100 speeds",
                            xref: { document: "cluster", section: "4.4.5" }
                        },

                        {
                            tag: "datatype", name: "AUTO", id: 0x1, description: "Automatic mode supported for fan speed",
                            xref: { document: "cluster", section: "4.4.5" }
                        },

                        {
                            tag: "datatype", name: "ROCKING", id: 0x2, description: "Rocking movement supported",
                            xref: { document: "cluster", section: "4.4.5" }
                        },

                        {
                            tag: "datatype", name: "WIND", id: 0x3, description: "Wind emulation supported",
                            xref: { document: "cluster", section: "4.4.5" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "FanMode", id: 0x0, type: "enum8", access: "RW VO", conformance: "M",
                    constraint: "0 to 6", default: 0, quality: "N",
                    details: "This attribute SHALL indicate the current speed mode of the fan. This attribute MAY be written by " +
                             "the client to indicate a new speed mode of the fan. This attribute SHALL be set to one of the values" +
                             " in the table below",
                    xref: { document: "cluster", section: "4.4.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "Off", id: 0x0, conformance: "M",
                            xref: { document: "cluster", section: "4.4.6.1" }
                        },

                        {
                            tag: "datatype", name: "Low", id: 0x1, conformance: "desc",
                            xref: { document: "cluster", section: "4.4.6.1" }
                        },

                        {
                            tag: "datatype", name: "Medium", id: 0x2, conformance: "desc",
                            xref: { document: "cluster", section: "4.4.6.1" }
                        },

                        {
                            tag: "datatype", name: "High", id: 0x3, conformance: "desc",
                            xref: { document: "cluster", section: "4.4.6.1" }
                        },

                        {
                            tag: "datatype", name: "On", id: 0x4, conformance: "D",
                            xref: { document: "cluster", section: "4.4.6.1" }
                        },

                        {
                            tag: "datatype", name: "Auto", id: 0x5, conformance: "AUT",
                            xref: { document: "cluster", section: "4.4.6.1" }
                        },

                        {
                            tag: "datatype", name: "Smart", id: 0x6, conformance: "D",
                            xref: { document: "cluster", section: "4.4.6.1" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "FanModeSequence", id: 0x1, type: "enum8", access: "R[W] VO",
                    conformance: "M", constraint: "0 to 5", quality: "N",
                    details: "This indicates the fan speed ranges that SHALL be supported",
                    xref: { document: "cluster", section: "4.4.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "OffLowMedHigh", id: 0x0, conformance: "O.a1",
                            xref: { document: "cluster", section: "4.4.6.2" }
                        },

                        {
                            tag: "datatype", name: "OffLowHigh", id: 0x1, conformance: "O.a1",
                            xref: { document: "cluster", section: "4.4.6.2" }
                        },

                        {
                            tag: "datatype", name: "OffLowMedHighAuto", id: 0x2, conformance: "[AUT]",
                            xref: { document: "cluster", section: "4.4.6.2" }
                        },

                        {
                            tag: "datatype", name: "OffLowHighAuto", id: 0x3, conformance: "[AUT]",
                            xref: { document: "cluster", section: "4.4.6.2" }
                        },

                        {
                            tag: "datatype", name: "OffOnAuto", id: 0x4, conformance: "[AUT]",
                            xref: { document: "cluster", section: "4.4.6.2" }
                        },

                        {
                            tag: "datatype", name: "OffOn", id: 0x5, conformance: "O.a1",
                            xref: { document: "cluster", section: "4.4.6.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "PercentSetting", id: 0x2, type: "uint8", access: "RW VO", conformance: "M",
                    constraint: "0 to 100", default: 0, quality: "X",
                    details: "This attribute SHALL indicate the speed setting for the fan. This attribute MAY be written by the " +
                             "client to indicate a new fan speed. If the client writes null to this attribute, the attribute value" +
                             " SHALL NOT change. If this is set to 0, the server SHALL set the FanMode attribute value to Off",
                    xref: { document: "cluster", section: "4.4.6.3" }
                },

                {
                    tag: "attribute", name: "PercentCurrent", id: 0x3, type: "uint8", access: "R V", conformance: "M",
                    constraint: "0 to 100",
                    details: "This attribute SHALL indicate the actual currently operating fan speed, or zero to indicate that the" +
                             " fan is off. See Section 4.4.6.3.1 for more details",
                    xref: { document: "cluster", section: "4.4.6.4" }
                },

                {
                    tag: "attribute", name: "SpeedMax", id: 0x4, type: "uint8", access: "R V", conformance: "SPD",
                    constraint: "1 to 100", quality: "F",
                    details: "This attribute SHALL indicate that the fan has one speed (value of 1) or the maximum speed, if the " +
                             "fan is capable of multiple speeds",
                    xref: { document: "cluster", section: "4.4.6.5" }
                },

                {
                    tag: "attribute", name: "SpeedSetting", id: 0x5, type: "uint8", access: "RW VO", conformance: "SPD",
                    constraint: "0 to SpeedMax", default: 0, quality: "X",
                    details: "This attribute SHALL indicate the speed setting for the fan. This attribute MAY be written by the " +
                             "client to indicate a new fan speed. If the client writes null to this attribute, the attribute value" +
                             " SHALL NOT change. If this is set to 0, the server SHALL set the FanMode attribute value to Off. " +
                             "Please see the Section 4.4.6.6.1 for details on other values",
                    xref: { document: "cluster", section: "4.4.6.6" }
                },

                {
                    tag: "attribute", name: "SpeedCurrent", id: 0x6, type: "uint8", access: "R V", conformance: "SPD",
                    constraint: "0 to SpeedMax", quality: "P",
                    details: "This attribute SHALL indicate the actual currently operating fan speed, or zero to indicate that the" +
                             " fan is off",
                    xref: { document: "cluster", section: "4.4.6.7" }
                },

                {
                    tag: "attribute", name: "RockSupport", id: 0x7, type: "map8", access: "R V", conformance: "RCK",
                    constraint: "desc", default: 0, quality: "F",
                    details: "This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is " +
                             "shown in the table below",
                    xref: { document: "cluster", section: "4.4.6.8" },
                    children: [
                        {
                            tag: "datatype", name: "RockLeftRight", id: 0x0,
                            xref: { document: "cluster", section: "4.4.6.8" }
                        },

                        {
                            tag: "datatype", name: "RockUpDown", id: 0x1,
                            xref: { document: "cluster", section: "4.4.6.8" }
                        },

                        {
                            tag: "datatype", name: "RockRound", id: 0x2,
                            xref: { document: "cluster", section: "4.4.6.8" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "RockSetting", id: 0x8, type: "map8", access: "RW VO", conformance: "RCK",
                    constraint: "desc", default: 0, quality: "P",
                    details: "This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit " +
                             "SHALL only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise" +
                             " a status code of CONSTRAINT_ERROR SHALL be returned",
                    xref: { document: "cluster", section: "4.4.6.9" },
                    children: [
                        {
                            tag: "datatype", name: "RockLeftRight", id: 0x0,
                            xref: { document: "cluster", section: "4.4.6.9" }
                        },

                        {
                            tag: "datatype", name: "RockUpDown", id: 0x1,
                            xref: { document: "cluster", section: "4.4.6.9" }
                        },

                        {
                            tag: "datatype", name: "RockRound", id: 0x2,
                            xref: { document: "cluster", section: "4.4.6.9" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "WindSupport", id: 0x9, type: "map8", access: "R V", conformance: "WND",
                    constraint: "desc", default: 0, quality: "F",
                    details: "This attribute is a bitmap that indicates what wind modes the server supports. At least one wind " +
                             "mode bit SHALL be set. The bitmap is shown in the table below",
                    xref: { document: "cluster", section: "4.4.6.10" },
                    children: [
                        {
                            tag: "datatype", name: "SleepWind", id: 0x0,
                            xref: { document: "cluster", section: "4.4.6.10" }
                        },

                        {
                            tag: "datatype", name: "NaturalWind", id: 0x1,
                            xref: { document: "cluster", section: "4.4.6.10" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "WindSetting", id: 0xa, type: "map8", access: "RW VO", conformance: "WND",
                    constraint: "desc", default: 0, quality: "P",
                    details: "This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit " +
                             "SHALL only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise" +
                             " a status code of CONSTRAINT_ERROR SHALL be returned",
                    xref: { document: "cluster", section: "4.4.6.11" },
                    children: [
                        {
                            tag: "datatype", name: "SleepWind", id: 0x0,
                            xref: { document: "cluster", section: "4.4.6.11" }
                        },

                        {
                            tag: "datatype", name: "NaturalWind", id: 0x1,
                            xref: { document: "cluster", section: "4.4.6.11" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ThermostatUserInterfaceConfiguration", id: 0x204,
            classification: "application",
            xref: { document: "cluster", section: "4.5" },
            children: [
                {
                    tag: "attribute", name: "TemperatureDisplayMode", id: 0x0, type: "enum8", access: "RW VO",
                    conformance: "M", constraint: "desc", default: "0(Celsius)",
                    details: "The TemperatureDisplayMode attribute specifies the units of the temperature displayed on the " +
                             "thermostat screen",
                    xref: { document: "cluster", section: "4.5.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Celsius", id: 0x0, conformance: "M",
                            description: "Temperature displayed in °C",
                            xref: { document: "cluster", section: "4.5.5.1" }
                        },

                        {
                            tag: "datatype", name: "Fahrenheit", id: 0x1, conformance: "M",
                            description: "Temperature displayed in °F",
                            xref: { document: "cluster", section: "4.5.5.1" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "KeypadLockout", id: 0x1, type: "enum8", access: "RW VM", conformance: "M",
                    constraint: "desc", default: "0(nolockout)",
                    details: "The KeypadLockout attribute specifies the level of functionality that is available to the user via " +
                             "the keypad",
                    xref: { document: "cluster", section: "4.5.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "NoLockout", id: 0x0, conformance: "M",
                            description: "All functionality available to the user",
                            xref: { document: "cluster", section: "4.5.5.2" }
                        },

                        {
                            tag: "datatype", name: "Lockout1", id: 0x1, conformance: "M",
                            description: "Level 1 reduced functionality",
                            xref: { document: "cluster", section: "4.5.5.2" }
                        },

                        {
                            tag: "datatype", name: "Lockout2", id: 0x2, conformance: "M",
                            description: "Level 2 reduced functionality",
                            xref: { document: "cluster", section: "4.5.5.2" }
                        },

                        {
                            tag: "datatype", name: "Lockout3", id: 0x3, conformance: "M",
                            description: "Level 3 reduced functionality",
                            xref: { document: "cluster", section: "4.5.5.2" }
                        },

                        {
                            tag: "datatype", name: "Lockout4", id: 0x4, conformance: "M",
                            description: "Level 4 reduced functionality",
                            xref: { document: "cluster", section: "4.5.5.2" }
                        },

                        {
                            tag: "datatype", name: "Lockout5", id: 0x5, conformance: "M",
                            description: "Least functionality available to the user",
                            xref: { document: "cluster", section: "4.5.5.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ScheduleProgrammingVisibility", id: 0x2, type: "enum8", access: "RW VM",
                    conformance: "O", constraint: "desc", default: 0,
                    details: "The ScheduleProgrammingVisibility attribute is used to hide the weekly schedule programming " +
                             "functionality or menu on a thermostat from a user to prevent local user programming of the weekly " +
                             "schedule. The schedule programming MAY still be performed via a remote interface, and the thermostat" +
                             " MAY operate in schedule programming mode",
                    xref: { document: "cluster", section: "4.5.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "ScheduleProgrammingPermitted", id: 0x0, conformance: "M",
                            description: "Local schedule programming functionality is enabled at the thermostat",
                            xref: { document: "cluster", section: "4.5.5.3" }
                        },

                        {
                            tag: "datatype", name: "ScheduleProgrammingDenied", id: 0x1, conformance: "M",
                            description: "Local schedule programming functionality is disabled at the thermostat",
                            xref: { document: "cluster", section: "4.5.5.3" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "DoorLock", id: 0x101, classification: "application",
            xref: { document: "cluster", section: "5.2" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "PIN", id: 0x0, conformance: "O",
                            description: "Lock supports PIN credentials (via keypad, or over- the-air)",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "RID", id: 0x1, conformance: "O",
                            description: "Lock supports RFID credentials",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "FGP", id: 0x2, conformance: "P, O",
                            description: "Lock supports finger related credentials (fingerprint, finger vein)",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "LOG", id: 0x3, conformance: "O",
                            description: "Lock supports local/on-lock logging when Events are not supported",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "WDSCH", id: 0x4, conformance: "O",
                            description: "Lock supports week day user access schedules",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "DPS", id: 0x5, conformance: "O",
                            description: "Lock supports a door position sensor that indicates door’s state",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "FACE", id: 0x6, conformance: "P, O",
                            description: "Lock supports face related credentials (face, iris, retina)",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "COTA", id: 0x7, conformance: "O",
                            description: "PIN codes over- the-air supported for lock/unlock operations",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "USR", id: 0x8, conformance: "[P, IN | RID]",
                            description: "Lock supports the user commands and database",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "NOT", id: 0x9, conformance: "O",
                            description: "Operation and Programming Notifications",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "YDSCH", id: 0xa, conformance: "O",
                            description: "Lock supports year day user access schedules",
                            xref: { document: "cluster", section: "5.2.2" }
                        },

                        {
                            tag: "datatype", name: "HDSCH", id: 0xb, conformance: "O",
                            description: "Lock supports holiday schedules",
                            xref: { document: "cluster", section: "5.2.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "LockState", id: 0x0, type: "enum8", access: "R V", conformance: "M",
                    constraint: "desc", quality: "X S P",
                    details: "This attribute has the following possible values",
                    xref: { document: "cluster", section: "5.2.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "NotFullyLocked", id: 0x0, conformance: "M",
                            description: "Lock state is not fully locked",
                            xref: { document: "cluster", section: "5.2.3.1" }
                        },

                        {
                            tag: "datatype", name: "Locked", id: 0x1, conformance: "M",
                            description: "Lock state is fully locked",
                            xref: { document: "cluster", section: "5.2.3.1" }
                        },

                        {
                            tag: "datatype", name: "Unlocked", id: 0x2, conformance: "M",
                            description: "Lock state is fully unlocked",
                            xref: { document: "cluster", section: "5.2.3.1" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "LockType", id: 0x1, type: "enum8", access: "R V", conformance: "M",
                    constraint: "desc",
                    details: "The LockType attribute is indicated by an enumeration",
                    xref: { document: "cluster", section: "5.2.3.2" },
                    children: [
                        {
                            tag: "datatype", name: "Deadbolt", id: 0x0, description: "Physical lock type is dead bolt",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "Magnetic", id: 0x1, description: "Physical lock type is magnetic",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "Other", id: 0x2, description: "Physical lock type is other",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "Mortise", id: 0x3, description: "Physical lock type is mortise",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "Rim", id: 0x4, description: "Physical lock type is rim",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "LatchBolt", id: 0x5, description: "Physical lock type is latch bolt",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "CylindricalLock", id: 0x6,
                            description: "Physical lock type is cylindrical lock",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "TubularLock", id: 0x7, description: "Physical lock type is tubular lock",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "InterconnectedLock", id: 0x8,
                            description: "Physical lock type is interconnected lock",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "DeadLatch", id: 0x9, description: "Physical lock type is dead latch",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        },

                        {
                            tag: "datatype", name: "DoorFurniture", id: 0xa,
                            description: "Physical lock type is door furniture",
                            xref: { document: "cluster", section: "5.2.3.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ActuatorEnabled", id: 0x2, type: "bool", access: "R V", conformance: "M",
                    details: "The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to (" +
                             "Disabled) process remote Lock, Unlock, or Unlock with Timeout commands",
                    xref: { document: "cluster", section: "5.2.3.3" }
                },

                {
                    tag: "attribute", name: "DoorState", id: 0x3, type: "enum8", access: "R V", conformance: "D, P, S",
                    constraint: "desc", quality: "X P",
                    details: "The current door state as defined in DoorStateEnum",
                    xref: { document: "cluster", section: "5.2.3.4" }
                },

                {
                    tag: "attribute", name: "DoorOpenEvents", id: 0x4, type: "uint32", access: "RW VM",
                    conformance: "[D, P, S]",
                    details: "This attribute holds the number of door open events that have occurred since it was last zeroed",
                    xref: { document: "cluster", section: "5.2.3.5" }
                },

                {
                    tag: "attribute", name: "DoorClosedEvents", id: 0x5, type: "uint32", access: "RW VM",
                    conformance: "[D, P, S]",
                    details: "This attribute holds the number of door closed events that have occurred since it was last zeroed",
                    xref: { document: "cluster", section: "5.2.3.6" }
                },

                {
                    tag: "attribute", name: "OpenPeriod", id: 0x6, type: "uint16", access: "RW VM",
                    conformance: "[D, P, S]",
                    details: "This attribute holds the number of minutes the door has been open since the last time it " +
                             "transitioned from closed to open",
                    xref: { document: "cluster", section: "5.2.3.7" }
                },

                {
                    tag: "attribute", name: "NumberOfLogRecordsSupported", id: 0x10, type: "uint16", access: "R V",
                    conformance: "LOG", default: 0, quality: "F",
                    details: "The number of available log records",
                    xref: { document: "cluster", section: "5.2.3.8" }
                },

                {
                    tag: "attribute", name: "NumberOfTotalUsersSupported", id: 0x11, type: "uint16", access: "R V",
                    conformance: "USR", default: 0, quality: "F",
                    details: "Number of total users supported by the lock",
                    xref: { document: "cluster", section: "5.2.3.9" }
                },

                {
                    tag: "attribute", name: "NumberOfPinUsersSupported", id: 0x12, type: "uint16", access: "R V",
                    conformance: "P, IN", default: 0, quality: "F",
                    details: "The number of PIN users supported",
                    xref: { document: "cluster", section: "5.2.3.10" }
                },

                {
                    tag: "attribute", name: "NumberOfRfidUsersSupported", id: 0x13, type: "uint16", access: "R V",
                    conformance: "RID", default: 0, quality: "F",
                    details: "The number of RFID users supported",
                    xref: { document: "cluster", section: "5.2.3.11" }
                },

                {
                    tag: "attribute", name: "NumberOfWeekDaySchedulesSupportedPerUser", id: 0x14, type: "uint8",
                    access: "R V", conformance: "WDSCH", default: 0, quality: "F",
                    details: "The number of configurable week day schedule supported per user",
                    xref: { document: "cluster", section: "5.2.3.12" }
                },

                {
                    tag: "attribute", name: "NumberOfYearDaySchedulesSupportedPerUser", id: 0x15, type: "uint8",
                    access: "R V", conformance: "YDSCH", default: 0, quality: "F",
                    details: "The number of configurable year day schedule supported per user",
                    xref: { document: "cluster", section: "5.2.3.13" }
                },

                {
                    tag: "attribute", name: "NumberOfHolidaySchedulesSupported", id: 0x16, type: "uint8", access: "R V",
                    conformance: "HDSCH", default: 0, quality: "F",
                    details: "The number of holiday schedules supported for the entire door lock device",
                    xref: { document: "cluster", section: "5.2.3.14" }
                },

                {
                    tag: "attribute", name: "MaxPinCodeLength", id: 0x17, type: "uint8", access: "R V",
                    conformance: "P, IN", quality: "F",
                    details: "An 8 bit value indicates the maximum length in bytes of a PIN Code on this device",
                    xref: { document: "cluster", section: "5.2.3.15" }
                },

                {
                    tag: "attribute", name: "MinPinCodeLength", id: 0x18, type: "uint8", access: "R V",
                    conformance: "P, IN", quality: "F",
                    details: "An 8 bit value indicates the minimum length in bytes of a PIN Code on this device",
                    xref: { document: "cluster", section: "5.2.3.16" }
                },

                {
                    tag: "attribute", name: "MaxRfidCodeLength", id: 0x19, type: "uint8", access: "R V",
                    conformance: "RID", quality: "F",
                    details: "An 8 bit value indicates the maximum length in bytes of a RFID Code on this device. The value " +
                             "depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers (" +
                             "UID) are used as RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended",
                    xref: { document: "cluster", section: "5.2.3.17" }
                },

                {
                    tag: "attribute", name: "MinRfidCodeLength", id: 0x1a, type: "uint8", access: "R V",
                    conformance: "RID", quality: "F",
                    details: "An 8 bit value indicates the minimum length in bytes of a RFID Code on this device. The value " +
                             "depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers (" +
                             "UID) are used as RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended",
                    xref: { document: "cluster", section: "5.2.3.18" }
                },

                {
                    tag: "attribute", name: "CredentialRulesSupport", id: 0x1b, type: "map8", access: "R V",
                    conformance: "USR", default: 1, quality: "F",
                    details: "This bitmap contains a bit for every value of CredentialRuleEnum supported on this device",
                    xref: { document: "cluster", section: "5.2.3.19" }
                },

                {
                    tag: "attribute", name: "NumberOfCredentialsSupportedPerUser", id: 0x1c, type: "uint8",
                    access: "R V", conformance: "USR", default: 0, quality: "F",
                    details: "The number of credentials that could be assigned for each user",
                    xref: { document: "cluster", section: "5.2.3.20" }
                },

                {
                    tag: "attribute", name: "EnableLogging", id: 0x20, type: "bool", access: "R[W] VA",
                    conformance: "LOG", default: true, quality: "P",
                    details: "Enable/disable event logging. When event logging is enabled, all event messages are stored on the " +
                             "lock for retrieval. Logging events can be but not limited to Tamper Alarm, Lock, Unlock, AutoRelock" +
                             ", User Code Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a full detail of all" +
                             " the possible alarms and events, please refer to the full list in the Alarm and Event Masks " +
                             "Attribute Set",
                    xref: { document: "cluster", section: "5.2.3.21" }
                },

                {
                    tag: "attribute", name: "Language", id: 0x21, type: "string", access: "R[W] VM", conformance: "O",
                    constraint: "max 3", quality: "P",
                    details: "Modifies the language for the on-screen or audible user interface using a 2-byte language code from " +
                             "ISO-639-1",
                    xref: { document: "cluster", section: "5.2.3.22" }
                },

                {
                    tag: "attribute", name: "LedSettings", id: 0x22, type: "uint8", access: "R[W] VM", conformance: "O",
                    constraint: "desc", default: 0, quality: "P",
                    details: "The settings for the LED support three different modes, shown below",
                    xref: { document: "cluster", section: "5.2.3.25" }
                },

                {
                    tag: "attribute", name: "AutoRelockTime", id: 0x23, type: "uint32", access: "R[W] VM",
                    conformance: "O", quality: "P",
                    details: "The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled" +
                             ". If set, unlock operations from any source will be timed. For one time unlock with timeout use the " +
                             "specific command",
                    xref: { document: "cluster", section: "5.2.3.26" }
                },

                {
                    tag: "attribute", name: "SoundVolume", id: 0x24, type: "uint8", access: "R[W] VM", conformance: "O",
                    constraint: "desc", default: 0, quality: "P",
                    details: "The sound volume on a door lock has four possible settings: silent, low, high and medium volumes, " +
                             "shown below",
                    xref: { document: "cluster", section: "5.2.3.27" }
                },

                {
                    tag: "attribute", name: "OperatingMode", id: 0x25, type: "enum8", access: "R[W] VM",
                    conformance: "M", constraint: "desc", default: 0, quality: "P",
                    details: "The current operating mode of the lock (see OperatingModeEnum",
                    xref: { document: "cluster", section: "5.2.3.23" }
                },

                {
                    tag: "attribute", name: "SupportedOperatingModes", id: 0x26, type: "map16", access: "R V",
                    conformance: "M", default: 65526, quality: "F",
                    details: "This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All " +
                             "operating modes NOT supported by a lock SHALL be set to one. The value of the OperatingMode " +
                             "enumeration defines the related bit to be set, as shown below",
                    xref: { document: "cluster", section: "5.2.3.24" }
                },

                {
                    tag: "attribute", name: "DefaultConfigurationRegister", id: 0x27, type: "map16", access: "R V",
                    conformance: "O", default: 0, quality: "P",
                    details: "This attribute represents the default configurations as they are physically set on the device (" +
                             "example: hardware dip switch setting, etc…) and represents the default setting for some of the " +
                             "attributes within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode " +
                             "attributes",
                    xref: { document: "cluster", section: "5.2.3.28" }
                },

                {
                    tag: "attribute", name: "EnableLocalProgramming", id: 0x28, type: "bool", access: "R[W] VA",
                    conformance: "O", default: true, quality: "P",
                    details: "Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures " +
                             "attribute). If this value is set to TRUE then local programming is enabled on the door lock for all " +
                             "features. If it is set to FALSE then local programming is disabled on the door lock for those " +
                             "features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming SHALL be" +
                             " enabled by default",
                    xref: { document: "cluster", section: "5.2.3.29" }
                },

                {
                    tag: "attribute", name: "EnableOneTouchLocking", id: 0x29, type: "bool", access: "RW VM",
                    conformance: "O", default: true, quality: "P",
                    details: "Enable/disable the ability to lock the door lock with a single touch on the door lock",
                    xref: { document: "cluster", section: "5.2.3.30" }
                },

                {
                    tag: "attribute", name: "EnableInsideStatusLed", id: 0x2a, type: "bool", access: "RW VM",
                    conformance: "O", default: true, quality: "P",
                    details: "Enable/disable an inside LED that allows the user to see at a glance if the door is locked",
                    xref: { document: "cluster", section: "5.2.3.31" }
                },

                {
                    tag: "attribute", name: "EnablePrivacyModeButton", id: 0x2b, type: "bool", access: "RW VM",
                    conformance: "O", default: true, quality: "P",
                    details: "Enable/disable a button inside the door that is used to put the lock into privacy mode. When the " +
                             "lock is in privacy mode it cannot be manipulated from the outside",
                    xref: { document: "cluster", section: "5.2.3.32" }
                },

                {
                    tag: "attribute", name: "LocalProgrammingFeatures", id: 0x2c, type: "map8", access: "R[W] VA",
                    conformance: "O", default: 0, quality: "P",
                    details: "The local programming features that will be disabled when EnableLocalProgramming attribute is set to" +
                             " False. If a door lock doesn’t support disabling one aspect of local programming it SHALL return " +
                             "CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming attribute" +
                             " is set to True then all local programming features SHALL be enabled regardless of the bits set to 0" +
                             " in this attribute",
                    xref: { document: "cluster", section: "5.2.3.33" }
                },

                {
                    tag: "attribute", name: "WrongCodeEntryLimit", id: 0x30, type: "uint8", access: "R[W] VA",
                    conformance: "P, IN | RID", constraint: "1 to 255", quality: "P",
                    details: "The number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter before the" +
                             " lock will enter a lockout state. The value of this attribute is compared to all failing forms of " +
                             "credential presentation, including Pin codes used in an Unlock Command when " +
                             "RequirePINforRemoteOperation is set to true. Valid range is 1-255 incorrect attempts. The lockout " +
                             "state will be for the duration of UserCodeTemporaryDisableTime. If the attribute accepts writes and " +
                             "an attempt to write the value 0 is made, the device SHALL respond with CONSTRAINT_ERROR",
                    xref: { document: "cluster", section: "5.2.3.34" }
                },

                {
                    tag: "attribute", name: "UserCodeTemporaryDisableTime", id: 0x31, type: "uint8", access: "R[W] VA",
                    conformance: "P, IN | RID", constraint: "1 to 255", quality: "P",
                    details: "The number of seconds that the lock shuts down following wrong code entry. Valid range is 1-255 " +
                             "seconds. Device can shut down to lock user out for specified amount of time. (Makes it difficult to " +
                             "try and guess a PIN for the device.) If the attribute accepts writes and an attempt to write the " +
                             "attribute to 0 is made, the device SHALL respond with CONSTRAINT_ERROR",
                    xref: { document: "cluster", section: "5.2.3.35" }
                },

                {
                    tag: "attribute", name: "SendPinOverTheAir", id: 0x32, type: "bool", access: "R[W] VA",
                    conformance: "[P, IN]", default: true, quality: "P",
                    details: "Boolean set to True if it is ok for the door lock server to send PINs over the air. This attribute " +
                             "determines the behavior of the server’s TX operation. If it is false, then it is not ok for the " +
                             "device to send PIN in any messages over the air",
                    xref: { document: "cluster", section: "5.2.3.36" }
                },

                {
                    tag: "attribute", name: "RequirePiNforRemoteOperation", id: 0x33, type: "bool", access: "R[W] VA",
                    conformance: "COTA & P, IN", default: true, quality: "P",
                    details: "Boolean set to True if the door lock server requires that an optional PINs be included in the " +
                             "payload of remote lock operation events like Lock, Unlock, Unlock with Timeout and Toggle in order " +
                             "to function",
                    xref: { document: "cluster", section: "5.2.3.37" }
                },

                {
                    tag: "attribute", name: "SecurityLevel", id: 0x34, conformance: "D", default: "0",
                    xref: { document: "cluster", section: "5.2.3" }
                },

                {
                    tag: "attribute", name: "ExpiringUserTimeout", id: 0x35, type: "uint16", access: "R[W] VA",
                    conformance: "[USR]", constraint: "1 to 2880", quality: "P",
                    details: "Number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user of type " +
                             "ExpiringUser SHALL remain valid after its first use before expiring. When the credential expires the" +
                             " UserStatus for the corresponding user record SHALL be set to OccupiedDisabled",
                    xref: { document: "cluster", section: "5.2.3.38" }
                },

                {
                    tag: "attribute", name: "AlarmMask", id: 0x40, type: "map16", access: "RW VA", conformance: "O",
                    default: 65535, quality: "P",
                    details: "This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is " +
                             "used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the " +
                             "associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be " +
                             "turned on or off by setting or clearing the associated bit in the alarm mask",
                    xref: { document: "cluster", section: "5.2.3.39" }
                },

                {
                    tag: "attribute", name: "KeypadOperationEventMask", id: 0x41, type: "map16", access: "RW VA",
                    conformance: "[NOT & P, IN]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off the transmission of keypad operation events. This mask DOES NOT " +
                             "apply to the storing of events in the event log. This mask only applies to the Operation Event " +
                             "Notification Command",
                    xref: { document: "cluster", section: "5.2.3.40" },
                    children: [
                        {
                            tag: "datatype", name: "UnknownormanufacturerSpecifickeypadoperationevent", id: 0x0,
                            xref: { document: "cluster", section: "5.2.3.40" }
                        },

                        {
                            tag: "datatype", name: "Locksourcekeypad", id: 0x1,
                            xref: { document: "cluster", section: "5.2.3.40" }
                        },

                        {
                            tag: "datatype", name: "Unlocksourcekeypad", id: 0x2,
                            xref: { document: "cluster", section: "5.2.3.40" }
                        },

                        {
                            tag: "datatype", name: "LocksourcekeypaderrorinvalidPin", id: 0x3,
                            xref: { document: "cluster", section: "5.2.3.40" }
                        },

                        {
                            tag: "datatype", name: "Locksourcekeypaderrorinvalidschedule", id: 0x4,
                            xref: { document: "cluster", section: "5.2.3.40" }
                        },

                        {
                            tag: "datatype", name: "Unlocksourcekeypaderrorinvalidcode", id: 0x5,
                            xref: { document: "cluster", section: "5.2.3.40" }
                        },

                        {
                            tag: "datatype", name: "Unlocksourcekeypaderrorinvalidschedule", id: 0x6,
                            xref: { document: "cluster", section: "5.2.3.40" }
                        },

                        {
                            tag: "datatype", name: "NonAccessUseroperationeventsourcekeypad", id: 0x7,
                            xref: { document: "cluster", section: "5.2.3.40" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "RemoteOperationEventMask", id: 0x42, type: "map16", access: "RW VA",
                    conformance: "[NOT]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off the transmission of remote operation events. This mask DOES NOT " +
                             "apply to the storing of events in the event log. This mask only applies to the Operation Event",
                    xref: { document: "cluster", section: "5.2.3.41" },
                    children: [
                        {
                            tag: "datatype", name: "UnknownormanufacturerSpecificremoteoperationevent", id: 0x0,
                            xref: { document: "cluster", section: "5.2.3.41" }
                        },

                        {
                            tag: "datatype", name: "Locksourceremote", id: 0x1,
                            xref: { document: "cluster", section: "5.2.3.41" }
                        },

                        {
                            tag: "datatype", name: "Unlocksourceremote", id: 0x2,
                            xref: { document: "cluster", section: "5.2.3.41" }
                        },

                        {
                            tag: "datatype", name: "Locksourceremoteerrorinvalidcode", id: 0x3,
                            xref: { document: "cluster", section: "5.2.3.41" }
                        },

                        {
                            tag: "datatype", name: "Locksourceremoteerrorinvalidschedule", id: 0x4,
                            xref: { document: "cluster", section: "5.2.3.41" }
                        },

                        {
                            tag: "datatype", name: "Unlocksourceremoteerrorinvalidcode", id: 0x5,
                            xref: { document: "cluster", section: "5.2.3.41" }
                        },

                        {
                            tag: "datatype", name: "Unlocksourceremoteerrorinvalidschedule", id: 0x6,
                            xref: { document: "cluster", section: "5.2.3.41" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ManualOperationEventMask", id: 0x43, type: "map16", access: "RW VA",
                    conformance: "[NOT]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off manual operation events. This mask DOES NOT apply to the storing " +
                             "of events in the event log. This mask only applies to the Operation Event Notification Command",
                    xref: { document: "cluster", section: "5.2.3.42" },
                    children: [
                        {
                            tag: "datatype", name: "UnknownormanufacturerSpecificmanualoperationevent", id: 0x0,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "ThumbturnLock", id: 0x1,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "ThumbturnUnlock", id: 0x2,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "Onetouchlock", id: 0x3,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "KeyLock", id: 0x4,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "KeyUnlock", id: 0x5,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "Autolock", id: 0x6,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "ScheduleLock", id: 0x7,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "ScheduleUnlock", id: 0x8,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "ManualLockKeyorThumbturn", id: 0x9,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        },

                        {
                            tag: "datatype", name: "ManualUnlockKeyorThumbturn", id: 0xa,
                            xref: { document: "cluster", section: "5.2.3.42" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "RfidOperationEventMask", id: 0x44, type: "map16", access: "RW VA",
                    conformance: "[NOT & RID]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off RFID operation events. This mask DOES NOT apply to the storing of" +
                             " events in the event log. This mask only applies to the Operation Event Notification Command",
                    xref: { document: "cluster", section: "5.2.3.43" },
                    children: [
                        {
                            tag: "datatype", name: "UnknownormanufacturerSpecifickeypadoperationevent", id: 0x0,
                            xref: { document: "cluster", section: "5.2.3.43" }
                        },

                        {
                            tag: "datatype", name: "LocksourceRfid", id: 0x1,
                            xref: { document: "cluster", section: "5.2.3.43" }
                        },

                        {
                            tag: "datatype", name: "UnlocksourceRfid", id: 0x2,
                            xref: { document: "cluster", section: "5.2.3.43" }
                        },

                        {
                            tag: "datatype", name: "LocksourceRfiDerrorinvalidRfidId", id: 0x3,
                            xref: { document: "cluster", section: "5.2.3.43" }
                        },

                        {
                            tag: "datatype", name: "LocksourceRfiDerrorinvalidschedule", id: 0x4,
                            xref: { document: "cluster", section: "5.2.3.43" }
                        },

                        {
                            tag: "datatype", name: "UnlocksourceRfiDerrorinvalidRfidId", id: 0x5,
                            xref: { document: "cluster", section: "5.2.3.43" }
                        },

                        {
                            tag: "datatype", name: "UnlocksourceRfiDerrorinvalidschedule", id: 0x6,
                            xref: { document: "cluster", section: "5.2.3.43" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "KeypadProgrammingEventMask", id: 0x45, type: "map16", access: "RW VA",
                    conformance: "[NOT & P, IN]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off keypad programming events. This mask DOES NOT apply to the " +
                             "storing of events in the event log. This mask only applies to the Programming Event Notification " +
                             "Command",
                    xref: { document: "cluster", section: "5.2.3.44" },
                    children: [
                        {
                            tag: "datatype", name: "UnknownormanufacturerSpecifickeypadprogrammingevent", id: 0x0,
                            xref: { document: "cluster", section: "5.2.3.44" }
                        },

                        {
                            tag: "datatype", name: "ProgrammingPiNcodechangedsourcekeypad", id: 0x1,
                            xref: { document: "cluster", section: "5.2.3.44" }
                        },

                        {
                            tag: "datatype", name: "PiNaddedsourcekeypad", id: 0x2,
                            xref: { document: "cluster", section: "5.2.3.44" }
                        },

                        {
                            tag: "datatype", name: "PiNclearedsourcekeypad", id: 0x3,
                            xref: { document: "cluster", section: "5.2.3.44" }
                        },

                        {
                            tag: "datatype", name: "PiNchangedSourcekeypad", id: 0x4,
                            xref: { document: "cluster", section: "5.2.3.44" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "RemoteProgrammingEventMask", id: 0x46, type: "map16", access: "RW VA",
                    conformance: "[NOT]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off remote programming events. This mask DOES NOT apply to the " +
                             "storing of events in the event log. This mask only applies to the Programming Event Notification " +
                             "Command",
                    xref: { document: "cluster", section: "5.2.3.45" },
                    children: [
                        {
                            tag: "datatype", name: "UnknownormanufacturerSpecificremoteprogrammingevent", id: 0x0,
                            xref: { document: "cluster", section: "5.2.3.45" }
                        },

                        {
                            tag: "datatype", name: "PiNaddedsourceremote", id: 0x2,
                            xref: { document: "cluster", section: "5.2.3.45" }
                        },

                        {
                            tag: "datatype", name: "PiNclearedsourceremote", id: 0x3,
                            xref: { document: "cluster", section: "5.2.3.45" }
                        },

                        {
                            tag: "datatype", name: "PiNchangedSourceremote", id: 0x4,
                            xref: { document: "cluster", section: "5.2.3.45" }
                        },

                        {
                            tag: "datatype", name: "RfiDcodeaddedSourceremote", id: 0x5,
                            xref: { document: "cluster", section: "5.2.3.45" }
                        },

                        {
                            tag: "datatype", name: "RfiDcodeclearedSourceremote", id: 0x6,
                            xref: { document: "cluster", section: "5.2.3.45" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "RfidProgrammingEventMask", id: 0x47, type: "map16", access: "RW VA",
                    conformance: "[NOT & RID]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off RFID programming events. This mask DOES NOT apply to the storing " +
                             "of events in the event log. This mask only applies to the Programming Event Notification Command",
                    xref: { document: "cluster", section: "5.2.3.46" },
                    children: [
                        {
                            tag: "datatype", name: "UnknownormanufacturerSpecifickeypadprogrammingevent", id: 0x0,
                            xref: { document: "cluster", section: "5.2.3.46" }
                        },

                        {
                            tag: "datatype", name: "IdAddedSourceRfid", id: 0x5,
                            xref: { document: "cluster", section: "5.2.3.46" }
                        },

                        {
                            tag: "datatype", name: "IDclearedSourceRfid", id: 0x6,
                            xref: { document: "cluster", section: "5.2.3.46" }
                        }
                    ]
                },

                {
                    tag: "event", name: "DoorLockAlarm", id: 0x0, access: "V", conformance: "M", priority: "critical",
                    details: "The door lock cluster provides several alarms which can be sent when there is a critical state on " +
                             "the door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum " +
                             "section below",
                    xref: { document: "cluster", section: "5.2.5.1" }
                },

                {
                    tag: "event", name: "DoorStateChange", id: 0x1, access: "V", conformance: "D, P, S",
                    priority: "critical",
                    details: "The door lock server sends out a DoorStateChange event when the door lock door state changes. The " +
                             "data of this event SHALL contain the following information",
                    xref: { document: "cluster", section: "5.2.5.2" }
                },

                {
                    tag: "event", name: "LockOperation", id: 0x2, access: "V", conformance: "M", priority: "critical",
                    details: "The door lock server sends out a LockOperation event when the event is triggered by the various lock" +
                             " operation sources",
                    xref: { document: "cluster", section: "5.2.5.3" }
                },

                {
                    tag: "event", name: "LockOperationError", id: 0x3, access: "V", conformance: "M",
                    priority: "critical",
                    details: "The door lock server sends out a LockOperationError event when a lock operation fails for various " +
                             "reasons",
                    xref: { document: "cluster", section: "5.2.5.4" }
                },

                {
                    tag: "event", name: "LockUserChange", id: 0x4, access: "V", conformance: "USR", priority: "info",
                    details: "The door lock server sends out a LockUserChange event when a lock user, schedule, or credential " +
                             "change has occurred",
                    xref: { document: "cluster", section: "5.2.5.5" }
                },

                {
                    tag: "command", name: "LockDoor", id: 0x0, access: "O T", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "UnlockDoor", id: 0x1, access: "O T", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "Toggle", id: 0x2, access: "O T", conformance: "X", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "UnlockwithTimeout", id: 0x3, access: "O T", conformance: "O",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetLogRecord", id: 0x4, access: "M", conformance: "LOG",
                    direction: "request", response: "GetLogRecordResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetLogRecordResponse", id: 0x4, conformance: "LOG", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetPinCode", id: 0x5, access: "A T", conformance: "!USR & P, IN",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetPinCode", id: 0x6, access: "A", conformance: "!USR & P, IN",
                    direction: "request", response: "GetPinCodeResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetPinCodeResponse", id: 0x6, conformance: "!USR & P, IN",
                    direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearPinCode", id: 0x7, access: "A T", conformance: "!USR & P, IN",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearAllPinCodes", id: 0x8, access: "A T", conformance: "!USR & P, IN",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetUserStatus", id: 0x9, access: "A", conformance: "!USR & (P, IN | RID)",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetUserStatus", id: 0xa, access: "A", conformance: "!USR & (P, IN | RID)",
                    direction: "request", response: "GetUserStatusResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetUserStatusResponse", id: 0xa, conformance: "!USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetWeekDaySchedule", id: 0xb, access: "A", conformance: "WDSCH",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetWeekDaySchedule", id: 0xc, access: "A", conformance: "WDSCH",
                    direction: "request", response: "GetWeekDayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetWeekDayScheduleResponse", id: 0xc, conformance: "WDSCH",
                    direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearWeekDaySchedule", id: 0xd, access: "A", conformance: "WDSCH",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetYearDaySchedule", id: 0xe, access: "A", conformance: "YDSCH",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetYearDaySchedule", id: 0xf, access: "A", conformance: "YDSCH",
                    direction: "request", response: "GetYearDayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetYearDayScheduleResponse", id: 0xf, conformance: "YDSCH",
                    direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearYearDaySchedule", id: 0x10, access: "A", conformance: "YDSCH",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetHolidaySchedule", id: 0x11, access: "A", conformance: "HDSCH",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetHolidaySchedule", id: 0x12, access: "A", conformance: "HDSCH",
                    direction: "request", response: "GetHolidayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetHolidayScheduleResponse", id: 0x12, conformance: "HDSCH",
                    direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearHolidaySchedule", id: 0x13, access: "A", conformance: "HDSCH",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetUserType", id: 0x14, access: "A", conformance: "!USR & (P, IN | RID)",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetUserType", id: 0x15, access: "A", conformance: "!USR & (P, IN | RID)",
                    direction: "request", response: "GetUserTypeResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetUserTypeResponse", id: 0x15, conformance: "!USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetRfidCode", id: 0x16, access: "A T", conformance: "!USR & RID",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetRfidCode", id: 0x17, access: "A", conformance: "!USR & RID",
                    direction: "request", response: "GetRfidCodeResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetRfidCodeResponse", id: 0x17, conformance: "!USR & RID",
                    direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearRfidCode", id: 0x18, access: "A T", conformance: "!USR & RID",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearAllRfidCodes", id: 0x19, access: "A T", conformance: "!USR & RID",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetUser", id: 0x1a, access: "A T", conformance: "USR", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetUser", id: 0x1b, access: "A", conformance: "USR", direction: "request",
                    response: "GetUserResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetUserResponse", id: 0x1c, conformance: "USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearUser", id: 0x1d, access: "A T", conformance: "USR",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "OperatingEventNotification", id: 0x20, conformance: "[NOT]",
                    direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ProgrammingEventNotification", id: 0x21, conformance: "[NOT]",
                    direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetCredential", id: 0x22, access: "A T", conformance: "USR",
                    direction: "request", response: "SetCredentialResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "SetCredentialResponse", id: 0x23, conformance: "USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetCredentialStatus", id: 0x24, access: "A", conformance: "USR",
                    direction: "request", response: "GetCredentialStatusResponse",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "GetCredentialStatusResponse", id: 0x25, conformance: "USR",
                    direction: "response",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "command", name: "ClearCredential", id: 0x26, access: "A T", conformance: "USR",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.4" }
                },

                {
                    tag: "datatype", name: "AlarmCodeEnum", type: "enum8",
                    details: "The Alarm Code enum SHALL indicate the alarm type. The data type of the Alarm Code enum is derived " +
                             "from enum8",
                    xref: { document: "cluster", section: "5.2.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "LockJammed", id: 0x0, conformance: "M",
                            description: "Locking Mechanism Jammed",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "LockFactoryReset", id: 0x1, conformance: "O",
                            description: "Lock Reset to Factory Defaults",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "LockRadioPowerCycled", id: 0x3, conformance: "O",
                            description: "Lock Radio Power Cycled",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "WrongCodeEntryLimit", id: 0x4, conformance: "[USR]",
                            description: "Tamper Alarm - wrong code entry limit",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "FrontEsceutcheonRemoved", id: 0x5, conformance: "O",
                            description: "Tamper Alarm - front escutcheon removed from main",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "DoorForcedOpen", id: 0x6, conformance: "[D, P, S]",
                            description: "Forced Door Open under Door Locked Condition",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "DoorAjar", id: 0x7, conformance: "[D, P, S]", description: "Door ajar",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "ForcedUser", id: 0x8, conformance: "[USR]",
                            description: "Force User SOS alarm",
                            xref: { document: "cluster", section: "5.2.6.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialRuleEnum", type: "enum8",
                    details: "The CredentialRule enum used in various commands SHALL indicate the credential rule that can be " +
                             "applied to a particular user. The data type of the CredentialRule enum is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "Single", id: 0x0, conformance: "USR",
                            xref: { document: "cluster", section: "5.2.6.2" }
                        },

                        {
                            tag: "datatype", name: "Dual", id: 0x1, conformance: "[USR]",
                            xref: { document: "cluster", section: "5.2.6.2" }
                        },

                        {
                            tag: "datatype", name: "Tri", id: 0x2, conformance: "[USR]",
                            xref: { document: "cluster", section: "5.2.6.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialStruct", type: "struct",
                    details: "The CredentialStruct is used in LockOperation event and Get User Record Response command and SHALL " +
                             "indicate the credential types and their corresponding indices (if any) for the event or user record",
                    xref: { document: "cluster", section: "5.2.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "CredentialType", id: 0x0, type: "CredentialTypeEnum", conformance: "M",
                            details: "The credential type used to authorize the lock operation",
                            xref: { document: "cluster", section: "5.2.6.3.1" }
                        },

                        {
                            tag: "datatype", name: "CredentialIndex", id: 0x1, type: "uint16", conformance: "M", default: 0,
                            details: "This is the index of the specific credential used to authorize the lock operation in the list of " +
                                     "credentials identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This SHALL be set to 0 if" +
                                     " CredentialType is ProgrammingPIN or does not correspond to a list that can be indexed into",
                            xref: { document: "cluster", section: "5.2.6.3.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CredentialTypeEnum", type: "enum8",
                    details: "The Credential Type enum SHALL indicate the credential type. The data type of the Credential Type " +
                             "enum is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "ProgrammingPin", id: 0x0, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "Pin", id: 0x1, conformance: "P, IN",
                            xref: { document: "cluster", section: "5.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "Rfid", id: 0x2, conformance: "RID",
                            xref: { document: "cluster", section: "5.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "Fingerprint", id: 0x3, conformance: "FGP",
                            xref: { document: "cluster", section: "5.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "FingerVein", id: 0x4, conformance: "FGP",
                            xref: { document: "cluster", section: "5.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "Face", id: 0x5, conformance: "FACE",
                            xref: { document: "cluster", section: "5.2.6.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DataOperationTypeEnum", type: "enum8",
                    details: "The DataOperationType enum SHALL indicate the data operation performed. The data type of the " +
                             "DataOperationType enum is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.5" },
                    children: [
                        {
                            tag: "datatype", name: "Add", id: 0x0, conformance: "M",
                            description: "Data is being added or was added",
                            xref: { document: "cluster", section: "5.2.6.5" }
                        },

                        {
                            tag: "datatype", name: "Clear", id: 0x1, conformance: "M",
                            description: "Data is being cleared or was cleared",
                            xref: { document: "cluster", section: "5.2.6.5" }
                        },

                        {
                            tag: "datatype", name: "Modify", id: 0x2, conformance: "M",
                            description: "Data is being modified or was modified",
                            xref: { document: "cluster", section: "5.2.6.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DaysMaskMap", type: "map8",
                    details: "The DaysMask field used in various commands and SHALL indicate the days of the week the Week Day " +
                             "schedule applies for. The data type of the DaysMask field is derived from map8",
                    xref: { document: "cluster", section: "5.2.6.6" }
                },

                {
                    tag: "datatype", name: "DoorStateEnum", type: "enum8",
                    details: "The DoorState enumeration SHALL indicate the current door state. The data type of the DoorState",
                    xref: { document: "cluster", section: "5.2.6.7" },
                    children: [
                        {
                            tag: "datatype", name: "DoorOpen", id: 0x0, conformance: "D, P, S",
                            description: "Door state is open",
                            xref: { document: "cluster", section: "5.2.6.7" }
                        },

                        {
                            tag: "datatype", name: "DoorClosed", id: 0x1, conformance: "D, P, S",
                            description: "Door state is closed",
                            xref: { document: "cluster", section: "5.2.6.7" }
                        },

                        {
                            tag: "datatype", name: "DoorJammed", id: 0x2, conformance: "[D, P, S]",
                            description: "Door state is jammed",
                            xref: { document: "cluster", section: "5.2.6.7" }
                        },

                        {
                            tag: "datatype", name: "DoorForcedOpen", id: 0x3, conformance: "[D, P, S]",
                            description: "Door state is currently forced open",
                            xref: { document: "cluster", section: "5.2.6.7" }
                        },

                        {
                            tag: "datatype", name: "DoorUnspecifiedError", id: 0x4, conformance: "[D, P, S]",
                            description: "Door state is invalid for unspecified reason",
                            xref: { document: "cluster", section: "5.2.6.7" }
                        },

                        {
                            tag: "datatype", name: "DoorAjar", id: 0x5, conformance: "[D, P, S]",
                            description: "Door state is ajar",
                            xref: { document: "cluster", section: "5.2.6.7" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DoorLockStatus",
                    details: "The cluster-specific status codes for the Door Lock cluster are as follows",
                    xref: { document: "cluster", section: "5.2.6.8" }
                },

                {
                    tag: "datatype", name: "LockDataTypeEnum", type: "enum8",
                    details: "The LockDataType enum SHALL indicate the data type that is being or has changed. The data type of " +
                             "the DataType enum is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.9" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "O",
                            description: "Unspecified or manufacturer specific lock user data added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "ProgrammingCode", id: 0x1, conformance: "O",
                            description: "Lock programming PIN code was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "UserIndex", id: 0x2, conformance: "M",
                            description: "Lock user index was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "WeekDaySchedule", id: 0x3, conformance: "WDSCH",
                            description: "Lock user week day schedule was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "YearDaySchedule", id: 0x4, conformance: "YDSCH",
                            description: "Lock user year day schedule was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "HolidaySchedule", id: 0x5, conformance: "HDSCH",
                            description: "Lock holiday schedule was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "Pin", id: 0x6, conformance: "P, IN",
                            description: "Lock user PIN code was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "Rfid", id: 0x7, conformance: "RID",
                            description: "Lock user RFID code was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "Fingerprint", id: 0x8, conformance: "FGP",
                            description: "Lock user fingerprint was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "FingerVein", id: 0x9, conformance: "FGP",
                            description: "Lock user finger-vein information was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        },

                        {
                            tag: "datatype", name: "Face", id: 0xa, conformance: "FACE",
                            description: "Lock user face information was added, cleared, or modified.",
                            xref: { document: "cluster", section: "5.2.6.9" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LockOperationTypeEnum", type: "enum8",
                    details: "The LockOperationType enumeration SHALL indicate the type of Lock operation performed. The data type" +
                             " of the LockOperationType enum field is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.10" },
                    children: [
                        {
                            tag: "datatype", name: "Lock", id: 0x0, conformance: "M",
                            xref: { document: "cluster", section: "5.2.6.10" }
                        },

                        {
                            tag: "datatype", name: "Unlock", id: 0x1, conformance: "M",
                            xref: { document: "cluster", section: "5.2.6.10" }
                        },

                        {
                            tag: "datatype", name: "NonAccessUserEvent", id: 0x2, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.10" }
                        },

                        {
                            tag: "datatype", name: "ForcedUserEvent", id: 0x3, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.10" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationErrorEnum", type: "enum8",
                    details: "The OperationError enumeration SHALL indicate the error cause of the Lock/Unlock operation performed" +
                             ". The data type of the OperationError enum field is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.11" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.11" }
                        },

                        {
                            tag: "datatype", name: "InvalidCredential", id: 0x1, conformance: "USR",
                            xref: { document: "cluster", section: "5.2.6.11" }
                        },

                        {
                            tag: "datatype", name: "DisabledUserDenied", id: 0x2, conformance: "M",
                            xref: { document: "cluster", section: "5.2.6.11" }
                        },

                        {
                            tag: "datatype", name: "Restricted", id: 0x3, conformance: "WDSCH | YDSCH",
                            xref: { document: "cluster", section: "5.2.6.11" }
                        },

                        {
                            tag: "datatype", name: "InsufficientBattery", id: 0x4, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.11" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperatingModeEnum", type: "enum8",
                    details: "The OperatingMode enumeration SHALL indicate the lock operating mode. The data type of the " +
                             "OperatingMode enum field is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.12" },
                    children: [
                        {
                            tag: "datatype", name: "Normal", id: 0x0, conformance: "M",
                            details: "The lock operates normally. All interfaces are enabled",
                            xref: { document: "cluster", section: "5.2.6.12.1" }
                        },

                        {
                            tag: "datatype", name: "Vacation", id: 0x1, conformance: "O",
                            details: "Only remote interaction is enabled. The keypad SHALL only be operable by the master user",
                            xref: { document: "cluster", section: "5.2.6.12.2" }
                        },

                        {
                            tag: "datatype", name: "Privacy", id: 0x2, conformance: "O",
                            details: "This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal " +
                                     "operating mode. All external interaction with the door lock is disabled. This mode is intended to be" +
                                     " used so that users, presumably inside the property, will have control over the entrance",
                            xref: { document: "cluster", section: "5.2.6.12.3" }
                        },

                        {
                            tag: "datatype", name: "NoRemoteLockUnlock", id: 0x3, conformance: "M",
                            details: "This mode only disables remote interaction with the lock. This does not apply to any remote " +
                                     "proprietary means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock " +
                                     "with Timeout Commands",
                            xref: { document: "cluster", section: "5.2.6.12.4" }
                        },

                        {
                            tag: "datatype", name: "Passage", id: 0x4, conformance: "O",
                            details: "The lock is open or can be opened or closed at will without the use of a Keypad or other means of " +
                                     "user validation (e.g. a lock for a business during work hours",
                            xref: { document: "cluster", section: "5.2.6.12.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationSourceEnum", type: "enum8",
                    details: "The OperationSource enumeration SHALL indicate the source of the Lock/Unlock operation performed. " +
                             "The data type of the OperationSource enum field is derived from enum8",
                    xref: { document: "cluster", section: "5.2.6.13" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "Manual", id: 0x1, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "ProprietaryRemote", id: 0x2, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "Keypad", id: 0x3, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "Auto", id: 0x4, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "Button", id: 0x5, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "Schedule", id: 0x6, conformance: "HDSCH",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "Remote", id: 0x7, conformance: "M",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "Rfid", id: 0x8, conformance: "RID",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        },

                        {
                            tag: "datatype", name: "Biometric", id: 0x9, conformance: "[USR]",
                            xref: { document: "cluster", section: "5.2.6.13" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "UserStatusEnum", type: "enum8",
                    details: "The UserStatus enum used in various commands SHALL indicate what the status is for a specific user " +
                             "ID",
                    xref: { document: "cluster", section: "5.2.6.15" },
                    children: [
                        {
                            tag: "datatype", name: "Available", id: 0x0, conformance: "M",
                            xref: { document: "cluster", section: "5.2.6.15" }
                        },

                        {
                            tag: "datatype", name: "OccupiedEnabled", id: 0x1, conformance: "M",
                            xref: { document: "cluster", section: "5.2.6.15" }
                        },

                        {
                            tag: "datatype", name: "OccupiedDisabled", id: 0x3, conformance: "O",
                            xref: { document: "cluster", section: "5.2.6.15" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "UserTypeEnum", type: "enum8",
                    details: "The UserType enum used in various commands SHALL indicate what the type is for a specific user ID",
                    xref: { document: "cluster", section: "5.2.6.16" },
                    children: [
                        {
                            tag: "datatype", name: "UnrestrictedUser", id: 0x0, conformance: "M",
                            details: "User has access 24/7 provided proper PIN or RFID is supplied (e.g., owner",
                            xref: { document: "cluster", section: "5.2.6.16.1" }
                        },

                        {
                            tag: "datatype", name: "YearDayScheduleUser", id: 0x1, conformance: "O",
                            details: "User has ability to open lock within a specific time period (e.g., guest",
                            xref: { document: "cluster", section: "5.2.6.16.2" }
                        },

                        {
                            tag: "datatype", name: "WeekDayScheduleUser", id: 0x2, conformance: "O",
                            details: "User has ability to open lock based on specific time period within a reoccurring weekly schedule (e." +
                                     "g., cleaning worker",
                            xref: { document: "cluster", section: "5.2.6.16.3" }
                        },

                        {
                            tag: "datatype", name: "ProgrammingUser", id: 0x3, conformance: "O",
                            details: "User has ability to both program and operate the door lock. This user can manage the users and user " +
                                     "schedules. In all other respects this user matches the unrestricted (default) user. ProgrammingUser " +
                                     "is the only user that can disable the user interface (keypad, remote, etc",
                            xref: { document: "cluster", section: "5.2.6.16.4" }
                        },

                        {
                            tag: "datatype", name: "NonAccessUser", id: 0x4, conformance: "O",
                            details: "User is recognized by the lock but does not have the ability to open the lock. This user will only " +
                                     "cause the lock to generate the appropriate event notification to any bound devices",
                            xref: { document: "cluster", section: "5.2.6.16.5" }
                        },

                        {
                            tag: "datatype", name: "ForcedUser", id: 0x5, conformance: "[USR]",
                            details: "User has ability to open lock but a ForcedUser LockOperationType and ForcedUser silent alarm will be" +
                                     " emitted to allow a notified Node to alert emergency services or contacts on the user account when " +
                                     "used",
                            xref: { document: "cluster", section: "5.2.6.16.6" }
                        },

                        {
                            tag: "datatype", name: "DisposableUser", id: 0x6, conformance: "[USR]",
                            details: "User has ability to open lock once after which the lock SHALL change the corresponding user record " +
                                     "UserStatus value to OccupiedDisabled automatically",
                            xref: { document: "cluster", section: "5.2.6.16.7" }
                        },

                        {
                            tag: "datatype", name: "ExpiringUser", id: 0x7, conformance: "[USR]",
                            details: "User has ability to open lock for ExpiringUserTimeout attribute minutes after the first use of the " +
                                     "PIN code, RFID code, Fingerprint, or other credential. After ExpiringUserTimeout minutes the " +
                                     "corresponding user record UserStatus value SHALL be set to OccupiedDisabled automatically by the " +
                                     "lock. The lock SHALL persist the timeout across reboots such that the ExpiringUserTimeout is honored",
                            xref: { document: "cluster", section: "5.2.6.16.8" }
                        },

                        {
                            tag: "datatype", name: "ScheduleRestrictedUser", id: 0x8, conformance: "WDSCH | YDSCH",
                            details: "User access is restricted by Week Day and/or Year Day schedule",
                            xref: { document: "cluster", section: "5.2.6.16.9" }
                        },

                        {
                            tag: "datatype", name: "RemoteOnlyUser", id: 0x9, conformance: "USR & COTA, IN",
                            details: "User access and PIN code is restricted to remote lock/unlock commands only. This type of user might " +
                                     "be useful for regular delivery services or voice assistant unlocking operations to prevent a PIN " +
                                     "code credential created for them from being used at the keypad. The PIN code credential would only " +
                                     "be provided over-the-air for the lock/unlock commands",
                            xref: { document: "cluster", section: "5.2.6.16.10" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "WindowCovering", id: 0x102, classification: "application",
            xref: { document: "cluster", section: "5.3" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "LF", id: 0x0, conformance: "O.a1+",
                            description: "Lift Control and behavior for lifting/sliding window coverings",
                            xref: { document: "cluster", section: "5.3.4" }
                        },

                        {
                            tag: "datatype", name: "TL", id: 0x1, conformance: "O.a1+",
                            description: "Tilt Control and behavior for tilting window coverings",
                            xref: { document: "cluster", section: "5.3.4" }
                        },

                        {
                            tag: "datatype", name: "PALF", id: 0x2, conformance: "[LF]",
                            description: "Position Aware lift control is supported.",
                            xref: { document: "cluster", section: "5.3.4" }
                        },

                        {
                            tag: "datatype", name: "ABS", id: 0x3, conformance: "O",
                            description: "Absolute positioning is supported.",
                            xref: { document: "cluster", section: "5.3.4" }
                        },

                        {
                            tag: "datatype", name: "PATL", id: 0x4, conformance: "[TL]",
                            description: "Position Aware tilt control is supported.",
                            xref: { document: "cluster", section: "5.3.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Type", id: 0x0, type: "enum8", access: "R V", conformance: "M",
                    constraint: "desc", default: 0, quality: "F",
                    details: "The Type attribute identifies the type of window covering being controlled by this endpoint and " +
                             "SHALL be set to one of the non-reserved values in the table below",
                    xref: { document: "cluster", section: "5.3.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Rollershade", id: 0x0,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rollershade2Motor", id: 0x1,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "RollershadeExterior", id: 0x2,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "RollershadeExterior2Motor", id: 0x3,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "Draperycurtain", id: 0x4,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "Awning", id: 0x5,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "Shutter", id: 0x6,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "TiltBlindTiltOnly", id: 0x7,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "TiltBlindLiftTilt", id: 0x8,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "ProjectorScreen", id: 0x9,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        },

                        {
                            tag: "datatype", name: "Unknown", id: 0xff,
                            xref: { document: "cluster", section: "5.3.5.1" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "PhysicalClosedLimitLift", id: 0x1, type: "uint16", access: "R V",
                    conformance: "[LF & P, A_LF & ABS]", default: 0, quality: "F",
                    details: "The PhysicalClosedLimitLift attribute identifies the maximum possible encoder position possible (in " +
                             "centimeters) to position the height of the window covering Lift",
                    xref: { document: "cluster", section: "5.3.5.2" }
                },

                {
                    tag: "attribute", name: "PhysicalClosedLimitTilt", id: 0x2, type: "uint16", access: "R V",
                    conformance: "[TL & P, A_TL & ABS]", default: 0, quality: "F",
                    details: "The PhysicalClosedLimitTilt attribute identifies the maximum possible encoder position possible (" +
                             "tenth of a degrees) to position the angle of the window covering Tilt",
                    xref: { document: "cluster", section: "5.3.5.3" }
                },

                {
                    tag: "attribute", name: "CurrentPositionLift1", id: 0x3, type: "uint16", access: "R V",
                    conformance: "[LF & P, A_LF & ABS]",
                    constraint: "InstalledOpenLimitLift to InstalledClosedLimitLift", default: undefined,
                    quality: "X N",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "CurrentPositionTilt1", id: 0x4, type: "uint16", access: "R V",
                    conformance: "[TL & P, A_TL & ABS]",
                    constraint: "InstalledOpenLimitTilt to InstalledClosedLimitTilt", default: undefined,
                    quality: "X N",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "NumberOfActuationsLift", id: 0x5, type: "uint16", access: "R V",
                    conformance: "[LF]", default: 0, quality: "N",
                    details: "The NumberOfActuationsLift attribute identifies the total number of lift/slide actuations applied to" +
                             " the Window Covering since the device was installed",
                    xref: { document: "cluster", section: "5.3.5.6" }
                },

                {
                    tag: "attribute", name: "NumberOfActuationsTilt", id: 0x6, type: "uint16", access: "R V",
                    conformance: "[TL]", default: 0, quality: "N",
                    details: "The NumberOfActuationsTilt attribute identifies the total number of tilt actuations applied to the " +
                             "Window Covering since the device was installed",
                    xref: { document: "cluster", section: "5.3.5.7" }
                },

                {
                    tag: "attribute", name: "ConfigStatus", id: 0x7, type: "map8", access: "R V", conformance: "M",
                    constraint: "desc", quality: "N",
                    details: "The ConfigStatus attribute makes configuration and status information available. To change settings" +
                             ", devices SHALL write to the Mode attribute of the Window Covering Settings Attribute Set. The " +
                             "behavior causing the setting or clearing of each bit is vendor specific. See table below for details" +
                             " on each bit",
                    xref: { document: "cluster", section: "5.3.5.8" }
                },

                {
                    tag: "attribute", name: "CurrentPositionLiftPercentage1", id: 0x8, type: "percent", access: "R V",
                    conformance: "[LF & P, A_LF]", constraint: "0 to 100", default: undefined, quality: "X N S P",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "CurrentPositionTiltPercentage1", id: 0x9, type: "percent", access: "R V",
                    conformance: "[TL & P, A_TL]", constraint: "0 to 100", default: undefined, quality: "X N S P",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "OperationalStatus", id: 0xa, type: "map8", access: "R V", conformance: "M",
                    default: 0, quality: "P",
                    details: "The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type " +
                             "of devices. See below for details about the meaning of individual bits",
                    xref: { document: "cluster", section: "5.3.5.15" }
                },

                {
                    tag: "attribute", name: "TargetPositionLiftPercent100Ths2", id: 0xb, type: "percent100ths",
                    access: "R V", conformance: "LF & P, A_LF", constraint: "0 to 10000", default: undefined,
                    quality: "X S P",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "TargetPositionTiltPercent100Ths2", id: 0xc, type: "percent100ths",
                    access: "R V", conformance: "TL & P, A_TL", constraint: "0 to 10000", default: undefined,
                    quality: "X S P",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "EndProductType", id: 0xd, type: "enum8", access: "R V", conformance: "M",
                    constraint: "desc", default: 0, quality: "F",
                    details: "The EndProductType attribute identifies the product type in complement of the main category " +
                             "indicated by the Type attribute. The window covering SHALL set this value to one of the values in " +
                             "the table below",
                    xref: { document: "cluster", section: "5.3.5.16" }
                },

                {
                    tag: "attribute", name: "CurrentPositionLiftPercent100Ths1", id: 0xe, type: "percent100ths",
                    access: "R V", conformance: "LF & P, A_LF", constraint: "0 to 10000", default: undefined,
                    quality: "X N P",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "CurrentPositionTiltPercent100Ths1", id: 0xf, type: "percent100ths",
                    access: "R V", conformance: "TL & P, A_TL", constraint: "0 to 10000", default: undefined,
                    quality: "X N P",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "InstalledOpenLimitLift", id: 0x10, type: "uint16", access: "R V",
                    conformance: "LF & P, A_LF & ABS", constraint: "0 to 65534", default: 0, quality: "N",
                    details: "The InstalledOpenLimitLift attribute identifies the Open Limit for Lifting the Window Covering " +
                             "whether position (in centimeters) is encoded or timed",
                    xref: { document: "cluster", section: "5.3.5.17" }
                },

                {
                    tag: "attribute", name: "InstalledClosedLimitLift", id: 0x11, type: "uint16", access: "R V",
                    conformance: "LF & P, A_LF & ABS", constraint: "0 to 65534", default: 65534, quality: "N",
                    details: "The InstalledClosedLimitLift attribute identifies the Closed Limit for Lifting the Window Covering " +
                             "whether position (in centimeters) is encoded or timed",
                    xref: { document: "cluster", section: "5.3.5.18" }
                },

                {
                    tag: "attribute", name: "InstalledOpenLimitTilt", id: 0x12, type: "uint16", access: "R V",
                    conformance: "TL & P, A_TL & ABS", constraint: "0 to 65534", default: 0, quality: "N",
                    details: "The InstalledOpenLimitTilt attribute identifies the Open Limit for Tilting the Window Covering " +
                             "whether position (in tenth of a degree) is encoded or timed",
                    xref: { document: "cluster", section: "5.3.5.19" }
                },

                {
                    tag: "attribute", name: "InstalledClosedLimitTilt", id: 0x13, type: "uint16", access: "R V",
                    conformance: "TL & P, A_TL & ABS", constraint: "0 to 65534", default: 65534, quality: "N",
                    details: "The InstalledClosedLimitTilt attribute identifies the Closed Limit for Tilting the Window Covering " +
                             "whether position (in tenth of a degree) is encoded or timed",
                    xref: { document: "cluster", section: "5.3.5.20" }
                },

                {
                    tag: "attribute", name: "VelocityLift", id: 0x14, conformance: "D",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "AccelerationTimeLift", id: 0x15, conformance: "D",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "DecelerationTimeLift", id: 0x16, conformance: "D",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "Mode", id: 0x17, type: "map8", access: "RW VM", conformance: "M",
                    default: 0, quality: "N",
                    details: "The Mode attribute allows configuration of the Window Covering, such as: reversing the motor " +
                             "direction, placing the Window Covering into calibration mode, placing the motor into maintenance " +
                             "mode, disabling the network, and disabling status LEDs. See below for details",
                    xref: { document: "cluster", section: "5.3.5.21" }
                },

                {
                    tag: "attribute", name: "IntermediateSetpointsLift", id: 0x18, conformance: "D",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "IntermediateSetpointsTilt", id: 0x19, conformance: "D",
                    xref: { document: "cluster", section: "5.3.5" }
                },

                {
                    tag: "attribute", name: "SafetyStatus", id: 0x1a, type: "map16", access: "R V", conformance: "O",
                    constraint: "desc", default: 0, quality: "P",
                    details: "The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing" +
                             " movements. By default for nominal operation all flags are cleared (0). A device might support none" +
                             ", one or several bit flags from this attribute (all optional). See below for details about the " +
                             "meaning of individual bits",
                    xref: { document: "cluster", section: "5.3.5.22" }
                },

                {
                    tag: "command", name: "UpOrOpen", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Upon receipt of this command, the Window Covering will adjust its position so the physical lift/" +
                             "slide and tilt is at the maximum open/up position. This will happen as fast as possible. The server " +
                             "attributes SHALL be updated as follows",
                    xref: { document: "cluster", section: "5.3.6.1" }
                },

                {
                    tag: "command", name: "DownOrClose", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Upon receipt of this command, the Window Covering will adjust its position so the physical lift/" +
                             "slide and tilt is at the maximum closed/down position. This will happen as fast as possible. The " +
                             "server attributes supported SHALL be updated as follows",
                    xref: { document: "cluster", section: "5.3.6.2" }
                },

                {
                    tag: "command", name: "StopMotion", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and " +
                             "lift/slide that is currently occurring. The server attributes supported SHALL be updated as follows",
                    xref: { document: "cluster", section: "5.3.6.3" }
                },

                {
                    tag: "command", name: "GoToLiftValue", id: 0x4, access: "O", conformance: "[LF & ABS]",
                    direction: "request", response: "status",
                    details: "The GoToLiftValue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "5.3.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "LiftValue", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "5.3.6.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "GoToLiftPercentage", id: 0x5, access: "O", conformance: "LF & P, A_LF, [LF]",
                    direction: "request", response: "status",
                    details: "The GoToLiftPercentage command SHALL have the following data fields",
                    xref: { document: "cluster", section: "5.3.6.5" },
                    children: [
                        {
                            tag: "datatype", name: "LiftPercentageValue", id: 0x0, type: "percent", conformance: "O.a1",
                            constraint: "desc",
                            xref: { document: "cluster", section: "5.3.6.5" }
                        },

                        {
                            tag: "datatype", name: "LiftPercent100ThsValue", id: 0x1, type: "percent100ths",
                            conformance: "O.a1", constraint: "desc",
                            xref: { document: "cluster", section: "5.3.6.5" }
                        }
                    ]
                },

                {
                    tag: "command", name: "GoToTiltValue", id: 0x7, access: "O", conformance: "[TL & ABS]",
                    direction: "request", response: "status",
                    details: "The GoToTiltValue command SHALL have the following data fields",
                    xref: { document: "cluster", section: "5.3.6.6" },
                    children: [
                        {
                            tag: "datatype", name: "TiltValue", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
                            xref: { document: "cluster", section: "5.3.6.6" }
                        }
                    ]
                },

                {
                    tag: "command", name: "GoToTiltPercentage", id: 0x8, access: "O", conformance: "TL & P, A_TL, [TL]",
                    direction: "request", response: "status",
                    details: "The GoToTiltPercentage command SHALL have the following data fields",
                    xref: { document: "cluster", section: "5.3.6.7" },
                    children: [
                        {
                            tag: "datatype", name: "TiltPercentageValue", id: 0x0, type: "percent", conformance: "O.a1",
                            constraint: "desc",
                            xref: { document: "cluster", section: "5.3.6.7" }
                        },

                        {
                            tag: "datatype", name: "TiltPercent100ThsValue", id: 0x1, type: "percent100ths",
                            conformance: "O.a1", constraint: "desc",
                            xref: { document: "cluster", section: "5.3.6.7" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "AccountLogin", id: 0x50e, classification: "application",
            xref: { document: "cluster", section: "6.2" },
            children: [
                {
                    tag: "command", name: "GetSetupPin", id: 0x0, access: "A T", conformance: "M", direction: "request",
                    response: "GetSetupPinResponse",
                    details: "The purpose of this command is to determine if the active user account of the given Content App " +
                             "matches the active user account of a given Commissionee, and when it does, return a Setup PIN code " +
                             "which can be used for password-authenticated session establishment (PASE) with the Commissionee",
                    xref: { document: "cluster", section: "6.2.4.1" }
                },

                {
                    tag: "command", name: "GetSetupPinResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or " +
                             "null when the account identified in the request does not match the active account of the running " +
                             "Content App",
                    xref: { document: "cluster", section: "6.2.4.2" }
                },

                {
                    tag: "command", name: "Login", id: 0x2, access: "A T", conformance: "M", direction: "request",
                    response: "status",
                    details: "The purpose of this command is to allow the Content App to assume the user account of a given " +
                             "Commissionee by leveraging the Setup PIN code input by the user during the commissioning process",
                    xref: { document: "cluster", section: "6.2.4.3" }
                },

                {
                    tag: "command", name: "Logout", id: 0x3, access: "O T", conformance: "M", direction: "request",
                    response: "status",
                    details: "The purpose of this command is to instruct the Content App to clear the current user account. This " +
                             "command SHOULD be used by clients of a Content App to indicate the end of a user session",
                    xref: { document: "cluster", section: "6.2.4.4" }
                }
            ]
        },

        {
            tag: "cluster", name: "ApplicationBasic", id: 0x50d, classification: "application",
            xref: { document: "cluster", section: "6.3" },
            children: [
                {
                    tag: "attribute", name: "VendorName", id: 0x0, type: "string", access: "R V", conformance: "O",
                    constraint: "max 32", default: "empty", quality: "F",
                    details: "This attribute SHALL specify a human readable (displayable) name of the vendor for the Content App",
                    xref: { document: "cluster", section: "6.3.3.1" }
                },

                {
                    tag: "attribute", name: "VendorId", id: 0x1, type: "vendor-id", access: "R V", conformance: "O",
                    quality: "F",
                    details: "This attribute, if present, SHALL specify the Connectivity Standards Alliance assigned Vendor ID for" +
                             " the Content App",
                    xref: { document: "cluster", section: "6.3.3.2" }
                },

                {
                    tag: "attribute", name: "ApplicationName", id: 0x2, type: "string", access: "R V", conformance: "M",
                    constraint: "desc", quality: "F",
                    details: "This attribute SHALL specify a human readable (displayable) name of the Content App assigned by the " +
                             "vendor. For example, \"NPR On Demand\". The maximum length of the ApplicationName attribute is 256 " +
                             "bytes of UTF-8 characters",
                    xref: { document: "cluster", section: "6.3.3.3" }
                },

                {
                    tag: "attribute", name: "ProductId", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    quality: "F",
                    details: "This attribute, if present, SHALL specify a numeric ID assigned by the vendor to identify a specific" +
                             " Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, " +
                             "then this would be the Product ID as specified by the vendor for the certification",
                    xref: { document: "cluster", section: "6.3.3.4" }
                },

                {
                    tag: "attribute", name: "Application", id: 0x4, type: "ApplicationStruct", access: "R V",
                    conformance: "M", constraint: "desc", quality: "F",
                    details: "This attribute SHALL specify a Content App which consists of an Application ID using a specified " +
                             "catalog",
                    xref: { document: "cluster", section: "6.3.3.5" }
                },

                {
                    tag: "attribute", name: "Status", id: 0x5, type: "ApplicationStatusEnum", access: "R V",
                    conformance: "M", constraint: "desc",
                    details: "This attribute SHALL specify the current running status of the application",
                    xref: { document: "cluster", section: "6.3.3.6" }
                },

                {
                    tag: "attribute", name: "ApplicationVersion", id: 0x6, type: "string", access: "R V",
                    conformance: "M", constraint: "max 32", quality: "F",
                    details: "This attribute SHALL specify a human readable (displayable) version of the Content App assigned by " +
                             "the vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 charac",
                    xref: { document: "cluster", section: "6.3.3.7" }
                },

                {
                    tag: "attribute", name: "AllowedVendorList", id: 0x7, type: "list", access: "R A", conformance: "M",
                    constraint: "None", quality: "F",
                    details: "This is a list of vendor IDs. Each entry is a vendor-id",
                    xref: { document: "cluster", section: "6.3.3.8" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "vendor-id"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationStruct", type: "struct",
                    details: "This indicates a global identifier for an Application given a catalog",
                    xref: { document: "cluster", section: "6.3.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M",
                            details: "This SHALL indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL " +
                                     "registry SHALL use value 0x0000",
                            xref: { document: "cluster", section: "6.3.4.1.1" }
                        },

                        {
                            tag: "datatype", name: "ApplicationId", id: 0x1, type: "string", conformance: "M",
                            details: "This SHALL indicate the application identifier, expressed as a string, such as \"123456-5433\", \"" +
                                     "PruneVideo\" or \"Company X\". This field SHALL be unique within a catalog",
                            xref: { document: "cluster", section: "6.3.4.1.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationStatusEnum", type: "enum8",
                    details: "ApplicationStatusEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.3.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "Stopped", id: 0x0, conformance: "M",
                            description: "Application is not running.",
                            xref: { document: "cluster", section: "6.3.4.2" }
                        },

                        {
                            tag: "datatype", name: "ActiveVisibleFocus", id: 0x1, conformance: "M",
                            description: "Application is running, is visible to the user, and is the active target for input.",
                            xref: { document: "cluster", section: "6.3.4.2" }
                        },

                        {
                            tag: "datatype", name: "ActiveHidden", id: 0x2, conformance: "M",
                            description: "Application is running but not visible to the user.",
                            xref: { document: "cluster", section: "6.3.4.2" }
                        },

                        {
                            tag: "datatype", name: "ActiveVisibleNotFocus", id: 0x3, conformance: "M",
                            description: "Application is running and visible, but is not the active target for input.",
                            xref: { document: "cluster", section: "6.3.4.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ApplicationLauncher", id: 0x50c, classification: "application",
            xref: { document: "cluster", section: "6.4" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "AP", id: 0x0,
                            description: "Support for attributes and commands required for endpoint to support launching any application within the supported application catalogs",
                            xref: { document: "cluster", section: "6.4.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CatalogList", id: 0x0, type: "list", access: "R V", conformance: "AP",
                    constraint: "None", quality: "N",
                    details: "This attribute SHALL specify the list of supported application catalogs, where each entry in the " +
                             "list is the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) SHALL use " +
                             "value 0x0000",
                    xref: { document: "cluster", section: "6.4.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "uint16"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentApp", id: 0x1, type: "ApplicationEPStruct", access: "R V",
                    conformance: "O", constraint: "desc", default: undefined, quality: "X",
                    details: "This attribute SHALL specify the current in-focus application, identified using an Application ID, " +
                             "catalog vendor ID and the corresponding endpoint number when the application is represented by a " +
                             "Content App endpoint. A null SHALL be used to indicate there is no current in-focus application",
                    xref: { document: "cluster", section: "6.4.3.2" }
                },

                {
                    tag: "command", name: "LaunchApp", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "LauncherResponse",
                    details: "Upon receipt of this command, the server SHALL launch the application with optional data. The " +
                             "application SHALL be either",
                    xref: { document: "cluster", section: "6.4.4.1" }
                },

                {
                    tag: "command", name: "StopApp", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "LauncherResponse",
                    details: "Upon receipt of this command, the server SHALL stop the application if it is running. The " +
                             "application SHALL be either",
                    xref: { document: "cluster", section: "6.4.4.2" }
                },

                {
                    tag: "command", name: "HideApp", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "LauncherResponse",
                    details: "Upon receipt of this command, the server SHALL hide the application. The application SHALL be either",
                    xref: { document: "cluster", section: "6.4.4.3" }
                },

                {
                    tag: "command", name: "LauncherResponse", id: 0x3, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to LaunchApp/StopApp/HideApp commands",
                    xref: { document: "cluster", section: "6.4.4.4" }
                },

                {
                    tag: "datatype", name: "StatusEnum", type: "enum8",
                    details: "StatusEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.4.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.4.5.1" }
                        },

                        {
                            tag: "datatype", name: "AppNotAvailable", id: 0x1, conformance: "M",
                            description: "Requested app is not available.",
                            xref: { document: "cluster", section: "6.4.5.1" }
                        },

                        {
                            tag: "datatype", name: "SystemBusy", id: 0x2, conformance: "M",
                            description: "Video platform unable to honor command.",
                            xref: { document: "cluster", section: "6.4.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationStruct", type: "struct",
                    details: "This indicates a global identifier for an Application given a catalog",
                    xref: { document: "cluster", section: "6.4.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M",
                            details: "This SHALL indicate the CSA-issued vendor ID for the catalog. The DIAL registry SHALL use value " +
                                     "0x0000",
                            xref: { document: "cluster", section: "6.4.5.2.1" }
                        },

                        {
                            tag: "datatype", name: "ApplicationId", id: 0x1, type: "string", conformance: "M",
                            details: "This SHALL indicate the application identifier, expressed as a string, such as \"PruneVideo\" or \"" +
                                     "Company X\". This field SHALL be unique within a catalog",
                            xref: { document: "cluster", section: "6.4.5.2.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ApplicationEPStruct", type: "struct",
                    details: "This specifies an app along with its corresponding endpoint",
                    xref: { document: "cluster", section: "6.4.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "M",
                            xref: { document: "cluster", section: "6.4.5.3" }
                        },

                        {
                            tag: "datatype", name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "O",
                            xref: { document: "cluster", section: "6.4.5.3" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "AudioOutput", id: 0x50b, classification: "application",
            xref: { document: "cluster", section: "6.5" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "NU", id: 0x0, description: "Supports updates to output names",
                            xref: { document: "cluster", section: "6.5.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "OutputList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    constraint: "None",
                    details: "This list provides the outputs supported by the device",
                    xref: { document: "cluster", section: "6.5.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "OutputInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentOutput", id: 0x1, type: "uint8", access: "R V", conformance: "M",
                    details: "This field contains the value of the index field of the currently selected OutputInfoStruct",
                    xref: { document: "cluster", section: "6.5.3.2" }
                },

                {
                    tag: "command", name: "SelectOutput", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "6.5.4" }
                },

                {
                    tag: "command", name: "RenameOutput", id: 0x1, access: "M", conformance: "NU", direction: "request",
                    response: "status",
                    details: "Upon receipt, this SHALL rename the output at a specific index in the Output List",
                    xref: { document: "cluster", section: "6.5.4.2" }
                },

                {
                    tag: "datatype", name: "OutputInfoStruct", type: "struct",
                    details: "This contains information about an output",
                    xref: { document: "cluster", section: "6.5.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Index", id: 0x0, type: "uint8", conformance: "M",
                            details: "This SHALL indicate the unique index into the list of outputs",
                            xref: { document: "cluster", section: "6.5.5.1.1" }
                        },

                        {
                            tag: "datatype", name: "OutputType", id: 0x1, type: "OutputTypeEnum", conformance: "M",
                            constraint: "desc",
                            details: "This SHALL indicate the type of output",
                            xref: { document: "cluster", section: "6.5.5.1.2" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "M",
                            details: "The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be " +
                                     "blank, but SHOULD be provided when known",
                            xref: { document: "cluster", section: "6.5.5.1.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OutputTypeEnum", type: "enum8",
                    xref: { document: "cluster", section: "6.5.5.2" }
                }
            ]
        },

        {
            tag: "cluster", name: "Channel", id: 0x504, classification: "application",
            xref: { document: "cluster", section: "6.6" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "CL", id: 0x0, description: "Provides list of available channels.",
                            xref: { document: "cluster", section: "6.6.2" }
                        },

                        {
                            tag: "datatype", name: "LI", id: 0x1,
                            description: "Provides lineup info, which is a reference to an external source of lineup information.",
                            xref: { document: "cluster", section: "6.6.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ChannelList", id: 0x0, type: "list", access: "R V", conformance: "CL",
                    constraint: "None", default: [],
                    details: "This optional list provides the channels supported",
                    xref: { document: "cluster", section: "6.6.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "ChannelInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Lineup", id: 0x1, type: "LineupInfoStruct", access: "R V",
                    conformance: "LI", constraint: "desc",
                    details: "This optional field identifies the channel lineup using external data sources",
                    xref: { document: "cluster", section: "6.6.3.2" }
                },

                {
                    tag: "attribute", name: "CurrentChannel", id: 0x2, type: "ChannelInfoStruct", access: "R V",
                    conformance: "O", constraint: "desc", default: undefined, quality: "X",
                    details: "This optional field contains the current channel. When supported but a channel is not currently " +
                             "tuned to (if a content application is in foreground), the value of the field SHALL be null",
                    xref: { document: "cluster", section: "6.6.3.3" }
                },

                {
                    tag: "command", name: "ChangeChannel", id: 0x0, access: "O", conformance: "CL, LI",
                    direction: "request", response: "ChangeChannelResponse",
                    details: "Change the channel to the channel case-insensitive exact matching the value passed as an argument",
                    xref: { document: "cluster", section: "6.6.4.1" }
                },

                {
                    tag: "command", name: "ChangeChannelResponse", id: 0x1, conformance: "CL, LI",
                    direction: "response",
                    details: "This command SHALL be generated in response to a ChangeChannel command. The data for this command " +
                             "SHALL be as follows",
                    xref: { document: "cluster", section: "6.6.4.2" }
                },

                {
                    tag: "command", name: "ChangeChannelByNumber", id: 0x2, access: "O", conformance: "M",
                    direction: "request", response: "status",
                    details: "Change the channel to the channel with the given Number in the ChannelList attribute. The data for " +
                             "this command SHALL be as follows",
                    xref: { document: "cluster", section: "6.6.4.3" }
                },

                {
                    tag: "command", name: "SkipChannel", id: 0x3, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "This command provides channel up and channel down functionality, but allows channel index jumps of " +
                             "size Count",
                    xref: { document: "cluster", section: "6.6.4.4" }
                },

                {
                    tag: "datatype", name: "ChannelInfoStruct", type: "struct",
                    details: "This indicates a channel in a channel lineup",
                    xref: { document: "cluster", section: "6.6.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "MajorNumber", id: 0x0, type: "uint16", conformance: "M",
                            details: "This SHALL indicate the channel major number value (for example, using ATSC format). When the " +
                                     "channel number is expressed as a string, such as \"13.1\" or \"256\", the major number would be 13 or " +
                                     "256, respectively",
                            xref: { document: "cluster", section: "6.6.5.1.1" }
                        },

                        {
                            tag: "datatype", name: "MinorNumber", id: 0x1, type: "uint16", conformance: "M",
                            details: "This SHALL indicate the channel minor number value (for example, using ATSC format). When the " +
                                     "channel number is expressed as a string, such as \"13.1\" or \"256\", the minor number would be 1 or 0, " +
                                     "respectively",
                            xref: { document: "cluster", section: "6.6.5.1.2" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "O", default: "empty",
                            details: "This SHALL indicate the marketing name for the channel, such as “The CW\" or \"Comedy Central\". This " +
                                     "field is optional, but SHOULD be provided when known",
                            xref: { document: "cluster", section: "6.6.5.1.3" }
                        },

                        {
                            tag: "datatype", name: "CallSign", id: 0x3, type: "string", conformance: "O", default: "empty",
                            details: "This SHALL indicate the call sign of the channel, such as \"PBS\". This field is optional, but SHOULD " +
                                     "be provided when known",
                            xref: { document: "cluster", section: "6.6.5.1.4" }
                        },

                        {
                            tag: "datatype", name: "AffiliateCallSign", id: 0x4, type: "string", conformance: "O",
                            default: "empty",
                            details: "This SHALL indicate the local affiliate call sign, such as \"KCTS\". This field is optional, but " +
                                     "SHOULD be provided when known",
                            xref: { document: "cluster", section: "6.6.5.1.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LineupInfoStruct", type: "struct",
                    details: "The Lineup Info allows references to external lineup sources like Gracenote. The combination of " +
                             "OperatorName, LineupName, and PostalCode MUST uniquely identify a lineup",
                    xref: { document: "cluster", section: "6.6.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "OperatorName", id: 0x0, type: "string", conformance: "M",
                            details: "This SHALL indicate the name of the operator, for example “Comcast",
                            xref: { document: "cluster", section: "6.6.5.2.1" }
                        },

                        {
                            tag: "datatype", name: "LineupName", id: 0x1, type: "string", conformance: "O", default: "empty",
                            xref: { document: "cluster", section: "6.6.5.2" }
                        },

                        {
                            tag: "datatype", name: "PostalCode", id: 0x2, type: "string", conformance: "O", default: "empty",
                            xref: { document: "cluster", section: "6.6.5.2" }
                        },

                        {
                            tag: "datatype", name: "LineupInfoType", id: 0x3, type: "LineupInfoTypeEnum", conformance: "M",
                            constraint: "desc",
                            details: "This SHALL indicate the type of lineup. This field is optional, but SHOULD be provided when known",
                            xref: { document: "cluster", section: "6.6.5.2.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "LineupInfoTypeEnum", type: "enum8",
                    details: "LineupInfoTypeEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.6.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "Mso", id: 0x0, conformance: "M", description: "MultiSystemOperator",
                            xref: { document: "cluster", section: "6.6.5.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "StatusEnum", type: "enum8",
                    details: "StatusEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.6.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.6.5.4" }
                        },

                        {
                            tag: "datatype", name: "MultipleMatches", id: 0x1, conformance: "M",
                            description: "More than one equal match for the ChannelInfoStruct passed in.",
                            xref: { document: "cluster", section: "6.6.5.4" }
                        },

                        {
                            tag: "datatype", name: "NoMatches", id: 0x2, conformance: "M",
                            description: "No matches for the ChannelInfoStruct passed in.",
                            xref: { document: "cluster", section: "6.6.5.4" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ContentLauncher", id: 0x50a, classification: "application",
            xref: { document: "cluster", section: "6.7" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "CS", id: 0x0,
                            description: "Device supports content search (non-app specific)",
                            xref: { document: "cluster", section: "6.7.2" }
                        },

                        {
                            tag: "datatype", name: "UP", id: 0x1, description: "Device supports basic URL-based file playback",
                            xref: { document: "cluster", section: "6.7.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "AcceptHeader", id: 0x0, type: "list", access: "R V", conformance: "UP",
                    constraint: "max 100[max 1024]", default: [], quality: "N",
                    details: "This list provides list of content types supported by the Video Player or Content App in the form of" +
                             " entries in the HTTP \"Accept\" request header",
                    xref: { document: "cluster", section: "6.7.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "string"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "SupportedStreamingProtocols", id: 0x1, type: "map32", access: "R V",
                    conformance: "UP", default: 0, quality: "N",
                    details: "This attribute provides information about supported streaming protocols",
                    xref: { document: "cluster", section: "6.7.3.2" }
                },

                {
                    tag: "command", name: "LaunchContent", id: 0x0, access: "O", conformance: "CS",
                    direction: "request", response: "LauncherResponse",
                    details: "Upon receipt, this SHALL launch the specified content with optional search criteria. This command " +
                             "returns a Launch Response",
                    xref: { document: "cluster", section: "6.7.4.1" }
                },

                {
                    tag: "command", name: "LaunchUrl", id: 0x1, access: "O", conformance: "UP", direction: "request",
                    response: "LauncherResponse",
                    details: "Upon receipt, this SHALL launch content from the specified URL",
                    xref: { document: "cluster", section: "6.7.4.2" }
                },

                {
                    tag: "command", name: "LauncherResponse", id: 0x2, conformance: "CS | UP", direction: "response",
                    details: "This command SHALL be generated in response to LaunchContent and LaunchURL commands",
                    xref: { document: "cluster", section: "6.7.4.3" }
                },

                {
                    tag: "datatype", name: "StatusEnum", type: "enum8",
                    details: "StatusEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.7.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.7.5.1" }
                        },

                        {
                            tag: "datatype", name: "UrlNotAvailable", id: 0x1, conformance: "M",
                            description: "Requested URL could not be reached by device.",
                            xref: { document: "cluster", section: "6.7.5.1" }
                        },

                        {
                            tag: "datatype", name: "AuthFailed", id: 0x2, conformance: "M",
                            description: "Requested URL returned 401 error code.",
                            xref: { document: "cluster", section: "6.7.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ContentSearchStruct", type: "struct",
                    details: "This object defines inputs to a search for content for display or playback",
                    xref: { document: "cluster", section: "6.7.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "ParameterList", id: 0x0, type: "list", conformance: "M", default: "0",
                            details: "This SHALL indicate the list of parameters comprising the search. If multiple parameters are " +
                                     "provided, the search parameters SHALL be joined with 'AND' logic. e.g. action movies with Tom Cruise" +
                                     " will be represented as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action",
                            xref: { document: "cluster", section: "6.7.5.2.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "ParameterStruct"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ParameterStruct", type: "struct",
                    details: "This object defines inputs to a search for content for display or playback",
                    xref: { document: "cluster", section: "6.7.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "Type", id: 0x0, type: "ParameterEnum", conformance: "M",
                            details: "This SHALL indicate the entity type",
                            xref: { document: "cluster", section: "6.7.5.3.1" }
                        },

                        {
                            tag: "datatype", name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 1024",
                            details: "This SHALL indicate the entity value, which is a search string, ex. “Manchester by the Sea",
                            xref: { document: "cluster", section: "6.7.5.3.2" }
                        },

                        {
                            tag: "datatype", name: "ExternalIdList", id: 0x2, type: "list", conformance: "O", default: [],
                            details: "This SHALL indicate the list of additional external content identifiers",
                            xref: { document: "cluster", section: "6.7.5.3.3" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "AdditionalInfoStruct"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ParameterEnum", type: "enum8",
                    details: "Parameter Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.7.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "Actor", id: 0x0, conformance: "M",
                            description: "Actor represents an actor credited in video media content; for example, “Gaby sHoffman”",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Channel", id: 0x1, conformance: "M",
                            description: "Channel represents the identifying data for a television channel; for example, \"PBS\"",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Character", id: 0x2, conformance: "M",
                            description: "A character represented in video media content; for example, “Snow White”",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Director", id: 0x3, conformance: "M",
                            description: "A director of the video media content; for example, “Spike Lee”",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Event", id: 0x4, conformance: "M",
                            description: "An event is a reference to a type of event; examples would include sports, music, or other types of events. For example, searching for \"Football games\" would search for a 'game' event entity and a 'football' sport entity.",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Franchise", id: 0x5, conformance: "M",
                            description: "A franchise is a video entity which can represent a number of video entities, like movies or TV shows. For example, take the fictional franchise \"Intergalactic Wars\" which represents a collection of movie trilogies, as well as animated and live action TV shows. This entity type was introduced to account for requests by customers such as \"Find Intergalactic Wars movies\", which would search for all 'Intergalactic Wars' programs of the MOVIE MediaType, rather than attempting to match to a single title.",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Genre", id: 0x6, conformance: "M",
                            description: "Genre represents the genre of video media content such as action, drama or comedy.",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "League", id: 0x7, conformance: "M",
                            description: "League represents the categorical information for a sporting league; for example, \"NCAA\"",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Popularity", id: 0x8, conformance: "M",
                            description: "Popularity indicates whether the user asks for popular content.",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Provider", id: 0x9, conformance: "M",
                            description: "The provider (MSP) the user wants this media to be played on; for example, \"Netflix\".",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Sport", id: 0xa, conformance: "M",
                            description: "Sport represents the categorical information of a sport; for example, football",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "SportsTeam", id: 0xb, conformance: "M",
                            description: "SportsTeam represents the categorical information of a professional sports team; for example, \"University of Washington Huskies\"",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Type", id: 0xc, conformance: "M",
                            description: "The type of content requested. Supported types are \"Movie\", \"MovieSeries\", \"TVSeries\", \"TVSeason\", \"TVEpisode\", \"SportsEvent\", and \"Video\"",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Video", id: 0xd, conformance: "M",
                            description: "Video represents the identifying data for a specific piece of video content; for example, \"Manchester by the Sea\".",
                            xref: { document: "cluster", section: "6.7.5.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AdditionalInfoStruct", type: "struct",
                    details: "This object defines additional name=value pairs that can be used for identifying content",
                    xref: { document: "cluster", section: "6.7.5.5" },
                    children: [
                        {
                            tag: "datatype", name: "Name", id: 0x0, type: "string", conformance: "M", constraint: "max 256",
                            details: "This SHALL indicate the name of external id, ex. \"musicbrainz",
                            xref: { document: "cluster", section: "6.7.5.5.1" }
                        },

                        {
                            tag: "datatype", name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 8192",
                            details: "This SHALL indicate the value for external id, ex. \"ST0000000666661",
                            xref: { document: "cluster", section: "6.7.5.5.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BrandingInformationStruct", type: "struct",
                    details: "This object defines Branding Information which can be provided by the client in order to customize " +
                             "the skin of the Video Player during playback",
                    xref: { document: "cluster", section: "6.7.5.6" }
                },

                {
                    tag: "datatype", name: "StyleInformationStruct", type: "struct",
                    details: "This object defines style information which can be used by content providers to change the Media " +
                             "Player’s style related properties",
                    xref: { document: "cluster", section: "6.7.5.7" }
                },

                {
                    tag: "datatype", name: "DimensionStruct", type: "struct",
                    details: "This object defines dimension which can be used for defining Size of background images",
                    xref: { document: "cluster", section: "6.7.5.8" }
                },

                {
                    tag: "datatype", name: "MetricTypeEnum", type: "enum8",
                    details: "MetricTypeEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.7.5.9" },
                    children: [
                        {
                            tag: "datatype", name: "Pixels", id: 0x0, conformance: "M",
                            details: "This value is used for dimensions defined in a number of Pixels",
                            xref: { document: "cluster", section: "6.7.5.9.1" }
                        },

                        {
                            tag: "datatype", name: "Percentage", id: 0x1, conformance: "M",
                            details: "This value is for dimensions defined as a percentage of the overall display dimensions. For example" +
                                     ", if using a Percentage Metric type for a Width measurement of 50.0, against a display width of 1920" +
                                     " pixels, then the resulting value used would be 960 pixels (50.0% of 1920) for that dimension. " +
                                     "Whenever a measurement uses this Metric type, the resulting values SHALL be rounded (\"floored\") " +
                                     "towards 0 if the measurement requires an integer final value",
                            xref: { document: "cluster", section: "6.7.5.9.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "KeypadInput", id: 0x509, classification: "application",
            xref: { document: "cluster", section: "6.8" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "NV", id: 0x0,
                            description: "Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU",
                            xref: { document: "cluster", section: "6.8.2" }
                        },

                        {
                            tag: "datatype", name: "LK", id: 0x1,
                            description: "Supports CEC keys 0x0A (Settings) and 0x09 (Home)",
                            xref: { document: "cluster", section: "6.8.2" }
                        },

                        {
                            tag: "datatype", name: "NK", id: 0x2, description: "Supports numeric input 0..9",
                            xref: { document: "cluster", section: "6.8.2" }
                        }
                    ]
                },

                {
                    tag: "command", name: "SendKey", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "SendKeyResponse",
                    details: "Upon receipt, this SHALL process a keycode as input to the media device",
                    xref: { document: "cluster", section: "6.8.3.1" }
                },

                {
                    tag: "command", name: "SendKeyResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to a SendKey command. The data for this command SHALL be" +
                             " as follows",
                    xref: { document: "cluster", section: "6.8.3.2" }
                },

                {
                    tag: "datatype", name: "StatusEnum", type: "enum8",
                    details: "Status Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.8.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.8.4.1" }
                        },

                        {
                            tag: "datatype", name: "UnsupportedKey", id: 0x1, conformance: "M",
                            description: "Command failed: Key code is not supported.",
                            xref: { document: "cluster", section: "6.8.4.1" }
                        },

                        {
                            tag: "datatype", name: "InvalidKeyInCurrentState", id: 0x2, conformance: "M",
                            description: "Command failed: Requested key code is invalid in the context of the responder’s current state.",
                            xref: { document: "cluster", section: "6.8.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "MediaInput", id: 0x507, classification: "application",
            xref: { document: "cluster", section: "6.9" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "NU", id: 0x0, description: "Supports updates to the input names",
                            xref: { document: "cluster", section: "6.9.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "InputList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    details: "This list provides the media inputs supported by the device",
                    xref: { document: "cluster", section: "6.9.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "InputInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentInput", id: 0x1, type: "uint8", access: "R V", conformance: "M",
                    details: "This field contains the value of the index field of the currently selected InputInfoStruct",
                    xref: { document: "cluster", section: "6.9.3.2" }
                },

                {
                    tag: "command", name: "SelectInput", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Upon receipt, this SHALL change the media input on the device to the input at a specific index in " +
                             "the Input List",
                    xref: { document: "cluster", section: "6.9.4.1" }
                },

                {
                    tag: "command", name: "ShowInputStatus", id: 0x1, access: "O", conformance: "M",
                    direction: "request", response: "status",
                    details: "Upon receipt, this SHALL display the active status of the input list on screen",
                    xref: { document: "cluster", section: "6.9.4.2" }
                },

                {
                    tag: "command", name: "HideInputStatus", id: 0x2, access: "O", conformance: "M",
                    direction: "request", response: "status",
                    details: "Upon receipt, this SHALL hide the input list from the screen",
                    xref: { document: "cluster", section: "6.9.4.3" }
                },

                {
                    tag: "command", name: "RenameInput", id: 0x3, access: "M", conformance: "NU", direction: "request",
                    response: "status",
                    details: "Upon receipt, this SHALL rename the input at a specific index in the Input List. Updates to the " +
                             "input name SHALL appear in the device’s settings menus",
                    xref: { document: "cluster", section: "6.9.4.4" }
                },

                {
                    tag: "datatype", name: "InputInfoStruct", type: "struct",
                    details: "This contains information about an input",
                    xref: { document: "cluster", section: "6.9.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Index", id: 0x0, type: "uint8", conformance: "M",
                            details: "This SHALL indicate the unique index into the list of Inputs",
                            xref: { document: "cluster", section: "6.9.5.1.1" }
                        },

                        {
                            tag: "datatype", name: "InputType", id: 0x1, type: "InputTypeEnum", conformance: "M",
                            constraint: "desc",
                            details: "This SHALL indicate the type of input",
                            xref: { document: "cluster", section: "6.9.5.1.2" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "M",
                            details: "This SHALL indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be " +
                                     "provided when known",
                            xref: { document: "cluster", section: "6.9.5.1.3" }
                        },

                        {
                            tag: "datatype", name: "Description", id: 0x3, type: "string", conformance: "M",
                            details: "This SHALL indicate the user editable input description, such as “Living room Playstation”. This " +
                                     "field may be blank, but SHOULD be provided when known",
                            xref: { document: "cluster", section: "6.9.5.1.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "InputTypeEnum", type: "enum8",
                    details: "InputType Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.9.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "Internal", id: 0x0, conformance: "M",
                            description: "Indicates content not coming from a physical input.",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Aux", id: 0x1, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Coax", id: 0x2, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Composite", id: 0x3, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Hdmi", id: 0x4, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Input", id: 0x5, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Line", id: 0x6, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Optical", id: 0x7, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Video", id: 0x8, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Scart", id: 0x9, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Usb", id: 0xa, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        },

                        {
                            tag: "datatype", name: "Other", id: 0xb, conformance: "M",
                            xref: { document: "cluster", section: "6.9.5.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "MediaPlayback", id: 0x506, classification: "application",
            xref: { document: "cluster", section: "6.10" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "AS", id: 0x0,
                            description: "Enables clients to implement more advanced media seeking behavior in their user interface, such as for example a \"seek bar\". Adds support for Attributes and Commands related to advanced seek support",
                            xref: { document: "cluster", section: "6.10.2" }
                        },

                        {
                            tag: "datatype", name: "VS", id: 0x1,
                            description: "Support for commands to support variable speed playback on media that supports it.",
                            xref: { document: "cluster", section: "6.10.2" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentState", id: 0x0, type: "PlaybackStateEnum", access: "R V",
                    conformance: "M", constraint: "desc",
                    details: "This SHALL indicate the current playback state of media",
                    xref: { document: "cluster", section: "6.10.3.1" }
                },

                {
                    tag: "attribute", name: "StartTime", id: 0x1, type: "epoch-us", access: "R V", conformance: "AS",
                    constraint: "desc", default: undefined, quality: "X",
                    details: "This SHALL indicate the start time of the media, in case the media has a fixed start time (for " +
                             "example, live stream or television broadcast), or null when start time does not apply to the current",
                    xref: { document: "cluster", section: "6.10.3.2" }
                },

                {
                    tag: "attribute", name: "Duration", id: 0x2, type: "uint64", access: "R V", conformance: "AS",
                    constraint: "desc", default: undefined, quality: "X",
                    details: "This SHALL indicate the duration, in milliseconds, of the current media being played back or null " +
                             "when duration is not applicable (for example, in live streaming content with no known duration). " +
                             "This attribute SHALL never be 0",
                    xref: { document: "cluster", section: "6.10.3.3" }
                },

                {
                    tag: "attribute", name: "SampledPosition", id: 0x3, type: "PlaybackPositionStruct", access: "R V",
                    conformance: "AS", constraint: "desc", default: undefined, quality: "X",
                    details: "This SHALL indicate the position of playback (Position field) at the time (UpdateAt field) specified" +
                             " in the attribute. The client MAY use the SampledPosition attribute to compute the current position " +
                             "within the media stream based on the PlaybackSpeed, PlaybackPositionStruct.UpdatedAt and " +
                             "PlaybackPositionStruct.Position fields. To enable this, the SampledPosition attribute SHALL be " +
                             "updated whenever a change in either the playback speed or the playback position is triggered outside" +
                             " the normal playback of the media. The events which MAY cause this to happen include",
                    xref: { document: "cluster", section: "6.10.3.4" }
                },

                {
                    tag: "attribute", name: "PlaybackSpeed", id: 0x4, type: "single", access: "R V", conformance: "AS",
                    constraint: "desc", default: 0,
                    details: "This SHALL indicate the speed at which the current media is being played. The new PlaybackSpeed",
                    xref: { document: "cluster", section: "6.10.3.5" }
                },

                {
                    tag: "attribute", name: "SeekRangeEnd", id: 0x5, type: "uint64", access: "R V", conformance: "AS",
                    constraint: "desc", default: undefined, quality: "X",
                    details: "This SHALL indicate the furthest forward valid position to which a client MAY seek forward, in " +
                             "milliseconds from the start of the media. When the media has an associated StartTime, a value of " +
                             "null SHALL indicate that a seek forward is valid only until the current time within the media, using" +
                             " a position computed from the difference between the current time offset and StartTime, in " +
                             "milliseconds from start of the media, truncating fractional milliseconds towards 0. A value of Nas " +
                             "when StartTime is not specified SHALL indicate that seeking forward is not allowed",
                    xref: { document: "cluster", section: "6.10.3.7" }
                },

                {
                    tag: "attribute", name: "SeekRangeStart", id: 0x6, type: "uint64", access: "R V", conformance: "AS",
                    constraint: "desc", default: undefined, quality: "X",
                    details: "This SHALL indicate the earliest valid position to which a client MAY seek back, in milliseconds " +
                             "from start of the media. A value of Nas SHALL indicate that seeking backwards is not allowed",
                    xref: { document: "cluster", section: "6.10.3.6" }
                },

                {
                    tag: "command", name: "Play", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL play media. If content is currently in a FastForward or Rewind state. Play " +
                             "SHALL return media to normal playback speed",
                    xref: { document: "cluster", section: "6.10.4.1" }
                },

                {
                    tag: "command", name: "Pause", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL pause playback of the media",
                    xref: { document: "cluster", section: "6.10.4.2" }
                },

                {
                    tag: "command", name: "Stop", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL stop playback of the media. User-visible outcome is context-specific. This " +
                             "MAY navigate the user back to the location from where the media was originally launched",
                    xref: { document: "cluster", section: "6.10.4.3" }
                },

                {
                    tag: "command", name: "StartOver", id: 0x3, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL Start Over with the current media playback item",
                    xref: { document: "cluster", section: "6.10.4.4" }
                },

                {
                    tag: "command", name: "Previous", id: 0x4, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL cause the handler to be invoked for \"Previous\". User experience is context-" +
                             "specific. This will often Go back to the previous media playback item",
                    xref: { document: "cluster", section: "6.10.4.5" }
                },

                {
                    tag: "command", name: "Next", id: 0x5, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL cause the handler to be invoked for \"Next\". User experience is context- " +
                             "specific. This will often Go forward to the next media playback item",
                    xref: { document: "cluster", section: "6.10.4.6" }
                },

                {
                    tag: "command", name: "Rewind", id: 0x6, access: "O", conformance: "VS", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL start playback of the media backward in case the media is currently playing" +
                             " in the forward direction or is not playing. If the playback is already happening in the backwards " +
                             "direction receipt of this command SHALL increase the speed of the media playback back",
                    xref: { document: "cluster", section: "6.10.4.7" }
                },

                {
                    tag: "command", name: "FastForward", id: 0x7, access: "O", conformance: "VS", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL start playback of the media in the forward direction in case the media is " +
                             "currently playing in the backward direction or is not playing. If the playback is already happening " +
                             "in the forward direction receipt of this command SHALL increase the speed of the media playback",
                    xref: { document: "cluster", section: "6.10.4.8" }
                },

                {
                    tag: "command", name: "SkipForward", id: 0x8, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL Skip forward in the media by the given number of milliseconds, using the " +
                             "data as follows",
                    xref: { document: "cluster", section: "6.10.4.9" }
                },

                {
                    tag: "command", name: "SkipBackward", id: 0x9, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL Skip backward in the media by the given number of milliseconds, using the " +
                             "data as follows",
                    xref: { document: "cluster", section: "6.10.4.10" }
                },

                {
                    tag: "command", name: "PlaybackResponse", id: 0xa, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to various Playback Commands. The data for this command " +
                             "SHALL be as follows",
                    xref: { document: "cluster", section: "6.10.4.12" }
                },

                {
                    tag: "command", name: "Seek", id: 0xb, access: "O", conformance: "AS", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this SHALL change the playback position in the media to the given position using data " +
                             "as follows",
                    xref: { document: "cluster", section: "6.10.4.11" }
                },

                {
                    tag: "datatype", name: "PlaybackStateEnum", type: "enum8",
                    details: "PlaybackStateEnum Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.10.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Playing", id: 0x0, conformance: "M",
                            description: "Media is currently playing (includes FF and REW)",
                            xref: { document: "cluster", section: "6.10.5.1" }
                        },

                        {
                            tag: "datatype", name: "Paused", id: 0x1, conformance: "M",
                            description: "Media is currently paused",
                            xref: { document: "cluster", section: "6.10.5.1" }
                        },

                        {
                            tag: "datatype", name: "NotPlaying", id: 0x2, conformance: "M",
                            description: "Media is not currently playing",
                            xref: { document: "cluster", section: "6.10.5.1" }
                        },

                        {
                            tag: "datatype", name: "Buffering", id: 0x3, conformance: "M",
                            description: "Media is not currently buffering and playback will start when buffer has been filled",
                            xref: { document: "cluster", section: "6.10.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "StatusEnum", type: "enum8",
                    details: "Status Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.10.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.10.5.2" }
                        },

                        {
                            tag: "datatype", name: "InvalidStateForCommand", id: 0x1, conformance: "M",
                            description: "Command failed: Requested playback command is invalid in the current playback state.",
                            xref: { document: "cluster", section: "6.10.5.2" }
                        },

                        {
                            tag: "datatype", name: "NotAllowed", id: 0x2, conformance: "M",
                            description: "Command failed: Requested playback command is not allowed in the current playback state. For example, attempting to fast-forward during a commercial might return NotAllowed.",
                            xref: { document: "cluster", section: "6.10.5.2" }
                        },

                        {
                            tag: "datatype", name: "NotActive", id: 0x3, conformance: "M",
                            description: "Command failed: This endpoint is not active for playback.",
                            xref: { document: "cluster", section: "6.10.5.2" }
                        },

                        {
                            tag: "datatype", name: "SpeedOutOfRange", id: 0x4, conformance: "VS",
                            description: "Command failed: The FastForward or Rewind Command was issued but the media is already playing back at the fastest speed supported by the server in the respective direction.",
                            xref: { document: "cluster", section: "6.10.5.2" }
                        },

                        {
                            tag: "datatype", name: "SeekOutOfRange", id: 0x5, conformance: "AS",
                            description: "Command failed: The Seek Command was issued with a value of position outside of the allowed seek range of the media.",
                            xref: { document: "cluster", section: "6.10.5.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "PlaybackPositionStruct", type: "struct",
                    details: "This structure defines a playback position within a media stream being played",
                    xref: { document: "cluster", section: "6.10.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "UpdatedAt", id: 0x0, type: "epoch-us", conformance: "M",
                            details: "This SHALL indicate the time when the position was last updated",
                            xref: { document: "cluster", section: "6.10.5.3.1" }
                        },

                        {
                            tag: "datatype", name: "Position", id: 0x1, type: "uint64", conformance: "M", quality: "X",
                            details: "This SHALL indicate the associated discrete position within the media stream, in milliseconds from " +
                                     "the beginning of the stream, being associated with the time indicated by the UpdatedAt field. The " +
                                     "Position SHALL not be greater than the duration of the media if duration is specified. The Position " +
                                     "SHALL not be greater than the time difference between current time and start time of the media when " +
                                     "start time is specified",
                            xref: { document: "cluster", section: "6.10.5.3.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "TargetNavigator", id: 0x505, classification: "application",
            xref: { document: "cluster", section: "6.11" },
            children: [
                {
                    tag: "attribute", name: "TargetList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    details: "The TargetList attribute SHALL represent a list of targets that can be navigated to within the " +
                             "experience presented to the user by the Endpoint (Video Player or Content App). The list SHALL not " +
                             "contain any entries with the same Identifier in the TargetInfoStruct object",
                    xref: { document: "cluster", section: "6.11.3.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "TargetInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentTarget", id: 0x1, type: "uint8", access: "R V", conformance: "O",
                    constraint: "desc", default: undefined, quality: "X",
                    details: "The CurrentTarget attribute SHALL represent the Identifier for the target which is currently in " +
                             "foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no " +
                             "target is in the foreground",
                    xref: { document: "cluster", section: "6.11.3.2" }
                },

                {
                    tag: "command", name: "NavigateTarget", id: 0x0, access: "O", conformance: "M",
                    direction: "request", response: "NavigateTargetResponse",
                    details: "Upon receipt, this SHALL navigation the UX to the target identified",
                    xref: { document: "cluster", section: "6.11.4.1" }
                },

                {
                    tag: "command", name: "NavigateTargetResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to NavigateTarget command",
                    xref: { document: "cluster", section: "6.11.4.2" }
                },

                {
                    tag: "datatype", name: "TargetInfoStruct", type: "struct",
                    details: "This indicates an object describing the navigable target",
                    xref: { document: "cluster", section: "6.11.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Identifier", id: 0x0, type: "uint8", conformance: "M",
                            details: "An unique id within the TargetList",
                            xref: { document: "cluster", section: "6.11.5.1.1" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M",
                            details: "A name string for the TargetInfoStruct",
                            xref: { document: "cluster", section: "6.11.5.1.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "StatusEnum", type: "enum8",
                    details: "Status Data Type is derived from enum8",
                    xref: { document: "cluster", section: "6.11.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded",
                            xref: { document: "cluster", section: "6.11.5.2" }
                        },

                        {
                            tag: "datatype", name: "TargetNotFound", id: 0x1, conformance: "M",
                            description: "Requested target was not found in the TargetList",
                            xref: { document: "cluster", section: "6.11.5.2" }
                        },

                        {
                            tag: "datatype", name: "NotAllowed", id: 0x2, conformance: "M",
                            description: "Target request is not allowed in current state.",
                            xref: { document: "cluster", section: "6.11.5.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Descriptor", id: 0x1d, classification: "endpoint",
            xref: { document: "core", section: "9.5" },
            children: [
                {
                    tag: "attribute", name: "DeviceTypeList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    constraint: "min 1", quality: "F",
                    details: "This is a list of device types and corresponding revisions declaring endpoint conformance (see " +
                             "DeviceTypeStruct). At least one device type entry SHALL be present",
                    xref: { document: "core", section: "9.5.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "DeviceTypeStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ServerList", id: 0x1, type: "list", access: "R V", conformance: "M",
                    default: [], quality: "F",
                    details: "This attribute SHALL list each cluster ID for the server clusters present on the endpoint instance",
                    xref: { document: "core", section: "9.5.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "cluster-id"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ClientList", id: 0x2, type: "list", access: "R V", conformance: "M",
                    default: [], quality: "F",
                    details: "This attribute SHALL list each cluster ID for the client clusters present on the endpoint instance",
                    xref: { document: "core", section: "9.5.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "cluster-id"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "PartsList", id: 0x3, type: "list", access: "R V", conformance: "M",
                    default: [],
                    details: "This attribute indicates composition of the device type instance. Device type instance composition " +
                             "SHALL include the endpoints in this list. See Endpoint Composition for more information which " +
                             "endpoints to include in this list",
                    xref: { document: "core", section: "9.5.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "endpoint-no"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DeviceTypeStruct", type: "struct",
                    details: "The device type and revision define endpoint conformance to a release of a device type definition. " +
                             "See the Data Model specification for more information",
                    xref: { document: "core", section: "9.5.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "DeviceType", id: 0x0, type: "devtype-id", conformance: "M",
                            xref: { document: "core", section: "9.5.4.1" }
                        },

                        {
                            tag: "datatype", name: "Revision", id: 0x1, type: "uint16", conformance: "M", constraint: "min 1",
                            xref: { document: "core", section: "9.5.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "Binding", id: 0x1e, classification: "endpoint",
            xref: { document: "core", section: "9.6" },
            children: [
                {
                    tag: "attribute", name: "Binding", id: 0x0, type: "list", access: "RW F VM", conformance: "M",
                    constraint: "desc", default: [], quality: "N",
                    details: "Each entry SHALL represent a binding. Here are some examples",
                    xref: { document: "core", section: "9.6.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "TargetStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TargetStruct", type: "struct",
                    details: "Node Field",
                    xref: { document: "core", section: "9.6.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Node", id: 0x1, type: "node-id", access: "F", conformance: "Endpoint",
                            xref: { document: "core", section: "9.6.5.1" }
                        },

                        {
                            tag: "datatype", name: "Group", id: 0x2, type: "group-id", access: "F", conformance: "!Endpoint",
                            xref: { document: "core", section: "9.6.5.1" }
                        },

                        {
                            tag: "datatype", name: "Endpoint", id: 0x3, type: "endpoint-no", access: "F", conformance: "!Group",
                            xref: { document: "core", section: "9.6.5.1" }
                        },

                        {
                            tag: "datatype", name: "Cluster", id: 0x4, type: "cluster-id", access: "F", conformance: "O",
                            xref: { document: "core", section: "9.6.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "FixedLabel", id: 0x40, type: "Label", classification: "endpoint",
            xref: { document: "core", section: "9.8" },
            children: [
                {
                    tag: "attribute", name: "LabelList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    default: [], quality: "N",
                    xref: { document: "core", section: "9.8.4" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "LabelStruct"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "UserLabel", id: 0x41, type: "Label", classification: "endpoint",
            xref: { document: "core", section: "9.9" },
            children: [
                {
                    tag: "attribute", name: "LabelList", id: 0x0, type: "list", access: "RW VM", conformance: "M",
                    default: [], quality: "N",
                    details: "An implementation SHALL support at least 4 list entries per node for all User Label cluster " +
                             "instances on the node",
                    xref: { document: "core", section: "9.9.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "LabelStruct"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "AccessControl", id: 0x1f, classification: "node",
            xref: { document: "core", section: "9.10" },
            children: [
                {
                    tag: "attribute", name: "Acl", id: 0x0, type: "list", access: "RW F A", conformance: "M",
                    constraint: "desc",
                    details: "An attempt to add an Access Control Entry when no more entries are available SHALL result in a " +
                             "RESOURCE_EXHAUSTED error being reported and the ACL attribute SHALL NOT have the entry",
                    xref: { document: "core", section: "9.10.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "AccessControlEntryStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Extension", id: 0x1, type: "list", access: "RW F A", conformance: "O",
                    constraint: "desc",
                    details: "If present, the Access Control Extensions MAY be used by Administrators to store arbitrary data " +
                             "related to fabric’s Access Control Entries",
                    xref: { document: "core", section: "9.10.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "AccessControlExtensionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "SubjectsPerAccessControlEntry", id: 0x2, type: "uint16", access: "R V",
                    conformance: "M", constraint: "min 4", default: 4, quality: "F",
                    details: "This attribute SHALL provide the minimum number of Subjects per entry that are supported by this " +
                             "server",
                    xref: { document: "core", section: "9.10.5.5" }
                },

                {
                    tag: "attribute", name: "TargetsPerAccessControlEntry", id: 0x3, type: "uint16", access: "R V",
                    conformance: "M", constraint: "min 3", default: 3, quality: "F",
                    details: "This attribute SHALL provide the minimum number of Targets per entry that are supported by this " +
                             "server",
                    xref: { document: "core", section: "9.10.5.6" }
                },

                {
                    tag: "attribute", name: "AccessControlEntriesPerFabric", id: 0x4, type: "uint16", access: "R V",
                    conformance: "M", constraint: "min 4", default: 4, quality: "F",
                    details: "This attribute SHALL provide the minimum number of ACL Entries per fabric that are supported by this" +
                             " server",
                    xref: { document: "core", section: "9.10.5.7" }
                },

                {
                    tag: "event", name: "AccessControlEntryChanged", id: 0x0, access: "S A", conformance: "M",
                    priority: "info",
                    details: "The cluster SHALL send AccessControlEntryChanged events whenever its ACL attribute data is changed " +
                             "by an Administrator",
                    xref: { document: "core", section: "9.10.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "AdminNodeId", id: 0x1, type: "node-id", access: "S", conformance: "M",
                            constraint: "desc", quality: "X",
                            xref: { document: "core", section: "9.10.7.1" }
                        },

                        {
                            tag: "datatype", name: "AdminPasscodeId", id: 0x2, type: "uint16", access: "S", conformance: "M",
                            constraint: "desc", quality: "X",
                            xref: { document: "core", section: "9.10.7.1" }
                        },

                        {
                            tag: "datatype", name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", access: "S", conformance: "M",
                            xref: { document: "core", section: "9.10.7.1" }
                        },

                        {
                            tag: "datatype", name: "LatestValue", id: 0x4, type: "AccessControlEntryStruct", access: "S",
                            conformance: "M", quality: "X",
                            xref: { document: "core", section: "9.10.7.1" }
                        }
                    ]
                },

                {
                    tag: "event", name: "AccessControlExtensionChanged", id: 0x1, access: "S A", conformance: "M",
                    priority: "info",
                    details: "The cluster SHALL send AccessControlExtensionChanged events whenever its extension attribute data is" +
                             " changed by an Administrator",
                    xref: { document: "core", section: "9.10.7.2" }
                },

                {
                    tag: "datatype", name: "ChangeTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "9.10.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "Changed", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "9.10.4.1" }
                        },

                        {
                            tag: "datatype", name: "Added", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "9.10.4.1" }
                        },

                        {
                            tag: "datatype", name: "Removed", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "9.10.4.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryPrivilegeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "9.10.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "View", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "9.10.4.2" }
                        },

                        {
                            tag: "datatype", name: "ProxyView", id: 0x2, conformance: "P, M",
                            xref: { document: "core", section: "9.10.4.2" }
                        },

                        {
                            tag: "datatype", name: "Operate", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "9.10.4.2" }
                        },

                        {
                            tag: "datatype", name: "Manage", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "9.10.4.2" }
                        },

                        {
                            tag: "datatype", name: "Administer", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "9.10.4.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryAuthModeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "9.10.4.3" },
                    children: [
                        {
                            tag: "datatype", name: "Pase", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "9.10.4.3" }
                        },

                        {
                            tag: "datatype", name: "Case", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "9.10.4.3" }
                        },

                        {
                            tag: "datatype", name: "Group", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "9.10.4.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlTargetStruct", type: "struct",
                    xref: { document: "core", section: "9.10.4.4" },
                    children: [
                        {
                            tag: "datatype", name: "Cluster", id: 0x0, type: "cluster-id", conformance: "M", quality: "X",
                            xref: { document: "core", section: "9.10.4.4" }
                        },

                        {
                            tag: "datatype", name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "M", quality: "X",
                            xref: { document: "core", section: "9.10.4.4" }
                        },

                        {
                            tag: "datatype", name: "DeviceType", id: 0x2, type: "devtype-id", conformance: "M", quality: "X",
                            xref: { document: "core", section: "9.10.4.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlEntryStruct", type: "struct",
                    details: "Privilege Field",
                    xref: { document: "core", section: "9.10.4.5" },
                    children: [
                        {
                            tag: "datatype", name: "Privilege", id: 0x1, type: "AccessControlEntryPrivilegeEnum", access: "S",
                            conformance: "M",
                            xref: { document: "core", section: "9.10.4.5" }
                        },

                        {
                            tag: "datatype", name: "AuthMode", id: 0x2, type: "AccessControlEntryAuthModeEnum", access: "S",
                            conformance: "M",
                            xref: { document: "core", section: "9.10.4.5" }
                        },

                        {
                            tag: "datatype", name: "Subjects", id: 0x3, type: "list", access: "S", conformance: "M",
                            constraint: "max SubjectsPerAccessControlEntry", quality: "X",
                            xref: { document: "core", section: "9.10.4.5" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "SubjectID"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Targets", id: 0x4, type: "list", access: "S", conformance: "M",
                            constraint: "max TargetsPerAccessControlEntry", quality: "X",
                            xref: { document: "core", section: "9.10.4.5" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "AccessControlTargetStruct"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AccessControlExtensionStruct", type: "struct",
                    details: "Data Field",
                    xref: { document: "core", section: "9.10.4.6" },
                    children: [
                        {
                            tag: "datatype", name: "Data", id: 0x1, type: "octstr", access: "S", conformance: "M",
                            constraint: "max 128",
                            xref: { document: "core", section: "9.10.4.6" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "BridgedDeviceBasicInformation", id: 0x39, type: "BasicInformation",
            classification: "endpoint",
            xref: { document: "core", section: "9.13" },
            children: [
                {
                    tag: "attribute", name: "DataModelRevision", id: 0x0, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "VendorName", id: 0x1, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "VendorId", id: 0x2, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "ProductName", id: 0x3, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "ProductId", id: 0x4, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "NodeLabel", id: 0x5, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "Location", id: 0x6, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "HardwareVersion", id: 0x7, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "HardwareVersionString", id: 0x8, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "SoftwareVersion", id: 0x9, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "SoftwareVersionString", id: 0xa, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "ManufacturingDate", id: 0xb, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "PartNumber", id: 0xc, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "ProductUrl", id: 0xd, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "ProductLabel", id: 0xe, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "SerialNumber", id: 0xf, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "LocalConfigDisabled", id: 0x10, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "Reachable", id: 0x11, conformance: "M",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "UniqueId", id: 0x12, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "attribute", name: "CapabilityMinima", id: 0x13, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                },

                {
                    tag: "event", name: "StartUp", id: 0x0, conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                },

                {
                    tag: "event", name: "ShutDown", id: 0x1, conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                },

                {
                    tag: "event", name: "Leave", id: 0x2, conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                },

                {
                    tag: "event", name: "ReachableChanged", id: 0x3, conformance: "M", priority: "critical",
                    details: "This event SHALL be generated when there is a change in the Reachable attribute. Its purpose is to " +
                             "provide an indication towards interested parties that the reachability of a bridged device (over the" +
                             " non-Matter network) has changed, so they MAY take appropriate action",
                    xref: { document: "core", section: "9.13.5.1" }
                }
            ]
        },

        {
            tag: "cluster", name: "Actions", id: 0x25, classification: "application",
            xref: { document: "core", section: "9.14" },
            children: [
                {
                    tag: "attribute", name: "ActionList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    constraint: "max 256", default: [],
                    details: "The ActionList attribute holds the list of actions. Each entry SHALL have an unique ActionID, and " +
                             "its EndpointListID SHALL exist in the EndpointLists attribute",
                    xref: { document: "core", section: "9.14.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "ActionStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "EndpointLists", id: 0x1, type: "list", access: "R V", conformance: "M",
                    constraint: "max 256", default: [],
                    details: "The EndpointLists attribute holds the list of endpoint lists. Each entry SHALL have an unique " +
                             "EndpointListID",
                    xref: { document: "core", section: "9.14.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "EndpointListStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "SetupUrl", id: 0x2, type: "string", access: "R V", conformance: "O",
                    constraint: "max 512", default: "empty",
                    details: "The SetupURL attribute (when provided) SHALL indicate a URL; its syntax SHALL follow the syntax as " +
                             "specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL SHALL provide " +
                             "additional information for the actions provided",
                    xref: { document: "core", section: "9.14.5.3" }
                },

                {
                    tag: "event", name: "StateChanged", id: 0x0, access: "V", conformance: "M", priority: "info",
                    details: "This event SHALL be generated when there is a change in the State of an ActionID during the " +
                             "execution of an action and the most recent command using that ActionID used an InvokeID data field",
                    xref: { document: "core", section: "9.14.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.7.1" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "9.14.7.1" }
                        },

                        {
                            tag: "datatype", name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M",
                            xref: { document: "core", section: "9.14.7.1" }
                        }
                    ]
                },

                {
                    tag: "event", name: "ActionFailed", id: 0x1, access: "V", conformance: "M", priority: "info",
                    details: "This event SHALL be generated when there is some error which prevents the action from its normal " +
                             "planned execution and the most recent command using that ActionID used an InvokeID data field",
                    xref: { document: "core", section: "9.14.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.7.2" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "9.14.7.2" }
                        },

                        {
                            tag: "datatype", name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M",
                            xref: { document: "core", section: "9.14.7.2" }
                        },

                        {
                            tag: "datatype", name: "Error", id: 0x3, type: "ActionErrorEnum", conformance: "M",
                            xref: { document: "core", section: "9.14.7.2" }
                        }
                    ]
                },

                {
                    tag: "command", name: "InstantAction", id: 0x0, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.1" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "InstantActionWithTransition", id: 0x1, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.2" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.2" }
                        },

                        {
                            tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.2" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StartAction", id: 0x2, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.3" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StartActionWithDuration", id: 0x3, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.4" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.4" }
                        },

                        {
                            tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "9.14.6.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "StopAction", id: 0x4, access: "O", conformance: "desc", direction: "request",
                    response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.5" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.5" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.5" }
                        }
                    ]
                },

                {
                    tag: "command", name: "PauseAction", id: 0x5, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.6" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.6" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.6" }
                        }
                    ]
                },

                {
                    tag: "command", name: "PauseActionWithDuration", id: 0x6, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.7" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.7" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.7" }
                        },

                        {
                            tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "9.14.6.7" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ResumeAction", id: 0x7, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.8" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.8" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.8" }
                        }
                    ]
                },

                {
                    tag: "command", name: "EnableAction", id: 0x8, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.9" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.9" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.9" }
                        }
                    ]
                },

                {
                    tag: "command", name: "EnableActionWithDuration", id: 0x9, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.10" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.10" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.10" }
                        },

                        {
                            tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "9.14.6.10" }
                        }
                    ]
                },

                {
                    tag: "command", name: "DisableAction", id: 0xa, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.11" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.11" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.11" }
                        }
                    ]
                },

                {
                    tag: "command", name: "DisableActionWithDuration", id: 0xb, access: "O", conformance: "desc",
                    direction: "request", response: "status",
                    details: "This command SHALL have the following data fields",
                    xref: { document: "core", section: "9.14.6.12" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.6.12" }
                        },

                        {
                            tag: "datatype", name: "InvokeId", id: 0x1, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "9.14.6.12" }
                        },

                        {
                            tag: "datatype", name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "9.14.6.12" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CommandBits", type: "map16",
                    details: "This data type is derived from map16",
                    xref: { document: "core", section: "9.14.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "InstantAction", id: 0x0,
                            description: "Indicate support for InstantAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "InstantActionWithTransition", id: 0x1,
                            description: "Indicate support for InstantActionWithTransition command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "StartAction", id: 0x2,
                            description: "Indicate support for StartAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "StartActionWithDuration", id: 0x3,
                            description: "Indicate support for StartActionWithDuration command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "StopAction", id: 0x4,
                            description: "Indicate support for StopAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "PauseAction", id: 0x5,
                            description: "Indicate support for PauseAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "PauseActionWithDuration", id: 0x6,
                            description: "Indicate support for PauseActionWithDuration command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "ResumeAction", id: 0x7,
                            description: "Indicate support for ResumeAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "EnableAction", id: 0x8,
                            description: "Indicate support for EnableAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "EnableActionWithDuration", id: 0x9,
                            description: "Indicate support for EnableActionWithDuration command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "DisableAction", id: 0xa,
                            description: "Indicate support for DisableAction command",
                            xref: { document: "core", section: "9.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "DisableActionWithDuration", id: 0xb,
                            description: "Indicate support for DisableActionWithDuration command",
                            xref: { document: "core", section: "9.14.4.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ActionTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "9.14.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "Other", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "9.14.4.2" }
                        },

                        {
                            tag: "datatype", name: "Scene", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "9.14.4.2" }
                        },

                        {
                            tag: "datatype", name: "Sequence", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "9.14.4.2" }
                        },

                        {
                            tag: "datatype", name: "Automation", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "9.14.4.2" }
                        },

                        {
                            tag: "datatype", name: "Exception", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "9.14.4.2" }
                        },

                        {
                            tag: "datatype", name: "Notification", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "9.14.4.2" }
                        },

                        {
                            tag: "datatype", name: "Alarm", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "9.14.4.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ActionStateEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "9.14.4.3" },
                    children: [
                        {
                            tag: "datatype", name: "Inactive", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "9.14.4.3" }
                        },

                        {
                            tag: "datatype", name: "Active", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "9.14.4.3" }
                        },

                        {
                            tag: "datatype", name: "Paused", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "9.14.4.3" }
                        },

                        {
                            tag: "datatype", name: "Disabled", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "9.14.4.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ActionErrorEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "9.14.4.4" },
                    children: [
                        {
                            tag: "datatype", name: "Unknown", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "9.14.4.4" }
                        },

                        {
                            tag: "datatype", name: "Interrupted", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "9.14.4.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "EndpointListTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8 and has its values listed below",
                    xref: { document: "core", section: "9.14.4.5" },
                    children: [
                        {
                            tag: "datatype", name: "Other", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "9.14.4.5" }
                        },

                        {
                            tag: "datatype", name: "Room", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "9.14.4.5" }
                        },

                        {
                            tag: "datatype", name: "Zone", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "9.14.4.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ActionStruct", type: "struct",
                    details: "This data type holds the details of a single action, and contains the data fields below",
                    xref: { document: "core", section: "9.14.4.6" },
                    children: [
                        {
                            tag: "datatype", name: "ActionId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.4.6" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32[128]",
                            xref: { document: "core", section: "9.14.4.6" }
                        },

                        {
                            tag: "datatype", name: "Type", id: 0x2, type: "ActionTypeEnum", conformance: "M",
                            xref: { document: "core", section: "9.14.4.6" }
                        },

                        {
                            tag: "datatype", name: "EndpointListId", id: 0x3, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.4.6" }
                        },

                        {
                            tag: "datatype", name: "SupportedCommands", id: 0x4, type: "CommandBits", conformance: "M",
                            constraint: "0",
                            xref: { document: "core", section: "9.14.4.6" }
                        },

                        {
                            tag: "datatype", name: "State", id: 0x5, type: "ActionStateEnum", conformance: "M",
                            xref: { document: "core", section: "9.14.4.6" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "EndpointListStruct", type: "struct",
                    details: "This data type holds the details of a single endpoint list, which relates to a set of endpoints that" +
                             " have some logical relation, and contains the data fields below",
                    xref: { document: "core", section: "9.14.4.7" },
                    children: [
                        {
                            tag: "datatype", name: "EndpointListId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "9.14.4.7" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32[128]",
                            xref: { document: "core", section: "9.14.4.7" }
                        },

                        {
                            tag: "datatype", name: "Type", id: 0x2, type: "EndpointListTypeEnum", conformance: "M",
                            xref: { document: "core", section: "9.14.4.7" }
                        },

                        {
                            tag: "datatype", name: "Endpoints", id: 0x3, type: "list", conformance: "M", constraint: "max 256",
                            xref: { document: "core", section: "9.14.4.7" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "endpoint-no"
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ProxyConfiguration", id: 0x42, classification: "node",
            xref: { document: "core", section: "9.15.14" },
            children: [
                {
                    tag: "attribute", name: "ConfigurationList", id: 0x0, type: "list", access: "RW", conformance: "M",
                    default: [], quality: "N",
                    details: "List of proxy configurations. There SHALL NOT be multiple entries in this list for the same fabric",
                    xref: { document: "core", section: "9.15.14.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "ConfigurationStruct"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ConfigurationStruct", type: "struct",
                    details: "< Previous | Contents | Next",
                    xref: { document: "core", section: "9.15.14.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "ProxyAllNodes", id: 0x1, type: "bool", access: "RW", conformance: "M",
                            constraint: "desc", default: true,
                            xref: { document: "core", section: "9.15.14.4.1" }
                        },

                        {
                            tag: "datatype", name: "SourceList", id: 0x2, type: "list", access: "RW", conformance: "M",
                            constraint: "desc", default: [],
                            xref: { document: "core", section: "9.15.14.4.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "node-id"
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ValidProxies", id: 0x44, classification: "node",
            xref: { document: "core", section: "9.15.15" },
            children: [
                {
                    tag: "attribute", name: "ValidProxyList", id: 0x0, type: "list", access: "RW", conformance: "M",
                    default: [], quality: "N F",
                    details: "List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped",
                    xref: { document: "core", section: "9.15.15.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "ValidProxyStruct"
                        }
                    ]
                },

                {
                    tag: "command", name: "GetValidProxiesRequest", id: 0x0, access: "O", conformance: "M",
                    direction: "request", response: "GetValidProxiesResponse",
                    xref: { document: "core", section: "9.15.15.6" }
                },

                {
                    tag: "command", name: "GetValidProxiesResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "core", section: "9.15.15.6" }
                },

                {
                    tag: "datatype", name: "ValidProxyStruct", type: "struct",
                    details: "Encapsulates the Node ID of a Valid Proxy",
                    xref: { document: "core", section: "9.15.15.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "NodeId", id: 0x1, type: "node-idx", access: "RW", conformance: "M",
                            xref: { document: "core", section: "9.15.15.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "BasicInformation", id: 0x28, classification: "node",
            xref: { document: "core", section: "11.1" },
            children: [
                {
                    tag: "attribute", name: "DataModelRevision", id: 0x0, type: "uint16", access: "R V",
                    conformance: "M", quality: "F",
                    details: "This attribute SHALL be set to the revision number of the Data Model against which the Node is " +
                             "certified",
                    xref: { document: "core", section: "11.1.5.1" }
                },

                {
                    tag: "attribute", name: "VendorName", id: 0x1, type: "string", access: "R V", conformance: "M",
                    constraint: "max 32", quality: "F",
                    details: "This attribute SHALL specify a human readable (displayable) name of the vendor for the Node",
                    xref: { document: "core", section: "11.1.5.2" }
                },

                {
                    tag: "attribute", name: "VendorId", id: 0x2, type: "vendor-id", access: "R V", conformance: "M",
                    quality: "F",
                    details: "This attribute SHALL specify the Vendor ID",
                    xref: { document: "core", section: "11.1.5.3" }
                },

                {
                    tag: "attribute", name: "ProductName", id: 0x3, type: "string", access: "R V", conformance: "M",
                    constraint: "max 32", quality: "F",
                    details: "This attribute SHALL specify a human readable (displayable) name of the model for the Node such as " +
                             "the model number (or other identifier) assigned by the vendor",
                    xref: { document: "core", section: "11.1.5.4" }
                },

                {
                    tag: "attribute", name: "ProductId", id: 0x4, type: "uint16", access: "R V", conformance: "M",
                    quality: "F",
                    details: "This attribute SHALL specify the Product ID assigned by the vendor that is unique to the specific " +
                             "product of the Node",
                    xref: { document: "core", section: "11.1.5.5" }
                },

                {
                    tag: "attribute", name: "NodeLabel", id: 0x5, type: "string", access: "RW VM", conformance: "M",
                    constraint: "max 32", default: "\"\"", quality: "N",
                    details: "This attribute SHALL represent a user defined name for the Node. This attribute SHOULD be set during" +
                             " initial commissioning and MAY be updated by further reconfigurations",
                    xref: { document: "core", section: "11.1.5.6" }
                },

                {
                    tag: "attribute", name: "Location", id: 0x6, type: "string", access: "RW VA", conformance: "M",
                    constraint: "2", default: "\"XX\"", quality: "N",
                    details: "This attribute SHALL be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, or" +
                             " special area of geographic interest in which the Node is located at the time of the attribute being" +
                             " set. This attribute SHALL be set during initial commissioning (unless already set) and MAY be " +
                             "updated by further reconfigurations. This attribute MAY affect some regulatory aspects of the Node’s" +
                             " operation, such as radio transmission power levels in given spectrum allocation bands if " +
                             "technologies where this is applicable are used. The Location’s region code SHALL be interpreted in a" +
                             " case-insensitive manner. If the Node cannot understand the location code with which it was " +
                             "configured, or the location code has not yet been configured, it SHALL configure itself in a region" +
                             "- agnostic manner as determined by the vendor, avoiding region-specific assumptions as much as is " +
                             "practical. The special value XX SHALL indicate that region-agnostic mode is used",
                    xref: { document: "core", section: "11.1.5.7" }
                },

                {
                    tag: "attribute", name: "HardwareVersion", id: 0x7, type: "uint16", access: "R V", conformance: "M",
                    default: 0, quality: "F",
                    details: "This attribute SHALL specify the version number of the hardware of the Node. The meaning of its " +
                             "value, and the versioning scheme, are vendor defined",
                    xref: { document: "core", section: "11.1.5.8" }
                },

                {
                    tag: "attribute", name: "HardwareVersionString", id: 0x8, type: "string", access: "R V",
                    conformance: "M", constraint: "1 to 64", quality: "F",
                    details: "This attribute SHALL specify the version number of the hardware of the Node. The meaning of its " +
                             "value, and the versioning scheme, are vendor defined. The HardwareVersionString attribute SHALL be " +
                             "used to provide a more user-friendly value than that represented by the HardwareVersion attribute",
                    xref: { document: "core", section: "11.1.5.9" }
                },

                {
                    tag: "attribute", name: "SoftwareVersion", id: 0x9, type: "uint32", access: "R V", conformance: "M",
                    constraint: "desc", default: 0, quality: "F",
                    details: "This attribute SHALL contain the current version number for the software running on this Node. The " +
                             "version number can be compared using a total ordering to determine if a version is logically newer " +
                             "than another one. A larger value of SoftwareVersion is newer than a lower value, from the " +
                             "perspective of software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes " +
                             "MAY query this field to determine the currently running version of software on another given Node",
                    xref: { document: "core", section: "11.1.5.10" }
                },

                {
                    tag: "attribute", name: "SoftwareVersionString", id: 0xa, type: "string", access: "R V",
                    conformance: "M", constraint: "1 to 64", quality: "F",
                    details: "This attribute SHALL contain a current human-readable representation for the software running on the" +
                             " Node. This version information MAY be conveyed to users. The maximum length of the " +
                             "SoftwareVersionString attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple" +
                             " 7-bit ASCII alphanumeric and punctuation characters, so as to simplify the conveyance of the value " +
                             "to a variety of cultures",
                    xref: { document: "core", section: "11.1.5.11" }
                },

                {
                    tag: "attribute", name: "ManufacturingDate", id: 0xb, type: "string", access: "R V",
                    conformance: "O", constraint: "8 to 16", quality: "F",
                    details: "This attribute SHALL specify the date that the Node was manufactured. The first 8 characters SHALL " +
                             "specify the date of manufacture of the Node in international date notation according to ISO 8601, i." +
                             "e., YYYYMMDD, e.g., 20060814. The final 8 characters MAY include country, factory, line, shift or " +
                             "other related information at the option of the vendor. The format of this information is vendor",
                    xref: { document: "core", section: "11.1.5.12" }
                },

                {
                    tag: "attribute", name: "PartNumber", id: 0xc, type: "string", access: "R V", conformance: "O",
                    constraint: "max 32", quality: "F",
                    details: "This attribute SHALL specify a human-readable (displayable) vendor assigned part number for the Node" +
                             " whose meaning and numbering scheme is vendor defined",
                    xref: { document: "core", section: "11.1.5.13" }
                },

                {
                    tag: "attribute", name: "ProductUrl", id: 0xd, type: "string", access: "R V", conformance: "O",
                    constraint: "max 256", quality: "F",
                    details: "This attribute SHALL specify a link to a product specific web page. The syntax of the ProductURL " +
                             "attribute SHALL follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. " +
                             "The specified URL SHOULD resolve to a maintained web page available for the lifetime of the product" +
                             ". The maximum length of the ProductUrl attribute is 256 ASCII characters",
                    xref: { document: "core", section: "11.1.5.14" }
                },

                {
                    tag: "attribute", name: "ProductLabel", id: 0xe, type: "string", access: "R V", conformance: "O",
                    constraint: "max 64", quality: "F",
                    details: "This attribute SHALL specify a vendor specific human readable (displayable) product label. The " +
                             "ProductLabel attribute MAY be used to provide a more user-friendly value than that represented by " +
                             "the ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as " +
                             "defined within the VendorName attribute",
                    xref: { document: "core", section: "11.1.5.15" }
                },

                {
                    tag: "attribute", name: "SerialNumber", id: 0xf, type: "string", access: "R V", conformance: "O",
                    constraint: "max 32", quality: "F",
                    details: "This attributes SHALL specify a human readable (displayable) serial number",
                    xref: { document: "core", section: "11.1.5.16" }
                },

                {
                    tag: "attribute", name: "LocalConfigDisabled", id: 0x10, type: "bool", access: "RW VM",
                    conformance: "O", default: true, quality: "N",
                    details: "This attribute SHALL allow a local Node configuration to be disabled. When this attribute is set to " +
                             "True the Node SHALL disable the ability to configure the Node through an on-Node user interface. The" +
                             " value of the LocalConfigDisabled attribute SHALL NOT in any way modify, disable, or otherwise " +
                             "affect the user’s ability to trigger a factory reset on the Node",
                    xref: { document: "core", section: "11.1.5.17" }
                },

                {
                    tag: "attribute", name: "Reachable", id: 0x11, type: "bool", access: "R V", conformance: "O",
                    default: true,
                    details: "This attribute (when used) SHALL indicate whether the Node can be reached. For a native Node this is" +
                             " implicitly True (and its use is optional",
                    xref: { document: "core", section: "11.1.5.18" }
                },

                {
                    tag: "attribute", name: "UniqueId", id: 0x12, type: "string", access: "R V", conformance: "O",
                    constraint: "max 32", quality: "F",
                    details: "This attribute (when used) SHALL indicate a unique identifier for the device, which is constructed " +
                             "in a manufacturer specific manner",
                    xref: { document: "core", section: "11.1.5.19" }
                },

                {
                    tag: "attribute", name: "CapabilityMinima", id: 0x13, type: "CapabilityMinimaStruct", access: "R V",
                    conformance: "M", quality: "F",
                    details: "This attribute SHALL provide the minimum guaranteed value for some system-wide resource capabilities" +
                             " that are not otherwise cluster-specific and do not appear elsewhere. This attribute MAY be used by " +
                             "clients to optimize communication with Nodes by allowing them to use more than the strict minimum " +
                             "values required by this specification, wherever available",
                    xref: { document: "core", section: "11.1.5.20" }
                },

                {
                    tag: "event", name: "StartUp", id: 0x0, access: "V", conformance: "M", priority: "critical",
                    details: "The StartUp event SHALL be generated by a Node as soon as reasonable after completing a boot or " +
                             "reboot process. The StartUp event SHOULD be the first Data Model event recorded by the Node after it" +
                             " completes a boot or reboot process",
                    xref: { document: "core", section: "11.1.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "11.1.6.1" }
                        }
                    ]
                },

                {
                    tag: "event", name: "ShutDown", id: 0x1, access: "V", conformance: "O", priority: "critical",
                    details: "The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a best-" +
                             "effort basis. When a ShutDown event is generated, it SHOULD be the last Data Model event recorded by" +
                             " the Node. This event SHOULD be delivered urgently to current subscribers on a best- effort basis. " +
                             "Any subsequent incoming interactions to the Node MAY be dropped until the completion of a future " +
                             "boot or reboot process",
                    xref: { document: "core", section: "11.1.6.2" }
                },

                {
                    tag: "event", name: "Leave", id: 0x2, access: "V", conformance: "O", priority: "info",
                    details: "The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as " +
                             "when the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some " +
                             "other manufacturer specific action to disable or reset the operational data in the Node. When a " +
                             "Leave event is generated, it SHOULD be assumed that the fabric recorded in the event is no longer " +
                             "usable, and subsequent interactions targeting that fabric will most likely fail",
                    xref: { document: "core", section: "11.1.6.3" }
                },

                {
                    tag: "event", name: "ReachableChanged", id: 0x3, access: "V", conformance: "desc", priority: "info",
                    details: "This event SHALL be supported if and only if the Reachable attribute is supported",
                    xref: { document: "core", section: "11.1.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "ReachableNewValue", id: 0x0, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.1.6.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CapabilityMinimaStruct", type: "struct",
                    details: "This structure provides constant values related to overall global capabilities of this Node, that " +
                             "are not cluster-specific",
                    xref: { document: "core", section: "11.1.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "CaseSessionsPerFabric", id: 0x0, type: "uint16", conformance: "M",
                            constraint: "min 3", default: 3,
                            xref: { document: "core", section: "11.1.4.1" }
                        },

                        {
                            tag: "datatype", name: "SubscriptionsPerFabric", id: 0x1, type: "uint16", conformance: "M",
                            constraint: "min 3", default: 3,
                            xref: { document: "core", section: "11.1.4.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "GroupKeyManagement", id: 0x3f, classification: "node",
            xref: { document: "core", section: "11.2" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "CS", id: 0x0,
                            description: "The ability to support CacheAndSync security policy and MCSP.",
                            xref: { document: "core", section: "11.2.5" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "GroupKeyMap", id: 0x0, type: "list", access: "RW F VM", conformance: "M",
                    constraint: "desc", default: [], quality: "N",
                    details: "This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with" +
                             " a particular group key set",
                    xref: { document: "core", section: "11.2.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "GroupKeyMapStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "GroupTable", id: 0x1, type: "list", access: "R F", conformance: "M",
                    constraint: "desc", default: [],
                    details: "This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information " +
                             "about how a given logical Group ID maps to a particular set of endpoints, and a name for the group. " +
                             "The content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is" +
                             " in general terms referred to as the 'node-wide Group Table",
                    xref: { document: "core", section: "11.2.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "GroupInfoMapStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "MaxGroupsPerFabric", id: 0x2, type: "uint16", conformance: "M", default: 0,
                    quality: "F",
                    details: "This attribute SHALL indicate the maximum number of groups that this node supports per fabric. The " +
                             "value of this attribute SHALL be set to be no less than the required minimum supported groups as " +
                             "specified in Group Limits. The length of the GroupKeyMap and GroupTable list attributes SHALL NOT " +
                             "exceed the value of the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics",
                    xref: { document: "core", section: "11.2.7.3" }
                },

                {
                    tag: "attribute", name: "MaxGroupKeysPerFabric", id: 0x3, type: "uint16", conformance: "M",
                    constraint: "1 to 65535", default: 1, quality: "F",
                    details: "This attribute SHALL indicate the maximum number of group key sets this node supports per fabric. " +
                             "The value of this attribute SHALL be set according to the minimum number of group key sets to " +
                             "support as specified in Group Limits",
                    xref: { document: "core", section: "11.2.7.4" }
                },

                {
                    tag: "command", name: "KeySetWrite", id: 0x0, access: "F A", conformance: "M", direction: "request",
                    response: "status",
                    details: "This command is used by Administrators to set the state of a given Group Key Set, including atomi",
                    xref: { document: "core", section: "11.2.8.1" },
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M",
                            xref: { document: "core", section: "11.2.8.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "KeySetRead", id: 0x1, access: "F A", conformance: "M", direction: "request",
                    response: "KeySetReadResponse",
                    details: "This command is used by Administrators to read the state of a given Group Key Set",
                    xref: { document: "core", section: "11.2.8.2" },
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.2.8.2" }
                        }
                    ]
                },

                {
                    tag: "command", name: "KeySetReadResponse", id: 0x2, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to the KeySetRead command, if a valid Group Key Set was " +
                             "found. It SHALL contain the configuration of the requested Group Key Set, with the EpochKey0, " +
                             "EpochKey1 and EpochKey2 key contents replaced by null",
                    xref: { document: "core", section: "11.2.8.3" },
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M",
                            xref: { document: "core", section: "11.2.8.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "KeySetRemove", id: 0x3, access: "F A", conformance: "M",
                    direction: "request", response: "status",
                    details: "This command is used by Administrators to remove all state of a given Group Key Set",
                    xref: { document: "core", section: "11.2.8.4" },
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.2.8.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "KeySetReadAllIndices", id: 0x4, access: "F A", conformance: "M",
                    direction: "request", response: "KeySetReadAllIndicesResponse",
                    details: "This command is used by Administrators to query a list of all Group Key Sets associated with the " +
                             "accessing fabric",
                    xref: { document: "core", section: "11.2.8.5" }
                },

                {
                    tag: "command", name: "KeySetReadAllIndicesResponse", id: 0x5, conformance: "M",
                    direction: "response",
                    details: "This command SHALL be generated in response to KeySetReadAllIndices and it SHALL contain the list of" +
                             " GroupKeySetID for all Group Key Sets associated with the scoped Fabric",
                    xref: { document: "core", section: "11.2.8.6" },
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetIDs", id: 0x0, type: "list", conformance: "M",
                            xref: { document: "core", section: "11.2.8.6" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "uint16"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeySecurityPolicyEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.2.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "TrustFirst", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.2.6.1" }
                        },

                        {
                            tag: "datatype", name: "CacheAndSync", id: 0x1, conformance: "CS",
                            xref: { document: "core", section: "11.2.6.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeyMulticastPolicyEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.2.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "PerGroupId", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.2.6.2" }
                        },

                        {
                            tag: "datatype", name: "AllNodes", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.2.6.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeyMapStruct", type: "struct",
                    details: "GroupId Field",
                    xref: { document: "core", section: "11.2.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", access: "F", conformance: "M",
                            xref: { document: "core", section: "11.2.6.3" }
                        },

                        {
                            tag: "datatype", name: "GroupKeySetId", id: 0x2, type: "uint16", access: "F", conformance: "M",
                            constraint: "1 to 65535",
                            xref: { document: "core", section: "11.2.6.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupKeySetStruct", type: "struct",
                    details: "GroupKeySetID Field",
                    xref: { document: "core", section: "11.2.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "GroupKeySecurityPolicy", id: 0x1, type: "GroupKeySecurityPolicyEnum",
                            access: "S", conformance: "M",
                            xref: { document: "core", section: "11.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "EpochKey0", id: 0x2, type: "octstr", access: "S", conformance: "M",
                            constraint: "16", quality: "X",
                            xref: { document: "core", section: "11.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "EpochStartTime0", id: 0x3, type: "epoch-us", access: "S", conformance: "M",
                            quality: "X",
                            xref: { document: "core", section: "11.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "EpochKey1", id: 0x4, type: "octstr", access: "S", conformance: "M",
                            constraint: "16", quality: "X",
                            xref: { document: "core", section: "11.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "EpochStartTime1", id: 0x5, type: "epoch-us", access: "S", conformance: "M",
                            quality: "X",
                            xref: { document: "core", section: "11.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "EpochKey2", id: 0x6, type: "octstr", access: "S", conformance: "M",
                            constraint: "16", quality: "X",
                            xref: { document: "core", section: "11.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "EpochStartTime2", id: 0x7, type: "epoch-us", access: "S", conformance: "M",
                            quality: "X",
                            xref: { document: "core", section: "11.2.6.4" }
                        },

                        {
                            tag: "datatype", name: "GroupKeyMulticastPolicy", id: 0x8, type: "GroupKeyMulticastPolicyEnum",
                            access: "S", conformance: "P, M",
                            xref: { document: "core", section: "11.2.6.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GroupInfoMapStruct", type: "struct",
                    details: "GroupId Field",
                    xref: { document: "core", section: "11.2.6.5" },
                    children: [
                        {
                            tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", access: "R F", conformance: "M",
                            xref: { document: "core", section: "11.2.6.5" }
                        },

                        {
                            tag: "datatype", name: "Endpoints", id: 0x2, type: "list", access: "R F", conformance: "M",
                            constraint: "min 1",
                            xref: { document: "core", section: "11.2.6.5" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "endpoint-no"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "GroupName", id: 0x3, type: "string", access: "R F", conformance: "O",
                            constraint: "max 16",
                            xref: { document: "core", section: "11.2.6.5" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "LocalizationConfiguration", id: 0x2b, classification: "node",
            xref: { document: "core", section: "11.3" },
            children: [
                {
                    tag: "attribute", name: "ActiveLocale", id: 0x0, type: "string", access: "RW VM", conformance: "M",
                    constraint: "max 35", quality: "N",
                    details: "The ActiveLocale attribute SHALL represent the locale that the Node is currently configured to use " +
                             "when conveying information. The ActiveLocale attribute SHALL be a Language Tag as defined by BCP47 [" +
                             "https://tools.ietf.org/rfc/bcp/bcp47.txt]. The ActiveLocale attribute SHALL have a default value " +
                             "assigned by the Vendor and SHALL be a value contained within the SupportedLocales attribute list",
                    xref: { document: "core", section: "11.3.4.1" }
                },

                {
                    tag: "attribute", name: "SupportedLocales", id: 0x1, type: "list", access: "R V", conformance: "M",
                    constraint: "max 32[max 35]", quality: "F",
                    details: "The SupportedLocales attribute SHALL represent a list of locale strings that are valid values for " +
                             "the ActiveLocale attribute. The list SHALL NOT contain any duplicate entries. The ordering of items " +
                             "within the list SHOULD NOT express any meaning",
                    xref: { document: "core", section: "11.3.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "string"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "TimeFormatLocalization", id: 0x2c, classification: "node",
            xref: { document: "core", section: "11.4" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "CALFMT", id: 0x0,
                            description: "The Node can be configured to use different calendar formats when conveying values to a user.",
                            xref: { document: "core", section: "11.4.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "HourFormat", id: 0x0, type: "HourFormatEnum", access: "RW VM",
                    conformance: "M", default: undefined, quality: "X N",
                    details: "The HourFormat attribute SHALL represent the format that the Node is currently configured to use " +
                             "when conveying the hour unit of time. If provided, this value SHALL take priority over any unit",
                    xref: { document: "core", section: "11.4.6.1" }
                },

                {
                    tag: "attribute", name: "ActiveCalendarType", id: 0x1, type: "CalendarTypeEnum", access: "RW VM",
                    conformance: "CALFMT", default: undefined, quality: "X N",
                    details: "The ActiveCalendarType attribute SHALL represent the calendar format that the Node is currently " +
                             "configured to use when conveying dates. If provided, this value SHALL take priority over any unit " +
                             "implied through the ActiveLocale Attribute",
                    xref: { document: "core", section: "11.4.6.2" }
                },

                {
                    tag: "attribute", name: "SupportedCalendarTypes", id: 0x2, type: "list", access: "R V",
                    conformance: "CALFMT", constraint: "desc", quality: "F",
                    details: "The SupportedCalendarTypes attribute SHALL represent a list of CalendarTypeEnum values that are " +
                             "supported by the Node. The list SHALL NOT contain any duplicate entries. The ordering of items " +
                             "within the list SHOULD NOT express any meaning. The maximum length of the SupportedCalendarTypes " +
                             "list SHALL be equivalent to the number of enumerations within CalendarTypeEnum",
                    xref: { document: "core", section: "11.4.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "CalendarTypeEnum"
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HourFormatEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.4.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "12Hr", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.4.5.1" }
                        },

                        {
                            tag: "datatype", name: "24Hr", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.4.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CalendarTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.4.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "Buddhist", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Chinese", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Coptic", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Ethiopian", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Gregorian", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Hebrew", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Indian", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Islamic", id: 0x7, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Japanese", id: 0x8, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Korean", id: 0x9, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Persian", id: 0xa, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        },

                        {
                            tag: "datatype", name: "Taiwanese", id: 0xb, conformance: "M",
                            xref: { document: "core", section: "11.4.5.2" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "UnitLocalization", id: 0x2d, classification: "node",
            xref: { document: "core", section: "11.5" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "TEMP", id: 0x0,
                            description: "The Node can be configured to use different units of temperature when conveying values to a user.",
                            xref: { document: "core", section: "11.5.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "TemperatureUnit", id: 0x0, type: "TempUnitEnum", access: "RW VM",
                    conformance: "TEMP", default: undefined, quality: "X N",
                    details: "The TemperatureUnit attribute SHALL indicate the unit for the Node to use only when conveying " +
                             "temperature in communication to the user. If provided, this value SHALL take priority over any unit " +
                             "implied through the ActiveLocale Attribute",
                    xref: { document: "core", section: "11.5.6.1" }
                },

                {
                    tag: "datatype", name: "TempUnitEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.5.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Fahrenheit", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.5.5.1" }
                        },

                        {
                            tag: "datatype", name: "Celsius", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.5.5.1" }
                        },

                        {
                            tag: "datatype", name: "Kelvin", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.5.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "PowerSourceConfiguration", id: 0x2e, classification: "endpoint",
            xref: { document: "core", section: "11.6" },
            children: [
                {
                    tag: "attribute", name: "Sources", id: 0x0, type: "list", access: "R V", conformance: "M",
                    constraint: "max 6", quality: "N",
                    details: "This list SHALL contain the set of all power sources capable of participating in the power system of" +
                             " this Node. Each entry in the list SHALL be the endpoint number of an endpoint having a Power Source" +
                             " cluster, which corresponds to a physical power source. The endpoint number SHALL be unique within " +
                             "the list",
                    xref: { document: "core", section: "11.6.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "endpoint-no"
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "PowerSource", id: 0x2f, classification: "node",
            xref: { document: "core", section: "11.7" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "WIRED", id: 0x0, description: "A wired power source",
                            xref: { document: "core", section: "11.7.4" }
                        },

                        {
                            tag: "datatype", name: "BAT", id: 0x1, description: "A battery power source",
                            xref: { document: "core", section: "11.7.4" }
                        },

                        {
                            tag: "datatype", name: "RECHG", id: 0x2,
                            description: "A rechargeable battery power source (requires Battery feature)",
                            xref: { document: "core", section: "11.7.4" }
                        },

                        {
                            tag: "datatype", name: "REPLC", id: 0x3,
                            description: "A replaceable battery power source (requires Battery feature)",
                            xref: { document: "core", section: "11.7.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Status", id: 0x0, type: "PowerSourceStatusEnum", access: "R V",
                    conformance: "M", constraint: "desc",
                    details: "This attribute SHALL indicate the participation of this power source in providing power to the Node " +
                             "as specified in PowerSourceStatusEnum",
                    xref: { document: "core", section: "11.7.6.1" }
                },

                {
                    tag: "attribute", name: "Order", id: 0x1, type: "uint8", access: "R V", conformance: "M",
                    quality: "N",
                    details: "This attribute SHALL indicate the relative preference with which the Node will select this source to" +
                             " provide power. A source with a lower order SHALL be selected by the Node to provide power before " +
                             "any other source with a higher order, if the lower order source is available (see Status",
                    xref: { document: "core", section: "11.7.6.2" }
                },

                {
                    tag: "attribute", name: "Description", id: 0x2, type: "string", access: "R V", conformance: "M",
                    constraint: "max 60", quality: "F",
                    details: "This attribute SHALL provide a user-facing description of this source, used to distinguish it from " +
                             "other power sources, e.g. \"DC Power\", \"Primary Battery\" or \"Battery back-up\". This attribute SHALL " +
                             "NOT be used to convey information such as battery form factor, or chemistry",
                    xref: { document: "core", section: "11.7.6.3" }
                },

                {
                    tag: "attribute", name: "WiredAssessedInputVoltage", id: 0x3, type: "uint32", access: "R V",
                    conformance: "[WIRED]", quality: "X C",
                    details: "This attribute SHALL indicate the assessed RMS or DC voltage currently provided by the hard-wired " +
                             "source, in mV (millivolts). A value of NULL SHALL indicate the Node is currently unable to assess " +
                             "the value. If the wired source is not connected, but the Node is still able to assess a value, then " +
                             "the assessed value MAY be reported",
                    xref: { document: "core", section: "11.7.6.4" }
                },

                {
                    tag: "attribute", name: "WiredAssessedInputFrequency", id: 0x4, type: "uint16", access: "R V",
                    conformance: "[WIRED]", quality: "X C",
                    details: "This attribute SHALL indicate the assessed frequency of the voltage, currently provided by the hard-" +
                             "wired source, in Hz. A value of NULL SHALL indicate the Node is currently unable to assess the value" +
                             ". If the wired source is not connected, but the Node is still able to assess a value, then the " +
                             "assessed value MAY be reported",
                    xref: { document: "core", section: "11.7.6.5" }
                },

                {
                    tag: "attribute", name: "WiredCurrentType", id: 0x5, type: "WiredCurrentTypeEnum", access: "R V",
                    conformance: "WIRED", constraint: "desc", quality: "F",
                    details: "This attribute SHALL indicate the type of current the Node expects to be provided by the hard- wired" +
                             " source as specified in WiredCurrentTypeEnum",
                    xref: { document: "core", section: "11.7.6.6" }
                },

                {
                    tag: "attribute", name: "WiredAssessedCurrent", id: 0x6, type: "uint32", access: "R V",
                    conformance: "[WIRED]", quality: "X C",
                    details: "This attribute SHALL indicate the assessed instantaneous current draw of the Node on the hard- wired" +
                             " source, in mA (milliamps). A value of NULL SHALL indicate the Node is currently unable to assess " +
                             "the value. If the wired source is not connected, but the Node is still able to assess a value, then " +
                             "the assessed value MAY be reported",
                    xref: { document: "core", section: "11.7.6.7" }
                },

                {
                    tag: "attribute", name: "WiredNominalVoltage", id: 0x7, type: "uint32", access: "R V",
                    conformance: "[WIRED]", quality: "F",
                    details: "This attribute SHALL indicate the nominal voltage, printed as part of the Node’s regulatory " +
                             "compliance label in mV (millivolts), expected to be provided by the hard-wired source",
                    xref: { document: "core", section: "11.7.6.8" }
                },

                {
                    tag: "attribute", name: "WiredMaximumCurrent", id: 0x8, type: "uint32", access: "R V",
                    conformance: "[WIRED]", quality: "F",
                    details: "This attribute SHALL indicate the maximum current, printed as part of the Node’s regulatory " +
                             "compliance label in mA (milliamps), expected to be provided by the hard-wired source",
                    xref: { document: "core", section: "11.7.6.9" }
                },

                {
                    tag: "attribute", name: "WiredPresent", id: 0x9, type: "bool", access: "R V",
                    conformance: "[WIRED]",
                    details: "This attribute SHALL indicate if the Node detects that the hard-wired power source is properly " +
                             "connected",
                    xref: { document: "core", section: "11.7.6.10" }
                },

                {
                    tag: "attribute", name: "ActiveWiredFaults", id: 0xa, type: "list", access: "R V",
                    conformance: "[WIRED]",
                    details: "This attribute SHALL indicate the set of wired faults currently detected by the Node on this power " +
                             "source. This set is represented as a list of WiredFaultEnum. When the Node detects a fault has been " +
                             "raised, the appropriate WiredFaultEnum value SHALL be added to this list, provided it is not already" +
                             " present. This list SHALL NOT contain more than one instance of a specific WiredFaultEnum value. " +
                             "When the Node detects all conditions contributing to a fault have been cleared, the corresponding " +
                             "WiredFaultEnum value SHALL be removed from this list. An empty list SHALL indicate there are " +
                             "currently no active faults. The order of this list SHOULD have no significance. Clients interested " +
                             "in monitoring changes in active faults MAY subscribe to this attribute, or they MAY subscribe to " +
                             "WiredFaultChange",
                    xref: { document: "core", section: "11.7.6.11" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "WiredFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "BatVoltage", id: 0xb, type: "uint32", access: "R V", conformance: "[BAT]",
                    quality: "X C",
                    details: "This attribute SHALL indicate the currently measured output voltage of the battery in mV (millivolts" +
                             "). A value of NULL SHALL indicate the Node is currently unable to assess the value",
                    xref: { document: "core", section: "11.7.6.12" }
                },

                {
                    tag: "attribute", name: "BatPercentRemaining", id: 0xc, type: "uint8", access: "R V",
                    conformance: "[BAT]", constraint: "0 to 200", quality: "X C",
                    details: "This attribute SHALL indicate the estimated percentage of battery charge remaining until the battery" +
                             " will no longer be able to provide power to the Node. Values are expressed in half percent units, " +
                             "ranging from 0 to 200. E.g. a value of 48 is equivalent to 24%. A value of NULL SHALL indicate the " +
                             "Node is currently unable to assess the value",
                    xref: { document: "core", section: "11.7.6.13" }
                },

                {
                    tag: "attribute", name: "BatTimeRemaining", id: 0xd, type: "uint32", access: "R V",
                    conformance: "[BAT]", quality: "X C",
                    details: "This attribute SHALL indicate the estimated time in seconds before the battery will no longer be " +
                             "able to provide power to the Node. A value of NULL SHALL indicate the Node is currently unable to " +
                             "assess the value",
                    xref: { document: "core", section: "11.7.6.14" }
                },

                {
                    tag: "attribute", name: "BatChargeLevel", id: 0xe, type: "BatChargeLevelEnum", access: "R V",
                    conformance: "BAT", constraint: "desc",
                    details: "This attribute SHALL indicate a coarse ranking of the charge level of the battery, used to indicate " +
                             "when intervention is required as specified in BatChargeLevelEnum",
                    xref: { document: "core", section: "11.7.6.15" }
                },

                {
                    tag: "attribute", name: "BatReplacementNeeded", id: 0xf, type: "bool", access: "R V",
                    conformance: "BAT",
                    details: "This attribute SHALL indicate if the battery needs to be replaced. Replacement MAY be simple routine" +
                             " maintenance, such as with a single use, non-rechargeable cell. Replacement, however, MAY also " +
                             "indicate end of life, or serious fault with a rechargeable or even non-replaceable cell",
                    xref: { document: "core", section: "11.7.6.16" }
                },

                {
                    tag: "attribute", name: "BatReplaceability", id: 0x10, type: "BatReplaceabilityEnum", access: "R V",
                    conformance: "BAT", quality: "F",
                    details: "This attribute SHALL indicate the replaceability of the battery as specified in " +
                             "BatReplaceabilityEnum",
                    xref: { document: "core", section: "11.7.6.17" }
                },

                {
                    tag: "attribute", name: "BatPresent", id: 0x11, type: "bool", access: "R V", conformance: "[BAT]",
                    details: "This attribute SHALL indicate whether the Node detects that the batteries are properly installed",
                    xref: { document: "core", section: "11.7.6.18" }
                },

                {
                    tag: "attribute", name: "ActiveBatFaults", id: 0x12, type: "list", access: "R V",
                    conformance: "[BAT]",
                    details: "This attribute SHALL indicate the set of battery faults currently detected by the Node on this power" +
                             " source. This set is represented as a list of BatFaultEnum. When the Node detects a fault has been " +
                             "raised, the appropriate BatFaultEnum value SHALL be added to this list, provided it is not already " +
                             "present. This list SHALL NOT contain more than one instance of a specific BatFaultEnum value. When " +
                             "the Node detects all conditions contributing to a fault have been cleared, the corresponding " +
                             "BatFaultEnum value SHALL be removed from this list. An empty list SHALL indicate there are currently" +
                             " no active faults. The order of this list SHOULD have no significance. Clients interested in " +
                             "monitoring changes in active faults MAY subscribe to this attribute, or they MAY subscribe to " +
                             "Section 11.7.7.2, “BatFaultChange Event",
                    xref: { document: "core", section: "11.7.6.19" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "BatFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "BatReplacementDescription", id: 0x13, type: "string", access: "R V",
                    conformance: "REPLC", constraint: "max 60", quality: "F",
                    details: "This attribute SHALL provide a user-facing description of this battery, which SHOULD contain " +
                             "information required to identify a replacement, such as form factor, chemistry or preferred " +
                             "manufacturer",
                    xref: { document: "core", section: "11.7.6.20" }
                },

                {
                    tag: "attribute", name: "BatCommonDesignation", id: 0x14, type: "BatCommonDesignationEnum",
                    access: "R V", conformance: "[REPLC]", constraint: "desc", quality: "F",
                    details: "This attribute SHALL indicate the ID of the common or colloquial designation of the battery, as " +
                             "specified in BatCommonDesignationEnum",
                    xref: { document: "core", section: "11.7.6.21" }
                },

                {
                    tag: "attribute", name: "BatAnsiDesignation", id: 0x15, type: "string", access: "R V",
                    conformance: "[REPLC]", constraint: "max 20", quality: "F",
                    details: "This attribute SHALL indicate the string representing the ANSI designation for the battery as " +
                             "specified in ANSI C18",
                    xref: { document: "core", section: "11.7.6.22" }
                },

                {
                    tag: "attribute", name: "BatIecDesignation", id: 0x16, type: "string", access: "R V",
                    conformance: "[REPLC]", constraint: "max 20", quality: "F",
                    details: "This attribute SHALL indicate the string representing the IEC designation for the battery as " +
                             "specified in IEC 60086",
                    xref: { document: "core", section: "11.7.6.23" }
                },

                {
                    tag: "attribute", name: "BatApprovedChemistry", id: 0x17, type: "BatApprovedChemistryEnum",
                    access: "R V", conformance: "[REPLC]", constraint: "desc", quality: "F",
                    details: "This attribute SHALL indicate the ID of the preferred chemistry of the battery source as specified " +
                             "in BatApprovedChemistryEnum",
                    xref: { document: "core", section: "11.7.6.24" }
                },

                {
                    tag: "attribute", name: "BatCapacity", id: 0x18, type: "uint32", access: "R V",
                    conformance: "[REPLC]", quality: "F",
                    details: "This attribute SHALL indicate the preferred minimum charge capacity rating in mAh of individual, " +
                             "user- or factory-serviceable battery cells or packs in the battery source",
                    xref: { document: "core", section: "11.7.6.25" }
                },

                {
                    tag: "attribute", name: "BatQuantity", id: 0x19, type: "uint8", access: "R V", conformance: "REPLC",
                    quality: "F",
                    details: "This attribute SHALL indicate the quantity of individual, user- or factory-serviceable battery cells" +
                             " or packs in the battery source",
                    xref: { document: "core", section: "11.7.6.26" }
                },

                {
                    tag: "attribute", name: "BatChargeState", id: 0x1a, type: "BatChargeStateEnum", access: "R V",
                    conformance: "RECHG", constraint: "desc",
                    details: "This attribute SHALL indicate the current state of the battery source with respect to charging as " +
                             "specified in BatChargeStateEnum",
                    xref: { document: "core", section: "11.7.6.27" }
                },

                {
                    tag: "attribute", name: "BatTimeToFullCharge", id: 0x1b, type: "uint32", access: "R V",
                    conformance: "[RECHG]", quality: "X C",
                    details: "This attribute SHALL indicate the estimated time in seconds before the battery source will be at " +
                             "full charge. A value of NULL SHALL indicate the Node is currently unable to assess the value",
                    xref: { document: "core", section: "11.7.6.28" }
                },

                {
                    tag: "attribute", name: "BatFunctionalWhileCharging", id: 0x1c, type: "bool", access: "R V",
                    conformance: "RECHG",
                    details: "This attribute SHALL indicate whether the Node can remain operational while the battery source is " +
                             "charging",
                    xref: { document: "core", section: "11.7.6.29" }
                },

                {
                    tag: "attribute", name: "BatChargingCurrent", id: 0x1d, type: "uint32", access: "R V",
                    conformance: "[RECHG]", quality: "X C",
                    details: "This attribute SHALL indicate assessed current in mA (milliamps) presently supplied to charge the " +
                             "battery source. A value of NULL SHALL indicate the Node is currently unable to assess the value",
                    xref: { document: "core", section: "11.7.6.30" }
                },

                {
                    tag: "attribute", name: "ActiveBatChargeFaults", id: 0x1e, type: "list", access: "R V",
                    conformance: "[RECHG]",
                    details: "This attribute SHALL indicate the set of charge faults currently detected by the Node on this power " +
                             "source. This set is represented as a list of BatChargeFaultEnum. When the Node detects a fault has " +
                             "been raised, the appropriate BatChargeFaultEnum value SHALL be added to this list, provided it is " +
                             "not already present. This list SHALL NOT contain more than one instance of a specific " +
                             "BatChargeFaultEnum value. When the Node detects all conditions contributing to a fault have been " +
                             "cleared, the corresponding BatChargeFaultEnum value SHALL be removed from this list. An empty list " +
                             "SHALL indicate there are currently no active faults. The order of this list SHOULD have no " +
                             "significance. Clients interested in monitoring changes in active faults MAY subscribe to this " +
                             "attribute, or they MAY subscribe to the BatFaultChange event",
                    xref: { document: "core", section: "11.7.6.31" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "BatChargeFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", name: "WiredFaultChange", id: 0x0, access: "V", conformance: "[WIRED]",
                    priority: "info",
                    details: "The WiredFaultChange Event SHALL be generated when the set of wired faults currently detected by the" +
                             " Node on this wired power source changes. This event SHALL correspond to a change in value of " +
                             "ActiveWiredFaults",
                    xref: { document: "core", section: "11.7.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 8",
                            default: [],
                            xref: { document: "core", section: "11.7.7.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "WiredFaultEnum"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 8",
                            default: [],
                            xref: { document: "core", section: "11.7.7.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "WiredFaultEnum"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "event", name: "BatFaultChange", id: 0x1, access: "V", conformance: "[BAT]", priority: "info",
                    details: "The BatFaultChange Event SHALL be generated when the set of battery faults currently detected by the" +
                             " Node on this battery power source changes. This event SHALL correspond to a change in value of " +
                             "ActiveBatFaults",
                    xref: { document: "core", section: "11.7.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 8",
                            default: [],
                            xref: { document: "core", section: "11.7.7.2" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "BatFaultEnum"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 8",
                            default: [],
                            xref: { document: "core", section: "11.7.7.2" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "BatFaultEnum"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "event", name: "BatChargeFaultChange", id: 0x2, access: "V", conformance: "[RECHG]",
                    priority: "info",
                    details: "The BatChargeFaultChange Event SHALL be generated when the set of charge faults currently",
                    xref: { document: "core", section: "11.7.7.3" },
                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 16",
                            default: [],
                            xref: { document: "core", section: "11.7.7.3" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "BatChargeFaultEnum"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 16",
                            default: [],
                            xref: { document: "core", section: "11.7.7.3" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "BatChargeFaultEnum"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiredFaultEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.1" }
                        },

                        {
                            tag: "datatype", name: "OverVoltage", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.1" }
                        },

                        {
                            tag: "datatype", name: "UnderVoltage", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatFaultEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.2" }
                        },

                        {
                            tag: "datatype", name: "OverTemp", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.2" }
                        },

                        {
                            tag: "datatype", name: "UnderTemp", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeFaultEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "AmbientTooHot", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "AmbientTooCold", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "BatteryTooHot", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "BatteryTooCold", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "BatteryAbsent", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "BatteryOverVoltage", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "BatteryUnderVoltage", id: 0x7, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "ChargerOverVoltage", id: 0x8, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "ChargerUnderVoltage", id: 0x9, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        },

                        {
                            tag: "datatype", name: "SafetyTimeout", id: 0xa, conformance: "M",
                            xref: { document: "core", section: "11.7.5.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "PowerSourceStatusEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Active", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Standby", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.4" }
                        },

                        {
                            tag: "datatype", name: "Unavailable", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.7.5.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiredCurrentTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.5" },
                    children: [
                        {
                            tag: "datatype", name: "Ac", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.5" }
                        },

                        {
                            tag: "datatype", name: "Dc", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeLevelEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.6" },
                    children: [
                        {
                            tag: "datatype", name: "Ok", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.6" }
                        },

                        {
                            tag: "datatype", name: "Warning", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.6" }
                        },

                        {
                            tag: "datatype", name: "Critical", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.6" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatReplaceabilityEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.7" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.7" }
                        },

                        {
                            tag: "datatype", name: "NotReplaceable", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.7" }
                        },

                        {
                            tag: "datatype", name: "UserReplaceable", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.7" }
                        },

                        {
                            tag: "datatype", name: "FactoryReplaceable", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.7.5.7" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatCommonDesignationEnum", type: "enum16",
                    details: "This data type is derived from enum16",
                    xref: { document: "core", section: "11.7.5.8" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Aaa", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Aa", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "C", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "D", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "4V5", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "6V0", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "9V0", id: 0x7, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "12Aa", id: 0x8, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Aaaa", id: 0x9, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "A", id: 0xa, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "B", id: 0xb, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "F", id: 0xc, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "N", id: 0xd, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "No6", id: 0xe, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "SubC", id: 0xf, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "A23", id: 0x10, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "A27", id: 0x11, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Ba5800", id: 0x12, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Duplex", id: 0x13, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "4Sr44", id: 0x14, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "523", id: 0x15, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "531", id: 0x16, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "15V0", id: 0x17, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "22V5", id: 0x18, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "30V0", id: 0x19, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "45V0", id: 0x1a, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "67V5", id: 0x1b, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "J", id: 0x1c, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Cr123A", id: 0x1d, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Cr2", id: 0x1e, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "2Cr5", id: 0x1f, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "CrP2", id: 0x20, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "CrV3", id: 0x21, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr41", id: 0x22, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr43", id: 0x23, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr44", id: 0x24, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr45", id: 0x25, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr48", id: 0x26, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr54", id: 0x27, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr55", id: 0x28, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr57", id: 0x29, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr58", id: 0x2a, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr59", id: 0x2b, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr60", id: 0x2c, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr63", id: 0x2d, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr64", id: 0x2e, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr65", id: 0x2f, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr66", id: 0x30, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr67", id: 0x31, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr68", id: 0x32, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr69", id: 0x33, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr516", id: 0x34, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr731", id: 0x35, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Sr712", id: 0x36, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Lr932", id: 0x37, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "A5", id: 0x38, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "A10", id: 0x39, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "A13", id: 0x3a, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "A312", id: 0x3b, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "A675", id: 0x3c, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Ac41E", id: 0x3d, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "10180", id: 0x3e, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "10280", id: 0x3f, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "10440", id: 0x40, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "14250", id: 0x41, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "14430", id: 0x42, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "14500", id: 0x43, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "14650", id: 0x44, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "15270", id: 0x45, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "16340", id: 0x46, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "Rcr123A", id: 0x47, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "17500", id: 0x48, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "17670", id: 0x49, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "18350", id: 0x4a, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "18500", id: 0x4b, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "18650", id: 0x4c, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "19670", id: 0x4d, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "25500", id: 0x4e, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "26650", id: 0x4f, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        },

                        {
                            tag: "datatype", name: "32600", id: 0x50, conformance: "M",
                            xref: { document: "core", section: "11.7.5.8" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatApprovedChemistryEnum", type: "enum16",
                    details: "This data type is derived from enum16",
                    xref: { document: "core", section: "11.7.5.9" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "Alkaline", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumCarbonFluoride", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumChromiumOxide", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumCopperOxide", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumIronDisulfide", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumManganeseDioxide", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumThionylChloride", id: 0x7, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "Magnesium", id: 0x8, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "MercuryOxide", id: 0x9, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "NickelOxyhydride", id: 0xa, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "SilverOxide", id: 0xb, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "ZincAir", id: 0xc, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "ZincCarbon", id: 0xd, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "ZincChloride", id: 0xe, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "ZincManganeseDioxide", id: 0xf, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LeadAcid", id: 0x10, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumCobaltOxide", id: 0x11, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumIon", id: 0x12, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumIonPolymer", id: 0x13, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumIronPhosphate", id: 0x14, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumSulfur", id: 0x15, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "LithiumTitanate", id: 0x16, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "NickelCadmium", id: 0x17, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "NickelHydrogen", id: 0x18, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "NickelIron", id: 0x19, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "NickelMetalHydride", id: 0x1a, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "NickelZinc", id: 0x1b, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "SilverZinc", id: 0x1c, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "SodiumIon", id: 0x1d, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "SodiumSulfur", id: 0x1e, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "ZincBromide", id: 0x1f, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        },

                        {
                            tag: "datatype", name: "ZincCerium", id: 0x20, conformance: "M",
                            xref: { document: "core", section: "11.7.5.9" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BatChargeStateEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.7.5.10" },
                    children: [
                        {
                            tag: "datatype", name: "Unknown", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.7.5.10" }
                        },

                        {
                            tag: "datatype", name: "IsCharging", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.7.5.10" }
                        },

                        {
                            tag: "datatype", name: "IsAtFullCharge", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.7.5.10" }
                        },

                        {
                            tag: "datatype", name: "IsNotCharging", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.7.5.10" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "NetworkCommissioning", id: 0x31, classification: "node",
            xref: { document: "core", section: "11.8" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "WI", id: 0x0, conformance: "O.a1", description: "Wi-Fi related features",
                            xref: { document: "core", section: "11.8.4" }
                        },

                        {
                            tag: "datatype", name: "TH", id: 0x1, conformance: "O.a1", description: "Thread related features",
                            xref: { document: "core", section: "11.8.4" }
                        },

                        {
                            tag: "datatype", name: "ET", id: 0x2, conformance: "O.a1", description: "Ethernet related features",
                            xref: { document: "core", section: "11.8.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "MaxNetworks", id: 0x0, type: "uint8", access: "R A", conformance: "M",
                    constraint: "min 1", quality: "F",
                    details: "This SHALL indicate the maximum number of network configuration entries that can be added, based on " +
                             "available device resources. The length of the Networks attribute list SHALL be less than or equal to" +
                             " this value",
                    xref: { document: "core", section: "11.8.6.1" }
                },

                {
                    tag: "attribute", name: "Networks", id: 0x1, type: "list", access: "R A", conformance: "M",
                    constraint: "max MaxNetworks", default: [],
                    details: "This attribute SHALL indicate the network configurations that are usable on the network interface " +
                             "represented by this cluster server instance",
                    xref: { document: "core", section: "11.8.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "NetworkInfoStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ScanMaxTimeSeconds", id: 0x2, type: "uint8", access: "R V",
                    conformance: "WI | TH", constraint: "desc", quality: "F",
                    details: "This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on " +
                             "this cluster server instance to provide scan results",
                    xref: { document: "core", section: "11.8.6.3" }
                },

                {
                    tag: "attribute", name: "ConnectMaxTimeSeconds", id: 0x3, type: "uint8", access: "R V",
                    conformance: "WI | TH", constraint: "desc", quality: "F",
                    details: "This attribute SHALL indicate the maximum duration taken, in seconds, by the network interface on " +
                             "this cluster server instance to report a successful or failed network connection indication. This " +
                             "maximum time SHALL account for all operations needed until a successful network connection is deemed" +
                             " to have occurred, including, for example, obtaining IP addresses, or the execution of necessary " +
                             "internal retries",
                    xref: { document: "core", section: "11.8.6.4" }
                },

                {
                    tag: "attribute", name: "InterfaceEnabled", id: 0x4, type: "bool", access: "RW VA",
                    conformance: "M", default: true, quality: "N",
                    details: "This attribute SHALL indicate whether the associated network interface is enabled or not. By default" +
                             " all network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set to true",
                    xref: { document: "core", section: "11.8.6.5" }
                },

                {
                    tag: "attribute", name: "LastNetworkingStatus", id: 0x5, type: "NetworkCommissioningStatusEnum",
                    access: "R A", conformance: "M", default: undefined, quality: "X",
                    details: "This attribute SHALL indicate the status of the last attempt either scan or connect to an " +
                             "operational network, using this interface, whether by invocation of the ConnectNetwork command or by" +
                             " autonomous connection after loss of connectivity or during initial establishment. If no such " +
                             "attempt was made, or no network configurations exist in the Networks attribute, then this attribute " +
                             "SHALL be set to null",
                    xref: { document: "core", section: "11.8.6.6" }
                },

                {
                    tag: "attribute", name: "LastNetworkId", id: 0x6, type: "octstr", access: "R A", conformance: "M",
                    constraint: "1 to 32", default: undefined, quality: "X",
                    details: "This attribute SHALL indicate the NetworkID used in the last attempt to connect to an operational " +
                             "network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous " +
                             "connection after loss of connectivity or during initial establishment. If no such attempt was made, " +
                             "or no network configurations exist in the Networks attribute, then this attribute SHALL be set to " +
                             "null",
                    xref: { document: "core", section: "11.8.6.7" }
                },

                {
                    tag: "attribute", name: "LastConnectErrorValue", id: 0x7, type: "int32", access: "R A",
                    conformance: "M", default: undefined, quality: "X",
                    details: "This attribute SHALL indicate the ErrorValue used in the last failed attempt to connect to an " +
                             "operational network, using this interface, whether by invocation of the ConnectNetwork command or by" +
                             " autonomous connection after loss of connectivity or during initial establishment. If no such " +
                             "attempt was made, or no network configurations exist in the Networks attribute, then this attribute " +
                             "SHALL be set to null",
                    xref: { document: "core", section: "11.8.6.8" }
                },

                {
                    tag: "command", name: "ScanNetworks", id: 0x0, access: "A", conformance: "WI | TH",
                    direction: "request", response: "ScanNetworksResponse",
                    details: "This command SHALL scan on the Cluster instance’s associated network interface for either of",
                    xref: { document: "core", section: "11.8.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "Ssid", id: 0x0, type: "octstr", conformance: "[WI]", constraint: "1 to 32",
                            default: undefined, quality: "X",
                            xref: { document: "core", section: "11.8.7.1" }
                        },

                        {
                            tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                            xref: { document: "core", section: "11.8.7.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ScanNetworksResponse", id: 0x1, conformance: "WI | TH",
                    direction: "response",
                    details: "This command SHALL contain the status of the last ScanNetworks command, and the associated scan " +
                             "results if the operation was successful",
                    xref: { document: "core", section: "11.8.7.2" },
                    children: [
                        {
                            tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                            conformance: "M", constraint: "desc",
                            xref: { document: "core", section: "11.8.7.2" }
                        },

                        {
                            tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O",
                            constraint: "max 512",
                            xref: { document: "core", section: "11.8.7.2" }
                        },

                        {
                            tag: "datatype", name: "WiFiScanResults", id: 0x2, type: "list", conformance: "WI",
                            constraint: "desc",
                            xref: { document: "core", section: "11.8.7.2" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "WiFiInterfaceScanResultStruct"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "ThreadScanResults", id: 0x3, type: "list", conformance: "TH",
                            constraint: "desc",
                            xref: { document: "core", section: "11.8.7.2" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "ThreadInterfaceScanResultStruct"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "command", name: "AddOrUpdateWiFiNetwork", id: 0x2, access: "A", conformance: "WI",
                    direction: "request", response: "NetworkConfigResponse",
                    details: "This command SHALL be used to add or modify Wi-Fi network configurations",
                    xref: { document: "core", section: "11.8.7.3" },
                    children: [
                        {
                            tag: "datatype", name: "Ssid", id: 0x0, type: "octstr", conformance: "M", constraint: "max 32",
                            xref: { document: "core", section: "11.8.7.3" }
                        },

                        {
                            tag: "datatype", name: "Credentials", id: 0x1, type: "octstr", conformance: "M",
                            constraint: "max 64",
                            xref: { document: "core", section: "11.8.7.3" }
                        },

                        {
                            tag: "datatype", name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O",
                            xref: { document: "core", section: "11.8.7.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "AddOrUpdateThreadNetwork", id: 0x3, access: "A", conformance: "TH",
                    direction: "request", response: "NetworkConfigResponse",
                    details: "This command SHALL be used to add or modify Thread network configurations",
                    xref: { document: "core", section: "11.8.7.4" },
                    children: [
                        {
                            tag: "datatype", name: "OperationalDataset", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "max 254",
                            xref: { document: "core", section: "11.8.7.4" }
                        },

                        {
                            tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                            xref: { document: "core", section: "11.8.7.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveNetwork", id: 0x4, access: "A", conformance: "WI | TH",
                    direction: "request", response: "NetworkConfigResponse",
                    details: "This command SHALL remove the network configuration from the Cluster if there was already a network " +
                             "configuration with the same NetworkID. The relative order of the entries in the Networks attribute " +
                             "list SHALL remain unchanged, except for the removal of the requested network configuration",
                    xref: { document: "core", section: "11.8.7.7" },
                    children: [
                        {
                            tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "1 to 32",
                            xref: { document: "core", section: "11.8.7.7" }
                        },

                        {
                            tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                            xref: { document: "core", section: "11.8.7.7" }
                        }
                    ]
                },

                {
                    tag: "command", name: "NetworkConfigResponse", id: 0x5, conformance: "WI | TH",
                    direction: "response",
                    details: "This response command relates status information for some commands which require it as their " +
                             "response command. See each individual cluster server command for the situations that may cause a " +
                             "NetworkingStatus different than Success",
                    xref: { document: "core", section: "11.8.7.8" },
                    children: [
                        {
                            tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                            conformance: "M", constraint: "desc",
                            xref: { document: "core", section: "11.8.7.8" }
                        },

                        {
                            tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O",
                            constraint: "max 512",
                            xref: { document: "core", section: "11.8.7.8" }
                        },

                        {
                            tag: "datatype", name: "NetworkIndex", id: 0x2, type: "uint8", conformance: "O",
                            xref: { document: "core", section: "11.8.7.8" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ConnectNetwork", id: 0x6, access: "A", conformance: "WI | TH",
                    direction: "request", response: "ConnectNetworkResponse",
                    details: "This command SHALL attempt to connect to a network whose configuration was previously added by " +
                             "either the AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its" +
                             " NetworkID",
                    xref: { document: "core", section: "11.8.7.9" },
                    children: [
                        {
                            tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "1 to 32",
                            xref: { document: "core", section: "11.8.7.9" }
                        },

                        {
                            tag: "datatype", name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O",
                            xref: { document: "core", section: "11.8.7.9" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ConnectNetworkResponse", id: 0x7, conformance: "WI | TH",
                    direction: "response",
                    details: "The data for this command is as follows",
                    xref: { document: "core", section: "11.8.7.10" },
                    children: [
                        {
                            tag: "datatype", name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum",
                            conformance: "M",
                            xref: { document: "core", section: "11.8.7.10" }
                        },

                        {
                            tag: "datatype", name: "DebugText", id: 0x1, type: "string", conformance: "O",
                            xref: { document: "core", section: "11.8.7.10" }
                        },

                        {
                            tag: "datatype", name: "ErrorValue", id: 0x2, type: "int32", conformance: "M", quality: "X",
                            xref: { document: "core", section: "11.8.7.10" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ReorderNetwork", id: 0x8, access: "A", conformance: "WI | TH",
                    direction: "request", response: "NetworkConfigResponse",
                    details: "This command SHALL set the specific order of the network configuration selected by its NetworkID in " +
                             "the Networks attribute list to match the position given by NetworkIndex",
                    xref: { document: "core", section: "11.8.7.11" },
                    children: [
                        {
                            tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "1 to 32",
                            xref: { document: "core", section: "11.8.7.11" }
                        },

                        {
                            tag: "datatype", name: "NetworkIndex", id: 0x1, type: "uint8", conformance: "M", constraint: "desc",
                            xref: { document: "core", section: "11.8.7.11" }
                        },

                        {
                            tag: "datatype", name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O",
                            xref: { document: "core", section: "11.8.7.11" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiSecurityBitmap", type: "map8",
                    details: "This data type is derived from map8",
                    xref: { document: "core", section: "11.8.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Unencrypted", id: 0x0, description: "Supports unencrypted Wi-Fi",
                            xref: { document: "core", section: "11.8.5.1" }
                        },

                        {
                            tag: "datatype", name: "Wep", id: 0x1, description: "Supports Wi-Fi using WEP security",
                            xref: { document: "core", section: "11.8.5.1" }
                        },

                        {
                            tag: "datatype", name: "WpaPersonal", id: 0x2,
                            description: "Supports Wi-Fi using WPA-Personal security",
                            xref: { document: "core", section: "11.8.5.1" }
                        },

                        {
                            tag: "datatype", name: "Wpa2Personal", id: 0x3,
                            description: "Supports Wi-Fi using WPA2-Personal security",
                            xref: { document: "core", section: "11.8.5.1" }
                        },

                        {
                            tag: "datatype", name: "Wpa3Personal", id: 0x4,
                            description: "Supports Wi-Fi using WPA3-Personal security",
                            xref: { document: "core", section: "11.8.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiBandEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.8.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "2G4", id: 0x0, conformance: "O.a1+",
                            xref: { document: "core", section: "11.8.5.2" }
                        },

                        {
                            tag: "datatype", name: "3G65", id: 0x1, conformance: "O.a1+",
                            xref: { document: "core", section: "11.8.5.2" }
                        },

                        {
                            tag: "datatype", name: "5G", id: 0x2, conformance: "O.a1+",
                            xref: { document: "core", section: "11.8.5.2" }
                        },

                        {
                            tag: "datatype", name: "6G", id: 0x3, conformance: "O.a1+",
                            xref: { document: "core", section: "11.8.5.2" }
                        },

                        {
                            tag: "datatype", name: "60G", id: 0x4, conformance: "O.a1+",
                            xref: { document: "core", section: "11.8.5.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkCommissioningStatusEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.8.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "Success", id: 0x0,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "OutOfRange", id: 0x1,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "BoundsExceeded", id: 0x2,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "NetworkIdNotFound", id: 0x3,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "DuplicateNetworkId", id: 0x4,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "NetworkNotFound", id: 0x5,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "RegulatoryError", id: 0x6,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "AuthFailure", id: 0x7,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "UnsupportedSecurity", id: 0x8,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "OtherConnectionFailure", id: 0x9,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "Ipv6Failed", id: 0xa,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "IpBindFailed", id: 0xb,
                            xref: { document: "core", section: "11.8.5.3" }
                        },

                        {
                            tag: "datatype", name: "UnknownError", id: 0xc,
                            xref: { document: "core", section: "11.8.5.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkInfoStruct", type: "struct",
                    details: "NetworkInfoStruct struct describes an existing network configuration, as provided in the Networks " +
                             "attribute",
                    xref: { document: "core", section: "11.8.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "NetworkId", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "1 to 32",
                            xref: { document: "core", section: "11.8.5.4" }
                        },

                        {
                            tag: "datatype", name: "Connected", id: 0x1, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.8.5.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiInterfaceScanResultStruct", type: "struct",
                    details: "WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result",
                    xref: { document: "core", section: "11.8.5.5" },
                    children: [
                        {
                            tag: "datatype", name: "Security", id: 0x0, type: "WiFiSecurityBitmap", conformance: "WI",
                            xref: { document: "core", section: "11.8.5.5" }
                        },

                        {
                            tag: "datatype", name: "Ssid", id: 0x1, type: "octstr", conformance: "WI", constraint: "max 32",
                            xref: { document: "core", section: "11.8.5.5" }
                        },

                        {
                            tag: "datatype", name: "Bssid", id: 0x2, type: "octstr", conformance: "WI", constraint: "6",
                            xref: { document: "core", section: "11.8.5.5" }
                        },

                        {
                            tag: "datatype", name: "Channel", id: 0x3, type: "uint16", conformance: "WI",
                            xref: { document: "core", section: "11.8.5.5" }
                        },

                        {
                            tag: "datatype", name: "WiFiBand", id: 0x4, type: "WiFiBandEnum", conformance: "[WI]",
                            xref: { document: "core", section: "11.8.5.5" }
                        },

                        {
                            tag: "datatype", name: "Rssi", id: 0x5, type: "int8", conformance: "[WI]",
                            xref: { document: "core", section: "11.8.5.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ThreadInterfaceScanResultStruct", type: "struct",
                    details: "ThreadInterfaceScanResultStruct represents a single Thread network scan result",
                    xref: { document: "core", section: "11.8.5.6" },
                    children: [
                        {
                            tag: "datatype", name: "PanId", id: 0x0, type: "uint16", conformance: "TH",
                            constraint: "0 to 65534",
                            xref: { document: "core", section: "11.8.5.6" }
                        },

                        {
                            tag: "datatype", name: "ExtendedPanId", id: 0x1, type: "uint64", conformance: "TH",
                            xref: { document: "core", section: "11.8.5.6" }
                        },

                        {
                            tag: "datatype", name: "NetworkName", id: 0x2, type: "string", conformance: "TH",
                            constraint: "1 to 16",
                            xref: { document: "core", section: "11.8.5.6" }
                        },

                        {
                            tag: "datatype", name: "Channel", id: 0x3, type: "uint16", conformance: "TH",
                            xref: { document: "core", section: "11.8.5.6" }
                        },

                        {
                            tag: "datatype", name: "Version", id: 0x4, type: "uint8", conformance: "TH",
                            xref: { document: "core", section: "11.8.5.6" }
                        },

                        {
                            tag: "datatype", name: "ExtendedAddress", id: 0x5, type: "hwadr", conformance: "TH",
                            xref: { document: "core", section: "11.8.5.6" }
                        },

                        {
                            tag: "datatype", name: "Rssi", id: 0x6, type: "int8", conformance: "TH",
                            xref: { document: "core", section: "11.8.5.6" }
                        },

                        {
                            tag: "datatype", name: "Lqi", id: 0x7, type: "uint8", conformance: "TH",
                            xref: { document: "core", section: "11.8.5.6" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "GeneralCommissioning", id: 0x30, classification: "node",
            xref: { document: "core", section: "11.9" },
            children: [
                {
                    tag: "attribute", name: "Breadcrumb", id: 0x0, type: "uint64", access: "RW VA", conformance: "M",
                    default: 0,
                    details: "This attribute allows for the storage of a client-provided small payload which Administrators and " +
                             "Commissioners MAY write and then subsequently read, to keep track of their own progress. This MAY be" +
                             " used by the Commissioner to avoid repeating already-executed actions upon re-establishing a " +
                             "commissioning link after an error",
                    xref: { document: "core", section: "11.9.5.1" }
                },

                {
                    tag: "attribute", name: "BasicCommissioningInfo", id: 0x1, type: "BasicCommissioningInfo",
                    access: "R V", conformance: "M", constraint: "desc", quality: "F",
                    details: "This attribute SHALL describe critical parameters needed at the beginning of commissioning flow. See" +
                             " BasicCommissioningInfo for more information",
                    xref: { document: "core", section: "11.9.5.2" }
                },

                {
                    tag: "attribute", name: "RegulatoryConfig", id: 0x2, type: "RegulatoryLocationTypeEnum",
                    access: "R V", conformance: "M", default: "LocationCapability",
                    details: "This attribute SHALL indicate the regulatory configuration for the product",
                    xref: { document: "core", section: "11.9.5.3" }
                },

                {
                    tag: "attribute", name: "LocationCapability", id: 0x3, type: "RegulatoryLocationTypeEnum",
                    access: "R V", conformance: "M", default: 2, quality: "F",
                    details: "LocationCapability is statically set by the manufacturer and indicates if this Node needs to be told" +
                             " an exact RegulatoryLocation. For example a Node which is \"Indoor Only\" would not be certified for " +
                             "outdoor use at all, and thus there is no need for a commissioner to set or ask the user about " +
                             "whether the device will be used inside or outside. However a device which states its capability is \"" +
                             "Indoor/Outdoor\" means it would like clarification if possible",
                    xref: { document: "core", section: "11.9.5.4" }
                },

                {
                    tag: "attribute", name: "SupportsConcurrentConnection", id: 0x4, type: "bool", access: "R V",
                    conformance: "M", default: true, quality: "F",
                    details: "This attribute SHALL indicate whether this device supports \"concurrent connection flow\" " +
                             "commissioning mode (see Section 5.5, “Commissioning Flows”). If false, the device only supports \"non" +
                             "-concurrent connection flow\" mode",
                    xref: { document: "core", section: "11.9.5.5" }
                },

                {
                    tag: "command", name: "ArmFailSafe", id: 0x0, access: "A", conformance: "M", direction: "request",
                    response: "ArmFailSafeResponse",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", name: "ArmFailSafeResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", name: "SetRegulatoryConfig", id: 0x2, access: "A", conformance: "M",
                    direction: "request", response: "SetRegulatoryConfigResponse",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", name: "SetRegulatoryConfigResponse", id: 0x3, conformance: "M",
                    direction: "response",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", name: "CommissioningComplete", id: 0x4, access: "F A", conformance: "M",
                    direction: "request", response: "CommissioningCompleteResponse",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "command", name: "CommissioningCompleteResponse", id: 0x5, conformance: "M",
                    direction: "response",
                    xref: { document: "core", section: "11.9.6.1" }
                },

                {
                    tag: "datatype", name: "CommissioningErrorEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.9.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "Ok", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        },

                        {
                            tag: "datatype", name: "ValueOutsideRange", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        },

                        {
                            tag: "datatype", name: "InvalidAuthentication", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        },

                        {
                            tag: "datatype", name: "NoFailSafe", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        },

                        {
                            tag: "datatype", name: "BusyWithOtherAdmin", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.9.4.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RegulatoryLocationTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.9.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "Indoor", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.9.4.2" }
                        },

                        {
                            tag: "datatype", name: "Outdoor", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.9.4.2" }
                        },

                        {
                            tag: "datatype", name: "IndoorOutdoor", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.9.4.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BasicCommissioningInfo", type: "struct",
                    details: "This structure provides some constant values that MAY be of use to all commissioners",
                    xref: { document: "core", section: "11.9.4.3" },
                    children: [
                        {
                            tag: "datatype", name: "FailSafeExpiryLengthSeconds", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.9.4.3" }
                        },

                        {
                            tag: "datatype", name: "MaxCumulativeFailsafeSeconds", id: 0x1, type: "uint16", conformance: "M",
                            constraint: "desc",
                            xref: { document: "core", section: "11.9.4.3" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "DiagnosticLogs", id: 0x32, classification: "node",
            xref: { document: "core", section: "11.10" },
            children: [
                {
                    tag: "command", name: "RetrieveLogsRequest", id: 0x0, access: "O", conformance: "M",
                    direction: "request", response: "RetrieveLogsResponse",
                    details: "Reception of this command starts the process of retrieving diagnostic logs from a Node. The data for" +
                             " this command is as follows",
                    xref: { document: "core", section: "11.10.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Intent", id: 0x0, type: "IntentEnum", conformance: "M",
                            xref: { document: "core", section: "11.10.5.1" }
                        },

                        {
                            tag: "datatype", name: "RequestedProtocol", id: 0x1, type: "TransferProtocolEnum", conformance: "M",
                            xref: { document: "core", section: "11.10.5.1" }
                        },

                        {
                            tag: "datatype", name: "TransferFileDesignator", id: 0x2, type: "string", conformance: "O",
                            constraint: "max 32",
                            xref: { document: "core", section: "11.10.5.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "RetrieveLogsResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This SHALL be generated as a response to the RetrieveLogsRequest. The data for this command is shown" +
                             " in the following",
                    xref: { document: "core", section: "11.10.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                            xref: { document: "core", section: "11.10.5.2" }
                        },

                        {
                            tag: "datatype", name: "LogContent", id: 0x1, type: "octstr", conformance: "M",
                            xref: { document: "core", section: "11.10.5.2" }
                        },

                        {
                            tag: "datatype", name: "UtcTimeStamp", id: 0x2, type: "epoch-us", conformance: "O",
                            xref: { document: "core", section: "11.10.5.2" }
                        },

                        {
                            tag: "datatype", name: "TimeSinceBoot", id: 0x3, type: "SystemTimeMicroseconds", conformance: "O",
                            xref: { document: "core", section: "11.10.5.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "IntentEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.10.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "EndUserSupport", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.10.4.1" }
                        },

                        {
                            tag: "datatype", name: "NetworkDiag", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.10.4.1" }
                        },

                        {
                            tag: "datatype", name: "CrashLogs", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.10.4.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "StatusEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.10.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "Success", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.10.4.2" }
                        },

                        {
                            tag: "datatype", name: "Exhausted", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.10.4.2" }
                        },

                        {
                            tag: "datatype", name: "NoLogs", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.10.4.2" }
                        },

                        {
                            tag: "datatype", name: "Busy", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.10.4.2" }
                        },

                        {
                            tag: "datatype", name: "Denied", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.10.4.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TransferProtocolEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.10.4.3" },
                    children: [
                        {
                            tag: "datatype", name: "ResponsePayload", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.10.4.3" }
                        },

                        {
                            tag: "datatype", name: "Bdx", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.10.4.3" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "GeneralDiagnostics", id: 0x33, classification: "node",
            xref: { document: "core", section: "11.11" },
            children: [
                {
                    tag: "attribute", name: "NetworkInterfaces", id: 0x0, type: "list", access: "R V", conformance: "M",
                    constraint: "max 8",
                    details: "The NetworkInterfaces attribute SHALL be a list of NetworkInterface structs. Each logical network " +
                             "interface on the Node SHALL be represented by a single entry within the NetworkInterfaces attribute",
                    xref: { document: "core", section: "11.11.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "NetworkInterface"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "RebootCount", id: 0x1, type: "uint16", access: "R V", conformance: "M",
                    quality: "N",
                    details: "The RebootCount attribute SHALL indicate a best-effort count of the number of times the Node has " +
                             "rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The " +
                             "RebootCount attribute SHALL NOT be incremented when a Node wakes from a low-power or sleep state. " +
                             "The RebootCount attribute SHALL only be reset to 0 upon a factory reset of the Node",
                    xref: { document: "core", section: "11.11.6.2" }
                },

                {
                    tag: "attribute", name: "UpTime", id: 0x2, type: "uint64", access: "R V", conformance: "O",
                    quality: "C",
                    details: "The UpTime attribute SHALL indicate a best-effort assessment of the length of time, in seconds, " +
                             "since the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods " +
                             "of time that a Node is in a low-power or sleep state. The UpTime attribute SHALL only be reset upon " +
                             "a device reboot",
                    xref: { document: "core", section: "11.11.6.3" }
                },

                {
                    tag: "attribute", name: "TotalOperationalHours", id: 0x3, type: "uint32", access: "R V",
                    conformance: "O", quality: "N C",
                    details: "The TotalOperationalHours attribute SHALL indicate a best-effort attempt at tracking the length of " +
                             "time, in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be " +
                             "incremented to account for the periods of time that a Node is in a low-power or sleep state. The",
                    xref: { document: "core", section: "11.11.6.4" }
                },

                {
                    tag: "attribute", name: "BootReason", id: 0x4, type: "BootReasonEnum", access: "R V",
                    conformance: "O",
                    details: "The BootReason attribute SHALL indicate the reason for the Node’s most recent boot",
                    xref: { document: "core", section: "11.11.6.5" }
                },

                {
                    tag: "attribute", name: "ActiveHardwareFaults", id: 0x5, type: "list", access: "R V",
                    conformance: "O", constraint: "max 11",
                    details: "The ActiveHardwareFaults attribute SHALL indicate the set of faults currently detected by the Node. " +
                             "When the Node detects a fault has been raised, the appropriate HardwareFaultEnum value SHALL be " +
                             "added to this list. This list SHALL NOT contain more than one instance of a specific " +
                             "HardwareFaultEnum value. When the Node detects that all conditions contributing to a fault has been " +
                             "cleared, the corresponding HardwareFaultEnum value SHALL be removed from this list. An empty list " +
                             "SHALL indicate there are currently no active faults. The order of this list SHOULD have no " +
                             "significance. Clients interested in monitoring changes in active faults MAY subscribe to this " +
                             "attribute, or they MAY subscribe to HardwareFaultChange",
                    xref: { document: "core", section: "11.11.6.6" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "HardwareFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ActiveRadioFaults", id: 0x6, type: "list", access: "R V", conformance: "O",
                    constraint: "max 7",
                    details: "The ActiveRadioFaults attribute SHALL indicate the set of faults currently detected by the Node. " +
                             "When the Node detects a fault has been raised, the appropriate RadioFaultEnum value SHALL be added " +
                             "to this list. This list SHALL NOT contain more than one instance of a specific RadioFaultEnum value" +
                             ". When the Node detects that all conditions contributing to a fault has been cleared, the " +
                             "corresponding RadioFaultEnum value SHALL be removed from this list. An empty list SHALL indicate " +
                             "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                             "interested in monitoring changes in active faults MAY subscribe to this attribute, or they MAY " +
                             "subscribe to RadioFaultChange",
                    xref: { document: "core", section: "11.11.6.7" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "RadioFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ActiveNetworkFaults", id: 0x7, type: "list", access: "R V",
                    conformance: "O", constraint: "max 4",
                    details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults currently detected by the Node. " +
                             "When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value SHALL be added" +
                             " to this list. This list SHALL NOT contain more than one instance of a specific NetworkFaultEnum " +
                             "value. When the Node detects that all conditions contributing to a fault has been cleared, the " +
                             "corresponding NetworkFaultEnum value SHALL be removed from this list. An empty list SHALL indicate " +
                             "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                             "interested in monitoring changes in active faults MAY subscribe to this attribute, or they MAY " +
                             "subscribe to NetworkFaultChange",
                    xref: { document: "core", section: "11.11.6.8" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "NetworkFaultEnum"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "TestEventTriggersEnabled", id: 0x8, type: "bool", access: "R V",
                    conformance: "M",
                    details: "The TestEventTriggersEnabled attribute SHALL indicate whether the Node has any TestEventTrigger " +
                             "configured. When this attribute is true, the Node has been configured with one or more test event " +
                             "triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1, “" +
                             "TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by " +
                             "Administrators to detect if a device was inadvertently commissioned with test event trigger mode " +
                             "enabled, and take appropriate action (e.g. warn the user and/or offer to remove all fabrics on the " +
                             "Node",
                    xref: { document: "core", section: "11.11.6.9" }
                },

                {
                    tag: "event", name: "HardwareFaultChange", id: 0x0, access: "V", conformance: "O",
                    priority: "critical",
                    details: "The HardwareFaultChange Event SHALL indicate a change in the set of hardware faults currently " +
                             "detected by the Node",
                    xref: { document: "core", section: "11.11.8.1" },
                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 11",
                            xref: { document: "core", section: "11.11.8.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "HardwareFaultEnum"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 11",
                            xref: { document: "core", section: "11.11.8.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "HardwareFaultEnum"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "event", name: "RadioFaultChange", id: 0x1, access: "V", conformance: "O",
                    priority: "critical",
                    details: "The RadioFaultChange Event SHALL indicate a change in the set of radio faults currently detected by " +
                             "the Node",
                    xref: { document: "core", section: "11.11.8.2" },
                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 7",
                            xref: { document: "core", section: "11.11.8.2" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "RadioFaultEnum"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 7",
                            xref: { document: "core", section: "11.11.8.2" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "RadioFaultEnum"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "event", name: "NetworkFaultChange", id: 0x2, access: "V", conformance: "O",
                    priority: "critical",
                    details: "The NetworkFaultChange Event SHALL indicate a change in the set of network faults currently detected" +
                             " by the Node",
                    xref: { document: "core", section: "11.11.8.3" },
                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 4",
                            xref: { document: "core", section: "11.11.8.3" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "NetworkFaultEnum"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 4",
                            xref: { document: "core", section: "11.11.8.3" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "NetworkFaultEnum"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "event", name: "BootReason", id: 0x3, access: "V", conformance: "M", priority: "critical",
                    details: "The BootReason Event SHALL indicate the reason that caused the device to start-up. The data of this " +
                             "event SHALL contain the following information",
                    xref: { document: "core", section: "11.11.8.4" },
                    children: [
                        {
                            tag: "datatype", name: "BootReason", id: 0x0, type: "BootReasonEnum", conformance: "M",
                            xref: { document: "core", section: "11.11.8.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "TestEventTrigger", id: 0x0, access: "M", conformance: "M",
                    direction: "request", response: "status",
                    details: "This command SHALL be supported to provide a means for certification tests to trigger some test- " +
                             "plan-specific events, necessary to assist in automation of device interactions for some " +
                             "certification test cases. This command SHALL NOT cause any changes to the state of the device that " +
                             "persist after the last fabric is removed",
                    xref: { document: "core", section: "11.11.7.1" },
                    children: [
                        {
                            tag: "datatype", name: "EnableKey", id: 0x0, type: "octstr", conformance: "M", constraint: "16",
                            xref: { document: "core", section: "11.11.7.1" }
                        },

                        {
                            tag: "datatype", name: "EventTrigger", id: 0x1, type: "uint64", conformance: "M",
                            xref: { document: "core", section: "11.11.7.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "HardwareFaultEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.11.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "Radio", id: 0x1, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "Sensor", id: 0x2, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "ResettableOverTemp", id: 0x3, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "NonResettableOverTemp", id: 0x4, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "PowerSource", id: 0x5, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "VisualDisplayFault", id: 0x6, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "AudioOutputFault", id: 0x7, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "UserInterfaceFault", id: 0x8, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "NonVolatileMemoryError", id: 0x9, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        },

                        {
                            tag: "datatype", name: "TamperDetected", id: 0xa, conformance: "O",
                            xref: { document: "core", section: "11.11.4.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RadioFaultEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.11.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.11.4.2" }
                        },

                        {
                            tag: "datatype", name: "WiFiFault", id: 0x1, conformance: "O",
                            xref: { document: "core", section: "11.11.4.2" }
                        },

                        {
                            tag: "datatype", name: "CellularFault", id: 0x2, conformance: "O",
                            xref: { document: "core", section: "11.11.4.2" }
                        },

                        {
                            tag: "datatype", name: "ThreadFault", id: 0x3, conformance: "O",
                            xref: { document: "core", section: "11.11.4.2" }
                        },

                        {
                            tag: "datatype", name: "NfcFault", id: 0x4, conformance: "O",
                            xref: { document: "core", section: "11.11.4.2" }
                        },

                        {
                            tag: "datatype", name: "BleFault", id: 0x5, conformance: "O",
                            xref: { document: "core", section: "11.11.4.2" }
                        },

                        {
                            tag: "datatype", name: "EthernetFault", id: 0x6, conformance: "O",
                            xref: { document: "core", section: "11.11.4.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkFaultEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.11.4.3" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.11.4.3" }
                        },

                        {
                            tag: "datatype", name: "HardwareFailure", id: 0x1, conformance: "O",
                            xref: { document: "core", section: "11.11.4.3" }
                        },

                        {
                            tag: "datatype", name: "NetworkJammed", id: 0x2, conformance: "O",
                            xref: { document: "core", section: "11.11.4.3" }
                        },

                        {
                            tag: "datatype", name: "ConnectionFailed", id: 0x3, conformance: "O",
                            xref: { document: "core", section: "11.11.4.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "InterfaceTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.11.4.4" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.11.4.4" }
                        },

                        {
                            tag: "datatype", name: "WiFi", id: 0x1, conformance: "O",
                            xref: { document: "core", section: "11.11.4.4" }
                        },

                        {
                            tag: "datatype", name: "Ethernet", id: 0x2, conformance: "O",
                            xref: { document: "core", section: "11.11.4.4" }
                        },

                        {
                            tag: "datatype", name: "Cellular", id: 0x3, conformance: "O",
                            xref: { document: "core", section: "11.11.4.4" }
                        },

                        {
                            tag: "datatype", name: "Thread", id: 0x4, conformance: "O",
                            xref: { document: "core", section: "11.11.4.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "BootReasonEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.11.4.5" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.11.4.5" }
                        },

                        {
                            tag: "datatype", name: "PowerOnReboot", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.11.4.5" }
                        },

                        {
                            tag: "datatype", name: "BrownOutReset", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.11.4.5" }
                        },

                        {
                            tag: "datatype", name: "SoftwareWatchdogReset", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.11.4.5" }
                        },

                        {
                            tag: "datatype", name: "HardwareWatchdogReset", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.11.4.5" }
                        },

                        {
                            tag: "datatype", name: "SoftwareUpdateCompleted", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.11.4.5" }
                        },

                        {
                            tag: "datatype", name: "SoftwareReset", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "11.11.4.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NetworkInterface", type: "struct",
                    details: "This structure describes a network interface supported by the Node, as provided in the " +
                             "NetworkInterfaces attribute",
                    xref: { document: "core", section: "11.11.4.6" },
                    children: [
                        {
                            tag: "datatype", name: "Name", id: 0x0, type: "string", access: "R V", conformance: "M",
                            constraint: "max 32",
                            xref: { document: "core", section: "11.11.4.6" }
                        },

                        {
                            tag: "datatype", name: "IsOperational", id: 0x1, type: "bool", access: "R V", conformance: "M",
                            xref: { document: "core", section: "11.11.4.6" }
                        },

                        {
                            tag: "datatype", name: "OffPremiseServicesReachableIPv4", id: 0x2, type: "bool", access: "R V",
                            conformance: "M", default: undefined, quality: "X",
                            xref: { document: "core", section: "11.11.4.6" }
                        },

                        {
                            tag: "datatype", name: "OffPremiseServicesReachableIPv6", id: 0x3, type: "bool", access: "R V",
                            conformance: "M", default: undefined, quality: "X",
                            xref: { document: "core", section: "11.11.4.6" }
                        },

                        {
                            tag: "datatype", name: "HardwareAddress", id: 0x4, type: "HardwareAddress", access: "R V",
                            conformance: "M",
                            xref: { document: "core", section: "11.11.4.6" }
                        },

                        {
                            tag: "datatype", name: "IPv4Addresses", id: 0x5, type: "list", access: "R V", conformance: "M",
                            constraint: "max 4",
                            xref: { document: "core", section: "11.11.4.6" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "ipv4adr"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "IPv6Addresses", id: 0x6, type: "list", access: "R V", conformance: "M",
                            constraint: "max 8",
                            xref: { document: "core", section: "11.11.4.6" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "ipv6adr"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Type", id: 0x7, type: "InterfaceTypeEnum", access: "R V", conformance: "M",
                            xref: { document: "core", section: "11.11.4.6" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "SoftwareDiagnostics", id: 0x34, classification: "node",
            xref: { document: "core", section: "11.12" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "WTRMRK", id: 0x0,
                            description: "Node makes available the metrics for high watermark related to memory consumption.",
                            xref: { document: "core", section: "11.12.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "ThreadMetrics", id: 0x0, type: "list", access: "R V", conformance: "O",
                    constraint: "max 64",
                    details: "The ThreadMetrics attribute SHALL be a list of ThreadMetricsStruct structs. Each active thread on " +
                             "the Node SHALL be represented by a single entry within the ThreadMetrics attribute",
                    xref: { document: "core", section: "11.12.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "ThreadMetricsStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentHeapFree", id: 0x1, type: "uint64", access: "R V", conformance: "O",
                    details: "The CurrentHeapFree attribute SHALL indicate the current amount of heap memory, in bytes, that are " +
                             "free for allocation. The effective amount MAY be smaller due to heap fragmentation or other reasons",
                    xref: { document: "core", section: "11.12.6.2" }
                },

                {
                    tag: "attribute", name: "CurrentHeapUsed", id: 0x2, type: "uint64", access: "R V", conformance: "O",
                    details: "The CurrentHeapUsed attribute SHALL indicate the current amount of heap memory, in bytes, that is " +
                             "being used",
                    xref: { document: "core", section: "11.12.6.3" }
                },

                {
                    tag: "attribute", name: "CurrentHeapHighWatermark", id: 0x3, type: "uint64", access: "R V",
                    conformance: "WTRMRK",
                    details: "The CurrentHeapHighWatermark attribute SHALL indicate the maximum amount of heap memory, in bytes, " +
                             "that has been used by the Node. This value SHALL only be reset upon a Node reboot or upon receiving " +
                             "of the ResetWatermarks command",
                    xref: { document: "core", section: "11.12.6.4" }
                },

                {
                    tag: "event", name: "SoftwareFault", id: 0x0, access: "V", conformance: "O", priority: "info",
                    details: "The SoftwareFault Event SHALL be generated when a software fault takes place on the Node. The event’" +
                             "s data are as follows",
                    xref: { document: "core", section: "11.12.8.1" },
                    children: [
                        {
                            tag: "datatype", name: "Id", id: 0x0, type: "uint64", conformance: "M", default: 0,
                            xref: { document: "core", section: "11.12.8.1" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "max 8",
                            default: "empty",
                            xref: { document: "core", section: "11.12.8.1" }
                        },

                        {
                            tag: "datatype", name: "FaultRecording", id: 0x2, type: "octstr", conformance: "O",
                            constraint: "max 1024", default: "empty",
                            xref: { document: "core", section: "11.12.8.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ResetWatermarks", id: 0x0, access: "M", conformance: "WTRMRK",
                    direction: "request", response: "status",
                    details: "Receipt of this command SHALL reset the following values which track high and lower watermarks",
                    xref: { document: "core", section: "11.12.7.1" }
                },

                {
                    tag: "datatype", name: "ThreadMetricsStruct", type: "struct",
                    details: "ID Field",
                    xref: { document: "core", section: "11.12.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Id", id: 0x0, type: "uint64", conformance: "M",
                            xref: { document: "core", section: "11.12.5.1" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "max 8",
                            default: "empty",
                            xref: { document: "core", section: "11.12.5.1" }
                        },

                        {
                            tag: "datatype", name: "StackFreeCurrent", id: 0x2, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "11.12.5.1" }
                        },

                        {
                            tag: "datatype", name: "StackFreeMinimum", id: 0x3, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "11.12.5.1" }
                        },

                        {
                            tag: "datatype", name: "StackSize", id: 0x4, type: "uint32", conformance: "O",
                            xref: { document: "core", section: "11.12.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "ThreadNetworkDiagnostics", id: 0x35, classification: "node",
            xref: { document: "core", section: "11.13" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "PKTCNT", id: 0x0,
                            description: "Server supports the counts for the number of received and transmitted packets on the Thread interface.",
                            xref: { document: "core", section: "11.13.4" }
                        },

                        {
                            tag: "datatype", name: "ERRCNT", id: 0x1,
                            description: "Server supports the counts for the number of errors that have occurred during the reception and transmission of packets on the Thread interface.",
                            xref: { document: "core", section: "11.13.4" }
                        },

                        {
                            tag: "datatype", name: "MLECNT", id: 0x2,
                            description: "Server supports the counts for various MLE layer happenings.",
                            xref: { document: "core", section: "11.13.4" }
                        },

                        {
                            tag: "datatype", name: "MACCNT", id: 0x3,
                            description: "Server supports the counts for various MAC layer happenings.",
                            xref: { document: "core", section: "11.13.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Channel", id: 0x0, type: "uint16", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The Channel attribute SHALL indicate the 802.15.4 channel number configured on the Node’s Thread " +
                             "interface (that is, the Active Operational Dataset’s current Channel value). A value of null SHALL " +
                             "indicate that the Thread interface is not currently configured or operational",
                    xref: { document: "core", section: "11.13.6.1" }
                },

                {
                    tag: "attribute", name: "RoutingRole", id: 0x1, type: "RoutingRoleEnum", access: "R V",
                    conformance: "M", quality: "X",
                    details: "The RoutingRole attribute SHALL indicate the role that this Node has within the routing of messages " +
                             "through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the " +
                             "following table. A value of null SHALL indicate that the Thread interface is not currently " +
                             "configured or operational",
                    xref: { document: "core", section: "11.13.6.2" }
                },

                {
                    tag: "attribute", name: "NetworkName", id: 0x2, type: "String", access: "R V", conformance: "M",
                    constraint: "max 16", quality: "X",
                    details: "The NetworkName attribute SHALL indicate a human-readable (displayable) name for the Thread network " +
                             "that the Node has been configured to join to. A value of null SHALL indicate that the Thread " +
                             "interface is not currently configured or operational",
                    xref: { document: "core", section: "11.13.6.3" }
                },

                {
                    tag: "attribute", name: "PanId", id: 0x3, type: "uint16", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The PanId attribute SHALL indicate the 16-bit identifier of the Node on the Thread network. A value " +
                             "of null SHALL indicate that the Thread interface is not currently configured or operational",
                    xref: { document: "core", section: "11.13.6.4" }
                },

                {
                    tag: "attribute", name: "ExtendedPanId", id: 0x4, type: "uint64", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The ExtendedPanId attribute SHALL indicate the unique 64-bit identifier of the Node on the Thread " +
                             "network. A value of null SHALL indicate that the Thread interface is not currently configured or " +
                             "operational",
                    xref: { document: "core", section: "11.13.6.5" }
                },

                {
                    tag: "attribute", name: "MeshLocalPrefix", id: 0x5, type: "ipv6pre", access: "R V",
                    conformance: "M", quality: "X",
                    details: "The MeshLocalPrefix attribute SHALL indicate the mesh-local IPv6 prefix for the Thread network that " +
                             "the Node has been configured to join to. A value of null SHALL indicate that the Thread interface is" +
                             " not currently configured or operational",
                    xref: { document: "core", section: "11.13.6.6" }
                },

                {
                    tag: "attribute", name: "OverrunCount", id: 0x6, type: "uint64", access: "R V",
                    conformance: "ERRCNT", default: 0, quality: "C",
                    details: "The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or egress" +
                             ", due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                             "OverrunCount attribute SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.13.6.7" }
                },

                {
                    tag: "attribute", name: "NeighborTable", id: 0x7, type: "list", access: "R V", conformance: "M",
                    default: [],
                    details: "The NeighborTable attribute SHALL indicate the current list of Nodes that comprise the neighbor " +
                             "table on the Node",
                    xref: { document: "core", section: "11.13.6.8" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "NeighborTableStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "RouteTable", id: 0x8, type: "list", access: "R V", conformance: "M",
                    default: [],
                    details: "The RouteTable attribute SHALL indicate the current list of router capable Nodes for which routes " +
                             "have been established",
                    xref: { document: "core", section: "11.13.6.9" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "RouteTableStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "PartitionId", id: 0x9, type: "uint32", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The PartitionId attribute SHALL indicate the Thread Leader Partition Id for the Thread network to " +
                             "which the Node is joined. This attribute SHALL be null if not attached to a Thread network",
                    xref: { document: "core", section: "11.13.6.10" }
                },

                {
                    tag: "attribute", name: "Weighting", id: 0xa, type: "uint8", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The Weighting attribute SHALL indicate the Thread Leader Weight used when operating in the Leader " +
                             "role. This attribute SHALL be null if not attached to a Thread network",
                    xref: { document: "core", section: "11.13.6.11" }
                },

                {
                    tag: "attribute", name: "DataVersion", id: 0xb, type: "uint8", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The DataVersion attribute SHALL indicate the full Network Data Version the Node currently uses. This" +
                             " attribute SHALL be null if not attached to a Thread network",
                    xref: { document: "core", section: "11.13.6.12" }
                },

                {
                    tag: "attribute", name: "StableDataVersion", id: 0xc, type: "uint8", access: "R V",
                    conformance: "M", quality: "X",
                    details: "The StableDataVersion attribute SHALL indicate the Network Data Version for the stable subset of",
                    xref: { document: "core", section: "11.13.6.13" }
                },

                {
                    tag: "attribute", name: "LeaderRouterId", id: 0xd, type: "uint8", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The LeaderRouterId attribute SHALL indicate the 8-bit LeaderRouterId the Node shall attempt to " +
                             "utilize upon becoming a router or leader on the Thread network. This attribute SHALL be null if not " +
                             "attached to a Thread network",
                    xref: { document: "core", section: "11.13.6.14" }
                },

                {
                    tag: "attribute", name: "DetachedRoleCount", id: 0xe, type: "uint16", access: "R V",
                    conformance: "[M, LECNT]", default: 0, quality: "C",
                    details: "The DetachedRoleCount attribute SHALL indicate the number of times the Node entered the " +
                             "OT_DEVICE_ROLE_DETACHED role as specified within the Thread specification. This value SHALL only be " +
                             "reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.15" }
                },

                {
                    tag: "attribute", name: "ChildRoleCount", id: 0xf, type: "uint16", access: "R V",
                    conformance: "[M, LECNT]", default: 0, quality: "C",
                    details: "The ChildRoleCount attribute SHALL indicate the number of times the Node entered the " +
                             "OT_DEVICE_ROLE_CHILD role as specified within the Thread specification. This value SHALL only be " +
                             "reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.16" }
                },

                {
                    tag: "attribute", name: "RouterRoleCount", id: 0x10, type: "uint16", access: "R V",
                    conformance: "[M, LECNT]", default: 0, quality: "C",
                    details: "The RouterRoleCount attribute SHALL indicate the number of times the Node entered the " +
                             "OT_DEVICE_ROLE_ROUTER role as specified within the Thread specification. This value SHALL only be " +
                             "reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.17" }
                },

                {
                    tag: "attribute", name: "LeaderRoleCount", id: 0x11, type: "uint16", access: "R V",
                    conformance: "[M, LECNT]", default: 0, quality: "C",
                    details: "The LeaderRoleCount attribute SHALL indicate the number of times the Node entered the " +
                             "OT_DEVICE_ROLE_LEADER role as specified within the Thread specification. This value SHALL only be " +
                             "reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.18" }
                },

                {
                    tag: "attribute", name: "AttachAttemptCount", id: 0x12, type: "uint16", access: "R V",
                    conformance: "[M, LECNT]", default: 0, quality: "C",
                    details: "The AttachAttemptCount attribute SHALL indicate the number of attempts that have been made to attach" +
                             " to a Thread network while the Node was detached from all Thread networks. This value SHALL only be " +
                             "reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.19" }
                },

                {
                    tag: "attribute", name: "PartitionIdChangeCount", id: 0x13, type: "uint16", access: "R V",
                    conformance: "[M, LECNT]", default: 0, quality: "C",
                    details: "The PartitionIdChangeCount attribute SHALL indicate the number of times that the Thread network that" +
                             " the Node is connected to has changed its Partition ID. This value SHALL only be reset upon a Node " +
                             "reboot",
                    xref: { document: "core", section: "11.13.6.20" }
                },

                {
                    tag: "attribute", name: "BetterPartitionAttachAttemptCount", id: 0x14, type: "uint16",
                    access: "R V", conformance: "[M, LECNT]", default: 0, quality: "C",
                    details: "The BetterPartitionAttachAttemptCount attribute SHALL indicate the number of times a Node has " +
                             "attempted to attach to a different Thread partition that it has determined is better than the " +
                             "partition it is currently attached to. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.21" }
                },

                {
                    tag: "attribute", name: "ParentChangeCount", id: 0x15, type: "uint16", access: "R V",
                    conformance: "[M, LECNT]", default: 0, quality: "C",
                    details: "The ParentChangeCount attribute SHALL indicate the number of times a Node has changed its parent. " +
                             "This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.22" }
                },

                {
                    tag: "attribute", name: "TxTotalCount", id: 0x16, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxTotalCount attribute SHALL indicate the total number of unique MAC frame transmission requests" +
                             ". The TxTotalCount attribute SHALL only be incremented by 1 for each MAC transmission request " +
                             "regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL " +
                             "only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.23" }
                },

                {
                    tag: "attribute", name: "TxUnicastCount", id: 0x17, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxUnicastCount attribute SHALL indicate the total number of unique unicast MAC frame " +
                             "transmission requests. The TxUnicastCount attribute SHALL only be incremented by 1 for each unicast " +
                             "MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                             "retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.24" }
                },

                {
                    tag: "attribute", name: "TxBroadcastCount", id: 0x18, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxBroadcastCount attribute SHALL indicate the total number of unique broadcast MAC frame " +
                             "transmission requests. The TxBroadcastCount attribute SHALL only be incremented by 1 for each " +
                             "broadcast MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                             "retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.25" }
                },

                {
                    tag: "attribute", name: "TxAckRequestedCount", id: 0x19, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxAckRequestedCount attribute SHALL indicate the total number of unique MAC frame transmission " +
                             "requests with requested acknowledgment. The TxAckRequestedCount attribute SHALL only be incremented " +
                             "by 1 for each MAC transmission request with requested acknowledgment regardless of the amount of CCA" +
                             " failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.26" }
                },

                {
                    tag: "attribute", name: "TxAckedCount", id: 0x1a, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxAckedCount attribute SHALL indicate the total number of unique MAC frame transmission requests" +
                             " that were acked. The TxAckedCount attribute SHALL only be incremented by 1 for each MAC " +
                             "transmission request that is acked regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                             "retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.27" }
                },

                {
                    tag: "attribute", name: "TxNoAckRequestedCount", id: 0x1b, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxNoAckRequestedCount attribute SHALL indicate the total number of unique MAC frame transmission" +
                             " requests without requested acknowledgment. The TxNoAckRequestedCount attribute SHALL only be " +
                             "incremented by 1 for each MAC transmission request that is does not request acknowledgement " +
                             "regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions",
                    xref: { document: "core", section: "11.13.6.28" }
                },

                {
                    tag: "attribute", name: "TxDataCount", id: 0x1c, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxDataCount attribute SHALL indicate the total number of unique MAC Data frame transmission " +
                             "requests. The TxDataCount attribute SHALL only be incremented by 1 for each MAC Data frame " +
                             "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions" +
                             ". This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.29" }
                },

                {
                    tag: "attribute", name: "TxDataPollCount", id: 0x1d, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxDataPollCount attribute SHALL indicate the total number of unique MAC Data Poll frame " +
                             "transmission requests. The TxDataPollCount attribute SHALL only be incremented by 1 for each MAC " +
                             "Data Poll frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                             "retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.30" }
                },

                {
                    tag: "attribute", name: "TxBeaconCount", id: 0x1e, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxBeaconCount attribute SHALL indicate the total number of unique MAC Beacon frame transmission " +
                             "requests. The TxBeaconCount attribute SHALL only be incremented by 1 for each MAC Beacon frame " +
                             "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions",
                    xref: { document: "core", section: "11.13.6.31" }
                },

                {
                    tag: "attribute", name: "TxBeaconRequestCount", id: 0x1f, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxBeaconRequestCount attribute SHALL indicate the total number of unique MAC Beacon Request " +
                             "frame transmission requests. The TxBeaconRequestCount attribute SHALL only be incremented by 1 for " +
                             "each MAC Beacon Request frame transmission request regardless of the amount of CCA failures, CSMA-CA" +
                             " attempts, or retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.32" }
                },

                {
                    tag: "attribute", name: "TxOtherCount", id: 0x20, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxOtherCount attribute SHALL indicate the total number of unique MAC frame transmission requests" +
                             " that are not counted by any other attribute. The TxOtherCount attribute SHALL only be incremented " +
                             "by 1 for each MAC frame transmission request regardless of the amount of CCA failures, CSMA-CA " +
                             "attempts, or retransmissions. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.33" }
                },

                {
                    tag: "attribute", name: "TxRetryCount", id: 0x21, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxRetryCount attribute SHALL indicate the total number of MAC retransmission attempts. The " +
                             "TxRetryCount attribute SHALL only be incremented by 1 for each retransmission attempt that may be " +
                             "triggered by lack of acknowledgement, CSMA/CA failure, or other type of transmission error. This " +
                             "value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.34" }
                },

                {
                    tag: "attribute", name: "TxDirectMaxRetryExpiryCount", id: 0x22, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxDirectMaxRetryExpiryCount attribute SHALL indicate the total number of unique MAC transmission" +
                             " packets that meet maximal retry limit for direct packets. The TxDirectMaxRetryExpiryCount attribute" +
                             " SHALL only be incremented by 1 for each unique MAC transmission packets that meets the maximal " +
                             "retry limit for direct packets. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.35" }
                },

                {
                    tag: "attribute", name: "TxIndirectMaxRetryExpiryCount", id: 0x23, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxIndirectMaxRetryExpiryCount attribute SHALL indicate the total number of unique MAC " +
                             "transmission packets that meet maximal retry limit for indirect packets. The " +
                             "TxIndirectMaxRetryExpiryCount attribute SHALL only be incremented by 1 for each unique MAC " +
                             "transmission packets that meets the maximal retry limit for indirect packets. This value SHALL only " +
                             "be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.36" }
                },

                {
                    tag: "attribute", name: "TxErrCcaCount", id: 0x24, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxErrCcaCount attribute SHALL indicate the total number of CCA failures. The TxErrCcaCount " +
                             "attribute SHALL only be incremented by 1 for each instance of a CCA failure. This value SHALL only " +
                             "be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.37" }
                },

                {
                    tag: "attribute", name: "TxErrAbortCount", id: 0x25, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxErrAbortCount attribute SHALL indicate the total number of unique MAC transmission request " +
                             "failures caused by an abort error. The TxErrAbortCount attribute SHALL only be incremented by 1 for " +
                             "each unique MAC transmission request failure caused by an abort error",
                    xref: { document: "core", section: "11.13.6.38" }
                },

                {
                    tag: "attribute", name: "TxErrBusyChannelCount", id: 0x26, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The TxErrBusyChannelCount attribute SHALL indicate the total number of unique MAC transmission " +
                             "request failures caused by an error as the result of a busy channel (a CSMA/CA fail). The " +
                             "TxErrBusyChannelCount attribute SHALL only be incremented by 1 for each unique MAC transmission " +
                             "request failure caused by a busy channel such as a CSMA/CA failure",
                    xref: { document: "core", section: "11.13.6.39" }
                },

                {
                    tag: "attribute", name: "RxTotalCount", id: 0x27, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxTotalCount attribute SHALL indicate the total number of received unique MAC frames. This value" +
                             " SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.40" }
                },

                {
                    tag: "attribute", name: "RxUnicastCount", id: 0x28, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxUnicastCount attribute SHALL indicate the total number of received unique unicast MAC frames. " +
                             "This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.41" }
                },

                {
                    tag: "attribute", name: "RxBroadcastCount", id: 0x29, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxBroadcastCount attribute SHALL indicate the total number of received unique broadcast MAC " +
                             "frames. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.42" }
                },

                {
                    tag: "attribute", name: "RxDataCount", id: 0x2a, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxDataCount attribute SHALL indicate the total number of received unique MAC Data frames. This " +
                             "value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.43" }
                },

                {
                    tag: "attribute", name: "RxDataPollCount", id: 0x2b, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxDataPollCount attribute SHALL indicate the total number of received unique MAC Data Poll " +
                             "frames. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.44" }
                },

                {
                    tag: "attribute", name: "RxBeaconCount", id: 0x2c, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxBeaconCount attribute SHALL indicate the total number of received unique MAC Beacon frames. " +
                             "This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.45" }
                },

                {
                    tag: "attribute", name: "RxBeaconRequestCount", id: 0x2d, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxBeaconRequestCount attribute SHALL indicate the total number of received unique MAC Beacon " +
                             "Request frames. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.46" }
                },

                {
                    tag: "attribute", name: "RxOtherCount", id: 0x2e, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxOtherCount attribute SHALL indicate the total number of received unique MAC frame requests " +
                             "that are not counted by any other attribute. This value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.47" }
                },

                {
                    tag: "attribute", name: "RxAddressFilteredCount", id: 0x2f, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxAddressFilteredCount attribute SHALL indicate the total number of received unique MAC frame " +
                             "requests that have been dropped as a result of MAC filtering. This value SHALL only be reset upon a " +
                             "Node reboot",
                    xref: { document: "core", section: "11.13.6.48" }
                },

                {
                    tag: "attribute", name: "RxDestAddrFilteredCount", id: 0x30, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxDestAddrFilteredCount attribute SHALL indicate the total number of received unique MAC frame " +
                             "requests that have been dropped as a result of a destination address check. This value SHALL only be" +
                             " reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.49" }
                },

                {
                    tag: "attribute", name: "RxDuplicatedCount", id: 0x31, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxDuplicatedCount attribute SHALL indicate the total number of received MAC frame requests that " +
                             "have been dropped as a result of being a duplicate of a previously received MAC frame request. This " +
                             "value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.50" }
                },

                {
                    tag: "attribute", name: "RxErrNoFrameCount", id: 0x32, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxErrNoFrameCount attribute SHALL indicate the total number of received unique MAC frame " +
                             "requests that have been dropped as a result of missing or malformed frame contents. This value SHALL" +
                             " only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.51" }
                },

                {
                    tag: "attribute", name: "RxErrUnknownNeighborCount", id: 0x33, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxErrUnknownNeighborCount attribute SHALL indicate the total number of received unique MAC frame" +
                             " requests that have been dropped as a result of originating from an unknown neighbor device. This " +
                             "value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.52" }
                },

                {
                    tag: "attribute", name: "RxErrInvalidScrAddrCount", id: 0x34, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxErrInvalidScrAddrCount attribute SHALL indicate the total number of received unique MAC frame " +
                             "requests that have been dropped as a result of containing an invalid source address. This value " +
                             "SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.53" }
                },

                {
                    tag: "attribute", name: "RxErrSecCount", id: 0x35, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxErrSecCount attribute SHALL indicate the total number of received unique MAC frame requests " +
                             "that have been dropped as a result of an error with the security of the received frame. This value " +
                             "SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.54" }
                },

                {
                    tag: "attribute", name: "RxErrFcsCount", id: 0x36, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxErrFcsCount attribute SHALL indicate the total number of received unique MAC frame requests " +
                             "that have been dropped as a result of an error with the FCS of the received frame. This value SHALL " +
                             "only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.55" }
                },

                {
                    tag: "attribute", name: "RxErrOtherCount", id: 0x37, type: "uint32", access: "R V",
                    conformance: "[M, ACCNT]", default: 0, quality: "C",
                    details: "The RxErrOtherCount attribute SHALL indicate the total number of received unique MAC frame requests " +
                             "that have been dropped as a result of an error that is not counted by any other attribute. This " +
                             "value SHALL only be reset upon a Node reboot",
                    xref: { document: "core", section: "11.13.6.56" }
                },

                {
                    tag: "attribute", name: "ActiveTimestamp", id: 0x38, type: "uint64", access: "R V",
                    conformance: "O", default: 0, quality: "X",
                    details: "This attribute SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.57" }
                },

                {
                    tag: "attribute", name: "PendingTimestamp", id: 0x39, type: "uint64", access: "R V",
                    conformance: "O", default: 0, quality: "X",
                    details: "This attribute SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.58" }
                },

                {
                    tag: "attribute", name: "Delay", id: 0x3a, type: "uint32", access: "R V", conformance: "O",
                    default: 0, quality: "X",
                    details: "This attribute SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.59" }
                },

                {
                    tag: "attribute", name: "SecurityPolicy", id: 0x3b, type: "SecurityPolicy", access: "R V",
                    conformance: "M", quality: "X",
                    details: "The SecurityPolicy attribute indicates the current security policies for the Thread partition to " +
                             "which a Node is connected. This attribute SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.60" }
                },

                {
                    tag: "attribute", name: "ChannelPage0Mask", id: 0x3c, type: "octstr", access: "R V",
                    conformance: "M", constraint: "4", quality: "X",
                    details: "The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band" +
                             ". The channels are represented in most significant bit order, with bit value 1 meaning selected, bit" +
                             " value 0 meaning unselected. For example, the most significant bit of the left-most byte indicates " +
                             "channel 0. If channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. This attribute " +
                             "SHALL be null when there is no dataset configured",
                    xref: { document: "core", section: "11.13.6.61" }
                },

                {
                    tag: "attribute", name: "OperationalDatasetComponents", id: 0x3d,
                    type: "OperationalDatasetComponents", access: "R V", conformance: "M", quality: "X",
                    details: "The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of " +
                             "various operationally acquired values",
                    xref: { document: "core", section: "11.13.6.62" }
                },

                {
                    tag: "attribute", name: "ActiveNetworkFaults", id: 0x3e, type: "list", access: "R V",
                    conformance: "M", constraint: "max 4",
                    details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults currently detected by the Node",
                    xref: { document: "core", section: "11.13.6.63" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "NetworkFaultEnum"
                        }
                    ]
                },

                {
                    tag: "event", name: "ConnectionStatus", id: 0x0, access: "V", conformance: "O", priority: "info",
                    details: "The ConnectionStatus Event SHALL indicate that a Node’s connection status to a Thread network has " +
                             "changed",
                    xref: { document: "core", section: "11.13.8.2" },
                    children: [
                        {
                            tag: "datatype", name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M",
                            xref: { document: "core", section: "11.13.8.2" }
                        }
                    ]
                },

                {
                    tag: "event", name: "NetworkFaultChange", id: 0x1, access: "V", conformance: "O", priority: "info",
                    details: "The NetworkFaultChange Event SHALL indicate a change in the set of network faults currently detected" +
                             " by the Node",
                    xref: { document: "core", section: "11.13.8.1" },
                    children: [
                        {
                            tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 4",
                            xref: { document: "core", section: "11.13.8.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "NetworkFaultEnum"
                                }
                            ]
                        },

                        {
                            tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 4",
                            xref: { document: "core", section: "11.13.8.1" },
                            children: [
                                {
                                    tag: "datatype", name: "entry", type: "NetworkFaultEnum"
                                }
                            ]
                        }
                    ]
                },

                {
                    tag: "command", name: "ResetCounts", id: 0x0, access: "M", conformance: "ERRCNT",
                    direction: "request", response: "status",
                    details: "Reception of this command SHALL reset the following attributes to 0",
                    xref: { document: "core", section: "11.13.7.1" }
                },

                {
                    tag: "datatype", name: "NetworkFaultEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.13.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.13.5.1" }
                        },

                        {
                            tag: "datatype", name: "LinkDown", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.13.5.1" }
                        },

                        {
                            tag: "datatype", name: "HardwareFailure", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.13.5.1" }
                        },

                        {
                            tag: "datatype", name: "NetworkJammed", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.13.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ConnectionStatusEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.13.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "Connected", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.13.5.2" }
                        },

                        {
                            tag: "datatype", name: "NotConnected", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.13.5.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RoutingRoleEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.13.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.13.5.3" }
                        },

                        {
                            tag: "datatype", name: "Unassigned", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.13.5.3" }
                        },

                        {
                            tag: "datatype", name: "SleepyEndDevice", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.13.5.3" }
                        },

                        {
                            tag: "datatype", name: "EndDevice", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.13.5.3" }
                        },

                        {
                            tag: "datatype", name: "Reed", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.13.5.3" }
                        },

                        {
                            tag: "datatype", name: "Router", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.13.5.3" }
                        },

                        {
                            tag: "datatype", name: "Leader", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "11.13.5.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NeighborTableStruct", type: "struct",
                    details: "ExtAddress Field",
                    xref: { document: "core", section: "11.13.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "ExtAddress", id: 0x0, type: "uint64", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "Age", id: 0x1, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "Rloc16", id: 0x2, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "LinkFrameCounter", id: 0x3, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "MleFrameCounter", id: 0x4, type: "uint32", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "Lqi", id: 0x5, type: "uint8", conformance: "M", constraint: "0 to 255",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "AverageRssi", id: 0x6, type: "int8", conformance: "M",
                            constraint: "-128 to 0", default: undefined, quality: "X",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "LastRssi", id: 0x7, type: "int8", conformance: "M", constraint: "-128 to 0",
                            default: undefined, quality: "X",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "FrameErrorRate", id: 0x8, type: "uint8", conformance: "O",
                            constraint: "0 to 100", default: 0,
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "MessageErrorRate", id: 0x9, type: "uint8", conformance: "O",
                            constraint: "0 to 100", default: 0,
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "RxOnWhenIdle", id: 0xa, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "FullThreadDevice", id: 0xb, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "FullNetworkData", id: 0xc, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        },

                        {
                            tag: "datatype", name: "IsChild", id: 0xd, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "RouteTableStruct", type: "struct",
                    details: "ExtAddress Field",
                    xref: { document: "core", section: "11.13.5.5" },
                    children: [
                        {
                            tag: "datatype", name: "ExtAddress", id: 0x0, type: "uint64", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "Rloc16", id: 0x1, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "RouterId", id: 0x2, type: "uint8", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "NextHop", id: 0x3, type: "uint8", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "PathCost", id: 0x4, type: "uint8", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "LqiIn", id: 0x5, type: "uint8", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "LqiOut", id: 0x6, type: "uint8", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "Age", id: 0x7, type: "uint8", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "Allocated", id: 0x8, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        },

                        {
                            tag: "datatype", name: "LinkEstablished", id: 0x9, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "SecurityPolicy", type: "struct",
                    details: "RotationTime Field",
                    xref: { document: "core", section: "11.13.5.6" },
                    children: [
                        {
                            tag: "datatype", name: "RotationTime", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.13.5.6" }
                        },

                        {
                            tag: "datatype", name: "Flags", id: 0x1, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.13.5.6" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "OperationalDatasetComponents", type: "struct",
                    details: "ActiveTimestampPresent Field",
                    xref: { document: "core", section: "11.13.5.7" },
                    children: [
                        {
                            tag: "datatype", name: "ActiveTimestampPresent", id: 0x0, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "PendingTimestampPresent", id: 0x1, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "MasterKeyPresent", id: 0x2, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "NetworkNamePresent", id: 0x3, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "ExtendedPanIdPresent", id: 0x4, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "MeshLocalPrefixPresent", id: 0x5, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "DelayPresent", id: 0x6, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "PanIdPresent", id: 0x7, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "ChannelPresent", id: 0x8, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "PskcPresent", id: 0x9, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "SecurityPolicyPresent", id: 0xa, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        },

                        {
                            tag: "datatype", name: "ChannelMaskPresent", id: 0xb, type: "bool", conformance: "M",
                            xref: { document: "core", section: "11.13.5.7" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "WiFiNetworkDiagnostics", id: 0x36, classification: "node",
            xref: { document: "core", section: "11.14" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "PKTCNT", id: 0x0,
                            description: "Node makes available the counts for the number of received and transmitted packets on the Wi-Fi interface.",
                            xref: { document: "core", section: "11.14.4" }
                        },

                        {
                            tag: "datatype", name: "ERRCNT", id: 0x1,
                            description: "Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the Wi-Fi interface.",
                            xref: { document: "core", section: "11.14.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Bssid", id: 0x0, type: "octstr", access: "R V", conformance: "M",
                    constraint: "6", default: undefined, quality: "X",
                    details: "The BSSID attribute SHALL indicate the BSSID for which the Wi-Fi network the Node is currently " +
                             "connected",
                    xref: { document: "core", section: "11.14.6.1" }
                },

                {
                    tag: "attribute", name: "SecurityType", id: 0x1, type: "SecurityTypeEnum", access: "R V",
                    conformance: "M", default: undefined, quality: "X",
                    details: "The SecurityType attribute SHALL indicate the current type of Wi-Fi security used",
                    xref: { document: "core", section: "11.14.6.2" }
                },

                {
                    tag: "attribute", name: "WiFiVersion", id: 0x2, type: "WiFiVersionEnum", access: "R V",
                    conformance: "M", default: undefined, quality: "X",
                    details: "The WiFiVersion attribute SHALL indicate the current 802.11 standard version in use by the Node, per" +
                             " the table below",
                    xref: { document: "core", section: "11.14.6.3" }
                },

                {
                    tag: "attribute", name: "ChannelNumber", id: 0x3, type: "uint16", access: "R V", conformance: "M",
                    default: undefined, quality: "X",
                    details: "The ChannelNumber attribute SHALL indicate the channel that Wi-Fi communication is currently " +
                             "operating on",
                    xref: { document: "core", section: "11.14.6.4" }
                },

                {
                    tag: "attribute", name: "Rssi", id: 0x4, type: "int8", access: "R V", conformance: "M",
                    constraint: "-120 to 0", default: undefined, quality: "X C",
                    details: "The RSSI attribute SHALL indicate the current RSSI of the Node’s Wi-Fi radio in dBm",
                    xref: { document: "core", section: "11.14.6.5" }
                },

                {
                    tag: "attribute", name: "BeaconLostCount", id: 0x5, type: "uint32", access: "R V",
                    conformance: "ERRCNT", default: 0, quality: "X C",
                    details: "The BeaconLostCount attribute SHALL indicate the count of the number of missed beacons the Node has " +
                             "detected. If the Node does not have an ability to count beacons expected and not received, this " +
                             "value MAY remain set to zero",
                    xref: { document: "core", section: "11.14.6.6" }
                },

                {
                    tag: "attribute", name: "BeaconRxCount", id: 0x6, type: "uint32", access: "R V",
                    conformance: "P, KTCNT", default: 0, quality: "X C",
                    details: "The BeaconRxCount attribute SHALL indicate the count of the number of received beacons. The total " +
                             "number of expected beacons that could have been received during the interval since association " +
                             "SHOULD match the sum of BeaconRxCount and BeaconLostCount. If the Node does not have an ability to " +
                             "report count of beacons received, this value MAY remain set to zero",
                    xref: { document: "core", section: "11.14.6.7" }
                },

                {
                    tag: "attribute", name: "PacketMulticastRxCount", id: 0x7, type: "uint32", access: "R V",
                    conformance: "P, KTCNT", default: 0, quality: "X C",
                    details: "The PacketMulticastRxCount attribute SHALL indicate the number of multicast packets received by",
                    xref: { document: "core", section: "11.14.6.8" }
                },

                {
                    tag: "attribute", name: "PacketMulticastTxCount", id: 0x8, type: "uint32", access: "R V",
                    conformance: "P, KTCNT", default: 0, quality: "X C",
                    details: "The PacketMulticastTxCount attribute SHALL indicate the number of multicast packets transmitted by " +
                             "the Node",
                    xref: { document: "core", section: "11.14.6.9" }
                },

                {
                    tag: "attribute", name: "PacketUnicastRxCount", id: 0x9, type: "uint32", access: "R V",
                    conformance: "P, KTCNT", default: 0, quality: "X C",
                    details: "The PacketUnicastRxCount attribute SHALL indicate the number of unicast packets received by the Node",
                    xref: { document: "core", section: "11.14.6.10" }
                },

                {
                    tag: "attribute", name: "PacketUnicastTxCount", id: 0xa, type: "uint32", access: "R V",
                    conformance: "P, KTCNT", default: 0, quality: "X C",
                    details: "The PacketUnicastTxCount attribute SHALL indicate the number of unicast packets transmitted by the " +
                             "Node",
                    xref: { document: "core", section: "11.14.6.11" }
                },

                {
                    tag: "attribute", name: "CurrentMaxRate", id: 0xb, type: "uint64", access: "R V", conformance: "O",
                    default: 0, quality: "X C",
                    details: "The CurrentMaxRate attribute SHALL indicate the current maximum PHY rate of transfer of data in bits" +
                             "-per-second",
                    xref: { document: "core", section: "11.14.6.12" }
                },

                {
                    tag: "attribute", name: "OverrunCount", id: 0xc, type: "uint64", access: "R V",
                    conformance: "ERRCNT", default: 0, quality: "X C",
                    details: "The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or egress" +
                             ", due to lack of buffer memory to retain all packets on the network interface. The OverrunCount " +
                             "attribute SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.14.6.13" }
                },

                {
                    tag: "event", name: "Disconnection", id: 0x0, access: "V", conformance: "O", priority: "info",
                    details: "The Disconnection Event SHALL indicate that a Node’s Wi-Fi connection has been disconnected as a " +
                             "result of de-authenticated or dis-association and indicates the reason",
                    xref: { document: "core", section: "11.14.8.1" },
                    children: [
                        {
                            tag: "datatype", name: "ReasonCode", id: 0x0, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.14.8.1" }
                        }
                    ]
                },

                {
                    tag: "event", name: "AssociationFailure", id: 0x1, access: "V", conformance: "O", priority: "info",
                    details: "The AssociationFailure event SHALL indicate that a Node has attempted to connect, or reconnect, to a" +
                             " Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all " +
                             "internal retries of its supplicant",
                    xref: { document: "core", section: "11.14.8.2" },
                    children: [
                        {
                            tag: "datatype", name: "AssociationFailureCause", id: 0x0, type: "AssociationFailureCauseEnum",
                            conformance: "M",
                            xref: { document: "core", section: "11.14.8.2" }
                        },

                        {
                            tag: "datatype", name: "Status", id: 0x1, type: "uint16", conformance: "M",
                            xref: { document: "core", section: "11.14.8.2" }
                        }
                    ]
                },

                {
                    tag: "event", name: "ConnectionStatus", id: 0x2, access: "V", conformance: "O", priority: "info",
                    details: "The ConnectionStatus Event SHALL indicate that a Node’s connection status to a Wi-Fi network has " +
                             "changed. Connected, in this context, SHALL mean that a Node acting as a Wi-Fi station is " +
                             "successfully associated to a Wi-Fi Access Point",
                    xref: { document: "core", section: "11.14.8.3" },
                    children: [
                        {
                            tag: "datatype", name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M",
                            xref: { document: "core", section: "11.14.8.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "ResetCounts", id: 0x0, access: "O", conformance: "ERRCNT",
                    direction: "request", response: "status",
                    details: "Reception of this command SHALL reset the following attributes to 0",
                    xref: { document: "core", section: "11.14.7.1" }
                },

                {
                    tag: "datatype", name: "SecurityTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.14.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", name: "None", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", name: "Wep", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", name: "Wpa", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", name: "Wpa2", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        },

                        {
                            tag: "datatype", name: "Wpa3", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.14.5.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "WiFiVersionEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.14.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "A", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.14.5.2" }
                        },

                        {
                            tag: "datatype", name: "B", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.14.5.2" }
                        },

                        {
                            tag: "datatype", name: "G", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.14.5.2" }
                        },

                        {
                            tag: "datatype", name: "N", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.14.5.2" }
                        },

                        {
                            tag: "datatype", name: "Ac", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.14.5.2" }
                        },

                        {
                            tag: "datatype", name: "Ax", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.14.5.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "AssociationFailureCauseEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.14.5.3" },
                    children: [
                        {
                            tag: "datatype", name: "Unknown", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.14.5.3" }
                        },

                        {
                            tag: "datatype", name: "AssociationFailed", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.14.5.3" }
                        },

                        {
                            tag: "datatype", name: "AuthenticationFailed", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.14.5.3" }
                        },

                        {
                            tag: "datatype", name: "SsidNotFound", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.14.5.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "ConnectionStatusEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.14.5.4" },
                    children: [
                        {
                            tag: "datatype", name: "Connected", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.14.5.4" }
                        },

                        {
                            tag: "datatype", name: "NotConnected", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.14.5.4" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "EthernetNetworkDiagnostics", id: 0x37, classification: "node",
            xref: { document: "core", section: "11.15" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "PKTCNT", id: 0x0,
                            description: "Node makes available the counts for the number of received and transmitted packets on the ethernet interface.",
                            xref: { document: "core", section: "11.15.4" }
                        },

                        {
                            tag: "datatype", name: "ERRCNT", id: 0x1,
                            description: "Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the ethernet interface.",
                            xref: { document: "core", section: "11.15.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "PhyRate", id: 0x0, type: "PHYRateEnum", access: "R V", conformance: "O",
                    default: undefined, quality: "X",
                    details: "The PHYRate attribute SHALL indicate the current nominal, usable speed at the top of the physical " +
                             "layer of the Node. A value of null SHALL indicate that the interface is not currently configured or " +
                             "operational",
                    xref: { document: "core", section: "11.15.6.1" }
                },

                {
                    tag: "attribute", name: "FullDuplex", id: 0x1, type: "bool", access: "R V", conformance: "O",
                    default: undefined, quality: "X",
                    details: "The FullDuplex attribute SHALL indicate if the Node is currently utilizing the full-duplex operating" +
                             " mode. A value of null SHALL indicate that the interface is not currently configured or operational",
                    xref: { document: "core", section: "11.15.6.2" }
                },

                {
                    tag: "attribute", name: "PacketRxCount", id: 0x2, type: "uint64", access: "R V",
                    conformance: "P, KTCNT", default: 0,
                    details: "The PacketRxCount attribute SHALL indicate the number of packets that have been received on the " +
                             "ethernet network interface. The PacketRxCount attribute SHALL be reset to 0 upon a reboot of the " +
                             "Node",
                    xref: { document: "core", section: "11.15.6.3" }
                },

                {
                    tag: "attribute", name: "PacketTxCount", id: 0x3, type: "uint64", access: "R V",
                    conformance: "P, KTCNT", default: 0, quality: "C",
                    details: "The PacketTxCount attribute SHALL indicate the number of packets that have been successfully " +
                             "transferred on the ethernet network interface. The PacketTxCount attribute SHALL be reset to 0 upon " +
                             "a reboot of the Node",
                    xref: { document: "core", section: "11.15.6.4" }
                },

                {
                    tag: "attribute", name: "TxErrCount", id: 0x4, type: "uint64", access: "R V", conformance: "ERRCNT",
                    default: 0, quality: "C",
                    details: "The TxErrCount attribute SHALL indicate the number of failed packet transmissions that have occurred" +
                             " on the ethernet network interface. The TxErrCount attribute SHALL be reset to 0 upon a reboot of " +
                             "the Node",
                    xref: { document: "core", section: "11.15.6.5" }
                },

                {
                    tag: "attribute", name: "CollisionCount", id: 0x5, type: "uint64", access: "R V",
                    conformance: "ERRCNT", default: 0, quality: "C",
                    details: "The CollisionCount attribute SHALL indicate the number of collisions that have occurred while " +
                             "attempting to transmit a packet on the ethernet network interface. The CollisionCount attribute " +
                             "SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.15.6.6" }
                },

                {
                    tag: "attribute", name: "OverrunCount", id: 0x6, type: "uint64", access: "R V",
                    conformance: "ERRCNT", default: 0, quality: "C",
                    details: "The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or egress" +
                             ", due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                             "OverrunCount attribute SHALL be reset to 0 upon a reboot of the Node",
                    xref: { document: "core", section: "11.15.6.7" }
                },

                {
                    tag: "attribute", name: "CarrierDetect", id: 0x7, type: "bool", access: "R V", conformance: "O",
                    default: undefined, quality: "X C",
                    details: "The CarrierDetect attribute SHALL indicate the value of the Carrier Detect control signal present on" +
                             " the ethernet network interface. A value of null SHALL indicate that the interface is not currently " +
                             "configured or operational",
                    xref: { document: "core", section: "11.15.6.8" }
                },

                {
                    tag: "attribute", name: "TimeSinceReset", id: 0x8, type: "uint64", access: "R V", conformance: "O",
                    default: 0, quality: "C",
                    xref: { document: "core", section: "11.15.6" }
                },

                {
                    tag: "command", name: "ResetCounts", id: 0x0, access: "M", conformance: "P, KTCNT | ERRCNT",
                    direction: "request", response: "status",
                    details: "Reception of this command SHALL reset the following attributes to 0",
                    xref: { document: "core", section: "11.15.7.1" }
                },

                {
                    tag: "datatype", name: "PHYRateEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.15.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "Rate10M", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate100M", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate1G", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate25G", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate5G", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate10G", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate40G", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate100G", id: 0x7, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate200G", id: 0x8, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        },

                        {
                            tag: "datatype", name: "Rate400G", id: 0x9, conformance: "M",
                            xref: { document: "core", section: "11.15.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "TimeSync", id: 0x38, classification: "node",
            xref: { document: "core", section: "11.16" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "TZ", id: 0x0, description: "Server supports time zone.",
                            xref: { document: "core", section: "11.16.5" }
                        },

                        {
                            tag: "datatype", name: "NTPC", id: 0x1, description: "Server supports an NTP or SNTP client.",
                            xref: { document: "core", section: "11.16.5" }
                        },

                        {
                            tag: "datatype", name: "NTPS", id: 0x2, description: "Server supports an NTP server role.",
                            xref: { document: "core", section: "11.16.5" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "UtcTime", id: 0x0, type: "epoch-us", access: "R V", conformance: "M",
                    default: undefined, quality: "X C",
                    details: "If the server has achieved time synchronization, this SHALL indicate the current time as a UTC epoch" +
                             "-us (Epoch Time in Microseconds",
                    xref: { document: "core", section: "11.16.8.1" }
                },

                {
                    tag: "attribute", name: "Granularity", id: 0x1, type: "GranularityEnum", access: "R V",
                    conformance: "M", constraint: "desc", default: 0,
                    details: "The granularity of the error that the server is willing to guarantee on the time synchronization. It" +
                             " is of type GranularityEnum",
                    xref: { document: "core", section: "11.16.8.2" }
                },

                {
                    tag: "attribute", name: "TimeSource", id: 0x2, type: "TimeSourceEnum", access: "R V",
                    conformance: "O", constraint: "desc", default: 0,
                    details: "The server’s time source. This attribute indicates what method the server is using to sync, whether " +
                             "the source uses NTS or not and whether the source is internal or external to the Fabric. This " +
                             "attribute MAY be used by a client to determine its level of trust in the UTCTime. It is of type " +
                             "TimeSourceEnum",
                    xref: { document: "core", section: "11.16.8.3" }
                },

                {
                    tag: "attribute", name: "TrustedTimeNodeId", id: 0x3, type: "node-id", access: "RW VA",
                    conformance: "M", default: undefined, quality: "X",
                    details: "The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external " +
                             "time sync sources and MAY be used as the primary time source if other time sources are unavailable. " +
                             "See Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an " +
                             "Administrator. It SHOULD be set by the Commissioner during commissioning. If no appropriate " +
                             "TrustedTimeNodeId is available, the commissioner MAY set this value to null",
                    xref: { document: "core", section: "11.16.8.5" }
                },

                {
                    tag: "attribute", name: "DefaultNtp", id: 0x4, type: "string", access: "RW VA", conformance: "NTPC",
                    constraint: "max 128", default: undefined, quality: "X",
                    details: "The default NTP server the server’s Node may use if other time sources are unavailable. This " +
                             "attribute may contain a domain name or a static IPv6 address in text format as specified in RFC 5952" +
                             " [https://tools.ietf.org/html/rfc5952]. See Section 11.16.13, “Time source prioritization”. This " +
                             "attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during " +
                             "commissioning. If no default NTP is available, the Commissioner MAY set this value to null",
                    xref: { document: "core", section: "11.16.8.4" }
                },

                {
                    tag: "attribute", name: "TimeZone", id: 0x5, type: "list", access: "RW VM", conformance: "TZ",
                    constraint: "1 to 2", default: "{0,0}",
                    details: "A list of time zone offsets from UTC and when they SHALL take effect. This attribute uses a list of " +
                             "time offset configurations to allow Nodes to handle scheduled regulatory time zone changes. This " +
                             "attribute SHALL NOT be used to indicate daylight savings time changes (see Section 11.16.8.7, “" +
                             "DSTOffset Attribute” for daylight savings time",
                    xref: { document: "core", section: "11.16.8.6" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "TimeZoneStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "DstOffset", id: 0x6, type: "list", access: "RW VM", conformance: "TZ",
                    constraint: "max 20", default: [],
                    details: "A list of offsets to apply for daylight savings time, and their validity period. List entries SHALL " +
                             "be sorted by ValidStarting time",
                    xref: { document: "core", section: "11.16.8.7" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "DSTOffsetStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "LocalTime", id: 0x7, type: "epoch-us", access: "R V", conformance: "TZ",
                    default: 0, quality: "X C",
                    details: "The computed current local time of the server as a epoch-us (Epoch Time in Microseconds). The local " +
                             "time offset of the value is the sum of the currently used TimeZoneEntry’s offset and the currently " +
                             "used DST offset, if any",
                    xref: { document: "core", section: "11.16.8.8" }
                },

                {
                    tag: "attribute", name: "TimeZoneDatabase", id: 0x8, type: "bool", access: "R V", conformance: "TZ",
                    default: true, quality: "F",
                    details: "Indicates whether the server has access to a time zone database. Nodes with a time zone database MAY" +
                             " update their own DSTOffset attribute to add new entries and MAY push DSTOffset updates to other " +
                             "Nodes in the same time zone as required",
                    xref: { document: "core", section: "11.16.8.9" }
                },

                {
                    tag: "attribute", name: "NtpServerPort", id: 0x9, type: "uint16", access: "R V",
                    conformance: "NTPS", default: undefined, quality: "X",
                    details: "If the server is running an NTP server, this value SHALL be the port number for the service. If the " +
                             "server is not currently running an NTP server, this value SHALL be null",
                    xref: { document: "core", section: "11.16.8.10" }
                },

                {
                    tag: "event", name: "DstTableEmpty", id: 0x0, access: "V", conformance: "TZ", priority: "info",
                    details: "This event SHALL be generated when the server stops applying the current DSTOffset and there are no " +
                             "entries in the list with a larger ValidStarting time, indicating the need to possibly get new DST " +
                             "data",
                    xref: { document: "core", section: "11.16.10.1" }
                },

                {
                    tag: "event", name: "DstStatus", id: 0x1, access: "V", conformance: "TZ", priority: "info",
                    details: "This event SHALL be generated when the server starts or stops applying a DST offset",
                    xref: { document: "core", section: "11.16.10.2" }
                },

                {
                    tag: "event", name: "TimeZoneStatus", id: 0x2, access: "V", conformance: "TZ", priority: "info",
                    details: "This event SHALL be generated when the server changes its time zone offset or name. It SHALL NOT be " +
                             "sent for DST changes that are not accompanied by a time zone change",
                    xref: { document: "core", section: "11.16.10.3" },
                    children: [
                        {
                            tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M",
                            xref: { document: "core", section: "11.16.10.3" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "O",
                            xref: { document: "core", section: "11.16.10.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "SetUtcTime", id: 0x0, access: "A", conformance: "M", direction: "request",
                    response: "status",
                    details: "The data for this command are as follows",
                    xref: { document: "core", section: "11.16.9.1" },
                    children: [
                        {
                            tag: "datatype", name: "UtcTime", id: 0x0, type: "epoch-us", conformance: "M", default: 0,
                            xref: { document: "core", section: "11.16.9.1" }
                        },

                        {
                            tag: "datatype", name: "Granularity", id: 0x1, type: "GranularityEnum", conformance: "M",
                            default: 0,
                            xref: { document: "core", section: "11.16.9.1" }
                        },

                        {
                            tag: "datatype", name: "TimeSource", id: 0x2, type: "TimeSourceEnum", conformance: "O", default: 0,
                            xref: { document: "core", section: "11.16.9.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "GranularityEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.16.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "NoTimeGranularity", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        },

                        {
                            tag: "datatype", name: "MinutesGranularity", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        },

                        {
                            tag: "datatype", name: "SecondsGranularity", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        },

                        {
                            tag: "datatype", name: "MillisecondsGranularity", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        },

                        {
                            tag: "datatype", name: "MicrosecondsGranularity", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.16.6.1" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TimeSourceEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.16.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "None", id: 0x0, conformance: "M",
                            description: "Server is not currently synchronized with a UTC Time source.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "Unknown", id: 0x1, conformance: "M",
                            description: "Server uses an unlisted time source.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "Admin", id: 0x2, conformance: "M",
                            description: "Server received time from the Section 11.16.9.1, “SetUtcTime Command”.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "NodeTimeCluster", id: 0x3, conformance: "M",
                            description: "Synchronized time by querying the Time Cluster of another Node.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "NonFabricSntp", id: 0x4, conformance: "M",
                            description: "SNTP from a server not in the Fabric. NTS is not used.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "NonFabricNtp", id: 0x5, conformance: "M",
                            description: "NTP from servers not in the Fabric. None of the servers used NTS.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "FabricSntp", id: 0x6, conformance: "M",
                            description: "SNTP from a server within the Fabric. NTS is not used.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "FabricNtp", id: 0x7, conformance: "M",
                            description: "NTP from a servers within the Fabric. None of the servers used NTS.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "MixedNtp", id: 0x8, conformance: "M",
                            description: "NTP from multiple servers on Fabric and external. None of the servers used NTS.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "NonFabricSntpNts", id: 0x9, conformance: "M",
                            description: "SNTP from a server not in the Fabric. NTS is used.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "NonFabricNtpNts", id: 0xa, conformance: "M",
                            description: "NTP from servers not in the Fabric. NTS is used on at least one server.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "FabricSntpNts", id: 0xb, conformance: "M",
                            description: "SNTP from a server within the Fabric. NTS is used.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "FabricNtpNts", id: 0xc, conformance: "M",
                            description: "NTP from a server within the Fabric. NTS is used on at least one server.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "MixedNtpNts", id: 0xd, conformance: "M",
                            description: "NTP from multiple servers on the Fabric and external. NTS is used on at least one server.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "CloudSource", id: 0xe, conformance: "M",
                            description: "Time synchronization comes from a vendor cloud-based source (e.g. \"Date\" header in authenticated HTTPS connection).",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "Ptp", id: 0xf, conformance: "M",
                            description: "Time synchronization comes from PTP.",
                            xref: { document: "core", section: "11.16.6.2" }
                        },

                        {
                            tag: "datatype", name: "Gnss", id: 0x10, conformance: "M",
                            description: "Time synchronization comes from a GNSS source.",
                            xref: { document: "core", section: "11.16.6.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "TimeZoneStruct", type: "struct",
                    details: "Offset Field",
                    xref: { document: "core", section: "11.16.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M",
                            xref: { document: "core", section: "11.16.6.3" }
                        },

                        {
                            tag: "datatype", name: "ValidAt", id: 0x1, type: "epoch-us", conformance: "M",
                            xref: { document: "core", section: "11.16.6.3" }
                        },

                        {
                            tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "O", constraint: "0 to 64",
                            xref: { document: "core", section: "11.16.6.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "DSTOffsetStruct", type: "struct",
                    details: "Offset Field",
                    xref: { document: "core", section: "11.16.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M", constraint: "desc",
                            xref: { document: "core", section: "11.16.6.4" }
                        },

                        {
                            tag: "datatype", name: "ValidStarting", id: 0x1, type: "epoch-us", conformance: "M",
                            xref: { document: "core", section: "11.16.6.4" }
                        },

                        {
                            tag: "datatype", name: "ValidUntil", id: 0x2, type: "epoch-us", conformance: "M",
                            xref: { document: "core", section: "11.16.6.4" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "OperationalCredentials", id: 0x3e, classification: "node",
            xref: { document: "core", section: "11.17" },
            children: [
                {
                    tag: "attribute", name: "NoCs", id: 0x0, type: "list", access: "R F A", conformance: "M",
                    constraint: "max SupportedFabrics", quality: "N C",
                    details: "This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct",
                    xref: { document: "core", section: "11.17.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "NOCStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Fabrics", id: 0x1, type: "list", access: "R F V", conformance: "M",
                    constraint: "max SupportedFabrics", quality: "N",
                    details: "This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list" +
                             " of FabricDescriptorStruct. This information MAY be computed directly from the NOCs attribute",
                    xref: { document: "core", section: "11.17.5.2" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "FabricDescriptorStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "SupportedFabrics", id: 0x2, type: "uint8", access: "R V", conformance: "M",
                    constraint: "5 to 254", quality: "F",
                    details: "This attribute contains the number of Fabrics that are supported by the device. This value is fixed " +
                             "for a particular device",
                    xref: { document: "core", section: "11.17.5.3" }
                },

                {
                    tag: "attribute", name: "CommissionedFabrics", id: 0x3, type: "uint8", access: "R V",
                    conformance: "M", constraint: "max SupportedFabrics", quality: "N",
                    details: "This attribute contains the number of Fabrics to which the device is currently commissioned. This " +
                             "attribute SHALL be equal to the following",
                    xref: { document: "core", section: "11.17.5.4" }
                },

                {
                    tag: "attribute", name: "TrustedRootCertificates", id: 0x4, type: "list", access: "R V",
                    conformance: "M", constraint: "max SupportedFabrics[max 400]", quality: "N C",
                    details: "This attribute SHALL contain a read-only list of Trusted Root CA Certificates installed on the Node" +
                             ", as octet strings containing their Matter Certificate Encoding representation",
                    xref: { document: "core", section: "11.17.5.5" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "octstr"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "CurrentFabricIndex", id: 0x5, type: "uint8", access: "R V",
                    conformance: "M", default: 0,
                    details: "This attribute SHALL contain accessing fabric index",
                    xref: { document: "core", section: "11.17.5.6" }
                },

                {
                    tag: "command", name: "AttestationRequest", id: 0x0, access: "A", conformance: "M",
                    direction: "request", response: "AttestationResponse",
                    details: "This command SHALL be generated to request the Attestation Information, in the form of an " +
                             "AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a",
                    xref: { document: "core", section: "11.17.6.1" },
                    children: [
                        {
                            tag: "datatype", name: "AttestationNonce", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "32",
                            xref: { document: "core", section: "11.17.6.1" }
                        }
                    ]
                },

                {
                    tag: "command", name: "AttestationResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to an Attestation Request command",
                    xref: { document: "core", section: "11.17.6.2" },
                    children: [
                        {
                            tag: "datatype", name: "AttestationElements", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "max RespMax",
                            xref: { document: "core", section: "11.17.6.2" }
                        },

                        {
                            tag: "datatype", name: "AttestationSignature", id: 0x1, type: "octstr", conformance: "M",
                            constraint: "64",
                            xref: { document: "core", section: "11.17.6.2" }
                        }
                    ]
                },

                {
                    tag: "command", name: "CertificateChainRequest", id: 0x2, access: "A", conformance: "M",
                    direction: "request", response: "CertificateChainResponse",
                    details: "If the CertificateType is not a valid value per CertificateChainTypeEnum then the command SHALL fail" +
                             " with a Status Code of INVALID_COMMAND",
                    xref: { document: "core", section: "11.17.6.3" },
                    children: [
                        {
                            tag: "datatype", name: "CertificateType", id: 0x0, type: "CertificateChainTypeEnum",
                            conformance: "M", constraint: "desc",
                            xref: { document: "core", section: "11.17.6.3" }
                        }
                    ]
                },

                {
                    tag: "command", name: "CertificateChainResponse", id: 0x3, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to a CertificateChainRequest command",
                    xref: { document: "core", section: "11.17.6.4" },
                    children: [
                        {
                            tag: "datatype", name: "Certificate", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "max 600",
                            xref: { document: "core", section: "11.17.6.4" }
                        }
                    ]
                },

                {
                    tag: "command", name: "CsrRequest", id: 0x4, access: "A", conformance: "M", direction: "request",
                    response: "CsrResponse",
                    details: "This command SHALL be generated to execute the Node Operational CSR Procedure and subsequently " +
                             "return the NOCSR Information, in the form of a CSRResponse Command",
                    xref: { document: "core", section: "11.17.6.5" },
                    children: [
                        {
                            tag: "datatype", name: "CsrNonce", id: 0x0, type: "octstr", conformance: "M", constraint: "32",
                            xref: { document: "core", section: "11.17.6.5" }
                        },

                        {
                            tag: "datatype", name: "IsForUpdateNoc", id: 0x1, type: "bool", conformance: "O", default: true,
                            xref: { document: "core", section: "11.17.6.5" }
                        }
                    ]
                },

                {
                    tag: "command", name: "CsrResponse", id: 0x5, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to a CSRRequest Command",
                    xref: { document: "core", section: "11.17.6.6" },
                    children: [
                        {
                            tag: "datatype", name: "NocsrElements", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "max RespMax",
                            xref: { document: "core", section: "11.17.6.6" }
                        },

                        {
                            tag: "datatype", name: "AttestationSignature", id: 0x1, type: "octstr", conformance: "M",
                            constraint: "64",
                            xref: { document: "core", section: "11.17.6.6" }
                        }
                    ]
                },

                {
                    tag: "command", name: "AddNoc", id: 0x6, access: "A", conformance: "M", direction: "request",
                    response: "NocResponse",
                    details: "This command SHALL add a new NOC chain to the device and commission a new Fabric association upon " +
                             "successful validation of all arguments and preconditions",
                    xref: { document: "core", section: "11.17.6.8" },
                    children: [
                        {
                            tag: "datatype", name: "NocValue", id: 0x0, type: "octstr", conformance: "M", constraint: "max 400",
                            xref: { document: "core", section: "11.17.6.8" }
                        },

                        {
                            tag: "datatype", name: "IcacValue", id: 0x1, type: "octstr", conformance: "O",
                            constraint: "max 400",
                            xref: { document: "core", section: "11.17.6.8" }
                        },

                        {
                            tag: "datatype", name: "IpkValue", id: 0x2, type: "octstr", conformance: "M", constraint: "16",
                            xref: { document: "core", section: "11.17.6.8" }
                        },

                        {
                            tag: "datatype", name: "CaseAdminSubject", id: 0x3, type: "SubjectID", conformance: "M",
                            xref: { document: "core", section: "11.17.6.8" }
                        },

                        {
                            tag: "datatype", name: "AdminVendorId", id: 0x4, type: "vendor-id", conformance: "M",
                            xref: { document: "core", section: "11.17.6.8" }
                        }
                    ]
                },

                {
                    tag: "command", name: "UpdateNoc", id: 0x7, access: "F A", conformance: "M", direction: "request",
                    response: "NocResponse",
                    details: "This command SHALL replace the NOC and optional associated ICAC (if present) scoped under the " +
                             "accessing fabric upon successful validation of all arguments and preconditions. The new value SHALL " +
                             "immediately be reflected in the NOCs list attribute",
                    xref: { document: "core", section: "11.17.6.9" },
                    children: [
                        {
                            tag: "datatype", name: "NocValue", id: 0x0, type: "octstr", access: "F", conformance: "M",
                            constraint: "max 400",
                            xref: { document: "core", section: "11.17.6.9" }
                        },

                        {
                            tag: "datatype", name: "IcacValue", id: 0x1, type: "octstr", access: "F", conformance: "O",
                            constraint: "max 400",
                            xref: { document: "core", section: "11.17.6.9" }
                        }
                    ]
                },

                {
                    tag: "command", name: "NocResponse", id: 0x8, conformance: "M", direction: "response",
                    details: "This command SHALL be generated in response to the following commands",
                    xref: { document: "core", section: "11.17.6.10" },
                    children: [
                        {
                            tag: "datatype", name: "StatusCode", id: 0x0, type: "NodeOperationalCertStatusEnum",
                            conformance: "M",
                            xref: { document: "core", section: "11.17.6.10" }
                        },

                        {
                            tag: "datatype", name: "FabricIndex", id: 0x1, type: "fabric-idx", conformance: "O",
                            constraint: "1 to 254",
                            xref: { document: "core", section: "11.17.6.10" }
                        },

                        {
                            tag: "datatype", name: "DebugText", id: 0x2, type: "string", conformance: "O",
                            constraint: "max 128",
                            xref: { document: "core", section: "11.17.6.10" }
                        }
                    ]
                },

                {
                    tag: "command", name: "UpdateFabricLabel", id: 0x9, access: "F A", conformance: "M",
                    direction: "request", response: "NocResponse",
                    details: "This command SHALL be used by an Administrator to set the user-visible Label field for a given " +
                             "Fabric, as reflected by entries in the Fabrics attribute",
                    xref: { document: "core", section: "11.17.6.11" },
                    children: [
                        {
                            tag: "datatype", name: "Label", id: 0x0, type: "string", access: "F", conformance: "M",
                            constraint: "max 32",
                            xref: { document: "core", section: "11.17.6.11" }
                        }
                    ]
                },

                {
                    tag: "command", name: "RemoveFabric", id: 0xa, access: "A", conformance: "M", direction: "request",
                    response: "NocResponse",
                    details: "This command is used by Administrators to remove a given Fabric and delete all associated fabric-" +
                             "scoped data",
                    xref: { document: "core", section: "11.17.6.12" }
                },

                {
                    tag: "command", name: "AddTrustedRootCertificate", id: 0xb, access: "A", conformance: "M",
                    direction: "request", response: "status",
                    details: "This command SHALL add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding " +
                             "representation, to the TrustedRootCertificates Attribute list and SHALL ensure the next AddNOC " +
                             "command executed uses the provided certificate as its root of trust",
                    xref: { document: "core", section: "11.17.6.13" },
                    children: [
                        {
                            tag: "datatype", name: "RootCaCertificate", id: 0x0, type: "octstr", conformance: "M",
                            constraint: "max 400",
                            xref: { document: "core", section: "11.17.6.13" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "CertificateChainTypeEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.17.4.2" },
                    children: [
                        {
                            tag: "datatype", name: "DacCertificate", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.17.4.2" }
                        },

                        {
                            tag: "datatype", name: "PaiCertificate", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.17.4.2" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NodeOperationalCertStatusEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.17.4.3" },
                    children: [
                        {
                            tag: "datatype", name: "Ok", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "InvalidPublicKey", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "InvalidNodeOpId", id: 0x2, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "InvalidNoc", id: 0x3, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "MissingCsr", id: 0x4, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "TableFull", id: 0x5, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "InvalidAdminSubject", id: 0x6, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "FabricConflict", id: 0x9, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "LabelConflict", id: 0xa, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        },

                        {
                            tag: "datatype", name: "InvalidFabricIndex", id: 0xb, conformance: "M",
                            xref: { document: "core", section: "11.17.4.3" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "NOCStruct", type: "struct",
                    details: "This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a " +
                             "given Node",
                    xref: { document: "core", section: "11.17.4.4" },
                    children: [
                        {
                            tag: "datatype", name: "Noc", id: 0x1, type: "octstr", access: "S", conformance: "M",
                            constraint: "max 400",
                            xref: { document: "core", section: "11.17.4.4" }
                        },

                        {
                            tag: "datatype", name: "Icac", id: 0x2, type: "octstr", access: "S", conformance: "M",
                            constraint: "max 400", quality: "X",
                            xref: { document: "core", section: "11.17.4.4" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "FabricDescriptorStruct", type: "struct",
                    details: "This structure encodes a Fabric Reference for a fabric within which a given Node is currently " +
                             "commissioned",
                    xref: { document: "core", section: "11.17.4.5" },
                    children: [
                        {
                            tag: "datatype", name: "RootPublicKey", id: 0x1, type: "octstr", access: "F", conformance: "M",
                            constraint: "65",
                            xref: { document: "core", section: "11.17.4.5" }
                        },

                        {
                            tag: "datatype", name: "VendorId", id: 0x2, type: "vendor-id", access: "F", conformance: "M",
                            constraint: "desc",
                            xref: { document: "core", section: "11.17.4.5" }
                        },

                        {
                            tag: "datatype", name: "FabricId", id: 0x3, type: "fabric-id", access: "F", conformance: "M",
                            xref: { document: "core", section: "11.17.4.5" }
                        },

                        {
                            tag: "datatype", name: "NodeId", id: 0x4, type: "node-id", access: "F", conformance: "M",
                            xref: { document: "core", section: "11.17.4.5" }
                        },

                        {
                            tag: "datatype", name: "Label", id: 0x5, type: "string", access: "F", conformance: "M",
                            constraint: "max 32", default: "\"\"",
                            xref: { document: "core", section: "11.17.4.5" }
                        }
                    ]
                },

                {
                    tag: "datatype", name: "Attestation Elements",
                    details: "The Attestation Elements contain the metadata related to attestation, encoded in Matter TLV",
                    xref: { document: "core", section: "11.17.4.6" }
                },

                {
                    tag: "datatype", name: "Attestation Information",
                    details: "The Attestation Information is the combination of a Matter TLV payload, containing the Attestation " +
                             "Elements, as well as a signature over an attestation_tbs message containing the in-band-transmitted " +
                             "attestation_elements_message and a secret out-of-band Attestation Challenge",
                    xref: { document: "core", section: "11.17.4.7" }
                },

                {
                    tag: "datatype", name: "NOCSR Elements",
                    details: "The NOCSR Elements contain the metadata related to NOCSR, encoded in Matter TLV",
                    xref: { document: "core", section: "11.17.4.8" }
                },

                {
                    tag: "datatype", name: "NOCSR Information",
                    details: "The NOCSR Information is the combination of a Matter TLV payload, containing the NOCSR Elements, as " +
                             "well as a signature over an nocsr_tbs message containing the in-band-transmitted " +
                             "nocsr_elements_message and a secret out-of-band Attestation Challenge, using the Attestation Private" +
                             " Key that is unique to the device producing the NOCSR Information",
                    xref: { document: "core", section: "11.17.4.9" }
                }
            ]
        },

        {
            tag: "cluster", name: "AdministratorCommissioning", id: 0x3c, classification: "node",
            xref: { document: "core", section: "11.18" },
            children: [
                {
                    tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    children: [
                        {
                            tag: "datatype", name: "BC", id: 0x0, description: "Node supports Basic Commissioning Method.",
                            xref: { document: "core", section: "11.18.4" }
                        }
                    ]
                },

                {
                    tag: "attribute", name: "Window", id: 0x0, type: "Commis", access: "R V", conformance: "M",
                    xref: { document: "core", section: "11.18.7" }
                },

                {
                    tag: "attribute", name: "AdminFabricIndex", id: 0x1, type: "fabric-idx", access: "R V",
                    conformance: "M", quality: "X",
                    details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute SHALL indicate the " +
                             "FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This MAY" +
                             " be used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster",
                    xref: { document: "core", section: "11.18.7.2" }
                },

                {
                    tag: "attribute", name: "AdminVendorId", id: 0x2, type: "vendor-id", access: "R V",
                    conformance: "M", quality: "X",
                    details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute SHALL indicate the " +
                             "Vendor ID associated with the Fabric scoping of the Administrator that opened the window. This field" +
                             " SHALL match the VendorID field of the Fabrics attribute list entry associated with the " +
                             "Administrator having opened the window, at the time of window opening. If the fabric for the " +
                             "Administrator that opened the window is removed from the node while the commissioning window is " +
                             "still open, this attribute SHALL NOT be updated",
                    xref: { document: "core", section: "11.18.7.3" }
                },

                {
                    tag: "command", name: "OpenCommissioningWindow", id: 0x0, access: "A T", conformance: "M",
                    direction: "request", response: "status",
                    xref: { document: "core", section: "11.18.8" }
                },

                {
                    tag: "command", name: "OpenBasicCommissioningWindow", id: 0x1, access: "A T", conformance: "BC",
                    direction: "request", response: "status",
                    xref: { document: "core", section: "11.18.8" }
                },

                {
                    tag: "command", name: "RevokeCommissioning", id: 0x2, access: "A T", conformance: "M",
                    direction: "request", response: "status",
                    details: "This command is used by a current Administrator to instruct a Node to revoke any active Open " +
                             "Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and " +
                             "the Node SHALL (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop " +
                             "publishing the DNS-SD record associated with the Open Commissioning Window or Open Basic " +
                             "Commissioning Window command, see Section 4.3.1, “Commissionable Node Discovery",
                    xref: { document: "core", section: "11.18.8.3" }
                },

                {
                    tag: "datatype", name: "CommissioningWindowStatusEnum", type: "enum8",
                    details: "This data type is derived from enum8",
                    xref: { document: "core", section: "11.18.5.1" },
                    children: [
                        {
                            tag: "datatype", name: "WindowNotOpen", id: 0x0, conformance: "M",
                            xref: { document: "core", section: "11.18.5.1" }
                        },

                        {
                            tag: "datatype", name: "EnhancedWindowOpen", id: 0x1, conformance: "M",
                            xref: { document: "core", section: "11.18.5.1" }
                        },

                        {
                            tag: "datatype", name: "BasicWindowOpen", id: 0x2, conformance: "BC",
                            xref: { document: "core", section: "11.18.5.1" }
                        }
                    ]
                }
            ]
        },

        {
            tag: "cluster", name: "OtaSoftwareUpdateProvider", id: 0x29, classification: "node",
            xref: { document: "core", section: "11.19.6" },
            children: [
                {
                    tag: "command", name: "QueryImage", id: 0x0, conformance: "M", direction: "request",
                    response: "QueryImageResponse",
                    xref: { document: "core", section: "11.19.6.5" }
                },

                {
                    tag: "command", name: "QueryImageResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.19.6.5" }
                },

                {
                    tag: "command", name: "ApplyUpdateRequest", id: 0x2, conformance: "M", direction: "request",
                    response: "ApplyUpdateResponse",
                    xref: { document: "core", section: "11.19.6.5" }
                },

                {
                    tag: "command", name: "ApplyUpdateResponse", id: 0x3, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.19.6.5" }
                },

                {
                    tag: "command", name: "NotifyUpdateApplied", id: 0x4, conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.19.6.5" }
                }
            ]
        },

        {
            tag: "cluster", name: "OtaSoftwareUpdateRequestor", id: 0x2a, classification: "node",
            xref: { document: "core", section: "11.19.7" },
            children: [
                {
                    tag: "attribute", name: "DefaultOtaProviders", id: 0x0, type: "list", access: "RW F VA",
                    conformance: "M", constraint: "desc", default: [],
                    xref: { document: "core", section: "11.19.7.5" },
                    children: [
                        {
                            tag: "datatype", name: "entry", type: "ProviderLocationStruct"
                        }
                    ]
                },

                {
                    tag: "attribute", name: "UpdatePossible", id: 0x1, type: "bool", access: "R V", conformance: "M",
                    default: true,
                    xref: { document: "core", section: "11.19.7.5" }
                },

                {
                    tag: "attribute", name: "UpdateState", id: 0x2, type: "UpdateStateEnum", access: "R V",
                    conformance: "M", default: "Unknown",
                    xref: { document: "core", section: "11.19.7.5" }
                },

                {
                    tag: "attribute", name: "UpdateStateProgress", id: 0x3, type: "uint8", access: "R V",
                    conformance: "M", constraint: "0 to 100", default: undefined, quality: "X",
                    xref: { document: "core", section: "11.19.7.5" }
                },

                {
                    tag: "event", name: "StateTransition", id: 0x0, access: "V", conformance: "M", priority: "info",
                    xref: { document: "core", section: "11.19.7.7" }
                },

                {
                    tag: "event", name: "VersionApplied", id: 0x1, access: "V", conformance: "M", priority: "critical",
                    xref: { document: "core", section: "11.19.7.7" }
                },

                {
                    tag: "event", name: "DownloadError", id: 0x2, access: "V", conformance: "M", priority: "info",
                    xref: { document: "core", section: "11.19.7.7" }
                },

                {
                    tag: "command", name: "AnnounceOtaProvider", id: 0x0, access: "A", conformance: "O",
                    direction: "request", response: "status",
                    xref: { document: "core", section: "11.19.7.6" }
                }
            ]
        }
    ]
}