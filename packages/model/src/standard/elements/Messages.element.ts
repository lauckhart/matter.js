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
    { name: "Messages", id: 0x97 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "CONF", constraint: "0", conformance: "O", longName: "ReceivedConfirmation" }),
        Field({ name: "RESP", constraint: "1", conformance: "[CONF]", longName: "ConfirmationResponse" }),
        Field({ name: "RPLY", constraint: "2", conformance: "[CONF]", longName: "ConfirmationReply" }),
        Field({ name: "PROT", constraint: "3", conformance: "O", longName: "ProtectedMessages" })
    ),

    Attribute(
        {
            name: "Messages", id: 0x0, type: "list",
            default: [], constraint: "max 8", conformance: "M", access: "R F V"
        },
        Field({ name: "entry", type: "MessageStruct" })
    ),

    Attribute(
        {
            name: "ActiveMessageIDs", id: 0x1, type: "list",
            default: [], constraint: "max 8", conformance: "M", access: "R V"
        },
        Field({ name: "entry", type: "MessageID" })
    ),

    Event(
        { name: "MessageQueued", id: 0x0, conformance: "M", access: "V", priority: "info" },
        Field({ name: "MessageId", id: 0x0, type: "MessageID", conformance: "M", access: "S" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),
    Event(
        { name: "MessagePresented", id: 0x1, conformance: "M", access: "V", priority: "info" },
        Field({ name: "MessageId", id: 0x0, type: "MessageID", conformance: "M", access: "S" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Event(
        { name: "MessageComplete", id: 0x2, conformance: "M", access: "V", priority: "info" },
        Field({ name: "MessageId", id: 0x0, type: "MessageID", conformance: "M", access: "S" }),
        Field({ name: "ResponseId", id: 0x1, type: "uint32", default: null, conformance: "RESP", access: "S", quality: "X" }),
        Field({
            name: "Reply", id: 0x2, type: "string",
            default: null, constraint: "max 256", conformance: "RPLY", access: "S", quality: "X"
        }),
        Field({
            name: "FutureMessagesPreference", id: 0x3, type: "FutureMessagePreferenceEnum",
            default: null, conformance: "M", access: "S", quality: "X"
        }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Command(
        {
            name: "PresentMessagesRequest", id: 0x0,
            conformance: "M", access: "F O", direction: "request", response: "status"
        },
        Field({ name: "MessageId", id: 0x0, type: "MessageID", conformance: "M" }),
        Field({ name: "Priority", id: 0x1, type: "MessagePriorityEnum", default: 0, conformance: "M" }),
        Field({ name: "MessageControl", id: 0x2, type: "MessageControlBitmap", default: 0, conformance: "M" }),
        Field({ name: "StartTime", id: 0x3, type: "epoch-s", default: 0, conformance: "M", quality: "X" }),
        Field({ name: "Duration", id: 0x4, type: "uint64", default: 0, conformance: "M", quality: "X" }),
        Field({ name: "MessageText", id: 0x5, type: "string", constraint: "max 256", conformance: "M" }),
        Field(
            { name: "Responses", id: 0x6, type: "list", default: [], constraint: "max 4", conformance: "RESP" },
            Field({ name: "entry", type: "MessageResponseOptionStruct" })
        )
    ),

    Command(
        {
            name: "CancelMessagesRequest", id: 0x1,
            conformance: "M", access: "F O", direction: "request", response: "status"
        },
        Field(
            { name: "MessageIDs", id: 0x0, type: "list", constraint: "max 8", conformance: "M" },
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
        Field({ name: "Allowed", id: 0x0, conformance: "M" }),
        Field({ name: "Increased", id: 0x1, conformance: "M" }),
        Field({ name: "Reduced", id: 0x2, conformance: "M" }),
        Field({ name: "Disallowed", id: 0x3, conformance: "M" }),
        Field({ name: "Banned", id: 0x4, conformance: "M" })
    ),

    Datatype(
        { name: "MessagePriorityEnum", type: "enum8" },
        Field({ name: "Low", id: 0x0, conformance: "M" }),
        Field({ name: "Medium", id: 0x1, conformance: "M" }),
        Field({ name: "High", id: 0x2, conformance: "M" }),
        Field({ name: "Critical", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "MessageStruct", type: "struct" },
        Field({ name: "MessageId", id: 0x0, type: "MessageID", conformance: "M", access: "S" }),
        Field({ name: "Priority", id: 0x1, type: "MessagePriorityEnum", default: 0, conformance: "M", access: "S" }),
        Field({ name: "MessageControl", id: 0x2, type: "MessageControlBitmap", default: 0, conformance: "M", access: "S" }),
        Field({ name: "StartTime", id: 0x3, type: "epoch-s", default: 0, conformance: "M", access: "S", quality: "X" }),
        Field({ name: "Duration", id: 0x4, type: "uint64", default: 0, conformance: "M", access: "S", quality: "X" }),
        Field({ name: "MessageText", id: 0x5, type: "string", constraint: "max 256", conformance: "M", access: "S" }),

        Field(
            {
                name: "Responses", id: 0x6, type: "list",
                default: [], constraint: "max 4", conformance: "RESP", access: "S"
            },
            Field({ name: "entry", type: "MessageResponseOptionStruct" })
        ),

        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "MessageResponseOptionStruct", type: "struct" },
        Field({ name: "MessageResponseId", id: 0x0, type: "uint32", constraint: "min 1", conformance: "M" }),
        Field({ name: "Label", id: 0x1, type: "string", constraint: "max 32", conformance: "M" })
    )
);

MatterDefinition.children.push(Messages);
