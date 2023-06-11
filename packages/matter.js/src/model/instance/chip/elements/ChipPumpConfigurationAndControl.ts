/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0200, name: "PumpConfigurationAndControl",
    description: "Pump Configuration and Control",
    details: "An interface for configuring and controlling pumps.",
    children: [
        AttributeElement({
            id: 0x0000, name: "maxPressure", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "maxSpeed", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "maxFlow", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "minConstPressure", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "maxConstPressure", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "minCompPressure", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "maxCompPressure", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0007, name: "minConstSpeed", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0008, name: "maxConstSpeed", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0009, name: "minConstFlow", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000a, name: "maxConstFlow", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000b, name: "minConstTemp", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "maxConstTemp", base: "int16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0010, name: "pumpStatus", base: "PumpStatusBitmap",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }, value: "0x0000"
        }),

        AttributeElement({
            id: 0x0011, name: "effectiveOperationMode", base: "OperationModeEnum",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0012, name: "effectiveControlMode", base: "ControlModeEnum",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0013, name: "capacity", base: "int16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true, reportable: true }
        }),

        AttributeElement({
            id: 0x0014, name: "speed", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0015, name: "lifetimeRunningHours", base: "uint24",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x000000"
        }),

        AttributeElement({
            id: 0x0016, name: "pumpPower", base: "uint24",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0017, name: "lifetimeEnergyConsumed", base: "uint32",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00000000"
        }),

        AttributeElement({
            id: 0x0020, name: "operationMode", base: "OperationModeEnum",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0021, name: "controlMode", base: "ControlModeEnum",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x00"
        }),

        EventElement({
            id: 0x0000, name: "SupplyVoltageLow",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0001, name: "SupplyVoltageHigh",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0002, name: "PowerMissingPhase",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0003, name: "SystemPressureLow",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0004, name: "SystemPressureHigh",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0005, name: "DryRunning",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x0006, name: "MotorTemperatureHigh",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0007, name: "PumpMotorFatalFailure",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x0008, name: "ElectronicTemperatureHigh",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0009, name: "PumpBlocked",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x000a, name: "SensorFailure",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x000b, name: "ElectronicNonFatalFailure",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x000c, name: "ElectronicFatalFailure",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical"
        }),

        EventElement({
            id: 0x000d, name: "GeneralFault",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x000e, name: "Leakage",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x000f, name: "AirDetection",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        EventElement({
            id: 0x0010, name: "TurbineOperation",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info"
        }),

        DatatypeElement({
            name: "PumpStatusBitmap", base: "map16",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "deviceFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "deviceFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "supplyfault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "supplyfault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "speedLow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "speedLow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "speedHigh",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "speedHigh",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "localOverride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "localOverride",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "running",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "running",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "remotePressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "remotePressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "remoteFlow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                }),

                DatatypeElement({
                    name: "remoteFlow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x80"
                }),

                DatatypeElement({
                    name: "remoteTemperature",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x100"
                }),

                DatatypeElement({
                    name: "remoteTemperature",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x100"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationModeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "normal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "normal",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "minimum",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "minimum",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "maximum",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "maximum",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "local",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "local",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                })
            ]
        }),

        DatatypeElement({
            name: "ControlModeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "constantSpeed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "constantSpeed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "constantPressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "constantPressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "proportionalPressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "proportionalPressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "constantFlow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "constantFlow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "constantTemperature",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "constantTemperature",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x5"
                }),

                DatatypeElement({
                    name: "automatic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x7"
                }),

                DatatypeElement({
                    name: "automatic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x7"
                })
            ]
        }),

        DatatypeElement({
            name: "PumpConfigurationAndControlFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "constantPressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "constantPressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "compensatedPressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "compensatedPressure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "constantFlow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "constantFlow",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "constantSpeed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "constantSpeed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "constantTemperature",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "constantTemperature",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "automatic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "automatic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x20"
                }),

                DatatypeElement({
                    name: "localOperation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                }),

                DatatypeElement({
                    name: "localOperation",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x40"
                })
            ]
        })
    ]
}));
