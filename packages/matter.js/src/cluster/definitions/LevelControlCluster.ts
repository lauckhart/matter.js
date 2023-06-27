/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel, OptionalAttribute, OptionalWritableAttribute, WritableAttribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvUInt8, TlvUInt16, TlvBitmap, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * The Options attribute is meant to be changed only during commissioning. The
 * Options attribute is a bitmap that determines the default behavior of some
 * cluster commands. Each command that is dependent on the Options attribute
 * SHALL first construct a temporary Options bitmap that is in effect during
 * the command processing. The temporary Options bitmap has the same format and
 * meaning as the Options attribute, but includes any bits that may be
 * overridden by command fields.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
 */
export const Options = TlvBitmap(TlvUInt8, {
    ExecuteIfOff: BitFlag(0),
    CoupleColorTempToLevel: BitFlag(1)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveToLevel command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
 */
export const MoveToLevelRequest = TlvObject({
    Level: TlvField(0, TlvUInt8),
    TransitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    OptionsMask: TlvField(2, OptionsMask),
    OptionsOverride: TlvField(3, OptionsOverride)
});

/**
 * The MoveMode field SHALL be one of the non-reserved values in Values of the
 * MoveMode Field.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.1
 */
export const enum MoveMode {};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The Move command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2
 */
export const MoveRequest = TlvObject({
    /**
     * The MoveMode field SHALL be one of the non-reserved values in Values of
     * the MoveMode Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.1
     */
    MoveMode: TlvField(0, TlvEnum<MoveMode>()),

    /**
     * The Rate field specifies the rate of movement in units per second. The
     * actual rate of movement SHOULD be as close to this rate as the device is
     * able. If the Rate field is equal to null, then the value in
     * DefaultMoveRate attribute SHALL be used. However, if the Rate field is
     * equal to null and the DefaultMoveRate attribute is not supported, or if
     * the Rate field is equal to null and the value of the DefaultMoveRate
     * attribute is equal to null, then the device SHOULD move as fast as it is
     * able. If the device is not able to move at a variable rate, this field
     * MAY be disregarded.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.2
     */
    Rate: TlvField(1, TlvNullable(TlvUInt8)),

    OptionsMask: TlvField(2, OptionsMask),
    OptionsOverride: TlvField(3, OptionsOverride)
});

export const enum StepMode {};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The Step command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
 */
export const StepRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<StepMode>()),
    StepSize: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvNullable(TlvUInt16)),
    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The Stop command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.4
 */
export const StopRequest = TlvObject({
    OptionsMask: TlvField(0, OptionsMask),
    OptionsOverride: TlvField(1, OptionsOverride)
});

export const LevelControlOptions = TlvBitmap(TlvUInt8, {
    ExecuteIfOff: BitFlag(1),
    CoupleColorTempToLevel: BitFlag(2)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const MoveToLevelWithOnOffRequest = TlvObject({
    Level: TlvField(0, TlvUInt8),
    TransitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    OptionsMask: TlvField(2, LevelControlOptions),
    OptionsOverride: TlvField(3, LevelControlOptions)
});

export const enum MoveMode {
    Up = 0,
    Down = 1
};

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const MoveWithOnOffRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<MoveMode>()),
    Rate: TlvField(1, TlvNullable(TlvUInt8)),
    OptionsMask: TlvField(2, LevelControlOptions),
    OptionsOverride: TlvField(3, LevelControlOptions)
});

export const enum StepMode {
    Up = 0,
    Down = 1
};

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const StepWithOnOffRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<StepMode>()),
    StepSize: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvNullable(TlvUInt16)),
    OptionsMask: TlvField(3, LevelControlOptions),
    OptionsOverride: TlvField(4, LevelControlOptions)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
 */
export const StopWithOnOffRequest = TlvObject({
    OptionsMask: TlvField(0, LevelControlOptions),
    OptionsOverride: TlvField(1, LevelControlOptions)
});

/**
 * The MoveToClosestFrequency command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
 */
export const MoveToClosestFrequencyRequest = TlvObject({ Frequency: TlvField(0, TlvUInt16) });

