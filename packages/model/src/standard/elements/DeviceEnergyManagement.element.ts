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
    { name: "DeviceEnergyManagement", id: 0x98 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "PA", constraint: "0", conformance: "O", longName: "PowerAdjustment" }),
        Field({
            name: "PFR",
            constraint: "1", conformance: "[!PA].a, STA | PAU | FA | CON, O",
            longName: "PowerForecastReporting"
        }),
        Field({ name: "SFR", constraint: "2", conformance: "[!PA].a", longName: "StateForecastReporting" }),
        Field({ name: "STA", constraint: "3", conformance: "O", longName: "StartTimeAdjustment" }),
        Field({ name: "PAU", constraint: "4", conformance: "O", longName: "Pausable" }),
        Field({ name: "FA", constraint: "5", conformance: "O", longName: "ForecastAdjustment" }),
        Field({ name: "CON", constraint: "6", conformance: "O", longName: "ConstraintBasedAdjustment" })
    ),

    Attribute(
        { name: "EsaType", id: 0x0, type: "ESATypeEnum", default: 255, conformance: "M", access: "R V", quality: "F" }
    ),
    Attribute({ name: "EsaCanGenerate", id: 0x1, type: "bool", default: false, conformance: "M", access: "R V", quality: "F" }),
    Attribute({
        name: "EsaState", id: 0x2, type: "ESAStateEnum",
        default: 0, constraint: "desc", conformance: "M", access: "R V"
    }),
    Attribute({ name: "AbsMinPower", id: 0x3, type: "power-mW", default: 0, conformance: "M", access: "R V" }),
    Attribute({
        name: "AbsMaxPower", id: 0x4, type: "power-mW",
        default: 0, constraint: "min absMinPower", conformance: "M", access: "R V"
    }),
    Attribute({
        name: "PowerAdjustmentCapability", id: 0x5, type: "PowerAdjustCapabilityStruct",
        default: null, conformance: "PA", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "Forecast", id: 0x6, type: "ForecastStruct",
        default: null, conformance: "PFR | SFR", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "OptOutState", id: 0x7, type: "OptOutStateEnum",
        default: 0, constraint: "desc", conformance: "PA | STA | PAU | FA | CON", access: "R V"
    }),
    Event({ name: "PowerAdjustStart", id: 0x0, conformance: "PA", access: "V", priority: "info" }),

    Event(
        { name: "PowerAdjustEnd", id: 0x1, conformance: "PA", access: "V", priority: "info" },
        Field({ name: "Cause", id: 0x0, type: "CauseEnum", default: 0, conformance: "M" }),
        Field({ name: "Duration", id: 0x1, type: "elapsed-s", conformance: "M" }),
        Field({ name: "EnergyUse", id: 0x2, type: "energy-mWh", conformance: "M" })
    ),

    Event({ name: "Paused", id: 0x2, conformance: "PAU", access: "V", priority: "info" }),
    Event(
        { name: "Resumed", id: 0x3, conformance: "PAU", access: "V", priority: "info" },
        Field({ name: "Cause", id: 0x0, type: "CauseEnum", default: 0, conformance: "M" })
    ),

    Command(
        {
            name: "PowerAdjustRequest", id: 0x0,
            conformance: "PA", access: "O", direction: "request", response: "status"
        },
        Field({ name: "Power", id: 0x0, type: "power-mW", constraint: "desc", conformance: "M" }),
        Field({ name: "Duration", id: 0x1, type: "elapsed-s", constraint: "desc", conformance: "M" }),
        Field({ name: "Cause", id: 0x2, type: "AdjustmentCauseEnum", constraint: "desc", conformance: "M" })
    ),

    Command({
        name: "CancelPowerAdjustRequest", id: 0x1,
        conformance: "PA", access: "O", direction: "request", response: "status"
    }),

    Command(
        {
            name: "StartTimeAdjustRequest", id: 0x2,
            conformance: "STA", access: "O", direction: "request", response: "status"
        },
        Field({ name: "RequestedStartTime", id: 0x0, type: "epoch-s", constraint: "desc", conformance: "M" }),
        Field({ name: "Cause", id: 0x1, type: "AdjustmentCauseEnum", conformance: "M" })
    ),

    Command(
        { name: "PauseRequest", id: 0x3, conformance: "PAU", access: "O", direction: "request", response: "status" },
        Field({ name: "Duration", id: 0x0, type: "elapsed-s", constraint: "desc", conformance: "M" }),
        Field({ name: "Cause", id: 0x1, type: "AdjustmentCauseEnum", conformance: "M" })
    ),
    Command({ name: "ResumeRequest", id: 0x4, conformance: "PAU", access: "O", direction: "request", response: "status" }),

    Command(
        {
            name: "ModifyForecastRequest", id: 0x5,
            conformance: "FA", access: "O", direction: "request", response: "status"
        },
        Field({ name: "ForecastId", id: 0x0, type: "uint32", conformance: "M" }),
        Field(
            { name: "SlotAdjustments", id: 0x1, type: "list", constraint: "max 10", conformance: "M" },
            Field({ name: "entry", type: "SlotAdjustmentStruct" })
        ),
        Field({ name: "Cause", id: 0x2, type: "AdjustmentCauseEnum", conformance: "M" })
    ),

    Command(
        {
            name: "RequestConstraintBasedForecast", id: 0x6,
            conformance: "CON", access: "O", direction: "request", response: "status"
        },
        Field(
            { name: "Constraints", id: 0x0, type: "list", constraint: "max 10", conformance: "M" },
            Field({ name: "entry", type: "ConstraintsStruct" })
        ),
        Field({ name: "Cause", id: 0x1, type: "AdjustmentCauseEnum", conformance: "M" })
    ),

    Command({
        name: "CancelRequest", id: 0x7,
        conformance: "STA | FA | CON", access: "O", direction: "request", response: "status"
    }),

    Datatype(
        { name: "CostTypeEnum", type: "enum8" },
        Field({ name: "Financial", id: 0x0, conformance: "M" }),
        Field({ name: "GhgEmissions", id: 0x1, conformance: "M" }),
        Field({ name: "Comfort", id: 0x2, conformance: "M" }),
        Field({ name: "Temperature", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "ESATypeEnum", type: "enum8" },
        Field({ name: "Evse", id: 0x0, conformance: "O" }),
        Field({ name: "SpaceHeating", id: 0x1, conformance: "O" }),
        Field({ name: "WaterHeating", id: 0x2, conformance: "O" }),
        Field({ name: "SpaceCooling", id: 0x3, conformance: "O" }),
        Field({ name: "SpaceHeatingCooling", id: 0x4, conformance: "O" }),
        Field({ name: "BatteryStorage", id: 0x5, conformance: "O" }),
        Field({ name: "SolarPv", id: 0x6, conformance: "O" }),
        Field({ name: "FridgeFreezer", id: 0x7, conformance: "O" }),
        Field({ name: "WashingMachine", id: 0x8, conformance: "O" }),
        Field({ name: "Dishwasher", id: 0x9, conformance: "O" }),
        Field({ name: "Cooking", id: 0xa, conformance: "O" }),
        Field({ name: "HomeWaterPump", id: 0xb, conformance: "O" }),
        Field({ name: "IrrigationWaterPump", id: 0xc, conformance: "O" }),
        Field({ name: "PoolPump", id: 0xd, conformance: "O" }),
        Field({ name: "Other", id: 0xff, conformance: "O" })
    ),

    Datatype(
        { name: "ESAStateEnum", type: "enum8" },
        Field({ name: "Offline", id: 0x0, conformance: "M" }),
        Field({ name: "Online", id: 0x1, conformance: "M" }),
        Field({ name: "Fault", id: 0x2, conformance: "M" }),
        Field({ name: "PowerAdjustActive", id: 0x3, conformance: "PA" }),
        Field({ name: "Paused", id: 0x4, conformance: "PAU" })
    ),

    Datatype(
        { name: "OptOutStateEnum", type: "enum8" },
        Field({ name: "NoOptOut", id: 0x0, conformance: "M" }),
        Field({ name: "LocalOptOut", id: 0x1, conformance: "M" }),
        Field({ name: "GridOptOut", id: 0x2, conformance: "M" }),
        Field({ name: "OptOut", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "CauseEnum", type: "enum8" },
        Field({ name: "NormalCompletion", id: 0x0, conformance: "M" }),
        Field({ name: "Offline", id: 0x1, conformance: "M" }),
        Field({ name: "Fault", id: 0x2, conformance: "M" }),
        Field({ name: "UserOptOut", id: 0x3, conformance: "M" }),
        Field({ name: "Cancelled", id: 0x4, conformance: "M" })
    ),

    Datatype(
        { name: "AdjustmentCauseEnum", type: "enum8" },
        Field({ name: "LocalOptimization", id: 0x0, conformance: "M" }),
        Field({ name: "GridOptimization", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "ForecastUpdateReasonEnum", type: "enum8" },
        Field({ name: "InternalOptimization", id: 0x0, conformance: "M" }),
        Field({ name: "LocalOptimization", id: 0x1, conformance: "M" }),
        Field({ name: "GridOptimization", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "PowerAdjustReasonEnum", type: "enum8" },
        Field({ name: "NoAdjustment", id: 0x0, conformance: "M" }),
        Field({ name: "LocalOptimizationAdjustment", id: 0x1, conformance: "M" }),
        Field({ name: "GridOptimizationAdjustment", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "CostStruct", type: "struct" },
        Field({ name: "CostType", id: 0x0, type: "CostTypeEnum", default: 0, conformance: "M" }),
        Field({ name: "Value", id: 0x1, type: "int32", default: 0, conformance: "M" }),
        Field({ name: "DecimalPoints", id: 0x2, type: "uint8", default: 0, conformance: "M" }),
        Field({ name: "Currency", id: 0x3, type: "uint16", default: 0, constraint: "max 999", conformance: "O" })
    ),

    Datatype(
        { name: "PowerAdjustStruct", type: "struct" },
        Field({ name: "MinPower", id: 0x0, type: "power-mW", default: 0, conformance: "M" }),
        Field({ name: "MaxPower", id: 0x1, type: "power-mW", default: 0, constraint: "min minPower", conformance: "M" }),
        Field({ name: "MinDuration", id: 0x2, type: "elapsed-s", default: 0, conformance: "M" }),
        Field({ name: "MaxDuration", id: 0x3, type: "elapsed-s", constraint: "min minDuration", conformance: "M" })
    ),

    Datatype(
        { name: "PowerAdjustCapabilityStruct", type: "struct" },

        Field(
            {
                name: "PowerAdjustCapability", id: 0x0, type: "list",
                default: null, constraint: "max 8", conformance: "M", quality: "X"
            },
            Field({ name: "entry", type: "PowerAdjustStruct" })
        ),

        Field({ name: "Cause", id: 0x1, type: "PowerAdjustReasonEnum", default: 0, conformance: "M" })
    ),

    Datatype(
        { name: "ForecastStruct", type: "struct" },
        Field({ name: "ForecastId", id: 0x0, type: "uint32", default: 0, conformance: "M" }),
        Field({ name: "ActiveSlotNumber", id: 0x1, type: "uint16", default: 0, conformance: "M", quality: "X" }),
        Field({ name: "StartTime", id: 0x2, type: "epoch-s", conformance: "M" }),
        Field({ name: "EndTime", id: 0x3, type: "epoch-s", conformance: "M" }),
        Field({ name: "EarliestStartTime", id: 0x4, type: "epoch-s", conformance: "STA", quality: "X" }),
        Field({ name: "LatestEndTime", id: 0x5, type: "epoch-s", conformance: "STA" }),
        Field({ name: "IsPausable", id: 0x6, type: "bool", conformance: "M" }),
        Field(
            { name: "Slots", id: 0x7, type: "list", constraint: "max 10", conformance: "M" },
            Field({ name: "entry", type: "SlotStruct" })
        ),
        Field({ name: "ForecastUpdateReason", id: 0x8, type: "ForecastUpdateReasonEnum", conformance: "M" })
    ),

    Datatype(
        { name: "SlotStruct", type: "struct" },
        Field({ name: "MinDuration", id: 0x0, type: "elapsed-s", conformance: "M" }),
        Field({ name: "MaxDuration", id: 0x1, type: "elapsed-s", conformance: "M" }),
        Field({ name: "DefaultDuration", id: 0x2, type: "elapsed-s", conformance: "M" }),
        Field({ name: "ElapsedSlotTime", id: 0x3, type: "elapsed-s", conformance: "M" }),
        Field({ name: "RemainingSlotTime", id: 0x4, type: "elapsed-s", conformance: "M" }),
        Field({ name: "SlotIsPausable", id: 0x5, type: "bool", conformance: "PAU" }),
        Field({ name: "MinPauseDuration", id: 0x6, type: "elapsed-s", conformance: "PAU" }),
        Field({ name: "MaxPauseDuration", id: 0x7, type: "elapsed-s", conformance: "PAU" }),
        Field({ name: "ManufacturerEsaState", id: 0x8, type: "uint16", conformance: "SFR" }),
        Field({ name: "NominalPower", id: 0x9, type: "power-mW", conformance: "PFR" }),
        Field({ name: "MinPower", id: 0xa, type: "power-mW", conformance: "PFR" }),
        Field({ name: "MaxPower", id: 0xb, type: "power-mW", conformance: "PFR" }),
        Field({ name: "NominalEnergy", id: 0xc, type: "energy-mWh", conformance: "PFR" }),
        Field(
            { name: "Costs", id: 0xd, type: "list", constraint: "max 5", conformance: "O" },
            Field({ name: "entry", type: "CostStruct" })
        ),
        Field({ name: "MinPowerAdjustment", id: 0xe, type: "power-mW", conformance: "FA & PFR" }),
        Field({ name: "MaxPowerAdjustment", id: 0xf, type: "power-mW", conformance: "FA & PFR" }),
        Field({ name: "MinDurationAdjustment", id: 0x10, type: "elapsed-s", conformance: "FA" }),
        Field({ name: "MaxDurationAdjustment", id: 0x11, type: "elapsed-s", conformance: "FA" })
    ),

    Datatype(
        { name: "SlotAdjustmentStruct", type: "struct" },
        Field({ name: "SlotIndex", id: 0x0, type: "uint8", constraint: "desc", conformance: "M" }),
        Field({ name: "NominalPower", id: 0x1, type: "power-mW", constraint: "desc", conformance: "PFR" }),
        Field({ name: "Duration", id: 0x2, type: "elapsed-s", constraint: "desc", conformance: "M" })
    ),

    Datatype(
        { name: "ConstraintsStruct", type: "struct" },
        Field({ name: "StartTime", id: 0x0, type: "epoch-s", constraint: "desc", conformance: "M" }),
        Field({ name: "Duration", id: 0x1, type: "elapsed-s", constraint: "max 86400", conformance: "M" }),
        Field({ name: "NominalPower", id: 0x2, type: "power-mW", constraint: "desc", conformance: "PFR" }),
        Field({ name: "MaximumEnergy", id: 0x3, type: "energy-mWh", conformance: "PFR" }),
        Field({ name: "LoadControl", id: 0x4, type: "int8", conformance: "SFR" })
    )
);

MatterDefinition.children.push(DeviceEnergyManagement);
