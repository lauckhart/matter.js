/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0032, name: "DiagnosticLogs",
    description: "Diagnostic Logs",
    details: "The cluster provides commands for retrieving unstructured diagnostic logs from a Node that may be used to aid in diagnostics.",
    children: [
        CommandElement({
            id: 0x0000, name: "RetrieveLogsRequest",
            direction: "request", response: "RetrieveLogsResponse",
            children: [
                DatatypeElement({
                    name: "Intent", base: "IntentEnum"
                }),

                DatatypeElement({
                    name: "RequestedProtocol", base: "TransferProtocolEnum"
                }),

                DatatypeElement({
                    name: "TransferFileDesignator", base: "string",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "RetrieveLogsResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "StatusEnum"
                }),

                DatatypeElement({
                    name: "LogContent", base: "octstr"
                }),

                DatatypeElement({
                    name: "UtcTimeStamp", base: "epoch-us",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "TimeSinceBoot", base: "systime-us",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "IntentEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "EndUserSupport"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NetworkDiag"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CrashLogs"
                })
            ]
        }),

        DatatypeElement({
            name: "StatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Exhausted"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NoLogs"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Busy"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Denied"
                })
            ]
        }),

        DatatypeElement({
            name: "TransferProtocolEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ResponsePayload"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Bdx"
                })
            ]
        })
    ]
}));
