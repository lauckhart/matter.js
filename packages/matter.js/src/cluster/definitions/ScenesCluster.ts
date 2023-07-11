/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { Cluster, Attribute, OptionalAttribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvUInt8, TlvBitmap, TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvGroupId } from "../../datatype/GroupId.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvClusterId } from "../../datatype/ClusterId.js";
import { TlvAny } from "../../tlv/TlvAny.js";

/**
 * Bit definitions for TlvNameSupport
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.5
 */
export const NameSupportBits = {
    /**
     * The ability to store a name for a scene.
     */
    sceneNames: BitFlag(7)
};

/**
 * The value of the Scenes nameSupport attribute
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.5
 */
export const TlvNameSupport = TlvBitmap(TlvUInt8, NameSupportBits);

/**
 * This data type indicates a combination of an identifier and the value of an attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.1
 */
export const TlvAttributeValuePair = TlvObject({
    /**
     * This field shall be present or not present, for all instances in the Scenes cluster. If this field is not
     * present, then the data type of AttributeValue shall be determined by the order and data type defined in the
     * cluster specification. Otherwise the data type of AttributeValue shall be the data type of the attribute
     * indicated by AttributeID.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.1.1
     */
    attributeId: TlvOptionalField(0, TlvUInt32),

    /**
     * This is the attribute value as part of an extension field set. See AttributeID to determine the data type for
     * this field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.1.2
     */
    attributeValue: TlvField(1, TlvAny)
});

/**
 * This data type indicates for a given cluster a set of attributes and their values. Only attributes which have the
 * "S" designation in the Quality column of the cluster specification shall be used in the AttributeValueList field.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.2
 */
export const TlvExtensionFieldSet = TlvObject({
    clusterId: TlvField(0, TlvClusterId),
    attributeValueList: TlvField(1, TlvArray(TlvAttributeValuePair))
});

/**
 * Input to the Scenes addScene command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.2
 */
export const TlvAddSceneRequest = TlvObject({
    groupId: TlvField(0, TlvGroupId),
    sceneId: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvUInt16),
    sceneName: TlvField(3, TlvString.bound({ maxLength: 16 })),
    extensionFieldSets: TlvField(4, TlvArray(TlvExtensionFieldSet))
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.12
 */
export const TlvAddSceneResponse = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvGroupId),
    sceneId: TlvField(2, TlvUInt8)
});

/**
 * Input to the Scenes viewScene command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.3
 */
export const TlvViewSceneRequest = TlvObject({ groupId: TlvField(0, TlvGroupId), sceneId: TlvField(1, TlvUInt8) });

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.13
 */
export const TlvViewSceneResponse = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvGroupId),
    sceneId: TlvField(2, TlvUInt8),
    transitionTime: TlvOptionalField(3, TlvUInt16),
    sceneName: TlvOptionalField(4, TlvString.bound({ maxLength: 16 })),
    extensionFieldSets: TlvOptionalField(5, TlvArray(TlvExtensionFieldSet))
});

/**
 * Input to the Scenes removeScene command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.4
 */
export const TlvRemoveSceneRequest = TlvObject({ groupId: TlvField(0, TlvGroupId), sceneId: TlvField(1, TlvUInt8) });

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.14
 */
export const TlvRemoveSceneResponse = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvGroupId),
    sceneId: TlvField(2, TlvUInt8)
});

/**
 * Input to the Scenes removeAllScenes command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.5
 */
export const TlvRemoveAllScenesRequest = TlvObject({ groupId: TlvField(0, TlvGroupId) });

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.15
 */
export const TlvRemoveAllScenesResponse = TlvObject({ status: TlvField(0, TlvUInt8), groupId: TlvField(1, TlvGroupId) });

/**
 * Input to the Scenes storeScene command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.6
 */
export const TlvStoreSceneRequest = TlvObject({ groupId: TlvField(0, TlvGroupId), sceneId: TlvField(1, TlvUInt8) });

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.16
 */
export const TlvStoreSceneResponse = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvGroupId),
    sceneId: TlvField(2, TlvUInt8)
});

/**
 * Input to the Scenes recallScene command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.7
 */
export const TlvRecallSceneRequest = TlvObject({
    groupId: TlvField(0, TlvGroupId),
    sceneId: TlvField(1, TlvUInt8),
    transitionTime: TlvOptionalField(2, TlvNullable(TlvUInt16))
});

/**
 * Input to the Scenes getSceneMembership command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.8
 */
export const TlvGetSceneMembershipRequest = TlvObject({ groupId: TlvField(0, TlvGroupId) });

