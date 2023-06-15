/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0201, name: "Thermostat",
    description: "Thermostat",
    details: "An interface for configuring and controlling the functionality of a thermostat.",
    children: [
        AttributeElement({
            id: 0x0000, name: "LocalTemperature", base: "int16",
            conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "OutdoorTemperature", base: "int16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "ThermostatOccupancy", base: "map8",
            conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0003, name: "AbsMinHeatSetpointLimit", base: "int16",
            conformance: "O", default: 700
        }),

        AttributeElement({
            id: 0x0004, name: "AbsMaxHeatSetpointLimit", base: "int16",
            conformance: "O", default: 3000
        }),

        AttributeElement({
            id: 0x0005, name: "AbsMinCoolSetpointLimit", base: "int16",
            conformance: "O", default: 1600
        }),

        AttributeElement({
            id: 0x0006, name: "AbsMaxCoolSetpointLimit", base: "int16",
            conformance: "O", default: 3200
        }),

        AttributeElement({
            id: 0x0007, name: "PiCoolingDemand", base: "uint8",
            conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0008, name: "PiHeatingDemand", base: "uint8",
            conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0009, name: "HvacSystemTypeConfiguration", base: "map8",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0010, name: "LocalTemperatureCalibration", base: "int8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "OccupiedCoolingSetpoint", base: "int16",
            access: "RW", conformance: "O", default: 2600
        }),

        AttributeElement({
            id: 0x0012, name: "OccupiedHeatingSetpoint", base: "int16",
            access: "RW", conformance: "O", default: 2000
        }),

        AttributeElement({
            id: 0x0013, name: "UnoccupiedCoolingSetpoint", base: "int16",
            access: "RW", conformance: "O", default: 2600
        }),

        AttributeElement({
            id: 0x0014, name: "UnoccupiedHeatingSetpoint", base: "int16",
            access: "RW", conformance: "O", default: 2000
        }),

        AttributeElement({
            id: 0x0015, name: "MinHeatSetpointLimit", base: "int16",
            access: "RW VM", conformance: "O", default: 700
        }),

        AttributeElement({
            id: 0x0016, name: "MaxHeatSetpointLimit", base: "int16",
            access: "RW VM", conformance: "O", default: 3000
        }),

        AttributeElement({
            id: 0x0017, name: "MinCoolSetpointLimit", base: "int16",
            access: "RW VM", conformance: "O", default: 1600
        }),

        AttributeElement({
            id: 0x0018, name: "MaxCoolSetpointLimit", base: "int16",
            access: "RW VM", conformance: "O", default: 3200
        }),

        AttributeElement({
            id: 0x0019, name: "MinSetpointDeadBand", base: "int8",
            access: "RW VM", conformance: "O", default: 25
        }),

        AttributeElement({
            id: 0x001a, name: "RemoteSensing", base: "map8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001b, name: "ControlSequenceOfOperation", base: "ThermostatControlSequence",
            access: "RW VM", conformance: "M", default: 4
        }),

        AttributeElement({
            id: 0x001c, name: "SystemMode", base: "enum8",
            access: "RW VM", conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x001e, name: "ThermostatRunningMode", base: "enum8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0020, name: "StartOfWeek", base: "enum8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0021, name: "NumberOfWeeklyTransitions", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0022, name: "NumberOfDailyTransitions", base: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0023, name: "TemperatureSetpointHold", base: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0024, name: "TemperatureSetpointHoldDuration", base: "uint16",
            access: "RW VM", conformance: "O", default: 65535, quality: "X"
        }),

        AttributeElement({
            id: 0x0025, name: "ThermostatProgrammingOperationMode", base: "map8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0029, name: "ThermostatRunningState", base: "map16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0030, name: "SetpointChangeSource", base: "enum8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0031, name: "SetpointChangeAmount", base: "int16",
            conformance: "O", default: 32768, quality: "X"
        }),

        AttributeElement({
            id: 0x0032, name: "SetpointChangeSourceTimestamp", base: "epoch-s",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0034, name: "OccupiedSetback", base: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0035, name: "OccupiedSetbackMin", base: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0036, name: "OccupiedSetbackMax", base: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0037, name: "UnoccupiedSetback", base: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0038, name: "UnoccupiedSetbackMin", base: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0039, name: "UnoccupiedSetbackMax", base: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x003a, name: "EmergencyHeatDelta", base: "uint8",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0040, name: "AcType", base: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0041, name: "AcCapacity", base: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0042, name: "AcRefrigerantType", base: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0043, name: "AcCompressorType", base: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0044, name: "AcErrorCode", base: "map32",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0045, name: "AcLouverPosition", base: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0046, name: "AcCoilTemperature", base: "int16",
            conformance: "O", default: 32768, quality: "X"
        }),

        AttributeElement({
            id: 0x0047, name: "AcCapacityFormat", base: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "SetpointRaiseLower",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Mode", base: "SetpointAdjustMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Amount", base: "int8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SetWeeklySchedule",
            access: "R M", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", base: "DayOfWeek",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeForSequence", base: "ModeForSequence",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Transitions", base: "ThermostatScheduleTransition",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetWeeklySchedule",
            conformance: "O", direction: "request", response: "GetWeeklyScheduleResponse",
            children: [
                DatatypeElement({
                    name: "DaysToReturn", base: "DayOfWeek",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeToReturn", base: "ModeForSequence",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "ClearWeeklySchedule",
            access: "R M", conformance: "O", direction: "request"
        }),

        CommandElement({
            id: 0x0000, name: "GetWeeklyScheduleResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", base: "DayOfWeek",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeForSequence", base: "ModeForSequence",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Transitions", base: "ThermostatScheduleTransition",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Heating",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Cooling",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Occupancy",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ScheduleConfiguration",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Setback",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "AutoMode",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DayOfWeek", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Sunday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Monday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Tuesday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Wednesday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Thursday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Friday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "Saturday",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "Away",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ModeForSequence", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "HeatSetpointPresent",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CoolSetpointPresent",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatSystemMode", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Auto",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Cool",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Heat",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "EmergencyHeat",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Precooling",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "FanOnly",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Dry",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Sleep",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatRunningMode", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Cool",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Heat",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatControlSequence", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CoolingOnly",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "CoolingWithReheat",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "HeatingOnly",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "HeatingWithReheat",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "CoolingAndHeating",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "CoolingAndHeatingWithReheat",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SetpointAdjustMode", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Heat",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Cool",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Both",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatScheduleTransition", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "HeatSetpoint", base: "int16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CoolSetpoint", base: "int16",
                    conformance: "M", quality: "X"
                })
            ]
        })
    ]
}));
