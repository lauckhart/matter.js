/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, OptionalAttribute, Attribute, WritableAttribute, OptionalWritableAttribute, AccessLevel, OptionalCommand, TlvNoResponse } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvUInt8, TlvUInt16, TlvEnum, TlvBitmap, TlvInt16 } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

export const enum ColorControlDriftCompensation {};

export const enum ColorControlColorMode {};

export const ColorControlOptions = TlvBitmap(TlvUInt8, { ExecuteIfOff: BitFlag(1) });

/**
 * The Direction field SHALL be one of the non-reserved values in Values of the
 * Direction Field.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4.2
 */
export const enum Direction {
    Shortestdistance = 0,
    Longestdistance = 1,
    Up = 2,
    Down = 3
};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveToHue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4
 */
export const MoveToHueRequest = TlvObject({
    /**
     * The Hue field specifies the hue to be moved to.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4.1
     */
    Hue: TlvField(0, TlvUInt8),

    /**
     * The Direction field SHALL be one of the non-reserved values in Values of
     * the Direction Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4.2
     */
    Direction: TlvField(1, TlvEnum<Direction>()),

    /**
     * The TransitionTime field specifies, in 1/10ths of a second, the time
     * that SHALL be taken to move to the new hue.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4.3
     */
    TransitionTime: TlvField(2, TlvUInt16),

    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

/**
 * The MoveMode field SHALL be one of the non-reserved values in Values of the
 * MoveMode Field. If the MoveMode field is equal to 0 (Stop), the Rate field
 * SHALL be ignored.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5.1
 */
export const enum MoveMode {
    Stop = 0,
    Up = 1,
    Down = 3
};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveHue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5
 */
export const MoveHueRequest = TlvObject({
    /**
     * The MoveMode field SHALL be one of the non-reserved values in Values of
     * the MoveMode Field. If the MoveMode field is equal to 0 (Stop), the Rate
     * field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5.1
     */
    MoveMode: TlvField(0, TlvEnum<MoveMode>()),

    /**
     * The Rate field specifies the rate of movement in steps per second. A
     * step is a change in the device’s hue of one unit. If the MoveMode field
     * is set to 1 (up) or 3 (down) and the Rate field has a value of zero, the
     * command has no effect and a response command SHALL be sent in response,
     * with the status code set to INVALID_COMMAND. If the MoveMode field is
     * set to 0 (stop) the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5.2
     */
    Rate: TlvField(1, TlvUInt8),

    OptionsMask: TlvField(2, OptionsMask),
    OptionsOverride: TlvField(3, OptionsOverride)
});

/**
 * The StepMode field SHALL be one of the non-reserved values in Values of the
 * StepMode Field.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6.1
 */
export const enum StepMode {
    Up = 1,
    Down = 3
};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The StepHue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6
 */
export const StepHueRequest = TlvObject({
    /**
     * The StepMode field SHALL be one of the non-reserved values in Values of
     * the StepMode Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6.1
     */
    StepMode: TlvField(0, TlvEnum<StepMode>()),

    /**
     * The change to be added to (or subtracted from) the current value of the
     * device’s hue.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6.2
     */
    StepSize: TlvField(1, TlvUInt8),

    /**
     * The TransitionTime field specifies, in 1/10ths of a second, the time
     * that SHALL be taken to perform the step. A step is a change in the
     * device’s hue of ‘Step size’ units.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6.3
     */
    TransitionTime: TlvField(2, TlvUInt8),

    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveToSaturation command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.7
 */
export const MoveToSaturationRequest = TlvObject({
    Saturation: TlvField(0, TlvUInt8),
    TransitionTime: TlvField(1, TlvUInt16),
    OptionsMask: TlvField(2, OptionsMask),
    OptionsOverride: TlvField(3, OptionsOverride)
});

/**
 * The MoveMode field SHALL be one of the non-reserved values in Values of the
 * MoveMode Field. If the MoveMode field is equal to 0 (Stop), the Rate field
 * SHALL be ignored.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8.1
 */
export const enum MoveMode {
    Stop = 0,
    Up = 1,
    Down = 3
};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveSaturation command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8
 */
export const MoveSaturationRequest = TlvObject({
    /**
     * The MoveMode field SHALL be one of the non-reserved values in Values of
     * the MoveMode Field. If the MoveMode field is equal to 0 (Stop), the Rate
     * field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8.1
     */
    MoveMode: TlvField(0, TlvEnum<MoveMode>()),

    /**
     * The Rate field specifies the rate of movement in steps per second. A
     * step is a change in the device’s
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8.2
     */
    Rate: TlvField(1, TlvUInt8),

    OptionsMask: TlvField(2, OptionsMask),
    OptionsOverride: TlvField(3, OptionsOverride)
});

/**
 * The StepMode field SHALL be one of the non-reserved values in Values of the
 * StepMode Field.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9.1
 */
export const enum StepMode {
    Up = 1,
    Down = 3
};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The StepSaturation command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9
 */
export const StepSaturationRequest = TlvObject({
    /**
     * The StepMode field SHALL be one of the non-reserved values in Values of
     * the StepMode Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9.1
     */
    StepMode: TlvField(0, TlvEnum<StepMode>()),

    /**
     * The change to be added to (or subtracted from) the current value of the
     * device’s saturation.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9.2
     */
    StepSize: TlvField(1, TlvUInt8),

    /**
     * The TransitionTime field specifies, in 1/10ths of a second, the time
     * that SHALL be taken to perform the step. A step is a change in the
     * device’s saturation of ‘Step size’ units.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9.3
     */
    TransitionTime: TlvField(2, TlvUInt8),

    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveToHueAndSaturation command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.10
 */
export const MoveToHueAndSaturationRequest = TlvObject({
    Hue: TlvField(0, TlvUInt8),
    Saturation: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveToColor command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.11
 */
export const MoveToColorRequest = TlvObject({
    ColorX: TlvField(0, TlvUInt16),
    ColorY: TlvField(1, TlvUInt16),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveColor command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12
 */
export const MoveColorRequest = TlvObject({
    /**
     * The RateX field specifies the rate of movement in steps per second. A
     * step is a change in the device’s CurrentX attribute of one unit.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12.1
     */
    RateX: TlvField(0, TlvInt16),

    /**
     * The RateY field specifies the rate of movement in steps per second. A
     * step is a change in the device’s CurrentY attribute of one unit.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12.2
     */
    RateY: TlvField(1, TlvInt16),

    OptionsMask: TlvField(2, OptionsMask),
    OptionsOverride: TlvField(3, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The StepColor command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.13
 */
export const StepColorRequest = TlvObject({
    StepX: TlvField(0, TlvInt16),
    StepY: TlvField(1, TlvInt16),

    /**
     * The TransitionTime field specifies, in 1/10ths of a second, the time
     * that SHALL be taken to perform the color change.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.13.2
     */
    TransitionTime: TlvField(2, TlvUInt16),

    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveToColorTemperature command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.14
 */
export const MoveToColorTemperatureRequest = TlvObject({
    ColorTemperatureMireds: TlvField(0, TlvUInt16),
    TransitionTime: TlvField(1, TlvUInt16),
    OptionsMask: TlvField(2, OptionsMask),
    OptionsOverride: TlvField(3, OptionsOverride)
});

/**
 * This field is identical to the Direction field of the MoveToHue command of
 * the Color Control cluster (see sub-clause Use of the OptionsMask and
 * OptionsOverride fields).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15.2
 */
export const enum Direction {};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The EnhancedMoveToHue command allows lamps to be moved in a smooth
 * continuous transition from their current hue to a target hue.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15
 */
export const EnhancedMoveToHueRequest = TlvObject({
    /**
     * The EnhancedHue field specifies the target extended hue for the lamp.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15.1
     */
    EnhancedHue: TlvField(0, TlvUInt16),

    /**
     * This field is identical to the Direction field of the MoveToHue command
     * of the Color Control cluster (see sub-clause Use of the OptionsMask and
     * OptionsOverride fields).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15.2
     */
    Direction: TlvField(1, TlvEnum<Direction>()),

    /**
     * This field is identical to the TransitionTime field of the MoveToHue
     * command of the Color Control cluster (see sub-clause Use of the
     * OptionsMask and OptionsOverride fields).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15.3
     */
    TransitionTime: TlvField(2, TlvUInt16),

    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

/**
 * This field is identical to the MoveMode field of the MoveHue command of the
 * Color Control cluster (see sub-clause MoveHue Command). If the MoveMode
 * field is equal to 0 (Stop), the Rate field SHALL be ignored.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16.1
 */
export const enum MoveMode {};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The EnhancedMoveHue command allows lamps to be moved in a continuous stepped
 * transition from their current hue to a target hue.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16
 */
export const EnhancedMoveHueRequest = TlvObject({
    /**
     * This field is identical to the MoveMode field of the MoveHue command of
     * the Color Control cluster (see sub-clause MoveHue Command). If the
     * MoveMode field is equal to 0 (Stop), the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16.1
     */
    MoveMode: TlvField(0, TlvEnum<MoveMode>()),

    /**
     * The Rate field specifies the rate of movement in steps per second. A
     * step is a change in the extended hue of a device by one unit. If the
     * MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a
     * value of zero, the command has no effect and a response command SHALL be
     * sent in response, with the status code set to INVALID_COMMAND. If the
     * MoveMode field is set to 0 (stop) the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16.2
     */
    Rate: TlvField(1, TlvUInt16),

    OptionsMask: TlvField(2, OptionsMask),
    OptionsOverride: TlvField(3, OptionsOverride)
});

/**
 * This field is identical to the StepMode field of the StepHue command of the
 * Color Control cluster (see sub-clause StepHue Command).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17.1
 */
export const enum StepMode {};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The EnhancedStepHue command allows lamps to be moved in a stepped transition
 * from their current hue to a target hue, resulting in a linear transition
 * through XY space.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17
 */
export const EnhancedStepHueRequest = TlvObject({
    /**
     * This field is identical to the StepMode field of the StepHue command of
     * the Color Control cluster (see sub-clause StepHue Command).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17.1
     */
    StepMode: TlvField(0, TlvEnum<StepMode>()),

    /**
     * The StepSize field specifies the change to be added to (or subtracted
     * from) the current value of the device’s enhanced hue.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17.2
     */
    StepSize: TlvField(1, TlvUInt16),

    /**
     * The TransitionTime field specifies, in units of 1/10ths of a second, the
     * time that SHALL be taken to perform the step. A step is a change to the
     * device’s enhanced hue of a magnitude corresponding to the StepSize field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17.3
     */
    TransitionTime: TlvField(2, TlvUInt16),

    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a
 * smooth continuous transition from their current hue to a target hue and from
 * their current saturation to a target saturation.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18
 */
export const EnhancedMoveToHueAndSaturationRequest = TlvObject({
    /**
     * The EnhancedHue field specifies the target extended hue for the lamp.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18.1
     */
    EnhancedHue: TlvField(0, TlvUInt16),

    /**
     * This field is identical to the Saturation field of the
     * MoveToHueAndSaturation command of the Color Control cluster (see
     * sub-clause MoveToHueAndSaturation Command).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18.2
     */
    Saturation: TlvField(1, TlvUInt8),

    /**
     * This field is identical to the TransitionTime field of the MoveToHue
     * command of the Color Control cluster (see sub-clause
     * MoveToHueAndSaturation Command).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18.3
     */
    TransitionTime: TlvField(2, TlvUInt16),

    OptionsMask: TlvField(3, OptionsMask),
    OptionsOverride: TlvField(4, OptionsOverride)
});

/**
 * The UpdateFlags field specifies which color loop attributes to update before
 * the color loop is started. This field SHALL be formatted as illustrated in
 * Format of the UpdateFlags Field of the ColorLoopSet Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.1
 */
export const UpdateFlags = TlvBitmap(TlvUInt8, {});

/**
 * The Action field specifies the action to take for the color loop if the
 * UpdateAction sub-field of the UpdateFlags field is set to 1. This field
 * SHALL be set to one of the non-reserved values listed in Values of the
 * Action Field of the ColorLoopSet Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.2
 */
export const enum Action {
    DeActivatethecolorloop = 0,
    ActivatethecolorloopfromthevalueintheColorLoopStartEnhancedHuefield = 1,
    ActivatethecolorloopfromthevalueoftheEnhancedCurrentHueattribute = 2
};

/**
 * The Direction field specifies the direction for the color loop if the Update
 * Direction field of the UpdateFlags field is set to 1. This field SHALL be
 * set to one of the non-reserved values listed in Values of the Direction
 * Field of the ColorLoopSet Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.3
 */
export const enum Direction {
    Decrementthehueinthecolorloop = 0,
    Incrementthehueinthecolorloop = 1
};

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The Color Loop Set command allows a color loop to be activated such that the
 * color lamp cycles through its range of hues.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19
 */
export const ColorLoopSetRequest = TlvObject({
    /**
     * The UpdateFlags field specifies which color loop attributes to update
     * before the color loop is started. This field SHALL be formatted as
     * illustrated in Format of the UpdateFlags Field of the ColorLoopSet
     * Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.1
     */
    UpdateFlags: TlvField(0, UpdateFlags),

    /**
     * The Action field specifies the action to take for the color loop if the
     * UpdateAction sub-field of the UpdateFlags field is set to 1. This field
     * SHALL be set to one of the non-reserved values listed in Values of the
     * Action Field of the ColorLoopSet Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.2
     */
    Action: TlvField(1, TlvEnum<Action>()),

    /**
     * The Direction field specifies the direction for the color loop if the
     * Update Direction field of the UpdateFlags field is set to 1. This field
     * SHALL be set to one of the non-reserved values listed in Values of the
     * Direction Field of the ColorLoopSet Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.3
     */
    Direction: TlvField(2, TlvEnum<Direction>()),

    /**
     * The Time field specifies the number of seconds over which to perform a
     * full color loop if the UpdateTime sub-field of the UpdateFlags field is
     * set to 1.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.4
     */
    Time: TlvField(3, TlvUInt16),

    StartHue: TlvField(4, TlvUInt16),
    OptionsMask: TlvField(5, OptionsMask),
    OptionsOverride: TlvField(6, OptionsOverride)
});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The StopMoveStep command is provided to allow MoveTo and Step commands to be
 * stopped. (Note this automatically provides symmetry to the Level Control
 * cluster.)
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.20
 */
export const StopMoveStepRequest = TlvObject({
    OptionsMask: TlvField(0, OptionsMask),
    OptionsOverride: TlvField(1, OptionsOverride)
});

/**
 * This field is identical to the MoveMode field of the MoveHue command of the
 * Color Control cluster
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.1
 */
export const MoveMode = TlvBitmap(TlvUInt8, {});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The MoveColorTemperature command allows the color temperature of a lamp to
 * be moved at a specified rate.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21
 */
export const MoveColorTemperatureRequest = TlvObject({
    /**
     * This field is identical to the MoveMode field of the MoveHue command of
     * the Color Control cluster
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.1
     */
    MoveMode: TlvField(0, MoveMode),

    /**
     * The Rate field specifies the rate of movement in steps per second. A
     * step is a change in the color temperature of a device by one unit. If
     * the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a
     * value of zero, the command has no effect and a response command SHALL be
     * sent in response, with the status code set to INVALID_COMMAND. If the
     * MoveMode field is set to 0 (stop) the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.2
     */
    Rate: TlvField(1, TlvUInt16),

    /**
     * The ColorTemperatureMinimumMireds field specifies a lower bound on the
     * ColorTemperatureMireds attribute (≡ an upper bound on the color
     * temperature in kelvins) for the current move operation such that:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.3
     */
    ColorTemperatureMinimumMireds: TlvField(2, TlvUInt16),

    /**
     * The ColorTemperatureMaximumMireds field specifies an upper bound on the
     * ColorTemperatureMireds attribute (≡ a lower bound on the color
     * temperature in kelvins) for the current move operation such that:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.4
     */
    ColorTemperatureMaximumMireds: TlvField(3, TlvUInt16),

    OptionsMask: TlvField(4, OptionsMask),
    OptionsOverride: TlvField(5, OptionsOverride)
});

/**
 * This field is identical to the StepMode field of the StepHue command of the
 * Color Control cluster (see sub-clause StepHue Command).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.1
 */
export const StepMode = TlvBitmap(TlvUInt8, {});

export const OptionsMask = TlvBitmap(TlvUInt8, {});

export const OptionsOverride = TlvBitmap(TlvUInt8, {});

/**
 * The StepColorTemperature command allows the color temperature of a lamp to
 * be stepped with a specified step size.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22
 */
export const StepColorTemperatureRequest = TlvObject({
    /**
     * This field is identical to the StepMode field of the StepHue command of
     * the Color Control cluster (see sub-clause StepHue Command).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.1
     */
    StepMode: TlvField(0, StepMode),

    /**
     * The StepSize field specifies the change to be added to (or subtracted
     * from) the current value of the device’s color temperature.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.2
     */
    StepSize: TlvField(1, TlvUInt16),

    /**
     * The TransitionTime field specifies, in units of 1/10ths of a second, the
     * time that SHALL be taken to perform the step. A step is a change to the
     * device’s color temperature of a magnitude corresponding to the StepSize
     * field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.3
     */
    TransitionTime: TlvField(2, TlvUInt16),

    /**
     * The ColorTemperatureMinimumMireds field specifies a lower bound on the
     * ColorTemperatureMireds attribute (≡ an upper bound on the color
     * temperature in kelvins) for the current step operation such that:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.4
     */
    ColorTemperatureMinimumMireds: TlvField(3, TlvUInt16),

    /**
     * The ColorTemperatureMaximumMireds field specifies an upper bound on the
     * ColorTemperatureMireds attribute (≡ a lower bound on the color
     * temperature in kelvins) for the current step operation such that:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.5
     */
    ColorTemperatureMaximumMireds: TlvField(4, TlvUInt16),

    OptionsMask: TlvField(5, OptionsMask),
    OptionsOverride: TlvField(6, OptionsOverride)
});

export namespace ColorControlCluster {
    /**
     * Color Control
     *
     * Attributes and commands for controlling the color properties of a
     * color-capable light.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `ColorControl.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2
     */
    export const Complete = Cluster({
        id: 0x300,
        name: "ColorControl",
        revision: 1,

        features: {
            HS: BitFlag(0),
            EHUE: BitFlag(1),
            CL: BitFlag(2),
            XY: BitFlag(3),
            CT: BitFlag(4)
        },

        attributes: {
            colorControlCurrentHue: OptionalAttribute(0, TlvUInt8),
            colorControlCurrentSaturation: OptionalAttribute(1, TlvUInt8),
            colorControlRemainingTime: OptionalAttribute(2, TlvUInt16),
            colorControlCurrentX: OptionalAttribute(3, TlvUInt16, { default: 24939 }),
            colorControlCurrentY: OptionalAttribute(4, TlvUInt16, { default: 24701 }),
            colorControlDriftCompensation: OptionalAttribute(5, TlvEnum<ColorControlDriftCompensation>()),
            colorControlCompensationText: OptionalAttribute(6, TlvString),
            colorControlColorTemperature: OptionalAttribute(7, TlvUInt16, { default: 250 }),
            colorControlColorMode: Attribute(8, TlvEnum<ColorControlColorMode>(), { default: 1 }),
            colorControlOptions: WritableAttribute(15, ColorControlOptions),
            colorControlNumberOfPrimaries: Attribute(16, TlvNullable(TlvUInt8)),
            colorControlPrimary1X: OptionalAttribute(17, TlvUInt16),
            colorControlPrimary1Y: OptionalAttribute(18, TlvUInt16),
            colorControlPrimary1Intensity: OptionalAttribute(19, TlvNullable(TlvUInt8)),
            colorControlPrimary2X: OptionalAttribute(21, TlvUInt16),
            colorControlPrimary2Y: OptionalAttribute(22, TlvUInt16),
            colorControlPrimary2Intensity: OptionalAttribute(23, TlvNullable(TlvUInt8)),
            colorControlPrimary3X: OptionalAttribute(25, TlvUInt16),
            colorControlPrimary3Y: OptionalAttribute(26, TlvUInt16),
            colorControlPrimary3Intensity: OptionalAttribute(27, TlvNullable(TlvUInt8)),
            colorControlPrimary4X: OptionalAttribute(32, TlvUInt16),
            colorControlPrimary4Y: OptionalAttribute(33, TlvUInt16),
            colorControlPrimary4Intensity: OptionalAttribute(34, TlvNullable(TlvUInt8)),
            colorControlPrimary5X: OptionalAttribute(36, TlvUInt16),
            colorControlPrimary5Y: OptionalAttribute(37, TlvUInt16),
            colorControlPrimary5Intensity: OptionalAttribute(38, TlvNullable(TlvUInt8)),
            colorControlPrimary6X: OptionalAttribute(40, TlvUInt16),
            colorControlPrimary6Y: OptionalAttribute(41, TlvUInt16),
            colorControlPrimary6Intensity: OptionalAttribute(42, TlvNullable(TlvUInt8)),
            colorControlWhitePointX: OptionalWritableAttribute(48, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlWhitePointY: OptionalWritableAttribute(49, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointRx: OptionalWritableAttribute(50, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointRy: OptionalWritableAttribute(51, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointRIntensity: OptionalWritableAttribute(52, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointGx: OptionalWritableAttribute(54, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointGy: OptionalWritableAttribute(55, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointGIntensity: OptionalWritableAttribute(56, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointBx: OptionalWritableAttribute(58, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointBy: OptionalWritableAttribute(59, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlColorPointBIntensity: OptionalWritableAttribute(60, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            colorControlTemperatureLevelMinMireds: OptionalAttribute(16397, TlvUInt16),
            startUpColorTemperatureMireds: OptionalWritableAttribute(16400, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage })
        },

        commands: {
            /**
             * The MoveToHue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4
             */
            moveToHue: OptionalCommand(0, MoveToHueRequest, 0, TlvNoResponse),

            /**
             * The MoveHue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5
             */
            moveHue: OptionalCommand(1, MoveHueRequest, 1, TlvNoResponse),

            /**
             * The StepHue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6
             */
            stepHue: OptionalCommand(2, StepHueRequest, 2, TlvNoResponse),

            /**
             * The MoveToSaturation command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.7
             */
            moveToSaturation: OptionalCommand(3, MoveToSaturationRequest, 3, TlvNoResponse),

            /**
             * The MoveSaturation command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8
             */
            moveSaturation: OptionalCommand(4, MoveSaturationRequest, 4, TlvNoResponse),

            /**
             * The StepSaturation command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9
             */
            stepSaturation: OptionalCommand(5, StepSaturationRequest, 5, TlvNoResponse),

            /**
             * The MoveToHueAndSaturation command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.10
             */
            moveToHueAndSaturation: OptionalCommand(6, MoveToHueAndSaturationRequest, 6, TlvNoResponse),

            /**
             * The MoveToColor command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.11
             */
            moveToColor: OptionalCommand(7, MoveToColorRequest, 7, TlvNoResponse),

            /**
             * The MoveColor command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12
             */
            moveColor: OptionalCommand(8, MoveColorRequest, 8, TlvNoResponse),

            /**
             * The StepColor command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.13
             */
            stepColor: OptionalCommand(9, StepColorRequest, 9, TlvNoResponse),

            /**
             * The MoveToColorTemperature command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.14
             */
            moveToColorTemperature: OptionalCommand(10, MoveToColorTemperatureRequest, 10, TlvNoResponse),

            /**
             * The EnhancedMoveToHue command allows lamps to be moved in a
             * smooth continuous transition from their current hue to a target
             * hue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15
             */
            enhancedMoveToHue: OptionalCommand(64, EnhancedMoveToHueRequest, 64, TlvNoResponse),

            /**
             * The EnhancedMoveHue command allows lamps to be moved in a
             * continuous stepped transition from their current hue to a target
             * hue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16
             */
            enhancedMoveHue: OptionalCommand(65, EnhancedMoveHueRequest, 65, TlvNoResponse),

            /**
             * The EnhancedStepHue command allows lamps to be moved in a
             * stepped transition from their current hue to a target hue,
             * resulting in a linear transition through XY space.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17
             */
            enhancedStepHue: OptionalCommand(66, EnhancedStepHueRequest, 66, TlvNoResponse),

            /**
             * The EnhancedMoveToHueAndSaturation command allows lamps to be
             * moved in a smooth continuous transition from their current hue
             * to a target hue and from their current saturation to a target
             * saturation.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18
             */
            enhancedMoveToHueAndSaturation: OptionalCommand(67, EnhancedMoveToHueAndSaturationRequest, 67, TlvNoResponse),

            /**
             * The Color Loop Set command allows a color loop to be activated
             * such that the color lamp cycles through its range of hues.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19
             */
            colorLoopSet: OptionalCommand(68, ColorLoopSetRequest, 68, TlvNoResponse),

            /**
             * The StopMoveStep command is provided to allow MoveTo and Step
             * commands to be stopped. (Note this automatically provides
             * symmetry to the Level Control cluster.)
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.20
             */
            stopMoveStep: OptionalCommand(71, StopMoveStepRequest, 71, TlvNoResponse),

            /**
             * The MoveColorTemperature command allows the color temperature of
             * a lamp to be moved at a specified rate.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21
             */
            moveColorTemperature: OptionalCommand(75, MoveColorTemperatureRequest, 75, TlvNoResponse),

            /**
             * The StepColorTemperature command allows the color temperature of
             * a lamp to be stepped with a specified step size.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22
             */
            stepColorTemperature: OptionalCommand(76, StepColorTemperatureRequest, 76, TlvNoResponse)
        }
    });
};