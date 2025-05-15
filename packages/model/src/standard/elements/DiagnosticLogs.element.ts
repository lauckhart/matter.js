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
    CommandElement as Command,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const DiagnosticLogs = Cluster(
    { id: 0x32, name: "DiagnosticLogs" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Command(
        {
            id: 0x0, name: "RetrieveLogsRequest",
            access: "O", conformance: "M", direction: "request", response: "RetrieveLogsResponse"
        },
        Field({ id: 0x0, name: "Intent", type: "IntentEnum", conformance: "M" }),
        Field({ id: 0x1, name: "RequestedProtocol", type: "TransferProtocolEnum", conformance: "M" }),
        Field({ id: 0x2, name: "TransferFileDesignator", type: "string", conformance: "O", constraint: "max 32" })
    ),

    Command(
        { id: 0x1, name: "RetrieveLogsResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "LogContent", type: "octstr", conformance: "M", constraint: "max 1024" }),
        Field({ id: 0x2, name: "UtcTimeStamp", type: "epoch-us", conformance: "O" }),
        Field({ id: 0x3, name: "TimeSinceBoot", type: "systime-us", conformance: "O" })
    ),

    Datatype(
        { name: "IntentEnum", type: "enum8" },
        Field({ id: 0x0, name: "EndUserSupport", conformance: "M" }),
        Field({ id: 0x1, name: "NetworkDiag", conformance: "M" }),
        Field({ id: 0x2, name: "CrashLogs", conformance: "M" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "Exhausted", conformance: "M" }),
        Field({ id: 0x2, name: "NoLogs", conformance: "M" }),
        Field({ id: 0x3, name: "Busy", conformance: "M" }),
        Field({ id: 0x4, name: "Denied", conformance: "M" })
    ),

    Datatype(
        { name: "TransferProtocolEnum", type: "enum8" },
        Field({ id: 0x0, name: "ResponsePayload", conformance: "M" }),
        Field({ id: 0x1, name: "Bdx", conformance: "M" })
    )
);

MatterDefinition.children.push(DiagnosticLogs);
