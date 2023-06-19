/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0200, name: "PumpConfigurationandControl",
    classification: "application", description: "Pump Configuration and Control",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "MaxPressure",
            access: "R V", conformance: "M", default: undefined, quality: "X F", type: "int16",
            details: "This attribute specifies the maximum pressure the pump can achieve. It" +
                     " is a physical limit, and does not apply to any specific control mode " +
                     "or operation mode",
            xref: { document: "cluster", section: "4.2.7.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "MaxSpeed",
            access: "R V", conformance: "M", default: undefined, quality: "X F", type: "uint16",
            details: "This attribute specifies the maximum speed the pump can achieve. It is" +
                     " a physical limit, and does not apply to any specific control mode or " +
                     "operation mode",
            xref: { document: "cluster", section: "4.2.7.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "MaxFlow",
            access: "R V", conformance: "M", default: undefined, quality: "X F", type: "uint16",
            details: "This attribute specifies the maximum flow the pump can achieve. It is " +
                     "a physical limit, and does not apply to any specific control mode or " +
                     "operation mode",
            xref: { document: "cluster", section: "4.2.7.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "MinConstPressure",
            access: "R V", conformance: "P, RSCONST, [AUTO]", default: undefined, quality: "X F", type: "int16",
            details: "This attribute specifies the minimum pressure the pump can achieve " +
                     "when it is working with the ControlMode attribute set to " +
                     "ConstantPressure",
            xref: { document: "cluster", section: "4.2.7.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "MaxConstPressure",
            access: "R V", conformance: "P, RSCONST, [AUTO]", default: undefined, quality: "X F", type: "int16",
            details: "This attribute specifies the maximum pressure the pump can achieve " +
                     "when it is working with the ControlMode attribute set to " +
                     "ConstantPressure",
            xref: { document: "cluster", section: "4.2.7.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "MinCompPressure",
            access: "R V", conformance: "P, RSCOMP, [AUTO]", default: undefined, quality: "X F", type: "int16",
            details: "This attribute specifies the minimum compensated pressure the pump can" +
                     " achieve when it is working with the ControlMode attribute set to " +
                     "ProportionalPressure",
            xref: { document: "cluster", section: "4.2.7.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "MaxCompPressure",
            access: "R V", conformance: "P, RSCOMP, [AUTO]", default: undefined, quality: "X F", type: "int16",
            details: "This attribute specifies the maximum compensated pressure the pump can" +
                     " achieve when it is working with the ControlMode attribute set to " +
                     "ProportionalPressure",
            xref: { document: "cluster", section: "4.2.7.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "MinConstSpeed",
            access: "R V", conformance: "SPD, [AUTO]", default: undefined, quality: "X F", type: "uint16",
            details: "This attribute specifies the minimum speed the pump can achieve when " +
                     "it is working with the ControlMode attribute set to ConstantSpeed",
            xref: { document: "cluster", section: "4.2.7.8" }
        },

        {
            tag: "attribute", id: 0x0008, name: "MaxConstSpeed",
            access: "R V", conformance: "SPD, [AUTO]", default: undefined, quality: "X F", type: "uint16",
            details: "This attribute specifies the maximum speed the pump can achieve when " +
                     "it is working with the ControlMode attribute set to ConstantSpeed",
            xref: { document: "cluster", section: "4.2.7.9" }
        },

        {
            tag: "attribute", id: 0x0009, name: "MinConstFlow",
            access: "R V", conformance: "FLW, [AUTO]", default: undefined, quality: "X F", type: "uint16",
            details: "This attribute specifies the minimum flow the pump can achieve when it" +
                     " is working with the Con",
            xref: { document: "cluster", section: "4.2.7.10" }
        },

        {
            tag: "attribute", id: 0x000a, name: "MaxConstFlow",
            access: "R V", conformance: "FLW, [AUTO]", default: undefined, quality: "X F", type: "uint16",
            details: "This attribute specifies the maximum flow the pump can achieve when it" +
                     " is working with the ControlMode attribute set to ConstantFlow",
            xref: { document: "cluster", section: "4.2.7.11" }
        },

        {
            tag: "attribute", id: 0x000b, name: "MinConstTemp",
            access: "R V", conformance: "TEMP, [AUTO]", default: undefined, quality: "X F", type: "int16",
            details: "This attribute specifies the minimum temperature the pump can maintain" +
                     " in the system when it is working with the ControlMode attribute set " +
                     "to ConstantTemperature",
            xref: { document: "cluster", section: "4.2.7.12" }
        },

        {
            tag: "attribute", id: 0x000c, name: "MaxConstTemp",
            access: "R V", conformance: "TEMP, [AUTO]", default: undefined, quality: "X F", type: "int16",
            details: "This attribute specifies the maximum temperature the pump can maintain" +
                     " in the system when it is working with the ControlMode attribute set " +
                     "to ConstantTemperature",
            xref: { document: "cluster", section: "4.2.7.13" }
        },

        {
            tag: "attribute", id: 0x0010, name: "PumpStatus",
            access: "R V", conformance: "O", constraint: "desc", default: undefined, quality: "P", type: "PumpStatusBitmap",
            details: "This attribute specifies the activity status of the pump functions as " +
                     "listed in PumpStatusBitmap. Where a pump controller function is active" +
                     ", the corresponding bit SHALL be set to 1. Where a pump controller " +
                     "function is not active, the corresponding bit SHALL be set to 0",
            xref: { document: "cluster", section: "4.2.7.14" }
        },

        {
            tag: "attribute", id: 0x0011, name: "EffectiveOperationMode",
            access: "R V", conformance: "M", constraint: "desc", default: "desc", quality: "N", type: "OperationModeEnum",
            details: "This attribute specifies current effective operation mode of the pump " +
                     "as defined in OperationModeEnum",
            xref: { document: "cluster", section: "4.2.7.15" }
        },

        {
            tag: "attribute", id: 0x0012, name: "EffectiveControlMode",
            access: "R V", conformance: "M", constraint: "desc", default: "desc", quality: "N", type: "ControlModeEnum",
            details: "This attribute specifies the current effective control mode of the " +
                     "pump as defined in ControlModeEnum",
            xref: { document: "cluster", section: "4.2.7.16" }
        },

        {
            tag: "attribute", id: 0x0013, name: "Capacity",
            access: "R V", conformance: "M", default: undefined, quality: "X P", type: "int16",
            details: "This attribute specifies the actual capacity of the pump as a " +
                     "percentage of the effective maximum setpoint value. It is updated " +
                     "dynamically as the speed of the pump changes",
            xref: { document: "cluster", section: "4.2.7.17" }
        },

        {
            tag: "attribute", id: 0x0014, name: "Speed",
            access: "R V", conformance: "O", default: undefined, quality: "X", type: "uint16",
            details: "This attribute specifies the actual speed of the pump measured in RPM" +
                     ". It is updated dynamically as the speed of the pump changes",
            xref: { document: "cluster", section: "4.2.7.18" }
        },

        {
            tag: "attribute", id: 0x0015, name: "LifetimeRunningHours",
            access: "RW VM", conformance: "O", default: undefined, quality: "X N", type: "uint24",
            details: "This attribute specifies the accumulated number of hours that the pump" +
                     " has been powered and the motor has been running. It is updated " +
                     "dynamically as it increases. It is preserved over power cycles of the " +
                     "pump. If LifeTimeRunningHours rises above maximum value it “rolls over" +
                     "” and starts at 0 (zero",
            xref: { document: "cluster", section: "4.2.7.19" }
        },

        {
            tag: "attribute", id: 0x0016, name: "Power",
            access: "R V", conformance: "O", default: undefined, quality: "X", type: "uint24",
            details: "This attribute specifies the actual power consumption of the pump in " +
                     "Watts. The value of this attribute is updated dynamically as the power" +
                     " consumption of the pump changes",
            xref: { document: "cluster", section: "4.2.7.20" }
        },

        {
            tag: "attribute", id: 0x0017, name: "LifetimeEnergyConsumed",
            access: "RW VM", conformance: "O", default: undefined, quality: "X N", type: "uint32",
            details: "This attribute specifies the accumulated energy consumption of the " +
                     "pump through the entire lifetime of the pump in kWh. The value of the " +
                     "LifetimeEnergyConsumed attribute is updated dynamically as the energy " +
                     "consumption of the pump increases. If LifetimeEnergyConsumed rises " +
                     "above maximum value it “rolls over” and starts at 0 (zero",
            xref: { document: "cluster", section: "4.2.7.21" }
        },

        {
            tag: "attribute", id: 0x0020, name: "OperationMode",
            access: "RW VM", conformance: "M", constraint: "desc", default: undefined, quality: "N", type: "OperationModeEnum",
            details: "This attribute specifies the operation mode of the pump as defined in " +
                     "OperationModeEnum",
            xref: { document: "cluster", section: "4.2.7.22" }
        },

        {
            tag: "attribute", id: 0x0021, name: "ControlMode",
            access: "RW VM", conformance: "O", constraint: "desc", default: undefined, quality: "N", type: "ControlModeEnum",
            details: "This attribute specifies the control mode of the pump as defined in " +
                     "ControlModeEnum",
            xref: { document: "cluster", section: "4.2.7.23" }
        },

        {
            tag: "attribute", id: 0x0022, name: "AlarmMask",
            access: "R V", conformance: "D", constraint: "desc", default: undefined, quality: "N", type: "map16",
            xref: { document: "cluster", section: "4.2.7" }
        },

        {
            tag: "event", id: 0x0000, name: "SupplyVoltageLow",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0001, name: "SupplyVoltageHigh",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0002, name: "PowerMissingPhase",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0003, name: "SystemPressureLow",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0004, name: "SystemPressureHigh",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0005, name: "DryRunning",
            access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0006, name: "MotorTemperatureHigh",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0007, name: "PumpMotorFatalFailure",
            access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0008, name: "ElectronicTemperatureHigh",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0009, name: "PumpBlocked",
            access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x000a, name: "SensorFailure",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x000b, name: "ElectronicNonFatalFailure",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x000c, name: "ElectronicFatalFailure",
            access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x000d, name: "GeneralFault",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x000e, name: "Leakage",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x000f, name: "AirDetection",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "event", id: 0x0010, name: "TurbineOperation",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8" }
        },

        {
            tag: "datatype", name: "PumpStatusBitmap",
            conformance: "M", type: "map16",
            details: "This data type is derived from map16",
            xref: { document: "cluster", section: "4.2.6.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "DeviceFault",
                    description: "A fault related to the system or pump device is detected.",
                    details: "If this bit is set, it MAY correspond to an event in the range 2-16, " +
                             "see Events",
                    xref: { document: "cluster", section: "4.2.6.1.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "SupplyFault",
                    conformance: "M", description: "A fault related to the supply to the pump is detected.",
                    details: "If this bit is set, it MAY correspond to an event in the range 0-1 or " +
                             "13, see Events",
                    xref: { document: "cluster", section: "4.2.6.1.2" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "SpeedLow",
                    conformance: "M", description: "Setpoint is too low to achieve.",
                    xref: { document: "cluster", section: "4.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "SpeedHigh",
                    description: "Setpoint is too high to achieve.",
                    xref: { document: "cluster", section: "4.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0010, name: "LocalOverride",
                    conformance: "M", description: "Device control is overridden by hardware, such as an external STOP button or via a local HMI.",
                    details: "While this bit is set, the EffectiveOperationMode is adjusted to Local" +
                             ". Any request changing OperationMode SHALL generate a FAILURE error " +
                             "status until LocalOverride is cleared on the physical device. When " +
                             "LocalOverride is cleared, the device SHALL return to the operation " +
                             "mode set in OperationMode",
                    xref: { document: "cluster", section: "4.2.6.1.3" }
                },

                {
                    tag: "datatype", id: 0x0020, name: "Running",
                    conformance: "M", description: "Pump is currently running",
                    xref: { document: "cluster", section: "4.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0040, name: "RemotePressure",
                    conformance: "M", description: "A remote pressure sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantPressure and the " +
                             "setpoint for the pump is interpreted as a percentage of the range of " +
                             "the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                    xref: { document: "cluster", section: "4.2.6.1.4" }
                },

                {
                    tag: "datatype", id: 0x0080, name: "RemoteFlow",
                    conformance: "M", description: "A remote flow sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantFlow, and the " +
                             "setpoint for the pump is interpreted as a percentage of the range of " +
                             "the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                    xref: { document: "cluster", section: "4.2.6.1.5" }
                },

                {
                    tag: "datatype", id: 0x0100, name: "RemoteTemperature",
                    conformance: "M", description: "A remote temperature sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantTemperature, and " +
                             "the setpoint for the pump is interpreted as a percentage of the range " +
                             "of the remote sensor ([MinMeasuredValue – MaxMeasuredValue",
                    xref: { document: "cluster", section: "4.2.6.1.6" }
                }
            ]
        },

        {
            tag: "datatype", name: "OperationModeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Normal",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Minimum",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Maximum",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Local",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ControlModeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "ConstantSpeed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "ConstantPressure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ProportionalPressure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "ConstantFlow",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "ConstantTemperature",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "Automatic",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "PumpConfigurationAndControlFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "ConstantPressure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "CompensatedPressure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "ConstantFlow",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "ConstantSpeed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "ConstantTemperature",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0020, name: "Automatic",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0040, name: "LocalOperation",
                    conformance: "M"
                }
            ]
        }
    ]
});
