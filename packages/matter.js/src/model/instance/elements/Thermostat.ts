/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0201, name: "Thermostat",
    classification: "application", description: "Thermostat",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "LocalTemperature",
            access: "R V", conformance: "M", default: "null", quality: "X P", type: "int16",
            details: "This attribute indicates the current LocalTemperature value, when " +
                     "available. The value may be local, or remote, depending on the value " +
                     "of the RemoteSensing attribute when supported",
            xref: { document: "cluster", section: "4.3.7.2" }
        },

        {
            tag: "attribute", id: 0x0001, name: "OutdoorTemperature",
            access: "R V", conformance: "O", default: "null", quality: "X", type: "int16",
            details: "This attribute represents the outdoor temperature, as measured locally" +
                     " or remotely (over the network",
            xref: { document: "cluster", section: "4.3.7.3" }
        },

        {
            tag: "attribute", id: 0x0002, name: "ThermostatOccupancy",
            access: "R V", conformance: "O, CC", constraint: "desc", default: 1, type: "map8",
            details: "This attribute specifies whether the heated/cooled space is occupied " +
                     "or not, as measured locally or remotely (over the network). If bit 0" +
                     " = 1, the space is occupied, else it is unoccupied. All other bits are" +
                     " reserved",
            xref: { document: "cluster", section: "4.3.7.4" }
        },

        {
            tag: "attribute", id: 0x0003, name: "AbsMinHeatSetpointLimit",
            access: "R V", conformance: "[HEAT]", constraint: "desc", default: 700, quality: "F", type: "int16",
            details: "This attribute specifies the absolute minimum level that the heating " +
                     "setpoint MAY be set to. This is a limitation imposed by the " +
                     "manufacturer",
            xref: { document: "cluster", section: "4.3.7.5" }
        },

        {
            tag: "attribute", id: 0x0004, name: "AbsMaxHeatSetpointLimit",
            access: "R V", conformance: "[HEAT]", constraint: "desc", default: 3000, quality: "F", type: "int16",
            details: "This attribute specifies the absolute maximum level that the heating " +
                     "setpoint MAY be set to. This is a limitation imposed by the " +
                     "manufacturer",
            xref: { document: "cluster", section: "4.3.7.6" }
        },

        {
            tag: "attribute", id: 0x0005, name: "AbsMinCoolSetpointLimit",
            access: "R V", conformance: "[COOL]", constraint: "desc", default: 1600, quality: "F", type: "int16",
            details: "This attribute specifies the absolute minimum level that the cooling " +
                     "setpoint MAY be set to. This is a limitation imposed by the " +
                     "manufacturer",
            xref: { document: "cluster", section: "4.3.7.7" }
        },

        {
            tag: "attribute", id: 0x0006, name: "AbsMaxCoolSetpointLimit",
            access: "R V", conformance: "[COOL]", constraint: "desc", default: 3200, quality: "F", type: "int16",
            details: "This attribute specifies the absolute maximum level that the cooling " +
                     "setpoint MAY be set to. This is a limitation imposed by the " +
                     "manufacturer",
            xref: { document: "cluster", section: "4.3.7.8" }
        },

        {
            tag: "attribute", id: 0x0007, name: "PiCoolingDemand",
            access: "R V", conformance: "[COOL]", default: "-", quality: "P", type: "uint8",
            details: "This attribute specifies the level of cooling demanded by the PI (" +
                     "proportional integral) control loop in use by the thermostat (if any" +
                     "), in percent. This value is 0 when the thermostat is in “off” or “" +
                     "heating” mode",
            xref: { document: "cluster", section: "4.3.7.9" }
        },

        {
            tag: "attribute", id: 0x0008, name: "PiHeatingDemand",
            access: "R V", conformance: "[HEAT]", default: "-", quality: "P", type: "uint8",
            details: "This attribute specifies the level of heating demanded by the PI loop " +
                     "in percent. This value is 0 when the thermostat is in “off” or “" +
                     "cooling” mode",
            xref: { document: "cluster", section: "4.3.7.10" }
        },

        {
            tag: "attribute", id: 0x0009, name: "HvacSystemTypeConfiguration",
            access: "RW VM", conformance: "D", constraint: "desc", default: 0, quality: "N", type: "map8",
            details: "This attribute specifies the HVAC system type controlled by the " +
                     "thermostat. If the thermostat uses physical DIP switches to set these " +
                     "parameters, this information SHALL be available read-only from the DIP" +
                     " switches. If these parameters are set via software, there SHALL be " +
                     "read/write access in order to provide remote programming capability. " +
                     "The meanings of individual bits are detailed below. Each bit " +
                     "represents a type of system configuration",
            xref: { document: "cluster", section: "4.3.7.11" }
        },

        {
            tag: "attribute", id: 0x0010, name: "LocalTemperatureCalibration",
            access: "RW VM", conformance: "[!LTNE]", constraint: "-2.5 to 2.5", default: 0, quality: "N", type: "int8",
            details: "This attribute specifies the offset the Thermostat server SHALL make " +
                     "to the measured temperature (locally or remotely) to adjust the " +
                     "LocalTemperature Value prior to using, displaying or reporting it",
            xref: { document: "cluster", section: "4.3.7.12" }
        },

        {
            tag: "attribute", id: 0x0011, name: "OccupiedCoolingSetpoint",
            access: "RW", conformance: "COOL", constraint: "desc", default: 2600, quality: "N S", type: "int16",
            details: "This attribute specifies the cooling mode setpoint when the room is " +
                     "occupied",
            xref: { document: "cluster", section: "4.3.7.13" }
        },

        {
            tag: "attribute", id: 0x0012, name: "OccupiedHeatingSetpoint",
            access: "RW", conformance: "HEAT", constraint: "desc", default: 2000, quality: "N S", type: "int16",
            details: "This attribute specifies the heating mode setpoint when the room is " +
                     "occupied",
            xref: { document: "cluster", section: "4.3.7.14" }
        },

        {
            tag: "attribute", id: 0x0013, name: "UnoccupiedCoolingSetpoint",
            access: "RW", conformance: "COOL & O, CC", constraint: "desc", default: 2600, quality: "N", type: "int16",
            details: "This attribute specifies the cooling mode setpoint when the room is " +
                     "unoccupied",
            xref: { document: "cluster", section: "4.3.7.15" }
        },

        {
            tag: "attribute", id: 0x0014, name: "UnoccupiedHeatingSetpoint",
            access: "RW", conformance: "HEAT & O, CC", constraint: "desc", default: 2000, quality: "N", type: "int16",
            details: "This attribute specifies the heating mode setpoint when the room is " +
                     "unoccupied",
            xref: { document: "cluster", section: "4.3.7.16" }
        },

        {
            tag: "attribute", id: 0x0015, name: "MinHeatSetpointLimit",
            access: "RW VM", conformance: "[HEAT]", constraint: "desc", default: 700, quality: "N", type: "int16",
            details: "This attribute specifies the minimum level that the heating setpoint " +
                     "MAY be set to",
            xref: { document: "cluster", section: "4.3.7.17" }
        },

        {
            tag: "attribute", id: 0x0016, name: "MaxHeatSetpointLimit",
            access: "RW VM", conformance: "[HEAT]", constraint: "desc", default: 3000, quality: "N", type: "int16",
            details: "This attribute specifies the maximum level that the heating setpoint " +
                     "MAY be set to",
            xref: { document: "cluster", section: "4.3.7.18" }
        },

        {
            tag: "attribute", id: 0x0017, name: "MinCoolSetpointLimit",
            access: "RW VM", conformance: "[COOL]", constraint: "desc", default: 1600, quality: "N", type: "int16",
            details: "This attribute specifies the minimum level that the cooling setpoint " +
                     "MAY be set to",
            xref: { document: "cluster", section: "4.3.7.19" }
        },

        {
            tag: "attribute", id: 0x0018, name: "MaxCoolSetpointLimit",
            access: "RW VM", conformance: "[COOL]", constraint: "desc", default: 3200, quality: "N", type: "int16",
            details: "This attribute specifies the maximum level that the cooling setpoint " +
                     "MAY be set to",
            xref: { document: "cluster", section: "4.3.7.20" }
        },

        {
            tag: "attribute", id: 0x0019, name: "MinSetpointDeadBand",
            access: "RW VM", conformance: "AUTO", constraint: "0 to 2.5", default: 25, quality: "N", type: "int8",
            details: "On devices which support the AUTO feature, this attribute specifies " +
                     "the minimum difference between the Heat Setpoint and the Cool Setpoint",
            xref: { document: "cluster", section: "4.3.7.21" }
        },

        {
            tag: "attribute", id: 0x001a, name: "RemoteSensing",
            access: "RW VM", conformance: "O", constraint: "0", default: 0, quality: "N", type: "map8",
            details: "This attribute indicates when the local temperature, outdoor " +
                     "temperature and occupancy are being sensed by remote networked sensors" +
                     ", rather than internal sensors",
            xref: { document: "cluster", section: "4.3.7.22" }
        },

        {
            tag: "attribute", id: 0x001b, name: "ControlSequenceOfOperation",
            access: "RW VM", conformance: "M", constraint: "desc", default: 4, quality: "N", type: "ThermostatControlSequence",
            details: "This attribute specifies the overall operating environment of the " +
                     "thermostat, and thus the possible system modes that the thermostat can" +
                     " operate in. It SHALL be set to one of the following values",
            xref: { document: "cluster", section: "4.3.7.23" }
        },

        {
            tag: "attribute", id: 0x001c, name: "SystemMode",
            access: "RW VM", conformance: "M", constraint: "desc", default: 1, quality: "N S", type: "enum8",
            details: "This attribute specifies the current operating mode of the thermostat" +
                     ", It SHALL be set to one of the following values, as limited by the " +
                     "ControlSequenceOfOperation Attribute",
            xref: { document: "cluster", section: "4.3.7.24" }
        },

        {
            tag: "attribute", id: 0x001d, name: "AlarmMask",
            access: "R V", conformance: "O", constraint: "desc", default: 0, type: "map8",
            details: "This attribute specifies whether each of the alarms listed below is " +
                     "enabled. When the bit number corresponding to the alarm code is set to" +
                     " 1, the alarm is enabled, else it is disabled. Bits not corresponding " +
                     "to a code in the table are reserved",
            xref: { document: "cluster", section: "4.3.7.25" }
        },

        {
            tag: "attribute", id: 0x001e, name: "ThermostatRunningMode",
            access: "R V", conformance: "[AUTO]", constraint: "desc", default: 0, type: "enum8",
            xref: { document: "cluster", section: "4.3.7" }
        },

        {
            tag: "attribute", id: 0x0020, name: "StartOfWeek",
            access: "R V", conformance: "SCH", constraint: "desc", default: "–", quality: "F", type: "enum8",
            details: "This attribute represents the day of the week that this thermostat " +
                     "considers to be the start of week for weekly set point scheduling",
            xref: { document: "cluster", section: "4.3.7.27" }
        },

        {
            tag: "attribute", id: 0x0021, name: "NumberOfWeeklyTransitions",
            access: "R V", conformance: "SCH", default: 0, quality: "F", type: "uint8",
            details: "This attribute determines how many weekly schedule transitions the " +
                     "thermostat is capable of handling",
            xref: { document: "cluster", section: "4.3.7.28" }
        },

        {
            tag: "attribute", id: 0x0022, name: "NumberOfDailyTransitions",
            access: "R V", conformance: "SCH", default: 0, quality: "F", type: "uint8",
            details: "This attribute determines how many daily schedule transitions the " +
                     "thermostat is capable of handling",
            xref: { document: "cluster", section: "4.3.7.29" }
        },

        {
            tag: "attribute", id: 0x0023, name: "TemperatureSetpointHold",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
            details: "This attribute specifies the temperature hold status on the thermostat" +
                     ". If hold status is on, the thermostat SHOULD maintain the temperature" +
                     " set point for the current mode until a system mode change. If hold " +
                     "status is off, the thermostat SHOULD follow the setpoint transitions " +
                     "specified by its internal scheduling program. If the thermostat " +
                     "supports setpoint hold for a specific duration, it SHOULD also " +
                     "implement the TemperatureSetpointHoldDuration attribute",
            xref: { document: "cluster", section: "4.3.7.30" }
        },

        {
            tag: "attribute", id: 0x0024, name: "TemperatureSetpointHoldDuration",
            access: "RW VM", conformance: "O", constraint: "0 to 1440", default: 65535, quality: "X N", type: "uint16",
            details: "This attribute sets the period in minutes for which a setpoint hold is" +
                     " active. Thermostats that support hold for a specified duration SHOULD" +
                     " implement this attribute. The null value indicates the field is " +
                     "unused. All other values are reserved",
            xref: { document: "cluster", section: "4.3.7.31" }
        },

        {
            tag: "attribute", id: 0x0025, name: "ThermostatProgrammingOperationMode",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P", type: "map8",
            details: "This attribute determines the operational state of the thermostat’s " +
                     "programming. The thermostat SHALL modify its programming operation " +
                     "when this attribute is modified by a client and update this attribute " +
                     "when its programming operation is modified locally by a user. The " +
                     "thermostat MAY support more than one active " +
                     "ThermostatProgrammingOperationMode. For example, the thermostat MAY " +
                     "operate simultaneously in Schedule Programming Mode and Recovery Mode",
            xref: { document: "cluster", section: "4.3.7.32" }
        },

        {
            tag: "attribute", id: 0x0029, name: "ThermostatRunningState",
            access: "R V", conformance: "O", constraint: "desc", default: "-", type: "map16",
            details: "This attribute represents the current relay state of the heat, cool, " +
                     "and fan relays",
            xref: { document: "cluster", section: "4.3.7.33" }
        },

        {
            tag: "attribute", id: 0x0030, name: "SetpointChangeSource",
            access: "R V", conformance: "O", constraint: "desc", default: 0, type: "enum8",
            details: "This attribute specifies the source of the current active " +
                     "OccupiedCoolingSetpoint or OccupiedHeatingSetpoint (i.e., who or what " +
                     "determined the current setpoint",
            xref: { document: "cluster", section: "4.3.7.34" }
        },

        {
            tag: "attribute", id: 0x0031, name: "SetpointChangeAmount",
            access: "R V", conformance: "O", default: 32768, quality: "X", type: "int16",
            details: "This attribute specifies the delta between the current active " +
                     "OccupiedCoolingSetpoint or OccupiedHeatingSetpoint and the previous " +
                     "active setpoint. This attribute is meant to accompany the " +
                     "SetpointChangeSource attribute; devices implementing " +
                     "SetpointChangeAmount SHOULD also implement SetpointChangeSource",
            xref: { document: "cluster", section: "4.3.7.35" }
        },

        {
            tag: "attribute", id: 0x0032, name: "SetpointChangeSourceTimestamp",
            access: "R V", conformance: "O", default: 0, type: "epoch-s",
            details: "This attribute specifies the time in UTC at which the " +
                     "SetpointChangeSourceAmount attribute change was recorded",
            xref: { document: "cluster", section: "4.3.7.36" }
        },

        {
            tag: "attribute", id: 0x0034, name: "OccupiedSetback",
            access: "RW VM", conformance: "SB", constraint: "OccupiedSetbackMin to OccupiedSetbackMax", default: "null", quality: "X N", type: "uint8",
            details: "This attribute specifies the amount that the Thermostat server will " +
                     "allow the LocalTemperature Value to float above the OccupiedCooling " +
                     "setpoint (i.e., OccupiedCooling + OccupiedSetback) or below the " +
                     "OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) " +
                     "before initiating a state change to bring the temperature back to the " +
                     "user’s desired setpoint. This attribute is sometimes also referred to " +
                     "as the “span",
            xref: { document: "cluster", section: "4.3.7.37" }
        },

        {
            tag: "attribute", id: 0x0035, name: "OccupiedSetbackMin",
            access: "R V", conformance: "SB", constraint: "0 to OccupiedSetbackMax", default: "null", quality: "X F", type: "uint8",
            details: "This attribute specifies the minimum value that the Thermostat server " +
                     "will allow the OccupiedSetback attribute to be configured by a user",
            xref: { document: "cluster", section: "4.3.7.38" }
        },

        {
            tag: "attribute", id: 0x0036, name: "OccupiedSetbackMax",
            access: "R V", conformance: "SB", constraint: "OccupiedSetbackMin to 25.4", default: "null", quality: "X F", type: "uint8",
            details: "This attribute specifies the maximum value that the Thermostat server " +
                     "will allow the OccupiedSetback attribute to be configured by a user",
            xref: { document: "cluster", section: "4.3.7.39" }
        },

        {
            tag: "attribute", id: 0x0037, name: "UnoccupiedSetback",
            access: "RW VM", conformance: "SB & O, CC", constraint: "UnoccupiedSetbackMin to UnoccupiedSetbackMax", default: "null", quality: "X N", type: "uint8",
            details: "This attribute specifies the amount that the Thermostat server will " +
                     "allow the LocalTemperature Value to float above the UnoccupiedCooling " +
                     "setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) or below the " +
                     "UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - " +
                     "UnoccupiedSetback) before initiating a state change to bring the " +
                     "temperature back to the user’s desired setpoint. This attribute is " +
                     "sometimes also referred to as the “span",
            xref: { document: "cluster", section: "4.3.7.40" }
        },

        {
            tag: "attribute", id: 0x0038, name: "UnoccupiedSetbackMin",
            access: "R V", conformance: "SB & O, CC", constraint: "0 to UnoccupiedSetbackMax", default: "null", quality: "X F", type: "uint8",
            details: "This attribute specifies the minimum value that the Thermostat server " +
                     "will allow the UnoccupiedSetback attribute to be configured by a user",
            xref: { document: "cluster", section: "4.3.7.41" }
        },

        {
            tag: "attribute", id: 0x0039, name: "UnoccupiedSetbackMax",
            access: "R V", conformance: "SB & O, CC", constraint: "UnoccupiedSetbackMin to 25.4", default: "null", quality: "X F", type: "uint8",
            details: "This attribute specifies the maximum value that the Thermostat server " +
                     "will allow the UnoccupiedSetback attribute to be configured by a user",
            xref: { document: "cluster", section: "4.3.7.42" }
        },

        {
            tag: "attribute", id: 0x003a, name: "EmergencyHeatDelta",
            access: "RW VM", conformance: "O", default: "25.5°C", quality: "N", type: "uint8",
            details: "This attribute specifies the delta between the LocalTemperature Value " +
                     "and the OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint " +
                     "attributes at which the Thermostat server will operate in emergency " +
                     "heat mode",
            xref: { document: "cluster", section: "4.3.7.43" }
        },

        {
            tag: "attribute", id: 0x0040, name: "AcType",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
            details: "This attribute indicates the type of Mini Split ACType of Mini Split " +
                     "AC is defined depending on how Cooling and Heating condition is " +
                     "achieved by Mini Split AC",
            xref: { document: "cluster", section: "4.3.7.44" }
        },

        {
            tag: "attribute", id: 0x0041, name: "AcCapacity",
            access: "RW VM", conformance: "O", default: 0, quality: "N", type: "uint16",
            details: "This attribute indicates capacity of Mini Split AC in terms of the " +
                     "format defined by the ACCapacityFormat attribute",
            xref: { document: "cluster", section: "4.3.7.45" }
        },

        {
            tag: "attribute", id: 0x0042, name: "AcRefrigerantType",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
            details: "This attribute indicates type of refrigerant used within the Mini " +
                     "Split AC",
            xref: { document: "cluster", section: "4.3.7.46" }
        },

        {
            tag: "attribute", id: 0x0043, name: "AcCompressorType",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
            details: "This attribute indicates type of Compressor used within the Mini Split" +
                     " AC",
            xref: { document: "cluster", section: "4.3.7.47" }
        },

        {
            tag: "attribute", id: 0x0044, name: "AcErrorCode",
            access: "RW VM", conformance: "O", default: 0, type: "map32",
            details: "This attribute indicates the type of errors encountered within the " +
                     "Mini Split AC. Error values are reported with four bytes values. Each " +
                     "bit within the four bytes indicates the unique error",
            xref: { document: "cluster", section: "4.3.7.48" }
        },

        {
            tag: "attribute", id: 0x0045, name: "AcLouverPosition",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
            details: "This attribute indicates the position of Louver on the AC",
            xref: { document: "cluster", section: "4.3.7.49" }
        },

        {
            tag: "attribute", id: 0x0046, name: "AcCoilTemperature",
            access: "R V", conformance: "O", default: 32768, quality: "X", type: "int16",
            details: "This attribute represents the temperature of the AC coil, as measured " +
                     "locally or remotely (over the network",
            xref: { document: "cluster", section: "4.3.7.50" }
        },

        {
            tag: "attribute", id: 0x0047, name: "AcCapacityFormat",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N", type: "enum8",
            details: "This attribute specifies the format for the ACCapacity attribute",
            xref: { document: "cluster", section: "4.3.7.51" }
        },

        {
            tag: "command", id: 0x0000, name: "SetpointRaiseLower",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "4.3.8" },
            children: [
                {
                    tag: "datatype", name: "Mode",
                    conformance: "M", type: "SetpointAdjustMode"
                },

                {
                    tag: "datatype", name: "Amount",
                    conformance: "M", type: "int8"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "SetWeeklySchedule",
            access: "R M", conformance: "O", direction: "request",
            xref: { document: "cluster", section: "4.3.8" },
            children: [
                {
                    tag: "datatype", name: "NumberOfTransitionsForSequence",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "DayOfWeekForSequence",
                    conformance: "M", type: "DayOfWeek"
                },

                {
                    tag: "datatype", name: "ModeForSequence",
                    conformance: "M", type: "ModeForSequence"
                },

                {
                    tag: "datatype", name: "Transitions",
                    conformance: "M", type: "ThermostatScheduleTransition"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "GetWeeklySchedule",
            access: "O", conformance: "SCH", direction: "request", response: "GetWeeklyScheduleResponse",
            xref: { document: "cluster", section: "4.3.8" },
            children: [
                {
                    tag: "datatype", name: "DaysToReturn",
                    conformance: "M", type: "DayOfWeek"
                },

                {
                    tag: "datatype", name: "ModeToReturn",
                    conformance: "M", type: "ModeForSequence"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "ClearWeeklySchedule",
            access: "R M", conformance: "SCH", direction: "request",
            xref: { document: "cluster", section: "4.3.8" }
        },

        {
            tag: "command", id: 0x0004, name: "GetRelayStatusLog",
            access: "O", conformance: "O", direction: "request", response: "GetRelayStatusLogResponse",
            xref: { document: "cluster", section: "4.3.8" }
        },

        {
            tag: "command", id: 0x0000, name: "GetWeeklyScheduleResponse",
            conformance: "SCH", direction: "response",
            xref: { document: "cluster", section: "4.3.8" },
            children: [
                {
                    tag: "datatype", name: "NumberOfTransitionsForSequence",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "DayOfWeekForSequence",
                    conformance: "M", type: "DayOfWeek"
                },

                {
                    tag: "datatype", name: "ModeForSequence",
                    conformance: "M", type: "ModeForSequence"
                },

                {
                    tag: "datatype", name: "Transitions",
                    conformance: "M", type: "ThermostatScheduleTransition"
                }
            ]
        },

        {
            tag: "datatype", name: "ThermostatScheduleTransition",
            conformance: "M", type: "struct",
            details: "This represents a single transition in a Thermostat schedule",
            xref: { document: "cluster", section: "4.3.9.5" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "TransitionTime",
                    access: "RW", conformance: "M", constraint: "0 to 1439", default: 0, type: "uint16",
                    details: "This field represents the start time of the schedule transition during" +
                             " the associated day. The time will be represented by a 16 bits " +
                             "unsigned integer to designate the minutes since midnight. For example" +
                             ", 6am will be represented by 360 minutes since midnight and 11:30pm " +
                             "will be represented by 1410 minutes since midnight",
                    xref: { document: "cluster", section: "4.3.9.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "HeatSetpoint",
                    access: "RW", conformance: "M", default: 0, quality: "X", type: "int16",
                    details: "This field represents the heat setpoint to be applied at this " +
                             "associated transition start time",
                    xref: { document: "cluster", section: "4.3.9.6" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "CoolSetpoint",
                    access: "RW", conformance: "M", default: 0, quality: "X", type: "int16",
                    details: "This field represents the cool setpoint to be applied at this " +
                             "associated transition start time",
                    xref: { document: "cluster", section: "4.3.9.7" }
                }
            ]
        },

        {
            tag: "datatype", name: "ThermostatFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Heating",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Cooling",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Occupancy",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "ScheduleConfiguration",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "Setback",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "AutoMode",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DayOfWeek",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Sunday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Monday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Tuesday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Wednesday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "Thursday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "Friday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "Saturday",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0080, name: "Away",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ModeForSequence",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "HeatSetpointPresent",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "CoolSetpointPresent",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ThermostatSystemMode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Off",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Auto",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Cool",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Heat",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "EmergencyHeat",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Precooling",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "FanOnly",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Dry",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "Sleep",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ThermostatRunningMode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Off",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Cool",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Heat",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ThermostatControlSequence",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "CoolingOnly",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "CoolingWithReheat",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "HeatingOnly",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "HeatingWithReheat",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "CoolingAndHeating",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "CoolingAndHeatingWithReheat",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "SetpointAdjustMode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Heat",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Cool",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Both",
                    conformance: "M"
                }
            ]
        }
    ]
});
