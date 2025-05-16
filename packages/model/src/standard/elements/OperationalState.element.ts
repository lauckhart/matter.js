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

export const OperationalState = Cluster(
    { name: "OperationalState", id: 0x60 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        {
            name: "PhaseList", id: 0x0, type: "list",
            constraint: "max 32[max 64]", conformance: "M", access: "R V", quality: "X"
        },
        Field({ name: "entry", type: "string" })
    ),

    Attribute({ name: "CurrentPhase", id: 0x1, type: "uint8", constraint: "desc", conformance: "M", access: "R V", quality: "X" }),
    Attribute({
        name: "CountdownTime", id: 0x2, type: "elapsed-s",
        default: null, constraint: "max 259200", conformance: "O", access: "R V", quality: "X Q"
    }),
    Attribute(
        { name: "OperationalStateList", id: 0x3, type: "list", constraint: "desc", conformance: "M", access: "R V" },
        Field({ name: "entry", type: "OperationalStateStruct" })
    ),
    Attribute({ name: "OperationalState", id: 0x4, type: "OperationalStateEnum", conformance: "M", access: "R V" }),
    Attribute({
        name: "OperationalError", id: 0x5, type: "ErrorStateStruct",
        constraint: "desc", conformance: "M", access: "R V"
    }),
    Event(
        { name: "OperationalError", id: 0x0, conformance: "M", access: "V", priority: "critical" },
        Field({ name: "ErrorState", id: 0x0, type: "ErrorStateStruct", conformance: "M" })
    ),

    Event(
        { name: "OperationCompletion", id: 0x1, conformance: "O", access: "V", priority: "info" },
        Field({ name: "CompletionErrorCode", id: 0x0, type: "enum8", conformance: "M" }),
        Field({ name: "TotalOperationalTime", id: 0x1, type: "elapsed-s", conformance: "O", quality: "X" }),
        Field({ name: "PausedTime", id: 0x2, type: "elapsed-s", conformance: "O", quality: "X" })
    ),

    Command({
        name: "Pause", id: 0x0,
        conformance: "Resume, O", access: "O", direction: "request", response: "OperationalCommandResponse"
    }),
    Command({
        name: "Stop", id: 0x1,
        conformance: "Start, O", access: "O", direction: "request", response: "OperationalCommandResponse"
    }),
    Command({
        name: "Start", id: 0x2,
        conformance: "O", access: "O", direction: "request", response: "OperationalCommandResponse"
    }),
    Command({
        name: "Resume", id: 0x3,
        conformance: "Pause, O", access: "O", direction: "request", response: "OperationalCommandResponse"
    }),

    Command(
        {
            name: "OperationalCommandResponse", id: 0x4,
            conformance: "Pause | Stop | Start | Resume", access: "O", direction: "response"
        },
        Field({ name: "CommandResponseState", id: 0x0, type: "ErrorStateStruct", conformance: "M" })
    ),

    Datatype(
        { name: "OperationalStateEnum", type: "enum8" },
        Field({ name: "Stopped", id: 0x0, conformance: "M" }),
        Field({ name: "Running", id: 0x1, conformance: "M" }),
        Field({ name: "Paused", id: 0x2, conformance: "M" }),
        Field({ name: "Error", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "OperationalStateStruct", type: "struct" },
        Field({ name: "OperationalStateId", id: 0x0, type: "OperationalStateEnum", default: 0, conformance: "M" }),
        Field({ name: "OperationalStateLabel", id: 0x1, type: "string", constraint: "max 64", conformance: "desc" })
    ),

    Datatype(
        { name: "ErrorStateEnum", type: "enum8" },
        Field({ name: "NoError", id: 0x0, conformance: "M" }),
        Field({ name: "UnableToStartOrResume", id: 0x1, conformance: "M" }),
        Field({ name: "UnableToCompleteOperation", id: 0x2, conformance: "M" }),
        Field({ name: "CommandInvalidInState", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "ErrorStateStruct", type: "struct" },
        Field({ name: "ErrorStateID", id: 0x0, type: "ErrorStateEnum", default: 0, conformance: "M" }),
        Field({ name: "ErrorStateLabel", id: 0x1, type: "string", constraint: "max 64", conformance: "desc" }),
        Field({ name: "ErrorStateDetails", id: 0x2, type: "string", constraint: "max 64", conformance: "O" })
    )
);

MatterDefinition.children.push(OperationalState);
