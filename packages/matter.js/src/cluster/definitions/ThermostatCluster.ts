/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent, extendCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, OptionalAttribute, OptionalWritableAttribute, WritableAttribute, Command, TlvNoResponse, OptionalCommand, OptionalFixedAttribute, FixedAttribute } from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt8, TlvBitmap, TlvEnum, TlvUInt16, TlvUInt32, TlvInt8 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed by remote
 * networked sensors, rather than internal sensors.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.22
 */
export const TlvRemoteSensingBits = {
    /**
     * When set, LocalTemperature Value is derived from a remote node
     */
    localTemperature: BitFlag(0),

    /**
     * When set, OutdoorTemperature is derived from a remote node
     */
    outdoorTemperature: BitFlag(1),

    /**
     * When set, Occupancy is derived from a remote node
     */
    occupancy: BitFlag(2)
};

export const TlvRemoteSensing = TlvBitmap(TlvUInt8, TlvRemoteSensingBits);

/**
 * This attribute specifies the overall operating environment of the thermostat, and thus the possible system modes
 * that the thermostat can operate in. It SHALL be set to one of the following values.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.23
 */
export const enum TlvControlSequenceOfOperation {
    /**
     * Heat and Emergency are not possible
     */
    CoolingOnly = 0,

    /**
     * Heat and Emergency are not possible
     */
    CoolingWithReheat = 1,

    /**
     * Cool and precooling (see Terms) are not possible
     */
    HeatingOnly = 2,

    /**
     * Cool and precooling are not possible
     */
    HeatingWithReheat = 3,

    /**
     * All modes are possible
     */
    CoolingAndHeating = 4,

    /**
     * All modes are possible
     */
    CoolingAndHeatingWithReheat = 5
};

/**
 * This attribute specifies the current operating mode of the thermostat, It SHALL be set to one of the following
 * values, as limited by the ControlSequenceOfOperation Attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.24
 */
export const enum TlvSystemMode {
    /**
     * The Thermostat does not generate demand for Cooling or Heating
     */
    Off = 0,

    /**
     * Demand is generated for either Cooling or Heating, as required
     */
    Auto = 1,

    /**
     * Demand is only generated for Cooling
     */
    Cool = 3,

    /**
     * Demand is only generated for Heating
     */
    Heat = 4,

    /**
     * 2nd stage heating is in use to achieve desired temperature
     */
    EmergencyHeat = 5,

    /**
     * (see Terms)
     */
    Precooling = 6,

    FanOnly = 7,
    Dry = 8,
    Sleep = 9
};

/**
 * This attribute specifies whether each of the alarms listed below is enabled. When the bit number corresponding to
 * the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not corresponding to a code in the table
 * are reserved.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.25
 */
export const TlvAlarmMaskBits = {
    initializationFailure: BitFlag(0),
    hardwareFailure: BitFlag(1),
    selfCalibrationFailure: BitFlag(2)
};

export const TlvAlarmMask = TlvBitmap(TlvUInt8, TlvAlarmMaskBits);

/**
 * This attribute specifies the temperature hold status on the thermostat. If hold status is on, the thermostat SHOULD
 * maintain the temperature set point for the current mode until a system mode change. If hold status is off, the
 * thermostat SHOULD follow the setpoint transitions specified by its internal scheduling program. If the thermostat
 * supports setpoint hold for a specific duration, it SHOULD also implement the TemperatureSetpointHoldDuration
 * attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.30
 */
export const enum TlvTemperatureSetpointHold {
    /**
     * Follow scheduling program
     */
    SetpointHoldOff = 0,

    /**
     * Maintain current setpoint, regardless of schedule transitions
     */
    SetpointHoldOn = 1
};

/**
 * This attribute determines the operational state of the thermostat’s programming. The thermostat SHALL modify its
 * programming operation when this attribute is modified by a client and update this attribute when its programming
 * operation is modified locally by a user. The thermostat MAY support more than one active
 * ThermostatProgrammingOperationMode. For example, the thermostat MAY operate simultaneously in Schedule Programming
 * Mode and Recovery Mode.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.32
 */
export const TlvThermostatProgrammingOperationModeBits = {
    /**
     * Schedule programming mode. This enables any programmed weekly schedule configurations.
     */
    scheduleActive: BitFlag(0),

    /**
     * Auto/recovery mode
     */
    autoRecovery: BitFlag(1),

    /**
     * Economy/EnergyStar mode
     */
    economy: BitFlag(2)
};

