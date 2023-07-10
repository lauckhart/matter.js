/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, OptionalAttribute, WritableAttribute, OptionalWritableAttribute, Command, TlvNoResponse, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Pulse Width Modulation
 *
 * Cluster to control pulse width modulation
 *
 * Use this factory function to create a PulseWidthModulation cluster supporting a specific set of features. Include
 * each {@link PulseWidthModulationCluster.Feature} you wish to support.
 *
 * @param features a list of {@link PulseWidthModulationCluster.Feature} to support
 * @returns a PulseWidthModulation cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6
 */
export function PulseWidthModulationCluster<T extends PulseWidthModulationCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...PulseWidthModulationCluster.Metadata,
        supportedFeatures: BitFlags(PulseWidthModulationCluster.Metadata.features, ...features),
        ...PulseWidthModulationCluster.BaseComponent
    });
    extendCluster(cluster, PulseWidthModulationCluster.LightingComponent, { lighting: true });
    extendCluster(cluster, PulseWidthModulationCluster.FrequencyComponent, { frequency: true });
    return cluster as unknown as PulseWidthModulationCluster.Type<BitFlags<typeof PulseWidthModulationCluster.Metadata.features, T>>;
}

/**
 * Bit definitions for TlvOptions
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
 */
export const OptionsBits = { executeIfOff: BitFlag(0), coupleColorTempToLevel: BitFlag(1) };

/**
 * The value of the PulseWidthModulation options attribute
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
 */
export const TlvOptions = TlvBitmap(TlvUInt8, OptionsBits);

/**
 * Input to the PulseWidthModulation moveToLevel command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.1
 */
export const TlvMoveToLevelRequest = TlvObject({
    level: TlvField(0, TlvUInt8.bound({ max: 254 })),
    transitionTime: TlvField(1, TlvNullable(TlvUInt16)),
    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * The value of Move.moveMode
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.1
 */
export const enum MoveMode {
    Up = 0,
    Down = 1
}

/**
 * Input to the PulseWidthModulation move command
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
     * this field MAY be disregarded.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.2.2
     */
    rate: TlvField(1, TlvNullable(TlvUInt8)),

    optionsMask: TlvField(2, TlvUInt8),
    optionsOverride: TlvField(3, TlvUInt8)
});

/**
 * Input to the PulseWidthModulation step command
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
 * Input to the PulseWidthModulation stop command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.4
 */
export const TlvStopRequest = TlvObject({ optionsMask: TlvField(0, TlvUInt8), optionsOverride: TlvField(1, TlvUInt8) });

/**
 * Input to the PulseWidthModulation moveToClosestFrequency command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.6.5
 */
export const TlvMoveToClosestFrequencyRequest = TlvObject({ frequency: TlvField(0, TlvUInt16) });

export namespace PulseWidthModulationCluster {
    /**
     * These are optional features supported by PulseWidthModulationCluster.
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
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { lighting: true } ? typeof LightingComponent : {})
        & (T extends { frequency: true } ? typeof FrequencyComponent : {});

    /**
     * PulseWidthModulation cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6
     */
    export const Metadata = ClusterMetadata({
        id: 0x1c,
        name: "PulseWidthModulation",
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
     * A PulseWidthModulationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device
             * dependent.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.1
             */
            currentLevel: Attribute(0, TlvNullable(TlvUInt8), { scene: true, persistent: true, default: null }),

            /**
             * The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.3
             */
            minLevel: OptionalAttribute(2, TlvUInt8),

            /**
             * The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.4
             */
            maxLevel: OptionalAttribute(3, TlvUInt8.bound({ max: 254 }), { default: 254 }),

            /**
             * The Options attribute is meant to be changed only during commissioning. The Options attribute is a
             * bitmap that determines the default behavior of some cluster commands. Each command that is dependent on
             * the Options attribute shall first construct a temporary Options bitmap that is in effect during the
             * command processing. The temporary Options bitmap has the same format and meaning as the Options
             * attribute, but includes any bits that may be overridden by command fields.
             *
             * Below is the format and description of the Options attribute and temporary Options bitmap and the effect
             * on dependent commands.
             *
             * Table 19. Options Attribute
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.8
             */
            options: WritableAttribute(15, TlvOptions),

            /**
             * The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On
             * or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a
             * second.
             *
             * The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note that
             * if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD NOT be
             * implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.9
             */
            onOffTransitionTime: OptionalWritableAttribute(16, TlvUInt16, { default: 0 }),

            /**
             * The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff
             * attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off
             * cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no
             * effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.10
             */
            onLevel: WritableAttribute(17, TlvNullable(TlvUInt8), { default: null }),

            /**
             * The OnTransitionTime attribute represents the time taken to move the current level from the minimum
             * level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It
             * is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
             * OnOffTransitionTime will be used instead.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.6.5.11
             */
            onTransitionTime: OptionalWritableAttribute(18, TlvNullable(TlvUInt16), { default: null }),

            /**
             * The OffTransitionTime attribute represents the time taken to move the current level from the maximum
             * level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It
             * is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the
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
             * The TransitionTime field specifies the time that shall be taken to perform the step, in tenths of a
             * second. A step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as
             * close to this as the device is able. If the TransitionTime field is equal to null, the device SHOULD
             * move as fast as it is able.
             *
             * If the device is not able to move at a variable rate, the TransitionTime field MAY be disregarded.
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
    });

    /**
     * A PulseWidthModulationCluster supports these elements if it supports feature Lighting.
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
             * The StartUpCurrentLevel attribute shall define the desired startup level for a device when it is
             * supplied with power and this level shall be reflected in the CurrentLevel attribute. The values of the
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
     * A PulseWidthModulationCluster supports these elements if it supports feature Frequency.
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
     * This cluster supports all PulseWidthModulation features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...LightingComponent.attributes, ...FrequencyComponent.attributes },
        commands: { ...BaseComponent.commands, ...FrequencyComponent.commands }
    });
}
