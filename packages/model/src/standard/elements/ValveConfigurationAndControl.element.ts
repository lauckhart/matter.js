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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ValveConfigurationAndControl = Cluster(
    { name: "ValveConfigurationAndControl", id: 0x81 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "TS", constraint: "0", conformance: "desc", longName: "TimeSync" }),
        Field({ name: "LVL", constraint: "1", conformance: "O", longName: "Level" })
    ),
    Attribute({
        name: "OpenDuration", id: 0x0, type: "elapsed-s",
        default: null, constraint: "min 1", conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({
        name: "DefaultOpenDuration", id: 0x1, type: "elapsed-s",
        default: null, constraint: "min 1", conformance: "M", access: "RW VO", quality: "X N"
    }),
    Attribute({ name: "AutoCloseTime", id: 0x2, type: "epoch-us", default: null, conformance: "TS", access: "R V", quality: "X" }),
    Attribute({
        name: "RemainingDuration", id: 0x3, type: "elapsed-s",
        default: null, conformance: "M", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "CurrentState", id: 0x4, type: "ValveStateEnum",
        default: null, conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({
        name: "TargetState", id: 0x5, type: "ValveStateEnum",
        default: null, conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({ name: "CurrentLevel", id: 0x6, type: "percent", default: null, conformance: "LVL", access: "R V", quality: "X" }),
    Attribute({ name: "TargetLevel", id: 0x7, type: "percent", default: null, conformance: "LVL", access: "R V", quality: "X" }),
    Attribute({
        name: "DefaultOpenLevel", id: 0x8, type: "percent",
        default: 100, constraint: "1 to 100", conformance: "[LVL]", access: "RW VO", quality: "N"
    }),
    Attribute({ name: "ValveFault", id: 0x9, type: "ValveFaultBitmap", default: 0, conformance: "O", access: "R V" }),
    Attribute({
        name: "LevelStep", id: 0xa, type: "uint8",
        default: 1, constraint: "1 to 50", conformance: "[LVL]", access: "R V", quality: "F"
    }),
    Event(
        { name: "ValveStateChanged", id: 0x0, conformance: "O", access: "V", priority: "info" },
        Field({ name: "ValveState", id: 0x0, type: "ValveStateEnum", conformance: "M" }),
        Field({ name: "ValveLevel", id: 0x1, type: "percent", conformance: "LVL" })
    ),
    Event(
        { name: "ValveFault", id: 0x1, conformance: "O", access: "V", priority: "info" },
        Field({ name: "ValveFault", id: 0x0, type: "ValveFaultBitmap", conformance: "M" })
    ),
    Command(
        { name: "Open", id: 0x0, conformance: "M", access: "O", direction: "request", response: "status" },
        Field({ name: "OpenDuration", id: 0x0, type: "elapsed-s", constraint: "min 1", conformance: "O", quality: "X" }),
        Field({ name: "TargetLevel", id: 0x1, type: "percent", constraint: "min 1", conformance: "[LVL]" })
    ),
    Command({ name: "Close", id: 0x1, conformance: "M", access: "O", direction: "request", response: "status" }),

    Datatype(
        { name: "ValveFaultBitmap", type: "map16" },
        Field({ name: "GeneralFault", constraint: "0" }),
        Field({ name: "Blocked", constraint: "1" }),
        Field({ name: "Leaking", constraint: "2" }),
        Field({ name: "NotConnected", constraint: "3" }),
        Field({ name: "ShortCircuit", constraint: "4" }),
        Field({ name: "CurrentExceeded", constraint: "5" })
    ),

    Datatype(
        { name: "ValveStateEnum", type: "enum8" },
        Field({ name: "Closed", id: 0x0, conformance: "M" }),
        Field({ name: "Open", id: 0x1, conformance: "M" }),
        Field({ name: "Transitioning", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8" },
        Field({ name: "FailureDueToFault", id: 0x2, conformance: "M" })
    )
);

MatterDefinition.children.push(ValveConfigurationAndControl);
