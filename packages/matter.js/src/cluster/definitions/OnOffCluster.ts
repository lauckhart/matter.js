/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, Command, TlvNoResponse, WritableAttribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvUInt16, TlvEnum, TlvUInt8, TlvBitmap } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * On/Off
 *
 * Attributes and commands for switching devices between 'On' and 'Off' states.
 *
 * Use this factory function to create an OnOff cluster supporting a specific set of features. Include each
 * {@link OnOffCluster.Feature} you wish to support.
 *
 * @param features a list of {@link OnOffCluster.Feature} to support
 * @returns an OnOff cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5
 */
export function OnOffCluster<T extends OnOffCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...OnOffCluster.Metadata,
        supportedFeatures: BitFlags(OnOffCluster.Metadata.features, ...features),
        ...OnOffCluster.BaseComponent
    });
    extendCluster(cluster, OnOffCluster.LevelControlForLightingComponent, { levelControlForLighting: true });
    return cluster as unknown as OnOffCluster.Type<BitFlags<typeof OnOffCluster.Metadata.features, T>>;
}

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.5.1
 */
export const enum StartUpOnOff {
    /**
     * Set the OnOff attribute to FALSE
     */
    Off = 0,

    /**
     * Set the OnOff attribute to TRUE
     */
    On = 1,

    /**
     * If the previous value of the OnOff attribute is equal to FALSE, set the OnOff attribute to TRUE. If the previous
     * value of the OnOff attribute is equal to TRUE, set the OnOff attribute to FALSE (toggle).
     */
    Toggle = 2
}

export const enum OnOffEffectIdentifier {
    DelayedAllOff = 0,
    DyingLight = 1
}

/**
 * Input to the OnOff offWithEffect command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4
 */
export const TlvOffWithEffectRequest = TlvObject({
    /**
     * The EffectIdentifier field specifies the fading effect to use when turning the device off. This field shall
     * contain one of the non-reserved values listed in Values of the EffectIdentifier Field of the OffWithEffect
     * Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4.1
     */
    effectIdentifier: TlvField(0, TlvEnum<OnOffEffectIdentifier>()),

    /**
     * The EffectVariant field is used to indicate which variant of the effect, indicated in the EffectIdentifier
     * field, SHOULD be triggered. If the server does not support the given variant, it shall use the default variant.
     * This field is dependent on the value of the EffectIdentifier field and shall contain one of the non-reserved
     * values listed in Values of the EffectVariant Field of the OffWithEffect Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4.2
     */
    effectVariant: TlvField(1, TlvUInt8)
});

/**
 * Bit definitions for TlvOnOffControl
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.1
 */
export const OnOffControlBits = { acceptOnlyWhenOn: BitFlag(0), reserved: BitFlag(1) };

/**
 * The value of OnWithTimedOff.onOffControl
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.1
 */
export const TlvOnOffControl = TlvBitmap(TlvUInt8, OnOffControlBits);

/**
 * Input to the OnOff onWithTimedOff command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
 */
export const TlvOnWithTimedOffRequest = TlvObject({
    /**
     * The OnOffControl field contains information on how the server is to be operated. This field shall be formatted
     * as illustrated in Format of the OnOffControl Field of the OnWithTimedOff Command.
     *
     * The AcceptOnlyWhenOn sub-field is 1 bit in length and specifies whether the OnWithTimedOff command is to be
     * processed unconditionally or only when the OnOff attribute is equal to TRUE. If this sub-field is set to 1, the
     * OnWithTimedOff command shall only be accepted if the OnOff attribute is equal to TRUE. If this sub-field is set
     * to 0, the OnWithTimedOff command shall be processed unconditionally.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.1
     */
    onOffControl: TlvField(0, TlvOnOffControl),

    /**
     * The OnTime field is used to adjust the value of the OnTime attribute.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.2
     */
    onTime: TlvField(1, TlvNullable(TlvUInt16)),

    /**
     * The OffWaitTime field is used to adjust the value of the OffWaitTime attribute.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.3
     */
    offWaitTime: TlvField(2, TlvNullable(TlvUInt16))
});

export namespace OnOffCluster {
    /**
     * These are optional features supported by OnOffCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.4
     */
    export enum Feature {
        /**
         * LevelControlForLighting
         *
         * Behavior that supports lighting applications.
         */
        LevelControlForLighting = "LevelControlForLighting"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { levelControlForLighting: true } ? typeof LevelControlForLightingComponent : {});

    /**
     * OnOff cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5
     */
    export const Metadata = ClusterMetadata({
        id: 0x6,
        name: "OnOff",
        revision: 1,

        features: {
            /**
             * LevelControlForLighting
             *
             * Behavior that supports lighting applications.
             */
            levelControlForLighting: BitFlag(0)
        }
    });

