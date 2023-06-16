/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0032, name: "DiagnosticLogs",
    description: "Diagnostic Logs",
    details: "The cluster provides commands for retrieving unstructured diagnostic logs from a Node that may be used to aid in diagnostics.",
    children: [
        CommandElement({
            id: 0x0000, name: "RetrieveLogsRequest",
            conformance: "M", direction: "request", response: "RetrieveLogsResponse",
            children: [
                DatatypeElement({
                    name: "Intent", type: "IntentEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "RequestedProtocol", type: "TransferProtocolEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransferFileDesignator", type: "string",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "RetrieveLogsResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "StatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LogContent", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "UtcTimeStamp", type: "epoch-us",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "TimeSinceBoot", type: "systime-us",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "IntentEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "EndUserSupport",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NetworkDiag",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CrashLogs",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "StatusEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Exhausted",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NoLogs",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Busy",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Denied",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "TransferProtocolEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ResponsePayload",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Bdx",
                    conformance: "M"
                })
            ]
        })
    ]
}));
