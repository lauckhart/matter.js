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
    EventElement as Event,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const PumpConfigurationAndControl = Cluster(
    { name: "PumpConfigurationAndControl", id: 0x200 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "PRSCONST", constraint: "0", conformance: "O.a+", longName: "ConstantPressure" }),
        Field({ name: "PRSCOMP", constraint: "1", conformance: "O.a+", longName: "CompensatedPressure" }),
        Field({ name: "FLW", constraint: "2", conformance: "O.a+", longName: "ConstantFlow" }),
        Field({ name: "SPD", constraint: "3", conformance: "O.a+", longName: "ConstantSpeed" }),
        Field({ name: "TEMP", constraint: "4", conformance: "O.a+", longName: "ConstantTemperature" }),
        Field({ name: "AUTO", constraint: "5", conformance: "O", longName: "Automatic" }),
        Field({ name: "LOCAL", constraint: "6", conformance: "O", longName: "LocalOperation" })
    ),

    Attribute(
        { name: "MaxPressure", id: 0x0, type: "int16", default: null, conformance: "M", access: "R V", quality: "X F" }
    ),
    Attribute(
        { name: "MaxSpeed", id: 0x1, type: "uint16", default: null, conformance: "M", access: "R V", quality: "X F" }
    ),
    Attribute({ name: "MaxFlow", id: 0x2, type: "uint16", default: null, conformance: "M", access: "R V", quality: "X F" }),
    Attribute({
        name: "MinConstPressure", id: 0x3, type: "int16",
        default: null, conformance: "PRSCONST, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MaxConstPressure", id: 0x4, type: "int16",
        default: null, conformance: "PRSCONST, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MinCompPressure", id: 0x5, type: "int16",
        default: null, conformance: "PRSCOMP, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MaxCompPressure", id: 0x6, type: "int16",
        default: null, conformance: "PRSCOMP, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MinConstSpeed", id: 0x7, type: "uint16",
        default: null, conformance: "SPD, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MaxConstSpeed", id: 0x8, type: "uint16",
        default: null, conformance: "SPD, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MinConstFlow", id: 0x9, type: "uint16",
        default: null, conformance: "FLW, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MaxConstFlow", id: 0xa, type: "uint16",
        default: null, conformance: "FLW, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MinConstTemp", id: 0xb, type: "int16",
        default: null, constraint: "min -27315", conformance: "TEMP, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "MaxConstTemp", id: 0xc, type: "int16",
        default: null, constraint: "min -27315", conformance: "TEMP, [AUTO]", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "PumpStatus", id: 0x10, type: "PumpStatusBitmap",
        default: 0, constraint: "desc", conformance: "O", access: "R V", quality: "P"
    }),
    Attribute({
        name: "EffectiveOperationMode", id: 0x11, type: "OperationModeEnum",
        constraint: "desc", conformance: "M", access: "R V", quality: "N"
    }),
    Attribute({
        name: "EffectiveControlMode", id: 0x12, type: "ControlModeEnum",
        constraint: "desc", conformance: "M", access: "R V", quality: "N"
    }),
    Attribute(
        { name: "Capacity", id: 0x13, type: "int16", default: null, conformance: "M", access: "R V", quality: "X P" }
    ),
    Attribute({ name: "Speed", id: 0x14, type: "uint16", default: null, conformance: "O", access: "R V", quality: "X" }),
    Attribute({
        name: "LifetimeRunningHours", id: 0x15, type: "uint24",
        default: 0, conformance: "O", access: "RW VM", quality: "X N"
    }),
    Attribute({ name: "Power", id: 0x16, type: "uint24", default: null, conformance: "O", access: "R V", quality: "X" }),
    Attribute({
        name: "LifetimeEnergyConsumed", id: 0x17, type: "uint32",
        default: 0, conformance: "O", access: "RW VM", quality: "X N"
    }),
    Attribute({
        name: "OperationMode", id: 0x20, type: "OperationModeEnum",
        default: 0, constraint: "desc", conformance: "M", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "ControlMode", id: 0x21, type: "ControlModeEnum",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({ name: "AlarmMask", id: 0x22, type: "uint16" }),
    Event({ name: "SupplyVoltageLow", id: 0x0, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "SupplyVoltageHigh", id: 0x1, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "PowerMissingPhase", id: 0x2, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "SystemPressureLow", id: 0x3, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "SystemPressureHigh", id: 0x4, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "DryRunning", id: 0x5, conformance: "O", access: "V", priority: "critical" }),
    Event({ name: "MotorTemperatureHigh", id: 0x6, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "PumpMotorFatalFailure", id: 0x7, conformance: "O", access: "V", priority: "critical" }),
    Event({ name: "ElectronicTemperatureHigh", id: 0x8, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "PumpBlocked", id: 0x9, conformance: "O", access: "V", priority: "critical" }),
    Event({ name: "SensorFailure", id: 0xa, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "ElectronicNonFatalFailure", id: 0xb, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "ElectronicFatalFailure", id: 0xc, conformance: "O", access: "V", priority: "critical" }),
    Event({ name: "GeneralFault", id: 0xd, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "Leakage", id: 0xe, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "AirDetection", id: 0xf, conformance: "O", access: "V", priority: "info" }),
    Event({ name: "TurbineOperation", id: 0x10, conformance: "O", access: "V", priority: "info" }),

    Datatype(
        { name: "PumpStatusBitmap", type: "map16" },
        Field({ name: "DeviceFault", constraint: "0" }),
        Field({ name: "SupplyFault", constraint: "1" }),
        Field({ name: "SpeedLow", constraint: "2" }),
        Field({ name: "SpeedHigh", constraint: "3" }),
        Field({ name: "LocalOverride", constraint: "4" }),
        Field({ name: "Running", constraint: "5" }),
        Field({ name: "RemotePressure", constraint: "6" }),
        Field({ name: "RemoteFlow", constraint: "7" }),
        Field({ name: "RemoteTemperature", constraint: "8" })
    ),

    Datatype(
        { name: "OperationModeEnum", type: "enum8" },
        Field({ name: "Normal", id: 0x0, conformance: "M" }),
        Field({ name: "Minimum", id: 0x1, conformance: "SPD" }),
        Field({ name: "Maximum", id: 0x2, conformance: "SPD" }),
        Field({ name: "Local", id: 0x3, conformance: "LOCAL" })
    ),

    Datatype(
        { name: "ControlModeEnum", type: "enum8" },
        Field({ name: "ConstantSpeed", id: 0x0, conformance: "SPD" }),
        Field({ name: "ConstantPressure", id: 0x1, conformance: "PRSCONST" }),
        Field({ name: "ProportionalPressure", id: 0x2, conformance: "PRSCOMP" }),
        Field({ name: "ConstantFlow", id: 0x3, conformance: "FLW" }),
        Field({ name: "ConstantTemperature", id: 0x5, conformance: "TEMP" }),
        Field({ name: "Automatic", id: 0x7, conformance: "AUTO" })
    )
);

MatterDefinition.children.push(PumpConfigurationAndControl);
