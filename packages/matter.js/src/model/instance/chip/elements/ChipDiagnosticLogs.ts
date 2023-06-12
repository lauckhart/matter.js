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
            access: "R", conformance: "M", direction: "request", response: "RetrieveLogsResponse",
            children: [
                DatatypeElement({
                    name: "Intent", base: "IntentEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "RequestedProtocol", base: "TransferProtocolEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransferFileDesignator", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "RetrieveLogsResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "StatusEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LogContent", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "UtcTimeStamp", base: "epoch-us",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "TimeSinceBoot", base: "systime-us",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "IntentEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "EndUserSupport",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NetworkDiag",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CrashLogs",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "StatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Exhausted",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NoLogs",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Busy",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Denied",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "TransferProtocolEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ResponsePayload",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Bdx",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
