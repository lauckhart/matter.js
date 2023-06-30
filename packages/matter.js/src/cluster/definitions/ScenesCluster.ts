/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, OptionalAttribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvUInt16, TlvBitmap, TlvUInt64, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvAny } from "../../tlv/TlvAny.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This attribute provides legacy, read-only access to whether the Scene Names
 * feature is supported. The most significant bit, bit 7, SHALL be equal to bit
 * 0 of the FeatureMap attribute. All other bits SHALL be 0.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.5
 */
export const NameSupport = TlvBitmap(TlvUInt8, {
    /**
     * The ability to store a name for a scene.
     */
    SceneNames: BitFlag(7)
});

/**
 * The AddSceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.12
 */
export const AddSceneResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16),
    SceneId: TlvField(2, TlvUInt8)
});

/**
 * This data type indicates a combination of an identifier and the value of an
 * attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.1
 */
export const AttributeValuePair = TlvObject({
    /**
     * This field SHALL be present or not present, for all instances in the
     * Scenes cluster. If this field is not present, then the data type of
     * AttributeValue SHALL be determined by the order and data type defined in
     * the cluster specification. Otherwise the data type of AttributeValue
     * SHALL be the data type of the attribute indicated by AttributeID.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.1.1
     */
    AttributeId: TlvOptionalField(0, TlvUInt32),

    /**
     * This is the attribute value as part of an extension field set. See
     * AttributeID to determine the data type for this field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.1.2
     */
    AttributeValue: TlvField(1, TlvAny)
});

/**
 * This data type indicates for a given cluster a set of attributes and their
 * values. Only attributes which have the "S" designation in the Quality column
 * of the cluster specification SHALL be used in the AttributeValueList field.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.2
 */
export const ExtensionFieldSet = TlvObject({
    ClusterId: TlvField(0, TlvUInt32),
    AttributeValueList: TlvField(1, TlvArray(AttributeValuePair))
});

/**
 * The AddScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.2
 */
export const AddSceneRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    SceneId: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt16),
    SceneName: TlvField(3, TlvString.bound({ maxLength: 16 })),
    ExtensionFieldSets: TlvField(4, TlvArray(ExtensionFieldSet))
});

/**
 * The ViewSceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.13
 */
export const ViewSceneResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16),
    SceneId: TlvField(2, TlvUInt8),
    TransitionTime: TlvOptionalField(3, TlvUInt16),
    SceneName: TlvOptionalField(4, TlvString.bound({ maxLength: 16 })),
    ExtensionFieldSets: TlvOptionalField(5, TlvArray(ExtensionFieldSet))
});

/**
 * The ViewScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.3
 */
export const ViewSceneRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    SceneId: TlvField(1, TlvUInt8)
});

/**
 * The RemoveSceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.14
 */
export const RemoveSceneResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16),
    SceneId: TlvField(2, TlvUInt8)
});

/**
 * The RemoveScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.4
 */
export const RemoveSceneRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    SceneId: TlvField(1, TlvUInt8)
});

/**
 * The RemoveAllScenesResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.15
 */
export const RemoveAllScenesResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16)
});

/**
 * The RemoveAllScenes command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.5
 */
export const RemoveAllScenesRequest = TlvObject({ GroupId: TlvField(0, TlvUInt16) });

/**
 * The StoreSceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.16
 */
export const StoreSceneResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16),
    SceneId: TlvField(2, TlvUInt8)
});

/**
 * The StoreScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.6
 */
export const StoreSceneRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    SceneId: TlvField(1, TlvUInt8)
});

/**
 * The RecallScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.7
 */
export const RecallSceneRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    SceneId: TlvField(1, TlvUInt8),
    TransitionTime: TlvOptionalField(2, TlvNullable(TlvUInt16))
});

/**
 * The GetSceneMembershipResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.17
 */
export const GetSceneMembershipResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    Capacity: TlvField(1, TlvNullable(TlvUInt8)),
    GroupId: TlvField(2, TlvUInt16),
    SceneList: TlvOptionalField(3, TlvArray(TlvUInt8))
});

/**
 * The GetSceneMembership command can be used to find an unused scene
 * identifier within a certain group when no commissioning tool is in the
 * network, or for a commissioning tool to get the used scene identifiers
 * within a certain group, for the endpoint that implements this cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.8
 */
export const GetSceneMembershipRequest = TlvObject({ GroupId: TlvField(0, TlvUInt16) });

/**
 * The EnhancedAddSceneResponse command allows a server to respond to an
 * EnhancedAddScene command, see EnhancedAddScene Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.18
 */
export const EnhancedAddSceneResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16),
    SceneId: TlvField(2, TlvUInt8)
});

/**
 * The EnhancedAddScene command allows a scene to be added using a finer scene
 * transition time than the AddScene command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.9
 */
