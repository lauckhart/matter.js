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

export const Actions = Cluster(
    { name: "Actions", id: 0x25 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "ActionList", id: 0x0, type: "list",
            default: [], constraint: "max 256", conformance: "M", access: "R V"
        },
        Field({ name: "entry", type: "ActionStruct" })
    ),

    Attribute(
        {
            name: "EndpointLists", id: 0x1, type: "list",
            default: [], constraint: "max 256", conformance: "M", access: "R V"
        },
        Field({ name: "entry", type: "EndpointListStruct" })
    ),

    Attribute({ name: "SetupUrl", id: 0x2, type: "string", constraint: "max 512", conformance: "O", access: "R V" }),

    Event(
        { name: "StateChanged", id: 0x0, conformance: "M", access: "V", priority: "info" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "M" }),
        Field({ name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M" })
    ),

    Event(
        { name: "ActionFailed", id: 0x1, conformance: "M", access: "V", priority: "info" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "M" }),
        Field({ name: "NewState", id: 0x2, type: "ActionStateEnum", conformance: "M" }),
        Field({ name: "Error", id: 0x3, type: "ActionErrorEnum", conformance: "M" })
    ),

    Command(
        { name: "InstantAction", id: 0x0, conformance: "desc", access: "O", direction: "request", response: "status" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "InstantActionWithTransition", id: 0x1,
            conformance: "desc", access: "O", direction: "request", response: "status"
        },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M" })
    ),

    Command(
        { name: "StartAction", id: 0x2, conformance: "desc", access: "O", direction: "request", response: "status" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "StartActionWithDuration", id: 0x3,
            conformance: "desc", access: "O", direction: "request", response: "status"
        },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({ name: "Duration", id: 0x2, type: "uint32", conformance: "M" })
    ),

    Command(
        { name: "StopAction", id: 0x4, conformance: "desc", access: "O", direction: "request", response: "status" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),
    Command(
        { name: "PauseAction", id: 0x5, conformance: "desc", access: "O", direction: "request", response: "status" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "PauseActionWithDuration", id: 0x6,
            conformance: "desc", access: "O", direction: "request", response: "status"
        },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({ name: "Duration", id: 0x2, type: "uint32", conformance: "M" })
    ),

    Command(
        { name: "ResumeAction", id: 0x7, conformance: "desc", access: "O", direction: "request", response: "status" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),
    Command(
        { name: "EnableAction", id: 0x8, conformance: "desc", access: "O", direction: "request", response: "status" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "EnableActionWithDuration", id: 0x9,
            conformance: "desc", access: "O", direction: "request", response: "status"
        },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({ name: "Duration", id: 0x2, type: "uint32", conformance: "M" })
    ),

    Command(
        { name: "DisableAction", id: 0xa, conformance: "desc", access: "O", direction: "request", response: "status" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" })
    ),

    Command(
        {
            name: "DisableActionWithDuration", id: 0xb,
            conformance: "desc", access: "O", direction: "request", response: "status"
        },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "InvokeId", id: 0x1, type: "uint32", conformance: "O" }),
        Field({ name: "Duration", id: 0x2, type: "uint32", conformance: "M" })
    ),

    Datatype(
        { name: "CommandBits", type: "map16" },
        Field({ name: "InstantAction", constraint: "0" }),
        Field({ name: "InstantActionWithTransition", constraint: "1" }),
        Field({ name: "StartAction", constraint: "2" }),
        Field({ name: "StartActionWithDuration", constraint: "3" }),
        Field({ name: "StopAction", constraint: "4" }),
        Field({ name: "PauseAction", constraint: "5" }),
        Field({ name: "PauseActionWithDuration", constraint: "6" }),
        Field({ name: "ResumeAction", constraint: "7" }),
        Field({ name: "EnableAction", constraint: "8" }),
        Field({ name: "EnableActionWithDuration", constraint: "9" }),
        Field({ name: "DisableAction", constraint: "10" }),
        Field({ name: "DisableActionWithDuration", constraint: "11" })
    ),

    Datatype(
        { name: "ActionTypeEnum", type: "enum8" },
        Field({ name: "Other", id: 0x0, conformance: "M" }),
        Field({ name: "Scene", id: 0x1, conformance: "M" }),
        Field({ name: "Sequence", id: 0x2, conformance: "M" }),
        Field({ name: "Automation", id: 0x3, conformance: "M" }),
        Field({ name: "Exception", id: 0x4, conformance: "M" }),
        Field({ name: "Notification", id: 0x5, conformance: "M" }),
        Field({ name: "Alarm", id: 0x6, conformance: "M" })
    ),

    Datatype(
        { name: "ActionStateEnum", type: "enum8" },
        Field({ name: "Inactive", id: 0x0, conformance: "M" }),
        Field({ name: "Active", id: 0x1, conformance: "M" }),
        Field({ name: "Paused", id: 0x2, conformance: "M" }),
        Field({ name: "Disabled", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "ActionErrorEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "Interrupted", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "EndpointListTypeEnum", type: "enum8" },
        Field({ name: "Other", id: 0x0, conformance: "M" }),
        Field({ name: "Room", id: 0x1, conformance: "M" }),
        Field({ name: "Zone", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "ActionStruct", type: "struct" },
        Field({ name: "ActionId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "Name", id: 0x1, type: "string", constraint: "max 128{32}", conformance: "M" }),
        Field({ name: "Type", id: 0x2, type: "ActionTypeEnum", conformance: "M" }),
        Field({ name: "EndpointListId", id: 0x3, type: "uint16", conformance: "M" }),
        Field({ name: "SupportedCommands", id: 0x4, type: "CommandBits", constraint: "0 to 4095", conformance: "M" }),
        Field({ name: "State", id: 0x5, type: "ActionStateEnum", conformance: "M" })
    ),

    Datatype(
        { name: "EndpointListStruct", type: "struct" },
        Field({ name: "EndpointListId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "Name", id: 0x1, type: "string", constraint: "max 128{32}", conformance: "M" }),
        Field({ name: "Type", id: 0x2, type: "EndpointListTypeEnum", conformance: "M" }),
        Field(
            { name: "Endpoints", id: 0x3, type: "list", constraint: "max 256", conformance: "M" },
            Field({ name: "entry", type: "endpoint-no" })
        )
    )
);

MatterDefinition.children.push(Actions);