export const TlvThermostatProgrammingOperationMode = TlvBitmap(TlvUInt8, TlvThermostatProgrammingOperationModeBits);

/**
 * This attribute represents the current relay state of the heat, cool, and fan relays.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.33
 */
export const TlvThermostatRunningStateBits = {
    /**
     * Heat State On
     */
    heat: BitFlag(0),

    /**
     * Cool State On
     */
    cool: BitFlag(1),

    /**
     * Fan State On
     */
    fan: BitFlag(2),

    /**
     * Heat 2nd Stage State On
     */
    heatStage2: BitFlag(3),

    /**
     * Cool 2nd Stage State On
     */
    coolStage2: BitFlag(4),

    /**
     * Fan 2nd Stage State On
     */
    fanStage2: BitFlag(5),

    /**
     * Fan 3rd Stage Stage On
     */
    fanStage3: BitFlag(6),

    heatSecondStageStateOn: BitFlag(8),
    coolSecondStageStateOn: BitFlag(16),
    fanSecondStageStateOn: BitFlag(32),
    fanThirdStageStateOn: BitFlag(64)
};

export const TlvThermostatRunningState = TlvBitmap(TlvUInt16, TlvThermostatRunningStateBits);

/**
 * This attribute specifies the source of the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint (i.e.,
 * who or what determined the current setpoint).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.34
 */
export const enum TlvSetpointChangeSource {
    /**
     * Manual, user-initiated setpoint change via the thermostat
     */
    Manual = 0,

    /**
     * Schedule/internal programming-initiated setpoint change
     */
    Schedule = 1,

    /**
     * Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)
     */
    External = 2
};

/**
 * This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how Cooling and
 * Heating condition is achieved by Mini Split AC.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.44
 */
export const enum TlvAcType {
    /**
     * Unknown AC Type
     */
    Unknown = 0,

    /**
     * Cooling and Fixed Speed
     */
    CoolingFixed = 1,

    /**
     * Heat Pump and Fixed Speed
     */
    HeatPumpFixed = 2,

    /**
     * Cooling and Inverter
     */
    CoolingInverter = 3,

    /**
     * Heat Pump and Inverter
     */
    HeatPumpInverter = 4
};

/**
 * This attribute indicates type of refrigerant used within the Mini Split AC.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.46
 */
export const enum TlvAcRefrigerantType {
    /**
     * Unknown Refrigerant Type
     */
    Unknown = 0,

    /**
     * R22 Refrigerant
     */
    R22 = 1,

    /**
     * R410a Refrigerant
     */
    R410A = 2,

    /**
     * R407c Refrigerant
     */
    R407C = 3
};

/**
 * This attribute indicates type of Compressor used within the Mini Split AC.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.47
 */
export const enum TlvAcCompressorType {
    /**
     * Unknown compressor type
     */
    Unknown = 0,

    /**
     * Max working ambient 43 °C
     */
    T1 = 1,

    /**
     * Max working ambient 35 °C
     */
    T2 = 2,

    /**
     * Max working ambient 52 °C
     */
    T3 = 3
};

/**
 * This attribute indicates the type of errors encountered within the Mini Split AC. Error values are reported with
 * four bytes values. Each bit within the four bytes indicates the unique error.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.48
 */
export const TlvAcErrorCodeBits = {
    /**
     * Compressor Failure or Refrigerant Leakage
     */
    compressorFail: BitFlag(0),

    /**
     * Room Temperature Sensor Failure
     */
    roomSensorFail: BitFlag(1),

    /**
     * Outdoor Temperature Sensor Failure
     */
    outdoorSensorFail: BitFlag(2),

    /**
     * Indoor Coil Temperature Sensor Failure
     */
    coilSensorFail: BitFlag(3),

    /**
     * Fan Failure
     */
    fanFail: BitFlag(4)
};

export const TlvAcErrorCode = TlvBitmap(TlvUInt32, TlvAcErrorCodeBits);

/**
 * This attribute indicates the position of Louver on the AC.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.49
 */
export const enum TlvAcLouverPosition {
    /**
     * Fully Closed
     */
    Closed = 1,

    /**
     * Fully Open
     */
    Open = 2,

    /**
     * Quarter Open
     */
    Quarter = 3,

    /**
     * Half Open
     */
    Half = 4,

    /**
     * Three Quarters Open
     */
    ThreeQuarters = 5
};

