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
    { id: 0x60, name: "OperationalState" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),

    Attribute(
        {
            id: 0x0, name: "PhaseList", type: "list",
            access: "R V", conformance: "M", constraint: "max 32[max 64]", quality: "X"
        },
        Field({ name: "entry", type: "string" })
    ),

    Attribute({ id: 0x1, name: "CurrentPhase", type: "uint8", access: "R V", conformance: "M", constraint: "all", quality: "X" }),
    Attribute({
        id: 0x2, name: "CountdownTime", type: "elapsed-s",
        access: "R V", conformance: "O", constraint: "max 259200", default: null, quality: "X Q"
    }),
    Attribute(
        { id: 0x3, name: "OperationalStateList", type: "list", access: "R V", conformance: "M", constraint: "all" },
        Field({ name: "entry", type: "OperationalStateStruct" })
    ),
    Attribute({ id: 0x4, name: "OperationalState", type: "OperationalStateEnum", access: "R V", conformance: "M" }),
    Attribute({ id: 0x5, name: "OperationalError", type: "ErrorStateStruct", access: "R V", conformance: "M", constraint: "all" }),
    Event(
        { id: 0x0, name: "OperationalError", access: "V", conformance: "M", priority: "critical" },
        Field({ id: 0x0, name: "ErrorState", type: "ErrorStateStruct", conformance: "M" })
    ),

    Event(
        { id: 0x1, name: "OperationCompletion", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "CompletionErrorCode", type: "enum8", conformance: "M" }),
        Field({ id: 0x1, name: "TotalOperationalTime", type: "elapsed-s", conformance: "O", quality: "X" }),
        Field({ id: 0x2, name: "PausedTime", type: "elapsed-s", conformance: "O", quality: "X" })
    ),

    Command({
        id: 0x0, name: "Pause",
        access: "O", conformance: "Resume, O", direction: "request", response: "OperationalCommandResponse"
    }),
    Command({
        id: 0x1, name: "Stop",
        access: "O", conformance: "Start, O", direction: "request", response: "OperationalCommandResponse"
    }),
    Command({
        id: 0x2, name: "Start",
        access: "O", conformance: "O", direction: "request", response: "OperationalCommandResponse"
    }),
    Command({
        id: 0x3, name: "Resume",
        access: "O", conformance: "Pause, O", direction: "request", response: "OperationalCommandResponse"
    }),

    Command(
        {
            id: 0x4, name: "OperationalCommandResponse",
            access: "O", conformance: "Pause | Stop | Start | Resume", direction: "response"
        },
        Field({ id: 0x0, name: "CommandResponseState", type: "ErrorStateStruct", conformance: "M" })
    ),

    Datatype(
        { name: "OperationalStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Stopped", conformance: "M" }),
        Field({ id: 0x1, name: "Running", conformance: "M" }),
        Field({ id: 0x2, name: "Paused", conformance: "M" }),
        Field({ id: 0x3, name: "Error", conformance: "M" })
    ),

    Datatype(
        { name: "OperationalStateStruct", type: "struct" },
        Field({ id: 0x0, name: "OperationalStateId", type: "OperationalStateEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "OperationalStateLabel", type: "string", conformance: "desc", constraint: "max 64" })
    ),

    Datatype(
        { name: "ErrorStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "NoError", conformance: "M" }),
        Field({ id: 0x1, name: "UnableToStartOrResume", conformance: "M" }),
        Field({ id: 0x2, name: "UnableToCompleteOperation", conformance: "M" }),
        Field({ id: 0x3, name: "CommandInvalidInState", conformance: "M" })
    ),

    Datatype(
        { name: "ErrorStateStruct", type: "struct" },
        Field({ id: 0x0, name: "ErrorStateID", type: "ErrorStateEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "ErrorStateLabel", type: "string", conformance: "desc", constraint: "max 64" }),
        Field({ id: 0x2, name: "ErrorStateDetails", type: "string", conformance: "O", constraint: "max 64" })
    )
);

MatterDefinition.children.push(OperationalState);
