/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BaseClusterComponent, ClusterComponent, ExtensibleCluster, validateFeatureSelection, extendCluster, ClusterForBaseCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, BitsFromPartial, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { Attribute, OptionalAttribute, WritableAttribute, OptionalWritableAttribute, Command, TlvNoResponse, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * The value of the LevelControl options attribute
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
 */
export const Options = { executeIfOff: BitFlag(0), coupleColorTempToLevel: BitFlag(1) };

/**
 * Input to the LevelControl moveToLevel command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
 */
export const TlvMoveToLevelRequest = TlvObject({
    level: TlvField(0, TlvUInt8.bound({ max: 254 })),
    transitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

export const enum MoveMode {
    Up = 0,
    Down = 1
}

/**
 * Input to the LevelControl move command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2
 */
export const TlvMoveRequest = TlvObject({
    /**
     * The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.1
     */
    moveMode: TlvField(0, TlvEnum<MoveMode>()),

    /**
     * The Rate field specifies the rate of movement in units per second. The actual rate of movement SHOULD be as
     * close to this rate as the device is able. If the Rate field is equal to null, then the value in DefaultMoveRate
     * attribute shall be used. However, if the Rate field is equal to null and the DefaultMoveRate attribute is not
     * supported, or if the Rate field is equal to null and the value of the DefaultMoveRate attribute is equal to
     * null, then the device SHOULD move as fast as it is able. If the device is not able to move at a variable rate,
     * this field may be disregarded.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.2
     */
    rate: TlvField(1, TlvNullable(TlvUInt8)),

    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

export const enum StepMode {
    Up = 0,
    Down = 1
}

/**
 * Input to the LevelControl step command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
 */
export const TlvStepRequest = TlvObject({
    stepMode: TlvField(0, TlvEnum<StepMode>()),
    stepSize: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * Input to the LevelControl stop command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.4
 */
export const TlvStopRequest = TlvObject({ optionsMask: TlvField(0, TlvUInt8), optionsOverride: TlvField(1, TlvUInt8) });

export const LevelControlOptions = { executeIfOff: BitFlag(0), coupleColorTempToLevel: BitFlag(1) };

/**
 * Input to the LevelControl moveToLevelWithOnOff command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const TlvMoveToLevelWithOnOffRequest = TlvObject({
    level: TlvField(0, TlvUInt8),
    transitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(2, TlvBitmap(TlvUInt8, LevelControlOptions)),
    optionsOverride: TlvField(3, TlvBitmap(TlvUInt8, LevelControlOptions))
});

/**
 * Input to the LevelControl moveWithOnOff command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const TlvMoveWithOnOffRequest = TlvObject({
    moveMode: TlvField(0, TlvEnum<MoveMode>()),
    rate: TlvField(1, TlvNullable(TlvUInt8)),
    optionsMask: TlvField(2, TlvBitmap(TlvUInt8, LevelControlOptions)),
    optionsOverride: TlvField(3, TlvBitmap(TlvUInt8, LevelControlOptions))
});

/**
 * Input to the LevelControl stepWithOnOff command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const TlvStepWithOnOffRequest = TlvObject({
    stepMode: TlvField(0, TlvEnum<StepMode>()),
    stepSize: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(3, TlvBitmap(TlvUInt8, LevelControlOptions)),
    optionsOverride: TlvField(4, TlvBitmap(TlvUInt8, LevelControlOptions))
});

/**
 * Input to the LevelControl stopWithOnOff command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const TlvStopWithOnOffRequest = TlvObject({
    optionsMask: TlvField(0, TlvBitmap(TlvUInt8, LevelControlOptions)),
    optionsOverride: TlvField(1, TlvBitmap(TlvUInt8, LevelControlOptions))
});

/**
 * Input to the LevelControl moveToClosestFrequency command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
 */
export const TlvMoveToClosestFrequencyRequest = TlvObject({ frequency: TlvField(0, TlvUInt16) });

/**
 * These are optional features supported by LevelControlCluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.4
 */
export enum LevelControlFeature {
    /**
     * OnOff
     *
     * Dependency with the On/Off cluster
     */
    OnOff = "OnOff",

    /**
     * Lighting
     *
     * Behavior that supports lighting applications
     */
    Lighting = "Lighting",

    /**
     * Frequency
     *
     * Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency control.
     */
    Frequency = "Frequency"
}

/**
 * These elements and properties are present in all LevelControl clusters.
 */
export const LevelControlBase = BaseClusterComponent({
    id: 0x8,
    name: "LevelControl",
    revision: 1,

    features: {
        /**
         * OnOff
         *
         * Dependency with the On/Off cluster
         */
        onOff: BitFlag(0),

        /**
         * Lighting
         *
         * Behavior that supports lighting applications
         */
        lighting: BitFlag(1),

        /**
         * Frequency
         *
         * Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
         * control.
         */
        frequency: BitFlag(2)
    },

    attributes: {
        /**
         * The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
         * dependent.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.1
         */
        currentLevel: Attribute(0, TlvNullable(TlvUInt8), { scene: true, persistent: true, default: 0 }),

        /**
         * The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.3
         */
        minLevel: OptionalAttribute(2, TlvUInt8, { default: 0 }),

        /**
         * The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.4
         */
        maxLevel: OptionalAttribute(3, TlvUInt8.bound({ max: 254 }), { default: 0 }),

        /**
         * The Options attribute is meant to be changed only during commissioning. The Options attribute is a bitmap
         * that determines the default behavior of some cluster commands. Each command that is dependent on the Options
         * attribute shall first construct a temporary Options bitmap that is in effect during the command processing.
         * The temporary Options bitmap has the same format and meaning as the Options attribute, but includes any bits
         * that may be overridden by command fields.
         *
         * Below is the format and description of the Options attribute and temporary Options bitmap and the effect on
         * dependent commands.
         *
         * Table 19. Options Attribute
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
         */
        options: WritableAttribute(15, TlvBitmap(TlvUInt8, Options), { default: BitsFromPartial(Options, {}) }),

        /**
         * The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On or
         * Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a second.
         *
         * The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that if
         * the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be
         * implemented.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.9
         */
        onOffTransitionTime: OptionalWritableAttribute(16, TlvUInt16, { default: 0 }),

        /**
         * The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
         * attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
         * cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no effect.
         * For more details see Effect of On/Off Commands on the CurrentLevel Attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.10
         */
        onLevel: WritableAttribute(17, TlvNullable(TlvUInt8), { default: null }),

        /**
         * The OnTransitionTime attribute represents the time taken to move the current level from the minimum level to
         * the maximum level when an On command is received by an On/Off cluster on the same endpoint. It is specified
         * in 10ths of a second. If this attribute is not implemented, or contains a null value, the
         * OnOffTransitionTime will be used instead.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.11
         */
        onTransitionTime: OptionalWritableAttribute(18, TlvNullable(TlvUInt16), { default: null }),

        /**
         * The OffTransitionTime attribute represents the time taken to move the current level from the maximum level
         * to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It is
         * specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
         * OnOffTransitionTime will be used instead.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.12
         */
        offTransitionTime: OptionalWritableAttribute(19, TlvNullable(TlvUInt16), { default: null }),

        /**
         * The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is
         * received with a null value Rate parameter.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.13
         */
        defaultMoveRate: OptionalWritableAttribute(20, TlvNullable(TlvUInt8))
    },

    commands: {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
         */
        moveToLevel: Command(0, TlvMoveToLevelRequest, 0, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2
         */
        move: Command(1, TlvMoveRequest, 1, TlvNoResponse),

        /**
         * The StepMode field shall be one of the non-reserved values in Values of the StepMode Field.
         *
         * The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a second.
         * A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to this
         * as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as fast as it is
         * able.
         *
         * If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
         */
        step: Command(2, TlvStepRequest, 2, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.4
         */
        stop: Command(3, TlvStopRequest, 3, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
         */
        moveToLevelWithOnOff: Command(4, TlvMoveToLevelWithOnOffRequest, 4, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
         */
        moveWithOnOff: Command(5, TlvMoveWithOnOffRequest, 5, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
         */
        stepWithOnOff: Command(6, TlvStepWithOnOffRequest, 6, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
         */
        stopWithOnOff: Command(7, TlvStopWithOnOffRequest, 7, TlvNoResponse)
    }
});

/**
 * A LevelControlCluster supports these elements if it supports feature Lighting.
 */
export const LightingComponent = ClusterComponent({
    attributes: {
        /**
         * The RemainingTime attribute represents the time remaining until the current command is complete - it is
         * specified in 1/10ths of a second.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.2
         */
        remainingTime: Attribute(1, TlvUInt16, { default: 0 }),

        /**
         * The StartUpCurrentLevel attribute shall define the desired startup level for a device when it is supplied
         * with power and this level shall be reflected in the CurrentLevel attribute. The values of the
         * StartUpCurrentLevel attribute are listed below:
         *
         * Table 20. Values of the StartUpCurrentLevel attribute
         *
         * This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel
         * attribute shall return to its value prior to the restart.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.14
         */
        startUpCurrentLevel: WritableAttribute(
            16384,
            TlvNullable(TlvUInt8),
            { persistent: true, writeAcl: AccessLevel.Manage }
        )
    }
});

/**
 * A LevelControlCluster supports these elements if it supports feature Frequency.
 */
export const FrequencyComponent = ClusterComponent({
    attributes: {
        /**
         * The CurrentFrequency attribute represents the frequency at which the device is at CurrentLevel. A
         * CurrentFrequency of 0 is unknown.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.5
         */
        currentFrequency: Attribute(4, TlvUInt16, { scene: true, default: 0 }),

        /**
         * The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being
         * assigned. MinFrequency shall be less than or equal to MaxFrequency. A value of 0 indicates undefined.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.6
         */
        minFrequency: Attribute(5, TlvUInt16, { default: 0 }),

        /**
         * The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being
         * assigned. MaxFrequency shall be greater than or equal to MinFrequency. A value of 0 indicates undefined.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.7
         */
        maxFrequency: Attribute(6, TlvUInt16, { default: 0 })
    },

    commands: {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
         */
        moveToClosestFrequency: Command(8, TlvMoveToClosestFrequencyRequest, 8, TlvNoResponse)
    }
});

/**
 * Level Control
 *
 * This cluster provides an interface for controlling a characteristic of a device that can be set to a level, for
 * example the brightness of a light, the degree of closure of a door, or the power output of a heater.
 *
 * LevelControlCluster supports optional features that you can enable with the LevelControlCluster.with factory method.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6
 */
export const LevelControlCluster = ExtensibleCluster({
    ...LevelControlBase,

    /**
     * Use this factory method to create a LevelControl cluster with support for optional features. Include each
     * {@link LevelControlFeature} you wish to support.
     *
     * @param features the optional features to support
     * @returns a LevelControl cluster with specified features enabled
     * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
     */
    factory: <T extends `${LevelControlFeature}`[]>(...features: [...T]) => {
        validateFeatureSelection(features, LevelControlFeature);
        const cluster = Cluster({ ...LevelControlBase, supportedFeatures: BitFlags(LevelControlBase.features, ...features) });
        extendCluster(cluster, FrequencyComponent, { frequency: true });
        return cluster as unknown as LevelControlExtension<BitFlags<typeof LevelControlBase.features, T>>;
    }
});

export type LevelControlExtension<SF extends TypeFromPartialBitSchema<typeof LevelControlBase.features>> =
    ClusterForBaseCluster<typeof LevelControlBase, SF>
    & { supportedFeatures: SF }
    & (SF extends { lighting: true } ? typeof LightingComponent : {})
    & (SF extends { frequency: true } ? typeof FrequencyComponent : {});

/**
 * This cluster supports all LevelControl features. It may support illegal feature combinations.
 *
 * If you use this cluster you must manually specify which features are active and ensure the set of active features is
 * legal per the Matter specification.
 */
export const LevelControlComplete = Cluster({
    ...LevelControlCluster,
    attributes: { ...LightingComponent.attributes, ...FrequencyComponent.attributes },
    commands: { ...FrequencyComponent.commands }
});
