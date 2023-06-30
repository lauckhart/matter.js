/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "PumpConfigurationAndControl", id: 0x200, classification: "application",
    description: "Pump Configuration and Control",
    details: "An interface for configuring and controlling pumps.",
    xref: { document: "cluster", section: "4.2" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "4.2.4" },

            children: [
                {
                    tag: "datatype", name: "PRSCONST", id: 0x0, conformance: "O.a+", description: "ConstantPressure",
                    details: "Supports operating in constant pressure mode"
                },
                {
                    tag: "datatype", name: "PRSCOMP", id: 0x1, conformance: "O.a+", description: "CompensatedPressure",
                    details: "Supports operating in compensated pressure mode"
                },
                {
                    tag: "datatype", name: "FLW", id: 0x2, conformance: "O.a+", description: "ConstantFlow",
                    details: "Supports operating in constant flow mode"
                },
                {
                    tag: "datatype", name: "SPD", id: 0x3, conformance: "O.a+", description: "ConstantSpeed",
                    details: "Supports operating in constant speed mode"
                },
                {
                    tag: "datatype", name: "TEMP", id: 0x4, conformance: "O.a+", description: "ConstantTemperature",
                    details: "Supports operating in constant temperature mode"
                },
                {
                    tag: "datatype", name: "AUTO", id: 0x5, conformance: "O", description: "Automatic",
                    details: "Supports operating in automatic mode"
                },
                {
                    tag: "datatype", name: "LOCAL", id: 0x6, conformance: "O", description: "LocalOperation",
                    details: "Supports operating using local settings"
                }
            ]
        },

        {
            tag: "attribute", name: "MaxPressure", id: 0x0, type: "int16", access: "R V", conformance: "M",
            default: null, quality: "X F",
            details: "This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and " +
                     "does not apply to any specific control mode or operation mode.",
            xref: { document: "cluster", section: "4.2.7.1" }
        },

        {
            tag: "attribute", name: "MaxSpeed", id: 0x1, type: "uint16", access: "R V", conformance: "M",
            default: null, quality: "X F",
            details: "This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does " +
                     "not apply to any specific control mode or operation mode.",
            xref: { document: "cluster", section: "4.2.7.2" }
        },

        {
            tag: "attribute", name: "MaxFlow", id: 0x2, type: "uint16", access: "R V", conformance: "M",
            default: null, quality: "X F",
            details: "This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does " +
                     "not apply to any specific control mode or operation mode.",
            xref: { document: "cluster", section: "4.2.7.3" }
        },

        {
            tag: "attribute", name: "MinConstPressure", id: 0x3, type: "int16", access: "R V",
            conformance: "PRSCONST, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the minimum pressure the pump can achieve when it is working with the " +
                     "ControlMode attribute set to ConstantPressure.",
            xref: { document: "cluster", section: "4.2.7.4" }
        },

        {
            tag: "attribute", name: "MaxConstPressure", id: 0x4, type: "int16", access: "R V",
            conformance: "PRSCONST, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the maximum pressure the pump can achieve when it is working with the " +
                     "ControlMode attribute set to ConstantPressure.",
            xref: { document: "cluster", section: "4.2.7.5" }
        },

        {
            tag: "attribute", name: "MinCompPressure", id: 0x5, type: "int16", access: "R V",
            conformance: "PRSCOMP, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the minimum compensated pressure the pump can achieve when it is working " +
                     "with the ControlMode attribute set to ProportionalPressure.",
            xref: { document: "cluster", section: "4.2.7.6" }
        },

        {
            tag: "attribute", name: "MaxCompPressure", id: 0x6, type: "int16", access: "R V",
            conformance: "PRSCOMP, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the maximum compensated pressure the pump can achieve when it is working " +
                     "with the ControlMode attribute set to ProportionalPressure.",
            xref: { document: "cluster", section: "4.2.7.7" }
        },

        {
            tag: "attribute", name: "MinConstSpeed", id: 0x7, type: "uint16", access: "R V",
            conformance: "SPD, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the minimum speed the pump can achieve when it is working with the " +
                     "ControlMode attribute set to ConstantSpeed.",
            xref: { document: "cluster", section: "4.2.7.8" }
        },

        {
            tag: "attribute", name: "MaxConstSpeed", id: 0x8, type: "uint16", access: "R V",
            conformance: "SPD, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the maximum speed the pump can achieve when it is working with the " +
                     "ControlMode attribute set to ConstantSpeed.",
            xref: { document: "cluster", section: "4.2.7.9" }
        },

        {
            tag: "attribute", name: "MinConstFlow", id: 0x9, type: "uint16", access: "R V",
            conformance: "FLW, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the minimum flow the pump can achieve when it is working with the Con",
            xref: { document: "cluster", section: "4.2.7.10" }
        },

        {
            tag: "attribute", name: "MaxConstFlow", id: 0xa, type: "uint16", access: "R V",
            conformance: "FLW, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the maximum flow the pump can achieve when it is working with the " +
                     "ControlMode attribute set to ConstantFlow.",
            xref: { document: "cluster", section: "4.2.7.11" }
        },

        {
            tag: "attribute", name: "MinConstTemp", id: 0xb, type: "int16", access: "R V",
            conformance: "TEMP, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the minimum temperature the pump can maintain in the system when it is " +
                     "working with the ControlMode attribute set to ConstantTemperature.",
            xref: { document: "cluster", section: "4.2.7.12" }
        },

        {
            tag: "attribute", name: "MaxConstTemp", id: 0xc, type: "int16", access: "R V",
            conformance: "TEMP, [AUTO]", default: null, quality: "X F",
            details: "This attribute specifies the maximum temperature the pump can maintain in the system when it is " +
                     "working with the ControlMode attribute set to ConstantTemperature.",
            xref: { document: "cluster", section: "4.2.7.13" }
        },

        {
            tag: "attribute", name: "PumpStatus", id: 0x10, type: "PumpStatusBitmap", access: "R V",
            conformance: "O", constraint: "desc", quality: "P",
            details: "This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. " +
                     "Where a pump controller function is active, the corresponding bit SHALL be set to 1. Where a pump " +
                     "controller function is not active, the corresponding bit SHALL be set to 0.",
            xref: { document: "cluster", section: "4.2.7.14" }
        },

        {
            tag: "attribute", name: "EffectiveOperationMode", id: 0x11, type: "OperationModeEnum",
            access: "R V", conformance: "M", constraint: "desc", quality: "N",
            details: "This attribute specifies current effective operation mode of the pump as defined in " +
                     "OperationModeEnum.",
            xref: { document: "cluster", section: "4.2.7.15" }
        },

        {
            tag: "attribute", name: "EffectiveControlMode", id: 0x12, type: "ControlModeEnum", access: "R V",
            conformance: "M", constraint: "desc", quality: "N",
            details: "This attribute specifies the current effective control mode of the pump as defined in " +
                     "ControlModeEnum.",
            xref: { document: "cluster", section: "4.2.7.16" }
        },

        {
            tag: "attribute", name: "Capacity", id: 0x13, type: "int16", access: "R V", conformance: "M",
            default: null, quality: "X P",
            details: "This attribute specifies the actual capacity of the pump as a percentage of the effective maximum " +
                     "setpoint value. It is updated dynamically as the speed of the pump changes.",
            xref: { document: "cluster", section: "4.2.7.17" }
        },

        {
            tag: "attribute", name: "Speed", id: 0x14, type: "uint16", access: "R V", conformance: "O",
            default: null, quality: "X",
            details: "This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as " +
                     "the speed of the pump changes.",
            xref: { document: "cluster", section: "4.2.7.18" }
        },

        {
            tag: "attribute", name: "LifetimeRunningHours", id: 0x15, type: "uint24", access: "RW VM",
            conformance: "O", quality: "X N",
            details: "This attribute specifies the accumulated number of hours that the pump has been powered and the " +
                     "motor has been running. It is updated dynamically as it increases. It is preserved over power " +
                     "cycles of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at " +
                     "0 (zero).",
            xref: { document: "cluster", section: "4.2.7.19" }
        },

        {
            tag: "attribute", name: "Power", id: 0x16, type: "uint24", access: "R V", conformance: "O",
            default: null, quality: "X",
            details: "This attribute specifies the actual power consumption of the pump in Watts. The value of this " +
                     "attribute is updated dynamically as the power consumption of the pump changes.",
            xref: { document: "cluster", section: "4.2.7.20" }
        },

        {
            tag: "attribute", name: "LifetimeEnergyConsumed", id: 0x17, type: "uint32", access: "RW VM",
            conformance: "O", quality: "X N",
            details: "This attribute specifies the accumulated energy consumption of the pump through the entire lifetime " +
                     "of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the " +
                     "energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it " +
                     "“rolls over” and starts at 0 (zero).",
            xref: { document: "cluster", section: "4.2.7.21" }
        },

        {
            tag: "attribute", name: "OperationMode", id: 0x20, type: "OperationModeEnum", access: "RW VM",
            conformance: "M", constraint: "desc", quality: "N",
            details: "This attribute specifies the operation mode of the pump as defined in OperationModeEnum.",
            xref: { document: "cluster", section: "4.2.7.22" }
        },

        {
            tag: "attribute", name: "ControlMode", id: 0x21, type: "ControlModeEnum", access: "RW VM",
            conformance: "O", constraint: "desc", quality: "N",
            details: "This attribute specifies the control mode of the pump as defined in ControlModeEnum.",
            xref: { document: "cluster", section: "4.2.7.23" }
        },

        {
            tag: "attribute", name: "AlarmMask", id: 0x22, type: "map16", access: "R V", conformance: "D",
            constraint: "desc", quality: "N",
            xref: { document: "cluster", section: "4.2.7" }
        },
        {
            tag: "event", name: "SupplyVoltageLow", id: 0x0, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "SupplyVoltageHigh", id: 0x1, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "PowerMissingPhase", id: 0x2, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "SystemPressureLow", id: 0x3, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "SystemPressureHigh", id: 0x4, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "DryRunning", id: 0x5, access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "MotorTemperatureHigh", id: 0x6, access: "V", conformance: "O",
            priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "PumpMotorFatalFailure", id: 0x7, access: "V", conformance: "O",
            priority: "critical",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "ElectronicTemperatureHigh", id: 0x8, access: "V", conformance: "O",
            priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "PumpBlocked", id: 0x9, access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "SensorFailure", id: 0xa, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "ElectronicNonFatalFailure", id: 0xb, access: "V", conformance: "O",
            priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "ElectronicFatalFailure", id: 0xc, access: "V", conformance: "O",
            priority: "critical",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "GeneralFault", id: 0xd, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "Leakage", id: 0xe, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "AirDetection", id: 0xf, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },
        {
            tag: "event", name: "TurbineOperation", id: 0x10, access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "datatype", name: "PumpStatusBitmap", type: "map16", conformance: "M",
            details: "This data type is derived from map16.",
            xref: { document: "cluster", section: "4.2.6.1" },

            children: [
                {
                    tag: "datatype", name: "DeviceFault", id: 0x0,
                    description: "A fault related to the system or pump device is detected.",
                    details: "If this bit is set, it MAY correspond to an event in the range 2-16, see Events.",
                    xref: { document: "cluster", section: "4.2.6.1.1" }
                },

                {
                    tag: "datatype", name: "SupplyFault", id: 0x1, conformance: "M",
                    description: "A fault related to the supply to the pump is detected.",
                    details: "If this bit is set, it MAY correspond to an event in the range 0-1 or 13, see Events.",
                    xref: { document: "cluster", section: "4.2.6.1.2" }
                },

                {
                    tag: "datatype", name: "SpeedLow", id: 0x2, conformance: "M",
                    description: "Setpoint is too low to achieve."
                },
                { tag: "datatype", name: "SpeedHigh", id: 0x3, description: "Setpoint is too high to achieve." },

                {
                    tag: "datatype", name: "LocalOverride", id: 0x10, conformance: "M",
                    description: "Device control is overridden by hardware, such as an external STOP button or via a local HMI.",
                    details: "While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing " +
                             "OperationMode SHALL generate a FAILURE error status until LocalOverride is cleared on the physical " +
                             "device. When LocalOverride is cleared, the device SHALL return to the operation mode set in " +
                             "OperationMode.",
                    xref: { document: "cluster", section: "4.2.6.1.3" }
                },

                {
                    tag: "datatype", name: "Running", id: 0x20, conformance: "M",
                    description: "Pump is currently running"
                },

                {
                    tag: "datatype", name: "RemotePressure", id: 0x40, conformance: "M",
                    description: "A remote pressure sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is " +
                             "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                             "MaxMeasuredValue]).",
                    xref: { document: "cluster", section: "4.2.6.1.4" }
                },

                {
                    tag: "datatype", name: "RemoteFlow", id: 0x80, conformance: "M",
                    description: "A remote flow sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is " +
                             "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                             "MaxMeasuredValue]).",
                    xref: { document: "cluster", section: "4.2.6.1.5" }
                },

                {
                    tag: "datatype", name: "RemoteTemperature", id: 0x100, conformance: "M",
                    description: "A remote temperature sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is " +
                             "interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – " +
                             "MaxMeasuredValue])",
                    xref: { document: "cluster", section: "4.2.6.1.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "OperationModeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "cluster", section: "4.2.6.2" },

            children: [
                {
                    tag: "datatype", name: "Normal", id: 0x0, conformance: "M",
                    details: "If the pump is running in this operation mode the setpoint is an internal variable which MAY be " +
                             "controlled between 0% and 100%, e.g., by means of the Level Control cluster",
                    xref: { document: "cluster", section: "4.2.6.2.1" }
                },

                { tag: "datatype", name: "Minimum", id: 0x1, conformance: "SPD" },
                { tag: "datatype", name: "Maximum", id: 0x2, conformance: "SPD" },
                { tag: "datatype", name: "Local", id: 0x3, conformance: "LOCAL" }
            ]
        },

        {
            tag: "datatype", name: "ControlModeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "cluster", section: "4.2.6.3" },

            children: [
                {
                    tag: "datatype", name: "ConstantSpeed", id: 0x0, conformance: "SPD",
                    details: "The setpoint is interpreted as a percentage of the range derived from the [MinConstSpeed – " +
                             "MaxConstSpeed] attributes.",
                    xref: { document: "cluster", section: "4.2.6.3.1" }
                },

                {
                    tag: "datatype", name: "ConstantPressure", id: 0x1, conformance: "PRSCONST",
                    details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                             "In case of the internal pressure sensor, this will be the range derived from the [MinConstPressure " +
                             "– MaxConstPressure] attributes. In case of a remote pressure sensor, this will be the range derived " +
                             "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote pressure sensor.",
                    xref: { document: "cluster", section: "4.2.6.3.2" }
                },

                {
                    tag: "datatype", name: "ProportionalPressure", id: 0x2, conformance: "PRSCOMP",
                    details: "The setpoint is interpreted as a percentage of the range derived of the [MinCompPressure – " +
                             "MaxCompPressure] attributes. The internal setpoint will be lowered (compensated) dependent on the " +
                             "flow in the pump (lower flow ⇒ lower internal setpoint).",
                    xref: { document: "cluster", section: "4.2.6.3.3" }
                },

                {
                    tag: "datatype", name: "ConstantFlow", id: 0x3, conformance: "FLW",
                    details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                             "In case of the internal flow sensor, this will be the range derived from the [MinConstFlow – " +
                             "MaxConstFlow] attributes. In case of a remote flow sensor, this will be the range derived from the " +
                             "[MinMeasuredValue – MaxMeasuredValue] attributes of the remote flow sensor.",
                    xref: { document: "cluster", section: "4.2.6.3.4" }
                },

                {
                    tag: "datatype", name: "ConstantTemperature", id: 0x5, conformance: "TEMP",
                    details: "The setpoint is interpreted as a percentage of the range of the sensor used for this control mode. " +
                             "In case of the internal temperature sensor, this will be the range derived from the [MinConstTemp – " +
                             "MaxConstTemp] attributes. In case of a remote temperature sensor, this will be the range derived " +
                             "from the [MinMeasuredValue – MaxMeasuredValue] attributes of the remote temperature sensor.",
                    xref: { document: "cluster", section: "4.2.6.3.5" }
                },

                {
                    tag: "datatype", name: "Automatic", id: 0x7, conformance: "AUTO",
                    details: "This behavior is manufacturer defined. The pump can be stopped by setting the setpoint of the level " +
                             "control cluster to 0, or by using the On/Off cluster. If the pump is started (at any setpoint), the " +
                             "speed of the pump is entirely determined by the pump.",
                    xref: { document: "cluster", section: "4.2.6.3.6" }
                }
            ]
        }
    ]
});