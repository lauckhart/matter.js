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

export const Messages = Cluster(
    { id: 0x97, name: "Messages" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "CONF", conformance: "O", constraint: "0", longName: "ReceivedConfirmation" }),
        Field({ name: "RESP", conformance: "[CONF]", constraint: "1", longName: "ConfirmationResponse" }),
        Field({ name: "RPLY", conformance: "[CONF]", constraint: "2", longName: "ConfirmationReply" }),
        Field({ name: "PROT", conformance: "O", constraint: "3", longName: "ProtectedMessages" })
    ),

    Attribute(
        {
            id: 0x0, name: "Messages", type: "list",
            access: "R F V", conformance: "M", constraint: "max 8", default: []
        },
        Field({ name: "entry", type: "MessageStruct" })
    ),

    Attribute(
        {
            id: 0x1, name: "ActiveMessageIDs", type: "list",
            access: "R V", conformance: "M", constraint: "max 8", default: []
        },
        Field({ name: "entry", type: "MessageID" })
    ),

    Event(
        { id: 0x0, name: "MessageQueued", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "MessageId", type: "MessageID", access: "S", conformance: "M" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),
    Event(
        { id: 0x1, name: "MessagePresented", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "MessageId", type: "MessageID", access: "S", conformance: "M" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Event(
        { id: 0x2, name: "MessageComplete", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "MessageId", type: "MessageID", access: "S", conformance: "M" }),
        Field({ id: 0x1, name: "ResponseId", type: "uint32", access: "S", conformance: "RESP", default: null, quality: "X" }),
        Field({
            id: 0x2, name: "Reply", type: "string",
            access: "S", conformance: "RPLY", constraint: "max 256", default: null, quality: "X"
        }),
        Field({
            id: 0x3, name: "FutureMessagesPreference", type: "FutureMessagePreferenceEnum",
            access: "S", conformance: "M", default: null, quality: "X"
        }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Command(
        {
            id: 0x0, name: "PresentMessagesRequest",
            access: "F O", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "MessageId", type: "MessageID", conformance: "M" }),
        Field({ id: 0x1, name: "Priority", type: "MessagePriorityEnum", conformance: "M", default: 0 }),
        Field({ id: 0x2, name: "MessageControl", type: "MessageControlBitmap", conformance: "M", default: 0 }),
        Field({ id: 0x3, name: "StartTime", type: "epoch-s", conformance: "M", default: 0, quality: "X" }),
        Field({ id: 0x4, name: "Duration", type: "uint64", conformance: "M", default: 0, quality: "X" }),
        Field({ id: 0x5, name: "MessageText", type: "string", conformance: "M", constraint: "max 256" }),
        Field(
            { id: 0x6, name: "Responses", type: "list", conformance: "RESP", constraint: "max 4", default: [] },
            Field({ name: "entry", type: "MessageResponseOptionStruct" })
        )
    ),

    Command(
        {
            id: 0x1, name: "CancelMessagesRequest",
            access: "F O", conformance: "M", direction: "request", response: "status"
        },
        Field(
            { id: 0x0, name: "MessageIDs", type: "list", conformance: "M", constraint: "max 8" },
            Field({ name: "entry", type: "MessageID" })
        )
    ),

    Datatype({ name: "MessageID", type: "octstr", constraint: "16" }),

    Datatype(
        { name: "MessageControlBitmap", type: "map16" },
        Field({ name: "ConfirmationRequired", constraint: "0" }),
        Field({ name: "ResponseRequired", constraint: "1" }),
        Field({ name: "ReplyMessage", constraint: "2" }),
        Field({ name: "MessageConfirmed", constraint: "3" }),
        Field({ name: "MessageProtected", constraint: "4" })
    ),

    Datatype(
        { name: "FutureMessagePreferenceEnum", type: "enum8" },
        Field({ id: 0x0, name: "Allowed", conformance: "M" }),
        Field({ id: 0x1, name: "Increased", conformance: "M" }),
        Field({ id: 0x2, name: "Reduced", conformance: "M" }),
        Field({ id: 0x3, name: "Disallowed", conformance: "M" }),
        Field({ id: 0x4, name: "Banned", conformance: "M" })
    ),

    Datatype(
        { name: "MessagePriorityEnum", type: "enum8" },
        Field({ id: 0x0, name: "Low", conformance: "M" }),
        Field({ id: 0x1, name: "Medium", conformance: "M" }),
        Field({ id: 0x2, name: "High", conformance: "M" }),
        Field({ id: 0x3, name: "Critical", conformance: "M" })
    ),

    Datatype(
        { name: "MessageStruct", type: "struct" },
        Field({ id: 0x0, name: "MessageId", type: "MessageID", access: "S", conformance: "M" }),
        Field({ id: 0x1, name: "Priority", type: "MessagePriorityEnum", access: "S", conformance: "M", default: 0 }),
        Field({ id: 0x2, name: "MessageControl", type: "MessageControlBitmap", access: "S", conformance: "M", default: 0 }),
        Field({ id: 0x3, name: "StartTime", type: "epoch-s", access: "S", conformance: "M", default: 0, quality: "X" }),
        Field({ id: 0x4, name: "Duration", type: "uint64", access: "S", conformance: "M", default: 0, quality: "X" }),
        Field({ id: 0x5, name: "MessageText", type: "string", access: "S", conformance: "M", constraint: "max 256" }),

        Field(
            {
                id: 0x6, name: "Responses", type: "list",
                access: "S", conformance: "RESP", constraint: "max 4", default: []
            },
            Field({ name: "entry", type: "MessageResponseOptionStruct" })
        ),

        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "MessageResponseOptionStruct", type: "struct" },
        Field({ id: 0x0, name: "MessageResponseId", type: "uint32", conformance: "M", constraint: "min 1" }),
        Field({ id: 0x1, name: "Label", type: "string", conformance: "M", constraint: "max 32" })
    )
);

MatterDefinition.children.push(Messages);
