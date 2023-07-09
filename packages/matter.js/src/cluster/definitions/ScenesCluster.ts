/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, AccessLevel, OptionalAttribute, Command, TlvNoResponse, OptionalCommand, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvUInt8, TlvUInt16, TlvBitmap, TlvUInt64, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvAny } from "../../tlv/TlvAny.js";

/**
 * Scenes
 *
 * Attributes and commands for scene configuration and manipulation.
 *
 * This function creates a Scenes cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4
 */
export function ScenesCluster() {
    const cluster = Cluster({ ...ScenesCluster.Metadata, ...ScenesCluster.BaseComponent });
    return cluster as unknown as ScenesCluster.Type;
};

/**
 * This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The most
 * significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other bits SHALL be 0.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.5
 */
export const TlvNameSupportBits = {
    /**
     * The ability to store a name for a scene.
     */
    sceneNames: BitFlag(7)
};

export const TlvNameSupport = TlvBitmap(TlvUInt8, TlvNameSupportBits);

/**
 * This data type indicates a combination of an identifier and the value of an attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.6.1
 */
export const TlvAttributeValuePair = TlvObject({
    /**
     * This field SHALL be present or not present, for all instances in the Scenes cluster. If this field is not
     * present, then the data type of AttributeValue SHALL be determined by the order and data type defined in the
     * cluster specification. Otherwise the data type of AttributeValue SHALL be the data type of the attribute
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
    clusterId: TlvField(0, TlvUInt32),
    attributeValueList: TlvField(1, TlvArray(TlvAttributeValuePair))
});

/**
 * The AddScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.2
 */
export const TlvAddSceneRequest = TlvObject({
    groupId: TlvField(0, TlvUInt16),
    sceneId: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvUInt16),
    sceneName: TlvField(3, TlvString.bound({ maxLength: 16 })),
    extensionFieldSets: TlvField(4, TlvArray(TlvExtensionFieldSet))
});

/**
 * The AddSceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.12
 */
export const TlvAddSceneResponseRequest = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvUInt16),
    sceneId: TlvField(2, TlvUInt8)
});

/**
 * The ViewScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.3
 */
export const TlvViewSceneRequest = TlvObject({ groupId: TlvField(0, TlvUInt16), sceneId: TlvField(1, TlvUInt8) });

/**
 * The ViewSceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.13
 */
export const TlvViewSceneResponseRequest = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvUInt16),
    sceneId: TlvField(2, TlvUInt8),
    transitionTime: TlvOptionalField(3, TlvUInt16),
    sceneName: TlvOptionalField(4, TlvString.bound({ maxLength: 16 })),
    extensionFieldSets: TlvOptionalField(5, TlvArray(TlvExtensionFieldSet))
});

/**
 * The RemoveScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.4
 */
export const TlvRemoveSceneRequest = TlvObject({ groupId: TlvField(0, TlvUInt16), sceneId: TlvField(1, TlvUInt8) });

/**
 * The RemoveSceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.14
 */
export const TlvRemoveSceneResponseRequest = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvUInt16),
    sceneId: TlvField(2, TlvUInt8)
});

/**
 * The RemoveAllScenes command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.5
 */
export const TlvRemoveAllScenesRequest = TlvObject({ groupId: TlvField(0, TlvUInt16) });

/**
 * The RemoveAllScenesResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.15
 */
export const TlvRemoveAllScenesResponseRequest = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvUInt16)
});

/**
 * The StoreScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.6
 */
export const TlvStoreSceneRequest = TlvObject({ groupId: TlvField(0, TlvUInt16), sceneId: TlvField(1, TlvUInt8) });

/**
 * The StoreSceneResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.16
 */
export const TlvStoreSceneResponseRequest = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvUInt16),
    sceneId: TlvField(2, TlvUInt8)
});

/**
 * The RecallScene command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.7
 */
export const TlvRecallSceneRequest = TlvObject({
    groupId: TlvField(0, TlvUInt16),
    sceneId: TlvField(1, TlvUInt8),
    transitionTime: TlvOptionalField(2, TlvNullable(TlvUInt16))
});

/**
 * The GetSceneMembership command can be used to find an unused scene identifier within a certain group when no
 * commissioning tool is in the network, or for a commissioning tool to get the used scene identifiers within a certain
 * group, for the endpoint that implements this cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.8
 */
export const TlvGetSceneMembershipRequest = TlvObject({ groupId: TlvField(0, TlvUInt16) });

/**
 * The GetSceneMembershipResponse command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.17
 */
