/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    MatterElement as Matter,
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype,
    EventElement as Event
} from "@project-chip/matter.js/model";

export const SpecMatter = Matter({
    name: "SpecMatter",

    children: [
        Cluster({
            name: "Identify", id: 0x3, classification: "endpoint",

            details: "This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to " +
                "an observer (e.g., an installer) which of several nodes and/or endpoints it is. It also supports a " +
                "multicast request that any endpoint that is identifying itself to respond to the initiator." +
                "\n" +
                "The state of this cluster may be shared on more than one endpoint on a node." +
                "\n" +
                "For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, " +
                "may both share the same cluster instance and therefore identification state (e.g. single LED on the " +
                "node).",

            xref: { document: "cluster", section: "1.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.2.4" },
                    children: [Field({
                        name: "QRY", constraint: "0", description: "Query",
                        details: "Multicast query for identification state"
                    })]
                }),

                Attribute({
                    name: "IdentifyTime", id: 0x0, type: "uint16", access: "RW VO", conformance: "M", default: 0,
                    xref: { document: "cluster", section: "1.2.6" }
                }),

                Attribute({
                    name: "IdentifyType", id: 0x1, type: "IdentifyTypeEnum", access: "R V", conformance: "M",
                    constraint: "desc",
                    details: "This attribute specifies how the identification state is presented to the user." +
                        "\n" +
                        "This field shall contain one of the values defined in IdentifyTypeEnum. The value None shall NOT be " +
                        "used if the device is capable of presenting its identification state using one of the other methods " +
                        "defined in IdentifyTypeEnum.",
                    xref: { document: "cluster", section: "1.2.6.2" }
                }),

                Command({
                    name: "Identify", id: 0x0, access: "M", conformance: "M", direction: "request", response: "status",
                    details: "This command starts or stops the receiving device identifying itself.",
                    xref: { document: "cluster", section: "1.2.7.1" },
                    children: [Field({ name: "IdentifyTime", id: 0x0, type: "uint16", conformance: "M" })]
                }),

                Command({
                    name: "IdentifyQuery", id: 0x1, access: "M", conformance: "QRY", direction: "request",
                    response: "IdentifyQueryResponse",
                    xref: { document: "cluster", section: "1.2.7" }
                }),

                Command({
                    name: "TriggerEffect", id: 0x40, access: "M", conformance: "O", direction: "request",
                    response: "status",

                    details: "This command allows the support of feedback to the user, such as a certain light effect. It is used " +
                        "to allow an implementation to provide visual feedback to the user under certain circumstances such " +
                        "as a color light turning green when it has successfully connected to a network. The use of this " +
                        "command and the effects themselves are entirely up to the implementer to use whenever a visual " +
                        "feedback is useful but it is not the same as and does not replace the identify mechanism used " +
                        "during commissioning.",

                    xref: { document: "cluster", section: "1.2.7.3" },

                    children: [
                        Field({
                            name: "EffectIdentifier", id: 0x0, type: "EffectIdentifierEnum", conformance: "M",
                            constraint: "desc",

                            details: "This field specifies the identify effect to use and shall contain one of the non-reserved values in " +
                                "EffectIdentifierEnum." +
                                "\n" +
                                "All values of the EffectIdentifierEnum shall be supported. Implementors may deviate from the " +
                                "example light effects in EffectIdentifierEnum, but they SHOULD indicate during testing how they " +
                                "handle each effect.",

                            xref: { document: "cluster", section: "1.2.7.3.1" }
                        }),

                        Field({
                            name: "EffectVariant", id: 0x1, type: "EffectVariantEnum", conformance: "M", constraint: "desc",
                            details: "This field is used to indicate which variant of the effect, indicated in the EffectIdentifier " +
                                "field, SHOULD be triggered. If a device does not support the given variant, it shall use the " +
                                "default variant. This field shall contain one of the values in EffectVariantEnum.",
                            xref: { document: "cluster", section: "1.2.7.3.2" }
                        })
                    ]
                }),

                Command({
                    name: "IdentifyQueryResponse", id: 0x0, conformance: "QRY", direction: "response",
                    xref: { document: "cluster", section: "1.2.7" }
                })
            ]
        }),

        Cluster({
            name: "Groups", id: 0x4, classification: "endpoint",

            details: "The Groups cluster manages, per endpoint, the content of the node-wide Group Table that is part of " +
                "the underlying interaction layer." +
                "\n" +
                "In a network supporting fabrics, group IDs referenced by attributes or other elements of this " +
                "cluster are scoped to the accessing fabric." +
                "\n" +
                "The Groups cluster is scoped to the endpoint. Groups cluster commands support discovering the " +
                "endpoint membership in a group, adding the endpoint to a group, removing the endpoint from a group, " +
                "removing endpoint membership from all groups. All commands defined in this cluster shall only " +
                "affect groups scoped to the accessing fabric." +
                "\n" +
                "When group names are supported, the server stores a name string, which is set by the client for " +
                "each assigned group and indicated in response to a client request." +
                "\n" +
                "Note that configuration of group addresses for outgoing commands is achieved using the Message " +
                "Layer mechanisms where the Group Table is not involved. Hence this cluster does not play a part in " +
                "that.",

            xref: { document: "cluster", section: "1.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.3.4" },
                    children: [Field({
                        name: "GN", constraint: "0", description: "GroupNames",
                        details: "The ability to store a name for a group."
                    })]
                }),

                Attribute({
                    name: "NameSupport", id: 0x0, type: "NameSupportBitmap", access: "R V", conformance: "M",
                    constraint: "desc", default: "0", quality: "F",
                    details: "This attribute provides legacy, read-only access to whether the Group Names feature is supported. " +
                        "The most significant bit, bit 7 (GroupNames), shall be equal to bit 0 of the FeatureMap attribute " +
                        "(GN Feature). All other bits shall be 0.",
                    xref: { document: "cluster", section: "1.3.6.1" }
                }),

                Command({
                    name: "AddGroup", id: 0x0, access: "F M", conformance: "M", direction: "request",
                    response: "AddGroupResponse",
                    details: "The AddGroup command allows a client to add group membership in a particular group for the server " +
                        "endpoint.",
                    xref: { document: "cluster", section: "1.3.7.1" },

                    children: [
                        Field({
                            name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
                            details: "This field shall be used to identify the group and any associated key material to which the server " +
                                "endpoint is to be added.",
                            xref: { document: "cluster", section: "1.3.7.1.1" }
                        }),

                        Field({
                            name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
                            details: "This field may be set to a human-readable name for the group. If the client has no name for the " +
                                "group, the GroupName field shall be set to the empty string." +
                                "\n" +
                                "Support of group names is optional and is indicated by the FeatureMap and NameSupport attribute.",
                            xref: { document: "cluster", section: "1.3.7.1.2" }
                        })
                    ]
                }),

                Command({
                    name: "ViewGroup", id: 0x1, access: "F O", conformance: "M", direction: "request",
                    response: "ViewGroupResponse",
                    details: "The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse " +
                        "command containing the name string for a particular group.",
                    xref: { document: "cluster", section: "1.3.7.2" },
                    children: [
                        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" })
                    ]
                }),

                Command({
                    name: "GetGroupMembership", id: 0x2, access: "F O", conformance: "M", direction: "request",
                    response: "GetGroupMembershipResponse",
                    details: "The GetGroupMembership command allows a client to inquire about the group membership of the server " +
                        "endpoint, in a number of ways.",
                    xref: { document: "cluster", section: "1.3.7.3" },
                    children: [Field({
                        name: "GroupList", id: 0x0, type: "list", conformance: "M", constraint: "all[min 1]",
                        children: [Field({ name: "entry", type: "group-id" })]
                    })]
                }),

                Command({
                    name: "RemoveGroup", id: 0x3, access: "F M", conformance: "M", direction: "request",
                    response: "RemoveGroupResponse",
                    xref: { document: "cluster", section: "1.3.7" }
                }),
                Command({
                    name: "RemoveAllGroups", id: 0x4, access: "F M", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.3.7" }
                }),

                Command({
                    name: "AddGroupIfIdentifying", id: 0x5, access: "F M", conformance: "M", direction: "request",
                    response: "status",

                    details: "The AddGroupIfIdentifying command allows a client to add group membership in a particular group for " +
                        "the server endpoint, on condition that the endpoint is identifying itself. Identifying " +
                        "functionality is controlled using the Identify cluster, (see Identify Cluster)." +
                        "\n" +
                        "For correct operation of the AddGroupIfIdentifying command, any endpoint that supports the Groups " +
                        "server cluster shall also support the Identify server cluster." +
                        "\n" +
                        "This command might be used to assist configuring group membership in the absence of a commissioning " +
                        "tool.",

                    xref: { document: "cluster", section: "1.3.7.6" },

                    children: [
                        Field({
                            name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
                            details: "This field shall be used to identify the group and any associated key material to which the server " +
                                "endpoint is to be added.",
                            xref: { document: "cluster", section: "1.3.7.6.1" }
                        }),

                        Field({
                            name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
                            details: "This field may be set to a human-readable name for the group. If the client has no name for the " +
                                "group, the GroupName field shall be set to the empty string." +
                                "\n" +
                                "Support of group names is optional and is indicated by the FeatureMap and NameSupport attribute.",
                            xref: { document: "cluster", section: "1.3.7.6.2" }
                        })
                    ]
                }),

                Command({
                    name: "AddGroupResponse", id: 0x0, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.3.7" }
                }),
                Command({
                    name: "ViewGroupResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.3.7" }
                }),

                Command({
                    name: "GetGroupMembershipResponse", id: 0x2, conformance: "M", direction: "response",
                    details: "The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a " +
                        "GetGroupMembership command.",
                    xref: { document: "cluster", section: "1.3.7.9" },

                    children: [
                        Field({
                            name: "Capacity", id: 0x0, type: "uint8", conformance: "M", quality: "X",

                            details: "This field shall contain the remaining capacity of the Group Table of the node. The following " +
                                "values apply:" +
                                "\n" +
                                "  • 0 - No further groups may be added." +
                                "\n" +
                                "  • 0 < Capacity < 0xFE - Capacity holds the number of groups that may be added." +
                                "\n" +
                                "  • 0xFE - At least 1 further group may be added (exact number is unknown)." +
                                "\n" +
                                "  • null - It is unknown if any further groups may be added.",

                            xref: { document: "cluster", section: "1.3.7.9.1" }
                        }),

                        Field({
                            name: "GroupList", id: 0x1, type: "list", conformance: "M", constraint: "all[min 1]",

                            details: "The GroupList field shall contain either the group IDs of all the groups in the Group Table for " +
                                "which the server endpoint is a member of the group (in the case where the GroupList field of the " +
                                "received GetGroupMembership command was empty), or the group IDs of all the groups in the Group " +
                                "Table for which the server endpoint is a member of the group and for which the group ID was " +
                                "included in the the GroupList field of the received GetGroupMembership command (in the case where " +
                                "the GroupList field of the received GetGroupMembership command was not empty)." +
                                "\n" +
                                "Zigbee: If the total number of groups will cause the maximum payload length of a frame to be " +
                                "exceeded, then the GroupList field shall contain only as many groups as will fit." +
                                "\n" +
                                "### ‌1.3.7.10. RemoveGroupResponse Command" +
                                "\n" +
                                "The RemoveGroupResponse command is generated by the server in response to the receipt of a " +
                                "RemoveGroup command.",

                            xref: { document: "cluster", section: "1.3.7.9.2" },
                            children: [Field({ name: "entry", type: "group-id" })]
                        })
                    ]
                }),

                Command({
                    name: "RemoveGroupResponse", id: 0x3, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.3.7" }
                })
            ]
        }),

        Cluster({
            name: "Scenes", id: 0x5, classification: "application",

            details: "The Scenes cluster provides attributes and commands for setting up and recalling scenes. Each scene " +
                "corresponds to a set of stored values of specified attributes for one or more clusters on the same " +
                "end point as the Scenes cluster." +
                "\n" +
                "In most cases scenes are associated with a particular group identifier. Scenes may also exist " +
                "without a group, in which case the value 0 replaces the group identifier. Note that extra care is " +
                "required in these cases to avoid a scene identifier collision, and that commands related to scenes " +
                "without a" +
                "\n" +
                "group may only be unicast, i.e., they may not be multicast or broadcast." +
                "\n" +
                "NOTE Support for Scenes cluster is provisional.",

            xref: { document: "cluster", section: "1.4" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.4.4" },

                    children: [
                        Field({
                            name: "SN", conformance: "O", constraint: "0", description: "SceneNames",
                            details: "The ability to store a name for a scene."
                        }),
                        Field({
                            name: "EX", conformance: "M", constraint: "1", description: "Explicit",
                            details: "Use explicit attribute IDs, not implicit based on order"
                        }),
                        Field({
                            name: "TS", conformance: "M", constraint: "2", description: "TableSize",
                            details: "Table size and remaining capacity supported"
                        }),
                        Field({
                            name: "FS", conformance: "M", constraint: "3", description: "FabricScenes",
                            details: "Supports current scene, count, group etc, as fabric-scoped."
                        })
                    ]
                }),

                Attribute({
                    name: "SceneCount", id: 0x0, type: "uint8", access: "R V", conformance: "!FS", default: 0,
                    details: "The SceneCount attribute specifies the number of scenes currently used in the server’s Scene Table " +
                        "on the endpoint where the Scenes cluster appears." +
                        "\n" +
                        "For nodes supporting fabrics, this only includes the count for the accessing fabric.",
                    xref: { document: "cluster", section: "1.4.8.1" }
                }),

                Attribute({
                    name: "CurrentScene", id: 0x1, type: "uint8", access: "R V", conformance: "!FS", default: 0,
                    details: "The CurrentScene attribute holds the scene identifier of the scene last invoked.",
                    xref: { document: "cluster", section: "1.4.8.2" }
                }),

                Attribute({
                    name: "CurrentGroup", id: 0x2, type: "group-id", access: "R V", conformance: "!FS", default: 0,
                    details: "The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene " +
                        "last invoked is not associated with a group.",
                    xref: { document: "cluster", section: "1.4.8.3" }
                }),

                Attribute({
                    name: "SceneValid", id: 0x3, type: "bool", access: "R V", conformance: "!FS", default: true,

                    details: "The SceneValid attribute indicates whether the state of the server corresponds to that associated " +
                        "with the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, " +
                        "FALSE indicates that they are not valid." +
                        "\n" +
                        "Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful " +
                        "StoreScene or RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the " +
                        "state of the server is modified, this attribute is set to FALSE.",

                    xref: { document: "cluster", section: "1.4.8.4" }
                }),

                Attribute({
                    name: "NameSupport", id: 0x4, type: "map8", access: "R V", conformance: "M", constraint: "desc",
                    default: 0,
                    details: "This attribute provides legacy, read-only access to whether the Scene Names feature is supported. " +
                        "The most significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other " +
                        "bits shall be 0.",
                    xref: { document: "cluster", section: "1.4.8.5" },
                    children: [Field({ name: "SceneNames", constraint: "7", description: "The ability to store a name for a scene." })]
                }),

                Attribute({
                    name: "LastConfiguredBy", id: 0x5, type: "node-id", access: "R V", conformance: "O", default: null,
                    quality: "X",

                    details: "The LastConfiguredBy attribute holds the Node ID of the node that last configured the Scene Table." +
                        "\n" +
                        "The null value indicates that the server has not been configured, or that the identifier of the " +
                        "node that last configured the Scenes cluster is not known." +
                        "\n" +
                        "For nodes supporting fabrics, the Node ID is scoped to the accessing fabric.",

                    xref: { document: "cluster", section: "1.4.8.6" }
                }),

                Attribute({
                    name: "SceneTableSize", id: 0x6, type: "uint16", access: "R V", conformance: "TS",
                    constraint: "desc", default: 16, quality: "F",

                    details: "This attribute shall indicate the number of entries in the Scene Table on this endpoint. For nodes " +
                        "supporting fabrics, this is the total across all fabrics; note that a single fabric cannot use all " +
                        "those entries (see Handling of fabric-scoping). The minimum size of this table, (i.e., the minimum " +
                        "number of scenes to support across all fabrics per endpoint) shall be 16, unless a device type in " +
                        "which this" +
                        "\n" +
                        "cluster is used, defines a larger value in the device type definition.",

                    xref: { document: "cluster", section: "1.4.8.7" }
                }),

                Attribute({
                    name: "FabricSceneInfo", id: 0x7, type: "list", access: "R F V", conformance: "FS",

                    details: "This attribute indicates a list of fabric scoped information about scenes on this endpoint." +
                        "\n" +
                        "### ‌1.4.8.9. Logical Scene Table" +
                        "\n" +
                        "The Scene Table is used to store information for each scene capable of being invoked on the server. " +
                        "Each scene is defined for a particular group. The Scene Table is defined here as a conceptual " +
                        "illustration to assist in understanding the underlying data to be stored when scenes are defined. " +
                        "Though the Scene Table is defined here using the data model architecture rules and format, the " +
                        "design is not normative." +
                        "\n" +
                        "The Scene table is logically a list of fabric-scoped structs. The logical fields of each Scene " +
                        "Table entry struct are illustrated below. An ExtensionFieldSetStruct may be present for each " +
                        "Scenes-supporting cluster implemented on the same endpoint." +
                        "\n" +
                        "Table 3. Fields of a Scene Table Entry",

                    xref: { document: "cluster", section: "1.4.8.8" },
                    children: [Field({ name: "entry", type: "SceneInfoStruct" })]
                }),

                Command({
                    name: "AddScene", id: 0x0, access: "M", conformance: "M", direction: "request",
                    response: "AddSceneResponse",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "ViewScene", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "ViewSceneResponse",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "RemoveScene", id: 0x2, access: "M", conformance: "M", direction: "request",
                    response: "RemoveSceneResponse",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "RemoveAllScenes", id: 0x3, access: "M", conformance: "M", direction: "request",
                    response: "RemoveAllScenesResponse",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "StoreScene", id: 0x4, access: "M", conformance: "M", direction: "request",
                    response: "StoreSceneResponse",
                    xref: { document: "cluster", section: "1.4.9" }
                }),

                Command({
                    name: "RecallScene", id: 0x5, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.4.9.7" },

                    children: [
                        Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M" }),
                        Field({ name: "SceneId", id: 0x1, type: "uint8", conformance: "M" }),
                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "O", constraint: "max 60000",
                            quality: "X"
                        })
                    ]
                }),

                Command({
                    name: "GetSceneMembership", id: 0x6, access: "O", conformance: "M", direction: "request",
                    response: "GetSceneMembershipResponse",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "EnhancedAddScene", id: 0x40, access: "M", conformance: "O", direction: "request",
                    response: "EnhancedAddSceneResponse",
                    xref: { document: "cluster", section: "1.4.9" }
                }),

                Command({
                    name: "EnhancedViewScene", id: 0x41, access: "O", conformance: "O", direction: "request",
                    response: "EnhancedViewSceneResponse",
                    details: "The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time " +
                        "than the ViewScene command." +
                        "\n" +
                        "This command shall have the same data fields as the ViewScene command.",
                    xref: { document: "cluster", section: "1.4.9.10" }
                }),

                Command({
                    name: "CopyScene", id: 0x42, access: "M", conformance: "O", direction: "request",
                    response: "CopySceneResponse",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "AddSceneResponse", id: 0x0, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "ViewSceneResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "RemoveSceneResponse", id: 0x2, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "RemoveAllScenesResponse", id: 0x3, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "StoreSceneResponse", id: 0x4, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "GetSceneMembershipResponse", id: 0x6, conformance: "M", direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "EnhancedAddSceneResponse", id: 0x40, conformance: "EnhancedAddScene", direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "EnhancedViewSceneResponse", id: 0x41, conformance: "EnhancedViewScene",
                    direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),
                Command({
                    name: "CopySceneResponse", id: 0x42, conformance: "CopyScene", direction: "response",
                    xref: { document: "cluster", section: "1.4.9" }
                }),

                Datatype({
                    name: "SceneInfoStruct Type", type: "struct",
                    details: "Except for RemainingCapacity, the fields in this struct are used in place of the attributes of the " +
                        "same name to indicate the current state on the scene on the server, when the FabricScenes feature " +
                        "is supported. A reference to one of the attributes with the same name in behavior text, is " +
                        "synonymous with a reference to the field with the same name.",
                    xref: { document: "cluster", section: "1.4.7.1" },

                    children: [
                        Field({
                            name: "SceneCount", id: 0x0, type: "uint8", access: "R F V", conformance: "M", default: 0,
                            details: "See the SceneCount attribute.",
                            xref: { document: "cluster", section: "1.4.7.1.1" }
                        }),
                        Field({
                            name: "CurrentScene", id: 0x1, type: "uint8", access: "R S V", conformance: "M", default: 0,
                            details: "See the CurrentScene attribute.",
                            xref: { document: "cluster", section: "1.4.7.1.2" }
                        }),
                        Field({
                            name: "CurrentGroup", id: 0x2, type: "group-id", access: "R S V", conformance: "M", default: 0
                        }),
                        Field({
                            name: "SceneValid", id: 0x3, type: "bool", access: "R S V", conformance: "M", default: true,
                            details: "See the SceneValid attribute.",
                            xref: { document: "cluster", section: "1.4.7.1.4" }
                        }),

                        Field({
                            name: "RemainingCapacity", id: 0x4, type: "uint8", access: "R F V", conformance: "TS",
                            constraint: "max 253",
                            details: "This field shall indicate the remaining capacity of the Scene Table on this endpoint for the " +
                                "accessing fabric. Note that this value may change between reads even if no entries are added or " +
                                "deleted on the accessing fabric due to other clients associated with other fabrics adding or " +
                                "deleting entries that impact the resource usage on the device.",
                            xref: { document: "cluster", section: "1.4.7.1.5" }
                        }),

                        Field({
                            name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                            constraint: "1 to 254"
                        })
                    ]
                }),

                Datatype({
                    name: "CopyModeMap Type", type: "map8",
                    details: "The CopyModeMap type is used in the CopyScene command.",
                    xref: { document: "cluster", section: "1.4.7.2" },
                    children: [Field({ name: "CopyAllScenes", constraint: "0" })]
                }),

                Datatype({
                    name: "AttributeValuePairStruct Type", type: "struct",
                    details: "This data type indicates a combination of an identifier and the value of an attribute.",
                    xref: { document: "cluster", section: "1.4.7.3" },

                    children: [
                        Field({
                            name: "AttributeId", id: 0x0, type: "attrib-id", access: "RW", conformance: "EX, O",

                            details: "This field shall be present for all instances in a given ExtensionFieldSetStruct (explicit list) or " +
                                "shall be absent for all instances in a given ExtensionFieldSetStruct (implicit list)." +
                                "\n" +
                                "If this field is not present, then the data type of AttributeValue shall be determined by the order " +
                                "and data type defined in the cluster specification for the ClusterID present in an " +
                                "ExtensionFieldSetStruct. Otherwise the data type of AttributeValue shall be the data type of the " +
                                "attribute indicated by AttributeID." +
                                "\n" +
                                "The AttributeID field shall NOT refer to an attribute without the Scenes (\"S\") designation in the " +
                                "Quality column of the cluster specification." +
                                "\n" +
                                "  1.4.7.3.2. ValueUnsigned8, ValueSigned8, ValueUnsigned16, ValueSigned16, ValueUnsigned32, " +
                                "             ValueSigned32, ValueUnsigned64, ValueSigned64 Fields" +
                                "\n" +
                                "This is the attribute value as part of an extension field set, associated with a given AttributeID " +
                                "under an ExtensionFieldSetStruct’s ClusterID. The proper field shall be present that maps to the " +
                                "data type of the attribute indicated (implicit or explicit)." +
                                "\n" +
                                "  • Data types bool, map8, and uint8 shall map to ValueUnsigned8." +
                                "\n" +
                                "  • Data types int8 shall map to ValueSigned8." +
                                "\n" +
                                "  • Data types map16 and uint16 shall map to ValueUnsigned16." +
                                "\n" +
                                "  • Data types int16 shall map to ValueSigned16." +
                                "\n" +
                                "  • Data types map32, uint24, and uint32 shall map to ValueUnsigned32." +
                                "\n" +
                                "  • Data types int24 and int32 shall map to ValueSigned32." +
                                "\n" +
                                "  • Data types map64, uint48, uint56 and uint64 shall map to ValueUnsigned64." +
                                "\n" +
                                "  • Data types int48, int56 and int64 shall map to ValueSigned64." +
                                "\n" +
                                "  • For nullable attributes, any value that is not a valid numeric value for the attribute’s type " +
                                "    after accounting for range reductions due to being nullable and constraints shall be considered " +
                                "    to have the null value for the type." +
                                "\n" +
                                "  • For non-nullable attributes, any value that is not a valid numeric value for the attribute’s " +
                                "    type after accounting for constraints shall be considered to have the maximum legal value in " +
                                "    the attribute’s constrained range." +
                                "\n" +
                                "Examples of processing are:" +
                                "\n" +
                                "  • ColorControl cluster CurrentX (AttributeID 0x0003) has a type of uint16 and is not nullable." +
                                "\n" +
                                "    ◦ AttributeValue of 0xAB12 would be used as-is, as it is in range." +
                                "\n" +
                                "    ◦ AttributeValue of 0xAA0011 is outside of the range of uint16, and would be saturated to the " +
                                "      maximum of the attribute’s constraint range: 0xFEFF." +
                                "\n" +
                                "  • LevelControl cluster CurrentLevel (AttributeID 0x0000) has a type of uint8 and is nullable." +
                                "\n" +
                                "    ◦ AttributeValue of 0xA1 would be used as-is, as it is in range." +
                                "\n" +
                                "    ◦ AttributeValue of 0xBB12 is outside the range of nullable uint8, and would be considered as " +
                                "      the null value." +
                                "\n" +
                                "### ‌1.4.7.4. ExtensionFieldSetStruct Type" +
                                "\n" +
                                "This data type indicates for a given cluster a set of attributes and their values.",

                            xref: { document: "cluster", section: "1.4.7.3.1" }
                        }),

                        Field({ name: "ValueUnsigned8", id: 0x1, type: "uint8", access: "RW", conformance: "O.a" }),
                        Field({ name: "ValueSigned8", id: 0x2, type: "int8", access: "RW", conformance: "O.a" }),
                        Field({ name: "ValueUnsigned16", id: 0x3, type: "uint16", access: "RW", conformance: "O.a" }),
                        Field({ name: "ValueSigned16", id: 0x4, type: "int16", access: "RW", conformance: "O.a" }),
                        Field({ name: "ValueUnsigned32", id: 0x5, type: "uint32", access: "RW", conformance: "O.a" }),
                        Field({ name: "ValueSigned32", id: 0x6, type: "int32", access: "RW", conformance: "O.a" }),
                        Field({ name: "ValueUnsigned64", id: 0x7, type: "uint64", access: "RW", conformance: "O.a" }),
                        Field({ name: "ValueSigned64", id: 0x8, type: "int64", access: "RW", conformance: "O.a" })
                    ]
                }),

                Datatype({
                    name: "Implicit Form of ExtensionFieldSetStruct", type: "struct",

                    details: "In the implicit form, the AttributeValuePairStructs in AttributeValueList shall NOT have an " +
                        "AttributeID and the order of items in the AttributeValueList shall match the Scene Table order " +
                        "defined in the specification of the cluster identified by ClusterID. Note that the specified order " +
                        "of attributes in an AttributeValueList may not be the same as the order of attribute IDs." +
                        "\n" +
                        "The AttributeValueList SHOULD contain all the attributes with the Scenes (\"S\") quality as the " +
                        "specification of the cluster identified by ClusterID describes, but trailing " +
                        "AttributeValuePairStruct may be omitted. However, this restricts which AttributeValuePairStruct can " +
                        "be left out, imposing a problem for clusters that have attributes that have the Scenes (\"S\") " +
                        "quality but are not implemented, or for attributes which are a 'don’t care' in the given " +
                        "AttributeValueList. For these situations, the specification of the cluster identified by ClusterID " +
                        "also defines default values for these attributes." +
                        "\n" +
                        "An example using the Color Control cluster using positional indices:" +
                        "\n" +
                        "  • Index 0: maps to Attribute 0x0003, CurrentX" +
                        "\n" +
                        "  • Index 1: maps to Attribute 0x0004, CurrentY" +
                        "\n" +
                        "  • Index 2: maps to Attribute 0x4000, EnhancedCurrentHue" +
                        "\n" +
                        "  • Index 3: maps to Attribute 0x0001, CurrentSaturation" +
                        "\n" +
                        "  • Index 4: maps to Attribute 0x4002, ColorLoopActive" +
                        "\n" +
                        "  • Index 5: maps to Attribute 0x4003, ColorLoopDirection" +
                        "\n" +
                        "  • Index 6: maps to Attribute 0x4004, ColorLoopTime" +
                        "\n" +
                        "  • Index 7: maps to Attribute 0x0007, ColorTemperatureMireds" +
                        "\n" +
                        "  • Index 8: maps to Attribute 0x4001, EnhancedColorMode",

                    xref: { document: "cluster", section: "1.4.7.4.3" }
                }),

                Datatype({
                    name: "Explicit Form of ExtensionFieldSetStruct", type: "struct",

                    details: "In the explicit form, the AttributeValuePairStructs in AttributeValueList shall have an AttributeID " +
                        "and the items in the AttributeValueList may be in any order." +
                        "\n" +
                        "The AttributeValueList SHOULD contain all the attributes with the Scenes (\"S\") quality as the " +
                        "specification of the cluster identified by ClusterID describes, but AttributeValuePairStruct may be " +
                        "omitted." +
                        "\n" +
                        "An example using the Color Control cluster:" +
                        "\n" +
                        "  • Attribute 0x0001, CurrentSaturation, S quality, optional, implemented" +
                        "\n" +
                        "  • Attribute 0x0003, CurrentX, S quality, optional based on feature, implemented" +
                        "\n" +
                        "  • Attribute 0x0004, CurrentY, S quality, optional based on feature, implemented" +
                        "\n" +
                        "  • Attribute 0x0007, ColorTemperatureMireds, S quality, optional based on feature, implemented" +
                        "\n" +
                        "  • Attribute 0x4000, EnhancedCurrentHue, S quality, optional based on feature, implemented" +
                        "\n" +
                        "  • Attribute 0x4001, EnhancedColorMode, S quality, mandatory, implemented" +
                        "\n" +
                        "  • Attribute 0x4002, ColorLoopActive, S quality, optional based on feature, NOT implemented" +
                        "\n" +
                        "  • Attribute 0x4003, ColorLoopDirection, S quality, optional based on feature, NOT implemented" +
                        "\n" +
                        "  • Attribute 0x4004, ColorLoopTime, S quality, optional based on feature, NOT implemented",

                    xref: { document: "cluster", section: "1.4.7.4.4" }
                })
            ]
        }),

        Cluster({
            name: "OnOff", id: 0x6, classification: "application",
            details: "Attributes and commands for turning devices on and off.",
            xref: { document: "cluster", section: "1.5" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.5.4" },

                    children: [
                        Field({
                            name: "LT", constraint: "0", description: "Lighting",
                            details: "Behavior that supports lighting applications."
                        }),
                        Field({
                            name: "DF", constraint: "1", description: "DeadFrontBehaviour",
                            details: "Device has Dead Front behavior"
                        })
                    ]
                }),

                Attribute({
                    name: "OnOff", id: 0x0, type: "bool", access: "R V", conformance: "M", default: true,
                    quality: "N S",

                    details: "This attribute indicates whether the device type implemented on the endpoint is turned off or " +
                        "turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively." +
                        "\n" +
                        "### ‌1.5.6.3. GlobalSceneControl Attribute" +
                        "\n" +
                        "In order to support the use case where the user gets back the last setting of a set of devices " +
                        "(e.g. level settings for lights), a global scene is introduced which is stored when the devices are " +
                        "turned off and recalled when the devices are turned on. The global scene is defined as the scene " +
                        "that is stored with group identifier 0 and scene identifier 0." +
                        "\n" +
                        "This attribute is defined in order to prevent a second Off command storing the all-devices-off " +
                        "situation as a global scene, and to prevent a second On command destroying the current settings by " +
                        "going back to the global scene." +
                        "\n" +
                        "This attribute shall be set to TRUE after the reception of a command which causes the OnOff " +
                        "attribute to be set to TRUE, such as a standard On command, a MoveToLevel(WithOnOff) command, a " +
                        "RecallScene command or a OnWithRecallGlobalScene command." +
                        "\n" +
                        "This attribute is set to FALSE after reception of a OffWithEffect command.",

                    xref: { document: "cluster", section: "1.5.6.2" }
                }),

                Attribute({
                    name: "GlobalSceneControl", id: 0x4000, type: "bool", access: "R V", conformance: "LT",
                    default: true,
                    xref: { document: "cluster", section: "1.5.6" }
                }),

                Attribute({
                    name: "OnTime", id: 0x4001, type: "uint16", access: "RW VO", conformance: "LT", default: 0,
                    details: "This attribute specifies the length of time (in 1/10ths second) that the On state shall be " +
                        "maintained before automatically transitioning to the Off state when using the OnWithTimedOff " +
                        "command. This attribute can be written at any time, but writing a value only has effect when in the " +
                        "Timed On state. See OnWithTimedOff for more details.",
                    xref: { document: "cluster", section: "1.5.6.4" }
                }),

                Attribute({
                    name: "OffWaitTime", id: 0x4002, type: "uint16", access: "RW VO", conformance: "LT", default: 0,

                    details: "This attribute specifies the length of time (in 1/10ths second) that the Off state shall be guarded " +
                        "to prevent another OnWithTimedOff command turning the server back to its On state (e.g., when " +
                        "leaving a room, the lights are turned off but an occupancy sensor detects the leaving person and " +
                        "attempts to turn the lights back on). This attribute can be written at any time, but writing a " +
                        "value only has an effect when in the Timed On state followed by a transition to the Delayed Off " +
                        "state, or in the Delayed Off state. See OnWithTimedOff for more details." +
                        "\n" +
                        "### ‌1.5.6.6. StartUpOnOff Attribute" +
                        "\n" +
                        "This attribute shall define the desired startup behavior of a device when it is supplied with power " +
                        "and this state shall be reflected in the OnOff attribute. If the value is null, the OnOff attribute " +
                        "is set to its previous value. Otherwise, the behavior is defined in the table defining " +
                        "StartUpOnOffEnum." +
                        "\n" +
                        "This behavior does not apply to reboots associated with OTA. After an OTA restart, the OnOff " +
                        "attribute shall return to its value prior to the restart.",

                    xref: { document: "cluster", section: "1.5.6.5" }
                }),

                Attribute({
                    name: "StartUpOnOff", id: 0x4003, type: "StartUpOnOffEnum", access: "RW VM", conformance: "LT",
                    constraint: "desc", quality: "X N",
                    xref: { document: "cluster", section: "1.5.6" }
                }),
                Command({
                    name: "Off", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.5.7.1" }
                }),
                Command({
                    name: "On", id: 0x1, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.5.7.2" }
                }),
                Command({
                    name: "Toggle", id: 0x2, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.5.7.3" }
                }),

                Command({
                    name: "OffWithEffect", id: 0x40, access: "O", conformance: "LT", direction: "request",
                    response: "status",
                    details: "The OffWithEffect command allows devices to be turned off using enhanced ways of fading.",
                    xref: { document: "cluster", section: "1.5.7.4" },

                    children: [
                        Field({
                            name: "EffectIdentifier", id: 0x0, type: "EffectIdentifierEnum", conformance: "M",
                            constraint: "desc",
                            details: "This field specifies the fading effect to use when turning the device off. This field shall contain " +
                                "one of the non-reserved values listed in EffectIdentifierEnum.",
                            xref: { document: "cluster", section: "1.5.7.4.1" }
                        }),

                        Field({
                            name: "EffectVariant", id: 0x1, type: "enum8", conformance: "M", constraint: "desc", default: 0,
                            details: "This field is used to indicate which variant of the effect, indicated in the EffectIdentifier " +
                                "field, SHOULD be triggered. If the server does not support the given variant, it shall use the " +
                                "default variant. This field is dependent on the value of the EffectIdentifier field and shall " +
                                "contain one of the non-reserved values listed in either DelayedAllOffEffectVariantEnum or " +
                                "DyingLightEffectVariantEnum.",
                            xref: { document: "cluster", section: "1.5.7.4.2" }
                        })
                    ]
                }),

                Command({
                    name: "OnWithRecallGlobalScene", id: 0x41, access: "O", conformance: "LT", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.5.7" }
                }),
                Command({
                    name: "OnWithTimedOff", id: 0x42, access: "O", conformance: "LT", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.5.7" }
                })
            ]
        }),

        Cluster({
            name: "LevelControl", id: 0x8, classification: "application",
            details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
                "a level, for example the brightness of a light, the degree of closure of a door, or the power " +
                "output of a heater.",
            xref: { document: "cluster", section: "1.6" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.6.4" },

                    children: [
                        Field({
                            name: "OO", constraint: "0", default: 1, description: "OnOff",
                            details: "Dependency with the On/Off cluster"
                        }),
                        Field({
                            name: "LT", constraint: "1", default: 0, description: "Lighting",
                            details: "Behavior that supports lighting applications"
                        }),
                        Field({
                            name: "FQ", constraint: "2", default: 0, description: "Frequency",
                            details: "Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for " +
                                "frequency control."
                        })
                    ]
                }),

                Attribute({
                    name: "CurrentLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
                    constraint: "minLevel to maxLevel", default: null, quality: "X N S",
                    details: "The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is " +
                        "device dependent.",
                    xref: { document: "cluster", section: "1.6.6.2" }
                }),

                Attribute({
                    name: "RemainingTime", id: 0x1, type: "uint16", access: "R V", conformance: "LT", default: 0,
                    details: "The RemainingTime attribute represents the time remaining until the current command is complete - " +
                        "it is specified in 1/10ths of a second.",
                    xref: { document: "cluster", section: "1.6.6.3" }
                }),

                Attribute({
                    name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[LT]",
                    constraint: "1 to maxLevel", default: 1,
                    details: "The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being " +
                        "assigned.",
                    xref: { document: "cluster", section: "1.6.6.4" }
                }),

                Attribute({
                    name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[!LT]",
                    constraint: "0 to maxLevel", default: 0,
                    details: "The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being " +
                        "assigned.",
                    xref: { document: "cluster", section: "1.6.6.4" }
                }),

                Attribute({
                    name: "MaxLevel", id: 0x3, type: "uint8", access: "R V", conformance: "O",
                    constraint: "minLevel to 254", default: 254,
                    details: "The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being " +
                        "assigned.",
                    xref: { document: "cluster", section: "1.6.6.5" }
                }),

                Attribute({
                    name: "CurrentFrequency", id: 0x4, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "minFrequency to maxFrequency", default: 0, quality: "S P",
                    details: "The CurrentFrequency attribute represents the frequency at which the device is at CurrentLevel. A " +
                        "CurrentFrequency of 0 is unknown.",
                    xref: { document: "cluster", section: "1.6.6.6" }
                }),

                Attribute({
                    name: "MinFrequency", id: 0x5, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "0 to maxFrequency", default: 0,
                    details: "The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being " +
                        "assigned. MinFrequency shall be less than or equal to MaxFrequency. A value of 0 indicates " +
                        "undefined.",
                    xref: { document: "cluster", section: "1.6.6.7" }
                }),

                Attribute({
                    name: "MaxFrequency", id: 0x6, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "min minFrequency", default: 0,

                    details: "The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being " +
                        "assigned. MaxFrequency shall be greater than or equal to MinFrequency. A value of 0 indicates " +
                        "undefined." +
                        "\n" +
                        "### ‌1.6.6.9. Options Attribute" +
                        "\n" +
                        "The Options attribute is meant to be changed only during commissioning. The Options attribute is a " +
                        "bitmap that determines the default behavior of some cluster commands. Each command that is " +
                        "dependent on the Options attribute shall first construct a temporary Options bitmap that is in " +
                        "effect during the command processing. The temporary Options bitmap has the same format and meaning " +
                        "as the Options attribute, but includes any bits that may be overridden by command fields." +
                        "\n" +
                        "Command execution shall NOT continue beyond the Options processing if all of these criteria are " +
                        "true:" +
                        "\n" +
                        "  • The command is one of the ‘without On/Off’ commands: Move, Move to Level, Step, or Stop." +
                        "\n" +
                        "  • The On/Off cluster exists on the same endpoint as this cluster." +
                        "\n" +
                        "  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE." +
                        "\n" +
                        "  • The value of the ExecuteIfOff bit is 0.",

                    xref: { document: "cluster", section: "1.6.6.8" }
                }),

                Attribute({
                    name: "OnOffTransitionTime", id: 0x10, type: "uint16", access: "RW VO", conformance: "O",
                    default: 0,

                    details: "The OnOffTransitionTime attribute represents the time taken to move to or from the target level " +
                        "when On or Off commands are received by an On/Off cluster on the same endpoint. It is specified in " +
                        "1/10ths of a second." +
                        "\n" +
                        "The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note " +
                        "that if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD " +
                        "NOT be implemented." +
                        "\n" +
                        "### ‌1.6.6.11. OnLevel Attribute" +
                        "\n" +
                        "The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff " +
                        "attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an " +
                        "On/Off cluster command. If the OnLevel attribute is not implemented, or is set to the null value, " +
                        "it has no effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.",

                    xref: { document: "cluster", section: "1.6.6.10" }
                }),

                Attribute({
                    name: "OnLevel", id: 0x11, type: "uint8", access: "RW VO", conformance: "M",
                    constraint: "minLevel to maxLevel", default: null, quality: "X",
                    xref: { document: "cluster", section: "1.6.6" }
                }),

                Attribute({
                    name: "OnTransitionTime", id: 0x12, type: "uint16", access: "RW VO", conformance: "O",
                    default: null, quality: "X",
                    details: "The OnTransitionTime attribute represents the time taken to move the current level from the minimum " +
                        "level to the maximum level when an On command is received by an On/Off cluster on the same " +
                        "endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a " +
                        "null value, the OnOffTransitionTime will be used instead.",
                    xref: { document: "cluster", section: "1.6.6.12" }
                }),

                Attribute({
                    name: "OffTransitionTime", id: 0x13, type: "uint16", access: "RW VO", conformance: "O",
                    default: null, quality: "X",
                    details: "The OffTransitionTime attribute represents the time taken to move the current level from the " +
                        "maximum level to the minimum level when an Off command is received by an On/Off cluster on the same " +
                        "endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a " +
                        "null value, the OnOffTransitionTime will be used instead.",
                    xref: { document: "cluster", section: "1.6.6.13" }
                }),

                Attribute({
                    name: "DefaultMoveRate", id: 0x14, type: "uint8", access: "RW VO", conformance: "O", quality: "X",
                    details: "The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move" +
                        "\n" +
                        "command is received with a null value Rate parameter.",
                    xref: { document: "cluster", section: "1.6.6.14" }
                }),

                Attribute({
                    name: "Options", id: 0xf, type: "OptionsBitmap", access: "RW VO", conformance: "M",
                    constraint: "desc", default: "0",
                    xref: { document: "cluster", section: "1.6.6" }
                }),

                Attribute({
                    name: "StartUpCurrentLevel", id: 0x4000, type: "uint8", access: "RW VM", conformance: "LT",
                    constraint: "desc", quality: "X N",

                    details: "The StartUpCurrentLevel attribute shall define the desired startup level for a device when it is " +
                        "supplied with power and this level shall be reflected in the CurrentLevel attribute. The values of " +
                        "the StartUpCurrentLevel attribute are listed below:" +
                        "\n" +
                        "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel " +
                        "attribute shall return to its value prior to the restart.",

                    xref: { document: "cluster", section: "1.6.6.15" }
                }),

                Command({
                    name: "MoveToLevel", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),

                Command({
                    name: "Move", id: 0x1, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.7.2" },

                    children: [
                        Field({
                            name: "MoveMode", id: 0x0, type: "MoveModeEnum", conformance: "M", constraint: "desc",
                            details: "This field shall be one of the non-reserved values in MoveModeEnum.",
                            xref: { document: "cluster", section: "1.6.7.2.1" }
                        }),

                        Field({
                            name: "Rate", id: 0x1, type: "uint8", conformance: "M", quality: "X",

                            details: "This field specifies the rate of movement in units per second. The actual rate of movement SHOULD " +
                                "be as close to this rate as the device is able. If the Rate field is equal to null, then the value " +
                                "in DefaultMoveRate attribute shall be used. However, if the Rate field is equal to null and the " +
                                "DefaultMoveRate attribute is not supported, or if the Rate field is equal to null and the value of " +
                                "the DefaultMoveRate attribute is equal to null, then the device SHOULD move as fast as it is able. " +
                                "If the device is not able to move at a variable rate, this field may be disregarded.",

                            xref: { document: "cluster", section: "1.6.7.2.2" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: "0"
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc",
                            default: "0"
                        })
                    ]
                }),

                Command({
                    name: "Step", id: 0x2, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.7.3" },

                    children: [
                        Field({
                            name: "StepMode", id: 0x0, type: "MoveModeEnum", conformance: "M", constraint: "desc",
                            details: "This field shall be one of the non-reserved values in MoveModeEnum.",
                            xref: { document: "cluster", section: "1.6.7.3.1" }
                        }),
                        Field({
                            name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                            details: "This field shall indicate the change to CurrentLevel.",
                            xref: { document: "cluster", section: "1.6.7.3.2" }
                        }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", quality: "X",

                            details: "This field specifies the time that shall be taken to perform the step, in tenths of a second. A " +
                                "step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to " +
                                "this as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as " +
                                "fast as it is able." +
                                "\n" +
                                "If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.",

                            xref: { document: "cluster", section: "1.6.7.3.3" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: "0"
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc",
                            default: "0"
                        })
                    ]
                }),

                Command({
                    name: "Stop", id: 0x3, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.7.4" },

                    children: [
                        Field({
                            name: "OptionsMask", id: 0x0, type: "Options", conformance: "M", constraint: "desc", default: "0"
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x1, type: "Options", conformance: "M", constraint: "desc",
                            default: "0"
                        })
                    ]
                }),

                Command({
                    name: "MoveToLevelWithOnOff", id: 0x4, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),
                Command({
                    name: "MoveWithOnOff", id: 0x5, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),
                Command({
                    name: "StepWithOnOff", id: 0x6, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),
                Command({
                    name: "StopWithOnOff", id: 0x7, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),

                Command({
                    name: "MoveToClosestFrequency", id: 0x8, access: "O", conformance: "FQ", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7.5" },
                    children: [Field({ name: "Frequency", id: 0x0, type: "uint16", conformance: "M", default: 0 })]
                })
            ]
        }),

        Cluster({
            name: "PulseWidthModulation", id: 0x1c, classification: "application",
            details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
                "a level, for example the brightness of a light, the degree of closure of a door, or the power " +
                "output of a heater.",
            xref: { document: "cluster", section: "1.6" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.6.4" },

                    children: [
                        Field({
                            name: "OO", constraint: "0", default: 1, description: "OnOff",
                            details: "Dependency with the On/Off cluster"
                        }),
                        Field({
                            name: "LT", constraint: "1", default: 0, description: "Lighting",
                            details: "Behavior that supports lighting applications"
                        }),
                        Field({
                            name: "FQ", constraint: "2", default: 0, description: "Frequency",
                            details: "Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for " +
                                "frequency control."
                        })
                    ]
                }),

                Attribute({
                    name: "CurrentLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
                    constraint: "minLevel to maxLevel", default: null, quality: "X N S",
                    details: "The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is " +
                        "device dependent.",
                    xref: { document: "cluster", section: "1.6.6.2" }
                }),

                Attribute({
                    name: "RemainingTime", id: 0x1, type: "uint16", access: "R V", conformance: "LT", default: 0,
                    details: "The RemainingTime attribute represents the time remaining until the current command is complete - " +
                        "it is specified in 1/10ths of a second.",
                    xref: { document: "cluster", section: "1.6.6.3" }
                }),

                Attribute({
                    name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[LT]",
                    constraint: "1 to maxLevel", default: 1,
                    details: "The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being " +
                        "assigned.",
                    xref: { document: "cluster", section: "1.6.6.4" }
                }),

                Attribute({
                    name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[!LT]",
                    constraint: "0 to maxLevel", default: 0,
                    details: "The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being " +
                        "assigned.",
                    xref: { document: "cluster", section: "1.6.6.4" }
                }),

                Attribute({
                    name: "MaxLevel", id: 0x3, type: "uint8", access: "R V", conformance: "O",
                    constraint: "minLevel to 254", default: 254,
                    details: "The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being " +
                        "assigned.",
                    xref: { document: "cluster", section: "1.6.6.5" }
                }),

                Attribute({
                    name: "CurrentFrequency", id: 0x4, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "minFrequency to maxFrequency", default: 0, quality: "S P",
                    details: "The CurrentFrequency attribute represents the frequency at which the device is at CurrentLevel. A " +
                        "CurrentFrequency of 0 is unknown.",
                    xref: { document: "cluster", section: "1.6.6.6" }
                }),

                Attribute({
                    name: "MinFrequency", id: 0x5, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "0 to maxFrequency", default: 0,
                    details: "The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being " +
                        "assigned. MinFrequency shall be less than or equal to MaxFrequency. A value of 0 indicates " +
                        "undefined.",
                    xref: { document: "cluster", section: "1.6.6.7" }
                }),

                Attribute({
                    name: "MaxFrequency", id: 0x6, type: "uint16", access: "R V", conformance: "FQ",
                    constraint: "min minFrequency", default: 0,

                    details: "The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being " +
                        "assigned. MaxFrequency shall be greater than or equal to MinFrequency. A value of 0 indicates " +
                        "undefined." +
                        "\n" +
                        "### ‌1.6.6.9. Options Attribute" +
                        "\n" +
                        "The Options attribute is meant to be changed only during commissioning. The Options attribute is a " +
                        "bitmap that determines the default behavior of some cluster commands. Each command that is " +
                        "dependent on the Options attribute shall first construct a temporary Options bitmap that is in " +
                        "effect during the command processing. The temporary Options bitmap has the same format and meaning " +
                        "as the Options attribute, but includes any bits that may be overridden by command fields." +
                        "\n" +
                        "Command execution shall NOT continue beyond the Options processing if all of these criteria are " +
                        "true:" +
                        "\n" +
                        "  • The command is one of the ‘without On/Off’ commands: Move, Move to Level, Step, or Stop." +
                        "\n" +
                        "  • The On/Off cluster exists on the same endpoint as this cluster." +
                        "\n" +
                        "  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE." +
                        "\n" +
                        "  • The value of the ExecuteIfOff bit is 0.",

                    xref: { document: "cluster", section: "1.6.6.8" }
                }),

                Attribute({
                    name: "OnOffTransitionTime", id: 0x10, type: "uint16", access: "RW VO", conformance: "O",
                    default: 0,

                    details: "The OnOffTransitionTime attribute represents the time taken to move to or from the target level " +
                        "when On or Off commands are received by an On/Off cluster on the same endpoint. It is specified in " +
                        "1/10ths of a second." +
                        "\n" +
                        "The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note " +
                        "that if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD " +
                        "NOT be implemented." +
                        "\n" +
                        "### ‌1.6.6.11. OnLevel Attribute" +
                        "\n" +
                        "The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff " +
                        "attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an " +
                        "On/Off cluster command. If the OnLevel attribute is not implemented, or is set to the null value, " +
                        "it has no effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.",

                    xref: { document: "cluster", section: "1.6.6.10" }
                }),

                Attribute({
                    name: "OnLevel", id: 0x11, type: "uint8", access: "RW VO", conformance: "M",
                    constraint: "minLevel to maxLevel", default: null, quality: "X",
                    xref: { document: "cluster", section: "1.6.6" }
                }),

                Attribute({
                    name: "OnTransitionTime", id: 0x12, type: "uint16", access: "RW VO", conformance: "O",
                    default: null, quality: "X",
                    details: "The OnTransitionTime attribute represents the time taken to move the current level from the minimum " +
                        "level to the maximum level when an On command is received by an On/Off cluster on the same " +
                        "endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a " +
                        "null value, the OnOffTransitionTime will be used instead.",
                    xref: { document: "cluster", section: "1.6.6.12" }
                }),

                Attribute({
                    name: "OffTransitionTime", id: 0x13, type: "uint16", access: "RW VO", conformance: "O",
                    default: null, quality: "X",
                    details: "The OffTransitionTime attribute represents the time taken to move the current level from the " +
                        "maximum level to the minimum level when an Off command is received by an On/Off cluster on the same " +
                        "endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a " +
                        "null value, the OnOffTransitionTime will be used instead.",
                    xref: { document: "cluster", section: "1.6.6.13" }
                }),

                Attribute({
                    name: "DefaultMoveRate", id: 0x14, type: "uint8", access: "RW VO", conformance: "O", quality: "X",
                    details: "The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move" +
                        "\n" +
                        "command is received with a null value Rate parameter.",
                    xref: { document: "cluster", section: "1.6.6.14" }
                }),

                Attribute({
                    name: "Options", id: 0xf, type: "OptionsBitmap", access: "RW VO", conformance: "M",
                    constraint: "desc", default: "0",
                    xref: { document: "cluster", section: "1.6.6" }
                }),

                Attribute({
                    name: "StartUpCurrentLevel", id: 0x4000, type: "uint8", access: "RW VM", conformance: "LT",
                    constraint: "desc", quality: "X N",

                    details: "The StartUpCurrentLevel attribute shall define the desired startup level for a device when it is " +
                        "supplied with power and this level shall be reflected in the CurrentLevel attribute. The values of " +
                        "the StartUpCurrentLevel attribute are listed below:" +
                        "\n" +
                        "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel " +
                        "attribute shall return to its value prior to the restart.",

                    xref: { document: "cluster", section: "1.6.6.15" }
                }),

                Command({
                    name: "MoveToLevel", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),

                Command({
                    name: "Move", id: 0x1, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.7.2" },

                    children: [
                        Field({
                            name: "MoveMode", id: 0x0, type: "MoveModeEnum", conformance: "M", constraint: "desc",
                            details: "This field shall be one of the non-reserved values in MoveModeEnum.",
                            xref: { document: "cluster", section: "1.6.7.2.1" }
                        }),

                        Field({
                            name: "Rate", id: 0x1, type: "uint8", conformance: "M", quality: "X",

                            details: "This field specifies the rate of movement in units per second. The actual rate of movement SHOULD " +
                                "be as close to this rate as the device is able. If the Rate field is equal to null, then the value " +
                                "in DefaultMoveRate attribute shall be used. However, if the Rate field is equal to null and the " +
                                "DefaultMoveRate attribute is not supported, or if the Rate field is equal to null and the value of " +
                                "the DefaultMoveRate attribute is equal to null, then the device SHOULD move as fast as it is able. " +
                                "If the device is not able to move at a variable rate, this field may be disregarded.",

                            xref: { document: "cluster", section: "1.6.7.2.2" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: "0"
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc",
                            default: "0"
                        })
                    ]
                }),

                Command({
                    name: "Step", id: 0x2, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.7.3" },

                    children: [
                        Field({
                            name: "StepMode", id: 0x0, type: "MoveModeEnum", conformance: "M", constraint: "desc",
                            details: "This field shall be one of the non-reserved values in MoveModeEnum.",
                            xref: { document: "cluster", section: "1.6.7.3.1" }
                        }),
                        Field({
                            name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                            details: "This field shall indicate the change to CurrentLevel.",
                            xref: { document: "cluster", section: "1.6.7.3.2" }
                        }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", quality: "X",

                            details: "This field specifies the time that shall be taken to perform the step, in tenths of a second. A " +
                                "step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to " +
                                "this as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as " +
                                "fast as it is able." +
                                "\n" +
                                "If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.",

                            xref: { document: "cluster", section: "1.6.7.3.3" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: "0"
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc",
                            default: "0"
                        })
                    ]
                }),

                Command({
                    name: "Stop", id: 0x3, access: "O", conformance: "M", direction: "request", response: "status",
                    xref: { document: "cluster", section: "1.6.7.4" },

                    children: [
                        Field({
                            name: "OptionsMask", id: 0x0, type: "Options", conformance: "M", constraint: "desc", default: "0"
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x1, type: "Options", conformance: "M", constraint: "desc",
                            default: "0"
                        })
                    ]
                }),

                Command({
                    name: "MoveToLevelWithOnOff", id: 0x4, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),
                Command({
                    name: "MoveWithOnOff", id: 0x5, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),
                Command({
                    name: "StepWithOnOff", id: 0x6, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),
                Command({
                    name: "StopWithOnOff", id: 0x7, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7" }
                }),

                Command({
                    name: "MoveToClosestFrequency", id: 0x8, access: "O", conformance: "FQ", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "1.6.7.5" },
                    children: [Field({ name: "Frequency", id: 0x0, type: "uint16", conformance: "M", default: 0 })]
                })
            ]
        }),

        Cluster({
            name: "BooleanState", id: 0x45, classification: "application",
            details: "This cluster provides an interface to a boolean state.",
            xref: { document: "cluster", section: "1.7" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "StateValue", id: 0x0, type: "bool", access: "R V", conformance: "M", quality: "P",
                    details: "This represents a boolean state." +
                        "\n" +
                        "The semantics of this boolean state are defined by the device type using this cluster." +
                        "\n" +
                        "For example, in a Contact Sensor device type, FALSE=open or no contact, TRUE=closed or contact.",
                    xref: { document: "cluster", section: "1.7.4.1" }
                }),

                Event({
                    name: "StateChange", id: 0x0, access: "V", conformance: "O", priority: "info",
                    details: "This event shall be generated when the StateValue attribute changes.",
                    xref: { document: "cluster", section: "1.7.5.1" },
                    children: [Field({
                        name: "StateValue", id: 0x0, type: "bool", conformance: "M",
                        details: "This field shall indicate the new value of the StateValue attribute.",
                        xref: { document: "cluster", section: "1.7.5.1.1" }
                    })]
                })
            ]
        }),

        Cluster({
            name: "ModeSelect", id: 0x50, classification: "application",

            details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
                "one of several predefined values. For example, the light pattern of a disco ball, the mode of a " +
                "massage chair, or the wash cycle of a laundry machine." +
                "\n" +
                "The server allows the client to set a mode on the server. A mode is one of a list of options that " +
                "may be presented by a client for a user choice, or understood by the client, via the semantic tags " +
                "on the mode." +
                "\n" +
                "A semantic tag is either a standard tag within a standard category namespace, or a manufacturer " +
                "specific tag, within the namespace of the vendor ID of the manufacturer. If there is no semantic " +
                "tag, the mode is anonymous, and the selection is made by the user solely based on the Label string." +
                "\n" +
                "Each cluster ID that indicates this specification shall define a distinct purpose for the cluster " +
                "instance. For example: A LightBlinking cluster ID supports blinking modes for a light (and is " +
                "described that way)." +
                "\n" +
                "An anonymous mode shall support the derived cluster purpose. A manufacturer specific semantic tag " +
                "shall support the derived cluster purpose. An anonymous mode shall NOT replace the meaning of a " +
                "standard semantic tag, when one exists, for the cluster purpose.",

            xref: { document: "cluster", section: "1.8" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.8.4" },
                    children: [Field({
                        name: "DEPONOFF", constraint: "0", description: "OnOff",
                        details: "Dependency with the OnOff cluster"
                    })]
                }),

                Attribute({
                    name: "Description", id: 0x0, type: "string", access: "R V", conformance: "M", constraint: "max 64",
                    quality: "F",

                    details: "This attribute describes the purpose of the server, in readable text." +
                        "\n" +
                        "For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and " +
                        "another Mode Select cluster for the amount of sugar to add. In this case, the first instance can " +
                        "have the description Milk and the second instance can have the description Sugar. This allows the " +
                        "user to tell the purpose of each of the instances." +
                        "\n" +
                        "### ‌1.8.6.3. StandardNamespace Attribute" +
                        "\n" +
                        "This attribute, when not null, shall indicate a single standard namespace for any standard semantic " +
                        "tag value supported in this or any other cluster instance with the same value of this attribute. A " +
                        "null value indicates no standard namespace, and therefore, no standard semantic tags are provided " +
                        "in this cluster instance. Each standard namespace and corresponding values and value meanings shall " +
                        "be defined in another document.",

                    xref: { document: "cluster", section: "1.8.6.2" }
                }),

                Attribute({
                    name: "StandardNamespacE", id: 0x1, type: "enum16", access: "R V", conformance: "M",
                    constraint: "desc", default: null, quality: "X F",
                    xref: { document: "cluster", section: "1.8.6" }
                }),

                Attribute({
                    name: "SupportedModes", id: 0x2, type: "list", access: "R V", conformance: "M",
                    constraint: "max 255", quality: "F",

                    details: "This attribute is the list of supported modes that may be selected for the CurrentMode attribute. " +
                        "Each item in this list represents a unique mode as indicated by the Mode field of the " +
                        "ModeOptionStruct. Each entry in this list shall have a unique value for the Mode field." +
                        "\n" +
                        "### ‌1.8.6.5. CurrentMode Attribute" +
                        "\n" +
                        "This attribute represents the current mode of the server." +
                        "\n" +
                        "The value of this field must match the Mode field of one of the entries in the SupportedModes" +
                        "\n" +
                        "attribute.",

                    xref: { document: "cluster", section: "1.8.6.4" },
                    children: [Field({ name: "entry", type: "ModeOptionStruct" })]
                }),

                Attribute({
                    name: "CurrentMode", id: 0x3, type: "uint8", access: "R V", conformance: "M", constraint: "desc",
                    quality: "N S",
                    xref: { document: "cluster", section: "1.8.6" }
                }),

                Attribute({
                    name: "StartUpMode", id: 0x4, type: "uint8", access: "RW VO", conformance: "O", constraint: "desc",
                    quality: "X N",

                    details: "The StartUpMode attribute value indicates the desired startup mode for the server when it is " +
                        "supplied with power." +
                        "\n" +
                        "If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, " +
                        "when the server is powered up, except in the case when the OnMode attribute overrides the " +
                        "StartUpMode attribute (see OnModeWithPowerUp)." +
                        "\n" +
                        "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode " +
                        "attribute shall return to its value prior to the restart." +
                        "\n" +
                        "The value of this field shall match the Mode field of one of the entries in the SupportedModes" +
                        "\n" +
                        "attribute." +
                        "\n" +
                        "If this attribute is not implemented, or is set to the null value, it shall have no effect." +
                        "\n" +
                        "### ‌1.8.6.7. OnMode Attribute" +
                        "\n" +
                        "This attribute shall indicate the value of CurrentMode that depends on the state of the On/Off " +
                        "cluster on the same endpoint. If this attribute is not present or is set to null, it shall NOT have " +
                        "an effect, otherwise the CurrentMode attribute shall depend on the OnOff attribute of the On/Off " +
                        "cluster" +
                        "\n" +
                        "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
                        "attribute." +
                        "\n" +
                        "### ‌1.8.6.7.1. OnMode with Power Up" +
                        "\n" +
                        "If the On/Off feature is supported and the On/Off cluster attribute StartUpOnOff is present, with a " +
                        "value of On (turn on at power up), then the CurrentMode attribute shall be set to the OnMode " +
                        "attribute value when the server is supplied with power, except if the OnMode attribute is null.",

                    xref: { document: "cluster", section: "1.8.6.6" }
                }),

                Attribute({
                    name: "OnMode", id: 0x5, type: "uint8", access: "RW VO", conformance: "DEPONOFF",
                    constraint: "desc", default: null, quality: "X N",
                    xref: { document: "cluster", section: "1.8.6" }
                }),

                Command({
                    name: "ChangeToMode", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "On receipt of this command, if the NewMode field indicates a valid mode transition within the " +
                        "supported list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the " +
                        "server shall respond with an INVALID_COMMAND status response.",
                    xref: { document: "cluster", section: "1.8.7.1" },
                    children: [Field({ name: "NewMode", id: 0x0, type: "uint8", conformance: "M", constraint: "desc" })]
                }),

                Datatype({
                    name: "SemanticTags Field", type: "struct",

                    details: "This field is a list of semantic tags that map to the mode option. This may be used by clients to " +
                        "determine the meaning of the mode option as defined in a standard or manufacturer specific " +
                        "namespace. Semantic tags can help clients look for options that meet certain criteria. A semantic" +
                        "\n" +
                        "tag shall be either a standard tag or manufacturer specific tag as defined in each " +
                        "SemanticTagStruct list entry." +
                        "\n" +
                        "A mode option may have more than one semantic tag. A mode option may be mapped to a mixture of " +
                        "standard and manufacturer specific semantic tags." +
                        "\n" +
                        "All standard semantic tags are from a single namespace indicated by the StandardNamespace attribute." +
                        "\n" +
                        "For example: A mode labeled \"100%\" can have both the HIGH (MS) and MAX (standard) semantic tag. " +
                        "Clients seeking the option for either HIGH or MAX will find the same option in this case." +
                        "\n" +
                        "### ‌1.8.5.2. SemanticTagStruct" +
                        "\n" +
                        "A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.",

                    xref: { document: "cluster", section: "1.8.5.1.3" },

                    children: [
                        Field({
                            name: "MfgCode", id: 0x0, type: "vendor-id", conformance: "M", constraint: "desc", quality: "F"
                        }),
                        Field({ name: "Value", id: 0x1, type: "enum16", conformance: "M", quality: "F" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "ModeBase", classification: "application",

            details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
                "one of several predefined values. For example, the light pattern of a disco ball, the mode of a " +
                "massage chair, or the wash cycle of a laundry machine." +
                "\n" +
                "The server allows the client to set a mode on the server. A mode is one of a list of options that " +
                "may be presented by a client for a user choice, or understood by the client, via the mode’s tags." +
                "\n" +
                "A mode tag is either a standard tag within a standard category namespace, or a manufacturer " +
                "specific tag, within the namespace of the vendor ID of the manufacturer. If there are no mode tags " +
                "for the mode or none that are known to the client, the mode is anonymous, and the selection by the " +
                "user can be made solely based on the Label string." +
                "\n" +
                "Any derived cluster specification based on this cluster shall support the standard mode tag value " +
                "definitions and command status definitions defined in this cluster and may define additional " +
                "standard mode tag values and standard command status values that are supported in the respective " +
                "derived cluster instances." +
                "\n" +
                "Each cluster ID that indicates this specification shall define a distinct purpose for the cluster " +
                "instance. For example: A LightBlinking cluster ID supports blinking modes for a light (and is " +
                "described that way)." +
                "\n" +
                "An anonymous mode shall NOT replace the meaning of a standard mode tag, when one exists, for the " +
                "cluster purpose.",

            xref: { document: "cluster", section: "1.9" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.9.4" },
                    children: [Field({
                        name: "DEPONOFF", constraint: "0", description: "OnOff",
                        details: "Dependency with the OnOff cluster"
                    })]
                }),

                Attribute({
                    name: "SupportedModes", id: 0x0, type: "list", access: "R V", conformance: "M",
                    constraint: "2 to 255", quality: "F",

                    details: "This attribute shall contain the list of supported modes that may be selected for the CurrentMode " +
                        "attribute. Each item in this list represents a unique mode as indicated by the Mode field of the " +
                        "ModeOptionStruct." +
                        "\n" +
                        "Each entry in this list shall have a unique value for the Mode field. Each entry in this list shall " +
                        "have a unique value for the Label field.",

                    xref: { document: "cluster", section: "1.9.6.2" },
                    children: [Field({ name: "entry", type: "ModeOptionStruct" })]
                }),

                Attribute({
                    name: "CurrentMode", id: 0x1, type: "uint8", access: "R V", conformance: "M", constraint: "desc",
                    quality: "N S",

                    details: "This attribute shall indicate the current mode of the server." +
                        "\n" +
                        "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
                        "attribute." +
                        "\n" +
                        "The value of this attribute may change at any time via an out-of-band interaction outside of the " +
                        "server, such as interactions with a user interface, via internal mode changes due to autonomously " +
                        "progressing through a sequence of operations, on system time-outs or idle delays, or via " +
                        "interactions coming from a fabric other than the one which last executed a ChangeToMode.",

                    xref: { document: "cluster", section: "1.9.6.3" }
                }),

                Attribute({
                    name: "StartUpMode", id: 0x2, type: "uint8", access: "RW VO", conformance: "O", constraint: "desc",
                    quality: "X N",

                    details: "This attribute shall indicate the desired startup mode for the server when it is supplied with " +
                        "power." +
                        "\n" +
                        "If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, " +
                        "when the server is powered up, except in the case when the OnMode attribute overrides the " +
                        "StartUpMode" +
                        "\n" +
                        "attribute (see OnModeWithPowerUp)." +
                        "\n" +
                        "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode " +
                        "attribute shall return to its value prior to the restart." +
                        "\n" +
                        "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
                        "attribute." +
                        "\n" +
                        "If this attribute is not implemented, or is set to the null value, it shall have no effect." +
                        "\n" +
                        "### ‌1.9.6.5. OnMode Attribute" +
                        "\n" +
                        "This attribute shall indicate whether the value of CurrentMode depends on the state of the On/Off " +
                        "cluster on the same endpoint. If this attribute is not present or is set to null, there is no " +
                        "dependency, otherwise the CurrentMode attribute shall depend on the OnOff attribute in the On/Off " +
                        "cluster" +
                        "\n" +
                        "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
                        "attribute." +
                        "\n" +
                        "### ‌1.9.6.5.1. OnMode with Power Up" +
                        "\n" +
                        "If the On/Off feature is supported and the On/Off cluster attribute StartUpOnOff is present, with a " +
                        "value of On (turn on at power up), then the CurrentMode attribute shall be set to the OnMode " +
                        "attribute value when the server is supplied with power, except if the OnMode attribute is null.",

                    xref: { document: "cluster", section: "1.9.6.4" }
                }),

                Attribute({
                    name: "OnMode", id: 0x3, type: "uint8", access: "RW VO", conformance: "DEPONOFF",
                    constraint: "desc", default: null, quality: "X N",
                    xref: { document: "cluster", section: "1.9.6" }
                }),

                Command({
                    name: "ChangeToMode", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "ChangeToModeResponse",
                    details: "This command is used to change device modes." +
                        "\n" +
                        "On receipt of this command the device shall respond with a ChangeToModeResponse command.",
                    xref: { document: "cluster", section: "1.9.7.1" },

                    children: [Field({
                        name: "NewMode", id: 0x0, type: "uint8", conformance: "M", constraint: "desc",

                        details: "If the NewMode field doesn’t match the Mode field of any entry of the SupportedModes list, the " +
                            "ChangeToModeResponse command’s Status field shall indicate UnsupportedMode and the StatusText field " +
                            "shall be included and may be used to indicate the issue, with a human readable string, or include " +
                            "an empty string." +
                            "\n" +
                            "If the NewMode field matches the Mode field of one entry of the SupportedModes list, but the device " +
                            "is not able to transition as requested, the ChangeToModeResponse command shall:" +
                            "\n" +
                            "  • Have the Status set to a product-specific Status value representing the error, or " +
                            "    GenericFailure if a more specific error cannot be provided. See Status Field for details." +
                            "\n" +
                            "  • Provide a human readable string in the StatusText field." +
                            "\n" +
                            "If the NewMode field matches the Mode field of one entry of the SupportedModes list and the device " +
                            "is able to transition as requested, the server shall transition into the mode associated with " +
                            "NewMode, the ChangeToModeResponse command shall have the Status field set to Success, the " +
                            "StatusText field may be supplied with a human readable string or include an empty string and the " +
                            "CurrentMode field shall be set to the value of the NewMode field." +
                            "\n" +
                            "If the NewMode field is the same as the value of the CurrentMode attribute the ChangeToModeResponse " +
                            "command shall have the Status field set to Success and the StatusText field may be supplied with a " +
                            "human readable string or include an empty string.",

                        xref: { document: "cluster", section: "1.9.7.1.1" }
                    })]
                }),

                Command({
                    name: "ChangeToModeResponse", id: 0x1, access: "O", conformance: "M", direction: "request",
                    details: "This command is sent by the device on receipt of the ChangeToMode command." +
                        "\n" +
                        "### ‌1.9.7.2.1. Status Field",
                    xref: { document: "cluster", section: "1.9.7.2" },

                    children: [
                        Field({ name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc" }),
                        Field({
                            name: "StatusText", id: 0x1, type: "string", conformance: "[Status == Success], M",
                            constraint: "max 64"
                        })
                    ]
                }),

                Datatype({
                    name: "Value Field", type: "struct",

                    details: "This field shall indicate the mode tag within a mode tag namespace which is either manufacturer " +
                        "specific or standard." +
                        "\n" +
                        "### ‌1.9.5.2. ModeOptionStruct Type" +
                        "\n" +
                        "This is a struct representing a possible mode of the server.",

                    xref: { document: "cluster", section: "1.9.5.1.2" },

                    children: [
                        Field({
                            name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 64", quality: "F"
                        }),
                        Field({ name: "Mode", id: 0x1, type: "uint8", conformance: "M", quality: "F" }),
                        Field({
                            name: "ModeTags", id: 0x2, type: "list", conformance: "M", constraint: "max 8", quality: "F",
                            children: [Field({ name: "entry", type: "ModeTagStruct" })]
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "LowPower", id: 0x508, classification: "application",

            details: "This cluster provides an interface for managing low power mode on a device." +
                "\n" +
                "This cluster would be supported on an endpoint that represents a physical device with a low power " +
                "mode. This cluster provides a sleep() command to allow clients to manually put the device into low " +
                "power mode. There is no command here to wake up a sleeping device because that operation often " +
                "involves other protocols such as Wake On LAN. Most devices automatically enter low power mode based " +
                "upon inactivity." +
                "\n" +
                "The cluster server for Low Power is implemented by a device that supports a low power mode, such as " +
                "a TV, Set-top box, or Smart Speaker." +
                "\n" +
                "NOTE" +
                "\n" +
                "We have considered a “DisableLowPowerMode” command but have not added it due to suspected issues " +
                "with energy consumption regulations. This can be added in the future.",

            xref: { document: "cluster", section: "1.10" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Command({
                    name: "Sleep", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",
                    details: "This command shall put the device into low power mode.",
                    xref: { document: "cluster", section: "1.10.4.1" }
                })
            ]
        }),

        Cluster({
            name: "WakeOnLan", id: 0x503, classification: "application",

            details: "This cluster provides an interface for managing low power mode on a device that supports the Wake " +
                "On LAN or Wake On Wireless LAN (WLAN) protocol (see [Wake On LAN])." +
                "\n" +
                "This cluster would be supported on IP devices that have a low power mode AND support the ability to " +
                "be woken up using the Wake on LAN or Wake on WLAN protocol. This cluster provides the device MAC " +
                "address which is a required input to the Wake on LAN protocol. Besides the MAC address, this " +
                "cluster provides an optional link-local IPv6 address which is useful to support \"Wake on Direct " +
                "Packet\" used by some Ethernet and Wi-Fi devices." +
                "\n" +
                "Acting on the MAC address or link-local IPv6 address information does require the caller to be in " +
                "the same broadcast domain as the destination. To wake the destination up, the caller sends a " +
                "multicast-based magic UDP packet that contains destination’s MAC address in the UDP payload to " +
                "FF02::1, the IPv6 all-nodes link-local multicast group address. If the optional link-local address " +
                "is provided by the destination through this cluster, the caller also sends the magic UDP packet in " +
                "unicast to that link-local address. This unicast-based method is particularly useful for Wi-Fi " +
                "devices, since due to lack of MAC layer retransmission mechanism, multicast over Wi-Fi is not as " +
                "reliable as unicast. If a device provides the link-local address in this cluster, its Ethernet " +
                "controller or Wi-Fi radio shall respond to the IPv6 neighbor solicitation message for the " +
                "link-local address without the need to wake host CPU up. In order to receive the magic or neighbor " +
                "solicitation packets in multicast, the Wi-Fi devices must support Group Temporal Key (GTK) rekey " +
                "operation in low power mode." +
                "\n" +
                "Most devices automatically enter low power mode based upon inactivity." +
                "\n" +
                "The cluster server for Wake on LAN or Wake on WLAN is implemented by a device that supports the " +
                "Wake on LAN/WLAN protocol, such as a TV, Set-top Box, or Smart Speaker.",

            xref: { document: "cluster", section: "1.11" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "MacAddress", id: 0x0, type: "hwadr", access: "R V", conformance: "O", constraint: "desc",
                    quality: "F",
                    details: "This attribute shall indicate the current MAC address of the device. Only 48-bit MAC Addresses " +
                        "shall be used for this attribute as required by the Wake on LAN protocol.",
                    xref: { document: "cluster", section: "1.11.4.1" }
                }),

                Attribute({
                    name: "LinkLocalAddress", id: 0x1, type: "ipv6adr", access: "R V", conformance: "O",
                    constraint: "desc", quality: "F",

                    details: "This attribute shall indicate the current link-local address of the device. Only 128-bit IPv6 link- " +
                        "local addresses shall be used for this attribute." +
                        "\n" +
                        "NOTE" +
                        "\n" +
                        "Some companies may consider MAC Address to be protected data subject to PII handling considerations " +
                        "and will therefore choose not to include it or read it. The MAC Address can often be determined " +
                        "using ARP in IPv4 or NDP in IPv6.",

                    xref: { document: "cluster", section: "1.11.4.2" }
                })
            ]
        }),

        Cluster({
            name: "Switch", id: 0x3b, classification: "application",

            details: "This cluster exposes interactions with a switch device, for the purpose of using those interactions " +
                "by other devices." +
                "\n" +
                "Two types of switch devices are supported: latching switch (e.g. rocker switch) and momentary " +
                "switch (e.g. push button), distinguished with their feature flags." +
                "\n" +
                "Interactions with the switch device are exposed as attributes (for the latching switch) and as " +
                "events (for both types of switches)." +
                "\n" +
                "An interested client may subscribe to these attributes/events and thus be informed of the " +
                "interactions, and can perform actions based on this, for example by sending commands to perform an " +
                "action such as controlling a light or a window shade.",

            xref: { document: "cluster", section: "1.12" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.12.4" },

                    children: [
                        Field({
                            name: "LS", conformance: "O.a", constraint: "0", description: "LatchingSwitch",
                            details: "Switch is latching"
                        }),
                        Field({
                            name: "MS", conformance: "O.a", constraint: "1", description: "MomentarySwitch",
                            details: "Switch is momentary"
                        }),
                        Field({
                            name: "MSR", conformance: "[MS]", constraint: "2", description: "MomentarySwitchRelease",
                            details: "Switch supports release"
                        }),
                        Field({
                            name: "MSL", conformance: "[MS & MSR]", constraint: "3", description: "MomentarySwitchLongPress",
                            details: "Switch supports long press"
                        }),
                        Field({
                            name: "MSM", conformance: "[MS & MSR]", constraint: "4", description: "MomentarySwitchMultiPress",
                            details: "Switch supports multi-press"
                        })
                    ]
                }),

                Attribute({
                    name: "NumberOfPositions", id: 0x0, type: "uint8", conformance: "M", constraint: "min 2",
                    default: 2, quality: "F",
                    details: "This attribute shall indicate the maximum number of positions the switch has. Any kind of switch " +
                        "has a minimum of 2 positions. Also see Multi Position Details for the case NumberOfPositions>2.",
                    xref: { document: "cluster", section: "1.12.5.1" }
                }),

                Attribute({
                    name: "CurrentPosition", id: 0x1, type: "uint8", conformance: "M",
                    constraint: "0 to numberOfPositions1", default: 0, quality: "N",
                    details: "This attribute shall indicate the position of the switch. The valid range is zero to " +
                        "NumberOfPositions-1. CurrentPosition value 0 shall be assigned to the default position of the " +
                        "switch: for example the \"open\" state of a rocker switch, or the \"idle\" state of a push button " +
                        "switch.",
                    xref: { document: "cluster", section: "1.12.5.2" }
                }),

                Attribute({
                    name: "MultiPressMax", id: 0x2, type: "uint8", conformance: "MSM", constraint: "min 2", default: 2,
                    quality: "F",
                    details: "This attribute shall indicate how many consecutive presses can be detected and reported by a " +
                        "momentary switch which supports multi-press (e.g. it will report the value 3 if it can detect " +
                        "single press, double press and triple press, but not quad press and beyond).",
                    xref: { document: "cluster", section: "1.12.5.3" }
                }),

                Event({
                    name: "SwitchLatched", id: 0x0, access: "V", conformance: "LS", priority: "info",
                    details: "This event shall be generated, when the latching switch is moved to a new position. It may have " +
                        "been delayed by debouncing within the switch.",
                    xref: { document: "cluster", section: "1.12.6.1" },

                    children: [Field({
                        name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                        constraint: "0 to numberOfPositions1",
                        details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. after the move.",
                        xref: { document: "cluster", section: "1.12.6.1.1" }
                    })]
                }),

                Event({
                    name: "InitialPress", id: 0x1, access: "V", conformance: "MS", priority: "info",
                    details: "This event shall be generated, when the momentary switch starts to be pressed (after debouncing).",
                    xref: { document: "cluster", section: "1.12.6.2" },

                    children: [Field({
                        name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                        constraint: "0 to numberOfPositions1",
                        details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
                        xref: { document: "cluster", section: "1.12.6.2.1" }
                    })]
                }),

                Event({
                    name: "LongPress", id: 0x2, access: "V", conformance: "MSL", priority: "info",
                    details: "This event shall be generated, when the momentary switch has been pressed for a \"long\" time (this " +
                        "time interval is manufacturer determined (e.g. since it depends on the switch physics)).",
                    xref: { document: "cluster", section: "1.12.6.3" },

                    children: [Field({
                        name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                        constraint: "0 to numberOfPositions1",
                        details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
                        xref: { document: "cluster", section: "1.12.6.3.1" }
                    })]
                }),

                Event({
                    name: "ShortRelease", id: 0x3, access: "V", conformance: "MSR", priority: "info",

                    details: "This event shall be generated, when the momentary switch has been released (after debouncing)." +
                        "\n" +
                        "  • If the server supports the Momentary Switch LongPress (MSL) feature, this event shall be " +
                        "    generated when the switch is released if no LongPress event had been generated since the " +
                        "    previous InitialPress event." +
                        "\n" +
                        "  • If the server does not support the Momentary Switch LongPress (MSL) feature, this event shall " +
                        "    be generated when the switch is released - even when the switch was pressed for a long time." +
                        "\n" +
                        "  • Also see Section 1.12.7, “Sequence of generated events”.",

                    xref: { document: "cluster", section: "1.12.6.4" },

                    children: [Field({
                        name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                        constraint: "0 to numberOfPositions1",
                        details: "This field shall indicate the previous value of the CurrentPosition attribute, i.e. just prior to " +
                            "release.",
                        xref: { document: "cluster", section: "1.12.6.4.1" }
                    })]
                }),

                Event({
                    name: "LongRelease", id: 0x4, access: "V", conformance: "MSL", priority: "info",
                    details: "This event shall be generated, when the momentary switch has been released (after debouncing) and " +
                        "after having been pressed for a long time, i.e. this event shall be generated when the switch is " +
                        "released if a LongPress event has been generated since the previous InitialPress event. Also see " +
                        "Section 1.12.7, “Sequence of generated events”.",
                    xref: { document: "cluster", section: "1.12.6.5" },

                    children: [Field({
                        name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                        constraint: "0 to numberOfPositions1",
                        details: "This field shall indicate the previous value of the CurrentPosition attribute, i.e. just prior to " +
                            "release.",
                        xref: { document: "cluster", section: "1.12.6.5.1" }
                    })]
                }),

                Event({
                    name: "MultiPressOngoing", id: 0x5, access: "V", conformance: "MSM", priority: "info",
                    details: "This event shall be generated to indicate how many times the momentary switch has been pressed in a " +
                        "multi-press sequence, during that sequence. See Multi Press Details below.",
                    xref: { document: "cluster", section: "1.12.6.6" },

                    children: [
                        Field({
                            name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to numberOfPositions1",
                            details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
                            xref: { document: "cluster", section: "1.12.6.6.1" }
                        }),

                        Field({
                            name: "CurrentNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
                            constraint: "2 to multiPressMax",

                            details: "This field shall contain:" +
                                "\n" +
                                "  • a value of 2 when the second press of a multi-press sequence has been detected," +
                                "\n" +
                                "  • a value of 3 when the third press of a multi-press sequence has been detected," +
                                "\n" +
                                "  • a value of N when the Nth press of a multi-press sequence has been detected.",

                            xref: { document: "cluster", section: "1.12.6.6.2" }
                        })
                    ]
                }),

                Event({
                    name: "MultiPressComplete", id: 0x6, access: "V", conformance: "MSM", priority: "info",

                    details: "This event shall be generated to indicate how many times the momentary switch has been pressed in a " +
                        "multi-press sequence, after it has been detected that the sequence has ended. See Multi Press " +
                        "Details." +
                        "\n" +
                        "The PreviousPosition field shall indicate the previous value of the CurrentPosition attribute, i.e. " +
                        "just prior to release." +
                        "\n" +
                        "The TotalNumberOfPressesCounted field shall contain:" +
                        "\n" +
                        "  • a value of 1 when there was one press in a multi-press sequence (and the sequence has ended)," +
                        "\n" +
                        "    i.e. there was no double press (or more)," +
                        "\n" +
                        "  • a value of 2 when there were exactly two presses in a multi-press sequence (and the sequence " +
                        "    has ended)," +
                        "\n" +
                        "  • a value of 3 when there were exactly three presses in a multi-press sequence (and the sequence " +
                        "    has ended)," +
                        "\n" +
                        "  • a value of N when there were exactly N presses in a multi-press sequence (and the sequence has " +
                        "    ended).",

                    xref: { document: "cluster", section: "1.12.6.7" },

                    children: [
                        Field({
                            name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                            constraint: "0 to numberOfPositions1"
                        }),
                        Field({
                            name: "TotalNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
                            constraint: "1 to multiPressMax"
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "OperationalState", id: 0x60, classification: "application",

            details: "This cluster supports remotely monitoring and, where supported, changing the operational state of " +
                "any device where a state machine is a part of the operation." +
                "\n" +
                "This cluster defines common states, scoped to this cluster (e.g. Stopped, Running, Paused, Error). " +
                "A derived cluster specification may define more states scoped to the derivation. Manufacturer " +
                "specific states are supported in this cluster and any derived clusters thereof. When defined in a " +
                "derived instance, such states are scoped to the derivation." +
                "\n" +
                "Actual state transitions are dependent on both the implementation, and the requirements that may " +
                "additionally be imposed by a derived cluster." +
                "\n" +
                "An implementation that supports remotely starting its operation can make use of this cluster’s " +
                "Start command to do so. A device that supports remote pause or stop of its currently selected " +
                "operation can similarly make use of this cluster’s Pause and Stop commands to do so. The ability to " +
                "remotely pause or stop is independent of how the operation was started (for example, an operation " +
                "started by using a manual button press can be stopped by using a Stop command if the device " +
                "supports remotely stopping the operation)." +
                "\n" +
                "Additionally, this cluster provides events for monitoring the operational state of the device.",

            xref: { document: "cluster", section: "1.13" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "PhaseList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    constraint: "max 32[max 64]", quality: "X",

                    details: "This attribute shall indicate a list of names of different phases that the device can go through " +
                        "for the selected function or mode. The list may not be in sequence order. For example in a washing " +
                        "machine this could include items such as \"pre-soak\", \"rinse\", and \"spin\". These phases are " +
                        "manufacturer specific and may change when a different function or mode is selected." +
                        "\n" +
                        "A null value indicates that the device does not present phases during its operation. When this " +
                        "attribute’s value is null, the CurrentPhase attribute shall also be set to null.",

                    xref: { document: "cluster", section: "1.13.5.1" },
                    children: [Field({ name: "entry", type: "string" })]
                }),

                Attribute({
                    name: "CurrentPhase", id: 0x1, type: "uint8", access: "R V", conformance: "M", constraint: "desc",
                    quality: "X",

                    details: "This attribute represents the current phase of operation being performed by the server. This shall " +
                        "be the positional index representing the value from the set provided in the PhaseList Attribute," +
                        "\n" +
                        "where the first item in that list is an index of 0. Thus, this attribute shall have a maximum value " +
                        "that is \"length(PhaseList) - 1\"." +
                        "\n" +
                        "This attribute shall be null if the PhaseList attribute is null or if the PhaseList attribute is an " +
                        "empty list.",

                    xref: { document: "cluster", section: "1.13.5.2" }
                }),

                Attribute({
                    name: "CountdownTime", id: 0x2, type: "elapsed-s", access: "R V", conformance: "O",
                    constraint: "max 259200", default: "null", quality: "X C",

                    details: "This attribute shall represent the estimated time left before the operation is completed, in " +
                        "seconds. Changes to this value shall NOT be reported in a subscription (note the C Quality). A " +
                        "Client implementation may periodically poll this value to ensure alignment of any local rendering " +
                        "of the CountdownTime with the device provided value." +
                        "\n" +
                        "A value of 0 means that the operation has completed." +
                        "\n" +
                        "When this attribute is null, that represents that there is no time currently defined until " +
                        "operation completion. This may happen, for example, because no operation is in progress or because " +
                        "the completion time is unknown.",

                    xref: { document: "cluster", section: "1.13.5.3" }
                }),

                Attribute({
                    name: "OperationalStateList", id: 0x3, type: "list", access: "R V", conformance: "M",
                    constraint: "desc",

                    details: "This attribute describes the set of possible operational states that the device exposes. An " +
                        "operational state is a fundamental device state such as Running or Error. Details of the phase of a " +
                        "device when, for example, in a state of Running are provided by the CurrentPhase attribute." +
                        "\n" +
                        "All devices shall, at a minimum, expose the set of states matching the commands that are also " +
                        "supported by the cluster instance, in addition to Error. The set of possible device states are " +
                        "defined in the OperationalStateEnum. A device type requiring implementation of this cluster shall " +
                        "define the set of states that are applicable to that specific device type.",

                    xref: { document: "cluster", section: "1.13.5.4" },
                    children: [Field({ name: "entry", type: "OperationalStateStruct" })]
                }),

                Attribute({
                    name: "OperationalState", id: 0x4, type: "OperationalStateEnum", access: "R V", conformance: "M",
                    details: "This attribute specifies the current operational state of a device. This shall be populated with a " +
                        "valid OperationalStateID from the set of values in the OperationalStateList Attribute.",
                    xref: { document: "cluster", section: "1.13.5.5" }
                }),

                Attribute({
                    name: "OperationalError", id: 0x5, type: "ErrorStateStruct", access: "R V", conformance: "M",
                    constraint: "desc",
                    details: "This attribute shall specify the details of any current error condition being experienced on the " +
                        "device when the OperationalState attribute is populated with Error. Please see ErrorStateStruct for " +
                        "general requirements on the population of this attribute." +
                        "\n" +
                        "When there is no error detected, this shall have an ErrorStateID of NoError.",
                    xref: { document: "cluster", section: "1.13.5.6" }
                }),

                Event({
                    name: "OperationalError", id: 0x0, access: "V", conformance: "M", priority: "critical",
                    details: "This event is generated when a reportable error condition is detected. A device that generates this " +
                        "event shall also set the OperationalState attribute to Error, indicating an error condition." +
                        "\n" +
                        "This event shall contain the following fields:",
                    xref: { document: "cluster", section: "1.13.7.1" },
                    children: [Field({ name: "ErrorState", id: 0x0, type: "ErrorStateStruct", conformance: "M" })]
                }),

                Event({
                    name: "OperationCompletion", id: 0x1, access: "V", conformance: "O", priority: "info",
                    details: "This event is generated when the overall operation ends, successfully or otherwise. For example, " +
                        "the completion of a cleaning operation in a Robot Vacuum Cleaner, or the completion of a wash cycle " +
                        "in a Washing Machine." +
                        "\n" +
                        "This event shall contain the following fields:",
                    xref: { document: "cluster", section: "1.13.7.2" },

                    children: [
                        Field({
                            name: "CompletionErrorCode", id: 0x0, type: "enum8", conformance: "M",
                            details: "This field provides an indication of the state at the end of the operation. This field shall have a " +
                                "value from the ErrorState set. A value of NoError indicates success, that is, no error has been " +
                                "detected.",
                            xref: { document: "cluster", section: "1.13.7.2.1" }
                        }),

                        Field({
                            name: "TotalOperationalTime", id: 0x1, type: "elapsed-s", conformance: "O", quality: "X",
                            details: "The total operational time, in seconds, from when the operation was started via an initial Start " +
                                "command or manual action, until the operation completed. This includes any time spent while paused. " +
                                "There may be cases whereby the total operational time exceeds the maximum value that can be " +
                                "conveyed by this attribute, in such instances, this attribute shall be populated with null.",
                            xref: { document: "cluster", section: "1.13.7.2.2" }
                        }),

                        Field({
                            name: "PausedTime", id: 0x2, type: "elapsed-s", conformance: "O", quality: "X",
                            details: "The total time spent in the paused state, in seconds. There may be cases whereby the total paused " +
                                "time exceeds the maximum value that can be conveyed by this attribute, in such instances, this " +
                                "attribute shall be populated with null.",
                            xref: { document: "cluster", section: "1.13.7.2.3" }
                        })
                    ]
                }),

                Command({
                    name: "Pause", id: 0x0, access: "O", conformance: "Resume, O", direction: "request",
                    response: "OperationalCommandResponse",

                    details: "This command shall be supported if the device supports remotely pausing the operation. If this " +
                        "command is supported, the Resume command shall also be supported." +
                        "\n" +
                        "On receipt of this command, the device shall pause its operation if it is possible based on the " +
                        "current function of the server. For example, if it is at a point where it is safe to do so and/or " +
                        "permitted, but can be restarted from the point at which pause occurred." +
                        "\n" +
                        "If this command is received when already in the Paused state the device shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of NoError but take no further action." +
                        "\n" +
                        "A device that receives this command in any state other than Paused or Running shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState but take no " +
                        "further action." +
                        "\n" +
                        "A device that is unable to honor the Pause command for whatever reason shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState but take no " +
                        "further action." +
                        "\n" +
                        "Otherwise, on success:" +
                        "\n" +
                        "  • The OperationalState attribute shall be set to Paused." +
                        "\n" +
                        "  • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of " +
                        "    NoError.",

                    xref: { document: "cluster", section: "1.13.6.1" }
                }),

                Command({
                    name: "Stop", id: 0x1, access: "O", conformance: "Start, O", direction: "request",
                    response: "OperationalCommandResponse",

                    details: "This command shall be supported if the device supports remotely stopping the operation." +
                        "\n" +
                        "On receipt of this command, the device shall stop its operation if it is at a position where it is " +
                        "safe to do so and/or permitted. Restart of the device following the receipt of the Stop command " +
                        "shall require attended operation unless remote start is allowed by the device type and any " +
                        "jurisdiction governing remote operation of the device." +
                        "\n" +
                        "If this command is received when already in the Stopped state the device shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of NoError but take no further action." +
                        "\n" +
                        "A device that is unable to honor the Stop command for whatever reason shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState but take no " +
                        "further action." +
                        "\n" +
                        "Otherwise, on success:" +
                        "\n" +
                        "  • The OperationalState attribute shall be set to Stopped." +
                        "\n" +
                        "  • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of " +
                        "    NoError.",

                    xref: { document: "cluster", section: "1.13.6.2" }
                }),

                Command({
                    name: "Start", id: 0x2, access: "O", conformance: "O", direction: "request",
                    response: "OperationalCommandResponse",

                    details: "This command shall be supported if the device supports remotely starting the operation. If this " +
                        "command is supported, the 'Stop command shall also be supported." +
                        "\n" +
                        "On receipt of this command, the device shall start its operation if it is safe to do so and the " +
                        "device is in an operational state from which it can be started. There may be either regulatory or " +
                        "manufacturer-imposed safety and security requirements that first necessitate some specific action " +
                        "at the device before a Start command can be honored. In such instances, a device shall respond with " +
                        "a status code of CommandInvalidInState if a Start command is received prior to the required on- " +
                        "device action." +
                        "\n" +
                        "If this command is received when already in the Running state the device shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of NoError but take no further action." +
                        "\n" +
                        "A device that is unable to honor the Start command for whatever reason shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of UnableToStartOrResume but take no " +
                        "further action." +
                        "\n" +
                        "Otherwise, on success:" +
                        "\n" +
                        "  • The OperationalState attribute shall be set to Running." +
                        "\n" +
                        "  • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of " +
                        "    NoError.",

                    xref: { document: "cluster", section: "1.13.6.3" }
                }),

                Command({
                    name: "Resume", id: 0x3, access: "O", conformance: "Pause, O", direction: "request",
                    response: "OperationalCommandResponse",

                    details: "This command shall be supported if the device supports remotely resuming the operation. If this " +
                        "command is supported, the Pause command shall also be supported." +
                        "\n" +
                        "On receipt of this command, the device shall resume its operation from the point it was at when it " +
                        "received the Pause command, or from the point when it was paused by means outside of this cluster " +
                        "(for example by manual button press)." +
                        "\n" +
                        "If this command is received when already in the Running state the device shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of NoError but take no further action." +
                        "\n" +
                        "A device that receives this command in any state other than Paused or Running shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState but take no " +
                        "further action." +
                        "\n" +
                        "A device that is unable to honor the Resume command for any other reason shall respond with an " +
                        "OperationalCommandResponse command with an ErrorStateID of UnableToStartOrResume but take no " +
                        "further action." +
                        "\n" +
                        "Otherwise, on success:" +
                        "\n" +
                        "  • The OperationalState attribute shall be set to Running." +
                        "\n" +
                        "  • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of " +
                        "    NoError." +
                        "\n" +
                        "### ‌1.13.6.5. OperationalCommandResponse Command" +
                        "\n" +
                        "This command shall be supported by an implementation if any of the other commands defined by this " +
                        "cluster are supported (i.e. listed in the AcceptedCommandList global attribute). This command shall " +
                        "also be supported by an implementation of a derived cluster as a response to any commands that may " +
                        "be additionally defined therein." +
                        "\n" +
                        "This command shall be generated in response to any of the Start, Stop, Pause, or Resume commands.",

                    xref: { document: "cluster", section: "1.13.6.4" },
                    children: [
                        Field({ name: "CommandResponseState", id: 0x0, type: "ErrorStateStruct", conformance: "M" })
                    ]
                }),

                Command({
                    name: "OperationalCommandResponse", id: 0x4, access: "O",
                    conformance: "Pause | Stop | Start | Resume", direction: "request",
                    xref: { document: "cluster", section: "1.13.6" }
                }),

                Datatype({
                    name: "OperationalStateLabel Field", type: "struct",
                    details: "This field shall be present if the OperationalStateID is from the set reserved for Manufacturer " +
                        "Specific States, otherwise it shall NOT be present. If present, this shall contain a human-readable " +
                        "description of the operational state." +
                        "\n" +
                        "### ‌1.13.4.3. ErrorStateStruct Type",
                    xref: { document: "cluster", section: "1.13.4.2.2" },

                    children: [
                        Field({ name: "ErrorStateID", id: 0x0, type: "enum8", conformance: "M", default: 0 }),
                        Field({
                            name: "ErrorStateLabel", id: 0x1, type: "string", conformance: "desc", constraint: "max 64",
                            default: ""
                        }),
                        Field({
                            name: "ErrorStateDetails", id: 0x2, type: "string", conformance: "O", constraint: "max 64",
                            default: ""
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "AlarmBase", classification: "application",
            details: "This cluster is a base cluster from which clusters for particular alarms for a device type can be " +
                "derived. Each derivation shall define the values for the AlarmMap data type used in this cluster. " +
                "Each derivation shall define which alarms are latched.",
            xref: { document: "cluster", section: "1.14" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "1.14.4" },
                    children: [Field({
                        name: "RESET", constraint: "0", description: "Reset",
                        details: "This feature indicates that alarms can be reset via the Reset command.",
                        xref: { document: "cluster", section: "1.14.4.1" }
                    })]
                }),

                Attribute({
                    name: "Mask", id: 0x0, type: "AlarmMap", access: "R V", conformance: "M", default: "0",
                    details: "This attribute shall indicate a bitmap where each bit set in the Mask attribute corresponds to an " +
                        "alarm that shall be enabled.",
                    xref: { document: "cluster", section: "1.14.6.1" }
                }),

                Attribute({
                    name: "Latch", id: 0x1, type: "AlarmMap", access: "R V", conformance: "RESET", default: "0",
                    quality: "F",
                    details: "This attribute shall indicate a bitmap where each bit set in the Latch attribute shall indicate " +
                        "that the corresponding alarm will be latched when set, and will not reset to inactive when the " +
                        "underlying condition which caused the alarm is no longer present, and so requires an explicit reset " +
                        "using the Reset command.",
                    xref: { document: "cluster", section: "1.14.6.2" }
                }),

                Attribute({
                    name: "State", id: 0x2, type: "AlarmMap", access: "R V", conformance: "M", default: "0",
                    details: "This attribute shall indicate a bitmap where each bit shall represent the state of an alarm. The " +
                        "value of true means the alarm is active, otherwise the alarm is inactive.",
                    xref: { document: "cluster", section: "1.14.6.3" }
                }),

                Attribute({
                    name: "Supported", id: 0x3, type: "AlarmMap", access: "R V", conformance: "M", default: "0",
                    quality: "F",
                    details: "This attribute shall indicate a bitmap where each bit shall represent whether or not an alarm is " +
                        "supported. The value of true means the alarm is supported, otherwise the alarm is not supported." +
                        "\n" +
                        "If an alarm is not supported, the corresponding bit in Mask, Latch, and State shall be false.",
                    xref: { document: "cluster", section: "1.14.6.4" }
                }),

                Event({
                    name: "Notify", id: 0x0, access: "V", conformance: "M", priority: "info",
                    details: "This event shall be generated when one or more alarms change state, and shall have these fields:",
                    xref: { document: "cluster", section: "1.14.8.1" },

                    children: [
                        Field({
                            name: "Active", id: 0x1, type: "AlarmMap", conformance: "M", default: "0",
                            details: "This field shall indicate those alarms that have become active.",
                            xref: { document: "cluster", section: "1.14.8.1.1" }
                        }),
                        Field({
                            name: "Inactive", id: 0x1, type: "AlarmMap", conformance: "M", default: "0",
                            details: "This field shall indicate those alarms that have become inactive.",
                            xref: { document: "cluster", section: "1.14.8.1.2" }
                        }),

                        Field({
                            name: "State", id: 0x2, type: "AlarmMap", conformance: "M", default: "0",
                            details: "This field shall be a copy of the new State attribute value that resulted in the event being " +
                                "generated. That is, this field shall have all the bits in Active set and shall NOT have any of the " +
                                "bits in Inactive set.",
                            xref: { document: "cluster", section: "1.14.8.1.4" }
                        }),

                        Field({
                            name: "Mask", id: 0x3, type: "AlarmMap", conformance: "M", default: "0",
                            details: "This field shall be a copy of the Mask attribute when this event was generated.",
                            xref: { document: "cluster", section: "1.14.8.1.3" }
                        })
                    ]
                }),

                Command({
                    name: "Reset", id: 0x0, access: "O", conformance: "RESET", direction: "request", response: "status",
                    details: "This command resets active and latched alarms (if possible). Any generated Notify event shall " +
                        "contain fields that represent the state of the server after the command has been processed.",
                    xref: { document: "cluster", section: "1.14.7.1" },

                    children: [Field({
                        name: "Alarms", id: 0x0, type: "AlarmMap", conformance: "M", default: "0",
                        details: "This field shall indicate a bitmap where each bit set in this field corresponds to an alarm that " +
                            "shall be reset to inactive in the State attribute unless the alarm definition requires manual " +
                            "intervention. If the alarms indicated are successfully reset, the response status code shall be " +
                            "SUCCESS, otherwise, the response status code shall be FAILURE.",
                        xref: { document: "cluster", section: "1.14.7.1.1" }
                    })]
                }),

                Command({
                    name: "ModifyEnabledAlarms", id: 0x1, access: "O", conformance: "O", direction: "request",
                    response: "status",
                    details: "This command allows a client to request that an alarm be enabled or suppressed at the server.",
                    xref: { document: "cluster", section: "1.14.7.2" },

                    children: [Field({
                        name: "Mask", id: 0x0, type: "AlarmMap", conformance: "M", default: "0",

                        details: "This field shall indicate a bitmap where each bit set in the this field corresponds to an alarm " +
                            "that SHOULD be enabled or suppressed. A value of 1 shall indicate that the alarm SHOULD be enabled " +
                            "while a value of 0 shall indicate that the alarm SHOULD be suppressed." +
                            "\n" +
                            "A server that receives this command with a Mask that includes bits that are set for unknown alarms " +
                            "shall respond with a status code of INVALID_COMMAND." +
                            "\n" +
                            "A server that receives this command with a Mask that includes bits that are set for alarms which " +
                            "are not supported, as indicated in the Supported attribute, shall respond with a status code of " +
                            "INVALID_COMMAND." +
                            "\n" +
                            "A server that is unable to enable a currently suppressed alarm, or is unable to suppress a " +
                            "currently enabled alarm shall respond with a status code of FAILURE; otherwise the server shall " +
                            "respond with a status code of SUCCESS." +
                            "\n" +
                            "On a SUCCESS case, the server shall also change the value of the Mask attribute to the value of the " +
                            "Mask field from this command. After that the server shall also update the value of its State " +
                            "attribute to reflect the status of the new alarm set as indicated by the new value of the Mask " +
                            "attribute.",

                        xref: { document: "cluster", section: "1.14.7.2.1" }
                    })]
                })
            ]
        }),

        Cluster({
            name: "IlluminanceMeasurement", id: 0x400, classification: "application",
            details: "The Illuminance Measurement cluster provides an interface to illuminance measurement functionality, " +
                "including configuration and provision of notifications of illuminance measurements.",
            xref: { document: "cluster", section: "2.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

                Attribute({
                    name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0, minMeasuredValue to maxMeasuredValue", default: 0, quality: "X P",

                    details: "The MeasuredValue attribute represents the illuminance in Lux (symbol lx) as follows:" +
                        "\n" +
                        "  • MeasuredValue = 10,000 x log10(illuminance) + 1," +
                        "\n" +
                        "where 1 lx <= illuminance <= 3.576 Mlx, corresponding to a MeasuredValue in the range 1 to 0xFFFE. " +
                        "The MeasuredValue attribute can take the following values:" +
                        "\n" +
                        "  • 0 indicates a value of illuminance that is too low to be measured," +
                        "\n" +
                        "  • MinMeasuredValue <= MeasuredValue <= MaxMeasuredValue under normal circumstances," +
                        "\n" +
                        "  • null indicates that the illuminance measurement is invalid." +
                        "\n" +
                        "The MeasuredValue attribute is updated continuously as new measurements are made.",

                    xref: { document: "cluster", section: "2.2.5.1" }
                }),

                Attribute({
                    name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V", conformance: "M",
                    constraint: "1 to maxMeasuredValue1", quality: "X",
                    details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. A " +
                        "value of null indicates that this attribute is not defined. See Measured Value for more details.",
                    xref: { document: "cluster", section: "2.2.5.2" }
                }),

                Attribute({
                    name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V", conformance: "M",
                    constraint: "minMeasuredValue1 to 65534", quality: "X",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. A " +
                        "value of null indicates that this attribute is not defined. See Measured Value for more details.",
                    xref: { document: "cluster", section: "2.2.5.3" }
                }),

                Attribute({
                    name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048",
                    details: "See Measured Value.",
                    xref: { document: "cluster", section: "2.2.5.4" }
                }),

                Attribute({
                    name: "LightSensorType", id: 0x4, type: "LightSensorTypeEnum", access: "R V", conformance: "O",
                    default: "null", quality: "X",
                    details: "The LightSensorType attribute specifies the electronic type of the light sensor. This attribute " +
                        "shall be set to one of the non-reserved values listed in LightSensorTypeEnum or null in case the " +
                        "sensor type is unknown.",
                    xref: { document: "cluster", section: "2.2.5.5" }
                })
            ]
        }),

        Cluster({
            name: "TemperatureMeasurement", id: 0x402, classification: "application",
            details: "This cluster provides an interface to temperature measurement functionality, including " +
                "configuration and provision of notifications of temperature measurements.",
            xref: { document: "cluster", section: "2.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

                Attribute({
                    name: "MeasuredValue", id: 0x0, type: "temperature", access: "R V", conformance: "M",
                    constraint: "minMeasuredValue to maxMeasuredValue", quality: "X P",
                    details: "This attribute shall indicate the measured temperature. The null value indicates that the " +
                        "temperature is unknown.",
                    xref: { document: "cluster", section: "2.3.4.1" }
                }),

                Attribute({
                    name: "MinMeasuredValue", id: 0x1, type: "temperature", access: "R V", conformance: "M",
                    constraint: "-27315 to maxMeasuredValue1", quality: "X",
                    details: "This attribute shall indicate the minimum value of MeasuredValue that is capable of being measured. " +
                        "See Measured Value for more details." +
                        "\n" +
                        "The null value indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.3.4.2" }
                }),

                Attribute({
                    name: "MaxMeasuredValue", id: 0x2, type: "temperature", access: "R V", conformance: "M",
                    constraint: "minMeasuredValue1 to 32767", quality: "X",
                    details: "This attribute indicates the maximum value of MeasuredValue that is capable of being measured. See " +
                        "Measured Value for more details." +
                        "\n" +
                        "The null value indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.3.4.3" }
                }),

                Attribute({
                    name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048", default: 0,
                    details: "See Measured Value.",
                    xref: { document: "cluster", section: "2.3.4.4" }
                })
            ]
        }),

        Cluster({
            name: "PressureMeasurement", id: 0x403, classification: "application",
            details: "This cluster provides an interface to pressure measurement functionality, including configuration " +
                "and provision of notifications of pressure measurements.",
            xref: { document: "cluster", section: "2.4" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "2.4.4" },
                    children: [Field({
                        name: "EXT", conformance: "O", constraint: "0", description: "Extended",
                        details: "Extended range and resolution"
                    })]
                }),

                Attribute({
                    name: "MeasuredValue", id: 0x0, type: "int16", access: "R V", conformance: "M",
                    constraint: "minMeasuredValue to maxMeasuredValue", quality: "X P",
                    details: "This attribute shall represent the pressure in kPa as follows:" +
                        "\n" +
                        "MeasuredValue = 10 x Pressure [kPa]" +
                        "\n" +
                        "The null value indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.4.5.1" }
                }),

                Attribute({
                    name: "MinMeasuredValue", id: 0x1, type: "int16", access: "R V", conformance: "M",
                    constraint: "-32767 to maxMeasuredValue1", quality: "X",
                    details: "This attribute shall indicate the minimum value of MeasuredValue that can be measured. See Measured " +
                        "Value for more details." +
                        "\n" +
                        "The null value indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.4.5.2" }
                }),

                Attribute({
                    name: "MaxMeasuredValue", id: 0x2, type: "int16", access: "R V", conformance: "M",
                    constraint: "minMeasuredValue1 to 32767", quality: "X",
                    details: "This attribute shall indicate the maximum value of MeasuredValue that can be measured. See Measured " +
                        "Value for more details." +
                        "\n" +
                        "The null value indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.4.5.3" }
                }),

                Attribute({
                    name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048", default: 0,

                    details: "See Measured Value." +
                        "\n" +
                        "### ‌2.4.5.5. ScaledValue Attribute" +
                        "\n" +
                        "This attribute shall represent the pressure in Pascals as follows:" +
                        "\n" +
                        "ScaledValue = 10Scale x Pressure [Pa]" +
                        "\n" +
                        "The null value indicates that the value is not available.",

                    xref: { document: "cluster", section: "2.4.5.4" }
                }),

                Attribute({
                    name: "ScaledValue", id: 0x10, type: "int16", access: "R V", conformance: "EXT",
                    constraint: "minScaledValue to maxScaledValue", default: 0, quality: "X",
                    xref: { document: "cluster", section: "2.4.5" }
                }),

                Attribute({
                    name: "MinScaledValue", id: 0x11, type: "int16", access: "R V", conformance: "EXT",
                    constraint: "-32767 to maxScaledValue1", default: 0, quality: "X",
                    details: "This attribute shall indicate the minimum value of ScaledValue that can be measured. The null value " +
                        "indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.4.5.6" }
                }),

                Attribute({
                    name: "MaxScaledValue", id: 0x12, type: "int16", access: "R V", conformance: "EXT",
                    constraint: "minScaledValue1 to 32767", default: 0, quality: "X",
                    details: "This attribute shall indicate the maximum value of ScaledValue that can be measured. The null value " +
                        "indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.4.5.7" }
                }),

                Attribute({
                    name: "ScaledTolerance", id: 0x13, type: "uint16", access: "R V", conformance: "[EXT]",
                    constraint: "0 to 2048", default: 0,
                    details: "This attribute shall indicate the magnitude of the possible error that is associated with Scaled" +
                        "\n" +
                        "Value. The true value is located in the range" +
                        "\n" +
                        "(ScaledValue – ScaledTolerance) to (ScaledValue + ScaledTolerance).",
                    xref: { document: "cluster", section: "2.4.5.8" }
                }),

                Attribute({
                    name: "Scale", id: 0x14, type: "int8", access: "R V", conformance: "EXT", constraint: "-127 to 127",
                    default: 0,
                    details: "This attribute shall indicate the base 10 exponent used to obtain ScaledValue (see ScaledValue).",
                    xref: { document: "cluster", section: "2.4.5.9" }
                })
            ]
        }),

        Cluster({
            name: "FlowMeasurement", id: 0x404, classification: "application",
            details: "This cluster provides an interface to flow measurement functionality, including configuration and " +
                "provision of notifications of flow measurements.",
            xref: { document: "cluster", section: "2.5" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

                Attribute({
                    name: "MeasuredValue", id: 0x0, type: "uint16", access: "R V", conformance: "M",
                    constraint: "minMeasuredValue to maxMeasuredValue", default: null, quality: "X P",

                    details: "MeasuredValue represents the flow in m/h as follows:" +
                        "\n" +
                        "MeasuredValue = 10 x Flow" +
                        "\n" +
                        "The null value indicates that the flow measurement is unknown, otherwise the range shall be as " +
                        "described in Measured Value.",

                    xref: { document: "cluster", section: "2.5.4.1" }
                }),

                Attribute({
                    name: "MinMeasuredValue", id: 0x1, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to maxMeasuredValue1", quality: "X",
                    details: "The MinMeasuredValue attribute indicates the minimum value of MeasuredValue that can be measured. " +
                        "See Measured Value for more details." +
                        "\n" +
                        "The null value indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.5.4.2" }
                }),

                Attribute({
                    name: "MaxMeasuredValue", id: 0x2, type: "uint16", access: "R V", conformance: "M",
                    constraint: "minMeasuredValue1 to 65534", quality: "X",
                    details: "The MaxMeasuredValue attribute indicates the maximum value of MeasuredValue that can be measured. " +
                        "See Measured Value for more details." +
                        "\n" +
                        "The null value indicates that the value is not available.",
                    xref: { document: "cluster", section: "2.5.4.3" }
                }),

                Attribute({
                    name: "Tolerance", id: 0x3, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 2048", default: 0,
                    details: "See Measured Value.",
                    xref: { document: "cluster", section: "2.5.4.4" }
                })
            ]
        }),

        Cluster({
            name: "OccupancySensing", id: 0x406, classification: "application",
            details: "The server cluster provides an interface to occupancy sensing functionality, including " +
                "configuration and provision of notifications of occupancy status.",
            xref: { document: "cluster", section: "2.7" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

                Attribute({
                    name: "Occupancy", id: 0x0, type: "OccupancyBitmap", access: "R V", conformance: "M",
                    constraint: "0 to 1", quality: "P",
                    details: "This attribute indicates the sensed (processed) status of occupancy.",
                    xref: { document: "cluster", section: "2.7.5.1" }
                }),

                Attribute({
                    name: "OccupancySensorType", id: 0x1, type: "OccupancySensorTypeEnum", access: "R V",
                    conformance: "M", constraint: "desc",
                    details: "This attribute specifies the type of the occupancy sensor.",
                    xref: { document: "cluster", section: "2.7.5.2" }
                }),

                Attribute({
                    name: "OccupancySensorTypeBitmap", id: 0x2, type: "OccupancySensorTypeBitmap", access: "R V",
                    conformance: "M", constraint: "0 to 7",
                    details: "This attribute specifies the types of the occupancy sensor. Each bit position, if set, indicates " +
                        "the corresponding sensing capability is implemented." +
                        "\n" +
                        "The value of the OccupancySensorType shall be aligned to the value of the OccupancySensorTypeBitmap " +
                        "attribute as defined below.",
                    xref: { document: "cluster", section: "2.7.5.3" }
                }),

                Attribute({
                    name: "PirOccupiedToUnoccupiedDelay", id: 0x10, type: "uint16", access: "RW VM", conformance: "O",
                    default: 0,
                    details: "This attribute specifies the time delay, in seconds, before the PIR sensor changes to its " +
                        "unoccupied state after the last detection of movement in the sensed area.",
                    xref: { document: "cluster", section: "2.7.5.4" }
                }),

                Attribute({
                    name: "PirUnoccupiedToOccupiedDelay", id: 0x11, type: "uint16", access: "RW VM",
                    conformance: "PIRUnoccupiedToOccupiedThreshold, O", default: 0,
                    details: "This attribute specifies the time delay, in seconds, before the PIR sensor changes to its occupied " +
                        "state after the detection of movement in the sensed area. This attribute is mandatory if the " +
                        "PIRUnoccupiedToOccupiedThreshold attribute is implemented.",
                    xref: { document: "cluster", section: "2.7.5.5" }
                }),

                Attribute({
                    name: "PirUnoccupiedToOccupiedThreshold", id: 0x12, type: "uint8", access: "RW VM",
                    conformance: "PIRUnoccupiedToOccupiedDelay, O", constraint: "1 to 254", default: 1,
                    details: "This attribute specifies the number of movement detection events that must occur in the period " +
                        "PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied state. This attribute " +
                        "is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.",
                    xref: { document: "cluster", section: "2.7.5.6" }
                }),

                Attribute({
                    name: "UltrasonicOccupiedToUnoccupiedDelay", id: 0x20, type: "uint16", access: "RW VM",
                    conformance: "O", default: 0,
                    details: "This attribute specifies the time delay, in seconds, before the Ultrasonic sensor changes to its " +
                        "unoccupied state after the last detection of movement in the sensed area.",
                    xref: { document: "cluster", section: "2.7.5.7" }
                }),

                Attribute({
                    name: "UltrasonicUnoccupiedToOccupiedDelay", id: 0x21, type: "uint16", access: "RW VM",
                    conformance: "UltrasonicUnoccupiedToOccupiedThreshold, O", default: 0,
                    details: "This attribute specifies the time delay, in seconds, before the Ultrasonic sensor changes to its " +
                        "occupied state after the detection of movement in the sensed area. This attribute is mandatory if " +
                        "the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.",
                    xref: { document: "cluster", section: "2.7.5.8" }
                }),

                Attribute({
                    name: "UltrasonicUnoccupiedToOccupiedThreshold", id: 0x22, type: "uint8", access: "RW VM",
                    conformance: "UltrasonicUnoccupiedToOccupiedDelay, O", constraint: "1 to 254", default: 1,
                    details: "This attribute specifies the number of movement detection events that must occur in the period " +
                        "UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes to its occupied state. " +
                        "This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedDelay attribute is implemented.",
                    xref: { document: "cluster", section: "2.7.5.9" }
                }),

                Attribute({
                    name: "PhysicalContactOccupiedToUnoccupiedDelay", id: 0x30, type: "uint16", access: "RW VM",
                    conformance: "O", default: 0, quality: "X",
                    details: "This attribute specifies the time delay, in seconds, before the physical contact occupancy sensor " +
                        "changes to its unoccupied state after detecting the unoccupied event. The null value indicates that " +
                        "the sensor does not report occupied to unoccupied transition.",
                    xref: { document: "cluster", section: "2.7.5.10" }
                }),

                Attribute({
                    name: "PhysicalContactUnoccupiedToOccupiedDelay", id: 0x31, type: "uint16", access: "RW VM",
                    conformance: "O", default: 0, quality: "X",
                    details: "This attribute specifies the time delay, in seconds, before the physical contact sensor changes to " +
                        "its occupied state after the detection of the occupied event." +
                        "\n" +
                        "The null value indicates that the sensor does not report unoccupied to occupied transition.",
                    xref: { document: "cluster", section: "2.7.5.11" }
                }),

                Attribute({
                    name: "PhysicalContactUnoccupiedToOccupiedThreshold", id: 0x32, type: "uint8", access: "RW VM",
                    conformance: "PhysicalContactUnoccupiedToOccupiedDelay, O", constraint: "1 to 254", default: 1,
                    details: "This attribute specifies the number of movement detection events that must occur in the period " +
                        "PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied state. This " +
                        "attribute is mandatory if the PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.",
                    xref: { document: "cluster", section: "2.7.5.12" }
                })
            ]
        }),

        Cluster({
            name: "AirQuality", id: 0x5b, classification: "application",
            details: "This cluster provides an interface to air quality classification using distinct levels with " +
                "human-readable labels.",
            xref: { document: "cluster", section: "2.9" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "2.9.4" },

                    children: [
                        Field({
                            name: "FAIR", conformance: "O", constraint: "0", description: "Fair",
                            details: "Cluster supports the Fair air quality level"
                        }),
                        Field({
                            name: "MOD", conformance: "O", constraint: "1", description: "Moderate",
                            details: "Cluster supports the Moderate air quality level"
                        }),
                        Field({
                            name: "VPOOR", conformance: "O", constraint: "2", description: "VeryPoor",
                            details: "Cluster supports the Very poor air quality level"
                        }),
                        Field({
                            name: "XPOOR", conformance: "O", constraint: "3", description: "ExtremelyPoor",
                            details: "Cluster supports the Extremely poor air quality level"
                        })
                    ]
                }),

                Attribute({
                    name: "AirQuality", id: 0x0, type: "AirQualityEnum", access: "R V", conformance: "M",
                    constraint: "desc", default: "0",
                    details: "This attribute shall indicate a value from AirQualityEnum that is indicative of the currently " +
                        "measured air quality.",
                    xref: { document: "cluster", section: "2.9.6.1" }
                })
            ]
        }),

        Cluster({
            name: "SmokeCoAlarm", id: 0x5c, classification: "application",
            details: "This cluster provides an interface for observing and managing the state of smoke and CO alarms.",
            xref: { document: "cluster", section: "2.11" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "2.11.4" },

                    children: [
                        Field({
                            name: "SMOKE", conformance: "O.a+", constraint: "0", description: "SmokeAlarm",
                            details: "Supports Smoke alarm"
                        }),
                        Field({
                            name: "CO", conformance: "O.a+", constraint: "1", description: "CoAlarm",
                            details: "Supports CO alarm"
                        })
                    ]
                }),

                Attribute({
                    name: "ExpressedState", id: 0x0, type: "ExpressedStateEnum", access: "R V", conformance: "M",
                    quality: "N",

                    details: "This attribute shall indicate the visibly- and audibly-expressed state of the alarm. When multiple " +
                        "alarm conditions are being reflected in the server, this attribute shall indicate the condition " +
                        "with the highest priority. Priority order of conditions is determined by the manufacturer and shall " +
                        "be supplied as a part of certification procedure. If the value of ExpressedState is not Normal, the " +
                        "attribute corresponding to the value shall NOT be Normal. For example, if the ExpressedState is set " +
                        "to SmokeAlarm, the value of the SmokeState will indicate the severity of the alarm (Warning or " +
                        "Critical). Clients SHOULD also read the other attributes to be aware of further alarm conditions " +
                        "beyond the one indicated in ExpressedState." +
                        "\n" +
                        "Visible expression is typically a LED light pattern. Audible expression is a horn or speaker " +
                        "pattern. Audible expression shall BE suppressed if the DeviceMuted attribute is supported and set " +
                        "to Muted.",

                    xref: { document: "cluster", section: "2.11.6.1" }
                }),

                Attribute({
                    name: "SmokeState", id: 0x1, type: "AlarmStateEnum", access: "R V", conformance: "SMOKE",
                    quality: "N",
                    details: "This attribute shall indicate whether the device’s smoke sensor is currently triggering a smoke " +
                        "alarm.",
                    xref: { document: "cluster", section: "2.11.6.2" }
                }),

                Attribute({
                    name: "CoState", id: 0x2, type: "AlarmStateEnum", access: "R V", conformance: "CO", quality: "N",
                    details: "This attribute shall indicate whether the device’s CO sensor is currently triggering a CO alarm.",
                    xref: { document: "cluster", section: "2.11.6.3" }
                }),

                Attribute({
                    name: "BatteryAlert", id: 0x3, type: "AlarmStateEnum", access: "R V", conformance: "M",
                    quality: "N",
                    details: "This attribute shall indicate whether the power resource fault detection mechanism is currently " +
                        "triggered at the device. If the detection mechanism is triggered, this attribute shall be set to " +
                        "Warning or Critical, otherwise it shall be set to Normal. The battery state shall also be reflected " +
                        "in the Power Source cluster representing the device’s battery using the appropriate supported " +
                        "attributes and events.",
                    xref: { document: "cluster", section: "2.11.6.4" }
                }),

                Attribute({
                    name: "DeviceMuted", id: 0x4, type: "MuteStateEnum", access: "R V", conformance: "O", quality: "N",
                    details: "This attribute shall indicate the whether the audible expression of the device is currently muted. " +
                        "Audible expression is typically a horn or speaker pattern.",
                    xref: { document: "cluster", section: "2.11.6.5" }
                }),

                Attribute({
                    name: "TestInProgress", id: 0x5, type: "bool", access: "R V", conformance: "M",
                    details: "This attribute shall indicate whether the device self-test is currently activated. If the device " +
                        "self- test is activated, this attribute shall be set to True, otherwise it shall be set to False.",
                    xref: { document: "cluster", section: "2.11.6.6" }
                }),

                Attribute({
                    name: "HardwareFaultAlert", id: 0x6, type: "bool", access: "R V", conformance: "M", quality: "N",
                    details: "This attribute shall indicate whether the hardware fault detection mechanism is currently " +
                        "triggered. If the detection mechanism is triggered, this attribute shall be set to True, otherwise " +
                        "it shall be set to False.",
                    xref: { document: "cluster", section: "2.11.6.7" }
                }),

                Attribute({
                    name: "EndOfServiceAlert", id: 0x7, type: "EndOfServiceEnum", access: "R V", conformance: "M",
                    quality: "N",
                    details: "This attribute shall indicate whether the end-of-service has been triggered at the device. This " +
                        "attribute shall be set to Expired when the device reaches the end-of-service.",
                    xref: { document: "cluster", section: "2.11.6.8" }
                }),

                Attribute({
                    name: "InterconnectSmokeAlarm", id: 0x8, type: "AlarmStateEnum", access: "R V", conformance: "O",
                    details: "This attribute shall indicate whether the interconnected smoke alarm is currently triggering by " +
                        "branching devices. When the interconnected smoke alarm is being triggered, this attribute shall be " +
                        "set to Warning or Critical, otherwise it shall be set to Normal.",
                    xref: { document: "cluster", section: "2.11.6.9" }
                }),

                Attribute({
                    name: "InterconnectCoAlarm", id: 0x9, type: "AlarmStateEnum", access: "R V", conformance: "O",
                    details: "This attribute shall indicate whether the interconnected CO alarm is currently triggering by " +
                        "branching devices. When the interconnected CO alarm is being triggered, this attribute shall be set " +
                        "to Warning or Critical, otherwise it shall be set to Normal.",
                    xref: { document: "cluster", section: "2.11.6.10" }
                }),

                Attribute({
                    name: "ContaminationState", id: 0xa, type: "ContaminationStateEnum", access: "R V",
                    conformance: "[SMOKE]",
                    details: "This attribute shall indicate the contamination level of the smoke sensor.",
                    xref: { document: "cluster", section: "2.11.6.11" }
                }),

                Attribute({
                    name: "SmokeSensitivityLevel", id: 0xb, type: "SensitivityEnum", access: "RW VM",
                    conformance: "[SMOKE]",
                    details: "This attribute shall indicate the sensitivity level of the smoke sensor configured on the device.",
                    xref: { document: "cluster", section: "2.11.6.12" }
                }),

                Attribute({
                    name: "ExpiryDate", id: 0xc, type: "epoch-s", access: "R V", conformance: "O", quality: "F",
                    details: "This attribute shall indicate the date when the device reaches its stated expiry date. After the " +
                        "ExpiryDate has been reached, the EndOfServiceAlert shall start to be triggered. To account for " +
                        "better customer experience across time zones, the EndOfServiceAlert may be delayed by up to 24 " +
                        "hours after the ExpiryDate. Similarly, clients may delay any actions based on the ExpiryDate by up " +
                        "to 24 hours to best align with the local time zone.",
                    xref: { document: "cluster", section: "2.11.6.13" }
                }),

                Event({
                    name: "SmokeAlarm", id: 0x0, access: "V", conformance: "SMOKE", priority: "critical",
                    details: "This event shall be generated when SmokeState attribute changes to either Warning or Critical state.",
                    xref: { document: "cluster", section: "2.11.8.1" },
                    children: [Field({
                        name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
                        details: "This field shall indicate the current value of the SmokeState attribute.",
                        xref: { document: "cluster", section: "2.11.8.1.1" }
                    })]
                }),

                Event({
                    name: "CoAlarm", id: 0x1, access: "V", conformance: "CO", priority: "critical",
                    details: "This event shall be generated when COState attribute changes to either Warning or Critical state.",
                    xref: { document: "cluster", section: "2.11.8.2" },
                    children: [Field({
                        name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
                        details: "This field shall indicate the current value of the COState attribute.",
                        xref: { document: "cluster", section: "2.11.8.2.1" }
                    })]
                }),

                Event({
                    name: "LowBattery", id: 0x2, access: "V", conformance: "M", priority: "info",
                    details: "This event shall be generated when BatteryAlert attribute changes to either Warning or Critical " +
                        "state.",
                    xref: { document: "cluster", section: "2.11.8.3" },
                    children: [Field({
                        name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
                        details: "This field shall indicate the current value of the BatteryAlert attribute.",
                        xref: { document: "cluster", section: "2.11.8.3.1" }
                    })]
                }),

                Event({
                    name: "HardwareFault", id: 0x3, access: "V", conformance: "M", priority: "info",
                    details: "This event shall be generated when the device detects a hardware fault that leads to setting " +
                        "HardwareFaultAlert to True.",
                    xref: { document: "cluster", section: "2.11.8.4" }
                }),

                Event({
                    name: "EndOfService", id: 0x4, access: "V", conformance: "M", priority: "info",
                    details: "This event shall be generated when the EndOfServiceAlert is set to Expired.",
                    xref: { document: "cluster", section: "2.11.8.5" }
                }),

                Event({
                    name: "SelfTestComplete", id: 0x5, access: "V", conformance: "M", priority: "info",
                    details: "This event shall be generated when the SelfTest completes, and the attribute TestInProgress changes " +
                        "to False.",
                    xref: { document: "cluster", section: "2.11.8.6" }
                }),

                Event({
                    name: "AlarmMuted", id: 0x6, access: "V", conformance: "O", priority: "info",
                    details: "This event shall be generated when the DeviceMuted attribute changes to Muted.",
                    xref: { document: "cluster", section: "2.11.8.7" }
                }),
                Event({
                    name: "MuteEnded", id: 0x7, access: "V", conformance: "O", priority: "info",
                    details: "This event shall be generated when DeviceMuted attribute changes to NotMuted.",
                    xref: { document: "cluster", section: "2.11.8.8" }
                }),

                Event({
                    name: "InterconnectSmokeAlarm", id: 0x8, access: "V", conformance: "[SMOKE]", priority: "critical",
                    details: "This event shall be generated when the device hosting the server receives a smoke alarm from an " +
                        "interconnected sensor.",
                    xref: { document: "cluster", section: "2.11.8.9" },
                    children: [Field({
                        name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
                        details: "This field shall indicate the current value of the InterconnectSmokeAlarm attribute.",
                        xref: { document: "cluster", section: "2.11.8.9.1" }
                    })]
                }),

                Event({
                    name: "InterconnectCoAlarm", id: 0x9, access: "V", conformance: "[CO]", priority: "critical",
                    details: "This event shall be generated when the device hosting the server receives a CO alarm from an " +
                        "interconnected sensor.",
                    xref: { document: "cluster", section: "2.11.8.10" },
                    children: [Field({
                        name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
                        details: "This field shall indicate the current value of the InterconnectCOAlarm attribute.",
                        xref: { document: "cluster", section: "2.11.8.10.1" }
                    })]
                }),

                Event({
                    name: "AllClear", id: 0xa, access: "V", conformance: "M", priority: "info",
                    details: "This event shall be generated when ExpressedState attribute returns to Normal state.",
                    xref: { document: "cluster", section: "2.11.8.11" }
                }),

                Command({
                    name: "SelfTestRequest", id: 0x0, access: "O", conformance: "O", direction: "request",
                    response: "status",

                    details: "This command shall initiate a device self-test. The return status shall indicate whether the test " +
                        "was successfully initiated. Only one SelfTestRequest may be processed at a time. When the value of " +
                        "the ExpressedState attribute is any of SmokeAlarm, COAlarm, Testing, InterconnectSmoke, " +
                        "InterconnectCO, the device shall NOT execute the self-test, and shall return status code BUSY." +
                        "\n" +
                        "Upon successful acceptance of SelfTestRequest, the TestInProgress attribute shall be set to True " +
                        "and ExpressedState attribute shall be set to Testing. Any faults identified during the test shall " +
                        "be reflected in the appropriate attributes and events. Upon completion of the self test procedure, " +
                        "the SelfTestComplete event shall be generated, the TestInProgress attribute shall be set to False " +
                        "and ExpressedState attribute shall be updated to reflect the current state of the server.",

                    xref: { document: "cluster", section: "2.11.7.1" }
                })
            ]
        }),

        Cluster({
            name: "ColorControl", id: 0x300, classification: "application",
            xref: { document: "cluster", section: "3.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "3.2.5" },

                    children: [
                        Field({
                            name: "HS", constraint: "0", description: "HueSaturation",
                            details: "Supports color specification via hue/saturation."
                        }),
                        Field({
                            name: "EHUE", constraint: "1", description: "EnhancedHue",
                            details: "Enhanced hue is supported."
                        }),
                        Field({
                            name: "CL", constraint: "2", description: "ColorLoop",
                            details: "Color loop is supported."
                        }),
                        Field({
                            name: "XY", constraint: "3", description: "Xy",
                            details: "Supports color specification via XY."
                        }),
                        Field({
                            name: "CT", constraint: "4", description: "ColorTemperature",
                            details: "Supports specification of color temperature."
                        })
                    ]
                }),

                Attribute({
                    name: "CurrentHue", id: 0x0, type: "uint8", access: "R V", conformance: "HS",
                    constraint: "0 to 254", default: 0, quality: "N P",

                    details: "The CurrentHue attribute contains the current hue value of the light. It is updated as fast as " +
                        "practical during commands that change the hue." +
                        "\n" +
                        "The hue in degrees shall be related to the CurrentHue attribute by the relationship: Hue = " +
                        "CurrentHue x 360 / 254 (CurrentHue in the range 0 to 254 inclusive)" +
                        "\n" +
                        "If this attribute is implemented then the CurrentSaturation and ColorMode attributes shall also be " +
                        "implemented.",

                    xref: { document: "cluster", section: "3.2.7.2" }
                }),

                Attribute({
                    name: "CurrentSaturation", id: 0x1, type: "uint8", access: "R V", conformance: "HS",
                    constraint: "0 to 254", default: 0, quality: "N S P",

                    details: "The CurrentSaturation attribute holds the current saturation value of the light. It is updated as " +
                        "fast as practical during commands that change the saturation." +
                        "\n" +
                        "The saturation shall be related to the CurrentSaturation attribute by the relationship: Saturation " +
                        "= CurrentSaturation/254 (CurrentSaturation in the range 0 to 254 inclusive)" +
                        "\n" +
                        "If this attribute is implemented then the CurrentHue and ColorMode attributes shall also be " +
                        "implemented.",

                    xref: { document: "cluster", section: "3.2.7.3" }
                }),

                Attribute({
                    name: "RemainingTime", id: 0x2, type: "uint16", access: "R V", conformance: "O",
                    constraint: "0 to 65534", default: 0,
                    details: "The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently " +
                        "active command will be complete.",
                    xref: { document: "cluster", section: "3.2.7.4" }
                }),

                Attribute({
                    name: "CurrentX", id: 0x3, type: "uint16", access: "R V", conformance: "XY",
                    constraint: "0 to 65279", default: 1558, quality: "N S P",

                    details: "The CurrentX attribute contains the current value of the normalized chromaticity value x, as " +
                        "defined in the CIE xyY Color Space. It is updated as fast as practical during commands that change " +
                        "the color." +
                        "\n" +
                        "The value of x shall be related to the CurrentX attribute by the relationship x = CurrentX / 65536 " +
                        "(CurrentX in the range 0 to 65279 inclusive)",

                    xref: { document: "cluster", section: "3.2.7.5" }
                }),

                Attribute({
                    name: "CurrentY", id: 0x4, type: "uint16", access: "R V", conformance: "XY",
                    constraint: "0 to 65279", default: 1543, quality: "N S P",

                    details: "The CurrentY attribute contains the current value of the normalized chromaticity value y, as " +
                        "defined in the CIE xyY Color Space. It is updated as fast as practical during commands that change " +
                        "the color." +
                        "\n" +
                        "The value of y shall be related to the CurrentY attribute by the relationship y = CurrentY / 65536 " +
                        "(CurrentY in the range 0 to 65279 inclusive)",

                    xref: { document: "cluster", section: "3.2.7.6" }
                }),

                Attribute({
                    name: "DriftCompensation", id: 0x5, type: "enum8", access: "R V", conformance: "O",
                    constraint: "0 to 4",
                    details: "The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for " +
                        "color/intensity drift over time. It shall be one of the non-reserved values in Values of the " +
                        "DriftCompensation Attribute." +
                        "\n" +
                        "### ‌Table 9. Values of the DriftCompensation Attribute",
                    xref: { document: "cluster", section: "3.2.7.7" },

                    children: [
                        Field({ name: "None", id: 0x0 }),
                        Field({ name: "OtherUnknown", id: 0x1 }),
                        Field({ name: "TemperatureMonitoring", id: 0x2 }),
                        Field({ name: "OpticalLuminanceMonitoringAndFeedback", id: 0x3 }),
                        Field({ name: "OpticalColorMonitoringAndFeedback", id: 0x4 })
                    ]
                }),

                Attribute({
                    name: "CompensationText", id: 0x6, type: "string", access: "R V", conformance: "O",
                    constraint: "max 254",
                    details: "The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to " +
                        "compensate for color/intensity drift over time.",
                    xref: { document: "cluster", section: "3.2.7.8" }
                }),

                Attribute({
                    name: "ColorTemperatureMireds", id: 0x7, type: "uint16", access: "R V", conformance: "CT",
                    constraint: "0 to 65279", default: 0, quality: "N S P",

                    details: "The ColorTemperatureMireds attribute contains a scaled inverse of the current value of the color " +
                        "temperature. The unit of ColorTemperatureMireds is the mired (micro reciprocal degree), AKA mirek " +
                        "(micro reciprocal kelvin). It is updated as fast as practical during commands that change the color." +
                        "\n" +
                        "The color temperature value in kelvins shall be related to the ColorTemperatureMireds attribute in " +
                        "mireds by the relationship" +
                        "\n" +
                        "Color temperature in kelvins = 1,000,000 / ColorTemperatureMireds, where ColorTemperatureMireds is " +
                        "in the range 1 to 65279 mireds inclusive, giving a color temperature range from 1,000,000 kelvins " +
                        "to 15.32 kelvins." +
                        "\n" +
                        "If this attribute is implemented then the ColorMode attribute shall also be implemented.",

                    xref: { document: "cluster", section: "3.2.7.9" }
                }),

                Attribute({
                    name: "ColorMode", id: 0x8, type: "enum8", access: "R V", conformance: "M", constraint: "0 to 2",
                    default: 1, quality: "N",

                    details: "The ColorMode attribute indicates which attributes are currently determining the color of the " +
                        "device." +
                        "\n" +
                        "The value of the ColorMode attribute cannot be written directly - it is set upon reception of any " +
                        "command in section Commands to the appropriate mode for that command." +
                        "\n" +
                        "Table 10. Values of the ColorMode Attribute" +
                        "\n" +
                        "### ‌3.2.7.11. Options Attribute" +
                        "\n" +
                        "The Options attribute is meant to be changed only during commissioning. The Options attribute is a " +
                        "bitmap that determines the default behavior of some cluster commands. Each command that is " +
                        "dependent on the Options attribute shall first construct a temporary Options bitmap that is in " +
                        "effect during the command processing. The temporary Options bitmap has the same format and meaning " +
                        "as the Options attribute, but includes any bits that may be overridden by command fields." +
                        "\n" +
                        "Below is the format and description of the Options attribute and temporary Options bitmap and the " +
                        "effect on dependent commands." +
                        "\n" +
                        "Table 11. Options Attribute" +
                        "\n" +
                        "ExecuteIfOff Options bit: Command execution shall NOT continue beyond the Options processing if all " +
                        "of these criteria are true:" +
                        "\n" +
                        "  • The On/Off cluster exists on the same endpoint as this cluster." +
                        "\n" +
                        "  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE." +
                        "\n" +
                        "  • The value of the ExecuteIfOff bit is 0.",

                    xref: { document: "cluster", section: "3.2.7.10" },
                    children: [
                        Field({ name: "CurrentHueAndCurrentSaturation", id: 0x0 }),
                        Field({ name: "CurrentXAndCurrentY", id: 0x1 }),
                        Field({ name: "ColorTemperatureMireds", id: 0x2 })
                    ]
                }),

                Attribute({
                    name: "Options", id: 0xf, type: "map8", access: "RW VO", conformance: "M", constraint: "desc",
                    default: 0,
                    xref: { document: "cluster", section: "3.2.7" }
                }),

                Attribute({
                    name: "EnhancedCurrentHue", id: 0x4000, type: "uint16", access: "R V", conformance: "EHUE",
                    default: 0, quality: "N S",

                    details: "The EnhancedCurrentHue attribute represents non-equidistant steps along the CIE 1931 color " +
                        "triangle, and it provides 16-bits precision." +
                        "\n" +
                        "The upper 8 bits of this attribute shall be used as an index in the implementation specific XY " +
                        "lookup table to provide the non-equidistance steps. The lower 8 bits shall be used to interpolate " +
                        "between these steps in a linear way in order to provide color zoom for the user." +
                        "\n" +
                        "To provide compatibility with standard ZCL, the CurrentHue attribute shall contain a hue value in " +
                        "the range 0 to 254, calculated from the EnhancedCurrentHue attribute.",

                    xref: { document: "cluster", section: "3.2.7.12" }
                }),

                Attribute({
                    name: "EnhancedColorMode", id: 0x4001, type: "enum8", access: "R V", conformance: "M",
                    constraint: "0 to 3", default: 1, quality: "N S",

                    details: "The EnhancedColorMode attribute specifies which attributes are currently determining the color of " +
                        "the device, as detailed in Values of the EnhancedColorMode Attribute." +
                        "\n" +
                        "### ‌Table 12. Values of the EnhancedColorMode Attribute" +
                        "\n" +
                        "To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate " +
                        "‘CurrentHue and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the " +
                        "ColorMode attribute is changed, e.g., due to one of the standard Color Control cluster commands " +
                        "defined in the ZCL, its new value shall be copied to the EnhancedColorMode attribute.",

                    xref: { document: "cluster", section: "3.2.7.13" },

                    children: [
                        Field({ name: "CurrentHueAndCurrentSaturation", id: 0x0 }),
                        Field({ name: "CurrentXAndCurrentY", id: 0x1 }),
                        Field({ name: "ColorTemperatureMireds", id: 0x2 }),
                        Field({ name: "EnhancedCurrentHueAndCurrentSaturation", id: 0x3 })
                    ]
                }),

                Attribute({
                    name: "ColorLoopActive", id: 0x4002, type: "uint8", access: "R V", conformance: "CL", default: 0,
                    quality: "N S",
                    details: "The ColorLoopActive attribute specifies the current active status of the color loop. If this " +
                        "attribute has the value 0, the color loop shall not be active. If this attribute has the value 1, " +
                        "the color loop shall be active. All other values (2 to 254) are reserved.",
                    xref: { document: "cluster", section: "3.2.7.14" }
                }),

                Attribute({
                    name: "ColorLoopDirection", id: 0x4003, type: "uint8", access: "R V", conformance: "CL", default: 0,
                    quality: "N S",
                    details: "The ColorLoopDirection attribute specifies the current direction of the color loop. If this " +
                        "attribute has the value 0, the EnhancedCurrentHue attribute shall be decremented. If this attribute " +
                        "has the value 1, the EnhancedCurrentHue attribute shall be incremented. All other values (2 to 254) " +
                        "are reserved.",
                    xref: { document: "cluster", section: "3.2.7.15" }
                }),

                Attribute({
                    name: "ColorLoopTime", id: 0x4004, type: "uint16", access: "R V", conformance: "CL", default: 25,
                    quality: "N S",
                    details: "The ColorLoopTime attribute specifies the number of seconds it shall take to perform a full color " +
                        "loop, i.e., to cycle all values of the EnhancedCurrentHue attribute (between 0 and 0xFFFE).",
                    xref: { document: "cluster", section: "3.2.7.16" }
                }),

                Attribute({
                    name: "ColorLoopStartEnhancedHue", id: 0x4005, type: "uint16", access: "R V", conformance: "CL",
                    default: 8960,
                    details: "The ColorLoopStartEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute " +
                        "from which the color loop shall be started.",
                    xref: { document: "cluster", section: "3.2.7.17" }
                }),

                Attribute({
                    name: "ColorLoopStoredEnhancedHue", id: 0x4006, type: "uint16", access: "R V", conformance: "CL",
                    default: 0,
                    details: "The ColorLoopStoredEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute " +
                        "before the color loop was started. Once the color loop is complete, the EnhancedCurrentHue " +
                        "attribute shall be restored to this value.",
                    xref: { document: "cluster", section: "3.2.7.18" }
                }),

                Attribute({
                    name: "ColorCapabilities", id: 0x400a, type: "map16", access: "R V", conformance: "M",
                    constraint: "0 to 31", default: 0,
                    details: "Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of " +
                        "the FeatureMap attribute. All other bits in ColorCapabilities shall be 0.",
                    xref: { document: "cluster", section: "3.2.7.19" }
                }),

                Attribute({
                    name: "ColorTempPhysicalMinMireds", id: 0x400b, type: "uint16", access: "R V", conformance: "CT",
                    constraint: "0 to 65279", default: 0,
                    details: "The ColorTempPhysicalMinMireds attribute indicates the minimum mired value supported by the " +
                        "hardware. ColorTempPhysicalMinMireds corresponds to the maximum color temperature in kelvins " +
                        "supported by the hardware. ColorTempPhysicalMinMireds <= ColorTemperatureMireds.",
                    xref: { document: "cluster", section: "3.2.7.20" }
                }),

                Attribute({
                    name: "ColorTempPhysicalMaxMireds", id: 0x400c, type: "uint16", access: "R V", conformance: "CT",
                    constraint: "0 to 65279", default: 0,
                    details: "The ColorTempPhysicalMaxMireds attribute indicates the maximum mired value supported by the " +
                        "hardware. ColorTempPhysicalMaxMireds corresponds to the minimum color temperature in kelvins " +
                        "supported by the hardware. ColorTemperatureMireds <= ColorTempPhysicalMaxMireds.",
                    xref: { document: "cluster", section: "3.2.7.21" }
                }),

                Attribute({
                    name: "CoupleColorTempToLevelMinMireds", id: 0x400d, type: "uint16", access: "R V",
                    conformance: "CT | ColorTemperatureMireds",
                    constraint: "colorTempPhysicalMinMireds to colorTemperatureMireds",

                    details: "The CoupleColorTempToLevelMinMireds attribute specifies a lower bound on the value of the " +
                        "ColorTemperatureMireds attribute for the purposes of coupling the ColorTemperatureMireds attribute " +
                        "to the CurrentLevel attribute when the CoupleColorTempToLevel bit of the Options attribute of the " +
                        "Level Control cluster is equal to 1. When coupling the ColorTemperatureMireds attribute to the " +
                        "CurrentLevel attribute, this value shall correspond to a CurrentLevel value of 0xFE (100%)." +
                        "\n" +
                        "This attribute shall be set such that the following relationship exists: ColorTempPhysicalMinMireds " +
                        "≤ CoupleColorTempToLevelMinMireds ≤ ColorTemperatureMireds" +
                        "\n" +
                        "Note that since this attribute is stored as a micro reciprocal degree (mired) value (i.e. color " +
                        "temperature in kelvins = 1,000,000 / CoupleColorTempToLevelMinMireds), the " +
                        "CoupleColorTempToLevelMinMireds attribute corresponds to an upper bound on the value of the color " +
                        "temperature in kelvins supported by the device.",

                    xref: { document: "cluster", section: "3.2.7.22" }
                }),

                Attribute({
                    name: "StartUpColorTemperatureMireds", id: 0x4010, type: "uint16", access: "RW VM",
                    conformance: "CT | ColorTemperatureMireds", constraint: "0 to 65279", quality: "X N",

                    details: "The StartUpColorTemperatureMireds attribute shall define the desired startup color temperature " +
                        "value a lamp shall use when it is supplied with power and this value shall be reflected in the " +
                        "ColorTemperatureMireds attribute. In addition, the ColorMode and EnhancedColorMode attributes shall " +
                        "be set to 0x02 (color temperature). The values of the StartUpColorTemperatureMireds attribute are " +
                        "listed in the table below," +
                        "\n" +
                        "Table 13. Values of the StartUpColorTemperatureMireds attribute",

                    xref: { document: "cluster", section: "3.2.7.23" }
                }),

                Attribute({
                    name: "NumberOfPrimaries", id: 0x10, type: "uint8", access: "R V", conformance: "M",
                    constraint: "0 to 6", quality: "X F",

                    details: "The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. " +
                        "A value of null shall indicate that the number of primaries is unknown." +
                        "\n" +
                        "Where this attribute is implemented, the attributes below for indicating the “x” and “y” color " +
                        "values of the primaries shall also be implemented for each of the primaries from 1 to " +
                        "NumberOfPrimaries, without leaving gaps. Implementation of the Primary1Intensity attribute and " +
                        "subsequent intensity attributes is optional.",

                    xref: { document: "cluster", section: "3.2.8.1" }
                }),

                Attribute({
                    name: "Primary1X", id: 0x11, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    details: "The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined " +
                        "in the CIE xyY Color Space." +
                        "\n" +
                        "The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / " +
                        "65536 (Primary1X in the range 0 to 65279 inclusive)",
                    xref: { document: "cluster", section: "3.2.8.2" }
                }),

                Attribute({
                    name: "Primary1Y", id: 0x12, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    details: "The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined " +
                        "in the CIE xyY Color Space." +
                        "\n" +
                        "The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / " +
                        "65536 (Primary1Y in the range 0 to 65279 inclusive)",
                    xref: { document: "cluster", section: "3.2.8.3" }
                }),

                Attribute({
                    name: "Primary1Intensity", id: 0x13, type: "uint8", access: "R V", conformance: "M", quality: "X F",

                    details: "The Primary1intensity attribute contains a representation of the maximum intensity of this primary " +
                        "as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast " +
                        "Configuration Cluster), normalized such that the primary with the highest maximum intensity " +
                        "contains the value 0xFE." +
                        "\n" +
                        "A value of null shall indicate that this primary is not available.",

                    xref: { document: "cluster", section: "3.2.8.4" }
                }),

                Attribute({
                    name: "Primary2X", id: 0x15, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.8" }
                }),
                Attribute({
                    name: "Primary2Y", id: 0x16, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.8" }
                }),
                Attribute({
                    name: "Primary2Intensity", id: 0x17, type: "uint8", access: "R V", conformance: "M", quality: "X F",
                    xref: { document: "cluster", section: "3.2.8" }
                }),
                Attribute({
                    name: "Primary3X", id: 0x19, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.8" }
                }),
                Attribute({
                    name: "Primary3Y", id: 0x1a, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.8" }
                }),
                Attribute({
                    name: "Primary3Intensity", id: 0x1b, type: "uint8", access: "R V", conformance: "M", quality: "X F",
                    xref: { document: "cluster", section: "3.2.8" }
                }),
                Attribute({
                    name: "Primary4X", id: 0x20, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),
                Attribute({
                    name: "Primary4Y", id: 0x21, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),
                Attribute({
                    name: "Primary4Intensity", id: 0x22, type: "uint8", access: "R V", conformance: "M", quality: "X F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),
                Attribute({
                    name: "Primary5X", id: 0x24, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),
                Attribute({
                    name: "Primary5Y", id: 0x25, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),
                Attribute({
                    name: "Primary5Intensity", id: 0x26, type: "uint8", access: "R V", conformance: "M", quality: "X F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),
                Attribute({
                    name: "Primary6X", id: 0x28, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),
                Attribute({
                    name: "Primary6Y", id: 0x29, type: "uint16", access: "R V", conformance: "M",
                    constraint: "0 to 65279", quality: "F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),
                Attribute({
                    name: "Primary6Intensity", id: 0x2a, type: "uint8", access: "R V", conformance: "M", quality: "X F",
                    xref: { document: "cluster", section: "3.2.9" }
                }),

                Attribute({
                    name: "WhitePointX", id: 0x30, type: "uint16", access: "RW VM", conformance: "O",
                    constraint: "0 to 65279",
                    details: "The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY " +
                        "Color Space, of the current white point of the device." +
                        "\n" +
                        "The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / " +
                        "65536 (WhitePointX in the range 0 to 65279 inclusive)",
                    xref: { document: "cluster", section: "3.2.10.1" }
                }),

                Attribute({
                    name: "WhitePointY", id: 0x31, type: "uint16", access: "RW VM", conformance: "O",
                    constraint: "0 to 65279",

                    details: "The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY" +
                        "\n" +
                        "Color Space, of the current white point of the device." +
                        "\n" +
                        "The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / " +
                        "65536 (WhitePointY in the range 0 to 65279 inclusive)",

                    xref: { document: "cluster", section: "3.2.10.2" }
                }),

                Attribute({
                    name: "ColorPointRx", id: 0x32, type: "uint16", access: "RW VM", conformance: "O",
                    constraint: "0 to 65279",
                    details: "The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY " +
                        "Color Space, of the red color point of the device." +
                        "\n" +
                        "The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX " +
                        "/ 65536 (ColorPointRX in the range 0 to 65279 inclusive)",
                    xref: { document: "cluster", section: "3.2.10.3" }
                }),

                Attribute({
                    name: "ColorPointRy", id: 0x33, type: "uint16", access: "RW VM", conformance: "O",
                    constraint: "0 to 65279",
                    details: "The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY " +
                        "Color Space, of the red color point of the device." +
                        "\n" +
                        "The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY " +
                        "/ 65536 (ColorPointRY in the range 0 to 65279 inclusive)",
                    xref: { document: "cluster", section: "3.2.10.4" }
                }),

                Attribute({
                    name: "ColorPointRIntensity", id: 0x34, type: "uint8", access: "RW VM", conformance: "O",
                    quality: "X",

                    details: "The ColorPointRIntensity attribute contains a representation of the relative intensity of the red " +
                        "color point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast " +
                        "Configuration Cluster), normalized such that the color point with the highest relative intensity " +
                        "contains the value 0xFE." +
                        "\n" +
                        "A value of null shall indicate an invalid value.",

                    xref: { document: "cluster", section: "3.2.10.5" }
                }),

                Attribute({
                    name: "ColorPointGx", id: 0x36, type: "uint16", access: "RW VM", conformance: "O",
                    constraint: "0 to 65279",
                    xref: { document: "cluster", section: "3.2.10" }
                }),
                Attribute({
                    name: "ColorPointGy", id: 0x37, type: "uint16", access: "RW VM", conformance: "O",
                    constraint: "0 to 65279",
                    xref: { document: "cluster", section: "3.2.10" }
                }),
                Attribute({
                    name: "ColorPointGIntensity", id: 0x38, type: "uint8", access: "RW VM", conformance: "O",
                    quality: "X",
                    xref: { document: "cluster", section: "3.2.10" }
                }),
                Attribute({
                    name: "ColorPointBx", id: 0x3a, type: "uint16", access: "RW VM", conformance: "O",
                    constraint: "0 to 65279",
                    xref: { document: "cluster", section: "3.2.10" }
                }),
                Attribute({
                    name: "ColorPointBy", id: 0x3b, type: "uint16", access: "RW VM", conformance: "O",
                    constraint: "0 to 65279",
                    xref: { document: "cluster", section: "3.2.10" }
                }),
                Attribute({
                    name: "ColorPointBIntensity", id: 0x3c, type: "uint8", access: "RW VM", conformance: "O",
                    quality: "X",
                    xref: { document: "cluster", section: "3.2.10" }
                }),

                Command({
                    name: "MoveToHue", id: 0x0, access: "O", conformance: "HS", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11.4" },

                    children: [
                        Field({
                            name: "Hue", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254",
                            details: "The Hue field specifies the hue to be moved to.",
                            xref: { document: "cluster", section: "3.2.11.4.1" }
                        }),

                        Field({
                            name: "Direction", id: 0x1, type: "Direction", conformance: "M", constraint: "desc",
                            details: "The Direction field shall be one of the non-reserved values in Values of the Direction Field." +
                                "\n" +
                                "### ‌Table 18. Values of the Direction Field",
                            xref: { document: "cluster", section: "3.2.11.4.2" }
                        }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
                            details: "The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to move to " +
                                "the new hue.",
                            xref: { document: "cluster", section: "3.2.11.4.3" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "MoveHue", id: 0x1, access: "O", conformance: "HS", direction: "request", response: "status",
                    xref: { document: "cluster", section: "3.2.11" }
                }),
                Command({
                    name: "StepHue", id: 0x2, access: "O", conformance: "HS", direction: "request", response: "status",
                    xref: { document: "cluster", section: "3.2.11" }
                }),

                Command({
                    name: "MoveToSaturation", id: 0x3, access: "O", conformance: "HS", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11.7" },

                    children: [
                        Field({ name: "Saturation", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254" }),
                        Field({
                            name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", constraint: "0 to 65534"
                        }),
                        Field({
                            name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "MoveSaturation", id: 0x4, access: "O", conformance: "HS", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11.8" },

                    children: [
                        Field({
                            name: "MoveMode", id: 0x0, type: "MoveMode", conformance: "M", constraint: "desc",
                            details: "The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the " +
                                "MoveMode field is equal to 0 (Stop), the Rate field shall be ignored." +
                                "\n" +
                                "### ‌Table 23. Values of the MoveMode Field",
                            xref: { document: "cluster", section: "3.2.11.8.1" }
                        }),

                        Field({
                            name: "Rate", id: 0x1, type: "uint8", conformance: "M",
                            details: "The Rate field specifies the rate of movement in steps per second. A step is a change in the " +
                                "device’s saturation of one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate " +
                                "field has a value of zero, the command has no effect and a response command shall be sent in " +
                                "response, with the status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the " +
                                "Rate field shall be ignored.",
                            xref: { document: "cluster", section: "3.2.11.8.2" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "StepSaturation", id: 0x5, access: "O", conformance: "HS", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11.9" },

                    children: [
                        Field({
                            name: "StepMode", id: 0x0, type: "StepMode", conformance: "M", constraint: "desc",
                            details: "The StepMode field shall be one of the non-reserved values in Values of the StepMode Field." +
                                "\n" +
                                "### ‌Table 25. Values of the StepMode Field",
                            xref: { document: "cluster", section: "3.2.11.9.1" }
                        }),

                        Field({
                            name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                            details: "The change to be added to (or subtracted from) the current value of the device’s saturation.",
                            xref: { document: "cluster", section: "3.2.11.9.2" }
                        }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M",
                            details: "The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform " +
                                "the step. A step is a change in the device’s saturation of ‘Step size’ units." +
                                "\n" +
                                "Note: Here the TransitionTime data field is of data type uint8, where uint16 is more common for " +
                                "TransitionTime data fields in other clusters / commands.",
                            xref: { document: "cluster", section: "3.2.11.9.3" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "MoveToHueAndSaturation", id: 0x6, access: "O", conformance: "HS", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11" }
                }),

                Command({
                    name: "MoveToColor", id: 0x7, access: "O", conformance: "XY", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11.11" },

                    children: [
                        Field({ name: "ColorX", id: 0x0, type: "uint16", conformance: "M", constraint: "0 to 65279" }),
                        Field({ name: "ColorY", id: 0x1, type: "uint16", conformance: "M", constraint: "0 to 65279" }),
                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534"
                        }),
                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "MoveColor", id: 0x8, access: "O", conformance: "XY", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11.12" },

                    children: [
                        Field({
                            name: "RateX", id: 0x0, type: "int16", conformance: "M",
                            details: "The RateX field specifies the rate of movement in steps per second. A step is a change in the " +
                                "device’s CurrentX attribute of one unit.",
                            xref: { document: "cluster", section: "3.2.11.12.1" }
                        }),

                        Field({
                            name: "RateY", id: 0x1, type: "int16", conformance: "M",
                            details: "The RateY field specifies the rate of movement in steps per second. A step is a change in the " +
                                "device’s CurrentY attribute of one unit.",
                            xref: { document: "cluster", section: "3.2.11.12.2" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "StepColor", id: 0x9, access: "O", conformance: "XY", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11.13" },

                    children: [
                        Field({ name: "StepX", id: 0x0, type: "int16", conformance: "M" }),
                        Field({ name: "StepY", id: 0x1, type: "int16", conformance: "M" }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
                            details: "The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform " +
                                "the color change.",
                            xref: { document: "cluster", section: "3.2.11.13.2" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "MoveToColorTemperature", id: 0xa, access: "O", conformance: "CT", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "3.2.11.14" },

                    children: [
                        Field({
                            name: "ColorTemperatureMireds", id: 0x0, type: "uint16", conformance: "M", constraint: "0 to 65279"
                        }),
                        Field({
                            name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", constraint: "0 to 65534"
                        }),
                        Field({
                            name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "EnhancedMoveToHue", id: 0x40, access: "O", conformance: "EHUE", direction: "request",
                    response: "status",
                    details: "The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their " +
                        "current hue to a target hue.",
                    xref: { document: "cluster", section: "3.2.11.15" },

                    children: [
                        Field({
                            name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M",
                            details: "The EnhancedHue field specifies the target extended hue for the lamp.",
                            xref: { document: "cluster", section: "3.2.11.15.1" }
                        }),

                        Field({
                            name: "Direction", id: 0x1, type: "Direction", conformance: "M", constraint: "desc",
                            details: "This field is identical to the Direction field of the MoveToHue command of the Color Control " +
                                "cluster (see sub-clause Use of the OptionsMask and OptionsOverride fields).",
                            xref: { document: "cluster", section: "3.2.11.15.2" }
                        }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
                            details: "This field is identical to the TransitionTime field of the MoveToHue command of the Color Control " +
                                "cluster (see sub-clause Use of the OptionsMask and OptionsOverride fields).",
                            xref: { document: "cluster", section: "3.2.11.15.3" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "EnhancedMoveHue", id: 0x41, access: "O", conformance: "EHUE", direction: "request",
                    response: "status",
                    details: "The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their " +
                        "current hue to a target hue.",
                    xref: { document: "cluster", section: "3.2.11.16" },

                    children: [
                        Field({
                            name: "MoveMode", id: 0x0, type: "MoveMode", conformance: "M", constraint: "desc",
                            details: "This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster " +
                                "(see sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall " +
                                "be ignored.",
                            xref: { document: "cluster", section: "3.2.11.16.1" }
                        }),

                        Field({
                            name: "Rate", id: 0x1, type: "uint16", conformance: "M",
                            details: "The Rate field specifies the rate of movement in steps per second. A step is a change in the " +
                                "extended hue of a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the " +
                                "Rate field has a value of zero, the command has no effect and a response command shall be sent in " +
                                "response, with the status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the " +
                                "Rate field shall be ignored.",
                            xref: { document: "cluster", section: "3.2.11.16.2" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "EnhancedStepHue", id: 0x42, access: "O", conformance: "EHUE", direction: "request",
                    response: "status",
                    details: "The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue " +
                        "to a target hue, resulting in a linear transition through XY space.",
                    xref: { document: "cluster", section: "3.2.11.17" },

                    children: [
                        Field({
                            name: "StepMode", id: 0x0, type: "StepMode", conformance: "M", constraint: "desc",
                            details: "This field is identical to the StepMode field of the StepHue command of the Color Control cluster " +
                                "(see sub-clause StepHue Command).",
                            xref: { document: "cluster", section: "3.2.11.17.1" }
                        }),

                        Field({
                            name: "StepSize", id: 0x1, type: "uint16", conformance: "M",
                            details: "The StepSize field specifies the change to be added to (or subtracted from) the current value of " +
                                "the device’s enhanced hue.",
                            xref: { document: "cluster", section: "3.2.11.17.2" }
                        }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",

                            details: "The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken " +
                                "to perform the step. A step is a change to the device’s enhanced hue of a magnitude corresponding " +
                                "to the StepSize field." +
                                "\n" +
                                "Note: Here TransitionTime data field is of data type uint16, while the TransitionTime data field of " +
                                "the StepHue command is of data type uint8.",

                            xref: { document: "cluster", section: "3.2.11.17.3" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "EnhancedMoveToHueAndSaturation", id: 0x43, access: "O", conformance: "EHUE",
                    direction: "request", response: "status",
                    details: "The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous " +
                        "transition from their current hue to a target hue and from their current saturation to a target " +
                        "saturation.",
                    xref: { document: "cluster", section: "3.2.11.18" },

                    children: [
                        Field({
                            name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M",
                            details: "The EnhancedHue field specifies the target extended hue for the lamp.",
                            xref: { document: "cluster", section: "3.2.11.18.1" }
                        }),

                        Field({
                            name: "Saturation", id: 0x1, type: "uint8", conformance: "M", constraint: "0 to 254",
                            details: "This field is identical to the Saturation field of the MoveToHueAndSaturation command of the Color " +
                                "Control cluster (see sub-clause MoveToHueAndSaturation Command).",
                            xref: { document: "cluster", section: "3.2.11.18.2" }
                        }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
                            details: "This field is identical to the TransitionTime field of the MoveToHue command of the Color Control " +
                                "cluster (see sub-clause MoveToHueAndSaturation Command).",
                            xref: { document: "cluster", section: "3.2.11.18.3" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "ColorLoopSet", id: 0x44, access: "O", conformance: "CL", direction: "request",
                    response: "status",
                    details: "The Color Loop Set command allows a color loop to be activated such that the color lamp cycles " +
                        "through its range of hues.",
                    xref: { document: "cluster", section: "3.2.11.19" },

                    children: [
                        Field({
                            name: "UpdateFlags", id: 0x0, type: "map8", conformance: "M", constraint: "desc",

                            details: "The UpdateFlags field specifies which color loop attributes to update before the color loop is " +
                                "started. This field shall be formatted as illustrated in Format of the UpdateFlags Field of the " +
                                "ColorLoopSet Command." +
                                "\n" +
                                "### ‌Table 29. Format of the UpdateFlags Field of the ColorLoopSet Command" +
                                "\n" +
                                "The UpdateAction sub-field is 1 bit in length and specifies whether the device shall adhere to the " +
                                "action field in order to process the command. If this sub-field is set to 1, the device shall " +
                                "adhere to the action field. If this sub-field is set to 0, the device shall ignore the Action field." +
                                "\n" +
                                "The UpdateDirection sub-field is 1 bit in length and specifies whether the device shall update the " +
                                "ColorLoopDirection attribute with the Direction field. If this sub-field is set to 1, the device " +
                                "shall update the value of the ColorLoopDirection attribute with the value of the Direction field. " +
                                "If this sub-field is set to 0, the device shall ignore the Direction field." +
                                "\n" +
                                "The UpdateTime sub-field is 1 bit in length and specifies whether the device shall update the " +
                                "ColorLoopTime attribute with the Time field. If this sub-field is set to 1, the device shall update " +
                                "the value of the ColorLoopTime attribute with the value of the Time field. If this sub-field is set " +
                                "to 0, the device shall ignore the Time field." +
                                "\n" +
                                "The UpdateStartHue sub-field is 1 bit in length and specifies whether the device shall update the " +
                                "ColorLoopStartEnhancedHue attribute with the StartHue field. If this sub-field is set to 1, the " +
                                "device shall update the value of the ColorLoopStartEnhancedHue attribute with the value of the " +
                                "StartHue field. If this sub-field is set to 0, the device shall ignore the StartHue field.",

                            xref: { document: "cluster", section: "3.2.11.19.1" },

                            children: [
                                Field({ name: "UpdateAction", constraint: "0" }),
                                Field({ name: "UpdateDirection", constraint: "1" }),
                                Field({ name: "UpdateTime", constraint: "2" }),
                                Field({ name: "UpdateStartHue", constraint: "3" }),
                                Field({ name: "Reserved", constraint: "4 to 8" })
                            ]
                        }),

                        Field({
                            name: "Action", id: 0x1, type: "enum8", conformance: "M", constraint: "desc",
                            details: "The Action field specifies the action to take for the color loop if the UpdateAction sub-field of " +
                                "the UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed " +
                                "in Values of the Action Field of the ColorLoopSet Command." +
                                "\n" +
                                "### ‌Table 30. Values of the Action Field of the ColorLoopSet Command",
                            xref: { document: "cluster", section: "3.2.11.19.2" },

                            children: [
                                Field({ name: "DeActivateTheColorLoop", id: 0x0 }),
                                Field({
                                    name: "ActivateTheColorLoopFromTheValueInTheColorLoopStartEnhancedHueField", id: 0x1
                                }),
                                Field({
                                    name: "ActivateTheColorLoopFromTheValueOfTheEnhancedCurrentHueAttribute", id: 0x2
                                })
                            ]
                        }),

                        Field({
                            name: "Direction", id: 0x2, type: "enum8", conformance: "M", constraint: "desc",
                            details: "The Direction field specifies the direction for the color loop if the Update Direction field of the " +
                                "UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in " +
                                "Values of the Direction Field of the ColorLoopSet Command." +
                                "\n" +
                                "### ‌Table 31. Values of the Direction Field of the ColorLoopSet Command",
                            xref: { document: "cluster", section: "3.2.11.19.3" },
                            children: [
                                Field({ name: "DecrementTheHueInTheColorLoop", id: 0x0 }),
                                Field({ name: "IncrementTheHueInTheColorLoop", id: 0x1 })
                            ]
                        }),

                        Field({
                            name: "Time", id: 0x3, type: "uint16", conformance: "M",
                            details: "The Time field specifies the number of seconds over which to perform a full color loop if the " +
                                "UpdateTime sub-field of the UpdateFlags field is set to 1.",
                            xref: { document: "cluster", section: "3.2.11.19.4" }
                        }),

                        Field({ name: "StartHue", id: 0x4, type: "uint16", conformance: "M" }),
                        Field({
                            name: "OptionsMask", id: 0x5, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x6, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "StopMoveStep", id: 0x47, access: "O", conformance: "HS | XY | CT", direction: "request",
                    response: "status",
                    details: "The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this " +
                        "automatically provides symmetry to the Level Control cluster.)" +
                        "\n" +
                        "Note: the StopMoveStep command has no effect on an active color loop.",
                    xref: { document: "cluster", section: "3.2.11.20" },

                    children: [
                        Field({
                            name: "OptionsMask", id: 0x0, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x1, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "MoveColorTemperature", id: 0x4b, access: "O", conformance: "CT", direction: "request",
                    response: "status",
                    details: "The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified " +
                        "rate.",
                    xref: { document: "cluster", section: "3.2.11.21" },

                    children: [
                        Field({
                            name: "MoveMode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            details: "This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster " +
                                "(see sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall " +
                                "be ignored.",
                            xref: { document: "cluster", section: "3.2.11.21.1" }
                        }),

                        Field({
                            name: "Rate", id: 0x1, type: "uint16", conformance: "M",
                            details: "The Rate field specifies the rate of movement in steps per second. A step is a change in the color " +
                                "temperature of a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the " +
                                "Rate field has a value of zero, the command has no effect and a response command shall be sent in " +
                                "response, with the status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the " +
                                "Rate field shall be ignored.",
                            xref: { document: "cluster", section: "3.2.11.21.2" }
                        }),

                        Field({
                            name: "ColorTemperatureMinimumMireds", id: 0x2, type: "uint16", conformance: "M",
                            constraint: "0 to 65279",

                            details: "The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds " +
                                "attribute (≡ an upper bound on the color temperature in kelvins) for the current move operation" +
                                "\n" +
                                "ColorTempPhysicalMinMireds <= ColorTemperatureMinimumMireds field <= ColorTemperatureMireds" +
                                "\n" +
                                "As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the " +
                                "ColorTemperatureMinimumMireds field it shall be clipped so that the above invariant is satisfied. " +
                                "If the ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as " +
                                "the lower bound for the ColorTemperatureMireds attribute.",

                            xref: { document: "cluster", section: "3.2.11.21.3" }
                        }),

                        Field({
                            name: "ColorTemperatureMaximumMireds", id: 0x3, type: "uint16", conformance: "M",
                            constraint: "0 to 65279",

                            details: "The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds " +
                                "attribute (≡ a lower bound on the color temperature in kelvins) for the current move operation" +
                                "\n" +
                                "ColorTemperatureMireds <= ColorTemperatureMaximumMireds field <= ColorTempPhysicalMaxMireds" +
                                "\n" +
                                "As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the " +
                                "ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. " +
                                "If the ColorTemperatureMaximumMireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as " +
                                "the upper bound for the ColorTemperatureMireds attribute.",

                            xref: { document: "cluster", section: "3.2.11.21.4" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x5, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Command({
                    name: "StepColorTemperature", id: 0x4c, access: "O", conformance: "CT", direction: "request",
                    response: "status",
                    details: "The StepColorTemperature command allows the color temperature of a lamp to be stepped with a " +
                        "specified step size.",
                    xref: { document: "cluster", section: "3.2.11.22" },

                    children: [
                        Field({
                            name: "StepMode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                            details: "This field is identical to the StepMode field of the StepHue command of the Color Control cluster " +
                                "(see sub-clause StepHue Command).",
                            xref: { document: "cluster", section: "3.2.11.22.1" }
                        }),

                        Field({
                            name: "StepSize", id: 0x1, type: "uint16", conformance: "M",
                            details: "The StepSize field specifies the change to be added to (or subtracted from) the current value of " +
                                "the device’s color temperature.",
                            xref: { document: "cluster", section: "3.2.11.22.2" }
                        }),

                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
                            details: "The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken " +
                                "to perform the step. A step is a change to the device’s color temperature of a magnitude " +
                                "corresponding to the StepSize field.",
                            xref: { document: "cluster", section: "3.2.11.22.3" }
                        }),

                        Field({
                            name: "ColorTemperatureMinimumMireds", id: 0x3, type: "uint16", conformance: "M",
                            constraint: "0 to 65279",

                            details: "The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds " +
                                "attribute (≡ an upper bound on the color temperature in kelvins) for the current step operation" +
                                "\n" +
                                "ColorTempPhysicalMinMireds <= ColorTemperatureMinimumMireds field <= ColorTemperatureMireds" +
                                "\n" +
                                "As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the " +
                                "Color Temperature Minimum Mireds field it shall be clipped so that the above invariant is " +
                                "satisfied. If the ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall " +
                                "be used as the lower bound for the ColorTemperatureMireds attribute.",

                            xref: { document: "cluster", section: "3.2.11.22.4" }
                        }),

                        Field({
                            name: "ColorTemperatureMaximumMireds", id: 0x4, type: "uint16", conformance: "M",
                            constraint: "0 to 65279",

                            details: "The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds " +
                                "attribute (≡ a lower bound on the color temperature in kelvins) for the current step operation" +
                                "\n" +
                                "ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds" +
                                "\n" +
                                "As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the " +
                                "ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. " +
                                "If the ColorTemperatureMaximum Mireds field is set to 0, ColorTempPhysicalMaxMireds shall be used " +
                                "as the upper bound for the ColorTemperatureMireds attribute.",

                            xref: { document: "cluster", section: "3.2.11.22.5" }
                        }),

                        Field({
                            name: "OptionsMask", id: 0x5, type: "Options", conformance: "M", constraint: "desc", default: 0
                        }),
                        Field({
                            name: "OptionsOverride", id: 0x6, type: "Options", conformance: "M", constraint: "desc", default: 0
                        })
                    ]
                }),

                Datatype({
                    name: "Direction", type: "enum8",
                    xref: { document: "cluster", section: "3.2.11.4.2" },

                    children: [
                        Field({ name: "ShortestDistance", id: 0x0 }),
                        Field({ name: "LongestDistance", id: 0x1 }),
                        Field({ name: "Up", id: 0x2 }),
                        Field({ name: "Down", id: 0x3 })
                    ]
                }),

                Datatype({
                    name: "MoveMode", type: "enum8",
                    xref: { document: "cluster", section: "3.2.11.8.1" },
                    children: [
                        Field({ name: "Stop", id: 0x0 }),
                        Field({ name: "Up", id: 0x1 }),
                        Field({ name: "Down", id: 0x3 })
                    ]
                }),

                Datatype({
                    name: "StepMode", type: "enum8",
                    xref: { document: "cluster", section: "3.2.11.9.1" },
                    children: [Field({ name: "Up", id: 0x1 }), Field({ name: "Down", id: 0x3 })]
                })
            ]
        }),

        Cluster({
            name: "BallastConfiguration", id: 0x301, classification: "application",
            details: "This cluster is used for configuring a lighting ballast." +
                "\n" +
                "NOTE Support for Ballast Configuration cluster is provisional.",
            xref: { document: "cluster", section: "3.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

                Attribute({
                    name: "PhysicalMinLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
                    constraint: "1 to 254", default: 1,
                    details: "This attribute shall specify the minimum light output the ballast can achieve according to the " +
                        "dimming light curve (see Dimming Curve).",
                    xref: { document: "cluster", section: "3.3.6.1" }
                }),

                Attribute({
                    name: "PhysicalMaxLevel", id: 0x1, type: "uint8", access: "R V", conformance: "M",
                    constraint: "1 to 254", default: 254,
                    details: "This attribute shall specify the maximum light output the ballast can achieve according to the " +
                        "dimming light curve (see Dimming Curve).",
                    xref: { document: "cluster", section: "3.3.6.2" }
                }),

                Attribute({
                    name: "BallastStatus", id: 0x2, type: "BallastStatusBitmap", access: "R V", conformance: "O",
                    default: "0",
                    details: "This attribute shall specify the status of various aspects of the ballast or the connected lights, " +
                        "see BallastStatusBitmap.",
                    xref: { document: "cluster", section: "3.3.6.3" }
                }),

                Attribute({
                    name: "MinLevel", id: 0x10, type: "uint8", access: "RW VM", conformance: "M",
                    constraint: "physicalMinLevel to maxLevel",
                    default: { type: "reference", name: "PhysicalMinLevel" },

                    details: "This attribute shall specify the light output of the ballast according to the dimming light curve " +
                        "(see Dimming Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 1 (and the " +
                        "On/Off Cluster’s OnOff attribute equals to TRUE)." +
                        "\n" +
                        "The value of this attribute shall be both greater than or equal to PhysicalMinLevel and less than " +
                        "or equal to MaxLevel. If an attempt is made to set this attribute to a level where these conditions " +
                        "are not met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level " +
                        "shall NOT be set.",

                    xref: { document: "cluster", section: "3.3.6.4" }
                }),

                Attribute({
                    name: "MaxLevel", id: 0x11, type: "uint8", access: "RW VM", conformance: "M",
                    constraint: "minLevel to physicalMaxLevel",
                    default: { type: "reference", name: "PhysicalMaxLevel" },

                    details: "This attribute shall specify the light output of the ballast according to the dimming light curve " +
                        "(see Dimming Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 254" +
                        "\n" +
                        "On/Off Cluster’s OnOff attribute equals to TRUE)." +
                        "\n" +
                        "The value of this attribute shall be both less than or equal to PhysicalMaxLevel and greater than " +
                        "or equal to MinLevel. If an attempt is made to set this attribute to a level where these conditions " +
                        "are not met, a response shall be returned with status code set to CONSTRAINT_ERROR, and the level " +
                        "shall NOT be set.",

                    xref: { document: "cluster", section: "3.3.6.5" }
                }),

                Attribute({
                    name: "PowerOnLevel", id: 0x12, conformance: "D",
                    xref: { document: "cluster", section: "3.3.6" }
                }),
                Attribute({
                    name: "PowerOnFadeTime", id: 0x13, conformance: "D",
                    xref: { document: "cluster", section: "3.3.6" }
                }),

                Attribute({
                    name: "IntrinsicBallastFactor", id: 0x14, type: "uint8", access: "RW VM", conformance: "O",
                    quality: "X",
                    details: "This attribute shall specify the ballast factor, as a percentage, of the ballast/lamp combination, " +
                        "prior to any adjustment." +
                        "\n" +
                        "A value of null indicates in invalid value.",
                    xref: { document: "cluster", section: "3.3.6.6" }
                }),

                Attribute({
                    name: "BallastFactorAdjustment", id: 0x15, type: "uint8", access: "RW VM", conformance: "O",
                    constraint: "100 to ms", default: null, quality: "X",

                    details: "This attribute shall specify the multiplication factor, as a percentage, to be applied to the " +
                        "configured light output of the lamps. A typical use for this attribute is to compensate for " +
                        "reduction in efficiency over the lifetime of a lamp." +
                        "\n" +
                        "The light output is given by" +
                        "\n" +
                        "actual light output = configured light output x BallastFactorAdjustment / 100%" +
                        "\n" +
                        "The range for this attribute is manufacturer dependent. If an attempt is made to set this attribute " +
                        "to a level that cannot be supported, a response shall be returned with status code set to " +
                        "CONSTRAINT_ERROR, and the level shall NOT be changed. The value of null indicates that ballast " +
                        "factor scaling is not in use.",

                    xref: { document: "cluster", section: "3.3.6.7" }
                }),

                Attribute({
                    name: "LampQuantity", id: 0x20, type: "uint8", access: "R V", conformance: "M",
                    details: "This attribute shall specify the number of lamps connected to this ballast. (Note 1: this number " +
                        "does not take into account whether lamps are actually in their sockets or not).",
                    xref: { document: "cluster", section: "3.3.6.8" }
                }),

                Attribute({
                    name: "LampType", id: 0x30, type: "string", access: "RW VM", conformance: "O", constraint: "max 16",
                    default: "emptystring",
                    details: "This attribute shall specify the type of lamps (including their wattage) connected to the ballast.",
                    xref: { document: "cluster", section: "3.3.6.9" }
                }),

                Attribute({
                    name: "LampManufacturer", id: 0x31, type: "string", access: "RW VM", conformance: "O",
                    constraint: "max 16", default: "emptystring",
                    details: "This attribute shall specify the name of the manufacturer of the currently connected lamps.",
                    xref: { document: "cluster", section: "3.3.6.10" }
                }),

                Attribute({
                    name: "LampRatedHours", id: 0x32, type: "uint24", access: "RW VM", conformance: "O", default: null,
                    quality: "X",
                    details: "This attribute shall specify the number of hours of use the lamps are rated for by the manufacturer." +
                        "\n" +
                        "A value of null indicates an invalid or unknown time.",
                    xref: { document: "cluster", section: "3.3.6.11" }
                }),

                Attribute({
                    name: "LampBurnHours", id: 0x33, type: "uint24", access: "RW VM", conformance: "O", default: 0,
                    quality: "X",

                    details: "This attribute shall specify the length of time, in hours, the currently connected lamps have been " +
                        "operated, cumulative since the last re-lamping. Burn hours shall NOT be accumulated if the lamps " +
                        "are off." +
                        "\n" +
                        "This attribute SHOULD be reset to zero (e.g., remotely) when the lamps are changed. If partially " +
                        "used lamps are connected, LampBurnHours SHOULD be updated to reflect the burn hours of the lamps." +
                        "\n" +
                        "A value of null indicates an invalid or unknown time.",

                    xref: { document: "cluster", section: "3.3.6.12" }
                }),

                Attribute({
                    name: "LampAlarmMode", id: 0x34, type: "LampAlarmModeBitmap", access: "RW VM", conformance: "O",
                    default: "0",
                    details: "This attribute shall specify which attributes may cause an alarm notification to be generated. A 1 " +
                        "in each bit position means that its associated attribute is able to generate an alarm. (Note: All " +
                        "alarms are also logged in the alarm table – see Alarms cluster).",
                    xref: { document: "cluster", section: "3.3.6.13" }
                }),

                Attribute({
                    name: "LampBurnHoursTripPoint", id: 0x35, type: "uint24", access: "RW VM", conformance: "O",
                    default: null, quality: "X",

                    details: "This attribute shall specify the number of hours the LampBurnHours attribute may reach before an " +
                        "alarm is generated." +
                        "\n" +
                        "If the Alarms cluster is not present on the same device this attribute is not used and thus may be " +
                        "omitted (see Dependencies)." +
                        "\n" +
                        "The Alarm Code field included in the generated alarm shall be 0x01." +
                        "\n" +
                        "If this attribute has the value of null, then this alarm shall NOT be generated.",

                    xref: { document: "cluster", section: "3.3.6.14" }
                })
            ]
        }),

        Cluster({
            name: "PumpConfigurationAndControl", id: 0x200, classification: "application",
            details: "The Pump Configuration and Control cluster provides an interface for the setup and control of pump " +
                "devices, and the automatic reporting of pump status information. Note that control of pump speed is " +
                "not included – speed is controlled by the On/Off and Level Control clusters.",
            xref: { document: "cluster", section: "4.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "4.2.4" },

                    children: [
                        Field({
                            name: "PRSCONST", conformance: "O.a+", constraint: "0", description: "ConstantPressure",
                            details: "Supports operating in constant pressure mode"
                        }),
                        Field({
                            name: "PRSCOMP", conformance: "O.a+", constraint: "1", description: "CompensatedPressure",
                            details: "Supports operating in compensated pressure mode"
                        }),
                        Field({
                            name: "FLW", conformance: "O.a+", constraint: "2", description: "ConstantFlow",
                            details: "Supports operating in constant flow mode"
                        }),
                        Field({
                            name: "SPD", conformance: "O.a+", constraint: "3", description: "ConstantSpeed",
                            details: "Supports operating in constant speed mode"
                        }),
                        Field({
                            name: "TEMP", conformance: "O.a+", constraint: "4", description: "ConstantTemperature",
                            details: "Supports operating in constant temperature mode"
                        }),
                        Field({
                            name: "AUTO", conformance: "O", constraint: "5", description: "Automatic",
                            details: "Supports operating in automatic mode"
                        }),
                        Field({
                            name: "LOCAL", conformance: "O", constraint: "6", description: "LocalOperation",
                            details: "Supports operating using local settings"
                        })
                    ]
                }),

                Attribute({
                    name: "MaxPressure", id: 0x0, type: "int16", access: "R V", conformance: "M", default: null,
                    quality: "X F",
                    details: "This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and " +
                        "does not apply to any specific control mode or operation mode." +
                        "\n" +
                        "Valid range is -3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the " +
                        "value is invalid.",
                    xref: { document: "cluster", section: "4.2.7.1" }
                }),

                Attribute({
                    name: "MaxSpeed", id: 0x1, type: "uint16", access: "R V", conformance: "M", default: null,
                    quality: "X F",
                    details: "This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does " +
                        "not apply to any specific control mode or operation mode." +
                        "\n" +
                        "Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is " +
                        "invalid.",
                    xref: { document: "cluster", section: "4.2.7.2" }
                }),

                Attribute({
                    name: "MaxFlow", id: 0x2, type: "uint16", access: "R V", conformance: "M", default: null,
                    quality: "X F",
                    details: "This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does " +
                        "not apply to any specific control mode or operation mode." +
                        "\n" +
                        "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value " +
                        "is invalid.",
                    xref: { document: "cluster", section: "4.2.7.3" }
                }),

                Attribute({
                    name: "MinConstPressure", id: 0x3, type: "int16", access: "R V", conformance: "PRSCONST, [AUTO]",
                    default: null, quality: "X F",
                    details: "This attribute specifies the minimum pressure the pump can achieve when it is working with the " +
                        "ControlMode attribute set to ConstantPressure." +
                        "\n" +
                        "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the " +
                        "value is invalid.",
                    xref: { document: "cluster", section: "4.2.7.4" }
                }),

                Attribute({
                    name: "MaxConstPressure", id: 0x4, type: "int16", access: "R V", conformance: "PRSCONST, [AUTO]",
                    default: null, quality: "X F",
                    details: "This attribute specifies the maximum pressure the pump can achieve when it is working with the " +
                        "ControlMode attribute set to ConstantPressure." +
                        "\n" +
                        "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the " +
                        "value is invalid.",
                    xref: { document: "cluster", section: "4.2.7.5" }
                }),

                Attribute({
                    name: "MinCompPressure", id: 0x5, type: "int16", access: "R V", conformance: "PRSCOMP, [AUTO]",
                    default: null, quality: "X F",
                    details: "This attribute specifies the minimum compensated pressure the pump can achieve when it is working " +
                        "with the ControlMode attribute set to ProportionalPressure." +
                        "\n" +
                        "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the " +
                        "value is invalid.",
                    xref: { document: "cluster", section: "4.2.7.6" }
                }),

                Attribute({
                    name: "MaxCompPressure", id: 0x6, type: "int16", access: "R V", conformance: "PRSCOMP, [AUTO]",
                    default: null, quality: "X F",
                    details: "This attribute specifies the maximum compensated pressure the pump can achieve when it is working " +
                        "with the ControlMode attribute set to ProportionalPressure." +
                        "\n" +
                        "Valid range is –3,276.7 kPa to 3,276.7 kPa (steps of 0.1 kPa). This attribute shall be null if the " +
                        "value is invalid.",
                    xref: { document: "cluster", section: "4.2.7.7" }
                }),

                Attribute({
                    name: "MinConstSpeed", id: 0x7, type: "uint16", access: "R V", conformance: "SPD, [AUTO]",
                    default: null, quality: "X F",
                    details: "This attribute specifies the minimum speed the pump can achieve when it is working with the " +
                        "ControlMode attribute set to ConstantSpeed." +
                        "\n" +
                        "Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is " +
                        "invalid.",
                    xref: { document: "cluster", section: "4.2.7.8" }
                }),

                Attribute({
                    name: "MaxConstSpeed", id: 0x8, type: "uint16", access: "R V", conformance: "SPD, [AUTO]",
                    default: null, quality: "X F",
                    details: "This attribute specifies the maximum speed the pump can achieve when it is working with the " +
                        "ControlMode attribute set to ConstantSpeed." +
                        "\n" +
                        "Valid range is 0 to 65,534 RPM (steps of 1 RPM). This attribute shall be null if the value is " +
                        "invalid.",
                    xref: { document: "cluster", section: "4.2.7.9" }
                }),

                Attribute({
                    name: "MinConstFlow", id: 0x9, type: "uint16", access: "R V", conformance: "FLW, [AUTO]",
                    default: null, quality: "X F",

                    details: "This attribute specifies the minimum flow the pump can achieve when it is working with the Con" +
                        "\n" +
                        "trolMode attribute set to ConstantFlow." +
                        "\n" +
                        "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value " +
                        "is invalid.",

                    xref: { document: "cluster", section: "4.2.7.10" }
                }),

                Attribute({
                    name: "MaxConstFlow", id: 0xa, type: "uint16", access: "R V", conformance: "FLW, [AUTO]",
                    default: null, quality: "X F",
                    details: "This attribute specifies the maximum flow the pump can achieve when it is working with the " +
                        "ControlMode attribute set to ConstantFlow." +
                        "\n" +
                        "Valid range is 0 m/h to 6,553.4 m/h (steps of 0.1 m/h). This attribute shall be null if the value " +
                        "is invalid.",
                    xref: { document: "cluster", section: "4.2.7.11" }
                }),

                Attribute({
                    name: "MinConstTemp", id: 0xb, type: "int16", access: "R V", conformance: "TEMP, [AUTO]",
                    constraint: "min -27315", default: null, quality: "X F",
                    details: "This attribute specifies the minimum temperature the pump can maintain in the system when it is " +
                        "working with the ControlMode attribute set to ConstantTemperature." +
                        "\n" +
                        "Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the " +
                        "value is invalid.",
                    xref: { document: "cluster", section: "4.2.7.12" }
                }),

                Attribute({
                    name: "MaxConstTemp", id: 0xc, type: "int16", access: "R V", conformance: "TEMP, [AUTO]",
                    constraint: "min -27315", default: null, quality: "X F",

                    details: "This attribute specifies the maximum temperature the pump can maintain in the system when it is " +
                        "working with the ControlMode attribute set to ConstantTemperature." +
                        "\n" +
                        "MaxConstTemp shall be greater than or equal to MinConstTemp" +
                        "\n" +
                        "Valid range is –273.15 °C to 327.67 °C (steps of 0.01 °C). This attribute shall be null if the " +
                        "value is invalid.",

                    xref: { document: "cluster", section: "4.2.7.13" }
                }),

                Attribute({
                    name: "PumpStatus", id: 0x10, type: "PumpStatusBitmap", access: "R V", conformance: "O",
                    constraint: "desc", default: "0", quality: "P",
                    details: "This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. " +
                        "Where a pump controller function is active, the corresponding bit shall be set to 1. Where a pump " +
                        "controller function is not active, the corresponding bit shall be set to 0.",
                    xref: { document: "cluster", section: "4.2.7.14" }
                }),

                Attribute({
                    name: "EffectiveOperationMode", id: 0x11, type: "OperationModeEnum", access: "R V",
                    conformance: "M", constraint: "desc", quality: "N",

                    details: "This attribute specifies current effective operation mode of the pump as defined in " +
                        "OperationModeEnum." +
                        "\n" +
                        "The value of the EffectiveOperationMode attribute is the same as the OperationMode attribute, " +
                        "unless one of the following points are true:" +
                        "\n" +
                        "  • The pump is physically set to run with the local settings" +
                        "\n" +
                        "  • The LocalOverride bit in the PumpStatus attribute is set," +
                        "\n" +
                        "See OperationMode and ControlMode attributes for a detailed description of the operation and " +
                        "control of the pump.",

                    xref: { document: "cluster", section: "4.2.7.15" }
                }),

                Attribute({
                    name: "EffectiveControlMode", id: 0x12, type: "ControlModeEnum", access: "R V", conformance: "M",
                    constraint: "desc", quality: "N",

                    details: "This attribute specifies the current effective control mode of the pump as defined in " +
                        "ControlModeEnum." +
                        "\n" +
                        "This attribute contains the control mode that currently applies to the pump. It will have the value " +
                        "of the ControlMode attribute, unless one of the following points are true:" +
                        "\n" +
                        "  • The ControlMode attribute is set to Automatic. In this case, the value of the " +
                        "    EffectiveControlMode shall match the behavior of the pump." +
                        "\n" +
                        "  • A remote sensor is used as the sensor for regulation of the pump. In this case, " +
                        "    EffectiveControlMode will display ConstantPressure, ConstantFlow or ConstantTemperature if the " +
                        "    remote sensor is a pressure sensor, a flow sensor or a temperature sensor respectively, " +
                        "    regardless of the value of the ControlMode attribute." +
                        "\n" +
                        "In case the ControlMode attribute is not included on the device and no remote sensors are " +
                        "connected, the value of the EffectiveControlMode shall match the vendor-specific behavior of the " +
                        "pump." +
                        "\n" +
                        "See OperationMode and ControlMode attributes for detailed a description of the operation and " +
                        "control of the pump.",

                    xref: { document: "cluster", section: "4.2.7.16" }
                }),

                Attribute({
                    name: "Capacity", id: 0x13, type: "int16", access: "R V", conformance: "M", default: null,
                    quality: "X P",

                    details: "This attribute specifies the actual capacity of the pump as a percentage of the effective maximum " +
                        "setpoint value. It is updated dynamically as the speed of the pump changes." +
                        "\n" +
                        "If the value is not available (the measurement or estimation of the speed is done in the pump), " +
                        "this attribute will indicate the null value." +
                        "\n" +
                        "Valid range is 0 % to 163.835% (0.005 % granularity). Although this attribute is a signed value, " +
                        "values of capacity less than zero have no physical meaning.",

                    xref: { document: "cluster", section: "4.2.7.17" }
                }),

                Attribute({
                    name: "Speed", id: 0x14, type: "uint16", access: "R V", conformance: "O", default: null,
                    quality: "X",

                    details: "This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as " +
                        "the speed of the pump changes." +
                        "\n" +
                        "If the value is not available (the measurement or estimation of the speed is done in the pump), " +
                        "this attribute will indicate the null value." +
                        "\n" +
                        "Valid range is 0 to 65.534 RPM.",

                    xref: { document: "cluster", section: "4.2.7.18" }
                }),

                Attribute({
                    name: "LifetimeRunningHours", id: 0x15, type: "uint24", access: "RW VM", conformance: "O",
                    default: 0, quality: "X N",

                    details: "This attribute specifies the accumulated number of hours that the pump has been powered and the " +
                        "motor has been running. It is updated dynamically as it increases. It is preserved over power " +
                        "cycles of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at " +
                        "0 (zero)." +
                        "\n" +
                        "This attribute is writeable, in order to allow setting to an appropriate value after maintenance. If" +
                        "\n" +
                        "the value is not available, this attribute will indicate the null value. Valid range is 0 to " +
                        "16,777,214 hrs.",

                    xref: { document: "cluster", section: "4.2.7.19" }
                }),

                Attribute({
                    name: "Power", id: 0x16, type: "uint24", access: "R V", conformance: "O", default: null,
                    quality: "X",

                    details: "This attribute specifies the actual power consumption of the pump in Watts. The value of this " +
                        "attribute is updated dynamically as the power consumption of the pump changes." +
                        "\n" +
                        "This attribute is read only. If the value is not available (the measurement of power consumption is " +
                        "not done in the pump), this attribute will indicate the null value." +
                        "\n" +
                        "Valid range is 0 to 16,777,214 Watts.",

                    xref: { document: "cluster", section: "4.2.7.20" }
                }),

                Attribute({
                    name: "LifetimeEnergyConsumed", id: 0x17, type: "uint32", access: "RW VM", conformance: "O",
                    default: 0, quality: "X N",

                    details: "This attribute specifies the accumulated energy consumption of the pump through the entire lifetime " +
                        "of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the " +
                        "energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it " +
                        "“rolls over” and starts at 0 (zero)." +
                        "\n" +
                        "This attribute is writeable, in order to allow setting to an appropriate value after maintenance." +
                        "\n" +
                        "Valid range is 0 kWh to 4,294,967,294 kWh." +
                        "\n" +
                        "This attribute shall be null if the value is unknown." +
                        "\n" +
                        "### ‌4.2.7.22. OperationMode Attribute" +
                        "\n" +
                        "This attribute specifies the operation mode of the pump as defined in OperationModeEnum." +
                        "\n" +
                        "The actual operating mode of the pump is a result of the setting of the attributes OperationMode, " +
                        "ControlMode and the optional connection of a remote sensor. The operation and control is " +
                        "prioritized as shown in the scheme below:" +
                        "\n" +
                        "Priority Scheme of Pump Operation and Control" +
                        "\n" +
                        "If this attribute is Maximum, Minimum or Local, the OperationMode attribute decides how the pump is " +
                        "operated." +
                        "\n" +
                        "If this attribute is Normal and a remote sensor is connected to the pump, the type of the remote " +
                        "sensor decides the control mode of the pump. A connected remote pressure sensor will make the pump " +
                        "run in control mode Constant pressure and vice versa for flow and temperature type sensors. This is " +
                        "regardless of the setting of the ControlMode attribute." +
                        "\n" +
                        "If this attribute is Normal and no remote sensor is connected, the control mode of the pump is " +
                        "decided by the ControlMode attribute." +
                        "\n" +
                        "OperationMode may be changed at any time, even when the pump is running. The behavior of the pump " +
                        "at the point of changing the value of this attribute is vendor-specific." +
                        "\n" +
                        "In the case a device does not support a specific operation mode, the write interaction to this " +
                        "attribute with an unsupported operation mode value shall be ignored and a response containing the " +
                        "status of CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "### ‌4.2.7.23. ControlMode Attribute" +
                        "\n" +
                        "This attribute specifies the control mode of the pump as defined in ControlModeEnum." +
                        "\n" +
                        "See the OperationMode attribute for a detailed description of the operation and control of the" +
                        "\n" +
                        "pump." +
                        "\n" +
                        "ControlMode may be changed at any time, even when the pump is running. The behavior of the pump at " +
                        "the point of changing is vendor-specific." +
                        "\n" +
                        "In the case a device does not support a specific control mode, the write interaction to this " +
                        "attribute with an unsupported control mode value shall be ignored and a response containing the " +
                        "status of CONSTRAINT_ERROR shall be returned.",

                    xref: { document: "cluster", section: "4.2.7.21" }
                }),

                Attribute({
                    name: "OperationMode", id: 0x20, type: "OperationModeEnum", access: "RW VM", conformance: "M",
                    constraint: "desc", default: "0", quality: "N",
                    xref: { document: "cluster", section: "4.2.7" }
                }),
                Attribute({
                    name: "ControlMode", id: 0x21, type: "ControlModeEnum", access: "RW VM", conformance: "O",
                    constraint: "desc", default: "0", quality: "N",
                    xref: { document: "cluster", section: "4.2.7" }
                }),
                Attribute({
                    name: "AlarmMask", id: 0x22, type: "map16", access: "R V", conformance: "D", constraint: "desc",
                    default: 0, quality: "N",
                    xref: { document: "cluster", section: "4.2.7" }
                }),
                Event({
                    name: "SupplyVoltageLow", id: 0x0, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "SupplyVoltageHigh", id: 0x1, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "PowerMissingPhase", id: 0x2, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "SystemPressureLow", id: 0x3, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "SystemPressureHigh", id: 0x4, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "DryRunning", id: 0x5, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "MotorTemperatureHigh", id: 0x6, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "PumpMotorFatalFailure", id: 0x7, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "ElectronicTemperatureHigh", id: 0x8, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "PumpBlocked", id: 0x9, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "SensorFailure", id: 0xa, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "ElectronicNonFatalFailure", id: 0xb, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "ElectronicFatalFailure", id: 0xc, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "GeneralFault", id: 0xd, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "Leakage", id: 0xe, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "AirDetection", id: 0xf, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),
                Event({
                    name: "TurbineOperation", id: 0x10, access: "V", conformance: "O", priority: "info",
                    xref: { document: "cluster", section: "4.2.8" }
                }),

                Datatype({
                    name: "ConstantSpeed Value", type: "the",
                    details: "The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – " +
                        "MaxConstSpeed] attributes.",
                    xref: { document: "cluster", section: "4.2.6.3.1" }
                }),

                Datatype({
                    name: "ConstantPressure Value", type: "the",
                    details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                        "In case of the internal pressure sensor, this will be the range derived from the [MinConstPressure " +
                        "– MaxConstPressure] attributes. In case of a remote pressure sensor, this will be the range derived " +
                        "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote pressure sensor.",
                    xref: { document: "cluster", section: "4.2.6.3.2" }
                }),

                Datatype({
                    name: "ConstantFlow Value", type: "the",
                    details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                        "In case of the internal flow sensor, this will be the range derived from the [MinConstFlow – " +
                        "MaxConstFlow] attributes. In case of a remote flow sensor, this will be the range derived from the " +
                        "[MinMeasuredValue – MaxMeasuredValue] attributes of the remote flow sensor.",
                    xref: { document: "cluster", section: "4.2.6.3.4" }
                }),

                Datatype({
                    name: "ConstantTemperature Value", type: "the",
                    details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                        "In case of the internal temperature sensor, this will be the range derived from the [MinConstTemp – " +
                        "MaxConstTemp] attributes. In case of a remote temperature sensor, this will be the range derived " +
                        "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote temperature sensor.",
                    xref: { document: "cluster", section: "4.2.6.3.5" }
                })
            ]
        }),

        Cluster({
            name: "Thermostat", id: 0x201, classification: "application",
            details: "This cluster provides an interface to the functionality of a thermostat.",
            xref: { document: "cluster", section: "4.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "4.3.4" },

                    children: [
                        Field({
                            name: "HEAT", conformance: "AUTO, O.a+", constraint: "0", description: "Heating",
                            details: "Thermostat is capable of managing a heating device"
                        }),
                        Field({
                            name: "COOL", conformance: "AUTO, O.a+", constraint: "1", description: "Cooling",
                            details: "Thermostat is capable of managing a cooling device"
                        }),
                        Field({
                            name: "OCC", conformance: "O", constraint: "2", description: "Occupancy",
                            details: "Supports Occupied and Unoccupied setpoints"
                        }),
                        Field({
                            name: "SCH", conformance: "O", constraint: "3", description: "ScheduleConfiguration",
                            details: "Supports remote configuration of a weekly schedule of setpoint transitions"
                        }),
                        Field({
                            name: "SB", conformance: "O", constraint: "4", description: "Setback",
                            details: "Supports configurable setback (or span)"
                        }),
                        Field({
                            name: "AUTO", conformance: "O", constraint: "5", description: "AutoMode",
                            details: "Supports a System Mode of Auto"
                        }),
                        Field({
                            name: "LTNE", conformance: "O", constraint: "6", description: "LocalTemperatureNotExposed",
                            details: "Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute"
                        })
                    ]
                }),

                Attribute({
                    name: "LocalTemperature", id: 0x0, type: "temperature", access: "R V", conformance: "M",
                    default: "null", quality: "X P",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "OutdoorTemperature", id: 0x1, type: "temperature", access: "R V", conformance: "O",
                    default: "null", quality: "X",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "Occupancy", id: 0x2, type: "OccupancyBitmap", access: "R V", conformance: "OCC",
                    constraint: "desc", default: "1",

                    details: "This attribute shall indicate whether the heated/cooled space is occupied or not, as measured " +
                        "locally or remotely (over the network)." +
                        "\n" +
                        "### ‌4.3.9.6. AbsMinHeatSetpointLimit Attribute" +
                        "\n" +
                        "This attribute shall indicate the absolute minimum level that the heating setpoint may be set to. " +
                        "This is a limitation imposed by the manufacturer." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints" +
                        "\n" +
                        "### ‌4.3.9.7. AbsMaxHeatSetpointLimit Attribute" +
                        "\n" +
                        "This attribute shall indicate the absolute maximum level that the heating setpoint may be set to. " +
                        "This is a limitation imposed by the manufacturer." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints" +
                        "\n" +
                        "### ‌4.3.9.8. AbsMinCoolSetpointLimit Attribute" +
                        "\n" +
                        "This attribute shall indicate the absolute minimum level that the cooling setpoint may be set to. " +
                        "This is a limitation imposed by the manufacturer." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints" +
                        "\n" +
                        "### ‌4.3.9.9. AbsMaxCoolSetpointLimit Attribute" +
                        "\n" +
                        "This attribute shall indicate the absolute maximum level that the cooling setpoint may be set to. " +
                        "This is a limitation imposed by the manufacturer." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints",

                    xref: { document: "cluster", section: "4.3.9.5" }
                }),

                Attribute({
                    name: "AbsMinHeatSetpointLimit", id: 0x3, type: "temperature", access: "R V", conformance: "[HEAT]",
                    constraint: "desc", default: "7°C", quality: "F",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "AbsMaxHeatSetpointLimit", id: 0x4, type: "temperature", access: "R V", conformance: "[HEAT]",
                    constraint: "desc", default: "30°C", quality: "F",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "AbsMinCoolSetpointLimit", id: 0x5, type: "temperature", access: "R V", conformance: "[COOL]",
                    constraint: "desc", default: "16°C", quality: "F",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "AbsMaxCoolSetpointLimit", id: 0x6, type: "temperature", access: "R V", conformance: "[COOL]",
                    constraint: "desc", default: "32°C", quality: "F",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "PiCoolingDemand", id: 0x7, type: "uint8", access: "R V", conformance: "[COOL]",
                    constraint: "0%'; to 100%';", quality: "P",
                    details: "This attribute shall indicate the level of cooling demanded by the PI (proportional integral) " +
                        "control loop in use by the thermostat (if any), in percent. This value is 0 when the thermostat is " +
                        "in “off” or “heating” mode." +
                        "\n" +
                        "This attribute is reported regularly and may be used to control a cooling device.",
                    xref: { document: "cluster", section: "4.3.9.10" }
                }),

                Attribute({
                    name: "PiHeatingDemand", id: 0x8, type: "uint8", access: "R V", conformance: "[HEAT]",
                    constraint: "0%'; to 100%';", quality: "P",
                    details: "This attribute shall indicate the level of heating demanded by the PI loop in percent. This value " +
                        "is 0 when the thermostat is in “off” or “cooling” mode." +
                        "\n" +
                        "This attribute is reported regularly and may be used to control a heating device.",
                    xref: { document: "cluster", section: "4.3.9.11" }
                }),

                Attribute({
                    name: "HvacSystemTypeConfiguration", id: 0x9, type: "HVACSystemTypeBitmap", access: "R[W] VM",
                    conformance: "D", constraint: "desc", default: "0", quality: "N",

                    details: "This attribute shall indicate the HVAC system type controlled by the thermostat. If the thermostat " +
                        "uses physical DIP switches to set these parameters, this information shall be available read-only " +
                        "from the DIP switches. If these parameters are set via software, there shall be read/write access " +
                        "in order to provide remote programming capability." +
                        "\n" +
                        "### ‌4.3.9.13. LocalTemperatureCalibration Attribute" +
                        "\n" +
                        "This attribute shall indicate the offset the Thermostat server shall make to the measured " +
                        "temperature (locally or remotely) to adjust the Calculated Local Temperature prior to using, " +
                        "displaying or reporting it." +
                        "\n" +
                        "The purpose of this attribute is to adjust the calibration of the Thermostat server per the user’s " +
                        "preferences (e.g., to match if there are multiple servers displaying different values for the same " +
                        "HVAC area) or compensate for variability amongst temperature sensors." +
                        "\n" +
                        "If a Thermostat client attempts to write LocalTemperatureCalibration attribute to an unsupported " +
                        "value (e.g., out of the range supported by the Thermostat server), the Thermostat server shall " +
                        "respond with a status of SUCCESS and set the value of LocalTemperatureCalibration to the upper or " +
                        "lower limit reached." +
                        "\n" +
                        "### ‌4.3.9.14. OccupiedCoolingSetpoint Attribute" +
                        "\n" +
                        "This attribute shall indicate the cooling mode setpoint when the room is occupied." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
                        "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "If the occupancy status of the room is unknown, this attribute shall be used as the cooling mode " +
                        "setpoint." +
                        "\n" +
                        "### ‌4.3.9.15. OccupiedHeatingSetpoint Attribute" +
                        "\n" +
                        "This attribute shall indicate the heating mode setpoint when the room is occupied." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
                        "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "If the occupancy status of the room is unknown, this attribute shall be used as the heating mode " +
                        "setpoint." +
                        "\n" +
                        "### ‌4.3.9.16. UnoccupiedCoolingSetpoint Attribute" +
                        "\n" +
                        "This attribute shall indicate the cooling mode setpoint when the room is unoccupied." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
                        "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "If the occupancy status of the room is unknown, this attribute shall not be used." +
                        "\n" +
                        "### ‌4.3.9.17. UnoccupiedHeatingSetpoint Attribute" +
                        "\n" +
                        "This attribute shall indicate the heating mode setpoint when the room is unoccupied." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute such that " +
                        "these constraints are violated, a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "If the occupancy status of the room is unknown, this attribute shall not be used." +
                        "\n" +
                        "### ‌4.3.9.18. MinHeatSetpointLimit Attribute" +
                        "\n" +
                        "This attribute shall indicate the minimum level that the heating setpoint may be set to." +
                        "\n" +
                        "This attribute, and the following three attributes, allow the user to define setpoint limits more " +
                        "constrictive than the manufacturer imposed ones. Limiting users (e.g., in a commercial building) to " +
                        "such setpoint limits can help conserve power." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                        "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                        "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                        "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                        "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "### ‌4.3.9.19. MaxHeatSetpointLimit Attribute" +
                        "\n" +
                        "This attribute shall indicate the maximum level that the heating setpoint may be set to." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                        "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                        "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                        "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                        "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "### ‌4.3.9.20. MinCoolSetpointLimit Attribute" +
                        "\n" +
                        "This attribute shall indicate the minimum level that the cooling setpoint may be set to." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                        "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                        "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                        "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                        "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "### ‌4.3.9.21. MaxCoolSetpointLimit Attribute" +
                        "\n" +
                        "This attribute shall indicate the maximum level that the cooling setpoint may be set to." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                        "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                        "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                        "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                        "modifying setpoints" +
                        "\n" +
                        "then a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "### ‌4.3.9.22. MinSetpointDeadBand Attribute" +
                        "\n" +
                        "On devices which support the AUTO feature, this attribute shall indicate the minimum difference " +
                        "between the Heat Setpoint and the Cool Setpoint." +
                        "\n" +
                        "Refer to Setpoint Limits for constraints. If an attempt is made to set this attribute to a value " +
                        "which conflicts with setpoint values then those setpoints shall be adjusted by the minimum amount " +
                        "to permit this attribute to be set to the desired value. If an attempt is made to set this " +
                        "attribute to a value which is not consistent with the constraints and cannot be resolved by " +
                        "modifying setpoints then a response with the status code CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "### ‌4.3.9.23. RemoteSensing Attribute" +
                        "\n" +
                        "This attribute shall indicate when the local temperature, outdoor temperature and occupancy are " +
                        "being sensed by remote networked sensors, rather than internal sensors." +
                        "\n" +
                        "If the LTNE feature is present in the server, the LocalTemperature RemoteSensing bit value shall " +
                        "always report a value of 0." +
                        "\n" +
                        "If the LocalTemperature RemoteSensing bit is written with a value of 1 when the LTNE feature is " +
                        "present, the write shall fail and the server shall report a CONSTRAINT_ERROR." +
                        "\n" +
                        "### ‌4.3.9.24. ControlSequenceOfOperation Attribute" +
                        "\n" +
                        "This attribute shall indicate the overall operating environment of the thermostat, and thus the " +
                        "possible system modes that the thermostat can operate in." +
                        "\n" +
                        "### ‌4.3.9.25. SystemMode Attribute" +
                        "\n" +
                        "This attribute shall indicate the current operating mode of the thermostat. Its value shall be " +
                        "limited by the ControlSequenceOfOperation attribute.",

                    xref: { document: "cluster", section: "4.3.9.12" }
                }),

                Attribute({
                    name: "LocalTemperatureCalibration", id: 0x10, type: "SignedTemperature", access: "RW VM",
                    conformance: "[!LTNE]", constraint: "-2.5°C to 2.5°C", default: "0°C", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "OccupiedCoolingSetpoint", id: 0x11, type: "temperature", access: "RW VO",
                    conformance: "COOL", constraint: "desc", default: "26°C", quality: "N S",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "OccupiedHeatingSetpoint", id: 0x12, type: "temperature", access: "RW VO",
                    conformance: "HEAT", constraint: "desc", default: "20°C", quality: "N S",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "UnoccupiedCoolingSetpoint", id: 0x13, type: "temperature", access: "RW VO",
                    conformance: "COOL & OCC", constraint: "desc", default: "26°C", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "UnoccupiedHeatingSetpoint", id: 0x14, type: "temperature", access: "RW VO",
                    conformance: "HEAT & OCC", constraint: "desc", default: "20°C", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "MinHeatSetpointLimit", id: 0x15, type: "temperature", access: "RW VM", conformance: "[HEAT]",
                    constraint: "desc", default: "AbsMinHeatSetpointLimit", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "MaxHeatSetpointLimit", id: 0x16, type: "temperature", access: "RW VM", conformance: "[HEAT]",
                    constraint: "desc", default: "AbsMaxHeatSetpointLimit", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "MinCoolSetpointLimit", id: 0x17, type: "temperature", access: "RW VM", conformance: "[COOL]",
                    constraint: "desc", default: "AbsMinCoolSetpointLimit", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "MaxCoolSetpointLimit", id: 0x18, type: "temperature", access: "RW VM", conformance: "[COOL]",
                    constraint: "desc", default: "AbsMaxCoolSetpointLimit", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "MinSetpointDeadBand", id: 0x19, type: "SignedTemperature", access: "R[W] VM",
                    conformance: "AUTO", constraint: "0°C to 2.5°C", default: "2.5°C", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "RemoteSensing", id: 0x1a, type: "RemoteSensingBitmap", access: "RW VM", conformance: "O",
                    constraint: "0", default: "0", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "ControlSequenceOfOperation", id: 0x1b, type: "ThermostatControlSequence", access: "RW VM",
                    conformance: "M", constraint: "desc", default: "4", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "SystemMode", id: 0x1c, type: "ThermostatSystemMode", access: "RW VM", conformance: "M",
                    constraint: "desc", default: "1", quality: "N S",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "AlarmMask", id: 0x1d, type: "AlarmCodeBitmap", access: "R V", conformance: "O",
                    constraint: "desc", default: "0",
                    details: "This attribute shall indicate whether each of the alarms in AlarmCodeBitmap is enabled." +
                        "\n" +
                        "When the Alarms cluster is implemented on a device, and one of the alarm conditions included in " +
                        "AlarmCodeBitmap occurs, an alarm notification is generated, with the alarm code field set as listed " +
                        "in AlarmCodeBitmap.",
                    xref: { document: "cluster", section: "4.3.9.26" }
                }),

                Attribute({
                    name: "ThermostatRunningMode", id: 0x1e, type: "ThermostatSystemMode", access: "R V",
                    conformance: "[AUTO]", constraint: "desc", default: "0",
                    details: "This attribute shall indicate the running mode of the thermostat. This attribute uses the " +
                        "ThermostatSystemMode but can only be Off, Cool or Heat. This attribute is intended to provide " +
                        "additional information when the thermostat’s system mode is in auto mode.",
                    xref: { document: "cluster", section: "4.3.9.27" }
                }),

                Attribute({
                    name: "StartOfWeek", id: 0x20, type: "StartOfWeek", access: "R V", conformance: "SCH",
                    constraint: "desc", quality: "F",

                    details: "This attribute shall indicate the day of the week that this thermostat considers to be the start of" +
                        "\n" +
                        "week for weekly set point scheduling." +
                        "\n" +
                        "This attribute may be able to be used as the base to determine if the device supports weekly " +
                        "scheduling by reading the attribute. Successful response means that the weekly scheduling is " +
                        "supported.",

                    xref: { document: "cluster", section: "4.3.9.28" }
                }),

                Attribute({
                    name: "NumberOfWeeklyTransitions", id: 0x21, type: "uint8", access: "R V", conformance: "SCH",
                    default: 0, quality: "F",
                    details: "This attribute shall indicate how many weekly schedule transitions the thermostat is capable of " +
                        "handling.",
                    xref: { document: "cluster", section: "4.3.9.29" }
                }),

                Attribute({
                    name: "NumberOfDailyTransitions", id: 0x22, type: "uint8", access: "R V", conformance: "SCH",
                    default: 0, quality: "F",
                    details: "This attribute shall indicate how many daily schedule transitions the thermostat is capable of " +
                        "handling.",
                    xref: { document: "cluster", section: "4.3.9.30" }
                }),

                Attribute({
                    name: "TemperatureSetpointHold", id: 0x23, type: "TemperatureSetpointHold", access: "RW VM",
                    conformance: "O", constraint: "desc", default: "0", quality: "N",

                    details: "This attribute shall indicate the temperature hold status on the thermostat. If hold status is on, " +
                        "the thermostat SHOULD maintain the temperature set point for the current mode until a system mode " +
                        "change. If hold status is off, the thermostat SHOULD follow the setpoint transitions specified by " +
                        "its internal scheduling program. If the thermostat supports setpoint hold for a specific duration, " +
                        "it SHOULD also implement the TemperatureSetpointHoldDuration attribute." +
                        "\n" +
                        "### ‌4.3.9.32. TemperatureSetpointHoldDuration Attribute" +
                        "\n" +
                        "This attribute shall indicate the period in minutes for which a setpoint hold is active. " +
                        "Thermostats that support hold for a specified duration SHOULD implement this attribute. The null " +
                        "value indicates the field is unused. All other values are reserved.",

                    xref: { document: "cluster", section: "4.3.9.31" }
                }),

                Attribute({
                    name: "TemperatureSetpointHoldDuration", id: 0x24, type: "uint16", access: "RW VM",
                    conformance: "O", constraint: "0 to 1440", default: null, quality: "X N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "ThermostatProgrammingOperationMode", id: 0x25, type: "ProgrammingOperationModeBitmap",
                    access: "RW VM", conformance: "O", constraint: "desc", default: "0", quality: "P",

                    details: "This attribute shall indicate the operational state of the thermostat’s programming. The thermostat " +
                        "shall modify its programming operation when this attribute is modified by a client and update this " +
                        "attribute when its programming operation is modified locally by a user. The thermostat may support " +
                        "more than one active ProgrammingOperationModeBitmap. For example, the thermostat may operate " +
                        "simultaneously in Schedule Programming Mode and Recovery Mode." +
                        "\n" +
                        "Thermostats which contain a schedule may use this attribute to control how that schedule is used, " +
                        "even if they do not support the Schedule Configuration feature." +
                        "\n" +
                        "When ScheduleActive is not set, the setpoint is altered only by manual up/down changes at the " +
                        "thermostat or remotely, not by internal schedule programming." +
                        "\n" +
                        "NOTE" +
                        "\n" +
                        "Modifying the ScheduleActive bit does not clear or delete previous weekly schedule programming " +
                        "configurations.",

                    xref: { document: "cluster", section: "4.3.9.33" }
                }),

                Attribute({
                    name: "ThermostatRunningState", id: 0x29, type: "RelayStateBitmap", access: "R V", conformance: "O",
                    constraint: "desc",

                    details: "This attribute shall indicate the current relay state of the heat, cool, and fan relays." +
                        "\n" +
                        "Unimplemented outputs shall be treated as if they were Off." +
                        "\n" +
                        "### ‌4.3.9.35. SetpointChangeSource Attribute" +
                        "\n" +
                        "This attribute shall indicate the source of the current active OccupiedCoolingSetpoint or " +
                        "OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint)." +
                        "\n" +
                        "This attribute enables service providers to determine whether changes to setpoints were initiated " +
                        "due to occupant comfort, scheduled programming or some other source (e.g., electric utility or " +
                        "other service provider). Because automation services may initiate frequent setpoint changes, this " +
                        "attribute clearly differentiates the source of setpoint changes made at the thermostat." +
                        "\n" +
                        "### ‌4.3.9.36. SetpointChangeAmount Attribute" +
                        "\n" +
                        "This attribute shall indicate the delta between the current active OccupiedCoolingSetpoint or " +
                        "OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the " +
                        "SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement " +
                        "SetpointChangeSource." +
                        "\n" +
                        "The null value indicates that the previous setpoint was unknown.",

                    xref: { document: "cluster", section: "4.3.9.34" }
                }),

                Attribute({
                    name: "SetpointChangeSource", id: 0x30, type: "SetpointChangeSourceEnum", access: "R V",
                    conformance: "O", constraint: "desc", default: "0",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "SetpointChangeAmount", id: 0x31, type: "TemperatureDifference", access: "R V",
                    conformance: "O", default: "null", quality: "X",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "SetpointChangeSourceTimestamp", id: 0x32, type: "utc", access: "R V", conformance: "O",
                    default: 0,

                    details: "This attribute shall indicate the time in UTC at which the SetpointChangeAmount attribute change " +
                        "was recorded." +
                        "\n" +
                        "### ‌4.3.9.38. OccupiedSetback Attribute" +
                        "\n" +
                        "This attribute shall indicate the amount that the Thermostat server will allow the Calculated Local " +
                        "Temperature to float above the OccupiedCoolingSetpoint (i.e., OccupiedCoolingSetpoint + " +
                        "OccupiedSetback) or below the OccupiedHeatingSetpoint setpoint (i.e., OccupiedHeatingSetpoint – " +
                        "OccupiedSetback) before initiating a state change to bring the temperature back to the user’s " +
                        "desired setpoint. This attribute is sometimes also referred to as the “span.”" +
                        "\n" +
                        "The purpose of this attribute is to allow remote configuration of the span between the desired " +
                        "setpoint and the measured temperature to help prevent over-cycling and reduce energy bills, though " +
                        "this may result in lower comfort on the part of some users." +
                        "\n" +
                        "The null value indicates the attribute is unused." +
                        "\n" +
                        "If the Thermostat client attempts to write OccupiedSetback to a value greater than " +
                        "OccupiedSetbackMax, the Thermostat server shall set its OccupiedSetback value to OccupiedSetbackMax " +
                        "and shall send a Write Attribute Response command with a Status Code field enumeration of SUCCESS " +
                        "response." +
                        "\n" +
                        "If the Thermostat client attempts to write OccupiedSetback to a value less than OccupiedSetbackMin, " +
                        "the Thermostat server shall set its OccupiedSetback value to OccupiedSetbackMin and shall send a " +
                        "Write Attribute Response command with a Status Code field enumeration of SUCCESS response." +
                        "\n" +
                        "### ‌4.3.9.39. OccupiedSetbackMin Attribute" +
                        "\n" +
                        "This attribute shall indicate the minimum value that the Thermostat server will allow the " +
                        "OccupiedSetback attribute to be configured by a user." +
                        "\n" +
                        "The null value indicates the attribute is unused." +
                        "\n" +
                        "### ‌4.3.9.40. OccupiedSetbackMax Attribute" +
                        "\n" +
                        "This attribute shall indicate the maximum value that the Thermostat server will allow the " +
                        "OccupiedSetback attribute to be configured by a user." +
                        "\n" +
                        "The null value indicates the attribute is unused." +
                        "\n" +
                        "### ‌4.3.9.41. UnoccupiedSetback Attribute" +
                        "\n" +
                        "This attribute shall indicate the amount that the Thermostat server will allow the Calculated Local " +
                        "Temperature to float above the UnoccupiedCoolingSetpoint (i.e., UnoccupiedCoolingSetpoint + " +
                        "UnoccupiedSetback) or below the UnoccupiedHeatingSetpoint setpoint (i.e., UnoccupiedHeatingSetpoint " +
                        "- UnoccupiedSetback) before initiating a state change to bring the temperature back to the user’s " +
                        "desired setpoint. This attribute is sometimes also referred to as the “span.”" +
                        "\n" +
                        "The purpose of this attribute is to allow remote configuration of the span between the desired " +
                        "setpoint and the measured temperature to help prevent over-cycling and reduce energy bills, though " +
                        "this may result in lower comfort on the part of some users." +
                        "\n" +
                        "The null value indicates the attribute is unused." +
                        "\n" +
                        "If the Thermostat client attempts to write UnoccupiedSetback to a value greater than " +
                        "UnoccupiedSetbackMax, the Thermostat server shall set its UnoccupiedSetback value to " +
                        "UnoccupiedSetbackMax and shall send a Write Attribute Response command with a Status Code field " +
                        "enumeration of SUCCESS response." +
                        "\n" +
                        "If the Thermostat client attempts to write UnoccupiedSetback to a value less than " +
                        "UnoccupiedSetbackMin, the Thermostat server shall set its UnoccupiedSetback value to " +
                        "UnoccupiedSetbackMin and shall send a Write Attribute Response command with a Status Code field " +
                        "enumeration of SUCCESS response." +
                        "\n" +
                        "### ‌4.3.9.42. UnoccupiedSetbackMin Attribute" +
                        "\n" +
                        "This attribute shall indicate the minimum value that the Thermostat server will allow the " +
                        "UnoccupiedSetback attribute to be configured by a user." +
                        "\n" +
                        "The null value indicates the attribute is unused." +
                        "\n" +
                        "### ‌4.3.9.43. UnoccupiedSetbackMax Attribute" +
                        "\n" +
                        "This attribute shall indicate the maximum value that the Thermostat server will allow the " +
                        "UnoccupiedSetback attribute to be configured by a user." +
                        "\n" +
                        "The null value indicates the attribute is unused." +
                        "\n" +
                        "### ‌4.3.9.44. EmergencyHeatDelta Attribute" +
                        "\n" +
                        "This attribute shall indicate the delta between the Calculated Local Temperature and the " +
                        "OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint attributes at which the Thermostat server will " +
                        "operate in emergency heat mode." +
                        "\n" +
                        "If the difference between the Calculated Local Temperature and OccupiedCoolingSetpoint or " +
                        "UnoccupiedCoolingSetpoint is greater than or equal to the EmergencyHeatDelta and the Thermostat " +
                        "server’s SystemMode attribute is in a heating-related mode, then the Thermostat server shall " +
                        "immediately switch to the SystemMode attribute value that provides the highest stage of heating " +
                        "(e.g., emergency heat) and continue operating in that running state until the " +
                        "OccupiedHeatingSetpoint value is reached. For example:" +
                        "\n" +
                        "  • Calculated Local Temperature = 10.0°C" +
                        "\n" +
                        "  • OccupiedHeatingSetpoint = 16.0°C" +
                        "\n" +
                        "  • EmergencyHeatDelta = 2.0°C" +
                        "\n" +
                        "⇒ OccupiedHeatingSetpoint - Calculated Local Temperature ≥? EmergencyHeatDelta" +
                        "\n" +
                        "⇒ 16°C - 10°C ≥? 2°C" +
                        "\n" +
                        "⇒ TRUE >>> Thermostat server changes its SystemMode to operate in 2nd stage or emergency heat mode" +
                        "\n" +
                        "The purpose of this attribute is to provide Thermostat clients the ability to configure rapid " +
                        "heating when a setpoint is of a specified amount greater than the measured temperature. This allows " +
                        "the heated space to be quickly heated to the desired level set by the user.",

                    xref: { document: "cluster", section: "4.3.9.37" }
                }),

                Attribute({
                    name: "OccupiedSetback", id: 0x34, type: "UnsignedTemperature", access: "RW VM", conformance: "SB",
                    constraint: "occupiedSetbackMin to occupiedSetbackMax", default: "null", quality: "X N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "OccupiedSetbackMin", id: 0x35, type: "UnsignedTemperature", access: "R V", conformance: "SB",
                    constraint: "0 to occupiedSetbackMax", default: "null", quality: "X F",
                    xref: { document: "cluster", section: "4.3.9" }
                }),
                Attribute({
                    name: "OccupiedSetbackMax", id: 0x36, type: "UnsignedTemperature", access: "R V", conformance: "SB",
                    constraint: "occupiedSetbackMin to 25.4°C", default: "null", quality: "X F",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "UnoccupiedSetback", id: 0x37, type: "UnsignedTemperature", access: "RW VM",
                    conformance: "SB & OCC", constraint: "unoccupiedSetbackMin to unoccupiedSetbackMax",
                    default: "null", quality: "X N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "UnoccupiedSetbackMin", id: 0x38, type: "UnsignedTemperature", access: "R V",
                    conformance: "SB & OCC", constraint: "0 to unoccupiedSetbackMax", default: "null", quality: "X F",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "UnoccupiedSetbackMax", id: 0x39, type: "UnsignedTemperature", access: "R V",
                    conformance: "SB & OCC", constraint: "unoccupiedSetbackMin to 25.4°C", default: "null",
                    quality: "X F",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "EmergencyHeatDelta", id: 0x3a, type: "UnsignedTemperature", access: "RW VM",
                    conformance: "O", default: "25.5°C", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "AcType", id: 0x40, type: "ACTypeEnum", access: "RW VM", conformance: "O", constraint: "desc",
                    default: "0", quality: "N",

                    details: "This attribute shall indicate the type of Mini Split ACTypeEnum of Mini Split AC is defined " +
                        "depending on how Cooling and Heating condition is achieved by Mini Split AC." +
                        "\n" +
                        "### ‌4.3.9.46. ACCapacity Attribute" +
                        "\n" +
                        "This attribute shall indicate capacity of Mini Split AC in terms of the format defined by the " +
                        "ACCapacityFormat attribute",

                    xref: { document: "cluster", section: "4.3.9.45" }
                }),

                Attribute({
                    name: "AcCapacity", id: 0x41, type: "uint16", access: "RW VM", conformance: "O", default: 0,
                    quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Attribute({
                    name: "AcRefrigerantType", id: 0x42, type: "ACRefrigerantTypeEnum", access: "RW VM",
                    conformance: "O", constraint: "desc", default: "0", quality: "N",
                    details: "This attribute shall indicate type of refrigerant used within the Mini Split AC.",
                    xref: { document: "cluster", section: "4.3.9.47" }
                }),

                Attribute({
                    name: "AcCompressorType", id: 0x43, type: "ACCompressorTypeEnum", access: "RW VM", conformance: "O",
                    constraint: "desc", default: "0", quality: "N",
                    details: "This attribute shall indicate the type of compressor used within the Mini Split AC.",
                    xref: { document: "cluster", section: "4.3.9.48" }
                }),

                Attribute({
                    name: "AcErrorCode", id: 0x44, type: "ACErrorCodeBitmap", access: "RW VM", conformance: "O",
                    default: "0",
                    details: "This attribute shall indicate the type of errors encountered within the Mini Split AC.",
                    xref: { document: "cluster", section: "4.3.9.49" }
                }),

                Attribute({
                    name: "AcLouverPosition", id: 0x45, type: "ACLouverPositionEnum", access: "RW VM", conformance: "O",
                    constraint: "desc", default: "0", quality: "N",
                    details: "This attribute shall indicate the position of Louver on the AC.",
                    xref: { document: "cluster", section: "4.3.9.50" }
                }),

                Attribute({
                    name: "AcCoilTemperature", id: 0x46, type: "temperature", access: "R V", conformance: "O",
                    default: "null", quality: "X",

                    details: "This attribute shall indicate the temperature of the AC coil, as measured locally or remotely (over " +
                        "the network)." +
                        "\n" +
                        "### ‌4.3.9.52. ACCapacityFormat Attribute" +
                        "\n" +
                        "This attribute shall indicate the format for the ACCapacity attribute.",

                    xref: { document: "cluster", section: "4.3.9.51" }
                }),

                Attribute({
                    name: "AcCapacityFormat", id: 0x47, type: "ACCapacityFormatEnum", access: "RW VM", conformance: "O",
                    constraint: "desc", default: "0", quality: "N",
                    xref: { document: "cluster", section: "4.3.9" }
                }),

                Command({
                    name: "SetpointRaiseLower", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Upon receipt, the attributes for the indicated setpoint(s) shall have the amount specified in the " +
                        "Amount field added to them. If the resulting value is outside the limits imposed by " +
                        "MinCoolSetpointLimit, MaxCoolSetpointLimit, MinHeatSetpointLimit and MaxHeatSetpointLimit, the " +
                        "value is clamped to those limits. This is not considered an error condition.",
                    xref: { document: "cluster", section: "4.3.10.1" },
                    children: [
                        Field({ name: "Mode", id: 0x0, type: "SetpointAdjustMode", conformance: "M", constraint: "desc" }),
                        Field({ name: "Amount", id: 0x1, type: "int8", conformance: "M" })
                    ]
                }),

                Command({
                    name: "SetWeeklySchedule", id: 0x1, access: "M", conformance: "SCH", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "4.3.10" }
                }),

                Command({
                    name: "GetWeeklySchedule", id: 0x2, access: "O", conformance: "SCH", direction: "request",
                    response: "GetWeeklyScheduleResponse",
                    details: "Upon receipt, the unit SHOULD send in return the Get Weekly Schedule Response command. The Days to " +
                        "Return and Mode to Return fields are defined as bitmask for the flexibility to support multiple " +
                        "days and multiple modes within one command. If thermostat cannot handle incoming command with " +
                        "multiple days and/or multiple modes within one command, it shall send default response of " +
                        "INVALID_COMMAND in return.",
                    xref: { document: "cluster", section: "4.3.10.9" },

                    children: [
                        Field({
                            name: "DaysToReturn", id: 0x0, type: "DayOfWeek", conformance: "M", constraint: "desc",
                            details: "This field shall indicate the number of days the client would like to return the set point values " +
                                "for and could be any combination of single days or the entire week.",
                            xref: { document: "cluster", section: "4.3.10.9.1" }
                        }),

                        Field({
                            name: "ModeToReturn", id: 0x1, type: "ModeForSequence", conformance: "M", constraint: "desc",
                            details: "This field shall indicate the mode the client would like to return the set point values for and " +
                                "could be any combination of heat only, cool only or heat & cool.",
                            xref: { document: "cluster", section: "4.3.10.9.2" }
                        })
                    ]
                }),

                Command({
                    name: "ClearWeeklySchedule", id: 0x3, access: "M", conformance: "SCH", direction: "request",
                    details: "This command is used to clear the weekly schedule. The Clear weekly schedule has no payload." +
                        "\n" +
                        "Upon receipt, all transitions currently stored shall be cleared and a default response of SUCCESS " +
                        "shall be sent in response. There are no error responses to this command.",
                    xref: { document: "cluster", section: "4.3.10.10" }
                }),

                Command({
                    name: "GetRelayStatusLog", id: 0x4, access: "O", conformance: "O", direction: "request",
                    response: "GetRelayStatusLogResponse",

                    details: "This command is used to query the thermostat internal relay status log. This command has no payload." +
                        "\n" +
                        "Upon receipt, the unit shall respond with Relay Status Log command if the relay status log feature " +
                        "is supported on the unit." +
                        "\n" +
                        "The log storing order is First in First Out (FIFO) when the log is generated and stored into the " +
                        "Queue." +
                        "\n" +
                        "The first record in the log (i.e., the oldest) one, is the first to be replaced when there is a new " +
                        "record and there is no more space in the log. Thus, the newest record will overwrite the oldest one " +
                        "if there is no space left." +
                        "\n" +
                        "The log storing order is Last In First Out (LIFO) when the log is being retrieved from the Queue by " +
                        "a client device." +
                        "\n" +
                        "Once the \"Get Relay Status Log Response\" frame is sent by the Server, the \"Unread Entries\" " +
                        "attribute SHOULD be decremented to indicate the number of unread records that remain in the queue." +
                        "\n" +
                        "If the \"Unread Entries\" attribute reaches zero and the Client sends a new \"Get Relay Status Log " +
                        "Request\", the Server may send one of the following items as a response:" +
                        "\n" +
                        "  i. Resend the last Get Relay Status Log Response or" +
                        "\n" +
                        "  ii. Generate new log record at the time of request and send Get Relay Status Log Response with " +
                        "      the new data" +
                        "\n" +
                        "For both cases, the \"Unread Entries\" attribute will remain zero.",

                    xref: { document: "cluster", section: "4.3.10.11" }
                }),

                Command({
                    name: "GetWeeklyScheduleResponse", id: 0x0, conformance: "SCH", direction: "request",
                    details: "This command has the same payload format as the Set Weekly Schedule. Please refer to the payload " +
                        "detail in SetWeeklySchedule.",
                    xref: { document: "cluster", section: "4.3.10.12" }
                }),

                Command({
                    name: "GetRelayStatusLogResponse", id: 0x1, conformance: "GetRelayStatusLog", direction: "request",
                    details: "This command is sent from the thermostat cluster server in response to the Get Relay Status Log. " +
                        "After the Relay Status Entry is sent over the air to the requesting client, the specific entry will " +
                        "be cleared from the thermostat internal log.",
                    xref: { document: "cluster", section: "4.3.10.13" },

                    children: [
                        Field({
                            name: "TimeOfDay", id: 0x0, type: "uint16", conformance: "M", constraint: "0 to 1439",
                            details: "This field shall indicate the sample time of the day, in minutes since midnight, when the relay " +
                                "status was captured for this associated log entry. For example, 6am will be represented by 360 " +
                                "minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.",
                            xref: { document: "cluster", section: "4.3.10.13.1" }
                        }),

                        Field({
                            name: "RelayStatus", id: 0x1, type: "RelayStateBitmap", conformance: "M", constraint: "desc",
                            details: "This field shall indicate the relay status for thermostat when the log is captured. Each bit " +
                                "represents one relay used by the thermostat. If the bit is on, the associated relay is on and " +
                                "active. Each thermostat manufacturer can create its own mapping between the bitmap and the " +
                                "associated relay.",
                            xref: { document: "cluster", section: "4.3.10.13.2" }
                        }),

                        Field({
                            name: "LocalTemperature", id: 0x2, type: "temperature", conformance: "M", quality: "X",
                            details: "This field shall indicate the LocalTemperature when the log is captured. The null value indicates " +
                                "that LocalTemperature was invalid or unavailable.",
                            xref: { document: "cluster", section: "4.3.10.13.3" }
                        }),

                        Field({
                            name: "HumidityInPercentage", id: 0x3, type: "uint8", conformance: "M",
                            constraint: "0%'; to 100%';", quality: "X"
                        }),
                        Field({
                            name: "SetPoint", id: 0x4, type: "temperature", conformance: "M",
                            details: "This field shall indicate the target setpoint temperature when the log is captured.",
                            xref: { document: "cluster", section: "4.3.10.13.5" }
                        }),
                        Field({
                            name: "UnreadEntries", id: 0x5, type: "uint16", conformance: "M",
                            details: "This field shall indicate the number of unread entries within the thermostat internal log system.",
                            xref: { document: "cluster", section: "4.3.10.13.6" }
                        })
                    ]
                }),

                Datatype({
                    name: "CoolingStage Bits", type: "map8",

                    details: "These bits shall indicate what stage of cooling the HVAC system is using." +
                        "\n" +
                        "  • 00 = Cool Stage 1" +
                        "\n" +
                        "  • 01 = Cool Stage 2" +
                        "\n" +
                        "  • 10 = Cool Stage 3" +
                        "\n" +
                        "  • 11 = Reserved",

                    xref: { document: "cluster", section: "4.3.8.6.1" }
                }),

                Datatype({
                    name: "HeatingStage Bits", type: "map8",

                    details: "These bits shall indicate what stage of heating the HVAC system is using." +
                        "\n" +
                        "  • 00 = Heat Stage 1" +
                        "\n" +
                        "  • 01 = Heat Stage 2" +
                        "\n" +
                        "  • 10 = Heat Stage 3" +
                        "\n" +
                        "  • 11 = Reserved",

                    xref: { document: "cluster", section: "4.3.8.6.2" }
                })
            ]
        }),

        Cluster({
            name: "FanControl", id: 0x202, classification: "application",
            details: "This cluster specifies an interface to control the speed of a fan." +
                "\n" +
                "NOTE Support for Fan Control cluster is provisional.",
            xref: { document: "cluster", section: "4.4" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "4.4.4" },

                    children: [
                        Field({ name: "SPD", constraint: "0", description: "MultiSpeed", details: "1-100 speeds" }),
                        Field({
                            name: "AUT", constraint: "1", description: "Auto",
                            details: "Automatic mode supported for fan speed"
                        }),
                        Field({
                            name: "RCK", constraint: "2", description: "Rocking",
                            details: "Rocking movement supported"
                        }),
                        Field({
                            name: "WND", constraint: "3", description: "Wind",
                            details: "Wind emulation supported"
                        }),
                        Field({
                            name: "STEP", constraint: "4", description: "Step",
                            details: "Step command supported"
                        }),
                        Field({
                            name: "DIR", constraint: "5", description: "AirflowDirection",
                            details: "Airflow Direction attribute is supported"
                        })
                    ]
                }),

                Attribute({
                    name: "FanMode", id: 0x0, type: "FanModeEnum", access: "RW VO", conformance: "M",
                    constraint: "0 to 6", default: "0", quality: "N",

                    details: "This attribute shall indicate the current speed mode of the fan. This attribute may be written by " +
                        "the client to indicate a new speed mode of the fan. This attribute shall be set to one of the " +
                        "values in FanModeEnum." +
                        "\n" +
                        "When the FanMode attribute is written to, the PercentSetting and SpeedSetting (if present) " +
                        "attributes shall be set to appropriate values, as defined by the Percent Rules and Speed Rules " +
                        "respectively, unless otherwise specified below." +
                        "\n" +
                        "When the FanMode attribute is set to any given mode, the PercentCurrent and SpeedCurrent (if " +
                        "present) shall indicate the actual currently operating fan speed, unless otherwise specified below.",

                    xref: { document: "cluster", section: "4.4.6.1" }
                }),

                Attribute({
                    name: "FanModeSequence", id: 0x1, type: "FanModeSequenceEnum", access: "R[W] VO",
                    conformance: "Zigbee", constraint: "0 to 5", quality: "N",

                    details: "This attribute indicates the fan speed ranges that shall be supported." +
                        "\n" +
                        "### ‌4.4.6.3. PercentSetting Attribute" +
                        "\n" +
                        "This attribute shall indicate the speed setting for the fan. This attribute may be written by the " +
                        "client to indicate a new fan speed. If the client writes null to this attribute, the attribute " +
                        "value shall NOT change. If this is set to 0, the server shall set the FanMode attribute value to " +
                        "Off." +
                        "\n" +
                        "### ‌4.4.6.3.1. Percent Rules" +
                        "\n" +
                        "It is up to the server implementation to map between ranges of the PercentSetting attribute and " +
                        "FanMode attribute enumerated values. Percent values are split into ranges, each range corresponding " +
                        "to a supported FanMode attribute value. Percent ranges shall NOT overlap. All percent values in the " +
                        "High speed range shall be higher than all percent values in the Medium and Low speed ranges, if " +
                        "supported. All percent values in the Medium speed range shall be higher than all percent values in " +
                        "the Low speed range. If the client sets the FanMode attribute to Low, Medium or High, the server " +
                        "shall set the PercentSetting attribute to a value within the corresponding range. If the client " +
                        "sets the PercentSetting attribute, the server shall set the FanMode attribute to Low, Medium or " +
                        "High, based on the percent value being in the corresponding range." +
                        "\n" +
                        "If the MultiSpeed feature is supported, the calculation of SpeedSetting or SpeedCurrent (speed) " +
                        "from a percent value change for PercentSetting or PercentCurrent respectively (percent) shall hold " +
                        "true:" +
                        "\n" +
                        "  • speed = ceil( SpeedMax * (percent * 0.01) )" +
                        "\n" +
                        "For example: If the SpeedMax attribute is 42 (42 speed fan) and PercentSetting is changed to 25, " +
                        "then SpeedSetting and SpeedCurrent become 11 (rounding up 10.5)." +
                        "\n" +
                        "### ‌4.4.6.4. PercentCurrent Attribute" +
                        "\n" +
                        "This attribute shall indicate the actual currently operating fan speed, or zero to indicate that " +
                        "the fan is off. See Percent Rules for more details.",

                    xref: { document: "cluster", section: "4.4.6.2" }
                }),

                Attribute({
                    name: "FanModeSequence", id: 0x1, type: "FanModeSequenceEnum", access: "R V", conformance: "M",
                    constraint: "0 to 5", quality: "F",

                    details: "This attribute indicates the fan speed ranges that shall be supported." +
                        "\n" +
                        "### ‌4.4.6.3. PercentSetting Attribute" +
                        "\n" +
                        "This attribute shall indicate the speed setting for the fan. This attribute may be written by the " +
                        "client to indicate a new fan speed. If the client writes null to this attribute, the attribute " +
                        "value shall NOT change. If this is set to 0, the server shall set the FanMode attribute value to " +
                        "Off." +
                        "\n" +
                        "### ‌4.4.6.3.1. Percent Rules" +
                        "\n" +
                        "It is up to the server implementation to map between ranges of the PercentSetting attribute and " +
                        "FanMode attribute enumerated values. Percent values are split into ranges, each range corresponding " +
                        "to a supported FanMode attribute value. Percent ranges shall NOT overlap. All percent values in the " +
                        "High speed range shall be higher than all percent values in the Medium and Low speed ranges, if " +
                        "supported. All percent values in the Medium speed range shall be higher than all percent values in " +
                        "the Low speed range. If the client sets the FanMode attribute to Low, Medium or High, the server " +
                        "shall set the PercentSetting attribute to a value within the corresponding range. If the client " +
                        "sets the PercentSetting attribute, the server shall set the FanMode attribute to Low, Medium or " +
                        "High, based on the percent value being in the corresponding range." +
                        "\n" +
                        "If the MultiSpeed feature is supported, the calculation of SpeedSetting or SpeedCurrent (speed) " +
                        "from a percent value change for PercentSetting or PercentCurrent respectively (percent) shall hold " +
                        "true:" +
                        "\n" +
                        "  • speed = ceil( SpeedMax * (percent * 0.01) )" +
                        "\n" +
                        "For example: If the SpeedMax attribute is 42 (42 speed fan) and PercentSetting is changed to 25, " +
                        "then SpeedSetting and SpeedCurrent become 11 (rounding up 10.5)." +
                        "\n" +
                        "### ‌4.4.6.4. PercentCurrent Attribute" +
                        "\n" +
                        "This attribute shall indicate the actual currently operating fan speed, or zero to indicate that " +
                        "the fan is off. See Percent Rules for more details.",

                    xref: { document: "cluster", section: "4.4.6.2" }
                }),

                Attribute({
                    name: "PercentSetting", id: 0x2, type: "percent", access: "RW VO", conformance: "M",
                    constraint: "0 to 100", default: 0, quality: "X",
                    xref: { document: "cluster", section: "4.4.6" }
                }),
                Attribute({
                    name: "PercentCurrent", id: 0x3, type: "percent", access: "R V", conformance: "M",
                    constraint: "0 to 100",
                    xref: { document: "cluster", section: "4.4.6" }
                }),

                Attribute({
                    name: "SpeedMax", id: 0x4, type: "uint8", access: "R V", conformance: "SPD", constraint: "1 to 100",
                    quality: "F",

                    details: "This attribute shall indicate that the fan has one speed (value of 1) or the maximum speed, if the " +
                        "fan is capable of multiple speeds." +
                        "\n" +
                        "### ‌4.4.6.6. SpeedSetting Attribute" +
                        "\n" +
                        "This attribute shall indicate the speed setting for the fan. This attribute may be written by the " +
                        "client to indicate a new fan speed. If the client writes null to this attribute, the attribute " +
                        "value shall NOT change. If this is set to 0, the server shall set the FanMode attribute value to " +
                        "Off. Please see the Speed Rules for details on other values." +
                        "\n" +
                        "### ‌4.4.6.6.1. Speed Rules" +
                        "\n" +
                        "It is up to the server implementation to map between ranges of the SpeedSetting attribute and " +
                        "FanMode attribute enumerated values. Speed values are split into ranges, each range corresponding " +
                        "to a FanMode attribute value. Speed ranges shall NOT overlap. All speed values in the High speed " +
                        "range shall be higher than all speed values in the Medium and Low speed ranges, if supported. All " +
                        "speed values in the Medium speed range shall be higher than all speed values in the Low speed " +
                        "range. If the client sets the FanMode attribute to Low, Medium or High, the server shall set the " +
                        "SpeedSetting attribute to a value within the corresponding range. If the client sets the " +
                        "SpeedSetting attribute, the server shall set the FanMode attribute to Low, Medium or High, based on " +
                        "the speed value being in the corresponding range." +
                        "\n" +
                        "This calculation for the value of PercentSetting or PercentCurrent (percent) from a speed value " +
                        "change for SpeedSetting or SpeedCurrent respectively (speed) shall hold true:" +
                        "\n" +
                        "  • percent = floor( speed/SpeedMax * 100 )" +
                        "\n" +
                        "For example: If the SpeedMax attribute is 42 (42 speed fan) and SpeedSetting attribute is changed " +
                        "to 11, then PercentSetting and PercentCurrent become 26." +
                        "\n" +
                        "### ‌4.4.6.7. SpeedCurrent Attribute" +
                        "\n" +
                        "This attribute shall indicate the actual currently operating fan speed, or zero to indicate that " +
                        "the fan is off.",

                    xref: { document: "cluster", section: "4.4.6.5" }
                }),

                Attribute({
                    name: "SpeedSetting", id: 0x5, type: "uint8", access: "RW VO", conformance: "SPD",
                    constraint: "0 to speedMax", default: 0, quality: "X",
                    xref: { document: "cluster", section: "4.4.6" }
                }),
                Attribute({
                    name: "SpeedCurrent", id: 0x6, type: "uint8", access: "R V", conformance: "SPD",
                    constraint: "0 to speedMax", quality: "P",
                    xref: { document: "cluster", section: "4.4.6" }
                }),

                Attribute({
                    name: "RockSupport", id: 0x7, type: "RockBitmap", access: "R V", conformance: "RCK",
                    constraint: "desc", default: "0", quality: "F",
                    details: "This attribute is a bitmap that indicates what rocking motions the server supports.",
                    xref: { document: "cluster", section: "4.4.6.8" }
                }),

                Attribute({
                    name: "RockSetting", id: 0x8, type: "RockBitmap", access: "RW VO", conformance: "RCK",
                    constraint: "desc", default: "0", quality: "P",

                    details: "This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit " +
                        "shall only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, " +
                        "otherwise a status code of CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "If a combination of supported bits is set by the client, and the server does not support the " +
                        "combination, the lowest supported single bit in the combination shall be set and active, and all " +
                        "other bits" +
                        "\n" +
                        "shall indicate zero." +
                        "\n" +
                        "For example: If RockUpDown and RockRound are both set, but this combination is not possible, then " +
                        "only RockUpDown becomes active.",

                    xref: { document: "cluster", section: "4.4.6.9" }
                }),

                Attribute({
                    name: "WindSupport", id: 0x9, type: "WindBitmap", access: "R V", conformance: "WND",
                    constraint: "desc", default: "0", quality: "F",
                    details: "This attribute is a bitmap that indicates what wind modes the server supports. At least one wind " +
                        "mode bit shall be set.",
                    xref: { document: "cluster", section: "4.4.6.10" }
                }),

                Attribute({
                    name: "WindSetting", id: 0xa, type: "WindBitmap", access: "RW VO", conformance: "WND",
                    constraint: "desc", default: "0", quality: "P",

                    details: "This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit " +
                        "shall only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, " +
                        "otherwise a status code of CONSTRAINT_ERROR shall be returned." +
                        "\n" +
                        "If a combination of supported bits is set by the client, and the server does not support the " +
                        "combination, the lowest supported single bit in the combination shall be set and active, and all " +
                        "other bits shall indicate zero." +
                        "\n" +
                        "For example: If Sleep Wind and Natural Wind are set, but this combination is not possible, then " +
                        "only Sleep Wind becomes active.",

                    xref: { document: "cluster", section: "4.4.6.11" }
                }),

                Attribute({
                    name: "AirflowDirection", id: 0xb, type: "AirflowDirectionEnum", access: "RW VO",
                    conformance: "DIR", constraint: "desc", default: "0", quality: "P",
                    details: "This attribute shall indicate the current airflow direction of the fan. This attribute may be " +
                        "written by the client to indicate a new airflow direction for the fan. This attribute shall be set " +
                        "to one of the values in the AirflowDirectionEnum table.",
                    xref: { document: "cluster", section: "4.4.6.12" }
                }),

                Command({
                    name: "Step", id: 0x0, access: "O", conformance: "STEP", direction: "request", response: "status",

                    details: "This command speeds up or slows down the fan, in steps, without the client having to know the fan " +
                        "speed. This command supports, for example, a user operated wall switch, where the user provides the " +
                        "feedback or control to stop sending this command when the proper speed is reached. The step speed " +
                        "values are implementation specific. How many step speeds are implemented is implementation specific." +
                        "\n" +
                        "This command supports these fields:",

                    xref: { document: "cluster", section: "4.4.7.1" },

                    children: [
                        Field({
                            name: "Direction", id: 0x0, type: "StepDirectionEnum", conformance: "M", default: "Increase",
                            details: "This field shall indicate whether the fan speed increases or decreases to the next step value.",
                            xref: { document: "cluster", section: "4.4.7.1.1" }
                        }),
                        Field({
                            name: "Wrap", id: 0x1, type: "bool", conformance: "O", default: true,
                            details: "This field shall indicate if the fan speed wraps between highest and lowest step value.",
                            xref: { document: "cluster", section: "4.4.7.1.2" }
                        }),
                        Field({
                            name: "LowestOff", id: 0x2, type: "bool", conformance: "O", default: true,
                            details: "This field shall indicate that the fan being off (speed value 0) is included as a step value.",
                            xref: { document: "cluster", section: "4.4.7.1.3" }
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "ThermostatUserInterfaceConfiguration", id: 0x204, classification: "application",
            details: "This cluster provides an interface to allow configuration of the user interface for a thermostat, " +
                "or a thermostat controller device, that supports a keypad and LCD screen.",
            xref: { document: "cluster", section: "4.5" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

                Attribute({
                    name: "TemperatureDisplayMode", id: 0x0, type: "TemperatureDisplayModeEnum", access: "RW VO",
                    conformance: "M", constraint: "desc", default: "Celsius",
                    details: "This attribute shall indicate the units of the temperature displayed on the thermostat screen.",
                    xref: { document: "cluster", section: "4.5.6.1" }
                }),

                Attribute({
                    name: "KeypadLockout", id: 0x1, type: "KeypadLockoutEnum", access: "RW VM", conformance: "M",
                    constraint: "desc", default: "NoLockout",
                    details: "This attribute shall indicate the level of functionality that is available to the user via the " +
                        "keypad.",
                    xref: { document: "cluster", section: "4.5.6.2" }
                }),

                Attribute({
                    name: "ScheduleProgrammingVisibility", id: 0x2, type: "ScheduleProgrammingVisibilityEnum",
                    access: "RW VM", conformance: "O", constraint: "desc", default: "ScheduleProgrammingPermitted",

                    details: "This attribute is used to hide the weekly schedule programming functionality or menu on a " +
                        "thermostat from a user to prevent local user programming of the weekly schedule. The schedule " +
                        "programming may still be performed via a remote interface, and the thermostat may operate in " +
                        "schedule programming mode." +
                        "\n" +
                        "This attribute is designed to prevent local tampering with or disabling of schedules that may have " +
                        "been programmed by users or service providers via a more capable remote interface. The programming " +
                        "schedule shall continue to run even though it is not visible to the user locally at the thermostat.",

                    xref: { document: "cluster", section: "4.5.6.3" }
                })
            ]
        }),

        Cluster({
            name: "DoorLock", id: 0x101, classification: "application",
            xref: { document: "cluster", section: "5.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 7 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "5.2.5" },

                    children: [
                        Field({
                            name: "PIN", conformance: "O", constraint: "0", description: "PinCredential",
                            details: "Lock supports PIN credentials (via keypad, or over- the-air)"
                        }),
                        Field({
                            name: "RID", conformance: "O", constraint: "1", description: "RfidCredential",
                            details: "Lock supports RFID credentials"
                        }),
                        Field({
                            name: "FGP", conformance: "P, O", constraint: "2", description: "FingerCredentials",
                            details: "Lock supports finger related credentials (fingerprint, finger vein)"
                        }),
                        Field({
                            name: "LOG", conformance: "O", constraint: "3", description: "Logging",
                            details: "Lock supports local/on-lock logging when Events are not supported"
                        }),
                        Field({
                            name: "WDSCH", conformance: "O", constraint: "4", description: "WeekDayAccessSchedules",
                            details: "Lock supports week day user access schedules"
                        }),
                        Field({
                            name: "DPS", conformance: "O", constraint: "5", description: "DoorPositionSensor",
                            details: "Lock supports a door position sensor that indicates door’s state"
                        }),
                        Field({
                            name: "FACE", conformance: "P, O", constraint: "6", description: "FaceCredentials",
                            details: "Lock supports face related credentials (face, iris, retina)"
                        }),
                        Field({
                            name: "COTA", conformance: "O", constraint: "7", description: "CredentialOverTheAirAccess",
                            details: "PIN codes over- the-air supported for lock/unlock operations"
                        }),
                        Field({
                            name: "USR", conformance: "[PIN | RID | FGP | FACE]", constraint: "8", description: "User",
                            details: "Lock supports the user commands and database"
                        }),
                        Field({
                            name: "NOT", conformance: "O", constraint: "9", description: "Notification",
                            details: "Operation and Programming Notifications"
                        }),
                        Field({
                            name: "YDSCH", conformance: "O", constraint: "10", description: "YearDayAccessSchedules",
                            details: "Lock supports year day user access schedules"
                        }),
                        Field({
                            name: "HDSCH", conformance: "O", constraint: "11", description: "HolidaySchedules",
                            details: "Lock supports holiday schedules"
                        }),
                        Field({
                            name: "UBOLT", conformance: "O", constraint: "12", description: "Unbolting",
                            details: "Lock supports unbolting"
                        })
                    ]
                }),

                Attribute({
                    name: "LockState", id: 0x0, type: "enum8", access: "R V", conformance: "M", constraint: "desc",
                    quality: "X S P",

                    details: "The LockState Attribute may be NULL if the lock hardware does not currently know the status of the " +
                        "locking mechanism. For example, a lock may not know the LockState status after a power cycle until " +
                        "the first lock actuation is completed." +
                        "\n" +
                        "The Not Fully Locked value is used by a lock to indicate that the state of the lock is somewhere" +
                        "\n" +
                        "between Locked and Unlocked so it is only partially secured. For example, a deadbolt could be " +
                        "partially extended and not in a dead latched state.",

                    xref: { document: "cluster", section: "5.2.6.2" },

                    children: [
                        Field({
                            name: "NotFullyLocked", id: 0x0, conformance: "M", description: "Lock state is not fully locked"
                        }),
                        Field({ name: "Locked", id: 0x1, conformance: "M", description: "Lock state is fully locked" }),
                        Field({ name: "Unlocked", id: 0x2, conformance: "M", description: "Lock state is fully unlocked" }),
                        Field({
                            name: "Unlatched", id: 0x3, conformance: "O",
                            description: "Lock state is fully unlocked and the latch is pulled"
                        })
                    ]
                }),

                Attribute({
                    name: "LockType", id: 0x1, type: "enum8", access: "R V", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "5.2.6.3" },

                    children: [
                        Field({ name: "Deadbolt", id: 0x0, description: "Physical lock type is dead bolt" }),
                        Field({ name: "Magnetic", id: 0x1, description: "Physical lock type is magnetic" }),
                        Field({ name: "Other", id: 0x2, description: "Physical lock type is other" }),
                        Field({ name: "Mortise", id: 0x3, description: "Physical lock type is mortise" }),
                        Field({ name: "Rim", id: 0x4, description: "Physical lock type is rim" }),
                        Field({ name: "LatchBolt", id: 0x5, description: "Physical lock type is latch bolt" }),
                        Field({ name: "CylindricalLock", id: 0x6, description: "Physical lock type is cylindrical lock" }),
                        Field({ name: "TubularLock", id: 0x7, description: "Physical lock type is tubular lock" }),
                        Field({
                            name: "InterconnectedLock", id: 0x8, description: "Physical lock type is interconnected lock"
                        }),
                        Field({ name: "DeadLatch", id: 0x9, description: "Physical lock type is dead latch" }),
                        Field({ name: "DoorFurniture", id: 0xa, description: "Physical lock type is door furniture" }),
                        Field({ name: "Eurocylinder", id: 0xb, description: "Physical lock type is eurocylinder" })
                    ]
                }),

                Attribute({
                    name: "ActuatorEnabled", id: 0x2, type: "bool", access: "R V", conformance: "M",
                    details: "The ActuatorEnabled attribute indicates if the lock is currently able to (Enabled) or not able to " +
                        "(Disabled) process remote Lock, Unlock, or Unlock with Timeout commands.",
                    xref: { document: "cluster", section: "5.2.6.4" }
                }),

                Attribute({
                    name: "DoorState", id: 0x3, type: "enum8", access: "R V", conformance: "DPS", constraint: "desc",
                    quality: "X P",
                    details: "The current door state as defined in DoorStateEnum." +
                        "\n" +
                        "This attribute shall be null only if an internal error prevents the retrieval of the current door " +
                        "state.",
                    xref: { document: "cluster", section: "5.2.6.5" }
                }),

                Attribute({
                    name: "DoorOpenEvents", id: 0x4, type: "uint32", access: "RW VM", conformance: "[DPS]",
                    details: "This attribute holds the number of door open events that have occurred since it was last zeroed.",
                    xref: { document: "cluster", section: "5.2.6.6" }
                }),
                Attribute({
                    name: "DoorClosedEvents", id: 0x5, type: "uint32", access: "RW VM", conformance: "[DPS]",
                    details: "This attribute holds the number of door closed events that have occurred since it was last zeroed.",
                    xref: { document: "cluster", section: "5.2.6.7" }
                }),

                Attribute({
                    name: "OpenPeriod", id: 0x6, type: "uint16", access: "RW VM", conformance: "[DPS]",
                    details: "This attribute holds the number of minutes the door has been open since the last time it " +
                        "transitioned from closed to open.",
                    xref: { document: "cluster", section: "5.2.6.8" }
                }),

                Attribute({
                    name: "NumberOfLogRecordsSupported", id: 0x10, type: "uint16", access: "R V", conformance: "LOG",
                    default: 0, quality: "F",
                    details: "The number of available log records.",
                    xref: { document: "cluster", section: "5.2.6.9" }
                }),

                Attribute({
                    name: "NumberOfTotalUsersSupported", id: 0x11, type: "uint16", access: "R V", conformance: "USR",
                    default: 0, quality: "F",
                    details: "Number of total users supported by the lock.",
                    xref: { document: "cluster", section: "5.2.6.10" }
                }),

                Attribute({
                    name: "NumberOfPinUsersSupported", id: 0x12, type: "uint16", access: "R V", conformance: "PIN",
                    default: 0, quality: "F",
                    details: "The number of PIN users supported.",
                    xref: { document: "cluster", section: "5.2.6.11" }
                }),

                Attribute({
                    name: "NumberOfRfidUsersSupported", id: 0x13, type: "uint16", access: "R V", conformance: "RID",
                    default: 0, quality: "F",
                    details: "The number of RFID users supported.",
                    xref: { document: "cluster", section: "5.2.6.12" }
                }),

                Attribute({
                    name: "NumberOfWeekDaySchedulesSupportedPerUser", id: 0x14, type: "uint8", access: "R V",
                    conformance: "WDSCH", default: 0, quality: "F",
                    details: "The number of configurable week day schedule supported per user.",
                    xref: { document: "cluster", section: "5.2.6.13" }
                }),

                Attribute({
                    name: "NumberOfYearDaySchedulesSupportedPerUser", id: 0x15, type: "uint8", access: "R V",
                    conformance: "YDSCH", default: 0, quality: "F",
                    details: "The number of configurable year day schedule supported per user.",
                    xref: { document: "cluster", section: "5.2.6.14" }
                }),

                Attribute({
                    name: "NumberOfHolidaySchedulesSupported", id: 0x16, type: "uint8", access: "R V",
                    conformance: "HDSCH", default: 0, quality: "F",
                    details: "The number of holiday schedules supported for the entire door lock device.",
                    xref: { document: "cluster", section: "5.2.6.15" }
                }),

                Attribute({
                    name: "MaxPinCodeLength", id: 0x17, type: "uint8", access: "R V", conformance: "PIN", quality: "F",
                    details: "An 8 bit value indicates the maximum length in bytes of a PIN Code on this device.",
                    xref: { document: "cluster", section: "5.2.6.16" }
                }),
                Attribute({
                    name: "MinPinCodeLength", id: 0x18, type: "uint8", access: "R V", conformance: "PIN", quality: "F",
                    details: "An 8 bit value indicates the minimum length in bytes of a PIN Code on this device.",
                    xref: { document: "cluster", section: "5.2.6.17" }
                }),

                Attribute({
                    name: "MaxRfidCodeLength", id: 0x19, type: "uint8", access: "R V", conformance: "RID", quality: "F",
                    details: "An 8 bit value indicates the maximum length in bytes of a RFID Code on this device. The value" +
                        "\n" +
                        "depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers " +
                        "(UID) are used as RFID code, a value of 20 (equals 10 Byte ISO 14443A UID) is recommended.",
                    xref: { document: "cluster", section: "5.2.6.18" }
                }),

                Attribute({
                    name: "MinRfidCodeLength", id: 0x1a, type: "uint8", access: "R V", conformance: "RID", quality: "F",
                    details: "An 8 bit value indicates the minimum length in bytes of a RFID Code on this device. The value " +
                        "depends on the RFID code range specified by the manufacturer, if media anti-collision identifiers " +
                        "(UID) are used as RFID code, a value of 8 (equals 4 Byte ISO 14443A UID) is recommended.",
                    xref: { document: "cluster", section: "5.2.6.19" }
                }),

                Attribute({
                    name: "CredentialRulesSupport", id: 0x1b, type: "map8", access: "R V", conformance: "USR",
                    default: 1, quality: "F",
                    details: "This bitmap contains a bit for every value of CredentialRuleEnum supported on this device.",
                    xref: { document: "cluster", section: "5.2.6.20" },

                    children: [
                        Field({
                            name: "Single", constraint: "0", description: "Only one credential is required for lock operation"
                        }),
                        Field({
                            name: "Dual", constraint: "1", description: "Any two credentials are required for lock operation"
                        }),
                        Field({
                            name: "Tri", constraint: "2", description: "Any three credentials are required for lock operation"
                        })
                    ]
                }),

                Attribute({
                    name: "NumberOfCredentialsSupportedPerUser", id: 0x1c, type: "uint8", access: "R V",
                    conformance: "USR", default: 0, quality: "F",

                    details: "The number of credentials that could be assigned for each user." +
                        "\n" +
                        "Depending on the value of NumberOfRFIDUsersSupported and NumberOfPINUsersSupported it may not be " +
                        "possible to assign that number of credentials for a user." +
                        "\n" +
                        "For example, if the device supports only PIN and RFID credential types, " +
                        "NumberOfCredentialsSupportedPerUser is set to 10, NumberOfPINUsersSupported is set to 5 and " +
                        "NumberOfRFIDUsersSupported is set to 3, it will not be possible to actually assign 10 credentials " +
                        "for a user because maximum number of credentials in the database is 8.",

                    xref: { document: "cluster", section: "5.2.6.21" }
                }),

                Attribute({
                    name: "EnableLogging", id: 0x20, type: "bool", access: "R[W] VA", conformance: "LOG", default: true,
                    quality: "P",
                    details: "Enable/disable event logging. When event logging is enabled, all event messages are stored on the " +
                        "lock for retrieval. Logging events can be but not limited to Tamper Alarm, Lock, Unlock, " +
                        "AutoRelock, User Code Added, User Code Cleared, Schedule Added, and Schedule Cleared. For a full " +
                        "detail of all the possible alarms and events, please refer to the full list in the Alarm and Event " +
                        "Masks Attribute Set.",
                    xref: { document: "cluster", section: "5.2.6.22" }
                }),

                Attribute({
                    name: "Language", id: 0x21, type: "string", access: "R[W] VM", conformance: "O",
                    constraint: "max 3", quality: "P",
                    details: "Modifies the language for the on-screen or audible user interface using a 2-byte language code from " +
                        "ISO-639-1.",
                    xref: { document: "cluster", section: "5.2.6.23" }
                }),

                Attribute({
                    name: "LedSettings", id: 0x22, type: "uint8", access: "R[W] VM", conformance: "O",
                    constraint: "desc", default: 0, quality: "P",
                    details: "The settings for the LED support three different modes",
                    xref: { document: "cluster", section: "5.2.6.26" }
                }),

                Attribute({
                    name: "AutoRelockTime", id: 0x23, type: "uint32", access: "R[W] VM", conformance: "O", quality: "P",
                    details: "The number of seconds to wait after unlocking a lock before it automatically locks again. " +
                        "0=disabled. If set, unlock operations from any source will be timed. For one time unlock with " +
                        "timeout use the specific command.",
                    xref: { document: "cluster", section: "5.2.6.27" }
                }),

                Attribute({
                    name: "SoundVolume", id: 0x24, type: "uint8", access: "R[W] VM", conformance: "O",
                    constraint: "desc", default: 0, quality: "P",
                    details: "The sound volume on a door lock has four possible settings: silent, low, high and medium volumes",
                    xref: { document: "cluster", section: "5.2.6.28" }
                }),

                Attribute({
                    name: "OperatingMode", id: 0x25, type: "enum8", access: "R[W] VM", conformance: "M",
                    constraint: "desc", default: 0, quality: "P",
                    details: "The current operating mode of the lock (see OperatingModeEnum).",
                    xref: { document: "cluster", section: "5.2.6.24" }
                }),

                Attribute({
                    name: "SupportedOperatingModes", id: 0x26, type: "map16", access: "R V", conformance: "M",
                    default: 65526, quality: "F",
                    details: "This bitmap contains all operating bits of the Operating Mode Attribute supported by the lock. All " +
                        "operating modes NOT supported by a lock shall be set to one. The value of the OperatingMode " +
                        "enumeration defines the related bit to be set, as",
                    xref: { document: "cluster", section: "5.2.6.25" },

                    children: [
                        Field({ name: "Normal", constraint: "0" }),
                        Field({ name: "Vacation", constraint: "1" }),
                        Field({ name: "Privacy", constraint: "2" }),
                        Field({ name: "NoRemoteLockUnlock", constraint: "3" }),
                        Field({ name: "Passage", constraint: "4" })
                    ]
                }),

                Attribute({
                    name: "DefaultConfigurationRegister", id: 0x27, type: "map16", access: "R V", conformance: "O",
                    default: 0, quality: "P",

                    details: "This attribute represents the default configurations as they are physically set on the device " +
                        "(example: hardware dip switch setting, etc…) and represents the default setting for some of the " +
                        "attributes" +
                        "\n" +
                        "within this cluster (for example: LED, Auto Lock, Sound Volume, and Operating Mode attributes)." +
                        "\n" +
                        "This is a read-only attribute and is intended to allow clients to determine what changes may need " +
                        "to be made without having to query all the included attributes. It may be beneficial for the " +
                        "clients to know what the device’s original settings were in the event that the device needs to be " +
                        "restored to factory default settings." +
                        "\n" +
                        "If the Client device would like to query and modify the door lock server’s operating settings, it " +
                        "SHOULD send read and write attribute requests to the specific attributes." +
                        "\n" +
                        "For example, the Sound Volume attribute default value is Silent Mode. However, it is possible that " +
                        "the current Sound Volume is High Volume. Therefore, if the client wants to query/modify the current " +
                        "Sound Volume setting on the server, the client SHOULD read/write to the Sound Volume attribute.",

                    xref: { document: "cluster", section: "5.2.6.29" },

                    children: [
                        Field({
                            name: "LocalProgramming", constraint: "0",
                            description: "0 - Enable Local Programming Attribute default value is 0 (disabled)1 - Enable Local Programming Attribute default value is 1 (enabled)"
                        }),
                        Field({
                            name: "KeypadInterface", constraint: "1",
                            description: "0 –Keypad Interface default access is disabled1 - Keypad Interface default access is enabled"
                        }),
                        Field({
                            name: "RemoteInterface", constraint: "2",
                            description: "0 - Remote Interface default access is disabled1 - Remote Interface default access is enabled"
                        }),
                        Field({
                            name: "SoundVolume", constraint: "5",
                            description: "0 – Sound Volume attribute default value is 0 (Silent Mode)1 – Sound Volume attribute default value is equal to something other than 0"
                        }),
                        Field({
                            name: "AutoRelock", constraint: "6",
                            description: "0 – Auto Relock Time attribute default value = 01 – Auto Relock Time attribute default value is equal to something other than 0"
                        }),
                        Field({
                            name: "LedSettings", constraint: "7",
                            description: "0 – LED Settings attribute default value = 01 – LED Settings attribute default value is equal to something other than 0"
                        })
                    ]
                }),

                Attribute({
                    name: "EnableLocalProgramming", id: 0x28, type: "bool", access: "R[W] VA", conformance: "O",
                    default: true, quality: "P",
                    details: "Enable/disable local programming on the door lock of certain features (see LocalProgrammingFeatures " +
                        "attribute). If this value is set to TRUE then local programming is enabled on the door lock for all " +
                        "features. If it is set to FALSE then local programming is disabled on the door lock for those " +
                        "features whose bit is set to 0 in the LocalProgrammingFeatures attribute. Local programming shall " +
                        "be enabled by default.",
                    xref: { document: "cluster", section: "5.2.6.30" }
                }),

                Attribute({
                    name: "EnableOneTouchLocking", id: 0x29, type: "bool", access: "RW VM", conformance: "O",
                    default: true, quality: "P",
                    details: "Enable/disable the ability to lock the door lock with a single touch on the door lock.",
                    xref: { document: "cluster", section: "5.2.6.31" }
                }),

                Attribute({
                    name: "EnableInsideStatusLed", id: 0x2a, type: "bool", access: "RW VM", conformance: "O",
                    default: true, quality: "P",
                    details: "Enable/disable an inside LED that allows the user to see at a glance if the door is locked.",
                    xref: { document: "cluster", section: "5.2.6.32" }
                }),

                Attribute({
                    name: "EnablePrivacyModeButton", id: 0x2b, type: "bool", access: "RW VM", conformance: "O",
                    default: true, quality: "P",
                    details: "Enable/disable a button inside the door that is used to put the lock into privacy mode. When the " +
                        "lock is in privacy mode it cannot be manipulated from the outside.",
                    xref: { document: "cluster", section: "5.2.6.33" }
                }),

                Attribute({
                    name: "LocalProgrammingFeatures", id: 0x2c, type: "map8", access: "R[W] VA", conformance: "O",
                    default: 0, quality: "P",

                    details: "The local programming features that will be disabled when EnableLocalProgramming attribute is set " +
                        "to False. If a door lock doesn’t support disabling one aspect of local programming it shall return " +
                        "CONSTRAINT_ERROR during a write operation of this attribute. If the EnableLocalProgramming " +
                        "attribute is set to True then all local programming features shall be enabled regardless of the " +
                        "bits set to 0 in this attribute." +
                        "\n" +
                        "The features that can be disabled from local programming are defined in the following bitmap.",

                    xref: { document: "cluster", section: "5.2.6.34" },

                    children: [
                        Field({
                            name: "AddLocally", constraint: "0",
                            description: "0 - The ability to add Users/credentials/Schedules locally is disabled1 - The ability to add Users/Credentials/Schedules locally is enabled"
                        }),
                        Field({
                            name: "ModifyLocally", constraint: "1",
                            description: "0 - The ability to modify Users/credentials/Schedules locally is disabled1 - The ability to modify Users/Credentials/Schedules locally is enabled"
                        }),
                        Field({
                            name: "ClearLocally", constraint: "2",
                            description: "0 - The ability to clear Users/credentials/Schedules locally is disabled1 - The ability to clear Users/Credentials/Schedules locally is enabled"
                        }),
                        Field({
                            name: "AdjustLocally", constraint: "3",
                            description: "0 - The ability to adjust lock settings locally is disabled1 - The ability to adjust lock settings locally is enabled"
                        })
                    ]
                }),

                Attribute({
                    name: "WrongCodeEntryLimit", id: 0x30, type: "uint8", access: "R[W] VA", conformance: "PIN | RID",
                    constraint: "1 to 255", quality: "P",

                    details: "The number of incorrect Pin codes or RFID presentment attempts a user is allowed to enter before " +
                        "the lock will enter a lockout state. The value of this attribute is compared to all failing forms " +
                        "of credential presentation, including Pin codes used in an Unlock Command when " +
                        "RequirePINforRemoteOperation is set to true. Valid range is 1-255 incorrect attempts. The lockout " +
                        "state will be for the duration of UserCodeTemporaryDisableTime. If the attribute accepts writes and " +
                        "an attempt to write the value 0 is made, the device shall respond with CONSTRAINT_ERROR." +
                        "\n" +
                        "The lock may reset the counter used to track incorrect credential presentations as required by " +
                        "internal logic, environmental events, or other reasons. The lock shall reset the counter if a valid " +
                        "credential is presented.",

                    xref: { document: "cluster", section: "5.2.6.35" }
                }),

                Attribute({
                    name: "UserCodeTemporaryDisableTime", id: 0x31, type: "uint8", access: "R[W] VA",
                    conformance: "PIN | RID", constraint: "1 to 255", quality: "P",
                    details: "The number of seconds that the lock shuts down following wrong code entry. Valid range is 1-255 " +
                        "seconds. Device can shut down to lock user out for specified amount of time. (Makes it difficult to " +
                        "try and guess a PIN for the device.) If the attribute accepts writes and an attempt to write the " +
                        "attribute to 0 is made, the device shall respond with CONSTRAINT_ERROR.",
                    xref: { document: "cluster", section: "5.2.6.36" }
                }),

                Attribute({
                    name: "SendPinOverTheAir", id: 0x32, type: "bool", access: "R[W] VA", conformance: "[!USR & PIN]",
                    default: true, quality: "P",

                    details: "Boolean set to True if it is ok for the door lock server to send PINs over the air. This attribute " +
                        "determines the behavior of the server’s TX operation. If it is false, then it is not ok for the " +
                        "device to send PIN in any messages over the air." +
                        "\n" +
                        "The PIN field within any door lock cluster message shall keep the first octet unchanged and" +
                        "\n" +
                        "masks the actual code by replacing with 0xFF. For example (PIN \"1234\" ): If the attribute value is " +
                        "True, 0x04 0x31 0x32 0x33 0x34 shall be used in the PIN field in any door lock cluster message " +
                        "payload. If the attribute value is False, 0x04 0xFF 0xFF 0xFF 0xFF shall be used." +
                        "\n" +
                        "### ‌5.2.6.38. RequirePINForRemoteOperation Attribute" +
                        "\n" +
                        "Boolean set to True if the door lock server requires that an optional PINs be included in the " +
                        "payload of remote lock operation events like Lock, Unlock, Unlock with Timeout and Toggle in order " +
                        "to function.",

                    xref: { document: "cluster", section: "5.2.6.37" }
                }),

                Attribute({
                    name: "RequirePiNforRemoteOperation", id: 0x33, type: "bool", access: "R[W] VA",
                    conformance: "COTA & PIN", default: true, quality: "P",
                    xref: { document: "cluster", section: "5.2.6" }
                }),
                Attribute({
                    name: "SecurityLevel", id: 0x34, conformance: "D", default: "0",
                    xref: { document: "cluster", section: "5.2.6" }
                }),

                Attribute({
                    name: "ExpiringUserTimeout", id: 0x35, type: "uint16", access: "R[W] VA", conformance: "[USR]",
                    constraint: "1 to 2880", quality: "P",
                    details: "Number of minutes a PIN, RFID, Fingerprint, or other credential associated with a user of type " +
                        "ExpiringUser shall remain valid after its first use before expiring. When the credential expires " +
                        "the UserStatus for the corresponding user record shall be set to OccupiedDisabled.",
                    xref: { document: "cluster", section: "5.2.6.39" }
                }),

                Attribute({
                    name: "AlarmMask", id: 0x40, type: "map16", access: "RW VA", conformance: "O", default: 65535,
                    quality: "P",

                    details: "This attribute is only supported if the Alarms cluster is on the same endpoint. The alarm mask is " +
                        "used to turn on/off alarms for particular functions. Alarms for an alarm group are enabled if the " +
                        "associated alarm mask bit is set. Each bit represents a group of alarms. Entire alarm groups can be " +
                        "turned on or off by setting or clearing the associated bit in the alarm mask." +
                        "\n" +
                        "This mask DOES NOT apply to the Events mechanism of this cluster.",

                    xref: { document: "cluster", section: "5.2.6.40" },

                    children: [
                        Field({ name: "AlarmCode0", constraint: "0", description: "Locking Mechanism Jammed" }),
                        Field({ name: "AlarmCode1", constraint: "1", description: "Lock Reset to Factory Defaults" }),
                        Field({ name: "AlarmCode2", constraint: "2", description: "Reserved" }),
                        Field({ name: "AlarmCode3", constraint: "3", description: "RF Module Power Cycled" }),
                        Field({
                            name: "AlarmCode4", constraint: "4", description: "Tamper Alarm - wrong code entry limit"
                        }),
                        Field({
                            name: "AlarmCode5", constraint: "5",
                            description: "Tamper Alarm - front escutcheon removed from main"
                        }),
                        Field({
                            name: "AlarmCode6", constraint: "6", description: "Forced Door Open under Door Locked Condition"
                        })
                    ]
                }),

                Attribute({
                    name: "KeypadOperationEventMask", id: 0x41, type: "map16", access: "RW VA",
                    conformance: "[NOT & PIN]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off the transmission of keypad operation events. This mask DOES NOT " +
                        "apply to the storing of events in the event log. This mask only applies to the Operation Event " +
                        "Notification Command." +
                        "\n" +
                        "This mask DOES NOT apply to the Events mechanism of this cluster.",
                    xref: { document: "cluster", section: "5.2.6.41" },

                    children: [
                        Field({
                            name: "OperationEventCode0", constraint: "0",
                            description: "Unknown or manufacturer-specific keypad operation event"
                        }),
                        Field({ name: "OperationEventCode1", constraint: "1", description: "Lock, source: keypad" }),
                        Field({ name: "OperationEventCode2", constraint: "2", description: "Unlock, source: keypad" }),
                        Field({
                            name: "OperationEventCode3", constraint: "3",
                            description: "Lock, source: keypad, error: invalid PIN"
                        }),
                        Field({
                            name: "OperationEventCode4", constraint: "4",
                            description: "Lock, source: keypad, error: invalid schedule"
                        }),
                        Field({
                            name: "OperationEventCode5", constraint: "5",
                            description: "Unlock, source: keypad, error: invalid code"
                        }),
                        Field({
                            name: "OperationEventCode6", constraint: "6",
                            description: "Unlock, source: keypad, error: invalid schedule"
                        }),
                        Field({
                            name: "OperationEventCode15", constraint: "7",
                            description: "Non-Access User operation event, source keypad."
                        })
                    ]
                }),

                Attribute({
                    name: "RemoteOperationEventMask", id: 0x42, type: "map16", access: "RW VA", conformance: "[NOT]",
                    default: 65535, quality: "P",
                    details: "Event mask used to turn on and off the transmission of remote operation events. This mask DOES NOT " +
                        "apply to the storing of events in the event log. This mask only applies to the Operation Event " +
                        "Notification Command." +
                        "\n" +
                        "This mask DOES NOT apply to the Events mechanism of this cluster.",
                    xref: { document: "cluster", section: "5.2.6.42" },

                    children: [
                        Field({
                            name: "OperationEventCode0", constraint: "0",
                            description: "Unknown or manufacturer-specific remote operation event"
                        }),
                        Field({ name: "OperationEventCode1", constraint: "1", description: "Lock, source: remote" }),
                        Field({ name: "OperationEventCode2", constraint: "2", description: "Unlock, source: remote" }),
                        Field({
                            name: "OperationEventCode3", constraint: "3",
                            description: "Lock, source: remote, error: invalid code"
                        }),
                        Field({
                            name: "OperationEventCode4", constraint: "4",
                            description: "Lock, source: remote, error: invalid schedule"
                        }),
                        Field({
                            name: "OperationEventCode5", constraint: "5",
                            description: "Unlock, source: remote, error: invalid code"
                        }),
                        Field({
                            name: "OperationEventCode6", constraint: "6",
                            description: "Unlock, source: remote, error: invalid schedule"
                        })
                    ]
                }),

                Attribute({
                    name: "ManualOperationEventMask", id: 0x43, type: "map16", access: "RW VA", conformance: "[NOT]",
                    default: 65535, quality: "P",
                    details: "Event mask used to turn on and off manual operation events. This mask DOES NOT apply to the storing " +
                        "of events in the event log. This mask only applies to the Operation Event Notification Command." +
                        "\n" +
                        "This mask DOES NOT apply to the Events mechanism of this cluster.",
                    xref: { document: "cluster", section: "5.2.6.43" },

                    children: [
                        Field({
                            name: "OperationEvenCode0", constraint: "0",
                            description: "Unknown or manufacturer-specific manual operation event"
                        }),
                        Field({ name: "OperationEvenCode1", constraint: "1", description: "Thumbturn Lock" }),
                        Field({ name: "OperationEvenCode2", constraint: "2", description: "Thumbturn Unlock" }),
                        Field({ name: "OperationEvenCode7", constraint: "3", description: "One touch lock" }),
                        Field({ name: "OperationEvenCode8", constraint: "4", description: "Key Lock" }),
                        Field({ name: "OperationEvenCode9", constraint: "5", description: "Key Unlock" }),
                        Field({ name: "OperationEvenCode10", constraint: "6", description: "Auto lock" }),
                        Field({ name: "OperationEvenCode11", constraint: "7", description: "Schedule Lock" }),
                        Field({ name: "OperationEvenCode12", constraint: "8", description: "Schedule Unlock" }),
                        Field({
                            name: "OperationEvenCode13", constraint: "9", description: "Manual Lock (Key or Thumbturn)"
                        }),
                        Field({
                            name: "OperationEvenCode14", constraint: "10", description: "Manual Unlock (Key or Thumbturn)"
                        })
                    ]
                }),

                Attribute({
                    name: "RfidOperationEventMask", id: 0x44, type: "map16", access: "RW VA",
                    conformance: "[NOT & RID]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off RFID operation events. This mask DOES NOT apply to the storing " +
                        "of events in the event log. This mask only applies to the Operation Event Notification Command." +
                        "\n" +
                        "This mask DOES NOT apply to the Events mechanism of this cluster.",
                    xref: { document: "cluster", section: "5.2.6.44" },

                    children: [
                        Field({
                            name: "OperationEventCode0", constraint: "0",
                            description: "Unknown or manufacturer-specific keypad operation event"
                        }),
                        Field({ name: "OperationEventCode1", constraint: "1", description: "Lock, source: RFID" }),
                        Field({ name: "OperationEventCode2", constraint: "2", description: "Unlock, source: RFID" }),
                        Field({
                            name: "OperationEventCode3", constraint: "3",
                            description: "Lock, source: RFID, error: invalid RFID ID"
                        }),
                        Field({
                            name: "OperationEventCode4", constraint: "4",
                            description: "Lock, source: RFID, error: invalid schedule"
                        }),
                        Field({
                            name: "OperationEventCode5", constraint: "5",
                            description: "Unlock, source: RFID, error: invalid RFID ID"
                        }),
                        Field({
                            name: "OperationEventCode6", constraint: "6",
                            description: "Unlock, source: RFID, error: invalid schedule"
                        })
                    ]
                }),

                Attribute({
                    name: "KeypadProgrammingEventMask", id: 0x45, type: "map16", access: "RW VA",
                    conformance: "[NOT & PIN]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off keypad programming events. This mask DOES NOT apply to the " +
                        "storing of events in the event log. This mask only applies to the Programming Event Notification " +
                        "Command." +
                        "\n" +
                        "This mask DOES NOT apply to the Events mechanism of this cluster.",
                    xref: { document: "cluster", section: "5.2.6.45" },

                    children: [
                        Field({
                            name: "ProgramEventCode0", constraint: "0",
                            description: "Unknown or manufacturer-specific keypad programming event"
                        }),
                        Field({
                            name: "ProgramEventCode1", constraint: "1",
                            description: "Programming PIN code changed, source: keypadUser ID: programming user ID.PIN: default or programming PIN code if codes can be sent over the air per attribute.User type: defaultUser Status: default"
                        }),
                        Field({
                            name: "ProgramEventCode2", constraint: "2",
                            description: "PIN added, source: keypadUser ID: user ID that was added.PIN: code that was added (if codes can be sent over the air per attribute.)User type: default or type added.User Status: default or status added."
                        }),
                        Field({
                            name: "ProgramEventCode3", constraint: "3",
                            description: "PIN cleared, source: keypadUser ID: user ID that was cleared.PIN: code that was cleared (if codes can be sent over the air per attribute.)User type: default or type cleared.User Status: default or status cleared."
                        }),
                        Field({
                            name: "ProgramEventCode4", constraint: "4",
                            description: "PIN changed Source: keypadUser ID: user ID that was changedPIN: code that was changed (if codes can be sent over the air per attribute.)User type: default or type changed.User Status: default or status changed."
                        })
                    ]
                }),

                Attribute({
                    name: "RemoteProgrammingEventMask", id: 0x46, type: "map16", access: "RW VA", conformance: "[NOT]",
                    default: 65535, quality: "P",
                    details: "Event mask used to turn on and off remote programming events. This mask DOES NOT apply to the " +
                        "storing of events in the event log. This mask only applies to the Programming Event Notification " +
                        "Command." +
                        "\n" +
                        "This mask DOES NOT apply to the Events mechanism of this cluster.",
                    xref: { document: "cluster", section: "5.2.6.46" },

                    children: [
                        Field({
                            name: "ProgramEventCode0", constraint: "0",
                            description: "Unknown or manufacturer-specific remote programming event."
                        }),
                        Field({
                            name: "ProgramEventCode2", constraint: "2",
                            description: "PIN added, source remoteSame as keypad source above"
                        }),
                        Field({
                            name: "ProgramEventCode3", constraint: "3",
                            description: "PIN cleared, source remoteSame as keypad source above."
                        }),
                        Field({
                            name: "ProgramEventCode4", constraint: "4",
                            description: "PIN changed Source remoteSame as keypad sourceabove"
                        }),
                        Field({
                            name: "ProgramEventCode5", constraint: "5", description: "RFID code added, Source remote"
                        }),
                        Field({
                            name: "ProgramEventCode6", constraint: "6", description: "RFID code cleared, Source remote"
                        })
                    ]
                }),

                Attribute({
                    name: "RfidProgrammingEventMask", id: 0x47, type: "map16", access: "RW VA",
                    conformance: "[NOT & RID]", default: 65535, quality: "P",
                    details: "Event mask used to turn on and off RFID programming events. This mask DOES NOT apply to the storing " +
                        "of events in the event log. This mask only applies to the Programming Event Notification Command." +
                        "\n" +
                        "This mask DOES NOT apply to the Events mechanism of this cluster.",
                    xref: { document: "cluster", section: "5.2.6.47" },

                    children: [
                        Field({
                            name: "ProgramEventCode0", constraint: "0",
                            description: "Unknown or manufacturer-specific keypad programming event"
                        }),
                        Field({
                            name: "ProgramEventCode5", constraint: "5",
                            description: "ID Added, Source: RFIDUser ID: user ID that was added.ID: ID that was added (if codes can be sent over the air per attribute.)User Type: default or type added.User Status: default or status added."
                        }),
                        Field({
                            name: "ProgramEventCode6", constraint: "6",
                            description: "ID cleared, Source: RFIDUser ID: user ID that was cleared.ID: ID that was cleared (if codes can be sent over the air per attribute.)User Type: default or type cleared.User Status: default or status cleared."
                        })
                    ]
                }),

                Event({
                    name: "DoorLockAlarm", id: 0x0, access: "V", conformance: "M", priority: "critical",
                    details: "The door lock cluster provides several alarms which can be sent when there is a critical state on " +
                        "the door lock. The alarms available for the door lock cluster are listed in the AlarmCodeEnum " +
                        "section below.",
                    xref: { document: "cluster", section: "5.2.8.1" },
                    children: [Field({
                        name: "AlarmCode", id: 0x0, type: "AlarmCodeEnum", conformance: "M",
                        details: "The alarm code of the event that has happened.",
                        xref: { document: "cluster", section: "5.2.8.1.1" }
                    })]
                }),

                Event({
                    name: "DoorStateChange", id: 0x1, access: "V", conformance: "DPS", priority: "critical",
                    details: "The door lock server sends out a DoorStateChange event when the door lock door state changes.",
                    xref: { document: "cluster", section: "5.2.8.2" },
                    children: [Field({
                        name: "DoorState", id: 0x0, type: "DoorStateEnum", conformance: "M",
                        details: "The new door state for this door event.",
                        xref: { document: "cluster", section: "5.2.8.2.1" }
                    })]
                }),

                Event({
                    name: "LockOperation", id: 0x2, access: "V", conformance: "M", priority: "critical",

                    details: "The door lock server sends out a LockOperation event when the event is triggered by the various " +
                        "lock operation sources." +
                        "\n" +
                        "  • If the door lock server supports the Unbolt Door command, it shall generate a LockOperation " +
                        "    event with LockOperationType set to Unlock after an Unbolt Door command succeeds." +
                        "\n" +
                        "  • If the door lock server supports the Unbolting Feature and an Unlock Door command is performed, " +
                        "    it shall generate a LockOperation event with LockOperationType set to Unlatch when the " +
                        "    unlatched state is reached and a LockOperation event with LockOperationType set to Unlock when " +
                        "    the lock successfully completes the unlock → hold latch → release latch and return to unlock " +
                        "    state operation." +
                        "\n" +
                        "  • If the command fails during holding or releasing the latch but after passing the unlocked " +
                        "    state, the door lock server shall generate a LockOperationError event with LockOperationType " +
                        "    set to Unlatch and a LockOperation event with LockOperationType set to Unlock." +
                        "\n" +
                        "    ◦ If it fails before reaching the unlocked state, the door lock server shall generate only a " +
                        "      LockOperationError event with LockOperationType set to Unlock." +
                        "\n" +
                        "  • Upon manual actuation, a door lock server that supports the Unbolting Feature:" +
                        "\n" +
                        "    ◦ shall generate a LockOperation event of LockOperationType Unlatch when it is actuated from " +
                        "      the outside." +
                        "\n" +
                        "    ◦ may generate a LockOperation event of LockOperationType Unlatch when it is actuated from the " +
                        "      inside.",

                    xref: { document: "cluster", section: "5.2.8.3" },

                    children: [
                        Field({
                            name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum", conformance: "M",
                            details: "The type of the lock operation that was performed.",
                            xref: { document: "cluster", section: "5.2.8.3.1" }
                        }),
                        Field({
                            name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M",
                            details: "The source of the lock operation that was performed.",
                            xref: { document: "cluster", section: "5.2.8.3.2" }
                        }),

                        Field({
                            name: "UserIndex", id: 0x2, type: "uint16", conformance: "M", quality: "X",
                            details: "The lock UserIndex who performed the lock operation. This shall be null if there is no user index " +
                                "that can be determined for the given operation source. This shall NOT be null if a user index can " +
                                "be determined. In particular, this shall NOT be null if the operation was associated with a valid " +
                                "credential.",
                            xref: { document: "cluster", section: "5.2.8.3.3" }
                        }),

                        Field({
                            name: "FabricIndex", id: 0x3, type: "fabric-idx", conformance: "M", quality: "X",
                            details: "The fabric index of the fabric that performed the lock operation. This shall be null if there is no " +
                                "fabric that can be determined for the given operation source. This shall NOT be null if the " +
                                "operation source is \"Remote\".",
                            xref: { document: "cluster", section: "5.2.8.3.4" }
                        }),

                        Field({
                            name: "SourceNode", id: 0x4, type: "node-id", conformance: "M", quality: "X",
                            details: "The Node ID of the node that performed the lock operation. This shall be null if there is no Node " +
                                "associated with the given operation source. This shall NOT be null if the operation source is " +
                                "\"Remote\".",
                            xref: { document: "cluster", section: "5.2.8.3.5" }
                        }),

                        Field({
                            name: "Credentials", id: 0x5, type: "list", conformance: "[USR]",
                            constraint: "1 to numberOfCredentialsSupportedPerUser", quality: "X",
                            details: "The list of credentials used in performing the lock operation. This shall be null if no credentials " +
                                "were involved.",
                            xref: { document: "cluster", section: "5.2.8.3.6" },
                            children: [Field({ name: "entry", type: "CredentialStruct" })]
                        })
                    ]
                }),

                Event({
                    name: "LockOperationError", id: 0x3, access: "V", conformance: "M", priority: "critical",
                    details: "The door lock server sends out a LockOperationError event when a lock operation fails for various " +
                        "reasons.",
                    xref: { document: "cluster", section: "5.2.8.4" },

                    children: [
                        Field({
                            name: "LockOperationType", id: 0x0, type: "LockOperationTypeEnum", conformance: "M",
                            details: "The type of the lock operation that was performed.",
                            xref: { document: "cluster", section: "5.2.8.4.1" }
                        }),
                        Field({
                            name: "OperationSource", id: 0x1, type: "OperationSourceEnum", conformance: "M",
                            details: "The source of the lock operation that was performed.",
                            xref: { document: "cluster", section: "5.2.8.4.2" }
                        }),
                        Field({
                            name: "OperationError", id: 0x2, type: "OperationErrorEnum", conformance: "M",
                            details: "The lock operation error triggered when the operation was performed.",
                            xref: { document: "cluster", section: "5.2.8.4.3" }
                        }),

                        Field({
                            name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X",
                            details: "The lock UserIndex who performed the lock operation. This shall be null if there is no user id that " +
                                "can be determined for the given operation source.",
                            xref: { document: "cluster", section: "5.2.8.4.4" }
                        }),

                        Field({
                            name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X",
                            details: "The fabric index of the fabric that performed the lock operation. This shall be null if there is no " +
                                "fabric that can be determined for the given operation source. This shall NOT be null if the " +
                                "operation source is \"Remote\".",
                            xref: { document: "cluster", section: "5.2.8.4.5" }
                        }),

                        Field({
                            name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X",
                            details: "The Node ID of the node that performed the lock operation. This shall be null if there is no Node " +
                                "associated with the given operation source. This shall NOT be null if the operation source is " +
                                "\"Remote\".",
                            xref: { document: "cluster", section: "5.2.8.4.6" }
                        }),

                        Field({
                            name: "Credentials", id: 0x6, type: "list", conformance: "[USR]",
                            constraint: "1 to numberOfCredentialsSupportedPerUser", quality: "X",
                            details: "The list of credentials used in performing the lock operation. This shall be null if no credentials " +
                                "were involved.",
                            xref: { document: "cluster", section: "5.2.8.4.7" },
                            children: [Field({ name: "entry", type: "CredentialStruct" })]
                        })
                    ]
                }),

                Event({
                    name: "LockUserChange", id: 0x4, access: "V", conformance: "USR", priority: "info",
                    details: "The door lock server sends out a LockUserChange event when a lock user, schedule, or credential " +
                        "change has occurred.",
                    xref: { document: "cluster", section: "5.2.8.5" },

                    children: [
                        Field({
                            name: "LockDataType", id: 0x0, type: "LockDataTypeEnum", conformance: "M",
                            details: "The lock data type that was changed.",
                            xref: { document: "cluster", section: "5.2.8.5.1" }
                        }),
                        Field({
                            name: "DataOperationType", id: 0x1, type: "DataOperationTypeEnum", conformance: "M",
                            details: "The data operation performed on the lock data type changed.",
                            xref: { document: "cluster", section: "5.2.8.5.2" }
                        }),

                        Field({
                            name: "OperationSource", id: 0x2, type: "OperationSourceEnum", conformance: "M",
                            constraint: "unspecified, keypad, remote",
                            details: "The source of the user data change.",
                            xref: { document: "cluster", section: "5.2.8.5.3" }
                        }),

                        Field({
                            name: "UserIndex", id: 0x3, type: "uint16", conformance: "M", quality: "X",
                            details: "The lock UserIndex associated with the change (if any). This shall be null if there is no specific " +
                                "user associated with the data operation. This shall be 0xFFFE if all users are affected (e.g. Clear " +
                                "Users).",
                            xref: { document: "cluster", section: "5.2.8.5.4" }
                        }),

                        Field({
                            name: "FabricIndex", id: 0x4, type: "fabric-idx", conformance: "M", quality: "X",
                            details: "The fabric index of the fabric that performed the change (if any). This shall be null if there is " +
                                "no fabric that can be determined to have caused the change. This shall NOT be null if the operation " +
                                "source is \"Remote\".",
                            xref: { document: "cluster", section: "5.2.8.5.5" }
                        }),

                        Field({
                            name: "SourceNode", id: 0x5, type: "node-id", conformance: "M", quality: "X",
                            details: "The Node ID that that performed the change (if any). The Node ID of the node that performed the " +
                                "change. This shall be null if there was no Node involved in the change. This shall NOT be null if " +
                                "the operation source is \"Remote\".",
                            xref: { document: "cluster", section: "5.2.8.5.6" }
                        }),

                        Field({
                            name: "DataIndex", id: 0x6, type: "uint16", conformance: "M", quality: "X",
                            details: "This is the index of the specific item that was changed (e.g. schedule, PIN, RFID, etc.) in the " +
                                "list of items identified by LockDataType. This shall be null if the LockDataType does not " +
                                "correspond to a list that can be indexed into (e.g. ProgrammingUser). This shall be 0xFFFE if all " +
                                "indices are affected (e.g. Clear PIN Code, Clear RFID Code, Clear Week Day Schedule, Clear Year Day " +
                                "Schedule, etc.).",
                            xref: { document: "cluster", section: "5.2.8.5.7" }
                        })
                    ]
                }),

                Command({
                    name: "LockDoor", id: 0x0, access: "O T", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "UnlockDoor", id: 0x1, access: "O T", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "Toggle", id: 0x2, access: "O T", conformance: "X", direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "UnlockWithTimeout", id: 0x3, access: "O T", conformance: "O", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetLogRecord", id: 0x4, access: "M", conformance: "LOG", direction: "request",
                    response: "GetLogRecordResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetLogRecordResponse", id: 0x4, conformance: "LOG", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetPinCode", id: 0x5, access: "A T", conformance: "!USR & PIN", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetPinCode", id: 0x6, access: "A", conformance: "!USR & PIN", direction: "request",
                    response: "GetPinCodeResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetPinCodeResponse", id: 0x6, conformance: "!USR & PIN", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearPinCode", id: 0x7, access: "A T", conformance: "!USR & PIN", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearAllPinCodes", id: 0x8, access: "A T", conformance: "!USR & PIN", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetUserStatus", id: 0x9, access: "A", conformance: "!USR & (PIN | RID | FGP)",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetUserStatus", id: 0xa, access: "A", conformance: "!USR & (PIN | RID | FGP)",
                    direction: "request", response: "GetUserStatusResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetUserStatusResponse", id: 0xa, conformance: "!USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetWeekDaySchedule", id: 0xb, access: "A", conformance: "WDSCH", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetWeekDaySchedule", id: 0xc, access: "A", conformance: "WDSCH", direction: "request",
                    response: "GetWeekDayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetWeekDayScheduleResponse", id: 0xc, conformance: "WDSCH", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearWeekDaySchedule", id: 0xd, access: "A", conformance: "WDSCH", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetYearDaySchedule", id: 0xe, access: "A", conformance: "YDSCH", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetYearDaySchedule", id: 0xf, access: "A", conformance: "YDSCH", direction: "request",
                    response: "GetYearDayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetYearDayScheduleResponse", id: 0xf, conformance: "YDSCH", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearYearDaySchedule", id: 0x10, access: "A", conformance: "YDSCH", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetHolidaySchedule", id: 0x11, access: "A", conformance: "HDSCH", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetHolidaySchedule", id: 0x12, access: "A", conformance: "HDSCH", direction: "request",
                    response: "GetHolidayScheduleResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetHolidayScheduleResponse", id: 0x12, conformance: "HDSCH", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearHolidaySchedule", id: 0x13, access: "A", conformance: "HDSCH", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetUserType", id: 0x14, access: "A", conformance: "!USR & (PIN | RID | FGP)",
                    direction: "request", response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetUserType", id: 0x15, access: "A", conformance: "!USR & (PIN | RID | FGP)",
                    direction: "request", response: "GetUserTypeResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetUserTypeResponse", id: 0x15, conformance: "!USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetRfidCode", id: 0x16, access: "A T", conformance: "!USR & RID", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetRfidCode", id: 0x17, access: "A", conformance: "!USR & RID", direction: "request",
                    response: "GetRfidCodeResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetRfidCodeResponse", id: 0x17, conformance: "!USR & RID", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearRfidCode", id: 0x18, access: "A T", conformance: "!USR & RID", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearAllRfidCodes", id: 0x19, access: "A T", conformance: "!USR & RID", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetUser", id: 0x1a, access: "A T", conformance: "USR", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetUser", id: 0x1b, access: "A", conformance: "USR", direction: "request",
                    response: "GetUserResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetUserResponse", id: 0x1c, conformance: "USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearUser", id: 0x1d, access: "A T", conformance: "USR", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "OperatingEventNotification", id: 0x20, conformance: "[NOT]", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ProgrammingEventNotification", id: 0x21, conformance: "[NOT]", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetCredential", id: 0x22, access: "A T", conformance: "USR", direction: "request",
                    response: "SetCredentialResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "SetCredentialResponse", id: 0x23, conformance: "USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetCredentialStatus", id: 0x24, access: "A", conformance: "USR", direction: "request",
                    response: "GetCredentialStatusResponse",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "GetCredentialStatusResponse", id: 0x25, conformance: "USR", direction: "response",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "ClearCredential", id: 0x26, access: "A T", conformance: "USR", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Command({
                    name: "UnboltDoor", id: 0x27, access: "O T", conformance: "UBOLT", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.2.7" }
                }),
                Datatype({
                    name: "CredentialType",
                    details: "The credential type used to authorize the lock operation.",
                    xref: { document: "cluster", section: "5.2.9.3.1" }
                }),

                Datatype({
                    name: "CredentialIndex",

                    details: "This is the index of the specific credential used to authorize the lock operation in the list of " +
                        "credentials identified by CredentialType (e.g. schedule, PIN, RFID, etc.). This shall be set to 0 " +
                        "if CredentialType is ProgrammingPIN or does not correspond to a list that can be indexed into." +
                        "\n" +
                        "### ‌5.2.9.4. CredentialTypeEnum" +
                        "\n" +
                        "The Credential Type enum shall indicate the credential type." +
                        "\n" +
                        "### ‌5.2.9.5. DataOperationTypeEnum" +
                        "\n" +
                        "The DataOperationType enum shall indicate the data operation performed." +
                        "\n" +
                        "### ‌5.2.9.6. DaysMaskMap" +
                        "\n" +
                        "The DaysMask field used in various commands and shall indicate the days of the week the Week Day " +
                        "schedule applies for." +
                        "\n" +
                        "### ‌5.2.9.7. DoorStateEnum" +
                        "\n" +
                        "The DoorState enumeration shall indicate the current door state." +
                        "\n" +
                        "### ‌5.2.9.8. DoorLockStatus" +
                        "\n" +
                        "The cluster-specific status codes for the Door Lock cluster are as follows:",

                    xref: { document: "cluster", section: "5.2.9.3.2" }
                }),

                Datatype({
                    name: "DUPLICATE",
                    details: "The provided User ID, PIN or RFID code or other credential is a duplicate of an existing entry.",
                    xref: { document: "cluster", section: "5.2.9.8.1" }
                }),

                Datatype({
                    name: "OCCUPIED",

                    details: "The provided User ID, Credential ID, or entry location is already occupied. The entry might need to " +
                        "be deleted or a different ID or location chosen." +
                        "\n" +
                        "### ‌5.2.9.9. LockDataTypeEnum" +
                        "\n" +
                        "The LockDataType enum shall indicate the data type that is being or has changed." +
                        "\n" +
                        "### ‌5.2.9.10. LockOperationTypeEnum" +
                        "\n" +
                        "The LockOperationType enumeration shall indicate the type of Lock operation performed." +
                        "\n" +
                        "### ‌5.2.9.11. OperationErrorEnum" +
                        "\n" +
                        "The OperationError enumeration shall indicate the error cause of the Lock/Unlock operation per" +
                        "\n" +
                        "formed." +
                        "\n" +
                        "### ‌5.2.9.12. OperatingModeEnum" +
                        "\n" +
                        "The OperatingMode enumeration shall indicate the lock operating mode." +
                        "\n" +
                        "The table below shows the operating mode and which interfaces are enabled, if supported, for each " +
                        "mode." +
                        "\n" +
                        "* Interface Operational: Yes, No or N/A" +
                        "\n" +
                        "Note: For modes that disable the remote interface, the door lock shall respond to Lock, Unlock, " +
                        "Toggle, and Unlock with Timeout commands with a response status Failure and not take the action " +
                        "requested by those commands. The door lock shall NOT disable the radio or otherwise unbind or leave " +
                        "the network. It shall still respond to all other commands and requests.",

                    xref: { document: "cluster", section: "5.2.9.8.2" }
                }),

                Datatype({
                    name: "Normal",
                    details: "The lock operates normally. All interfaces are enabled.",
                    xref: { document: "cluster", section: "5.2.9.12.1" }
                }),
                Datatype({
                    name: "Vacation",
                    details: "Only remote interaction is enabled. The keypad shall only be operable by the master user.",
                    xref: { document: "cluster", section: "5.2.9.12.2" }
                }),

                Datatype({
                    name: "Privacy",
                    details: "This mode is only possible if the door is locked. Manual unlocking changes the mode to Normal " +
                        "operating mode. All external interaction with the door lock is disabled. This mode is intended to " +
                        "be used so that users, presumably inside the property, will have control over the entrance.",
                    xref: { document: "cluster", section: "5.2.9.12.3" }
                }),

                Datatype({
                    name: "NoRemoteLockUnlock",
                    details: "This mode only disables remote interaction with the lock. This does not apply to any remote " +
                        "proprietary means of communication. It specifically applies to the Lock, Unlock, Toggle, and Unlock " +
                        "with Timeout Commands.",
                    xref: { document: "cluster", section: "5.2.9.12.4" }
                }),

                Datatype({
                    name: "Passage",

                    details: "The lock is open or can be opened or closed at will without the use of a Keypad or other means of " +
                        "user validation (e.g. a lock for a business during work hours)." +
                        "\n" +
                        "### ‌5.2.9.13. OperationSourceEnum" +
                        "\n" +
                        "The OperationSource enumeration shall indicate the source of the Lock/Unlock operation performed." +
                        "\n" +
                        "5.2.9.14. PIN/RFID Code Format" +
                        "\n" +
                        "The PIN/RFID codes defined in this specification are all octet strings." +
                        "\n" +
                        "All value in the PIN/RFID code shall be ASCII encoded regardless if the PIN/RFID codes are number " +
                        "or characters. For example, code of “1, 2, 3, 4” shall be represented as 0x31, 0x32, 0x33, 0x34." +
                        "\n" +
                        "### ‌5.2.9.15. UserStatusEnum" +
                        "\n" +
                        "The UserStatus enum used in various commands shall indicate what the status is for a specific user " +
                        "ID." +
                        "\n" +
                        "### ‌5.2.9.16. UserTypeEnum" +
                        "\n" +
                        "The UserType enum used in various commands shall indicate what the type is for a specific user ID.",

                    xref: { document: "cluster", section: "5.2.9.12.5" }
                }),

                Datatype({
                    name: "UnrestrictedUser",
                    details: "User has access 24/7 provided proper PIN or RFID is supplied (e.g., owner).",
                    xref: { document: "cluster", section: "5.2.9.16.1" }
                }),
                Datatype({
                    name: "YearDayScheduleUser",
                    details: "User has ability to open lock within a specific time period (e.g., guest).",
                    xref: { document: "cluster", section: "5.2.9.16.2" }
                }),

                Datatype({
                    name: "WeekDayScheduleUser",
                    details: "User has ability to open lock based on specific time period within a reoccurring weekly schedule " +
                        "(e.g., cleaning worker).",
                    xref: { document: "cluster", section: "5.2.9.16.3" }
                }),

                Datatype({
                    name: "ProgrammingUser",
                    details: "User has ability to both program and operate the door lock. This user can manage the users and user " +
                        "schedules. In all other respects this user matches the unrestricted (default) user. ProgrammingUser " +
                        "is the only user that can disable the user interface (keypad, remote, etc…).",
                    xref: { document: "cluster", section: "5.2.9.16.4" }
                }),

                Datatype({
                    name: "NonAccessUser",
                    details: "User is recognized by the lock but does not have the ability to open the lock. This user will only " +
                        "cause the lock to generate the appropriate event notification to any bound devices.",
                    xref: { document: "cluster", section: "5.2.9.16.5" }
                }),

                Datatype({
                    name: "ForcedUser",
                    details: "User has ability to open lock but a ForcedUser LockOperationType and ForcedUser silent alarm will " +
                        "be emitted to allow a notified Node to alert emergency services or contacts on the user account " +
                        "when used.",
                    xref: { document: "cluster", section: "5.2.9.16.6" }
                }),

                Datatype({
                    name: "DisposableUser",
                    details: "User has ability to open lock once after which the lock shall change the corresponding user record " +
                        "UserStatus value to OccupiedDisabled automatically.",
                    xref: { document: "cluster", section: "5.2.9.16.7" }
                }),

                Datatype({
                    name: "ExpiringUser",
                    details: "User has ability to open lock for ExpiringUserTimeout attribute minutes after the first use of the " +
                        "PIN code, RFID code, Fingerprint, or other credential. After ExpiringUserTimeout minutes the " +
                        "corresponding user record UserStatus value shall be set to OccupiedDisabled automatically by the " +
                        "lock. The lock shall persist the timeout across reboots such that the ExpiringUserTimeout is " +
                        "honored.",
                    xref: { document: "cluster", section: "5.2.9.16.8" }
                }),

                Datatype({
                    name: "ScheduleRestrictedUser",
                    details: "User access is restricted by Week Day and/or Year Day schedule.",
                    xref: { document: "cluster", section: "5.2.9.16.9" }
                }),

                Datatype({
                    name: "RemoteOnlyUser",
                    details: "User access and PIN code is restricted to remote lock/unlock commands only. This type of user might " +
                        "be useful for regular delivery services or voice assistant unlocking operations to prevent a PIN " +
                        "code credential created for them from being used at the keypad. The PIN code credential would only " +
                        "be provided over-the-air for the lock/unlock commands.",
                    xref: { document: "cluster", section: "5.2.9.16.10" }
                })
            ]
        }),

        Cluster({
            name: "WindowCovering", id: 0x102, classification: "application",
            details: "The window covering cluster provides an interface for controlling and adjusting automatic window " +
                "coverings such as drapery motors, automatic shades, curtains and blinds.",
            xref: { document: "cluster", section: "5.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "5.3.4" },

                    children: [
                        Field({
                            name: "LF", conformance: "O.a+", constraint: "0", description: "Lift",
                            details: "Lift control and behavior for lifting/sliding window coverings"
                        }),
                        Field({
                            name: "TL", conformance: "O.a+", constraint: "1", description: "Tilt",
                            details: "Tilt control and behavior for tilting window coverings"
                        }),
                        Field({
                            name: "PA_LF", conformance: "[LF]", constraint: "2", description: "PositionAwareLift",
                            details: "Position aware lift control is supported."
                        }),
                        Field({
                            name: "ABS", conformance: "O", constraint: "3", description: "AbsolutePosition",
                            details: "Absolute positioning is supported."
                        }),
                        Field({
                            name: "PA_TL", conformance: "[TL]", constraint: "4", description: "PositionAwareTilt",
                            details: "Position aware tilt control is supported."
                        })
                    ]
                }),

                Attribute({
                    name: "Type", id: 0x0, type: "TypeEnum", access: "R V", conformance: "M", constraint: "desc",
                    default: "0", quality: "F",
                    xref: { document: "cluster", section: "5.3.6" }
                }),

                Attribute({
                    name: "PhysicalClosedLimitLift", id: 0x1, type: "uint16", access: "R V",
                    conformance: "[LF & PA_LF & ABS]", default: 0, quality: "F",
                    details: "This attribute shall indicate the maximum possible encoder position possible (Unit cm, centimeters) " +
                        "to position the height of the window covering lift.",
                    xref: { document: "cluster", section: "5.3.6.3" }
                }),

                Attribute({
                    name: "PhysicalClosedLimitTilt", id: 0x2, type: "uint16", access: "R V",
                    conformance: "[TL & PA_TL & ABS]", default: 0, quality: "F",
                    details: "This attribute shall indicate the maximum possible encoder position possible (Unit 0.1°, tenths of " +
                        "a degree) to position the angle of the window covering tilt.",
                    xref: { document: "cluster", section: "5.3.6.4" }
                }),

                Attribute({
                    name: "CurrentPositionLift", id: 0x3, type: "uint16", access: "R V",
                    conformance: "[LF & PA_LF & ABS]", constraint: "installedOpenLimitLift to installedClosedLimitLift",
                    default: null, quality: "X N",
                    details: "This attribute shall indicate the actual lift position (Unit cm, centimeters) of the window " +
                        "covering from the fully-open position.",
                    xref: { document: "cluster", section: "5.3.6.5" }
                }),

                Attribute({
                    name: "CurrentPositionTilt", id: 0x4, type: "uint16", access: "R V",
                    conformance: "[TL & PA_TL & ABS]", constraint: "installedOpenLimitTilt to installedClosedLimitTilt",
                    default: null, quality: "X N",
                    details: "This attribute shall indicate the actual tilt position (Unit 0.1°, tenths of a degree) of the " +
                        "window covering from the fully-open position.",
                    xref: { document: "cluster", section: "5.3.6.6" }
                }),

                Attribute({
                    name: "NumberOfActuationsLift", id: 0x5, type: "uint16", access: "R V", conformance: "[LF]",
                    default: 0, quality: "N",
                    details: "This attribute shall indicate the total number of lift/slide actuations applied to the window " +
                        "covering since the device was installed.",
                    xref: { document: "cluster", section: "5.3.6.7" }
                }),

                Attribute({
                    name: "NumberOfActuationsTilt", id: 0x6, type: "uint16", access: "R V", conformance: "[TL]",
                    default: 0, quality: "N",

                    details: "This attribute shall indicate the total number of tilt actuations applied to the window covering " +
                        "since the device was installed." +
                        "\n" +
                        "### ‌5.3.6.9. ConfigStatus Attribute" +
                        "\n" +
                        "This attribute specifies the configuration and status information of the window covering." +
                        "\n" +
                        "To change settings, devices shall write to the Mode attribute. The behavior causing the setting or " +
                        "clearing of each bit is vendor specific.",

                    xref: { document: "cluster", section: "5.3.6.8" }
                }),

                Attribute({
                    name: "ConfigStatus", id: 0x7, type: "ConfigStatusBitmap", access: "R V", conformance: "M",
                    constraint: "desc", quality: "N",
                    xref: { document: "cluster", section: "5.3.6" }
                }),

                Attribute({
                    name: "CurrentPositionLiftPercentage", id: 0x8, type: "percent", access: "R V",
                    conformance: "[LF & PA_LF]", default: null, quality: "X N S P",
                    details: "This attribute shall indicate the actual position as a percentage from 0% to 100% with 1% default " +
                        "step. This attribute is equal to CurrentPositionLiftPercent100ths attribute divided by 100.",
                    xref: { document: "cluster", section: "5.3.6.12" }
                }),

                Attribute({
                    name: "CurrentPositionTiltPercentage", id: 0x9, type: "percent", access: "R V",
                    conformance: "[TL & PA_TL]", constraint: "0 to 100", default: null, quality: "X N S P",
                    details: "This attribute shall indicate the actual position as a percentage from 0% to 100% with 1% default " +
                        "step. This attribute is equal to CurrentPositionTiltPercent100ths attribute divided by 100.",
                    xref: { document: "cluster", section: "5.3.6.13" }
                }),

                Attribute({
                    name: "OperationalStatus", id: 0xa, type: "OperationalStatusBitmap", access: "R V",
                    conformance: "M", default: "0", quality: "P",

                    details: "This attribute shall indicate the currently ongoing operations and applies to all type of devices." +
                        "\n" +
                        "### ‌5.3.6.17. EndProductType Attribute" +
                        "\n" +
                        "This attribute SHOULD provide more detail about the product type than can be determined from the " +
                        "main category indicated by the Type attribute." +
                        "\n" +
                        "The table below helps to match the EndProductType attribute with the Type attribute.",

                    xref: { document: "cluster", section: "5.3.6.16" }
                }),

                Attribute({
                    name: "TargetPositionLiftPer2Cent100ths", id: 0xb, type: "percent100ths", access: "R V",
                    conformance: "LF & PA_LF", default: null, quality: "X S P",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "TargetPositionTiltPer2Cent100ths", id: 0xc, type: "percent100ths", access: "R V",
                    conformance: "TL & PA_TL", default: null, quality: "X S P",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "EndProductType", id: 0xd, type: "EndProductTypeEnum", access: "R V", conformance: "M",
                    constraint: "desc", default: "0", quality: "F",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "CurrentPositionLiftPer1Cent100ths", id: 0xe, type: "percent100ths", access: "R V",
                    conformance: "LF & PA_LF", constraint: "0 to 10000", default: null, quality: "X N P",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "CurrentPositionTiltPer1Cent100ths", id: 0xf, type: "percent100ths", access: "R V",
                    conformance: "TL & PA_TL", constraint: "0 to 10000", default: null, quality: "X N P",
                    xref: { document: "cluster", section: "5.3.6" }
                }),

                Attribute({
                    name: "InstalledOpenLimitLift", id: 0x10, type: "uint16", access: "R V",
                    conformance: "LF & PA_LF & ABS", constraint: "0 to 65534", default: 0, quality: "N",
                    details: "This attribute shall indicate the open limit for lifting the window covering whether position (in " +
                        "centimeters) is encoded or timed.",
                    xref: { document: "cluster", section: "5.3.6.18" }
                }),

                Attribute({
                    name: "InstalledClosedLimitLift", id: 0x11, type: "uint16", access: "R V",
                    conformance: "LF & PA_LF & ABS", constraint: "0 to 65534", default: 65534, quality: "N",
                    details: "This attribute shall indicate the closed limit for lifting the window covering whether position (in " +
                        "centimeters) is encoded or timed.",
                    xref: { document: "cluster", section: "5.3.6.19" }
                }),

                Attribute({
                    name: "InstalledOpenLimitTilt", id: 0x12, type: "uint16", access: "R V",
                    conformance: "TL & PA_TL & ABS", constraint: "0 to 65534", default: 0, quality: "N",
                    details: "This attribute shall indicate the open limit for tilting the window covering whether position (in " +
                        "tenth of a degree) is encoded or timed.",
                    xref: { document: "cluster", section: "5.3.6.20" }
                }),

                Attribute({
                    name: "InstalledClosedLimitTilt", id: 0x13, type: "uint16", access: "R V",
                    conformance: "TL & PA_TL & ABS", constraint: "0 to 65534", default: 65534, quality: "N",

                    details: "This attribute shall indicate the closed limit for tilting the window covering whether position (in " +
                        "tenth of a degree) is encoded or timed." +
                        "\n" +
                        "### ‌5.3.6.22. Mode Attribute" +
                        "\n" +
                        "The Mode attribute allows configuration of the window covering, such as: reversing the motor " +
                        "direction, placing the window covering into calibration mode, placing the motor into maintenance " +
                        "mode, disabling the network, and disabling status LEDs." +
                        "\n" +
                        "In the case a device does not support or implement a specific mode, e.g. the device has a specific " +
                        "installation method and reversal is not relevant or the device does not include a maintenance mode, " +
                        "any write interaction to the Mode attribute, with an unsupported mode bit or any out of bounds bits " +
                        "set, must be ignored and a response containing the status of CONSTRAINT_ERROR will be returned.",

                    xref: { document: "cluster", section: "5.3.6.21" }
                }),

                Attribute({
                    name: "VelocityLift", id: 0x14, conformance: "D",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "AccelerationTimeLift", id: 0x15, conformance: "D",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "DecelerationTimeLift", id: 0x16, conformance: "D",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "Mode", id: 0x17, type: "ModeBitmap", access: "RW VM", conformance: "M", constraint: "0",
                    default: "0", quality: "N",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "IntermediateSetpointsLift", id: 0x18, conformance: "D",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "IntermediateSetpointsTilt", id: 0x19, conformance: "D",
                    xref: { document: "cluster", section: "5.3.6" }
                }),
                Attribute({
                    name: "SafetyStatus", id: 0x1a, type: "SafetyStatusBitmap", access: "R V", conformance: "O",
                    constraint: "desc", default: "0", quality: "P",
                    xref: { document: "cluster", section: "5.3.6" }
                }),

                Command({
                    name: "UpOrOpen", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",

                    details: "Upon receipt of this command, the window covering will adjust its position so the physical " +
                        "lift/slide and tilt is at the maximum open/up position. This will happen as fast as possible. The " +
                        "server attributes shall be updated as follows:" +
                        "\n" +
                        "if the PositionAware feature is supported:" +
                        "\n" +
                        "  • TargetPositionLiftPercent100ths attribute shall be set to 0.00%." +
                        "\n" +
                        "  • TargetPositionTiltPercent100ths attribute shall be set to 0.00%." +
                        "\n" +
                        "The server positioning attributes will follow the movements, once the movement has successfully " +
                        "finished, the server attributes shall be updated as follows:" +
                        "\n" +
                        "if the PositionAware feature is supported:" +
                        "\n" +
                        "  • CurrentPositionLiftPercent100ths attribute shall be 0.00%." +
                        "\n" +
                        "  • CurrentPositionLiftPercentage attribute shall be 0%." +
                        "\n" +
                        "  • CurrentPositionTiltPercent100ths attribute shall be 0.00%." +
                        "\n" +
                        "  • CurrentPositionTiltPercentage attribute shall be 0%. if the AbsolutePosition feature is " +
                        "    supported:" +
                        "\n" +
                        "  • CurrentPositionLift attribute shall be equal to the InstalledOpenLimitLift attribute." +
                        "\n" +
                        "  • CurrentPositionTilt attribute shall be equal to the InstalledOpenLimitTilt attribute.",

                    xref: { document: "cluster", section: "5.3.7.1" }
                }),

                Command({
                    name: "DownOrClose", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "status",

                    details: "Upon receipt of this command, the window covering will adjust its position so the physical " +
                        "lift/slide and tilt is at the maximum closed/down position. This will happen as fast as possible. " +
                        "The server attributes supported shall be updated as follows:" +
                        "\n" +
                        "if the PositionAware feature is supported:" +
                        "\n" +
                        "  • TargetPositionLiftPercent100ths attribute shall be set to 100.00%." +
                        "\n" +
                        "  • TargetPositionTiltPercent100ths attribute shall be set to 100.00%." +
                        "\n" +
                        "The server positioning attributes will follow the movements, once the movement has successfully " +
                        "finished, the server attributes shall be updated as follows:" +
                        "\n" +
                        "if the PositionAware feature is supported:" +
                        "\n" +
                        "  • CurrentPositionLiftPercent100ths attribute shall be 100.00%." +
                        "\n" +
                        "  • CurrentPositionLiftPercentage attribute shall be 100%." +
                        "\n" +
                        "  • CurrentPositionTiltPercent100ths attribute shall be 100.00%." +
                        "\n" +
                        "  • CurrentPositionTiltPercentage attribute shall be 100%. if the AbsolutePosition feature is " +
                        "    supported:" +
                        "\n" +
                        "  • CurrentPositionLift attribute shall be equal to the InstalledClosedLimitLift attribute." +
                        "\n" +
                        "  • CurrentPositionTilt attribute shall be equal to the InstalledClosedLimitTilt attribute.",

                    xref: { document: "cluster", section: "5.3.7.2" }
                }),

                Command({
                    name: "StopMotion", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "status",

                    details: "Upon receipt of this command, the window covering will stop any adjusting to the physical tilt and " +
                        "lift/slide that is currently occurring. The server attributes supported shall be updated as follows:" +
                        "\n" +
                        "  • TargetPositionLiftPercent100ths attribute will be set to CurrentPositionLiftPercent100ths " +
                        "    attribute value." +
                        "\n" +
                        "  • TargetPositionTiltPercent100ths attribute will be set to CurrentPositionTiltPercent100ths " +
                        "    attribute value.",

                    xref: { document: "cluster", section: "5.3.7.3" }
                }),

                Command({
                    name: "GoToLiftValue", id: 0x4, access: "O", conformance: "[LF & ABS]", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.3.7.4" },
                    children: [Field({
                        name: "LiftValue", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
                        details: "This field shall specify the requested physical lift/slide position in unit cm (centimeters).",
                        xref: { document: "cluster", section: "5.3.7.4.1" }
                    })]
                }),

                Command({
                    name: "GoToLiftPercentage", id: 0x5, access: "O", conformance: "LF & PA_LF, [LF]",
                    direction: "request", response: "status",

                    details: "Upon receipt of this command, the server will adjust the window covering to the lift/slide " +
                        "percentage specified in the payload of this command." +
                        "\n" +
                        "If the command includes LiftPercent100thsValue, then TargetPositionLiftPercent100ths attribute " +
                        "shall be set to LiftPercent100thsValue. Otherwise the TargetPositionLiftPercent100ths attribute " +
                        "shall be set to LiftPercentageValue * 100." +
                        "\n" +
                        "If a client includes LiftPercent100thsValue in the command, the LiftPercentageValue shall be set to " +
                        "LiftPercent100thsValue / 100, so a legacy server which only supports LiftPercentageValue (not " +
                        "LiftPercent100thsValue) has a value to set the target position." +
                        "\n" +
                        "If the server does not support the PositionAware feature, then a zero percentage shall be treated " +
                        "as a UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the " +
                        "device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND " +
                        "status SHOULD be returned.",

                    xref: { document: "cluster", section: "5.3.7.5" },

                    children: [
                        Field({
                            name: "LiftPercentageValue", id: 0x0, type: "percent", conformance: "O.a", constraint: "desc"
                        }),
                        Field({
                            name: "LiftPercent100thsValue", id: 0x1, type: "percent100ths", conformance: "O.a",
                            constraint: "desc"
                        })
                    ]
                }),

                Command({
                    name: "GoToTiltValue", id: 0x7, access: "O", conformance: "[TL & ABS]", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "5.3.7.6" },
                    children: [Field({
                        name: "TiltValue", id: 0x0, type: "uint16", conformance: "M", constraint: "desc",
                        details: "This field shall specify the requested physical tilt position in unit 0.1° (tenth of a degrees).",
                        xref: { document: "cluster", section: "5.3.7.6.1" }
                    })]
                }),

                Command({
                    name: "GoToTiltPercentage", id: 0x8, access: "O", conformance: "TL & PA_TL, [TL]",
                    direction: "request", response: "status",

                    details: "Upon receipt of this command, the server will adjust the window covering to the tilt percentage " +
                        "specified in the payload of this command." +
                        "\n" +
                        "If the command includes TiltPercent100thsValue, then TargetPositionTiltPercent100ths attribute " +
                        "shall be set to TiltPercent100thsValue. Otherwise the TargetPositionTiltPercent100ths attribute " +
                        "shall be set to TiltPercentageValue * 100." +
                        "\n" +
                        "If a client includes TiltPercent100thsValue in the command, the TiltPercentageValue shall be set to " +
                        "TiltPercent100thsValue / 100, so a legacy server which only supports TiltPercentageValue (not " +
                        "TiltPercent100thsValue) has a value to set the target position." +
                        "\n" +
                        "If the server does not support the PositionAware feature, then a zero percentage shall be treated " +
                        "as a UpOrOpen command and a non-zero percentage shall be treated as an DownOrClose command. If the " +
                        "device is only a tilt control device, then the command SHOULD be ignored and a UNSUPPORTED_COMMAND " +
                        "status SHOULD be returned.",

                    xref: { document: "cluster", section: "5.3.7.7" },

                    children: [
                        Field({
                            name: "TiltPercentageValue", id: 0x0, type: "percent", conformance: "O.a", constraint: "desc"
                        }),
                        Field({
                            name: "TiltPercent100thsValue", id: 0x1, type: "percent100ths", conformance: "O.a",
                            constraint: "desc"
                        })
                    ]
                }),

                Datatype({
                    name: "Global Bits", type: "map8",
                    details: "These bits shall indicate in which direction the covering is currently moving or if it has stopped. " +
                        "Global operational state shall always reflect the overall motion of the device.",
                    xref: { document: "cluster", section: "5.3.5.3.1" }
                }),

                Datatype({
                    name: "Lift Bits", type: "map8",
                    details: "These bits shall indicate in which direction the covering’s lift is currently moving or if it has " +
                        "stopped.",
                    xref: { document: "cluster", section: "5.3.5.3.2" }
                }),

                Datatype({
                    name: "Tilt Bits", type: "map8",

                    details: "These bits shall indicate in which direction the covering’s tilt is currently moving or if it has " +
                        "stopped." +
                        "\n" +
                        "### ‌5.3.5.4. SafetyStatusBitmap" +
                        "\n" +
                        "### ‌5.3.5.5. TypeEnum Type" +
                        "\n" +
                        "### ‌5.3.5.6. EndProductTypeEnum Type",

                    xref: { document: "cluster", section: "5.3.5.3.3" },

                    children: [
                        Field({
                            name: "RemoteLockout", constraint: "0",
                            description: "Movement commands are ignored (locked out). e.g. not granted authorization, outside some time/date range."
                        }),
                        Field({
                            name: "TamperDetection", constraint: "1",
                            description: "Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its actuator(s)."
                        }),
                        Field({
                            name: "FailedCommunication", constraint: "2",
                            description: "Communication failure to sensors or other safety equipment."
                        }),
                        Field({
                            name: "PositionFailure", constraint: "3",
                            description: "Device has failed to reach the desired position. e.g. with position aware device, time expired before TargetPosition is reached."
                        }),
                        Field({
                            name: "ThermalProtection", constraint: "4",
                            description: "Motor(s) and/or electric circuit thermal protection activated."
                        }),
                        Field({
                            name: "ObstacleDetected", constraint: "5",
                            description: "An obstacle is preventing actuator movement."
                        }),
                        Field({
                            name: "Power", constraint: "6",
                            description: "Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power might not be fully available at the moment."
                        }),
                        Field({
                            name: "StopInput", constraint: "7",
                            description: "Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335)."
                        }),
                        Field({
                            name: "MotorJammed", constraint: "8",
                            description: "Mechanical problem related to the motor(s) detected."
                        }),
                        Field({
                            name: "HardwareFailure", constraint: "9", description: "PCB, fuse and other electrics problems."
                        }),
                        Field({
                            name: "ManualOperation", constraint: "10",
                            description: "Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled)."
                        }),
                        Field({ name: "Protection", constraint: "11", description: "Protection is activated." })
                    ]
                })
            ]
        }),

        Cluster({
            name: "AccountLogin", id: 0x50e, classification: "application",

            details: "This cluster provides commands that facilitate user account login on a Content App or a node. For " +
                "example, a Content App running on a Video Player device, which is represented as an endpoint (see " +
                "Device Type Library document), can use this cluster to help make the user account on the Content " +
                "App match the user account on the Client." +
                "\n" +
                "The cluster server for this cluster may be supported on each endpoint that represents a Content App " +
                "on a Video Player device." +
                "\n" +
                "See Device Type Library document for details of how a Content App, represented as an endpoint on " +
                "the Video Player device, may implement the cluster server for this cluster to simplify account " +
                "login for its users.",

            xref: { document: "cluster", section: "6.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Command({
                    name: "GetSetupPin", id: 0x0, access: "A T", conformance: "M", direction: "request",
                    response: "GetSetupPinResponse",

                    details: "The purpose of this command is to determine if the active user account of the given Content App" +
                        "\n" +
                        "matches the active user account of a given Commissionee, and when it does, return a Setup PIN code " +
                        "which can be used for password-authenticated session establishment (PASE) with the Commissionee." +
                        "\n" +
                        "For example, a Video Player with a Content App Platform may invoke this command on one of its " +
                        "Content App endpoints to facilitate commissioning of a Phone App made by the same vendor as the " +
                        "Content App. If the accounts match, then the Content App may return a setup code that can be used " +
                        "by the Video Player to commission the Phone App without requiring the user to physically input a " +
                        "setup code." +
                        "\n" +
                        "The account match is determined by the Content App using a method which is outside the scope of " +
                        "this specification and will typically involve a central service which is in communication with both " +
                        "the Content App and the Commissionee. The GetSetupPIN command is needed in order to provide the " +
                        "Commissioner/Admin with a Setup PIN when this Commissioner/Admin is operated by a different vendor " +
                        "from the Content App." +
                        "\n" +
                        "This method is used to facilitate Setup PIN exchange (for PASE) between Commissioner and " +
                        "Commissionee when the same user account is active on both nodes. With this method, the Content App " +
                        "satisfies proof of possession related to commissioning by requiring the same user account to be " +
                        "active on both Commissionee and Content App, while the Commissioner/Admin ensures user consent by " +
                        "prompting the user prior to invocation of the command." +
                        "\n" +
                        "Upon receipt of this command, the Content App checks if the account associated with the Temporary " +
                        "Account Identifier sent by the client is the same account that is active on itself. If the accounts " +
                        "are the same, then the Content App returns the GetSetupPIN Response which includes a Setup PIN that " +
                        "may be used for PASE with the Commissionee." +
                        "\n" +
                        "The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of " +
                        "the client’s commissionable node advertisement (see Rotating Device Identifier section in " +
                        "[MatterCore]) encoded as an octet string where the octets of the Rotating Device Identifier are " +
                        "encoded as 2-character sequences by representing each octet’s value as a 2-digit hexadecimal " +
                        "number, using uppercase letters." +
                        "\n" +
                        "The Setup PIN is an 11 character string so that it can accommodate different future formats, " +
                        "including alpha-numeric encodings. For a Commissionee it shall be populated with the Manual Pairing " +
                        "Code (see Manual Pairing Code section in [MatterCore]) encoded as a string." +
                        "\n" +
                        "The server shall implement rate limiting to prevent brute force attacks. No more than 10 unique " +
                        "requests in a 10 minute period shall be allowed; a command response status of FAILURE should sent " +
                        "for additional commands received within the 10 minute period. Because access to this command is " +
                        "limited to nodes with Admin-level access, and the user is prompted for consent prior to " +
                        "Commissioning, there are in place multiple obstacles to successfully mounting a brute force attack. " +
                        "A Content App that supports this command shall ensure that the Temporary Account Identifier used by " +
                        "its clients is not valid for more than 10 minutes.",

                    xref: { document: "cluster", section: "6.2.4.1" },

                    children: [Field({
                        name: "TempAccountIdentifier", id: 0x0, type: "string", conformance: "M", constraint: "16 to 100",
                        details: "This field shall specify the client’s Temporary Account Identifier. The length of this field shall " +
                            "be at least 16 characters to protect the account holder against password guessing attacks.",
                        xref: { document: "cluster", section: "6.2.4.1.1" }
                    })]
                }),

                Command({
                    name: "GetSetupPinResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or " +
                        "null when the account identified in the request does not match the active account of the running " +
                        "Content App.",
                    xref: { document: "cluster", section: "6.2.4.2" },

                    children: [Field({
                        name: "SetupPin", id: 0x0, type: "string", conformance: "M", constraint: "min 11", quality: "X",
                        details: "This field shall provide the setup PIN code as a text string at least 11 characters in length or " +
                            "null to indicate that the accounts do not match.",
                        xref: { document: "cluster", section: "6.2.4.2.1" }
                    })]
                }),

                Command({
                    name: "Login", id: 0x2, access: "A T", conformance: "M", direction: "request", response: "status",

                    details: "The purpose of this command is to allow the Content App to assume the user account of a given " +
                        "Commissionee by leveraging the Setup PIN code input by the user during the commissioning process." +
                        "\n" +
                        "For example, a Video Player with a Content App Platform may invoke this command on one of its " +
                        "Content App endpoints after the commissioning has completed of a Phone App made by the same vendor " +
                        "as the Content App. The Content App may determine whether the Temporary Account Identifier maps to " +
                        "an account with a corresponding Setup PIN and, if so, it may automatically login to the account for " +
                        "the corresponding user. The end result is that a user performs commissioning of a Phone App to a " +
                        "Video Player by inputting the Setup PIN for the Phone App into the Video Player UX. Once " +
                        "commissioning has completed, the Video Player invokes this command to allow the corresponding " +
                        "Content App to assume the same user account as the Phone App." +
                        "\n" +
                        "The verification of Setup PIN for the given Temporary Account Identifier is determined by the " +
                        "Content App using a method which is outside the scope of this specification and will typically " +
                        "involve a central service which is in communication with both the Content App and the Commissionee. " +
                        "Implementations of such a service should impose aggressive time outs for any mapping of Temporary " +
                        "Account Identifier to Setup PIN in order to prevent accidental login due to delayed invocation." +
                        "\n" +
                        "Upon receipt, the Content App checks if the account associated with the client’s Temp Account " +
                        "Identifier has a current active Setup PIN with the given value. If the Setup PIN is valid for the " +
                        "user" +
                        "\n" +
                        "account associated with the Temp Account Identifier, then the Content App may make that user " +
                        "account active." +
                        "\n" +
                        "The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of " +
                        "the client’s commissionable node advertisement encoded as an octet string where the octets of the " +
                        "Rotating Device Identifier are encoded as 2-character sequences by representing each octet’s value " +
                        "as a 2-digit hexadecimal number, using uppercase letters." +
                        "\n" +
                        "The Setup PIN for a Commissionee may be populated with the Manual Pairing Code encoded as a string " +
                        "of decimal numbers." +
                        "\n" +
                        "The server shall implement rate limiting to prevent brute force attacks. No more than 10 unique " +
                        "requests in a 10 minute period shall be allowed; a command response status of FAILURE should sent " +
                        "for additional commands received within the 10 minute period. Because access to this command is " +
                        "limited to nodes with Admin-level access, and the user is involved when obtaining the SetupPIN, " +
                        "there are in place multiple obstacles to successfully mounting a brute force attack. A Content App " +
                        "that supports this command shall ensure that the Temporary Account Identifier used by its clients " +
                        "is not valid for more than 10 minutes.",

                    xref: { document: "cluster", section: "6.2.4.3" },

                    children: [
                        Field({
                            name: "TempAccountIdentifier", id: 0x0, type: "string", conformance: "M", constraint: "16 to 100",
                            details: "This field shall specify the client’s temporary account identifier.",
                            xref: { document: "cluster", section: "6.2.4.3.1" }
                        }),
                        Field({
                            name: "SetupPin", id: 0x1, type: "string", conformance: "M", constraint: "min 11",
                            details: "This field shall provide the setup PIN code as a text string at least 11 characters in length.",
                            xref: { document: "cluster", section: "6.2.4.3.2" }
                        })
                    ]
                }),

                Command({
                    name: "Logout", id: 0x3, access: "O T", conformance: "M", direction: "request", response: "status",
                    details: "The purpose of this command is to instruct the Content App to clear the current user account. This " +
                        "command SHOULD be used by clients of a Content App to indicate the end of a user session.",
                    xref: { document: "cluster", section: "6.2.4.4" }
                })
            ]
        }),

        Cluster({
            name: "ApplicationBasic", id: 0x50d, classification: "application",

            details: "This cluster provides information about a Content App running on a Video Player device which is " +
                "represented as an endpoint (see Device Type Library document)." +
                "\n" +
                "The cluster server for this cluster should be supported on each endpoint that represents a Content " +
                "App on a Video Player device. This cluster provides identification information about the Content " +
                "App such as vendor and product.",

            xref: { document: "cluster", section: "6.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "VendorName", id: 0x0, type: "string", access: "R V", conformance: "O", constraint: "max 32",
                    default: "", quality: "F",
                    details: "This attribute shall specify a human readable (displayable) name of the vendor for the Content App.",
                    xref: { document: "cluster", section: "6.3.5.1" }
                }),

                Attribute({
                    name: "VendorId", id: 0x1, type: "vendor-id", access: "R V", conformance: "O", quality: "F",
                    details: "This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID " +
                        "for the Content App.",
                    xref: { document: "cluster", section: "6.3.5.2" }
                }),

                Attribute({
                    name: "ApplicationName", id: 0x2, type: "string", access: "R V", conformance: "M",
                    constraint: "desc", quality: "F",
                    details: "This attribute shall specify a human readable (displayable) name of the Content App assigned by the " +
                        "vendor. For example, \"NPR On Demand\". The maximum length of the ApplicationName attribute is 256 " +
                        "bytes of UTF-8 characters.",
                    xref: { document: "cluster", section: "6.3.5.3" }
                }),

                Attribute({
                    name: "ProductId", id: 0x3, type: "uint16", access: "R V", conformance: "O", quality: "F",
                    details: "This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a " +
                        "specific Content App made by them. If the Content App is certified by the Connectivity Standards " +
                        "Alliance, then this would be the Product ID as specified by the vendor for the certification.",
                    xref: { document: "cluster", section: "6.3.5.4" }
                }),

                Attribute({
                    name: "Application", id: 0x4, type: "ApplicationStruct", access: "R V", conformance: "M",
                    constraint: "desc", quality: "F",
                    details: "This attribute shall specify a Content App which consists of an Application ID using a specified " +
                        "catalog.",
                    xref: { document: "cluster", section: "6.3.5.5" }
                }),

                Attribute({
                    name: "Status", id: 0x5, type: "ApplicationStatusEnum", access: "R V", conformance: "M",
                    constraint: "desc",
                    details: "This attribute shall specify the current running status of the application.",
                    xref: { document: "cluster", section: "6.3.5.6" }
                }),

                Attribute({
                    name: "ApplicationVersion", id: 0x6, type: "string", access: "R V", conformance: "M",
                    constraint: "max 32", quality: "F",
                    details: "This attribute shall specify a human readable (displayable) version of the Content App assigned by " +
                        "the vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.",
                    xref: { document: "cluster", section: "6.3.5.7" }
                }),

                Attribute({
                    name: "AllowedVendorList", id: 0x7, type: "list", access: "R A", conformance: "M", quality: "F",
                    details: "This attribute is a list of vendor IDs. Each entry is a vendor-id.",
                    xref: { document: "cluster", section: "6.3.5.8" },
                    children: [Field({ name: "entry", type: "vendor-id" })]
                })
            ]
        }),

        Cluster({
            name: "ApplicationLauncher", id: 0x50c, classification: "application",

            details: "This cluster provides an interface for launching applications on a Video Player device such as a TV." +
                "\n" +
                "This cluster is supported on endpoints that can launch Applications, such as a Casting Video Player " +
                "device with a Content App Platform. It supports identifying an Application by global identifier " +
                "from a given catalog, and launching it. It also supports tracking the currently in-focus " +
                "Application." +
                "\n" +
                "Depending on the support for the Application Platform feature, the cluster can either support " +
                "launching the application corresponding to the endpoint on which the cluster is supported" +
                "\n" +
                "ture not supported) or it can support launching any application (AP feature supported).",

            xref: { document: "cluster", section: "6.4" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "6.4.4" },
                    children: [Field({
                        name: "AP", constraint: "0", description: "ApplicationPlatform",
                        details: "Support for attributes and commands required for endpoint to support launching any application " +
                            "within the supported application catalogs"
                    })]
                }),

                Attribute({
                    name: "CatalogList", id: 0x0, type: "list", access: "R V", conformance: "AP", quality: "N",

                    details: "This attribute shall specify the list of supported application catalogs, where each entry in the " +
                        "list is the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) shall use " +
                        "value 0x0000." +
                        "\n" +
                        "It is expected that Content App Platform providers will have their own catalog vendor ID (set to " +
                        "their own Vendor ID) and will assign an ApplicationID to each Content App.",

                    xref: { document: "cluster", section: "6.4.6.1" },
                    children: [Field({ name: "entry", type: "uint16" })]
                }),

                Attribute({
                    name: "CurrentApp", id: 0x1, type: "ApplicationEPStruct", access: "R V", conformance: "O",
                    constraint: "desc", default: "null", quality: "X",
                    details: "This attribute shall specify the current in-focus application, identified using an Application ID, " +
                        "catalog vendor ID and the corresponding endpoint number when the application is represented by a " +
                        "Content App endpoint. A null shall be used to indicate there is no current in-focus application.",
                    xref: { document: "cluster", section: "6.4.6.2" }
                }),

                Command({
                    name: "LaunchApp", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "LauncherResponse",

                    details: "Upon receipt of this command, the server shall launch the application with optional data. The " +
                        "application shall be either" +
                        "\n" +
                        "  • the specified application, if the Application Platform feature is supported;" +
                        "\n" +
                        "  • otherwise the application corresponding to the endpoint." +
                        "\n" +
                        "The endpoint shall launch and bring to foreground the requisite application if the application is " +
                        "not already launched and in foreground. The Status attribute shall be updated to ActiveVisibleFocus " +
                        "on the Application Basic cluster of the Endpoint corresponding to the launched application. The" +
                        "\n" +
                        "Status attribute shall be updated on any other application whose Status may have changed as a " +
                        "result of this command. The CurrentApp attribute, if supported, shall be updated to reflect the new " +
                        "application in the foreground." +
                        "\n" +
                        "This command returns a Launcher Response.",

                    xref: { document: "cluster", section: "6.4.7.1" },

                    children: [
                        Field({
                            name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP", constraint: "desc",
                            details: "This field shall specify the Application to launch.",
                            xref: { document: "cluster", section: "6.4.7.1.1" }
                        }),

                        Field({
                            name: "Data", id: 0x1, type: "octstr", conformance: "O",

                            details: "This field shall specify optional app-specific data to be sent to the app." +
                                "\n" +
                                "Note: This format and meaning of this value is proprietary and outside the specification. It " +
                                "provides a transition path for device makers that use other protocols (like DIAL) which allow for " +
                                "proprietary data. Apps that are not yet Matter aware can be launched via Matter, while retaining " +
                                "the existing ability to launch with proprietary data.",

                            xref: { document: "cluster", section: "6.4.7.1.2" }
                        })
                    ]
                }),

                Command({
                    name: "StopApp", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "LauncherResponse",

                    details: "Upon receipt of this command, the server shall stop the application if it is running. The " +
                        "application shall be either" +
                        "\n" +
                        "  • the specified application, if the Application Platform feature is supported;" +
                        "\n" +
                        "  • otherwise the application corresponding to the endpoint." +
                        "\n" +
                        "The Status attribute shall be updated to Stopped on the Application Basic cluster of the Endpoint " +
                        "corresponding to the stopped application. The Status attribute shall be updated on any other " +
                        "application whose Status may have changed as a result of this command." +
                        "\n" +
                        "This command returns a Launcher Response.",

                    xref: { document: "cluster", section: "6.4.7.2" },
                    children: [Field({
                        name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP", constraint: "desc",
                        details: "This field shall specify the Application to stop.",
                        xref: { document: "cluster", section: "6.4.7.2.1" }
                    })]
                }),

                Command({
                    name: "HideApp", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "LauncherResponse",

                    details: "Upon receipt of this command, the server shall hide the application. The application shall be either" +
                        "\n" +
                        "  • the specified application, if the Application Platform feature is supported;" +
                        "\n" +
                        "  • otherwise the application corresponding to the endpoint." +
                        "\n" +
                        "The endpoint may decide to stop the application based on manufacturer specific behavior or resource " +
                        "constraints if any. The Status attribute shall be updated to ActiveHidden or Stopped, depending on " +
                        "the action taken, on the Application Basic cluster of the Endpoint corresponding to the application " +
                        "on which the action was taken. The Status attribute shall be updated on any other application whose " +
                        "Status may have changed as a result of this command." +
                        "\n" +
                        "This command returns a Launcher Response.",

                    xref: { document: "cluster", section: "6.4.7.3" },
                    children: [Field({
                        name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP", constraint: "desc",
                        details: "This field shall specify the Application to hide.",
                        xref: { document: "cluster", section: "6.4.7.3.1" }
                    })]
                }),

                Command({
                    name: "LauncherResponse", id: 0x3, conformance: "M", direction: "response",
                    details: "This command shall be generated in response to LaunchApp/StopApp/HideApp commands.",
                    xref: { document: "cluster", section: "6.4.7.4" },

                    children: [
                        Field({
                            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                            details: "This field shall indicate the status of the command which resulted in this response.",
                            xref: { document: "cluster", section: "6.4.7.4.1" }
                        }),
                        Field({
                            name: "Data", id: 0x1, type: "octstr", conformance: "O",
                            details: "This field shall specify Optional app-specific data.",
                            xref: { document: "cluster", section: "6.4.7.4.2" }
                        })
                    ]
                }),

                Datatype({
                    name: "ApplicationID Field", type: "struct",

                    details: "This field shall indicate the application identifier, expressed as a string, such as \"PruneVideo\" " +
                        "or \"Company X\". This field shall be unique within a catalog." +
                        "\n" +
                        "For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry])." +
                        "\n" +
                        "### ‌6.4.5.3. ApplicationEPStruct Type" +
                        "\n" +
                        "This specifies an app along with its corresponding endpoint.",

                    xref: { document: "cluster", section: "6.4.5.2.2" },
                    children: [
                        Field({ name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "M" }),
                        Field({ name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "O" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "AudioOutput", id: 0x50b, classification: "application",

            details: "This cluster provides an interface for controlling the Output on a Video Player device such as a TV." +
                "\n" +
                "This cluster would be supported on a device with audio outputs like a Video Player device (Smart " +
                "TV, TV Setup Top Box, Smart Speaker, etc)." +
                "\n" +
                "This cluster provides the list of available outputs and provides commands for selecting and " +
                "renaming them." +
                "\n" +
                "The cluster server for Audio Output is implemented by a device that has configurable audio output.",

            xref: { document: "cluster", section: "6.5" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "6.5.4" },
                    children: [Field({
                        name: "NU", constraint: "0", description: "NameUpdates",
                        details: "Supports updates to output names"
                    })]
                }),

                Attribute({
                    name: "OutputList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    details: "This attribute provides the list of outputs supported by the device.",
                    xref: { document: "cluster", section: "6.5.6.1" },
                    children: [Field({ name: "entry", type: "OutputInfoStruct" })]
                }),

                Attribute({
                    name: "CurrentOutput", id: 0x1, type: "uint8", access: "R V", conformance: "M",
                    details: "This attribute contains the value of the index field of the currently selected OutputInfoStruct.",
                    xref: { document: "cluster", section: "6.5.6.2" }
                }),

                Command({
                    name: "SelectOutput", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",

                    details: "Upon receipt, this shall change the output on the device to the output at a specific index in the " +
                        "Output List." +
                        "\n" +
                        "Note that when the current output is set to an output of type HDMI, adjustments to volume via a " +
                        "Speaker endpoint on the same node may cause HDMI volume up/down commands to be sent to the given " +
                        "HDMI output.",

                    xref: { document: "cluster", section: "6.5.7.1" },

                    children: [Field({
                        name: "Index", id: 0x0, type: "uint8", conformance: "M",
                        details: "This shall indicate the index field of the OutputInfoStruct from the OutputList attribute in which " +
                            "to change to.",
                        xref: { document: "cluster", section: "6.5.7.1.1" }
                    })]
                }),

                Command({
                    name: "RenameOutput", id: 0x1, access: "M", conformance: "NU", direction: "request",
                    response: "status",
                    details: "Upon receipt, this shall rename the output at a specific index in the Output List." +
                        "\n" +
                        "Updates to the output name shall appear in the device’s settings menus. Name updates may " +
                        "automatically be sent to the actual device to which the output connects.",
                    xref: { document: "cluster", section: "6.5.7.2" },
                    children: [
                        Field({ name: "Index", id: 0x0, type: "uint8", conformance: "M" }),
                        Field({ name: "Name", id: 0x1, type: "string", conformance: "M" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "Channel", id: 0x504, classification: "application",

            details: "This cluster provides an interface for controlling the current Channel on a device or endpoint." +
                "\n" +
                "This cluster server would be supported on Video Player devices or endpoints that allow Channel " +
                "control such as a Content App. This cluster provides a list of available channels and provides " +
                "commands for absolute and relative channel changes." +
                "\n" +
                "The cluster server for Channel is implemented by an endpoint that controls the current Channel.",

            xref: { document: "cluster", section: "6.6" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "6.6.4" },

                    children: [
                        Field({
                            name: "CL", constraint: "0", description: "ChannelList",
                            details: "Provides list of available channels."
                        }),
                        Field({
                            name: "LI", constraint: "1", description: "LineupInfo",
                            details: "Provides lineup info, which is a reference to an external source of lineup information."
                        })
                    ]
                }),

                Attribute({
                    name: "ChannelList", id: 0x0, type: "list", access: "R V", conformance: "CL", default: [],
                    details: "This attribute shall provide the list of supported channels.",
                    xref: { document: "cluster", section: "6.6.6.1" },
                    children: [Field({ name: "entry", type: "ChannelInfoStruct" })]
                }),

                Attribute({
                    name: "Lineup", id: 0x1, type: "LineupInfoStruct", access: "R V", conformance: "LI",
                    constraint: "desc",
                    details: "This attribute shall identify the channel lineup using external data sources.",
                    xref: { document: "cluster", section: "6.6.6.2" }
                }),

                Attribute({
                    name: "CurrentChannel", id: 0x2, type: "ChannelInfoStruct", access: "R V", conformance: "O",
                    constraint: "desc", default: "null", quality: "X",
                    details: "This attribute shall contain the current channel. When supported but a channel is not currently " +
                        "tuned to (if a content application is in foreground), the value of the field shall be null.",
                    xref: { document: "cluster", section: "6.6.6.3" }
                }),

                Command({
                    name: "ChangeChannel", id: 0x0, access: "O", conformance: "CL | LI", direction: "request",
                    response: "ChangeChannelResponse",

                    details: "Change the channel to the channel case-insensitive exact matching the value passed as an argument." +
                        "\n" +
                        "The match priority order shall be: AffiliateCallSign (\"KCTS\"), CallSign (\"PBS\"), Name (\"Comedy " +
                        "Central\"), Number (\"13.1\")" +
                        "\n" +
                        "Upon receipt, this shall generate a ChangeChannelResponse command." +
                        "\n" +
                        "Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.",

                    xref: { document: "cluster", section: "6.6.7.1" },
                    children: [Field({
                        name: "Match", id: 0x0, type: "string", conformance: "M",
                        details: "This field shall contain a user-input string to match in order to identify the target channel.",
                        xref: { document: "cluster", section: "6.6.7.1.1" }
                    })]
                }),

                Command({
                    name: "ChangeChannelResponse", id: 0x1, conformance: "CL | LI", direction: "response",
                    details: "This command shall be generated in response to a ChangeChannel command.",
                    xref: { document: "cluster", section: "6.6.7.2" },

                    children: [
                        Field({
                            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M", constraint: "desc",
                            details: "This field shall indicate the status of the command which resulted in this response.",
                            xref: { document: "cluster", section: "6.6.7.2.1" }
                        }),
                        Field({
                            name: "Data", id: 0x1, type: "string", conformance: "O",
                            details: "This field shall indicate Optional app-specific data.",
                            xref: { document: "cluster", section: "6.6.7.2.2" }
                        })
                    ]
                }),

                Command({
                    name: "ChangeChannelByNumber", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Change the channel to the channel with the given Number in the ChannelList attribute.",
                    xref: { document: "cluster", section: "6.6.7.3" },

                    children: [
                        Field({
                            name: "MajorNumber", id: 0x0, type: "uint16", conformance: "M",
                            details: "This field shall indicate the channel major number value (ATSC format) to which the channel should " +
                                "change.",
                            xref: { document: "cluster", section: "6.6.7.3.1" }
                        }),

                        Field({
                            name: "MinorNumber", id: 0x1, type: "uint16", conformance: "M",
                            details: "This field shall indicate the channel minor number value (ATSC format) to which the channel should " +
                                "change.",
                            xref: { document: "cluster", section: "6.6.7.3.2" }
                        })
                    ]
                }),

                Command({
                    name: "SkipChannel", id: 0x3, access: "O", conformance: "M", direction: "request",
                    response: "status",

                    details: "This command provides channel up and channel down functionality, but allows channel index jumps of " +
                        "size Count." +
                        "\n" +
                        "When the value of the increase or decrease is larger than the number of channels remaining in the " +
                        "given direction, then the behavior shall be to return to the beginning (or end) of the channel list " +
                        "and continue. For example, if the current channel is at index 0 and count value of -1 is given, " +
                        "then the current channel should change to the last channel.",

                    xref: { document: "cluster", section: "6.6.7.4" },

                    children: [Field({
                        name: "Count", id: 0x0, type: "int16", conformance: "M",
                        details: "This field shall indicate the number of steps to increase (Count is positive) or decrease (Count is " +
                            "negative) the current channel.",
                        xref: { document: "cluster", section: "6.6.7.4.1" }
                    })]
                }),

                Datatype({
                    name: "AffiliateCallSign Field", type: "struct",

                    details: "This field shall indicate the local affiliate call sign, such as \"KCTS\". This field is optional, " +
                        "but SHOULD be provided when known." +
                        "\n" +
                        "### ‌6.6.5.4. LineupInfoStruct Type" +
                        "\n" +
                        "The Lineup Info allows references to external lineup sources like Gracenote. The combination of " +
                        "OperatorName, LineupName, and PostalCode MUST uniquely identify a lineup.",

                    xref: { document: "cluster", section: "6.6.5.3.5" },

                    children: [
                        Field({ name: "OperatorName", id: 0x0, type: "string", conformance: "M" }),
                        Field({ name: "LineupName", id: 0x1, type: "string", conformance: "O", default: "" }),
                        Field({ name: "PostalCode", id: 0x2, type: "string", conformance: "O", default: "" }),
                        Field({
                            name: "LineupInfoType", id: 0x3, type: "LineupInfoTypeEnum", conformance: "M", constraint: "desc"
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "ContentLauncher", id: 0x50a, classification: "application",

            details: "This cluster provides an interface for launching content on a Video Player device such as a " +
                "Streaming Media Player, Smart TV or Smart Screen." +
                "\n" +
                "This cluster would be supported on a Video Player device or devices that can playback content, such " +
                "as a Streaming Media Player, Smart TV or Smart Screen. This cluster supports playing back content " +
                "referenced by URL. It supports finding content by type and global identifier, and either playing " +
                "the content or displaying the search results." +
                "\n" +
                "The cluster server for Content Launcher is implemented by an endpoint that can launch content, such " +
                "as a Video Player, or an endpoint representing a Content App on such a device." +
                "\n" +
                "When this cluster is implemented for an Content App Endpoint (Endpoint with type “Content App” and " +
                "having an Application Basic cluster), the Video Player device shall launch the application when a " +
                "client invokes the LaunchContent or LaunchURL commands.",

            xref: { document: "cluster", section: "6.7" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "6.7.4" },

                    children: [
                        Field({
                            name: "CS", constraint: "0", description: "ContentSearch",
                            details: "Device supports content search (non-app specific)"
                        }),
                        Field({
                            name: "UP", constraint: "1", description: "UrlPlayback",
                            details: "Device supports basic URL-based file playback"
                        })
                    ]
                }),

                Attribute({
                    name: "AcceptHeader", id: 0x0, type: "list", access: "R V", conformance: "UP",
                    constraint: "max 100[max 1024]", default: [], quality: "N",
                    details: "This attribute shall provide a list of content types supported by the Video Player or Content App " +
                        "in the form of entries in the HTTP \"Accept\" request header.",
                    xref: { document: "cluster", section: "6.7.6.1" },
                    children: [Field({ name: "entry", type: "string" })]
                }),

                Attribute({
                    name: "SupportedStreamingProtocols", id: 0x1, type: "SupportedProtocolsBitmap", access: "R V",
                    conformance: "UP", default: "0", quality: "N",
                    details: "This attribute shall provide information about supported streaming protocols.",
                    xref: { document: "cluster", section: "6.7.6.2" }
                }),

                Command({
                    name: "LaunchContent", id: 0x0, access: "O", conformance: "CS", direction: "request",
                    response: "LauncherResponse",
                    details: "Upon receipt, this shall launch the specified content with optional search criteria." +
                        "\n" +
                        "This command returns a Launch Response.",
                    xref: { document: "cluster", section: "6.7.7.1" },

                    children: [
                        Field({
                            name: "Search", id: 0x0, type: "ContentSearchStruct", conformance: "M", constraint: "desc",
                            details: "This field shall indicate the content to launch.",
                            xref: { document: "cluster", section: "6.7.7.1.1" }
                        }),

                        Field({
                            name: "AutoPlay", id: 0x1, type: "bool", conformance: "M", constraint: "desc",
                            details: "This field shall indicate whether to automatically start playing content, where:" +
                                "\n" +
                                "  • TRUE means best match should start playing automatically." +
                                "\n" +
                                "  • FALSE means matches should be displayed on screen for user selection.",
                            xref: { document: "cluster", section: "6.7.7.1.2" }
                        }),

                        Field({
                            name: "Data", id: 0x2, type: "string", conformance: "O",
                            details: "This field shall indicate Optional app-specific data.",
                            xref: { document: "cluster", section: "6.7.7.1.3" }
                        })
                    ]
                }),

                Command({
                    name: "LaunchUrl", id: 0x1, access: "O", conformance: "UP", direction: "request",
                    response: "LauncherResponse",

                    details: "Upon receipt, this shall launch content from the specified URL." +
                        "\n" +
                        "The content types supported include those identified in the AcceptHeader and " +
                        "SupportedStreamingProtocols attributes." +
                        "\n" +
                        "A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch " +
                        "Response.",

                    xref: { document: "cluster", section: "6.7.7.2" },

                    children: [
                        Field({
                            name: "ContentUrl", id: 0x0, type: "string", conformance: "M",
                            details: "This field shall indicate the URL of content to launch.",
                            xref: { document: "cluster", section: "6.7.7.2.1" }
                        }),

                        Field({
                            name: "DisplayString", id: 0x1, type: "string", conformance: "O",
                            details: "This field, if present, shall provide a string that may be used to describe the content being " +
                                "accessed at the given URL.",
                            xref: { document: "cluster", section: "6.7.7.2.2" }
                        }),

                        Field({
                            name: "BrandingInformation", id: 0x2, type: "BrandingInformationStruct", conformance: "O",
                            details: "This field, if present, shall indicate the branding information that may be displayed when playing " +
                                "back the given content.",
                            xref: { document: "cluster", section: "6.7.7.2.3" }
                        })
                    ]
                }),

                Command({
                    name: "LauncherResponse", id: 0x2, conformance: "CS | UP", direction: "response",
                    details: "This command shall be generated in response to LaunchContent and LaunchURL commands.",
                    xref: { document: "cluster", section: "6.7.7.3" },

                    children: [
                        Field({
                            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                            details: "This field shall indicate the status of the command which resulted in this response.",
                            xref: { document: "cluster", section: "6.7.7.3.1" }
                        }),
                        Field({
                            name: "Data", id: 0x1, type: "string", conformance: "O",
                            details: "This field shall indicate Optional app-specific data.",
                            xref: { document: "cluster", section: "6.7.7.3.2" }
                        })
                    ]
                }),

                Datatype({
                    name: "Percentage Value", type: "struct",

                    details: "This value is for dimensions defined as a percentage of the overall display dimensions. For " +
                        "example, if using a Percentage Metric type for a Width measurement of 50.0, against a display width " +
                        "of 1920 pixels, then the resulting value used would be 960 pixels (50.0% of 1920) for that " +
                        "dimension. Whenever a measurement uses this Metric type, the resulting values shall be rounded " +
                        "(\"floored\") towards 0 if the measurement requires an integer final value." +
                        "\n" +
                        "### ‌6.7.5.5. AdditionalInfoStruct Type" +
                        "\n" +
                        "This object defines additional name=value pairs that can be used for identifying content.",

                    xref: { document: "cluster", section: "6.7.5.4.2" },
                    children: [
                        Field({ name: "Name", id: 0x0, type: "string", conformance: "M", constraint: "max 256" }),
                        Field({ name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 8192" })
                    ]
                }),

                Datatype({
                    name: "Value Field", type: "struct",
                    details: "This field shall indicate the value for external id, ex. \"ST0000000666661\"." +
                        "\n" +
                        "### ‌6.7.5.6. ParameterStruct Type" +
                        "\n" +
                        "This object defines inputs to a search for content for display or playback.",
                    xref: { document: "cluster", section: "6.7.5.5.2" },

                    children: [
                        Field({ name: "Type", id: 0x0, type: "ParameterEnum", conformance: "M" }),
                        Field({ name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 1024" }),
                        Field({
                            name: "ExternalIdList", id: 0x2, type: "list", conformance: "O", default: [],
                            children: [Field({ name: "entry", type: "AdditionalInfoStruct" })]
                        })
                    ]
                }),

                Datatype({
                    name: "ExternalIDList Field", type: "struct",
                    details: "This field shall indicate the list of additional external content identifiers." +
                        "\n" +
                        "### ‌6.7.5.7. ContentSearchStruct Type" +
                        "\n" +
                        "This object defines inputs to a search for content for display or playback.",
                    xref: { document: "cluster", section: "6.7.5.6.3" },
                    children: [Field({
                        name: "ParameterList", id: 0x0, type: "list", conformance: "M",
                        children: [Field({ name: "entry", type: "ParameterStruct" })]
                    })]
                }),

                Datatype({
                    name: "ParameterList Field", type: "struct",

                    details: "This field shall indicate the list of parameters comprising the search. If multiple parameters are " +
                        "provided, the search parameters shall be joined with 'AND' logic. e.g. action movies with Tom " +
                        "Cruise will be represented as [{Actor: 'Tom Cruise'}, {Type: 'Movie'}, {Genre: 'Action'}]" +
                        "\n" +
                        "### ‌6.7.5.8. DimensionStruct Type" +
                        "\n" +
                        "This object defines dimension which can be used for defining Size of background images.",

                    xref: { document: "cluster", section: "6.7.5.7.1" },
                    children: [
                        Field({ name: "Width", id: 0x0, type: "double", conformance: "M" }),
                        Field({ name: "Height", id: 0x1, type: "double", conformance: "M" }),
                        Field({ name: "Metric", id: 0x2, type: "MetricTypeEnum", conformance: "M" })
                    ]
                }),

                Datatype({
                    name: "Metric Field", type: "struct",

                    details: "This field shall indicate metric used for defining Height/Width." +
                        "\n" +
                        "### ‌6.7.5.9. StyleInformationStruct Type" +
                        "\n" +
                        "This object defines style information which can be used by content providers to change the Media " +
                        "Player’s style related properties.",

                    xref: { document: "cluster", section: "6.7.5.8.3" },
                    children: [
                        Field({ name: "ImageUrl", id: 0x0, type: "string", conformance: "O", constraint: "max 8192" }),
                        Field({ name: "Color", id: 0x1, type: "string", conformance: "O", constraint: "7, 9" }),
                        Field({ name: "Size", id: 0x2, type: "DimensionStruct", conformance: "O" })
                    ]
                }),

                Datatype({
                    name: "Size Field", type: "struct",

                    details: "This field shall indicate the size of the image used for Styling different Video Player sections " +
                        "like Logo, Watermark etc." +
                        "\n" +
                        "### ‌6.7.5.10. BrandingInformationStruct Type" +
                        "\n" +
                        "This object defines Branding Information which can be provided by the client in order to customize " +
                        "the skin of the Video Player during playback.",

                    xref: { document: "cluster", section: "6.7.5.9.3" },

                    children: [
                        Field({ name: "ProviderName", id: 0x0, type: "string", conformance: "M", constraint: "max 256" }),
                        Field({ name: "Background", id: 0x1, type: "StyleInformationStruct", conformance: "O" }),
                        Field({ name: "Logo", id: 0x2, type: "StyleInformationStruct", conformance: "O" }),
                        Field({ name: "ProgressBar", id: 0x3, type: "StyleInformationStruct", conformance: "O" }),
                        Field({ name: "Splash", id: 0x4, type: "StyleInformationStruct", conformance: "O" }),
                        Field({ name: "WaterMark", id: 0x5, type: "StyleInformationStruct", conformance: "O" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "KeypadInput", id: 0x509, classification: "application",

            details: "This cluster provides an interface for key code based input and control on a device like a Video " +
                "Player or an endpoint like a Content App. This may include text or action commands such as UP, " +
                "DOWN, and SELECT." +
                "\n" +
                "This cluster would be supported on Video Player devices as well as devices that support remote " +
                "control input from a keypad or remote. This cluster provides the list of supported keypad inputs " +
                "and provides a command for sending them." +
                "\n" +
                "The cluster server for Keypad Input is implemented by a device that can receive keypad input, such " +
                "as a Video Player, or an endpoint that can receive keypad input, such as a Content App." +
                "\n" +
                "The key codes used are those defined in the HDMI CEC specification (see HDMI)." +
                "\n" +
                "Devices may understand a subset of these key codes. Feature flags are used to indicate a specific " +
                "subset that is supported. Device may support additional codes beyond what is indicated in feature " +
                "flags.",

            xref: { document: "cluster", section: "6.8" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "6.8.4" },

                    children: [
                        Field({
                            name: "NV", constraint: "0", description: "NavigationKeyCodes",
                            details: "Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU"
                        }),
                        Field({
                            name: "LK", constraint: "1", description: "LocationKeys",
                            details: "Supports CEC keys 0x0A (Settings) and 0x09 (Home)"
                        }),
                        Field({
                            name: "NK", constraint: "2", description: "NumberKeys",
                            details: "Supports numeric input 0..9"
                        })
                    ]
                }),

                Command({
                    name: "SendKey", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "SendKeyResponse",
                    details: "Upon receipt, this shall process a keycode as input to the media device." +
                        "\n" +
                        "If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint " +
                        "will consider the first key press to be a press and hold. When such a repeat KeyCode value is not " +
                        "received within 200ms, then the endpoint will consider the last key press to be a release.",
                    xref: { document: "cluster", section: "6.8.6.1" },
                    children: [Field({
                        name: "KeyCode", id: 0x0, type: "uint8", conformance: "M",
                        details: "This field shall indicate the key code to process.",
                        xref: { document: "cluster", section: "6.8.6.1.1" }
                    })]
                }),

                Command({
                    name: "SendKeyResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This command shall be generated in response to a SendKey command.",
                    xref: { document: "cluster", section: "6.8.6.2" },
                    children: [Field({
                        name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                        details: "This field shall indicate the status of the request.",
                        xref: { document: "cluster", section: "6.8.6.2.1" }
                    })]
                })
            ]
        }),

        Cluster({
            name: "MediaInput", id: 0x507, classification: "application",

            details: "This cluster provides an interface for controlling the Input Selector on a media device such as a " +
                "Video Player." +
                "\n" +
                "This cluster would be implemented on TV and other media streaming devices, as well as devices that " +
                "provide input to or output from such devices." +
                "\n" +
                "This cluster provides the list of available inputs and provides commands for selecting and renaming " +
                "them." +
                "\n" +
                "The cluster server for Media Input is implemented by a device that has selectable input, such as a " +
                "Video Player device.",

            xref: { document: "cluster", section: "6.9" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "6.9.4" },
                    children: [Field({
                        name: "NU", constraint: "0", description: "NameUpdates",
                        details: "Supports updates to the input names"
                    })]
                }),

                Attribute({
                    name: "InputList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    details: "This attribute shall provide a list of the media inputs supported by the device.",
                    xref: { document: "cluster", section: "6.9.6.1" },
                    children: [Field({ name: "entry", type: "InputInfoStruct" })]
                }),

                Attribute({
                    name: "CurrentInput", id: 0x1, type: "uint8", access: "R V", conformance: "M",
                    details: "This attribute shall contain the value of the index field of the currently selected InputInfoStruct.",
                    xref: { document: "cluster", section: "6.9.6.2" }
                }),

                Command({
                    name: "SelectInput", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Upon receipt, this command shall change the media input on the device to the input at a specific " +
                        "index in the Input List.",
                    xref: { document: "cluster", section: "6.9.7.1" },

                    children: [Field({
                        name: "Index", id: 0x0, type: "uint8", conformance: "M",
                        details: "This field shall indicate the index field of the InputInfoStruct from the InputList attribute in " +
                            "which to change to.",
                        xref: { document: "cluster", section: "6.9.7.1.1" }
                    })]
                }),

                Command({
                    name: "ShowInputStatus", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Upon receipt, this command shall display the active status of the input list on screen.",
                    xref: { document: "cluster", section: "6.9.7.2" }
                }),

                Command({
                    name: "HideInputStatus", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    details: "Upon receipt, this command shall hide the input list from the screen.",
                    xref: { document: "cluster", section: "6.9.7.3" }
                }),

                Command({
                    name: "RenameInput", id: 0x3, access: "M", conformance: "NU", direction: "request",
                    response: "status",
                    details: "Upon receipt, this command shall rename the input at a specific index in the Input List. Updates to " +
                        "the input name shall appear in the device’s settings menus.",
                    xref: { document: "cluster", section: "6.9.7.4" },
                    children: [
                        Field({ name: "Index", id: 0x0, type: "uint8", conformance: "M" }),
                        Field({ name: "Name", id: 0x1, type: "string", conformance: "M" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "MediaPlayback", id: 0x506, classification: "application",
            details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media " +
                "device such as a TV, Set-top Box, or Smart Speaker." +
                "\n" +
                "This cluster server would be supported on Video Player devices or endpoints that provide media " +
                "playback, such as a Content App. This cluster provides an interface for controlling Media Playback.",
            xref: { document: "cluster", section: "6.10" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "6.10.4" },

                    children: [
                        Field({
                            name: "AS", constraint: "0", description: "AdvancedSeek",
                            details: "Enables clients to implement more advanced media seeking behavior in their user interface, such as " +
                                "for example a \"seek bar\"."
                        }),
                        Field({
                            name: "VS", constraint: "1", description: "VariableSpeed",
                            details: "Support for commands to support variable speed playback on media that supports it."
                        })
                    ]
                }),

                Attribute({
                    name: "CurrentState", id: 0x0, type: "PlaybackStateEnum", access: "R V", conformance: "M",
                    constraint: "desc",
                    details: "This attribute shall indicate the current playback state of media." +
                        "\n" +
                        "During fast-forward, rewind, and other seek operations; this attribute shall be set to PLAYING.",
                    xref: { document: "cluster", section: "6.10.6.1" }
                }),

                Attribute({
                    name: "StartTime", id: 0x1, type: "epoch-us", access: "R V", conformance: "AS", constraint: "desc",
                    default: null, quality: "X",
                    details: "This attribute shall indicate the start time of the media, in case the media has a fixed start time " +
                        "(for example, live stream or television broadcast), or null when start time does not apply to the " +
                        "current media (for example, video-on-demand). This time is a UTC time. The client needs to handle " +
                        "conversion to local time, as required, taking in account time zone and possible local DST offset.",
                    xref: { document: "cluster", section: "6.10.6.2" }
                }),

                Attribute({
                    name: "Duration", id: 0x2, type: "uint64", access: "R V", conformance: "AS", constraint: "desc",
                    default: null, quality: "X",
                    details: "This attribute shall indicate the duration, in milliseconds, of the current media being played back " +
                        "or null when duration is not applicable (for example, in live streaming content with no known " +
                        "duration). This attribute shall never be 0.",
                    xref: { document: "cluster", section: "6.10.6.3" }
                }),

                Attribute({
                    name: "SampledPosition", id: 0x3, type: "PlaybackPositionStruct", access: "R V", conformance: "AS",
                    constraint: "desc", default: "null", quality: "X",

                    details: "This attribute shall indicate the position of playback (Position field) at the time (UpdateAt " +
                        "field) specified in the attribute. The client may use the SampledPosition attribute to compute the " +
                        "current position within the media stream based on the PlaybackSpeed, " +
                        "PlaybackPositionStruct.UpdatedAt" +
                        "\n" +
                        "and PlaybackPositionStruct.Position fields. To enable this, the SampledPosition attribute shall be " +
                        "updated whenever a change in either the playback speed or the playback position is triggered " +
                        "outside the normal playback of the media. The events which may cause this to happen include:" +
                        "\n" +
                        "  • Starting or resumption of playback" +
                        "\n" +
                        "  • Seeking" +
                        "\n" +
                        "  • Skipping forward or backward" +
                        "\n" +
                        "  • Fast-forwarding or rewinding" +
                        "\n" +
                        "  • Updating of playback speed as a result of explicit request, or as a result of buffering events",

                    xref: { document: "cluster", section: "6.10.6.4" }
                }),

                Attribute({
                    name: "PlaybackSpeed", id: 0x4, type: "single", access: "R V", conformance: "AS",
                    constraint: "desc", default: 0,

                    details: "This attribute shall indicate the speed at which the current media is being played. The new " +
                        "PlaybackSpeed shall be reflected in this attribute whenever any of the following occurs:" +
                        "\n" +
                        "  • Starting of playback" +
                        "\n" +
                        "  • Resuming of playback" +
                        "\n" +
                        "  • Fast-forwarding" +
                        "\n" +
                        "  • Rewinding" +
                        "\n" +
                        "The PlaybackSpeed shall reflect the ratio of time elapsed in the media to the actual time taken for " +
                        "the playback assuming no changes to media playback (for example buffering events or requests to " +
                        "pause/rewind/forward)." +
                        "\n" +
                        "  • A value for PlaybackSpeed of 1 shall indicate normal playback where, for example, playback for " +
                        "    1 second causes the media to advance by 1 second within the duration of the media." +
                        "\n" +
                        "  • A value for PlaybackSpeed which is greater than 0 shall indicate that as playback is happening " +
                        "    the media is currently advancing in time within the duration of the media." +
                        "\n" +
                        "  • A value for PlaybackSpeed which is less than 0 shall indicate that as playback is happening the " +
                        "    media is currently going back in time within the duration of the media." +
                        "\n" +
                        "  • A value for PlaybackSpeed of 0 shall indicate that the media is currently not playing back. " +
                        "    When the CurrentState attribute has the value of PAUSED, NOT_PLAYING or BUFFERING, the " +
                        "    PlaybackSpeed shall be set to 0 to reflect that the media is not playing." +
                        "\n" +
                        "Following examples illustrate the PlaybackSpeed attribute values in various conditions.",

                    xref: { document: "cluster", section: "6.10.6.5" }
                }),

                Attribute({
                    name: "SeekRangeEnd", id: 0x5, type: "uint64", access: "R V", conformance: "AS", constraint: "desc",
                    default: null, quality: "X",

                    details: "This attribute shall indicate the furthest forward valid position to which a client may seek " +
                        "forward, in milliseconds from the start of the media. When the media has an associated StartTime, a " +
                        "value of null shall indicate that a seek forward is valid only until the current time within the " +
                        "media, using a position computed from the difference between the current time offset and StartTime, " +
                        "in milliseconds from start of the media, truncating fractional milliseconds towards 0. A value of " +
                        "Nas when StartTime is not specified shall indicate that seeking forward is not allowed.",

                    xref: { document: "cluster", section: "6.10.6.7" }
                }),

                Attribute({
                    name: "SeekRangeStart", id: 0x6, type: "uint64", access: "R V", conformance: "AS",
                    constraint: "desc", default: null, quality: "X",
                    details: "This attribute shall indicate the earliest valid position to which a client may seek back, in " +
                        "milliseconds from start of the media. A value of Nas shall indicate that seeking backwards is not " +
                        "allowed.",
                    xref: { document: "cluster", section: "6.10.6.6" }
                }),

                Command({
                    name: "Play", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall play media. If content is currently in a FastForward or Rewind state. Play " +
                        "shall return media to normal playback speed.",
                    xref: { document: "cluster", section: "6.10.7.1" }
                }),

                Command({
                    name: "Pause", id: 0x1, access: "O", conformance: "M", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall pause playback of the media.",
                    xref: { document: "cluster", section: "6.10.7.2" }
                }),

                Command({
                    name: "Stop", id: 0x2, access: "O", conformance: "M", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall stop playback of the media. User-visible outcome is context-specific. This " +
                        "may navigate the user back to the location from where the media was originally launched.",
                    xref: { document: "cluster", section: "6.10.7.3" }
                }),

                Command({
                    name: "StartOver", id: 0x3, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall Start Over with the current media playback item.",
                    xref: { document: "cluster", section: "6.10.7.4" }
                }),

                Command({
                    name: "Previous", id: 0x4, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall cause the handler to be invoked for \"Previous\". User experience is " +
                        "context-specific. This will often Go back to the previous media playback item.",
                    xref: { document: "cluster", section: "6.10.7.5" }
                }),

                Command({
                    name: "Next", id: 0x5, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall cause the handler to be invoked for \"Next\". User experience is context- " +
                        "specific. This will often Go forward to the next media playback item.",
                    xref: { document: "cluster", section: "6.10.7.6" }
                }),

                Command({
                    name: "Rewind", id: 0x6, access: "O", conformance: "VS", direction: "request",
                    response: "PlaybackResponse",

                    details: "Upon receipt, this shall start playback of the media backward in case the media is currently " +
                        "playing in the forward direction or is not playing. If the playback is already happening in the " +
                        "backwards direction receipt of this command shall increase the speed of the media playback " +
                        "backwards." +
                        "\n" +
                        "Different \"rewind\" speeds may be reflected on the media playback device based upon the number of " +
                        "sequential calls to this function and the capability of the device. This is to avoid needing to " +
                        "define every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported " +
                        "it shall be updated to reflect the new speed of playback. If the playback speed cannot be changed " +
                        "for the media being played(for example, in live streaming content not supporting seek), the status " +
                        "of NOT_ALLOWED shall be returned. If the playback speed has reached the maximum supported speed for " +
                        "media playing backwards, the status of SPEED_OUT_OF_RANGE shall be returned.",

                    xref: { document: "cluster", section: "6.10.7.7" }
                }),

                Command({
                    name: "FastForward", id: 0x7, access: "O", conformance: "VS", direction: "request",
                    response: "PlaybackResponse",

                    details: "Upon receipt, this shall start playback of the media in the forward direction in case the media is " +
                        "currently playing in the backward direction or is not playing. If the playback is already happening " +
                        "in the forward direction receipt of this command shall increase the speed of the media playback." +
                        "\n" +
                        "Different \"fast-forward\" speeds may be reflected on the media playback device based upon the number " +
                        "of sequential calls to this function and the capability of the device. This is to avoid needing to " +
                        "define every speed (multiple fast, slow motion, etc). If the PlaybackSpeed attribute is supported " +
                        "it shall be updated to reflect the new speed of playback. If the playback speed cannot be changed " +
                        "for the media being played(for example, in live streaming content not supporting seek), the status " +
                        "of NOT_ALLOWED shall be returned. If the playback speed has reached the maximum supported speed for " +
                        "media playing forward, the status of SPEED_OUT_OF_RANGE shall be returned.",

                    xref: { document: "cluster", section: "6.10.7.8" }
                }),

                Command({
                    name: "SkipForward", id: 0x8, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall Skip forward in the media by the given number of milliseconds.",
                    xref: { document: "cluster", section: "6.10.7.9" },

                    children: [Field({
                        name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M",

                        details: "This field shall indicate the duration of the time span to skip forward in the media, in " +
                            "milliseconds. In case the resulting position falls in the middle of a frame, the server shall set " +
                            "the position to the beginning of that frame and set the SampledPosition attribute on the cluster " +
                            "accordingly. If the resultant position falls beyond the furthest valid position in the media the " +
                            "client may seek forward to, the position should be set to that furthest valid position. If the " +
                            "SampledPosition attribute is supported it shall be updated on the cluster accordingly.",

                        xref: { document: "cluster", section: "6.10.7.9.1" }
                    })]
                }),

                Command({
                    name: "SkipBackward", id: 0x9, access: "O", conformance: "O", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall Skip backward in the media by the given number of milliseconds.",
                    xref: { document: "cluster", section: "6.10.7.10" },

                    children: [Field({
                        name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M",

                        details: "This field shall indicate the duration of the time span to skip backward in the media, in " +
                            "milliseconds. In case the resulting position falls in the middle of a frame, the server shall set " +
                            "the position" +
                            "\n" +
                            "to the beginning of that frame and set the SampledPosition attribute on the cluster accordingly. If " +
                            "the resultant position falls before the earliest valid position to which a client may seek back to, " +
                            "the position should be set to that earliest valid position. If the SampledPosition attribute is " +
                            "supported it shall be updated on the cluster accordingly.",

                        xref: { document: "cluster", section: "6.10.7.10.1" }
                    })]
                }),

                Command({
                    name: "PlaybackResponse", id: 0xa, conformance: "M", direction: "response",
                    details: "This command shall be generated in response to various Playback Commands.",
                    xref: { document: "cluster", section: "6.10.7.12" },

                    children: [
                        Field({
                            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M", constraint: "desc",
                            details: "This field shall indicate the status of the command which resulted in this response.",
                            xref: { document: "cluster", section: "6.10.7.12.1" }
                        }),
                        Field({
                            name: "Data", id: 0x1, type: "string", conformance: "O",
                            details: "This field shall indicate Optional app-specific data.",
                            xref: { document: "cluster", section: "6.10.7.12.2" }
                        })
                    ]
                }),

                Command({
                    name: "Seek", id: 0xb, access: "O", conformance: "AS", direction: "request",
                    response: "PlaybackResponse",
                    details: "Upon receipt, this shall change the playback position in the media to the given position.",
                    xref: { document: "cluster", section: "6.10.7.11" },

                    children: [Field({
                        name: "Position", id: 0x0, type: "uint64", conformance: "M",

                        details: "This field shall indicate the position (in milliseconds) in the media to seek to. In case the " +
                            "position falls in the middle of a frame, the server shall set the position to the beginning of that " +
                            "frame and set the SampledPosition attribute on the cluster accordingly. If the position falls " +
                            "before the earliest valid position or beyond the furthest valid position to which a client may seek " +
                            "back or forward to respectively, the status of SEEK_OUT_OF_RANGE shall be returned and no change " +
                            "shall be made to the position of the playback.",

                        xref: { document: "cluster", section: "6.10.7.11.1" }
                    })]
                })
            ]
        }),

        Cluster({
            name: "TargetNavigator", id: 0x505, classification: "application",

            details: "This cluster provides an interface for UX navigation within a set of targets on a device or " +
                "endpoint." +
                "\n" +
                "This cluster would be supported on Video Player devices or devices with navigable user interfaces. " +
                "This cluster would also be supported on endpoints with navigable user interfaces such as a Content " +
                "App. It supports listing a set of navigation targets, tracking and changing the current target." +
                "\n" +
                "The cluster server for Target Navigator is implemented by endpoints on a device that support UX " +
                "navigation." +
                "\n" +
                "When this cluster is implemented for a Content App endpoint, the Video Player device containing the " +
                "endpoint shall launch the Content App when a client invokes the NavigateTarget command.",

            xref: { document: "cluster", section: "6.11" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "TargetList", id: 0x0, type: "list", access: "R V", conformance: "M",
                    details: "This attribute shall represent a list of targets that can be navigated to within the experience " +
                        "presented to the user by the Endpoint (Video Player or Content App). The list shall not contain any " +
                        "entries with the same Identifier in the TargetInfoStruct object.",
                    xref: { document: "cluster", section: "6.11.5.1" },
                    children: [Field({ name: "entry", type: "TargetInfoStruct" })]
                }),

                Attribute({
                    name: "CurrentTarget", id: 0x1, type: "uint8", access: "R V", conformance: "O", constraint: "desc",
                    default: null, quality: "X",

                    details: "This attribute shall represent the Identifier for the target which is currently in foreground on " +
                        "the corresponding Endpoint (Video Player or Content App), or null to indicate that no target is in " +
                        "the foreground." +
                        "\n" +
                        "When not null, the CurrentTarget shall be an Identifier value contained within one of the " +
                        "TargetInfoStruct objects in the TargetList attribute list.",

                    xref: { document: "cluster", section: "6.11.5.2" }
                }),

                Command({
                    name: "NavigateTarget", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "NavigateTargetResponse",
                    details: "Upon receipt, this shall navigation the UX to the target identified.",
                    xref: { document: "cluster", section: "6.11.6.1" },

                    children: [
                        Field({
                            name: "Target", id: 0x0, type: "uint8", conformance: "M",
                            details: "This field shall indicate the Identifier for the target for UX navigation. The Target shall be an " +
                                "Identifier value contained within one of the TargetInfoStruct objects in the TargetList attribute " +
                                "list.",
                            xref: { document: "cluster", section: "6.11.6.1.1" }
                        }),

                        Field({
                            name: "Data", id: 0x1, type: "string", conformance: "O",
                            details: "This field shall indicate Optional app-specific data.",
                            xref: { document: "cluster", section: "6.11.6.1.2" }
                        })
                    ]
                }),

                Command({
                    name: "NavigateTargetResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This command shall be generated in response to NavigateTarget command.",
                    xref: { document: "cluster", section: "6.11.6.2" },

                    children: [
                        Field({
                            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                            details: "This field shall indicate the of the command.",
                            xref: { document: "cluster", section: "6.11.6.2.1" }
                        }),
                        Field({
                            name: "Data", id: 0x1, type: "string", conformance: "O",
                            details: "This field shall indicate Optional app-specific data.",
                            xref: { document: "cluster", section: "6.11.6.2.2" }
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "RvcRunMode", id: 0x54, type: "ModeBase", classification: "application",
            details: "This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner " +
                "devices. It also defines a namespace for the running modes of these devices.",
            xref: { document: "cluster", section: "7.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Datatype({
                    name: "ModeOptionStruct Type", type: "struct",

                    details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                        "ModeOptionStruct type. A blank field indicates no change." +
                        "\n" +
                        "At least one SupportedMode attribute list entry shall include the Idle mode tag in the ModeTags " +
                        "field." +
                        "\n" +
                        "At least one SupportedMode attribute list entry (different from the one above) shall include the " +
                        "Cleaning mode tag in the ModeTags field." +
                        "\n" +
                        "The Cleaning and Idle mode tags are mutually exclusive and shall NOT both be used together in a " +
                        "mode’s ModeTags.",

                    xref: { document: "cluster", section: "7.2.4.1" },
                    children: [
                        Field({ name: "Label", id: 0x0, conformance: "M" }),
                        Field({ name: "Mode", id: 0x1, conformance: "M" }),
                        Field({ name: "ModeTags", id: 0x2, conformance: "M", constraint: "1 to 8" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "RvcCleanMode", id: 0x55, type: "ModeBase", classification: "application",
            details: "This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner " +
                "devices. It also defines a namespace for the cleaning type for these devices.",
            xref: { document: "cluster", section: "7.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Datatype({
                    name: "ModeOptionStruct Type", type: "struct",
                    details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                        "ModeOptionStruct type. A blank field indicates no change." +
                        "\n" +
                        "At least one SupportedMode attribute list entry shall include the Vacuum and/or the Mop mode tag in " +
                        "the ModeTags field list.",
                    xref: { document: "cluster", section: "7.3.4.1" },
                    children: [
                        Field({ name: "Label", id: 0x0, conformance: "M" }),
                        Field({ name: "Mode", id: 0x1, conformance: "M" }),
                        Field({ name: "ModeTags", id: 0x2, conformance: "M", constraint: "1 to 8" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "RvcOperationalState", id: 0x61, type: "OperationalState", classification: "application",
            details: "This cluster provides an interface for monitoring the operational state of a Robotic Vacuum Cleaner.",
            xref: { document: "cluster", section: "7.4" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Datatype({
                    name: "OperationalStateEnum Type", type: "enum8",
                    details: "The values defined herein are applicable to this derived cluster of Operational State only and are " +
                        "additional to the set of values defined in Operational State itself.",
                    xref: { document: "cluster", section: "7.4.4.1" },

                    children: [
                        Field({
                            name: "SeekingCharger", id: 0x40, conformance: "M",
                            description: "The device is en route to the charging dock"
                        }),
                        Field({ name: "Charging", id: 0x41, conformance: "M", description: "The device is charging" }),
                        Field({
                            name: "Docked", id: 0x42, conformance: "M", description: "The device is on the dock, not charging"
                        })
                    ]
                }),

                Datatype({
                    name: "ErrorStateEnum Type", type: "enum8",
                    details: "The values defined herein are applicable to this derived cluster of Operational State only and are " +
                        "additional to the set of values defined in Operational State itself.",
                    xref: { document: "cluster", section: "7.4.4.2" },

                    children: [
                        Field({
                            name: "FailedToFindChargingDock", id: 0x40, conformance: "M",
                            description: "The device has failed to find or reach the charging dock"
                        }),
                        Field({
                            name: "Stuck", id: 0x41, conformance: "M",
                            description: "The device is stuck and requires manual intervention"
                        }),
                        Field({
                            name: "DustBinMissing", id: 0x42, conformance: "M",
                            description: "The device has detected that its dust bin is missing"
                        }),
                        Field({
                            name: "DustBinFull", id: 0x43, conformance: "M",
                            description: "The device has detected that its dust bin is full"
                        }),
                        Field({
                            name: "WaterTankEmpty", id: 0x44, conformance: "M",
                            description: "The device has detected that its water tank is empty"
                        }),
                        Field({
                            name: "WaterTankMissing", id: 0x45, conformance: "M",
                            description: "The device has detected that its water tank is missing"
                        }),
                        Field({
                            name: "WaterTankLidOpen", id: 0x46, conformance: "M",
                            description: "The device has detected that its water tank lid is open"
                        }),
                        Field({
                            name: "MopCleaningPadMissing", id: 0x47, conformance: "M",
                            description: "The device has detected that its cleaning pad is missing"
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "TemperatureControl", id: 0x56, classification: "application",

            details: "This cluster provides an interface to the setpoint temperature on devices such as washers, " +
                "refrigerators, and water heaters. The setpoint temperature is the temperature to which a device " +
                "using this cluster would attempt to control to. This cluster does not provide access to the actual " +
                "or physical temperature associated with any device using this cluster. Access to the physical " +
                "temperature associated with a device using this cluster would be provided by other clusters as part " +
                "of that devices device type definition." +
                "\n" +
                "The values and constraints of the attributes communicated to clients SHOULD match the controls on " +
                "any physical interface on a device implementing this server. For example, the value of the Step " +
                "attribute SHOULD match the incremental value by which the temperature setpoint can be changed on " +
                "the physical device.",

            xref: { document: "cluster", section: "8.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "8.2.4" },

                    children: [
                        Field({
                            name: "TN", conformance: "O.a", constraint: "0", description: "TemperatureNumber",
                            details: "Use actual temperature numbers"
                        }),
                        Field({
                            name: "TL", conformance: "O.a", constraint: "1", description: "TemperatureLevel",
                            details: "Use temperature levels"
                        }),
                        Field({
                            name: "STEP", conformance: "[TN]", constraint: "2", description: "TemperatureStep",
                            details: "Use step control with temperature numbers"
                        })
                    ]
                }),

                Attribute({
                    name: "TemperatureSetpoint", id: 0x0, type: "temperature", access: "R V", conformance: "TN",
                    constraint: "minTemperature to maxTemperature",
                    details: "This attribute shall represent the desired Temperature Setpoint on the device.",
                    xref: { document: "cluster", section: "8.2.5.1" }
                }),

                Attribute({
                    name: "MinTemperature", id: 0x1, type: "temperature", access: "R V", conformance: "TN",
                    quality: "F",
                    details: "This attribute shall represent the minimum temperature to which the TemperatureSetpoint attribute " +
                        "may be set.",
                    xref: { document: "cluster", section: "8.2.5.2" }
                }),

                Attribute({
                    name: "MaxTemperature", id: 0x2, type: "temperature", access: "R V", conformance: "TN",
                    constraint: "desc", quality: "F",

                    details: "This attribute shall represent the maximum temperature to which the TemperatureSetpoint attribute " +
                        "may be set." +
                        "\n" +
                        "If the Step attribute is supported, this attribute shall be such that MaxTemperature = " +
                        "MinTemperature + Step * n, where n is an integer and n > 0. If the Step attribute is not supported, " +
                        "this attribute shall be such that MaxTemperature > MinTemperature.",

                    xref: { document: "cluster", section: "8.2.5.3" }
                }),

                Attribute({
                    name: "Step", id: 0x3, type: "temperature", access: "R V", conformance: "STEP", quality: "F",

                    details: "This attribute shall represent the discrete value by which the TemperatureSetpoint attribute can be " +
                        "changed via the SetTemperature command." +
                        "\n" +
                        "For example, if the value of MinTemperature is 25.00C (2500) and the Step value is 0.50C (50), " +
                        "valid values of the TargetTemperature field of the SetTemperature command would be 25.50C (2550), " +
                        "26.00C (2600), 26.50C (2650), etc.",

                    xref: { document: "cluster", section: "8.2.5.4" }
                }),

                Attribute({
                    name: "SelectedTemperatureLevel", id: 0x4, type: "uint8", access: "R V", conformance: "TL",
                    constraint: "0 to 31",
                    details: "This attribute shall represent the currently selected temperature level setting of the server. This " +
                        "attribute shall be the positional index of the list item in the SupportedTemperatureLevels list " +
                        "that represents the currently selected temperature level setting of the server.",
                    xref: { document: "cluster", section: "8.2.5.5" }
                }),

                Attribute({
                    name: "SupportedTemperatureLevels", id: 0x5, type: "list", access: "R V", conformance: "TL",
                    constraint: "max 32[max 16]",

                    details: "This attribute shall represent the list of supported temperature level settings that may be " +
                        "selected via the TargetTemperatureLevel field in the SetTemperature command. Each string is " +
                        "readable text that describes each temperature level setting in a way that can be easily understood " +
                        "by humans. For example, a washing machine can have temperature levels like \"Cold\", \"Warm\", and " +
                        "\"Hot\". Each string is specified by the manufacturer." +
                        "\n" +
                        "Each item in this list shall represent a unique temperature level. Each entry in this list shall " +
                        "have a unique value. The entries in this list shall appear in order of increasing temperature level " +
                        "with list item 0 being the setting with the lowest temperature level.",

                    xref: { document: "cluster", section: "8.2.5.6" },
                    children: [Field({ name: "entry", type: "string" })]
                }),

                Command({
                    name: "SetTemperature", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "cluster", section: "8.2.6.1" },

                    children: [
                        Field({
                            name: "TargetTemperature", id: 0x0, type: "temperature", conformance: "TN", constraint: "desc",
                            details: "This field shall specify the desired temperature setpoint that the server is to be set to." +
                                "\n" +
                                "The TargetTemperature shall be from MinTemperature to MaxTemperature inclusive. If the Step " +
                                "attribute is supported, TargetTemperature shall be such that (TargetTemperature - MinTemperature) % " +
                                "Step == 0.",
                            xref: { document: "cluster", section: "8.2.6.1.1" }
                        }),

                        Field({
                            name: "TargetTemperatureLevel", id: 0x1, type: "uint8", conformance: "TL", constraint: "desc",
                            details: "This field shall specify the index of the list item in the SupportedTemperatureLevels list that " +
                                "represents the desired temperature level setting of the server. The value of this field shall be " +
                                "between 0 and the length of the SupportedTemperatureLevels list -1.",
                            xref: { document: "cluster", section: "8.2.6.1.2" }
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "DishwasherMode", id: 0x59, type: "ModeBase", classification: "application",
            details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
                "enumerated values for dishwasher devices.",
            xref: { document: "cluster", section: "8.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Attribute({
                    name: "SupportedModes", id: 0x0, conformance: "M",
                    xref: { document: "cluster", section: "8.3.5" }
                }),
                Attribute({
                    name: "CurrentMode", id: 0x1, conformance: "M",
                    xref: { document: "cluster", section: "8.3.5" }
                }),

                Attribute({
                    name: "StartUpMode", id: 0x2, conformance: "P",
                    details: "If this attribute is supported, the device SHOULD initially set this to one of the supported modes " +
                        "that has the Normal tag associated with it. See the Mode Base cluster specification for full " +
                        "details about the StartUpMode attribute.",
                    xref: { document: "cluster", section: "8.3.5.1" }
                }),

                Attribute({
                    name: "OnMode", id: 0x3, conformance: "P",
                    xref: { document: "cluster", section: "8.3.5" }
                }),

                Datatype({
                    name: "ModeOptionStruct Type", type: "struct",
                    details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                        "ModeOptionStruct type. A blank field indicates no change." +
                        "\n" +
                        "At least one SupportedMode attribute list entry shall include the Normal mode tag in the ModeTags " +
                        "field list.",
                    xref: { document: "cluster", section: "8.3.4.1" },
                    children: [
                        Field({ name: "Label", id: 0x0, conformance: "M" }),
                        Field({ name: "Mode", id: 0x1, conformance: "M" }),
                        Field({ name: "ModeTags", id: 0x2, conformance: "M", constraint: "1 to 8" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "DishwasherAlarm", id: 0x5d, type: "AlarmBase", classification: "application",
            details: "This cluster is a derived cluster of the Alarm Base cluster.",
            xref: { document: "cluster", section: "8.4" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Datatype({
                    name: "AlarmMap Type", type: "map32",
                    xref: { document: "cluster", section: "8.4.4.1" },

                    children: [
                        Field({ name: "InflowError", constraint: "0", description: "Water inflow is abnormal" }),
                        Field({ name: "DrainError", constraint: "1", description: "Water draining is abnormal" }),
                        Field({ name: "DoorError", constraint: "2", description: "Door or door lock is abnormal" }),
                        Field({ name: "TempTooLow", constraint: "3", description: "Unable to reach normal temperature" }),
                        Field({ name: "TempTooHigh", constraint: "4", description: "Temperature is too high" }),
                        Field({ name: "WaterLevelError", constraint: "5", description: "Water level is abnormal" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "LaundryWasherMode", id: 0x51, type: "ModeBase", classification: "application",
            details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
                "enumerated values for laundry washer devices.",
            xref: { document: "cluster", section: "8.5" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Attribute({
                    name: "SupportedModes", id: 0x0, conformance: "M",
                    xref: { document: "cluster", section: "8.5.5" }
                }),
                Attribute({
                    name: "CurrentMode", id: 0x1, conformance: "M",
                    xref: { document: "cluster", section: "8.5.5" }
                }),

                Attribute({
                    name: "StartUpMode", id: 0x2, conformance: "P",
                    details: "If this attribute is supported, the device SHOULD initially set this to one of the supported modes " +
                        "that has the Normal tag associated with it. See the Mode Base cluster specification for full " +
                        "details about the StartUpMode attribute.",
                    xref: { document: "cluster", section: "8.5.5.1" }
                }),

                Attribute({
                    name: "OnMode", id: 0x3, conformance: "P",
                    xref: { document: "cluster", section: "8.5.5" }
                }),

                Datatype({
                    name: "ModeOptionStruct Type", type: "struct",
                    details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                        "ModeOptionStruct type. A blank field indicates no change." +
                        "\n" +
                        "At least one SupportedMode attribute list entry shall include the Normal mode tag in the ModeTags " +
                        "field list.",
                    xref: { document: "cluster", section: "8.5.4.1" },
                    children: [
                        Field({ name: "Label", id: 0x0, conformance: "M" }),
                        Field({ name: "Mode", id: 0x1, conformance: "M" }),
                        Field({ name: "ModeTags", id: 0x2, conformance: "M", constraint: "1 to 8" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "LaundryWasherControls", id: 0x53, classification: "application",
            details: "This cluster provides a way to access options associated with the operation of a laundry washer " +
                "device type.",
            xref: { document: "cluster", section: "8.6" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "8.6.4" },

                    children: [
                        Field({
                            name: "SPIN", conformance: "O", constraint: "0", description: "Spin",
                            details: "This feature indicates multiple spin speeds are supported in at least one supported mode. Note that " +
                                "some modes may not support multiple spin speeds even if this feature is supported.",
                            xref: { document: "cluster", section: "8.6.4.1" }
                        }),

                        Field({
                            name: "RINSE", conformance: "O", constraint: "1", description: "Rinse",
                            details: "This feature indicates multiple rinse cycles are supported in at least one supported mode. Note " +
                                "that some modes may not support selection of the number of rinse cycles even if this feature is " +
                                "supported.",
                            xref: { document: "cluster", section: "8.6.4.2" }
                        })
                    ]
                }),

                Attribute({
                    name: "SpinSpeeds", id: 0x0, type: "list", access: "R V", conformance: "SPIN",
                    constraint: "max 16[max 64]",
                    details: "This attribute indicates the list of spin speeds available to the appliance in the currently " +
                        "selected mode. The spin speed values are determined by the manufacturer. At least one spin speed " +
                        "value shall be provided in the SpinSpeeds list. The list of spin speeds may change depending on the " +
                        "currently selected Laundry Washer mode. For example, Quick mode might have a completely different " +
                        "list of SpinSpeeds than Delicates mode.",
                    xref: { document: "cluster", section: "8.6.6.1" },
                    children: [Field({ name: "entry", type: "string" })]
                }),

                Attribute({
                    name: "SpinSpeedCurrent", id: 0x1, type: "uint8", access: "RW VO", conformance: "SPIN",
                    constraint: "0 to 15", quality: "X",

                    details: "This attribute indicates the currently selected spin speed. It is the index into the SpinSpeeds " +
                        "list of the selected spin speed, as such, this attribute can be an integer between 0 and the number " +
                        "of entries in SpinSpeeds - 1. If a value is received that is outside of the defined constraints, a " +
                        "CONSTRAINT_ERROR shall be sent as the response. If a value is attempted to be written that doesn’t " +
                        "match a valid index (e.g. an index of 5 when the list has 4 values), a CONSTRAINT_ERROR shall be " +
                        "sent as the response. If null is written to this attribute, there will be no spin speed for the " +
                        "selected cycle. If the value is null, there will be no spin speed on the current mode.",

                    xref: { document: "cluster", section: "8.6.6.2" }
                }),

                Attribute({
                    name: "NumberOfRinses", id: 0x2, type: "NumberOfRinsesEnum", access: "RW VO", conformance: "RINSE",
                    constraint: "desc", default: "1",
                    details: "This attribute represents how many times a rinse cycle shall be performed on a device for the " +
                        "current mode of operation. A value of None shall indicate that no rinse cycle will be performed. " +
                        "This value may be set by the client to adjust the number of rinses that are performed for the " +
                        "current mode of operation. If the device is not in a compatible state to accept the provided value, " +
                        "an INVALID_IN_STATE error shall be sent as the response.",
                    xref: { document: "cluster", section: "8.6.6.3" }
                }),

                Attribute({
                    name: "SupportedRinses", id: 0x3, type: "list", access: "R V", conformance: "RINSE",
                    constraint: "max 4",
                    details: "This attribute represents the amount of rinses allowed for a specific mode. Each entry shall " +
                        "indicate a NumberOfRinsesEnum value that is possible in the selected mode on the device. The value " +
                        "of this attribute may change at runtime based on the currently selected mode. Each entry shall be " +
                        "distinct.",
                    xref: { document: "cluster", section: "8.6.6.4" },
                    children: [Field({ name: "entry", type: "NumberOfRinsesEnum" })]
                })
            ]
        }),

        Cluster({
            name: "RefrigeratorAndTemperatureControlledCabinetMode", id: 0x52, type: "ModeBase",
            classification: "application",
            details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
                "enumerated values for refrigerator and temperature controlled cabinet devices.",
            xref: { document: "cluster", section: "8.7" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Attribute({
                    name: "SupportedModes", id: 0x0, conformance: "M",
                    xref: { document: "cluster", section: "8.7.5" }
                }),
                Attribute({
                    name: "CurrentMode", id: 0x1, conformance: "M",
                    xref: { document: "cluster", section: "8.7.5" }
                }),
                Attribute({
                    name: "StartUpMode", id: 0x2, conformance: "P",
                    xref: { document: "cluster", section: "8.7.5" }
                }),
                Attribute({
                    name: "OnMode", id: 0x3, conformance: "P",
                    xref: { document: "cluster", section: "8.7.5" }
                }),

                Datatype({
                    name: "ModeOptionStruct Type", type: "struct",
                    details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                        "ModeOptionStruct type. A blank field indicates no change." +
                        "\n" +
                        "At least one SupportedMode attribute list entry shall include the Auto mode tag in the ModeTags " +
                        "field list.",
                    xref: { document: "cluster", section: "8.7.4.1" },
                    children: [
                        Field({ name: "Label", id: 0x0, conformance: "M" }),
                        Field({ name: "Mode", id: 0x1, conformance: "M" }),
                        Field({ name: "ModeTags", id: 0x2, conformance: "M", constraint: "1 to 8" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "RefrigeratorAlarm", id: 0x57, type: "AlarmBase", classification: "application",
            details: "This cluster is a derived cluster of Alarm Base cluster.",
            xref: { document: "cluster", section: "8.8" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "cluster", section: "8.8.4" },
                    children: [Field({
                        name: "RESET", conformance: "X", constraint: "0", description: "Reset",
                        details: "Supports the ability to reset alarms"
                    })]
                }),

                Datatype({
                    name: "AlarmMap Type", type: "map32",
                    xref: { document: "cluster", section: "8.8.5.1" },
                    children: [Field({
                        name: "DoorOpen", constraint: "0",
                        description: "The cabinet’s door has been open for a vendor defined amount of time."
                    })]
                })
            ]
        }),

        Cluster({
            name: "Descriptor", id: 0x1d, classification: "endpoint",

            details: "NOTE" +
                "\n" +
                "The Descriptor cluster is meant to replace the support from the Zigbee Device Object (ZDO) for " +
                "describing a node, its endpoints and clusters." +
                "\n" +
                "This cluster describes an endpoint instance on the node, independently from other endpoints, but " +
                "also allows composition of endpoints to conform to complex device type patterns." +
                "\n" +
                "This cluster supports a list of one or more device type identifiers that represent conformance to " +
                "device type specifications." +
                "\n" +
                "The cluster supports a PartsList attribute that is a list of zero or more endpoints to support a " +
                "composed device type.",

            xref: { document: "core", section: "9.5" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "9.5.4" },

                    children: [Field({
                        name: "TAGLIST", conformance: "desc", constraint: "0", description: "TagList",
                        details: "See the Disambiguation section in the System Model spec for conformance requirements for this " +
                            "feature and the corresponding attribute.",
                        xref: { document: "core", section: "9.5.4.1" }
                    })]
                }),

                Attribute({
                    name: "DeviceTypeList", id: 0x0, type: "list", access: "R V", conformance: "M", constraint: "min 1",
                    quality: "F",

                    details: "This is a list of device types and corresponding revisions declaring endpoint conformance (see " +
                        "DeviceTypeStruct). At least one device type entry shall be present." +
                        "\n" +
                        "An endpoint shall conform to all device types listed in the DeviceTypeList. A cluster instance that " +
                        "is in common for more than one device type in the DeviceTypeList shall be supported as a shared " +
                        "cluster instance on the endpoint.",

                    xref: { document: "core", section: "9.5.6.1" },
                    children: [Field({ name: "entry", type: "DeviceTypeStruct" })]
                }),

                Attribute({
                    name: "ServerList", id: 0x1, type: "list", access: "R V", conformance: "M", default: [],
                    quality: "F",
                    details: "This attribute shall list each cluster ID for the server clusters present on the endpoint instance.",
                    xref: { document: "core", section: "9.5.6.2" },
                    children: [Field({ name: "entry", type: "cluster-id" })]
                }),

                Attribute({
                    name: "ClientList", id: 0x2, type: "list", access: "R V", conformance: "M", default: [],
                    quality: "F",
                    details: "This attribute shall list each cluster ID for the client clusters present on the endpoint instance.",
                    xref: { document: "core", section: "9.5.6.3" },
                    children: [Field({ name: "entry", type: "cluster-id" })]
                }),

                Attribute({
                    name: "PartsList", id: 0x3, type: "list", access: "R V", conformance: "M", default: [],

                    details: "This attribute indicates composition of the device type instance. Device type instance composition " +
                        "shall include the endpoints in this list." +
                        "\n" +
                        "See Endpoint Composition for more information about which endpoints to include in this list." +
                        "\n" +
                        "### ‌9.5.6.5. TagList Attribute" +
                        "\n" +
                        "This attribute shall be used to disambiguate sibling endpoints in certain situations, as defined in " +
                        "the Disambiguation section in the System Model specification. An example of such a situation might " +
                        "be a device with two buttons, with this attribute being used to indicate which of the two endpoints " +
                        "corresponds to the button on the left side." +
                        "\n" +
                        "It may also be used to provide information about an endpoint (e.g. the relative location of a " +
                        "Temperature sensor in a Temperature Controlled Cabinet)." +
                        "\n" +
                        "  • A client SHOULD use these tags to convey disambiguation information and other relevant " +
                        "    information to the user (e.g. showing it in a user interface), as appropriate." +
                        "\n" +
                        "  • A client SHOULD use these tags in its logic to make decisions, as appropriate." +
                        "\n" +
                        "For example, a client may identify which endpoint maps to a certain function, orientation or " +
                        "labeling." +
                        "\n" +
                        "A client may use the Label field of each SemanticTagStruct, if present in each structure, to " +
                        "indicate characteristics of an endpoint, or to augment what is provided in the TagID field of the " +
                        "same structure.",

                    xref: { document: "core", section: "9.5.6.4" },
                    children: [Field({ name: "entry", type: "endpoint-no" })]
                }),

                Attribute({
                    name: "TagList", id: 0x4, type: "list", access: "R V", conformance: "TAGLIST", constraint: "1 to 6",
                    quality: "F",
                    xref: { document: "core", section: "9.5.6" },
                    children: [Field({ name: "entry", type: "SemanticTagStruct" })]
                })
            ]
        }),

        Cluster({
            name: "Binding", id: 0x1e, classification: "endpoint",

            details: "NOTE" +
                "\n" +
                "This scope of this document is the Binding cluster as part of the Cluster Library. The Binding " +
                "cluster is meant to replace the support from the Zigbee Device Object (ZDO) for supporting the " +
                "binding table." +
                "\n" +
                "A binding represents a persistent relationship between an endpoint and one or more other local or " +
                "remote endpoints. A binding does not require that the relationship exists. It is up to the node " +
                "application to set up the relationship." +
                "\n" +
                "A binding is used to inform a client endpoint of one or more targets for a potential interaction. " +
                "For example: a light switch that controls one or more light bulbs, needs to be told the nodes and " +
                "endpoints of the bulbs, or told a group in which the bulbs are members. For example: A client that " +
                "needs to subscribe to an occupancy sensor, needs to know the node and endpoint of the sensor." +
                "\n" +
                "In such cases, a binding is used to direct a local endpoint to a target. The existence of the " +
                "Binding cluster on the client endpoint, allows the creation of one or more binding entries " +
                "(bindings) in the Binding cluster." +
                "\n" +
                "Each binding indicates another endpoint or cluster on another endpoint. Multiple bindings are " +
                "allowed, depending on the interaction." +
                "\n" +
                "A binding is either a unicast binding, where the target is a single endpoint on a single node, or a " +
                "groupcast binding, where the target is a group, which may indicate multiple endpoints on multiple " +
                "nodes. The binding may also target a single cluster on the target endpoint(s)." +
                "\n" +
                "When a client cluster requires a target for an interaction, the Binding cluster shall exist on the " +
                "same endpoint." +
                "\n" +
                "Once a binding entry is created on the Binding cluster, the client endpoint may initiate " +
                "interactions to the binding target.",

            xref: { document: "core", section: "9.6" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "Binding", id: 0x0, type: "list", access: "RW F VM", conformance: "M", constraint: "desc",
                    default: [], quality: "N",
                    details: "Each entry shall represent a binding.",
                    xref: { document: "core", section: "9.6.6.1" },
                    children: [Field({ name: "entry", type: "TargetStruct" })]
                })
            ]
        }),

        Cluster({
            name: "Label", classification: "endpoint",
            details: "This cluster provides a feature to tag an endpoint with zero or more labels. This is a base cluster " +
                "that requires a derived cluster to create an instance.",
            xref: { document: "core", section: "9.7" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "LabelList", id: 0x0, type: "list", conformance: "M", constraint: "derived", default: [],
                    details: "This is a list of string tuples. Each entry is a LabelStruct.",
                    xref: { document: "core", section: "9.7.5.1" },
                    children: [Field({ name: "entry", type: "LabelStruct" })]
                })
            ]
        }),

        Cluster({
            name: "FixedLabel", id: 0x40, type: "Label", classification: "endpoint",

            details: "This cluster provides a feature for the device to tag an endpoint with zero or more read only " +
                "labels. Examples:" +
                "\n" +
                "  • A bridge can use this to indicate grouping of bridged devices. For example: All bridged devices " +
                "    whose endpoints have an entry in their LabelList \"room\":\"bedroom 2\" are in the same (bed)room." +
                "\n" +
                "  • A manufacturer can use this to identify a characteristic of an endpoint. For example to " +
                "    identify the endpoints of a luminaire, one pointing up, the other pointing down, one of the " +
                "    endpoints would have a LabelList entry \"orientation\":\"up\" while the other would have " +
                "    \"orientation\":\"down\". Using such indication, the user interface of a Node controlling this " +
                "    luminaire knows which of the endpoints is which of the lights." +
                "\n" +
                "Note that the TagList in the Descriptor cluster provides an alternative mechanism for such self- " +
                "description using standardized tags rather than manufacturer-selected strings, yielding a " +
                "standardized mechanism for features defined in the various namespaces. The second example above can " +
                "be implemented using semantic tags Direction.Upward and Direction.Downward instead of (or in " +
                "addition to) the Fixed Label cluster.",

            xref: { document: "core", section: "9.8" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "LabelList", id: 0x0, type: "list", access: "R V", conformance: "M", default: [],
                    quality: "N",
                    xref: { document: "core", section: "9.8.4" },
                    children: [Field({ name: "entry", type: "LabelStruct" })]
                })
            ]
        }),

        Cluster({
            name: "UserLabel", id: 0x41, type: "Label", classification: "endpoint",
            details: "This cluster provides a feature to tag an endpoint with zero or more labels.",
            xref: { document: "core", section: "9.9" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "LabelList", id: 0x0, type: "list", access: "RW VM", conformance: "M", constraint: "min 4",
                    default: [], quality: "N",
                    details: "An implementation shall support at least 4 list entries per node for all User Label cluster " +
                        "instances on the node.",
                    xref: { document: "core", section: "9.9.4.1" },
                    children: [Field({ name: "entry", type: "LabelStruct" })]
                })
            ]
        }),

        Cluster({
            name: "AccessControl", id: 0x1f, classification: "node",

            details: "The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL), which " +
                "codifies the rules used to manage and enforce Access Control for the Node’s endpoints and their " +
                "associated cluster instances. Access to this Access Control Cluster itself requires a special " +
                "Administer privilege level, such that only Nodes granted such privilege (hereafter termed " +
                "\"Administrators\") can manage the Access Control Cluster." +
                "\n" +
                "The Access Control Cluster shall be present on the root node endpoint of each Node, and shall NOT " +
                "be present on any other Endpoint of any Node.",

            xref: { document: "core", section: "9.10" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Attribute({
                    name: "Acl", id: 0x0, type: "list", access: "RW F A", conformance: "M", constraint: "desc",
                    xref: { document: "core", section: "9.10.5" },
                    children: [Field({ name: "entry", type: "AccessControlEntryStruct" })]
                }),
                Attribute({
                    name: "Extension", id: 0x1, type: "list", access: "RW F A", conformance: "O", constraint: "desc",
                    xref: { document: "core", section: "9.10.5" },
                    children: [Field({ name: "entry", type: "AccessControlExtensionStruct" })]
                }),

                Attribute({
                    name: "SubjectsPerAccessControlEntry", id: 0x2, type: "uint16", access: "R V", conformance: "M",
                    constraint: "min 4", default: 4, quality: "F",

                    details: "This attribute shall provide the minimum number of Subjects per entry that are supported by this " +
                        "server." +
                        "\n" +
                        "Since reducing this value over time may invalidate ACL entries already written, this value shall " +
                        "NOT decrease across time as software updates occur that could impact this value. If this is a " +
                        "concern for a given implementation, it is recommended to only use the minimum value required and " +
                        "avoid reporting a higher value than the required minimum.",

                    xref: { document: "core", section: "9.10.5.5" }
                }),

                Attribute({
                    name: "TargetsPerAccessControlEntry", id: 0x3, type: "uint16", access: "R V", conformance: "M",
                    constraint: "min 3", default: 3, quality: "F",

                    details: "This attribute shall provide the minimum number of Targets per entry that are supported by this " +
                        "server." +
                        "\n" +
                        "Since reducing this value over time may invalidate ACL entries already written, this value shall " +
                        "NOT decrease across time as software updates occur that could impact this value. If this is a " +
                        "concern for a given implementation, it is recommended to only use the minimum value required and " +
                        "avoid reporting a higher value than the required minimum." +
                        "\n" +
                        "### ‌9.10.5.7. AccessControlEntriesPerFabric Attribute" +
                        "\n" +
                        "This attribute shall provide the minimum number of ACL Entries per fabric that are supported by " +
                        "this server." +
                        "\n" +
                        "Since reducing this value over time may invalidate ACL entries already written, this value shall " +
                        "NOT decrease across time as software updates occur that could impact this value. If this is a " +
                        "concern for a given implementation, it is recommended to only use the minimum value required and " +
                        "avoid reporting a higher value than the required minimum.",

                    xref: { document: "core", section: "9.10.5.6" }
                }),

                Attribute({
                    name: "AccessControlEntriesPerFabric", id: 0x4, type: "uint16", access: "R V", conformance: "M",
                    constraint: "min 4", default: 4, quality: "F",
                    xref: { document: "core", section: "9.10.5" }
                }),

                Event({
                    name: "AccessControlEntryChanged", id: 0x0, access: "S A", conformance: "M", priority: "info",

                    details: "The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed " +
                        "by an Administrator." +
                        "\n" +
                        "  • Each added entry shall generate an event with ChangeType Added." +
                        "\n" +
                        "  • Each changed entry shall generate an event with ChangeType Changed." +
                        "\n" +
                        "  • Each removed entry shall generate an event with ChangeType Removed.",

                    xref: { document: "core", section: "9.10.7.1" },

                    children: [
                        Field({
                            name: "AdminNodeId", id: 0x1, type: "node-id", access: "S", conformance: "M", constraint: "desc",
                            quality: "X",
                            details: "The Node ID of the Administrator that made the change, if the change occurred via a CASE session." +
                                "\n" +
                                "Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change " +
                                "occurred via a CASE or PASE session; the other shall be null.",
                            xref: { document: "core", section: "9.10.7.1.1" }
                        }),

                        Field({
                            name: "AdminPasscodeId", id: 0x2, type: "uint16", access: "S", conformance: "M", constraint: "desc",
                            quality: "X",

                            details: "The Passcode ID of the Administrator that made the change, if the change occurred via a PASE " +
                                "session. Non-zero values are reserved for future use (see PasscodeId generation in " +
                                "PBKDFParamRequest)." +
                                "\n" +
                                "Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change " +
                                "occurred via a CASE or PASE session; the other shall be null.",

                            xref: { document: "core", section: "9.10.7.1.2" }
                        }),

                        Field({
                            name: "ChangeType", id: 0x3, type: "ChangeTypeEnum", access: "S", conformance: "M",
                            details: "The type of change as appropriate.",
                            xref: { document: "core", section: "9.10.7.1.3" }
                        }),
                        Field({
                            name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                            constraint: "1 to 254"
                        })
                    ]
                }),

                Event({
                    name: "AccessControlExtensionChanged", id: 0x1, access: "S A", conformance: "M", priority: "info",

                    details: "The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data " +
                        "is changed by an Administrator." +
                        "\n" +
                        "  • Each added extension shall generate an event with ChangeType Added." +
                        "\n" +
                        "  • Each changed extension shall generate an event with ChangeType Changed." +
                        "\n" +
                        "  • Each removed extension shall generate an event with ChangeType Removed." +
                        "\n" +
                        "The Node ID of the Administrator that made the change, if the change occurred via a CASE session." +
                        "\n" +
                        "Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change " +
                        "occurred via a CASE or PASE session; the other shall be null." +
                        "\n" +
                        "The Passcode ID of the Administrator that made the change, if the change occurred via a PASE " +
                        "session. Non-zero values are reserved for future use (see PasscodeId generation in " +
                        "PBKDFParamRequest)." +
                        "\n" +
                        "Exactly one of AdminNodeID and AdminPasscodeID shall be set, depending on whether the change " +
                        "occurred via a CASE or PASE session; the other shall be null." +
                        "\n" +
                        "The type of change as appropriate." +
                        "\n" +
                        "The latest value of the changed extension." +
                        "\n" +
                        "This field SHOULD be set if resources are adequate for it; otherwise it shall be set to NULL if " +
                        "resources are scarce.",

                    xref: { document: "core", section: "9.10.7.2" },

                    children: [
                        Field({
                            name: "AdminNodeId", id: 0x1, type: "node-id", access: "S", conformance: "M", constraint: "desc",
                            quality: "X"
                        }),
                        Field({
                            name: "AdminPasscodeId", id: 0x2, type: "uint16", access: "S", conformance: "M", constraint: "desc",
                            quality: "X"
                        }),
                        Field({
                            name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                            constraint: "1 to 254"
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "BridgedDeviceBasicInformation", id: 0x39, type: "BasicInformation",
            classification: "endpoint",

            details: "This Cluster serves two purposes towards a Node communicating with a Bridge:" +
                "\n" +
                "  • Indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged " +
                "    from a non-Matter technology, and" +
                "\n" +
                "  • Provide a centralized collection of attributes that the Node may collect to aid in conveying " +
                "    information regarding the Bridged Device to a user, such as the vendor name, the model name, or " +
                "    user-assigned name." +
                "\n" +
                "This cluster shall be exposed by a Bridge on the Endpoint representing each Bridged Device. When " +
                "the functionality of a Bridged Device is represented using a set of Endpoints, this cluster shall " +
                "only be exposed on the Endpoint which is at the top of the hierarchy for the functionality of that " +
                "Bridged Device." +
                "\n" +
                "This cluster shall NOT be used on an endpoint that is not in the Descriptor cluster PartsList of an " +
                "endpoint with an Aggregator device type." +
                "\n" +
                "This cluster has been derived from the Basic Information Cluster, and provides generic information " +
                "about the Bridged Device. Not all of the attributes in the Basic Information Cluster are relevant " +
                "for a Bridged Device (e.g. ProductID since it is not a Matter device). For other attributes, the " +
                "information which is listed as Mandatory for the Basic Information Cluster, may not be available " +
                "when the Bridged Device does not provide it to the Bridge, and the Bridge has no other means to " +
                "determine it. For such cases where the information for a particular attribute is not available, the " +
                "Bridge SHOULD NOT include the attribute in the cluster for this Bridged Device. See below for " +
                "Conformance details.",

            xref: { document: "core", section: "9.13" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
                Attribute({
                    name: "DataModelRevision", id: 0x0, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "VendorName", id: 0x1, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "VendorId", id: 0x2, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "ProductName", id: 0x3, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "ProductId", id: 0x4, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "NodeLabel", id: 0x5, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "Location", id: 0x6, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "HardwareVersion", id: 0x7, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "HardwareVersionString", id: 0x8, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "SoftwareVersion", id: 0x9, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "SoftwareVersionString", id: 0xa, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "ManufacturingDate", id: 0xb, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "PartNumber", id: 0xc, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "ProductUrl", id: 0xd, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "ProductLabel", id: 0xe, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "SerialNumber", id: 0xf, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "LocalConfigDisabled", id: 0x10, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "Reachable", id: 0x11, conformance: "M",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "UniqueId", id: 0x12, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "CapabilityMinima", id: 0x13, conformance: "X",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Attribute({
                    name: "ProductAppearance", id: 0x14, conformance: "O",
                    xref: { document: "core", section: "9.13.4" }
                }),
                Event({
                    name: "StartUp", id: 0x0, conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                }),
                Event({
                    name: "ShutDown", id: 0x1, conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                }),
                Event({
                    name: "Leave", id: 0x2, conformance: "O", priority: "critical",
                    xref: { document: "core", section: "9.13.5" }
                }),

                Event({
                    name: "ReachableChanged", id: 0x3, conformance: "M", priority: "critical",
                    details: "This event shall be generated when there is a change in the Reachable attribute. Its purpose is to " +
                        "provide an indication towards interested parties that the reachability of a bridged device (over " +
                        "the non-Matter network) has changed, so they may take appropriate action." +
                        "\n" +
                        "After (re)start of a bridge this event may be generated.",
                    xref: { document: "core", section: "9.13.5.1" }
                })
            ]
        }),

        Cluster({
            name: "Actions", id: 0x25, classification: "application",

            details: "This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to " +
                "expose" +
                "\n" +
                "  • Information about logical grouping of endpoints on the Node (example: lights in a room)" +
                "\n" +
                "  • Information about named actions that can be performed on such a group of endpoints (example: " +
                "    recall a scene for a group of lights by its name)" +
                "\n" +
                "  • Commands to trigger such actions" +
                "\n" +
                "  • Events to receive feedback on the state of such actions." +
                "\n" +
                "The information on grouping and available actions is typically provided by the user or Bridge " +
                "manufacturer via some means not defined in Matter, and therefore provided as read-only to Nodes. " +
                "For example: a manufacturer-provided app allows a user to set up logical grouping and create/assign " +
                "scene for such groups." +
                "\n" +
                "Using this cluster, a Node can learn about such logical grouping, provided actions, and trigger " +
                "such actions." +
                "\n" +
                "While the origin of this cluster stems from use cases with a Bridge, its server side may also be " +
                "implemented on any Node which can expose certain grouping, actions or automations to other users." +
                "\n" +
                "After defining the attributes, commands and events for this cluster, and the associated data types, " +
                "several examples are provided to illustrate the capabilities of this cluster." +
                "\n" +
                "Actions can be defined in a flexible manner to suit the needs of the various nodes implementing " +
                "this cluster. For each action, the commands available for that particular action are defined." +
                "\n" +
                "This cluster can be used to expose only the grouping of endpoints without any actions defined by " +
                "populating the EndpointList attribute accordingly and providing an empty list for ActionList." +
                "\n" +
                "The term 'action' in the description of this cluster should not be confused with the term 'action' " +
                "as used in the Interaction Model.",

            xref: { document: "core", section: "9.14" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "ActionList", id: 0x0, type: "list", access: "R V", conformance: "M", constraint: "max 256",
                    default: [],
                    details: "The ActionList attribute holds the list of actions. Each entry shall have an unique ActionID, and " +
                        "its EndpointListID shall exist in the EndpointLists attribute.",
                    xref: { document: "core", section: "9.14.5.1" },
                    children: [Field({ name: "entry", type: "ActionStruct" })]
                }),

                Attribute({
                    name: "EndpointLists", id: 0x1, type: "list", access: "R V", conformance: "M",
                    constraint: "max 256", default: [],
                    details: "The EndpointLists attribute holds the list of endpoint lists. Each entry shall have an unique " +
                        "EndpointListID.",
                    xref: { document: "core", section: "9.14.5.2" },
                    children: [Field({ name: "entry", type: "EndpointListStruct" })]
                }),

                Attribute({
                    name: "SetupUrl", id: 0x2, type: "string", access: "R V", conformance: "O", constraint: "max 512",
                    default: "",

                    details: "The SetupURL attribute (when provided) shall indicate a URL; its syntax shall follow the syntax as " +
                        "specified in RFC 3986, max. 512 ASCII characters. The location referenced by this URL shall provide " +
                        "additional information for the actions provided:" +
                        "\n" +
                        "  • When used without suffix, it shall provide information about the various actions which the " +
                        "    cluster provides." +
                        "\n" +
                        "    ◦ Example: SetupURL could take the value of example://Actions or https://domain.example/ " +
                        "      Matter/bridgev1/Actions for this generic case (access generic info how to use actions " +
                        "      provided by this cluster)." +
                        "\n" +
                        "  • When used with a suffix of \"/?a=\" and the decimal value of ActionID for one of the actions, it " +
                        "    may provide information about that particular action. This could be a deeplink to " +
                        "    manufacturer-app/website (associated somehow to the server node) with the " +
                        "    information/edit-screen for this action so that the user can view and update details of the " +
                        "    action, e.g. edit the scene, or change the wake-up experience time period." +
                        "\n" +
                        "    ◦ Example of SetupURL with suffix added: example://Actions/?a=12345 or " +
                        "      https://domain.example/Matter/bridgev1/Actions/?a=12345 for linking to specific info/editing " +
                        "      of the action with ActionID 0x3039.",

                    xref: { document: "core", section: "9.14.5.3" }
                }),

                Event({
                    name: "StateChanged", id: 0x0, access: "V", conformance: "M", priority: "info",
                    xref: { document: "core", section: "9.14.7" }
                }),
                Event({
                    name: "ActionFailed", id: 0x1, access: "V", conformance: "M", priority: "info",
                    xref: { document: "core", section: "9.14.7" }
                }),

                Command({
                    name: "InstantAction", id: 0x0, access: "O", conformance: "desc", direction: "request",
                    response: "status",
                    details: "This command triggers an action (state change) on the involved endpoints, in a \"fire and forget\" " +
                        "manner. Afterwards, the action’s state shall be Inactive." +
                        "\n" +
                        "Example: recall a scene on a number of lights.",
                    xref: { document: "core", section: "9.14.6.1" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
                    ]
                }),

                Command({
                    name: "InstantActionWithTransition", id: 0x1, access: "O", conformance: "desc",
                    direction: "request", response: "status",

                    details: "It is recommended that, where possible (e.g., it is not possible for attributes with Boolean data " +
                        "type), a gradual transition SHOULD take place from the old to the new state over this time period. " +
                        "However, the exact transition is manufacturer dependent." +
                        "\n" +
                        "This command triggers an action (state change) on the involved endpoints, with a specified time to " +
                        "transition from the current state to the new state. During the transition, the action’s state shall " +
                        "be Active. Afterwards, the action’s state shall be Inactive." +
                        "\n" +
                        "Example: recall a scene on a number of lights, with a specified transition time.",

                    xref: { document: "core", section: "9.14.6.2" },

                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
                        Field({
                            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                            details: "This field shall indicate the transition time in 1/10th of seconds.",
                            xref: { document: "core", section: "9.14.6.2.1" }
                        })
                    ]
                }),

                Command({
                    name: "StartAction", id: 0x2, access: "O", conformance: "desc", direction: "request",
                    response: "status",

                    details: "This command triggers the commencement of an action on the involved endpoints. Afterwards, the " +
                        "action’s state shall be Active." +
                        "\n" +
                        "Example: start a dynamic lighting pattern (such as gradually rotating the colors around the " +
                        "setpoints of the scene) on a set of lights." +
                        "\n" +
                        "Example: start a sequence of events such as a wake-up experience involving lights moving through " +
                        "several brightness/color combinations and the window covering gradually opening.",

                    xref: { document: "core", section: "9.14.6.3" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
                    ]
                }),

                Command({
                    name: "StartActionWithDuration", id: 0x3, access: "O", conformance: "desc", direction: "request",
                    response: "status",

                    details: "This command triggers the commencement of an action on the involved endpoints, and shall change the " +
                        "action’s state to Active. After the specified Duration, the action will stop, and the action’s " +
                        "state shall change to Inactive." +
                        "\n" +
                        "Example: start a dynamic lighting pattern (such as gradually rotating the colors around the " +
                        "setpoints of the scene) on a set of lights for 1 hour (Duration=3600).",

                    xref: { document: "core", section: "9.14.6.4" },

                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
                        Field({
                            name: "Duration", id: 0x2, type: "uint32", conformance: "M",
                            details: "This field shall indicate the requested duration in seconds.",
                            xref: { document: "core", section: "9.14.6.4.1" }
                        })
                    ]
                }),

                Command({
                    name: "StopAction", id: 0x4, access: "O", conformance: "desc", direction: "request",
                    response: "status",
                    details: "This command stops the ongoing action on the involved endpoints. Afterwards, the action’s state " +
                        "shall be Inactive." +
                        "\n" +
                        "Example: stop a dynamic lighting pattern which was previously started with StartAction.",
                    xref: { document: "core", section: "9.14.6.5" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
                    ]
                }),

                Command({
                    name: "PauseAction", id: 0x5, access: "O", conformance: "desc", direction: "request",
                    response: "status",
                    details: "This command pauses an ongoing action, and shall change the action’s state to Paused." +
                        "\n" +
                        "Example: pause a dynamic lighting effect (the lights stay at their current color) which was " +
                        "previously started with StartAction.",
                    xref: { document: "core", section: "9.14.6.6" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
                    ]
                }),

                Command({
                    name: "PauseActionWithDuration", id: 0x6, access: "O", conformance: "desc", direction: "request",
                    response: "status",

                    details: "This command pauses an ongoing action, and shall change the action’s state to Paused. After the " +
                        "specified Duration, the ongoing action will be automatically resumed. which shall change the " +
                        "action’s state to Active." +
                        "\n" +
                        "Example: pause a dynamic lighting effect (the lights stay at their current color) for 10 minutes " +
                        "(Duration=600)." +
                        "\n" +
                        "The difference between Pause/Resume and Disable/Enable is on the one hand semantic (the former is " +
                        "more of a transitionary nature while the latter is more permanent) and on the other hand these can " +
                        "be implemented slightly differently in the implementation of the action (e.g. a Pause would be " +
                        "automatically resumed after some hours or during a nightly reset, while an Disable would remain in " +
                        "effect until explicitly enabled again)." +
                        "\n" +
                        "This field shall indicate the requested duration in seconds.",

                    xref: { document: "core", section: "9.14.6.7" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
                        Field({ name: "Duration", id: 0x2, type: "uint32", conformance: "M" })
                    ]
                }),

                Command({
                    name: "ResumeAction", id: 0x7, access: "O", conformance: "desc", direction: "request",
                    response: "status",

                    details: "This command resumes a previously paused action, and shall change the action’s state to Active." +
                        "\n" +
                        "The difference between ResumeAction and StartAction is that ResumeAction will continue the action " +
                        "from the state where it was paused, while StartAction will start the action from the beginning." +
                        "\n" +
                        "Example: resume a dynamic lighting effect (the lights' colors will change gradually, continuing " +
                        "from the point they were paused).",

                    xref: { document: "core", section: "9.14.6.8" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
                    ]
                }),

                Command({
                    name: "EnableAction", id: 0x8, access: "O", conformance: "desc", direction: "request",
                    response: "status",
                    details: "This command enables a certain action or automation. Afterwards, the action’s state shall be Active." +
                        "\n" +
                        "Example: enable a motion sensor to control the lights in an area.",
                    xref: { document: "core", section: "9.14.6.9" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
                    ]
                }),

                Command({
                    name: "EnableActionWithDuration", id: 0x9, access: "O", conformance: "desc", direction: "request",
                    response: "status",

                    details: "This command enables a certain action or automation, and shall change the action’s state to be " +
                        "Active. After the specified Duration, the action or automation will stop, and the action’s state " +
                        "shall change to Disabled." +
                        "\n" +
                        "Example: enable a \"presence mimicking\" behavior for the lights in your home during a vacation; the " +
                        "Duration field is used to indicated the length of your absence from home. After that period, the " +
                        "presence mimicking behavior will no longer control these lights." +
                        "\n" +
                        "This field shall indicate the requested duration in seconds.",

                    xref: { document: "core", section: "9.14.6.10" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
                        Field({ name: "Duration", id: 0x2, type: "uint32", conformance: "M" })
                    ]
                }),

                Command({
                    name: "DisableAction", id: 0xa, access: "O", conformance: "desc", direction: "request",
                    response: "status",
                    details: "This command disables a certain action or automation, and shall change the action’s state to " +
                        "Inactive." +
                        "\n" +
                        "Example: disable a motion sensor to no longer control the lights in an area.",
                    xref: { document: "core", section: "9.14.6.11" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
                    ]
                }),

                Command({
                    name: "DisableActionWithDuration", id: 0xb, access: "O", conformance: "desc", direction: "request",
                    response: "status",

                    details: "This command disables a certain action or automation, and shall change the action’s state to " +
                        "Disabled. After the specified Duration, the action or automation will re-start, and the action’s " +
                        "state shall change to either Inactive or Active, depending on the actions (see examples 4 and 6)." +
                        "\n" +
                        "Example: disable a \"wakeup\" experience for a period of 1 week when going on holiday (to prevent " +
                        "them from turning on in the morning while you’re not at home). After this period, the wakeup " +
                        "experience will control the lights as before." +
                        "\n" +
                        "This field shall indicate the requested duration in seconds.",

                    xref: { document: "core", section: "9.14.6.12" },
                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
                        Field({ name: "Duration", id: 0x2, type: "uint32", conformance: "M" })
                    ]
                }),

                Datatype({
                    name: "Zone Value", type: "struct",

                    details: "Is a more general concept where an endpoint can be part of multiple zones, e.g. a light in the " +
                        "living room can be part of the \"reading corner\" zone (subset of the lights in the living room) but " +
                        "also part of the \"downstairs\" zone which contains all the lights on a floor, e.g. combining living " +
                        "room, kitchen and hallway. This indicates that a user has defined this list of endpoints as " +
                        "something they logically would like to control as a group, so Matter controllers could provide the " +
                        "user with a way to do as such." +
                        "\n" +
                        "### ‌9.14.4.6. ActionStruct Type" +
                        "\n" +
                        "This data type holds the details of a single action, and contains the data fields below.",

                    xref: { document: "core", section: "9.14.4.9" },

                    children: [
                        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32[128]" }),
                        Field({ name: "Type", id: 0x2, type: "ActionTypeEnum", conformance: "M" }),
                        Field({ name: "EndpointListId", id: 0x3, type: "uint16", conformance: "M" }),
                        Field({
                            name: "SupportedCommands", id: 0x4, type: "CommandBits", conformance: "M", constraint: "0 to 4095"
                        }),
                        Field({ name: "State", id: 0x5, type: "ActionStateEnum", conformance: "M" })
                    ]
                }),

                Datatype({
                    name: "State Field", type: "struct",

                    details: "This field shall indicate the current state of this action." +
                        "\n" +
                        "### ‌9.14.4.7. EndpointListStruct Type" +
                        "\n" +
                        "This data type holds the details of a single endpoint list, which relates to a set of endpoints " +
                        "that have some logical relation, and contains the data fields below." +
                        "\n" +
                        "This field shall provide an unique identifier used to identify the endpoint list." +
                        "\n" +
                        "This field shall indicate the name (as assigned by the user or automatically by the server) " +
                        "associated with the set of endpoints in this list. This can be used for identifying the action to " +
                        "the user by the client. Example: \"living room\"." +
                        "\n" +
                        "This field shall indicate the type of endpoint list, see EndpointListTypeEnum.",

                    xref: { document: "core", section: "9.14.4.15" },

                    children: [
                        Field({ name: "EndpointListId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 32[128]" }),
                        Field({ name: "Type", id: 0x2, type: "EndpointListTypeEnum", conformance: "M" }),
                        Field({
                            name: "Endpoints", id: 0x3, type: "list", conformance: "M", constraint: "max 256",
                            children: [Field({ name: "entry", type: "endpoint-no" })]
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "ProxyDiscovery", id: 0x43, classification: "node",
            details: "This cluster contains commands needed to do proxy discovery as defined in the Section 9.15.7.3, " +
                "“Step 2: Proxy Discovery” and Section 9.15.7.4, “Step 3: Proxy Response” steps of the overall " +
                "Section 9.15.7, “Proxy Discovery & Assignment Flow”.",
            xref: { document: "core", section: "9.15.12" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Command({
                    name: "ProxyDiscoverRequest", id: 0x0, access: "O", conformance: "M", direction: "request",
                    xref: { document: "core", section: "9.15.12.4" }
                }),
                Command({
                    name: "ProxyDiscoverResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "core", section: "9.15.12.4" }
                })
            ]
        }),

        Cluster({
            name: "ProxyConfiguration", id: 0x42, classification: "node",
            details: "This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.",
            xref: { document: "core", section: "9.15.13" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "ConfigurationList", id: 0x0, type: "list", access: "RW", conformance: "M", default: [],
                    quality: "N",
                    details: "List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.",
                    xref: { document: "core", section: "9.15.13.5.1" },
                    children: [Field({ name: "entry", type: "ConfigurationStruct" })]
                })
            ]
        }),

        Cluster({
            name: "ValidProxies", id: 0x44, classification: "node",
            details: "This cluster provides a means for a device to be told of the valid set of possible proxies that can " +
                "proxy subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.",
            xref: { document: "core", section: "9.15.14" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "ValidProxyList", id: 0x0, type: "list", access: "RW", conformance: "M", constraint: "nA",
                    default: [], quality: "N F",
                    xref: { document: "core", section: "9.15.14.5" },
                    children: [Field({ name: "entry", type: "ValidProxyStruct" })]
                }),

                Command({
                    name: "GetValidProxiesRequest", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "GetValidProxiesResponse",
                    xref: { document: "core", section: "9.15.14.6" }
                }),
                Command({
                    name: "GetValidProxiesResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "core", section: "9.15.14.6" }
                })
            ]
        }),

        Cluster({
            name: "IcdManagement", id: 0x46, classification: "node",
            details: "ICD Management Cluster enables configuration of the ICD’s behavior and ensuring that listed clients " +
                "can be notified when an intermittently connected device, ICD, is available for communication. The " +
                "cluster implements the requirements of the Check-In Protocol that enables the ICD Check- In " +
                "use-case. This feature is provisional.",
            xref: { document: "core", section: "9.17" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "9.17.4" },
                    children: [Field({
                        name: "CIP", constraint: "0", description: "CheckInProtocolSupport",
                        details: "Device supports attributes and commands for the Check-In Protocol support."
                    })]
                }),

                Attribute({
                    name: "IdleModeInterval", id: 0x0, type: "uint32", access: "R V", conformance: "M",
                    constraint: "1 to 64800", default: 1, quality: "F",
                    xref: { document: "core", section: "9.17.6" }
                }),
                Attribute({
                    name: "ActiveModeInterval", id: 0x1, type: "uint32", access: "R V", conformance: "M",
                    constraint: "min 300", default: 300, quality: "F",
                    xref: { document: "core", section: "9.17.6" }
                }),
                Attribute({
                    name: "ActiveModeThreshold", id: 0x2, type: "uint16", access: "R V", conformance: "M",
                    constraint: "min 300", default: 300, quality: "F",
                    xref: { document: "core", section: "9.17.6" }
                }),

                Attribute({
                    name: "RegisteredClients", id: 0x3, type: "list", access: "R F A", conformance: "CIP",
                    constraint: "desc", default: [], quality: "N",
                    xref: { document: "core", section: "9.17.6" },
                    children: [Field({ name: "entry", type: "MonitoringRegistrationStruct" })]
                }),

                Attribute({
                    name: "IcdCounter", id: 0x4, type: "uint32", access: "R A", conformance: "CIP", default: 0,
                    quality: "N C",

                    details: "This attribute returns the value of the ICD Counter." +
                        "\n" +
                        "### ‌9.17.6.6. ClientsSupportedPerFabric Attribute" +
                        "\n" +
                        "This Field shall indicate the maximum number of entries that the server is able to store for each " +
                        "fabric in the RegisteredClients attribute.",

                    xref: { document: "core", section: "9.17.6.5" }
                }),

                Attribute({
                    name: "ClientsSupportedPerFabric", id: 0x5, type: "uint16", access: "R V", conformance: "CIP",
                    constraint: "min 1", default: 1, quality: "F",
                    xref: { document: "core", section: "9.17.6" }
                }),
                Command({
                    name: "RegisterClient", id: 0x0, access: "F M", conformance: "CIP", direction: "request",
                    response: "RegisterClientResponse",
                    xref: { document: "core", section: "9.17.7" }
                }),

                Command({
                    name: "RegisterClientResponse", id: 0x1, access: "M", conformance: "CIP", direction: "request",
                    details: "This command shall be sent by the ICD Management Cluster server in response to a successful " +
                        "RegisterClient command.",
                    xref: { document: "core", section: "9.17.7.2" },
                    children: [Field({ name: "IcdCounter", id: 0x0, type: "uint32", conformance: "M" })]
                }),

                Command({
                    name: "UnregisterClient", id: 0x2, access: "F M", conformance: "CIP", direction: "request",
                    response: "status",

                    details: "This command allows a client to unregister itself with the ICD. Example: a client that is leaving " +
                        "the" +
                        "\n" +
                        "network (e.g. running on a phone which is leaving the home) can (and should) remove its " +
                        "subscriptions and send this UnregisterClient command before leaving to prevent the burden on the " +
                        "ICD of an absent client.",

                    xref: { document: "core", section: "9.17.7.3" },

                    children: [
                        Field({
                            name: "CheckInNodeId", id: 0x0, type: "node-id", conformance: "M",
                            details: "This field shall provide the registered client node ID to remove from storage.",
                            xref: { document: "core", section: "9.17.7.3.1" }
                        }),

                        Field({
                            name: "VerificationKey", id: 0x1, type: "octstr", conformance: "O", constraint: "16",

                            details: "This field shall provide the verification key associated with the CheckInNodeID to remove from " +
                                "storage. The verification key represents the key already stored on the server. The verification key " +
                                "shall be optional for clients with administrator permissions for the server cluster but shall be " +
                                "mandatory for clients with manage permissions. The verification key provided in this field shall be " +
                                "used by the server to guarantee that a client with manage permissions can only remove entries that " +
                                "contain a Key equal to the stored key.",

                            xref: { document: "core", section: "9.17.7.3.2" }
                        })
                    ]
                }),

                Command({
                    name: "StayActiveRequest", id: 0x3, access: "O", conformance: "O", direction: "request",
                    response: "status",
                    details: "This command allows a client to request that the server stays in active mode for one " +
                        "ActiveModeThreshold.",
                    xref: { document: "core", section: "9.17.7.4" }
                })
            ]
        }),

        Cluster({
            name: "BasicInformation", id: 0x28, classification: "node",
            details: "This cluster provides attributes and events for determining basic information about Nodes, which " +
                "supports both Commissioning and operational determination of Node characteristics, such as Vendor " +
                "ID, Product ID and serial number, which apply to the whole Node.",
            xref: { document: "core", section: "11.1" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

                Attribute({
                    name: "DataModelRevision", id: 0x0, type: "uint16", access: "R V", conformance: "M", quality: "F",

                    details: "This attribute shall be set to the revision number of the Data Model against which the Node is " +
                        "certified." +
                        "\n" +
                        "### ‌11.1.5.2. VendorName Attribute" +
                        "\n" +
                        "This attribute shall specify a human readable (displayable) name of the vendor for the Node." +
                        "\n" +
                        "### ‌11.1.5.3. VendorID Attribute" +
                        "\n" +
                        "This attribute shall specify the Vendor ID." +
                        "\n" +
                        "### ‌11.1.5.4. ProductName Attribute" +
                        "\n" +
                        "This attribute shall specify a human readable (displayable) name of the model for the Node such" +
                        "\n" +
                        "as the model number (or other identifier) assigned by the vendor." +
                        "\n" +
                        "### ‌11.1.5.5. ProductID Attribute" +
                        "\n" +
                        "This attribute shall specify the Product ID assigned by the vendor that is unique to the specific " +
                        "product of the Node.",

                    xref: { document: "core", section: "11.1.5.1" }
                }),

                Attribute({
                    name: "VendorName", id: 0x1, type: "string", access: "R V", conformance: "M", constraint: "max 32",
                    quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),
                Attribute({
                    name: "VendorId", id: 0x2, type: "vendor-id", access: "R V", conformance: "M", quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),
                Attribute({
                    name: "ProductName", id: 0x3, type: "string", access: "R V", conformance: "M", constraint: "max 32",
                    quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),
                Attribute({
                    name: "ProductId", id: 0x4, type: "uint16", access: "R V", conformance: "M", quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),

                Attribute({
                    name: "NodeLabel", id: 0x5, type: "string", access: "RW VM", conformance: "M", constraint: "max 32",
                    default: "", quality: "N",

                    details: "This attribute shall represent a user defined name for the Node. This attribute SHOULD be set " +
                        "during initial commissioning and may be updated by further reconfigurations." +
                        "\n" +
                        "### ‌11.1.5.7. Location Attribute" +
                        "\n" +
                        "This attribute shall be an ISO 3166-1 alpha-2 code to represent the country, dependent territory, " +
                        "or special area of geographic interest in which the Node is located at the time of the attribute " +
                        "being set. This attribute shall be set during initial commissioning (unless already set) and may be " +
                        "updated by further reconfigurations. This attribute may affect some regulatory aspects of the " +
                        "Node’s operation, such as radio transmission power levels in given spectrum allocation bands if " +
                        "technologies where this is applicable are used. The Location’s region code shall be interpreted in " +
                        "a case-insensitive manner. If the Node cannot understand the location code with which it was " +
                        "configured, or the location code has not yet been configured, it shall configure itself in a " +
                        "region- agnostic manner as determined by the vendor, avoiding region-specific assumptions as much " +
                        "as is practical. The special value XX shall indicate that region-agnostic mode is used." +
                        "\n" +
                        "### ‌11.1.5.8. HardwareVersion Attribute" +
                        "\n" +
                        "This attribute shall specify the version number of the hardware of the Node. The meaning of its " +
                        "value, and the versioning scheme, are vendor defined.",

                    xref: { document: "core", section: "11.1.5.6" }
                }),

                Attribute({
                    name: "Location", id: 0x6, type: "string", access: "RW VA", conformance: "M", constraint: "2",
                    default: "XX", quality: "N",
                    xref: { document: "core", section: "11.1.5" }
                }),
                Attribute({
                    name: "HardwareVersion", id: 0x7, type: "uint16", access: "R V", conformance: "M", default: 0,
                    quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),

                Attribute({
                    name: "HardwareVersionString", id: 0x8, type: "string", access: "R V", conformance: "M",
                    constraint: "1 to 64", quality: "F",

                    details: "This attribute shall specify the version number of the hardware of the Node. The meaning of its " +
                        "value, and the versioning scheme, are vendor defined. The HardwareVersionString attribute shall be " +
                        "used to provide a more user-friendly value than that represented by the HardwareVersion attribute." +
                        "\n" +
                        "### ‌11.1.5.10. SoftwareVersion Attribute" +
                        "\n" +
                        "This attribute shall contain the current version number for the software running on this Node. The " +
                        "version number can be compared using a total ordering to determine if a version is logically newer " +
                        "than another one. A larger value of SoftwareVersion is newer than a lower value, from the " +
                        "perspective of software updates (see Section 11.19.3.3, “Availability of Software Images”). Nodes " +
                        "may query this field to determine the currently running version of software on another given Node." +
                        "\n" +
                        "### ‌11.1.5.11. SoftwareVersionString Attribute" +
                        "\n" +
                        "This attribute shall contain a current human-readable representation for the software running on " +
                        "the Node. This version information may be conveyed to users. The maximum length of the Soft" +
                        "\n" +
                        "wareVersionString attribute is 64 bytes of UTF-8 characters. The contents SHOULD only use simple " +
                        "7-bit ASCII alphanumeric and punctuation characters, so as to simplify the conveyance of the value " +
                        "to a variety of cultures." +
                        "\n" +
                        "Examples of version strings include \"1.0\", \"1.2.3456\", \"1.2-2\", \"1.0b123\", \"1.2_3\".",

                    xref: { document: "core", section: "11.1.5.9" }
                }),

                Attribute({
                    name: "SoftwareVersion", id: 0x9, type: "uint32", access: "R V", conformance: "M",
                    constraint: "desc", default: 0, quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),
                Attribute({
                    name: "SoftwareVersionString", id: 0xa, type: "string", access: "R V", conformance: "M",
                    constraint: "1 to 64", quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),

                Attribute({
                    name: "ManufacturingDate", id: 0xb, type: "string", access: "R V", conformance: "O",
                    constraint: "8 to 16", quality: "F",

                    details: "This attribute shall specify the date that the Node was manufactured. The first 8 characters shall " +
                        "specify the date of manufacture of the Node in international date notation according to ISO 8601, " +
                        "i.e., YYYYMMDD, e.g., 20060814. The final 8 characters may include country, factory, line, shift or " +
                        "other related information at the option of the vendor. The format of this information is vendor " +
                        "defined." +
                        "\n" +
                        "### ‌11.1.5.13. PartNumber Attribute" +
                        "\n" +
                        "This attribute shall specify a human-readable (displayable) vendor assigned part number for the " +
                        "Node whose meaning and numbering scheme is vendor defined." +
                        "\n" +
                        "Multiple products (and hence PartNumbers) can share a ProductID. For instance, there may be " +
                        "different packaging (with different PartNumbers) for different regions; also different colors of a " +
                        "product might share the ProductID but may have a different PartNumber." +
                        "\n" +
                        "### ‌11.1.5.14. ProductURL Attribute" +
                        "\n" +
                        "This attribute shall specify a link to a product specific web page. The syntax of the ProductURL " +
                        "attribute shall follow the syntax as specified in RFC 3986 [https://tools.ietf.org/html/rfc3986]. " +
                        "The specified URL SHOULD resolve to a maintained web page available for the lifetime of the " +
                        "product. The maximum length of the ProductUrl attribute is 256 ASCII characters." +
                        "\n" +
                        "### ‌11.1.5.15. ProductLabel Attribute" +
                        "\n" +
                        "This attribute shall specify a vendor specific human readable (displayable) product label. The " +
                        "ProductLabel attribute may be used to provide a more user-friendly value than that represented by " +
                        "the ProductName attribute. The ProductLabel attribute SHOULD NOT include the name of the vendor as " +
                        "defined within the VendorName attribute.",

                    xref: { document: "core", section: "11.1.5.12" }
                }),

                Attribute({
                    name: "PartNumber", id: 0xc, type: "string", access: "R V", conformance: "O", constraint: "max 32",
                    quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),
                Attribute({
                    name: "ProductUrl", id: 0xd, type: "string", access: "R V", conformance: "O", constraint: "max 256",
                    quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),
                Attribute({
                    name: "ProductLabel", id: 0xe, type: "string", access: "R V", conformance: "O",
                    constraint: "max 64", quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),

                Attribute({
                    name: "SerialNumber", id: 0xf, type: "string", access: "R V", conformance: "O",
                    constraint: "max 32", quality: "F",

                    details: "This attributes shall specify a human readable (displayable) serial number." +
                        "\n" +
                        "### ‌11.1.5.17. LocalConfigDisabled Attribute" +
                        "\n" +
                        "This attribute shall allow a local Node configuration to be disabled. When this attribute is set to " +
                        "True the Node shall disable the ability to configure the Node through an on-Node user interface. " +
                        "The value of the LocalConfigDisabled attribute shall NOT in any way modify, disable, or otherwise " +
                        "affect the user’s ability to trigger a factory reset on the Node." +
                        "\n" +
                        "### ‌11.1.5.18. Reachable Attribute" +
                        "\n" +
                        "This attribute (when used) shall indicate whether the Node can be reached. For a native Node this" +
                        "\n" +
                        "is implicitly True (and its use is optional)." +
                        "\n" +
                        "Its main use case is in the derived Bridged Device Basic Information cluster where it is used to " +
                        "indicate whether the bridged device is reachable by the bridge over the non-native network.",

                    xref: { document: "core", section: "11.1.5.16" }
                }),

                Attribute({
                    name: "LocalConfigDisabled", id: 0x10, type: "bool", access: "RW VM", conformance: "O",
                    default: true, quality: "N",
                    xref: { document: "core", section: "11.1.5" }
                }),
                Attribute({
                    name: "Reachable", id: 0x11, type: "bool", access: "R V", conformance: "O", default: true,
                    xref: { document: "core", section: "11.1.5" }
                }),

                Attribute({
                    name: "UniqueId", id: 0x12, type: "string", access: "R V", conformance: "O", constraint: "max 32",
                    quality: "F",

                    details: "This attribute (when used) shall indicate a unique identifier for the device, which is constructed " +
                        "in a manufacturer specific manner." +
                        "\n" +
                        "It may be constructed using a permanent device identifier (such as device MAC address) as basis. In " +
                        "order to prevent tracking," +
                        "\n" +
                        "  • it SHOULD NOT be identical to (or easily derived from) such permanent device identifier" +
                        "\n" +
                        "  • it SHOULD be updated when the device is factory reset" +
                        "\n" +
                        "  • it shall not be identical to the SerialNumber attribute" +
                        "\n" +
                        "  • it shall not be printed on the product or delivered with the product The value does not need to " +
                        "    be human readable." +
                        "\n" +
                        "### ‌11.1.5.20. CapabilityMinima Attribute" +
                        "\n" +
                        "This attribute shall provide the minimum guaranteed value for some system-wide resource " +
                        "capabilities that are not otherwise cluster-specific and do not appear elsewhere. This attribute " +
                        "may be used by clients to optimize communication with Nodes by allowing them to use more than the " +
                        "strict minimum values required by this specification, wherever available." +
                        "\n" +
                        "The values supported by the server in reality may be larger than the values provided in this " +
                        "attribute, such as if a server is not resource-constrained at all. However, clients SHOULD only " +
                        "rely on the amounts provided in this attribute." +
                        "\n" +
                        "Note that since the fixed values within this attribute may change over time, both increasing and " +
                        "decreasing, as software versions change for a given Node, clients SHOULD take care not to assume " +
                        "forever unchanging values and SHOULD NOT cache this value permanently at Commissioning time.",

                    xref: { document: "core", section: "11.1.5.19" }
                }),

                Attribute({
                    name: "CapabilityMinima", id: 0x13, type: "CapabilityMinimaStruct", access: "R V", conformance: "M",
                    quality: "F",
                    xref: { document: "core", section: "11.1.5" }
                }),

                Attribute({
                    name: "ProductAppearance", id: 0x14, type: "ProductAppearanceStruct", access: "R V",
                    conformance: "O", quality: "F",
                    details: "This attribute shall provide information about the appearance of the product, which could be useful " +
                        "to a user trying to locate or identify the node.",
                    xref: { document: "core", section: "11.1.5.21" }
                }),

                Event({
                    name: "StartUp", id: 0x0, access: "V", conformance: "M", priority: "critical",
                    details: "The StartUp event shall be generated by a Node as soon as reasonable after completing a boot or " +
                        "reboot process. The StartUp event SHOULD be the first Data Model event recorded by the Node after " +
                        "it completes a boot or reboot process.",
                    xref: { document: "core", section: "11.1.6.1" },
                    children: [Field({
                        name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M",
                        details: "This field shall be set to the same value as the one available in the SoftwareVersion attribute.",
                        xref: { document: "core", section: "11.1.6.1.1" }
                    })]
                }),

                Event({
                    name: "ShutDown", id: 0x1, access: "V", conformance: "O", priority: "critical",
                    details: "The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a " +
                        "best-effort basis. When a ShutDown event is generated, it SHOULD be the last Data Model event " +
                        "recorded by the Node. This event SHOULD be delivered urgently to current subscribers on a best- " +
                        "effort basis. Any subsequent incoming interactions to the Node may be dropped until the completion " +
                        "of a future boot or reboot process.",
                    xref: { document: "core", section: "11.1.6.2" }
                }),

                Event({
                    name: "Leave", id: 0x2, access: "V", conformance: "O", priority: "info",

                    details: "The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as " +
                        "when the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some " +
                        "other manufacturer specific action to disable or reset the operational data in the Node. When a " +
                        "Leave event is generated, it SHOULD be assumed that the fabric recorded in the event is no longer " +
                        "usable, and subsequent interactions targeting that fabric will most likely fail." +
                        "\n" +
                        "Upon receipt of Leave Event on a subscription, the receiving Node may update other nodes in the " +
                        "fabric by removing related bindings, access control list entries and other data referencing the " +
                        "leaving Node.",

                    xref: { document: "core", section: "11.1.6.3" },
                    children: [Field({
                        name: "FabricIndex", id: 0x0, type: "fabric-idx", conformance: "M", constraint: "1 to 254",
                        details: "This field shall contain the local Fabric Index of the fabric which the node is about to leave.",
                        xref: { document: "core", section: "11.1.6.3.1" }
                    })]
                }),

                Event({
                    name: "ReachableChanged", id: 0x3, access: "V", conformance: "desc", priority: "info",
                    details: "This event shall be supported if and only if the Reachable attribute is supported." +
                        "\n" +
                        "This event (when supported) shall be generated when there is a change in the Reachable attribute." +
                        "\n" +
                        "Its main use case is in the derived Bridged Device Basic Information cluster.",
                    xref: { document: "core", section: "11.1.6.4" },
                    children: [Field({
                        name: "ReachableNewValue", id: 0x0, type: "bool", conformance: "M",
                        details: "This field shall indicate the value of the Reachable attribute after it was changed.",
                        xref: { document: "core", section: "11.1.6.4.1" }
                    })]
                }),

                Datatype({
                    name: "PrimaryColor Field", type: "struct",

                    details: "This field indicates the representative color of the visible parts of the product. If the product " +
                        "has no representative color, the field shall be null." +
                        "\n" +
                        "### ‌11.1.4.4. CapabilityMinimaStruct Type" +
                        "\n" +
                        "This structure provides constant values related to overall global capabilities of this Node, that " +
                        "are not cluster-specific.",

                    xref: { document: "core", section: "11.1.4.2" },

                    children: [
                        Field({
                            name: "CaseSessionsPerFabric", id: 0x0, type: "uint16", conformance: "M", constraint: "min 3",
                            default: 3
                        }),
                        Field({
                            name: "SubscriptionsPerFabric", id: 0x1, type: "uint16", conformance: "M", constraint: "min 3",
                            default: 3
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "GroupKeyManagement", id: 0x3f, classification: "node",

            details: "The Group Key Management cluster manages group keys for the node. The cluster is scoped to the node " +
                "and is a singleton for the node. This cluster maintains a list of groups supported by the node. " +
                "Each group list entry supports a single group, with a single group ID and single group key. " +
                "Duplicate groups are not allowed in the list. Additions or removal of a group entry are performed " +
                "via modifications of the list. Such modifications require Administer privilege." +
                "\n" +
                "Each group entry includes a membership list of zero of more endpoints that are members of the group " +
                "on the node. Modification of this membership list is done via the Groups cluster, which is scoped " +
                "to an endpoint. Please see the System Model specification for more information on groups.",

            xref: { document: "core", section: "11.2" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.2.4" },
                    children: [Field({
                        name: "CS", constraint: "0", description: "CacheAndSync",
                        details: "The ability to support CacheAndSync security policy and MCSP."
                    })]
                }),

                Attribute({
                    name: "GroupKeyMap", id: 0x0, type: "list", access: "RW F VM", conformance: "M", constraint: "desc",
                    default: [], quality: "N",
                    xref: { document: "core", section: "11.2.6" },
                    children: [Field({ name: "entry", type: "GroupKeyMapStruct" })]
                }),

                Attribute({
                    name: "GroupTable", id: 0x1, type: "list", access: "R F", conformance: "M", constraint: "desc",
                    default: [],
                    xref: { document: "core", section: "11.2.6" },
                    children: [Field({ name: "entry", type: "GroupInfoMapStruct" })]
                }),

                Attribute({
                    name: "MaxGroupsPerFabric", id: 0x2, type: "uint16", conformance: "M", default: 0, quality: "F",
                    details: "This attribute shall indicate the maximum number of groups that this node supports per fabric. The " +
                        "value of this attribute shall be set to be no less than the required minimum supported groups as " +
                        "specified in Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT " +
                        "exceed the value of the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.",
                    xref: { document: "core", section: "11.2.6.3" }
                }),

                Attribute({
                    name: "MaxGroupKeysPerFabric", id: 0x3, type: "uint16", conformance: "M", constraint: "1 to 65535",
                    default: 1, quality: "F",
                    details: "This attribute shall indicate the maximum number of group key sets this node supports per fabric. " +
                        "The value of this attribute shall be set according to the minimum number of group key sets to " +
                        "support as specified in Group Limits.",
                    xref: { document: "core", section: "11.2.6.4" }
                }),

                Command({
                    name: "KeySetWrite", id: 0x0, access: "F A", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.2.7" }
                }),
                Command({
                    name: "KeySetRead", id: 0x1, access: "F A", conformance: "M", direction: "request",
                    response: "KeySetReadResponse",
                    xref: { document: "core", section: "11.2.7" }
                }),
                Command({
                    name: "KeySetReadResponse", id: 0x2, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.2.7" }
                }),
                Command({
                    name: "KeySetRemove", id: 0x3, access: "F A", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.2.7" }
                }),
                Command({
                    name: "KeySetReadAllIndices", id: 0x4, access: "F A", conformance: "M", direction: "request",
                    response: "KeySetReadAllIndicesResponse",
                    xref: { document: "core", section: "11.2.7" }
                }),
                Command({
                    name: "KeySetReadAllIndicesResponse", id: 0x5, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.2.7" }
                }),

                Datatype({
                    name: "AllNodes Value", type: "struct",
                    details: "The 16-bit Group Identifier of the Multicast Address shall be 0xFFFF." +
                        "\n" +
                        "### ‌11.2.5.3. GroupKeyMapStruct Type",
                    xref: { document: "core", section: "11.2.5.2" },

                    children: [
                        Field({ name: "GroupId", id: 0x1, type: "group-id", access: "F", conformance: "M" }),
                        Field({
                            name: "GroupKeySetId", id: 0x2, type: "uint16", access: "F", conformance: "M",
                            constraint: "1 to 65535"
                        }),
                        Field({
                            name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                            constraint: "1 to 254"
                        })
                    ]
                }),

                Datatype({
                    name: "GroupKeySetID Field", type: "struct",

                    details: "This field references the set of group keys that generate operational group keys for use with this " +
                        "group, as specified in Section 4.15.3.5.1, “Group Key Set ID”." +
                        "\n" +
                        "A GroupKeyMapStruct shall NOT accept GroupKeySetID of 0, which is reserved for the IPK." +
                        "\n" +
                        "### ‌11.2.5.4. GroupKeySetStruct Type" +
                        "\n" +
                        "This field shall provide the fabric-unique index for the associated group key set, as specified in " +
                        "Section 4.15.3.5.1, “Group Key Set ID”." +
                        "\n" +
                        "### ‌GroupKeySecurityPolicy Field" +
                        "\n" +
                        "This field shall provide the security policy for an operational group key set." +
                        "\n" +
                        "When CacheAndSync is not supported in the FeatureMap of this cluster, any action attempting to set " +
                        "CacheAndSync in the GroupKeySecurityPolicy field shall fail with an INVALID_COMMAND error.",

                    xref: { document: "core", section: "11.2.5.4" },

                    children: [
                        Field({ name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({
                            name: "GroupKeySecurityPolicy", id: 0x1, type: "GroupKeySecurityPolicyEnum", access: "S",
                            conformance: "M"
                        }),
                        Field({
                            name: "EpochKey0", id: 0x2, type: "octstr", access: "S", conformance: "M", constraint: "16",
                            quality: "X"
                        }),
                        Field({
                            name: "EpochStartTime0", id: 0x3, type: "epoch-us", access: "S", conformance: "M", quality: "X"
                        }),
                        Field({
                            name: "EpochKey1", id: 0x4, type: "octstr", access: "S", conformance: "M", constraint: "16",
                            quality: "X"
                        }),
                        Field({
                            name: "EpochStartTime1", id: 0x5, type: "epoch-us", access: "S", conformance: "M", quality: "X"
                        }),
                        Field({
                            name: "EpochKey2", id: 0x6, type: "octstr", access: "S", conformance: "M", constraint: "16",
                            quality: "X"
                        }),
                        Field({
                            name: "EpochStartTime2", id: 0x7, type: "epoch-us", access: "S", conformance: "M", quality: "X"
                        }),
                        Field({
                            name: "GroupKeyMulticastPolicy", id: 0x8, type: "GroupKeyMulticastPolicyEnum", access: "S",
                            conformance: "P, M"
                        })
                    ]
                }),

                Datatype({
                    name: "EpochStartTime2 Field", type: "struct",

                    details: "This field, if not null, shall define when EpochKey2 becomes valid as specified by Section 4.15.3, " +
                        "“Epoch Keys”. Units are absolute UTC time in microseconds encoded using the epoch-us representation." +
                        "\n" +
                        "### ‌GroupKeyMulticastPolicy Field" +
                        "\n" +
                        "This field specifies how the IPv6 Multicast Address shall be formed for groups using this " +
                        "operational group key set." +
                        "\n" +
                        "The PerGroupID method maximizes filtering of multicast messages, so that receiving nodes receive " +
                        "only multicast messages for groups to which they are subscribed." +
                        "\n" +
                        "The AllNodes method minimizes the number of multicast addresses to which a receiver node needs to " +
                        "subscribe." +
                        "\n" +
                        "NOTE" +
                        "\n" +
                        "Support for GroupKeyMulticastPolicy is provisional. Correct default behavior is that implied by " +
                        "value PerGroupID." +
                        "\n" +
                        "### ‌11.2.5.5. GroupInfoMapStruct Type" +
                        "\n" +
                        "This field uniquely identifies the group within the scope of the given Fabric.",

                    xref: { document: "core", section: "11.2.5.10" },

                    children: [
                        Field({ name: "GroupId", id: 0x1, type: "group-id", access: "R F", conformance: "M" }),
                        Field({
                            name: "Endpoints", id: 0x2, type: "list", access: "R F", conformance: "M", constraint: "min 1",
                            children: [Field({ name: "entry", type: "endpoint-no" })]
                        }),
                        Field({
                            name: "GroupName", id: 0x3, type: "string", access: "R F", conformance: "O", constraint: "max 16"
                        }),
                        Field({
                            name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                            constraint: "1 to 254"
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "LocalizationConfiguration", id: 0x2b, classification: "node",

            details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
                "may have differing common languages, units of measurements, and numerical formatting standards. As " +
                "such, Nodes that visually or audibly convey information need a mechanism by which they can be " +
                "configured to use a user’s preferred language, units, etc." +
                "\n" +
                "This cluster supports an interface to a Node. It provides attributes for determining and " +
                "configuring localization information that a Node shall utilize when conveying values to a user.",

            xref: { document: "core", section: "11.3" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Attribute({
                    name: "ActiveLocale", id: 0x0, type: "string", access: "RW VM", conformance: "M",
                    constraint: "max 35", quality: "N",
                    xref: { document: "core", section: "11.3.4" }
                }),

                Attribute({
                    name: "SupportedLocales", id: 0x1, type: "list", access: "R V", conformance: "M",
                    constraint: "max 32[max 35]", quality: "F",
                    details: "The SupportedLocales attribute shall represent a list of locale strings that are valid values for " +
                        "the ActiveLocale attribute. The list shall NOT contain any duplicate entries. The ordering of items " +
                        "within the list SHOULD NOT express any meaning.",
                    xref: { document: "core", section: "11.3.4.2" },
                    children: [Field({ name: "entry", type: "string" })]
                })
            ]
        }),

        Cluster({
            name: "TimeFormatLocalization", id: 0x2c, classification: "node",

            details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
                "may have differing preferences for how dates and times are conveyed. As such, Nodes that visually " +
                "or audibly convey time information need a mechanism by which they can be configured to use a user’s " +
                "preferred format." +
                "\n" +
                "This cluster supports an interface to a Node. It provides attributes for determining and " +
                "configuring time and date formatting information that a Node shall utilize when conveying values to " +
                "a user.",

            xref: { document: "core", section: "11.4" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.4.4" },
                    children: [Field({
                        name: "CALFMT", constraint: "0", description: "CalendarFormat",
                        details: "The Node can be configured to use different calendar formats when conveying values to a user."
                    })]
                }),

                Attribute({
                    name: "HourFormat", id: 0x0, type: "HourFormatEnum", access: "RW VM", conformance: "M",
                    default: "null", quality: "X N",

                    details: "This attribute shall represent the format that the Node is currently configured to use when " +
                        "conveying the hour unit of time." +
                        "\n" +
                        "If not null, this value shall take priority over any unit implied through the ActiveLocale " +
                        "attribute. If null, any unit implied through the ActiveLocale attribute is used as the hour format, " +
                        "and if ActiveLocale is not present, the hour format is unknown.",

                    xref: { document: "core", section: "11.4.6.1" }
                }),

                Attribute({
                    name: "ActiveCalendarType", id: 0x1, type: "CalendarTypeEnum", access: "RW VM",
                    conformance: "CALFMT", default: "null", quality: "X N",

                    details: "This attribute shall represent the calendar format that the Node is currently configured to use " +
                        "when conveying dates." +
                        "\n" +
                        "If not null, this value shall take priority over any unit implied through the ActiveLocale " +
                        "attribute. If null, any unit implied through the ActiveLocale attribute is used as the calendar " +
                        "type, and if ActiveLocale is not present, the calendar type is unknown.",

                    xref: { document: "core", section: "11.4.6.2" }
                }),

                Attribute({
                    name: "SupportedCalendarTypes", id: 0x2, type: "list", access: "R V", conformance: "CALFMT",
                    constraint: "desc", quality: "F",
                    details: "This attribute shall represent a list of CalendarTypeEnum values that are supported by the Node. " +
                        "The list shall NOT contain any duplicate entries. The ordering of items within the list SHOULD NOT " +
                        "express any meaning. The maximum length of the SupportedCalendarTypes list shall be equivalent to " +
                        "the number of enumerations within CalendarTypeEnum.",
                    xref: { document: "core", section: "11.4.6.3" },
                    children: [Field({ name: "entry", type: "CalendarTypeEnum" })]
                })
            ]
        }),

        Cluster({
            name: "UnitLocalization", id: 0x2d, classification: "node",

            details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
                "may have differing preferences for the units in which values are conveyed in communication to a " +
                "user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism " +
                "by which they can be configured to use a user’s preferred unit." +
                "\n" +
                "This cluster supports an interface to a Node. It provides attributes for determining and " +
                "configuring the units that a Node shall utilize when conveying values in communication to a user.",

            xref: { document: "core", section: "11.5" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.5.4" },
                    children: [Field({
                        name: "TEMP", constraint: "0", description: "TemperatureUnit",
                        details: "The Node can be configured to use different units of temperature when conveying values to a user."
                    })]
                }),

                Attribute({
                    name: "TemperatureUnit", id: 0x0, type: "TempUnitEnum", access: "RW VM", conformance: "TEMP",
                    default: "null", quality: "X N",
                    details: "The TemperatureUnit attribute shall indicate the unit for the Node to use only when conveying " +
                        "temperature in communication to the user. If provided, this value shall take priority over any unit " +
                        "implied through the ActiveLocale Attribute.",
                    xref: { document: "core", section: "11.5.6.1" }
                })
            ]
        }),

        Cluster({
            name: "PowerSourceConfiguration", id: 0x2e, classification: "endpoint",
            details: "This cluster is used to describe the configuration and capabilities of a Device’s power system. It " +
                "provides an ordering overview as well as linking to the one or more endpoints each supporting a " +
                "Power Source cluster.",
            xref: { document: "core", section: "11.6" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "Sources", id: 0x0, type: "list", access: "R V", conformance: "M", constraint: "max 6",
                    quality: "N",

                    details: "This list shall contain the set of all power sources capable of participating in the power system " +
                        "of this Node. Each entry in the list shall be the endpoint number of an endpoint having a Power " +
                        "Source cluster, which corresponds to a physical power source. The endpoint number shall be unique " +
                        "within the list." +
                        "\n" +
                        "The order of power sources on a Node is defined by the Order attribute of its associated Power " +
                        "Source cluster provided on the endpoint. List entries shall be sorted in increasing order, that is, " +
                        "an entry with a lower order shall have a lower index than any entry with a higher order. Multiple " +
                        "entries may have the same order, there are no restrictions on their relative sorting.",

                    xref: { document: "core", section: "11.6.4.1" },
                    children: [Field({ name: "entry", type: "endpoint-no" })]
                })
            ]
        }),

        Cluster({
            name: "PowerSource", id: 0x2f, classification: "node",
            details: "This cluster is used to describe the configuration and capabilities of a physical power source that " +
                "provides power to one or more endpoints on a node. In case the node has multiple power sources, " +
                "each is described by its own cluster instance. Each instance of this cluster may be associated with " +
                "one or more endpoints or the entire node.",
            xref: { document: "core", section: "11.7" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.7.4" },

                    children: [
                        Field({
                            name: "WIRED", conformance: "O", constraint: "0", description: "Wired",
                            details: "A wired power source"
                        }),
                        Field({
                            name: "BAT", conformance: "O", constraint: "1", description: "Battery",
                            details: "A battery power source"
                        }),
                        Field({
                            name: "RECHG", conformance: "O", constraint: "2", description: "Rechargeable",
                            details: "A rechargeable battery power source (requires Battery feature)"
                        }),
                        Field({
                            name: "REPLC", conformance: "O", constraint: "3", description: "Replaceable",
                            details: "A replaceable battery power source (requires Battery feature)"
                        })
                    ]
                }),

                Attribute({
                    name: "Status", id: 0x0, type: "PowerSourceStatusEnum", access: "R V", conformance: "M",
                    constraint: "desc",
                    xref: { document: "core", section: "11.7.7" }
                }),
                Attribute({
                    name: "Order", id: 0x1, type: "uint8", access: "R V", conformance: "M", quality: "N",
                    xref: { document: "core", section: "11.7.7" }
                }),

                Attribute({
                    name: "Description", id: 0x2, type: "string", access: "R V", conformance: "M", constraint: "max 60",
                    quality: "F",
                    details: "This attribute shall provide a user-facing description of this source, used to distinguish it from " +
                        "other power sources, e.g. \"DC Power\", \"Primary Battery\" or \"Battery back-up\". This attribute shall " +
                        "NOT be used to convey information such as battery form factor, or chemistry.",
                    xref: { document: "core", section: "11.7.7.3" }
                }),

                Attribute({
                    name: "WiredAssessedInputVoltage", id: 0x3, type: "uint32", access: "R V", conformance: "[WIRED]",
                    quality: "X C",
                    details: "This attribute shall indicate the assessed RMS or DC voltage currently provided by the hard-wired " +
                        "source, in mV (millivolts). A value of NULL shall indicate the Node is currently unable to assess " +
                        "the value. If the wired source is not connected, but the Node is still able to assess a value, then " +
                        "the assessed value may be reported.",
                    xref: { document: "core", section: "11.7.7.4" }
                }),

                Attribute({
                    name: "WiredAssessedInputFrequency", id: 0x4, type: "uint16", access: "R V", conformance: "[WIRED]",
                    quality: "X C",
                    details: "This attribute shall indicate the assessed frequency of the voltage, currently provided by the " +
                        "hard-wired source, in Hz. A value of NULL shall indicate the Node is currently unable to assess the " +
                        "value. If the wired source is not connected, but the Node is still able to assess a value, then the " +
                        "assessed value may be reported.",
                    xref: { document: "core", section: "11.7.7.5" }
                }),

                Attribute({
                    name: "WiredCurrentType", id: 0x5, type: "WiredCurrentTypeEnum", access: "R V",
                    conformance: "WIRED", constraint: "desc", quality: "F",
                    details: "This attribute shall indicate the type of current the Node expects to be provided by the hard- " +
                        "wired source as specified in WiredCurrentTypeEnum.",
                    xref: { document: "core", section: "11.7.7.6" }
                }),

                Attribute({
                    name: "WiredAssessedCurrent", id: 0x6, type: "uint32", access: "R V", conformance: "[WIRED]",
                    quality: "X C",
                    details: "This attribute shall indicate the assessed instantaneous current draw of the Node on the hard- " +
                        "wired source, in mA (milliamps). A value of NULL shall indicate the Node is currently unable to " +
                        "assess the value. If the wired source is not connected, but the Node is still able to assess a " +
                        "value, then the assessed value may be reported.",
                    xref: { document: "core", section: "11.7.7.7" }
                }),

                Attribute({
                    name: "WiredNominalVoltage", id: 0x7, type: "uint32", access: "R V", conformance: "[WIRED]",
                    quality: "F",
                    details: "This attribute shall indicate the nominal voltage, printed as part of the Node’s regulatory " +
                        "compliance label in mV (millivolts), expected to be provided by the hard-wired source.",
                    xref: { document: "core", section: "11.7.7.8" }
                }),

                Attribute({
                    name: "WiredMaximumCurrent", id: 0x8, type: "uint32", access: "R V", conformance: "[WIRED]",
                    quality: "F",
                    details: "This attribute shall indicate the maximum current, printed as part of the Node’s regulatory " +
                        "compliance label in mA (milliamps), expected to be provided by the hard-wired source.",
                    xref: { document: "core", section: "11.7.7.9" }
                }),

                Attribute({
                    name: "WiredPresent", id: 0x9, type: "bool", access: "R V", conformance: "[WIRED]",

                    details: "This attribute shall indicate if the Node detects that the hard-wired power source is properly " +
                        "connected." +
                        "\n" +
                        "### ‌11.7.7.11. ActiveWiredFaults Attribute" +
                        "\n" +
                        "This attribute shall indicate the set of wired faults currently detected by the Node on this power " +
                        "source. This set is represented as a list of WiredFaultEnum. When the Node detects a fault has been " +
                        "raised, the appropriate WiredFaultEnum value shall be added to this list, provided it is not " +
                        "already present. This list shall NOT contain more than one instance of a specific WiredFaultEnum " +
                        "value. When the Node detects all conditions contributing to a fault have been cleared, the " +
                        "corresponding WiredFaultEnum value shall be removed from this list. An empty list shall indicate " +
                        "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                        "interested in monitoring changes in active faults may subscribe to this attribute, or they may " +
                        "subscribe to WiredFaultChange.",

                    xref: { document: "core", section: "11.7.7.10" }
                }),

                Attribute({
                    name: "ActiveWiredFaults", id: 0xa, type: "list", access: "R V", conformance: "[WIRED]",
                    constraint: "max 8",
                    xref: { document: "core", section: "11.7.7" },
                    children: [Field({ name: "entry", type: "WiredFaultEnum" })]
                }),

                Attribute({
                    name: "BatVoltage", id: 0xb, type: "uint32", access: "R V", conformance: "[BAT]", quality: "X C",
                    details: "This attribute shall indicate the currently measured output voltage of the battery in mV " +
                        "(millivolts). A value of NULL shall indicate the Node is currently unable to assess the value.",
                    xref: { document: "core", section: "11.7.7.12" }
                }),

                Attribute({
                    name: "BatPercentRemaining", id: 0xc, type: "uint8", access: "R V", conformance: "[BAT]",
                    constraint: "0 to 200", quality: "X C",
                    details: "This attribute shall indicate the estimated percentage of battery charge remaining until the " +
                        "battery will no longer be able to provide power to the Node. Values are expressed in half percent " +
                        "units, ranging from 0 to 200. E.g. a value of 48 is equivalent to 24%. A value of NULL shall " +
                        "indicate the Node is currently unable to assess the value.",
                    xref: { document: "core", section: "11.7.7.13" }
                }),

                Attribute({
                    name: "BatTimeRemaining", id: 0xd, type: "uint32", access: "R V", conformance: "[BAT]",
                    quality: "X C",
                    details: "This attribute shall indicate the estimated time in seconds before the battery will no longer be " +
                        "able to provide power to the Node. A value of NULL shall indicate the Node is currently unable to " +
                        "assess the value.",
                    xref: { document: "core", section: "11.7.7.14" }
                }),

                Attribute({
                    name: "BatChargeLevel", id: 0xe, type: "BatChargeLevelEnum", access: "R V", conformance: "BAT",
                    constraint: "desc",
                    details: "This attribute shall indicate a coarse ranking of the charge level of the battery, used to indicate " +
                        "when intervention is required as specified in BatChargeLevelEnum.",
                    xref: { document: "core", section: "11.7.7.15" }
                }),

                Attribute({
                    name: "BatReplacementNeeded", id: 0xf, type: "bool", access: "R V", conformance: "BAT",
                    details: "This attribute shall indicate if the battery needs to be replaced. Replacement may be simple " +
                        "routine maintenance, such as with a single use, non-rechargeable cell. Replacement, however, may " +
                        "also indicate end of life, or serious fault with a rechargeable or even non-replaceable cell.",
                    xref: { document: "core", section: "11.7.7.16" }
                }),

                Attribute({
                    name: "BatReplaceability", id: 0x10, type: "BatReplaceabilityEnum", access: "R V",
                    conformance: "BAT", quality: "F",
                    details: "This attribute shall indicate the replaceability of the battery as specified in " +
                        "BatReplaceabilityEnum.",
                    xref: { document: "core", section: "11.7.7.17" }
                }),

                Attribute({
                    name: "BatPresent", id: 0x11, type: "bool", access: "R V", conformance: "[BAT]",

                    details: "This attribute shall indicate whether the Node detects that the batteries are properly installed." +
                        "\n" +
                        "### ‌11.7.7.19. ActiveBatFaults Attribute" +
                        "\n" +
                        "This attribute shall indicate the set of battery faults currently detected by the Node on this " +
                        "power source. This set is represented as a list of BatFaultEnum. When the Node detects a fault has " +
                        "been raised, the appropriate BatFaultEnum value shall be added to this list, provided it is not " +
                        "already present. This list shall NOT contain more than one instance of a specific BatFaultEnum " +
                        "value. When the Node detects all conditions contributing to a fault have been cleared, the " +
                        "corresponding BatFaultEnum value shall be removed from this list. An empty list shall indicate " +
                        "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                        "interested in monitoring changes in active faults may subscribe to this attribute, or they may " +
                        "subscribe to BatFaultChange.",

                    xref: { document: "core", section: "11.7.7.18" }
                }),

                Attribute({
                    name: "ActiveBatFaults", id: 0x12, type: "list", access: "R V", conformance: "[BAT]",
                    constraint: "max 8",
                    xref: { document: "core", section: "11.7.7" },
                    children: [Field({ name: "entry", type: "BatFaultEnum" })]
                }),

                Attribute({
                    name: "BatReplacementDescription", id: 0x13, type: "string", access: "R V", conformance: "REPLC",
                    constraint: "max 60", quality: "F",
                    details: "This attribute shall provide a user-facing description of this battery, which SHOULD contain " +
                        "information required to identify a replacement, such as form factor, chemistry or preferred " +
                        "manufacturer.",
                    xref: { document: "core", section: "11.7.7.20" }
                }),

                Attribute({
                    name: "BatCommonDesignation", id: 0x14, type: "BatCommonDesignationEnum", access: "R V",
                    conformance: "[REPLC]", constraint: "desc", quality: "F",
                    details: "This attribute shall indicate the ID of the common or colloquial designation of the battery, as " +
                        "specified in BatCommonDesignationEnum.",
                    xref: { document: "core", section: "11.7.7.21" }
                }),

                Attribute({
                    name: "BatAnsiDesignation", id: 0x15, type: "string", access: "R V", conformance: "[REPLC]",
                    constraint: "max 20", quality: "F",
                    details: "This attribute shall indicate the string representing the ANSI designation for the battery as " +
                        "specified in ANSI C18.",
                    xref: { document: "core", section: "11.7.7.22" }
                }),

                Attribute({
                    name: "BatIecDesignation", id: 0x16, type: "string", access: "R V", conformance: "[REPLC]",
                    constraint: "max 20", quality: "F",
                    details: "This attribute shall indicate the string representing the IEC designation for the battery as " +
                        "specified in IEC 60086.",
                    xref: { document: "core", section: "11.7.7.23" }
                }),

                Attribute({
                    name: "BatApprovedChemistry", id: 0x17, type: "BatApprovedChemistryEnum", access: "R V",
                    conformance: "[REPLC]", constraint: "desc", quality: "F",
                    details: "This attribute shall indicate the ID of the preferred chemistry of the battery source as specified " +
                        "in BatApprovedChemistryEnum.",
                    xref: { document: "core", section: "11.7.7.24" }
                }),

                Attribute({
                    name: "BatCapacity", id: 0x18, type: "uint32", access: "R V", conformance: "[REPLC]", quality: "F",
                    details: "This attribute shall indicate the preferred minimum charge capacity rating in mAh of individual, " +
                        "user- or factory-serviceable battery cells or packs in the battery source.",
                    xref: { document: "core", section: "11.7.7.25" }
                }),

                Attribute({
                    name: "BatQuantity", id: 0x19, type: "uint8", access: "R V", conformance: "REPLC", quality: "F",
                    details: "This attribute shall indicate the quantity of individual, user- or factory-serviceable battery " +
                        "cells or packs in the battery source.",
                    xref: { document: "core", section: "11.7.7.26" }
                }),

                Attribute({
                    name: "BatChargeState", id: 0x1a, type: "BatChargeStateEnum", access: "R V", conformance: "RECHG",
                    constraint: "desc",
                    details: "This attribute shall indicate the current state of the battery source with respect to charging as " +
                        "specified in BatChargeStateEnum.",
                    xref: { document: "core", section: "11.7.7.27" }
                }),

                Attribute({
                    name: "BatTimeToFullCharge", id: 0x1b, type: "uint32", access: "R V", conformance: "[RECHG]",
                    quality: "X C",
                    details: "This attribute shall indicate the estimated time in seconds before the battery source will be at " +
                        "full charge. A value of NULL shall indicate the Node is currently unable to assess the value.",
                    xref: { document: "core", section: "11.7.7.28" }
                }),

                Attribute({
                    name: "BatFunctionalWhileCharging", id: 0x1c, type: "bool", access: "R V", conformance: "RECHG",
                    details: "This attribute shall indicate whether the Node can remain operational while the battery source is " +
                        "charging.",
                    xref: { document: "core", section: "11.7.7.29" }
                }),

                Attribute({
                    name: "BatChargingCurrent", id: 0x1d, type: "uint32", access: "R V", conformance: "[RECHG]",
                    quality: "X C",

                    details: "This attribute shall indicate assessed current in mA (milliamps) presently supplied to charge the " +
                        "battery source. A value of NULL shall indicate the Node is currently unable to assess the value." +
                        "\n" +
                        "### ‌11.7.7.31. ActiveBatChargeFaults Attribute" +
                        "\n" +
                        "This attribute shall indicate the set of charge faults currently detected by the Node on this power " +
                        "source. This set is represented as a list of BatChargeFaultEnum. When the Node detects a fault has " +
                        "been raised, the appropriate BatChargeFaultEnum value shall be added to this list, provided it is " +
                        "not already present. This list shall NOT contain more than one instance of a specific " +
                        "BatChargeFaultEnum value. When the Node detects all conditions contributing to a fault have been " +
                        "cleared, the corresponding BatChargeFaultEnum value shall be removed from this list. An empty list " +
                        "shall indicate there are currently no active faults. The order of this list SHOULD have no " +
                        "significance. Clients interested in monitoring changes in active faults may subscribe to this " +
                        "attribute, or they may subscribe to the BatFaultChange event.",

                    xref: { document: "core", section: "11.7.7.30" }
                }),

                Attribute({
                    name: "ActiveBatChargeFaults", id: 0x1e, type: "list", access: "R V", conformance: "[RECHG]",
                    constraint: "max 16",
                    xref: { document: "core", section: "11.7.7" },
                    children: [Field({ name: "entry", type: "BatChargeFaultEnum" })]
                }),

                Attribute({
                    name: "EndpointList", id: 0x1f, type: "list", access: "R V", conformance: "M",

                    details: "This attribute shall indicate a list of endpoints that are powered by the source defined by this " +
                        "cluster. Multiple instances of this cluster may list the same endpoint, because it is possible for " +
                        "power for an endpoint to come from multiple sources. In that case the Order attribute indicates " +
                        "their priority." +
                        "\n" +
                        "For each power source on a node, there shall only be one instance of this cluster." +
                        "\n" +
                        "A cluster instance with an empty list shall indicate that the power source is for the entire node, " +
                        "which includes all endpoints." +
                        "\n" +
                        "A cluster instance with a non-empty list shall include the endpoint, upon which the cluster " +
                        "instance resides." +
                        "\n" +
                        "The above rules allow that some endpoints can have an unknown power source, and therefore would not " +
                        "be indicated by any instance of this cluster." +
                        "\n" +
                        "Empty list examples" +
                        "\n" +
                        "Typically, there is one power source for the node. Also common is mains power for the node with " +
                        "battery backup power for the node. In both these common cases, for each cluster instance described, " +
                        "the list is empty." +
                        "\n" +
                        "Populated list example" +
                        "\n" +
                        "A node has a mains power source with Order as 0 (zero), but some application endpoints (not all) " +
                        "have a battery back up source with Order as 1, which means this list is empty for the Power Source " +
                        "cluster associated with the mains power, because it indicates the entire node, but the Power Source " +
                        "cluster instance associated with the battery backup would list the endpoints that have a battery " +
                        "backup.",

                    xref: { document: "core", section: "11.7.7.32" },
                    children: [Field({ name: "entry", type: "endpoint-no" })]
                }),

                Event({
                    name: "WiredFaultChange", id: 0x0, access: "V", conformance: "[WIRED]", priority: "info",
                    xref: { document: "core", section: "11.7.8" }
                }),
                Event({
                    name: "BatFaultChange", id: 0x1, access: "V", conformance: "[BAT]", priority: "info",
                    xref: { document: "core", section: "11.7.8" }
                }),
                Event({
                    name: "BatChargeFaultChange", id: 0x2, access: "V", conformance: "[RECHG]", priority: "info",
                    xref: { document: "core", section: "11.7.8" }
                })
            ]
        }),

        Cluster({
            name: "NetworkCommissioning", id: 0x31, classification: "node",

            details: "Network commissioning is part of the overall Node commissioning. The main goal of Network " +
                "Commissioning Cluster is to associate a Node with or manage a Node’s one or more network " +
                "interfaces. These network interfaces can include the following types." +
                "\n" +
                "  • Wi-Fi (IEEE 802.11-2020)" +
                "\n" +
                "  • Ethernet (802.3)" +
                "\n" +
                "  • Thread (802.15.4)" +
                "\n" +
                "An instance of the Network Commissioning Cluster only applies to a single network interface " +
                "instance present. An interface, in this context, is a unique entity that can have an IPv6 address " +
                "assigned to it and ingress and egress IP packets.",

            xref: { document: "core", section: "11.8" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.8.4" },

                    children: [
                        Field({
                            name: "WI", conformance: "O.a", constraint: "0", description: "WiFiNetworkInterface",
                            details: "Wi-Fi related features"
                        }),
                        Field({
                            name: "TH", conformance: "O.a", constraint: "1", description: "ThreadNetworkInterface",
                            details: "Thread related features"
                        }),
                        Field({
                            name: "ET", conformance: "O.a", constraint: "2", description: "EthernetNetworkInterface",
                            details: "Ethernet related features"
                        })
                    ]
                }),

                Attribute({
                    name: "MaxNetworks", id: 0x0, type: "uint8", access: "R A", conformance: "M", constraint: "min 1",
                    quality: "F",
                    xref: { document: "core", section: "11.8.6" }
                }),

                Attribute({
                    name: "Networks", id: 0x1, type: "list", access: "R A", conformance: "M",
                    constraint: "max maxNetworks", default: [],
                    xref: { document: "core", section: "11.8.6" },
                    children: [Field({ name: "entry", type: "NetworkInfoStruct" })]
                }),

                Attribute({
                    name: "ScanMaxTimeSeconds", id: 0x2, type: "uint8", access: "R V", conformance: "WI | TH",
                    constraint: "desc", quality: "F",
                    xref: { document: "core", section: "11.8.6" }
                }),
                Attribute({
                    name: "ConnectMaxTimeSeconds", id: 0x3, type: "uint8", access: "R V", conformance: "WI | TH",
                    constraint: "desc", quality: "F",
                    xref: { document: "core", section: "11.8.6" }
                }),

                Attribute({
                    name: "InterfaceEnabled", id: 0x4, type: "bool", access: "RW VA", conformance: "M", default: true,
                    quality: "N",

                    details: "This attribute shall indicate whether the associated network interface is enabled or not. By " +
                        "default all network interfaces SHOULD be enabled during initial commissioning (InterfaceEnabled set " +
                        "to true)." +
                        "\n" +
                        "It is undefined what happens if InterfaceEnabled is written to false on the same interface as that " +
                        "which is used to write the value. In that case, it is possible that the Administrator would have to " +
                        "await expiry of the fail-safe, and associated recovery of network configuration to prior safe " +
                        "values, before being able to communicate with the node again (see Section 11.9.6.2, “ArmFailSafe " +
                        "Command”)." +
                        "\n" +
                        "It may be possible to disable Ethernet interfaces but it is implementation-defined. If not " +
                        "supported, a write to this attribute with a value of false shall fail with a status of " +
                        "INVALID_ACTION. When disabled, an Ethernet interface would longer employ media detection. That is, " +
                        "a simple unplug and replug of the cable shall NOT re-enable the interface." +
                        "\n" +
                        "On Ethernet-only Nodes, there shall always be at least one of the Network Commissioning server " +
                        "cluster instances with InterfaceEnabled set to true." +
                        "\n" +
                        "### ‌11.8.6.6. LastNetworkingStatus Attribute" +
                        "\n" +
                        "This attribute shall indicate the status of the last attempt either scan or connect to an " +
                        "operational network, using this interface, whether by invocation of the ConnectNetwork command or by" +
                        "\n" +
                        "autonomous connection after loss of connectivity or during initial establishment. If no such " +
                        "attempt was made, or no network configurations exist in the Networks attribute, then this attribute " +
                        "shall be set to null." +
                        "\n" +
                        "This attribute is present to assist with error recovery during Network commissioning and to assist " +
                        "in non-concurrent networking commissioning flows." +
                        "\n" +
                        "### ‌11.8.6.7. LastNetworkID Attribute" +
                        "\n" +
                        "This attribute shall indicate the NetworkID used in the last attempt to connect to an operational " +
                        "network, using this interface, whether by invocation of the ConnectNetwork command or by autonomous " +
                        "connection after loss of connectivity or during initial establishment. If no such attempt was made, " +
                        "or no network configurations exist in the Networks attribute, then this attribute shall be set to " +
                        "null." +
                        "\n" +
                        "If a network configuration is removed from the Networks attribute using the RemoveNetwork command " +
                        "after a connection attempt, this field may indicate a NetworkID that is no longer configured on the " +
                        "Node." +
                        "\n" +
                        "This attribute is present to assist with error recovery during Network commissioning and to assist " +
                        "in non-concurrent networking commissioning flows." +
                        "\n" +
                        "### ‌11.8.6.8. LastConnectErrorValue Attribute" +
                        "\n" +
                        "This attribute shall indicate the ErrorValue used in the last failed attempt to connect to an " +
                        "operational network, using this interface, whether by invocation of the ConnectNetwork command or " +
                        "by autonomous connection after loss of connectivity or during initial establishment. If no such " +
                        "attempt was made, or no network configurations exist in the Networks attribute, then this attribute " +
                        "shall be set to null." +
                        "\n" +
                        "If the last connection succeeded, as indicated by a value of Success in the LastNetworkingStatus " +
                        "attribute, then this field shall be set to null." +
                        "\n" +
                        "This attribute is present to assist with error recovery during Network commissioning and to assist " +
                        "in non-concurrent networking commissioning flows.",

                    xref: { document: "core", section: "11.8.6.5" }
                }),

                Attribute({
                    name: "LastNetworkingStatus", id: 0x5, type: "NetworkCommissioningStatusEnum", access: "R A",
                    conformance: "M", default: "null", quality: "X",
                    xref: { document: "core", section: "11.8.6" }
                }),
                Attribute({
                    name: "LastNetworkId", id: 0x6, type: "octstr", access: "R A", conformance: "M",
                    constraint: "1 to 32", default: null, quality: "X",
                    xref: { document: "core", section: "11.8.6" }
                }),
                Attribute({
                    name: "LastConnectErrorValue", id: 0x7, type: "int32", access: "R A", conformance: "M",
                    default: null, quality: "X",
                    xref: { document: "core", section: "11.8.6" }
                }),
                Command({
                    name: "ScanNetworks", id: 0x0, access: "A", conformance: "WI | TH", direction: "request",
                    response: "ScanNetworksResponse",
                    xref: { document: "core", section: "11.8.7" }
                }),

                Command({
                    name: "ScanNetworksResponse", id: 0x1, conformance: "WI | TH", direction: "response",

                    details: "This command shall contain the status of the last ScanNetworks command, and the associated scan " +
                        "results if the operation was successful." +
                        "\n" +
                        "Results are valid only if NetworkingStatus is Success." +
                        "\n" +
                        "Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute " +
                        "value to the NetworkingStatus matching the response.",

                    xref: { document: "core", section: "11.8.7.2" },

                    children: [
                        Field({
                            name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum", conformance: "M",
                            constraint: "desc",

                            details: "The NetworkingStatus field shall indicate the status of the last scan operation, taking one of " +
                                "these values:" +
                                "\n" +
                                "  • Success: Scanning succeeded." +
                                "\n" +
                                "  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during" +
                                "\n" +
                                "the scan. This error cannot occur if no network identifier was provided, such as when scanning for " +
                                "all available networks." +
                                "\n" +
                                "  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc)." +
                                "\n" +
                                "  • RegulatoryError: Could not scan on any bands due to lack of regulatory configuration." +
                                "\n" +
                                "  • UnknownError: An internal error occurred during scanning." +
                                "\n" +
                                "### ‌DebugText Field" +
                                "\n" +
                                "This field, if present and non-empty, may contain error information which may be communicated to " +
                                "the user in case the NetworkingStatus was not Success. Its purpose is to help developers in " +
                                "troubleshooting errors and may go into logs or crash reports.",

                            xref: { document: "core", section: "11.8.7.2.1" }
                        }),

                        Field({ name: "DebugText", id: 0x1, type: "string", conformance: "O", constraint: "max 512" }),

                        Field({
                            name: "WiFiScanResults", id: 0x2, type: "list", conformance: "WI", constraint: "desc",

                            details: "If NetworkingStatus was Success, this field shall contain the Wi-Fi network scan results. The list " +
                                "may be empty if none were found in range on the bands supported by the interface, or if directed " +
                                "scanning had been used and the desired SSID was not found in range." +
                                "\n" +
                                "The maximum number of results present in the result list supported may depend on memory and may " +
                                "contain a subset of possibilities, to avoid memory exhaustion on the cluster server and avoid " +
                                "crossing the maximum command response size supported (see Section 4.4.4, “Message Size " +
                                "Requirements”)." +
                                "\n" +
                                "The order in which results are reported is implementation-specific. Results SHOULD be reported in " +
                                "decreasing RSSI order, even if RSSI is not reported in the response, to maximize the likelihood " +
                                "that most likely to be reachable elements are included within the size limits of the response.",

                            xref: { document: "core", section: "11.8.7.2.2" },
                            children: [Field({ name: "entry", type: "WiFiInterfaceScanResultStruct" })]
                        }),

                        Field({
                            name: "ThreadScanResults", id: 0x3, type: "list", conformance: "TH", constraint: "desc",

                            details: "If NetworkingStatus was Success, this field shall contain the Thread network scan results. The list " +
                                "may be empty if none were found in range on the bands supported by the interface." +
                                "\n" +
                                "The maximum number of results present in the result list supported may depend on memory and may " +
                                "contain a subset of possibilities, to avoid memory exhaustion on the cluster server and avoid " +
                                "crossing the maximum command response size supported (see Section 4.4.4, “Message Size " +
                                "Requirements”)." +
                                "\n" +
                                "The order in which results are reported is implementation-specific. Results SHOULD be reported in " +
                                "decreasing LQI order, to maximize the likelihood that most likely to be reachable elements are " +
                                "included within the size limits of the response." +
                                "\n" +
                                "### ‌11.8.7.3. AddOrUpdateWiFiNetwork Command" +
                                "\n" +
                                "This command shall be used to add or modify Wi-Fi network configurations." +
                                "\n" +
                                "If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe " +
                                "Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the " +
                                "initiator." +
                                "\n" +
                                "The Credentials associated with the network are not readable after execution of this command, as" +
                                "\n" +
                                "they do not appear in the Networks attribute list, for security reasons." +
                                "\n" +
                                "See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” " +
                                "for behavior of addition/update." +
                                "\n" +
                                "This field shall contain the SSID to which to attempt connection. Specific BSSID selection is not " +
                                "supported by this cluster.",

                            xref: { document: "core", section: "11.8.7.2.3" },
                            children: [Field({ name: "entry", type: "ThreadInterfaceScanResultStruct" })]
                        })
                    ]
                }),

                Command({
                    name: "AddOrUpdateWiFiNetwork", id: 0x2, access: "A", conformance: "WI", direction: "request",
                    response: "NetworkConfigResponse",
                    xref: { document: "core", section: "11.8.7" }
                }),
                Command({
                    name: "AddOrUpdateThreadNetwork", id: 0x3, access: "A", conformance: "TH", direction: "request",
                    response: "NetworkConfigResponse",
                    xref: { document: "core", section: "11.8.7" }
                }),

                Command({
                    name: "RemoveNetwork", id: 0x4, access: "A", conformance: "WI | TH", direction: "request",
                    response: "NetworkConfigResponse",

                    details: "This command shall remove the network configuration from the Cluster if there was already a network " +
                        "configuration with the same NetworkID. The relative order of the entries in the Networks attribute " +
                        "list shall remain unchanged, except for the removal of the requested network configuration." +
                        "\n" +
                        "If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe " +
                        "Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the " +
                        "initiator." +
                        "\n" +
                        "If the Networks attribute does not contain a matching entry, the command shall immediately respond " +
                        "with NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound." +
                        "\n" +
                        "On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based " +
                        "index of the entry in the Networks attribute that was just removed, and a NetworkingStatus status " +
                        "field set to Success." +
                        "\n" +
                        "This field shall contain the NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID for " +
                        "Thread." +
                        "\n" +
                        "See Section 11.8.7.1.2, “Breadcrumb Field” for usage.",

                    xref: { document: "core", section: "11.8.7.7" },
                    children: [
                        Field({ name: "NetworkId", id: 0x0, type: "octstr", conformance: "M", constraint: "1 to 32" }),
                        Field({ name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" })
                    ]
                }),

                Command({
                    name: "NetworkConfigResponse", id: 0x5, conformance: "WI | TH", direction: "response",

                    details: "This response command relates status information for some commands which require it as their " +
                        "response command. See each individual cluster server command for the situations that may cause a " +
                        "NetworkingStatus different than Success." +
                        "\n" +
                        "Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute " +
                        "value to the NetworkingStatus matching the response." +
                        "\n" +
                        "Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value " +
                        "to the NetworkID that was used in the command for which an invocation caused the response to be " +
                        "generated." +
                        "\n" +
                        "The NetworkingStatus field shall indicate the status of the last operation attempting to modify the " +
                        "Networks attribute configuration, taking one of these values:" +
                        "\n" +
                        "  • Success: Operation succeeded." +
                        "\n" +
                        "  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc)." +
                        "\n" +
                        "  • BoundsExceeded: Adding this network configuration would exceed the limit defined by Section " +
                        "    11.8.6.1, “MaxNetworks Attribute”." +
                        "\n" +
                        "  • NetworkIdNotFound: The network identifier was expected to be found, but was not found among the " +
                        "    added network configurations in Networks attribute." +
                        "\n" +
                        "  • UnknownError: An internal error occurred during the operation.",

                    xref: { document: "core", section: "11.8.7.8" },

                    children: [
                        Field({
                            name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum", conformance: "M",
                            constraint: "desc"
                        }),
                        Field({
                            name: "DebugText", id: 0x1, type: "string", conformance: "O", constraint: "max 512",
                            details: "See Section 11.8.7.2.2, “DebugText Field” for usage.",
                            xref: { document: "core", section: "11.8.7.8.1" }
                        }),

                        Field({
                            name: "NetworkIndex", id: 0x2, type: "uint8", conformance: "O",

                            details: "When the NetworkingStatus is Success, this field shall be present. It shall contain the 0-based " +
                                "index of the entry in the Networks attribute that was last added, updated or removed successfully " +
                                "by the associated request command." +
                                "\n" +
                                "### ‌11.8.7.9. ConnectNetwork Command" +
                                "\n" +
                                "This command shall attempt to connect to a network whose configuration was previously added by " +
                                "either the AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by " +
                                "its NetworkID." +
                                "\n" +
                                "This command shall fail with a BUSY status code returned to the initiator if the server is " +
                                "currently unable to proceed with such an operation, such as if it is currently attempting to " +
                                "connect in the background, or is already proceeding with a prior ConnectNetwork." +
                                "\n" +
                                "If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe " +
                                "Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the " +
                                "initiator." +
                                "\n" +
                                "Success or failure of this command shall be communicated by the ConnectNetworkResponse command, " +
                                "unless some data model validations caused a FAILURE status to be sent prior to finishing execution " +
                                "of the command. The ConnectNetworkResponse shall indicate the value Success in the NetworkingStatus " +
                                "field on successful connection. On failure to connect, the ConnectNetworkResponse shall contain an " +
                                "appropriate NetworkingStatus, DebugText and ErrorValue indicating the reason for failure." +
                                "\n" +
                                "The amount of time needed to determine successful or failing connectivity on the cluster server’s " +
                                "associated interface is provided by the ConnectMaxTimeSeconds attribute. Clients shall NOT consider " +
                                "the connection to have timed-out until at least that duration has taken place. For non-concurrent " +
                                "commissioning situations, the client SHOULD allow additional margin of time to account for its " +
                                "delay in executing operational discovery of the Node once it is connected to the new network." +
                                "\n" +
                                "On successful connection, the entry associated with the given Network configuration in the Networks " +
                                "attribute shall indicate its Connected field set to true, and all other entries, if any exist, " +
                                "shall indicate their Connected field set to false." +
                                "\n" +
                                "On failure to connect, the entry associated with the given Network configuration in the Networks" +
                                "\n" +
                                "attribute shall indicate its Connected field set to false." +
                                "\n" +
                                "The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks " +
                                "attribute." +
                                "\n" +
                                "Even after successfully connecting to a network, the configuration shall revert to the prior state " +
                                "of configuration if the CommissioningComplete command (see Section 11.9.6.6, “CommissioningComplete " +
                                "Command”) is not successfully invoked before expiry of the Fail-Safe timer." +
                                "\n" +
                                "When non-concurrent commissioning is being used by a Commissioner or Administrator, it is possible " +
                                "that the only method to determine success of the operation is operational discovery of the Node on " +
                                "the new operational network. Therefore, before invoking the ConnectNetwork command, the client " +
                                "SHOULD re-invoke the Arm Fail-Safe command with a duration that meets the following:" +
                                "\n" +
                                "  1. Sufficient time to meet the minimum required time (see Section 11.8.6.4, " +
                                "     “ConnectMaxTimeSeconds Attribute”) that may be taken by the server to connect to the desired " +
                                "     network." +
                                "\n" +
                                "  2. Sufficient time to account for possible message-layer retries when a response is requested." +
                                "\n" +
                                "  3. Sufficient time to allow operational discovery on the new network by a Commissioner or " +
                                "     Administrator." +
                                "\n" +
                                "  4. Sufficient time to establish a CASE session after operational discovery" +
                                "\n" +
                                "  5. Not so long that, in error situations, the delay to reverting back to being discoverable for " +
                                "     commissioning with a previous configuration would cause significant user-perceived delay." +
                                "\n" +
                                "Note as well that the CommissioningTimeout duration provided in a prior OpenCommissioningWindow or " +
                                "OpenBasicCommissioningWindow command may impact the total time available to proceed with error " +
                                "recovery after a connection failure." +
                                "\n" +
                                "The LastNetworkingStatus, LastNetworkID and LastConnectErrorValue attributes may assist the client " +
                                "in determining the reason for a failure after reconnecting over a Commissioning channel, especially " +
                                "in non-concurrent commissioning situations." +
                                "\n" +
                                "This field shall contain the NetworkID for the entry used to configure the connection: the SSID for " +
                                "Wi-Fi and XPAN ID for Thread." +
                                "\n" +
                                "See Section 11.8.7.1.2, “Breadcrumb Field” for usage.",

                            xref: { document: "core", section: "11.8.7.8.2" }
                        })
                    ]
                }),

                Command({
                    name: "ConnectNetwork", id: 0x6, access: "A", conformance: "WI | TH", direction: "request",
                    response: "ConnectNetworkResponse",
                    xref: { document: "core", section: "11.8.7" }
                }),

                Command({
                    name: "ConnectNetworkResponse", id: 0x7, conformance: "WI | TH", direction: "response",

                    details: "Before generating a ConnectNetworkResponse, the server shall:" +
                        "\n" +
                        "  • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response." +
                        "\n" +
                        "  • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork " +
                        "    command which caused the response to be generated." +
                        "\n" +
                        "  • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, " +
                        "    including setting it to null if the ErrorValue is not applicable." +
                        "\n" +
                        "The NetworkingStatus field shall indicate the status of the last connection attempt, taking one of " +
                        "these values:" +
                        "\n" +
                        "  • Success: Connection succeeded." +
                        "\n" +
                        "  • NetworkNotFound: No instance of an explicitly-provided network identifier was found during the " +
                        "    attempt to join the network." +
                        "\n" +
                        "  • OutOfRange: Network identifier was invalid (e.g. empty, too long, etc)." +
                        "\n" +
                        "  • NetworkIdNotFound: The network identifier was not found among the added network configurations " +
                        "    in Networks attribute." +
                        "\n" +
                        "  • RegulatoryError: Could not connect to a network due to lack of regulatory configuration." +
                        "\n" +
                        "  • UnknownError: An internal error occurred during the operation." +
                        "\n" +
                        "  • Association errors (see also description of errors in Section 11.8.5.3, " +
                        "    “NetworkCommissioningStatusEnum Type”): AuthFailure, UnsupportedSecurity, " +
                        "    OtherConnectionFailure, IPV6Failed, IPBindFailed" +
                        "\n" +
                        "See Section 11.8.7.2.2, “DebugText Field” for usage.",

                    xref: { document: "core", section: "11.8.7.10" },

                    children: [
                        Field({
                            name: "NetworkingStatus", id: 0x0, type: "NetworkCommissioningStatusEnum", conformance: "M"
                        }),
                        Field({ name: "DebugText", id: 0x1, type: "string", conformance: "O" }),

                        Field({
                            name: "ErrorValue", id: 0x2, type: "int32", conformance: "M", quality: "X",

                            details: "  • ErrorValue interpretation for Wi-Fi association errors:" +
                                "\n" +
                                "    ◦ On any association failure during enabling of a network, the ErrorValue field shall be set to " +
                                "      the Status Code value that was present in the last frame related to association where Status " +
                                "      Code was not equal to zero and which caused the failure of a final retry attempt, if this " +
                                "      final failure was due to one of the following Management frames:" +
                                "\n" +
                                "      ▪ Association Response (Type 0, Subtype 1)" +
                                "\n" +
                                "      ▪ Reassociation Response (Type 0, Subtype 3)" +
                                "\n" +
                                "      ▪ Authentication (Type 0, Subtype 11)" +
                                "\n" +
                                "    ◦ Table 9-50 \"Status Codes\" in IEEE 802.11-2020 contains a description of all values possible," +
                                "\n" +
                                "which can unambiguously be used to determine the cause, such as an invalid security type, " +
                                "unsupported rate, etc." +
                                "\n" +
                                "  • Otherwise, the ErrorValue field shall contain an implementation-dependent value which may be " +
                                "    used by a reader of the structure to record, report or diagnose the failure.",

                            xref: { document: "core", section: "11.8.7.10.1" }
                        })
                    ]
                }),

                Command({
                    name: "ReorderNetwork", id: 0x8, access: "A", conformance: "WI | TH", direction: "request",
                    response: "NetworkConfigResponse",

                    details: "This command shall set the specific order of the network configuration selected by its NetworkID in " +
                        "the Networks attribute list to match the position given by NetworkIndex." +
                        "\n" +
                        "This field shall contain the NetworkID for the entry to reorder: the SSID for Wi-Fi and XPAN ID for " +
                        "Thread." +
                        "\n" +
                        "This field shall contain the 0-based index of the new desired position of the entry in the Networks " +
                        "attribute." +
                        "\n" +
                        "See Section 11.8.7.1.2, “Breadcrumb Field” for usage." +
                        "\n" +
                        "Effect when received" +
                        "\n" +
                        "If the Networks attribute does not contain a matching entry, the command shall immediately respond " +
                        "with NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound." +
                        "\n" +
                        "If the NetworkIndex field has a value larger or equal to the current number of entries in the " +
                        "Networks attribute, the command shall immediately respond with NetworkConfigResponse having " +
                        "NetworkingStatus status field set to OutOfRange." +
                        "\n" +
                        "On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based " +
                        "index of the entry in the Networks attribute that was just updated, matching the incoming " +
                        "NetworkIndex, and a NetworkingStatus status field set to Success." +
                        "\n" +
                        "The entry selected shall be inserted at the new position in the list. All other entries, if any " +
                        "exist, shall be moved to allow the insertion, in a way that they all retain their existing relative " +
                        "order between each other, with the exception of the newly re-ordered entry." +
                        "\n" +
                        "Re-ordering to the same NetworkIndex as the current location shall be considered as a success and " +
                        "yield no visible changes of the Networks attribute." +
                        "\n" +
                        "Examples of re-ordering" +
                        "\n" +
                        "To better illustrate the re-ordering operation, consider this initial state, exemplary of a Wi-Fi " +
                        "device:" +
                        "\n" +
                        "On receiving ReorderNetwork with:" +
                        "\n" +
                        "  • NetworkId = Home-Guest" +
                        "\n" +
                        "  • NetworkIndex = 0" +
                        "\n" +
                        "The outcome, after applying to the initial state would be:" +
                        "\n" +
                        "In the above outcome, FancyCat and BlueDolphin moved \"down\" and Home-Guest became the highest " +
                        "priority network in the list." +
                        "\n" +
                        "On receiving ReorderNetwork with:" +
                        "\n" +
                        "  • NetworkId = FancyCat" +
                        "\n" +
                        "  • NetworkIndex = 3" +
                        "\n" +
                        "The outcome, after applying to the initial state would be:" +
                        "\n" +
                        "In the above outcome, BlueDolphin, Home-Guest and WillowTree moved \"up\" and FancyCat became" +
                        "\n" +
                        "the lowest priority network in the list.",

                    xref: { document: "core", section: "11.8.7.11" },
                    children: [
                        Field({ name: "NetworkId", id: 0x0, type: "octstr", conformance: "M", constraint: "1 to 32" }),
                        Field({ name: "NetworkIndex", id: 0x1, type: "uint8", conformance: "M", constraint: "desc" }),
                        Field({ name: "Breadcrumb", id: 0x2, type: "uint64", conformance: "O" })
                    ]
                }),

                Datatype({
                    name: "Connected Field", type: "struct",

                    details: "This field shall indicate the connected status of the associated network, where \"connected\" means " +
                        "currently linked to the network technology (e.g. Associated for a Wi-Fi network, media connected " +
                        "for an Ethernet network)." +
                        "\n" +
                        "### ‌11.8.5.5. WiFiInterfaceScanResultStruct Type" +
                        "\n" +
                        "WiFiInterfaceScanResultStruct represents a single Wi-Fi network scan result.",

                    xref: { document: "core", section: "11.8.5.2" },

                    children: [
                        Field({ name: "Security", id: 0x0, type: "WiFiSecurityBitmap", conformance: "WI" }),
                        Field({ name: "Ssid", id: 0x1, type: "octstr", conformance: "WI", constraint: "max 32" }),
                        Field({ name: "Bssid", id: 0x2, type: "octstr", conformance: "WI", constraint: "6" }),
                        Field({ name: "Channel", id: 0x3, type: "uint16", conformance: "WI" }),
                        Field({ name: "WiFiBand", id: 0x4, type: "WiFiBandEnum", conformance: "[WI]" }),
                        Field({ name: "Rssi", id: 0x5, type: "int8", conformance: "[WI]" })
                    ]
                }),

                Datatype({
                    name: "RSSI Field", type: "struct",
                    details: "This field, if present, shall denote the signal strength in dBm of the associated scan result." +
                        "\n" +
                        "### ‌11.8.5.6. ThreadInterfaceScanResultStruct Type" +
                        "\n" +
                        "ThreadInterfaceScanResultStruct represents a single Thread network scan result.",
                    xref: { document: "core", section: "11.8.5.4" },

                    children: [
                        Field({ name: "PanId", id: 0x0, type: "uint16", conformance: "TH", constraint: "0 to 65534" }),
                        Field({ name: "ExtendedPanId", id: 0x1, type: "uint64", conformance: "TH" }),
                        Field({ name: "NetworkName", id: 0x2, type: "string", conformance: "TH", constraint: "1 to 16" }),
                        Field({ name: "Channel", id: 0x3, type: "uint16", conformance: "TH" }),
                        Field({ name: "Version", id: 0x4, type: "uint8", conformance: "TH" }),
                        Field({ name: "ExtendedAddress", id: 0x5, type: "hwadr", conformance: "TH" }),
                        Field({ name: "Rssi", id: 0x6, type: "int8", conformance: "TH" }),
                        Field({ name: "Lqi", id: 0x7, type: "uint8", conformance: "TH" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "GeneralCommissioning", id: 0x30, classification: "node",
            details: "This cluster is used to manage basic commissioning lifecycle." +
                "\n" +
                "This cluster also represents responsibilities related to commissioning that don’t well fit other " +
                "commissioning clusters, like Section 11.8, “Network Commissioning Cluster”. It also hosts " +
                "functionalities those other clusters may depend on.",
            xref: { document: "core", section: "11.9" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Attribute({
                    name: "Breadcrumb", id: 0x0, type: "uint64", access: "RW VA", conformance: "M", default: 0,
                    xref: { document: "core", section: "11.9.5" }
                }),
                Attribute({
                    name: "BasicCommissioningInfo", id: 0x1, type: "BasicCommissioningInfo", access: "R V",
                    conformance: "M", constraint: "desc", quality: "F",
                    xref: { document: "core", section: "11.9.5" }
                }),
                Attribute({
                    name: "RegulatoryConfig", id: 0x2, type: "RegulatoryLocationTypeEnum", access: "R V",
                    conformance: "M", default: "LocationCapability",
                    xref: { document: "core", section: "11.9.5" }
                }),
                Attribute({
                    name: "LocationCapability", id: 0x3, type: "RegulatoryLocationTypeEnum", access: "R V",
                    conformance: "M", default: "IndoorOutdoor", quality: "F",
                    xref: { document: "core", section: "11.9.5" }
                }),
                Attribute({
                    name: "SupportsConcurrentConnection", id: 0x4, type: "bool", access: "R V", conformance: "M",
                    default: true, quality: "F",
                    xref: { document: "core", section: "11.9.5" }
                }),
                Command({
                    name: "ArmFailSafe", id: 0x0, access: "A", conformance: "M", direction: "request",
                    response: "ArmFailSafeResponse",
                    xref: { document: "core", section: "11.9.6" }
                }),
                Command({
                    name: "ArmFailSafeResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.9.6" }
                }),
                Command({
                    name: "SetRegulatoryConfig", id: 0x2, access: "A", conformance: "M", direction: "request",
                    response: "SetRegulatoryConfigResponse",
                    xref: { document: "core", section: "11.9.6" }
                }),
                Command({
                    name: "SetRegulatoryConfigResponse", id: 0x3, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.9.6" }
                }),
                Command({
                    name: "CommissioningComplete", id: 0x4, access: "F A", conformance: "M", direction: "request",
                    response: "CommissioningCompleteResponse",
                    xref: { document: "core", section: "11.9.6" }
                }),
                Command({
                    name: "CommissioningCompleteResponse", id: 0x5, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.9.6" }
                })
            ]
        }),

        Cluster({
            name: "DiagnosticLogs", id: 0x32, classification: "node",

            details: "This Cluster supports an interface to a Node. It provides commands for retrieving unstructured " +
                "diagnostic logs from a Node that may be used to aid in diagnostics. It will often be the case that " +
                "unstructured diagnostic logs will be Node-wide and not specific to any subset of Endpoints. When " +
                "present, this Cluster shall be implemented once for the Node. The Node SHOULD also implement the " +
                "BDX Initiator and BDX Sender roles as defined in the BDX Protocol." +
                "\n" +
                "NOTE Support for Diagnostic Logs cluster is provisional.",

            xref: { document: "core", section: "11.10" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Command({
                    name: "RetrieveLogsRequest", id: 0x0, access: "O", conformance: "M", direction: "request",
                    response: "RetrieveLogsResponse",
                    details: "Reception of this command starts the process of retrieving diagnostic logs from a Node.",
                    xref: { document: "core", section: "11.10.5.1" },

                    children: [
                        Field({
                            name: "Intent", id: 0x0, type: "IntentEnum", conformance: "M",
                            details: "This field shall indicate why the diagnostic logs are being retrieved from the Node. A Node may " +
                                "utilize this field to selectively determine the logs to transfer.",
                            xref: { document: "core", section: "11.10.5.1.1" }
                        }),

                        Field({
                            name: "RequestedProtocol", id: 0x1, type: "TransferProtocolEnum", conformance: "M",

                            details: "This field shall be used to indicate how the log transfer is to be realized. If the field is set to " +
                                "BDX, then if the receiving Node supports BDX it shall attempt to use BDX to transfer any potential " +
                                "diagnostic logs; if the receiving Node does not support BDX then the Node shall follow the " +
                                "requirements defined for a TransferProtocolEnum of ResponsePayload. If this field is set to " +
                                "ResponsePayload the receiving Node shall only utilize the LogContent field of the " +
                                "RetrieveLogsResponse command to transfer diagnostic log information.",

                            xref: { document: "core", section: "11.10.5.1.2" }
                        }),

                        Field({
                            name: "TransferFileDesignator", id: 0x2, type: "string", conformance: "O", constraint: "max 32",

                            details: "This field shall be present if the RequestedProtocol is BDX. The TransferFileDesignator shall be " +
                                "set as the File Designator of the BDX transfer if initiated." +
                                "\n" +
                                "Effect on Receipt" +
                                "\n" +
                                "On receipt of this command, the Node shall respond with a RetrieveLogsResponse command." +
                                "\n" +
                                "If the RequestedProtocol is set to BDX the Node SHOULD immediately realize the RetrieveLogsResponse " +
                                "command by initiating a BDX Transfer, sending a BDX SendInit message with the File Designator field " +
                                "of the message set to the value of the TransferFileDesignator field of the RetrieveLogsRequest. On " +
                                "reception of a BDX SendAccept message the Node shall send a RetrieveLogsResponse command with a " +
                                "Status field set to Success and proceed with the log transfer over BDX. If a failure StatusReport " +
                                "is received in response to the SendInit message, the Node shall send a RetrieveLogsResponse command " +
                                "with a Status of Denied. In the case where the Node is able to fit the entirety of the requested " +
                                "logs within the LogContent field, the Status field of the RetrieveLogsResponse shall be set to " +
                                "Exhausted and a BDX session shall NOT be initiated." +
                                "\n" +
                                "If the RequestedProtocol is set to BDX and either the Node does not support BDX or it is not " +
                                "possible for the Node to establish a BDX session, then the Node shall utilize the LogContent field " +
                                "of the RetrieveLogsResponse command to transfer as much of the current logs as it can fit within " +
                                "the response, and the Status field of the RetrieveLogsResponse shall be set to Exhausted." +
                                "\n" +
                                "If the RequestedProtocol is set to ResponsePayload the Node shall utilize the LogContent field of " +
                                "the RetrieveLogsResponse command to transfer as much of the current logs as it can fit within the " +
                                "response, and a BDX session shall NOT be initiated." +
                                "\n" +
                                "If the RequestedProtocol is set to BDX and there is no TransferFileDesignator the command shall " +
                                "fail with a Status Code of INVALID_COMMAND." +
                                "\n" +
                                "If the Intent and/or the RequestedProtocol arguments contain invalid (out of range) values the " +
                                "command shall fail with a Status Code of INVALID_COMMAND.",

                            xref: { document: "core", section: "11.10.5.1.3" }
                        })
                    ]
                }),

                Command({
                    name: "RetrieveLogsResponse", id: 0x1, conformance: "M", direction: "response",
                    details: "This shall be generated as a response to the RetrieveLogsRequest. The data for this command is " +
                        "shown in the following.",
                    xref: { document: "core", section: "11.10.5.2" },

                    children: [
                        Field({
                            name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",

                            details: "This field shall indicate the result of an attempt to retrieve diagnostic logs." +
                                "\n" +
                                "### ‌LogContent Field" +
                                "\n" +
                                "This field shall be included in the command if the Status field has a value of Success or " +
                                "Exhausted. A Node SHOULD utilize this field to transfer the newest diagnostic log entries. This " +
                                "field shall be empty if BDX is requested and the Status field has a value of Success.",

                            xref: { document: "core", section: "11.10.5.2.1" }
                        }),

                        Field({ name: "LogContent", id: 0x1, type: "octstr", conformance: "M", constraint: "max 1024" }),

                        Field({
                            name: "UtcTimeStamp", id: 0x2, type: "epoch-us", conformance: "O",
                            details: "This field SHOULD be included in the command if the Status field has a value of Success and the " +
                                "Node maintains a wall clock. When included, the UTCTimeStamp field shall contain the value of the " +
                                "oldest log entry in the diagnostic logs that are being transferred.",
                            xref: { document: "core", section: "11.10.5.2.2" }
                        }),

                        Field({
                            name: "TimeSinceBoot", id: 0x3, type: "systime-us", conformance: "O",
                            details: "This field SHOULD be included in the command if the Status field has a value of Success. When " +
                                "included, the TimeSinceBoot field shall contain the time of the oldest log entry in the diagnostic " +
                                "logs that are being transferred represented by the number of microseconds since the last time the " +
                                "Node went through a reboot.",
                            xref: { document: "core", section: "11.10.5.2.3" }
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "GeneralDiagnostics", id: 0x33, classification: "node",
            details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire " +
                "standardized diagnostics metrics that may be used by a Node to assist a user or Administrator in " +
                "diagnosing potential problems. The General Diagnostics Cluster attempts to centralize all metrics " +
                "that are broadly relevant to the majority of Nodes.",
            xref: { document: "core", section: "11.11" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "NetworkInterfaces", id: 0x0, type: "list", access: "R V", conformance: "M",
                    constraint: "max 8",
                    xref: { document: "core", section: "11.11.5" },
                    children: [Field({ name: "entry", type: "NetworkInterface" })]
                }),

                Attribute({
                    name: "RebootCount", id: 0x1, type: "uint16", access: "R V", conformance: "M", quality: "N",
                    details: "The RebootCount attribute shall indicate a best-effort count of the number of times the Node has " +
                        "rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The " +
                        "RebootCount attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. " +
                        "The RebootCount attribute shall only be reset to 0 upon a factory reset of the Node.",
                    xref: { document: "core", section: "11.11.5.2" }
                }),

                Attribute({
                    name: "UpTime", id: 0x2, type: "uint64", access: "R V", conformance: "O", quality: "C",
                    details: "The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, " +
                        "since the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods " +
                        "of time that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon " +
                        "a device reboot.",
                    xref: { document: "core", section: "11.11.5.3" }
                }),

                Attribute({
                    name: "TotalOperationalHours", id: 0x3, type: "uint32", access: "R V", conformance: "O",
                    quality: "N C",
                    details: "The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of " +
                        "time, in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be " +
                        "incremented to account for the periods of time that a Node is in a low-power or sleep state. The " +
                        "TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.",
                    xref: { document: "core", section: "11.11.5.4" }
                }),

                Attribute({
                    name: "BootReason", id: 0x4, type: "BootReasonEnum", access: "R V", conformance: "O",
                    details: "The BootReason attribute shall indicate the reason for the Node’s most recent boot.",
                    xref: { document: "core", section: "11.11.5.5" }
                }),

                Attribute({
                    name: "ActiveHardwareFaults", id: 0x5, type: "list", access: "R V", conformance: "O",
                    constraint: "max 11",

                    details: "The ActiveHardwareFaults attribute shall indicate the set of faults currently detected by the Node. " +
                        "When the Node detects a fault has been raised, the appropriate HardwareFaultEnum value shall be " +
                        "added to this list. This list shall NOT contain more than one instance of a specific " +
                        "HardwareFaultEnum value. When the Node detects that all conditions contributing to a fault has been " +
                        "cleared, the corresponding HardwareFaultEnum value shall be removed from this list. An empty list " +
                        "shall indicate there are currently no active faults. The order of this list SHOULD have no " +
                        "significance. Clients interested in monitoring changes in active faults may subscribe to this " +
                        "attribute, or they may subscribe to HardwareFaultChange.",

                    xref: { document: "core", section: "11.11.5.6" },
                    children: [Field({ name: "entry", type: "HardwareFaultEnum" })]
                }),

                Attribute({
                    name: "ActiveRadioFaults", id: 0x6, type: "list", access: "R V", conformance: "O",
                    constraint: "max 7",

                    details: "The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. " +
                        "When the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added " +
                        "to this list. This list shall NOT contain more than one instance of a specific RadioFaultEnum " +
                        "value. When the Node detects that all conditions contributing to a fault has been cleared, the " +
                        "corresponding RadioFaultEnum value shall be removed from this list. An empty list shall indicate " +
                        "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                        "interested in monitoring changes in active faults may subscribe to this attribute, or they may " +
                        "subscribe to RadioFaultChange.",

                    xref: { document: "core", section: "11.11.5.7" },
                    children: [Field({ name: "entry", type: "RadioFaultEnum" })]
                }),

                Attribute({
                    name: "ActiveNetworkFaults", id: 0x7, type: "list", access: "R V", conformance: "O",
                    constraint: "max 4",

                    details: "The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. " +
                        "When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be " +
                        "added to this list. This list shall NOT contain more than one instance of a specific " +
                        "NetworkFaultEnum value. When the Node detects that all conditions contributing to a fault has been " +
                        "cleared, the corresponding NetworkFaultEnum value shall be removed from this list. An empty list " +
                        "shall indicate there are currently no active faults. The order of this list SHOULD have no " +
                        "significance. Clients interested in monitoring changes in active faults may subscribe to this " +
                        "attribute, or they may subscribe to NetworkFaultChange.",

                    xref: { document: "core", section: "11.11.5.8" },
                    children: [Field({ name: "entry", type: "NetworkFaultEnum" })]
                }),

                Attribute({
                    name: "TestEventTriggersEnabled", id: 0x8, type: "bool", access: "R V", conformance: "M",

                    details: "The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger " +
                        "configured. When this attribute is true, the Node has been configured with one or more test event " +
                        "triggers by virtue of the internally programmed EnableKey value (see Section 11.11.6.1, " +
                        "“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by " +
                        "Administrators to detect if a device was inadvertently commissioned with test event trigger mode " +
                        "enabled, and take appropriate action (e.g. warn the user and/or offer to remove all fabrics on the " +
                        "Node).",

                    xref: { document: "core", section: "11.11.5.9" }
                }),

                Event({
                    name: "HardwareFaultChange", id: 0x0, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "core", section: "11.11.7" }
                }),
                Event({
                    name: "RadioFaultChange", id: 0x1, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "core", section: "11.11.7" }
                }),
                Event({
                    name: "NetworkFaultChange", id: 0x2, access: "V", conformance: "O", priority: "critical",
                    xref: { document: "core", section: "11.11.7" }
                }),

                Event({
                    name: "BootReason", id: 0x3, access: "V", conformance: "M", priority: "critical",
                    details: "The BootReason Event shall indicate the reason that caused the device to start-up.",
                    xref: { document: "core", section: "11.11.7.4" },
                    children: [Field({
                        name: "BootReason", id: 0x0, type: "BootReasonEnum", conformance: "M",
                        details: "This field shall contain the reason for this BootReason event.",
                        xref: { document: "core", section: "11.11.7.4.1" }
                    })]
                }),

                Command({
                    name: "TestEventTrigger", id: 0x0, access: "M", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.11.6" }
                })
            ]
        }),

        Cluster({
            name: "SoftwareDiagnostics", id: 0x34, classification: "node",
            details: "The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that " +
                "may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
                "Software Diagnostics Cluster attempts to centralize all metrics that are relevant to the software " +
                "that may be running on a Node.",
            xref: { document: "core", section: "11.12" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.12.4" },
                    children: [Field({
                        name: "WTRMRK", constraint: "0", description: "Watermarks",
                        details: "Node makes available the metrics for high watermark related to memory consumption."
                    })]
                }),

                Attribute({
                    name: "ThreadMetrics", id: 0x0, type: "list", access: "R V", conformance: "O", constraint: "max 64",
                    xref: { document: "core", section: "11.12.6" },
                    children: [Field({ name: "entry", type: "ThreadMetricsStruct" })]
                }),

                Attribute({
                    name: "CurrentHeapFree", id: 0x1, type: "uint64", access: "R V", conformance: "O",
                    details: "The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are " +
                        "free for allocation. The effective amount may be smaller due to heap fragmentation or other reasons.",
                    xref: { document: "core", section: "11.12.6.2" }
                }),

                Attribute({
                    name: "CurrentHeapUsed", id: 0x2, type: "uint64", access: "R V", conformance: "O",

                    details: "The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is " +
                        "being used." +
                        "\n" +
                        "### ‌11.12.6.4. CurrentHeapHighWatermark Attribute" +
                        "\n" +
                        "The CurrentHeapHighWatermark attribute shall indicate the maximum amount of heap memory, in bytes, " +
                        "that has been used by the Node. This value shall only be reset upon a Node reboot or upon receiving " +
                        "of the ResetWatermarks command.",

                    xref: { document: "core", section: "11.12.6.3" }
                }),

                Attribute({
                    name: "CurrentHeapHighWatermark", id: 0x3, type: "uint64", access: "R V", conformance: "WTRMRK",
                    xref: { document: "core", section: "11.12.6" }
                }),

                Event({
                    name: "SoftwareFault", id: 0x0, access: "V", conformance: "O", priority: "info",

                    details: "The SoftwareFault Event shall be generated when a software fault takes place on the Node." +
                        "\n" +
                        "The ID field shall be set to the ID of the software thread in which the last software fault " +
                        "occurred." +
                        "\n" +
                        "The Name field shall be set to a manufacturer-specified name or prefix of the software thread in " +
                        "which the last software fault occurred.",

                    xref: { document: "core", section: "11.12.8.1" },

                    children: [
                        Field({ name: "Id", id: 0x0, type: "uint64", conformance: "M", default: 0 }),
                        Field({
                            name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "max 8", default: ""
                        }),

                        Field({
                            name: "FaultRecording", id: 0x2, type: "octstr", conformance: "O", constraint: "max 1024",
                            details: "The FaultRecording field shall be a manufacturer-specified payload intended to convey information " +
                                "to assist in further diagnosing or debugging a software fault. The FaultRecording field may be used " +
                                "to convey information such as, but not limited to, thread backtraces or register contents.",
                            xref: { document: "core", section: "11.12.8.1.1" }
                        })
                    ]
                }),

                Command({
                    name: "ResetWatermarks", id: 0x0, access: "M", conformance: "WTRMRK", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.12.7" }
                })
            ]
        }),

        Cluster({
            name: "ThreadNetworkDiagnostics", id: 0x35, classification: "node",
            details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
                "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
                "Thread Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
                "potential Thread radio running on a Node.",
            xref: { document: "core", section: "11.13" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.13.4" },

                    children: [
                        Field({
                            name: "PKTCNT", constraint: "0", description: "PacketCounts",
                            details: "Server supports the counts for the number of received and transmitted packets on the Thread " +
                                "interface."
                        }),
                        Field({
                            name: "ERRCNT", constraint: "1", description: "ErrorCounts",
                            details: "Server supports the counts for the number of errors that have occurred during the reception and " +
                                "transmission of packets on the Thread interface."
                        }),
                        Field({
                            name: "MLECNT", constraint: "2", description: "MleCounts",
                            details: "Server supports the counts for various MLE layer happenings."
                        }),
                        Field({
                            name: "MACCNT", constraint: "3", description: "MacCounts",
                            details: "Server supports the counts for various MAC layer happenings."
                        })
                    ]
                }),

                Attribute({
                    name: "Channel", id: 0x0, type: "uint16", access: "R V", conformance: "M", quality: "X",
                    details: "The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread " +
                        "interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall " +
                        "indicate that the Thread interface is not currently configured or operational.",
                    xref: { document: "core", section: "11.13.6.1" }
                }),

                Attribute({
                    name: "RoutingRole", id: 0x1, type: "RoutingRoleEnum", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The RoutingRole attribute shall indicate the role that this Node has within the routing of messages " +
                        "through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the " +
                        "following table. A value of null shall indicate that the Thread interface is not currently " +
                        "configured or operational.",
                    xref: { document: "core", section: "11.13.6.2" }
                }),

                Attribute({
                    name: "NetworkName", id: 0x2, type: "string", access: "R V", conformance: "M", constraint: "max 16",
                    quality: "X",
                    details: "The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network " +
                        "that the Node has been configured to join to. A value of null shall indicate that the Thread " +
                        "interface is not currently configured or operational.",
                    xref: { document: "core", section: "11.13.6.3" }
                }),

                Attribute({
                    name: "PanId", id: 0x3, type: "uint16", access: "R V", conformance: "M", quality: "X",
                    details: "The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value " +
                        "of null shall indicate that the Thread interface is not currently configured or operational.",
                    xref: { document: "core", section: "11.13.6.4" }
                }),

                Attribute({
                    name: "ExtendedPanId", id: 0x4, type: "uint64", access: "R V", conformance: "M", quality: "X",
                    details: "The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread " +
                        "network. A value of null shall indicate that the Thread interface is not currently configured or " +
                        "operational.",
                    xref: { document: "core", section: "11.13.6.5" }
                }),

                Attribute({
                    name: "MeshLocalPrefix", id: 0x5, type: "ipv6pre", access: "R V", conformance: "M", quality: "X",

                    details: "The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that " +
                        "the Node has been configured to join to. A value of null shall indicate that the Thread interface " +
                        "is not currently configured or operational." +
                        "\n" +
                        "### ‌11.13.6.7. OverrunCount Attribute" +
                        "\n" +
                        "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or " +
                        "egress, due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                        "OverrunCount attribute shall be reset to 0 upon a reboot of the Node." +
                        "\n" +
                        "### ‌11.13.6.8. NeighborTable Attribute" +
                        "\n" +
                        "The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor " +
                        "table on the Node.",

                    xref: { document: "core", section: "11.13.6.6" }
                }),

                Attribute({
                    name: "OverrunCount", id: 0x6, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
                    quality: "C",
                    xref: { document: "core", section: "11.13.6" }
                }),
                Attribute({
                    name: "NeighborTable", id: 0x7, type: "list", access: "R V", conformance: "M", default: [],
                    xref: { document: "core", section: "11.13.6" },
                    children: [Field({ name: "entry", type: "NeighborTableStruct" })]
                }),

                Attribute({
                    name: "RouteTable", id: 0x8, type: "list", access: "R V", conformance: "M", default: [],
                    details: "The RouteTable attribute shall indicate the current list of router capable Nodes for which routes " +
                        "have been established.",
                    xref: { document: "core", section: "11.13.6.9" },
                    children: [Field({ name: "entry", type: "RouteTableStruct" })]
                }),

                Attribute({
                    name: "PartitionId", id: 0x9, type: "uint32", access: "R V", conformance: "M", quality: "X",
                    details: "The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to " +
                        "which the Node is joined. This attribute shall be null if not attached to a Thread network.",
                    xref: { document: "core", section: "11.13.6.10" }
                }),

                Attribute({
                    name: "Weighting", id: 0xa, type: "uint16", access: "R V", conformance: "M", constraint: "max 255",
                    quality: "X",
                    details: "The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader " +
                        "role. This attribute shall be null if not attached to a Thread network.",
                    xref: { document: "core", section: "11.13.6.11" }
                }),

                Attribute({
                    name: "DataVersion", id: 0xb, type: "uint16", access: "R V", conformance: "M",
                    constraint: "max 255", quality: "X",
                    details: "The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. " +
                        "This attribute shall be null if not attached to a Thread network.",
                    xref: { document: "core", section: "11.13.6.12" }
                }),

                Attribute({
                    name: "StableDataVersion", id: 0xc, type: "uint16", access: "R V", conformance: "M",
                    constraint: "max 255", quality: "X",
                    details: "The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of " +
                        "data the Node currently uses. This attribute shall be null if not attached to a Thread network.",
                    xref: { document: "core", section: "11.13.6.13" }
                }),

                Attribute({
                    name: "LeaderRouterId", id: 0xd, type: "uint8", access: "R V", conformance: "M",
                    constraint: "max 62", quality: "X",
                    details: "The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to " +
                        "utilize upon becoming a router or leader on the Thread network. This attribute shall be null if not " +
                        "attached to a Thread network.",
                    xref: { document: "core", section: "11.13.6.14" }
                }),

                Attribute({
                    name: "DetachedRoleCount", id: 0xe, type: "uint16", access: "R V", conformance: "[MLECNT]",
                    default: 0, quality: "C",
                    details: "The DetachedRoleCount attribute shall indicate the number of times the Node entered the " +
                        "OT_DEVICE_ROLE_DETACHED role as specified within the Thread specification. This value shall only be " +
                        "reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.15" }
                }),

                Attribute({
                    name: "ChildRoleCount", id: 0xf, type: "uint16", access: "R V", conformance: "[MLECNT]", default: 0,
                    quality: "C",
                    details: "The ChildRoleCount attribute shall indicate the number of times the Node entered the " +
                        "OT_DEVICE_ROLE_CHILD role as specified within the Thread specification. This value shall only be " +
                        "reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.16" }
                }),

                Attribute({
                    name: "RouterRoleCount", id: 0x10, type: "uint16", access: "R V", conformance: "[MLECNT]",
                    default: 0, quality: "C",
                    details: "The RouterRoleCount attribute shall indicate the number of times the Node entered the " +
                        "OT_DEVICE_ROLE_ROUTER role as specified within the Thread specification. This value shall only be " +
                        "reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.17" }
                }),

                Attribute({
                    name: "LeaderRoleCount", id: 0x11, type: "uint16", access: "R V", conformance: "[MLECNT]",
                    default: 0, quality: "C",
                    details: "The LeaderRoleCount attribute shall indicate the number of times the Node entered the " +
                        "OT_DEVICE_ROLE_LEADER role as specified within the Thread specification. This value shall only be " +
                        "reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.18" }
                }),

                Attribute({
                    name: "AttachAttemptCount", id: 0x12, type: "uint16", access: "R V", conformance: "[MLECNT]",
                    default: 0, quality: "C",
                    details: "The AttachAttemptCount attribute shall indicate the number of attempts that have been made to " +
                        "attach to a Thread network while the Node was detached from all Thread networks. This value shall " +
                        "only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.19" }
                }),

                Attribute({
                    name: "PartitionIdChangeCount", id: 0x13, type: "uint16", access: "R V", conformance: "[MLECNT]",
                    default: 0, quality: "C",
                    details: "The PartitionIdChangeCount attribute shall indicate the number of times that the Thread network " +
                        "that the Node is connected to has changed its Partition ID. This value shall only be reset upon a " +
                        "Node reboot.",
                    xref: { document: "core", section: "11.13.6.20" }
                }),

                Attribute({
                    name: "BetterPartitionAttachAttemptCount", id: 0x14, type: "uint16", access: "R V",
                    conformance: "[MLECNT]", default: 0, quality: "C",
                    details: "The BetterPartitionAttachAttemptCount attribute shall indicate the number of times a Node has " +
                        "attempted to attach to a different Thread partition that it has determined is better than the " +
                        "partition it is currently attached to. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.21" }
                }),

                Attribute({
                    name: "ParentChangeCount", id: 0x15, type: "uint16", access: "R V", conformance: "[MLECNT]",
                    default: 0, quality: "C",
                    details: "The ParentChangeCount attribute shall indicate the number of times a Node has changed its parent. " +
                        "This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.22" }
                }),

                Attribute({
                    name: "TxTotalCount", id: 0x16, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The TxTotalCount attribute shall indicate the total number of unique MAC frame transmission " +
                        "requests. The TxTotalCount attribute shall only be incremented by 1 for each MAC transmission " +
                        "request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value " +
                        "shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.23" }
                }),

                Attribute({
                    name: "TxUnicastCount", id: 0x17, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The TxUnicastCount attribute shall indicate the total number of unique unicast MAC frame " +
                        "transmission requests. The TxUnicastCount attribute shall only be incremented by 1 for each unicast " +
                        "MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                        "retransmissions. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.24" }
                }),

                Attribute({
                    name: "TxBroadcastCount", id: 0x18, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The TxBroadcastCount attribute shall indicate the total number of unique broadcast MAC frame " +
                        "transmission requests. The TxBroadcastCount attribute shall only be incremented by 1 for each " +
                        "broadcast MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                        "retransmissions. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.25" }
                }),

                Attribute({
                    name: "TxAckRequestedCount", id: 0x19, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The TxAckRequestedCount attribute shall indicate the total number of unique MAC frame transmission " +
                        "requests with requested acknowledgment. The TxAckRequestedCount attribute shall only be incremented " +
                        "by 1 for each MAC transmission request with requested acknowledgment regardless of the amount of " +
                        "CCA failures, CSMA-CA attempts, or retransmissions. This value shall only be reset upon a Node " +
                        "reboot.",
                    xref: { document: "core", section: "11.13.6.26" }
                }),

                Attribute({
                    name: "TxAckedCount", id: 0x1a, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The TxAckedCount attribute shall indicate the total number of unique MAC frame transmission " +
                        "requests that were acked. The TxAckedCount attribute shall only be incremented by 1 for each" +
                        "\n" +
                        "MAC transmission request that is acked regardless of the amount of CCA failures, CSMA-CA attempts, " +
                        "or retransmissions. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.27" }
                }),

                Attribute({
                    name: "TxNoAckRequestedCount", id: 0x1b, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The TxNoAckRequestedCount attribute shall indicate the total number of unique MAC frame " +
                        "transmission requests without requested acknowledgment. The TxNoAckRequestedCount attribute shall " +
                        "only be incremented by 1 for each MAC transmission request that is does not request acknowledgement " +
                        "regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
                    xref: { document: "core", section: "11.13.6.28" }
                }),

                Attribute({
                    name: "TxDataCount", id: 0x1c, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The TxDataCount attribute shall indicate the total number of unique MAC Data frame transmission " +
                        "requests. The TxDataCount attribute shall only be incremented by 1 for each MAC Data frame " +
                        "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                        "retransmissions. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.29" }
                }),

                Attribute({
                    name: "TxDataPollCount", id: 0x1d, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The TxDataPollCount attribute shall indicate the total number of unique MAC Data Poll frame " +
                        "transmission requests. The TxDataPollCount attribute shall only be incremented by 1 for each MAC " +
                        "Data Poll frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                        "retransmissions. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.30" }
                }),

                Attribute({
                    name: "TxBeaconCount", id: 0x1e, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The TxBeaconCount attribute shall indicate the total number of unique MAC Beacon frame transmission " +
                        "requests. The TxBeaconCount attribute shall only be incremented by 1 for each MAC Beacon frame " +
                        "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
                    xref: { document: "core", section: "11.13.6.31" }
                }),

                Attribute({
                    name: "TxBeaconRequestCount", id: 0x1f, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The TxBeaconRequestCount attribute shall indicate the total number of unique MAC Beacon Request " +
                        "frame transmission requests. The TxBeaconRequestCount attribute shall only be incremented by 1 for " +
                        "each MAC Beacon Request frame transmission request regardless of the amount of CCA failures, " +
                        "CSMA-CA attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.32" }
                }),

                Attribute({
                    name: "TxOtherCount", id: 0x20, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The TxOtherCount attribute shall indicate the total number of unique MAC frame transmission " +
                        "requests that are not counted by any other attribute. The TxOtherCount attribute shall only be " +
                        "incremented by 1 for each MAC frame transmission request regardless of the amount of CCA failures, " +
                        "CSMA-CA attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.33" }
                }),

                Attribute({
                    name: "TxRetryCount", id: 0x21, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The TxRetryCount attribute shall indicate the total number of MAC retransmission attempts. The " +
                        "TxRetryCount attribute shall only be incremented by 1 for each retransmission attempt that may" +
                        "\n" +
                        "be triggered by lack of acknowledgement, CSMA/CA failure, or other type of transmission error. This " +
                        "value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.34" }
                }),

                Attribute({
                    name: "TxDirectMaxRetryExpiryCount", id: 0x22, type: "uint32", access: "R V",
                    conformance: "[MACCNT]", default: 0, quality: "C",
                    details: "The TxDirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC " +
                        "transmission packets that meet maximal retry limit for direct packets. The " +
                        "TxDirectMaxRetryExpiryCount attribute shall only be incremented by 1 for each unique MAC " +
                        "transmission packets that meets the maximal retry limit for direct packets. This value shall only " +
                        "be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.35" }
                }),

                Attribute({
                    name: "TxIndirectMaxRetryExpiryCount", id: 0x23, type: "uint32", access: "R V",
                    conformance: "[MACCNT]", default: 0, quality: "C",
                    details: "The TxIndirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC " +
                        "transmission packets that meet maximal retry limit for indirect packets. The " +
                        "TxIndirectMaxRetryExpiryCount attribute shall only be incremented by 1 for each unique MAC " +
                        "transmission packets that meets the maximal retry limit for indirect packets. This value shall only " +
                        "be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.36" }
                }),

                Attribute({
                    name: "TxErrCcaCount", id: 0x24, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The TxErrCcaCount attribute shall indicate the total number of CCA failures. The TxErrCcaCount " +
                        "attribute shall only be incremented by 1 for each instance of a CCA failure. This value shall only " +
                        "be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.37" }
                }),

                Attribute({
                    name: "TxErrAbortCount", id: 0x25, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The TxErrAbortCount attribute shall indicate the total number of unique MAC transmission request " +
                        "failures caused by an abort error. The TxErrAbortCount attribute shall only be incremented by 1 for " +
                        "each unique MAC transmission request failure caused by an abort error.",
                    xref: { document: "core", section: "11.13.6.38" }
                }),

                Attribute({
                    name: "TxErrBusyChannelCount", id: 0x26, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The TxErrBusyChannelCount attribute shall indicate the total number of unique MAC transmission " +
                        "request failures caused by an error as the result of a busy channel (a CSMA/CA fail). The " +
                        "TxErrBusyChannelCount attribute shall only be incremented by 1 for each unique MAC transmission " +
                        "request failure caused by a busy channel such as a CSMA/CA failure.",
                    xref: { document: "core", section: "11.13.6.39" }
                }),

                Attribute({
                    name: "RxTotalCount", id: 0x27, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The RxTotalCount attribute shall indicate the total number of received unique MAC frames. This " +
                        "value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.40" }
                }),

                Attribute({
                    name: "RxUnicastCount", id: 0x28, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxUnicastCount attribute shall indicate the total number of received unique unicast MAC frames. " +
                        "This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.41" }
                }),

                Attribute({
                    name: "RxBroadcastCount", id: 0x29, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxBroadcastCount attribute shall indicate the total number of received unique broadcast MAC " +
                        "frames. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.42" }
                }),

                Attribute({
                    name: "RxDataCount", id: 0x2a, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The RxDataCount attribute shall indicate the total number of received unique MAC Data frames. This " +
                        "value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.43" }
                }),

                Attribute({
                    name: "RxDataPollCount", id: 0x2b, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxDataPollCount attribute shall indicate the total number of received unique MAC Data Poll " +
                        "frames. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.44" }
                }),

                Attribute({
                    name: "RxBeaconCount", id: 0x2c, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The RxBeaconCount attribute shall indicate the total number of received unique MAC Beacon frames. " +
                        "This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.45" }
                }),

                Attribute({
                    name: "RxBeaconRequestCount", id: 0x2d, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxBeaconRequestCount attribute shall indicate the total number of received unique MAC Beacon " +
                        "Request frames. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.46" }
                }),

                Attribute({
                    name: "RxOtherCount", id: 0x2e, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The RxOtherCount attribute shall indicate the total number of received unique MAC frame requests " +
                        "that are not counted by any other attribute. This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.47" }
                }),

                Attribute({
                    name: "RxAddressFilteredCount", id: 0x2f, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxAddressFilteredCount attribute shall indicate the total number of received unique MAC frame " +
                        "requests that have been dropped as a result of MAC filtering. This value shall only be reset upon a " +
                        "Node reboot.",
                    xref: { document: "core", section: "11.13.6.48" }
                }),

                Attribute({
                    name: "RxDestAddrFilteredCount", id: 0x30, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxDestAddrFilteredCount attribute shall indicate the total number of received unique MAC frame " +
                        "requests that have been dropped as a result of a destination address check. This value shall only " +
                        "be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.49" }
                }),

                Attribute({
                    name: "RxDuplicatedCount", id: 0x31, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxDuplicatedCount attribute shall indicate the total number of received MAC frame requests that " +
                        "have been dropped as a result of being a duplicate of a previously received MAC frame request. This " +
                        "value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.50" }
                }),

                Attribute({
                    name: "RxErrNoFrameCount", id: 0x32, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxErrNoFrameCount attribute shall indicate the total number of received unique MAC frame " +
                        "requests that have been dropped as a result of missing or malformed frame contents. This value " +
                        "shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.51" }
                }),

                Attribute({
                    name: "RxErrUnknownNeighborCount", id: 0x33, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxErrUnknownNeighborCount attribute shall indicate the total number of received unique MAC " +
                        "frame requests that have been dropped as a result of originating from an unknown neighbor device. " +
                        "This value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.52" }
                }),

                Attribute({
                    name: "RxErrInvalidSrcAddrCount", id: 0x34, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxErrInvalidSrcAddrCount attribute shall indicate the total number of received unique MAC frame " +
                        "requests that have been dropped as a result of containing an invalid source address. This value " +
                        "shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.53" }
                }),

                Attribute({
                    name: "RxErrSecCount", id: 0x35, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The RxErrSecCount attribute shall indicate the total number of received unique MAC frame requests " +
                        "that have been dropped as a result of an error with the security of the received frame. This value " +
                        "shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.54" }
                }),

                Attribute({
                    name: "RxErrFcsCount", id: 0x36, type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0,
                    quality: "C",
                    details: "The RxErrFcsCount attribute shall indicate the total number of received unique MAC frame requests " +
                        "that have been dropped as a result of an error with the FCS of the received frame. This value shall " +
                        "only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.55" }
                }),

                Attribute({
                    name: "RxErrOtherCount", id: 0x37, type: "uint32", access: "R V", conformance: "[MACCNT]",
                    default: 0, quality: "C",
                    details: "The RxErrOtherCount attribute shall indicate the total number of received unique MAC frame requests " +
                        "that have been dropped as a result of an error that is not counted by any other attribute. This " +
                        "value shall only be reset upon a Node reboot.",
                    xref: { document: "core", section: "11.13.6.56" }
                }),

                Attribute({
                    name: "ActiveTimestamp", id: 0x38, type: "uint64", access: "R V", conformance: "O", default: 0,
                    quality: "X",
                    details: "This attribute shall be null when there is no dataset configured.",
                    xref: { document: "core", section: "11.13.6.57" }
                }),

                Attribute({
                    name: "PendingTimestamp", id: 0x39, type: "uint64", access: "R V", conformance: "O", default: 0,
                    quality: "X",
                    details: "This attribute shall be null when there is no dataset configured.",
                    xref: { document: "core", section: "11.13.6.58" }
                }),

                Attribute({
                    name: "Delay", id: 0x3a, type: "uint32", access: "R V", conformance: "O", default: 0, quality: "X",
                    details: "This attribute shall be null when there is no dataset configured.",
                    xref: { document: "core", section: "11.13.6.59" }
                }),

                Attribute({
                    name: "SecurityPolicy", id: 0x3b, type: "SecurityPolicy", access: "R V", conformance: "M",
                    quality: "X",
                    details: "The SecurityPolicy attribute indicates the current security policies for the Thread partition to " +
                        "which" +
                        "\n" +
                        "a Node is connected. This attribute shall be null when there is no dataset configured.",
                    xref: { document: "core", section: "11.13.6.60" }
                }),

                Attribute({
                    name: "ChannelPage0Mask", id: 0x3c, type: "octstr", access: "R V", conformance: "M",
                    constraint: "4", quality: "X",
                    details: "The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM " +
                        "band. The channels are represented in most significant bit order, with bit value 1 meaning " +
                        "selected, bit value 0 meaning unselected. For example, the most significant bit of the left-most " +
                        "byte indicates channel 0. If channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. " +
                        "This attribute shall be null when there is no dataset configured.",
                    xref: { document: "core", section: "11.13.6.61" }
                }),

                Attribute({
                    name: "OperationalDatasetComponents", id: 0x3d, type: "OperationalDatasetComponents", access: "R V",
                    conformance: "M", quality: "X",
                    details: "The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of " +
                        "various operationally acquired values.",
                    xref: { document: "core", section: "11.13.6.62" }
                }),

                Attribute({
                    name: "ActiveNetworkFaults", id: 0x3e, type: "list", access: "R V", conformance: "M",
                    constraint: "max 4",

                    details: "The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. " +
                        "When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be " +
                        "added to this list. This list shall NOT contain more than one instance of a specific " +
                        "NetworkFaultEnum value. When the Node detects that all conditions contributing to a fault has been " +
                        "cleared, the corresponding NetworkFaultEnum value shall be removed from this list. An empty list " +
                        "shall indicate there are currently no active faults. The order of this list SHOULD have no " +
                        "significance. Clients interested in monitoring changes in active faults may subscribe to this " +
                        "attribute, or they may subscribe to NetworkFaultChange",

                    xref: { document: "core", section: "11.13.6.63" },
                    children: [Field({ name: "entry", type: "NetworkFaultEnum" })]
                }),

                Event({
                    name: "ConnectionStatus", id: 0x0, access: "V", conformance: "O", priority: "info",
                    details: "The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has " +
                        "changed.",
                    xref: { document: "core", section: "11.13.8.2" },
                    children: [
                        Field({ name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M" })
                    ]
                }),

                Event({
                    name: "NetworkFaultChange", id: 0x1, access: "V", conformance: "O", priority: "info",
                    details: "The NetworkFaultChange Event shall indicate a change in the set of network faults currently " +
                        "detected by the Node.",
                    xref: { document: "core", section: "11.13.8.1" },

                    children: [
                        Field({
                            name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 4",
                            details: "This field shall represent the set of faults currently detected, as per Section 11.13.5.1, " +
                                "“NetworkFaultEnum Type”.",
                            xref: { document: "core", section: "11.13.8.1.1" },
                            children: [Field({ name: "entry", type: "NetworkFaultEnum" })]
                        }),

                        Field({
                            name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 4",
                            details: "This field shall represent the set of faults detected prior to this change event, as per Section " +
                                "11.13.5.1, “NetworkFaultEnum Type”.",
                            xref: { document: "core", section: "11.13.8.1.2" },
                            children: [Field({ name: "entry", type: "NetworkFaultEnum" })]
                        })
                    ]
                }),

                Command({
                    name: "ResetCounts", id: 0x0, access: "M", conformance: "ERRCNT", direction: "request",
                    response: "status",

                    details: "Reception of this command shall reset the following attributes to 0:" +
                        "\n" +
                        "  • OverrunCount" +
                        "\n" +
                        "This command has no associated data. Upon completion, this command shall send a status code set to " +
                        "a value of SUCCESS back to the initiator.",

                    xref: { document: "core", section: "11.13.7.1" }
                }),

                Datatype({
                    name: "IsChild Field", type: "struct",

                    details: "This field shall specify if the neighboring Node is a direct child of the Node reporting the " +
                        "NeighborTable attribute." +
                        "\n" +
                        "### ‌11.13.5.5. RouteTableStruct Type" +
                        "\n" +
                        "This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table " +
                        "entry corresponds." +
                        "\n" +
                        "This field shall specify the RLOC16 for the Node for which this route table entry corresponds.",

                    xref: { document: "core", section: "11.13.5.14" },

                    children: [
                        Field({ name: "ExtAddress", id: 0x0, type: "uint64", conformance: "M" }),
                        Field({ name: "Rloc16", id: 0x1, type: "uint16", conformance: "M" }),
                        Field({ name: "RouterId", id: 0x2, type: "uint8", conformance: "M" }),
                        Field({ name: "NextHop", id: 0x3, type: "uint8", conformance: "M" }),
                        Field({ name: "PathCost", id: 0x4, type: "uint8", conformance: "M" }),
                        Field({ name: "LqiIn", id: 0x5, type: "uint8", conformance: "M" }),
                        Field({ name: "LqiOut", id: 0x6, type: "uint8", conformance: "M" }),
                        Field({ name: "Age", id: 0x7, type: "uint8", conformance: "M" }),
                        Field({ name: "Allocated", id: 0x8, type: "bool", conformance: "M" }),
                        Field({ name: "LinkEstablished", id: 0x9, type: "bool", conformance: "M" })
                    ]
                }),

                Datatype({
                    name: "LinkEstablished Field", type: "struct",
                    details: "This field shall specify if a link has been established to the Node for which this route table " +
                        "entry corresponds." +
                        "\n" +
                        "### ‌11.13.5.6. SecurityPolicy Type",
                    xref: { document: "core", section: "11.13.5.21" },
                    children: [
                        Field({ name: "RotationTime", id: 0x0, type: "uint16", conformance: "M" }),
                        Field({ name: "Flags", id: 0x1, type: "uint16", conformance: "M" })
                    ]
                }),

                Datatype({
                    name: "Flags Field", type: "struct",
                    details: "This field shall specify the flags as specified in Thread 1.3.0 section 8.10.1.15. This attribute " +
                        "shall be null when there is no dataset configured." +
                        "\n" +
                        "### ‌11.13.5.7. OperationalDatasetComponents Type",
                    xref: { document: "core", section: "11.13.5.23" },

                    children: [
                        Field({ name: "ActiveTimestampPresent", id: 0x0, type: "bool", conformance: "M" }),
                        Field({ name: "PendingTimestampPresent", id: 0x1, type: "bool", conformance: "M" }),
                        Field({ name: "MasterKeyPresent", id: 0x2, type: "bool", conformance: "M" }),
                        Field({ name: "NetworkNamePresent", id: 0x3, type: "bool", conformance: "M" }),
                        Field({ name: "ExtendedPanIdPresent", id: 0x4, type: "bool", conformance: "M" }),
                        Field({ name: "MeshLocalPrefixPresent", id: 0x5, type: "bool", conformance: "M" }),
                        Field({ name: "DelayPresent", id: 0x6, type: "bool", conformance: "M" }),
                        Field({ name: "PanIdPresent", id: 0x7, type: "bool", conformance: "M" }),
                        Field({ name: "ChannelPresent", id: 0x8, type: "bool", conformance: "M" }),
                        Field({ name: "PskcPresent", id: 0x9, type: "bool", conformance: "M" }),
                        Field({ name: "SecurityPolicyPresent", id: 0xa, type: "bool", conformance: "M" }),
                        Field({ name: "ChannelMaskPresent", id: 0xb, type: "bool", conformance: "M" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "WiFiNetworkDiagnostics", id: 0x36, classification: "node",
            details: "The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
                "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
                "Wi-Fi Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
                "potential Wi-Fi radio running on a Node.",
            xref: { document: "core", section: "11.14" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.14.4" },

                    children: [
                        Field({
                            name: "PKTCNT", constraint: "0", description: "PacketCounts",
                            details: "Node makes available the counts for the number of received and transmitted packets on the Wi-Fi " +
                                "interface."
                        }),
                        Field({
                            name: "ERRCNT", constraint: "1", description: "ErrorCounts",
                            details: "Node makes available the counts for the number of errors that have occurred during the reception " +
                                "and transmission of packets on the Wi-Fi interface."
                        })
                    ]
                }),

                Attribute({
                    name: "Bssid", id: 0x0, type: "octstr", access: "R V", conformance: "M", constraint: "6",
                    default: null, quality: "X",
                    details: "The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently " +
                        "connected.",
                    xref: { document: "core", section: "11.14.6.1" }
                }),

                Attribute({
                    name: "SecurityType", id: 0x1, type: "SecurityTypeEnum", access: "R V", conformance: "M",
                    default: "null", quality: "X",
                    details: "The SecurityType attribute shall indicate the current type of Wi-Fi security used.",
                    xref: { document: "core", section: "11.14.6.2" }
                }),

                Attribute({
                    name: "WiFiVersion", id: 0x2, type: "WiFiVersionEnum", access: "R V", conformance: "M",
                    default: "null", quality: "X",
                    details: "The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, " +
                        "per the table below.",
                    xref: { document: "core", section: "11.14.6.3" }
                }),

                Attribute({
                    name: "ChannelNumber", id: 0x3, type: "uint16", access: "R V", conformance: "M", default: null,
                    quality: "X",
                    details: "The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently " +
                        "operating on.",
                    xref: { document: "core", section: "11.14.6.4" }
                }),

                Attribute({
                    name: "Rssi", id: 0x4, type: "int8", access: "R V", conformance: "M", constraint: "-120 to 0",
                    default: null, quality: "X C",

                    details: "The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm." +
                        "\n" +
                        "### ‌11.14.6.6. BeaconLostCount Attribute" +
                        "\n" +
                        "The BeaconLostCount attribute shall indicate the count of the number of missed beacons the Node has " +
                        "detected. If the Node does not have an ability to count beacons expected and not received, this " +
                        "value may remain set to zero." +
                        "\n" +
                        "### ‌11.14.6.7. BeaconRxCount Attribute" +
                        "\n" +
                        "The BeaconRxCount attribute shall indicate the count of the number of received beacons. The total " +
                        "number of expected beacons that could have been received during the interval since association " +
                        "SHOULD match the sum of BeaconRxCount and BeaconLostCount. If the Node does not have an ability to " +
                        "report count of beacons received, this value may remain set to zero." +
                        "\n" +
                        "### ‌11.14.6.8. PacketMulticastRxCount Attribute" +
                        "\n" +
                        "The PacketMulticastRxCount attribute shall indicate the number of multicast packets received by the " +
                        "Node." +
                        "\n" +
                        "### ‌11.14.6.9. PacketMulticastTxCount Attribute" +
                        "\n" +
                        "The PacketMulticastTxCount attribute shall indicate the number of multicast packets transmitted by " +
                        "the Node." +
                        "\n" +
                        "### ‌11.14.6.10. PacketUnicastRxCount Attribute" +
                        "\n" +
                        "The PacketUnicastRxCount attribute shall indicate the number of unicast packets received by the " +
                        "Node." +
                        "\n" +
                        "### ‌11.14.6.11. PacketUnicastTxCount Attribute" +
                        "\n" +
                        "The PacketUnicastTxCount attribute shall indicate the number of unicast packets transmitted by the " +
                        "Node.",

                    xref: { document: "core", section: "11.14.6.5" }
                }),

                Attribute({
                    name: "BeaconLostCount", id: 0x5, type: "uint32", access: "R V", conformance: "ERRCNT", default: 0,
                    quality: "X C",
                    xref: { document: "core", section: "11.14.6" }
                }),
                Attribute({
                    name: "BeaconRxCount", id: 0x6, type: "uint32", access: "R V", conformance: "PKTCNT", default: 0,
                    quality: "X C",
                    xref: { document: "core", section: "11.14.6" }
                }),
                Attribute({
                    name: "PacketMulticastRxCount", id: 0x7, type: "uint32", access: "R V", conformance: "PKTCNT",
                    default: 0, quality: "X C",
                    xref: { document: "core", section: "11.14.6" }
                }),
                Attribute({
                    name: "PacketMulticastTxCount", id: 0x8, type: "uint32", access: "R V", conformance: "PKTCNT",
                    default: 0, quality: "X C",
                    xref: { document: "core", section: "11.14.6" }
                }),
                Attribute({
                    name: "PacketUnicastRxCount", id: 0x9, type: "uint32", access: "R V", conformance: "PKTCNT",
                    default: 0, quality: "X C",
                    xref: { document: "core", section: "11.14.6" }
                }),
                Attribute({
                    name: "PacketUnicastTxCount", id: 0xa, type: "uint32", access: "R V", conformance: "PKTCNT",
                    default: 0, quality: "X C",
                    xref: { document: "core", section: "11.14.6" }
                }),

                Attribute({
                    name: "CurrentMaxRate", id: 0xb, type: "uint64", access: "R V", conformance: "O", default: 0,
                    quality: "X C",
                    details: "The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in " +
                        "bits-per-second.",
                    xref: { document: "core", section: "11.14.6.12" }
                }),

                Attribute({
                    name: "OverrunCount", id: 0xc, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
                    quality: "X C",
                    details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or " +
                        "egress, due to lack of buffer memory to retain all packets on the network interface. The " +
                        "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
                    xref: { document: "core", section: "11.14.6.13" }
                }),

                Event({
                    name: "Disconnection", id: 0x0, access: "V", conformance: "O", priority: "info",
                    details: "The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a " +
                        "result of de-authenticated or dis-association and indicates the reason.",
                    xref: { document: "core", section: "11.14.8.1" },

                    children: [Field({
                        name: "ReasonCode", id: 0x0, type: "uint16", conformance: "M",
                        details: "This field shall contain the Reason Code field value for the Disassociation or Deauthentication " +
                            "event that caused the disconnection and the value shall align with Table 9-49 \"Reason codes\" of " +
                            "IEEE 802.11-2020.",
                        xref: { document: "core", section: "11.14.8.1.1" }
                    })]
                }),

                Event({
                    name: "AssociationFailure", id: 0x1, access: "V", conformance: "O", priority: "info",
                    details: "The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to " +
                        "a Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all " +
                        "internal retries of its supplicant.",
                    xref: { document: "core", section: "11.14.8.2" },

                    children: [
                        Field({
                            name: "AssociationFailureCause", id: 0x0, type: "AssociationFailureCauseEnum", conformance: "M",
                            details: "The Status field shall be set to a value from the AssociationFailureCauseEnum.",
                            xref: { document: "core", section: "11.14.8.2.1" }
                        }),

                        Field({
                            name: "Status", id: 0x1, type: "uint16", conformance: "M",

                            details: "The Status field shall be set to the Status Code value that was present in the last frame related " +
                                "to association where Status Code was not equal to zero and which caused the failure of a last trial " +
                                "attempt, if this last failure was due to one of the following Management frames:" +
                                "\n" +
                                "  • Association Response (Type 0, Subtype 1)" +
                                "\n" +
                                "  • Reassociation Response (Type 0, Subtype 3)" +
                                "\n" +
                                "  • Authentication (Type 0, Subtype 11)" +
                                "\n" +
                                "Table 9-50 \"Status codes\" of IEEE 802.11-2020 contains a description of all values possible.",

                            xref: { document: "core", section: "11.14.8.2.2" }
                        })
                    ]
                }),

                Event({
                    name: "ConnectionStatus", id: 0x2, access: "V", conformance: "O", priority: "info",
                    details: "The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has " +
                        "changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is " +
                        "successfully associated to a Wi-Fi Access Point.",
                    xref: { document: "core", section: "11.14.8.3" },
                    children: [
                        Field({ name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M" })
                    ]
                }),

                Command({
                    name: "ResetCounts", id: 0x0, access: "O", conformance: "ERRCNT", direction: "request",
                    response: "status",

                    details: "Reception of this command shall reset the following attributes to 0:" +
                        "\n" +
                        "  • BeaconLostCount" +
                        "\n" +
                        "  • BeaconRxCount" +
                        "\n" +
                        "  • PacketMulticastRxCount" +
                        "\n" +
                        "  • PacketMulticastTxCount" +
                        "\n" +
                        "  • PacketUnicastRxCount" +
                        "\n" +
                        "  • PacketUnicastTxCount" +
                        "\n" +
                        "This command has no associated data.",

                    xref: { document: "core", section: "11.14.7.1" }
                })
            ]
        }),

        Cluster({
            name: "EthernetNetworkDiagnostics", id: 0x37, classification: "node",
            details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics " +
                "metrics that may be used by a Node to assist a user or Administrator in diagnosing potential " +
                "problems. The Ethernet Network Diagnostics Cluster attempts to centralize all metrics that are " +
                "relevant to a potential Ethernet connection to a Node.",
            xref: { document: "core", section: "11.15" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.15.4" },

                    children: [
                        Field({
                            name: "PKTCNT", constraint: "0", description: "PacketCounts",
                            details: "Node makes available the counts for the number of received and transmitted packets on the ethernet " +
                                "interface."
                        }),
                        Field({
                            name: "ERRCNT", constraint: "1", description: "ErrorCounts",
                            details: "Node makes available the counts for the number of errors that have occurred during the reception " +
                                "and transmission of packets on the ethernet interface."
                        })
                    ]
                }),

                Attribute({
                    name: "PhyRate", id: 0x0, type: "PHYRateEnum", access: "R V", conformance: "O", default: "null",
                    quality: "X",
                    details: "The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical " +
                        "layer of the Node. A value of null shall indicate that the interface is not currently configured or " +
                        "operational.",
                    xref: { document: "core", section: "11.15.6.1" }
                }),

                Attribute({
                    name: "FullDuplex", id: 0x1, type: "bool", access: "R V", conformance: "O", default: null,
                    quality: "X",

                    details: "The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex " +
                        "operating mode. A value of null shall indicate that the interface is not currently configured or " +
                        "operational." +
                        "\n" +
                        "### ‌11.15.6.3. PacketRxCount Attribute" +
                        "\n" +
                        "The PacketRxCount attribute shall indicate the number of packets that have been received on the " +
                        "ethernet network interface. The PacketRxCount attribute shall be reset to 0 upon a reboot of the " +
                        "Node." +
                        "\n" +
                        "### ‌11.15.6.4. PacketTxCount Attribute" +
                        "\n" +
                        "The PacketTxCount attribute shall indicate the number of packets that have been successfully " +
                        "transferred on the ethernet network interface. The PacketTxCount attribute shall be reset to 0 upon " +
                        "a reboot of the Node." +
                        "\n" +
                        "### ‌11.15.6.5. TxErrCount Attribute" +
                        "\n" +
                        "The TxErrCount attribute shall indicate the number of failed packet transmissions that have " +
                        "occurred on the ethernet network interface. The TxErrCount attribute shall be reset to 0 upon a " +
                        "reboot of the Node." +
                        "\n" +
                        "### ‌11.15.6.6. CollisionCount Attribute" +
                        "\n" +
                        "The CollisionCount attribute shall indicate the number of collisions that have occurred while " +
                        "attempting to transmit a packet on the ethernet network interface. The CollisionCount attribute " +
                        "shall be reset to 0 upon a reboot of the Node.",

                    xref: { document: "core", section: "11.15.6.2" }
                }),

                Attribute({
                    name: "PacketRxCount", id: 0x2, type: "uint64", access: "R V", conformance: "PKTCNT", default: 0,
                    quality: "C",
                    xref: { document: "core", section: "11.15.6" }
                }),
                Attribute({
                    name: "PacketTxCount", id: 0x3, type: "uint64", access: "R V", conformance: "PKTCNT", default: 0,
                    quality: "C",
                    xref: { document: "core", section: "11.15.6" }
                }),
                Attribute({
                    name: "TxErrCount", id: 0x4, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
                    quality: "C",
                    xref: { document: "core", section: "11.15.6" }
                }),
                Attribute({
                    name: "CollisionCount", id: 0x5, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
                    quality: "C",
                    xref: { document: "core", section: "11.15.6" }
                }),

                Attribute({
                    name: "OverrunCount", id: 0x6, type: "uint64", access: "R V", conformance: "ERRCNT", default: 0,
                    quality: "C",
                    details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or " +
                        "egress, due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                        "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
                    xref: { document: "core", section: "11.15.6.7" }
                }),

                Attribute({
                    name: "CarrierDetect", id: 0x7, type: "bool", access: "R V", conformance: "O", default: null,
                    quality: "X C",
                    details: "The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present " +
                        "on the ethernet network interface. A value of null shall indicate that the interface is not " +
                        "currently configured or operational.",
                    xref: { document: "core", section: "11.15.6.8" }
                }),

                Attribute({
                    name: "TimeSinceReset", id: 0x8, type: "uint64", access: "R V", conformance: "O", default: 0,
                    quality: "C",
                    details: "The TimeSinceReset attribute shall indicate the duration of time, in minutes, that it has been " +
                        "since the ethernet network interface has reset for any reason.",
                    xref: { document: "core", section: "11.15.6.9" }
                }),

                Command({
                    name: "ResetCounts", id: 0x0, access: "M", conformance: "PKTCNT | ERRCNT", direction: "request",
                    response: "status",

                    details: "Reception of this command shall reset the following attributes to 0:" +
                        "\n" +
                        "  • PacketRxCount" +
                        "\n" +
                        "  • PacketTxCount" +
                        "\n" +
                        "  • TxErrCount" +
                        "\n" +
                        "  • CollisionCount" +
                        "\n" +
                        "  • OverrunCount" +
                        "\n" +
                        "This command has no associated data.",

                    xref: { document: "core", section: "11.15.7.1" }
                })
            ]
        }),

        Cluster({
            name: "TimeSync", id: 0x38, classification: "node",

            details: "Accurate time is required for a number of reasons, including scheduling, display and validating " +
                "security materials." +
                "\n" +
                "This section describes a mechanism for Nodes to achieve and maintain time synchronization. The Time " +
                "Synchronization cluster provides attributes for reading a Node’s current time. It also allows " +
                "Administrators to set current time, time zone and daylight savings time (DST) settings." +
                "\n" +
                "The Time Synchronization cluster may be present on the root node endpoint, and shall NOT be present " +
                "on any other Endpoint of any Node.",

            xref: { document: "core", section: "11.16" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.16.5" },

                    children: [
                        Field({
                            name: "TZ", constraint: "0", description: "TimeZone",
                            details: "Server supports time zone."
                        }),
                        Field({
                            name: "NTPC", constraint: "1", description: "NtpClient",
                            details: "Server supports an NTP or SNTP client."
                        }),
                        Field({
                            name: "NTPS", constraint: "2", description: "NtpServer",
                            details: "Server supports an NTP server role."
                        }),
                        Field({
                            name: "TSC", constraint: "3", description: "TimeSyncClient",
                            details: "Time synchronization client cluster is present."
                        })
                    ]
                }),

                Attribute({
                    name: "UtcTime", id: 0x0, type: "epoch-us", access: "R V", conformance: "M", default: null,
                    quality: "X C",
                    xref: { document: "core", section: "11.16.8" }
                }),
                Attribute({
                    name: "Granularity", id: 0x1, type: "GranularityEnum", access: "R V", conformance: "M",
                    constraint: "desc", default: "NoTimeGranularity",
                    xref: { document: "core", section: "11.16.8" }
                }),
                Attribute({
                    name: "TimeSource", id: 0x2, type: "TimeSourceEnum", access: "R V", conformance: "O",
                    constraint: "desc", default: "None",
                    xref: { document: "core", section: "11.16.8" }
                }),
                Attribute({
                    name: "TrustedTimeSource", id: 0x3, type: "TrustedTimeSourceStruct", access: "R V",
                    conformance: "TSC", default: "null", quality: "X N",
                    xref: { document: "core", section: "11.16.8" }
                }),
                Attribute({
                    name: "DefaultNtp", id: 0x4, type: "string", access: "R V", conformance: "NTPC",
                    constraint: "max 128", default: null, quality: "X N",
                    xref: { document: "core", section: "11.16.8" }
                }),

                Attribute({
                    name: "TimeZone", id: 0x5, type: "list", access: "R V", conformance: "TZ", constraint: "1 to 2",
                    default: "[{0,0}]", quality: "N",
                    xref: { document: "core", section: "11.16.8" },
                    children: [Field({ name: "entry", type: "TimeZoneStruct" })]
                }),

                Attribute({
                    name: "DstOffset", id: 0x6, type: "list", access: "R V", conformance: "TZ", default: [],
                    quality: "N",
                    xref: { document: "core", section: "11.16.8" },
                    children: [Field({ name: "entry", type: "DSTOffsetStruct" })]
                }),

                Attribute({
                    name: "LocalTime", id: 0x7, type: "epoch-us", access: "R V", conformance: "TZ", default: null,
                    quality: "X C",
                    xref: { document: "core", section: "11.16.8" }
                }),
                Attribute({
                    name: "TimeZoneDatabase", id: 0x8, type: "TimeZoneDatabaseEnum", access: "R V", conformance: "TZ",
                    default: "None", quality: "F",
                    xref: { document: "core", section: "11.16.8" }
                }),

                Attribute({
                    name: "NtpServerAvailable", id: 0x9, type: "bool", access: "R V", conformance: "NTPS",
                    default: true,
                    details: "If the node is running an RFC 5905 NTPv4 compliant server on port 123, this value shall be True. If " +
                        "the node is not currently running an NTP server, this value shall be False.",
                    xref: { document: "core", section: "11.16.8.10" }
                }),

                Attribute({
                    name: "TimeZoneListMaxSize", id: 0xa, type: "uint8", access: "R V", conformance: "TZ",
                    constraint: "1 to 2", quality: "F",
                    details: "Number of supported list entries in the TimeZone attribute. This attribute may take the value of 1 " +
                        "or 2, where the optional second list entry may be used to handle scheduled regulatory time zone " +
                        "changes.",
                    xref: { document: "core", section: "11.16.8.11" }
                }),

                Attribute({
                    name: "DstOffsetListMaxSize", id: 0xb, type: "uint8", access: "R V", conformance: "TZ",
                    constraint: "min 1", quality: "F",

                    details: "Number of supported list entries in DSTOffset attribute. This value must be at least 1." +
                        "\n" +
                        "### ‌11.16.8.13. SupportsDNSResolve Attribute" +
                        "\n" +
                        "This attribute is true if the node supports resolving a domain name. DefaultNTP Address values for " +
                        "these nodes may include domain names. If this is False, the Address for a DefaultNTP shall be an " +
                        "IPv6 address.",

                    xref: { document: "core", section: "11.16.8.12" }
                }),

                Attribute({
                    name: "SupportsDnsResolve", id: 0xc, type: "bool", access: "R V", conformance: "NTPC",
                    default: true, quality: "F",
                    xref: { document: "core", section: "11.16.8" }
                }),
                Event({
                    name: "DstTableEmpty", id: 0x0, access: "V", conformance: "TZ", priority: "info",
                    xref: { document: "core", section: "11.16.10" }
                }),
                Event({
                    name: "DstStatus", id: 0x1, access: "V", conformance: "TZ", priority: "info",
                    xref: { document: "core", section: "11.16.10" }
                }),
                Event({
                    name: "TimeZoneStatus", id: 0x2, access: "V", conformance: "TZ", priority: "info",
                    xref: { document: "core", section: "11.16.10" }
                }),

                Event({
                    name: "TimeFailure", id: 0x3, access: "V", conformance: "M", priority: "info",

                    details: "This event shall be generated if the node has not generated a TimeFailure event in the last hour, " +
                        "and the node is unable to get a time from any source. This event SHOULD NOT be generated more often " +
                        "than once per hour." +
                        "\n" +
                        "### ‌11.16.10.5. MissingTrustedTimeSource Event" +
                        "\n" +
                        "This event shall be generated if the TrustedTimeSource is set to null upon fabric removal or by a " +
                        "SetTrustedTimeSource command." +
                        "\n" +
                        "This event shall also be generated if the node has not generated a MissingTrustedTimeSource event " +
                        "in the last hour, and the node fails to update its time from the TrustedTimeSource because the " +
                        "TrustedTimeSource is null or the specified peer cannot be reached. MissingTrustedTimeSource events " +
                        "corresponding to a time update SHOULD NOT be generated more often than once per hour.",

                    xref: { document: "core", section: "11.16.10.4" }
                }),

                Event({
                    name: "MissingTrustedTimeSource", id: 0x4, access: "V", conformance: "TSC", priority: "info",
                    xref: { document: "core", section: "11.16.10" }
                }),
                Command({
                    name: "SetUtcTime", id: 0x0, access: "A", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.16.9" }
                }),
                Command({
                    name: "SetTrustedTimeSource", id: 0x1, access: "F A", conformance: "TSC", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.16.9" }
                }),
                Command({
                    name: "SetTimeZone", id: 0x2, access: "M", conformance: "TZ", direction: "request",
                    response: "SetTimeZoneResponse",
                    xref: { document: "core", section: "11.16.9" }
                }),
                Command({
                    name: "SetTimeZoneResponse", id: 0x3, conformance: "TZ", direction: "response",
                    xref: { document: "core", section: "11.16.9" }
                }),
                Command({
                    name: "SetDstOffset", id: 0x4, access: "M", conformance: "TZ", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.16.9" }
                }),
                Command({
                    name: "SetDefaultNtp", id: 0x5, access: "A", conformance: "NTPC", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.16.9" }
                }),

                Datatype({
                    name: "StatusCode", type: "status",
                    children: [Field({
                        name: "TimeNotAccepted", id: 0x2,
                        details: "Node rejected the attempt to set the UTC time",
                        xref: { document: "core", section: "11.16.7" }
                    })]
                }),

                Datatype({
                    name: "Endpoint Field", type: "struct",

                    details: "Endpoint on the trusted time source node that contains the Time Synchronization cluster server." +
                        "\n" +
                        "### ‌11.16.6.5. FabricScopedTrustedTimeSourceStruct Type" +
                        "\n" +
                        "Node ID of the trusted time source node on the Fabric of the issuer." +
                        "\n" +
                        "Endpoint on the trusted time source node that contains the Time Synchronization cluster server. " +
                        "This is provided to avoid having to do discovery of the location of that endpoint by walking over " +
                        "all endpoints and checking their Descriptor Cluster." +
                        "\n" +
                        "### ‌11.16.6.6. TimeZoneStruct Type",

                    xref: { document: "core", section: "11.16.6.3" },

                    children: [
                        Field({ name: "NodeId", id: 0x0, type: "node-id", conformance: "M" }),
                        Field({ name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "M" }),
                        Field({ name: "Offset", id: 0x0, type: "int32", conformance: "M", constraint: "-43200 to 50400" }),
                        Field({ name: "ValidAt", id: 0x1, type: "epoch-us", conformance: "M" }),
                        Field({ name: "Name", id: 0x2, type: "string", conformance: "O", constraint: "0 to 64" })
                    ]
                }),

                Datatype({
                    name: "Name Field", type: "struct",

                    details: "The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the " +
                        "country/city format specified by the IANA Time Zone Database. The Name field may be used for " +
                        "display. If the node supports a TimeZoneDatabase it may use the Name field to set its own DST " +
                        "offsets if it has database information for the supplied time zone Name and the given Offset matches." +
                        "\n" +
                        "### ‌11.16.6.7. DSTOffsetStruct Type" +
                        "\n" +
                        "The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this " +
                        "field will accept any values in the int32 range to accommodate potential future legislation that " +
                        "does not fit with these assumptions.",

                    xref: { document: "core", section: "11.16.6.6" },
                    children: [
                        Field({ name: "Offset", id: 0x0, type: "int32", conformance: "M", constraint: "desc" }),
                        Field({ name: "ValidStarting", id: 0x1, type: "epoch-us", conformance: "M" }),
                        Field({ name: "ValidUntil", id: 0x2, type: "epoch-us", conformance: "M", quality: "X" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "OperationalCredentials", id: 0x3e, classification: "node",
            details: "This cluster is used to add or remove Node Operational credentials on a Commissionee or Node, as " +
                "well as manage the associated Fabrics.",
            xref: { document: "core", section: "11.17" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "NoCs", id: 0x0, type: "list", access: "R F A", conformance: "M",
                    constraint: "max supportedFabrics", quality: "N C",
                    xref: { document: "core", section: "11.17.5" },
                    children: [Field({ name: "entry", type: "NOCStruct" })]
                }),

                Attribute({
                    name: "Fabrics", id: 0x1, type: "list", access: "R F V", conformance: "M",
                    constraint: "max supportedFabrics", quality: "N",
                    xref: { document: "core", section: "11.17.5" },
                    children: [Field({ name: "entry", type: "FabricDescriptorStruct" })]
                }),

                Attribute({
                    name: "SupportedFabrics", id: 0x2, type: "uint8", access: "R V", conformance: "M",
                    constraint: "5 to 254", quality: "F",
                    xref: { document: "core", section: "11.17.5" }
                }),
                Attribute({
                    name: "CommissionedFabrics", id: 0x3, type: "uint8", access: "R V", conformance: "M",
                    constraint: "max supportedFabrics", quality: "N",
                    xref: { document: "core", section: "11.17.5" }
                }),

                Attribute({
                    name: "TrustedRootCertificates", id: 0x4, type: "list", access: "R V", conformance: "M",
                    constraint: "max supportedFabrics[max 400]", quality: "N C",
                    xref: { document: "core", section: "11.17.5" },
                    children: [Field({ name: "entry", type: "octstr" })]
                }),

                Attribute({
                    name: "CurrentFabricIndex", id: 0x5, type: "uint8", access: "R V", conformance: "M", default: 0,
                    details: "This attribute shall contain accessing fabric index." +
                        "\n" +
                        "This attribute is useful to contextualize Fabric-Scoped entries obtained from response commands or " +
                        "attribute reads, since a given Fabric may be referenced by a different Fabric Index locally on a " +
                        "remote Node.",
                    xref: { document: "core", section: "11.17.5.6" }
                }),

                Command({
                    name: "AttestationRequest", id: 0x0, access: "A", conformance: "M", direction: "request",
                    response: "AttestationResponse",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "AttestationResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "CertificateChainRequest", id: 0x2, access: "A", conformance: "M", direction: "request",
                    response: "CertificateChainResponse",
                    xref: { document: "core", section: "11.17.6" }
                }),

                Command({
                    name: "CertificateChainResponse", id: 0x3, conformance: "M", direction: "response",
                    details: "This command shall be generated in response to a CertificateChainRequest command.",
                    xref: { document: "core", section: "11.17.6.4" },

                    children: [Field({
                        name: "Certificate", id: 0x0, type: "octstr", conformance: "M", constraint: "max 600",

                        details: "This field shall be the DER encoded certificate corresponding to the CertificateType field in the " +
                            "CertificateChainRequest command." +
                            "\n" +
                            "### ‌11.17.6.5. CSRRequest Command" +
                            "\n" +
                            "This command shall be generated to execute the Node Operational CSR Procedure and subsequently " +
                            "return the NOCSR Information, in the form of a CSRResponse Command." +
                            "\n" +
                            "The CSRNonce field shall be used in the computation of the NOCSR Information. If the CSRNonce is " +
                            "malformed, then this command shall fail with an INVALID_COMMAND status code." +
                            "\n" +
                            "If the IsForUpdateNOC field is present and set to true, but the command was received over a PASE " +
                            "session, the command shall fail with an INVALID_COMMAND status code, as it would never be possible " +
                            "to use a resulting subsequent certificate issued from the CSR with the UpdateNOC command, which is " +
                            "forbidden over PASE sessions." +
                            "\n" +
                            "If the IsForUpdateNOC field is present and set to true, the internal state of the CSR associated " +
                            "keypair shall be tagged as being for a subsequent UpdateNOC, otherwise the internal state of the " +
                            "CSR shall be tagged as being for a subsequent AddNOC. See AddNOC and UpdateNOC for details about " +
                            "the processing." +
                            "\n" +
                            "If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe " +
                            "Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the " +
                            "initiator." +
                            "\n" +
                            "If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, " +
                            "then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator." +
                            "\n" +
                            "If the Node Operational Key Pair generated during processing of the Node Operational CSR Procedure " +
                            "is found to collide with an existing key pair already previously generated and installed, and that " +
                            "check had been executed, then this command shall fail with a FAILURE status code sent back to the " +
                            "initiator." +
                            "\n" +
                            "### ‌11.17.6.6. CSRResponse Command" +
                            "\n" +
                            "This command shall be generated in response to a CSRRequest Command." +
                            "\n" +
                            "See Section 11.17.4.9, “NOCSR Information” for details about the generation of the fields within " +
                            "this response command." +
                            "\n" +
                            "See Section F.3, “Node Operational CSR Response test vector” for an example computation of a " +
                            "CSRResponse.",

                        xref: { document: "core", section: "11.17.6.4.1" }
                    })]
                }),

                Command({
                    name: "CsrRequest", id: 0x4, access: "A", conformance: "M", direction: "request",
                    response: "CsrResponse",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "CsrResponse", id: 0x5, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "AddNoc", id: 0x6, access: "A", conformance: "M", direction: "request",
                    response: "NocResponse",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "UpdateNoc", id: 0x7, access: "F A", conformance: "M", direction: "request",
                    response: "NocResponse",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "NocResponse", id: 0x8, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "UpdateFabricLabel", id: 0x9, access: "F A", conformance: "M", direction: "request",
                    response: "NocResponse",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "RemoveFabric", id: 0xa, access: "A", conformance: "M", direction: "request",
                    response: "NocResponse",
                    xref: { document: "core", section: "11.17.6" }
                }),
                Command({
                    name: "AddTrustedRootCertificate", id: 0xb, access: "A", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.17.6" }
                }),

                Datatype({
                    name: "ICAC Field", type: "struct",

                    details: "This field shall contain the ICAC or the struct’s associated fabric, encoded using Matter " +
                        "Certificate Encoding. If no ICAC is present in the chain, this field shall be set to null." +
                        "\n" +
                        "### ‌11.17.4.5. FabricDescriptorStruct Type" +
                        "\n" +
                        "This structure encodes a Fabric Reference for a fabric within which a given Node is currently " +
                        "commissioned.",

                    xref: { document: "core", section: "11.17.4.2" },

                    children: [
                        Field({
                            name: "RootPublicKey", id: 0x1, type: "octstr", access: "F", conformance: "M", constraint: "65"
                        }),
                        Field({
                            name: "VendorId", id: 0x2, type: "vendor-id", access: "F", conformance: "M", constraint: "desc"
                        }),
                        Field({ name: "FabricId", id: 0x3, type: "fabric-id", access: "F", conformance: "M" }),
                        Field({ name: "NodeId", id: 0x4, type: "node-id", access: "F", conformance: "M" }),
                        Field({
                            name: "Label", id: 0x5, type: "string", access: "F", conformance: "M", constraint: "max 32",
                            default: ""
                        }),
                        Field({
                            name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                            constraint: "1 to 254"
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "AdministratorCommissioning", id: 0x3c, classification: "node",

            details: "This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines " +
                "Attributes, Commands and Responses needed for this purpose." +
                "\n" +
                "There are two methods of commissioning, Basic Commissioning which may be supported and is described " +
                "in Section 5.6.2, “Basic Commissioning Method (BCM)” and Enhanced Commissioning which shall be " +
                "supported and is described in Section 5.6.3, “Enhanced Commissioning Method (ECM)”." +
                "\n" +
                "For the management of Operational Credentials and Trusted Root Certificates, the Node Operational " +
                "Credentials cluster is used.",

            xref: { document: "core", section: "11.18" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
                    xref: { document: "core", section: "11.18.4" },
                    children: [Field({
                        name: "BC", constraint: "0", description: "Basic",
                        details: "Node supports Basic Commissioning Method."
                    })]
                }),

                Attribute({
                    name: "WindowStatus", id: 0x0, type: "CommissioningWindowStatusEnum", access: "R V",
                    conformance: "M",
                    xref: { document: "core", section: "11.18.7" }
                }),

                Attribute({
                    name: "AdminFabricIndex", id: 0x1, type: "fabric-idx", access: "R V", conformance: "M",
                    quality: "X",

                    details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the " +
                        "FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This " +
                        "may be used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster." +
                        "\n" +
                        "If, during an open commissioning window, the fabric for the Administrator that opened the window is " +
                        "removed, then this attribute shall be set to null." +
                        "\n" +
                        "When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.",

                    xref: { document: "core", section: "11.18.7.2" }
                }),

                Attribute({
                    name: "AdminVendorId", id: 0x2, type: "vendor-id", access: "R V", conformance: "M", quality: "X",

                    details: "When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the " +
                        "Vendor ID associated with the Fabric scoping of the Administrator that opened the window. This " +
                        "field shall match the VendorID field of the Fabrics attribute list entry associated with the " +
                        "Administrator having opened the window, at the time of window opening. If the fabric for the " +
                        "Administrator that opened the window is removed from the node while the commissioning window is " +
                        "still open, this attribute shall NOT be updated." +
                        "\n" +
                        "When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.",

                    xref: { document: "core", section: "11.18.7.3" }
                }),

                Command({
                    name: "OpenCommissioningWindow", id: 0x0, access: "A T", conformance: "M", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.18.8" }
                }),
                Command({
                    name: "OpenBasicCommissioningWindow", id: 0x1, access: "A T", conformance: "BC",
                    direction: "request", response: "status",
                    xref: { document: "core", section: "11.18.8" }
                }),

                Command({
                    name: "RevokeCommissioning", id: 0x2, access: "A T", conformance: "M", direction: "request",
                    response: "status",

                    details: "This command is used by a current Administrator to instruct a Node to revoke any active Open " +
                        "Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and " +
                        "the Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop " +
                        "publishing the DNS-SD record associated with the Open Commissioning Window or Open Basic " +
                        "Commissioning Window command, see Section 4.3.1, “Commissionable Node Discovery”." +
                        "\n" +
                        "If no commissioning window was open at time of receipt, this command shall fail with a cluster " +
                        "specific status code of WindowNotOpen.",

                    xref: { document: "core", section: "11.18.8.3" }
                }),

                Datatype({
                    name: "StatusCode", type: "status",

                    children: [
                        Field({
                            name: "Busy", id: 0x2,
                            details: "Could not be completed because another commissioning is in progress",
                            xref: { document: "core", section: "11.18.6" }
                        }),
                        Field({
                            name: "PakeParameterError", id: 0x3,
                            details: "Provided PAKE parameters were incorrectly formatted or otherwise invalid",
                            xref: { document: "core", section: "11.18.6" }
                        }),
                        Field({
                            name: "WindowNotOpen", id: 0x4,
                            details: "No commissioning window was currently open",
                            xref: { document: "core", section: "11.18.6" }
                        })
                    ]
                })
            ]
        }),

        Cluster({
            name: "OtaSoftwareUpdateProvider", id: 0x29, classification: "node",
            xref: { document: "core", section: "11.19.6" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
                Command({
                    name: "QueryImage", id: 0x0, conformance: "M", direction: "request", response: "QueryImageResponse",
                    xref: { document: "core", section: "11.19.6.5" }
                }),
                Command({
                    name: "QueryImageResponse", id: 0x1, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.19.6.5" }
                }),
                Command({
                    name: "ApplyUpdateRequest", id: 0x2, conformance: "M", direction: "request",
                    response: "ApplyUpdateResponse",
                    xref: { document: "core", section: "11.19.6.5" }
                }),
                Command({
                    name: "ApplyUpdateResponse", id: 0x3, conformance: "M", direction: "response",
                    xref: { document: "core", section: "11.19.6.5" }
                }),

                Command({
                    name: "NotifyUpdateApplied", id: 0x4, conformance: "M", direction: "request", response: "status",
                    xref: { document: "core", section: "11.19.6.5.6" },
                    children: [
                        Field({ name: "UpdateToken", id: 0x0, type: "octstr", conformance: "M", constraint: "8 to 32" }),
                        Field({ name: "SoftwareVersion", id: 0x1, type: "uint32", conformance: "M" })
                    ]
                })
            ]
        }),

        Cluster({
            name: "OtaSoftwareUpdateRequestor", id: 0x2a, classification: "node",
            xref: { document: "core", section: "11.19.7" },

            children: [
                Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

                Attribute({
                    name: "DefaultOtaProviders", id: 0x0, type: "list", access: "RW F VA", conformance: "M",
                    constraint: "desc", default: [],
                    xref: { document: "core", section: "11.19.7.5" },
                    children: [Field({ name: "entry", type: "ProviderLocation" })]
                }),

                Attribute({
                    name: "UpdatePossible", id: 0x1, type: "bool", access: "R V", conformance: "M", default: true,

                    details: "This field shall be set to True if the OTA Requestor is currently able to be updated. Otherwise, it " +
                        "shall be set to False in case of any condition preventing update being possible, such as " +
                        "insufficient capacity of an internal battery. This field is merely informational for diagnostics " +
                        "purposes and shall NOT affect the responses provided by an OTA Provider to an OTA Requestor." +
                        "\n" +
                        "### ‌UpdateState Attribute" +
                        "\n" +
                        "This field shall reflect the current state of the OTA Requestor with regards to obtaining software " +
                        "updates. See Section 11.19.7.4.2, “UpdateStateEnum Type” for possible values." +
                        "\n" +
                        "This field SHOULD be updated in a timely manner whenever OTA Requestor internal state updates.",

                    xref: { document: "core", section: "11.19.7.5.1" }
                }),

                Attribute({
                    name: "UpdateState", id: 0x2, type: "UpdateStateEnum", access: "R V", conformance: "M",
                    default: "Unknown",
                    xref: { document: "core", section: "11.19.7.5" }
                }),

                Attribute({
                    name: "UpdateStateProgress", id: 0x3, type: "uint8", access: "R V", conformance: "M",
                    constraint: "0 to 100", default: null, quality: "X",

                    details: "This field shall reflect the percentage value of progress, relative to the current UpdateState, if " +
                        "applicable to the state." +
                        "\n" +
                        "The value of this field shall be null if a progress indication does not apply to the current state." +
                        "\n" +
                        "A value of 0 shall indicate that the beginning has occurred. A value of 100 shall indicate " +
                        "completion." +
                        "\n" +
                        "This field may be updated infrequently. Some care SHOULD be taken by Nodes to avoid over- reporting " +
                        "progress when this attribute is part of a subscription.",

                    xref: { document: "core", section: "11.19.7.5.2" }
                }),

                Event({
                    name: "StateTransition", id: 0x0, access: "V", conformance: "M", priority: "info",
                    details: "This event shall be generated when a change of the UpdateState attribute occurs due to an OTA " +
                        "Requestor moving through the states necessary to query for updates.",
                    xref: { document: "core", section: "11.19.7.7.1" },

                    children: [
                        Field({
                            name: "PreviousState", id: 0x0, type: "UpdateStateEnum", conformance: "M", default: "Unknown"
                        }),
                        Field({ name: "NewState", id: 0x1, type: "UpdateStateEnum", conformance: "M" }),
                        Field({ name: "Reason", id: 0x2, type: "ChangeReasonEnum", conformance: "M" }),
                        Field({
                            name: "TargetSoftwareVersion", id: 0x3, type: "uint32", conformance: "M", default: null,
                            quality: "X"
                        })
                    ]
                }),

                Event({
                    name: "VersionApplied", id: 0x1, access: "V", conformance: "M", priority: "critical",
                    details: "This event shall be generated whenever a new version starts executing after being applied due to a " +
                        "software update. This event SHOULD be generated even if a software update was done using means " +
                        "outside of this cluster.",
                    xref: { document: "core", section: "11.19.7.7.6" },
                    children: [
                        Field({ name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" }),
                        Field({ name: "ProductId", id: 0x1, type: "uint16", conformance: "M" })
                    ]
                }),

                Event({
                    name: "DownloadError", id: 0x2, access: "V", conformance: "M", priority: "info",
                    details: "This event shall be generated whenever an error occurs during OTA Requestor download operation." +
                        "\n" +
                        "This field shall be set to the value of the SoftwareVersion being downloaded, matching the " +
                        "SoftwareVersion field of the QueryImageResponse that caused the failing download to take place.",
                    xref: { document: "core", section: "11.19.7.7.9" },

                    children: [
                        Field({ name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" }),
                        Field({ name: "BytesDownloaded", id: 0x1, type: "uint64", conformance: "M" }),
                        Field({
                            name: "ProgressPercent", id: 0x2, type: "uint8", conformance: "M", constraint: "0 to 100",
                            default: null, quality: "X"
                        }),
                        Field({
                            name: "PlatformCode", id: 0x3, type: "int64", conformance: "M", default: null, quality: "X"
                        })
                    ]
                }),

                Command({
                    name: "AnnounceOtaProvider", id: 0x0, access: "A", conformance: "O", direction: "request",
                    response: "status",
                    xref: { document: "core", section: "11.19.7.6" }
                }),

                Datatype({
                    name: "DelayByProvider Value", type: "struct",

                    details: "This value shall indicate that the reason for a state change is a request by the OTA Provider to " +
                        "await for a delay." +
                        "\n" +
                        "### ‌ProviderLocation Type" +
                        "\n" +
                        "This structure encodes a fabric-scoped location of an OTA provider on a given fabric.",

                    xref: { document: "core", section: "11.19.7.4.16" },

                    children: [
                        Field({ name: "ProviderNodeId", id: 0x1, type: "node-id", access: "F", conformance: "M" }),
                        Field({ name: "Endpoint", id: 0x2, type: "endpoint-no", access: "F", conformance: "M" }),
                        Field({
                            name: "FabricIndex", id: 0xfe, type: "fabric-idx", access: "R F V", conformance: "M",
                            constraint: "1 to 254"
                        })
                    ]
                })
            ]
        })
    ]
})
