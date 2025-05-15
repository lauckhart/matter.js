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
    { id: 0x8, name: "LevelControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 6 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "OO", conformance: "O", constraint: "0", default: 1, description: "OnOff" }),
        Field({ name: "LT", conformance: "O", constraint: "1", default: 0, description: "Lighting" }),
        Field({ name: "FQ", conformance: "P", constraint: "2", default: 0, description: "Frequency" })
    ),

    Attribute({
        id: 0x0, name: "CurrentLevel", type: "uint8",
        access: "R V", conformance: "M", constraint: "minLevel to maxLevel", default: null,
        quality: "X N S Q"
    }),
    Attribute(
        { id: 0x1, name: "RemainingTime", type: "uint16", access: "R V", conformance: "LT", default: 0, quality: "Q" }
    ),
    Attribute({
        id: 0x2, name: "MinLevel", type: "uint8",
        access: "R V", conformance: "[LT]", constraint: "1 to 254", default: 1
    }),
    Attribute({
        id: 0x2, name: "MinLevel", type: "uint8",
        access: "R V", conformance: "[!LT]", constraint: "max 254", default: 0
    }),
    Attribute({
        id: 0x3, name: "MaxLevel", type: "uint8",
        access: "R V", conformance: "O", constraint: "minLevel to 254", default: 254
    }),
    Attribute({
        id: 0x4, name: "CurrentFrequency", type: "uint16",
        access: "R V", conformance: "FQ", constraint: "minFrequency to maxFrequency", default: 0,
        quality: "S P Q"
    }),
    Attribute({ id: 0x5, name: "MinFrequency", type: "uint16", access: "R V", conformance: "FQ", default: 0 }),
    Attribute({
        id: 0x6, name: "MaxFrequency", type: "uint16",
        access: "R V", conformance: "FQ", constraint: "min minFrequency", default: 0
    }),
    Attribute({ id: 0x10, name: "OnOffTransitionTime", type: "uint16", access: "RW VO", conformance: "O", default: 0 }),
    Attribute({
        id: 0x11, name: "OnLevel", type: "uint8",
        access: "RW VO", conformance: "M", constraint: "minLevel to maxLevel", default: null, quality: "X"
    }),
    Attribute({
        id: 0x12, name: "OnTransitionTime", type: "uint16",
        access: "RW VO", conformance: "O", default: null, quality: "X"
    }),
    Attribute({
        id: 0x13, name: "OffTransitionTime", type: "uint16",
        access: "RW VO", conformance: "O", default: null, quality: "X"
    }),
    Attribute({
        id: 0x14, name: "DefaultMoveRate", type: "uint8",
        access: "RW VO", conformance: "O", constraint: "min 1", quality: "X"
    }),
    Attribute({
        id: 0xf, name: "Options", type: "OptionsBitmap",
        access: "RW VO", conformance: "M", constraint: "desc", default: 0
    }),
    Attribute({
        id: 0x4000, name: "StartUpCurrentLevel", type: "uint8",
        access: "RW VM", conformance: "LT", constraint: "desc", quality: "X N"
    }),

    Command(
        { id: 0x0, name: "MoveToLevel", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Level", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x1, name: "TransitionTime", type: "uint16", conformance: "M", quality: "X" }),
        Field({ id: 0x2, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x1, name: "Move", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "MoveMode", type: "MoveModeEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Rate", type: "uint8", conformance: "M", quality: "X" }),
        Field({ id: 0x2, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x2, name: "Step", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "StepMode", type: "StepModeEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "StepSize", type: "uint8", conformance: "M" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", quality: "X" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x3, name: "Stop", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x1, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),
    Command({
        id: 0x4, name: "MoveToLevelWithOnOff", type: "MoveToLevel",
        access: "O", direction: "request", response: "status"
    }),
    Command({ id: 0x5, name: "MoveWithOnOff", type: "Move", access: "O", direction: "request", response: "status" }),
    Command({ id: 0x6, name: "StepWithOnOff", type: "Step", access: "O", direction: "request", response: "status" }),
    Command({ id: 0x7, name: "StopWithOnOff", type: "Stop", access: "O", direction: "request", response: "status" }),

    Command(
        {
            id: 0x8, name: "MoveToClosestFrequency",
            access: "O", conformance: "FQ", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Frequency", type: "uint16", conformance: "M", default: 0 })
    ),

    Datatype(
        { name: "OptionsBitmap", type: "map8" },
        Field({ name: "ExecuteIfOff", constraint: "0" }),
        Field({ name: "CoupleColorTempToLevel", constraint: "1" })
    ),
    Datatype(
        { name: "MoveModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Up", conformance: "M" }),
        Field({ id: 0x1, name: "Down", conformance: "M" })
    ),
    Datatype(
        { name: "StepModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Up", conformance: "M" }),
        Field({ id: 0x1, name: "Down", conformance: "M" })
    )
);

MatterDefinition.children.push(LevelControl);