export const TlvGetSceneMembershipResponseRequest = TlvObject({
    status: TlvField(0, TlvUInt8),
    capacity: TlvField(1, TlvNullable(TlvUInt8)),
    groupId: TlvField(2, TlvUInt16),
    sceneList: TlvOptionalField(3, TlvArray(TlvUInt8))
});

/**
 * The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the AddScene
 * command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.9
 */
export const TlvEnhancedAddSceneRequest = TlvObject({
    groupId: TlvField(0, TlvUInt16),
    sceneId: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvUInt16),
    sceneName: TlvField(3, TlvString),
    extensionFieldSets: TlvField(4, TlvExtensionFieldSet)
});

/**
 * The EnhancedAddSceneResponse command allows a server to respond to an EnhancedAddScene command, see EnhancedAddScene
 * Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.18
 */
export const TlvEnhancedAddSceneResponseRequest = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvUInt16),
    sceneId: TlvField(2, TlvUInt8)
});

/**
 * The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than the ViewScene
 * command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.10
 */
export const TlvEnhancedViewSceneRequest = TlvObject({ groupId: TlvField(0, TlvUInt16), sceneId: TlvField(1, TlvUInt8) });

/**
 * The EnhancedViewSceneResponse command allows a server to respond to an EnhancedViewScene command using a finer scene
 * transition time.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.19
 */
export const TlvEnhancedViewSceneResponseRequest = TlvObject({
    status: TlvField(0, TlvUInt8),
    groupId: TlvField(1, TlvUInt16),
    sceneId: TlvField(2, TlvUInt8),
    transitionTime: TlvOptionalField(3, TlvUInt16),
    sceneName: TlvOptionalField(4, TlvString),
    extensionFieldSets: TlvOptionalField(5, TlvExtensionFieldSet)
});

/**
 * The Mode field contains information of how the scene copy is to proceed. This field SHALL be formatted as
 * illustrated in Format of the Mode Field of the CopyScene Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.1
 */
export const TlvModeBits = { copyAllScenes: BitFlag(0), reserved: BitFlag(1) };

export const TlvMode = TlvBitmap(TlvUInt8, TlvModeBits);

/**
 * The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to another
 * group/scene identifier pair.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11
 */
export const TlvCopySceneRequest = TlvObject({
    /**
     * The Mode field contains information of how the scene copy is to proceed. This field SHALL be formatted as
     * illustrated in Format of the Mode Field of the CopyScene Command.
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
    groupIdentifierFrom: TlvField(1, TlvUInt16),

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
    groupIdentifierTo: TlvField(3, TlvUInt16),

    /**
     * The SceneIdentifierTo field specifies the identifier of the scene to which the scene is to be copied. Together
     * with the GroupIdentifierTo field, this field uniquely identifies the scene to copy to the Scene Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11.5
     */
    sceneIdentifierTo: TlvField(4, TlvUInt8)
});

/**
 * The CopySceneResponse command allows a server to respond to a CopyScene command. The CopySceneResponse command SHALL
 * have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20
 */
export const TlvCopySceneResponseRequest = TlvObject({
    /**
     * The Status field contains the status of the copy scene attempt. This field SHALL be set to one of the
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
    groupIdentifierFrom: TlvField(1, TlvUInt16),

    /**
     * The SceneIdentifierFrom field is specifies the identifier of the scene from which the scene was copied, as
     * specified in the CopyScene command. Together with the GroupIdentifierFrom field, this field uniquely identifies
     * the scene that was copied from the Scene Table.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20.3
     */
    sceneIdentifierFrom: TlvField(2, TlvUInt8)
});

