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

export const FanControl = Cluster(
    { name: "FanControl", id: 0x202 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "SPD", constraint: "0", longName: "MultiSpeed" }),
        Field({ name: "AUT", constraint: "1", longName: "Auto" }),
        Field({ name: "RCK", constraint: "2", longName: "Rocking" }),
        Field({ name: "WND", constraint: "3", longName: "Wind" }),
        Field({ name: "STEP", constraint: "4", longName: "Step" }),
        Field({ name: "DIR", constraint: "5", longName: "AirflowDirection" })
    ),

    Attribute(
        { name: "FanMode", id: 0x0, type: "FanModeEnum", default: 0, conformance: "M", access: "RW VO", quality: "N" }
    ),
    Attribute({ name: "FanModeSequence", id: 0x1, type: "FanModeSequenceEnum", conformance: "M", access: "R V", quality: "F" }),
    Attribute({
        name: "PercentSetting", id: 0x2, type: "percent",
        default: 0, constraint: "max 100", conformance: "M", access: "RW VO", quality: "X"
    }),
    Attribute({ name: "PercentCurrent", id: 0x3, type: "percent", constraint: "max 100", conformance: "M", access: "R V" }),
    Attribute({
        name: "SpeedMax", id: 0x4, type: "uint8",
        constraint: "1 to 100", conformance: "SPD", access: "R V", quality: "F"
    }),
    Attribute({
        name: "SpeedSetting", id: 0x5, type: "uint8",
        default: 0, constraint: "max speedMax", conformance: "SPD", access: "RW VO", quality: "X"
    }),
    Attribute({
        name: "SpeedCurrent", id: 0x6, type: "uint8",
        constraint: "max speedMax", conformance: "SPD", access: "R V", quality: "P"
    }),
    Attribute({
        name: "RockSupport", id: 0x7, type: "RockBitmap",
        default: 0, constraint: "desc", conformance: "RCK", access: "R V", quality: "F"
    }),
    Attribute({
        name: "RockSetting", id: 0x8, type: "RockBitmap",
        default: 0, constraint: "desc", conformance: "RCK", access: "RW VO", quality: "P"
    }),
    Attribute({
        name: "WindSupport", id: 0x9, type: "WindBitmap",
        default: 0, constraint: "desc", conformance: "WND", access: "R V", quality: "F"
    }),
    Attribute({
        name: "WindSetting", id: 0xa, type: "WindBitmap",
        default: 0, constraint: "desc", conformance: "WND", access: "RW VO", quality: "P"
    }),
    Attribute({
        name: "AirflowDirection", id: 0xb, type: "AirflowDirectionEnum",
        default: 0, constraint: "desc", conformance: "DIR", access: "RW VO", quality: "P"
    }),

    Command(
        { name: "Step", id: 0x0, conformance: "STEP", access: "O", direction: "request", response: "status" },
        Field({ name: "Direction", id: 0x0, type: "StepDirectionEnum", default: 0, conformance: "M" }),
        Field({ name: "Wrap", id: 0x1, type: "bool", default: false, conformance: "O" }),
        Field({ name: "LowestOff", id: 0x2, type: "bool", default: true, conformance: "O" })
    ),

    Datatype(
        { name: "RockBitmap", type: "map8" },
        Field({ name: "RockLeftRight", constraint: "0" }),
        Field({ name: "RockUpDown", constraint: "1" }),
        Field({ name: "RockRound", constraint: "2" })
    ),

    Datatype(
        { name: "WindBitmap", type: "map8" },
        Field({ name: "SleepWind", constraint: "0" }),
        Field({ name: "NaturalWind", constraint: "1" })
    ),
    Datatype(
        { name: "StepDirectionEnum", type: "enum8" },
        Field({ name: "Increase", id: 0x0, conformance: "M" }),
        Field({ name: "Decrease", id: 0x1, conformance: "M" })
    ),
    Datatype(
        { name: "AirflowDirectionEnum", type: "enum8" },
        Field({ name: "Forward", id: 0x0, conformance: "M" }),
        Field({ name: "Reverse", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "FanModeEnum", type: "enum8" },
        Field({ name: "Off", id: 0x0, conformance: "M" }),
        Field({ name: "Low", id: 0x1, conformance: "desc" }),
        Field({ name: "Medium", id: 0x2, conformance: "desc" }),
        Field({ name: "High", id: 0x3, conformance: "M" }),
        Field({ name: "On", id: 0x4, conformance: "D" }),
        Field({ name: "Auto", id: 0x5, conformance: "AUT" }),
        Field({ name: "Smart", id: 0x6, conformance: "D" })
    ),

    Datatype(
        { name: "FanModeSequenceEnum", type: "enum8" },
        Field({ name: "OffLowMedHigh", id: 0x0, conformance: "[!AUT].a" }),
        Field({ name: "OffLowHigh", id: 0x1, conformance: "[!AUT].a" }),
        Field({ name: "OffLowMedHighAuto", id: 0x2, conformance: "[AUT].a" }),
        Field({ name: "OffLowHighAuto", id: 0x3, conformance: "[AUT].a" }),
        Field({ name: "OffHighAuto", id: 0x4, conformance: "[AUT].a" }),
        Field({ name: "OffHigh", id: 0x5, conformance: "[!AUT].a" })
    )
);

MatterDefinition.children.push(FanControl);
