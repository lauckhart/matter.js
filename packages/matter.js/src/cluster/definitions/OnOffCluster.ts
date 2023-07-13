/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BaseClusterComponent, ClusterComponent, ExtensibleCluster, validateFeatureSelection, ClusterForBaseCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { Attribute, Command, TlvNoResponse, WritableAttribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvUInt16, TlvEnum, TlvUInt8, TlvBitmap } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

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
 * The value of nameFor(model) {
 *
 * var _a;
 *
 * if (!(model instanceof ValueModel)) {
 *
 * return;
 *
 * }
 *
 * const defining = (_a = model.definingModel) !== null && _a !== void 0 ? _a : model;
 *
 * let name = defining.name;
 *
 * // If there is a name collision, prefix the name with the parent's name
 *
 * if (this.scopedNames.has(name) && defining.parent && !(defining instanceof ClusterModel)) {
 *
 * name = `${defining.parent.name}${name}`;
 *
 * }
 *
 * // Specialize the name based on the model type
 *
 * if (defining instanceof CommandModel && defining.isRequest) {
 *
 * name += "Request";
 *
 * }
 *
 * if (defining instanceof EventModel) {
 *
 * name += "Event";
 *
 * }
 *
 * // For enums and bitmaps we create a TypeScript value object, for other
 *
 * // types we create a TLV definition
 *
 * if (defining.effectiveMetatype === Metatype.enum) {
 *
 * if (name.endsWith("Enum")) {
 *
 * // This seems a bit redundant
 *
 * name = name.substring(0, name.length - 4);
 *
 * }
 *
 * }
 *
 * else if (defining.effectiveMetatype !== Metatype.bitmap) {
 *
 * name = "Tlv" + name;
 *
 * }
 *
 * // We reserve the name "Type". Plus it's kind of ambiguous
 *
 * if (name == "Type") {
 *
 * name = `${this.cluster.name}Type`;
 *
 * }
 *
 * return name;
 *
 * }.onOffControl
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6.1
 */
export const OnOffControl = { acceptOnlyWhenOn: BitFlag(0), reserved: BitFlag(1) };

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
    onOffControl: TlvField(0, TlvBitmap(TlvUInt8, OnOffControl)),

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

/**
 * These are optional features supported by OnOffCluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.4
 */
export enum OnOffFeature {
    /**
     * LevelControlForLighting
     *
     * Behavior that supports lighting applications.
     */
    LevelControlForLighting = "LevelControlForLighting"
}

/**
 * These elements and properties are present in all OnOff clusters.
 */
export const OnOffBase = BaseClusterComponent({
    id: 0x6,
    name: "OnOff",
    revision: 4,

    features: {
        /**
         * LevelControlForLighting
         *
         * Behavior that supports lighting applications.
         */
        levelControlForLighting: BitFlag(0)
    },

    attributes: {
        /**
         * The OnOff attribute indicates whether the device type implemented on the endpoint is turned off or turned
         * on, in these cases the value of the OnOff attribute equals FALSE, or TRUE respectively.
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
         * In order to support the use case where the user gets back the last setting of a set of devices (e.g. level
         * settings for lights), a global scene is introduced which is stored when the devices are turned off and
         * recalled when the devices are turned on. The global scene is defined as the scene that is stored with group
         * identifier 0 and scene identifier 0.
         *
         * The GlobalSceneControl attribute is defined in order to prevent a second Off command storing the
         * all-devices-off situation as a global scene, and to prevent a second On command destroying the current
         * settings by going back to the global scene.
         *
         * The GlobalSceneControl attribute shall be set to TRUE after the reception of a command which causes the
         * OnOff attribute to be set to TRUE, such as a standard On command, a MoveToLevel(WithOnOff) command, a
         * RecallScene command or a OnWithRecallGlobalScene command (see OnWithRecallGlobalScene Command).
         *
         * The GlobalSceneControl attribute is set to FALSE after reception of a OffWithEffect command.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.2
         */
        globalSceneControl: Attribute(16384, TlvBoolean, { default: true }),

        /**
         * The OnTime attribute specifies the length of time (in 1/10ths second) that the ‘On’ state shall be
         * maintained before automatically transitioning to the ‘Off’ state when using the OnWithTimedOff command. This
         * attribute can be written at any time, but writing a value only has effect when in the ‘Timed On’ state. See
         * OnWithTimedOff Command for more details.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.3
         */
        onTime: WritableAttribute(16385, TlvNullable(TlvUInt16), { default: 0 }),

        /**
         * The OffWaitTime attribute specifies the length of time (in 1/10ths second) that the ‘Off’ state shall be
         * guarded to prevent another OnWithTimedOff command turning the server back to its ‘On’ state (e.g., when
         * leaving a room, the lights are turned off but an occupancy sensor detects the leaving person and attempts to
         * turn the lights back on). This attribute can be written at any time, but writing a value only has an effect
         * when in the ‘Timed On’ state followed by a transition to the ‘Delayed Off' state, or in the ‘Delayed Off’
         * state. See OnWithTimedOff Command for more details.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.6.4
         */
        offWaitTime: WritableAttribute(16386, TlvNullable(TlvUInt16), { default: 0 }),

        /**
         * The StartUpOnOff attribute shall define the desired startup behavior of a device when it is supplied with
         * power and this state shall be reflected in the OnOff attribute. If the value is null, the OnOff attribute is
         * set to its previous value. Otherwise, the behavior is defined in the table defining StartUpOnOffEnum.
         *
         * This behavior does not apply to reboots associated with OTA. After an OTA restart, the OnOff attribute shall
         * return to its value prior to the restart.
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
         * OnWithTimedOff commands received while the server is turned on, will update the period that the device is
         * turned on.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
         */
        onWithTimedOff: Command(66, TlvOnWithTimedOffRequest, 66, TlvNoResponse)
    }
});

/**
 * On/Off
 *
 * Attributes and commands for turning devices on and off.
 *
 * OnOffCluster supports optional features that you can enable with the OnOffCluster.with factory method.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5
 */
export const OnOffCluster = ExtensibleCluster({
    ...OnOffBase,

    /**
     * Use this factory method to create an OnOff cluster with support for optional features. Include each
     * {@link OnOffFeature} you wish to support.
     *
     * @param features the optional features to support
     * @returns an OnOff cluster with specified features enabled
     * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
     */
    factory: <T extends `${OnOffFeature}`[]>(...features: [...T]) => {
        validateFeatureSelection(features, OnOffFeature);
        const cluster = Cluster({ ...OnOffBase, supportedFeatures: BitFlags(OnOffBase.features, ...features) });
        return cluster as unknown as OnOffExtension<BitFlags<typeof OnOffBase.features, T>>;
    }
});

export type OnOffExtension<SF extends TypeFromPartialBitSchema<typeof OnOffBase.features>> =
    ClusterForBaseCluster<typeof OnOffBase, SF>
    & { supportedFeatures: SF }
    & (SF extends { levelControlForLighting: true } ? typeof LevelControlForLightingComponent : {});

/**
 * This cluster supports all OnOff features. It may support illegal feature combinations.
 *
 * If you use this cluster you must manually specify which features are active and ensure the set of active features is
 * legal per the Matter specification.
 */
export const OnOffComplete = Cluster({
    ...OnOffCluster,
    attributes: { ...LevelControlForLightingComponent.attributes },
    commands: { ...LevelControlForLightingComponent.commands }
});
