/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { FixedAttribute, AccessLevel, OptionalAttribute, Attribute, OptionalWritableAttribute, WritableAttribute, OptionalEvent, EventPriority, OptionalFixedAttribute } from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt16, TlvBitmap, TlvEnum, TlvUInt24, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1
 */
export const TlvPumpStatusBitmapBits = {
    /**
     * A fault related to the system or pump device is detected.
     *
     * If this bit is set, it MAY correspond to an event in the range 2-16, see Events.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.1
     */
    deviceFault: BitFlag(0),

    /**
     * A fault related to the supply to the pump is detected.
     *
     * If this bit is set, it MAY correspond to an event in the range 0-1 or 13, see Events.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.2
     */
    supplyFault: BitFlag(1),

    /**
     * Setpoint is too low to achieve.
     */
    speedLow: BitFlag(2),

    /**
     * Setpoint is too high to achieve.
     */
    speedHigh: BitFlag(3),

    /**
     * Device control is overridden by hardware, such as an external STOP button or via a local HMI.
     *
     * While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode SHALL
     * generate a FAILURE error status until LocalOverride is cleared on the physical device. When LocalOverride is
     * cleared, the device SHALL return to the operation mode set in OperationMode.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.3
     */
    localOverride: BitFlag(16),

    /**
     * Pump is currently running
     */
    running: BitFlag(32),

    /**
     * A remote pressure sensor is used as the sensor for the regulation of the pump.
     *
     * If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as a
     * percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.4
     */
    remotePressure: BitFlag(64),

    /**
     * A remote flow sensor is used as the sensor for the regulation of the pump.
     *
     * If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a
     * percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.5
     */
    remoteFlow: BitFlag(128),

    /**
     * A remote temperature sensor is used as the sensor for the regulation of the pump.
     *
     * If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is interpreted as
     * a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue])
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.1.6
     */
    remoteTemperature: BitFlag(256)
};

export const TlvPumpStatusBitmap = TlvBitmap(TlvUInt16, TlvPumpStatusBitmapBits);

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.2
 */
export const enum TlvOperationModeEnum {
    /**
     * If the pump is running in this operation mode the setpoint is an internal variable which MAY be controlled
     * between 0% and 100%, e.g., by means of the Level Control cluster
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.2.1
     */
    Normal = 0,

    Minimum = 1,
    Maximum = 2,
    Local = 3
};

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3
 */
export const enum TlvControlModeEnum {
    /**
     * The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – MaxConstSpeed]
     * attributes.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.1
     */
    ConstantSpeed = 0,

    /**
     * The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case of
     * the internal pressure sensor, this will be the range derived from the [MinConstPressure – MaxConstPressure]
     * attributes. In case of a remote pressure sensor, this will be the range derived from the [MinMeasuredValue –
     * MaxMeasuredValue] attributes of the remote pressure sensor.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.2
     */
    ConstantPressure = 1,

    /**
     * The setpoint is interpreted as a percentage of the range derived of the [MinCompPressure – MaxCompPressure]
     * attributes. The internal setpoint will be lowered (compensated) dependent on the flow in the pump (lower flow ⇒
     * lower internal setpoint).
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.3
     */
    ProportionalPressure = 2,

    /**
     * The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case of
     * the internal flow sensor, this will be the range derived from the [MinConstFlow – MaxConstFlow] attributes. In
     * case of a remote flow sensor, this will be the range derived from the [MinMeasuredValue – MaxMeasuredValue]
     * attributes of the remote flow sensor.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.4
     */
    ConstantFlow = 3,

    /**
     * The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. In case of
     * the internal temperature sensor, this will be the range derived from the [MinConstTemp – MaxConstTemp]
     * attributes. In case of a remote temperature sensor, this will be the range derived from the [MinMeasuredValue –
     * MaxMeasuredValue] attributes of the remote temperature sensor.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.5
     */
    ConstantTemperature = 5,

    /**
     * This behavior is manufacturer defined. The pump can be stopped by setting the setpoint of the level control
     * cluster to 0, or by using the On/Off cluster. If the pump is started (at any setpoint), the speed of the pump is
     * entirely determined by the pump.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.6.3.6
     */
    Automatic = 7
};

export namespace PumpConfigurationAndControlCluster {
    export const id = 0x200;
    export const name = "PumpConfigurationAndControl";
    export const revision = 1;

