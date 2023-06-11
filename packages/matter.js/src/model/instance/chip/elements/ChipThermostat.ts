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
            id: 0x0000, name: "localTemperature", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "outdoorTemperature", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "thermostatOccupancy", base: "map8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x01"
        }),

        AttributeElement({
            id: 0x0003, name: "absMinHeatSetpointLimit", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], value: "700"
        }),

        AttributeElement({
            id: 0x0004, name: "absMaxHeatSetpointLimit", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], value: "3000"
        }),

        AttributeElement({
            id: 0x0005, name: "absMinCoolSetpointLimit", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], value: "1600"
        }),

        AttributeElement({
            id: 0x0006, name: "absMaxCoolSetpointLimit", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], value: "3200"
        }),

        AttributeElement({
            id: 0x0007, name: "piCoolingDemand", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0008, name: "piHeatingDemand", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0009, name: "hvacSystemTypeConfiguration", base: "map8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0010, name: "localTemperatureCalibration", base: "int8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0011, name: "occupiedCoolingSetpoint", base: "int16",
            access: { rw: "W" }, conformance: [ "O" ], value: "2600"
        }),

        AttributeElement({
            id: 0x0012, name: "occupiedHeatingSetpoint", base: "int16",
            access: { rw: "W" }, conformance: [ "O" ], value: "2000"
        }),

        AttributeElement({
            id: 0x0013, name: "unoccupiedCoolingSetpoint", base: "int16",
            access: { rw: "W" }, conformance: [ "O" ], value: "2600"
        }),

        AttributeElement({
            id: 0x0014, name: "unoccupiedHeatingSetpoint", base: "int16",
            access: { rw: "W" }, conformance: [ "O" ], value: "2000"
        }),

        AttributeElement({
            id: 0x0015, name: "minHeatSetpointLimit", base: "int16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "700"
        }),

        AttributeElement({
            id: 0x0016, name: "maxHeatSetpointLimit", base: "int16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "3000"
        }),

        AttributeElement({
            id: 0x0017, name: "minCoolSetpointLimit", base: "int16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "1600"
        }),

        AttributeElement({
            id: 0x0018, name: "maxCoolSetpointLimit", base: "int16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "3200"
        }),

        AttributeElement({
            id: 0x0019, name: "minSetpointDeadBand", base: "int8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "25"
        }),

        AttributeElement({
            id: 0x001a, name: "remoteSensing", base: "map8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x001b, name: "controlSequenceOfOperation", base: "ThermostatControlSequence",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "M" ], value: "0x04"
        }),

        AttributeElement({
            id: 0x001c, name: "systemMode", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "M" ], value: "0x01"
        }),

        AttributeElement({
            id: 0x001e, name: "thermostatRunningMode", base: "enum8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0020, name: "startOfWeek", base: "enum8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0021, name: "numberOfWeeklyTransitions", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0022, name: "numberOfDailyTransitions", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0023, name: "temperatureSetpointHold", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0024, name: "temperatureSetpointHoldDuration", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { nullable: true }, value: "0xFFFF"
        }),

        AttributeElement({
            id: 0x0025, name: "thermostatProgrammingOperationMode", base: "map8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0029, name: "thermostatRunningState", base: "map16",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0030, name: "setpointChangeSource", base: "enum8",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0031, name: "setpointChangeAmount", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x8000"
        }),

        AttributeElement({
            id: 0x0032, name: "setpointChangeSourceTimestamp", base: "epochS",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0034, name: "occupiedSetback", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0035, name: "occupiedSetbackMin", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0036, name: "occupiedSetbackMax", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0037, name: "unoccupiedSetback", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0038, name: "unoccupiedSetbackMin", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0039, name: "unoccupiedSetbackMax", base: "uint8",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003a, name: "emergencyHeatDelta", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0040, name: "acType", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0041, name: "acCapacity", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0042, name: "acRefrigerantType", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0043, name: "acCompressorType", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0044, name: "acErrorCode", base: "map32",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00000000"
        }),

        AttributeElement({
            id: 0x0045, name: "acLouverPosition", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0046, name: "acCoilTemperature", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x8000"
        }),

        AttributeElement({
            id: 0x0047, name: "acCapacityFormat", base: "enum8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        CommandElement({
            id: 0x0000, name: "SetpointRaiseLower",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "mode", base: "SetpointAdjustMode",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "mode", base: "SetpointAdjustMode",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "amount", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "amount", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SetWeeklySchedule",
            access: { rw: "R", writePriv: "M" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "numberOfTransitionsForSequence", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "numberOfTransitionsForSequence", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "dayOfWeekForSequence", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "dayOfWeekForSequence", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "modeForSequence", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "modeForSequence", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitions", base: "ThermostatScheduleTransition",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitions", base: "ThermostatScheduleTransition",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "GetWeeklySchedule",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "GetWeeklyScheduleResponse",
            children: [
                DatatypeElement({
                    name: "daysToReturn", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "daysToReturn", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "modeToReturn", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "modeToReturn", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "ClearWeeklySchedule",
            access: { rw: "R", writePriv: "M" }, conformance: [ "O" ], direction: "request"
        }),

        CommandElement({
            id: 0x0000, name: "GetWeeklyScheduleResponse",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "numberOfTransitionsForSequence", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "numberOfTransitionsForSequence", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "dayOfWeekForSequence", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "dayOfWeekForSequence", base: "DayOfWeek",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "modeForSequence", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "modeForSequence", base: "ModeForSequence",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitions", base: "ThermostatScheduleTransition",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitions", base: "ThermostatScheduleTransition",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "heating",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "heating",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "cooling",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "cooling",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "occupancy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "occupancy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "scheduleConfiguration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "scheduleConfiguration",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "setback",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "setback",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "autoMode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "autoMode",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                })
            ]
        }),

        DatatypeElement({
            name: "DayOfWeek", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "sunday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "sunday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "monday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "monday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "tuesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "tuesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "wednesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "wednesday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "thursday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "thursday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "friday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "friday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "saturday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "saturday",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "away",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                }),

                DatatypeElement({
                    name: "away",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                })
            ]
        }),

        DatatypeElement({
            name: "ModeForSequence", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "heatSetpointPresent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "heatSetpointPresent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "coolSetpointPresent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "coolSetpointPresent",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatSystemMode", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "off",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "off",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "auto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "auto",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "cool",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "cool",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "heat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "heat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "emergencyHeat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "emergencyHeat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "precooling",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6"
                }),

                DatatypeElement({
                    name: "precooling",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x6"
                }),

                DatatypeElement({
                    name: "fanOnly",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x7"
                }),

                DatatypeElement({
                    name: "fanOnly",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x7"
                }),

                DatatypeElement({
                    name: "dry",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "dry",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "sleep",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x9"
                }),

                DatatypeElement({
                    name: "sleep",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x9"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatRunningMode", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "off",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "off",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "cool",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "cool",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "heat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "heat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatControlSequence", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "coolingOnly",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "coolingOnly",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "coolingWithReheat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "coolingWithReheat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "heatingOnly",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "heatingOnly",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "heatingWithReheat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "heatingWithReheat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "coolingAndHeating",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "coolingAndHeating",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "coolingAndHeatingWithReheat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "coolingAndHeatingWithReheat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                })
            ]
        }),

        DatatypeElement({
            name: "SetpointAdjustMode", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "heat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "heat",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "cool",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "cool",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "both",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "both",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                })
            ]
        }),

        DatatypeElement({
            name: "ThermostatScheduleTransition", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "transitionTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "heatSetpoint", base: "int16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "heatSetpoint", base: "int16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "coolSetpoint", base: "int16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "coolSetpoint", base: "int16",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        })
    ]
}));