/**
 * The fields of the get scene membership response command have the following semantics:
 *
 * The Capacity field shall contain the remaining capacity of the Scene Table of the server (for all groups). The
 * following values apply:
 *
 *   • 0 - No further scenes MAY be added.
 *
 *   • 0 < Capacity < 0xfe - Capacity holds the number of scenes that MAY be added.
 *
 *   • 0xfe - At least 1 further scene MAY be added (exact number is unknown).
 *
 *   • null - It is unknown if any further scenes MAY be added.
 *
 * The Status field shall contain SUCCESS or ILLEGAL_COMMAND (the endpoint is not a member of the group) as appropriate.
 *
 * The GroupID field shall be set to the corresponding field of the received GetSceneMembership command.
 *
 * If the status is not SUCCESS then the SceneList field shall be omitted, else the SceneList field shall contain the
 * identifiers of all the scenes in the Scene Table with the corresponding Group ID.
 *
 * Zigbee: If the total number of scenes associated with this Group ID will cause the maximum payload length of a frame
 * to be exceeded, then the SceneList field shall contain only as many scenes as will fit.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.17
 */
export const TlvGetSceneMembershipResponse = TlvObject({
    status: TlvField(0, TlvUInt8),
    capacity: TlvField(1, TlvNullable(TlvUInt8)),
    groupId: TlvField(2, TlvGroupId),
    sceneList: TlvOptionalField(3, TlvArray(TlvUInt8))
});

/**
 * Input to the Scenes enhancedAddScene command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.9
 */
export const TlvEnhancedAddSceneRequest = TlvObject({
    groupId: TlvField(0, TlvGroupId),
    sceneId: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvUInt16),
    sceneName: TlvField(3, TlvString),
    extensionFieldSets: TlvField(4, TlvExtensionFieldSet)
});

/**
 * The EnhancedAddSceneResponse command allows a server to respond to an EnhancedAddScene command, see EnhancedAddScene
 * Command.
 *
 * This command shall have the same data fields as the AddSceneResponse command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.18
 */
export const TlvEnhancedAddSceneResponse = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvGroupId),
    sceneId: TlvField(2, TlvUInt8)
});

/**
 * Input to the Scenes enhancedViewScene command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.10
 */
export const TlvEnhancedViewSceneRequest = TlvObject({ groupId: TlvField(0, TlvGroupId), sceneId: TlvField(1, TlvUInt8) });

/**
 * The EnhancedViewSceneResponse command allows a server to respond to an EnhancedViewScene command using a finer scene
 * transition time.
 *
 * This command shall have the same data fields as the ViewSceneResponse command, with the following difference:
 *
 * The TransitionTime field shall be measured in tenths of a second rather than in seconds.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.19
 */
export const TlvEnhancedViewSceneResponse = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvGroupId),
    sceneId: TlvField(2, TlvUInt8),
    transitionTime: TlvOptionalField(3, TlvUInt16),
    sceneName: TlvOptionalField(4, TlvString),
    extensionFieldSets: TlvOptionalField(5, TlvExtensionFieldSet)
});

/**
 * Bit definitions for TlvMode
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.1
 */
export const ModeBits = { copyAllScenes: BitFlag(0), reserved: BitFlag(1) };

/**
 * The value of CopyScene.mode
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.1
 */
export const TlvMode = TlvBitmap(TlvUInt8, ModeBits);

/**
 * Input to the Scenes copyScene command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11
 */
export const TlvCopySceneRequest = TlvObject({
    /**
     * The Mode field contains information of how the scene copy is to proceed. This field shall be formatted as
     * illustrated in Format of the Mode Field of the CopyScene Command.
     *
     * The CopyAllScenes subfield is 1-bit in length and indicates whether all scenes are to be copied. If this value
     * is set to 1, all scenes are to be copied and the SceneIdentifierFrom and SceneIdentifierTo fields shall be
     * ignored. Otherwise this field is set to 0.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.1
     */
    mode: TlvField(0, TlvMode),

    /**
     * The GroupIdentifierFrom field specifies the identifier of the group from which the scene is to be copied.
     * Together with the SceneIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
     * Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.2
     */
    groupIdentifierFrom: TlvField(1, TlvGroupId),

    /**
     * The SceneIdentifierFrom field specifies the identifier of the scene from which the scene is to be copied.
     * Together with the GroupIdentifierFrom field, this field uniquely identifies the scene to copy from the Scene
     * Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.3
     */
    sceneIdentifierFrom: TlvField(2, TlvUInt8),

    /**
     * The GroupIdentifierTo field specifies the identifier of the group to which the scene is to be copied. Together
     * with the SceneIdentifierTo field, this field uniquely identifies the scene to copy to the Scene Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.4
     */
    groupIdentifierTo: TlvField(3, TlvGroupId),

    /**
     * The SceneIdentifierTo field specifies the identifier of the scene to which the scene is to be copied. Together
     * with the GroupIdentifierTo field, this field uniquely identifies the scene to copy to the Scene Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.5
     */
    sceneIdentifierTo: TlvField(4, TlvUInt8)
});

/**
 * The CopySceneResponse command allows a server to respond to a CopyScene command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20
 */
export const TlvCopySceneResponse = TlvObject({
    /**
     * The Status field contains the status of the copy scene attempt. This field shall be set to one of the
     * non-reserved values listed in Values of the Status Field of the CopySceneResponse Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20.1
     */
    status: TlvField(0, TlvUInt8),

    /**
     * The GroupIdentifierFrom field specifies the identifier of the group from which the scene was copied, as
     * specified in the CopyScene command. Together with the SceneIdentifierFrom field, this field uniquely identifies
     * the scene that was copied from the Scene Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20.2
     */
    groupIdentifierFrom: TlvField(1, TlvGroupId),

    /**
     * The SceneIdentifierFrom field is specifies the identifier of the scene from which the scene was copied, as
     * specified in the CopyScene command. Together with the GroupIdentifierFrom field, this field uniquely identifies
     * the scene that was copied from the Scene Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20.3
     */
    sceneIdentifierFrom: TlvField(2, TlvUInt8)
});

