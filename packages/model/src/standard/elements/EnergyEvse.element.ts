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
    { id: 0x99, name: "EnergyEvse" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PREF", conformance: "M", constraint: "0" }),
        Field({ name: "SOC", conformance: "P, O", constraint: "1" }),
        Field({ name: "PNC", conformance: "P, O", constraint: "2" }),
        Field({ name: "RFID", conformance: "O", constraint: "3" }),
        Field({ name: "V2X", conformance: "P, O", constraint: "4" })
    ),

    Attribute({ id: 0x0, name: "State", type: "StateEnum", access: "R V", conformance: "M", quality: "X" }),
    Attribute({ id: 0x1, name: "SupplyState", type: "SupplyStateEnum", access: "R V", conformance: "M" }),
    Attribute({ id: 0x2, name: "FaultState", type: "FaultStateEnum", access: "R V", conformance: "M" }),
    Attribute({
        id: 0x3, name: "ChargingEnabledUntil", type: "epoch-s",
        access: "R V", conformance: "M", default: 0, quality: "X N"
    }),
    Attribute({
        id: 0x4, name: "DischargingEnabledUntil", type: "epoch-s",
        access: "R V", conformance: "V2X", default: 0, quality: "X N"
    }),
    Attribute({
        id: 0x5, name: "CircuitCapacity", type: "amperage-mA",
        access: "R V", conformance: "M", constraint: "min 0", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x6, name: "MinimumChargeCurrent", type: "amperage-mA",
        access: "R V", conformance: "M", constraint: "min 0", default: 6000, quality: "N"
    }),
    Attribute({
        id: 0x7, name: "MaximumChargeCurrent", type: "amperage-mA",
        access: "R V", conformance: "M", constraint: "min 0", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x8, name: "MaximumDischargeCurrent", type: "amperage-mA",
        access: "R V", conformance: "V2X", constraint: "min 0", default: 0, quality: "N"
    }),
    Attribute({
        id: 0x9, name: "UserMaximumChargeCurrent", type: "amperage-mA",
        access: "RW VM", conformance: "O", constraint: "all", default: 0, quality: "N"
    }),
    Attribute({
        id: 0xa, name: "RandomizationDelayWindow", type: "elapsed-s",
        access: "RW VM", conformance: "O", constraint: "max 86400", default: 600, quality: "N"
    }),
    Attribute({
        id: 0x23, name: "NextChargeStartTime", type: "epoch-s",
        access: "R V", conformance: "PREF", default: null, quality: "X"
    }),
    Attribute({
        id: 0x24, name: "NextChargeTargetTime", type: "epoch-s",
        access: "R V", conformance: "PREF", default: null, quality: "X"
    }),
    Attribute({
        id: 0x25, name: "NextChargeRequiredEnergy", type: "energy-mWh",
        access: "R V", conformance: "PREF", constraint: "min 0", default: null, quality: "X"
    }),
    Attribute({
        id: 0x26, name: "NextChargeTargetSoC", type: "percent",
        access: "R V", conformance: "PREF", default: null, quality: "X"
    }),
    Attribute({
        id: 0x27, name: "ApproximateEvEfficiency", type: "uint16",
        access: "RW VM", conformance: "[PREF]", constraint: "all", default: null, quality: "X N"
    }),
    Attribute({
        id: 0x30, name: "StateOfCharge", type: "percent",
        access: "R V", conformance: "SOC", default: null, quality: "X"
    }),
    Attribute({
        id: 0x31, name: "BatteryCapacity", type: "energy-mWh",
        access: "R V", conformance: "SOC", constraint: "min 0", default: null, quality: "X"
    }),
    Attribute({
        id: 0x32, name: "VehicleId", type: "string",
        access: "R V", conformance: "PNC", constraint: "max 32", default: null, quality: "X"
    }),
    Attribute(
        { id: 0x40, name: "SessionId", type: "uint32", access: "R V", conformance: "M", default: null, quality: "X N" }
    ),
    Attribute({
        id: 0x41, name: "SessionDuration", type: "elapsed-s",
        access: "R V", conformance: "M", default: null, quality: "X N Q"
    }),
    Attribute({
        id: 0x42, name: "SessionEnergyCharged", type: "energy-mWh",
        access: "R V", conformance: "M", constraint: "min 0", default: null, quality: "X N Q"
    }),
    Attribute({
        id: 0x43, name: "SessionEnergyDischarged", type: "energy-mWh",
        access: "R V", conformance: "V2X", constraint: "min 0", default: null, quality: "X N Q"
    }),
    Event(
        { id: 0x0, name: "EvConnected", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "SessionId", type: "uint32", conformance: "M" })
    ),

    Event(
        { id: 0x1, name: "EvNotDetected", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "SessionId", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "State", type: "StateEnum", conformance: "M" }),
        Field({ id: 0x2, name: "SessionDuration", type: "elapsed-s", conformance: "M" }),
        Field({ id: 0x3, name: "SessionEnergyCharged", type: "energy-mWh", conformance: "M", constraint: "min 0" }),
        Field({ id: 0x4, name: "SessionEnergyDischarged", type: "energy-mWh", conformance: "V2X", constraint: "min 0" })
    ),

    Event(
        { id: 0x2, name: "EnergyTransferStarted", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "SessionId", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "State", type: "StateEnum", conformance: "M" }),
        Field({ id: 0x2, name: "MaximumCurrent", type: "amperage-mA", conformance: "M", constraint: "min 0" }),
        Field({ id: 0x3, name: "MaximumDischargeCurrent", type: "amperage-mA", conformance: "V2X", constraint: "min 0" })
    ),

    Event(
        { id: 0x3, name: "EnergyTransferStopped", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "SessionId", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "State", type: "StateEnum", conformance: "M" }),
        Field({ id: 0x2, name: "Reason", type: "EnergyTransferStoppedReasonEnum", conformance: "M" }),
        Field({ id: 0x4, name: "EnergyTransferred", type: "energy-mWh", conformance: "M", constraint: "min 0" }),
        Field({ id: 0x5, name: "EnergyDischarged", type: "energy-mWh", conformance: "V2X", constraint: "min 0" })
    ),

    Event(
        { id: 0x4, name: "Fault", access: "V", conformance: "M", priority: "critical" },
        Field({ id: 0x0, name: "SessionId", type: "uint32", conformance: "M", quality: "X" }),
        Field({ id: 0x1, name: "State", type: "StateEnum", conformance: "M" }),
        Field({ id: 0x2, name: "FaultStatePreviousState", type: "FaultStateEnum", conformance: "M" }),
        Field({ id: 0x4, name: "FaultStateCurrentState", type: "FaultStateEnum", conformance: "M" })
    ),

    Event(
        { id: 0x5, name: "Rfid", access: "V", conformance: "[RFID]", priority: "info" },
        Field({ id: 0x0, name: "Uid", type: "octstr", conformance: "M", constraint: "max 10" })
    ),
    Command({ id: 0x1, name: "Disable", access: "O T", conformance: "M", direction: "request", response: "status" }),

    Command(
        { id: 0x2, name: "EnableCharging", access: "O T", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ChargingEnabledUntil", type: "epoch-s", conformance: "M", default: null, quality: "X" }),
        Field({ id: 0x1, name: "MinimumChargeCurrent", type: "amperage-mA", conformance: "M", constraint: "min 0" }),
        Field({ id: 0x2, name: "MaximumChargeCurrent", type: "amperage-mA", conformance: "M", constraint: "min 0" })
    ),

    Command(
        {
            id: 0x3, name: "EnableDischarging",
            access: "O T", conformance: "V2X", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "DischargingEnabledUntil", type: "epoch-s", conformance: "M", default: null, quality: "X" }),
        Field({ id: 0x1, name: "MaximumDischargeCurrent", type: "amperage-mA", conformance: "M", constraint: "min 0" })
    ),

    Command({ id: 0x4, name: "StartDiagnostics", access: "O T", conformance: "O", direction: "request", response: "status" }),

    Command(
        { id: 0x5, name: "SetTargets", access: "O T", conformance: "PREF", direction: "request", response: "status" },
        Field(
            { id: 0x0, name: "ChargingTargetSchedules", type: "list", conformance: "M", constraint: "max 7" },
            Field({ name: "entry", type: "ChargingTargetScheduleStruct" })
        )
    ),

    Command({
        id: 0x6, name: "GetTargets",
        access: "O T", conformance: "PREF", direction: "request", response: "GetTargetsResponse"
    }),
    Command(
        { id: 0x7, name: "ClearTargets", access: "O T", conformance: "PREF", direction: "request", response: "status" }
    ),

    Command(
        { id: 0x0, name: "GetTargetsResponse", conformance: "PREF", direction: "response" },
        Field(
            { id: 0x0, name: "ChargingTargetSchedules", type: "list", conformance: "M", constraint: "max 7" },
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
        Field({ id: 0x0, name: "NotPluggedIn", conformance: "M" }),
        Field({ id: 0x1, name: "PluggedInNoDemand", conformance: "M" }),
        Field({ id: 0x2, name: "PluggedInDemand", conformance: "M" }),
        Field({ id: 0x3, name: "PluggedInCharging", conformance: "M" }),
        Field({ id: 0x4, name: "PluggedInDischarging", conformance: "V2X" }),
        Field({ id: 0x5, name: "SessionEnding", conformance: "M" }),
        Field({ id: 0x6, name: "Fault", conformance: "M" })
    ),

    Datatype(
        { name: "SupplyStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Disabled", conformance: "M" }),
        Field({ id: 0x1, name: "ChargingEnabled", conformance: "M" }),
        Field({ id: 0x2, name: "DischargingEnabled", conformance: "[V2X]" }),
        Field({ id: 0x3, name: "DisabledError", conformance: "M" }),
        Field({ id: 0x4, name: "DisabledDiagnostics", conformance: "M" }),
        Field({ id: 0x5, name: "Enabled", conformance: "[V2X]" })
    ),

    Datatype(
        { name: "FaultStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "NoError", conformance: "M" }),
        Field({ id: 0x1, name: "MeterFailure", conformance: "M" }),
        Field({ id: 0x2, name: "OverVoltage", conformance: "M" }),
        Field({ id: 0x3, name: "UnderVoltage", conformance: "M" }),
        Field({ id: 0x4, name: "OverCurrent", conformance: "M" }),
        Field({ id: 0x5, name: "ContactWetFailure", conformance: "M" }),
        Field({ id: 0x6, name: "ContactDryFailure", conformance: "M" }),
        Field({ id: 0x7, name: "GroundFault", conformance: "M" }),
        Field({ id: 0x8, name: "PowerLoss", conformance: "M" }),
        Field({ id: 0x9, name: "PowerQuality", conformance: "M" }),
        Field({ id: 0xa, name: "PilotShortCircuit", conformance: "M" }),
        Field({ id: 0xb, name: "EmergencyStop", conformance: "M" }),
        Field({ id: 0xc, name: "EvDisconnected", conformance: "M" }),
        Field({ id: 0xd, name: "WrongPowerSupply", conformance: "M" }),
        Field({ id: 0xe, name: "LiveNeutralSwap", conformance: "M" }),
        Field({ id: 0xf, name: "OverTemperature", conformance: "M" }),
        Field({ id: 0xff, name: "Other", conformance: "M" })
    ),

    Datatype(
        { name: "EnergyTransferStoppedReasonEnum", type: "enum8" },
        Field({ id: 0x0, name: "EvStopped", conformance: "M" }),
        Field({ id: 0x1, name: "EvseStopped", conformance: "M" }),
        Field({ id: 0x2, name: "Other", conformance: "M" })
    ),

    Datatype(
        { name: "ChargingTargetStruct", type: "struct" },
        Field({
            id: 0x0, name: "TargetTimeMinutesPastMidnight", type: "uint16",
            conformance: "M", constraint: "max 1439", default: 0
        }),
        Field({ id: 0x1, name: "TargetSoC", type: "percent", conformance: "SOC, O.a+", default: 0 }),
        Field({
            id: 0x2, name: "AddedEnergy", type: "energy-mWh",
            conformance: "[SOC], O.a+", constraint: "min 0", default: 0
        })
    ),

    Datatype(
        { name: "ChargingTargetScheduleStruct", type: "struct" },
        Field({ id: 0x0, name: "DayOfWeekForSequence", type: "TargetDayOfWeekBitmap", conformance: "M" }),
        Field(
            { id: 0x1, name: "ChargingTargets", type: "list", conformance: "M", constraint: "max 10" },
            Field({ name: "entry", type: "ChargingTargetStruct" })
        )
    )
);

MatterDefinition.children.push(EnergyEvse);
