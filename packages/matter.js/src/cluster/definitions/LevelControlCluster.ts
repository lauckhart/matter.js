/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel, OptionalAttribute, WritableAttribute, OptionalWritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * Level Control
 *
 * Attributes and commands for controlling devices that can be set to a level between fully 'On' and fully 'Off.'
 *
 * This function creates a LevelControl cluster supporting a specific set of features.  Include each
 * {@link LevelControlCluster.Feature} you wish to support.
 *
 * @param features a list of {@link LevelControlCluster.Feature} to support
 * @returns a LevelControl cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6
 */
export function LevelControlCluster<T extends LevelControlCluster.Feature[]>(...features: [ ...T ]) {
    const cluster = {
        ...LevelControlCluster.Metadata,
        supportedFeatures: BitFlags(LevelControlCluster.Metadata.features, ...features),
        ...LevelControlCluster.BaseComponent
    };
    extendCluster(cluster, LevelControlCluster.LightingComponent, { lighting: true });
    extendCluster(cluster, LevelControlCluster.FrequencyComponent, { frequency: true });
    return cluster as unknown as LevelControlCluster.Type<BitFlags<typeof LevelControlCluster.Metadata.features, T>>;
};

/**
 * The Options attribute is meant to be changed only during commissioning. The Options attribute is a bitmap that
 * determines the default behavior of some cluster commands. Each command that is dependent on the Options attribute
 * SHALL first construct a temporary Options bitmap that is in effect during the command processing. The temporary
 * Options bitmap has the same format and meaning as the Options attribute, but includes any bits that may be
 * overridden by command fields.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
 */
export const TlvOptionsBits = { executeIfOff: BitFlag(0), coupleColorTempToLevel: BitFlag(1) };

export const TlvOptions = TlvBitmap(TlvUInt8, TlvOptionsBits);

/**
 * The MoveToLevel command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
 */
