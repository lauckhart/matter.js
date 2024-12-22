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
    CommandElement as Command,
    FieldElement as Field,
    DatatypeElement as Datatype,
    EventElement as Event,
    DeviceTypeElement as DeviceType,
    RequirementElement as Requirement,
    SemanticNamespaceElement as SemanticNamespace,
    SemanticTagElement as SemanticTag
} from "#model";

export const SpecMatter = Matter(
    { name: "SpecMatter" },

    Cluster(
        {
            name: "Identify", id: 0x3, classification: "endpoint", pics: "I",

            details: "This cluster supports an endpoint identification state (e.g., flashing a light), that indicates to " +
                "an observer (e.g., an installer) which of several nodes and/or endpoints it is. It also supports a " +
                "multicast request that any endpoint that is identifying itself to respond to the initiator." +
                "\n" +
                "The state of this cluster may be shared on more than one endpoint on a node." +
                "\n" +
                "For Example: Two endpoints on a single node, one a temperature sensor, and one a humidity sensor, " +
                "may both share the same cluster instance and therefore identification state (e.g. single LED on the " +
                "node).",

            xref: { document: "cluster", section: "1.2" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

        Attribute({
            name: "IdentifyTime", id: 0x0, type: "uint16", access: "RW VO", conformance: "M", default: 0,

            details: "Indicates the remaining length of time, in seconds, that the endpoint will continue to identify " +
                "itself." +
                "\n" +
                "If this attribute is set to a value other than 0 then the device shall enter its identification " +
                "state, in order to indicate to an observer which of several nodes and/or endpoints it is. It is " +
                "recommended that this state consists of flashing a light with a period of 0.5 seconds. The " +
                "IdentifyTime attribute shall be decremented every second while in this state." +
                "\n" +
                "If this attribute reaches or is set to the value 0 then the device shall terminate its " +
                "identification state.",

            xref: { document: "cluster", section: "1.2.5.1" }
        }),

        Attribute({
            name: "IdentifyType", id: 0x1, type: "IdentifyTypeEnum", access: "R V", conformance: "M",
            constraint: "desc",
            details: "Indicates how the identification state is presented to the user." +
                "\n" +
                "This attribute shall contain one of the values defined in IdentifyTypeEnum. The value None shall " +
                "NOT be used if the device is capable of presenting its identification state using one of the other " +
                "methods defined in IdentifyTypeEnum.",
            xref: { document: "cluster", section: "1.2.5.2" }
        }),

        Command(
            {
                name: "Identify", id: 0x0, access: "M", conformance: "M", direction: "request", response: "status",
                details: "This command starts or stops the receiving device identifying itself.",
                xref: { document: "cluster", section: "1.2.6.1" }
            },
            Field({ name: "IdentifyTime", id: 0x0, type: "uint16", conformance: "M" })
        ),

        Command(
            {
                name: "TriggerEffect", id: 0x40, access: "M", conformance: "O", direction: "request",
                response: "status",

                details: "This command allows the support of feedback to the user, such as a certain light effect. It is used " +
                    "to allow an implementation to provide visual feedback to the user under certain circumstances such " +
                    "as a color light turning green when it has successfully connected to a network. The use of this " +
                    "command and the effects themselves are entirely up to the implementer to use whenever a visual " +
                    "feedback is useful but it is not the same as and does not replace the identify mechanism used " +
                    "during commissioning.",

                xref: { document: "cluster", section: "1.2.6.2" }
            },

            Field({
                name: "EffectIdentifier", id: 0x0, type: "EffectIdentifierEnum", conformance: "M",
                constraint: "desc",

                details: "This field shall indicate the identify effect to use and shall contain one of the non-reserved " +
                    "values in EffectIdentifierEnum." +
                    "\n" +
                    "All values of the EffectIdentifierEnum shall be supported. Implementors may deviate from the " +
                    "example light effects in EffectIdentifierEnum, but they SHOULD indicate during testing how they " +
                    "handle each effect.",

                xref: { document: "cluster", section: "1.2.6.2.1" }
            }),

            Field({
                name: "EffectVariant", id: 0x1, type: "EffectVariantEnum", conformance: "M", constraint: "desc",
                details: "This field shall indicate which variant of the effect, indicated in the EffectIdentifier field, " +
                    "SHOULD be triggered. If a device does not support the given variant, it shall use the default " +
                    "variant. This field shall contain one of the values in EffectVariantEnum.",
                xref: { document: "cluster", section: "1.2.6.2.2" }
            })
        ),

        Datatype(
            { name: "IdentifyTypeEnum", type: "enum8", xref: { document: "cluster", section: "1.2.4.1" } },
            Field({ name: "None", id: 0x0, conformance: "M", description: "No presentation." }),
            Field({ name: "LightOutput", id: 0x1, conformance: "M", description: "Light output of a lighting product." }),
            Field({ name: "VisibleIndicator", id: 0x2, conformance: "M", description: "Typically a small LED." }),
            Field({ name: "AudibleBeep", id: 0x3, conformance: "M" }),
            Field({
                name: "Display", id: 0x4, conformance: "M",
                description: "Presentation will be visible on display screen."
            }),
            Field({
                name: "Actuator", id: 0x5, conformance: "M",
                description: "Presentation will be conveyed by actuator functionality such as through a window blind operation or in- wall relay."
            })
        ),

        Datatype(
            { name: "EffectIdentifierEnum", type: "enum8", xref: { document: "cluster", section: "1.2.4.2" } },
            Field({ name: "Blink", id: 0x0, conformance: "M", description: "e.g., Light is turned on/off once." }),
            Field({
                name: "Breathe", id: 0x1, conformance: "M",
                description: "e.g., Light is turned on/off over 1 second and repeated 15 times."
            }),
            Field({
                name: "Okay", id: 0x2, conformance: "M",
                description: "e.g., Colored light turns green for 1 second; non-colored light flashes twice."
            }),
            Field({
                name: "ChannelChange", id: 0xb, conformance: "M",
                description: "e.g., Colored light turns orange for 8 seconds; non-colored light switches to the maximum brightness for 0.5s and then minimum brightness for 7.5s."
            }),
            Field({
                name: "FinishEffect", id: 0xfe, conformance: "M",
                description: "Complete the current effect sequence before terminating. e.g., if in the middle of a breathe effect (as above), first complete the current 1s breathe effect and then terminate the effect."
            }),
            Field({
                name: "StopEffect", id: 0xff, conformance: "M",
                description: "Terminate the effect as soon as possible."
            })
        ),

        Datatype(
            { name: "EffectVariantEnum", type: "enum8", xref: { document: "cluster", section: "1.2.4.3" } },
            Field({ name: "Default", id: 0x0, conformance: "M", description: "Indicates the default effect is used" })
        )
    ),

    Cluster(
        {
            name: "Groups", id: 0x4, classification: "endpoint", pics: "G",

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

            xref: { document: "cluster", section: "1.3" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.3.4" } },
            Field({
                name: "GN", constraint: "0", description: "GroupNames",
                details: "The Group Names feature indicates the ability to store a name for a group when a group is added.",
                xref: { document: "cluster", section: "1.3.4.1" }
            })
        ),

        Attribute({
            name: "NameSupport", id: 0x0, type: "NameSupportBitmap", access: "R V", conformance: "M",
            constraint: "desc", default: 0, quality: "F",
            details: "This attribute provides legacy, read-only access to whether the Group Names feature is supported. " +
                "The most significant bit, bit 7 (GroupNames), shall be equal to bit 0 of the FeatureMap attribute " +
                "(GN Feature). All other bits shall be 0.",
            xref: { document: "cluster", section: "1.3.6.1" }
        }),

        Command(
            {
                name: "AddGroup", id: 0x0, access: "F M", conformance: "M", direction: "request",
                response: "AddGroupResponse",
                details: "The AddGroup command allows a client to add group membership in a particular group for the server " +
                    "endpoint.",
                xref: { document: "cluster", section: "1.3.7.1" }
            },

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
        ),

        Command(
            {
                name: "ViewGroup", id: 0x1, access: "F O", conformance: "M", direction: "request",
                response: "ViewGroupResponse",
                details: "The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse " +
                    "command containing the name string for a particular group.",
                xref: { document: "cluster", section: "1.3.7.2" }
            },

            Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" })
        ),

        Command(
            {
                name: "GetGroupMembership", id: 0x2, access: "F O", conformance: "M", direction: "request",
                response: "GetGroupMembershipResponse",
                details: "The GetGroupMembership command allows a client to inquire about the group membership of the server " +
                    "endpoint, in a number of ways.",
                xref: { document: "cluster", section: "1.3.7.3" }
            },

            Field(
                { name: "GroupList", id: 0x0, type: "list", conformance: "M", constraint: "all[min 1]" },
                Field({ name: "entry", type: "group-id" })
            )
        ),

        Command(
            {
                name: "RemoveGroup", id: 0x3, access: "F M", conformance: "M", direction: "request",
                response: "RemoveGroupResponse",
                details: "The RemoveGroup command allows a client to request that the server removes the membership for the " +
                    "server endpoint, if any, in a particular group.",
                xref: { document: "cluster", section: "1.3.7.4" }
            },

            Field({ name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" })
        ),

        Command({
            name: "RemoveAllGroups", id: 0x4, access: "F M", conformance: "M", direction: "request",
            response: "status",
            details: "The RemoveAllGroups command allows a client to direct the server to remove all group associations " +
                "for the server endpoint.",
            xref: { document: "cluster", section: "1.3.7.5" }
        }),

        Command(
            {
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

                xref: { document: "cluster", section: "1.3.7.6" }
            },

            Field({
                name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1",
                details: "This field shall be used to identify the group and any associated key material to which the server " +
                    "endpoint is to be added.",
                xref: { document: "cluster", section: "1.3.7.6.1" }
            }),

            Field({
                name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
                details: "This field may be set to a human-readable name for the group. If the client has no name for the" +
                    "\n" +
                    "group, the GroupName field shall be set to the empty string." +
                    "\n" +
                    "Support of group names is optional and is indicated by the FeatureMap and NameSupport attribute.",
                xref: { document: "cluster", section: "1.3.7.6.2" }
            })
        ),

        Command(
            {
                name: "AddGroupResponse", id: 0x0, conformance: "M", direction: "response",
                details: "The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command.",
                xref: { document: "cluster", section: "1.3.7.7" }
            },
            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field is set according to the Effect on Receipt section of the AddGroup command.",
                xref: { document: "cluster", section: "1.3.7.7.1" }
            }),
            Field({
                name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
                details: "This field is set to the GroupID field of the received AddGroup command.",
                xref: { document: "cluster", section: "1.3.7.7.2" }
            })
        ),

        Command(
            {
                name: "ViewGroupResponse", id: 0x1, conformance: "M", direction: "response",
                details: "The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup " +
                    "command.",
                xref: { document: "cluster", section: "1.3.7.8" }
            },

            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field is according to the Effect on Receipt section of the ViewGroup command.",
                xref: { document: "cluster", section: "1.3.7.8.1" }
            }),
            Field({
                name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
                details: "This field is set to the GroupID field of the received ViewGroup command.",
                xref: { document: "cluster", section: "1.3.7.8.2" }
            }),

            Field({
                name: "GroupName", id: 0x2, type: "string", conformance: "M", constraint: "max 16",
                details: "If the status is SUCCESS, and group names are supported, this field is set to the group name " +
                    "associated with that group in the Group Table; otherwise it is set to the empty string.",
                xref: { document: "cluster", section: "1.3.7.8.3" }
            })
        ),

        Command(
            {
                name: "GetGroupMembershipResponse", id: 0x2, conformance: "M", direction: "response",
                details: "The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a " +
                    "GetGroupMembership command.",
                xref: { document: "cluster", section: "1.3.7.9" }
            },

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

            Field(
                {
                    name: "GroupList", id: 0x1, type: "list", conformance: "M", constraint: "all[min 1]",

                    details: "The GroupList field shall contain either the group IDs of all the groups in the Group Table for " +
                        "which the server endpoint is a member of the group (in the case where the GroupList field of the " +
                        "received GetGroupMembership command was empty), or the group IDs of all the groups in the Group " +
                        "Table for which the server endpoint is a member of the group and for which the group ID was " +
                        "included in the the GroupList field of the received GetGroupMembership command (in the case where " +
                        "the GroupList field of the received GetGroupMembership command was not empty)." +
                        "\n" +
                        "Zigbee: If the total number of groups will cause the maximum payload length of a frame to be " +
                        "exceeded, then the GroupList field shall contain only as many groups as will fit.",

                    xref: { document: "cluster", section: "1.3.7.9.2" }
                },

                Field({ name: "entry", type: "group-id" })
            )
        ),

        Command(
            {
                name: "RemoveGroupResponse", id: 0x3, conformance: "M", direction: "response",
                details: "The RemoveGroupResponse command is generated by the server in response to the receipt of a " +
                    "RemoveGroup command.",
                xref: { document: "cluster", section: "1.3.7.10" }
            },

            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field is according to the Effect on Receipt section of the RemoveGroup command.",
                xref: { document: "cluster", section: "1.3.7.10.1" }
            }),
            Field({
                name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1",
                details: "This field is set to the GroupID field of the received RemoveGroup command.",
                xref: { document: "cluster", section: "1.3.7.10.2" }
            })
        ),

        Datatype(
            { name: "NameSupportBitmap", type: "map8", xref: { document: "cluster", section: "1.3.5.1" } },
            Field({ name: "GroupNames", constraint: "7", description: "The ability to store a name for a group." })
        )
    ),

    Cluster(
        {
            name: "ScenesManagement", id: 0x62, classification: "application", pics: "S",

            details: "The Scenes Management cluster provides attributes and commands for setting up and recalling scenes. " +
                "Each scene corresponds to a set of stored values of specified attributes for one or more clusters " +
                "on the same end point as the Scenes Management cluster." +
                "\n" +
                "In most cases scenes are associated with a particular group identifier. Scenes may also exist " +
                "without a group, in which case the value 0 replaces the group identifier. Note that extra care is " +
                "required in these cases to avoid a scene identifier collision, and that commands related to scenes " +
                "without a group may only be unicast, i.e., they shall NOT be multicast or broadcast." +
                "\n" +
                "NOTE Support for Scenes Management cluster is provisional.",

            xref: { document: "cluster", section: "1.4" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.4.4" } },
            Field({
                name: "SN", conformance: "O", constraint: "0", description: "SceneNames",
                details: "This feature indicates the ability to store a name for a scene when a scene is added.",
                xref: { document: "cluster", section: "1.4.4.1" }
            })
        ),

        Attribute({
            name: "LastConfiguredBy", id: 0x0, type: "node-id", access: "R V", conformance: "O", default: null,
            quality: "X",

            details: "Indicates the Node ID of the node that last configured the Scene Table." +
                "\n" +
                "The null value indicates that the server has not been configured, or that the identifier of the " +
                "node that last configured the Scenes Management cluster is not known." +
                "\n" +
                "The Node ID is scoped to the accessing fabric.",

            xref: { document: "cluster", section: "1.4.8.1" }
        }),

        Attribute({
            name: "SceneTableSize", id: 0x1, type: "uint16", access: "R V", conformance: "M",
            constraint: "desc", default: 16, quality: "F",
            details: "Indicates the number of entries in the Scene Table on this endpoint. This is the total across all " +
                "fabrics; note that a single fabric cannot use all those entries (see Handling of fabric- scoping). " +
                "The minimum size of this table, (i.e., the minimum number of scenes to support across all fabrics " +
                "per endpoint) shall be 16, unless a device type in which this cluster is used, defines a larger " +
                "value in the device type definition.",
            xref: { document: "cluster", section: "1.4.8.2" }
        }),

        Attribute(
            {
                name: "FabricSceneInfo", id: 0x2, type: "list", access: "R F V", conformance: "M",
                constraint: "desc",
                details: "Indicates a list of fabric scoped information about scenes on this endpoint." +
                    "\n" +
                    "The number of list entries for this attribute shall NOT exceed the number of supported fabrics by " +
                    "the device.",
                xref: { document: "cluster", section: "1.4.8.3" }
            },

            Field({ name: "entry", type: "SceneInfoStruct" })
        ),

        Command(
            {
                name: "AddScene", id: 0x0, access: "F M", conformance: "M", direction: "request",
                response: "AddSceneResponse",
                details: "It is not mandatory for an extension field set to be included in the command for every cluster on " +
                    "that endpoint that has a defined extension field set. Extension field sets may be omitted, " +
                    "including the case of no extension field sets at all.",
                xref: { document: "cluster", section: "1.4.9.2" }
            },

            Field({
                name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                details: "This field shall indicate the group identifier in the Group Table.",
                xref: { document: "cluster", section: "1.4.9.2.1" }
            }),
            Field({
                name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field shall indicate the scene identifier in the Scene Table.",
                xref: { document: "cluster", section: "1.4.9.2.2" }
            }),
            Field({
                name: "TransitionTime", id: 0x2, type: "uint32", conformance: "M", constraint: "max 60000000",
                details: "This field shall indicate the transition time of the scene, measured in milliseconds.",
                xref: { document: "cluster", section: "1.4.9.2.3" }
            }),
            Field({
                name: "SceneName", id: 0x3, type: "string", conformance: "M", constraint: "max 16",
                details: "This field shall indicate the name of the scene.",
                xref: { document: "cluster", section: "1.4.9.2.4" }
            }),

            Field(
                {
                    name: "ExtensionFieldSetStructs", id: 0x4, type: "list", conformance: "M", constraint: "desc",
                    details: "This field shall contains the list of extension fields.",
                    xref: { document: "cluster", section: "1.4.9.2.5" }
                },
                Field({ name: "entry", type: "ExtensionFieldSetStruct" })
            )
        ),

        Command(
            {
                name: "AddSceneResponse", id: 0x0, conformance: "M", direction: "response",
                xref: { document: "cluster", section: "1.4.9.3" }
            },
            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field shall be set according to the Effect on Receipt section for AddScene command.",
                xref: { document: "cluster", section: "1.4.9.3.1" }
            }),
            Field({
                name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                details: "The GroupID field shall be set to the corresponding field of the received AddScene command.",
                xref: { document: "cluster", section: "1.4.9.3.2" }
            }),
            Field({
                name: "SceneId", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
                details: "The SceneID field shall be set to the corresponding field of the received AddScene command.",
                xref: { document: "cluster", section: "1.4.9.3.3" }
            })
        ),

        Command(
            {
                name: "ViewScene", id: 0x1, access: "F O", conformance: "M", direction: "request",
                response: "ViewSceneResponse",
                xref: { document: "cluster", section: "1.4.9.4" }
            },
            Field({
                name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                details: "This field shall indicate the group identifier in the Group Table.",
                xref: { document: "cluster", section: "1.4.9.4.1" }
            }),
            Field({
                name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field shall indicate the scene identifier in the Scene Table.",
                xref: { document: "cluster", section: "1.4.9.4.2" }
            })
        ),

        Command(
            {
                name: "ViewSceneResponse", id: 0x1, conformance: "M", direction: "response",
                xref: { document: "cluster", section: "1.4.9.5" }
            },
            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field shall be set according to the Effect on Receipt section for ViewScene command.",
                xref: { document: "cluster", section: "1.4.9.5.1" }
            }),
            Field({
                name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                details: "The GroupID field shall be set to the corresponding field of the received ViewScene command.",
                xref: { document: "cluster", section: "1.4.9.5.2" }
            }),
            Field({
                name: "SceneId", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
                details: "The SceneID field shall be set to the corresponding field of the received ViewScene command.",
                xref: { document: "cluster", section: "1.4.9.5.3" }
            }),

            Field({
                name: "TransitionTime", id: 0x3, type: "uint32", conformance: "desc", constraint: "max 60000000",
                details: "If the status is SUCCESS, this field shall be copied from the corresponding field in the Scene " +
                    "Table entry, otherwise it shall be omitted.",
                xref: { document: "cluster", section: "1.4.9.5.4" }
            }),

            Field({
                name: "SceneName", id: 0x4, type: "string", conformance: "desc", constraint: "max 16",
                details: "If the status is SUCCESS, this field shall be copied from the corresponding field in the Scene " +
                    "Table entry, otherwise it shall be omitted.",
                xref: { document: "cluster", section: "1.4.9.5.5" }
            }),

            Field(
                {
                    name: "ExtensionFieldSetStructs", id: 0x5, type: "list", conformance: "desc",
                    details: "If the status is SUCCESS, this field shall be copied from the corresponding field in the Scene " +
                        "Table entry, otherwise it shall be omitted.",
                    xref: { document: "cluster", section: "1.4.9.5.6" }
                },

                Field({ name: "entry", type: "ExtensionFieldSetStruct" })
            )
        ),

        Command(
            {
                name: "RemoveScene", id: 0x2, access: "F M", conformance: "M", direction: "request",
                response: "RemoveSceneResponse",
                xref: { document: "cluster", section: "1.4.9.6" }
            },
            Field({
                name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                details: "This field shall indicate the group identifier in the Group Table.",
                xref: { document: "cluster", section: "1.4.9.6.1" }
            }),
            Field({
                name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field shall indicate the scene identifier in the Scene Table.",
                xref: { document: "cluster", section: "1.4.9.6.2" }
            })
        ),

        Command(
            {
                name: "RemoveSceneResponse", id: 0x2, conformance: "M", direction: "response",
                xref: { document: "cluster", section: "1.4.9.7" }
            },
            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field shall be set according to the Effect on Receipt section for RemoveScene command.",
                xref: { document: "cluster", section: "1.4.9.7.1" }
            }),
            Field({
                name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                details: "The GroupID field shall be set to the corresponding field of the received RemoveScene command.",
                xref: { document: "cluster", section: "1.4.9.7.2" }
            }),
            Field({
                name: "SceneId", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
                details: "The SceneID field shall be set to the corresponding field of the received RemoveScene command.",
                xref: { document: "cluster", section: "1.4.9.7.3" }
            })
        ),

        Command(
            {
                name: "RemoveAllScenes", id: 0x3, access: "F M", conformance: "M", direction: "request",
                response: "RemoveAllScenesResponse",
                xref: { document: "cluster", section: "1.4.9.8" }
            },
            Field({
                name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                details: "This field shall indicate the group identifier in the Group Table.",
                xref: { document: "cluster", section: "1.4.9.8.1" }
            })
        ),

        Command(
            {
                name: "RemoveAllScenesResponse", id: 0x3, conformance: "M", direction: "response",
                xref: { document: "cluster", section: "1.4.9.9" }
            },
            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field shall be set according to the Effect on Receipt section for RemoveAllScenes command.",
                xref: { document: "cluster", section: "1.4.9.9.1" }
            }),
            Field({
                name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                details: "The GroupID field shall be set to the corresponding field of the received RemoveAllScenes command.",
                xref: { document: "cluster", section: "1.4.9.9.2" }
            })
        ),

        Command(
            {
                name: "StoreScene", id: 0x4, access: "F M", conformance: "M", direction: "request",
                response: "StoreSceneResponse",
                xref: { document: "cluster", section: "1.4.9.10" }
            },
            Field({
                name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                details: "This field shall indicate the group identifier in the Group Table.",
                xref: { document: "cluster", section: "1.4.9.10.1" }
            }),
            Field({
                name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field shall indicate the scene identifier in the Scene Table.",
                xref: { document: "cluster", section: "1.4.9.10.2" }
            })
        ),

        Command(
            {
                name: "StoreSceneResponse", id: 0x4, conformance: "M", direction: "response",
                xref: { document: "cluster", section: "1.4.9.11" }
            },
            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field shall be set according to the Effect on Receipt section for StoreScene command.",
                xref: { document: "cluster", section: "1.4.9.11.1" }
            }),
            Field({
                name: "GroupId", id: 0x1, type: "group-id", conformance: "M",
                details: "The GroupID field shall be set to the corresponding field of the received StoreScene command.",
                xref: { document: "cluster", section: "1.4.9.11.2" }
            }),
            Field({
                name: "SceneId", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
                details: "The SceneID field shall be set to the corresponding field of the received StoreScene command.",
                xref: { document: "cluster", section: "1.4.9.11.3" }
            })
        ),

        Command(
            {
                name: "RecallScene", id: 0x5, access: "F O", conformance: "M", direction: "request",
                response: "status",
                xref: { document: "cluster", section: "1.4.9.12" }
            },
            Field({
                name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                details: "This field shall indicate the group identifier in the Group Table.",
                xref: { document: "cluster", section: "1.4.9.12.1" }
            }),
            Field({
                name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field shall indicate the scene identifier in the Scene Table.",
                xref: { document: "cluster", section: "1.4.9.12.2" }
            }),

            Field({
                name: "TransitionTime", id: 0x2, type: "uint32", conformance: "O", constraint: "max 60000000",
                quality: "X",
                details: "This field shall indicate the transition time of the scene, measured in milliseconds.",
                xref: { document: "cluster", section: "1.4.9.12.3" }
            })
        ),

        Command(
            {
                name: "GetSceneMembership", id: 0x6, access: "F O", conformance: "M", direction: "request",
                response: "GetSceneMembershipResponse",
                details: "This command can be used to get the used scene identifiers within a certain group, for the endpoint " +
                    "that implements this cluster.",
                xref: { document: "cluster", section: "1.4.9.13" }
            },

            Field({
                name: "GroupId", id: 0x0, type: "group-id", conformance: "M",
                details: "This field shall indicate the group identifier in the Group Table.",
                xref: { document: "cluster", section: "1.4.9.13.1" }
            })
        ),

        Command(
            {
                name: "GetSceneMembershipResponse", id: 0x6, conformance: "M", direction: "response",
                xref: { document: "cluster", section: "1.4.9.14" }
            },
            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field shall be set according to the Effect on Receipt section for GetSceneMembership command.",
                xref: { document: "cluster", section: "1.4.9.14.1" }
            }),

            Field({
                name: "Capacity", id: 0x1, type: "uint8", conformance: "M", quality: "X",

                details: "This field shall contain the remaining capacity of the Scene Table of the server (for all groups " +
                    "for the accessing fabric). The following values apply:" +
                    "\n" +
                    "  • 0 - No further scenes may be added." +
                    "\n" +
                    "  • 0 < Capacity < 0xFE - Capacity holds the number of scenes that may be added." +
                    "\n" +
                    "  • 0xFE - At least 1 further scene may be added (exact number is unknown)." +
                    "\n" +
                    "  • null - It is unknown if any further scenes may be added.",

                xref: { document: "cluster", section: "1.4.9.14.2" }
            }),

            Field({
                name: "GroupId", id: 0x2, type: "group-id", conformance: "M",
                details: "This field shall be set to the corresponding field of the received GetSceneMembership command.",
                xref: { document: "cluster", section: "1.4.9.14.3" }
            }),

            Field(
                {
                    name: "SceneList", id: 0x3, type: "list", conformance: "Status == Success",
                    details: "If the status is not SUCCESS then this field shall be omitted, else this field shall contain the " +
                        "identifiers of all the scenes in the Scene Table with the corresponding Group ID.",
                    xref: { document: "cluster", section: "1.4.9.14.4" }
                },

                Field({ name: "entry", type: "uint8" })
            )
        ),

        Command(
            {
                name: "CopyScene", id: 0x40, access: "F M", conformance: "O", direction: "request",
                response: "CopySceneResponse",
                details: "This command allows a client to efficiently copy scenes from one group/scene identifier pair to " +
                    "another group/scene identifier pair.",
                xref: { document: "cluster", section: "1.4.9.15" }
            },

            Field({
                name: "Mode", id: 0x0, type: "CopyModeBitmap", conformance: "M", constraint: "desc",
                details: "This field shall contain the information of how the scene copy is to proceed." +
                    "\n" +
                    "The CopyAllScenes bit of the Mode indicates whether all scenes are to be copied. If this value is " +
                    "set to 1, all scenes are to be copied and the SceneIdentifierFrom and SceneIdentifierTo fields " +
                    "shall be ignored. Otherwise this bit is set to 0.",
                xref: { document: "cluster", section: "1.4.9.15.1" }
            }),

            Field({
                name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
                details: "This field shall indicate the identifier of the group from which the scene is to be copied. " +
                    "Together with the SceneIdentifierFrom field, this field uniquely identifies the scene to copy from " +
                    "the Scene Table.",
                xref: { document: "cluster", section: "1.4.9.15.2" }
            }),

            Field({
                name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field shall indicate the identifier of the scene from which the scene is to be copied. " +
                    "Together with the GroupIdentifierFrom field, this field uniquely identifies the scene to copy from " +
                    "the Scene Table.",
                xref: { document: "cluster", section: "1.4.9.15.3" }
            }),

            Field({
                name: "GroupIdentifierTo", id: 0x3, type: "group-id", conformance: "M",
                details: "This field shall indicate the identifier of the group to which the scene is to be copied. Together " +
                    "with the SceneIdentifierTo field, this field uniquely identifies the scene to copy to the Scene " +
                    "Table.",
                xref: { document: "cluster", section: "1.4.9.15.4" }
            }),

            Field({
                name: "SceneIdentifierTo", id: 0x4, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field shall indicate the identifier of the scene to which the scene is to be copied. Together " +
                    "with the GroupIdentifierTo field, this field uniquely identifies the scene to copy to the Scene " +
                    "Table.",
                xref: { document: "cluster", section: "1.4.9.15.5" }
            })
        ),

        Command(
            {
                name: "CopySceneResponse", id: 0x40, conformance: "CopyScene", direction: "response",
                xref: { document: "cluster", section: "1.4.9.16" }
            },
            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                details: "This field shall be set according to the Effect on Receipt section for the CopyScene command.",
                xref: { document: "cluster", section: "1.4.9.16.1" }
            }),

            Field({
                name: "GroupIdentifierFrom", id: 0x1, type: "group-id", conformance: "M",
                details: "This field shall be set to the same values as in the corresponding fields of the received CopyScene " +
                    "command.",
                xref: { document: "cluster", section: "1.4.9.16.2" }
            }),

            Field({
                name: "SceneIdentifierFrom", id: 0x2, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field shall be set to the same values as in the corresponding fields of the received CopyScene " +
                    "command.",
                xref: { document: "cluster", section: "1.4.9.16.3" }
            })
        ),

        Datatype(
            { name: "CopyModeBitmap", type: "map8", xref: { document: "cluster", section: "1.4.7.1" } },
            Field({ name: "CopyAllScenes", constraint: "0", description: "Copy all scenes in the scene table" })
        ),

        Datatype(
            { name: "SceneInfoStruct", type: "struct", xref: { document: "cluster", section: "1.4.7.2" } },

            Field({
                name: "SceneCount", id: 0x0, type: "uint8", access: "F", conformance: "M", default: 0,
                details: "This field shall indicate the number of scenes currently used in the server’s Scene Table on the " +
                    "endpoint where the Scenes Management cluster appears." +
                    "\n" +
                    "This only includes the count for the associated fabric.",
                xref: { document: "cluster", section: "1.4.7.2.1" }
            }),

            Field({
                name: "CurrentScene", id: 0x1, type: "uint8", access: "S", conformance: "M", constraint: "desc",
                default: 255,
                details: "This field shall indicate the scene identifier of the scene last invoked on the associated fabric. " +
                    "If no scene has been invoked, the value of this field shall be 0xFF, the undefined scene identifier.",
                xref: { document: "cluster", section: "1.4.7.2.2" }
            }),

            Field({
                name: "CurrentGroup", id: 0x2, type: "group-id", access: "S", conformance: "M", default: 0,
                details: "This field shall indicate the group identifier of the scene last invoked on the associated fabric, " +
                    "or 0 if the scene last invoked is not associated with a group.",
                xref: { document: "cluster", section: "1.4.7.2.3" }
            }),

            Field({
                name: "SceneValid", id: 0x3, type: "bool", access: "S", conformance: "M", default: false,

                details: "This field shall indicate whether the state of the server corresponds to that associated with the " +
                    "CurrentScene and CurrentGroup fields of the SceneInfoStruct they belong to. TRUE indicates that " +
                    "these fields are valid, FALSE indicates that they are not valid." +
                    "\n" +
                    "This field shall be set to False for all other fabrics when an attribute with the Scenes (\"S\") " +
                    "designation in the Quality column of another cluster present on the same endpoint is modified or " +
                    "when the current scene is modified by a fabric through the RecallScene or StoreScene commands, " +
                    "regardless of the fabric-scoped access quality of the command." +
                    "\n" +
                    "In the event where the SceneValid field is set to False for a fabric, the CurrentScene and " +
                    "CurrentGroup fields shall be the last invoked scene and group for that fabric. In the event where " +
                    "no scene was previously invoked for that fabric, the CurrentScene and CurrentGroup fields shall be " +
                    "their default values.",

                xref: { document: "cluster", section: "1.4.7.2.4" }
            }),

            Field({
                name: "RemainingCapacity", id: 0x4, type: "uint8", access: "F", conformance: "M",
                constraint: "max 253",
                details: "This field shall indicate the remaining capacity of the Scene Table on this endpoint for the " +
                    "accessing fabric. Note that this value may change between reads, even if no entries are added or " +
                    "deleted on the accessing fabric, due to other clients associated with other fabrics adding or " +
                    "deleting entries that impact the resource usage on the device.",
                xref: { document: "cluster", section: "1.4.7.2.5" }
            }),

            Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
        ),

        Datatype(
            {
                name: "AttributeValuePairStruct", type: "struct",
                details: "This data type indicates a combination of an identifier and the value of an attribute.",
                xref: { document: "cluster", section: "1.4.7.3" }
            },

            Field({
                name: "AttributeId", id: 0x0, type: "attrib-id", conformance: "M",

                details: "This field shall be present for all instances in a given ExtensionFieldSetStruct." +
                    "\n" +
                    "Which Value* field is used shall be determined based on the data type of the attribute indicated by " +
                    "AttributeID, as described in the Value* Fields subsection." +
                    "\n" +
                    "The AttributeID field shall NOT refer to an attribute without the Scenes (\"S\") designation in the " +
                    "Quality column of the cluster specification." +
                    "\n" +
                    "### 1.4.7.3.2. ValueUnsigned8, ValueSigned8, ValueUnsigned16, ValueSigned16, ValueUnsigned32, " +
                    "ValueSigned32, ValueUnsigned64, ValueSigned64 Fields" +
                    "\n" +
                    "These fields shall indicate the attribute value as part of an extension field set, associated with " +
                    "a given AttributeID under an ExtensionFieldSetStruct’s ClusterID. Which of the fields is used shall" +
                    "\n" +
                    "be determined by the type of the attribute indicated by AttributeID as follows:" +
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
                    "  • Data types map64, uint40, uint48, uint56 and uint64 shall map to ValueUnsigned64." +
                    "\n" +
                    "  • Data types int40, int48, int56 and int64 shall map to ValueSigned64." +
                    "\n" +
                    "  • For derived types, the mapping shall be based on the base type. For example, an attribute of " +
                    "    type percent shall be treated as if it were of type uint8, whereas an attribute of type " +
                    "    percent100ths shall be treated as if it were of type uint16." +
                    "\n" +
                    "  • For boolean nullable attributes, any value that is not 0 or 1 shall be considered to have the " +
                    "    null value." +
                    "\n" +
                    "  • For boolean non-nullable attributes, any value that is not 0 or 1 shall be considered to have " +
                    "    the value FALSE." +
                    "\n" +
                    "  • For non-boolean nullable attributes, any value that is not a valid numeric value for the " +
                    "    attribute’s type after accounting for range reductions due to being nullable and constraints " +
                    "    shall be considered to have the null value for the type." +
                    "\n" +
                    "  • For non-boolean non-nullable attributes, any value that is not a valid numeric value for the " +
                    "    attribute’s type after accounting for constraints shall be considered to be the valid attribute " +
                    "    value that is closest to the provided value." +
                    "\n" +
                    "    ◦ In the event that an invalid provided value is of equal numerical distance to the two closest " +
                    "      valid values, the lowest of those values shall be considered the closest valid attribute " +
                    "      value." +
                    "\n" +
                    "If the used field does not match the data type of the attribute indicated by AttributeID, the " +
                    "AttributeValuePairStruct shall be considered invalid." +
                    "\n" +
                    "Examples of processing are:" +
                    "\n" +
                    "  • ColorControl cluster CurrentX (AttributeID 0x0003) has a type of uint16 and is not nullable." +
                    "\n" +
                    "    ◦ ValueUnsigned16 of 0xAB12 would be used as-is, as it is in range." +
                    "\n" +
                    "    ◦ ValueUnsigned16 of 0xFF80 is outside of the range allowed for attribute CurrentX, and would " +
                    "      be saturated to the closest valid value, which is the maximum of the attribute’s constraint " +
                    "      range: 0xFEFF." +
                    "\n" +
                    "  • LevelControl cluster CurrentLevel (AttributeID 0x0000) has a type of uint8 and is nullable." +
                    "\n" +
                    "    ◦ ValueUnsigned8 of 0xA1 would be used as-is, as it is in range." +
                    "\n" +
                    "    ◦ ValueUnsigned8 of 0xFF is outside the range allowed for nullable attribute CurrentLevel, and " +
                    "      would be considered as the null value.",

                xref: { document: "cluster", section: "1.4.7.3.1" }
            }),

            Field({ name: "ValueUnsigned8", id: 0x1, type: "uint8", conformance: "O.a" }),
            Field({ name: "ValueSigned8", id: 0x2, type: "int8", conformance: "O.a" }),
            Field({ name: "ValueUnsigned16", id: 0x3, type: "uint16", conformance: "O.a" }),
            Field({ name: "ValueSigned16", id: 0x4, type: "int16", conformance: "O.a" }),
            Field({ name: "ValueUnsigned32", id: 0x5, type: "uint32", conformance: "O.a" }),
            Field({ name: "ValueSigned32", id: 0x6, type: "int32", conformance: "O.a" }),
            Field({ name: "ValueUnsigned64", id: 0x7, type: "uint64", conformance: "O.a" }),
            Field({ name: "ValueSigned64", id: 0x8, type: "int64", conformance: "O.a" })
        ),

        Datatype(
            {
                name: "ExtensionFieldSetStruct", type: "struct",
                details: "This data type indicates for a given cluster a set of attributes and their values.",
                xref: { document: "cluster", section: "1.4.7.4" }
            },

            Field({
                name: "ClusterId", id: 0x0, type: "cluster-id", conformance: "M",
                details: "This field shall indicate the cluster-id of the cluster whose attributes are in the " +
                    "AttributeValueList field.",
                xref: { document: "cluster", section: "1.4.7.4.1" }
            }),

            Field(
                {
                    name: "AttributeValueList", id: 0x1, type: "list", conformance: "M", constraint: "desc",
                    details: "This field shall indicate a set of attributes and their values which are stored as part of a scene." +
                        "\n" +
                        "Attributes which do not have the Scenes (\"S\") designation in the Quality column of their cluster " +
                        "specification shall NOT be used in the AttributeValueList field.",
                    xref: { document: "cluster", section: "1.4.7.4.2" }
                },

                Field({ name: "entry", type: "AttributeValuePairStruct" })
            )
        ),

        Datatype(
            {
                name: "Logical Scene Table", type: "struct",

                details: "The Scene Table is used to store information for each scene capable of being invoked on the server. " +
                    "Each scene is defined for a particular group. The Scene Table is defined here as a conceptual " +
                    "illustration to assist in understanding the underlying data to be stored when scenes are defined. " +
                    "Though the Scene Table is defined here using the data model architecture rules and format, the " +
                    "design is not normative." +
                    "\n" +
                    "The Scene table is logically a list of fabric-scoped structs. The logical fields of each Scene " +
                    "Table entry struct are illustrated below. An ExtensionFieldSetStruct may be present for each " +
                    "Scenes-supporting cluster implemented on the same endpoint.",

                xref: { document: "cluster", section: "1.4.7.5" }
            },

            Field({
                name: "SceneGroupId", id: 0x0, type: "group-id", conformance: "M",
                details: "This field is the group identifier for which this scene applies, or 0 if the scene is not " +
                    "associated with a group.",
                xref: { document: "cluster", section: "1.4.7.5.1" }
            }),

            Field({
                name: "SceneId", id: 0x1, type: "uint8", conformance: "M", constraint: "max 254",
                details: "This field is unique within this group, which is used to identify this scene.",
                xref: { document: "cluster", section: "1.4.7.5.2" }
            }),

            Field({
                name: "SceneName", id: 0x2, type: "string", conformance: "SN", constraint: "max 16",
                details: "The field is the name of the scene." +
                    "\n" +
                    "If scene names are not supported, any commands that write a scene name shall simply discard the " +
                    "name, and any command that returns a scene name shall return an empty string.",
                xref: { document: "cluster", section: "1.4.7.5.3" }
            }),

            Field({
                name: "SceneTransitionTime", id: 0x3, type: "uint32", conformance: "M", constraint: "max 60000000",
                default: 0,
                details: "This field is the amount of time, in milliseconds, it will take for a cluster to change from its " +
                    "current state to the requested state.",
                xref: { document: "cluster", section: "1.4.7.5.4" }
            }),

            Field(
                {
                    name: "ExtensionFields", id: 0x4, type: "list", conformance: "M", default: [],
                    details: "See the Scene Table Extensions subsections of individual clusters. A Scene Table Extension shall " +
                        "only use attributes with the Scene quality. Each ExtensionFieldSetStruct holds a set of values of " +
                        "these attributes for a cluster implemented on the same endpoint where the Scene (\"S\") designation " +
                        "appears in the quality column. A scene is the aggregate of all such fields across all clusters on " +
                        "the endpoint.",
                    xref: { document: "cluster", section: "1.4.7.5.5" }
                },

                Field({ name: "entry", type: "ExtensionFieldSetStruct" })
            )
        )
    ),

    Cluster(
        {
            name: "OnOff", id: 0x6, classification: "application", pics: "OO",
            details: "Attributes and commands for turning devices on and off.",
            xref: { document: "cluster", section: "1.5" }
        },
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.5.4" } },

            Field({
                name: "LT", conformance: "[!OFFONLY]", constraint: "0", description: "Lighting",

                details: "This cluster is used for a lighting application." +
                    "\n" +
                    "On receipt of a Level Control cluster command that causes the OnOff attribute to be set to FALSE, " +
                    "the OnTime attribute shall be set to 0." +
                    "\n" +
                    "On receipt of a Level Control cluster command that causes the OnOff attribute to be set to TRUE, if " +
                    "the value of the OnTime attribute is equal to 0, the server shall set the OffWaitTime attribute to " +
                    "0.",

                xref: { document: "cluster", section: "1.5.4.1" }
            }),

            Field({
                name: "DF", conformance: "[!OFFONLY]", constraint: "1", description: "DeadFrontBehavior",

                details: "When this feature is supported, the device exposing this server cluster exhibits \"dead front\" " +
                    "behavior when the \"OnOff\" attribute is FALSE (Off). This \"dead front\" behavior includes:" +
                    "\n" +
                    "  • clusters other than this cluster that are also exposed may respond with failures to Invoke and " +
                    "    Write interactions. Such failure responses when in a \"dead front\" shall be with an " +
                    "    INVALID_IN_STATE status code." +
                    "\n" +
                    "  • clusters other than this cluster may change the values of their attributes to best-effort " +
                    "    values, due to the actual values not being defined or available in this state. Device type " +
                    "    specifications that require support for the DF feature SHOULD define what these best-effort " +
                    "    values are." +
                    "\n" +
                    "  • Report Transactions shall continue to be generated. Such transactions may include best-effort " +
                    "    values as noted above." +
                    "\n" +
                    "  • Event generation logic for clusters other than this cluster is unchanged (noting possible use " +
                    "    of best-effort attribute values as in the preceding bullets)." +
                    "\n" +
                    "When this feature is supported and the OnOff attribute changes from TRUE to FALSE (e.g. when " +
                    "receiving an Off Command, or due to a manual interaction on the device), it shall start executing " +
                    "this \"dead front\" behavior." +
                    "\n" +
                    "When this feature is supported and the OnOff attribute changes from FALSE to TRUE (e.g. when " +
                    "receiving an On Command, or due to a manual interaction on the device), it shall stop executing " +
                    "this \"dead front\" behavior." +
                    "\n" +
                    "When this feature is supported, and any change of the \"dead front\" state leads to changes in " +
                    "attributes of other clusters due to the \"dead front\" feature, these attribute changes shall NOT be " +
                    "skipped or omitted from the usual processing associated with attribute changes. For example, if an " +
                    "attribute changes from value 4 to null on \"dead front\" behavior due to an Off command being " +
                    "received, this change shall be processed for reporting and subscriptions.",

                xref: { document: "cluster", section: "1.5.4.2" }
            }),

            Field({
                name: "OFFONLY", conformance: "[!LT | DF]", constraint: "2", description: "OffOnly",

                details: "When this feature is supported, the Off command shall be supported and the On and Toggle commands " +
                    "shall NOT be supported." +
                    "\n" +
                    "This feature is useful for devices which can be turned off via the Off command received by an " +
                    "instance of this cluster but cannot be turned on via commands received by an instance of this " +
                    "cluster due to regulatory requirements.",

                xref: { document: "cluster", section: "1.5.4.3" }
            })
        ),

        Attribute({
            name: "OnOff", id: 0x0, type: "bool", access: "R V", conformance: "M", default: false,
            quality: "N S",
            details: "This attribute indicates whether the device type implemented on the endpoint is turned off or " +
                "turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.",
            xref: { document: "cluster", section: "1.5.6.2" }
        }),

        Attribute({
            name: "GlobalSceneControl", id: 0x4000, type: "bool", access: "R V", conformance: "LT",
            default: true,

            details: "In order to support the use case where the user gets back the last setting of a set of devices " +
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

            xref: { document: "cluster", section: "1.5.6.3" }
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
                "state, or in the Delayed Off state. See OnWithTimedOff for more details.",

            xref: { document: "cluster", section: "1.5.6.5" }
        }),

        Attribute({
            name: "StartUpOnOff", id: 0x4003, type: "StartUpOnOffEnum", access: "RW VM", conformance: "LT",
            constraint: "desc", quality: "X N",

            details: "This attribute shall define the desired startup behavior of a device when it is supplied with power " +
                "and this state shall be reflected in the OnOff attribute. If the value is null, the OnOff attribute " +
                "is set to its previous value. Otherwise, the behavior is defined in the table defining " +
                "StartUpOnOffEnum." +
                "\n" +
                "This behavior does not apply to reboots associated with OTA. After an OTA restart, the OnOff " +
                "attribute shall return to its value prior to the restart.",

            xref: { document: "cluster", section: "1.5.6.6" }
        }),

        Command({
            name: "Off", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.5.7.1" }
        }),
        Command({
            name: "On", id: 0x1, access: "O", conformance: "!OFFONLY", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.5.7.2" }
        }),
        Command({
            name: "Toggle", id: 0x2, access: "O", conformance: "!OFFONLY", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "1.5.7.3" }
        }),

        Command(
            {
                name: "OffWithEffect", id: 0x40, access: "O", conformance: "LT", direction: "request",
                response: "status",
                details: "The OffWithEffect command allows devices to be turned off using enhanced ways of fading.",
                xref: { document: "cluster", section: "1.5.7.4" }
            },

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
        ),

        Command({
            name: "OnWithRecallGlobalScene", id: 0x41, access: "O", conformance: "LT", direction: "request",
            response: "status",
            details: "This command allows the recall of the settings when the device was turned off.",
            xref: { document: "cluster", section: "1.5.7.5" }
        }),

        Command(
            {
                name: "OnWithTimedOff", id: 0x42, access: "O", conformance: "LT", direction: "request",
                response: "status",
                details: "This command allows devices to be turned on for a specific duration with a guarded off duration so " +
                    "that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received during " +
                    "this time, are prevented from turning the devices back on. Further OnWithTimedOff commands received " +
                    "while the server is turned on, will update the period that the device is turned on.",
                xref: { document: "cluster", section: "1.5.7.6" }
            },

            Field({
                name: "OnOffControl", id: 0x0, type: "OnOffControlBitmap", conformance: "M", constraint: "0 to 1",
                details: "This field contains information on how the server is to be operated.",
                xref: { document: "cluster", section: "1.5.7.6.1" }
            }),
            Field({
                name: "OnTime", id: 0x1, type: "uint16", conformance: "M", constraint: "max 65534",
                details: "This field is used to adjust the value of the OnTime attribute.",
                xref: { document: "cluster", section: "1.5.7.6.2" }
            }),
            Field({
                name: "OffWaitTime", id: 0x2, type: "uint16", conformance: "M", constraint: "max 65534",
                details: "This field is used to adjust the value of the OffWaitTime attribute.",
                xref: { document: "cluster", section: "1.5.7.6.3" }
            })
        ),

        Datatype(
            { name: "OnOffControlBitmap", type: "map8", xref: { document: "cluster", section: "1.5.5.1" } },
            Field({
                name: "AcceptOnlyWhenOn", constraint: "0",
                description: "Indicates a command is only accepted when in On state."
            })
        ),

        Datatype(
            { name: "StartUpOnOffEnum", type: "enum8", xref: { document: "cluster", section: "1.5.5.2" } },
            Field({ name: "Off", id: 0x0, conformance: "M", description: "Set the OnOff attribute to FALSE" }),
            Field({ name: "On", id: 0x1, conformance: "M", description: "Set the OnOff attribute to TRUE" }),
            Field({
                name: "Toggle", id: 0x2, conformance: "M",
                description: "If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle)."
            })
        ),

        Datatype(
            { name: "EffectIdentifierEnum", type: "enum8", xref: { document: "cluster", section: "1.5.5.3" } },
            Field({ name: "DelayedAllOff", id: 0x0, conformance: "M", description: "Delayed All Off" }),
            Field({ name: "DyingLight", id: 0x1, conformance: "M", description: "Dying Light" })
        ),

        Datatype(
            {
                name: "DelayedAllOffEffectVariantEnum", type: "enum8",
                xref: { document: "cluster", section: "1.5.5.4" }
            },
            Field({ name: "DelayedOffFastFade", id: 0x0, conformance: "M", description: "Fade to off in 0.8 seconds" }),
            Field({ name: "NoFade", id: 0x1, conformance: "M", description: "No fade" }),
            Field({
                name: "DelayedOffSlowFade", id: 0x2, conformance: "M",
                description: "50% dim down in 0.8 seconds then fade to off in 12 seconds"
            })
        ),

        Datatype(
            { name: "DyingLightEffectVariantEnum", type: "enum8", xref: { document: "cluster", section: "1.5.5.5" } },
            Field({
                name: "DyingLightFadeOff", id: 0x0, conformance: "M",
                description: "20% dim up in 0.5s then fade to off in 1 second"
            })
        )
    ),

    Cluster(
        {
            name: "LevelControl", id: 0x8, classification: "application", pics: "LVL",
            details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
                "a level, for example the brightness of a light, the degree of closure of a door, or the power " +
                "output of a heater.",
            xref: { document: "cluster", section: "1.6" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.6.4" } },
            Field({
                name: "OO", conformance: "O", constraint: "0", default: 1, description: "OnOff",
                details: "Dependency with the On/Off cluster"
            }),

            Field({
                name: "LT", conformance: "O", constraint: "1", default: 0, description: "Lighting",

                details: "This feature supports an interface for controlling the level of a light source. For the " +
                    "CurrentLevel attribute:" +
                    "\n" +
                    "A value of 0x00 shall NOT be used." +
                    "\n" +
                    "A value of 0x01 shall indicate the minimum level that can be attained on a device. A value of 0xFE " +
                    "shall indicate the maximum level that can be attained on a device. A value of null shall represent " +
                    "an undefined value." +
                    "\n" +
                    "All other values are application specific gradations from the minimum to the maximum level.",

                xref: { document: "cluster", section: "1.6.4.2" }
            }),

            Field({
                name: "FQ", conformance: "P", constraint: "2", default: 0, description: "Frequency",
                details: "NOTE The Frequency feature is provisional.",
                xref: { document: "cluster", section: "1.6.4.3" }
            })
        ),

        Attribute({
            name: "CurrentLevel", id: 0x0, type: "uint8", access: "R V", conformance: "M",
            constraint: "minLevel to maxLevel", default: null, quality: "X N S Q",

            details: "Indicates the current level of this device. The meaning of 'level' is device dependent." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • At most once per second, or" +
                "\n" +
                "  • At the end of the movement/transition, or" +
                "\n" +
                "  • When it changes from null to any other value and vice versa.",

            xref: { document: "cluster", section: "1.6.6.2" }
        }),

        Attribute({
            name: "RemainingTime", id: 0x1, type: "uint16", access: "R V", conformance: "LT", default: 0,
            quality: "Q",

            details: "Indicates the time remaining until the current command is complete - it is specified in 1/10ths of " +
                "a second." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • When it changes from 0 to any value higher than 10, or" +
                "\n" +
                "  • When it changes, with a delta larger than 10, caused by the invoke of a command, or" +
                "\n" +
                "  • When it changes to 0." +
                "\n" +
                "For commands with a transition time or changes to the transition time less than 1 second, changes " +
                "to this attribute shall NOT be reported." +
                "\n" +
                "As this attribute is not being reported during a regular countdown, clients SHOULD NOT rely on the " +
                "reporting of this attribute in order to keep track of the remaining duration.",

            xref: { document: "cluster", section: "1.6.6.3" }
        }),

        Attribute({
            name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[LT]",
            constraint: "1 to 254", default: 1,
            details: "Indicates the minimum value of CurrentLevel that is capable of being assigned.",
            xref: { document: "cluster", section: "1.6.6.4" }
        }),

        Attribute({
            name: "MinLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[!LT]",
            constraint: "max 254", default: 0,
            details: "Indicates the minimum value of CurrentLevel that is capable of being assigned.",
            xref: { document: "cluster", section: "1.6.6.4" }
        }),

        Attribute({
            name: "MaxLevel", id: 0x3, type: "uint8", access: "R V", conformance: "O",
            constraint: "minLevel to 254", default: 254,
            details: "Indicates the maximum value of CurrentLevel that is capable of being assigned.",
            xref: { document: "cluster", section: "1.6.6.5" }
        }),

        Attribute({
            name: "CurrentFrequency", id: 0x4, type: "uint16", access: "R V", conformance: "FQ",
            constraint: "minFrequency to maxFrequency", default: 0, quality: "S P Q",

            details: "Indicates the frequency at which the device is at CurrentLevel. A CurrentFrequency of 0 is unknown." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • At most once per second, or" +
                "\n" +
                "  • At the start of the movement/transition, or" +
                "\n" +
                "  • At the end of the movement/transition.",

            xref: { document: "cluster", section: "1.6.6.6" }
        }),

        Attribute({
            name: "MinFrequency", id: 0x5, type: "uint16", access: "R V", conformance: "FQ", default: 0,
            details: "Indicates the minimum value of CurrentFrequency that is capable of being assigned. MinFrequency " +
                "shall be less than or equal to MaxFrequency. A value of 0 indicates undefined.",
            xref: { document: "cluster", section: "1.6.6.7" }
        }),

        Attribute({
            name: "MaxFrequency", id: 0x6, type: "uint16", access: "R V", conformance: "FQ",
            constraint: "min minFrequency", default: 0,
            details: "Indicates the maximum value of CurrentFrequency that is capable of being assigned. MaxFrequency " +
                "shall be greater than or equal to MinFrequency. A value of 0 indicates undefined.",
            xref: { document: "cluster", section: "1.6.6.8" }
        }),

        Attribute({
            name: "OnOffTransitionTime", id: 0x10, type: "uint16", access: "RW VO", conformance: "O",
            default: 0,

            details: "Indicates the time taken to move to or from the target level when On or Off commands are received " +
                "by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a second." +
                "\n" +
                "The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note " +
                "that if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD " +
                "NOT be implemented.",

            xref: { document: "cluster", section: "1.6.6.10" }
        }),

        Attribute({
            name: "OnLevel", id: 0x11, type: "uint8", access: "RW VO", conformance: "M",
            constraint: "minLevel to maxLevel", default: null, quality: "X",

            details: "Indicates the value that the CurrentLevel attribute is set to when the OnOff attribute of an On/Off " +
                "cluster on the same endpoint is set to TRUE, as a result of processing an On/Off cluster command. " +
                "If the OnLevel attribute is not implemented, or is set to the null value, it has no effect. For " +
                "more details see Effect of On/Off Commands on the CurrentLevel attribute." +
                "\n" +
                "OnLevel represents a mandatory field that was previously not present or optional. Implementers " +
                "should be aware that older devices may not implement it.",

            xref: { document: "cluster", section: "1.6.6.11" }
        }),

        Attribute({
            name: "OnTransitionTime", id: 0x12, type: "uint16", access: "RW VO", conformance: "O",
            default: null, quality: "X",
            details: "Indicates the time taken to move the current level from the minimum level to the maximum level when " +
                "an On command is received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of " +
                "a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime " +
                "shall be used instead.",
            xref: { document: "cluster", section: "1.6.6.12" }
        }),

        Attribute({
            name: "OffTransitionTime", id: 0x13, type: "uint16", access: "RW VO", conformance: "O",
            default: null, quality: "X",
            details: "Indicates the time taken to move the current level from the maximum level to the minimum level when " +
                "an Off command is received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of " +
                "a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime " +
                "shall be used instead.",
            xref: { document: "cluster", section: "1.6.6.13" }
        }),

        Attribute({
            name: "DefaultMoveRate", id: 0x14, type: "uint8", access: "RW VO", conformance: "O",
            constraint: "min 1", quality: "X",
            details: "Indicates the movement rate, in units per second, when a Move command is received with a null value " +
                "Rate parameter.",
            xref: { document: "cluster", section: "1.6.6.14" }
        }),

        Attribute({
            name: "Options", id: 0xf, type: "OptionsBitmap", access: "RW VO", conformance: "M",
            constraint: "desc", default: 0,

            details: "Indicates the selected options of the device." +
                "\n" +
                "The Options attribute is a bitmap that determines the default behavior of some cluster commands. " +
                "Each command that is dependent on the Options attribute shall first construct a temporary Options " +
                "bitmap that is in effect during the command processing. The temporary Options bitmap has the same " +
                "format and meaning as the Options attribute, but includes any bits that may be overridden by " +
                "command fields." +
                "\n" +
                "This attribute is meant to be changed only during commissioning." +
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

            xref: { document: "cluster", section: "1.6.6.9" }
        }),

        Attribute({
            name: "StartUpCurrentLevel", id: 0x4000, type: "uint8", access: "RW VM", conformance: "LT",
            constraint: "desc", quality: "X N",

            details: "Indicates the desired startup level for a device when it is supplied with power and this level " +
                "shall be reflected in the CurrentLevel attribute. The values of the StartUpCurrentLevel attribute " +
                "are listed below:" +
                "\n" +
                "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel " +
                "attribute shall return to its value prior to the restart.",

            xref: { document: "cluster", section: "1.6.6.15" }
        }),

        Command(
            {
                name: "MoveToLevel", id: 0x0, access: "O", conformance: "M", direction: "request",
                response: "status",
                xref: { document: "cluster", section: "1.6.7.1" }
            },
            Field({ name: "Level", id: 0x0, type: "uint8", conformance: "M", constraint: "max 254" }),
            Field({ name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", quality: "X" }),
            Field({ name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
            Field({ name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 })
        ),

        Command(
            {
                name: "Move", id: 0x1, access: "O", conformance: "M", direction: "request", response: "status",
                xref: { document: "cluster", section: "1.6.7.2" }
            },
            Field({
                name: "MoveMode", id: 0x0, type: "MoveModeEnum", conformance: "M", constraint: "desc",
                details: "This field shall be one of the non-reserved values in MoveModeEnum.",
                xref: { document: "cluster", section: "1.6.7.2.1" }
            }),

            Field({
                name: "Rate", id: 0x1, type: "uint8", conformance: "M", quality: "X",

                details: "This field shall indicate the rate of movement in units per second. The actual rate of movement " +
                    "SHOULD be as close to this rate as the device is able. If the Rate field is null, then the value of " +
                    "the DefaultMoveRate attribute shall be used if that attribute is supported and its value is not " +
                    "null. If the Rate field is null and the DefaultMoveRate attribute is either not supported or set to " +
                    "null, then the device SHOULD move as fast as it is able. If the device is not able to move at a " +
                    "variable rate, this" +
                    "\n" +
                    "field may be disregarded.",

                xref: { document: "cluster", section: "1.6.7.2.2" }
            }),

            Field({ name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
            Field({ name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 })
        ),

        Command(
            {
                name: "Step", id: 0x2, access: "O", conformance: "M", direction: "request", response: "status",
                xref: { document: "cluster", section: "1.6.7.3" }
            },
            Field({
                name: "StepMode", id: 0x0, type: "StepModeEnum", conformance: "M", constraint: "desc",
                details: "This field shall be one of the non-reserved values in StepModeEnum.",
                xref: { document: "cluster", section: "1.6.7.3.1" }
            }),
            Field({
                name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                details: "This field shall indicate the change to CurrentLevel.",
                xref: { document: "cluster", section: "1.6.7.3.2" }
            }),

            Field({
                name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", quality: "X",

                details: "This field shall indicate the time that shall be taken to perform the step, in tenths of a second. " +
                    "A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close " +
                    "to" +
                    "\n" +
                    "this as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as " +
                    "fast as it is able." +
                    "\n" +
                    "If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.",

                xref: { document: "cluster", section: "1.6.7.3.3" }
            }),

            Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
            Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
        ),

        Command(
            {
                name: "Stop", id: 0x3, access: "O", conformance: "M", direction: "request", response: "status",
                xref: { document: "cluster", section: "1.6.7.4" }
            },
            Field({ name: "OptionsMask", id: 0x0, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
            Field({ name: "OptionsOverride", id: 0x1, type: "Options", conformance: "M", constraint: "desc", default: 0 })
        ),

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

        Command(
            {
                name: "MoveToClosestFrequency", id: 0x8, access: "O", conformance: "FQ", direction: "request",
                response: "status",
                xref: { document: "cluster", section: "1.6.7.5" }
            },
            Field({ name: "Frequency", id: 0x0, type: "uint16", conformance: "M", default: 0 })
        ),

        Datatype(
            { name: "OptionsBitmap", type: "map8", xref: { document: "cluster", section: "1.6.5.1" } },
            Field({
                name: "ExecuteIfOff", constraint: "0", description: "Dependency on On/Off cluster",
                details: "This bit indicates if this cluster has a dependency with the On/Off cluster.",
                xref: { document: "cluster", section: "1.6.5.1.1" }
            }),
            Field({
                name: "CoupleColorTempToLevel", constraint: "1", description: "Dependency on Color Control cluster",
                details: "This bit indicates if this cluster has a dependency with the Color Control cluster.",
                xref: { document: "cluster", section: "1.6.5.1.2" }
            })
        ),

        Datatype(
            { name: "MoveModeEnum", type: "enum8", xref: { document: "cluster", section: "1.6.5.2" } },
            Field({ name: "Up", id: 0x0, conformance: "M", description: "Increase the level" }),
            Field({ name: "Down", id: 0x1, conformance: "M", description: "Decrease the level" })
        ),
        Datatype(
            { name: "StepModeEnum", type: "enum8", xref: { document: "cluster", section: "1.6.5.3" } },
            Field({ name: "Up", id: 0x0, conformance: "M", description: "Step upwards" }),
            Field({ name: "Down", id: 0x1, conformance: "M", description: "Step downwards" })
        )
    ),

    Cluster(
        {
            name: "BooleanState", id: 0x45, classification: "application", pics: "BOOL",
            details: "This cluster provides an interface to a boolean state.",
            xref: { document: "cluster", section: "1.7" }
        },
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

        Event(
            {
                name: "StateChange", id: 0x0, access: "V", conformance: "O", priority: "info",
                details: "If this event is supported, it shall be generated when the StateValue attribute changes.",
                xref: { document: "cluster", section: "1.7.5.1" }
            },
            Field({
                name: "StateValue", id: 0x0, type: "bool", conformance: "M",
                details: "This field shall indicate the new value of the StateValue attribute.",
                xref: { document: "cluster", section: "1.7.5.1.1" }
            })
        )
    ),

    Cluster(
        {
            name: "BooleanStateConfiguration", id: 0x80, classification: "application", pics: "BOOLCFG",
            details: "This cluster is used to configure a boolean sensor, including optional state change alarm features " +
                "and configuration of the sensitivity level associated with the sensor.",
            xref: { document: "cluster", section: "1.8" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.8.4" } },
            Field({
                name: "VIS", conformance: "O", constraint: "0", description: "Visual",
                details: "Supports visual alarms"
            }),
            Field({
                name: "AUD", conformance: "O", constraint: "1", description: "Audible",
                details: "Supports audible alarms"
            }),

            Field({
                name: "SPRS", conformance: "[VIS | AUD]", constraint: "2", description: "AlarmSuppress",

                details: "This feature shall indicate that the device is able to suppress the supported alarm modes, when the " +
                    "user acknowledges the alarm. This is intended to stop visual and/or audible alarms, when the user " +
                    "has become aware that the sensor is triggered, but it is no longer desired to have the alarm modes " +
                    "active on the device, e.g.:" +
                    "\n" +
                    "  • The triggering cause have been resolved by the user, but the sensor has not yet stopped " +
                    "    detecting the triggering cause." +
                    "\n" +
                    "  • The user is not able to address the triggering cause, but is aware of the alarm and " +
                    "    suppress/acknowledge it be addressed at a later point." +
                    "\n" +
                    "Acknowledge of alarms will for the remainder of this cluster be referred to as suppress." +
                    "\n" +
                    "A suppressed alarm is still considered active and will remain so unless it is actively disabled or " +
                    "the triggering condition is not longer present. The action of suppressing an alarm mode is only " +
                    "applicable to and is intended to stop the physical alarming, e.g. emitting a sound or blinking a " +
                    "light; it does not impact alarm reporting in AlarmsActive.",

                xref: { document: "cluster", section: "1.8.4.1" }
            }),

            Field({
                name: "SENSLVL", conformance: "O", constraint: "3", description: "SensitivityLevel",
                details: "Supports ability to set sensor sensitivity"
            })
        ),

        Attribute({
            name: "CurrentSensitivityLevel", id: 0x0, type: "uint8", access: "RW VO", conformance: "SENSLVL",
            constraint: "max (SupportedSensitivityLevels - 1)", quality: "N",
            details: "Indicates the currently selected sensitivity level." +
                "\n" +
                "If a write interaction to this attribute contains an unsupported sensitivity value, a " +
                "CONSTRAINT_ERROR status shall be returned.",
            xref: { document: "cluster", section: "1.8.6.1" }
        }),

        Attribute({
            name: "SupportedSensitivityLevels", id: 0x1, type: "uint8", access: "R V", conformance: "SENSLVL",
            constraint: "2 to 10", quality: "F",

            details: "Indicates the number of supported sensitivity levels by the device." +
                "\n" +
                "These supported sensitivity levels shall be ordered by sensitivity, where a value of 0 shall be " +
                "considered the lowest sensitivity level (least sensitive) and the highest supported value shall be " +
                "considered the highest sensitivity level." +
                "\n" +
                "The number of supported sensitivity levels SHOULD represent unique sensitivity levels supported by " +
                "the device.",

            xref: { document: "cluster", section: "1.8.6.2" }
        }),

        Attribute({
            name: "DefaultSensitivityLevel", id: 0x2, type: "uint8", access: "R V", conformance: "[SENSLVL]",
            constraint: "max (SupportedSensitivityLevels - 1)", quality: "F",
            details: "Indicates the default sensitivity level selected by the manufacturer.",
            xref: { document: "cluster", section: "1.8.6.3" }
        }),

        Attribute(
            {
                name: "AlarmsActive", id: 0x3, type: "AlarmModeBitmap", access: "R V", conformance: "VIS | AUD",
                default: 0,

                details: "Indicates which specific alarm modes on the server are currently active. When the sensor is no " +
                    "longer triggered, this attribute shall be set to the inactive state, by setting the bit to 0, for " +
                    "all supported alarm modes." +
                    "\n" +
                    "If an alarm mode is not supported, the bit indicating this alarm mode shall always be 0. A bit " +
                    "shall indicate whether the alarm mode inactive or not:" +
                    "\n" +
                    "  • 0 = Inactive" +
                    "\n" +
                    "  • 1 = Active",

                xref: { document: "cluster", section: "1.8.6.4" }
            }
        ),

        Attribute(
            {
                name: "AlarmsSuppressed", id: 0x4, type: "AlarmModeBitmap", access: "R V", conformance: "SPRS",
                default: 0,

                details: "Indicates which specific alarm modes on the server are currently suppressed. When the sensor is no " +
                    "longer triggered, this attribute shall be set to the unsuppressed state, by setting the bit to 0, " +
                    "for all supported alarm modes." +
                    "\n" +
                    "If an alarm mode is not supported, the bit indicating this alarm mode shall always be 0. A bit " +
                    "shall indicate whether the alarm mode is suppressed or not:" +
                    "\n" +
                    "  • 0 = Not suppressed" +
                    "\n" +
                    "  • 1 = Suppressed",

                xref: { document: "cluster", section: "1.8.6.5" }
            }
        ),

        Attribute(
            {
                name: "AlarmsEnabled", id: 0x5, type: "AlarmModeBitmap", access: "R V", conformance: "[VIS | AUD]",
                quality: "N",

                details: "Indicates the alarm modes that will be emitted if the sensor is triggered. If an alarm mode is not " +
                    "supported, the bit indicating this alarm mode shall always be 0." +
                    "\n" +
                    "A bit shall indicate whether the alarm mode is enabled or disabled:" +
                    "\n" +
                    "  • 0 = Disabled" +
                    "\n" +
                    "  • 1 = Enabled",

                xref: { document: "cluster", section: "1.8.6.6" }
            }
        ),

        Attribute(
            {
                name: "AlarmsSupported", id: 0x6, type: "AlarmModeBitmap", access: "R V", conformance: "VIS | AUD",
                default: 0, quality: "F",

                details: "Indicates the alarms supported by the sensor. A bit shall indicate whether the alarm mode is " +
                    "supported:" +
                    "\n" +
                    "  • 0 = Not supported" +
                    "\n" +
                    "  • 1 = Supported",

                xref: { document: "cluster", section: "1.8.6.7" }
            }
        ),

        Attribute({
            name: "SensorFault", id: 0x7, type: "SensorFaultBitmap", access: "R V", conformance: "O",
            default: 0,
            details: "Indicates any faults registered by the device.",
            xref: { document: "cluster", section: "1.8.6.8" }
        }),

        Event(
            {
                name: "AlarmsStateChanged", id: 0x0, access: "V", conformance: "VIS | AUD", priority: "info",

                details: "This event shall be generated after any bits in the AlarmsActive and/or AlarmsSuppressed attributes " +
                    "change. This may occur in situations such as when internal processing by the server determines that " +
                    "an alarm mode becomes active or inactive, or when the SuppressAlarm or EnableDisableAlarm commands " +
                    "are processed in a way that some alarm modes becomes suppressed, active or inactive." +
                    "\n" +
                    "If several alarm modes change state at the same time, a single event combining multiple changes may " +
                    "be emitted instead of multiple events each representing a single change.",

                xref: { document: "cluster", section: "1.8.8.1" }
            },

            Field({
                name: "AlarmsActive", id: 0x0, type: "AlarmModeBitmap", conformance: "M",
                details: "This field shall indicate the state of active alarm modes, as indicated by the AlarmsActive " +
                    "attribute, at the time the event was generated.",
                xref: { document: "cluster", section: "1.8.8.1.1" }
            }),

            Field({
                name: "AlarmsSuppressed", id: 0x1, type: "AlarmModeBitmap", conformance: "SPRS",
                details: "This field shall indicate the state of suppressed alarm modes, as indicated by the AlarmsSuppressed " +
                    "attribute, at the time the event was generated.",
                xref: { document: "cluster", section: "1.8.8.1.2" }
            })
        ),

        Event(
            {
                name: "SensorFault", id: 0x1, access: "V", conformance: "O", priority: "info",
                details: "This event shall be generated when the device registers or clears a fault.",
                xref: { document: "cluster", section: "1.8.8.2" }
            },

            Field({
                name: "SensorFault", id: 0x0, type: "SensorFaultBitmap", conformance: "M",
                details: "This field shall indicate the value of the SensorFault attribute, at the time this event is " +
                    "generated.",
                xref: { document: "cluster", section: "1.8.8.2.1" }
            })
        ),

        Command(
            {
                name: "SuppressAlarm", id: 0x0, access: "O", conformance: "SPRS", direction: "request",
                response: "status",
                xref: { document: "cluster", section: "1.8.7.1" }
            },
            Field({
                name: "AlarmsToSuppress", id: 0x0, type: "AlarmModeBitmap", conformance: "M",
                details: "This field shall indicate the alarm modes to suppress.",
                xref: { document: "cluster", section: "1.8.7.1.1" }
            })
        ),

        Command(
            {
                name: "EnableDisableAlarm", id: 0x1, access: "O", conformance: "VIS | AUD", direction: "request",
                response: "status",
                xref: { document: "cluster", section: "1.8.7.2" }
            },

            Field({
                name: "AlarmsToEnableDisable", id: 0x0, type: "AlarmModeBitmap", conformance: "M",
                details: "This field shall indicate the alarm modes to either enable or disable depending on the bit status, " +
                    "as specified for the AlarmsEnabled attribute.",
                xref: { document: "cluster", section: "1.8.7.2.1" }
            })
        ),

        Datatype(
            { name: "AlarmModeBitmap", type: "map8", xref: { document: "cluster", section: "1.8.5.1" } },
            Field({ name: "Visual", constraint: "0", description: "Visual alarming" }),
            Field({ name: "Audible", constraint: "1", description: "Audible alarming" })
        ),
        Datatype(
            { name: "SensorFaultBitmap", type: "map16", xref: { document: "cluster", section: "1.8.5.2" } },
            Field({ name: "GeneralFault", constraint: "0", description: "Unspecified fault detected" })
        )
    ),

    Cluster(
        {
            name: "ModeSelect", id: 0x50, classification: "application", pics: "MOD",

            details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
                "one of several predefined values. For example, the light pattern of a disco ball, the mode of a " +
                "massage chair, or the wash cycle of a laundry machine." +
                "\n" +
                "The server allows the client to set a mode on the server. A mode is one of a list of options that " +
                "may be presented by a client for a user choice, or understood by the client, via the semantic tags " +
                "on the" +
                "\n" +
                "mode." +
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

            xref: { document: "cluster", section: "1.9" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.9.4" } },

            Field({
                name: "DEPONOFF", constraint: "0", description: "OnOff",
                details: "This feature creates a dependency between an OnOff cluster instance and this cluster instance on " +
                    "the same endpoint. See OnMode for more information.",
                xref: { document: "cluster", section: "1.9.4.1" }
            })
        ),

        Attribute({
            name: "Description", id: 0x0, type: "string", access: "R V", conformance: "M", constraint: "max 64",
            quality: "F",

            details: "This attribute describes the purpose of the server, in readable text." +
                "\n" +
                "For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and " +
                "another Mode Select cluster for the amount of sugar to add. In this case, the first instance can " +
                "have the description Milk and the second instance can have the description Sugar. This allows the " +
                "user to tell the purpose of each of the instances.",

            xref: { document: "cluster", section: "1.9.6.1" }
        }),

        Attribute({
            name: "StandardNamespace", id: 0x1, type: "enum16", access: "R V", conformance: "M",
            constraint: "desc", default: null, quality: "X F",
            details: "This attribute, when not null, shall indicate a single standard namespace for any standard semantic " +
                "tag value supported in this or any other cluster instance with the same value of this attribute. A " +
                "null value indicates no standard namespace, and therefore, no standard semantic tags are provided " +
                "in this cluster instance. Each standard namespace and corresponding values and value meanings shall " +
                "be defined in another document.",
            xref: { document: "cluster", section: "1.9.6.2" }
        }),

        Attribute(
            {
                name: "SupportedModes", id: 0x2, type: "list", access: "R V", conformance: "M",
                constraint: "max 255", quality: "F",
                details: "This attribute is the list of supported modes that may be selected for the CurrentMode attribute. " +
                    "Each item in this list represents a unique mode as indicated by the Mode field of the " +
                    "ModeOptionStruct. Each entry in this list shall have a unique value for the Mode field.",
                xref: { document: "cluster", section: "1.9.6.3" }
            },

            Field({ name: "entry", type: "ModeOptionStruct" })
        ),

        Attribute({
            name: "CurrentMode", id: 0x3, type: "uint8", access: "R V", conformance: "M", constraint: "desc",
            quality: "N",
            details: "This attribute represents the current mode of the server." +
                "\n" +
                "The value of this field must match the Mode field of one of the entries in the SupportedModes" +
                "\n" +
                "attribute.",
            xref: { document: "cluster", section: "1.9.6.4" }
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
                "If this attribute is not implemented, or is set to the null value, it shall have no effect.",

            xref: { document: "cluster", section: "1.9.6.5" }
        }),

        Attribute({
            name: "OnMode", id: 0x5, type: "uint8", access: "RW VO", conformance: "DEPONOFF",
            constraint: "desc", default: null, quality: "X N",

            details: "Indicates the value of CurrentMode that depends on the state of the On/Off cluster on the same " +
                "endpoint. If this attribute is not present or is set to null, it shall NOT have an effect, " +
                "otherwise the CurrentMode attribute shall depend on the OnOff attribute of the On/Off cluster" +
                "\n" +
                "The value of this field shall match the Mode field of one of the entries in the SupportedModes" +
                "\n" +
                "attribute.",

            xref: { document: "cluster", section: "1.9.6.6" }
        }),

        Command(
            {
                name: "ChangeToMode", id: 0x0, access: "O", conformance: "M", direction: "request",
                response: "status",
                details: "On receipt of this command, if the NewMode field indicates a valid mode transition within the " +
                    "supported list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the " +
                    "server shall respond with an INVALID_COMMAND status response.",
                xref: { document: "cluster", section: "1.9.7.1" }
            },

            Field({ name: "NewMode", id: 0x0, type: "uint8", conformance: "M", constraint: "desc" })
        ),

        Datatype(
            {
                name: "SemanticTagStruct", type: "struct",
                details: "A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.",
                xref: { document: "cluster", section: "1.9.5.1" }
            },

            Field({
                name: "MfgCode", id: 0x0, type: "vendor-id", conformance: "M", constraint: "desc", quality: "F",
                details: "This field shall indicate a manufacturer code (Vendor ID), and the Value field shall indicate a " +
                    "semantic tag defined by the manufacturer. Each manufacturer code supports a single namespace of " +
                    "values. The same manufacturer code and semantic tag value in separate cluster instances are part of " +
                    "the same namespace and have the same meaning. For example: a manufacturer tag meaning \"pinch\", has " +
                    "the same meaning in a cluster whose purpose is to choose the amount of sugar, or amount of salt.",
                xref: { document: "cluster", section: "1.9.5.1.2" }
            }),

            Field({
                name: "Value", id: 0x1, type: "enum16", conformance: "M", quality: "F",
                details: "This field shall indicate the semantic tag within a semantic tag namespace which is either " +
                    "manufacturer specific or standard. For semantic tags in a standard namespace, see Standard " +
                    "Namespace.",
                xref: { document: "cluster", section: "1.9.5.1.1" }
            })
        ),

        Datatype(
            {
                name: "ModeOptionStruct", type: "struct",
                details: "This is a struct representing a possible mode of the server.",
                xref: { document: "cluster", section: "1.9.5.2" }
            },

            Field({
                name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 64", quality: "F",
                details: "This field is readable text that describes the mode option that can be used by a client to indicate " +
                    "to the user what this option means. This field is meant to be readable and understandable by the " +
                    "user.",
                xref: { document: "cluster", section: "1.9.5.2.1" }
            }),

            Field({
                name: "Mode", id: 0x1, type: "uint8", conformance: "M", quality: "F",
                details: "The Mode field is used to identify the mode option. The value shall be unique for every item in the " +
                    "SupportedModes attribute.",
                xref: { document: "cluster", section: "1.9.5.2.2" }
            }),

            Field(
                {
                    name: "SemanticTags", id: 0x2, type: "list", conformance: "M", constraint: "max 64", quality: "F",

                    details: "This field is a list of semantic tags that map to the mode option. This may be used by clients to " +
                        "determine the meaning of the mode option as defined in a standard or manufacturer specific " +
                        "namespace. Semantic tags can help clients look for options that meet certain criteria. A semantic " +
                        "tag shall be either a standard tag or manufacturer specific tag as defined in each " +
                        "SemanticTagStruct list entry." +
                        "\n" +
                        "A mode option may have more than one semantic tag. A mode option may be mapped to a mixture of " +
                        "standard and manufacturer specific semantic tags." +
                        "\n" +
                        "All standard semantic tags are from a single namespace indicated by the StandardNamespace attribute." +
                        "\n" +
                        "For example: A mode labeled \"100%\" can have both the HIGH (MS) and MAX (standard) semantic tag. " +
                        "Clients seeking the option for either HIGH or MAX will find the same option in this case.",

                    xref: { document: "cluster", section: "1.9.5.2.3" }
                },

                Field({ name: "entry", type: "SemanticTagStruct" })
            )
        )
    ),

    Cluster(
        {
            name: "ModeBase", classification: "application", pics: "MODB",

            details: "This cluster provides an interface for controlling a characteristic of a device that can be set to " +
                "one of several predefined values. For example, the light pattern of a disco ball, the mode of a " +
                "massage chair, or the wash cycle of a laundry machine." +
                "\n" +
                "The server allows the client to set a mode on the server. A mode is one of a list of options that " +
                "may be presented by a client for a user choice, or understood by the client, via the mode’s tags." +
                "\n" +
                "A mode tag is either a standard tag within a standard category namespace, or a manufacturer " +
                "specific tag, within the namespace of the vendor ID of the manufacturer." +
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

            xref: { document: "cluster", section: "1.10" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.10.4" } },

            Field({
                name: "DEPONOFF", constraint: "0", description: "OnOff",
                details: "This feature creates a dependency between an OnOff cluster instance and this cluster instance on " +
                    "the same endpoint. See OnMode for more information.",
                xref: { document: "cluster", section: "1.10.4.1" }
            })
        ),

        Attribute(
            {
                name: "SupportedModes", id: 0x0, type: "list", access: "R V", conformance: "M",
                constraint: "2 to 255", quality: "F",

                details: "This attribute shall contain the list of supported modes that may be selected for the CurrentMode " +
                    "attribute. Each item in this list represents a unique mode as indicated by the Mode field of the " +
                    "ModeOptionStruct." +
                    "\n" +
                    "Each entry in this list shall have a unique value for the Mode field. Each entry in this list shall " +
                    "have a unique value for the Label field.",

                xref: { document: "cluster", section: "1.10.6.1" }
            },

            Field({ name: "entry", type: "ModeOptionStruct" })
        ),

        Attribute({
            name: "CurrentMode", id: 0x1, type: "uint8", access: "R V", conformance: "M", constraint: "desc",
            quality: "N",

            details: "Indicates the current mode of the server." +
                "\n" +
                "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
                "attribute." +
                "\n" +
                "The value of this attribute may change at any time via an out-of-band interaction outside of the " +
                "server, such as interactions with a user interface, via internal mode changes due to autonomously " +
                "progressing through a sequence of operations, on system time-outs or idle delays, or via " +
                "interactions coming from a fabric other than the one which last executed a ChangeToMode.",

            xref: { document: "cluster", section: "1.10.6.2" }
        }),

        Attribute({
            name: "StartUpMode", id: 0x2, type: "uint8", access: "RW VO", conformance: "O", constraint: "desc",
            quality: "X N",

            details: "Indicates the desired startup mode for the server when it is supplied with power." +
                "\n" +
                "If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, " +
                "when the server is powered up, except in the case when the OnMode attribute overrides the " +
                "StartUpMode attribute (see OnModeWithPowerUp)." +
                "\n" +
                "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode " +
                "attribute shall return to its value prior to the restart." +
                "\n" +
                "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
                "attribute." +
                "\n" +
                "If this attribute is not implemented, or is set to the null value, it shall have no effect.",

            xref: { document: "cluster", section: "1.10.6.3" }
        }),

        Attribute({
            name: "OnMode", id: 0x3, type: "uint8", access: "RW VO", conformance: "DEPONOFF",
            constraint: "desc", default: null, quality: "X N",

            details: "Indicates whether the value of CurrentMode depends on the state of the On/Off cluster on the same " +
                "endpoint. If this attribute is not present or is set to null, there is no dependency, otherwise the " +
                "CurrentMode attribute shall depend on the OnOff attribute in the On/Off cluster" +
                "\n" +
                "The value of this field shall match the Mode field of one of the entries in the SupportedModes " +
                "attribute.",

            xref: { document: "cluster", section: "1.10.6.4" }
        }),

        Command(
            {
                name: "ChangeToMode", id: 0x0, access: "O", conformance: "M", direction: "request",
                response: "ChangeToModeResponse",
                details: "This command is used to change device modes." +
                    "\n" +
                    "On receipt of this command the device shall respond with a ChangeToModeResponse command.",
                xref: { document: "cluster", section: "1.10.7.1" }
            },

            Field({
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
                    "    GenericFailure if a more specific error cannot be provided. See Status field for details." +
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

                xref: { document: "cluster", section: "1.10.7.1.1" }
            })
        ),

        Command(
            {
                name: "ChangeToModeResponse", id: 0x1, conformance: "M", direction: "response",
                details: "This command is sent by the device on receipt of the ChangeToMode command. This command" +
                    "\n" +
                    "shall have the following data fields:",
                xref: { document: "cluster", section: "1.10.7.2" }
            },

            Field({
                name: "Status", id: 0x0, type: "status", conformance: "M", constraint: "desc",
                xref: { document: "cluster", section: "1.10.7.2.1" }
            }),
            Field({
                name: "StatusText", id: 0x1, type: "string", conformance: "[Status == Success], M",
                constraint: "max 64"
            })
        ),

        Datatype(
            {
                name: "ModeTagStruct", type: "struct",
                details: "A Mode Tag is meant to be interpreted by the client for the purpose the cluster serves.",
                xref: { document: "cluster", section: "1.10.5.1" }
            },

            Field({
                name: "MfgCode", id: 0x0, type: "vendor-id", conformance: "O", constraint: "desc",

                details: "If the MfgCode field exists, the Value field shall be in the manufacturer-specific value range (see " +
                    "Section 1.10.8, “Mode Namespace”)." +
                    "\n" +
                    "This field shall indicate the manufacturer’s VendorID and it shall determine the meaning of the " +
                    "Value field." +
                    "\n" +
                    "The same manufacturer code and mode tag value in separate cluster instances are part of the same " +
                    "namespace and have the same meaning. For example: a manufacturer tag meaning \"pinch\" can be used " +
                    "both in a cluster whose purpose is to choose the amount of sugar, or in a cluster whose purpose is " +
                    "to choose the amount of salt.",

                xref: { document: "cluster", section: "1.10.5.1.1" }
            }),

            Field({
                name: "Value", id: 0x1, type: "enum16", conformance: "M",
                details: "This field shall indicate the mode tag within a mode tag namespace which is either manufacturer " +
                    "specific or standard.",
                xref: { document: "cluster", section: "1.10.5.1.2" }
            })
        ),

        Datatype(
            {
                name: "ModeOptionStruct", type: "struct",
                details: "This is a struct representing a possible mode of the server.",
                xref: { document: "cluster", section: "1.10.5.2" }
            },

            Field({
                name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 64", quality: "F",
                details: "This field shall indicate readable text that describes the mode option, so that a client can " +
                    "provide it to the user to indicate what this option means. This field is meant to be readable and " +
                    "understandable by the user.",
                xref: { document: "cluster", section: "1.10.5.2.1" }
            }),

            Field({
                name: "Mode", id: 0x1, type: "uint8", conformance: "M", quality: "F",
                details: "This field is used to identify the mode option.",
                xref: { document: "cluster", section: "1.10.5.2.2" }
            }),

            Field(
                {
                    name: "ModeTags", id: 0x2, type: "list", conformance: "M", constraint: "max 8", quality: "F",

                    details: "This field shall contain a list of tags that are associated with the mode option. This may be used " +
                        "by clients to determine the full or the partial semantics of a certain mode, depending on which " +
                        "tags they understand, using standard definitions and/or manufacturer specific namespace definitions." +
                        "\n" +
                        "The standard mode tags are defined in this cluster specification. For the derived cluster " +
                        "instances, if the specification of the derived cluster defines a namespace, the set of standard " +
                        "mode tags also includes the mode tag values from that namespace." +
                        "\n" +
                        "Mode tags can help clients look for options that meet certain criteria, render the user interface, " +
                        "use" +
                        "\n" +
                        "the mode in an automation, or to craft help text their voice-driven interfaces. A mode tag shall be " +
                        "either a standard tag or a manufacturer specific tag, as defined in each ModeTagStruct list entry." +
                        "\n" +
                        "A mode option may have more than one mode tag. A mode option may be associated with a mixture of " +
                        "standard and manufacturer specific mode tags. A mode option shall be associated with at least one " +
                        "standard mode tag." +
                        "\n" +
                        "A few examples are provided below." +
                        "\n" +
                        "  • A mode named \"100%\" can have both the High (manufacturer specific) and Max (standard) mode tag. " +
                        "    Clients seeking the mode for either High or Max will find the same mode in this case." +
                        "\n" +
                        "  • A mode that includes a LowEnergy tag can be displayed by the client using a widget icon that " +
                        "    shows a green leaf." +
                        "\n" +
                        "  • A mode that includes a LowNoise tag may be used by the client when the user wishes for a lower " +
                        "    level of audible sound, less likely to disturb the household’s activities." +
                        "\n" +
                        "  • A mode that includes a LowEnergy tag (standard, defined in this cluster specification) and also " +
                        "    a Delicate tag (standard, defined in the namespace of a Laundry Mode derived cluster)." +
                        "\n" +
                        "  • A mode that includes both a generic Quick tag (defined here), and Vacuum and Mop tags, (defined " +
                        "    in the RVC Clean cluster that is a derivation of this cluster).",

                    xref: { document: "cluster", section: "1.10.5.2.3" }
                },

                Field({ name: "entry", type: "ModeTagStruct" })
            )
        ),

        Datatype(
            { name: "ModeChangeStatus", type: "enum8" },
            Field({
                name: "Success", id: 0x0,
                description: "Switching to the mode indicated by the NewMode field is allowed and possible. The CurrentMode attribute is set to the value of the NewMode field.",
                xref: { document: "cluster", section: "1.10.7.2.1.2" }
            }),
            Field({
                name: "UnsupportedMode", id: 0x1,
                description: "The value of the NewMode field doesn’t match any entries in the SupportedModes attribute.",
                xref: { document: "cluster", section: "1.10.7.2.1.2" }
            }),
            Field({
                name: "GenericFailure", id: 0x2,
                description: "Generic failure code, indicating that switching to the mode indicated by the NewMode field is not allowed or not possible.",
                xref: { document: "cluster", section: "1.10.7.2.1.2" }
            }),
            Field({
                name: "InvalidInMode", id: 0x3,
                description: "The received request cannot be handled due to the current mode of the device",
                xref: { document: "cluster", section: "1.10.7.2.1.2" }
            })
        ),

        Datatype(
            { name: "ModeTag", type: "enum16" },
            Field({ name: "Auto", id: 0x0, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "Quick", id: 0x1, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "Quiet", id: 0x2, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "LowNoise", id: 0x3, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "LowEnergy", id: 0x4, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "Vacation", id: 0x5, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "Min", id: 0x6, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "Max", id: 0x7, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "Night", id: 0x8, xref: { document: "cluster", section: "1.10.8" } }),
            Field({ name: "Day", id: 0x9, xref: { document: "cluster", section: "1.10.8" } })
        )
    ),

    Cluster(
        {
            name: "LowPower", id: 0x508, classification: "application", pics: "LOWPOWER",

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

            xref: { document: "cluster", section: "1.11" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
        Command({
            name: "Sleep", id: 0x0, access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command shall put the device into low power mode.",
            xref: { document: "cluster", section: "1.11.4.1" }
        })
    ),

    Cluster(
        {
            name: "WakeOnLan", id: 0x503, classification: "application", pics: "WAKEONLAN",

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

            xref: { document: "cluster", section: "1.12" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "MacAddress", id: 0x0, type: "string", access: "R V", conformance: "O", constraint: "max 12",
            quality: "F",
            details: "Indicates the current MAC address of the device. Only 48-bit MAC Addresses shall be used for this " +
                "attribute as required by the Wake on LAN protocol." +
                "\n" +
                "Format of this attribute shall be an upper-case hex-encoded string representing the hex address, " +
                "like 12345678ABCD.",
            xref: { document: "cluster", section: "1.12.4.1" }
        }),

        Attribute({
            name: "LinkLocalAddress", id: 0x1, type: "ipv6adr", access: "R V", conformance: "O",
            constraint: "desc", quality: "F",

            details: "Indicates the current link-local address of the device. Only 128-bit IPv6 link- local addresses " +
                "shall be used for this attribute." +
                "\n" +
                "NOTE" +
                "\n" +
                "Some companies may consider MAC Address to be protected data subject to PII handling considerations " +
                "and will therefore choose not to include it or read it. The MAC Address can often be determined " +
                "using ARP in IPv4 or NDP in IPv6.",

            xref: { document: "cluster", section: "1.12.4.2" }
        })
    ),

    Cluster(
        {
            name: "Switch", id: 0x3b, classification: "application", pics: "SWTCH",

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

            xref: { document: "cluster", section: "1.13" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.13.4" } },
            Field({
                name: "LS", conformance: "O.a", constraint: "0", description: "LatchingSwitch",
                details: "This feature flag is for a switch that maintains its position after being pressed (or turned).",
                xref: { document: "cluster", section: "1.13.4.1" }
            }),

            Field({
                name: "MS", conformance: "O.a", constraint: "1", description: "MomentarySwitch",
                details: "This feature flag is for a switch that does not maintain its position after being pressed (or " +
                    "turned). After releasing, it goes back to its idle position.",
                xref: { document: "cluster", section: "1.13.4.2" }
            }),

            Field({
                name: "MSR", conformance: "[MS & !AS]", constraint: "2", description: "MomentarySwitchRelease",
                details: "This feature flag is for a momentary switch that can distinguish and report release events.",
                xref: { document: "cluster", section: "1.13.4.3" }
            }),

            Field({
                name: "MSL", conformance: "[MS & (MSR | AS)]", constraint: "3",
                description: "MomentarySwitchLongPress",
                details: "This feature flag is for a momentary switch that can distinguish and report long presses from short " +
                    "presses.",
                xref: { document: "cluster", section: "1.13.4.4" }
            }),

            Field({
                name: "MSM", conformance: "AS, [MS & MSR]", constraint: "4",
                description: "MomentarySwitchMultiPress",
                details: "This feature flag is for a momentary switch that can distinguish and report double press and " +
                    "potentially multiple presses with more events, such as triple press, etc.",
                xref: { document: "cluster", section: "1.13.4.5" }
            }),

            Field({
                name: "AS", conformance: "[MS]", constraint: "5", description: "ActionSwitch",
                details: "This feature flag indicates simplified handling of events for multi-press-capable switches. See " +
                    "Multi Press Details.",
                xref: { document: "cluster", section: "1.13.4.6" }
            })
        ),

        Attribute({
            name: "NumberOfPositions", id: 0x0, type: "uint8", access: "R V", conformance: "M",
            constraint: "min 2", default: 2, quality: "F",
            details: "Indicates the maximum number of positions the switch has. Any kind of switch has a minimum of 2 " +
                "positions. Also see Multi Position Details for the case NumberOfPositions>2.",
            xref: { document: "cluster", section: "1.13.5.1" }
        }),

        Attribute({
            name: "CurrentPosition", id: 0x1, type: "uint8", access: "R V", conformance: "M",
            constraint: "max numberOfPositions1", default: 0, quality: "N",
            details: "Indicates the position of the switch. The valid range is zero to NumberOfPositions - 1." +
                "\n" +
                "CurrentPosition value 0 shall be assigned to the default position of the switch: for example the " +
                "\"open\" state of a rocker switch, or the \"idle\" state of a push button switch.",
            xref: { document: "cluster", section: "1.13.5.2" }
        }),

        Attribute({
            name: "MultiPressMax", id: 0x2, type: "uint8", access: "R V", conformance: "MSM",
            constraint: "min 2", default: 2, quality: "F",

            details: "Indicates how many consecutive presses can be detected and reported by a momentary switch which " +
                "supports multi-press (MSM feature flag set)." +
                "\n" +
                "For example, a momentary switch supporting single press, double press and triple press, but not " +
                "quad press and beyond, would return the value 3." +
                "\n" +
                "When more than MultiPressMax presses are detected within a multi-press sequence:" +
                "\n" +
                "  • The server for cluster revision < 2 SHOULD generate a MultiPressComplete event with the " +
                "    TotalNumberOfPressesCounted field set to the value of the MultiPressMax attribute, and avoid " +
                "    generating any further InitialPress and MultiPressOngoing events until the switch has become " +
                "    fully idle (i.e. no longer in the process of counting presses within the multipress)." +
                "\n" +
                "  • The server for cluster revision >= 2 shall generate a MultiPressComplete event with the " +
                "    TotalNumberOfPressesCounted field set to zero (indicating an aborted sequence), and shall NOT " +
                "    generate any further InitialPress and MultiPressOngoing events until the switch has become " +
                "    fully idle (i.e. no longer in the process of counting presses within the multipress)." +
                "\n" +
                "This approach avoids unintentionally causing intermediate actions where there is a very long " +
                "sequence of presses beyond MultiPressMax that may be taken in account specially by switches (e.g. " +
                "to trigger special behavior such as factory reset for which generating events towards the client is " +
                "not appropriate).",

            xref: { document: "cluster", section: "1.13.5.3" }
        }),

        Event(
            {
                name: "SwitchLatched", id: 0x0, access: "V", conformance: "LS", priority: "info",
                details: "This event shall be generated, when the latching switch is moved to a new position. It may have " +
                    "been delayed by debouncing within the switch.",
                xref: { document: "cluster", section: "1.13.6.1" }
            },

            Field({
                name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to numberOfPositions1",
                details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. after the move.",
                xref: { document: "cluster", section: "1.13.6.1.1" }
            })
        ),

        Event(
            {
                name: "InitialPress", id: 0x1, access: "V", conformance: "MS", priority: "info",
                details: "This event shall be generated, when the momentary switch starts to be pressed (after debouncing).",
                xref: { document: "cluster", section: "1.13.6.2" }
            },

            Field({
                name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to numberOfPositions1",
                details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
                xref: { document: "cluster", section: "1.13.6.2.1" }
            })
        ),

        Event(
            {
                name: "LongPress", id: 0x2, access: "V", conformance: "MSL", priority: "info",

                details: "This event shall be generated when the momentary switch has been pressed for a \"long\" time. The " +
                    "time interval constituting a \"long\" time is manufacturer-determined, since it depends on the switch " +
                    "physics." +
                    "\n" +
                    "  • When the AS feature flag is set, this event:" +
                    "\n" +
                    "    ◦ shall NOT be generated during a multi-press sequence (since a long press is a separate cycle " +
                    "      from any multi-press cycles);" +
                    "\n" +
                    "    ◦ shall only be generated after the first InitialPress following a MultiPressComplete when a " +
                    "      long press is detected after the idle time." +
                    "\n" +
                    "  • Else, when the MSM feature flag is set, this event:" +
                    "\n" +
                    "    ◦ shall NOT be generated during a multi-press sequence (since a long press is a separate cycle " +
                    "      from any multi-press cycles);" +
                    "\n" +
                    "    ◦ shall only be generated after the first InitialPress following a MultiPressComplete when a " +
                    "      long press is detected after the idle time;" +
                    "\n" +
                    "    ◦ shall NOT be generated after a MultiPressOngoing event without an intervening " +
                    "      MultiPressComplete event." +
                    "\n" +
                    "The above constraints imply that for a given activity detection cycle of a switch having MSM and/or " +
                    "MSL feature flags set, the entire activity is either a single long press detection cycle of " +
                    "(InitialPress, LongPress, LongRelease), or a single multi-press detection cycle (ending in " +
                    "MultiPressComplete), where presses that would otherwise be reported as long presses are instead " +
                    "reported as a counted press in the MultiPressComplete event, and as InitialPress/ShortRelease pairs " +
                    "otherwise (where applicable)." +
                    "\n" +
                    "The rationale for this constraint is the ambiguity of interpretation of events when mixing long " +
                    "presses and multi-press events.",

                xref: { document: "cluster", section: "1.13.6.3" }
            },

            Field({
                name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to numberOfPositions1",
                details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
                xref: { document: "cluster", section: "1.13.6.3.1" }
            })
        ),

        Event(
            {
                name: "ShortRelease", id: 0x3, access: "V", conformance: "MSR", priority: "info",

                details: "If the server has the Action Switch (AS) feature flag set, this event shall NOT be generated at " +
                    "all, since setting the Action Switch feature flag forbids the Momentary Switch ShortRelease (MSR) " +
                    "feature flag from being set. Otherwise, the following paragraphs describe the situations where this " +
                    "event is generated." +
                    "\n" +
                    "This event shall be generated, when the momentary switch has been released (after debouncing)." +
                    "\n" +
                    "  • If the server has the Momentary Switch LongPress (MSL) feature flag set, then this event shall " +
                    "    be generated when the switch is released if no LongPress event had been generated since the " +
                    "    previous InitialPress event." +
                    "\n" +
                    "  • If the server does not have the Momentary Switch LongPress (MSL) feature flag set, this event " +
                    "    shall be generated when the switch is released - even when the switch was pressed for a long " +
                    "    time." +
                    "\n" +
                    "  • Also see Section 1.13.7, “Sequence of generated events”.",

                xref: { document: "cluster", section: "1.13.6.4" }
            },

            Field({
                name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to numberOfPositions1",
                details: "This field shall indicate the previous value of the CurrentPosition attribute, i.e. just prior to " +
                    "release.",
                xref: { document: "cluster", section: "1.13.6.4.1" }
            })
        ),

        Event(
            {
                name: "LongRelease", id: 0x4, access: "V", conformance: "MSL", priority: "info",
                details: "This event shall be generated, when the momentary switch has been released (after debouncing) and " +
                    "after having been pressed for a long time, i.e. this event shall be generated when the switch is " +
                    "released if a LongPress event has been generated since the previous InitialPress event. Also see " +
                    "Section 1.13.7, “Sequence of generated events”.",
                xref: { document: "cluster", section: "1.13.6.5" }
            },

            Field({
                name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to numberOfPositions1",
                details: "This field shall indicate the previous value of the CurrentPosition attribute, i.e. just prior to " +
                    "release.",
                xref: { document: "cluster", section: "1.13.6.5.1" }
            })
        ),

        Event(
            {
                name: "MultiPressOngoing", id: 0x5, access: "V", conformance: "MSM & !AS", priority: "info",
                details: "If the server has the Action Switch (AS) feature flag set, this event shall NOT be generated at " +
                    "all. Otherwise, the following paragraphs describe the situations where this event is generated." +
                    "\n" +
                    "This event shall be generated to indicate how many times the momentary switch has been pressed in a " +
                    "multi-press sequence, during that sequence. See Multi Press Details below.",
                xref: { document: "cluster", section: "1.13.6.6" }
            },

            Field({
                name: "NewPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to numberOfPositions1",
                details: "This field shall indicate the new value of the CurrentPosition attribute, i.e. while pressed.",
                xref: { document: "cluster", section: "1.13.6.6.1" }
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

                xref: { document: "cluster", section: "1.13.6.6.2" }
            })
        ),

        Event(
            {
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
                    "  • a value of 0 when there was an aborted multi-press sequence, where the number of presses goes " +
                    "    beyond MultiPressMax presses," +
                    "\n" +
                    "  • a value of 1 when there was exactly one press in a multi-press sequence (and the sequence has " +
                    "    ended), i.e. there was no double press (or more)," +
                    "\n" +
                    "  • a value of 2 when there were exactly two presses in a multi-press sequence (and the sequence " +
                    "    has ended)," +
                    "\n" +
                    "  • a value of 3 when there were exactly three presses in a multi-press sequence (and the sequence " +
                    "    has ended)," +
                    "\n" +
                    "  • a value of N when there were exactly N presses in a multi-press sequence (and the sequence has " +
                    "    ended)." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "The introduction of TotalNumberOfPressesCounted supporting the value 0 may impact clients of " +
                    "switches using cluster revision 1 since such servers would not use this value of " +
                    "TotalNumberOfPressesCounted to indicate an aborted sequence. Clients SHOULD always act using the " +
                    "TotalNumberOfPressesCounted field taken into account since for values from 1 to MultiPressMax, the " +
                    "user action that led to the event was different depending on the count.",

                xref: { document: "cluster", section: "1.13.6.7" }
            },

            Field({
                name: "PreviousPosition", id: 0x0, type: "uint8", conformance: "M",
                constraint: "0 to numberOfPositions1"
            }),
            Field({
                name: "TotalNumberOfPressesCounted", id: 0x1, type: "uint8", conformance: "M",
                constraint: "max multiPressMax"
            })
        )
    ),

    Cluster(
        {
            name: "OperationalState", id: 0x60, classification: "application", pics: "OPSTATE",

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

            xref: { document: "cluster", section: "1.14" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

        Attribute(
            {
                name: "PhaseList", id: 0x0, type: "list", access: "R V", conformance: "M",
                constraint: "max 32[max 64]", quality: "X",

                details: "Indicates a list of names of different phases that the device can go through for the selected " +
                    "function or mode. The list may not be in sequence order. For example in a washing machine this " +
                    "could include items such as \"pre-soak\", \"rinse\", and \"spin\". These phases are manufacturer specific " +
                    "and may change when a different function or mode is selected." +
                    "\n" +
                    "A null value indicates that the device does not present phases during its operation. When this " +
                    "attribute’s value is null, the CurrentPhase attribute shall also be set to null.",

                xref: { document: "cluster", section: "1.14.5.1" }
            },

            Field({ name: "entry", type: "string" })
        ),

        Attribute({
            name: "CurrentPhase", id: 0x1, type: "uint8", access: "R V", conformance: "M", constraint: "desc",
            quality: "X",

            details: "This attribute represents the current phase of operation being performed by the server. This shall " +
                "be the positional index representing the value from the set provided in the PhaseList Attribute," +
                "\n" +
                "where the first item in that list is an index of 0. Thus, this attribute shall have a maximum value " +
                "that is \"length(PhaseList) - 1\"." +
                "\n" +
                "Null if the PhaseList attribute is null or if the PhaseList attribute is an empty list.",

            xref: { document: "cluster", section: "1.14.5.2" }
        }),

        Attribute({
            name: "CountdownTime", id: 0x2, type: "elapsed-s", access: "R V", conformance: "O",
            constraint: "max 259200", default: null, quality: "X Q",

            details: "Indicates the estimated time left before the operation is completed, in seconds." +
                "\n" +
                "A value of 0 (zero) means that the operation has completed." +
                "\n" +
                "A value of null represents that there is no time currently defined until operation completion. This " +
                "may happen, for example, because no operation is in progress or because the completion time is " +
                "unknown." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • If it has changed due to a change in the CurrentPhase or OperationalState attributes, or" +
                "\n" +
                "  • When it changes from 0 to any other value and vice versa, or" +
                "\n" +
                "  • When it changes from null to any other value and vice versa, or" +
                "\n" +
                "  • When it increases, or" +
                "\n" +
                "  • When there is any increase or decrease in the estimated time remaining that was due to " +
                "    progressing insight of the server’s control logic, or" +
                "\n" +
                "  • When it changes at a rate significantly different from one unit per second." +
                "\n" +
                "Changes to this attribute merely due to the normal passage of time with no other dynamic change of " +
                "device state shall NOT be reported." +
                "\n" +
                "As this attribute is not being reported during a regular countdown, clients SHOULD NOT rely on the " +
                "reporting of this attribute in order to keep track of the remaining duration.",

            xref: { document: "cluster", section: "1.14.5.3" }
        }),

        Attribute(
            {
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

                xref: { document: "cluster", section: "1.14.5.4" }
            },

            Field({ name: "entry", type: "OperationalStateStruct" })
        ),

        Attribute({
            name: "OperationalState", id: 0x4, type: "OperationalStateEnum", access: "R V", conformance: "M",
            details: "This attribute specifies the current operational state of a device. This shall be populated with a " +
                "valid OperationalStateID from the set of values in the OperationalStateList Attribute.",
            xref: { document: "cluster", section: "1.14.5.5" }
        }),

        Attribute({
            name: "OperationalError", id: 0x5, type: "ErrorStateStruct", access: "R V", conformance: "M",
            constraint: "desc",
            details: "This attribute shall specify the details of any current error condition being experienced on the " +
                "device when the OperationalState attribute is populated with Error. Please see ErrorStateStruct for " +
                "general requirements on the population of this attribute." +
                "\n" +
                "When there is no error detected, this shall have an ErrorStateID of NoError.",
            xref: { document: "cluster", section: "1.14.5.6" }
        }),

        Event(
            {
                name: "OperationalError", id: 0x0, access: "V", conformance: "M", priority: "critical",
                details: "This event is generated when a reportable error condition is detected. A device that generates this " +
                    "event shall also set the OperationalState attribute to Error, indicating an error condition." +
                    "\n" +
                    "This event shall contain the following fields:",
                xref: { document: "cluster", section: "1.14.7.1" }
            },

            Field({ name: "ErrorState", id: 0x0, type: "ErrorStateStruct", conformance: "M" })
        ),

        Event(
            {
                name: "OperationCompletion", id: 0x1, access: "V", conformance: "O", priority: "info",

                details: "This event SHOULD be generated when the overall operation ends, successfully or otherwise. For " +
                    "example, the completion of a cleaning operation in a Robot Vacuum Cleaner, or the completion of a " +
                    "wash cycle in a Washing Machine." +
                    "\n" +
                    "It is highly recommended that appliances device types employing the Operational State cluster " +
                    "support this event, even if it is optional. This assists clients in executing automations or " +
                    "issuing notifications at critical points in the device operation cycles." +
                    "\n" +
                    "This event shall contain the following fields:",

                xref: { document: "cluster", section: "1.14.7.2" }
            },

            Field({
                name: "CompletionErrorCode", id: 0x0, type: "enum8", conformance: "M",
                details: "This field provides an indication of the state at the end of the operation. This field shall have a " +
                    "value from the ErrorStateEnum set. A value of NoError indicates success, that is, no error has been " +
                    "detected.",
                xref: { document: "cluster", section: "1.14.7.2.1" }
            }),

            Field({
                name: "TotalOperationalTime", id: 0x1, type: "elapsed-s", conformance: "O", quality: "X",

                details: "The total operational time, in seconds, from when the operation was started via an initial Start " +
                    "command or autonomous/manual starting action, until the operation completed. This includes any time" +
                    "\n" +
                    "spent while paused. There may be cases whereby the total operational time exceeds the maximum value " +
                    "that can be conveyed by this attribute, in such instances, this attribute shall be populated with " +
                    "null.",

                xref: { document: "cluster", section: "1.14.7.2.2" }
            }),

            Field({
                name: "PausedTime", id: 0x2, type: "elapsed-s", conformance: "O", quality: "X",
                details: "The total time spent in the paused state, in seconds. There may be cases whereby the total paused " +
                    "time exceeds the maximum value that can be conveyed by this attribute, in such instances, this " +
                    "attribute shall be populated with null.",
                xref: { document: "cluster", section: "1.14.7.2.3" }
            })
        ),

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
                "A device that receives this command in any state which is not Pause-compatible shall respond" +
                "\n" +
                "with an OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState and shall " +
                "take no further action." +
                "\n" +
                "States are defined as Pause-compatible as follows:" +
                "\n" +
                "  • For states defined in this cluster specification, in Table 3, “Pause Compatibility”." +
                "\n" +
                "  • For states defined by derived cluster specifications, in the corresponding specifications." +
                "\n" +
                "  • For manufacturer-specific states, by the manufacturer." +
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
                "    NoError." +
                "\n" +
                "The following table defines the compatibility of this cluster’s states with the Pause command." +
                "\n" +
                "### Table 3. Pause Compatibility",

            xref: { document: "cluster", section: "1.14.6.1" }
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

            xref: { document: "cluster", section: "1.14.6.2" }
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

            xref: { document: "cluster", section: "1.14.6.3" }
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
                "A device that receives this command in any state which is not Resume-compatible shall respond with " +
                "an OperationalCommandResponse command with an ErrorStateID of CommandInvalidInState and shall take " +
                "no further action." +
                "\n" +
                "States are defined as Resume-compatible as follows:" +
                "\n" +
                "  • For states defined in this cluster specification, in Table 4, “Resume Compatibility”." +
                "\n" +
                "  • For states defined by derived cluster specifications, in the corresponding specifications." +
                "\n" +
                "  • For manufacturer-specific states, by the manufacturer." +
                "\n" +
                "The following table defines the compatibility of this cluster’s states with the Resume command." +
                "\n" +
                "### Table 4. Resume Compatibility" +
                "\n" +
                "A device that is unable to honor the Resume command for any other reason shall respond with an " +
                "OperationalCommandResponse command with an ErrorStateID of UnableToStartOrResume but take no " +
                "further action." +
                "\n" +
                "Otherwise, on success:" +
                "\n" +
                "  • The OperationalState attribute shall be set to the most recent non-Error operational state " +
                "    prior to entering the Paused state." +
                "\n" +
                "  • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of " +
                "    NoError.",

            xref: { document: "cluster", section: "1.14.6.4" }
        }),

        Command(
            {
                name: "OperationalCommandResponse", id: 0x4, access: "O",
                conformance: "Pause | Stop | Start | Resume", direction: "response",

                details: "This command shall be supported by an implementation if any of the other commands defined by this " +
                    "cluster are supported (i.e. listed in the AcceptedCommandList global attribute). This command shall " +
                    "also be supported by an implementation of a derived cluster as a response to any commands that may " +
                    "be additionally defined therein." +
                    "\n" +
                    "This command shall be generated in response to any of the Start, Stop, Pause, or Resume commands.",

                xref: { document: "cluster", section: "1.14.6.5" }
            },

            Field({
                name: "CommandResponseState", id: 0x0, type: "ErrorStateStruct", conformance: "M",
                details: "This shall indicate the success or otherwise of the attempted command invocation. On a successful " +
                    "invocation of the attempted command, the ErrorStateID shall be populated with NoError. Please see " +
                    "the individual command sections for additional specific requirements on population.",
                xref: { document: "cluster", section: "1.14.6.5.1" }
            })
        ),

        Datatype({
            name: "OperationalStateEnum", type: "enum8",

            details: "This type defines the set of known operational state values, and is derived from enum8. The " +
                "following table defines the applicable ranges for values that are defined within this type. All " +
                "values that are undefined shall be treated as reserved. As shown by the table, states that may be " +
                "specific to a certain Device Type or other modality shall be defined in a derived cluster of this " +
                "cluster." +
                "\n" +
                "The derived cluster-specific state definitions shall NOT duplicate any general state definitions. " +
                "That is, a derived cluster specification of this cluster cannot define states with the same " +
                "semantics as the general states defined below." +
                "\n" +
                "A manufacturer-specific state definition shall NOT duplicate the general state definitions or " +
                "derived cluster state definitions. That is, a manufacturer-defined state defined for this cluster " +
                "or a derived cluster thereof cannot define a state with the same semantics as the general states " +
                "defined below or states defined in a derived cluster. Such manufacturer-specific state definitions " +
                "shall be scoped in the context of the Vendor ID present in the Basic Information cluster." +
                "\n" +
                "The following table defines the generally applicable states.",

            xref: { document: "cluster", section: "1.14.4.1" }
        }),

        Datatype(
            {
                name: "OperationalStateStruct", type: "struct",
                details: "The OperationalStateStruct is used to indicate a possible state of the device.",
                xref: { document: "cluster", section: "1.14.4.2" }
            },
            Field({
                name: "OperationalStateId", id: 0x0, type: "OperationalStateEnum", conformance: "M", default: 0,
                details: "This shall be populated with a value from the OperationalStateEnum.",
                xref: { document: "cluster", section: "1.14.4.2.1" }
            }),

            Field({
                name: "OperationalStateLabel", id: 0x1, type: "string", conformance: "desc", constraint: "max 64",
                details: "This field shall be present if the OperationalStateID is from the set reserved for Manufacturer " +
                    "Specific States, otherwise it shall NOT be present. If present, this shall contain a human-readable " +
                    "description of the operational state.",
                xref: { document: "cluster", section: "1.14.4.2.2" }
            })
        ),

        Datatype({
            name: "ErrorStateEnum", type: "enum8",

            details: "This type defines the set of known operational error values, and is derived from enum8. The " +
                "following table defines the applicable ranges for values that are defined within this type. All " +
                "values that are undefined shall be treated as reserved. As shown by the table, errors that may be " +
                "specific to a certain Device Type or other modality shall be defined in a derived cluster of this " +
                "cluster." +
                "\n" +
                "The derived cluster-specific error definitions shall NOT duplicate the general error definitions." +
                "\n" +
                "That is, a derived cluster specification of this cluster cannot define errors with the same " +
                "semantics as the general errors defined below." +
                "\n" +
                "The manufacturer-specific error definitions shall NOT duplicate the general error definitions or " +
                "derived cluster-specific error definitions. That is, a manufacturer-defined error defined for this " +
                "cluster or a derived cluster thereof cannot define errors with the same semantics as the general " +
                "errors defined below or errors defined in a derived cluster. Such manufacturer-specific error " +
                "definitions shall be scoped in the context of the Vendor ID present in the Basic Information " +
                "cluster." +
                "\n" +
                "The set of ErrorStateID field values defined in each of the generic or derived Operational State " +
                "cluster specifications is called ErrorState.",

            xref: { document: "cluster", section: "1.14.4.3" }
        }),

        Datatype(
            {
                name: "GeneralErrorStateEnum", type: "enum8",
                details: "The following table defines the generally applicable ErrorState values.",
                xref: { document: "cluster", section: "1.14.4.3.1" }
            },
            Field({ name: "NoError", id: 0x0, conformance: "M", description: "The device is not in an error state" }),
            Field({
                name: "UnableToStartOrResume", id: 0x1, conformance: "M",
                description: "The device is unable to start or resume operation"
            }),
            Field({
                name: "UnableToCompleteOperation", id: 0x2, conformance: "M",
                description: "The device was unable to complete the current operation"
            }),
            Field({
                name: "CommandInvalidInState", id: 0x3, conformance: "M",
                description: "The device cannot process the command in its current state"
            })
        ),

        Datatype(
            { name: "ErrorStateStruct", type: "struct", xref: { document: "cluster", section: "1.14.4.4" } },
            Field({
                name: "ErrorStateID", id: 0x0, type: "ErrorStateEnum", conformance: "M", default: 0,
                details: "This shall be populated with a value from the ErrorStateEnum.",
                xref: { document: "cluster", section: "1.14.4.4.1" }
            }),

            Field({
                name: "ErrorStateLabel", id: 0x1, type: "string", conformance: "desc", constraint: "max 64",
                details: "This field shall be present if the ErrorStateID is from the set reserved for Manufacturer Specific " +
                    "Errors, otherwise it shall NOT be present. If present, this shall contain a human-readable " +
                    "description of the ErrorStateID; e.g. for a manufacturer specific ErrorStateID of \"0x80\" the " +
                    "ErrorStateLabel may contain \"My special error\".",
                xref: { document: "cluster", section: "1.14.4.4.2" }
            }),

            Field({
                name: "ErrorStateDetails", id: 0x2, type: "string", conformance: "O", constraint: "max 64",
                details: "This shall be a human-readable string that provides details about the error condition. As an " +
                    "example, if the ErrorStateID indicates that the device is a Robotic Vacuum that is stuck, the " +
                    "ErrorStateDetails contains \"left wheel blocked\".",
                xref: { document: "cluster", section: "1.14.4.4.3" }
            })
        )
    ),

    Cluster(
        {
            name: "AlarmBase", classification: "application", pics: "ALARM",
            details: "This cluster is a base cluster from which clusters for particular alarms for a device type can be " +
                "derived. Each derivation shall define the values for the AlarmBitmap data type used in this " +
                "cluster. Each derivation shall define which alarms are latched.",
            xref: { document: "cluster", section: "1.15" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.15.4" } },
            Field({
                name: "RESET", constraint: "0", description: "Reset",
                details: "This feature indicates that alarms can be reset via the Reset command.",
                xref: { document: "cluster", section: "1.15.4.1" }
            })
        ),

        Attribute({
            name: "Mask", id: 0x0, type: "AlarmBitmap", access: "R V", conformance: "M", default: 0,
            details: "Indicates a bitmap where each bit set in the Mask attribute corresponds to an alarm that shall be " +
                "enabled.",
            xref: { document: "cluster", section: "1.15.6.1" }
        }),

        Attribute({
            name: "Latch", id: 0x1, type: "AlarmBitmap", access: "R V", conformance: "RESET", default: 0,
            quality: "F",
            details: "Indicates a bitmap where each bit set in the Latch attribute shall indicate that the corresponding " +
                "alarm will be latched when set, and will not reset to inactive when the underlying condition which " +
                "caused the alarm is no longer present, and so requires an explicit reset using the Reset command.",
            xref: { document: "cluster", section: "1.15.6.2" }
        }),

        Attribute({
            name: "State", id: 0x2, type: "AlarmBitmap", access: "R V", conformance: "M", default: 0,
            details: "Indicates a bitmap where each bit shall represent the state of an alarm. The value of true means " +
                "the alarm is active, otherwise the alarm is inactive.",
            xref: { document: "cluster", section: "1.15.6.3" }
        }),

        Attribute({
            name: "Supported", id: 0x3, type: "AlarmBitmap", access: "R V", conformance: "M", default: 0,
            quality: "F",
            details: "Indicates a bitmap where each bit shall represent whether or not an alarm is supported. The value " +
                "of true means the alarm is supported, otherwise the alarm is not supported." +
                "\n" +
                "If an alarm is not supported, the corresponding bit in Mask, Latch, and State shall be false.",
            xref: { document: "cluster", section: "1.15.6.4" }
        }),

        Event(
            {
                name: "Notify", id: 0x0, access: "V", conformance: "M", priority: "info",
                details: "This event shall be generated when one or more alarms change state, and shall have these fields:",
                xref: { document: "cluster", section: "1.15.8.1" }
            },
            Field({
                name: "Active", id: 0x1, type: "AlarmBitmap", conformance: "M", default: 0,
                details: "This field shall indicate those alarms that have become active.",
                xref: { document: "cluster", section: "1.15.8.1.1" }
            }),
            Field({
                name: "Inactive", id: 0x2, type: "AlarmBitmap", conformance: "M", default: 0,
                details: "This field shall indicate those alarms that have become inactive.",
                xref: { document: "cluster", section: "1.15.8.1.2" }
            }),

            Field({
                name: "State", id: 0x3, type: "AlarmBitmap", conformance: "M", default: 0,
                details: "This field shall be a copy of the new State attribute value that resulted in the event being " +
                    "generated. That is, this field shall have all the bits in Active set and shall NOT have any of the " +
                    "bits in Inactive set.",
                xref: { document: "cluster", section: "1.15.8.1.4" }
            }),

            Field({
                name: "Mask", id: 0x4, type: "AlarmBitmap", conformance: "M", default: 0,
                details: "This field shall be a copy of the Mask attribute when this event was generated.",
                xref: { document: "cluster", section: "1.15.8.1.3" }
            })
        ),

        Command(
            {
                name: "Reset", id: 0x0, access: "O", conformance: "RESET", direction: "request", response: "status",
                details: "This command resets active and latched alarms (if possible). Any generated Notify event shall " +
                    "contain fields that represent the state of the server after the command has been processed.",
                xref: { document: "cluster", section: "1.15.7.1" }
            },

            Field({
                name: "Alarms", id: 0x0, type: "AlarmBitmap", conformance: "M", default: 0,
                details: "This field shall indicate a bitmap where each bit set in this field corresponds to an alarm that " +
                    "shall be reset to inactive in the State attribute unless the alarm definition requires manual " +
                    "intervention. If the alarms indicated are successfully reset, the response status code shall be " +
                    "SUCCESS, otherwise, the response status code shall be FAILURE.",
                xref: { document: "cluster", section: "1.15.7.1.1" }
            })
        ),

        Command(
            {
                name: "ModifyEnabledAlarms", id: 0x1, access: "O", conformance: "O", direction: "request",
                response: "status",
                details: "This command allows a client to request that an alarm be enabled or suppressed at the server.",
                xref: { document: "cluster", section: "1.15.7.2" }
            },

            Field({
                name: "Mask", id: 0x0, type: "AlarmBitmap", conformance: "M", default: 0,

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

                xref: { document: "cluster", section: "1.15.7.2.1" }
            })
        ),

        Datatype({
            name: "AlarmBitmap", type: "map32",
            details: "This data type shall be a map32 with values defined by the derived cluster. The meaning of each bit " +
                "position shall be consistent for all attributes in a derived cluster. That is, if bit 0 is defined " +
                "for an alarm, the Latch, State, and Supported information for that alarm are also bit 0.",
            xref: { document: "cluster", section: "1.15.5.1" }
        })
    ),

    Cluster(
        {
            name: "Messages", id: 0x97, classification: "application", pics: "MESS",
            details: "This cluster provides an interface for passing messages to be presented by a device.",
            xref: { document: "cluster", section: "1.16" }
        },
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.16.4" } },

            Field({
                name: "CONF", conformance: "O", constraint: "0", description: "ReceivedConfirmation",
                details: "This feature shall indicate that the device can get confirmation from a user that the message was " +
                    "received.",
                xref: { document: "cluster", section: "1.16.4.1" }
            }),

            Field({
                name: "RESP", conformance: "[CONF]", constraint: "1", description: "ConfirmationResponse",
                details: "This feature shall indicate that the device is capable of presenting a list of responses to the " +
                    "user and recording the user’s choice of response.",
                xref: { document: "cluster", section: "1.16.4.2" }
            }),

            Field({
                name: "RPLY", conformance: "[CONF]", constraint: "2", description: "ConfirmationReply",
                details: "This feature shall indicate that the device is capable of collecting a free-form text response to a " +
                    "message.",
                xref: { document: "cluster", section: "1.16.4.3" }
            }),

            Field({
                name: "PROT", conformance: "O", constraint: "3", description: "ProtectedMessages",
                details: "This feature shall indicate that the device is capable of requiring the user to authenticate before " +
                    "viewing a message; e.g. entering a PIN or password before viewing a message with billing " +
                    "information.",
                xref: { document: "cluster", section: "1.16.4.4" }
            })
        ),

        Attribute(
            {
                name: "Messages", id: 0x0, type: "list", access: "R F V", conformance: "M", constraint: "max 8",
                default: [],
                details: "Indicates a list of queued messages." +
                    "\n" +
                    "In addition to filtering based upon fabric, to preserve user privacy, the server may further limit " +
                    "the set of messages returned in a read request. At minimum, the server shall return to a client " +
                    "those messages that the client itself created/submitted.",
                xref: { document: "cluster", section: "1.16.6.1" }
            },

            Field({ name: "entry", type: "MessageStruct" })
        ),

        Attribute(
            {
                name: "ActiveMessageIDs", id: 0x1, type: "list", access: "R V", conformance: "M",
                constraint: "max 8", default: [],
                details: "Indicates a list of the MessageIDs of the Messages currently being presented. If this list is " +
                    "empty, no messages are currently being presented." +
                    "\n" +
                    "This list shall NOT be fabric-scoped; it shall contain MessageIDs for all Messages being presented, " +
                    "no matter what fabric the client that queued them is on.",
                xref: { document: "cluster", section: "1.16.6.2" }
            },

            Field({ name: "entry", type: "MessageID" })
        ),

        Event(
            {
                name: "MessageQueued", id: 0x0, access: "V", conformance: "M", priority: "info",
                details: "This event shall be generated when a message is added to the messages attribute.",
                xref: { document: "cluster", section: "1.16.8.1" }
            },
            Field({
                name: "MessageId", id: 0x0, type: "MessageID", access: "S", conformance: "M",
                details: "This field shall indicate the MessageID for newly added message.",
                xref: { document: "cluster", section: "1.16.8.1.1" }
            }),
            Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
        ),

        Event(
            {
                name: "MessagePresented", id: 0x1, access: "V", conformance: "M", priority: "info",
                details: "This event shall be generated when the message is presented to the user.",
                xref: { document: "cluster", section: "1.16.8.2" }
            },
            Field({
                name: "MessageId", id: 0x0, type: "MessageID", access: "S", conformance: "M",
                details: "This field shall indicate the MessageID for the message being presented.",
                xref: { document: "cluster", section: "1.16.8.2.1" }
            }),
            Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
        ),

        Event(
            {
                name: "MessageComplete", id: 0x2, access: "V", conformance: "M", priority: "info",
                details: "This event shall be generated when the message is confirmed by the user, or when the Duration of " +
                    "the message has elapsed without confirmation.",
                xref: { document: "cluster", section: "1.16.8.3" }
            },

            Field({
                name: "MessageId", id: 0x0, type: "MessageID", access: "S", conformance: "M",
                details: "This field shall indicate the MessageID for the message being confirmed.",
                xref: { document: "cluster", section: "1.16.8.3.1" }
            }),

            Field({
                name: "ResponseId", id: 0x1, type: "uint32", access: "S", conformance: "RESP", default: null,
                quality: "X",
                details: "This field shall indicate the MessageResponseID selected by the user. If there was no response " +
                    "before the Duration of the message has elapsed, this field shall be null.",
                xref: { document: "cluster", section: "1.16.8.3.2" }
            }),

            Field({
                name: "Reply", id: 0x2, type: "string", access: "S", conformance: "RPLY", constraint: "max 256",
                default: null, quality: "X",
                details: "This field shall indicate a user-provided reply to the message. If there was no reply, or the " +
                    "message did not have the ReplyRequired bit set, this field shall be null.",
                xref: { document: "cluster", section: "1.16.8.3.3" }
            }),

            Field({
                name: "FutureMessagesPreference", id: 0x3, type: "FutureMessagePreferenceEnum", access: "S",
                conformance: "M", default: null, quality: "X"
            }),
            Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
        ),

        Command(
            {
                name: "PresentMessagesRequest", id: 0x0, access: "F O", conformance: "M", direction: "request",
                response: "status",

                details: "Upon receipt, this shall cause the message in the passed fields to be appended to the Messages " +
                    "attribute." +
                    "\n" +
                    "If appending the message would cause the number of messages to be greater than the capacity of the " +
                    "list, the device shall NOT append any message to Messages, and shall return a status code of " +
                    "RESOURCE_EXHAUSTED." +
                    "\n" +
                    "When displaying a message in response to this command, an indication (ex. visual) of the origin " +
                    "node of the command shall be provided. This could be in the form of a friendly name label which " +
                    "uniquely identifies the node to the user. This friendly name label is typically assigned by the " +
                    "Matter Admin at the time of commissioning and, when it’s a device, is often editable by the user. " +
                    "It might be a combination of a company name and friendly name, for example, ”Acme” or “Acme " +
                    "Streaming Service on Alice’s Phone”." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "It is currently not specified where the friendly name label can be found on the node, meaning that " +
                    "clients SHOULD NOT rely on a certain method they happen to observe in a particular server instance, " +
                    "since other instances could employ a different method." +
                    "\n" +
                    "The device SHOULD make it possible for the user to view which nodes have access to this cluster and " +
                    "to individually remove privileges for each node.",

                xref: { document: "cluster", section: "1.16.7.1" }
            },

            Field({
                name: "MessageId", id: 0x0, type: "MessageID", conformance: "M",
                details: "This field shall indicate a globally unique ID for this message. See MessageID.",
                xref: { document: "cluster", section: "1.16.7.1.1" }
            }),
            Field({
                name: "Priority", id: 0x1, type: "MessagePriorityEnum", conformance: "M", default: 0,
                details: "This field shall indicate the priority level for this message. See Priority.",
                xref: { document: "cluster", section: "1.16.7.1.2" }
            }),
            Field({
                name: "MessageControl", id: 0x2, type: "MessageControlBitmap", conformance: "M", default: 0,
                details: "This field shall indicate control information related to the message. See MessageControl.",
                xref: { document: "cluster", section: "1.16.7.1.3" }
            }),

            Field({
                name: "StartTime", id: 0x3, type: "epoch-s", conformance: "M", default: 0, quality: "X",
                details: "This field shall indicate the time in UTC at which the message becomes available to be presented. A " +
                    "null value shall indicate \"now.\" See StartTime.",
                xref: { document: "cluster", section: "1.16.7.1.4" }
            }),

            Field({
                name: "Duration", id: 0x4, type: "uint64", conformance: "M", default: 0, quality: "X",
                details: "This field shall indicate the amount of time, in milliseconds, after the StartTime during which the " +
                    "message is available to be presented. A null value shall indicate \"until changed\". See Duration.",
                xref: { document: "cluster", section: "1.16.7.1.5" }
            }),

            Field({
                name: "MessageText", id: 0x5, type: "string", conformance: "M", constraint: "max 256",
                details: "This field shall indicate a string containing the message to be presented. See MessageText.",
                xref: { document: "cluster", section: "1.16.7.1.6" }
            }),

            Field(
                {
                    name: "Responses", id: 0x6, type: "list", conformance: "RESP", constraint: "max 4", default: [],

                    details: "This field shall indicate a list of potential responses to the message. The entries in this list " +
                        "shall have unique values of MessageResponseID." +
                        "\n" +
                        "If the ResponseRequired bit is set on the message but this list is empty, the device shall provide " +
                        "a generic acknowledgement button, e.g. \"OK\"." +
                        "\n" +
                        "If the ResponseRequired bit is not set on the message, this list shall be ignored. See Responses.",

                    xref: { document: "cluster", section: "1.16.7.1.7" }
                },

                Field({ name: "entry", type: "MessageResponseOptionStruct" })
            )
        ),

        Command(
            {
                name: "CancelMessagesRequest", id: 0x1, access: "F O", conformance: "M", direction: "request",
                response: "status",
                xref: { document: "cluster", section: "1.16.7.2" }
            },

            Field(
                {
                    name: "MessageIDs", id: 0x0, type: "list", conformance: "M", constraint: "max 8",

                    details: "This field shall indicate the MessageIDs for the messages being cancelled." +
                        "\n" +
                        "Cancelling a message shall cause it to be removed from Messages, cause its MessageID to be removed " +
                        "from ActiveMessageIDs and cause any active presentation of the message to cease." +
                        "\n" +
                        "Message IDs in this command that indicate messages that do not exist in Messages, or that are not " +
                        "scoped to the fabric of the sender, shall be ignored.",

                    xref: { document: "cluster", section: "1.16.7.2.1" }
                },

                Field({ name: "entry", type: "MessageID" })
            )
        ),

        Datatype({
            name: "MessageID", type: "octstr", constraint: "16",
            details: "This data type is an octstr of fixed length 16, containing the binary encoding of a UUID as " +
                "specified in RFC 4122.",
            xref: { document: "cluster", section: "1.16.5.1" }
        }),

        Datatype(
            {
                name: "MessageControlBitmap", type: "map16",
                details: "This data type is derived from map16, and indicates control information related to a message.",
                xref: { document: "cluster", section: "1.16.5.2" }
            },

            Field({
                name: "ConfirmationRequired", constraint: "0",
                description: "Message requires confirmation from user",
                details: "This bit shall indicate that the message originator requests a confirmation of receipt by the user. " +
                    "If confirmation is required, the device SHOULD present the message until it is either confirmed by " +
                    "the user selecting a confirmation option, or the message expires.",
                xref: { document: "cluster", section: "1.16.5.2.1" }
            }),

            Field({
                name: "ResponseRequired", constraint: "1", description: "Message requires response from user",
                details: "This bit shall indicate that a MessagePresented event SHOULD be generated based on the response of " +
                    "the user to the message.",
                xref: { document: "cluster", section: "1.16.5.2.2" }
            }),

            Field({
                name: "ReplyMessage", constraint: "2", description: "Message supports reply message from user",
                details: "This bit shall indicate that a free-form user reply is to be included in the confirmation of " +
                    "receipt.",
                xref: { document: "cluster", section: "1.16.5.2.3" }
            }),

            Field({
                name: "MessageConfirmed", constraint: "3", description: "Message has already been confirmed",
                details: "This bit shall indicate the current confirmation state of a message, which is useful in the event " +
                    "that there are multiple Messages cluster client devices on a network.",
                xref: { document: "cluster", section: "1.16.5.2.4" }
            }),

            Field({
                name: "MessageProtected", constraint: "4", description: "Message required PIN/password protection",
                details: "This bit shall indicate that user authentication (e.g. by password or PIN) is required before " +
                    "viewing a message.",
                xref: { document: "cluster", section: "1.16.5.2.5" }
            })
        ),

        Datatype(
            {
                name: "FutureMessagePreferenceEnum", type: "enum8",
                details: "A display device may include this preference in the MessageComplete event as a hint to clients " +
                    "about how to handle future similar messages.",
                xref: { document: "cluster", section: "1.16.5.3" }
            },

            Field({ name: "Allowed", id: 0x0, conformance: "M", description: "Similar messages are allowed" }),
            Field({ name: "Increased", id: 0x1, conformance: "M", description: "Similar messages should be sent more often" }),
            Field({ name: "Reduced", id: 0x2, conformance: "M", description: "Similar messages should be sent less often" }),
            Field({ name: "Disallowed", id: 0x3, conformance: "M", description: "Similar messages should not be sent" }),
            Field({ name: "Banned", id: 0x4, conformance: "M", description: "No further messages should be sent" })
        ),

        Datatype(
            {
                name: "MessagePriorityEnum", type: "enum8",
                details: "Priority SHOULD be used to decide which messages to show when the number of eligible messages is " +
                    "larger than the device’s capacity to present them.",
                xref: { document: "cluster", section: "1.16.5.4" }
            },

            Field({
                name: "Low", id: 0x0, conformance: "M",
                description: "Message to be transferred with a low level of importance"
            }),
            Field({
                name: "Medium", id: 0x1, conformance: "M",
                description: "Message to be transferred with a medium level of importance"
            }),
            Field({
                name: "High", id: 0x2, conformance: "M",
                description: "Message to be transferred with a high level of importance"
            }),
            Field({
                name: "Critical", id: 0x3, conformance: "M",
                description: "Message to be transferred with a critical level of importance"
            })
        ),

        Datatype(
            {
                name: "MessageStruct", type: "struct",
                details: "This represents a single message.",
                xref: { document: "cluster", section: "1.16.5.5" }
            },
            Field({
                name: "MessageId", id: 0x0, type: "MessageID", access: "S", conformance: "M",
                details: "This field shall indicate a globally unique ID for this message.",
                xref: { document: "cluster", section: "1.16.5.5.1" }
            }),
            Field({
                name: "Priority", id: 0x1, type: "MessagePriorityEnum", access: "S", conformance: "M", default: 0,
                details: "This field shall indicate the priority level for this message.",
                xref: { document: "cluster", section: "1.16.5.5.2" }
            }),

            Field({
                name: "MessageControl", id: 0x2, type: "MessageControlBitmap", access: "S", conformance: "M",
                default: 0,
                details: "This field shall indicate control information related to the message.",
                xref: { document: "cluster", section: "1.16.5.5.3" }
            }),

            Field({
                name: "StartTime", id: 0x3, type: "epoch-s", access: "S", conformance: "M", default: 0,
                quality: "X",
                details: "This field shall indicate the time in UTC at which the message becomes available to be presented. A " +
                    "null value shall indicate \"now.\"",
                xref: { document: "cluster", section: "1.16.5.5.4" }
            }),

            Field({
                name: "Duration", id: 0x4, type: "uint64", access: "S", conformance: "M", default: 0, quality: "X",
                details: "This field shall indicate the amount of time, in milliseconds, after the StartTime during which the " +
                    "message is available to be presented. A null value shall indicate \"until changed\".",
                xref: { document: "cluster", section: "1.16.5.5.5" }
            }),

            Field({
                name: "MessageText", id: 0x5, type: "string", access: "S", conformance: "M", constraint: "max 256",
                details: "This field shall indicate a string containing the message to be presented.",
                xref: { document: "cluster", section: "1.16.5.5.6" }
            }),

            Field(
                {
                    name: "Responses", id: 0x6, type: "list", access: "S", conformance: "RESP", constraint: "max 4",
                    default: [],

                    details: "This field shall indicate a list of potential responses to the message. The entries in this list " +
                        "shall have unique values of MessageResponseID." +
                        "\n" +
                        "If the ResponseRequired bit is set on the message but this list is empty, the device shall provide " +
                        "a generic acknowledgement button, e.g. \"OK\"." +
                        "\n" +
                        "If the ResponseRequired bit is not set on the message, this list shall be ignored.",

                    xref: { document: "cluster", section: "1.16.5.5.7" }
                },

                Field({ name: "entry", type: "MessageResponseOptionStruct" })
            ),

            Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
        ),

        Datatype(
            {
                name: "MessageResponseOptionStruct", type: "struct",
                details: "This represents a possible response to a message.",
                xref: { document: "cluster", section: "1.16.5.6" }
            },

            Field({
                name: "MessageResponseId", id: 0x0, type: "uint32", conformance: "M", constraint: "min 1",
                details: "This field shall indicate a unique unsigned 32-bit number identifier for this message response " +
                    "option.",
                xref: { document: "cluster", section: "1.16.5.6.1" }
            }),

            Field({
                name: "Label", id: 0x1, type: "string", conformance: "M", constraint: "max 32",
                details: "This field shall indicate the text for this option; e.g. \"Yes\", \"No\", etc.",
                xref: { document: "cluster", section: "1.16.5.6.2" }
            })
        )
    ),

    Cluster(
        {
            name: "ServiceArea", id: 0x150, classification: "application", pics: "SEAR",

            details: "This cluster provides an interface for controlling the areas where a device should operate, for " +
                "reporting the status at each area, and for querying the current area." +
                "\n" +
                "The device may operate at one area at a time, as in the case of a mobile device, such as a robot. " +
                "Other devices may operate at (service) multiple areas simultaneously, as in the case of a sensor " +
                "that can monitor multiple areas. This cluster specification uses the term \"operate\" to describe " +
                "both the operating and servicing actions, regardless of the device type." +
                "\n" +
                "The cluster allows the client to select one or more areas on the server, to indicate where the " +
                "device SHOULD attempt to operate. An area is one of a list of options that may be presented by a " +
                "client for a user choice, or understood by the client, via the semantic data of the area." +
                "\n" +
                "The area semantic data is a combination of semantic tags, indicating one or more of the following: " +
                "the building floor, area type, landmark, and relative position.",

            xref: { document: "cluster", section: "1.17" }
        },

        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute(
            { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "1.17.4" } },

            Field({
                name: "SELRUN", constraint: "0", description: "SelectWhileRunning",
                details: "This feature indicates whether this device allows changing the selected areas, by using the " +
                    "SelectAreas command, while operating.",
                xref: { document: "cluster", section: "1.17.4.1" }
            }),

            Field({
                name: "PROG", constraint: "1", description: "ProgressReporting",
                details: "The device implements the progress reporting feature"
            }),
            Field({ name: "MAPS", constraint: "2", description: "Maps", details: "The device has map support" })
        ),

        Attribute(
            {
                name: "SupportedAreas", id: 0x0, type: "list", access: "R V", conformance: "M",
                constraint: "max 255",

                details: "This attribute shall contain the list of areas that can be included in the SelectedAreas " +
                    "attribute’s list. Each item in this list represents a unique area, as indicated by the AreaID field " +
                    "of AreaStruct." +
                    "\n" +
                    "Each entry in this list shall have a unique value for the AreaID field." +
                    "\n" +
                    "If the SupportedMaps attribute is not empty, each entry in this list shall have a unique value for " +
                    "the combination of the MapID and AreaInfo fields." +
                    "\n" +
                    "If the SupportedMaps attribute is empty, each entry in this list shall have a unique value for the " +
                    "AreaInfo field and shall have the MapID field set to null." +
                    "\n" +
                    "An empty value indicates that the device is currently unable to provide the list of supported areas." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "due to the maximum size of this list and to the fact that the entries may include strings (see " +
                    "LocationName), care must be taken by implementers to avoid creating a data structure that is overly " +
                    "large, which can result in significant latency in accessing this attribute." +
                    "\n" +
                    "The value of this attribute may change at any time via an out-of-band interaction outside of the " +
                    "server, such as interactions with a user interface, or due to internal device changes." +
                    "\n" +
                    "When removing entries in the SupportedAreas attribute list the server shall adjust the values of " +
                    "the SelectedAreas, CurrentArea, and Progress attributes such that they only reference valid entries " +
                    "in the updated SupportedAreas attribute list. These changes to the SelectedAreas, CurrentArea, and " +
                    "Progress attributes may result in the server setting some or all of them to empty (for " +
                    "SelectedAreas and Progress) or null (for CurrentArea), or updating them with data that matches the " +
                    "constraints from the description of the respective attributes. These actions are required to ensure " +
                    "having a consistent representation of the maps and locations available to the clients." +
                    "\n" +
                    "The SupportedAreas attribute list changes mentioned above SHOULD NOT be allowed while the device is " +
                    "operating, to reduce the impact on the clients, and the potential confusion for the users." +
                    "\n" +
                    "A few examples are provided below. Valid list of areas:" +
                    "\n" +
                    "  • AreaID=0, LocationName=\"yellow bedroom\", MapID=null" +
                    "\n" +
                    "  • AreaID=1, LocationName=\"orange bedroom\", MapID=null Valid list of areas:" +
                    "\n" +
                    "  • AreaID=5, LocationName=\"hallway\", MapID=1" +
                    "\n" +
                    "  • AreaID=3, LocationName=\"hallway\", MapID=2",

                xref: { document: "cluster", section: "1.17.6.1" }
            },

            Field({ name: "entry", type: "AreaStruct" })
        ),

        Attribute(
            {
                name: "SupportedMaps", id: 0x1, type: "list", access: "R V", conformance: "MAPS",
                constraint: "max 255",

                details: "This attribute shall contain the list of supported maps." +
                    "\n" +
                    "A map is a full or a partial representation of a home, known to the device. For example:" +
                    "\n" +
                    "  • a single level home may be represented using a single map" +
                    "\n" +
                    "  • a two level home may be represented using two maps, one for each level" +
                    "\n" +
                    "  • a single level home may be represented using two maps, each including a different set of rooms, " +
                    "    such as \"map of living room and kitchen\" and \"map of bedrooms and hallway\"" +
                    "\n" +
                    "  • a single level home may be represented using one map for the indoor areas (living room, " +
                    "    bedrooms etc.) and one for the outdoor areas (garden, swimming pool etc.)" +
                    "\n" +
                    "Each map includes one or more areas - see the SupportedAreas attribute. In the context of this " +
                    "cluster specification, a map is effectively a group label for a set of areas, rather than a " +
                    "graphical representation that the clients can display to the users. The clients that present the " +
                    "list of available areas for user selection (see the SelectAreas command) may choose to filter the " +
                    "SupportedAreas list based on the associated map. For example, the clients may allow the user to " +
                    "indicate that the device is to operate on the first floor, and allow the user to choose only from " +
                    "the areas situated on that level." +
                    "\n" +
                    "If empty, that indicates that the device is currently unable to provide this information. Each " +
                    "entry in this list shall have a unique value for the MapID field." +
                    "\n" +
                    "Each entry in this list shall have a unique value for the Name field." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "due to the maximum size of this list and to the fact that the entries may include strings (see the " +
                    "Name field of the MapStruct data type), care must be taken by implementers to avoid creating a data " +
                    "structure that is overly large, which can result in significant latency in accessing this attribute." +
                    "\n" +
                    "The value of this attribute may change at any time via an out-of-band interaction outside of the " +
                    "server, such as interactions with a user interface." +
                    "\n" +
                    "When updating the SupportedMaps attribute list by deleting entries, or by setting the attribute to " +
                    "an empty list, the SupportedLocations attribute shall be updated such that all entries in that list " +
                    "meet the constraints indicated in the description of the SupportedLocations attribute. This may " +
                    "result in" +
                    "\n" +
                    "the server removing entries from the SupportedAreas attribute list. See the SupportedAreas " +
                    "attribute description for the implications of changing that attribute." +
                    "\n" +
                    "The SupportedMaps attribute list changes mentioned above SHOULD NOT be allowed while the device is " +
                    "operating, to reduce the impact on the clients, and the potential confusion for the users.",

                xref: { document: "cluster", section: "1.17.6.2" }
            },

            Field({ name: "entry", type: "MapStruct" })
        ),

        Attribute(
            {
                name: "SelectedAreas", id: 0x2, type: "list", access: "R V", conformance: "M", constraint: "desc",
                default: [],

                details: "Indicates the set of areas where the device SHOULD attempt to operate." +
                    "\n" +
                    "The mobile devices may travel without operating across any areas while attempting to reach the " +
                    "areas indicated by the SelectedAreas attribute. For example, a robotic vacuum cleaner may drive " +
                    "without cleaning when traveling without operating." +
                    "\n" +
                    "If this attribute is empty, the device is not constrained to operate in any specific areas. If this " +
                    "attribute is not empty:" +
                    "\n" +
                    "  • each item in this list shall match the AreaID field of an entry in the SupportedAreas " +
                    "    attribute’s list" +
                    "\n" +
                    "  • each entry in this list shall have a unique value",

                xref: { document: "cluster", section: "1.17.6.3" }
            },

            Field({ name: "entry", type: "uint32" })
        ),

        Attribute({
            name: "CurrentArea", id: 0x3, type: "uint32", access: "R V", conformance: "desc",
            constraint: "desc", default: null, quality: "X",

            details: "If the device is mobile, this attribute shall indicate the area where the device is currently " +
                "located, regardless of whether it is operating or not, such as while traveling between areas." +
                "\n" +
                "If the device is not mobile and can operate at multiple areas sequentially, this attribute shall " +
                "indicate the area which is currently being serviced, or the area which is currently traversed by " +
                "the device. For example, a camera device may use this attribute to indicate which area it currently " +
                "takes video of (serviced area) or which area it currently has in view but not taking video of (e.g. " +
                "an area which is traversed while panning)." +
                "\n" +
                "NOTE" +
                "\n" +
                "A device may traverse an area regardless of the status of the area (pending, skipped, or completed)." +
                "\n" +
                "If a device can simultaneously operate at multiple areas, such as in the case of a sensor that can " +
                "monitor multiple areas at the same time, the CurrentArea attribute shall NOT be implemented, since " +
                "it doesn’t apply. Else this attribute shall be optionally implemented." +
                "\n" +
                "A null value indicates that the device is currently unable to provide this information. For " +
                "example, the device is traversing an unknown area, or the SupportedAreas attribute was updated and " +
                "the area where the device is located was removed from that list." +
                "\n" +
                "If not null, the value of this attribute shall match the AreaID field of an entry on the " +
                "SupportedAreas attribute’s list.",

            xref: { document: "cluster", section: "1.17.6.4" }
        }),

        Attribute({
            name: "EstimatedEndTime", id: 0x4, type: "epoch-s", access: "R V", conformance: "[CurrentArea]",
            default: null, quality: "X Q",

            details: "Indicates the estimated Epoch time for completing operating at the area indicated by the " +
                "CurrentArea attribute, in seconds." +
                "\n" +
                "A value of 0 means that the operation has completed." +
                "\n" +
                "When this attribute is null, that represents that there is no time currently defined until " +
                "operation completion. This may happen, for example, because no operation is in progress or because " +
                "the completion time is unknown." +
                "\n" +
                "Null if the CurrentArea attribute is null." +
                "\n" +
                "If the Progress attribute is available, and it contains an entry matching CurrentArea, the server " +
                "may use the time estimate provided in the InitialTimeEstimate field of that entry to compute the " +
                "EstimatedEndTime attribute." +
                "\n" +
                "The value of this attribute shall only be reported in the following cases:" +
                "\n" +
                "  • when it changes to or from 0" +
                "\n" +
                "  • when it decreases" +
                "\n" +
                "  • when it changes to or from null" +
                "\n" +
                "NOTE" +
                "\n" +
                "If the device is capable of pausing its operation, this attribute may be set to null, to indicate " +
                "that completion time is unknown, or increment the value while being in the paused state.",

            xref: { document: "cluster", section: "1.17.6.5" }
        }),

        Attribute(
            {
                name: "Progress", id: 0x5, type: "list", access: "R V", conformance: "PROG", constraint: "max 255",
                default: [],

                details: "Indicates the operating status at one or more areas. Each entry in this list shall have a unique " +
                    "value for the AreaID field." +
                    "\n" +
                    "For each entry in this list, the AreaID field shall match an entry on the SupportedAreas " +
                    "attribute’s list." +
                    "\n" +
                    "When this attribute is empty, that represents that no progress information is currently available." +
                    "\n" +
                    "If the SelectedAreas attribute is empty, indicating the device is not constrained to operate in any " +
                    "specific areas, the Progress attribute list may change while the device operates, due to the device " +
                    "adding new entries dynamically, when it determines which ones it can attempt to operate at." +
                    "\n" +
                    "If the SelectedAreas attribute is not empty, and the device starts operating:" +
                    "\n" +
                    "  • the Progress attribute list shall be updated so each entry of SelectedAreas has a matching " +
                    "    Progress list entry, based on the AreaID field" +
                    "\n" +
                    "  • the length of the Progress and SelectedAreas list shall be the same" +
                    "\n" +
                    "  • the entries in the Progress list shall be initialized by the server, by having their status set " +
                    "    to Pending or Operating, and the TotalOperationalTime field set to null" +
                    "\n" +
                    "When the device ends operation unexpectedly, such as due to an error, the server shall update all " +
                    "Progress list entries with the Status field set to Operating or Pending to Skipped." +
                    "\n" +
                    "When the device finishes operating, successfully or not, it shall NOT change the Progress " +
                    "attribute, except in the case of an unexpected end of operation as described above, or due to " +
                    "changes to the SupportedMaps or SupportedAreas attributes, so the clients can retrieve the progress " +
                    "information at that time." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "if the device implements the Operational Status cluster, or a derivation of it, in case the device " +
                    "fails to service any locations in the SelectedAreas list before ending the operation, it SHOULD use " +
                    "the Operational Status cluster to indicate that the device was unable to complete the operation " +
                    "(see the UnableToCompleteOperation error from that cluster specification). The clients SHOULD then " +
                    "read the Progress attribute, and indicate which areas have been successfully serviced (marked as " +
                    "completed).",

                xref: { document: "cluster", section: "1.17.6.6" }
            },

            Field({ name: "entry", type: "ProgressStruct" })
        ),

        Command(
            {
                name: "SelectAreas", id: 0x0, access: "O", conformance: "M", direction: "request",
                response: "SelectAreasResponse",
                details: "This command is used to select a set of device areas, where the device is to operate." +
                    "\n" +
                    "On receipt of this command the device shall respond with a SelectAreasResponse command.",
                xref: { document: "cluster", section: "1.17.7.1" }
            },

            Field(
                {
                    name: "NewAreas", id: 0x0, type: "list", conformance: "M", constraint: "desc",

                    details: "This field indicates which areas the device is to operate at." +
                        "\n" +
                        "If this field is empty, that indicates that the device is to operate without being constrained to " +
                        "any specific areas, and the operation will not allow skipping using the SkipArea Command, otherwise " +
                        "the field shall be a list of unique values that match the AreaID field of entries on the " +
                        "SupportedAreas list.",

                    xref: { document: "cluster", section: "1.17.7.1.1" }
                },

                Field({ name: "entry", type: "uint32" })
            )
        ),

        Command(
            {
                name: "SelectAreasResponse", id: 0x1, access: "O", conformance: "M", direction: "response",
                details: "This command is sent by the device on receipt of the SelectAreas command.",
                xref: { document: "cluster", section: "1.17.7.2" }
            },

            Field({
                name: "Status", id: 0x0, type: "SelectAreasStatus", conformance: "M",

                details: "If the Status field is set to Success or UnsupportedArea, the server may use a non-empty string for " +
                    "the StatusText field to provide additional information. For example, if Status is set to Unsupport" +
                    "\n" +
                    "edArea, the server may use StatusText to indicate which areas are unsupported." +
                    "\n" +
                    "If the Status field is not set to Success, or UnsupportedArea, the StatusText field shall include a " +
                    "vendor-defined error description which can be used to explain the error to the user. For example, " +
                    "if the Status field is set to InvalidInMode, the StatusText field SHOULD indicate why the request " +
                    "is not allowed, given the current mode of the device, which may involve other clusters.",

                xref: { document: "cluster", section: "1.17.7.2.1" }
            }),

            Field({ name: "StatusText", id: 0x1, type: "string", conformance: "M", constraint: "max 256" })
        ),

        Command(
            {
                name: "SkipArea", id: 0x2, access: "O", conformance: "desc", direction: "request",
                response: "SkipAreaResponse",

                details: "This command is used to skip the given area, and to attempt operating at other areas on the " +
                    "SupportedAreas attribute list." +
                    "\n" +
                    "This command shall NOT be implemented if the CurrentArea attribute and the Progress attribute are " +
                    "both not implemented. Else, this command shall be optionally implemented." +
                    "\n" +
                    "On receipt of this command the device shall respond with a SkipAreaResponse command.",

                xref: { document: "cluster", section: "1.17.7.3" }
            },

            Field({
                name: "SkippedArea", id: 0x0, type: "uint32", conformance: "M", constraint: "desc",
                details: "The SkippedArea field indicates the area to be skipped." +
                    "\n" +
                    "The SkippedArea field shall match an entry in the SupportedAreas list.",
                xref: { document: "cluster", section: "1.17.7.3.1" }
            })
        ),

        Command(
            {
                name: "SkipAreaResponse", id: 0x3, access: "O", conformance: "SkipArea", direction: "response",
                details: "This command is sent by the device on receipt of the SkipArea command.",
                xref: { document: "cluster", section: "1.17.7.4" }
            },

            Field({
                name: "Status", id: 0x0, type: "SkipAreaStatus", conformance: "M",

                details: "If the Status field is set to Success or InvalidAreaList, the server may use a non-empty string for " +
                    "the StatusText field to provide additional information. For example, if Status is set to " +
                    "InvalidAreaList, the server may use StatusText to indicate why this list is invalid." +
                    "\n" +
                    "If the Status field is not set to Success or InvalidAreaList, the StatusText field shall include a " +
                    "vendor defined error description which can be used to explain the error to the user. For example, " +
                    "if the Status field is set to InvalidInMode, the StatusText field SHOULD indicate why the request " +
                    "is not allowed, given the current mode of the device, which may involve other clusters.",

                xref: { document: "cluster", section: "1.17.7.4.1" }
            }),

            Field({ name: "StatusText", id: 0x1, type: "string", conformance: "M", constraint: "max 256" })
        ),

        Datatype(
            {
                name: "LandmarkInfoStruct", type: "struct",
                details: "The data from this structure indicates a landmark and position relative to the landmark.",
                xref: { document: "cluster", section: "1.17.5.1" }
            },

            Field({
                name: "LandmarkTag", id: 0x0, type: "tag", conformance: "M",
                details: "This field shall indicate that the area is associated with a landmark." +
                    "\n" +
                    "This field shall be the ID of a landmark semantic tag, located within the Common Landmark " +
                    "Namespace. For example, this tag may indicate that the area refers to an area next to a table.",
                xref: { document: "cluster", section: "1.17.5.1.1" }
            }),

            Field({
                name: "RelativePositionTag", id: 0x1, type: "tag", conformance: "M", quality: "X",

                details: "This field shall identify the position of the area relative to a landmark. This is a static " +
                    "description of a zone known to the server, and this field never reflects the device’s own proximity " +
                    "or position relative to the landmark, but that of the zone." +
                    "\n" +
                    "This field shall be the ID of a relative position semantic tag, located within the Common Relative " +
                    "Position Namespace." +
                    "\n" +
                    "If the RelativePositionTag field is null, this field indicates proximity to the landmark. " +
                    "Otherwise, the RelativePositionTag field indicates the position of the area relative to the " +
                    "landmark indicated by the LandmarkTag field. For example, this tag, in conjunction with the " +
                    "LandmarkTag field, may indicate that the area refers to a zone under a table.",

                xref: { document: "cluster", section: "1.17.5.1.2" }
            })
        ),

        Datatype(
            {
                name: "AreaInfoStruct", type: "struct",

                details: "The data from this structure indicates the name and/or semantic data describing an area, as " +
                    "detailed below." +
                    "\n" +
                    "This data type includes the LocationInfo field, with the following fields: LocationName, " +
                    "FloorNumber, AreaType. Additional semantic data may be available in the LandmarkInfo field." +
                    "\n" +
                    "For an area description to be meaningful, it shall have at least one of the following:" +
                    "\n" +
                    "  • a non-empty name (LocationInfo’s LocationName field) OR" +
                    "\n" +
                    "  • some semantic data (one or more of these: FloorNumber, AreaType or LandmarkTag) The normative " +
                    "    text from the remainder of this section describes these constraints." +
                    "\n" +
                    "If the LocationInfo field is null, the LandmarkInfo field shall NOT be null. If the LandmarkInfo " +
                    "field is null, the LocationInfo field shall NOT be null." +
                    "\n" +
                    "If LocationInfo is not null, and its LocationName field is an empty string, at least one of the " +
                    "following shall NOT be null:" +
                    "\n" +
                    "  • LocationInfo’s FloorNumber field" +
                    "\n" +
                    "  • LocationInfo’s AreaType field" +
                    "\n" +
                    "  • LandmarkInfo field" +
                    "\n" +
                    "If all three of the following are null, LocationInfo’s LocationName field shall NOT be an empty " +
                    "string:" +
                    "\n" +
                    "  • LocationInfo’s FloorNumber field" +
                    "\n" +
                    "  • LocationInfo’s AreaType field" +
                    "\n" +
                    "  • LandmarkInfo field",

                xref: { document: "cluster", section: "1.17.5.2" }
            },

            Field({
                name: "LocationInfo", id: 0x0, type: "locationdesc", conformance: "M", quality: "X",

                details: "This field shall indicate the name of the area, floor number and/or area type. A few examples are " +
                    "provided below." +
                    "\n" +
                    "  • An area can have LocationInfo’s LocationName field set to \"blue room\", and the AreaType field " +
                    "    set to the ID of a \"Living Room\" semantic tag. Clients wishing to direct the device to operate " +
                    "    in (or service) the living room can use this area." +
                    "\n" +
                    "  • An area can have LocationInfo set to null, the LandmarkInfo’s LandmarkTag field set to the ID " +
                    "    of the \"Table\" landmark semantic tag, and the RelativePositionTag field set to the ID of the " +
                    "    \"Under\" position semantic tag. With such an area indication, the client can request the device " +
                    "    to operate in (or service) the area located under the table.",

                xref: { document: "cluster", section: "1.17.5.2.1" }
            }),

            Field({
                name: "LandmarkInfo", id: 0x1, type: "LandmarkInfoStruct", conformance: "M", quality: "X",

                details: "This field shall indicate an association with a landmark. A value of null indicates that the " +
                    "information is not available or known. For example, this may indicate that the area refers to a " +
                    "zone next to a table." +
                    "\n" +
                    "If this field is not null, that indicates that the area is restricted to the zone where the " +
                    "landmark is located, as indicated by the LandmarkTag and, if not null, by the RelativePositionTag " +
                    "fields, rather than to the entire room or floor where the landmark is located, if those are " +
                    "indicated by the LocationInfo field.",

                xref: { document: "cluster", section: "1.17.5.2.2" }
            })
        ),

        Datatype(
            {
                name: "MapStruct", type: "struct",
                details: "This is a struct representing a map.",
                xref: { document: "cluster", section: "1.17.5.3" }
            },
            Field({
                name: "MapId", id: 0x0, type: "uint32", conformance: "M",
                details: "This field shall represent the map’s identifier.",
                xref: { document: "cluster", section: "1.17.5.3.1" }
            }),

            Field({
                name: "Name", id: 0x1, type: "string", conformance: "M", constraint: "max 64",
                details: "This field shall represent a human understandable map description. For example: \"Main Floor\", or " +
                    "\"Second Level\".",
                xref: { document: "cluster", section: "1.17.5.3.2" }
            })
        ),

        Datatype(
            {
                name: "AreaStruct", type: "struct",
                details: "This is a struct representing an area known to the server.",
                xref: { document: "cluster", section: "1.17.5.4" }
            },
            Field({
                name: "AreaId", id: 0x0, type: "uint32", conformance: "M",
                details: "This field shall represent the identifier of the area.",
                xref: { document: "cluster", section: "1.17.5.4.1" }
            }),

            Field({
                name: "MapId", id: 0x1, type: "uint32", conformance: "M", constraint: "desc", quality: "X",

                details: "This field shall indicate the map identifier which the area is associated with. A value of null " +
                    "indicates that the area is not associated with a map." +
                    "\n" +
                    "If the SupportedMaps attribute is not empty, this field shall match the MapID field of an entry " +
                    "from the SupportedMaps attribute’s list. If the SupportedMaps attribute is empty, this field shall " +
                    "be null.",

                xref: { document: "cluster", section: "1.17.5.4.2" }
            }),

            Field({
                name: "AreaInfo", id: 0x2, type: "AreaInfoStruct", conformance: "M",

                details: "This field shall contain data describing the area." +
                    "\n" +
                    "This SHOULD be used by clients to determine the name and/or the full, or the partial, semantics of " +
                    "a certain area." +
                    "\n" +
                    "NOTE" +
                    "\n" +
                    "If any entries on the SupportedAreas attribute’s list have the AreaInfo field missing the semantic " +
                    "data, the client may remind the user to assign the respective data.