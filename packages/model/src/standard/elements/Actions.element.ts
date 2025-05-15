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
    { id: 0x25, name: "Actions" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            id: 0x0, name: "ActionList", type: "list",
            access: "R V", conformance: "M", constraint: "max 256", default: []
        },
        Field({ name: "entry", type: "ActionStruct" })
    ),

    Attribute(
        {
            id: 0x1, name: "EndpointLists", type: "list",
            access: "R V", conformance: "M", constraint: "max 256", default: []
        },
        Field({ name: "entry", type: "EndpointListStruct" })
    ),

    Attribute({ id: 0x2, name: "SetupUrl", type: "string", access: "R V", conformance: "O", constraint: "max 512" }),

    Event(
        { id: 0x0, name: "StateChanged", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "M" }),
        Field({ id: 0x2, name: "NewState", type: "ActionStateEnum", conformance: "M" })
    ),

    Event(
        { id: 0x1, name: "ActionFailed", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "M" }),
        Field({ id: 0x2, name: "NewState", type: "ActionStateEnum", conformance: "M" }),
        Field({ id: 0x3, name: "Error", type: "ActionErrorEnum", conformance: "M" })
    ),

    Command(
        { id: 0x0, name: "InstantAction", access: "O", conformance: "desc", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" })
    ),

    Command(
        {
            id: 0x1, name: "InstantActionWithTransition",
            access: "O", conformance: "desc", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M" })
    ),

    Command(
        { id: 0x2, name: "StartAction", access: "O", conformance: "desc", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" })
    ),

    Command(
        {
            id: 0x3, name: "StartActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" }),
        Field({ id: 0x2, name: "Duration", type: "uint32", conformance: "M" })
    ),

    Command(
        { id: 0x4, name: "StopAction", access: "O", conformance: "desc", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" })
    ),
    Command(
        { id: 0x5, name: "PauseAction", access: "O", conformance: "desc", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" })
    ),

    Command(
        {
            id: 0x6, name: "PauseActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" }),
        Field({ id: 0x2, name: "Duration", type: "uint32", conformance: "M" })
    ),

    Command(
        { id: 0x7, name: "ResumeAction", access: "O", conformance: "desc", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" })
    ),
    Command(
        { id: 0x8, name: "EnableAction", access: "O", conformance: "desc", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" })
    ),

    Command(
        {
            id: 0x9, name: "EnableActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" }),
        Field({ id: 0x2, name: "Duration", type: "uint32", conformance: "M" })
    ),

    Command(
        { id: 0xa, name: "DisableAction", access: "O", conformance: "desc", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" })
    ),

    Command(
        {
            id: 0xb, name: "DisableActionWithDuration",
            access: "O", conformance: "desc", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "InvokeId", type: "uint32", conformance: "O" }),
        Field({ id: 0x2, name: "Duration", type: "uint32", conformance: "M" })
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
        Field({ id: 0x0, name: "Other", conformance: "M" }),
        Field({ id: 0x1, name: "Scene", conformance: "M" }),
        Field({ id: 0x2, name: "Sequence", conformance: "M" }),
        Field({ id: 0x3, name: "Automation", conformance: "M" }),
        Field({ id: 0x4, name: "Exception", conformance: "M" }),
        Field({ id: 0x5, name: "Notification", conformance: "M" }),
        Field({ id: 0x6, name: "Alarm", conformance: "M" })
    ),

    Datatype(
        { name: "ActionStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Inactive", conformance: "M" }),
        Field({ id: 0x1, name: "Active", conformance: "M" }),
        Field({ id: 0x2, name: "Paused", conformance: "M" }),
        Field({ id: 0x3, name: "Disabled", conformance: "M" })
    ),

    Datatype(
        { name: "ActionErrorEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "M" }),
        Field({ id: 0x1, name: "Interrupted", conformance: "M" })
    ),

    Datatype(
        { name: "EndpointListTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Other", conformance: "M" }),
        Field({ id: 0x1, name: "Room", conformance: "M" }),
        Field({ id: 0x2, name: "Zone", conformance: "M" })
    ),

    Datatype(
        { name: "ActionStruct", type: "struct" },
        Field({ id: 0x0, name: "ActionId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "M", constraint: "max 128{32}" }),
        Field({ id: 0x2, name: "Type", type: "ActionTypeEnum", conformance: "M" }),
        Field({ id: 0x3, name: "EndpointListId", type: "uint16", conformance: "M" }),
        Field({ id: 0x4, name: "SupportedCommands", type: "CommandBits", conformance: "M", constraint: "0 to 4095" }),
        Field({ id: 0x5, name: "State", type: "ActionStateEnum", conformance: "M" })
    ),

    Datatype(
        { name: "EndpointListStruct", type: "struct" },
        Field({ id: 0x0, name: "EndpointListId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "M", constraint: "max 128{32}" }),
        Field({ id: 0x2, name: "Type", type: "EndpointListTypeEnum", conformance: "M" }),
        Field(
            { id: 0x3, name: "Endpoints", type: "list", conformance: "M", constraint: "max 256" },
            Field({ name: "entry", type: "endpoint-no" })
        )
    )
);

MatterDefinition.children.push(Actions);
