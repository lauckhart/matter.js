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
    { id: 0x201, name: "Thermostat" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 8 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "HEAT", conformance: "AUTO, O.a+", constraint: "0", description: "Heating" }),
        Field({ name: "COOL", conformance: "AUTO, O.a+", constraint: "1", description: "Cooling" }),
        Field({ name: "OCC", conformance: "O", constraint: "2", description: "Occupancy" }),
        Field({ name: "SCH", conformance: "O", constraint: "3", description: "ScheduleConfiguration" }),
        Field({ name: "SB", conformance: "O", constraint: "4", description: "Setback" }),
        Field({ name: "AUTO", conformance: "O", constraint: "5", description: "AutoMode" }),
        Field({ name: "LTNE", conformance: "O", constraint: "6", description: "LocalTemperatureNotExposed" }),
        Field({ name: "MSCH", conformance: "O", constraint: "7", description: "MatterScheduleConfiguration" }),
        Field({ name: "PRES", conformance: "O", constraint: "8", description: "Presets" })
    ),

    Attribute({
        id: 0x0, name: "LocalTemperature", type: "temperature",
        access: "R V", conformance: "M", default: null, quality: "X P"
    }),
    Attribute({
        id: 0x1, name: "OutdoorTemperature", type: "temperature",
        access: "R V", conformance: "O", default: null, quality: "X"
    }),
    Attribute({ id: 0x2, name: "Occupancy", type: "OccupancyBitmap", access: "R V", conformance: "OCC", default: 1 }),
    Attribute({
        id: 0x3, name: "AbsMinHeatSetpointLimit", type: "temperature",
        access: "R V", conformance: "[HEAT]", constraint: "desc", default: { type: "celsius", value: 7 },
        quality: "F"
    }),
    Attribute({
        id: 0x4, name: "AbsMaxHeatSetpointLimit", type: "temperature",
        access: "R V", conformance: "[HEAT]", constraint: "desc", default: { type: "celsius", value: 30 },
        quality: "F"
    }),
    Attribute({
        id: 0x5, name: "AbsMinCoolSetpointLimit", type: "temperature",
        access: "R V", conformance: "[COOL]", constraint: "desc", default: { type: "celsius", value: 16 },
        quality: "F"
    }),
    Attribute({
        id: 0x6, name: "AbsMaxCoolSetpointLimit", type: "temperature",
        access: "R V", conformance: "[COOL]", constraint: "desc", default: { type: "celsius", value: 32 },
        quality: "F"
    }),
    Attribute({
        id: 0x7, name: "PiCoolingDemand", type: "uint8",
        access: "R V", conformance: "[COOL]", constraint: "0% to 100%", quality: "P"
    }),
    Attribute({
        id: 0x8, name: "PiHeatingDemand", type: "uint8",
        access: "R V", conformance: "[HEAT]", constraint: "0% to 100%", quality: "P"
    }),
    Attribute({
        id: 0x9, name: "HvacSystemTypeConfiguration", type: "HVACSystemTypeBitmap",
        access: "R[W] VM", conformance: "D", constraint: "desc", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x10, name: "LocalTemperatureCalibration", type: "SignedTemperature",
        access: "RW VM", conformance: "[!LTNE]", default: { type: "celsius", value: 0 }, quality: "N"
    }),
    Attribute({
        id: 0x11, name: "OccupiedCoolingSetpoint", type: "temperature",
        access: "RW VO", conformance: "COOL", constraint: "desc", default: { type: "celsius", value: 26 },
        quality: "N"
    }),
    Attribute({
        id: 0x12, name: "OccupiedHeatingSetpoint", type: "temperature",
        access: "RW VO", conformance: "HEAT", constraint: "desc", default: { type: "celsius", value: 20 },
        quality: "N"
    }),
    Attribute({
        id: 0x13, name: "UnoccupiedCoolingSetpoint", type: "temperature",
        access: "RW VO", conformance: "COOL & OCC", constraint: "desc",
        default: { type: "celsius", value: 26 }, quality: "N"
    }),
    Attribute({
        id: 0x14, name: "UnoccupiedHeatingSetpoint", type: "temperature",
        access: "RW VO", conformance: "HEAT & OCC", constraint: "desc",
        default: { type: "celsius", value: 20 }, quality: "N"
    }),
    Attribute({
        id: 0x15, name: "MinHeatSetpointLimit", type: "temperature",
        access: "RW VM", conformance: "[HEAT]", constraint: "desc",
        default: { type: "reference", name: "AbsMinHeatSetpointLimit" }, quality: "N"
    }),
    Attribute({
        id: 0x16, name: "MaxHeatSetpointLimit", type: "temperature",
        access: "RW VM", conformance: "[HEAT]", constraint: "desc",
        default: { type: "reference", name: "AbsMaxHeatSetpointLimit" }, quality: "N"
    }),
    Attribute({
        id: 0x17, name: "MinCoolSetpointLimit", type: "temperature",
        access: "RW VM", conformance: "[COOL]", constraint: "desc",
        default: { type: "reference", name: "AbsMinCoolSetpointLimit" }, quality: "N"
    }),
    Attribute({
        id: 0x18, name: "MaxCoolSetpointLimit", type: "temperature",
        access: "RW VM", conformance: "[COOL]", constraint: "desc",
        default: { type: "reference", name: "AbsMaxCoolSetpointLimit" }, quality: "N"
    }),
    Attribute({
        id: 0x19, name: "MinSetpointDeadBand", type: "SignedTemperature",
        access: "R[W] VM", conformance: "AUTO", constraint: "0 to 12.7°C",
        default: { type: "celsius", value: 2 }, quality: "N"
    }),
    Attribute({
        id: 0x1a, name: "RemoteSensing", type: "RemoteSensingBitmap",
        access: "RW VM", conformance: "O", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x1b, name: "ControlSequenceOfOperation", type: "ControlSequenceOfOperationEnum",
        access: "RW VM", constraint: "desc", quality: "N"
    }),
    Attribute({
        id: 0x1c, name: "SystemMode", type: "SystemModeEnum",
        access: "RW VM", conformance: "M", constraint: "desc", default: 1, quality: "N"
    }),
    Attribute({
        id: 0x1e, name: "ThermostatRunningMode", type: "ThermostatRunningModeEnum",
        access: "R V", conformance: "[AUTO]", constraint: "desc", default: 0
    }),
    Attribute({
        id: 0x20, name: "StartOfWeek", type: "StartOfWeekEnum",
        access: "R V", conformance: "SCH", constraint: "desc", quality: "F"
    }),
    Attribute({
        id: 0x21, name: "NumberOfWeeklyTransitions", type: "uint8",
        access: "R V", conformance: "SCH", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x22, name: "NumberOfDailyTransitions", type: "uint8",
        access: "R V", conformance: "SCH", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x23, name: "TemperatureSetpointHold", type: "TemperatureSetpointHoldEnum",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x24, name: "TemperatureSetpointHoldDuration", type: "uint16",
        access: "RW VM", conformance: "O", constraint: "max 1440", default: null, quality: "X N"
    }),
    Attribute({
        id: 0x25, name: "ThermostatProgrammingOperationMode", type: "ProgrammingOperationModeBitmap",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P"
    }),
    Attribute({
        id: 0x29, name: "ThermostatRunningState", type: "RelayStateBitmap",
        access: "R V", conformance: "O", constraint: "desc"
    }),
    Attribute({
        id: 0x30, name: "SetpointChangeSource", type: "SetpointChangeSourceEnum",
        access: "R V", conformance: "O", constraint: "desc", default: 0
    }),
    Attribute({
        id: 0x31, name: "SetpointChangeAmount", type: "TemperatureDifference",
        access: "R V", conformance: "O", default: null, quality: "X"
    }),
    Attribute({ id: 0x32, name: "SetpointChangeSourceTimestamp", type: "epoch-s", access: "R V", conformance: "O", default: 0 }),
    Attribute({
        id: 0x34, name: "OccupiedSetback", type: "UnsignedTemperature",
        access: "RW VM", conformance: "SB", constraint: "occupiedSetbackMin to occupiedSetbackMax",
        default: null, quality: "X N"
    }),
    Attribute({
        id: 0x35, name: "OccupiedSetbackMin", type: "UnsignedTemperature",
        access: "R V", conformance: "SB", constraint: "max occupiedSetbackMax", default: null,
        quality: "X F"
    }),
    Attribute({
        id: 0x36, name: "OccupiedSetbackMax", type: "UnsignedTemperature",
        access: "R V", conformance: "SB", constraint: "occupiedSetbackMin to 25.4°C", default: null,
        quality: "X F"
    }),
    Attribute({
        id: 0x37, name: "UnoccupiedSetback", type: "UnsignedTemperature",
        access: "RW VM", conformance: "SB & OCC",
        constraint: "unoccupiedSetbackMin to unoccupiedSetbackMax", default: null, quality: "X N"
    }),
    Attribute({
        id: 0x38, name: "UnoccupiedSetbackMin", type: "UnsignedTemperature",
        access: "R V", conformance: "SB & OCC", constraint: "max unoccupiedSetbackMax", default: null,
        quality: "X F"
    }),
    Attribute({
        id: 0x39, name: "UnoccupiedSetbackMax", type: "UnsignedTemperature",
        access: "R V", conformance: "SB & OCC", constraint: "unoccupiedSetbackMin to 25.4°C", default: null,
        quality: "X F"
    }),
    Attribute({
        id: 0x3a, name: "EmergencyHeatDelta", type: "UnsignedTemperature",
        access: "RW VM", conformance: "O", default: { type: "celsius", value: 25 }, quality: "N"
    }),
    Attribute({
        id: 0x40, name: "AcType", type: "ACTypeEnum",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N"
    }),
    Attribute(
        { id: 0x41, name: "AcCapacity", type: "uint16", access: "RW VM", conformance: "O", default: 0, quality: "N" }
    ),
    Attribute({
        id: 0x42, name: "AcRefrigerantType", type: "ACRefrigerantTypeEnum",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x43, name: "AcCompressorType", type: "ACCompressorTypeEnum",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N"
    }),
    Attribute({ id: 0x44, name: "AcErrorCode", type: "ACErrorCodeBitmap", access: "RW VM", conformance: "O", default: 0 }),
    Attribute({
        id: 0x45, name: "AcLouverPosition", type: "ACLouverPositionEnum",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x46, name: "AcCoilTemperature", type: "temperature",
        access: "R V", conformance: "O", default: null, quality: "X"
    }),
    Attribute({
        id: 0x47, name: "AcCapacityFormat", type: "ACCapacityFormatEnum",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N"
    }),

    Attribute(
        {
            id: 0x48, name: "PresetTypes", type: "list",
            access: "R V", conformance: "PRES", constraint: "desc", quality: "F"
        },
        Field({ name: "entry", type: "PresetTypeStruct" })
    ),

    Attribute(
        {
            id: 0x49, name: "ScheduleTypes", type: "list",
            access: "R V", conformance: "MSCH", constraint: "desc", quality: "F"
        },
        Field({ name: "entry", type: "ScheduleTypeStruct" })
    ),

    Attribute({ id: 0x4a, name: "NumberOfPresets", type: "uint8", access: "R V", conformance: "PRES", default: 0, quality: "F" }),
    Attribute({
        id: 0x4b, name: "NumberOfSchedules", type: "uint8",
        access: "R V", conformance: "MSCH", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x4c, name: "NumberOfScheduleTransitions", type: "uint8",
        access: "R V", conformance: "MSCH", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x4d, name: "NumberOfScheduleTransitionPerDay", type: "uint8",
        access: "R V", conformance: "MSCH", default: null, quality: "X F"
    }),
    Attribute({
        id: 0x4e, name: "ActivePresetHandle", type: "octstr",
        access: "R V", conformance: "PRES", constraint: "max 16", default: null, quality: "X N"
    }),
    Attribute({
        id: 0x4f, name: "ActiveScheduleHandle", type: "octstr",
        access: "R V", conformance: "MSCH", constraint: "max 16", default: null, quality: "X N"
    }),

    Attribute(
        {
            id: 0x50, name: "Presets", type: "list",
            access: "RW VM", conformance: "PRES", constraint: "max numberOfPresets", default: [],
            quality: "N T"
        },
        Field({ name: "entry", type: "PresetStruct" })
    ),

    Attribute(
        {
            id: 0x51, name: "Schedules", type: "list",
            access: "RW VM", conformance: "MSCH", constraint: "desc", default: [], quality: "N T"
        },
        Field({ name: "entry", type: "ScheduleStruct" })
    ),

    Attribute({
        id: 0x52, name: "SetpointHoldExpiryTimestamp", type: "epoch-s",
        access: "R V", conformance: "O", default: null, quality: "X N"
    }),

    Command(
        {
            id: 0x0, name: "SetpointRaiseLower",
            access: "O", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Mode", type: "SetpointRaiseLowerModeEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Amount", type: "int8", conformance: "M" })
    ),

    Command(
        {
            id: 0x1, name: "SetWeeklySchedule",
            access: "M", conformance: "SCH", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "NumberOfTransitionsForSequence", type: "uint8", conformance: "M" }),
        Field({
            id: 0x1, name: "DayOfWeekForSequence", type: "ScheduleDayOfWeekBitmap",
            conformance: "M", constraint: "desc"
        }),
        Field({ id: 0x2, name: "ModeForSequence", type: "ScheduleModeBitmap", conformance: "M", constraint: "desc" }),
        Field(
            { id: 0x3, name: "Transitions", type: "list", conformance: "M", constraint: "max 10" },
            Field({ name: "entry", type: "WeeklyScheduleTransitionStruct" })
        )
    ),

    Command(
        {
            id: 0x2, name: "GetWeeklySchedule",
            access: "O", conformance: "SCH", direction: "request", response: "GetWeeklyScheduleResponse"
        },
        Field({ id: 0x0, name: "DaysToReturn", type: "ScheduleDayOfWeekBitmap", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "ModeToReturn", type: "ScheduleModeBitmap", conformance: "M", constraint: "desc" })
    ),

    Command(
        { id: 0x0, name: "GetWeeklyScheduleResponse", conformance: "SCH", direction: "response" },
        Field({ id: 0x0, name: "NumberOfTransitionsForSequence", type: "uint8", conformance: "M" }),
        Field({
            id: 0x1, name: "DayOfWeekForSequence", type: "ScheduleDayOfWeekBitmap",
            conformance: "M", constraint: "desc"
        }),
        Field({ id: 0x2, name: "ModeForSequence", type: "ScheduleModeBitmap", conformance: "M", constraint: "desc" }),
        Field(
            { id: 0x3, name: "Transitions", type: "list", conformance: "M", constraint: "max 10" },
            Field({ name: "entry", type: "WeeklyScheduleTransitionStruct" })
        )
    ),

    Command({ id: 0x3, name: "ClearWeeklySchedule", access: "M", conformance: "SCH", direction: "request", response: "status" }),

    Command(
        { id: 0x1, name: "GetRelayStatusLogResponse", conformance: "GetRelayStatusLog", direction: "response" },
        Field({ id: 0x0, name: "TimeOfDay", type: "uint16", conformance: "M", constraint: "max 1439" }),
        Field({ id: 0x1, name: "RelayStatus", type: "RelayStateBitmap", conformance: "M", constraint: "desc" }),
        Field({ id: 0x2, name: "LocalTemperature", type: "temperature", conformance: "M", quality: "X" }),
        Field({
            id: 0x3, name: "HumidityInPercentage", type: "uint8",
            conformance: "M", constraint: "0% to 100%", quality: "X"
        }),
        Field({ id: 0x4, name: "SetPoint", type: "temperature", conformance: "M" }),
        Field({ id: 0x5, name: "UnreadEntries", type: "uint16", conformance: "M" })
    ),

    Command(
        {
            id: 0x5, name: "SetActiveScheduleRequest",
            access: "O", conformance: "MSCH", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ScheduleHandle", type: "octstr", conformance: "M", constraint: "max 16" })
    ),

    Command(
        {
            id: 0x6, name: "SetActivePresetRequest",
            access: "O", conformance: "PRES", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "PresetHandle", type: "octstr", conformance: "M", constraint: "max 16", quality: "X" })
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
    Datatype({ name: "ACCapacityFormatEnum", type: "enum8" }, Field({ id: 0x0, name: "BtUh", conformance: "O" })),

    Datatype(
        { name: "ACCompressorTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "O" }),
        Field({ id: 0x1, name: "T1", conformance: "O" }),
        Field({ id: 0x2, name: "T2", conformance: "O" }),
        Field({ id: 0x3, name: "T3", conformance: "O" })
    ),

    Datatype(
        { name: "ACLouverPositionEnum", type: "enum8" },
        Field({ id: 0x1, name: "Closed", conformance: "O" }),
        Field({ id: 0x2, name: "Open", conformance: "O" }),
        Field({ id: 0x3, name: "Quarter", conformance: "O" }),
        Field({ id: 0x4, name: "Half", conformance: "O" }),
        Field({ id: 0x5, name: "ThreeQuarters", conformance: "O" })
    ),

    Datatype(
        { name: "ACRefrigerantTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "O" }),
        Field({ id: 0x1, name: "R22", conformance: "O" }),
        Field({ id: 0x2, name: "R410A", conformance: "O" }),
        Field({ id: 0x3, name: "R407C", conformance: "O" })
    ),

    Datatype(
        { name: "ACTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "O" }),
        Field({ id: 0x1, name: "CoolingFixed", conformance: "O" }),
        Field({ id: 0x2, name: "HeatPumpFixed", conformance: "O" }),
        Field({ id: 0x3, name: "CoolingInverter", conformance: "O" }),
        Field({ id: 0x4, name: "HeatPumpInverter", conformance: "O" })
    ),

    Datatype(
        { name: "SetpointRaiseLowerModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Heat", conformance: "HEAT" }),
        Field({ id: 0x1, name: "Cool", conformance: "COOL" }),
        Field({ id: 0x2, name: "Both", conformance: "HEAT | COOL" })
    ),

    Datatype(
        { name: "ControlSequenceOfOperationEnum", type: "enum8" },
        Field({ id: 0x0, name: "CoolingOnly", conformance: "[COOL]" }),
        Field({ id: 0x1, name: "CoolingWithReheat", conformance: "[COOL]" }),
        Field({ id: 0x2, name: "HeatingOnly", conformance: "[HEAT]" }),
        Field({ id: 0x3, name: "HeatingWithReheat", conformance: "[HEAT]" }),
        Field({ id: 0x4, name: "CoolingAndHeating", conformance: "[HEAT & COOL]" }),
        Field({ id: 0x5, name: "CoolingAndHeatingWithReheat", conformance: "[HEAT & COOL]" })
    ),

    Datatype(
        { name: "PresetScenarioEnum", type: "enum8" },
        Field({ id: 0x1, name: "Occupied", conformance: "M" }),
        Field({ id: 0x2, name: "Unoccupied", conformance: "M" }),
        Field({ id: 0x3, name: "Sleep", conformance: "M" }),
        Field({ id: 0x4, name: "Wake", conformance: "M" }),
        Field({ id: 0x5, name: "Vacation", conformance: "M" }),
        Field({ id: 0x6, name: "GoingToSleep", conformance: "M" }),
        Field({ id: 0xfe, name: "UserDefined", conformance: "M" })
    ),

    Datatype(
        { name: "SetpointChangeSourceEnum", type: "enum8" },
        Field({ id: 0x0, name: "Manual", conformance: "O" }),
        Field({ id: 0x1, name: "Schedule", conformance: "[SCH | MSCH]" }),
        Field({ id: 0x2, name: "External", conformance: "O" })
    ),

    Datatype(
        { name: "StartOfWeekEnum", type: "enum8" },
        Field({ id: 0x0, name: "Sunday", conformance: "M" }),
        Field({ id: 0x1, name: "Monday", conformance: "M" }),
        Field({ id: 0x2, name: "Tuesday", conformance: "M" }),
        Field({ id: 0x3, name: "Wednesday", conformance: "M" }),
        Field({ id: 0x4, name: "Thursday", conformance: "M" }),
        Field({ id: 0x5, name: "Friday", conformance: "M" }),
        Field({ id: 0x6, name: "Saturday", conformance: "M" })
    ),

    Datatype(
        { name: "SystemModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Off", conformance: "O" }),
        Field({ id: 0x1, name: "Auto", conformance: "AUTO" }),
        Field({ id: 0x3, name: "Cool", conformance: "[COOL]" }),
        Field({ id: 0x4, name: "Heat", conformance: "[HEAT]" }),
        Field({ id: 0x5, name: "EmergencyHeat", conformance: "[HEAT]" }),
        Field({ id: 0x6, name: "Precooling", conformance: "[COOL]" }),
        Field({ id: 0x7, name: "FanOnly", conformance: "O" }),
        Field({ id: 0x8, name: "Dry", conformance: "O" }),
        Field({ id: 0x9, name: "Sleep", conformance: "O" })
    ),

    Datatype(
        { name: "ThermostatRunningModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Off", conformance: "O" }),
        Field({ id: 0x3, name: "Cool", conformance: "[COOL]" }),
        Field({ id: 0x4, name: "Heat", conformance: "[HEAT]" })
    ),

    Datatype(
        { name: "TemperatureSetpointHoldEnum", type: "enum8" },
        Field({ id: 0x0, name: "SetpointHoldOff", conformance: "M" }),
        Field({ id: 0x1, name: "SetpointHoldOn", conformance: "M" })
    ),

    Datatype(
        { name: "PresetStruct", type: "struct" },
        Field({ id: 0x0, name: "PresetHandle", type: "octstr", conformance: "M", constraint: "max 16", quality: "X" }),
        Field({ id: 0x1, name: "PresetScenario", type: "PresetScenarioEnum", conformance: "M" }),
        Field({ id: 0x2, name: "Name", type: "string", conformance: "O", constraint: "max 64", default: null, quality: "X" }),
        Field({
            id: 0x3, name: "CoolingSetpoint", type: "temperature",
            conformance: "COOL", constraint: "desc", default: { type: "celsius", value: 26 }
        }),
        Field({
            id: 0x4, name: "HeatingSetpoint", type: "temperature",
            conformance: "HEAT", constraint: "desc", default: { type: "celsius", value: 20 }
        }),
        Field({ id: 0x5, name: "BuiltIn", type: "bool", conformance: "M", default: false, quality: "X" })
    ),

    Datatype(
        { name: "PresetTypeStruct", type: "struct" },
        Field({ id: 0x0, name: "PresetScenario", type: "PresetScenarioEnum", conformance: "M" }),
        Field({ id: 0x1, name: "NumberOfPresets", type: "uint8", conformance: "M", default: 0 }),
        Field({ id: 0x2, name: "PresetTypeFeatures", type: "PresetTypeFeaturesBitmap", conformance: "M", default: 0 })
    ),

    Datatype(
        { name: "WeeklyScheduleTransitionStruct", type: "struct" },
        Field({ id: 0x0, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 1439" }),
        Field({ id: 0x1, name: "HeatSetpoint", type: "temperature", conformance: "M", quality: "X" }),
        Field({ id: 0x2, name: "CoolSetpoint", type: "temperature", conformance: "M", quality: "X" })
    ),

    Datatype(
        { name: "ScheduleStruct", type: "struct" },
        Field({ id: 0x0, name: "ScheduleHandle", type: "octstr", conformance: "M", constraint: "max 16", quality: "X" }),
        Field({ id: 0x1, name: "SystemMode", type: "SystemModeEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x2, name: "Name", type: "string", conformance: "O", constraint: "max 64" }),
        Field({ id: 0x3, name: "PresetHandle", type: "octstr", conformance: "O", constraint: "max 16" }),

        Field(
            {
                id: 0x4, name: "Transitions", type: "list",
                conformance: "M", constraint: "1 to numberOfScheduleTransitions", default: []
            },
            Field({ name: "entry", type: "ScheduleTransitionStruct" })
        ),

        Field({ id: 0x5, name: "BuiltIn", type: "bool", conformance: "M", default: false, quality: "X" })
    ),

    Datatype(
        { name: "ScheduleTransitionStruct", type: "struct" },
        Field({ id: 0x0, name: "DayOfWeek", type: "ScheduleDayOfWeekBitmap", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 1439" }),
        Field({ id: 0x2, name: "PresetHandle", type: "octstr", conformance: "[PRES]", constraint: "max 16" }),
        Field({ id: 0x3, name: "SystemMode", type: "SystemModeEnum", conformance: "O", constraint: "desc" }),
        Field({ id: 0x4, name: "CoolingSetpoint", type: "temperature", conformance: "[COOL]", constraint: "desc" }),
        Field({ id: 0x5, name: "HeatingSetpoint", type: "temperature", conformance: "[HEAT]", constraint: "desc" })
    ),

    Datatype(
        { name: "ScheduleTypeStruct", type: "struct" },
        Field({ id: 0x0, name: "SystemMode", type: "SystemModeEnum", conformance: "M", constraint: "desc" }),
        Field({
            id: 0x1, name: "NumberOfSchedules", type: "uint8",
            conformance: "M", constraint: "max numberOfSchedules", default: 0
        }),
        Field({
            id: 0x2, name: "ScheduleTypeFeatures", type: "ScheduleTypeFeaturesBitmap",
            conformance: "M", constraint: "desc", default: 0
        })
    )
);

MatterDefinition.children.push(Thermostat);
