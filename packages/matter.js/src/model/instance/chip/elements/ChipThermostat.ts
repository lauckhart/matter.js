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
            id: 0x0000, name: "LocalTemperature", type: "int16",
            conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0001, name: "OutdoorTemperature", type: "int16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "ThermostatOccupancy", type: "map8",
            conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0003, name: "AbsMinHeatSetpointLimit", type: "int16",
            conformance: "O", default: 700
        }),

        AttributeElement({
            id: 0x0004, name: "AbsMaxHeatSetpointLimit", type: "int16",
            conformance: "O", default: 3000
        }),

        AttributeElement({
            id: 0x0005, name: "AbsMinCoolSetpointLimit", type: "int16",
            conformance: "O", default: 1600
        }),

        AttributeElement({
            id: 0x0006, name: "AbsMaxCoolSetpointLimit", type: "int16",
            conformance: "O", default: 3200
        }),

        AttributeElement({
            id: 0x0007, name: "PiCoolingDemand", type: "uint8",
            conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0008, name: "PiHeatingDemand", type: "uint8",
            conformance: "O", quality: "P"
        }),

        AttributeElement({
            id: 0x0009, name: "HvacSystemTypeConfiguration", type: "map8",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0010, name: "LocalTemperatureCalibration", type: "int8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "OccupiedCoolingSetpoint", type: "int16",
            access: "RW", conformance: "O", default: 2600
        }),

        AttributeElement({
            id: 0x0012, name: "OccupiedHeatingSetpoint", type: "int16",
            access: "RW", conformance: "O", default: 2000
        }),

        AttributeElement({
            id: 0x0013, name: "UnoccupiedCoolingSetpoint", type: "int16",
            access: "RW", conformance: "O", default: 2600
        }),

        AttributeElement({
            id: 0x0014, name: "UnoccupiedHeatingSetpoint", type: "int16",
            access: "RW", conformance: "O", default: 2000
        }),

        AttributeElement({
            id: 0x0015, name: "MinHeatSetpointLimit", type: "int16",
            access: "RW VM", conformance: "O", default: 700
        }),

        AttributeElement({
            id: 0x0016, name: "MaxHeatSetpointLimit", type: "int16",
            access: "RW VM", conformance: "O", default: 3000
        }),

        AttributeElement({
            id: 0x0017, name: "MinCoolSetpointLimit", type: "int16",
            access: "RW VM", conformance: "O", default: 1600
        }),

        AttributeElement({
            id: 0x0018, name: "MaxCoolSetpointLimit", type: "int16",
            access: "RW VM", conformance: "O", default: 3200
        }),

        AttributeElement({
            id: 0x0019, name: "MinSetpointDeadBand", type: "int8",
            access: "RW VM", conformance: "O", default: 25
        }),

        AttributeElement({
            id: 0x001a, name: "RemoteSensing", type: "map8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001b, name: "ControlSequenceOfOperation", type: "ThermostatControlSequence",
            access: "RW VM", conformance: "M", default: 4
        }),

        AttributeElement({
            id: 0x001c, name: "SystemMode", type: "enum8",
            access: "RW VM", conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x001e, name: "ThermostatRunningMode", type: "enum8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0020, name: "StartOfWeek", type: "enum8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0021, name: "NumberOfWeeklyTransitions", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0022, name: "NumberOfDailyTransitions", type: "uint8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0023, name: "TemperatureSetpointHold", type: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0024, name: "TemperatureSetpointHoldDuration", type: "uint16",
            access: "RW VM", conformance: "O", default: 65535, quality: "X"
        }),

        AttributeElement({
            id: 0x0025, name: "ThermostatProgrammingOperationMode", type: "map8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0029, name: "ThermostatRunningState", type: "map16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0030, name: "SetpointChangeSource", type: "enum8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0031, name: "SetpointChangeAmount", type: "int16",
            conformance: "O", default: 32768, quality: "X"
        }),

        AttributeElement({
            id: 0x0032, name: "SetpointChangeSourceTimestamp", type: "epoch-s",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0034, name: "OccupiedSetback", type: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0035, name: "OccupiedSetbackMin", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0036, name: "OccupiedSetbackMax", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0037, name: "UnoccupiedSetback", type: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0038, name: "UnoccupiedSetbackMin", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0039, name: "UnoccupiedSetbackMax", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x003a, name: "EmergencyHeatDelta", type: "uint8",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0040, name: "AcType", type: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0041, name: "AcCapacity", type: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0042, name: "AcRefrigerantType", type: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0043, name: "AcCompressorType", type: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0044, name: "AcErrorCode", type: "map32",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0045, name: "AcLouverPosition", type: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0046, name: "AcCoilTemperature", type: "int16",
            conformance: "O", default: 32768, quality: "X"
        }),

        AttributeElement({
            id: 0x0047, name: "AcCapacityFormat", type: "enum8",
            access: "RW VM", conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "SetpointRaiseLower",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Mode", type: "SetpointAdjustMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Amount", type: "int8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SetWeeklySchedule",
            access: "R M", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "NumberOfTransitionsForSequence", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", type: "DayOfWeek",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeForSequence", type: "ModeForSequence",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Transitions", type: "ThermostatScheduleTransition",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetWeeklySchedule",
            conformance: "O", direction: "request", response: "GetWeeklyScheduleResponse",
            children: [
                DatatypeElement({
                    name: "DaysToReturn", type: "DayOfWeek",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeToReturn", type: "ModeForSequence",
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
                    name: "NumberOfTransitionsForSequence", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DayOfWeekForSequence", type: "DayOfWeek",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ModeForSequence", type: "ModeForSequence",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Transitions", type: "ThermostatScheduleTransition",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatFeature", type: "map32",
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
            name: "DayOfWeek", type: "map8",
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
            name: "ModeForSequence", type: "map8",
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
            name: "ThermostatSystemMode", type: "enum8",
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
            name: "ThermostatRunningMode", type: "enum8",
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
            name: "ThermostatControlSequence", type: "enum8",
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
            name: "SetpointAdjustMode", type: "enum8",
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
            name: "ThermostatScheduleTransition", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "HeatSetpoint", type: "int16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "CoolSetpoint", type: "int16",
                    conformance: "M", quality: "X"
                })
            ]
        })
    ]
}));
