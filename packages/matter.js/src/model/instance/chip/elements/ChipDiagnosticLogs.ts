/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0032, name: "DiagnosticLogs",
    description: "Diagnostic Logs",
    details: "The cluster provides commands for retrieving unstructured diagnostic logs from a Node that may be used to aid in diagnostics.",
    children: [
        CommandElement({
            id: 0x0000, name: "RetrieveLogsRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "RetrieveLogsResponse",
            children: [
                DatatypeElement({
                    name: "Intent", base: "IntentEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Intent", base: "IntentEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RequestedProtocol", base: "TransferProtocolEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RequestedProtocol", base: "TransferProtocolEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TransferFileDesignator", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "TransferFileDesignator", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "RetrieveLogsResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "StatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "StatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LogContent", base: "LONG_OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "LogContent", base: "LONG_OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UtcTimeStamp", base: "epoch_us",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "UtcTimeStamp", base: "epoch_us",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "TimeSinceBoot", base: "systime_us",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "TimeSinceBoot", base: "systime_us",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        })
    ]
}))