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
    { id: 0x200, name: "PumpConfigurationAndControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 4 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PRSCONST", conformance: "O.a+", constraint: "0", longName: "ConstantPressure" }),
        Field({ name: "PRSCOMP", conformance: "O.a+", constraint: "1", longName: "CompensatedPressure" }),
        Field({ name: "FLW", conformance: "O.a+", constraint: "2", longName: "ConstantFlow" }),
        Field({ name: "SPD", conformance: "O.a+", constraint: "3", longName: "ConstantSpeed" }),
        Field({ name: "TEMP", conformance: "O.a+", constraint: "4", longName: "ConstantTemperature" }),
        Field({ name: "AUTO", conformance: "O", constraint: "5", longName: "Automatic" }),
        Field({ name: "LOCAL", conformance: "O", constraint: "6", longName: "LocalOperation" })
    ),

    Attribute(
        { id: 0x0, name: "MaxPressure", type: "int16", access: "R V", conformance: "M", default: null, quality: "X F" }
    ),
    Attribute(
        { id: 0x1, name: "MaxSpeed", type: "uint16", access: "R V", conformance: "M", default: null, quality: "X F" }
    ),
    Attribute({ id: 0x2, name: "MaxFlow", type: "uint16", access: "R V", conformance: "M", default: null, quality: "X F" }),
    Attribute({
        id: 0x3, name: "MinConstPressure", type: "int16",
        access: "R V", conformance: "PRSCONST, [AUTO]", default: null, quality: "X F"
    }),
    Attribute({
        id: 0x4, name: "MaxConstPressure", type: "int16",
        access: "R V", conformance: "PRSCONST, [AUTO]", default: null, quality: "X F"
    }),
    Attribute({
        id: 0x5, name: "MinCompPressure", type: "int16",
        access: "R V", conformance: "PRSCOMP, [AUTO]", default: null, quality: "X F"
    }),
    Attribute({
        id: 0x6, name: "MaxCompPressure", type: "int16",
        access: "R V", conformance: "PRSCOMP, [AUTO]", default: null, quality: "X F"
    }),
    Attribute({
        id: 0x7, name: "MinConstSpeed", type: "uint16",
        access: "R V", conformance: "SPD, [AUTO]", default: null, quality: "X F"
    }),
    Attribute({
        id: 0x8, name: "MaxConstSpeed", type: "uint16",
        access: "R V", conformance: "SPD, [AUTO]", default: null, quality: "X F"
    }),
    Attribute({
        id: 0x9, name: "MinConstFlow", type: "uint16",
        access: "R V", conformance: "FLW, [AUTO]", default: null, quality: "X F"
    }),
    Attribute({
        id: 0xa, name: "MaxConstFlow", type: "uint16",
        access: "R V", conformance: "FLW, [AUTO]", default: null, quality: "X F"
    }),
    Attribute({
        id: 0xb, name: "MinConstTemp", type: "int16",
        access: "R V", conformance: "TEMP, [AUTO]", constraint: "min -27315", default: null, quality: "X F"
    }),
    Attribute({
        id: 0xc, name: "MaxConstTemp", type: "int16",
        access: "R V", conformance: "TEMP, [AUTO]", constraint: "min -27315", default: null, quality: "X F"
    }),
    Attribute({
        id: 0x10, name: "PumpStatus", type: "PumpStatusBitmap",
        access: "R V", conformance: "O", constraint: "desc", default: 0, quality: "P"
    }),
    Attribute({
        id: 0x11, name: "EffectiveOperationMode", type: "OperationModeEnum",
        access: "R V", conformance: "M", constraint: "desc", quality: "N"
    }),
    Attribute({
        id: 0x12, name: "EffectiveControlMode", type: "ControlModeEnum",
        access: "R V", conformance: "M", constraint: "desc", quality: "N"
    }),
    Attribute(
        { id: 0x13, name: "Capacity", type: "int16", access: "R V", conformance: "M", default: null, quality: "X P" }
    ),
    Attribute({ id: 0x14, name: "Speed", type: "uint16", access: "R V", conformance: "O", default: null, quality: "X" }),
    Attribute({
        id: 0x15, name: "LifetimeRunningHours", type: "uint24",
        access: "RW VM", conformance: "O", default: 0, quality: "X N"
    }),
    Attribute({ id: 0x16, name: "Power", type: "uint24", access: "R V", conformance: "O", default: null, quality: "X" }),
    Attribute({
        id: 0x17, name: "LifetimeEnergyConsumed", type: "uint32",
        access: "RW VM", conformance: "O", default: 0, quality: "X N"
    }),
    Attribute({
        id: 0x20, name: "OperationMode", type: "OperationModeEnum",
        access: "RW VM", conformance: "M", constraint: "desc", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x21, name: "ControlMode", type: "ControlModeEnum",
        access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N"
    }),
    Attribute({ id: 0x22, name: "AlarmMask", type: "uint16" }),
    Event({ id: 0x0, name: "SupplyVoltageLow", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x1, name: "SupplyVoltageHigh", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x2, name: "PowerMissingPhase", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x3, name: "SystemPressureLow", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x4, name: "SystemPressureHigh", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x5, name: "DryRunning", access: "V", conformance: "O", priority: "critical" }),
    Event({ id: 0x6, name: "MotorTemperatureHigh", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x7, name: "PumpMotorFatalFailure", access: "V", conformance: "O", priority: "critical" }),
    Event({ id: 0x8, name: "ElectronicTemperatureHigh", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x9, name: "PumpBlocked", access: "V", conformance: "O", priority: "critical" }),
    Event({ id: 0xa, name: "SensorFailure", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0xb, name: "ElectronicNonFatalFailure", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0xc, name: "ElectronicFatalFailure", access: "V", conformance: "O", priority: "critical" }),
    Event({ id: 0xd, name: "GeneralFault", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0xe, name: "Leakage", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0xf, name: "AirDetection", access: "V", conformance: "O", priority: "info" }),
    Event({ id: 0x10, name: "TurbineOperation", access: "V", conformance: "O", priority: "info" }),

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
        Field({ id: 0x0, name: "Normal", conformance: "M" }),
        Field({ id: 0x1, name: "Minimum", conformance: "SPD" }),
        Field({ id: 0x2, name: "Maximum", conformance: "SPD" }),
        Field({ id: 0x3, name: "Local", conformance: "LOCAL" })
    ),

    Datatype(
        { name: "ControlModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "ConstantSpeed", conformance: "SPD" }),
        Field({ id: 0x1, name: "ConstantPressure", conformance: "PRSCONST" }),
        Field({ id: 0x2, name: "ProportionalPressure", conformance: "PRSCOMP" }),
        Field({ id: 0x3, name: "ConstantFlow", conformance: "FLW" }),
        Field({ id: 0x5, name: "ConstantTemperature", conformance: "TEMP" }),
        Field({ id: 0x7, name: "Automatic", conformance: "AUTO" })
    )
);

MatterDefinition.children.push(PumpConfigurationAndControl);
