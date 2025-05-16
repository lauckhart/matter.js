/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Thermostat = Cluster(
    { name: "Thermostat", id: 0x201 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 8 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "HEAT", constraint: "0", conformance: "AUTO, O.a+", longName: "Heating" }),
        Field({ name: "COOL", constraint: "1", conformance: "AUTO, O.a+", longName: "Cooling" }),
        Field({ name: "OCC", constraint: "2", conformance: "O", longName: "Occupancy" }),
        Field({ name: "SCH", constraint: "3", conformance: "O", longName: "ScheduleConfiguration" }),
        Field({ name: "SB", constraint: "4", conformance: "O", longName: "Setback" }),
        Field({ name: "AUTO", constraint: "5", conformance: "O", longName: "AutoMode" }),
        Field({ name: "LTNE", constraint: "6", conformance: "O", longName: "LocalTemperatureNotExposed" }),
        Field({ name: "MSCH", constraint: "7", conformance: "O", longName: "MatterScheduleConfiguration" }),
        Field({ name: "PRES", constraint: "8", conformance: "O", longName: "Presets" })
    ),

    Attribute({
        name: "LocalTemperature", id: 0x0, type: "temperature",
        default: null, conformance: "M", access: "R V", quality: "X P"
    }),
    Attribute({
        name: "OutdoorTemperature", id: 0x1, type: "temperature",
        default: null, conformance: "O", access: "R V", quality: "X"
    }),
    Attribute({ name: "Occupancy", id: 0x2, type: "OccupancyBitmap", default: 1, conformance: "OCC", access: "R V" }),
    Attribute({
        name: "AbsMinHeatSetpointLimit", id: 0x3, type: "temperature",
        default: { type: "celsius", value: 7 }, constraint: "desc", conformance: "[HEAT]", access: "R V",
        quality: "F"
    }),
    Attribute({
        name: "AbsMaxHeatSetpointLimit", id: 0x4, type: "temperature",
        default: { type: "celsius", value: 30 }, constraint: "desc", conformance: "[HEAT]", access: "R V",
        quality: "F"
    }),
    Attribute({
        name: "AbsMinCoolSetpointLimit", id: 0x5, type: "temperature",
        default: { type: "celsius", value: 16 }, constraint: "desc", conformance: "[COOL]", access: "R V",
        quality: "F"
    }),
    Attribute({
        name: "AbsMaxCoolSetpointLimit", id: 0x6, type: "temperature",
        default: { type: "celsius", value: 32 }, constraint: "desc", conformance: "[COOL]", access: "R V",
        quality: "F"
    }),
    Attribute({
        name: "PiCoolingDemand", id: 0x7, type: "uint8",
        constraint: "0% to 100%", conformance: "[COOL]", access: "R V", quality: "P"
    }),
    Attribute({
        name: "PiHeatingDemand", id: 0x8, type: "uint8",
        constraint: "0% to 100%", conformance: "[HEAT]", access: "R V", quality: "P"
    }),
    Attribute({
        name: "HvacSystemTypeConfiguration", id: 0x9, type: "HVACSystemTypeBitmap",
        default: 0, constraint: "desc", conformance: "D", access: "R[W] VM", quality: "N"
    }),
    Attribute({
        name: "LocalTemperatureCalibration", id: 0x10, type: "SignedTemperature",
        default: { type: "celsius", value: 0 }, conformance: "[!LTNE]", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "OccupiedCoolingSetpoint", id: 0x11, type: "temperature",
        default: { type: "celsius", value: 26 }, constraint: "desc", conformance: "COOL", access: "RW VO",
        quality: "N"
    }),
    Attribute({
        name: "OccupiedHeatingSetpoint", id: 0x12, type: "temperature",
        default: { type: "celsius", value: 20 }, constraint: "desc", conformance: "HEAT", access: "RW VO",
        quality: "N"
    }),
    Attribute({
        name: "UnoccupiedCoolingSetpoint", id: 0x13, type: "temperature",
        default: { type: "celsius", value: 26 }, constraint: "desc", conformance: "COOL & OCC",
        access: "RW VO", quality: "N"
    }),
    Attribute({
        name: "UnoccupiedHeatingSetpoint", id: 0x14, type: "temperature",
        default: { type: "celsius", value: 20 }, constraint: "desc", conformance: "HEAT & OCC",
        access: "RW VO", quality: "N"
    }),
    Attribute({
        name: "MinHeatSetpointLimit", id: 0x15, type: "temperature",
        default: { type: "reference", name: "AbsMinHeatSetpointLimit" }, constraint: "desc",
        conformance: "[HEAT]", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "MaxHeatSetpointLimit", id: 0x16, type: "temperature",
        default: { type: "reference", name: "AbsMaxHeatSetpointLimit" }, constraint: "desc",
        conformance: "[HEAT]", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "MinCoolSetpointLimit", id: 0x17, type: "temperature",
        default: { type: "reference", name: "AbsMinCoolSetpointLimit" }, constraint: "desc",
        conformance: "[COOL]", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "MaxCoolSetpointLimit", id: 0x18, type: "temperature",
        default: { type: "reference", name: "AbsMaxCoolSetpointLimit" }, constraint: "desc",
        conformance: "[COOL]", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "MinSetpointDeadBand", id: 0x19, type: "SignedTemperature",
        default: { type: "celsius", value: 2 }, constraint: "0 to 12.7°C", conformance: "AUTO",
        access: "R[W] VM", quality: "N"
    }),
    Attribute({
        name: "RemoteSensing", id: 0x1a, type: "RemoteSensingBitmap",
        default: 0, conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "ControlSequenceOfOperation", id: 0x1b, type: "ControlSequenceOfOperationEnum",
        constraint: "desc", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "SystemMode", id: 0x1c, type: "SystemModeEnum",
        default: 1, constraint: "desc", conformance: "M", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "ThermostatRunningMode", id: 0x1e, type: "ThermostatRunningModeEnum",
        default: 0, constraint: "desc", conformance: "[AUTO]", access: "R V"
    }),
    Attribute({
        name: "StartOfWeek", id: 0x20, type: "StartOfWeekEnum",
        constraint: "desc", conformance: "SCH", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfWeeklyTransitions", id: 0x21, type: "uint8",
        default: 0, conformance: "SCH", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfDailyTransitions", id: 0x22, type: "uint8",
        default: 0, conformance: "SCH", access: "R V", quality: "F"
    }),
    Attribute({
        name: "TemperatureSetpointHold", id: 0x23, type: "TemperatureSetpointHoldEnum",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "TemperatureSetpointHoldDuration", id: 0x24, type: "uint16",
        default: null, constraint: "max 1440", conformance: "O", access: "RW VM", quality: "X N"
    }),
    Attribute({
        name: "ThermostatProgrammingOperationMode", id: 0x25, type: "ProgrammingOperationModeBitmap",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "P"
    }),
    Attribute({
        name: "ThermostatRunningState", id: 0x29, type: "RelayStateBitmap",
        constraint: "desc", conformance: "O", access: "R V"
    }),
    Attribute({
        name: "SetpointChangeSource", id: 0x30, type: "SetpointChangeSourceEnum",
        default: 0, constraint: "desc", conformance: "O", access: "R V"
    }),
    Attribute({
        name: "SetpointChangeAmount", id: 0x31, type: "TemperatureDifference",
        default: null, conformance: "O", access: "R V", quality: "X"
    }),
    Attribute({ name: "SetpointChangeSourceTimestamp", id: 0x32, type: "epoch-s", default: 0, conformance: "O", access: "R V" }),
    Attribute({
        name: "OccupiedSetback", id: 0x34, type: "UnsignedTemperature",
        default: null, constraint: "occupiedSetbackMin to occupiedSetbackMax", conformance: "SB",
        access: "RW VM", quality: "X N"
    }),
    Attribute({
        name: "OccupiedSetbackMin", id: 0x35, type: "UnsignedTemperature",
        default: null, constraint: "max occupiedSetbackMax", conformance: "SB", access: "R V",
        quality: "X F"
    }),
    Attribute({
        name: "OccupiedSetbackMax", id: 0x36, type: "UnsignedTemperature",
        default: null, constraint: "occupiedSetbackMin to 25.4°C", conformance: "SB", access: "R V",
        quality: "X F"
    }),
    Attribute({
        name: "UnoccupiedSetback", id: 0x37, type: "UnsignedTemperature",
        default: null, constraint: "unoccupiedSetbackMin to unoccupiedSetbackMax", conformance: "SB & OCC",
        access: "RW VM", quality: "X N"
    }),
    Attribute({
        name: "UnoccupiedSetbackMin", id: 0x38, type: "UnsignedTemperature",
        default: null, constraint: "max unoccupiedSetbackMax", conformance: "SB & OCC", access: "R V",
        quality: "X F"
    }),
    Attribute({
        name: "UnoccupiedSetbackMax", id: 0x39, type: "UnsignedTemperature",
        default: null, constraint: "unoccupiedSetbackMin to 25.4°C", conformance: "SB & OCC", access: "R V",
        quality: "X F"
    }),
    Attribute({
        name: "EmergencyHeatDelta", id: 0x3a, type: "UnsignedTemperature",
        default: { type: "celsius", value: 25 }, conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "AcType", id: 0x40, type: "ACTypeEnum",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute(
        { name: "AcCapacity", id: 0x41, type: "uint16", default: 0, conformance: "O", access: "RW VM", quality: "N" }
    ),
    Attribute({
        name: "AcRefrigerantType", id: 0x42, type: "ACRefrigerantTypeEnum",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "AcCompressorType", id: 0x43, type: "ACCompressorTypeEnum",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({ name: "AcErrorCode", id: 0x44, type: "ACErrorCodeBitmap", default: 0, conformance: "O", access: "RW VM" }),
    Attribute({
        name: "AcLouverPosition", id: 0x45, type: "ACLouverPositionEnum",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "AcCoilTemperature", id: 0x46, type: "temperature",
        default: null, conformance: "O", access: "R V", quality: "X"
    }),
    Attribute({
        name: "AcCapacityFormat", id: 0x47, type: "ACCapacityFormatEnum",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "N"
    }),

    Attribute(
        {
            name: "PresetTypes", id: 0x48, type: "list",
            constraint: "desc", conformance: "PRES", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "PresetTypeStruct" })
    ),

    Attribute(
        {
            name: "ScheduleTypes", id: 0x49, type: "list",
            constraint: "desc", conformance: "MSCH", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "ScheduleTypeStruct" })
    ),

    Attribute({ name: "NumberOfPresets", id: 0x4a, type: "uint8", default: 0, conformance: "PRES", access: "R V", quality: "F" }),
    Attribute({
        name: "NumberOfSchedules", id: 0x4b, type: "uint8",
        default: 0, conformance: "MSCH", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfScheduleTransitions", id: 0x4c, type: "uint8",
        default: 0, conformance: "MSCH", access: "R V", quality: "F"
    }),
    Attribute({
        name: "NumberOfScheduleTransitionPerDay", id: 0x4d, type: "uint8",
        default: null, conformance: "MSCH", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "ActivePresetHandle", id: 0x4e, type: "octstr",
        default: null, constraint: "max 16", conformance: "PRES", access: "R V", quality: "X N"
    }),
    Attribute({
        name: "ActiveScheduleHandle", id: 0x4f, type: "octstr",
        default: null, constraint: "max 16", conformance: "MSCH", access: "R V", quality: "X N"
    }),

    Attribute(
        {
            name: "Presets", id: 0x50, type: "list",
            default: [], constraint: "max numberOfPresets", conformance: "PRES", access: "RW VM",
            quality: "N T"
        },
        Field({ name: "entry", type: "PresetStruct" })
    ),

    Attribute(
        {
            name: "Schedules", id: 0x51, type: "list",
            default: [], constraint: "desc", conformance: "MSCH", access: "RW VM", quality: "N T"
        },
        Field({ name: "entry", type: "ScheduleStruct" })
    ),

    Attribute({
        name: "SetpointHoldExpiryTimestamp", id: 0x52, type: "epoch-s",
        default: null, conformance: "O", access: "R V", quality: "X N"
    }),

    Command(
        {
            name: "SetpointRaiseLower", id: 0x0,
            conformance: "M", access: "O", direction: "request", response: "status"
        },
        Field({ name: "Mode", id: 0x0, type: "SetpointRaiseLowerModeEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "Amount", id: 0x1, type: "int8", conformance: "M" })
    ),

    Command(
        {
            name: "SetWeeklySchedule", id: 0x1,
            conformance: "SCH", access: "M", direction: "request", response: "status"
        },
        Field({ name: "NumberOfTransitionsForSequence", id: 0x0, type: "uint8", conformance: "M" }),
        Field({
            name: "DayOfWeekForSequence", id: 0x1, type: "ScheduleDayOfWeekBitmap",
            constraint: "desc", conformance: "M"
        }),
        Field({ name: "ModeForSequence", id: 0x2, type: "ScheduleModeBitmap", constraint: "desc", conformance: "M" }),
        Field(
            { name: "Transitions", id: 0x3, type: "list", constraint: "max 10", conformance: "M" },
            Field({ name: "entry", type: "WeeklyScheduleTransitionStruct" })
        )
    ),

    Command(
        {
            name: "GetWeeklySchedule", id: 0x2,
            conformance: "SCH", access: "O", direction: "request", response: "GetWeeklyScheduleResponse"
        },
        Field({ name: "DaysToReturn", id: 0x0, type: "ScheduleDayOfWeekBitmap", constraint: "desc", conformance: "M" }),
        Field({ name: "ModeToReturn", id: 0x1, type: "ScheduleModeBitmap", constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "GetWeeklyScheduleResponse", id: 0x0, conformance: "SCH", direction: "response" },
        Field({ name: "NumberOfTransitionsForSequence", id: 0x0, type: "uint8", conformance: "M" }),
        Field({
            name: "DayOfWeekForSequence", id: 0x1, type: "ScheduleDayOfWeekBitmap",
            constraint: "desc", conformance: "M"
        }),
        Field({ name: "ModeForSequence", id: 0x2, type: "ScheduleModeBitmap", constraint: "desc", conformance: "M" }),
        Field(
            { name: "Transitions", id: 0x3, type: "list", constraint: "max 10", conformance: "M" },
            Field({ name: "entry", type: "WeeklyScheduleTransitionStruct" })
        )
    ),

    Command({ name: "ClearWeeklySchedule", id: 0x3, conformance: "SCH", access: "M", direction: "request", response: "status" }),

    Command(
        { name: "GetRelayStatusLogResponse", id: 0x1, conformance: "GetRelayStatusLog", direction: "response" },
        Field({ name: "TimeOfDay", id: 0x0, type: "uint16", constraint: "max 1439", conformance: "M" }),
        Field({ name: "RelayStatus", id: 0x1, type: "RelayStateBitmap", constraint: "desc", conformance: "M" }),
        Field({ name: "LocalTemperature", id: 0x2, type: "temperature", conformance: "M", quality: "X" }),
        Field({
            name: "HumidityInPercentage", id: 0x3, type: "uint8",
            constraint: "0% to 100%", conformance: "M", quality: "X"
        }),
        Field({ name: "SetPoint", id: 0x4, type: "temperature", conformance: "M" }),
        Field({ name: "UnreadEntries", id: 0x5, type: "uint16", conformance: "M" })
    ),

    Command(
        {
            name: "SetActiveScheduleRequest", id: 0x5,
            conformance: "MSCH", access: "O", direction: "request", response: "status"
        },
        Field({ name: "ScheduleHandle", id: 0x0, type: "octstr", constraint: "max 16", conformance: "M" })
    ),

    Command(
        {
            name: "SetActivePresetRequest", id: 0x6,
            conformance: "PRES", access: "O", direction: "request", response: "status"
        },
        Field({ name: "PresetHandle", id: 0x0, type: "octstr", constraint: "max 16", conformance: "M", quality: "X" })
    ),

    Datatype({ name: "TemperatureDifference", type: "int16" }),
    Datatype({ name: "SignedTemperature", type: "int8" }),
    Datatype({ name: "UnsignedTemperature", type: "uint8" }),

    Datatype(
        { name: "ACErrorCodeBitmap", type: "map32" },
        Field({ name: "CompressorFail", constraint: "0" }),
        Field({ name: "RoomSensorFail", constraint: "1" }),
        Field({ name: "OutdoorSensorFail", constraint: "2" }),
        Field({ name: "CoilSensorFail", constraint: "3" }),
        Field({ name: "FanFail", constraint: "4" })
    ),

    Datatype(
        { name: "AlarmCodeBitmap", type: "map8" },
        Field({ name: "Initialization", constraint: "0" }),
        Field({ name: "Hardware", constraint: "1" }),
        Field({ name: "SelfCalibration", constraint: "2" })
    ),

    Datatype(
        { name: "HVACSystemTypeBitmap", type: "map8" },
        Field({ name: "CoolingStage", constraint: "0 to 1" }),
        Field({ name: "HeatingStage", constraint: "2 to 3" }),
        Field({ name: "HeatingIsHeatPump", constraint: "4" }),
        Field({ name: "HeatingUsesFuel", constraint: "5" })
    ),

    Datatype({ name: "OccupancyBitmap", type: "map8" }, Field({ name: "Occupied", constraint: "0" })),
    Datatype(
        { name: "PresetTypeFeaturesBitmap", type: "map16" },
        Field({ name: "Automatic", constraint: "0" }),
        Field({ name: "SupportsNames", constraint: "1" })
    ),

    Datatype(
        { name: "ProgrammingOperationModeBitmap", type: "map8" },
        Field({ name: "ScheduleActive", constraint: "0" }),
        Field({ name: "AutoRecovery", constraint: "1" }),
        Field({ name: "Economy", constraint: "2" })
    ),

    Datatype(
        { name: "RelayStateBitmap", type: "map16" },
        Field({ name: "Heat", constraint: "0" }),
        Field({ name: "Cool", constraint: "1" }),
        Field({ name: "Fan", constraint: "2" }),
        Field({ name: "HeatStage2", constraint: "3" }),
        Field({ name: "CoolStage2", constraint: "4" }),
        Field({ name: "FanStage2", constraint: "5" }),
        Field({ name: "FanStage3", constraint: "6" })
    ),

    Datatype(
        { name: "RemoteSensingBitmap", type: "map8" },
        Field({ name: "LocalTemperature", constraint: "0" }),
        Field({ name: "OutdoorTemperature", constraint: "1" }),
        Field({ name: "Occupancy", constraint: "2" })
    ),

    Datatype(
        { name: "ScheduleTypeFeaturesBitmap", type: "map16" },
        Field({ name: "SupportsPresets", constraint: "0" }),
        Field({ name: "SupportsSetpoints", constraint: "1" }),
        Field({ name: "SupportsNames", constraint: "2" }),
        Field({ name: "SupportsOff", constraint: "3" })
    ),

    Datatype(
        { name: "ScheduleDayOfWeekBitmap", type: "map8" },
        Field({ name: "Sunday", constraint: "0" }),
        Field({ name: "Monday", constraint: "1" }),
        Field({ name: "Tuesday", constraint: "2" }),
        Field({ name: "Wednesday", constraint: "3" }),
        Field({ name: "Thursday", constraint: "4" }),
        Field({ name: "Friday", constraint: "5" }),
        Field({ name: "Saturday", constraint: "6" }),
        Field({ name: "Away", constraint: "7" })
    ),

    Datatype(
        { name: "ScheduleModeBitmap", type: "map8" },
        Field({ name: "HeatSetpointPresent", constraint: "0" }),
        Field({ name: "CoolSetpointPresent", constraint: "1" })
    ),
    Datatype({ name: "ACCapacityFormatEnum", type: "enum8" }, Field({ name: "BtUh", id: 0x0, conformance: "O" })),

    Datatype(
        { name: "ACCompressorTypeEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "O" }),
        Field({ name: "T1", id: 0x1, conformance: "O" }),
        Field({ name: "T2", id: 0x2, conformance: "O" }),
        Field({ name: "T3", id: 0x3, conformance: "O" })
    ),

    Datatype(
        { name: "ACLouverPositionEnum", type: "enum8" },
        Field({ name: "Closed", id: 0x1, conformance: "O" }),
        Field({ name: "Open", id: 0x2, conformance: "O" }),
        Field({ name: "Quarter", id: 0x3, conformance: "O" }),
        Field({ name: "Half", id: 0x4, conformance: "O" }),
        Field({ name: "ThreeQuarters", id: 0x5, conformance: "O" })
    ),

    Datatype(
        { name: "ACRefrigerantTypeEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "O" }),
        Field({ name: "R22", id: 0x1, conformance: "O" }),
        Field({ name: "R410A", id: 0x2, conformance: "O" }),
        Field({ name: "R407C", id: 0x3, conformance: "O" })
    ),

    Datatype(
        { name: "ACTypeEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "O" }),
        Field({ name: "CoolingFixed", id: 0x1, conformance: "O" }),
        Field({ name: "HeatPumpFixed", id: 0x2, conformance: "O" }),
        Field({ name: "CoolingInverter", id: 0x3, conformance: "O" }),
        Field({ name: "HeatPumpInverter", id: 0x4, conformance: "O" })
    ),

    Datatype(
        { name: "SetpointRaiseLowerModeEnum", type: "enum8" },
        Field({ name: "Heat", id: 0x0, conformance: "HEAT" }),
        Field({ name: "Cool", id: 0x1, conformance: "COOL" }),
        Field({ name: "Both", id: 0x2, conformance: "HEAT | COOL" })
    ),

    Datatype(
        { name: "ControlSequenceOfOperationEnum", type: "enum8" },
        Field({ name: "CoolingOnly", id: 0x0, conformance: "[COOL]" }),
        Field({ name: "CoolingWithReheat", id: 0x1, conformance: "[COOL]" }),
        Field({ name: "HeatingOnly", id: 0x2, conformance: "[HEAT]" }),
        Field({ name: "HeatingWithReheat", id: 0x3, conformance: "[HEAT]" }),
        Field({ name: "CoolingAndHeating", id: 0x4, conformance: "[HEAT & COOL]" }),
        Field({ name: "CoolingAndHeatingWithReheat", id: 0x5, conformance: "[HEAT & COOL]" })
    ),

    Datatype(
        { name: "PresetScenarioEnum", type: "enum8" },
        Field({ name: "Occupied", id: 0x1, conformance: "M" }),
        Field({ name: "Unoccupied", id: 0x2, conformance: "M" }),
        Field({ name: "Sleep", id: 0x3, conformance: "M" }),
        Field({ name: "Wake", id: 0x4, conformance: "M" }),
        Field({ name: "Vacation", id: 0x5, conformance: "M" }),
        Field({ name: "GoingToSleep", id: 0x6, conformance: "M" }),
        Field({ name: "UserDefined", id: 0xfe, conformance: "M" })
    ),

    Datatype(
        { name: "SetpointChangeSourceEnum", type: "enum8" },
        Field({ name: "Manual", id: 0x0, conformance: "O" }),
        Field({ name: "Schedule", id: 0x1, conformance: "[SCH | MSCH]" }),
        Field({ name: "External", id: 0x2, conformance: "O" })
    ),

    Datatype(
        { name: "StartOfWeekEnum", type: "enum8" },
        Field({ name: "Sunday", id: 0x0, conformance: "M" }),
        Field({ name: "Monday", id: 0x1, conformance: "M" }),
        Field({ name: "Tuesday", id: 0x2, conformance: "M" }),
        Field({ name: "Wednesday", id: 0x3, conformance: "M" }),
        Field({ name: "Thursday", id: 0x4, conformance: "M" }),
        Field({ name: "Friday", id: 0x5, conformance: "M" }),
        Field({ name: "Saturday", id: 0x6, conformance: "M" })
    ),

    Datatype(
        { name: "SystemModeEnum", type: "enum8" },
        Field({ name: "Off", id: 0x0, conformance: "O" }),
        Field({ name: "Auto", id: 0x1, conformance: "AUTO" }),
        Field({ name: "Cool", id: 0x3, conformance: "[COOL]" }),
        Field({ name: "Heat", id: 0x4, conformance: "[HEAT]" }),
        Field({ name: "EmergencyHeat", id: 0x5, conformance: "[HEAT]" }),
        Field({ name: "Precooling", id: 0x6, conformance: "[COOL]" }),
        Field({ name: "FanOnly", id: 0x7, conformance: "O" }),
        Field({ name: "Dry", id: 0x8, conformance: "O" }),
        Field({ name: "Sleep", id: 0x9, conformance: "O" })
    ),

    Datatype(
        { name: "ThermostatRunningModeEnum", type: "enum8" },
        Field({ name: "Off", id: 0x0, conformance: "O" }),
        Field({ name: "Cool", id: 0x3, conformance: "[COOL]" }),
        Field({ name: "Heat", id: 0x4, conformance: "[HEAT]" })
    ),

    Datatype(
        { name: "TemperatureSetpointHoldEnum", type: "enum8" },
        Field({ name: "SetpointHoldOff", id: 0x0, conformance: "M" }),
        Field({ name: "SetpointHoldOn", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "PresetStruct", type: "struct" },
        Field({ name: "PresetHandle", id: 0x0, type: "octstr", constraint: "max 16", conformance: "M", quality: "X" }),
        Field({ name: "PresetScenario", id: 0x1, type: "PresetScenarioEnum", conformance: "M" }),
        Field({ name: "Name", id: 0x2, type: "string", default: null, constraint: "max 64", conformance: "O", quality: "X" }),
        Field({
            name: "CoolingSetpoint", id: 0x3, type: "temperature",
            default: { type: "celsius", value: 26 }, constraint: "desc", conformance: "COOL"
        }),
        Field({
            name: "HeatingSetpoint", id: 0x4, type: "temperature",
            default: { type: "celsius", value: 20 }, constraint: "desc", conformance: "HEAT"
        }),
        Field({ name: "BuiltIn", id: 0x5, type: "bool", default: false, conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "PresetTypeStruct", type: "struct" },
        Field({ name: "PresetScenario", id: 0x0, type: "PresetScenarioEnum", conformance: "M" }),
        Field({ name: "NumberOfPresets", id: 0x1, type: "uint8", default: 0, conformance: "M" }),
        Field({ name: "PresetTypeFeatures", id: 0x2, type: "PresetTypeFeaturesBitmap", default: 0, conformance: "M" })
    ),

    Datatype(
        { name: "WeeklyScheduleTransitionStruct", type: "struct" },
        Field({ name: "TransitionTime", id: 0x0, type: "uint16", constraint: "max 1439", conformance: "M" }),
        Field({ name: "HeatSetpoint", id: 0x1, type: "temperature", conformance: "M", quality: "X" }),
        Field({ name: "CoolSetpoint", id: 0x2, type: "temperature", conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "ScheduleStruct", type: "struct" },
        Field({ name: "ScheduleHandle", id: 0x0, type: "octstr", constraint: "max 16", conformance: "M", quality: "X" }),
        Field({ name: "SystemMode", id: 0x1, type: "SystemModeEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "Name", id: 0x2, type: "string", constraint: "max 64", conformance: "O" }),
        Field({ name: "PresetHandle", id: 0x3, type: "octstr", constraint: "max 16", conformance: "O" }),

        Field(
            {
                name: "Transitions", id: 0x4, type: "list",
                default: [], constraint: "1 to numberOfScheduleTransitions", conformance: "M"
            },
            Field({ name: "entry", type: "ScheduleTransitionStruct" })
        ),

        Field({ name: "BuiltIn", id: 0x5, type: "bool", default: false, conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "ScheduleTransitionStruct", type: "struct" },
        Field({ name: "DayOfWeek", id: 0x0, type: "ScheduleDayOfWeekBitmap", constraint: "desc", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x1, type: "uint16", constraint: "max 1439", conformance: "M" }),
        Field({ name: "PresetHandle", id: 0x2, type: "octstr", constraint: "max 16", conformance: "[PRES]" }),
        Field({ name: "SystemMode", id: 0x3, type: "SystemModeEnum", constraint: "desc", conformance: "O" }),
        Field({ name: "CoolingSetpoint", id: 0x4, type: "temperature", constraint: "desc", conformance: "[COOL]" }),
        Field({ name: "HeatingSetpoint", id: 0x5, type: "temperature", constraint: "desc", conformance: "[HEAT]" })
    ),

    Datatype(
        { name: "ScheduleTypeStruct", type: "struct" },
        Field({ name: "SystemMode", id: 0x0, type: "SystemModeEnum", constraint: "desc", conformance: "M" }),
        Field({
            name: "NumberOfSchedules", id: 0x1, type: "uint8",
            default: 0, constraint: "max numberOfSchedules", conformance: "M"
        }),
        Field({
            name: "ScheduleTypeFeatures", id: 0x2, type: "ScheduleTypeFeaturesBitmap",
            default: 0, constraint: "desc", conformance: "M"
        })
    )
);

MatterDefinition.children.push(Thermostat);
