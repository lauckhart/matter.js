/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0200, name: "PumpConfigurationAndControl",
    description: "Pump Configuration and Control",
    details: "An interface for configuring and controlling pumps.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MaxPressure", base: "int16",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "MaxSpeed", base: "uint16",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "MaxFlow", base: "uint16",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "MinConstPressure", base: "int16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "MaxConstPressure", base: "int16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "MinCompPressure", base: "int16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "MaxCompPressure", base: "int16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "MinConstSpeed", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0008, name: "MaxConstSpeed", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0009, name: "MinConstFlow", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000a, name: "MaxConstFlow", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000b, name: "MinConstTemp", base: "int16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "MaxConstTemp", base: "int16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0010, name: "PumpStatus", base: "PumpStatusBitmap",
            access: "R", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0011, name: "EffectiveOperationMode", base: "OperationModeEnum",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0012, name: "EffectiveControlMode", base: "ControlModeEnum",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0013, name: "Capacity", base: "int16",
            access: "R", conformance: "M", quality: "X P"
        }),

        AttributeElement({
            id: 0x0014, name: "Speed", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0015, name: "LifetimeRunningHours", base: "uint24",
            access: "W VM", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0016, name: "PumpPower", base: "uint24",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0017, name: "LifetimeEnergyConsumed", base: "uint32",
            access: "W VM", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0020, name: "OperationMode", base: "OperationModeEnum",
            access: "W VM", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "ControlMode", base: "ControlModeEnum",
            access: "W VM", conformance: "O", default: 0
        }),

        EventElement({
            id: 0x0000, name: "SupplyVoltageLow",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0001, name: "SupplyVoltageHigh",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0002, name: "PowerMissingPhase",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0003, name: "SystemPressureLow",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0004, name: "SystemPressureHigh",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0005, name: "DryRunning",
            access: "R", conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x0006, name: "MotorTemperatureHigh",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0007, name: "PumpMotorFatalFailure",
            access: "R", conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x0008, name: "ElectronicTemperatureHigh",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0009, name: "PumpBlocked",
            access: "R", conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x000a, name: "SensorFailure",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x000b, name: "ElectronicNonFatalFailure",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x000c, name: "ElectronicFatalFailure",
            access: "R", conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x000d, name: "GeneralFault",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x000e, name: "Leakage",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x000f, name: "AirDetection",
            access: "R", conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0010, name: "TurbineOperation",
            access: "R", conformance: "O", priority: "info"
        }),

        DatatypeElement({
            name: "PumpStatusBitmap", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "DeviceFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Supplyfault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "SpeedLow",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "SpeedHigh",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LocalOverride",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Running",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RemotePressure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "RemoteFlow",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "RemoteTemperature",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationModeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Normal",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Minimum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Maximum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Local",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ControlModeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ConstantSpeed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ConstantPressure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProportionalPressure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ConstantFlow",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "ConstantTemperature",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Automatic",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "PumpConfigurationAndControlFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ConstantPressure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CompensatedPressure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ConstantFlow",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ConstantSpeed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ConstantTemperature",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Automatic",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "LocalOperation",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