    /**
     * A OnOffCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or
             * turned on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.1
             */
            onOff: Attribute(0, TlvBoolean, { scene: true, persistent: true, default: true })
        },

        commands: {
            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.1
             */
            off: Command(0, TlvNoArguments, 0, TlvNoResponse),

            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.2
             */
            on: Command(1, TlvNoArguments, 1, TlvNoResponse),

            /**
             * This command does not have any data fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.3
             */
            toggle: Command(2, TlvNoArguments, 2, TlvNoResponse)
        }
    });

    /**
     * A OnOffCluster supports these elements if it supports feature LevelControlForLighting.
     */
    export const LevelControlForLightingComponent = ClusterComponent({
        attributes: {
            /**
             * In order to support the use case where the user gets back the last setting of a set of devices (e.g.
             * level settings for lights), a global scene is introduced which is stored when the devices are turned off
             * and recalled when the devices are turned on. The global scene is defined as the scene that is stored
             * with group identifier 0 and scene identifier 0.
             *
             * The GlobalSceneControl attribute is defined in order to prevent a second Off command storing the
             * all-devices-off situation as a global scene, and to prevent a second On command destroying the cur
             *
             * rent settings by going back to the global scene.
             *
             * The GlobalSceneControl attribute shall be set to TRUE after the reception of a command which causes the
             * OnOff attribute to be set to TRUE, such as a standard On command, a MoveToLevel(WithOnOff) command, a
             * RecallScene command or a OnWithRecallGlobalScene command (see OnWithRecallGlobalScene Command).
             *
             * The GlobalSceneControl attribute is set to FALSE after reception of a OffWithEffect command.
             *
             * These concepts are illustrated in Explanation of the Behavior of Store and Recall Global Scene
             * functionality using a State Diagram.
             *
             * ### OffWithEffect
             *
             * store global scene
             *
             * other commands
             *
             * other commands
             *
             * GlobalSceneControl
             *
             * := TRUE
             *
             * On
             *
             * GlobalSceneControl
             *
             * := FALSE
             *
             * recall global scene
             *
             * OnWithRecallGlobalScene
             *
             * Note 1: Any command which causes the OnOff attribute to be set to TRUE except OnWithRecallGlobalScene,
             * e.g. On or Toggle.
             *
             * Figure 1. Explanation of the Behavior of Store and Recall Global Scene functionality using a State
             * Diagram
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.2
             */
            globalSceneControl: Attribute(16384, TlvBoolean, { default: true }),

            /**
             * The OnTime attribute specifies the length of time (in 1/10ths second) that the ‘On’ state shall be
             * maintained before automatically transitioning to the ‘Off’ state when using the OnWithTimedOff command.
             * This attribute can be written at any time, but writing a value only has effect when in the ‘Timed On’
             * state. See OnWithTimedOff Command for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.3
             */
            onTime: WritableAttribute(16385, TlvNullable(TlvUInt16), { default: 0 }),

            /**
             * The OffWaitTime attribute specifies the length of time (in 1/10ths second) that the ‘Off’ state shall be
             * guarded to prevent another OnWithTimedOff command turning the server back to its ‘On’ state (e.g., when
             * leaving a room, the lights are turned off but an occupancy sensor detects the leaving person and
             * attempts to turn the lights back on). This attribute can be written at any time, but writing a value
             * only has an effect when in the ‘Timed On’ state followed by a transition to the ‘Delayed Off' state, or
             * in the ‘Delayed Off’ state. See OnWithTimedOff Command for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.4
             */
            offWaitTime: WritableAttribute(16386, TlvNullable(TlvUInt16), { default: 0 }),

            /**
             * The StartUpOnOff attribute shall define the desired startup behavior of a device when it is supplied
             * with power and this state shall be reflected in the OnOff attribute. If the value is null, the OnOff
             * attribute is set to its previous value. Otherwise, the behavior is defined in the table defining
             * StartUpOnOffEnum.
             *
             * This behavior does not apply to reboots associated with OTA. After an OTA restart, the OnOff attribute
             * shall return to its value prior to the restart.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.5
             */
            startUpOnOff: WritableAttribute(
                16387,
                TlvNullable(TlvEnum<StartUpOnOff>()),
                { persistent: true, writeAcl: AccessLevel.Manage }
            )
        },

        commands: {
            /**
             * The OffWithEffect command allows devices to be turned off using enhanced ways of fading.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4
             */
            offWithEffect: Command(64, TlvOffWithEffectRequest, 64, TlvNoResponse),

            /**
             * The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned off.
             *
             * The OnWithRecallGlobalScene command shall have no parameters.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.5
             */
            onWithRecallGlobalScene: Command(65, TlvNoArguments, 65, TlvNoResponse),

            /**
             * The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off
             * duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received
             * during this time, are prevented from turning the devices back on. Further
             *
             * OnWithTimedOff commands received while the server is turned on, will update the period that the device
             * is turned on.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
             */
            onWithTimedOff: Command(66, TlvOnWithTimedOffRequest, 66, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all OnOff features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...LevelControlForLightingComponent.attributes },
        commands: { ...BaseComponent.commands, ...LevelControlForLightingComponent.commands }
    });
}
