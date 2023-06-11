/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0008, name: "LevelControlforLighting",
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
            id: 0x0000, name: "CurrentLevel", base: "uint8",
            access: "R V", conformance: "M", constraint: "MinLevel to MaxLevel", value: "null", quality: "SNX",
            details: "The CurrentLevel attribute represents the current level of this device. The meaning of 'level' is device dependent.",
            xref: { section: "1.6.5.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "RemainingTime", base: "uint16",
            access: "R V", conformance: "LT", value: "0",
            details: "The RemainingTime attribute represents the time remaining until the current command is complete - it is specified in 1/10ths of a second.",
            xref: { section: "1.6.5.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MinLevel", base: "uint8",
            access: "R V", conformance: "O", constraint: "!LT : 0 to MaxLevel LT : 1 to MaxLevel", value: "!LT:0LT:1",
            details: "The MinLevel attribute indicates the minimum value of CurrentLevel that is capable of being assigned.",
            xref: { section: "1.6.5.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "MaxLevel", base: "uint8",
            access: "R V", conformance: "O", constraint: "MinLevel to 254", value: "254",
            details: "The MaxLevel attribute indicates the maximum value of CurrentLevel that is capable of being assigned.",
            xref: { section: "1.6.5.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "CurrentFrequency", base: "uint16",
            access: "R V", conformance: "FQ", constraint: "MinFrequency to MaxFrequency", value: "0", quality: "PS",
            details: "The CurrentFrequency attribute represents the frequency at which the device is at CurrentLevel. A CurrentFrequency of 0 is unknown.",
            xref: { section: "1.6.5.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "MinFrequency", base: "uint16",
            access: "R V", conformance: "FQ", constraint: "0 to MaxFrequency", value: "0",
            details: "The MinFrequency attribute indicates the minimum value of CurrentFrequency that is capable of being assigned. MinFrequency SHALL be less than or equal to MaxFrequency. A value of 0 indicates undefined.",
            xref: { section: "1.6.5.6", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "MaxFrequency", base: "uint16",
            access: "R V", conformance: "FQ", constraint: "MinFrequency to max", value: "0",
            details: "The MaxFrequency attribute indicates the maximum value of CurrentFrequency that is capable of being assigned. MaxFrequency SHALL be greater than or equal to MinFrequency. A value of 0 indicates undefined.",
            xref: { section: "1.6.5.7", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "OnOffTransitionTime", base: "uint16",
            access: "RW VO", conformance: "O", value: "0",
            details: "The OnOffTransitionTime attribute represents the time taken to move to or from the target level when On or Off commands are received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a second.",
            xref: { section: "1.6.5.9", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "OnLevel", base: "uint8",
            access: "RW VO", conformance: "M", constraint: "MinLevel to MaxLevel", value: "null", quality: "X",
            details: "The OnLevel attribute determines the value that the CurrentLevel attribute is set to when the OnOff attribute of an On/Off cluster on the same endpoint is set to TRUE, as a result of processing an On/Off cluster command. If the OnLevel attribute is not implemented, or is set to the null value, it has no effect. For more details see Effect of On/Off Commands on the CurrentLevel Attribute.",
            xref: { section: "1.6.5.10", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "OnTransitionTime", base: "uint16",
            access: "RW VO", conformance: "O", value: "null", quality: "X",
            details: "The OnTransitionTime attribute represents the time taken to move the current level from the minimum level to the maximum level when an On command is received by an On/Off cluster on the same endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime will be used instead.",
            xref: { section: "1.6.5.11", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "OffTransitionTime", base: "uint16",
            access: "RW VO", conformance: "O", value: "null", quality: "X",
            details: "The OffTransitionTime attribute represents the time taken to move the current level from the maximum level to the minimum level when an Off command is received by an On/Off cluster on the same endpoint. It is specified in 10ths of a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime will be used instead.",
            xref: { section: "1.6.5.12", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0014, name: "DefaultMoveRate", base: "uint8",
            access: "RW VO", conformance: "O", value: "MS", quality: "X",
            details: "The DefaultMoveRate attribute determines the movement rate, in units per second, when a Move command is received with a null value Rate parameter.",
            xref: { section: "1.6.5.13", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000f, name: "Options", base: "map8",
            access: "RW VO", conformance: "M", constraint: "desc", value: "0",
            details: "The Options attribute is meant to be changed only during commissioning. The Options attribute is a bitmap that determines the default behavior of some cluster commands. Each command that is dependent on the Options attribute SHALL first construct a temporary Options bitmap that is in effect during the command processing. The temporary Options bitmap has the same format and meaning as the Options attribute, but includes any bits that may be overridden by command fields.",
            xref: { section: "1.6.5.8", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x4000, name: "StartUpCurrentLevel", base: "uint8",
            access: "RW VM", conformance: "LT", constraint: "desc", value: "MS", quality: "XN",
            details: "The StartUpCurrentLevel attribute SHALL define the desired startup level for a device when it is supplied with power and this level SHALL be reflected in the CurrentLevel attribute. The values of the StartUpCurrentLevel attribute are listed below:",
            xref: { section: "1.6.5.14", document: "cluster", version: "1.1" }
        })
    ]
}));
