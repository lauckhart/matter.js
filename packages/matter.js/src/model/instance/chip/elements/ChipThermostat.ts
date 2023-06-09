/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0201, name: "Thermostat",
    description: "Thermostat",
    details: "An interface for configuring and controlling the functionality of a thermostat.",
    children: [
        AttributeElement({
            id: 0x0000, name: "LocalTemperature", base: "LocalTemperature",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "OutdoorTemperature", base: "OutdoorTemperature",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "ThermostatOccupancy", base: "Occupancy",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "AbsMinHeatSetpointLimit", base: "AbsMinHeatSetpointLimit",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0004, name: "AbsMaxHeatSetpointLimit", base: "AbsMaxHeatSetpointLimit",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "AbsMinCoolSetpointLimit", base: "AbsMinCoolSetpointLimit",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "AbsMaxCoolSetpointLimit", base: "AbsMaxCoolSetpointLimit",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "PiCoolingDemand", base: "PICoolingDemand",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0008, name: "PiHeatingDemand", base: "PIHeatingDemand",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0009, name: "HvacSystemTypeConfiguration", base: "HVACSystemTypeConfiguration",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0010, name: "LocalTemperatureCalibration", base: "LocalTemperatureCalibration",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "OccupiedCoolingSetpoint", base: "OccupiedCoolingSetpoint",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "OccupiedHeatingSetpoint", base: "OccupiedHeatingSetpoint",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0013, name: "UnoccupiedCoolingSetpoint", base: "UnoccupiedCoolingSetpoint",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0014, name: "UnoccupiedHeatingSetpoint", base: "UnoccupiedHeatingSetpoint",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0015, name: "MinHeatSetpointLimit", base: "MinHeatSetpointLimit",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0016, name: "MaxHeatSetpointLimit", base: "MaxHeatSetpointLimit",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0017, name: "MinCoolSetpointLimit", base: "MinCoolSetpointLimit",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0018, name: "MaxCoolSetpointLimit", base: "MaxCoolSetpointLimit",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0019, name: "MinSetpointDeadBand", base: "MinSetpointDeadBand",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001a, name: "RemoteSensing", base: "RemoteSensing",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001b, name: "ControlSequenceOfOperation", base: "ControlSequenceOfOperation",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001c, name: "SystemMode", base: "SystemMode",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001e, name: "ThermostatRunningMode", base: "ThermostatRunningMode",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0020, name: "StartOfWeek", base: "StartOfWeek",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0021, name: "NumberOfWeeklyTransitions", base: "NumberOfWeeklyTransitions",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0022, name: "NumberOfDailyTransitions", base: "NumberOfDailyTransitions",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0023, name: "TemperatureSetpointHold", base: "TemperatureSetpointHold",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0024, name: "TemperatureSetpointHoldDuration", base: "TemperatureSetpointHoldDuration",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0025, name: "ThermostatProgrammingOperationMode", base: "ThermostatProgrammingOperationMode",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0029, name: "ThermostatRunningState", base: "ThermostatRunningState",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0030, name: "SetpointChangeSource", base: "SetpointChangeSource",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0031, name: "SetpointChangeAmount", base: "SetpointChangeAmount",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0032, name: "SetpointChangeSourceTimestamp", base: "SetpointChangeSourceTimestamp",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0034, name: "OccupiedSetback", base: "OccupiedSetback",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0035, name: "OccupiedSetbackMin", base: "OccupiedSetbackMin",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0036, name: "OccupiedSetbackMax", base: "OccupiedSetbackMax",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0037, name: "UnoccupiedSetback", base: "UnoccupiedSetback",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0038, name: "UnoccupiedSetbackMin", base: "UnoccupiedSetbackMin",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0039, name: "UnoccupiedSetbackMax", base: "UnoccupiedSetbackMax",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003a, name: "EmergencyHeatDelta", base: "EmergencyHeatDelta",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0040, name: "AcType", base: "ACType",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0041, name: "AcCapacity", base: "ACCapacity",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0042, name: "AcRefrigerantType", base: "ACRefrigerantType",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0043, name: "AcCompressorType", base: "ACCompressorType",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0044, name: "AcErrorCode", base: "ACErrorCode",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0045, name: "AcLouverPosition", base: "ACLouverPosition",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0046, name: "AcCoilTemperature", base: "ACCoilTemperature",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0047, name: "AcCapacityFormat", base: "ACCapacityformat",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        CommandElement({
            id: 0x0000, name: "SetpointRaiseLower", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "Mode", base: "SetpointAdjustMode",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Mode", base: "SetpointAdjustMode",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Amount", base: "INT8S",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Amount", base: "INT8S",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SetWeeklySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "M" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ModeForSequence", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ModeForSequence", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Transitions", base: "ThermostatScheduleTransition",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Transitions", base: "ThermostatScheduleTransition",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetWeeklySchedule", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "GetWeeklyScheduleResponse",
            children: [
                DatatypeElement({
                    name: "DaysToReturn", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DaysToReturn", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ModeToReturn", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ModeToReturn", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "ClearWeeklySchedule", base: "struct",
            access: { rw: "R", writePrivilege: "M" }, conformance: [ "O" ], direction: "request"
        }),

        CommandElement({
            id: 0x0000, name: "GetWeeklyScheduleResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ModeForSequence", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ModeForSequence", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Transitions", base: "ThermostatScheduleTransition",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Transitions", base: "ThermostatScheduleTransition",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}))