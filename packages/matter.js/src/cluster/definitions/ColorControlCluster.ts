/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, Command, TlvNoResponse, OptionalAttribute, WritableAttribute, FixedAttribute, OptionalFixedAttribute, OptionalWritableAttribute } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvEnum, TlvUInt16, TlvBitmap, TlvInt16 } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4.2
 */
export const enum TlvColorControlDirection {
    ShortestDistance = 0,
    LongestDistance = 1,
    Up = 2,
    Down = 3
};

/**
 * The MoveToHue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4
 */
export const TlvMoveToHueRequest = TlvObject({
    /**
     * The Hue field specifies the hue to be moved to.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4.1
     */
    hue: TlvField(0, TlvUInt8.bound({ min: 0, max: 254 })),

    /**
     * The Direction field SHALL be one of the non-reserved values in Values of the Direction Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4.2
     */
    direction: TlvField(1, TlvEnum<TlvColorControlDirection>()),

    /**
     * The TransitionTime field specifies, in 1/10ths of a second, the time that SHALL be taken to move to the new hue.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4.3
     */
    transitionTime: TlvField(2, TlvUInt16.bound({ min: 0, max: 65534 })),

    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5.1
 */
export const enum TlvMoveMode {
    Stop = 0,
    Up = 1,
    Down = 3
};

/**
 * The MoveHue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5
 */
export const TlvMoveHueRequest = TlvObject({
    /**
     * The MoveMode field SHALL be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
     * field is equal to 0 (Stop), the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5.1
     */
    moveMode: TlvField(0, TlvEnum<TlvMoveMode>()),

    /**
     * The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s hue of one
     * unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of zero, the command has
     * no effect and a response command SHALL be sent in response, with the status code set to INVALID_COMMAND. If the
     * MoveMode field is set to 0 (stop) the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5.2
     */
    rate: TlvField(1, TlvUInt8),

    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6.1
 */
export const enum TlvStepMode {
    Up = 1,
    Down = 3
};

/**
 * The StepHue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6
 */
export const TlvStepHueRequest = TlvObject({
    /**
     * The StepMode field SHALL be one of the non-reserved values in Values of the StepMode Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6.1
     */
    stepMode: TlvField(0, TlvEnum<TlvStepMode>()),

    /**
     * The change to be added to (or subtracted from) the current value of the device’s hue.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6.2
     */
    stepSize: TlvField(1, TlvUInt8),

    /**
     * The TransitionTime field specifies, in 1/10ths of a second, the time that SHALL be taken to perform the step. A
     * step is a change in the device’s hue of ‘Step size’ units.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6.3
     */
    transitionTime: TlvField(2, TlvUInt8),

    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The MoveToSaturation command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.7
 */
export const TlvMoveToSaturationRequest = TlvObject({
    saturation: TlvField(0, TlvUInt8.bound({ min: 0, max: 254 })),
    transitionTime: TlvField(1, TlvUInt16.bound({ min: 0, max: 65534 })),
    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * The MoveSaturation command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8
 */
export const TlvMoveSaturationRequest = TlvObject({
    /**
     * The MoveMode field SHALL be one of the non-reserved values in Values of the MoveMode Field. If the MoveMode
     * field is equal to 0 (Stop), the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8.1
     */
    moveMode: TlvField(0, TlvEnum<TlvMoveMode>()),

    /**
     * The Rate field specifies the rate of movement in steps per second. A step is a change in the device’s
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8.2
     */
    rate: TlvField(1, TlvUInt8),

    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * The StepSaturation command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9
 */
export const TlvStepSaturationRequest = TlvObject({
    /**
     * The StepMode field SHALL be one of the non-reserved values in Values of the StepMode Field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9.1
     */
    stepMode: TlvField(0, TlvEnum<TlvStepMode>()),

    /**
     * The change to be added to (or subtracted from) the current value of the device’s saturation.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9.2
     */
    stepSize: TlvField(1, TlvUInt8),

    /**
     * The TransitionTime field specifies, in 1/10ths of a second, the time that SHALL be taken to perform the step. A
     * step is a change in the device’s saturation of ‘Step size’ units.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9.3
     */
    transitionTime: TlvField(2, TlvUInt8),

    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The MoveToHueAndSaturation command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.10
 */
export const TlvMoveToHueAndSaturationRequest = TlvObject({
    hue: TlvField(0, TlvUInt8.bound({ min: 0, max: 254 })),
    saturation: TlvField(1, TlvUInt8.bound({ min: 0, max: 254 })),
    transitionTime: TlvField(2, TlvUInt16.bound({ min: 0, max: 65534 })),
    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for color/intensity
 * drift over time. It SHALL be one of the non-reserved values in Values of the DriftCompensation Attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.6
 */
export const enum TlvDriftCompensation {
    None = 0,
    OtherUnknown = 1,
    TemperatureMonitoring = 2,
    OpticalLuminanceMonitoringAndFeedback = 3,
    OpticalColorMonitoringAndFeedback = 4
};

/**
 * The ColorMode attribute indicates which attributes are currently determining the color of the device.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.9
 */
export const enum TlvColorMode {
    CurrentHueAndCurrentSaturation = 0,
    CurrentXAndCurrentY = 1,
    ColorTemperatureMireds = 2
};

/**
 * The Options attribute is meant to be changed only during commissioning. The Options attribute is a bitmap that
 * determines the default behavior of some cluster commands. Each command that is dependent on the Options attribute
 * SHALL first construct a temporary Options bitmap that is in effect during the command processing. The temporary
 * Options bitmap has the same format and meaning as the Options attribute, but includes any bits that may be
 * overridden by command fields.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.10
 */
export const TlvOptionsBits = { executeIfOff: BitFlag(1) };

export const TlvOptions = TlvBitmap(TlvUInt8, TlvOptionsBits);

/**
 * The EnhancedColorMode attribute specifies which attributes are currently determining the color of the device, as
 * detailed in Values of the EnhancedColorMode Attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.12
 */
export const enum TlvEnhancedColorMode {
    CurrentHueAndCurrentSaturation = 0,
    CurrentXAndCurrentY = 1,
    ColorTemperatureMireds = 2,
    EnhancedCurrentHueAndCurrentSaturation = 3
};

/**
 * The MoveToColor command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.11
 */
export const TlvMoveToColorRequest = TlvObject({
    colorX: TlvField(0, TlvUInt16.bound({ min: 0, max: 0 })),
    colorY: TlvField(1, TlvUInt16.bound({ min: 0, max: 0 })),
    transitionTime: TlvField(2, TlvUInt16.bound({ min: 0, max: 65534 })),
    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The MoveColor command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12
 */
export const TlvMoveColorRequest = TlvObject({
    /**
     * The RateX field specifies the rate of movement in steps per second. A step is a change in the device’s CurrentX
     * attribute of one unit.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12.1
     */
    rateX: TlvField(0, TlvInt16),

    /**
     * The RateY field specifies the rate of movement in steps per second. A step is a change in the device’s CurrentY
     * attribute of one unit.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12.2
     */
    rateY: TlvField(1, TlvInt16),

    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * The StepColor command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.13
 */
export const TlvStepColorRequest = TlvObject({
    stepX: TlvField(0, TlvInt16),
    stepY: TlvField(1, TlvInt16),

    /**
     * The TransitionTime field specifies, in 1/10ths of a second, the time that SHALL be taken to perform the color
     * change.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.13.2
     */
    transitionTime: TlvField(2, TlvUInt16.bound({ min: 0, max: 65534 })),

    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The MoveToColorTemperature command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.14
 */
export const TlvMoveToColorTemperatureRequest = TlvObject({
    colorTemperatureMireds: TlvField(0, TlvUInt16.bound({ min: 0, max: 0 })),
    transitionTime: TlvField(1, TlvUInt16.bound({ min: 0, max: 65534 })),
    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21
 */
export const TlvMoveColorTemperatureRequest = TlvObject({
    /**
     * This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.1
     */
    moveMode: TlvField(0, TlvUInt8),

    /**
     * The Rate field specifies the rate of movement in steps per second. A step is a change in the color temperature
     * of a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of
     * zero, the command has no effect and a response command SHALL be sent in response, with the status code set to
     * INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.2
     */
    rate: TlvField(1, TlvUInt16),

    /**
     * The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡ an
     * upper bound on the color temperature in kelvins) for the current move operation such that:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.3
     */
    colorTemperatureMinimumMireds: TlvField(2, TlvUInt16.bound({ min: 0, max: 0 })),

    /**
     * The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡ a
     * lower bound on the color temperature in kelvins) for the current move operation such that:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21.4
     */
    colorTemperatureMaximumMireds: TlvField(3, TlvUInt16.bound({ min: 0, max: 0 })),

    optionsMask: TlvField(4, TlvUInt8),
    optionsOverride: TlvField(5, TlvUInt8)
});

/**
 * The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step size.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22
 */
export const TlvStepColorTemperatureRequest = TlvObject({
    /**
     * This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
     * sub-clause StepHue Command).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.1
     */
    stepMode: TlvField(0, TlvUInt8),

    /**
     * The StepSize field specifies the change to be added to (or subtracted from) the current value of the device’s
     * color temperature.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.2
     */
    stepSize: TlvField(1, TlvUInt16),

    /**
     * The TransitionTime field specifies, in units of 1/10ths of a second, the time that SHALL be taken to perform the
     * step. A step is a change to the device’s color temperature of a magnitude corresponding to the StepSize field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.3
     */
    transitionTime: TlvField(2, TlvUInt16.bound({ min: 0, max: 65534 })),

    /**
     * The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds attribute (≡ an
     * upper bound on the color temperature in kelvins) for the current step operation such that:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.4
     */
    colorTemperatureMinimumMireds: TlvField(3, TlvUInt16.bound({ min: 0, max: 0 })),

    /**
     * The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds attribute (≡ a
     * lower bound on the color temperature in kelvins) for the current step operation such that:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22.5
     */
    colorTemperatureMaximumMireds: TlvField(4, TlvUInt16.bound({ min: 0, max: 0 })),

    optionsMask: TlvField(5, TlvUInt8),
    optionsOverride: TlvField(6, TlvUInt8)
});

/**
 * The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current hue to a
 * target hue.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15
 */
export const TlvEnhancedMoveToHueRequest = TlvObject({
    /**
     * The EnhancedHue field specifies the target extended hue for the lamp.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15.1
     */
    enhancedHue: TlvField(0, TlvUInt16),

    /**
     * This field is identical to the Direction field of the MoveToHue command of the Color Control cluster (see
     * sub-clause Use of the OptionsMask and OptionsOverride fields).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15.2
     */
    direction: TlvField(1, TlvEnum<TlvColorControlDirection>()),

    /**
     * This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster (see
     * sub-clause Use of the OptionsMask and OptionsOverride fields).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15.3
     */
    transitionTime: TlvField(2, TlvUInt16.bound({ min: 0, max: 65534 })),

    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current hue to a
 * target hue.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16
 */
export const TlvEnhancedMoveHueRequest = TlvObject({
    /**
     * This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster (see
     * sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16.1
     */
    moveMode: TlvField(0, TlvEnum<TlvMoveMode>()),

    /**
     * The Rate field specifies the rate of movement in steps per second. A step is a change in the extended hue of a
     * device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has a value of zero,
     * the command has no effect and a response command SHALL be sent in response, with the status code set to
     * INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field SHALL be ignored.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16.2
     */
    rate: TlvField(1, TlvUInt16),

    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a target hue,
 * resulting in a linear transition through XY space.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17
 */
export const TlvEnhancedStepHueRequest = TlvObject({
    /**
     * This field is identical to the StepMode field of the StepHue command of the Color Control cluster (see
     * sub-clause StepHue Command).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17.1
     */
    stepMode: TlvField(0, TlvEnum<TlvStepMode>()),

    /**
     * The StepSize field specifies the change to be added to (or subtracted from) the current value of the device’s
     * enhanced hue.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17.2
     */
    stepSize: TlvField(1, TlvUInt16),

    /**
     * The TransitionTime field specifies, in units of 1/10ths of a second, the time that SHALL be taken to perform the
     * step. A step is a change to the device’s enhanced hue of a magnitude corresponding to the StepSize field.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17.3
     */
    transitionTime: TlvField(2, TlvUInt16.bound({ min: 0, max: 65534 })),

    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from their
 * current hue to a target hue and from their current saturation to a target saturation.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18
 */
export const TlvEnhancedMoveToHueAndSaturationRequest = TlvObject({
    /**
     * The EnhancedHue field specifies the target extended hue for the lamp.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18.1
     */
    enhancedHue: TlvField(0, TlvUInt16),

    /**
     * This field is identical to the Saturation field of the MoveToHueAndSaturation command of the Color Control
     * cluster (see sub-clause MoveToHueAndSaturation Command).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18.2
     */
    saturation: TlvField(1, TlvUInt8.bound({ min: 0, max: 254 })),

    /**
     * This field is identical to the TransitionTime field of the MoveToHue command of the Color Control cluster (see
     * sub-clause MoveToHueAndSaturation Command).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18.3
     */
    transitionTime: TlvField(2, TlvUInt16.bound({ min: 0, max: 65534 })),

    optionsMask: TlvField(3, TlvUInt8),
    optionsOverride: TlvField(4, TlvUInt8)
});

/**
 * The UpdateFlags field specifies which color loop attributes to update before the color loop is started. This field
 * SHALL be formatted as illustrated in Format of the UpdateFlags Field of the ColorLoopSet Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.1
 */
export const TlvUpdateFlagsBits = {
    updateAction: BitFlag(0),
    updateDirection: BitFlag(1),
    updateTime: BitFlag(2),
    updateStartHue: BitFlag(3),
    reserved: BitFlag(4)
};

export const TlvUpdateFlags = TlvBitmap(TlvUInt8, TlvUpdateFlagsBits);

/**
 * The Action field specifies the action to take for the color loop if the UpdateAction sub-field of the UpdateFlags
 * field is set to 1. This field SHALL be set to one of the non-reserved values listed in Values of the Action Field of
 * the ColorLoopSet Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.2
 */
export const enum TlvAction {
    DeActivateTheColorLoop = 0,
    ActivateTheColorLoopFromTheValueInTheColorLoopStartEnhancedHueField = 1,
    ActivateTheColorLoopFromTheValueOfTheEnhancedCurrentHueAttribute = 2
};

/**
 * The Direction field specifies the direction for the color loop if the Update Direction field of the UpdateFlags
 * field is set to 1. This field SHALL be set to one of the non-reserved values listed in Values of the Direction Field
 * of the ColorLoopSet Command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.3
 */
export const enum TlvColorLoopSetDirection {
    DecrementTheHueInTheColorLoop = 0,
    IncrementTheHueInTheColorLoop = 1
};

/**
 * The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its range of
 * hues.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19
 */
export const TlvColorLoopSetRequest = TlvObject({
    /**
     * The UpdateFlags field specifies which color loop attributes to update before the color loop is started. This
     * field SHALL be formatted as illustrated in Format of the UpdateFlags Field of the ColorLoopSet Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.1
     */
    updateFlags: TlvField(0, TlvUpdateFlags),

    /**
     * The Action field specifies the action to take for the color loop if the UpdateAction sub-field of the
     * UpdateFlags field is set to 1. This field SHALL be set to one of the non-reserved values listed in Values of the
     * Action Field of the ColorLoopSet Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.2
     */
    action: TlvField(1, TlvEnum<TlvAction>()),

    /**
     * The Direction field specifies the direction for the color loop if the Update Direction field of the UpdateFlags
     * field is set to 1. This field SHALL be set to one of the non-reserved values listed in Values of the Direction
     * Field of the ColorLoopSet Command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.3
     */
    direction: TlvField(2, TlvEnum<TlvColorLoopSetDirection>()),

    /**
     * The Time field specifies the number of seconds over which to perform a full color loop if the UpdateTime
     * sub-field of the UpdateFlags field is set to 1.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19.4
     */
    time: TlvField(3, TlvUInt16),

    startHue: TlvField(4, TlvUInt16),
    optionsMask: TlvField(5, TlvUInt8),
    optionsOverride: TlvField(6, TlvUInt8)
});

/**
 * The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this automatically
 * provides symmetry to the Level Control cluster.)
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.20
 */
export const TlvStopMoveStepRequest = TlvObject({
    optionsMask: TlvField(0, TlvUInt8),
    optionsOverride: TlvField(1, TlvUInt8)
});

export namespace ColorControlCluster {
    export const id = 0x300;
    export const name = "ColorControl";
    export const revision = 1;

    export const featureMap = {
        /**
         * HueSaturation
         *
         * Supports color specification via hue/saturation.
         */
        hueSaturation: BitFlag(0),

        /**
         * EnhancedHue
         *
         * Enhanced hue is supported.
         */
        enhancedHue: BitFlag(1),

        /**
         * ColorLoop
         *
         * Color loop is supported.
         */
        colorLoop: BitFlag(2),

        /**
         * Xy
         *
         * Supports color specification via XY.
         */
        xy: BitFlag(3),

        /**
         * ColorTemperature
         *
         * Supports specification of color temperature.
         */
        colorTemperature: BitFlag(4)
    };

    const HueSaturation = {
        attributes: {
            /**
             * The CurrentHue attribute contains the current hue value of the light. It is updated as fast as practical
             * during commands that change the hue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.1
             */
            currentHue: Attribute(0, TlvUInt8.bound({ min: 0, max: 254 }), { persistent: true, readAcl: AccessLevel.View }),

            /**
             * The CurrentSaturation attribute holds the current saturation value of the light. It is updated as fast
             * as practical during commands that change the saturation.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.2
             */
            currentSaturation: Attribute(
                1,
                TlvUInt8.bound({ min: 0, max: 254 }),
                { scene: true, persistent: true, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * The MoveToHue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.4
             */
            moveToHue: Command(0, TlvMoveToHueRequest, 0, TlvNoResponse),

            /**
             * The MoveHue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.5
             */
            moveHue: Command(1, TlvMoveHueRequest, 1, TlvNoResponse),

            /**
             * The StepHue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.6
             */
            stepHue: Command(2, TlvStepHueRequest, 2, TlvNoResponse),

            /**
             * The MoveToSaturation command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.7
             */
            moveToSaturation: Command(3, TlvMoveToSaturationRequest, 3, TlvNoResponse),

            /**
             * The MoveSaturation command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.8
             */
            moveSaturation: Command(4, TlvMoveSaturationRequest, 4, TlvNoResponse),

            /**
             * The StepSaturation command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.9
             */
            stepSaturation: Command(5, TlvStepSaturationRequest, 5, TlvNoResponse),

            /**
             * The MoveToHueAndSaturation command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.10
             */
            moveToHueAndSaturation: Command(6, TlvMoveToHueAndSaturationRequest, 6, TlvNoResponse)
        }
    };

    const Base = {
        attributes: {
            /**
             * The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently active
             * command will be complete.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.3
             */
            remainingTime: OptionalAttribute(2, TlvUInt16.bound({ min: 0, max: 65534 }), { readAcl: AccessLevel.View }),

            /**
             * The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for
             * color/intensity drift over time. It SHALL be one of the non-reserved values in Values of the
             * DriftCompensation Attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.6
             */
            driftCompensation: OptionalAttribute(5, TlvEnum<TlvDriftCompensation>(), { readAcl: AccessLevel.View }),

            /**
             * The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.7
             */
            compensationText: OptionalAttribute(6, TlvString.bound({ maxLength: 254 }), { readAcl: AccessLevel.View }),

            /**
             * The ColorMode attribute indicates which attributes are currently determining the color of the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.9
             */
            colorMode: Attribute(8, TlvEnum<TlvColorMode>(), { persistent: true, default: 1, readAcl: AccessLevel.View }),

            /**
             * The Options attribute is meant to be changed only during commissioning. The Options attribute is a
             * bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
             * the Options attribute SHALL first construct a temporary Options bitmap that is in effect during the
             * command processing. The temporary Options bitmap has the same format and meaning as the Options
             * attribute, but includes any bits that may be overridden by command fields.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.10
             */
            options: WritableAttribute(15, TlvOptions, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }),

            /**
             * The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. A
             * value of null SHALL indicate that the number of primaries is unknown.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8.1
             */
            numberOfPrimaries: FixedAttribute(
                16,
                TlvNullable(TlvUInt8.bound({ min: 0, max: 6 })),
                { readAcl: AccessLevel.View }
            ),

            /**
             * The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined in the
             * CIE xyY Color Space.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8.2
             */
            primary1X: OptionalFixedAttribute(17, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined in the
             * CIE xyY Color Space.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8.3
             */
            primary1Y: OptionalFixedAttribute(18, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * The Primary1intensity attribute contains a representation of the maximum intensity of this primary as
             * defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast Configuration
             * Cluster), normalized such that the primary with the highest maximum intensity contains the value 0xfe.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8.4
             */
            primary1Intensity: OptionalFixedAttribute(19, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8
             */
            primary2X: OptionalFixedAttribute(21, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8
             */
            primary2Y: OptionalFixedAttribute(22, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8
             */
            primary2Intensity: OptionalFixedAttribute(23, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8
             */
            primary3X: OptionalFixedAttribute(25, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8
             */
            primary3Y: OptionalFixedAttribute(26, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.8
             */
            primary3Intensity: OptionalFixedAttribute(27, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary4X: FixedAttribute(32, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary4Y: FixedAttribute(33, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary4Intensity: FixedAttribute(34, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary5X: FixedAttribute(36, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary5Y: FixedAttribute(37, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary5Intensity: FixedAttribute(38, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary6X: FixedAttribute(40, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary6Y: FixedAttribute(41, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.9
             */
            primary6Intensity: FixedAttribute(42, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View }),

            /**
             * The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
             * Space, of the current white point of the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10.1
             */
            whitePointX: OptionalWritableAttribute(
                48,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
             * Space, of the current white point of the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10.2
             */
            whitePointY: OptionalWritableAttribute(
                49,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY Color
             * Space, of the red color point of the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10.3
             */
            colorPointRx: OptionalWritableAttribute(
                50,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY Color
             * Space, of the red color point of the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10.4
             */
            colorPointRy: OptionalWritableAttribute(
                51,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The ColorPointRIntensity attribute contains a representation of the relative intensity of the red color
             * point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast
             * Configuration Cluster), normalized such that the color point with the highest relative intensity
             * contains the value 0xfe.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10.5
             */
            colorPointRIntensity: OptionalWritableAttribute(
                52,
                TlvNullable(TlvUInt8),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10
             */
            colorPointGx: OptionalWritableAttribute(
                54,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10
             */
            colorPointGy: OptionalWritableAttribute(
                55,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10
             */
            colorPointGIntensity: OptionalWritableAttribute(
                56,
                TlvNullable(TlvUInt8),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10
             */
            colorPointBx: OptionalWritableAttribute(
                58,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10
             */
            colorPointBy: OptionalWritableAttribute(
                59,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.10
             */
            colorPointBIntensity: OptionalWritableAttribute(
                60,
                TlvNullable(TlvUInt8),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The EnhancedColorMode attribute specifies which attributes are currently determining the color of the
             * device, as detailed in Values of the EnhancedColorMode Attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.12
             */
            enhancedColorMode: Attribute(
                16385,
                TlvEnum<TlvEnhancedColorMode>(),
                { persistent: true, default: 1, readAcl: AccessLevel.View }
            ),

            /**
             * Bits 0-4 of the ColorCapabilities attribute SHALL have the same values as the corresponding bits of the
             * FeatureMap attribute. All other bits in ColorCapabilities SHALL be 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.18
             */
            colorCapabilities: Attribute(16394, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View })
        }
    };

    const Xy = {
        attributes: {
            /**
             * The CurrentX attribute contains the current value of the normalized chromaticity value x, as defined in
             * the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.4
             */
            currentX: Attribute(
                3,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { scene: true, persistent: true, default: 1558, readAcl: AccessLevel.View }
            ),

            /**
             * The CurrentY attribute contains the current value of the normalized chromaticity value y, as defined in
             * the CIE xyY Color Space. It is updated as fast as practical during commands that change the color.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.5
             */
            currentY: Attribute(
                4,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { scene: true, persistent: true, default: 1543, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * The MoveToColor command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.11
             */
            moveToColor: Command(7, TlvMoveToColorRequest, 7, TlvNoResponse),

            /**
             * The MoveColor command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.12
             */
            moveColor: Command(8, TlvMoveColorRequest, 8, TlvNoResponse),

            /**
             * The StepColor command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.13
             */
            stepColor: Command(9, TlvStepColorRequest, 9, TlvNoResponse)
        }
    };

    const ColorTemperature = {
        attributes: {
            /**
             * The ColorTemperatureMireds attribute contains a scaled inverse of the current value of the color
             * temperature. The unit of ColorTemperatureMireds is the mired (micro reciprocal degree), AKA mirek (micro
             * reciprocal kelvin). It is updated as fast as practical during commands that change the color.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.8
             */
            colorTemperatureMireds: Attribute(
                7,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { scene: true, persistent: true, readAcl: AccessLevel.View }
            ),

            /**
             * The ColorTempPhysicalMinMireds attribute indicates the minimum mired value supported by the hardware.
             * ColorTempPhysicalMinMireds corresponds to the maximum color temperature in kelvins supported by the
             * hardware. ColorTempPhysicalMinMireds ≤ ColorTemperatureMireds.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.19
             */
            colorTempPhysicalMinMireds: Attribute(16395, TlvUInt16.bound({ min: 0, max: 0 }), { readAcl: AccessLevel.View }),

            /**
             * The ColorTempPhysicalMaxMireds attribute indicates the maximum mired value supported by the hardware.
             * ColorTempPhysicalMaxMireds corresponds to the minimum color temperature in kelvins supported by the
             * hardware. ColorTemperatureMireds ≤ ColorTempPhysicalMaxMireds.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.20
             */
            colorTempPhysicalMaxMireds: Attribute(
                16396,
                TlvUInt16.bound({ min: 0, max: 0 }),
                { default: 65279, readAcl: AccessLevel.View }
            ),

            /**
             * The CoupleColorTempToLevelMinMireds attribute specifies a lower bound on the value of the
             * ColorTemperatureMireds attribute for the purposes of coupling the ColorTemperatureMireds attribute to
             * the CurrentLevel attribute when the CoupleColorTempToLevel bit of the Options attribute of the Level
             * Control cluster is equal to 1. When coupling the ColorTemperatureMireds attribute to the CurrentLevel
             * attribute, this value SHALL correspond to a CurrentLevel value of 0xfe (100%).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.21
             */
            coupleColorTempToLevelMinMireds: OptionalAttribute(
                16397,
                TlvUInt16.bound({ min: "ColorTempPhysicalMinMireds", max: "ColorTemperatureMireds" }),
                { readAcl: AccessLevel.View }
            ),

            /**
             * The StartUpColorTemperatureMireds attribute SHALL define the desired startup color temperature value a
             * lamp SHALL use when it is supplied with power and this value SHALL be reflected in the
             * ColorTemperatureMireds attribute. In addition, the ColorMode and EnhancedColorMode attributes SHALL be
             * set to 0x02 (color temperature). The values of the StartUpColorTemperatureMireds attribute are listed in
             * the table below,
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.22
             */
            startUpColorTemperatureMireds: OptionalWritableAttribute(
                16400,
                TlvNullable(TlvUInt16.bound({ min: 0, max: 0 })),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            )
        },

        commands: {
            /**
             * The MoveToColorTemperature command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.14
             */
            moveToColorTemperature: Command(10, TlvMoveToColorTemperatureRequest, 10, TlvNoResponse),

            /**
             * The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.21
             */
            moveColorTemperature: Command(75, TlvMoveColorTemperatureRequest, 75, TlvNoResponse),

            /**
             * The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified
             * step size.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.22
             */
            stepColorTemperature: Command(76, TlvStepColorTemperatureRequest, 76, TlvNoResponse)
        }
    };

    const EnhancedHue = {
        attributes: {
            /**
             * The EnhancedCurrentHue attribute represents non-equidistant steps along the CIE 1931 color triangle, and
             * it provides 16-bits precision.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.11
             */
            enhancedCurrentHue: Attribute(16384, TlvUInt16, { scene: true, persistent: true, readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their
             * current hue to a target hue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.15
             */
            enhancedMoveToHue: Command(64, TlvEnhancedMoveToHueRequest, 64, TlvNoResponse),

            /**
             * The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their
             * current hue to a target hue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.16
             */
            enhancedMoveHue: Command(65, TlvEnhancedMoveHueRequest, 65, TlvNoResponse),

            /**
             * The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a
             * target hue, resulting in a linear transition through XY space.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.17
             */
            enhancedStepHue: Command(66, TlvEnhancedStepHueRequest, 66, TlvNoResponse),

            /**
             * The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition
             * from their current hue to a target hue and from their current saturation to a target saturation.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.18
             */
            enhancedMoveToHueAndSaturation: Command(67, TlvEnhancedMoveToHueAndSaturationRequest, 67, TlvNoResponse)
        }
    };

    const ColorLoop = {
        attributes: {
            /**
             * The ColorLoopActive attribute specifies the current active status of the color loop. If this attribute
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.13
             */
            colorLoopActive: Attribute(16386, TlvUInt8, { scene: true, persistent: true, readAcl: AccessLevel.View }),

            /**
             * The ColorLoopDirection attribute specifies the current direction of the color loop. If this attribute
             * has the value 0, the EnhancedCurrentHue attribute SHALL be decremented. If this attribute has the value
             * 1, the EnhancedCurrentHue attribute SHALL be incremented. All other values (2 to 254) are reserved.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.14
             */
            colorLoopDirection: Attribute(16387, TlvUInt8, { scene: true, persistent: true, readAcl: AccessLevel.View }),

            /**
             * The ColorLoopTime attribute specifies the number of seconds it SHALL take to perform a full color loop,
             * i.e., to cycle all values of the EnhancedCurrentHue attribute (between 0 and 0xfffe).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.15
             */
            colorLoopTime: Attribute(
                16388,
                TlvUInt16,
                { scene: true, persistent: true, default: 25, readAcl: AccessLevel.View }
            ),

            /**
             * The ColorLoopStartEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute from
             * which the color loop SHALL be started.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.16
             */
            colorLoopStartEnhancedHue: Attribute(16389, TlvUInt16, { default: 8960, readAcl: AccessLevel.View }),

            /**
             * The ColorLoopStoredEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute before
             * the color loop was started. Once the color loop is complete, the EnhancedCurrentHue attribute SHALL be
             * restored to this value.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.7.17
             */
            colorLoopStoredEnhancedHue: Attribute(16390, TlvUInt16, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through
             * its range of hues.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.19
             */
            colorLoopSet: Command(68, TlvColorLoopSetRequest, 68, TlvNoResponse)
        }
    };

    const HueSaturationOrXy = {
        commands: {
            /**
             * The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this
             * automatically provides symmetry to the Level Control cluster.)
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.2.11.20
             */
            stopMoveStep: Command(71, TlvStopMoveStepRequest, 71, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { hueSaturation: true, enhancedHue: true, colorLoop: true, xy: true, colorTemperature: true },
        elements: [ HueSaturation, Base, Xy, ColorTemperature, EnhancedHue, ColorLoop, HueSaturationOrXy ]
    });
};