/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0202, name: "FanControl",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 2, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "FanMode", base: "enum8",
            access: "RW VO", conformance: "M", constraint: "0 to 6", value: "0", quality: "N",
            details: "This attribute SHALL indicate the current speed mode of the fan. This attribute MAY be written by the client to indicate a new speed mode of the fan. This attribute SHALL be set to one of the values in the table below.",
            xref: { section: "4.4.6.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "FanModeSequence", base: "enum8",
            access: "R[W] VO", conformance: "M", constraint: "0 to 5", value: "MS", quality: "N",
            details: "This indicates the fan speed ranges that SHALL be supported.",
            xref: { section: "4.4.6.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "PercentSetting", base: "uint8",
            access: "RW VO", conformance: "M", constraint: "0 to 100", value: "0", quality: "X",
            details: "This attribute SHALL indicate the speed setting for the fan. This attribute MAY be written by the client to indicate a new fan speed. If the client writes null to this attribute, the attribute value SHALL NOT change. If this is set to 0, the server SHALL set the FanMode attribute value to Off.",
            xref: { section: "4.4.6.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "PercentCurrent", base: "uint8",
            access: "R V", conformance: "M", constraint: "0 to 100", value: "desc",
            details: "This attribute SHALL indicate the actual currently operating fan speed, or zero to indicate that the fan is off. See Section 4.4.6.3.1 for more details.",
            xref: { section: "4.4.6.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "SpeedMax", base: "uint8",
            access: "R V", conformance: "SPD", constraint: "1 to 100", value: "MS", quality: "F",
            details: "This attribute SHALL indicate that the fan has one speed (value of 1) or the maximum speed, if the fan is capable of multiple speeds.",
            xref: { section: "4.4.6.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "SpeedSetting", base: "uint8",
            access: "RW VO", conformance: "SPD", constraint: "0 to SpeedMax", value: "0", quality: "X",
            details: "This attribute SHALL indicate the speed setting for the fan. This attribute MAY be written by the client to indicate a new fan speed. If the client writes null to this attribute, the attribute value SHALL NOT change. If this is set to 0, the server SHALL set the FanMode attribute value to Off. Please see the Section 4.4.6.6.1 for details on other values.",
            xref: { section: "4.4.6.6", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "SpeedCurrent", base: "uint8",
            access: "R V", conformance: "SPD", constraint: "0 to SpeedMax", value: "desc", quality: "P",
            details: "This attribute SHALL indicate the actual currently operating fan speed, or zero to indicate that the fan is off.",
            xref: { section: "4.4.6.7", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "RockSupport", base: "map8",
            access: "R V", conformance: "RCK", constraint: "desc", value: "0", quality: "F",
            details: "This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is shown in the table below.",
            xref: { section: "4.4.6.8", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "RockSetting", base: "map8",
            access: "RW VO", conformance: "RCK", constraint: "desc", value: "0", quality: "P",
            details: "This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit SHALL only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise a status code of CONSTRAINT_ERROR SHALL be returned.",
            xref: { section: "4.4.6.9", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "WindSupport", base: "map8",
            access: "R V", conformance: "WND", constraint: "desc", value: "0", quality: "F",
            details: "This attribute is a bitmap that indicates what wind modes the server supports. At least one wind mode bit SHALL be set. The bitmap is shown in the table below.",
            xref: { section: "4.4.6.10", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000a, name: "WindSetting", base: "map8",
            access: "RW VO", conformance: "WND", constraint: "desc", value: "0", quality: "P",
            details: "This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit SHALL only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise a status code of CONSTRAINT_ERROR SHALL be returned.",
            xref: { section: "4.4.6.11", document: "cluster", version: "1.1" }
        })
    ]
}));