export const EnhancedAddSceneRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    SceneId: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt16),
    SceneName: TlvField(3, TlvString),
    ExtensionFieldSets: TlvField(4, ExtensionFieldSet)
});

/**
 * The EnhancedViewSceneResponse command allows a server to respond to an
 * EnhancedViewScene command using a finer scene transition time.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.19
 */
export const EnhancedViewSceneResponseRequest = TlvObject({
    Status: TlvField(0, TlvUInt8),
    GroupId: TlvField(1, TlvUInt16),
    SceneId: TlvField(2, TlvUInt8),
    TransitionTime: TlvOptionalField(3, TlvUInt16),
    SceneName: TlvOptionalField(4, TlvString),
    ExtensionFieldSets: TlvOptionalField(5, ExtensionFieldSet)
});

/**
 * The EnhancedViewScene command allows a scene to be retrieved using a finer
 * scene transition time than the ViewScene command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.10
 */
export const EnhancedViewSceneRequest = TlvObject({
    GroupId: TlvField(0, TlvUInt16),
    SceneId: TlvField(1, TlvUInt8)
});

/**
 * The CopySceneResponse command allows a server to respond to a CopyScene
 * command. The CopySceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20
 */
export const CopySceneResponseRequest = TlvObject({
    /**
     * The Status field contains the status of the copy scene attempt. This
     * field SHALL be set to one of the non-reserved values listed in Values of
     * the Status Field of the CopySceneResponse Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20.1
     */
    Status: TlvField(0, TlvUInt8),

    /**
     * The GroupIdentifierFrom field specifies the identifier of the group from
     * which the scene was copied, as specified in the CopyScene command.
     * Together with the SceneIdentifierFrom field, this field uniquely
     * identifies the scene that was copied from the Scene Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20.2
     */
    GroupIdentifierFrom: TlvField(1, TlvUInt16),

    /**
     * The SceneIdentifierFrom field is specifies the identifier of the scene
     * from which the scene was copied, as specified in the CopyScene command.
     * Together with the GroupIdentifierFrom field, this field uniquely
     * identifies the scene that was copied from the Scene Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20.3
     */
    SceneIdentifierFrom: TlvField(2, TlvUInt8)
});

/**
 * The Mode field contains information of how the scene copy is to proceed.
 * This field SHALL be formatted as illustrated in Format of the Mode Field of
 * the CopyScene Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.1
 */
export const Mode = TlvBitmap(TlvUInt8, {
    CopyAllScenes: BitFlag(0),
    Reserved: BitFlag(1)
});

/**
 * The CopyScene command allows a client to efficiently copy scenes from one
 * group/scene identifier pair to another group/scene identifier pair.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11
 */
export const CopySceneRequest = TlvObject({
    /**
     * The Mode field contains information of how the scene copy is to proceed.
     * This field SHALL be formatted as illustrated in Format of the Mode Field
     * of the CopyScene Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.1
     */
    Mode: TlvField(0, Mode),

    /**
     * The GroupIdentifierFrom field specifies the identifier of the group from
     * which the scene is to be copied. Together with the SceneIdentifierFrom
     * field, this field uniquely identifies the scene to copy from the Scene
     * Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.2
     */
    GroupIdentifierFrom: TlvField(1, TlvUInt16),

    /**
     * The SceneIdentifierFrom field specifies the identifier of the scene from
     * which the scene is to be copied. Together with the GroupIdentifierFrom
     * field, this field uniquely identifies the scene to copy from the Scene
     * Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.3
     */
    SceneIdentifierFrom: TlvField(2, TlvUInt8),

    /**
     * The GroupIdentifierTo field specifies the identifier of the group to
     * which the scene is to be copied. Together with the SceneIdentifierTo
     * field, this field uniquely identifies the scene to copy to the Scene
     * Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.4
     */
    GroupIdentifierTo: TlvField(3, TlvUInt16),

    /**
     * The SceneIdentifierTo field specifies the identifier of the scene to
     * which the scene is to be copied. Together with the GroupIdentifierTo
     * field, this field uniquely identifies the scene to copy to the Scene
     * Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.5
     */
    SceneIdentifierTo: TlvField(4, TlvUInt8)
});

export namespace ScenesCluster {
    export const id = 5;
    export const name = "Scenes";
    export const revision = 1;

    export const featureMap = {
        /**
         * SceneNames
         *
         * The ability to store a name for a scene.
         */
        SN: BitFlag(0)
    };