export namespace LevelControlCluster {
    /**
     * Level Control
     *
     * Attributes and commands for controlling devices that can be set to a
     * level between fully 'On' and fully 'Off.'
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `LevelControl.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6
     */
    export const Complete = Cluster({
        id: 0x8,
        name: "LevelControl",
        revision: 1,
        features: {
            ONOFF: BitFlag(0),
            LIGHTING: BitFlag(1),
            FREQUENCY: BitFlag(2)
        },

        attributes: {
            /**
             * The CurrentLevel attribute represents the current level of this
             * device. The meaning of 'level' is device dependent.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.1
             */
            currentLevel: Attribute(0, TlvNullable(TlvUInt8), { scene: true, persistent: true, readAcl: AccessLevel.View }),

            /**
             * The RemainingTime attribute represents the time remaining until
             * the current command is complete - it is specified in 1/10ths of
             * a second.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.2
             */
            remainingTime: OptionalAttribute(1, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The MinLevel attribute indicates the minimum value of
             * CurrentLevel that is capable of being assigned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.3
             */
            minLevel: OptionalAttribute(2, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * The MaxLevel attribute indicates the maximum value of
             * CurrentLevel that is capable of being assigned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.4
             */
            maxLevel: OptionalAttribute(3, TlvUInt8, { default: 254, readAcl: AccessLevel.View }),

            /**
             * The CurrentFrequency attribute represents the frequency at which
             * the device is at CurrentLevel. A CurrentFrequency of 0 is
             * unknown.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.5
             */
            currentFrequency: OptionalAttribute(4, TlvUInt16, { scene: true, readAcl: AccessLevel.View }),

            /**
             * The MinFrequency attribute indicates the minimum value of
             * CurrentFrequency that is capable of being assigned. MinFrequency
             * SHALL be less than or equal to MaxFrequency. A value of 0
             * indicates undefined.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.6
             */
            minFrequency: OptionalAttribute(5, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The MaxFrequency attribute indicates the maximum value of
             * CurrentFrequency that is capable of being assigned. MaxFrequency
             * SHALL be greater than or equal to MinFrequency. A value of 0
             * indicates undefined.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.7
             */
            maxFrequency: OptionalAttribute(6, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The OnOffTransitionTime attribute represents the time taken to
             * move to or from the target level when On or Off commands are
             * received by an On/Off cluster on the same endpoint. It is
             * specified in 1/10ths of a second.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.9
             */
            onOffTransitionTime: OptionalWritableAttribute(16, TlvUInt16),

            /**
             * The OnLevel attribute determines the value that the CurrentLevel
             * attribute is set to when the OnOff attribute of an On/Off
             * cluster on the same endpoint is set to TRUE, as a result of
             * processing an On/Off cluster command. If the OnLevel attribute
             * is not implemented, or is set to the null value, it has no
             * effect. For more details see Effect of On/Off Commands on the
             * CurrentLevel Attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.10
             */
            onLevel: WritableAttribute(17, TlvNullable(TlvUInt8), { default: null }),

            /**
             * The OnTransitionTime attribute represents the time taken to move
             * the current level from the minimum level to the maximum level
             * when an On command is received by an On/Off cluster on the same
             * endpoint. It is specified in 10ths of a second. If this
             * attribute is not implemented, or contains a null value, the
             * OnOffTransitionTime will be used instead.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.11
             */
            onTransitionTime: OptionalWritableAttribute(18, TlvNullable(TlvUInt16), { default: null }),

            /**
             * The OffTransitionTime attribute represents the time taken to
             * move the current level from the maximum level to the minimum
             * level when an Off command is received by an On/Off cluster on
             * the same endpoint. It is specified in 10ths of a second. If this
             * attribute is not implemented, or contains a null value, the
             * OnOffTransitionTime will be used instead.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.12
             */
            offTransitionTime: OptionalWritableAttribute(19, TlvNullable(TlvUInt16), { default: null }),

            /**
             * The DefaultMoveRate attribute determines the movement rate, in
             * units per second, when a Move command is received with a null
             * value Rate parameter.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.13
             */
            defaultMoveRate: OptionalWritableAttribute(20, TlvNullable(TlvUInt8)),

            /**
             * The Options attribute is meant to be changed only during
             * commissioning. The Options attribute is a bitmap that determines
             * the default behavior of some cluster commands. Each command that
             * is dependent on the Options attribute SHALL first construct a
             * temporary Options bitmap that is in effect during the command
             * processing. The temporary Options bitmap has the same format and
             * meaning as the Options attribute, but includes any bits that may
             * be overridden by command fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
             */
            options: WritableAttribute(15, Options),

            /**
             * The StartUpCurrentLevel attribute SHALL define the desired
             * startup level for a device when it is supplied with power and
             * this level SHALL be reflected in the CurrentLevel attribute. The
             * values of the StartUpCurrentLevel attribute are listed below:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.14
             */
            startUpCurrentLevel: OptionalWritableAttribute(16384, TlvNullable(TlvUInt8), { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage })
        },

        commands: {
            /**
             * The MoveToLevel command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
             */
            moveToLevel: Command(0, MoveToLevelRequest, 0, TlvNoResponse),

            /**
             * The Move command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2
             */
            move: Command(1, MoveRequest, 1, TlvNoResponse),

            /**
             * The Step command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
             */
            step: Command(2, StepRequest, 2, TlvNoResponse),

            /**
             * The Stop command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.4
             */
            stop: Command(3, StopRequest, 3, TlvNoResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
             */
            moveToLevelWithOnOff: Command(4, MoveToLevelWithOnOffRequest, 4, TlvNoResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
             */
            moveWithOnOff: Command(5, MoveWithOnOffRequest, 5, TlvNoResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
             */
            stepWithOnOff: Command(6, StepWithOnOffRequest, 6, TlvNoResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
             */
            stopWithOnOff: Command(7, StopWithOnOffRequest, 7, TlvNoResponse),

            /**
             * The MoveToClosestFrequency command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
             */
            moveToClosestFrequency: OptionalCommand(8, MoveToClosestFrequencyRequest, 8, TlvNoResponse)
        }
    });
};