    export const featureMap = {
        /**
         * ConstantPressure
         *
         * Supports operating in constant pressure mode
         */
        constantPressure: BitFlag(0),

        /**
         * CompensatedPressure
         *
         * Supports operating in compensated pressure mode
         */
        compensatedPressure: BitFlag(1),

        /**
         * ConstantFlow
         *
         * Supports operating in constant flow mode
         */
        constantFlow: BitFlag(2),

        /**
         * ConstantSpeed
         *
         * Supports operating in constant speed mode
         */
        constantSpeed: BitFlag(3),

        /**
         * ConstantTemperature
         *
         * Supports operating in constant temperature mode
         */
        constantTemperature: BitFlag(4),

        /**
         * Automatic
         *
         * Supports operating in automatic mode
         */
        automatic: BitFlag(5),

        /**
         * LocalOperation
         *
         * Supports operating using local settings
         */
        localOperation: BitFlag(6)
    };

    const Base = {
        attributes: {
            /**
             * This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not
             * apply to any specific control mode or operation mode.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.1
             */
            maxPressure: FixedAttribute(0, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not
             * apply to any specific control mode or operation mode.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.2
             */
            maxSpeed: FixedAttribute(1, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not
             * apply to any specific control mode or operation mode.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.3
             */
            maxFlow: FixedAttribute(2, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where
             * a pump controller function is active, the corresponding bit SHALL be set to 1. Where a pump controller
             * function is not active, the corresponding bit SHALL be set to 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.14
             */
            pumpStatus: OptionalAttribute(16, TlvPumpStatusBitmap, { readAcl: AccessLevel.View }),

            /**
             * This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.15
             */
            effectiveOperationMode: Attribute(
                17,
                TlvEnum<TlvOperationModeEnum>(),
                { persistent: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.16
             */
            effectiveControlMode: Attribute(
                18,
                TlvEnum<TlvControlModeEnum>(),
                { persistent: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute specifies the actual capacity of the pump as a percentage of the effective maximum
             * setpoint value. It is updated dynamically as the speed of the pump changes.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.17
             */
            capacity: Attribute(19, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the
             * speed of the pump changes.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.18
             */
            speed: OptionalAttribute(20, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the accumulated number of hours that the pump has been powered and the motor
             * has been running. It is updated dynamically as it increases. It is preserved over power cycles of the
             * pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.19
             */
            lifetimeRunningHours: OptionalWritableAttribute(
                21,
                TlvNullable(TlvUInt24),
                { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute
             * is updated dynamically as the power consumption of the pump changes.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.20
             */
            power: OptionalAttribute(22, TlvNullable(TlvUInt24), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of
             * the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy
             * consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over”
             * and starts at 0 (zero).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.21
             */
            lifetimeEnergyConsumed: OptionalWritableAttribute(
                23,
                TlvNullable(TlvUInt32),
                { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the operation mode of the pump as defined in OperationModeEnum.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.22
             */
            operationMode: WritableAttribute(
                32,
                TlvEnum<TlvOperationModeEnum>(),
                { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * This attribute specifies the control mode of the pump as defined in ControlModeEnum.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.23
             */
            controlMode: OptionalWritableAttribute(
                33,
                TlvEnum<TlvControlModeEnum>(),
                { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            )
        },

        events: {
            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            supplyVoltageLow: OptionalEvent(0, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            supplyVoltageHigh: OptionalEvent(1, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            powerMissingPhase: OptionalEvent(2, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            systemPressureLow: OptionalEvent(3, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            systemPressureHigh: OptionalEvent(4, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            dryRunning: OptionalEvent(5, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            motorTemperatureHigh: OptionalEvent(6, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            pumpMotorFatalFailure: OptionalEvent(7, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            electronicTemperatureHigh: OptionalEvent(8, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            pumpBlocked: OptionalEvent(9, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            sensorFailure: OptionalEvent(10, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            electronicNonFatalFailure: OptionalEvent(11, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            electronicFatalFailure: OptionalEvent(12, EventPriority.Critical, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            generalFault: OptionalEvent(13, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            leakage: OptionalEvent(14, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            airDetection: OptionalEvent(15, EventPriority.Info, TlvNoArguments),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.8
             */
            turbineOperation: OptionalEvent(16, EventPriority.Info, TlvNoArguments)
        }
    };

    const ConstantPressure = {
        attributes: {
            /**
             * This attribute specifies the minimum pressure the pump can achieve when it is working with the
             * ControlMode attribute set to ConstantPressure.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.4
             */
            minConstPressure: FixedAttribute(3, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum pressure the pump can achieve when it is working with the
             * ControlMode attribute set to ConstantPressure.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.5
             */
            maxConstPressure: FixedAttribute(4, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View })
        }
    };

    const Automatic = {
        attributes: {
            /**
             * This attribute specifies the minimum pressure the pump can achieve when it is working with the
             * ControlMode attribute set to ConstantPressure.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.4
             */
            minConstPressure: OptionalFixedAttribute(3, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum pressure the pump can achieve when it is working with the
             * ControlMode attribute set to ConstantPressure.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.5
             */
            maxConstPressure: OptionalFixedAttribute(4, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the minimum compensated pressure the pump can achieve when it is working with
             * the ControlMode attribute set to ProportionalPressure.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.6
             */
            minCompPressure: OptionalFixedAttribute(5, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum compensated pressure the pump can achieve when it is working with
             * the ControlMode attribute set to ProportionalPressure.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.7
             */
            maxCompPressure: OptionalFixedAttribute(6, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the minimum speed the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantSpeed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.8
             */
            minConstSpeed: OptionalFixedAttribute(7, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum speed the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantSpeed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.9
             */
            maxConstSpeed: OptionalFixedAttribute(8, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the minimum flow the pump can achieve when it is working with the Con
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.10
             */
            minConstFlow: OptionalFixedAttribute(9, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum flow the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantFlow.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.11
             */
            maxConstFlow: OptionalFixedAttribute(10, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the minimum temperature the pump can maintain in the system when it is working
             * with the ControlMode attribute set to ConstantTemperature.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.12
             */
            minConstTemp: OptionalFixedAttribute(
                11,
                TlvNullable(TlvInt16.bound({ min: -27315 })),
                { default: null, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute specifies the maximum temperature the pump can maintain in the system when it is working
             * with the ControlMode attribute set to ConstantTemperature.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.13
             */
            maxConstTemp: OptionalFixedAttribute(
                12,
                TlvNullable(TlvInt16.bound({ min: -27315 })),
                { default: null, readAcl: AccessLevel.View }
            )
        }
    };

    const CompensatedPressure = {
        attributes: {
            /**
             * This attribute specifies the minimum compensated pressure the pump can achieve when it is working with
             * the ControlMode attribute set to ProportionalPressure.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.6
             */
            minCompPressure: FixedAttribute(5, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum compensated pressure the pump can achieve when it is working with
             * the ControlMode attribute set to ProportionalPressure.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.7
             */
            maxCompPressure: FixedAttribute(6, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View })
        }
    };

    const ConstantSpeed = {
        attributes: {
            /**
             * This attribute specifies the minimum speed the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantSpeed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.8
             */
            minConstSpeed: FixedAttribute(7, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum speed the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantSpeed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.9
             */
            maxConstSpeed: FixedAttribute(8, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View })
        }
    };

    const ConstantFlow = {
        attributes: {
            /**
             * This attribute specifies the minimum flow the pump can achieve when it is working with the Con
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.10
             */
            minConstFlow: FixedAttribute(9, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View }),

            /**
             * This attribute specifies the maximum flow the pump can achieve when it is working with the ControlMode
             * attribute set to ConstantFlow.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.11
             */
            maxConstFlow: FixedAttribute(10, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View })
        }
    };

    const ConstantTemperature = {
        attributes: {
            /**
             * This attribute specifies the minimum temperature the pump can maintain in the system when it is working
             * with the ControlMode attribute set to ConstantTemperature.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.12
             */
            minConstTemp: FixedAttribute(
                11,
                TlvNullable(TlvInt16.bound({ min: -27315 })),
                { default: null, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute specifies the maximum temperature the pump can maintain in the system when it is working
             * with the ControlMode attribute set to ConstantTemperature.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.2.7.13
             */
            maxConstTemp: FixedAttribute(
                12,
                TlvNullable(TlvInt16.bound({ min: -27315 })),
                { default: null, readAcl: AccessLevel.View }
            )
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,

        supportedFeatures: {
            constantPressure: true,
            compensatedPressure: true,
            constantFlow: true,
            constantSpeed: true,
            constantTemperature: true,
            automatic: true,
            localOperation: true
        },

        elements: [
            Base,
            ConstantPressure,
            Automatic,
            CompensatedPressure,
            ConstantSpeed,
            ConstantFlow,
            ConstantTemperature
        ]
    });
};