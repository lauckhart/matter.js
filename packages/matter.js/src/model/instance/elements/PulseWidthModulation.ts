/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x001c, name: "PulseWidthModulation",
    classification: "application", description: "Pulse Width Modulation",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "CurrentLevel",
            access: "R V", conformance: "M", constraint: "MinLevel to MaxLevel", default: "null", quality: "X N S", type: "uint8",
            details: "The CurrentLevel attribute represents the current level of this device" +
                     ". The meaning of 'level' is device dependent",
            xref: { document: "cluster", section: "1.6.5.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "RemainingTime",
            access: "R V", conformance: "LT", default: 0, type: "uint16",
            details: "The RemainingTime attribute represents the time remaining until the " +
                     "current command is complete - it is specified in 1/10ths of a second",
            xref: { document: "cluster", section: "1.6.5.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "MinLevel",
            access: "R V", conformance: "O", default: "!LT:0LT:1", type: "uint8",
            details: "The MinLevel attribute indicates the minimum value of CurrentLevel " +
                     "that is capable of being assigned",
            xref: { document: "cluster", section: "1.6.5.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "MaxLevel",
            access: "R V", conformance: "O", constraint: "MinLevel to 254", default: 254, type: "uint8",
            details: "The MaxLevel attribute indicates the maximum value of CurrentLevel " +
                     "that is capable of being assigned",
            xref: { document: "cluster", section: "1.6.5.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "CurrentFrequency",
            access: "R V", conformance: "FQ", constraint: "MinFrequency to MaxFrequency", default: 0, quality: "S P", type: "uint16",
            details: "The CurrentFrequency attribute represents the frequency at which the " +
                     "device is at CurrentLevel. A CurrentFrequency of 0 is unknown",
            xref: { document: "cluster", section: "1.6.5.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "MinFrequency",
            access: "R V", conformance: "FQ", constraint: "0 to MaxFrequency", default: 0, type: "uint16",
            details: "The MinFrequency attribute indicates the minimum value of " +
                     "CurrentFrequency that is capable of being assigned. MinFrequency SHALL" +
                     " be less than or equal to MaxFrequency. A value of 0 indicates " +
                     "undefined",
            xref: { document: "cluster", section: "1.6.5.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "MaxFrequency",
            access: "R V", conformance: "FQ", constraint: "min MinFrequency", default: 0, type: "uint16",
            details: "The MaxFrequency attribute indicates the maximum value of " +
                     "CurrentFrequency that is capable of being assigned. MaxFrequency SHALL" +
                     " be greater than or equal to MinFrequency. A value of 0 indicates " +
                     "undefined",
            xref: { document: "cluster", section: "1.6.5.7" }
        },

        {
            tag: "attribute", id: 0x0010, name: "OnOffTransitionTime",
            access: "RW VO", conformance: "O", default: 0, type: "uint16",
            details: "The OnOffTransitionTime attribute represents the time taken to move to" +
                     " or from the target level when On or Off commands are received by an " +
                     "On/Off cluster on the same endpoint. It is specified in 1/10ths of a " +
                     "second",
            xref: { document: "cluster", section: "1.6.5.9" }
        },

        {
            tag: "attribute", id: 0x0011, name: "OnLevel",
            access: "RW VO", conformance: "M", constraint: "MinLevel to MaxLevel", default: "null", quality: "X", type: "uint8",
            details: "The OnLevel attribute determines the value that the CurrentLevel " +
                     "attribute is set to when the OnOff attribute of an On/Off cluster on " +
                     "the same endpoint is set to TRUE, as a result of processing an On/Off " +
                     "cluster command. If the OnLevel attribute is not implemented, or is " +
                     "set to the null value, it has no effect. For more details see Effect " +
                     "of On/Off Commands on the CurrentLevel Attribute",
            xref: { document: "cluster", section: "1.6.5.10" }
        },

        {
            tag: "attribute", id: 0x0012, name: "OnTransitionTime",
            access: "RW VO", conformance: "O", default: "null", quality: "X", type: "uint16",
            details: "The OnTransitionTime attribute represents the time taken to move the " +
                     "current level from the minimum level to the maximum level when an On " +
                     "command is received by an On/Off cluster on the same endpoint. It is " +
                     "specified in 10ths of a second. If this attribute is not implemented, " +
                     "or contains a null value, the OnOffTransitionTime will be used instead",
            xref: { document: "cluster", section: "1.6.5.11" }
        },

        {
            tag: "attribute", id: 0x0013, name: "OffTransitionTime",
            access: "RW VO", conformance: "O", default: "null", quality: "X", type: "uint16",
            details: "The OffTransitionTime attribute represents the time taken to move the " +
                     "current level from the maximum level to the minimum level when an Off " +
                     "command is received by an On/Off cluster on the same endpoint. It is " +
                     "specified in 10ths of a second. If this attribute is not implemented, " +
                     "or contains a null value, the OnOffTransitionTime will be used instead",
            xref: { document: "cluster", section: "1.6.5.12" }
        },

        {
            tag: "attribute", id: 0x0014, name: "DefaultMoveRate",
            access: "RW VO", conformance: "O", default: "MS", quality: "X", type: "uint8",
            details: "The DefaultMoveRate attribute determines the movement rate, in units " +
                     "per second, when a Move command is received with a null value Rate " +
                     "parameter",
            xref: { document: "cluster", section: "1.6.5.13" }
        },

        {
            tag: "attribute", id: 0x000f, name: "Options",
            access: "RW VO", conformance: "M", constraint: "desc", default: 0, type: "map8",
            details: "The Options attribute is meant to be changed only during commissioning" +
                     ". The Options attribute is a bitmap that determines the default " +
                     "behavior of some cluster commands. Each command that is dependent on " +
                     "the Options attribute SHALL first construct a temporary Options bitmap" +
                     " that is in effect during the command processing. The temporary " +
                     "Options bitmap has the same format and meaning as the Options " +
                     "attribute, but includes any bits that may be overridden by command " +
                     "fields",
            xref: { document: "cluster", section: "1.6.5.8" }
        },

        {
            tag: "attribute", id: 0x4000, name: "StartUpCurrentLevel",
            access: "RW VM", conformance: "LT", constraint: "desc", default: "MS", quality: "X N", type: "uint8",
            details: "The StartUpCurrentLevel attribute SHALL define the desired startup " +
                     "level for a device when it is supplied with power and this level SHALL" +
                     " be reflected in the CurrentLevel attribute. The values of the " +
                     "StartUpCurrentLevel attribute are listed below",
            xref: { document: "cluster", section: "1.6.5.14" }
        },

        {
            tag: "command", id: 0x0000, name: "MoveToLevel",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "The MoveToLevel command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.6.6.1" }
        },

        {
            tag: "command", id: 0x0001, name: "Move",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "The Move command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.6.6.2" }
        },

        {
            tag: "command", id: 0x0002, name: "Step",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "The Step command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.6.6.3" }
        },

        {
            tag: "command", id: 0x0003, name: "Stop",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "The Stop command SHALL have the following data fields",
            xref: { document: "cluster", section: "1.6.6.4" }
        },

        {
            tag: "command", id: 0x0004, name: "MoveToLevelWithOnOff",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.6.6" }
        },

        {
            tag: "command", id: 0x0005, name: "MoveWithOnOff",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.6.6" }
        },

        {
            tag: "command", id: 0x0006, name: "StepWithOnOff",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.6.6" }
        },

        {
            tag: "command", id: 0x0007, name: "StopWithOnOff",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "1.6.6" }
        },

        {
            tag: "command", id: 0x0008, name: "MoveToClosestFrequency",
            access: "O", conformance: "FQ", direction: "request", response: "status",
            details: "The MoveToClosestFrequency command SHALL have the following data " +
                     "fields",
            xref: { document: "cluster", section: "1.6.6.5" }
        }
    ]
});
