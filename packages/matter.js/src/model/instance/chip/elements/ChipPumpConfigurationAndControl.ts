/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0200, name: "PumpConfigurationAndControl",
    description: "Pump Configuration and Control",
    details: "An interface for configuring and controlling pumps.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MaxPressure", base: "int16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "MaxSpeed", base: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "MaxFlow", base: "uint16",
            conformance: "M", quality: "X"
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
            id: 0x0011, name: "EffectiveOperationMode", base: "OperationModeEnum",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0012, name: "EffectiveControlMode", base: "ControlModeEnum",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0013, name: "Capacity", base: "int16",
            conformance: "M", quality: "X P"
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
            access: "RW VM", conformance: "M", default: 0
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
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "DeviceFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Supplyfault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "SpeedLow",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "SpeedHigh",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "LocalOverride",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Running",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "RemotePressure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0080, name: "RemoteFlow",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0100, name: "RemoteTemperature",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationModeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Normal",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Minimum",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Maximum",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Local",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ControlModeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ConstantSpeed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ConstantPressure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ProportionalPressure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ConstantFlow",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "ConstantTemperature",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Automatic",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "PumpConfigurationAndControlFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ConstantPressure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CompensatedPressure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ConstantFlow",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "ConstantSpeed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ConstantTemperature",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0020, name: "Automatic",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0040, name: "LocalOperation",
                    conformance: "M"
                })
            ]
        })
    ]
}));
