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

export const EnergyEvse = Cluster(
    { name: "EnergyEvse", id: 0x99 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "PREF", constraint: "0", conformance: "M", longName: "ChargingPreferences" }),
        Field({ name: "SOC", constraint: "1", conformance: "P, O", longName: "SoCReporting" }),
        Field({ name: "PNC", constraint: "2", conformance: "P, O", longName: "PlugAndCharge" }),
        Field({ name: "RFID", constraint: "3", conformance: "O", longName: "Rfid" }),
        Field({ name: "V2X", constraint: "4", conformance: "P, O" })
    ),

    Attribute({ name: "State", id: 0x0, type: "StateEnum", conformance: "M", access: "R V", quality: "X" }),
    Attribute({ name: "SupplyState", id: 0x1, type: "SupplyStateEnum", conformance: "M", access: "R V" }),
    Attribute({ name: "FaultState", id: 0x2, type: "FaultStateEnum", conformance: "M", access: "R V" }),
    Attribute({
        name: "ChargingEnabledUntil", id: 0x3, type: "epoch-s",
        default: 0, conformance: "M", access: "R V", quality: "X N"
    }),
    Attribute({
        name: "DischargingEnabledUntil", id: 0x4, type: "epoch-s",
        default: 0, conformance: "V2X", access: "R V", quality: "X N"
    }),
    Attribute({
        name: "CircuitCapacity", id: 0x5, type: "amperage-mA",
        default: 0, constraint: "min 0", conformance: "M", access: "R V", quality: "N"
    }),
    Attribute({
        name: "MinimumChargeCurrent", id: 0x6, type: "amperage-mA",
        default: 6000, constraint: "min 0", conformance: "M", access: "R V", quality: "N"
    }),
    Attribute({
        name: "MaximumChargeCurrent", id: 0x7, type: "amperage-mA",
        default: 0, constraint: "min 0", conformance: "M", access: "R V", quality: "N"
    }),
    Attribute({
        name: "MaximumDischargeCurrent", id: 0x8, type: "amperage-mA",
        default: 0, constraint: "min 0", conformance: "V2X", access: "R V", quality: "N"
    }),
    Attribute({
        name: "UserMaximumChargeCurrent", id: 0x9, type: "amperage-mA",
        default: 0, constraint: "desc", conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "RandomizationDelayWindow", id: 0xa, type: "elapsed-s",
        default: 600, constraint: "max 86400", conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "NextChargeStartTime", id: 0x23, type: "epoch-s",
        default: null, conformance: "PREF", access: "R V", quality: "X"
    }),
    Attribute({
        name: "NextChargeTargetTime", id: 0x24, type: "epoch-s",
        default: null, conformance: "PREF", access: "R V", quality: "X"
    }),
    Attribute({
        name: "NextChargeRequiredEnergy", id: 0x25, type: "energy-mWh",
        default: null, constraint: "min 0", conformance: "PREF", access: "R V", quality: "X"
    }),
    Attribute({
        name: "NextChargeTargetSoC", id: 0x26, type: "percent",
        default: null, conformance: "PREF", access: "R V", quality: "X"
    }),
    Attribute({
        name: "ApproximateEvEfficiency", id: 0x27, type: "uint16",
        default: null, constraint: "desc", conformance: "[PREF]", access: "RW VM", quality: "X N"
    }),
    Attribute({
        name: "StateOfCharge", id: 0x30, type: "percent",
        default: null, conformance: "SOC", access: "R V", quality: "X"
    }),
    Attribute({
        name: "BatteryCapacity", id: 0x31, type: "energy-mWh",
        default: null, constraint: "min 0", conformance: "SOC", access: "R V", quality: "X"
    }),
    Attribute({
        name: "VehicleId", id: 0x32, type: "string",
        default: null, constraint: "max 32", conformance: "PNC", access: "R V", quality: "X"
    }),
    Attribute(
        { name: "SessionId", id: 0x40, type: "uint32", default: null, conformance: "M", access: "R V", quality: "X N" }
    ),
    Attribute({
        name: "SessionDuration", id: 0x41, type: "elapsed-s",
        default: null, conformance: "M", access: "R V", quality: "X N Q"
    }),
    Attribute({
        name: "SessionEnergyCharged", id: 0x42, type: "energy-mWh",
        default: null, constraint: "min 0", conformance: "M", access: "R V", quality: "X N Q"
    }),
    Attribute({
        name: "SessionEnergyDischarged", id: 0x43, type: "energy-mWh",
        default: null, constraint: "min 0", conformance: "V2X", access: "R V", quality: "X N Q"
    }),
    Event(
        { name: "EvConnected", id: 0x0, conformance: "M", access: "V", priority: "info" },
        Field({ name: "SessionId", id: 0x0, type: "uint32", conformance: "M" })
    ),

    Event(
        { name: "EvNotDetected", id: 0x1, conformance: "M", access: "V", priority: "info" },
        Field({ name: "SessionId", id: 0x0, type: "uint32", conformance: "M" }),
        Field({ name: "State", id: 0x1, type: "StateEnum", conformance: "M" }),
        Field({ name: "SessionDuration", id: 0x2, type: "elapsed-s", conformance: "M" }),
        Field({ name: "SessionEnergyCharged", id: 0x3, type: "energy-mWh", constraint: "min 0", conformance: "M" }),
        Field({ name: "SessionEnergyDischarged", id: 0x4, type: "energy-mWh", constraint: "min 0", conformance: "V2X" })
    ),

    Event(
        { name: "EnergyTransferStarted", id: 0x2, conformance: "M", access: "V", priority: "info" },
        Field({ name: "SessionId", id: 0x0, type: "uint32", conformance: "M" }),
        Field({ name: "State", id: 0x1, type: "StateEnum", conformance: "M" }),
        Field({ name: "MaximumCurrent", id: 0x2, type: "amperage-mA", constraint: "min 0", conformance: "M" }),
        Field({ name: "MaximumDischargeCurrent", id: 0x3, type: "amperage-mA", constraint: "min 0", conformance: "V2X" })
    ),

    Event(
        { name: "EnergyTransferStopped", id: 0x3, conformance: "M", access: "V", priority: "info" },
        Field({ name: "SessionId", id: 0x0, type: "uint32", conformance: "M" }),
        Field({ name: "State", id: 0x1, type: "StateEnum", conformance: "M" }),
        Field({ name: "Reason", id: 0x2, type: "EnergyTransferStoppedReasonEnum", conformance: "M" }),
        Field({ name: "EnergyTransferred", id: 0x4, type: "energy-mWh", constraint: "min 0", conformance: "M" }),
        Field({ name: "EnergyDischarged", id: 0x5, type: "energy-mWh", constraint: "min 0", conformance: "V2X" })
    ),

    Event(
        { name: "Fault", id: 0x4, conformance: "M", access: "V", priority: "critical" },
        Field({ name: "SessionId", id: 0x0, type: "uint32", conformance: "M", quality: "X" }),
        Field({ name: "State", id: 0x1, type: "StateEnum", conformance: "M" }),
        Field({ name: "FaultStatePreviousState", id: 0x2, type: "FaultStateEnum", conformance: "M" }),
        Field({ name: "FaultStateCurrentState", id: 0x4, type: "FaultStateEnum", conformance: "M" })
    ),

    Event(
        { name: "Rfid", id: 0x5, conformance: "[RFID]", access: "V", priority: "info" },
        Field({ name: "Uid", id: 0x0, type: "octstr", constraint: "max 10", conformance: "M" })
    ),
    Command({ name: "Disable", id: 0x1, conformance: "M", access: "O T", direction: "request", response: "status" }),

    Command(
        { name: "EnableCharging", id: 0x2, conformance: "M", access: "O T", direction: "request", response: "status" },
        Field({ name: "ChargingEnabledUntil", id: 0x0, type: "epoch-s", default: null, conformance: "M", quality: "X" }),
        Field({ name: "MinimumChargeCurrent", id: 0x1, type: "amperage-mA", constraint: "min 0", conformance: "M" }),
        Field({ name: "MaximumChargeCurrent", id: 0x2, type: "amperage-mA", constraint: "min 0", conformance: "M" })
    ),

    Command(
        {
            name: "EnableDischarging", id: 0x3,
            conformance: "V2X", access: "O T", direction: "request", response: "status"
        },
        Field({ name: "DischargingEnabledUntil", id: 0x0, type: "epoch-s", default: null, conformance: "M", quality: "X" }),
        Field({ name: "MaximumDischargeCurrent", id: 0x1, type: "amperage-mA", constraint: "min 0", conformance: "M" })
    ),

    Command({ name: "StartDiagnostics", id: 0x4, conformance: "O", access: "O T", direction: "request", response: "status" }),

    Command(
        { name: "SetTargets", id: 0x5, conformance: "PREF", access: "O T", direction: "request", response: "status" },
        Field(
            { name: "ChargingTargetSchedules", id: 0x0, type: "list", constraint: "max 7", conformance: "M" },
            Field({ name: "entry", type: "ChargingTargetScheduleStruct" })
        )
    ),

    Command({
        name: "GetTargets", id: 0x6,
        conformance: "PREF", access: "O T", direction: "request", response: "GetTargetsResponse"
    }),
    Command(
        { name: "ClearTargets", id: 0x7, conformance: "PREF", access: "O T", direction: "request", response: "status" }
    ),

    Command(
        { name: "GetTargetsResponse", id: 0x0, conformance: "PREF", direction: "response" },
        Field(
            { name: "ChargingTargetSchedules", id: 0x0, type: "list", constraint: "max 7", conformance: "M" },
            Field({ name: "entry", type: "ChargingTargetScheduleStruct" })
        )
    ),

    Datatype(
        { name: "TargetDayOfWeekBitmap", type: "map8" },
        Field({ name: "Sunday", constraint: "0" }),
        Field({ name: "Monday", constraint: "1" }),
        Field({ name: "Tuesday", constraint: "2" }),
        Field({ name: "Wednesday", constraint: "3" }),
        Field({ name: "Thursday", constraint: "4" }),
        Field({ name: "Friday", constraint: "5" }),
        Field({ name: "Saturday", constraint: "6" })
    ),

    Datatype(
        { name: "StateEnum", type: "enum8" },
        Field({ name: "NotPluggedIn", id: 0x0, conformance: "M" }),
        Field({ name: "PluggedInNoDemand", id: 0x1, conformance: "M" }),
        Field({ name: "PluggedInDemand", id: 0x2, conformance: "M" }),
        Field({ name: "PluggedInCharging", id: 0x3, conformance: "M" }),
        Field({ name: "PluggedInDischarging", id: 0x4, conformance: "V2X" }),
        Field({ name: "SessionEnding", id: 0x5, conformance: "M" }),
        Field({ name: "Fault", id: 0x6, conformance: "M" })
    ),

    Datatype(
        { name: "SupplyStateEnum", type: "enum8" },
        Field({ name: "Disabled", id: 0x0, conformance: "M" }),
        Field({ name: "ChargingEnabled", id: 0x1, conformance: "M" }),
        Field({ name: "DischargingEnabled", id: 0x2, conformance: "[V2X]" }),
        Field({ name: "DisabledError", id: 0x3, conformance: "M" }),
        Field({ name: "DisabledDiagnostics", id: 0x4, conformance: "M" }),
        Field({ name: "Enabled", id: 0x5, conformance: "[V2X]" })
    ),

    Datatype(
        { name: "FaultStateEnum", type: "enum8" },
        Field({ name: "NoError", id: 0x0, conformance: "M" }),
        Field({ name: "MeterFailure", id: 0x1, conformance: "M" }),
        Field({ name: "OverVoltage", id: 0x2, conformance: "M" }),
        Field({ name: "UnderVoltage", id: 0x3, conformance: "M" }),
        Field({ name: "OverCurrent", id: 0x4, conformance: "M" }),
        Field({ name: "ContactWetFailure", id: 0x5, conformance: "M" }),
        Field({ name: "ContactDryFailure", id: 0x6, conformance: "M" }),
        Field({ name: "GroundFault", id: 0x7, conformance: "M" }),
        Field({ name: "PowerLoss", id: 0x8, conformance: "M" }),
        Field({ name: "PowerQuality", id: 0x9, conformance: "M" }),
        Field({ name: "PilotShortCircuit", id: 0xa, conformance: "M" }),
        Field({ name: "EmergencyStop", id: 0xb, conformance: "M" }),
        Field({ name: "EvDisconnected", id: 0xc, conformance: "M" }),
        Field({ name: "WrongPowerSupply", id: 0xd, conformance: "M" }),
        Field({ name: "LiveNeutralSwap", id: 0xe, conformance: "M" }),
        Field({ name: "OverTemperature", id: 0xf, conformance: "M" }),
        Field({ name: "Other", id: 0xff, conformance: "M" })
    ),

    Datatype(
        { name: "EnergyTransferStoppedReasonEnum", type: "enum8" },
        Field({ name: "EvStopped", id: 0x0, conformance: "M" }),
        Field({ name: "EvseStopped", id: 0x1, conformance: "M" }),
        Field({ name: "Other", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "ChargingTargetStruct", type: "struct" },
        Field({
            name: "TargetTimeMinutesPastMidnight", id: 0x0, type: "uint16",
            default: 0, constraint: "max 1439", conformance: "M"
        }),
        Field({ name: "TargetSoC", id: 0x1, type: "percent", default: 0, conformance: "SOC, O.a+" }),
        Field({
            name: "AddedEnergy", id: 0x2, type: "energy-mWh",
            default: 0, constraint: "min 0", conformance: "[SOC], O.a+"
        })
    ),

    Datatype(
        { name: "ChargingTargetScheduleStruct", type: "struct" },
        Field({ name: "DayOfWeekForSequence", id: 0x0, type: "TargetDayOfWeekBitmap", conformance: "M" }),
        Field(
            { name: "ChargingTargets", id: 0x1, type: "list", constraint: "max 10", conformance: "M" },
            Field({ name: "entry", type: "ChargingTargetStruct" })
        )
    )
);

MatterDefinition.children.push(EnergyEvse);