export namespace ScenesCluster {
    /**
     * These are optional features supported by ScenesCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.4
     */
    export enum Feature {
        /**
         * SceneNames
         *
         * The ability to store a name for a scene.
         */
        SceneNames = "SceneNames"
    };

    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * Scenes cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4
     */
    export const Metadata = ClusterMetadata({
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
        }
    });

    /**
     * A ScenesCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The SceneCount attribute specifies the number of scenes currently in the server’s Scene Table.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.1
             */
            sceneCount: Attribute(0, TlvUInt8, { default: 0, readAcl: AccessLevel.View }),

            /**
             * The CurrentScene attribute holds the scene identifier of the scene last invoked.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.2
             */
            currentScene: Attribute(1, TlvUInt8, { default: 0, readAcl: AccessLevel.View }),

            /**
             * The CurrentGroup attribute holds the group identifier of the scene last invoked, or 0 if the scene last
             * invoked is not associated with a group.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.3
             */
            currentGroup: Attribute(2, TlvUInt16, { default: 0, readAcl: AccessLevel.View }),

            /**
             * The SceneValid attribute indicates whether the state of the server corresponds to that associated with
             * the CurrentScene and CurrentGroup attributes. TRUE indicates that these attributes are valid, FALSE
             * indicates that they are not valid.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.4
             */
            sceneValid: Attribute(3, TlvBoolean, { default: true, readAcl: AccessLevel.View }),

            /**
             * This attribute provides legacy, read-only access to whether the Scene Names feature is supported. The
             * most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other bits SHALL
             * be 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.7.5
             */
            nameSupport: Attribute(4, TlvNameSupport, { readAcl: AccessLevel.View }),

            /**
             * The LastConfiguredBy attribute holds the Node ID (the IEEE address in case of Zigbee) of the node that
             * last configured the Scene Table.
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
            addScene: Command(0, TlvAddSceneRequest, 0, TlvAddSceneResponseRequest),

            /**
             * The AddSceneResponse command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.12
             */
            addSceneResponse: Command(0, TlvAddSceneResponseRequest, 0, TlvNoResponse),

            /**
             * The ViewScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.3
             */
            viewScene: Command(1, TlvViewSceneRequest, 1, TlvViewSceneResponseRequest),

            /**
             * The ViewSceneResponse command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.13
             */
            viewSceneResponse: Command(1, TlvViewSceneResponseRequest, 1, TlvNoResponse),

            /**
             * The RemoveScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.4
             */
            removeScene: Command(2, TlvRemoveSceneRequest, 2, TlvRemoveSceneResponseRequest),

            /**
             * The RemoveSceneResponse command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.14
             */
            removeSceneResponse: Command(2, TlvRemoveSceneResponseRequest, 2, TlvNoResponse),

            /**
             * The RemoveAllScenes command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.5
             */
            removeAllScenes: Command(3, TlvRemoveAllScenesRequest, 3, TlvRemoveAllScenesResponseRequest),

            /**
             * The RemoveAllScenesResponse command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.15
             */
            removeAllScenesResponse: Command(3, TlvRemoveAllScenesResponseRequest, 3, TlvNoResponse),

            /**
             * The StoreScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.6
             */
            storeScene: Command(4, TlvStoreSceneRequest, 4, TlvStoreSceneResponseRequest),

            /**
             * The StoreSceneResponse command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.16
             */
            storeSceneResponse: Command(4, TlvStoreSceneResponseRequest, 4, TlvNoResponse),

            /**
             * The RecallScene command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.7
             */
            recallScene: Command(5, TlvRecallSceneRequest, 5, TlvNoResponse),

            /**
             * The GetSceneMembership command can be used to find an unused scene identifier within a certain group
             * when no commissioning tool is in the network, or for a commissioning tool to get the used scene
             * identifiers within a certain group, for the endpoint that implements this cluster.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.8
             */
            getSceneMembership: Command(6, TlvGetSceneMembershipRequest, 6, TlvGetSceneMembershipResponseRequest),

            /**
             * The GetSceneMembershipResponse command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.17
             */
            getSceneMembershipResponse: Command(6, TlvGetSceneMembershipResponseRequest, 6, TlvNoResponse),

            /**
             * The EnhancedAddScene command allows a scene to be added using a finer scene transition time than the
             * AddScene command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.9
             */
            enhancedAddScene: OptionalCommand(64, TlvEnhancedAddSceneRequest, 64, TlvEnhancedAddSceneResponseRequest),

            /**
             * The EnhancedAddSceneResponse command allows a server to respond to an EnhancedAddScene command, see
             * EnhancedAddScene Command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.18
             */
            enhancedAddSceneResponse: OptionalCommand(64, TlvEnhancedAddSceneResponseRequest, 64, TlvNoResponse),

            /**
             * The EnhancedViewScene command allows a scene to be retrieved using a finer scene transition time than
             * the ViewScene command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.10
             */
            enhancedViewScene: OptionalCommand(65, TlvEnhancedViewSceneRequest, 65, TlvEnhancedViewSceneResponseRequest),

            /**
             * The EnhancedViewSceneResponse command allows a server to respond to an EnhancedViewScene command using a
             * finer scene transition time.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.19
             */
            enhancedViewSceneResponse: OptionalCommand(65, TlvEnhancedViewSceneResponseRequest, 65, TlvNoResponse),

            /**
             * The CopyScene command allows a client to efficiently copy scenes from one group/scene identifier pair to
             * another group/scene identifier pair.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.11
             */
            copyScene: OptionalCommand(66, TlvCopySceneRequest, 66, TlvCopySceneResponseRequest),

            /**
             * The CopySceneResponse command allows a server to respond to a CopyScene command. The CopySceneResponse
             * command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.4.9.20
             */
            copySceneResponse: OptionalCommand(66, TlvCopySceneResponseRequest, 66, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all Scenes features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands }
    });
};
