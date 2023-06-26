/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "DiagnosticLogs", id: 0x32, classification: "node",
    description: "Diagnostic Logs",
    details: "The cluster provides commands for retrieving unstructured diagnostic logs from a Node that may be " +
             "used to aid in diagnostics.",
    xref: { document: "core", section: "11.10" },

    children: [
        {
            tag: "command", name: "RetrieveLogsRequest", id: 0x0, access: "O", conformance: "M",
            direction: "request", response: "RetrieveLogsResponse",
            details: "Reception of this command starts the process of retrieving diagnostic logs from a Node. The data " +
                     "for this command is as follows:",
            xref: { document: "core", section: "11.10.5.1" },

            children: [
                { tag: "datatype", name: "Intent", id: 0x0, type: "IntentEnum", conformance: "M" },
                { tag: "datatype", name: "RequestedProtocol", id: 0x1, type: "TransferProtocolEnum", conformance: "M" },
                {
                    tag: "datatype", name: "TransferFileDesignator", id: 0x2, type: "string", conformance: "O",
                    constraint: "max 32"
                }
            ]
        },

        {
            tag: "command", name: "RetrieveLogsResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This SHALL be generated as a response to the RetrieveLogsRequest. The data for this command is " +
                     "shown in the following.",
            xref: { document: "core", section: "11.10.5.2" },

            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M" },
                { tag: "datatype", name: "LogContent", id: 0x1, type: "octstr", conformance: "M" },
                { tag: "datatype", name: "UtcTimeStamp", id: 0x2, type: "epoch-us", conformance: "O" },
                { tag: "datatype", name: "TimeSinceBoot", id: 0x3, type: "systime-us", conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "IntentEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.10.4.1" },
            children: [
                { tag: "datatype", name: "EndUserSupport", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "NetworkDiag", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "CrashLogs", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.10.4.2" },

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Exhausted", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "NoLogs", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Busy", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Denied", id: 0x4, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "TransferProtocolEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.10.4.3" },
            children: [
                { tag: "datatype", name: "ResponsePayload", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Bdx", id: 0x1, conformance: "M" }
            ]
        }
    ]
});