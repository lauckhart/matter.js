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
    { id: 0x202, name: "FanControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 4 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "SPD", constraint: "0", longName: "MultiSpeed" }),
        Field({ name: "AUT", constraint: "1", longName: "Auto" }),
        Field({ name: "RCK", constraint: "2", longName: "Rocking" }),
        Field({ name: "WND", constraint: "3", longName: "Wind" }),
        Field({ name: "STEP", constraint: "4", longName: "Step" }),
        Field({ name: "DIR", constraint: "5", longName: "AirflowDirection" })
    ),

    Attribute(
        { id: 0x0, name: "FanMode", type: "FanModeEnum", access: "RW VO", conformance: "M", default: 0, quality: "N" }
    ),
    Attribute({ id: 0x1, name: "FanModeSequence", type: "FanModeSequenceEnum", access: "R V", conformance: "M", quality: "F" }),
    Attribute({
        id: 0x2, name: "PercentSetting", type: "percent",
        access: "RW VO", conformance: "M", constraint: "max 100", default: 0, quality: "X"
    }),
    Attribute({ id: 0x3, name: "PercentCurrent", type: "percent", access: "R V", conformance: "M", constraint: "max 100" }),
    Attribute({
        id: 0x4, name: "SpeedMax", type: "uint8",
        access: "R V", conformance: "SPD", constraint: "1 to 100", quality: "F"
    }),
    Attribute({
        id: 0x5, name: "SpeedSetting", type: "uint8",
        access: "RW VO", conformance: "SPD", constraint: "max speedMax", default: 0, quality: "X"
    }),
    Attribute({
        id: 0x6, name: "SpeedCurrent", type: "uint8",
        access: "R V", conformance: "SPD", constraint: "max speedMax", quality: "P"
    }),
    Attribute({
        id: 0x7, name: "RockSupport", type: "RockBitmap",
        access: "R V", conformance: "RCK", constraint: "desc", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x8, name: "RockSetting", type: "RockBitmap",
        access: "RW VO", conformance: "RCK", constraint: "desc", default: 0, quality: "P"
    }),
    Attribute({
        id: 0x9, name: "WindSupport", type: "WindBitmap",
        access: "R V", conformance: "WND", constraint: "desc", default: 0, quality: "F"
    }),
    Attribute({
        id: 0xa, name: "WindSetting", type: "WindBitmap",
        access: "RW VO", conformance: "WND", constraint: "desc", default: 0, quality: "P"
    }),
    Attribute({
        id: 0xb, name: "AirflowDirection", type: "AirflowDirectionEnum",
        access: "RW VO", conformance: "DIR", constraint: "desc", default: 0, quality: "P"
    }),

    Command(
        { id: 0x0, name: "Step", access: "O", conformance: "STEP", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Direction", type: "StepDirectionEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "Wrap", type: "bool", conformance: "O", default: false }),
        Field({ id: 0x2, name: "LowestOff", type: "bool", conformance: "O", default: true })
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
        Field({ id: 0x0, name: "Increase", conformance: "M" }),
        Field({ id: 0x1, name: "Decrease", conformance: "M" })
    ),
    Datatype(
        { name: "AirflowDirectionEnum", type: "enum8" },
        Field({ id: 0x0, name: "Forward", conformance: "M" }),
        Field({ id: 0x1, name: "Reverse", conformance: "M" })
    ),

    Datatype(
        { name: "FanModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Off", conformance: "M" }),
        Field({ id: 0x1, name: "Low", conformance: "desc" }),
        Field({ id: 0x2, name: "Medium", conformance: "desc" }),
        Field({ id: 0x3, name: "High", conformance: "M" }),
        Field({ id: 0x4, name: "On", conformance: "D" }),
        Field({ id: 0x5, name: "Auto", conformance: "AUT" }),
        Field({ id: 0x6, name: "Smart", conformance: "D" })
    ),

    Datatype(
        { name: "FanModeSequenceEnum", type: "enum8" },
        Field({ id: 0x0, name: "OffLowMedHigh", conformance: "[!AUT].a" }),
        Field({ id: 0x1, name: "OffLowHigh", conformance: "[!AUT].a" }),
        Field({ id: 0x2, name: "OffLowMedHighAuto", conformance: "[AUT].a" }),
        Field({ id: 0x3, name: "OffLowHighAuto", conformance: "[AUT].a" }),
        Field({ id: 0x4, name: "OffHighAuto", conformance: "[AUT].a" }),
        Field({ id: 0x5, name: "OffHigh", conformance: "[!AUT].a" })
    )
);

MatterDefinition.children.push(FanControl);