    const Base = {
        attributes: {
            /**
             * The SceneCount attribute specifies the number of scenes
             * currently in the server’s Scene Table.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.1
             */
            sceneCount: Attribute(0, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * The CurrentScene attribute holds the scene identifier of the
             * scene last invoked.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.2
             */
            currentScene: Attribute(1, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * The CurrentGroup attribute holds the group identifier of the
             * scene last invoked, or 0 if the scene last invoked is not
             * associated with a group.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.3
             */
            currentGroup: Attribute(2, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The SceneValid attribute indicates whether the state of the
             * server corresponds to that associated with the CurrentScene and
             * CurrentGroup attributes. TRUE indicates that these attributes
             * are valid, FALSE indicates that they are not valid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.4
             */
            sceneValid: Attribute(3, TlvBoolean, { default: true, readAcl: AccessLevel.View }),

            /**
             * This attribute provides legacy, read-only access to whether the
             * Scene Names feature is supported. The most significant bit, bit
             * 7, SHALL be equal to bit 0 of the FeatureMap attribute. All
             * other bits SHALL be 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.5
             */
            nameSupport: Attribute(4, NameSupport, { readAcl: AccessLevel.View }),

            /**
             * The LastConfiguredBy attribute holds the Node ID (the IEEE
             * address in case of Zigbee) of the node that last configured the
             * Scene Table.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.6
             */
            lastConfiguredBy: OptionalAttribute(5, TlvNullable(TlvUInt64), { default: null, readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * The AddScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.2
             */
            addScene: Command(0, AddSceneRequest, 0, AddSceneResponseRequest),

            /**
             * The AddSceneResponse command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.12
             */
            addSceneResponse: Command(0, AddSceneResponseRequest, 0, TlvNoResponse),

            /**
             * The ViewScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.3
             */
            viewScene: Command(1, ViewSceneRequest, 1, ViewSceneResponseRequest),

            /**
             * The ViewSceneResponse command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.13
             */
            viewSceneResponse: Command(1, ViewSceneResponseRequest, 1, TlvNoResponse),

            /**
             * The RemoveScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.4
             */
            removeScene: Command(2, RemoveSceneRequest, 2, RemoveSceneResponseRequest),

            /**
             * The RemoveSceneResponse command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.14
             */
            removeSceneResponse: Command(2, RemoveSceneResponseRequest, 2, TlvNoResponse),

            /**
             * The RemoveAllScenes command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.5
             */
            removeAllScenes: Command(3, RemoveAllScenesRequest, 3, RemoveAllScenesResponseRequest),

            /**
             * The RemoveAllScenesResponse command SHALL have the following
             * data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.15
             */
            removeAllScenesResponse: Command(3, RemoveAllScenesResponseRequest, 3, TlvNoResponse),

            /**
             * The StoreScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.6
             */
            storeScene: Command(4, StoreSceneRequest, 4, StoreSceneResponseRequest),

            /**
             * The StoreSceneResponse command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.16
             */
            storeSceneResponse: Command(4, StoreSceneResponseRequest, 4, TlvNoResponse),

            /**
             * The RecallScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.7
             */
            recallScene: Command(5, RecallSceneRequest, 5, TlvNoResponse),

            /**
             * The GetSceneMembership command can be used to find an unused
             * scene identifier within a certain group when no commissioning
             * tool is in the network, or for a commissioning tool to get the
             * used scene identifiers within a certain group, for the endpoint
             * that implements this cluster.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.8
             */
            getSceneMembership: Command(6, GetSceneMembershipRequest, 6, GetSceneMembershipResponseRequest),

            /**
             * The GetSceneMembershipResponse command SHALL have the following
             * data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.17
             */
            getSceneMembershipResponse: Command(6, GetSceneMembershipResponseRequest, 6, TlvNoResponse),

            /**
             * The EnhancedAddScene command allows a scene to be added using a
             * finer scene transition time than the AddScene command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.9
             */
            enhancedAddScene: OptionalCommand(64, EnhancedAddSceneRequest, 64, EnhancedAddSceneResponseRequest),

            /**
             * The EnhancedAddSceneResponse command allows a server to respond
             * to an EnhancedAddScene command, see EnhancedAddScene Command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.18
             */
            enhancedAddSceneResponse: OptionalCommand(64, EnhancedAddSceneResponseRequest, 64, TlvNoResponse),

            /**
             * The EnhancedViewScene command allows a scene to be retrieved
             * using a finer scene transition time than the ViewScene command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.10
             */
            enhancedViewScene: OptionalCommand(65, EnhancedViewSceneRequest, 65, EnhancedViewSceneResponseRequest),

            /**
             * The EnhancedViewSceneResponse command allows a server to respond
             * to an EnhancedViewScene command using a finer scene transition
             * time.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.19
             */
            enhancedViewSceneResponse: OptionalCommand(65, EnhancedViewSceneResponseRequest, 65, TlvNoResponse),

            /**
             * The CopyScene command allows a client to efficiently copy scenes
             * from one group/scene identifier pair to another group/scene
             * identifier pair.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11
             */
            copyScene: OptionalCommand(66, CopySceneRequest, 66, CopySceneResponseRequest),

            /**
             * The CopySceneResponse command allows a server to respond to a
             * CopyScene command. The CopySceneResponse command SHALL have the
             * following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20
             */
            copySceneResponse: OptionalCommand(66, CopySceneResponseRequest, 66, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { SN: true },
        elements: [ Base ]
    });
};