/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0102, name: "WindowCovering",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 5, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Type", base: "enum8",
            access: "R V", conformance: "M", constraint: "desc", value: "0", quality: "F",
            details: "The Type attribute identifies the type of window covering being controlled by this endpoint and SHALL be set to one of the non-reserved values in the table below.",
            xref: { section: "5.3.5.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "PhysicalClosedLimitLift", base: "uint16",
            access: "R V", conformance: "[LF &PA_LF & ABS]", value: "0", quality: "F",
            details: "The PhysicalClosedLimitLift attribute identifies the maximum possible encoder position possible (in centimeters) to position the height of the window covering Lift.",
            xref: { section: "5.3.5.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "PhysicalClosedLimitTilt", base: "uint16",
            access: "R V", conformance: "[TL &PA_TL & ABS]", value: "0", quality: "F",
            details: "The PhysicalClosedLimitTilt attribute identifies the maximum possible encoder position possible (tenth of a degrees) to position the angle of the window covering Tilt.",
            xref: { section: "5.3.5.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentPositionLift1", base: "uint16",
            access: "R V", conformance: "[LF &PA_LF & ABS]", constraint: "InstalledOpenLimitLift to InstalledClosedLimitLift", value: "null", quality: "XN",
            xref: { section: "5.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "CurrentPositionTilt1", base: "uint16",
            access: "R V", conformance: "[TL &PA_TL & ABS]", constraint: "InstalledOpenLimitTilt to InstalledClosedLimitTilt", value: "null", quality: "XN",
            xref: { section: "5.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "NumberOfActuationsLift", base: "uint16",
            access: "R V", conformance: "[LF]", value: "0", quality: "N",
            details: "The NumberOfActuationsLift attribute identifies the total number of lift/slide actuations applied to the Window Covering since the device was installed.",
            xref: { section: "5.3.5.6", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "NumberOfActuationsTilt", base: "uint16",
            access: "R V", conformance: "[TL]", value: "0", quality: "N",
            details: "The NumberOfActuationsTilt attribute identifies the total number of tilt actuations applied to the Window Covering since the device was installed.",
            xref: { section: "5.3.5.7", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "ConfigStatus", base: "map8",
            access: "R V", conformance: "M", constraint: "desc", value: "desc", quality: "N",
            details: "The ConfigStatus attribute makes configuration and status information available. To change settings, devices SHALL write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.",
            xref: { section: "5.3.5.8", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "CurrentPositionLiftPercentage1", base: "percent",
            access: "R V", conformance: "[LF & PA_LF]", constraint: "0 to 100", value: "null", quality: "XNSP",
            xref: { section: "5.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "CurrentPositionTiltPercentage1", base: "percent",
            access: "R V", conformance: "[TL & PA_TL]", constraint: "0 to 100", value: "null", quality: "XNSP",
            xref: { section: "5.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000a, name: "OperationalStatus", base: "map8",
            access: "R V", conformance: "M", constraint: "00xx xxxx", value: "0", quality: "P",
            details: "The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of devices. See below for details about the meaning of individual bits.",
            xref: { section: "5.3.5.15", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000b, name: "TargetPositionLiftPercent100Ths2", base: "percent100ths",
            access: "R V", conformance: "LF & PA_LF", constraint: "0 to 10000", value: "null", quality: "XSP",
            xref: { section: "5.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000c, name: "TargetPositionTiltPercent100Ths2", base: "percent100ths",
            access: "R V", conformance: "TL & PA_TL", constraint: "0 to 10000", value: "null", quality: "XSP",
            xref: { section: "5.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000d, name: "EndProductType", base: "enum8",
            access: "R V", conformance: "M", constraint: "desc", value: "0", quality: "F",
            details: "The EndProductType attribute identifies the product type in complement of the main category indicated by the Type attribute. The window covering SHALL set this value to one of the values in the table below.",
            xref: { section: "5.3.5.16", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000e, name: "CurrentPositionLiftPercent100Ths1", base: "percent100ths",
            access: "R V", conformance: "LF & PA_LF", constraint: "0 to 10000", value: "null", quality: "XNP",
            xref: { section: "5.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000f, name: "CurrentPositionTiltPercent100Ths1", base: "percent100ths",
            access: "R V", conformance: "TL & PA_TL", constraint: "0 to 10000", value: "null", quality: "XNP",
            xref: { section: "5.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "InstalledOpenLimitLift", base: "uint16",
            access: "R V", conformance: "LF & PA_LF & ABS", constraint: "0 to 65534", value: "0", quality: "N",
            details: "The InstalledOpenLimitLift attribute identifies the Open Limit for Lifting the Window Covering whether position (in centimeters) is encoded or timed.",
            xref: { section: "5.3.5.17", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "InstalledClosedLimitLift", base: "uint16",
            access: "R V", conformance: "LF & PA_LF & ABS", constraint: "0 to 65534", value: "65534", quality: "N",
            details: "The InstalledClosedLimitLift attribute identifies the Closed Limit for Lifting the Window Covering whether position (in centimeters) is encoded or timed.",
            xref: { section: "5.3.5.18", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "InstalledOpenLimitTilt", base: "uint16",
            access: "R V", conformance: "TL & PA_TL & ABS", constraint: "0 to 65534", value: "0", quality: "N",
            details: "The InstalledOpenLimitTilt attribute identifies the Open Limit for Tilting the Window Covering whether position (in tenth of a degree) is encoded or timed.",
            xref: { section: "5.3.5.19", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "InstalledClosedLimitTilt", base: "uint16",
            access: "R V", conformance: "TL & PA_TL & ABS", constraint: "0 to 65534", value: "65534", quality: "N",
            details: "The InstalledClosedLimitTilt attribute identifies the Closed Limit for Tilting the Window Covering whether position (in tenth of a degree) is encoded or timed.",
            xref: { section: "5.3.5.20", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0017, name: "Mode", base: "map8",
            access: "RW VM", conformance: "M", constraint: "0000 xxxx", value: "0", quality: "N",
            details: "The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction, placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling the network, and disabling status LEDs. See below for details.",
            xref: { section: "5.3.5.21", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001a, name: "SafetyStatus", base: "map16",
            access: "R V", conformance: "O", constraint: "desc", value: "0", quality: "P",
            details: "The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing movements. By default for nominal operation all flags are cleared (0). A device might support none, one or several bit flags from this attribute (all optional). See below for details about the meaning of individual bits.",
            xref: { section: "5.3.5.22", document: "cluster", version: "1.1" }
        })
    ]
}));