export const TlvMoveToLevelRequest = TlvObject({
    level: TlvField(0, TlvUInt8.bound({ max: 254 })),
    transitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

export const enum TlvMoveMode {
    Up = 0,
    Down = 1
};

/**
 * The Move command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2
 */
export const TlvMoveRequest = TlvObject({
    /**
     * The MoveMode field SHALL be one of the non-reserved values in Values of the MoveMode Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.1
     */
    moveMode: TlvField(0, TlvEnum<TlvMoveMode>()),

    /**
     * The Rate field specifies the rate of movement in units per second. The actual rate of movement SHOULD be as
     * close to this rate as the device is able. If the Rate field is equal to null, then the value in DefaultMoveRate
     * attribute SHALL be used. However, if the Rate field is equal to null and the DefaultMoveRate attribute is not
     * supported, or if the Rate field is equal to null and the value of the DefaultMoveRate attribute is equal to
     * null, then the device SHOULD move as fast as it is able. If the device is not able to move at a variable rate,
     * this field MAY be disregarded.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.2
     */
    rate: TlvField(1, TlvNullable(TlvUInt8)),

    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

export const enum TlvStepMode {
    Up = 0,
    Down = 1
};

/**
 * The Step command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
 */
export const TlvStepRequest = TlvObject({
    stepMode: TlvField(0, TlvEnum<TlvStepMode>()),
    stepSize: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The Stop command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.4
 */
export const TlvStopRequest = TlvObject({ optionsMask: TlvField(0, TlvUInt8), optionsOverride: TlvField(1, TlvUInt8) });

export const TlvLevelControlOptionsBits = { executeIfOff: BitFlag(1), coupleColorTempToLevel: BitFlag(2) };

export const TlvLevelControlOptions = TlvBitmap(TlvUInt8, TlvLevelControlOptionsBits);

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const TlvMoveToLevelWithOnOffRequest = TlvObject({
    level: TlvField(0, TlvUInt8),
    transitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(2, TlvLevelControlOptions),
    optionsOverride: TlvField(3, TlvLevelControlOptions)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const TlvMoveWithOnOffRequest = TlvObject({
    moveMode: TlvField(0, TlvEnum<TlvMoveMode>()),
    rate: TlvField(1, TlvNullable(TlvUInt8)),
    optionsMask: TlvField(2, TlvLevelControlOptions),
    optionsOverride: TlvField(3, TlvLevelControlOptions)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const TlvStepWithOnOffRequest = TlvObject({
    stepMode: TlvField(0, TlvEnum<TlvStepMode>()),
    stepSize: TlvField(1, TlvUInt8),
    transitionTime: TlvField(2, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(3, TlvLevelControlOptions),
    optionsOverride: TlvField(4, TlvLevelControlOptions)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const TlvStopWithOnOffRequest = TlvObject({
    optionsMask: TlvField(0, TlvLevelControlOptions),
    optionsOverride: TlvField(1, TlvLevelControlOptions)
});

/**
 * The MoveToClosestFrequency command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
 */
export const TlvMoveToClosestFrequencyRequest = TlvObject({ frequency: TlvField(0, TlvUInt16) });

export namespace LevelControlCluster {
    /**
     * These are optional features supported by LevelControlCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.4
     */
    export enum Feature {
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
         * Supports frequency attributes and behavior. The Pulse Width Modulation cluster was created for frequency
         * control.
         */
        Frequency = "Frequency"
    };

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> = 
        typeof Metadata
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { lighting: true } ? typeof LightingComponent : {})
        & (T extends { frequency: true } ? typeof FrequencyComponent : {});

    /**
     * LevelControl cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6
     */
    export const Metadata = ClusterMetadata({
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
        }
    });

    /**
     * A LevelControlCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
             * dependent.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.1
             */
            currentLevel: Attribute(0, TlvNullable(TlvUInt8), { scene: true, persistent: true, readAcl: AccessLevel.View }),

            /**
             * The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.3
             */
            minLevel: OptionalAttribute(2, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.4
             */
            maxLevel: OptionalAttribute(3, TlvUInt8.bound({ max: 254 }), { readAcl: AccessLevel.View }),

            /**
             * The Options attribute is meant to be changed only during commissioning. The Options attribute is a
             * bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
             * the Options attribute SHALL first construct a temporary Options bitmap that is in effect during the
             * command processing. The temporary Options bitmap has the same format and meaning as the Options
             * attribute, but includes any bits that may be overridden by command fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
             */
            options: WritableAttribute(15, TlvOptions, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }),

            /**
             * The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On
             * or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a
             * second.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.9
             */
            onOffTransitionTime: OptionalWritableAttribute(
                16,
                TlvUInt16,
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
             * attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
             * cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no
             * effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.10
             */
            onLevel: WritableAttribute(
                17,
                TlvNullable(TlvUInt8),
                { default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * The OnTransitionTime attribute represents the time taken to move the current level from the minimum
             * level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
             * is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
             * OnOffTransitionTime will be used instead.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.11
             */
            onTransitionTime: OptionalWritableAttribute(
                18,
                TlvNullable(TlvUInt16),
                { default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * The OffTransitionTime attribute represents the time taken to move the current level from the maximum
             * level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
             * is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
             * OnOffTransitionTime will be used instead.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.12
             */
            offTransitionTime: OptionalWritableAttribute(
                19,
                TlvNullable(TlvUInt16),
                { default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is
             * received with a null value Rate parameter.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.13
             */
            defaultMoveRate: OptionalWritableAttribute(
                20,
                TlvNullable(TlvUInt8),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            )
        },

        commands: {
            /**
             * The MoveToLevel command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
             */
            moveToLevel: Command(0, TlvMoveToLevelRequest, 0, TlvNoResponse),

            /**
             * The Move command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2
             */
            move: Command(1, TlvMoveRequest, 1, TlvNoResponse),

            /**
             * The Step command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
             */
            step: Command(2, TlvStepRequest, 2, TlvNoResponse),

            /**
             * The Stop command SHALL have the following data fields:
             *
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
            remainingTime: Attribute(1, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The StartUpCurrentLevel attribute SHALL define the desired startup level for a device when it is
             * supplied with power and this level SHALL be reflected in the CurrentLevel attribute. The values of the
             * StartUpCurrentLevel attribute are listed below:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.14
             */
            startUpCurrentLevel: WritableAttribute(
                16384,
                TlvNullable(TlvUInt8),
                { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
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
            currentFrequency: Attribute(4, TlvUInt16, { scene: true, readAcl: AccessLevel.View }),

            /**
             * The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being
             * assigned. MinFrequency SHALL be less than or equal to MaxFrequency. A value of 0 indicates undefined.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.6
             */
            minFrequency: Attribute(5, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being
             * assigned. MaxFrequency SHALL be greater than or equal to MinFrequency. A value of 0 indicates undefined.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.7
             */
            maxFrequency: Attribute(6, TlvUInt16, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * The MoveToClosestFrequency command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
             */
            moveToClosestFrequency: Command(8, TlvMoveToClosestFrequencyRequest, 8, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all LevelControl features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = {
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...LightingComponent.attributes, ...FrequencyComponent.attributes },
        commands: { ...BaseComponent.commands, ...FrequencyComponent.commands }
    };
};
