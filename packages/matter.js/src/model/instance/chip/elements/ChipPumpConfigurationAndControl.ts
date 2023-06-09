/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0200, name: "PumpConfigurationAndControl",
    description: "Pump Configuration and Control",
    details: "An interface for configuring and controlling pumps.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MaxPressure", base: "MaxPressure",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "MaxSpeed", base: "MaxSpeed",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxFlow", base: "MaxFlow",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "MinConstPressure", base: "MinConstPressure",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "MaxConstPressure", base: "MaxConstPressure",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "MinCompPressure", base: "MinCompPressure",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "MaxCompPressure", base: "MaxCompPressure",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0007, name: "MinConstSpeed", base: "MinConstSpeed",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0008, name: "MaxConstSpeed", base: "MaxConstSpeed",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0009, name: "MinConstFlow", base: "MinConstFlow",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000a, name: "MaxConstFlow", base: "MaxConstFlow",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000b, name: "MinConstTemp", base: "MinConstTemp",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "MaxConstTemp", base: "MaxConstTemp",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0010, name: "PumpStatus", base: "PumpStatus",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0011, name: "EffectiveOperationMode", base: "EffectiveOperationMode",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0012, name: "EffectiveControlMode", base: "EffectiveControlMode",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0013, name: "Capacity", base: "Capacity",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0014, name: "Speed", base: "Speed",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0015, name: "LifetimeRunningHours", base: "LifetimeRunningHours",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0016, name: "PumpPower", base: "Power",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0017, name: "LifetimeEnergyConsumed", base: "LifetimeEnergyConsumed",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0020, name: "OperationMode", base: "OperationMode",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0021, name: "ControlMode", base: "ControlMode",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        EventElement({
            id: 0x0000, name: "SupplyVoltageLow", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0001, name: "SupplyVoltageHigh", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0002, name: "PowerMissingPhase", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0003, name: "SystemPressureLow", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0004, name: "SystemPressureHigh", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0005, name: "DryRunning", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x0006, name: "MotorTemperatureHigh", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0007, name: "PumpMotorFatalFailure", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x0008, name: "ElectronicTemperatureHigh", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0009, name: "PumpBlocked", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x000a, name: "SensorFailure", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x000b, name: "ElectronicNonFatalFailure", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x000c, name: "ElectronicFatalFailure", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x000d, name: "GeneralFault", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x000e, name: "Leakage", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x000f, name: "AirDetection", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0010, name: "TurbineOperation", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        })
    ]
}));
