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
            quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "MaxSpeed", base: "uint16",
            quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "MaxFlow", base: "uint16",
            quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "MinConstPressure", base: "int16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "MaxConstPressure", base: "int16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "MinCompPressure", base: "int16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "MaxCompPressure", base: "int16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0007, name: "MinConstSpeed", base: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0008, name: "MaxConstSpeed", base: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0009, name: "MinConstFlow", base: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000a, name: "MaxConstFlow", base: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000b, name: "MinConstTemp", base: "int16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "MaxConstTemp", base: "int16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0010, name: "PumpStatus", base: "PumpStatusBitmap",
            conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0011, name: "EffectiveOperationMode", base: "OperationModeEnum"
        }),

        AttributeElement({
            id: 0x0012, name: "EffectiveControlMode", base: "ControlModeEnum"
        }),

        AttributeElement({
            id: 0x0013, name: "Capacity", base: "int16",
            quality: "X P"
        }),

        AttributeElement({
            id: 0x0014, name: "Speed", base: "uint16",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0015, name: "LifetimeRunningHours", base: "uint24",
            access: "RW VM", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0016, name: "PumpPower", base: "uint24",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0017, name: "LifetimeEnergyConsumed", base: "uint32",
            access: "RW VM", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0020, name: "OperationMode", base: "OperationModeEnum",
            access: "RW VM", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "ControlMode", base: "ControlModeEnum",
            access: "RW VM", conformance: "O", default: 0
        }),

        EventElement({
            id: 0x0000, name: "SupplyVoltageLow",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0001, name: "SupplyVoltageHigh",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0002, name: "PowerMissingPhase",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0003, name: "SystemPressureLow",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0004, name: "SystemPressureHigh",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0005, name: "DryRunning",
            conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x0006, name: "MotorTemperatureHigh",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0007, name: "PumpMotorFatalFailure",
            conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x0008, name: "ElectronicTemperatureHigh",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0009, name: "PumpBlocked",
            conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x000a, name: "SensorFailure",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x000b, name: "ElectronicNonFatalFailure",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x000c, name: "ElectronicFatalFailure",
            conformance: "O", priority: "critical"
        }),

        EventElement({
            id: 0x000d, name: "GeneralFault",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x000e, name: "Leakage",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x000f, name: "AirDetection",
            conformance: "O", priority: "info"
        }),

        EventElement({
            id: 0x0010, name: "TurbineOperation",
            conformance: "O", priority: "info"
        }),

        DatatypeElement({
            name: "PumpStatusBitmap", base: "map16",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "DeviceFault"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Supplyfault"
                }),

                DatatypeElement({
                    id: 0x0004, name: "SpeedLow"
                }),

                DatatypeElement({
                    id: 0x0008, name: "SpeedHigh"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LocalOverride"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Running"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RemotePressure"
                }),

                DatatypeElement({
                    id: 0x0080, name: "RemoteFlow"
                }),

                DatatypeElement({
                    id: 0x0100, name: "RemoteTemperature"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationModeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Normal"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Minimum"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Maximum"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Local"
                })
            ]
        }),

        DatatypeElement({
            name: "ControlModeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ConstantSpeed"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ConstantPressure"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProportionalPressure"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ConstantFlow"
                }),

                DatatypeElement({
                    id: 0x0005, name: "ConstantTemperature"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Automatic"
                })
            ]
        }),

        DatatypeElement({
            name: "PumpConfigurationAndControlFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ConstantPressure"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CompensatedPressure"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ConstantFlow"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ConstantSpeed"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ConstantTemperature"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Automatic"
                }),

                DatatypeElement({
                    id: 0x0040, name: "LocalOperation"
                })
            ]
        })
    ]
}));
