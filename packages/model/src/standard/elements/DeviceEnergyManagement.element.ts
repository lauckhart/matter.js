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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const DeviceEnergyManagement = Cluster(
    { id: 0x98, name: "DeviceEnergyManagement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 4 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PA", conformance: "O", constraint: "0", longName: "PowerAdjustment" }),
        Field({
            name: "PFR",
            conformance: "[!PA].a, STA | PAU | FA | CON, O", constraint: "1",
            longName: "PowerForecastReporting"
        }),
        Field({ name: "SFR", conformance: "[!PA].a", constraint: "2", longName: "StateForecastReporting" }),
        Field({ name: "STA", conformance: "O", constraint: "3", longName: "StartTimeAdjustment" }),
        Field({ name: "PAU", conformance: "O", constraint: "4", longName: "Pausable" }),
        Field({ name: "FA", conformance: "O", constraint: "5", longName: "ForecastAdjustment" }),
        Field({ name: "CON", conformance: "O", constraint: "6", longName: "ConstraintBasedAdjustment" })
    ),

    Attribute(
        { id: 0x0, name: "EsaType", type: "ESATypeEnum", access: "R V", conformance: "M", default: 255, quality: "F" }
    ),
    Attribute({ id: 0x1, name: "EsaCanGenerate", type: "bool", access: "R V", conformance: "M", default: false, quality: "F" }),
    Attribute({
        id: 0x2, name: "EsaState", type: "ESAStateEnum",
        access: "R V", conformance: "M", constraint: "desc", default: 0
    }),
    Attribute({ id: 0x3, name: "AbsMinPower", type: "power-mW", access: "R V", conformance: "M", default: 0 }),
    Attribute({
        id: 0x4, name: "AbsMaxPower", type: "power-mW",
        access: "R V", conformance: "M", constraint: "min absMinPower", default: 0
    }),
    Attribute({
        id: 0x5, name: "PowerAdjustmentCapability", type: "PowerAdjustCapabilityStruct",
        access: "R V", conformance: "PA", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x6, name: "Forecast", type: "ForecastStruct",
        access: "R V", conformance: "PFR | SFR", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x7, name: "OptOutState", type: "OptOutStateEnum",
        access: "R V", conformance: "PA | STA | PAU | FA | CON", constraint: "desc", default: 0
    }),
    Event({ id: 0x0, name: "PowerAdjustStart", access: "V", conformance: "PA", priority: "info" }),

    Event(
        { id: 0x1, name: "PowerAdjustEnd", access: "V", conformance: "PA", priority: "info" },
        Field({ id: 0x0, name: "Cause", type: "CauseEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "Duration", type: "elapsed-s", conformance: "M" }),
        Field({ id: 0x2, name: "EnergyUse", type: "energy-mWh", conformance: "M" })
    ),

    Event({ id: 0x2, name: "Paused", access: "V", conformance: "PAU", priority: "info" }),
    Event(
        { id: 0x3, name: "Resumed", access: "V", conformance: "PAU", priority: "info" },
        Field({ id: 0x0, name: "Cause", type: "CauseEnum", conformance: "M", default: 0 })
    ),

    Command(
        {
            id: 0x0, name: "PowerAdjustRequest",
            access: "O", conformance: "PA", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Power", type: "power-mW", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Duration", type: "elapsed-s", conformance: "M", constraint: "desc" }),
        Field({ id: 0x2, name: "Cause", type: "AdjustmentCauseEnum", conformance: "M", constraint: "desc" })
    ),

    Command({
        id: 0x1, name: "CancelPowerAdjustRequest",
        access: "O", conformance: "PA", direction: "request", response: "status"
    }),

    Command(
        {
            id: 0x2, name: "StartTimeAdjustRequest",
            access: "O", conformance: "STA", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "RequestedStartTime", type: "epoch-s", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Cause", type: "AdjustmentCauseEnum", conformance: "M" })
    ),

    Command(
        { id: 0x3, name: "PauseRequest", access: "O", conformance: "PAU", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Duration", type: "elapsed-s", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Cause", type: "AdjustmentCauseEnum", conformance: "M" })
    ),
    Command({ id: 0x4, name: "ResumeRequest", access: "O", conformance: "PAU", direction: "request", response: "status" }),

    Command(
        {
            id: 0x5, name: "ModifyForecastRequest",
            access: "O", conformance: "FA", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ForecastId", type: "uint32", conformance: "M" }),
        Field(
            { id: 0x1, name: "SlotAdjustments", type: "list", conformance: "M", constraint: "max 10" },
            Field({ name: "entry", type: "SlotAdjustmentStruct" })
        ),
        Field({ id: 0x2, name: "Cause", type: "AdjustmentCauseEnum", conformance: "M" })
    ),

    Command(
        {
            id: 0x6, name: "RequestConstraintBasedForecast",
            access: "O", conformance: "CON", direction: "request", response: "status"
        },
        Field(
            { id: 0x0, name: "Constraints", type: "list", conformance: "M", constraint: "max 10" },
            Field({ name: "entry", type: "ConstraintsStruct" })
        ),
        Field({ id: 0x1, name: "Cause", type: "AdjustmentCauseEnum", conformance: "M" })
    ),

    Command({
        id: 0x7, name: "CancelRequest",
        access: "O", conformance: "STA | FA | CON", direction: "request", response: "status"
    }),

    Datatype(
        { name: "CostTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Financial", conformance: "M" }),
        Field({ id: 0x1, name: "GhgEmissions", conformance: "M" }),
        Field({ id: 0x2, name: "Comfort", conformance: "M" }),
        Field({ id: 0x3, name: "Temperature", conformance: "M" })
    ),

    Datatype(
        { name: "ESATypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Evse", conformance: "O" }),
        Field({ id: 0x1, name: "SpaceHeating", conformance: "O" }),
        Field({ id: 0x2, name: "WaterHeating", conformance: "O" }),
        Field({ id: 0x3, name: "SpaceCooling", conformance: "O" }),
        Field({ id: 0x4, name: "SpaceHeatingCooling", conformance: "O" }),
        Field({ id: 0x5, name: "BatteryStorage", conformance: "O" }),
        Field({ id: 0x6, name: "SolarPv", conformance: "O" }),
        Field({ id: 0x7, name: "FridgeFreezer", conformance: "O" }),
        Field({ id: 0x8, name: "WashingMachine", conformance: "O" }),
        Field({ id: 0x9, name: "Dishwasher", conformance: "O" }),
        Field({ id: 0xa, name: "Cooking", conformance: "O" }),
        Field({ id: 0xb, name: "HomeWaterPump", conformance: "O" }),
        Field({ id: 0xc, name: "IrrigationWaterPump", conformance: "O" }),
        Field({ id: 0xd, name: "PoolPump", conformance: "O" }),
        Field({ id: 0xff, name: "Other", conformance: "O" })
    ),

    Datatype(
        { name: "ESAStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Offline", conformance: "M" }),
        Field({ id: 0x1, name: "Online", conformance: "M" }),
        Field({ id: 0x2, name: "Fault", conformance: "M" }),
        Field({ id: 0x3, name: "PowerAdjustActive", conformance: "PA" }),
        Field({ id: 0x4, name: "Paused", conformance: "PAU" })
    ),

    Datatype(
        { name: "OptOutStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "NoOptOut", conformance: "M" }),
        Field({ id: 0x1, name: "LocalOptOut", conformance: "M" }),
        Field({ id: 0x2, name: "GridOptOut", conformance: "M" }),
        Field({ id: 0x3, name: "OptOut", conformance: "M" })
    ),

    Datatype(
        { name: "CauseEnum", type: "enum8" },
        Field({ id: 0x0, name: "NormalCompletion", conformance: "M" }),
        Field({ id: 0x1, name: "Offline", conformance: "M" }),
        Field({ id: 0x2, name: "Fault", conformance: "M" }),
        Field({ id: 0x3, name: "UserOptOut", conformance: "M" }),
        Field({ id: 0x4, name: "Cancelled", conformance: "M" })
    ),

    Datatype(
        { name: "AdjustmentCauseEnum", type: "enum8" },
        Field({ id: 0x0, name: "LocalOptimization", conformance: "M" }),
        Field({ id: 0x1, name: "GridOptimization", conformance: "M" })
    ),

    Datatype(
        { name: "ForecastUpdateReasonEnum", type: "enum8" },
        Field({ id: 0x0, name: "InternalOptimization", conformance: "M" }),
        Field({ id: 0x1, name: "LocalOptimization", conformance: "M" }),
        Field({ id: 0x2, name: "GridOptimization", conformance: "M" })
    ),

    Datatype(
        { name: "PowerAdjustReasonEnum", type: "enum8" },
        Field({ id: 0x0, name: "NoAdjustment", conformance: "M" }),
        Field({ id: 0x1, name: "LocalOptimizationAdjustment", conformance: "M" }),
        Field({ id: 0x2, name: "GridOptimizationAdjustment", conformance: "M" })
    ),

    Datatype(
        { name: "CostStruct", type: "struct" },
        Field({ id: 0x0, name: "CostType", type: "CostTypeEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "Value", type: "int32", conformance: "M", default: 0 }),
        Field({ id: 0x2, name: "DecimalPoints", type: "uint8", conformance: "M", default: 0 }),
        Field({ id: 0x3, name: "Currency", type: "uint16", conformance: "O", constraint: "max 999", default: 0 })
    ),

    Datatype(
        { name: "PowerAdjustStruct", type: "struct" },
        Field({ id: 0x0, name: "MinPower", type: "power-mW", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "MaxPower", type: "power-mW", conformance: "M", constraint: "min minPower", default: 0 }),
        Field({ id: 0x2, name: "MinDuration", type: "elapsed-s", conformance: "M", default: 0 }),
        Field({ id: 0x3, name: "MaxDuration", type: "elapsed-s", conformance: "M", constraint: "min minDuration" })
    ),

    Datatype(
        { name: "PowerAdjustCapabilityStruct", type: "struct" },

        Field(
            {
                id: 0x0, name: "PowerAdjustCapability", type: "list",
                conformance: "M", constraint: "max 8", default: null, quality: "X"
            },
            Field({ name: "entry", type: "PowerAdjustStruct" })
        ),

        Field({ id: 0x1, name: "Cause", type: "PowerAdjustReasonEnum", conformance: "M", default: 0 })
    ),

    Datatype(
        { name: "ForecastStruct", type: "struct" },
        Field({ id: 0x0, name: "ForecastId", type: "uint32", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "ActiveSlotNumber", type: "uint16", conformance: "M", default: 0, quality: "X" }),
        Field({ id: 0x2, name: "StartTime", type: "epoch-s", conformance: "M" }),
        Field({ id: 0x3, name: "EndTime", type: "epoch-s", conformance: "M" }),
        Field({ id: 0x4, name: "EarliestStartTime", type: "epoch-s", conformance: "STA", quality: "X" }),
        Field({ id: 0x5, name: "LatestEndTime", type: "epoch-s", conformance: "STA" }),
        Field({ id: 0x6, name: "IsPausable", type: "bool", conformance: "M" }),
        Field(
            { id: 0x7, name: "Slots", type: "list", conformance: "M", constraint: "max 10" },
            Field({ name: "entry", type: "SlotStruct" })
        ),
        Field({ id: 0x8, name: "ForecastUpdateReason", type: "ForecastUpdateReasonEnum", conformance: "M" })
    ),

    Datatype(
        { name: "SlotStruct", type: "struct" },
        Field({ id: 0x0, name: "MinDuration", type: "elapsed-s", conformance: "M" }),
        Field({ id: 0x1, name: "MaxDuration", type: "elapsed-s", conformance: "M" }),
        Field({ id: 0x2, name: "DefaultDuration", type: "elapsed-s", conformance: "M" }),
        Field({ id: 0x3, name: "ElapsedSlotTime", type: "elapsed-s", conformance: "M" }),
        Field({ id: 0x4, name: "RemainingSlotTime", type: "elapsed-s", conformance: "M" }),
        Field({ id: 0x5, name: "SlotIsPausable", type: "bool", conformance: "PAU" }),
        Field({ id: 0x6, name: "MinPauseDuration", type: "elapsed-s", conformance: "PAU" }),
        Field({ id: 0x7, name: "MaxPauseDuration", type: "elapsed-s", conformance: "PAU" }),
        Field({ id: 0x8, name: "ManufacturerEsaState", type: "uint16", conformance: "SFR" }),
        Field({ id: 0x9, name: "NominalPower", type: "power-mW", conformance: "PFR" }),
        Field({ id: 0xa, name: "MinPower", type: "power-mW", conformance: "PFR" }),
        Field({ id: 0xb, name: "MaxPower", type: "power-mW", conformance: "PFR" }),
        Field({ id: 0xc, name: "NominalEnergy", type: "energy-mWh", conformance: "PFR" }),
        Field(
            { id: 0xd, name: "Costs", type: "list", conformance: "O", constraint: "max 5" },
            Field({ name: "entry", type: "CostStruct" })
        ),
        Field({ id: 0xe, name: "MinPowerAdjustment", type: "power-mW", conformance: "FA & PFR" }),
        Field({ id: 0xf, name: "MaxPowerAdjustment", type: "power-mW", conformance: "FA & PFR" }),
        Field({ id: 0x10, name: "MinDurationAdjustment", type: "elapsed-s", conformance: "FA" }),
        Field({ id: 0x11, name: "MaxDurationAdjustment", type: "elapsed-s", conformance: "FA" })
    ),

    Datatype(
        { name: "SlotAdjustmentStruct", type: "struct" },
        Field({ id: 0x0, name: "SlotIndex", type: "uint8", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "NominalPower", type: "power-mW", conformance: "PFR", constraint: "desc" }),
        Field({ id: 0x2, name: "Duration", type: "elapsed-s", conformance: "M", constraint: "desc" })
    ),

    Datatype(
        { name: "ConstraintsStruct", type: "struct" },
        Field({ id: 0x0, name: "StartTime", type: "epoch-s", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Duration", type: "elapsed-s", conformance: "M", constraint: "max 86400" }),
        Field({ id: 0x2, name: "NominalPower", type: "power-mW", conformance: "PFR", constraint: "desc" }),
        Field({ id: 0x3, name: "MaximumEnergy", type: "energy-mWh", conformance: "PFR" }),
        Field({ id: 0x4, name: "LoadControl", type: "int8", conformance: "SFR" })
    )
);

MatterDefinition.children.push(DeviceEnergyManagement);
