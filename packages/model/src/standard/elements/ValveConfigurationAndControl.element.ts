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
    { id: 0x81, name: "ValveConfigurationAndControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "TS", conformance: "desc", constraint: "0" }),
        Field({ name: "LVL", conformance: "O", constraint: "1" })
    ),
    Attribute({
        id: 0x0, name: "OpenDuration", type: "elapsed-s",
        access: "R V", conformance: "M", constraint: "min 1", default: null, quality: "X"
    }),
    Attribute({
        id: 0x1, name: "DefaultOpenDuration", type: "elapsed-s",
        access: "RW VO", conformance: "M", constraint: "min 1", default: null, quality: "X N"
    }),
    Attribute({ id: 0x2, name: "AutoCloseTime", type: "epoch-us", access: "R V", conformance: "TS", default: null, quality: "X" }),
    Attribute({
        id: 0x3, name: "RemainingDuration", type: "elapsed-s",
        access: "R V", conformance: "M", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x4, name: "CurrentState", type: "ValveStateEnum",
        access: "R V", conformance: "M", default: null, quality: "X"
    }),
    Attribute({
        id: 0x5, name: "TargetState", type: "ValveStateEnum",
        access: "R V", conformance: "M", default: null, quality: "X"
    }),
    Attribute({ id: 0x6, name: "CurrentLevel", type: "percent", access: "R V", conformance: "LVL", default: null, quality: "X" }),
    Attribute({ id: 0x7, name: "TargetLevel", type: "percent", access: "R V", conformance: "LVL", default: null, quality: "X" }),
    Attribute({
        id: 0x8, name: "DefaultOpenLevel", type: "percent",
        access: "RW VO", conformance: "[LVL]", constraint: "1 to 100", default: 100, quality: "N"
    }),
    Attribute({ id: 0x9, name: "ValveFault", type: "ValveFaultBitmap", access: "R V", conformance: "O", default: 0 }),
    Attribute({
        id: 0xa, name: "LevelStep", type: "uint8",
        access: "R V", conformance: "[LVL]", constraint: "1 to 50", default: 1, quality: "F"
    }),
    Event(
        { id: 0x0, name: "ValveStateChanged", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "ValveState", type: "ValveStateEnum", conformance: "M" }),
        Field({ id: 0x1, name: "ValveLevel", type: "percent", conformance: "LVL" })
    ),
    Event(
        { id: 0x1, name: "ValveFault", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "ValveFault", type: "ValveFaultBitmap", conformance: "M" })
    ),
    Command(
        { id: 0x0, name: "Open", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "OpenDuration", type: "elapsed-s", conformance: "O", constraint: "min 1", quality: "X" }),
        Field({ id: 0x1, name: "TargetLevel", type: "percent", conformance: "[LVL]", constraint: "min 1" })
    ),
    Command({ id: 0x1, name: "Close", access: "O", conformance: "M", direction: "request", response: "status" }),

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
        Field({ id: 0x0, name: "Closed", conformance: "M" }),
        Field({ id: 0x1, name: "Open", conformance: "M" }),
        Field({ id: 0x2, name: "Transitioning", conformance: "M" })
    ),

    Datatype(
        { name: "StatusCodeEnum", type: "enum8" },
        Field({ id: 0x2, name: "FailureDueToFault", conformance: "M" })
    )
);

MatterDefinition.children.push(ValveConfigurationAndControl);
