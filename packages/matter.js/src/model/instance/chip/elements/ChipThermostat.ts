/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0201, name: "Thermostat",
    description: "Thermostat",
    details: "An interface for configuring and controlling the functionality of a thermostat.",
    children: [
        AttributeElement({
            id: 0x0000, name: "LocalTemperature", base: "int16",
            access: "R", conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "OutdoorTemperature", base: "int16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "ThermostatOccupancy", base: "map8",
            access: "R", conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0003, name: "AbsMinHeatSetpointLimit", base: "int16",
            access: "R", conformance: "O", default: 700
        }),

        AttributeElement({
            id: 0x0004, name: "AbsMaxHeatSetpointLimit", base: "int16",
            access: "R", conformance: "O", default: 3000
        }),

        AttributeElement({
            id: 0x0005, name: "AbsMinCoolSetpointLimit", base: "int16",
            access: "R", conformance: "O", default: 1600
        }),

        AttributeElement({
            id: 0x0006, name: "AbsMaxCoolSetpointLimit", base: "int16",
            access: "R", conformance: "O", default: 3200
        }),

        AttributeElement({
            id: 0x0007, name: "PiCoolingDemand", base: "uint8",
            access: "R", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0008, name: "PiHeatingDemand", base: "uint8",
            access: "R", conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0009, name: "HvacSystemTypeConfiguration", base: "map8",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0010, name: "LocalTemperatureCalibration", base: "int8",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "OccupiedCoolingSetpoint", base: "int16",
            access: "W", conformance: "O", default: 2600
        }),

        AttributeElement({
            id: 0x0012, name: "OccupiedHeatingSetpoint", base: "int16",
            access: "W", conformance: "O", default: 2000
        }),

        AttributeElement({
            id: 0x0013, name: "UnoccupiedCoolingSetpoint", base: "int16",
            access: "W", conformance: "O", default: 2600
        }),

        AttributeElement({
            id: 0x0014, name: "UnoccupiedHeatingSetpoint", base: "int16",
            access: "W", conformance: "O", default: 2000
        }),

        AttributeElement({
            id: 0x0015, name: "MinHeatSetpointLimit", base: "int16",
            access: "W VM", conformance: "O", default: 700
        }),

        AttributeElement({
            id: 0x0016, name: "MaxHeatSetpointLimit", base: "int16",
            access: "W VM", conformance: "O", default: 3000
        }),

        AttributeElement({
            id: 0x0017, name: "MinCoolSetpointLimit", base: "int16",
            access: "W VM", conformance: "O", default: 1600
        }),

        AttributeElement({
            id: 0x0018, name: "MaxCoolSetpointLimit", base: "int16",
            access: "W VM", conformance: "O", default: 3200
        }),

        AttributeElement({
            id: 0x0019, name: "MinSetpointDeadBand", base: "int8",
            access: "W VM", conformance: "O", default: 25
        }),

        AttributeElement({
            id: 0x001a, name: "RemoteSensing", base: "map8",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001b, name: "ControlSequenceOfOperation", base: "ThermostatControlSequence",
            access: "W VM", conformance: "M", default: 4
        }),

        AttributeElement({
            id: 0x001c, name: "SystemMode", base: "enum8",
            access: "W VM", conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x001e, name: "ThermostatRunningMode", base: "enum8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0020, name: "StartOfWeek", base: "enum8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0021, name: "NumberOfWeeklyTransitions", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0022, name: "NumberOfDailyTransitions", base: "uint8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0023, name: "TemperatureSetpointHold", base: "enum8",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0024, name: "TemperatureSetpointHoldDuration", base: "uint16",
            access: "W VM", conformance: "O", default: 65535, quality: "X"
        }),

        AttributeElement({
            id: 0x0025, name: "ThermostatProgrammingOperationMode", base: "map8",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0029, name: "ThermostatRunningState", base: "map16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0030, name: "SetpointChangeSource", base: "enum8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0031, name: "SetpointChangeAmount", base: "int16",
            access: "R", conformance: "O", default: 32768, quality: "X"
        }),

        AttributeElement({
            id: 0x0032, name: "SetpointChangeSourceTimestamp", base: "epoch-s",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0034, name: "OccupiedSetback", base: "uint8",
            access: "W VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0035, name: "OccupiedSetbackMin", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0036, name: "OccupiedSetbackMax", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0037, name: "UnoccupiedSetback", base: "uint8",
            access: "W VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0038, name: "UnoccupiedSetbackMin", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0039, name: "UnoccupiedSetbackMax", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x003a, name: "EmergencyHeatDelta", base: "uint8",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0040, name: "AcType", base: "enum8",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0041, name: "AcCapacity", base: "uint16",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0042, name: "AcRefrigerantType", base: "enum8",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0043, name: "AcCompressorType", base: "enum8",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0044, name: "AcErrorCode", base: "map32",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0045, name: "AcLouverPosition", base: "enum8",
            access: "W VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0046, name: "AcCoilTemperature", base: "int16",
            access: "R", conformance: "O", default: 32768, quality: "X"
        }),

        AttributeElement({
            id: 0x0047, name: "AcCapacityFormat", base: "enum8",
            access: "W VM", conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "SetpointRaiseLower",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Mode", base: "SetpointAdjustMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Amount", base: "int8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SetWeeklySchedule",
            access: "R M", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", base: "DayOfWeek",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeForSequence", base: "ModeForSequence",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Transitions", base: "ThermostatScheduleTransition",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetWeeklySchedule",
            access: "R", conformance: "O", direction: "request", response: "GetWeeklyScheduleResponse",
            children: [
                DatatypeElement({
                    name: "DaysToReturn", base: "DayOfWeek",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeToReturn", base: "ModeForSequence",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "ClearWeeklySchedule",
            access: "R M", conformance: "O", direction: "request"
        }),

        CommandElement({
            id: 0x0000, name: "GetWeeklyScheduleResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", base: "DayOfWeek",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeForSequence", base: "ModeForSequence",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Transitions", base: "ThermostatScheduleTransition",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Heating",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Cooling",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Occupancy",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ScheduleConfiguration",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Setback",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "AutoMode",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DayOfWeek", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Sunday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Monday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tuesday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wednesday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Thursday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Friday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Saturday",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "Away",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ModeForSequence", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "HeatSetpointPresent",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CoolSetpointPresent",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatSystemMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Auto",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Cool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Heat",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "EmergencyHeat",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Precooling",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "FanOnly",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Dry",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Sleep",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatRunningMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Cool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Heat",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatControlSequence", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CoolingOnly",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "CoolingWithReheat",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "HeatingOnly",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "HeatingWithReheat",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "CoolingAndHeating",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "CoolingAndHeatingWithReheat",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SetpointAdjustMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Heat",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Cool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Both",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatScheduleTransition", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "HeatSetpoint", base: "int16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CoolSetpoint", base: "int16",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        })
    ]
}));
