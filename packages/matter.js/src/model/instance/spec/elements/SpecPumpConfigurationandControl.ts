/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0200, name: "PumpConfigurationandControl",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "MaxPressure", base: "int16",
            access: "R V", conformance: "M", value: "null", quality: "X F",
            details: "This attribute specifies the maximum pressure the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode.",
            xref: { section: "4.2.7.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "MaxSpeed", base: "uint16",
            access: "R V", conformance: "M", value: "null", quality: "X F",
            details: "This attribute specifies the maximum speed the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode.",
            xref: { section: "4.2.7.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxFlow", base: "uint16",
            access: "R V", conformance: "M", value: "null", quality: "X F",
            details: "This attribute specifies the maximum flow the pump can achieve. It is a physical limit, and does not apply to any specific control mode or operation mode.",
            xref: { section: "4.2.7.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "MinConstPressure", base: "int16",
            access: "R V", conformance: "PRSCONST, [AUTO]", value: "null", quality: "X F",
            details: "This attribute specifies the minimum pressure the pump can achieve when it is working with the ControlMode attribute set to ConstantPressure.",
            xref: { section: "4.2.7.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "MaxConstPressure", base: "int16",
            access: "R V", conformance: "PRSCONST, [AUTO]", value: "null", quality: "X F",
            details: "This attribute specifies the maximum pressure the pump can achieve when it is working with the ControlMode attribute set to ConstantPressure.",
            xref: { section: "4.2.7.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "MinCompPressure", base: "int16",
            access: "R V", conformance: "PRSCOMP, [AUTO]", value: "null", quality: "X F",
            details: "This attribute specifies the minimum compensated pressure the pump can achieve when it is working with the ControlMode attribute set to ProportionalPressure.",
            xref: { section: "4.2.7.6", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "MaxCompPressure", base: "int16",
            access: "R V", conformance: "PRSCOMP, [AUTO]", value: "null", quality: "X F",
            details: "This attribute specifies the maximum compensated pressure the pump can achieve when it is working with the ControlMode attribute set to ProportionalPressure.",
            xref: { section: "4.2.7.7", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "MinConstSpeed", base: "uint16",
            access: "R V", conformance: "SPD, [AUTO]", value: "null", quality: "X F",
            details: "This attribute specifies the minimum speed the pump can achieve when it is working with the ControlMode attribute set to ConstantSpeed.",
            xref: { section: "4.2.7.8", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "MaxConstSpeed", base: "uint16",
            access: "R V", conformance: "SPD, [AUTO]", value: "null", quality: "X F",
            details: "This attribute specifies the maximum speed the pump can achieve when it is working with the ControlMode attribute set to ConstantSpeed.",
            xref: { section: "4.2.7.9", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "MinConstFlow", base: "uint16",
            access: "R V", conformance: "FLW, [AUTO]", value: "null", quality: "X F",
            details: "This attribute specifies the minimum flow the pump can achieve when it is working with the Con",
            xref: { section: "4.2.7.10", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000a, name: "MaxConstFlow", base: "uint16",
            access: "R V", conformance: "FLW, [AUTO]", value: "null", quality: "X F",
            details: "This attribute specifies the maximum flow the pump can achieve when it is working with the ControlMode attribute set to ConstantFlow.",
            xref: { section: "4.2.7.11", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000b, name: "MinConstTemp", base: "int16",
            access: "R V", conformance: "TEMP, [AUTO]", constraint: "-27315 tomax", value: "null", quality: "X F",
            details: "This attribute specifies the minimum temperature the pump can maintain in the system when it is working with the ControlMode attribute set to ConstantTemperature.",
            xref: { section: "4.2.7.12", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000c, name: "MaxConstTemp", base: "int16",
            access: "R V", conformance: "TEMP, [AUTO]", constraint: "-27315 tomax", value: "null", quality: "X F",
            details: "This attribute specifies the maximum temperature the pump can maintain in the system when it is working with the ControlMode attribute set to ConstantTemperature.",
            xref: { section: "4.2.7.13", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "PumpStatus", base: "PumpStatusBitmap",
            access: "R V", conformance: "O", constraint: "desc", value: "0", quality: "P",
            details: "This attribute specifies the activity status of the pump functions as listed in PumpStatusBitmap. Where a pump controller function is active, the corresponding bit SHALL be set to 1. Where a pump controller function is not active, the corresponding bit SHALL be set to 0.",
            xref: { section: "4.2.7.14", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "EffectiveOperationMode", base: "OperationModeEnum",
            access: "R V", conformance: "M", constraint: "desc", value: "desc", quality: "N",
            details: "This attribute specifies current effective operation mode of the pump as defined in OperationModeEnum.",
            xref: { section: "4.2.7.15", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "EffectiveControlMode", base: "ControlModeEnum",
            access: "R V", conformance: "M", constraint: "desc", value: "desc", quality: "N",
            details: "This attribute specifies the current effective control mode of the pump as defined in ControlModeEnum.",
            xref: { section: "4.2.7.16", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "Capacity", base: "int16",
            access: "R V", conformance: "M", value: "null", quality: "X P",
            details: "This attribute specifies the actual capacity of the pump as a percentage of the effective maximum setpoint value. It is updated dynamically as the speed of the pump changes.",
            xref: { section: "4.2.7.17", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0014, name: "Speed", base: "uint16",
            access: "R V", conformance: "O", value: "null", quality: "X",
            details: "This attribute specifies the actual speed of the pump measured in RPM. It is updated dynamically as the speed of the pump changes.",
            xref: { section: "4.2.7.18", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0015, name: "LifetimeRunningHours", base: "uint24",
            access: "RW VM", conformance: "O", value: "0", quality: "X N",
            details: "This attribute specifies the accumulated number of hours that the pump has been powered and the motor has been running. It is updated dynamically as it increases. It is preserved over power cycles of the pump. If LifeTimeRunningHours rises above maximum value it “rolls over” and starts at 0 (zero).",
            xref: { section: "4.2.7.19", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0016, name: "Power", base: "uint24",
            access: "R V", conformance: "O", value: "null", quality: "X",
            details: "This attribute specifies the actual power consumption of the pump in Watts. The value of this attribute is updated dynamically as the power consumption of the pump changes.",
            xref: { section: "4.2.7.20", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0017, name: "LifetimeEnergyConsumed", base: "uint32",
            access: "RW VM", conformance: "O", value: "0", quality: "X N",
            details: "This attribute specifies the accumulated energy consumption of the pump through the entire lifetime of the pump in kWh. The value of the LifetimeEnergyConsumed attribute is updated dynamically as the energy consumption of the pump increases. If LifetimeEnergyConsumed rises above maximum value it “rolls over” and starts at 0 (zero).",
            xref: { section: "4.2.7.21", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0020, name: "OperationMode", base: "OperationModeEnum",
            access: "RW VM", conformance: "M", constraint: "desc", value: "0", quality: "N",
            details: "This attribute specifies the operation mode of the pump as defined in OperationModeEnum.",
            xref: { section: "4.2.7.22", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0021, name: "ControlMode", base: "ControlModeEnum",
            access: "RW VM", conformance: "O", constraint: "desc", value: "0", quality: "N",
            details: "This attribute specifies the control mode of the pump as defined in ControlModeEnum.",
            xref: { section: "4.2.7.23", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0022, name: "AlarmMask", base: "map16",
            access: "R V", conformance: "D", constraint: "desc", value: "0", quality: "N",
            xref: { section: "4.2.7", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "PumpStatusBitmap", base: "map16",
            details: "This data type is derived from map16.",
            xref: { section: "4.2.6.1", document: "cluster", version: "1.1" }
        })
    ]
}));