/**
 * These are optional features supported by ScenesCluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.4
 */
export enum ScenesFeature {
    /**
     * SceneNames
     *
     * The ability to store a name for a scene.
     */
    SceneNames = "SceneNames"
}

/**
 * Scenes
 *
 * The Scenes cluster provides attributes and commands for setting up and recalling scenes. Each scene corresponds to a
 * set of stored values of specified attributes for one or more clusters on the same end point as the Scenes cluster.
 *
 * In most cases scenes are associated with a particular group identifier. Scenes MAY also exist without a group, in
 * which case the value 0 replaces the group identifier. Note that extra care is required in these cases to avoid a
 * scene identifier collision, and that commands related to scenes without a group MAY only be unicast, i.e., they MAY
 * not be multicast or broadcast.
 *
 * In a network supporting fabrics, scenes are scoped to the accessing fabric. When storing scene information,
 * implementations need to take care of this.
 *
 * NOTE Support for Scenes cluster is provisional.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4
 */
export const ScenesCluster = Cluster({
    id: 0x5,
    name: "Scenes",
    revision: 1,

    features: {
        /**
         * SceneNames
         *
         * The ability to store a name for a scene.
         */
        sceneNames: BitFlag(0)
    },

    attributes: {
        /**
         * The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.1
         */
        sceneCount: Attribute(0, TlvUInt8, { default: 0 }),

        /**
         * The CurrentScene attribute holds the scene identifier of the scene last invoked.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.2
         */
        currentScene: Attribute(1, TlvUInt8, { default: 0 }),

        /**
         * The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last
         * invoked is not associated with a group.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.3
         */
        currentGroup: Attribute(2, TlvGroupId, { default: { id: 0 } }),

        /**
         * The SceneValid attribute indicates whether the state of the server corresponds to that associated with the
         * CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE indicates
         * that they are not valid.
         *
         * Before a scene has been stored or recalled, this attribute is set to FALSE. After a successful StoreScene or
         * RecallScene command it is set to TRUE. If, after a scene is stored or recalled, the state of the server is
         * modified, this attribute is set to FALSE.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.4
         */
        sceneValid: Attribute(3, TlvBoolean, { default: true }),

        /**
         * This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The most
         * significant bit, bit 7, shall be equal to bit 0 of the FeatureMap attribute. All other bits shall be 0.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.5
         */
        nameSupport: Attribute(4, TlvNameSupport),

        /**
         * The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that last
         * configured the Scene Table.
         *
         * The null value indicates that the server has not been configured, or that the identifier of the node that
         * last configured the Scenes cluster is not known.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.6
         */
        lastConfiguredBy: OptionalAttribute(5, TlvNullable(TlvNodeId), { default: null })
    },

    commands: {
        /**
         * It is not mandatory for an extension field set to be included in the command for every cluster on that
         * endpoint that has a defined extension field set. Extension field sets MAY be omitted, including the case of
         * no extension field sets at all.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.2
         */
        addScene: Command(0, TlvAddSceneRequest, 0, TlvAddSceneResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.3
         */
        viewScene: Command(1, TlvViewSceneRequest, 1, TlvViewSceneResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.4
         */
        removeScene: Command(2, TlvRemoveSceneRequest, 2, TlvRemoveSceneResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.5
         */
        removeAllScenes: Command(3, TlvRemoveAllScenesRequest, 3, TlvRemoveAllScenesResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.6
         */
        storeScene: Command(4, TlvStoreSceneRequest, 4, TlvStoreSceneResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.7
         */
        recallScene: Command(5, TlvRecallSceneRequest, 5, TlvNoResponse),

        /**
         * The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no
         * commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a
         * certain group, for the endpoint that implements this cluster.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.8
         */
        getSceneMembership: Command(6, TlvGetSceneMembershipRequest, 6, TlvGetSceneMembershipResponse),

        /**
         * The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
         * AddScene command.
         *
         * This command shall have the same data fields as the AddScene command, with the following difference:
         *
         * The TransitionTime data field shall be measured in tenths of a second rather than in seconds.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.9
         */
        enhancedAddScene: OptionalCommand(64, TlvEnhancedAddSceneRequest, 64, TlvEnhancedAddSceneResponse),

        /**
         * The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than the
         * ViewScene command.
         *
         * This command shall have the same data fields as the ViewScene command.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.10
         */
        enhancedViewScene: OptionalCommand(65, TlvEnhancedViewSceneRequest, 65, TlvEnhancedViewSceneResponse),

        /**
         * The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
         * another group/scene identifier pair.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11
         */
        copyScene: OptionalCommand(66, TlvCopySceneRequest, 66, TlvCopySceneResponse)
    }
});