/**
 * This attribute specifies the format for the ACCapacity attribute.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.51
 */
export const enum TlvAcCapacityFormat {
    /**
     * British Thermal Unit per Hour
     */
    BtUh = 0
};

export const enum TlvSetpointAdjustMode {
    Heat = 0,
    Cool = 1,
    Both = 2
};

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
 */
export const TlvSetpointRaiseLowerRequest = TlvObject({
    mode: TlvField(0, TlvEnum<TlvSetpointAdjustMode>()),
    amount: TlvField(1, TlvInt8)
});

/**
 * This attribute specifies whether the heated/cooled space is occupied or not, as measured locally or remotely (over
 * the network). If bit 0 = 1, the space is occupied, else it is unoccupied. All other bits are reserved.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.4
 */
export const TlvOccupancyBits = { occupied: BitFlag(1) };

export const TlvOccupancy = TlvBitmap(TlvUInt8, TlvOccupancyBits);

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7
 */
export const enum TlvThermostatRunningMode {
    Off = 0,
    Cool = 3,
    Heat = 4
};

/**
 * This attribute represents the day of the week that this thermostat considers to be the start of week for weekly set
 * point scheduling.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.27
 */
export const enum TlvStartOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
};

export const TlvDayOfWeekBits = {
    sunday: BitFlag(1),
    monday: BitFlag(2),
    tuesday: BitFlag(4),
    wednesday: BitFlag(8),
    thursday: BitFlag(16),
    friday: BitFlag(32),
    saturday: BitFlag(64),
    away: BitFlag(128)
};

export const TlvDayOfWeek = TlvBitmap(TlvUInt8, TlvDayOfWeekBits);
export const TlvModeForSequenceBits = { heatSetpointPresent: BitFlag(1), coolSetpointPresent: BitFlag(2) };

export const TlvModeForSequence = TlvBitmap(TlvUInt8, TlvModeForSequenceBits);

/**
 * This represents a single transition in a Thermostat schedule
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.9.5
 */
