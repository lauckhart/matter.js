/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0201, name: "Thermostat",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 6, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "HEAT",
                    conformance: "AUTO, O.a1+", description: "Thermostat is capable of managing a heating device",
                    xref: { document: "cluster", section: "4.3.3.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "COOL",
                    conformance: "AUTO, O.a1+", description: "Thermostat is capable of managing a cooling device",
                    xref: { document: "cluster", section: "4.3.3.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "OCC",
                    conformance: "O", description: "Supports Occupied and Unoccupied setpoints",
                    xref: { document: "cluster", section: "4.3.3.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "SCH",
                    conformance: "O", description: "Supports remote configuration of a weekly schedule of setpoint transitions",
                    xref: { document: "cluster", section: "4.3.3.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "SB",
                    conformance: "O", description: "Supports configurable setback (or span)",
                    xref: { document: "cluster", section: "4.3.3.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0005, name: "AUTO",
                    conformance: "O", description: "Supports a System Mode of Auto",
                    xref: { document: "cluster", section: "4.3.3.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0006, name: "LTNE",
                    conformance: "O", description: "Thermostat does not expose the LocalTemperature Value in the LocalTemperature attribute",
                    xref: { document: "cluster", section: "4.3.3.1", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "LocalTemperature", base: "temperature",
            access: "R V", conformance: "M", default: "null", quality: "X P",
            details: "This attribute indicates the current LocalTemperature value, when " +
                     "available. The value may be local, or remote, depending on the value " +
                     "of the RemoteSensing attribute when supported",
            xref: { document: "cluster", section: "4.3.7.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "OutdoorTemperature", base: "temperature",
            access: "R V", conformance: "O", default: "null", quality: "X",
            details: "This attribute represents the outdoor temperature, as measured locally" +
                     " or remotely (over the network",
            xref: { document: "cluster", section: "4.3.7.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "Occupancy", base: "map8",
            access: "R V", conformance: "O, CC", constraint: "desc", default: 1,
            details: "This attribute specifies whether the heated/cooled space is occupied " +
                     "or not, as measured locally or remotely (over the network). If bit 0" +
                     " = 1, the space is occupied, else it is unoccupied. All other bits are" +
                     " reserved",
            xref: { document: "cluster", section: "4.3.7.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "AbsMinHeatSetpointLimit", base: "temperature",
            access: "R V", conformance: "[HEAT]", constraint: "desc", default: "7°C", quality: "F",
            details: "This attribute specifies the absolute minimum level that the heating " +
                     "setpoint MAY be set to. This is a limitation imposed by the " +
                     "manufacturer",
            xref: { document: "cluster", section: "4.3.7.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "AbsMaxHeatSetpointLimit", base: "temperature",
            access: "R V", conformance: "[HEAT]", constraint: "desc", default: "30°C", quality: "F",
            details: "This attribute specifies the absolute maximum level that the heating " +
                     "setpoint MAY be set to. This is a limitation imposed by the " +
                     "manufacturer",
            xref: { document: "cluster", section: "4.3.7.6", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "AbsMinCoolSetpointLimit", base: "temperature",
            access: "R V", conformance: "[COOL]", constraint: "desc", default: "16°C", quality: "F",
            details: "This attribute specifies the absolute minimum level that the cooling " +
                     "setpoint MAY be set to. This is a limitation imposed by the " +
                     "manufacturer",
            xref: { document: "cluster", section: "4.3.7.7", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "AbsMaxCoolSetpointLimit", base: "temperature",
            access: "R V", conformance: "[COOL]", constraint: "desc", default: "32°C", quality: "F",
            details: "This attribute specifies the absolute maximum level that the cooling " +
                     "setpoint MAY be set to. This is a limitation imposed by the " +
                     "manufacturer",
            xref: { document: "cluster", section: "4.3.7.8", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "PiCoolingDemand", base: "uint8",
            access: "R V", conformance: "[COOL]", default: "-", quality: "P",
            details: "This attribute specifies the level of cooling demanded by the PI (" +
                     "proportional integral) control loop in use by the thermostat (if any" +
                     "), in percent. This value is 0 when the thermostat is in “off” or “" +
                     "heating” mode",
            xref: { document: "cluster", section: "4.3.7.9", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "PiHeatingDemand", base: "uint8",
            access: "R V", conformance: "[HEAT]", default: "-", quality: "P",
            details: "This attribute specifies the level of heating demanded by the PI loop " +
                     "in percent. This value is 0 when the thermostat is in “off” or “" +
                     "cooling” mode",
            xref: { document: "cluster", section: "4.3.7.10", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "HvacSystemTypeConfiguration", base: "map8",
            access: "R[W] VM", conformance: "D", constraint: "desc", default: 0, quality: "N",
            details: "This attribute specifies the HVAC system type controlled by the " +
                     "thermostat. If the thermostat uses physical DIP switches to set these " +
                     "parameters, this information SHALL be available read-only from the DIP" +
                     " switches. If these parameters are set via software, there SHALL be " +
                     "read/write access in order to provide remote programming capability. " +
                     "The meanings of individual bits are detailed below. Each bit " +
                     "represents a type of system configuration",
            xref: { document: "cluster", section: "4.3.7.11", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "LocalTemperatureCalibration", base: "temp-s8",
            access: "RW VM", conformance: "[!LTNE]", constraint: "-2.5 to 2.5", default: "0°C", quality: "N",
            details: "This attribute specifies the offset the Thermostat server SHALL make " +
                     "to the measured temperature (locally or remotely) to adjust the " +
                     "LocalTemperature Value prior to using, displaying or reporting it",
            xref: { document: "cluster", section: "4.3.7.12", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "OccupiedCoolingSetpoint", base: "temperature",
            access: "RW VO", conformance: "COOL", constraint: "desc", default: "26°C", quality: "N S",
            details: "This attribute specifies the cooling mode setpoint when the room is " +
                     "occupied",
            xref: { document: "cluster", section: "4.3.7.13", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "OccupiedHeatingSetpoint", base: "temperature",
            access: "RW VO", conformance: "HEAT", constraint: "desc", default: "20°C", quality: "N S",
            details: "This attribute specifies the heating mode setpoint when the room is " +
                     "occupied",
            xref: { document: "cluster", section: "4.3.7.14", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "UnoccupiedCoolingSetpoint", base: "temperature",
            access: "RW VO", conformance: "COOL & O, CC", constraint: "desc", default: "26°C", quality: "N",
            details: "This attribute specifies the cooling mode setpoint when the room is " +
                     "unoccupied",
            xref: { document: "cluster", section: "4.3.7.15", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0014, name: "UnoccupiedHeatingSetpoint", base: "temperature",
            access: "RW VO", conformance: "HEAT & O, CC", constraint: "desc", default: "20°C", quality: "N",
            details: "This attribute specifies the heating mode setpoint when the room is " +
                     "unoccupied",
            xref: { document: "cluster", section: "4.3.7.16", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0015, name: "MinHeatSetpointLimit", base: "temperature",
            access: "RW VM", conformance: "[HEAT]", constraint: "desc", default: "AbsMinHeatSetpointLimit", quality: "N",
            details: "This attribute specifies the minimum level that the heating setpoint " +
                     "MAY be set to",
            xref: { document: "cluster", section: "4.3.7.17", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0016, name: "MaxHeatSetpointLimit", base: "temperature",
            access: "RW VM", conformance: "[HEAT]", constraint: "desc", default: "AbsMaxHeatSetpointLimit", quality: "N",
            details: "This attribute specifies the maximum level that the heating setpoint " +
                     "MAY be set to",
            xref: { document: "cluster", section: "4.3.7.18", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0017, name: "MinCoolSetpointLimit", base: "temperature",
            access: "RW VM", conformance: "[COOL]", constraint: "desc", default: "AbsMinCoolSetpointLimit", quality: "N",
            details: "This attribute specifies the minimum level that the cooling setpoint " +
                     "MAY be set to",
            xref: { document: "cluster", section: "4.3.7.19", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0018, name: "MaxCoolSetpointLimit", base: "temperature",
            access: "RW VM", conformance: "[COOL]", constraint: "desc", default: "AbsMaxCoolSetpointLimit", quality: "N",
            details: "This attribute specifies the maximum level that the cooling setpoint " +
                     "MAY be set to",
            xref: { document: "cluster", section: "4.3.7.20", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0019, name: "MinSetpointDeadBand", base: "temp-s8",
            access: "R[W] VM", conformance: "AUTO", constraint: "0 to 2.5", default: "2.5°C", quality: "N",
            details: "On devices which support the AUTO feature, this attribute specifies " +
                     "the minimum difference between the Heat Setpoint and the Cool Setpoint",
            xref: { document: "cluster", section: "4.3.7.21", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001a, name: "RemoteSensing", base: "map8",
            access: "RW VM", conformance: "O", constraint: "0", default: 0, quality: "N",
            details: "This attribute indicates when the local temperature, outdoor " +
                     "temperature and occupancy are being sensed by remote networked sensors" +
                     ", rather than internal sensors",
            xref: { document: "cluster", section: "4.3.7.22", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001b, name: "ControlSequenceOfOperation", base: "enum8",
            access: "RW VM", conformance: "M", constraint: "desc", default: 4, quality: "N",
            details: "This attribute specifies the overall operating environment of the " +
                     "thermostat, and thus the possible system modes that the thermostat can" +
                     " operate in. It SHALL be set to one of the following values",
            xref: { document: "cluster", section: "4.3.7.23", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001c, name: "SystemMode", base: "enum8",
            access: "RW VM", conformance: "M", constraint: "desc", default: 1, quality: "N S",
            details: "This attribute specifies the current operating mode of the thermostat" +
                     ", It SHALL be set to one of the following values, as limited by the " +
                     "ControlSequenceOfOperation Attribute",
            xref: { document: "cluster", section: "4.3.7.24", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001d, name: "AlarmMask", base: "map8",
            access: "R V", conformance: "O", constraint: "desc", default: 0,
            details: "This attribute specifies whether each of the alarms listed below is " +
                     "enabled. When the bit number corresponding to the alarm code is set to" +
                     " 1, the alarm is enabled, else it is disabled. Bits not corresponding " +
                     "to a code in the table are reserved",
            xref: { document: "cluster", section: "4.3.7.25", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001e, name: "ThermostatRunningMode", base: "enum8",
            access: "R V", conformance: "[AUTO]", constraint: "desc", default: 0,
            xref: { document: "cluster", section: "4.3.7", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0020, name: "StartOfWeek", base: "enum8",
            access: "R V", conformance: "SCH", constraint: "desc", default: "–", quality: "F",
            details: "This attribute represents the day of the week that this thermostat " +
                     "considers to be the start of week for weekly set point scheduling",
            xref: { document: "cluster", section: "4.3.7.27", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0021, name: "NumberOfWeeklyTransitions", base: "uint8",
            access: "R V", conformance: "SCH", default: 0, quality: "F",
            details: "This attribute determines how many weekly schedule transitions the " +
                     "thermostat is capable of handling",
            xref: { document: "cluster", section: "4.3.7.28", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0022, name: "NumberOfDailyTransitions", base: "uint8",
            access: "R V", conformance: "SCH", default: 0, quality: "F",
            details: "This attribute determines how many daily schedule transitions the " +
                     "thermostat is capable of handling",
            xref: { document: "cluster", section: "4.3.7.29", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0023, name: "TemperatureSetpointHold", base: "enum8",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N",
            details: "This attribute specifies the temperature hold status on the thermostat" +
                     ". If hold status is on, the thermostat SHOULD maintain the temperature" +
                     " set point for the current mode until a system mode change. If hold " +
                     "status is off, the thermostat SHOULD follow the setpoint transitions " +
                     "specified by its internal scheduling program. If the thermostat " +
                     "supports setpoint hold for a specific duration, it SHOULD also " +
                     "implement the TemperatureSetpointHoldDuration attribute",
            xref: { document: "cluster", section: "4.3.7.30", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0024, name: "TemperatureSetpointHoldDuration", base: "uint16",
            access: "RW VM", conformance: "O", constraint: "0 to 1440", default: "null", quality: "X N",
            details: "This attribute sets the period in minutes for which a setpoint hold is" +
                     " active. Thermostats that support hold for a specified duration SHOULD" +
                     " implement this attribute. The null value indicates the field is " +
                     "unused. All other values are reserved",
            xref: { document: "cluster", section: "4.3.7.31", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0025, name: "ThermostatProgrammingOperationMode", base: "map8",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "P",
            details: "This attribute determines the operational state of the thermostat’s " +
                     "programming. The thermostat SHALL modify its programming operation " +
                     "when this attribute is modified by a client and update this attribute " +
                     "when its programming operation is modified locally by a user. The " +
                     "thermostat MAY support more than one active " +
                     "ThermostatProgrammingOperationMode. For example, the thermostat MAY " +
                     "operate simultaneously in Schedule Programming Mode and Recovery Mode",
            xref: { document: "cluster", section: "4.3.7.32", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0029, name: "ThermostatRunningState", base: "map16",
            access: "R V", conformance: "O", constraint: "desc", default: "-",
            details: "This attribute represents the current relay state of the heat, cool, " +
                     "and fan relays",
            xref: { document: "cluster", section: "4.3.7.33", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0030, name: "SetpointChangeSource", base: "enum8",
            access: "R V", conformance: "O", constraint: "desc", default: 0,
            details: "This attribute specifies the source of the current active " +
                     "OccupiedCoolingSetpoint or OccupiedHeatingSetpoint (i.e., who or what " +
                     "determined the current setpoint",
            xref: { document: "cluster", section: "4.3.7.34", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0031, name: "SetpointChangeAmount", base: "temp-diff",
            access: "R V", conformance: "O", default: "null", quality: "X",
            details: "This attribute specifies the delta between the current active " +
                     "OccupiedCoolingSetpoint or OccupiedHeatingSetpoint and the previous " +
                     "active setpoint. This attribute is meant to accompany the " +
                     "SetpointChangeSource attribute; devices implementing " +
                     "SetpointChangeAmount SHOULD also implement SetpointChangeSource",
            xref: { document: "cluster", section: "4.3.7.35", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0032, name: "SetpointChangeSourceTimestamp", base: "utc",
            access: "R V", conformance: "O", default: 0,
            details: "This attribute specifies the time in UTC at which the " +
                     "SetpointChangeSourceAmount attribute change was recorded",
            xref: { document: "cluster", section: "4.3.7.36", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0034, name: "OccupiedSetback", base: "temp-u8",
            access: "RW VM", conformance: "SB", constraint: "OccupiedSetbackMin to OccupiedSetbackMax", default: "null", quality: "X N",
            details: "This attribute specifies the amount that the Thermostat server will " +
                     "allow the LocalTemperature Value to float above the OccupiedCooling " +
                     "setpoint (i.e., OccupiedCooling + OccupiedSetback) or below the " +
                     "OccupiedHeating setpoint (i.e., OccupiedHeating – OccupiedSetback) " +
                     "before initiating a state change to bring the temperature back to the " +
                     "user’s desired setpoint. This attribute is sometimes also referred to " +
                     "as the “span",
            xref: { document: "cluster", section: "4.3.7.37", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0035, name: "OccupiedSetbackMin", base: "temp-u8",
            access: "R V", conformance: "SB", constraint: "0 to OccupiedSetbackMax", default: "null", quality: "X F",
            details: "This attribute specifies the minimum value that the Thermostat server " +
                     "will allow the OccupiedSetback attribute to be configured by a user",
            xref: { document: "cluster", section: "4.3.7.38", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0036, name: "OccupiedSetbackMax", base: "temp-u8",
            access: "R V", conformance: "SB", constraint: "OccupiedSetbackMin to 25.4", default: "null", quality: "X F",
            details: "This attribute specifies the maximum value that the Thermostat server " +
                     "will allow the OccupiedSetback attribute to be configured by a user",
            xref: { document: "cluster", section: "4.3.7.39", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0037, name: "UnoccupiedSetback", base: "temp-u8",
            access: "RW VM", conformance: "SB & O, CC", constraint: "UnoccupiedSetbackMin to UnoccupiedSetbackMax", default: "null", quality: "X N",
            details: "This attribute specifies the amount that the Thermostat server will " +
                     "allow the LocalTemperature Value to float above the UnoccupiedCooling " +
                     "setpoint (i.e., UnoccupiedCooling + UnoccupiedSetback) or below the " +
                     "UnoccupiedHeating setpoint (i.e., UnoccupiedHeating - " +
                     "UnoccupiedSetback) before initiating a state change to bring the " +
                     "temperature back to the user’s desired setpoint. This attribute is " +
                     "sometimes also referred to as the “span",
            xref: { document: "cluster", section: "4.3.7.40", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0038, name: "UnoccupiedSetbackMin", base: "temp-u8",
            access: "R V", conformance: "SB & O, CC", constraint: "0 to UnoccupiedSetbackMax", default: "null", quality: "X F",
            details: "This attribute specifies the minimum value that the Thermostat server " +
                     "will allow the UnoccupiedSetback attribute to be configured by a user",
            xref: { document: "cluster", section: "4.3.7.41", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0039, name: "UnoccupiedSetbackMax", base: "temp-u8",
            access: "R V", conformance: "SB & O, CC", constraint: "UnoccupiedSetbackMin to 25.4", default: "null", quality: "X F",
            details: "This attribute specifies the maximum value that the Thermostat server " +
                     "will allow the UnoccupiedSetback attribute to be configured by a user",
            xref: { document: "cluster", section: "4.3.7.42", version: "1.1" }
        }),

        AttributeElement({
            id: 0x003a, name: "EmergencyHeatDelta", base: "temp-u8",
            access: "RW VM", conformance: "O", default: "25.5°C", quality: "N",
            details: "This attribute specifies the delta between the LocalTemperature Value " +
                     "and the OccupiedHeatingSetpoint or UnoccupiedHeatingSetpoint " +
                     "attributes at which the Thermostat server will operate in emergency " +
                     "heat mode",
            xref: { document: "cluster", section: "4.3.7.43", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0040, name: "AcType", base: "enum8",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N",
            details: "This attribute indicates the type of Mini Split ACType of Mini Split " +
                     "AC is defined depending on how Cooling and Heating condition is " +
                     "achieved by Mini Split AC",
            xref: { document: "cluster", section: "4.3.7.44", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0041, name: "AcCapacity", base: "uint16",
            access: "RW VM", conformance: "O", default: 0, quality: "N",
            details: "This attribute indicates capacity of Mini Split AC in terms of the " +
                     "format defined by the ACCapacityFormat attribute",
            xref: { document: "cluster", section: "4.3.7.45", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0042, name: "AcRefrigerantType", base: "enum8",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N",
            details: "This attribute indicates type of refrigerant used within the Mini " +
                     "Split AC",
            xref: { document: "cluster", section: "4.3.7.46", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0043, name: "AcCompressorType", base: "enum8",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N",
            details: "This attribute indicates type of Compressor used within the Mini Split" +
                     " AC",
            xref: { document: "cluster", section: "4.3.7.47", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0044, name: "AcErrorCode", base: "map32",
            access: "RW VM", conformance: "O", default: 0,
            details: "This attribute indicates the type of errors encountered within the " +
                     "Mini Split AC. Error values are reported with four bytes values. Each " +
                     "bit within the four bytes indicates the unique error",
            xref: { document: "cluster", section: "4.3.7.48", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0045, name: "AcLouverPosition", base: "enum8",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N",
            details: "This attribute indicates the position of Louver on the AC",
            xref: { document: "cluster", section: "4.3.7.49", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0046, name: "AcCoilTemperature", base: "temperature",
            access: "R V", conformance: "O", default: "null", quality: "X",
            details: "This attribute represents the temperature of the AC coil, as measured " +
                     "locally or remotely (over the network",
            xref: { document: "cluster", section: "4.3.7.50", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0047, name: "AcCapacityFormat", base: "enum8",
            access: "RW VM", conformance: "O", constraint: "desc", default: 0, quality: "N",
            details: "This attribute specifies the format for the ACCapacity attribute",
            xref: { document: "cluster", section: "4.3.7.51", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "SetpointRaiseLower",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "4.3.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "SetWeeklySchedule",
            access: "M", conformance: "SCH", direction: "request", response: "status",
            xref: { document: "cluster", section: "4.3.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "GetWeeklySchedule",
            access: "O", conformance: "SCH", direction: "request", response: "GetWeeklyScheduleResponse",
            xref: { document: "cluster", section: "4.3.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "ClearWeeklySchedule",
            access: "M", conformance: "SCH", direction: "request",
            xref: { document: "cluster", section: "4.3.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "GetRelayStatusLog",
            access: "O", conformance: "O", direction: "request", response: "GetRelayStatusLogResponse",
            xref: { document: "cluster", section: "4.3.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "GetWeeklyScheduleResponse",
            conformance: "SCH", direction: "response",
            xref: { document: "cluster", section: "4.3.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "GetRelayStatusLogResponse",
            conformance: "O", direction: "response",
            xref: { document: "cluster", section: "4.3.8", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "ThermostatScheduleTransition", base: "struct",
            details: "This represents a single transition in a Thermostat schedule",
            xref: { document: "cluster", section: "4.3.9.5", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "TransitionTime", base: "uint16",
                    access: "RW", conformance: "M", constraint: "0 to 1439", default: 0,
                    details: "This field represents the start time of the schedule transition during" +
                             " the associated day. The time will be represented by a 16 bits " +
                             "unsigned integer to designate the minutes since midnight. For example" +
                             ", 6am will be represented by 360 minutes since midnight and 11:30pm " +
                             "will be represented by 1410 minutes since midnight",
                    xref: { document: "cluster", section: "4.3.9.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "HeatSetpoint", base: "temperature",
                    access: "RW", conformance: "M", default: "",
                    details: "This field represents the heat setpoint to be applied at this " +
                             "associated transition start time",
                    xref: { document: "cluster", section: "4.3.9.6", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "CoolSetpoint", base: "temperature",
                    access: "RW", conformance: "M", default: "",
                    details: "This field represents the cool setpoint to be applied at this " +
                             "associated transition start time",
                    xref: { document: "cluster", section: "4.3.9.7", version: "1.1" }
                })
            ]
        })
    ]
}));
