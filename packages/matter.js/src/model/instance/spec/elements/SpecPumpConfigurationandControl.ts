/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0200, name: "PumpConfigurationandControl",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", constraint: "min 1", default: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "PRSCONST",
                    description: "Supports operating in constant pressure mode",
                    xref: { document: "cluster", section: "4.2.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "PRSCOMP",
                    description: "Supports operating in compensated pressure mode",
                    xref: { document: "cluster", section: "4.2.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "FLW",
                    description: "Supports operating in constant flow mode",
                    xref: { document: "cluster", section: "4.2.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "SPD",
                    description: "Supports operating in constant speed mode",
                    xref: { document: "cluster", section: "4.2.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "TEMP",
                    description: "Supports operating in constant temperature mode",
                    xref: { document: "cluster", section: "4.2.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0005, name: "AUTO",
                    description: "Supports operating in automatic mode",
                    xref: { document: "cluster", section: "4.2.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0006, name: "LOCAL",
                    description: "Supports operating using local settings",
                    xref: { document: "cluster", section: "4.2.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "MaxPressure", base: "int16",
            access: "R V", default: "null", quality: "X F",
            details: "This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode.",
            xref: { document: "cluster", section: "4.2.7.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MaxSpeed", base: "uint16",
            access: "R V", default: "null", quality: "X F",
            details: "This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode.",
            xref: { document: "cluster", section: "4.2.7.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxFlow", base: "uint16",
            access: "R V", default: "null", quality: "X F",
            details: "This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode.",
            xref: { document: "cluster", section: "4.2.7.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "MinConstPressure", base: "int16",
            access: "R V", conformance: "P, RSCONST, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the minimum pressure the pump can achieve when it is working with the ControlMode attribute set to ConstantPressure.",
            xref: { document: "cluster", section: "4.2.7.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "MaxConstPressure", base: "int16",
            access: "R V", conformance: "P, RSCONST, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the maximum pressure the pump can achieve when it is working with the ControlMode attribute set to ConstantPressure.",
            xref: { document: "cluster", section: "4.2.7.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "MinCompPressure", base: "int16",
            access: "R V", conformance: "P, RSCOMP, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the minimum compensated pressure the pump can achieve when it is working with the ControlMode attribute set to ProportionalPressure.",
            xref: { document: "cluster", section: "4.2.7.6", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "MaxCompPressure", base: "int16",
            access: "R V", conformance: "P, RSCOMP, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the maximum compensated pressure the pump can achieve when it is working with the ControlMode attribute set to ProportionalPressure.",
            xref: { document: "cluster", section: "4.2.7.7", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "MinConstSpeed", base: "uint16",
            access: "R V", conformance: "SPD, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the minimum speed the pump can achieve when it is working with the ControlMode attribute set to ConstantSpeed.",
            xref: { document: "cluster", section: "4.2.7.8", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "MaxConstSpeed", base: "uint16",
            access: "R V", conformance: "SPD, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the maximum speed the pump can achieve when it is working with the ControlMode attribute set to ConstantSpeed.",
            xref: { document: "cluster", section: "4.2.7.9", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "MinConstFlow", base: "uint16",
            access: "R V", conformance: "FLW, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the minimum flow the pump can achieve when it is working with the Con",
            xref: { document: "cluster", section: "4.2.7.10", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000a, name: "MaxConstFlow", base: "uint16",
            access: "R V", conformance: "FLW, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the maximum flow the pump can achieve when it is working with the ControlMode attribute set to ConstantFlow.",
            xref: { document: "cluster", section: "4.2.7.11", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000b, name: "MinConstTemp", base: "int16",
            access: "R V", conformance: "TEMP, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the minimum temperature the pump can maintain in the system when it is working with the ControlMode attribute set to ConstantTemperature.",
            xref: { document: "cluster", section: "4.2.7.12", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000c, name: "MaxConstTemp", base: "int16",
            access: "R V", conformance: "TEMP, [AUTO]", default: "null", quality: "X F",
            details: "This attribute specifies the maximum temperature the pump can maintain in the system when it is working with the ControlMode attribute set to ConstantTemperature.",
            xref: { document: "cluster", section: "4.2.7.13", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "PumpStatus", base: "PumpStatusBitmap",
            access: "R V", conformance: "O", constraint: "desc", default: 0, quality: "P",
            details: "This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where a pump controller function is active, the corresponding bit SHALL be set to 1. Where a pump controller function is not active, the corresponding bit SHALL be set to 0.",
            xref: { document: "cluster", section: "4.2.7.14", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "EffectiveOperationMode", base: "OperationModeEnum",
            access: "R V", constraint: "desc", default: "desc", quality: "N",
            details: "This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.",
            xref: { document: "cluster", section: "4.2.7.15", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "EffectiveControlMode", base: "ControlModeEnum",
            access: "R V", constraint: "desc", default: "desc", quality: "N",
            details: "This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.",
            xref: { document: "cluster", section: "4.2.7.16", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "Capacity", base: "int16",
            access: "R V", default: "null", quality: "X P",
            details: "This attribute specifies the actual capacity of the pump as a percentage of the effective maximum setpoint value. It is updated dynamically as the speed of the pump changes.",
            xref: { document: "cluster", section: "4.2.7.17", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0014, name: "Speed", base: "uint16",
            access: "R V", conformance: "O", default: "null", quality: "X",
            details: "This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the speed of the pump changes.",
            xref: { document: "cluster", section: "4.2.7.18", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0015, name: "LifetimeRunningHours", base: "uint24",
            access: "RW VM", conformance: "O", default: 0, quality: "X N",
            details: "This attribute specifies the accumulated number of hours that the pump has been powered and the motor has been running. It is updated dynamically as it increases. It is preserved over power cycles of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).",
            xref: { document: "cluster", section: "4.2.7.19", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0016, name: "Power", base: "uint24",
            access: "R V", conformance: "O", default: "null", quality: "X",
            details: "This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute is updated dynamically as the power consumption of the pump changes.",
            xref: { document: "cluster", section: "4.2.7.20", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0017, name: "LifetimeEnergyConsumed", base: "uint32",
            access: "RW VM", conformance: "O", default: 0, quality: "X N",
            details: "This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over” and starts at 0 (zero).",
            xref: { document: "cluster", section: "4.2.7.21", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0020, name: "OperationMode", base: "OperationModeEnum",
            access: "RW VM", constraint: "desc", default: "0", quality: "N",
            details: "This attribute specifies the operation mode of the pump as defined in OperationModeEnum.",
            xref: { document: "cluster", section: "4.2.7.22", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0021, name: "ControlMode", base: "ControlModeEnum",
            access: "RW VM", conformance: "O", constraint: "desc", default: "0", quality: "N",
            details: "This attribute specifies the control mode of the pump as defined in ControlModeEnum.",
            xref: { document: "cluster", section: "4.2.7.23", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0022, name: "AlarmMask", base: "map16",
            access: "R V", conformance: "D", constraint: "desc", default: 0, quality: "N",
            xref: { document: "cluster", section: "4.2.7", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "SupplyVoltageLow",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0001, name: "SupplyVoltageHigh",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0002, name: "PowerMissingPhase",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0003, name: "SystemPressureLow",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0004, name: "SystemPressureHigh",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0005, name: "DryRunning",
            access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0006, name: "MotorTemperatureHigh",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0007, name: "PumpMotorFatalFailure",
            access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0008, name: "ElectronicTemperatureHigh",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0009, name: "PumpBlocked",
            access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x000a, name: "SensorFailure",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x000b, name: "ElectronicNonFatalFailure",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x000c, name: "ElectronicFatalFailure",
            access: "V", conformance: "O", priority: "critical",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x000d, name: "GeneralFault",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x000e, name: "Leakage",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x000f, name: "AirDetection",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        EventElement({
            id: 0x0010, name: "TurbineOperation",
            access: "V", conformance: "O", priority: "info",
            xref: { document: "cluster", section: "4.2.8", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "PumpStatusBitmap", base: "map16",
            details: "This data type is derived from map16.",
            xref: { document: "cluster", section: "4.2.6.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DeviceFault",
                    description: "A fault related to the system or pump device is detected.",
                    details: "If this bit is set, it MAY correspond to an event in the range 2-16, see Events.",
                    xref: { document: "cluster", section: "4.2.6.1.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "SupplyFault",
                    description: "A fault related to the supply to the pump is detected.",
                    details: "If this bit is set, it MAY correspond to an event in the range 0-1 or 13, see Events.",
                    xref: { document: "cluster", section: "4.2.6.1.2", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "SpeedLow",
                    description: "Setpoint is too low to achieve.",
                    xref: { document: "cluster", section: "4.2.6.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "SpeedHigh",
                    description: "Setpoint is too high to achieve.",
                    xref: { document: "cluster", section: "4.2.6.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "LocalOverride",
                    description: "Device control is overridden by hardware, such as an external STOP button or via a local HMI.",
                    details: "While this bit is set, the EffectiveOperationMode is adjusted to Local. Any request changing OperationMode SHALL generate a FAILURE error status until LocalOverride is cleared on the physical device. When LocalOverride is cleared, the device SHALL return to the operation mode set in OperationMode.",
                    xref: { document: "cluster", section: "4.2.6.1.3", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0005, name: "Running",
                    description: "Pump is currently running",
                    xref: { document: "cluster", section: "4.2.6.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0006, name: "RemotePressure",
                    description: "A remote pressure sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantPressure and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).",
                    xref: { document: "cluster", section: "4.2.6.1.4", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0007, name: "RemoteFlow",
                    description: "A remote flow sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantFlow, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue]).",
                    xref: { document: "cluster", section: "4.2.6.1.5", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0008, name: "RemoteTemperature",
                    description: "A remote temperature sensor is used as the sensor for the regulation of the pump.",
                    details: "If this bit is set, EffectiveControlMode is ConstantTemperature, and the setpoint for the pump is interpreted as a percentage of the range of the remote sensor ([MinMeasuredValue – MaxMeasuredValue])",
                    xref: { document: "cluster", section: "4.2.6.1.6", version: "1.1" }
                })
            ]
        })
    ]
}));