export const TlvThermostatScheduleTransition = TlvObject({
    /**
     * This field represents the start time of the schedule transition during the associated day. The time will be
     * represented by a 16 bits unsigned integer to designate the minutes since midnight. For example, 6am will be
     * represented by 360 minutes since midnight and 11:30pm will be represented by 1410 minutes since midnight.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.9.5.1
     */
    transitionTime: TlvField(0, TlvUInt16.bound({ max: 1439 })),

    heatSetpoint: TlvField(1, TlvNullable(TlvInt16)),
    coolSetpoint: TlvField(2, TlvNullable(TlvInt16))
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
 */
export const TlvGetWeeklyScheduleResponseRequest = TlvObject({
    numberOfTransitionsForSequence: TlvField(0, TlvUInt8),
    dayOfWeekForSequence: TlvField(1, TlvDayOfWeek),
    modeForSequence: TlvField(2, TlvModeForSequence),
    transitions: TlvField(3, TlvThermostatScheduleTransition)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
 */
export const TlvSetWeeklyScheduleRequest = TlvObject({
    numberOfTransitionsForSequence: TlvField(0, TlvUInt8),
    dayOfWeekForSequence: TlvField(1, TlvDayOfWeek),
    modeForSequence: TlvField(2, TlvModeForSequence),
    transitions: TlvField(3, TlvThermostatScheduleTransition)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
 */
export const TlvGetWeeklyScheduleRequest = TlvObject({
    daysToReturn: TlvField(0, TlvDayOfWeek),
    modeToReturn: TlvField(1, TlvModeForSequence)
});

/**
 * Standard Thermostat cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3
 */
export const ThermostatMetadata = ClusterMetadata({
    id: 0x201,
    name: "Thermostat",
    revision: 1,

    features: {
        /**
         * Heating
         *
         * Thermostat is capable of managing a heating device
         */
        heating: BitFlag(0),

        /**
         * Cooling
         *
         * Thermostat is capable of managing a cooling device
         */
        cooling: BitFlag(1),

        /**
         * Occupancy
         *
         * Supports Occupied and Unoccupied setpoints
         */
        occupancy: BitFlag(2),

        /**
         * ScheduleConfiguration
         *
         * Supports remote configuration of a weekly schedule of setpoint transitions
         */
        scheduleConfiguration: BitFlag(3),

        /**
         * Setback
         *
         * Supports configurable setback (or span)
         */
        setback: BitFlag(4),

        /**
         * AutoMode
         *
         * Supports a System Mode of Auto
         */
        autoMode: BitFlag(5),

        /**
         * LocalTemperatureNotExposed
         *
         * Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute
         */
        localTemperatureNotExposed: BitFlag(6)
    }
});

/**
 * A ThermostatCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute indicates the current LocalTemperature value, when available. The value may be local, or
         * remote, depending on the value of the RemoteSensing attribute when supported.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.2
         */
        localTemperature: Attribute(0, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

        /**
         * This attribute represents the outdoor temperature, as measured locally or remotely (over the network).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.3
         */
        outdoorTemperature: OptionalAttribute(1, TlvNullable(TlvInt16), { default: null, readAcl: AccessLevel.View }),

        /**
         * This attribute indicates when the local temperature, outdoor temperature and occupancy are being sensed by
         * remote networked sensors, rather than internal sensors.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.22
         */
        remoteSensing: OptionalWritableAttribute(
            26,
            TlvRemoteSensing,
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute specifies the overall operating environment of the thermostat, and thus the possible system
         * modes that the thermostat can operate in. It SHALL be set to one of the following values.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.23
         */
        controlSequenceOfOperation: WritableAttribute(
            27,
            TlvEnum<TlvControlSequenceOfOperation>(),
            { persistent: true, default: 4, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute specifies the current operating mode of the thermostat, It SHALL be set to one of the
         * following values, as limited by the ControlSequenceOfOperation Attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.24
         */
        systemMode: WritableAttribute(
            28,
            TlvEnum<TlvSystemMode>(),
            { scene: true, persistent: true, default: 1, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute specifies whether each of the alarms listed below is enabled. When the bit number
         * corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not
         * corresponding to a code in the table are reserved.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.25
         */
        alarmMask: OptionalAttribute(29, TlvAlarmMask, { readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the temperature hold status on the thermostat. If hold status is on, the thermostat
         * SHOULD maintain the temperature set point for the current mode until a system mode change. If hold status is
         * off, the thermostat SHOULD follow the setpoint transitions specified by its internal scheduling program. If
         * the thermostat supports setpoint hold for a specific duration, it SHOULD also implement the
         * TemperatureSetpointHoldDuration attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.30
         */
        temperatureSetpointHold: OptionalWritableAttribute(
            35,
            TlvEnum<TlvTemperatureSetpointHold>(),
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that support hold
         * for a specified duration SHOULD implement this attribute. The null value indicates the field is unused. All
         * other values are reserved.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.31
         */
        temperatureSetpointHoldDuration: OptionalWritableAttribute(
            36,
            TlvNullable(TlvUInt16.bound({ max: 1440 })),
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute determines the operational state of the thermostat’s programming. The thermostat SHALL modify
         * its programming operation when this attribute is modified by a client and update this attribute when its
         * programming operation is modified locally by a user. The thermostat MAY support more than one active
         * ThermostatProgrammingOperationMode. For example, the thermostat MAY operate simultaneously in Schedule
         * Programming Mode and Recovery Mode.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.32
         */
        thermostatProgrammingOperationMode: OptionalWritableAttribute(
            37,
            TlvThermostatProgrammingOperationMode,
            { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute represents the current relay state of the heat, cool, and fan relays.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.33
         */
        thermostatRunningState: OptionalAttribute(41, TlvThermostatRunningState, { readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the source of the current active OccupiedCoolingSetpoint or OccupiedHeatingSetpoint
         * (i.e., who or what determined the current setpoint).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.34
         */
        setpointChangeSource: OptionalAttribute(48, TlvEnum<TlvSetpointChangeSource>(), { readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the delta between the current active OccupiedCoolingSetpoint or
         * OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the
         * SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement
         * SetpointChangeSource.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.35
         */
        setpointChangeAmount: OptionalAttribute(49, TlvNullable(TlvInt16), { default: 32768, readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change was
         * recorded.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.36
         */
        setpointChangeSourceTimestamp: OptionalAttribute(50, TlvUInt32, { readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the delta between the LocalTemperature Value and the OccupiedHeatingSetpoint or
         * UnoccupiedHeatingSetpoint attributes at which the Thermostat server will operate in emergency heat mode.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.43
         */
        emergencyHeatDelta: OptionalWritableAttribute(
            58,
            TlvUInt8,
            { persistent: true, default: 250, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how Cooling
         * and Heating condition is achieved by Mini Split AC.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.44
         */
        acType: OptionalWritableAttribute(
            64,
            TlvEnum<TlvAcType>(),
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute indicates capacity of Mini Split AC in terms of the format defined by the ACCapacityFormat
         * attribute
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.45
         */
        acCapacity: OptionalWritableAttribute(
            65,
            TlvUInt16,
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute indicates type of refrigerant used within the Mini Split AC.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.46
         */
        acRefrigerantType: OptionalWritableAttribute(
            66,
            TlvEnum<TlvAcRefrigerantType>(),
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute indicates type of Compressor used within the Mini Split AC.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.47
         */
        acCompressorType: OptionalWritableAttribute(
            67,
            TlvEnum<TlvAcCompressorType>(),
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute indicates the type of errors encountered within the Mini Split AC. Error values are reported
         * with four bytes values. Each bit within the four bytes indicates the unique error.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.48
         */
        acErrorCode: OptionalWritableAttribute(
            68,
            TlvAcErrorCode,
            { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute indicates the position of Louver on the AC.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.49
         */
        acLouverPosition: OptionalWritableAttribute(
            69,
            TlvEnum<TlvAcLouverPosition>(),
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute represents the temperature of the AC coil, as measured locally or remotely (over the network).
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.50
         */
        acCoilTemperature: OptionalAttribute(70, TlvNullable(TlvInt16), { default: 32768, readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the format for the ACCapacity attribute.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.51
         */
        acCapacityFormat: OptionalWritableAttribute(
            71,
            TlvEnum<TlvAcCapacityFormat>(),
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        )
    },

    commands: {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        setpointRaiseLower: Command(0, TlvSetpointRaiseLowerRequest, 0, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        getRelayStatusLogResponse: OptionalCommand(1, TlvNoArguments, 1, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        getRelayStatusLog: OptionalCommand(4, TlvNoArguments, 1, TlvNoArguments)
    }
});

/**
 * A ThermostatCluster supports these elements if it supports feature Occupancy.
 */
export const OccupancyComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute specifies whether the heated/cooled space is occupied or not, as measured locally or remotely
         * (over the network). If bit 0 = 1, the space is occupied, else it is unoccupied. All other bits are reserved.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.4
         */
        occupancy: Attribute(
            2,
            TlvOccupancy,
            { default: BitFlags(TlvOccupancyBits, "occupied"), readAcl: AccessLevel.View }
        )
    }
});

/**
 * A ThermostatCluster supports these elements if it supports feature Heating.
 */
export const HeatingComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute specifies the absolute minimum level that the heating setpoint MAY be set to. This is a
         * limitation imposed by the manufacturer.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.5
         */
        absMinHeatSetpointLimit: OptionalFixedAttribute(3, TlvInt16, { default: 700, readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the absolute maximum level that the heating setpoint MAY be set to. This is a
         * limitation imposed by the manufacturer.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.6
         */
        absMaxHeatSetpointLimit: OptionalFixedAttribute(4, TlvInt16, { default: 3000, readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the level of heating demanded by the PI loop in percent. This value is 0 when the
         * thermostat is in “off” or “cooling” mode.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.10
         */
        piHeatingDemand: OptionalAttribute(8, TlvUInt8.bound({ max: 100 }), { readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the heating mode setpoint when the room is occupied.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.14
         */
        occupiedHeatingSetpoint: WritableAttribute(
            18,
            TlvInt16,
            { scene: true, persistent: true, default: 2000, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
        ),

        /**
         * This attribute specifies the heating mode setpoint when the room is unoccupied.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.16
         */
        unoccupiedHeatingSetpoint: OptionalWritableAttribute(
            20,
            TlvInt16,
            { persistent: true, default: 2000, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
        ),

        /**
         * This attribute specifies the minimum level that the heating setpoint MAY be set to.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.17
         */
        minHeatSetpointLimit: OptionalWritableAttribute(
            21,
            TlvInt16,
            { persistent: true, default: 700, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute specifies the maximum level that the heating setpoint MAY be set to.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.18
         */
        maxHeatSetpointLimit: OptionalWritableAttribute(
            22,
            TlvInt16,
            { persistent: true, default: 3000, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        )
    }
});

/**
 * A ThermostatCluster supports these elements if it supports feature Cooling.
 */
export const CoolingComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute specifies the absolute minimum level that the cooling setpoint MAY be set to. This is a
         * limitation imposed by the manufacturer.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.7
         */
        absMinCoolSetpointLimit: OptionalFixedAttribute(5, TlvInt16, { default: 1600, readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the absolute maximum level that the cooling setpoint MAY be set to. This is a
         * limitation imposed by the manufacturer.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.8
         */
        absMaxCoolSetpointLimit: OptionalFixedAttribute(6, TlvInt16, { default: 3200, readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the level of cooling demanded by the PI (proportional integral) control loop in use
         * by the thermostat (if any), in percent. This value is 0 when the thermostat is in “off” or “heating” mode.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.9
         */
        piCoolingDemand: OptionalAttribute(7, TlvUInt8.bound({ max: 100 }), { readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the cooling mode setpoint when the room is occupied.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.13
         */
        occupiedCoolingSetpoint: WritableAttribute(
            17,
            TlvInt16,
            { scene: true, persistent: true, default: 2600, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
        ),

        /**
         * This attribute specifies the cooling mode setpoint when the room is unoccupied.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.15
         */
        unoccupiedCoolingSetpoint: OptionalWritableAttribute(
            19,
            TlvInt16,
            { persistent: true, default: 2600, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
        ),

        /**
         * This attribute specifies the minimum level that the cooling setpoint MAY be set to.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.19
         */
        minCoolSetpointLimit: OptionalWritableAttribute(
            23,
            TlvInt16,
            { persistent: true, default: 1600, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute specifies the maximum level that the cooling setpoint MAY be set to.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.20
         */
        maxCoolSetpointLimit: OptionalWritableAttribute(
            24,
            TlvInt16,
            { persistent: true, default: 3200, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        )
    }
});

/**
 * A ThermostatCluster supports these elements if doesn't support feature LTNE.
 */
export const NotLocalTemperatureNotExposedComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute specifies the offset the Thermostat server SHALL make to the measured temperature (locally or
         * remotely) to adjust the LocalTemperature Value prior to using, displaying or reporting it.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.12
         */
        localTemperatureCalibration: OptionalWritableAttribute(
            16,
            TlvInt8.bound({ min: -25, max: 25 }),
            { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        )
    }
});

/**
 * A ThermostatCluster supports these elements if it supports feature AutoMode.
 */
export const AutoModeComponent = ClusterComponent({
    attributes: {
        /**
         * On devices which support the AUTO feature, this attribute specifies the minimum difference between the Heat
         * Setpoint and the Cool Setpoint.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.21
         */
        minSetpointDeadBand: WritableAttribute(
            25,
            TlvInt8.bound({ max: 25 }),
            { persistent: true, default: 25, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7
         */
        thermostatRunningMode: OptionalAttribute(30, TlvEnum<TlvThermostatRunningMode>(), { readAcl: AccessLevel.View })
    }
});

/**
 * A ThermostatCluster supports these elements if it supports feature ScheduleConfiguration.
 */
export const ScheduleConfigurationComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute represents the day of the week that this thermostat considers to be the start of week for
         * weekly set point scheduling.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.27
         */
        startOfWeek: FixedAttribute(32, TlvEnum<TlvStartOfWeek>(), { readAcl: AccessLevel.View }),

        /**
         * This attribute determines how many weekly schedule transitions the thermostat is capable of handling.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.28
         */
        numberOfWeeklyTransitions: FixedAttribute(33, TlvUInt8, { readAcl: AccessLevel.View }),

        /**
         * This attribute determines how many daily schedule transitions the thermostat is capable of handling.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.29
         */
        numberOfDailyTransitions: FixedAttribute(34, TlvUInt8, { readAcl: AccessLevel.View })
    },

    commands: {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        getWeeklyScheduleResponse: Command(0, TlvGetWeeklyScheduleResponseRequest, 0, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        setWeeklySchedule: Command(1, TlvSetWeeklyScheduleRequest, 1, TlvNoResponse),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        getWeeklySchedule: Command(2, TlvGetWeeklyScheduleRequest, 0, TlvGetWeeklyScheduleResponseRequest),

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        clearWeeklySchedule: Command(3, TlvNoArguments, 3, TlvNoResponse)
    }
});

/**
 * A ThermostatCluster supports these elements if it supports feature Setback.
 */
export const SetbackComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute specifies the amount that the Thermostat server will allow the LocalTemperature Value to
         * float above the OccupiedCooling setpoint (i.e., OccupiedCooling + OccupiedSetback) or below the
         * OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) before initiating a state change to bring
         * the temperature back to the user’s desired setpoint. This attribute is sometimes also referred to as the
         * “span.”
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.37
         */
        occupiedSetback: WritableAttribute(
            52,
            TlvNullable(TlvUInt8),
            { persistent: true, default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute specifies the minimum value that the Thermostat server will allow the OccupiedSetback
         * attribute to be configured by a user.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.38
         */
        occupiedSetbackMin: FixedAttribute(53, TlvNullable(TlvUInt8), { default: null, readAcl: AccessLevel.View }),

        /**
         * This attribute specifies the maximum value that the Thermostat server will allow the OccupiedSetback
         * attribute to be configured by a user.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.39
         */
        occupiedSetbackMax: FixedAttribute(
            54,
            TlvNullable(TlvUInt8.bound({ max: 254 })),
            { default: null, readAcl: AccessLevel.View }
        ),

        /**
         * This attribute specifies the amount that the Thermostat server will allow the LocalTemperature Value to
         * float above the UnoccupiedCooling setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) or below the
         * UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - UnoccupiedSetback) before initiating a state change to
         * bring the temperature back to the user’s desired setpoint. This attribute is sometimes also referred to as
         * the “span.”
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.40
         */
        unoccupiedSetback: OptionalWritableAttribute(
            55,
            TlvNullable(TlvUInt8),
            { persistent: true, default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        ),

        /**
         * This attribute specifies the minimum value that the Thermostat server will allow the UnoccupiedSetback
         * attribute to be configured by a user.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.41
         */
        unoccupiedSetbackMin: OptionalFixedAttribute(
            56,
            TlvNullable(TlvUInt8),
            { default: null, readAcl: AccessLevel.View }
        ),

        /**
         * This attribute specifies the maximum value that the Thermostat server will allow the UnoccupiedSetback
         * attribute to be configured by a user.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.7.42
         */
        unoccupiedSetbackMax: OptionalFixedAttribute(
            57,
            TlvNullable(TlvUInt8.bound({ max: 254 })),
            { default: null, readAcl: AccessLevel.View }
        )
    }
});

export type ThermostatCluster<T extends TypeFromPartialBitSchema<typeof ThermostatMetadata.features>> = 
    typeof ThermostatMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent
    & (T extends { occupancy: true } ? typeof OccupancyComponent : {})
    & (T extends { heating: true } ? typeof HeatingComponent : {})
    & (T extends { cooling: true } ? typeof CoolingComponent : {})
    & (T extends { localTemperatureNotExposed: false } ? typeof NotLocalTemperatureNotExposedComponent : {})
    & (T extends { autoMode: true } ? typeof AutoModeComponent : {})
    & (T extends { scheduleConfiguration: true } ? typeof ScheduleConfigurationComponent : {})
    & (T extends { setback: true } ? typeof SetbackComponent : {});

export function ThermostatCluster<T extends (keyof typeof ThermostatMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...ThermostatMetadata,
        supportedFeatures: BitFlags(ThermostatMetadata.features, ...features),
        ...BaseComponent
    };
    extendCluster(cluster, OccupancyComponent, { occupancy: true });
    extendCluster(cluster, HeatingComponent, { heating: true });
    extendCluster(cluster, CoolingComponent, { cooling: true });
    extendCluster(cluster, NotLocalTemperatureNotExposedComponent, { localTemperatureNotExposed: false });
    extendCluster(cluster, AutoModeComponent, { autoMode: true });
    extendCluster(cluster, ScheduleConfigurationComponent, { scheduleConfiguration: true });
    extendCluster(cluster, SetbackComponent, { setback: true });
    
    return cluster as unknown as ThermostatCluster<BitFlags<typeof ThermostatMetadata.features, T>>;
};