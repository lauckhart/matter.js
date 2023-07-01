/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, OptionalAttribute, WritableAttribute, OptionalWritableAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

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
    level: TlvField(0, TlvUInt8.bound({ min: 0, max: 254 })),
    transitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * The MoveMode field SHALL be one of the non-reserved values in Values of the MoveMode Field.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.1
 */
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

/**
 * The Step command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.3
 */
export const TlvStepRequest = TlvObject({
    stepMode: TlvField(0, TlvUInt8),
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

/**
 * The MoveToClosestFrequency command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
 */
export const TlvMoveToClosestFrequencyRequest = TlvObject({ frequency: TlvField(0, TlvUInt16) });

export namespace PulseWidthModulationCluster {
    export const id = 0x1c;
    export const name = "PulseWidthModulation";
    export const revision = 1;

    export const featureMap = {
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
    };

    const Base = {
        attributes: {
            /**
             * The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
             * dependent.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.1
             */
            currentLevel: Attribute(
                0,
                TlvNullable(TlvUInt8.bound({ min: "MinLevel", max: "MaxLevel" })),
                { scene: true, persistent: true, default: null, readAcl: AccessLevel.View }
            ),

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
            maxLevel: OptionalAttribute(
                3,
                TlvUInt8.bound({ min: "MinLevel", max: 254 }),
                { default: 254, readAcl: AccessLevel.View }
            ),

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
                TlvNullable(TlvUInt8.bound({ min: "MinLevel", max: "MaxLevel" })),
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
            moveToLevelWithOnOff: Command(4, TlvNoArguments, 4, TlvNoResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
             */
            moveWithOnOff: Command(5, TlvNoArguments, 5, TlvNoResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
             */
            stepWithOnOff: Command(6, TlvNoArguments, 6, TlvNoResponse),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6
             */
            stopWithOnOff: Command(7, TlvNoArguments, 7, TlvNoResponse)
        }
    };

    const Lighting = {
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
    };

    const Frequency = {
        attributes: {
            /**
             * The CurrentFrequency attribute represents the frequency at which the device is at CurrentLevel. A
             * CurrentFrequency of 0 is unknown.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.5
             */
            currentFrequency: Attribute(
                4,
                TlvUInt16.bound({ min: "MinFrequency", max: "MaxFrequency" }),
                { scene: true, readAcl: AccessLevel.View }
            ),

            /**
             * The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being
             * assigned. MinFrequency SHALL be less than or equal to MaxFrequency. A value of 0 indicates undefined.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.6
             */
            minFrequency: Attribute(5, TlvUInt16.bound({ min: 0, max: "MaxFrequency" }), { readAcl: AccessLevel.View }),

            /**
             * The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being
             * assigned. MaxFrequency SHALL be greater than or equal to MinFrequency. A value of 0 indicates undefined.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.7
             */
            maxFrequency: Attribute(6, TlvUInt16.bound({ min: "MinFrequency" }), { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * The MoveToClosestFrequency command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
             */
            moveToClosestFrequency: Command(8, TlvMoveToClosestFrequencyRequest, 8, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { onOff: true, lighting: true, frequency: true },
        elements: [ Base, Lighting, Frequency ]
    });
};