/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const LevelControl = Cluster(
    { name: "LevelControl", id: 0x8 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "OO", default: 1, constraint: "0", conformance: "O", longName: "OnOff" }),
        Field({ name: "LT", default: 0, constraint: "1", conformance: "O", longName: "Lighting" }),
        Field({ name: "FQ", default: 0, constraint: "2", conformance: "P", longName: "Frequency" })
    ),

    Attribute({
        name: "CurrentLevel", id: 0x0, type: "uint8",
        default: null, constraint: "minLevel to maxLevel", conformance: "M", access: "R V",
        quality: "X N S Q"
    }),
    Attribute(
        { name: "RemainingTime", id: 0x1, type: "uint16", default: 0, conformance: "LT", access: "R V", quality: "Q" }
    ),
    Attribute({
        name: "MinLevel", id: 0x2, type: "uint8",
        default: 1, constraint: "1 to 254", conformance: "[LT]", access: "R V"
    }),
    Attribute({
        name: "MinLevel", id: 0x2, type: "uint8",
        default: 0, constraint: "max 254", conformance: "[!LT]", access: "R V"
    }),
    Attribute({
        name: "MaxLevel", id: 0x3, type: "uint8",
        default: 254, constraint: "minLevel to 254", conformance: "O", access: "R V"
    }),
    Attribute({
        name: "CurrentFrequency", id: 0x4, type: "uint16",
        default: 0, constraint: "minFrequency to maxFrequency", conformance: "FQ", access: "R V",
        quality: "S P Q"
    }),
    Attribute({ name: "MinFrequency", id: 0x5, type: "uint16", default: 0, conformance: "FQ", access: "R V" }),
    Attribute({
        name: "MaxFrequency", id: 0x6, type: "uint16",
        default: 0, constraint: "min minFrequency", conformance: "FQ", access: "R V"
    }),
    Attribute({ name: "OnOffTransitionTime", id: 0x10, type: "uint16", default: 0, conformance: "O", access: "RW VO" }),
    Attribute({
        name: "OnLevel", id: 0x11, type: "uint8",
        default: null, constraint: "minLevel to maxLevel", conformance: "M", access: "RW VO", quality: "X"
    }),
    Attribute({
        name: "OnTransitionTime", id: 0x12, type: "uint16",
        default: null, conformance: "O", access: "RW VO", quality: "X"
    }),
    Attribute({
        name: "OffTransitionTime", id: 0x13, type: "uint16",
        default: null, conformance: "O", access: "RW VO", quality: "X"
    }),
    Attribute({
        name: "DefaultMoveRate", id: 0x14, type: "uint8",
        constraint: "min 1", conformance: "O", access: "RW VO", quality: "X"
    }),
    Attribute({
        name: "Options", id: 0xf, type: "OptionsBitmap",
        default: 0, constraint: "desc", conformance: "M", access: "RW VO"
    }),
    Attribute({
        name: "StartUpCurrentLevel", id: 0x4000, type: "uint8",
        constraint: "desc", conformance: "LT", access: "RW VM", quality: "X N"
    }),

    Command(
        { name: "MoveToLevel", id: 0x0, conformance: "M", access: "O", direction: "request", response: "status" },
        Field({ name: "Level", id: 0x0, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", quality: "X" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "Move", id: 0x1, conformance: "M", access: "O", direction: "request", response: "status" },
        Field({ name: "MoveMode", id: 0x0, type: "MoveModeEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "Rate", id: 0x1, type: "uint8", conformance: "M", quality: "X" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "Step", id: 0x2, conformance: "M", access: "O", direction: "request", response: "status" },
        Field({ name: "StepMode", id: 0x0, type: "StepModeEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "StepSize", id: 0x1, type: "uint8", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", quality: "X" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "Stop", id: 0x3, conformance: "M", access: "O", direction: "request", response: "status" },
        Field({ name: "OptionsMask", id: 0x0, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x1, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),
    Command({
        name: "MoveToLevelWithOnOff", id: 0x4, type: "MoveToLevel",
        access: "O", direction: "request", response: "status"
    }),
    Command({ name: "MoveWithOnOff", id: 0x5, type: "Move", access: "O", direction: "request", response: "status" }),
    Command({ name: "StepWithOnOff", id: 0x6, type: "Step", access: "O", direction: "request", response: "status" }),
    Command({ name: "StopWithOnOff", id: 0x7, type: "Stop", access: "O", direction: "request", response: "status" }),

    Command(
        {
            name: "MoveToClosestFrequency", id: 0x8,
            conformance: "FQ", access: "O", direction: "request", response: "status"
        },
        Field({ name: "Frequency", id: 0x0, type: "uint16", default: 0, conformance: "M" })
    ),

    Datatype(
        { name: "OptionsBitmap", type: "map8" },
        Field({ name: "ExecuteIfOff", constraint: "0" }),
        Field({ name: "CoupleColorTempToLevel", constraint: "1" })
    ),
    Datatype(
        { name: "MoveModeEnum", type: "enum8" },
        Field({ name: "Up", id: 0x0, conformance: "M" }),
        Field({ name: "Down", id: 0x1, conformance: "M" })
    ),
    Datatype(
        { name: "StepModeEnum", type: "enum8" },
        Field({ name: "Up", id: 0x0, conformance: "M" }),
        Field({ name: "Down", id: 0x1, conformance: "M" })
    )
);

MatterDefinition.children.push(LevelControl);
