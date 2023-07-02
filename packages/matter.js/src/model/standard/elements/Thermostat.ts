/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Thermostat", id: 0x201, classification: "application",
    description: "Thermostat",
    details: "An interface for configuring and controlling the functionality of a thermostat.",
    xref: { document: "cluster", section: "4.3" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "4.3.3.1" },

            children: [
                {
                    tag: "datatype", name: "HEAT", id: 0x0, conformance: "AUTO, O.a+", description: "Heating",
                    details: "Thermostat is capable of managing a heating device"
                },
                {
                    tag: "datatype", name: "COOL", id: 0x1, conformance: "AUTO, O.a+", description: "Cooling",
                    details: "Thermostat is capable of managing a cooling device"
                },
                {
                    tag: "datatype", name: "OCC", id: 0x2, conformance: "O", description: "Occupancy",
                    details: "Supports Occupied and Unoccupied setpoints"
                },
                {
                    tag: "datatype", name: "SCH", id: 0x3, conformance: "O", description: "ScheduleConfiguration",
                    details: "Supports remote configuration of a weekly schedule of setpoint transitions"
                },
                {
                    tag: "datatype", name: "SB", id: 0x4, conformance: "O", description: "Setback",
                    details: "Supports configurable setback (or span)"
                },
                {
                    tag: "datatype", name: "AUTO", id: 0x5, conformance: "O", description: "AutoMode",
                    details: "Supports a System Mode of Auto"
                },
                {
                    tag: "datatype", name: "LTNE", id: 0x6, conformance: "O", description: "LocalTemperatureNotExposed",
                    details: "Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute"
                }
            ]
        },

        {
            tag: "attribute", name: "LocalTemperature", id: 0x0, type: "temperature", access: "R V",
            conformance: "M", default: null, quality: "X P",
            details: "This attribute indicates the current LocalTemperature value, when available. The value may be " +
                     "local, or remote, depending on the value of the RemoteSensing attribute when supported.",
            xref: { document: "cluster", section: "4.3.7.2" }
        },

        {
            tag: "attribute", name: "OutdoorTemperature", id: 0x1, type: "temperature", access: "R V",
            conformance: "O", default: null, quality: "X",
            details: "This attribute represents the outdoor temperature, as measured locally or remotely (over the " +
                     "network).",
            xref: { document: "cluster", section: "4.3.7.3" }
        },

        {
            tag: "attribute", name: "Occupancy", id: 0x2, type: "map8", access: "R V", conformance: "OCC",
            constraint: "desc", default: { type: "flags", flags: [ "Occupied" ] },
            details: "This attribute specifies whether the heated/cooled space is occupied or not, as measured locally or " +
                     "remotely (over the network). If bit 0 = 1, the space is occupied, else it is unoccupied. All other " +
                     "bits are reserved.",
            xref: { document: "cluster", section: "4.3.7.4" },
            children: [ { tag: "datatype", name: "Occupied", id: 0x1, conformance: "M" } ]
        },

        {
            tag: "attribute", name: "AbsMinHeatSetpointLimit", id: 0x3, type: "temperature", access: "R V",
            conformance: "[HEAT]", constraint: "desc", default: 700, quality: "F",
            details: "This attribute specifies the absolute minimum level that the heating setpoint MAY be set to. This " +
                     "is a limitation imposed by the manufacturer.",
            xref: { document: "cluster", section: "4.3.7.5" }
        },

        {
            tag: "attribute", name: "AbsMaxHeatSetpointLimit", id: 0x4, type: "temperature", access: "R V",
            conformance: "[HEAT]", constraint: "desc", default: 3000, quality: "F",
            details: "This attribute specifies the absolute maximum level that the heating setpoint MAY be set to. This " +
                     "is a limitation imposed by the manufacturer.",
            xref: { document: "cluster", section: "4.3.7.6" }
        },

        {
            tag: "attribute", name: "AbsMinCoolSetpointLimit", id: 0x5, type: "temperature", access: "R V",
            conformance: "[COOL]", constraint: "desc", default: 1600, quality: "F",
            details: "This attribute specifies the absolute minimum level that the cooling setpoint MAY be set to. This " +
                     "is a limitation imposed by the manufacturer.",
            xref: { document: "cluster", section: "4.3.7.7" }
        },

        {
            tag: "attribute", name: "AbsMaxCoolSetpointLimit", id: 0x6, type: "temperature", access: "R V",
            conformance: "[COOL]", constraint: "desc", default: 3200, quality: "F",
            details: "This attribute specifies the absolute maximum level that the cooling setpoint MAY be set to. This " +
                     "is a limitation imposed by the manufacturer.",
            xref: { document: "cluster", section: "4.3.7.8" }
        },

        {
            tag: "attribute", name: "PiCoolingDemand", id: 0x7, type: "uint8", access: "R V",
            conformance: "[COOL]", constraint: "0 to 100", quality: "P",
            details: "This attribute specifies the level of cooling demanded by the PI (proportional integral) control " +
                     "loop in use by the thermostat (if any), in percent. This value is 0 when the thermostat is in “off” " +
                     "or “heating” mode.",
            xref: { document: "cluster", section: "4.3.7.9" }
        },

        {
            tag: "attribute", name: "PiHeatingDemand", id: 0x8, type: "uint8", access: "R V",
            conformance: "[HEAT]", constraint: "0 to 100", quality: "P",
            details: "This attribute specifies the level of heating demanded by the PI loop in percent. This value is 0 " +
                     "when the thermostat is in “off” or “cooling” mode.",
            xref: { document: "cluster", section: "4.3.7.10" }
        },

        {
            tag: "attribute", name: "HvacSystemTypeConfiguration", id: 0x9, type: "map8", access: "R[W] VM",
            conformance: "D", constraint: "desc", quality: "N",
            details: "This attribute specifies the HVAC system type controlled by the thermostat. If the thermostat uses " +
                     "physical DIP switches to set these parameters, this information SHALL be available read-only from " +
                     "the DIP switches. If these parameters are set via software, there SHALL be read/write access in " +
                     "order to provide remote programming capability. The meanings of individual bits are detailed below. " +
                     "Each bit represents a type of system configuration.",
            xref: { document: "cluster", section: "4.3.7.11" },

            children: [
                {
                    tag: "datatype", name: "CoolingStage", id: 0x0,
                    description: "00 – Cool Stage 101 – Cool Stage 210 – Cool Stage 311 – Reserved"
                },
                {
                    tag: "datatype", name: "HeatingStage", id: 0x2,
                    description: "00 – Heat Stage 101 – Heat Stage 210 – Heat Stage 311 – Reserved"
                },
                { tag: "datatype", name: "HeatingType", id: 0x4, description: "0 – Conventional1 – Heat Pump" },
                { tag: "datatype", name: "HeatingFuel", id: 0x5, description: "0 – Electric / B1 – Gas / O" }
            ]
        },

        {
            tag: "attribute", name: "LocalTemperatureCalibration", id: 0x10, type: "temp-s8", access: "RW VM",
            conformance: "[!LTNE]", constraint: "-2.5°C to 2.5°C", quality: "N",
            details: "This attribute specifies the offset the Thermostat server SHALL make to the measured temperature " +
                     "(locally or remotely) to adjust the LocalTemperature Value prior to using, displaying or reporting " +
                     "it.",
            xref: { document: "cluster", section: "4.3.7.12" }
        },

        {
            tag: "attribute", name: "OccupiedCoolingSetpoint", id: 0x11, type: "temperature", access: "RW VO",
            conformance: "COOL", constraint: "desc", default: 2600, quality: "N S",
            details: "This attribute specifies the cooling mode setpoint when the room is occupied.",
            xref: { document: "cluster", section: "4.3.7.13" }
        },

        {
            tag: "attribute", name: "OccupiedHeatingSetpoint", id: 0x12, type: "temperature", access: "RW VO",
            conformance: "HEAT", constraint: "desc", default: 2000, quality: "N S",
            details: "This attribute specifies the heating mode setpoint when the room is occupied.",
            xref: { document: "cluster", section: "4.3.7.14" }
        },

        {
            tag: "attribute", name: "UnoccupiedCoolingSetpoint", id: 0x13, type: "temperature", access: "RW VO",
            conformance: "COOL & OCC", constraint: "desc", default: 2600, quality: "N",
            details: "This attribute specifies the cooling mode setpoint when the room is unoccupied.",
            xref: { document: "cluster", section: "4.3.7.15" }
        },

        {
            tag: "attribute", name: "UnoccupiedHeatingSetpoint", id: 0x14, type: "temperature", access: "RW VO",
            conformance: "HEAT & OCC", constraint: "desc", default: 2000, quality: "N",
            details: "This attribute specifies the heating mode setpoint when the room is unoccupied.",
            xref: { document: "cluster", section: "4.3.7.16" }
        },

        {
            tag: "attribute", name: "MinHeatSetpointLimit", id: 0x15, type: "temperature", access: "RW VM",
            conformance: "[HEAT]", constraint: "desc", default: 700, quality: "N",
            details: "This attribute specifies the minimum level that the heating setpoint MAY be set to.",
            xref: { document: "cluster", section: "4.3.7.17" }
        },

        {
            tag: "attribute", name: "MaxHeatSetpointLimit", id: 0x16, type: "temperature", access: "RW VM",
            conformance: "[HEAT]", constraint: "desc", default: 3000, quality: "N",
            details: "This attribute specifies the maximum level that the heating setpoint MAY be set to.",
            xref: { document: "cluster", section: "4.3.7.18" }
        },

        {
            tag: "attribute", name: "MinCoolSetpointLimit", id: 0x17, type: "temperature", access: "RW VM",
            conformance: "[COOL]", constraint: "desc", default: 1600, quality: "N",
            details: "This attribute specifies the minimum level that the cooling setpoint MAY be set to.",
            xref: { document: "cluster", section: "4.3.7.19" }
        },

        {
            tag: "attribute", name: "MaxCoolSetpointLimit", id: 0x18, type: "temperature", access: "RW VM",
            conformance: "[COOL]", constraint: "desc", default: 3200, quality: "N",
            details: "This attribute specifies the maximum level that the cooling setpoint MAY be set to.",
            xref: { document: "cluster", section: "4.3.7.20" }
        },

        {
            tag: "attribute", name: "MinSetpointDeadBand", id: 0x19, type: "temp-s8", access: "R[W] VM",
            conformance: "AUTO", constraint: "0°C to 2.5°C", default: 25, quality: "N",
            details: "On devices which support the AUTO feature, this attribute specifies the minimum difference between " +
                     "the Heat Setpoint and the Cool Setpoint.",
            xref: { document: "cluster", section: "4.3.7.21" }
        },

        {
            tag: "attribute", name: "RemoteSensing", id: 0x1a, type: "map8", access: "RW VM", conformance: "O",
            constraint: "0", quality: "N",
            details: "This attribute indicates when the local temperature, outdoor temperature and occupancy are being " +
                     "sensed by remote networked sensors, rather than internal sensors.",
            xref: { document: "cluster", section: "4.3.7.22" },

            children: [
                {
                    tag: "datatype", name: "LocalTemperature", id: 0x0,
                    description: "When set, LocalTemperature Value is derived from a remote node"
                },
                {
                    tag: "datatype", name: "OutdoorTemperature", id: 0x1,
                    description: "When set, OutdoorTemperature is derived from a remote node"
                },
                {
                    tag: "datatype", name: "Occupancy", id: 0x2,
                    description: "When set, Occupancy is derived from a remote node"
                }
            ]
        },

        {
            tag: "attribute", name: "ControlSequenceOfOperation", id: 0x1b, type: "enum8", access: "RW VM",
            conformance: "M", constraint: "desc", default: 4, quality: "N",
            details: "This attribute specifies the overall operating environment of the thermostat, and thus the possible " +
                     "system modes that the thermostat can operate in. It SHALL be set to one of the following values.",
            xref: { document: "cluster", section: "4.3.7.23" },

            children: [
                {
                    tag: "datatype", name: "CoolingOnly", id: 0x0, conformance: "[COOL]",
                    description: "Heat and Emergency are not possible"
                },
                {
                    tag: "datatype", name: "CoolingWithReheat", id: 0x1, conformance: "[COOL]",
                    description: "Heat and Emergency are not possible"
                },
                {
                    tag: "datatype", name: "HeatingOnly", id: 0x2, conformance: "[HEAT]",
                    description: "Cool and precooling (see Terms) are not possible"
                },
                {
                    tag: "datatype", name: "HeatingWithReheat", id: 0x3, conformance: "[HEAT]",
                    description: "Cool and precooling are not possible"
                },
                {
                    tag: "datatype", name: "CoolingAndHeating", id: 0x4, conformance: "[HEAT & COOL]",
                    description: "All modes are possible"
                },
                {
                    tag: "datatype", name: "CoolingAndHeatingWithReheat", id: 0x5, conformance: "[HEAT & COOL]",
                    description: "All modes are possible"
                }
            ]
        },

        {
            tag: "attribute", name: "SystemMode", id: 0x1c, type: "enum8", access: "RW VM", conformance: "M",
            constraint: "desc", default: 1, quality: "N S",
            details: "This attribute specifies the current operating mode of the thermostat, It SHALL be set to one of " +
                     "the following values, as limited by the ControlSequenceOfOperation Attribute.",
            xref: { document: "cluster", section: "4.3.7.24" },

            children: [
                {
                    tag: "datatype", name: "Off", id: 0x0, conformance: "O",
                    description: "The Thermostat does not generate demand for Cooling or Heating"
                },
                {
                    tag: "datatype", name: "Auto", id: 0x1, conformance: "AUTO",
                    description: "Demand is generated for either Cooling or Heating, as required"
                },
                {
                    tag: "datatype", name: "Cool", id: 0x3, conformance: "[COOL]",
                    description: "Demand is only generated for Cooling"
                },
                {
                    tag: "datatype", name: "Heat", id: 0x4, conformance: "[HEAT]",
                    description: "Demand is only generated for Heating"
                },
                {
                    tag: "datatype", name: "EmergencyHeat", id: 0x5, conformance: "[HEAT]",
                    description: "2nd stage heating is in use to achieve desired temperature"
                },
                { tag: "datatype", name: "Precooling", id: 0x6, conformance: "[COOL]", description: "(see Terms)" },
                { tag: "datatype", name: "FanOnly", id: 0x7, conformance: "O" },
                { tag: "datatype", name: "Dry", id: 0x8, conformance: "O" },
                { tag: "datatype", name: "Sleep", id: 0x9, conformance: "O" }
            ]
        },

        {
            tag: "attribute", name: "AlarmMask", id: 0x1d, type: "map8", access: "R V", conformance: "O",
            constraint: "desc",
            details: "This attribute specifies whether each of the alarms listed below is enabled. When the bit number " +
                     "corresponding to the alarm code is set to 1, the alarm is enabled, else it is disabled. Bits not " +
                     "corresponding to a code in the table are reserved.",
            xref: { document: "cluster", section: "4.3.7.25" },
            children: [
                { tag: "datatype", name: "InitializationFailure", id: 0x0 },
                { tag: "datatype", name: "HardwareFailure", id: 0x1 },
                { tag: "datatype", name: "SelfCalibrationFailure", id: 0x2 }
            ]
        },

        {
            tag: "attribute", name: "ThermostatRunningMode", id: 0x1e, type: "enum8", access: "R V",
            conformance: "[AUTO]", constraint: "desc",
            xref: { document: "cluster", section: "4.3.7" },
            children: [
                { tag: "datatype", name: "Off", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Cool", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Heat", id: 0x4, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "StartOfWeek", id: 0x20, type: "enum8", access: "R V", conformance: "SCH",
            constraint: "desc", quality: "F",
            details: "This attribute represents the day of the week that this thermostat considers to be the start of " +
                     "week for weekly set point scheduling.",
            xref: { document: "cluster", section: "4.3.7.27" },

            children: [
                { tag: "datatype", name: "Sunday", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Monday", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Tuesday", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Wednesday", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Thursday", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Friday", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Saturday", id: 0x6, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "NumberOfWeeklyTransitions", id: 0x21, type: "uint8", access: "R V",
            conformance: "SCH", quality: "F",
            details: "This attribute determines how many weekly schedule transitions the thermostat is capable of " +
                     "handling.",
            xref: { document: "cluster", section: "4.3.7.28" }
        },

        {
            tag: "attribute", name: "NumberOfDailyTransitions", id: 0x22, type: "uint8", access: "R V",
            conformance: "SCH", quality: "F",
            details: "This attribute determines how many daily schedule transitions the thermostat is capable of handling.",
            xref: { document: "cluster", section: "4.3.7.29" }
        },

        {
            tag: "attribute", name: "TemperatureSetpointHold", id: 0x23, type: "enum8", access: "RW VM",
            conformance: "O", constraint: "desc", quality: "N",
            details: "This attribute specifies the temperature hold status on the thermostat. If hold status is on, the " +
                     "thermostat SHOULD maintain the temperature set point for the current mode until a system mode " +
                     "change. If hold status is off, the thermostat SHOULD follow the setpoint transitions specified by " +
                     "its internal scheduling program. If the thermostat supports setpoint hold for a specific duration, " +
                     "it SHOULD also implement the TemperatureSetpointHoldDuration attribute.",
            xref: { document: "cluster", section: "4.3.7.30" },

            children: [
                {
                    tag: "datatype", name: "SetpointHoldOff", id: 0x0, conformance: "M",
                    description: "Follow scheduling program"
                },
                {
                    tag: "datatype", name: "SetpointHoldOn", id: 0x1, conformance: "M",
                    description: "Maintain current setpoint, regardless of schedule transitions"
                }
            ]
        },

        {
            tag: "attribute", name: "TemperatureSetpointHoldDuration", id: 0x24, type: "uint16",
            access: "RW VM", conformance: "O", constraint: "0 to 1440", quality: "X N",
            details: "This attribute sets the period in minutes for which a setpoint hold is active. Thermostats that " +
                     "support hold for a specified duration SHOULD implement this attribute. The null value indicates the " +
                     "field is unused. All other values are reserved.",
            xref: { document: "cluster", section: "4.3.7.31" }
        },

        {
            tag: "attribute", name: "ThermostatProgrammingOperationMode", id: 0x25, type: "map8",
            access: "RW VM", conformance: "O", constraint: "desc", quality: "P",
            details: "This attribute determines the operational state of the thermostat’s programming. The thermostat " +
                     "SHALL modify its programming operation when this attribute is modified by a client and update this " +
                     "attribute when its programming operation is modified locally by a user. The thermostat MAY support " +
                     "more than one active ThermostatProgrammingOperationMode. For example, the thermostat MAY operate " +
                     "simultaneously in Schedule Programming Mode and Recovery Mode.",
            xref: { document: "cluster", section: "4.3.7.32" },

            children: [
                {
                    tag: "datatype", name: "ScheduleActive", id: 0x0,
                    description: "Schedule programming mode. This enables any programmed weekly schedule configurations."
                },
                { tag: "datatype", name: "AutoRecovery", id: 0x1, description: "Auto/recovery mode" },
                { tag: "datatype", name: "Economy", id: 0x2, description: "Economy/EnergyStar mode" }
            ]
        },

        {
            tag: "attribute", name: "ThermostatRunningState", id: 0x29, type: "map16", access: "R V",
            conformance: "O", constraint: "desc",
            details: "This attribute represents the current relay state of the heat, cool, and fan relays.",
            xref: { document: "cluster", section: "4.3.7.33" },

            children: [
                { tag: "datatype", name: "Heat", id: 0x0, description: "Heat State On" },
                { tag: "datatype", name: "Cool", id: 0x1, conformance: "M", description: "Cool State On" },
                { tag: "datatype", name: "Fan", id: 0x2, conformance: "M", description: "Fan State On" },
                { tag: "datatype", name: "HeatStage2", id: 0x3, description: "Heat 2nd Stage State On" },
                { tag: "datatype", name: "CoolStage2", id: 0x4, conformance: "M", description: "Cool 2nd Stage State On" },
                { tag: "datatype", name: "FanStage2", id: 0x5, description: "Fan 2nd Stage State On" },
                { tag: "datatype", name: "FanStage3", id: 0x6, description: "Fan 3rd Stage Stage On" },
                { tag: "datatype", name: "HeatSecondStageStateOn", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "CoolSecondStageStateOn", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "FanSecondStageStateOn", id: 0x20, conformance: "M" },
                { tag: "datatype", name: "FanThirdStageStateOn", id: 0x40, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "SetpointChangeSource", id: 0x30, type: "enum8", access: "R V",
            conformance: "O", constraint: "desc",
            details: "This attribute specifies the source of the current active OccupiedCoolingSetpoint or " +
                     "OccupiedHeatingSetpoint (i.e., who or what determined the current setpoint).",
            xref: { document: "cluster", section: "4.3.7.34" },

            children: [
                {
                    tag: "datatype", name: "Manual", id: 0x0, conformance: "O",
                    description: "Manual, user-initiated setpoint change via the thermostat"
                },
                {
                    tag: "datatype", name: "Schedule", id: 0x1, conformance: "[SCH]",
                    description: "Schedule/internal programming-initiated setpoint change"
                },
                {
                    tag: "datatype", name: "External", id: 0x2, conformance: "O",
                    description: "Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)"
                }
            ]
        },

        {
            tag: "attribute", name: "SetpointChangeAmount", id: 0x31, type: "temp-diff", access: "R V",
            conformance: "O", default: 32768, quality: "X",
            details: "This attribute specifies the delta between the current active OccupiedCoolingSetpoint or " +
                     "OccupiedHeatingSetpoint and the previous active setpoint. This attribute is meant to accompany the " +
                     "SetpointChangeSource attribute; devices implementing SetpointChangeAmount SHOULD also implement " +
                     "SetpointChangeSource.",
            xref: { document: "cluster", section: "4.3.7.35" }
        },

        {
            tag: "attribute", name: "SetpointChangeSourceTimestamp", id: 0x32, type: "utc", access: "R V",
            conformance: "O",
            details: "This attribute specifies the time in UTC at which the SetpointChangeSourceAmount attribute change " +
                     "was recorded.",
            xref: { document: "cluster", section: "4.3.7.36" }
        },

        {
            tag: "attribute", name: "OccupiedSetback", id: 0x34, type: "temp-u8", access: "RW VM",
            conformance: "SB", constraint: "OccupiedSetbackMin to OccupiedSetbackMax", default: null,
            quality: "X N",
            details: "This attribute specifies the amount that the Thermostat server will allow the LocalTemperature " +
                     "Value to float above the OccupiedCooling setpoint (i.e., OccupiedCooling + OccupiedSetback) or " +
                     "below the OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) before initiating a " +
                     "state change to bring the temperature back to the user’s desired setpoint. This attribute is " +
                     "sometimes also referred to as the “span.”",
            xref: { document: "cluster", section: "4.3.7.37" }
        },

        {
            tag: "attribute", name: "OccupiedSetbackMin", id: 0x35, type: "temp-u8", access: "R V",
            conformance: "SB", constraint: "0 to OccupiedSetbackMax", default: null, quality: "X F",
            details: "This attribute specifies the minimum value that the Thermostat server will allow the " +
                     "OccupiedSetback attribute to be configured by a user.",
            xref: { document: "cluster", section: "4.3.7.38" }
        },

        {
            tag: "attribute", name: "OccupiedSetbackMax", id: 0x36, type: "temp-u8", access: "R V",
            conformance: "SB", constraint: "OccupiedSetbackMin to 25.4°C", default: null, quality: "X F",
            details: "This attribute specifies the maximum value that the Thermostat server will allow the " +
                     "OccupiedSetback attribute to be configured by a user.",
            xref: { document: "cluster", section: "4.3.7.39" }
        },

        {
            tag: "attribute", name: "UnoccupiedSetback", id: 0x37, type: "temp-u8", access: "RW VM",
            conformance: "SB & OCC", constraint: "UnoccupiedSetbackMin to UnoccupiedSetbackMax", default: null,
            quality: "X N",
            details: "This attribute specifies the amount that the Thermostat server will allow the LocalTemperature " +
                     "Value to float above the UnoccupiedCooling setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) " +
                     "or below the UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - UnoccupiedSetback) before " +
                     "initiating a state change to bring the temperature back to the user’s desired setpoint. This " +
                     "attribute is sometimes also referred to as the “span.”",
            xref: { document: "cluster", section: "4.3.7.40" }
        },

        {
            tag: "attribute", name: "UnoccupiedSetbackMin", id: 0x38, type: "temp-u8", access: "R V",
            conformance: "SB & OCC", constraint: "0 to UnoccupiedSetbackMax", default: null, quality: "X F",
            details: "This attribute specifies the minimum value that the Thermostat server will allow the " +
                     "UnoccupiedSetback attribute to be configured by a user.",
            xref: { document: "cluster", section: "4.3.7.41" }
        },

        {
            tag: "attribute", name: "UnoccupiedSetbackMax", id: 0x39, type: "temp-u8", access: "R V",
            conformance: "SB & OCC", constraint: "UnoccupiedSetbackMin to 25.4°C", default: null,
            quality: "X F",
            details: "This attribute specifies the maximum value that the Thermostat server will allow the " +
                     "UnoccupiedSetback attribute to be configured by a user.",
            xref: { document: "cluster", section: "4.3.7.42" }
        },

        {
            tag: "attribute", name: "EmergencyHeatDelta", id: 0x3a, type: "temp-u8", access: "RW VM",
            conformance: "O", default: { type: "celsius", value: 25 }, quality: "N",
            details: "This attribute specifies the delta between the LocalTemperature Value and the " +
                     "OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint attributes at which the Thermostat server will " +
                     "operate in emergency heat mode.",
            xref: { document: "cluster", section: "4.3.7.43" }
        },

        {
            tag: "attribute", name: "AcType", id: 0x40, type: "enum8", access: "RW VM", conformance: "O",
            constraint: "desc", quality: "N",
            details: "This attribute indicates the type of Mini Split ACType of Mini Split AC is defined depending on how " +
                     "Cooling and Heating condition is achieved by Mini Split AC.",
            xref: { document: "cluster", section: "4.3.7.44" },

            children: [
                { tag: "datatype", name: "Unknown", id: 0x0, conformance: "O", description: "Unknown AC Type" },
                { tag: "datatype", name: "CoolingFixed", id: 0x1, conformance: "O", description: "Cooling and Fixed Speed" },
                {
                    tag: "datatype", name: "HeatPumpFixed", id: 0x2, conformance: "O",
                    description: "Heat Pump and Fixed Speed"
                },
                { tag: "datatype", name: "CoolingInverter", id: 0x3, conformance: "O", description: "Cooling and Inverter" },
                {
                    tag: "datatype", name: "HeatPumpInverter", id: 0x4, conformance: "O",
                    description: "Heat Pump and Inverter"
                }
            ]
        },

        {
            tag: "attribute", name: "AcCapacity", id: 0x41, type: "uint16", access: "RW VM", conformance: "O",
            quality: "N",
            details: "This attribute indicates capacity of Mini Split AC in terms of the format defined by the " +
                     "ACCapacityFormat attribute",
            xref: { document: "cluster", section: "4.3.7.45" }
        },

        {
            tag: "attribute", name: "AcRefrigerantType", id: 0x42, type: "enum8", access: "RW VM",
            conformance: "O", constraint: "desc", quality: "N",
            details: "This attribute indicates type of refrigerant used within the Mini Split AC.",
            xref: { document: "cluster", section: "4.3.7.46" },

            children: [
                { tag: "datatype", name: "Unknown", id: 0x0, conformance: "O", description: "Unknown Refrigerant Type" },
                { tag: "datatype", name: "R22", id: 0x1, conformance: "O", description: "R22 Refrigerant" },
                { tag: "datatype", name: "R410A", id: 0x2, conformance: "O", description: "R410a Refrigerant" },
                { tag: "datatype", name: "R407C", id: 0x3, conformance: "O", description: "R407c Refrigerant" }
            ]
        },

        {
            tag: "attribute", name: "AcCompressorType", id: 0x43, type: "enum8", access: "RW VM",
            conformance: "O", constraint: "desc", quality: "N",
            details: "This attribute indicates type of Compressor used within the Mini Split AC.",
            xref: { document: "cluster", section: "4.3.7.47" },

            children: [
                { tag: "datatype", name: "Unknown", id: 0x0, conformance: "O", description: "Unknown compressor type" },
                { tag: "datatype", name: "T1", id: 0x1, conformance: "O", description: "Max working ambient 43 °C" },
                { tag: "datatype", name: "T2", id: 0x2, conformance: "O", description: "Max working ambient 35 °C" },
                { tag: "datatype", name: "T3", id: 0x3, conformance: "O", description: "Max working ambient 52 °C" }
            ]
        },

        {
            tag: "attribute", name: "AcErrorCode", id: 0x44, type: "map32", access: "RW VM", conformance: "O",
            details: "This attribute indicates the type of errors encountered within the Mini Split AC. Error values are " +
                     "reported with four bytes values. Each bit within the four bytes indicates the unique error.",
            xref: { document: "cluster", section: "4.3.7.48" },

            children: [
                {
                    tag: "datatype", name: "CompressorFail", id: 0x0,
                    description: "Compressor Failure or Refrigerant Leakage"
                },
                { tag: "datatype", name: "RoomSensorFail", id: 0x1, description: "Room Temperature Sensor Failure" },
                { tag: "datatype", name: "OutdoorSensorFail", id: 0x2, description: "Outdoor Temperature Sensor Failure" },
                { tag: "datatype", name: "CoilSensorFail", id: 0x3, description: "Indoor Coil Temperature Sensor Failure" },
                { tag: "datatype", name: "FanFail", id: 0x4, description: "Fan Failure" }
            ]
        },

        {
            tag: "attribute", name: "AcLouverPosition", id: 0x45, type: "enum8", access: "RW VM",
            conformance: "O", constraint: "desc", quality: "N",
            details: "This attribute indicates the position of Louver on the AC.",
            xref: { document: "cluster", section: "4.3.7.49" },

            children: [
                { tag: "datatype", name: "Closed", id: 0x1, conformance: "O", description: "Fully Closed" },
                { tag: "datatype", name: "Open", id: 0x2, conformance: "O", description: "Fully Open" },
                { tag: "datatype", name: "Quarter", id: 0x3, conformance: "O", description: "Quarter Open" },
                { tag: "datatype", name: "Half", id: 0x4, conformance: "O", description: "Half Open" },
                { tag: "datatype", name: "ThreeQuarters", id: 0x5, conformance: "O", description: "Three Quarters Open" }
            ]
        },

        {
            tag: "attribute", name: "AcCoilTemperature", id: 0x46, type: "temperature", access: "R V",
            conformance: "O", default: 32768, quality: "X",
            details: "This attribute represents the temperature of the AC coil, as measured locally or remotely (over the " +
                     "network).",
            xref: { document: "cluster", section: "4.3.7.50" }
        },

        {
            tag: "attribute", name: "AcCapacityFormat", id: 0x47, type: "enum8", access: "RW VM",
            conformance: "O", constraint: "desc", quality: "N",
            details: "This attribute specifies the format for the ACCapacity attribute.",
            xref: { document: "cluster", section: "4.3.7.51" },
            children: [
                { tag: "datatype", name: "BtUh", id: 0x0, conformance: "O", description: "British Thermal Unit per Hour" }
            ]
        },

        {
            tag: "command", name: "SetpointRaiseLower", id: 0x0, access: "O", conformance: "M",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "4.3.8" },
            children: [
                { tag: "datatype", name: "Mode", type: "SetpointAdjustMode", conformance: "M" },
                { tag: "datatype", name: "Amount", type: "int8", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "SetWeeklySchedule", id: 0x1, access: "M", conformance: "SCH",
            direction: "request", response: "status",
            xref: { document: "cluster", section: "4.3.8" },

            children: [
                { tag: "datatype", name: "NumberOfTransitionsForSequence", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "DayOfWeekForSequence", type: "DayOfWeek", conformance: "M" },
                { tag: "datatype", name: "ModeForSequence", type: "ModeForSequence", conformance: "M" },
                { tag: "datatype", name: "Transitions", type: "ThermostatScheduleTransition", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "GetWeeklySchedule", id: 0x2, access: "O", conformance: "SCH",
            direction: "request", response: "GetWeeklyScheduleResponse",
            xref: { document: "cluster", section: "4.3.8" },
            children: [
                { tag: "datatype", name: "DaysToReturn", type: "DayOfWeek", conformance: "M" },
                { tag: "datatype", name: "ModeToReturn", type: "ModeForSequence", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "ClearWeeklySchedule", id: 0x3, access: "M", conformance: "SCH",
            direction: "request",
            xref: { document: "cluster", section: "4.3.8" }
        },
        {
            tag: "command", name: "GetRelayStatusLog", id: 0x4, access: "O", conformance: "O",
            direction: "request", response: "GetRelayStatusLogResponse",
            xref: { document: "cluster", section: "4.3.8" }
        },

        {
            tag: "command", name: "GetWeeklyScheduleResponse", id: 0x0, conformance: "SCH",
            direction: "response",
            xref: { document: "cluster", section: "4.3.8" },

            children: [
                { tag: "datatype", name: "NumberOfTransitionsForSequence", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "DayOfWeekForSequence", type: "DayOfWeek", conformance: "M" },
                { tag: "datatype", name: "ModeForSequence", type: "ModeForSequence", conformance: "M" },
                { tag: "datatype", name: "Transitions", type: "ThermostatScheduleTransition", conformance: "M" }
            ]
        },

        {
            tag: "command", name: "GetRelayStatusLogResponse", id: 0x1, conformance: "O", direction: "response",
            xref: { document: "cluster", section: "4.3.8" }
        },
        {
            tag: "datatype", name: "temperature", type: "int16", description: "Temperature",
            details: "This type represents a temperature on the Celsius scale with a resolution of 0.01°C.",
            xref: { document: "cluster", section: "4.3.9.1" }
        },
        {
            tag: "datatype", name: "temp-diff", type: "int16", description: "Temperature Difference",
            details: "This type represents a temperature difference with a resolution of 0.01°C.",
            xref: { document: "cluster", section: "4.3.9.2" }
        },
        {
            tag: "datatype", name: "temp-s8", type: "int8", description: "Signed Temperature (°C x 10)",
            details: "This type represents a temperature from -12.7°C to 12.7°C with a resolution of 0.1°C.",
            xref: { document: "cluster", section: "4.3.9.3" }
        },
        {
            tag: "datatype", name: "temp-u8", type: "uint8", description: "Unsigned Temperature (°C x 10)",
            details: "This type represents a temperature from 0°C to 25.5°C with a resolution of 0.1°C.",
            xref: { document: "cluster", section: "4.3.9.4" }
        },

        {
            tag: "datatype", name: "ThermostatScheduleTransition", type: "struct", conformance: "M",
            details: "This represents a single transition in a Thermostat schedule",
            xref: { document: "cluster", section: "4.3.9.5" },

            children: [
                {
                    tag: "datatype", name: "TransitionTime", id: 0x0, type: "uint16", access: "RW", conformance: "M",
                    constraint: "0 to 1439",
                    details: "This field represents the start time of the schedule transition during the associated day. The time " +
                             "will be represented by a 16 bits unsigned integer to designate the minutes since midnight. For " +
                             "example, 6am will be represented by 360 minutes since midnight and 11:30pm will be represented by " +
                             "1410 minutes since midnight.",
                    xref: { document: "cluster", section: "4.3.9.5.1" }
                },

                {
                    tag: "datatype", name: "HeatSetpoint", id: 0x1, type: "temperature", access: "RW", conformance: "M",
                    quality: "X"
                },
                {
                    tag: "datatype", name: "CoolSetpoint", id: 0x2, type: "temperature", access: "RW", conformance: "M",
                    quality: "X"
                }
            ]
        },

        {
            tag: "datatype", name: "SetpointAdjustMode", type: "enum8", conformance: "M",
            children: [
                { tag: "datatype", name: "Heat", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Cool", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Both", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "DayOfWeek", type: "map8", conformance: "M",

            children: [
                { tag: "datatype", name: "Sunday", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Monday", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Tuesday", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Wednesday", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "Thursday", id: 0x10, conformance: "M" },
                { tag: "datatype", name: "Friday", id: 0x20, conformance: "M" },
                { tag: "datatype", name: "Saturday", id: 0x40, conformance: "M" },
                { tag: "datatype", name: "Away", id: 0x80, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "ModeForSequence", type: "map8", conformance: "M",
            children: [
                { tag: "datatype", name: "HeatSetpointPresent", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "CoolSetpointPresent", id: 0x2, conformance: "M" }
            ]
        }
    ]
});