/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0032, name: "DiagnosticLogs",
    classification: "node", description: "Diagnostic Logs",
    children: [
        {
            tag: "command", id: 0x0000, name: "RetrieveLogsRequest",
            access: "O", conformance: "M", direction: "request", response: "RetrieveLogsResponse",
            details: "Reception of this command starts the process of retrieving diagnostic " +
                     "logs from a Node. The data for this command is as follows",
            xref: { document: "core", section: "11.10.5.1" },
            children: [
                {
                    tag: "datatype", name: "Intent",
                    conformance: "M", type: "IntentEnum"
                },

                {
                    tag: "datatype", name: "RequestedProtocol",
                    conformance: "M", type: "TransferProtocolEnum"
                },

                {
                    tag: "datatype", name: "TransferFileDesignator",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "RetrieveLogsResponse",
            conformance: "M", direction: "response",
            details: "This SHALL be generated as a response to the RetrieveLogsRequest. The " +
                     "data for this command is shown in the following",
            xref: { document: "core", section: "11.10.5.2" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "StatusEnum"
                },

                {
                    tag: "datatype", name: "LogContent",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "UtcTimeStamp",
                    conformance: "O", type: "epoch-us"
                },

                {
                    tag: "datatype", name: "TimeSinceBoot",
                    conformance: "O", type: "systime-us"
                }
            ]
        },

        {
            tag: "datatype", name: "TransferProtocolEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.10.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "EndUserSupport",
                    conformance: "M",
                    xref: { document: "core", section: "11.10.4.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Bdx",
                    conformance: "M",
                    xref: { document: "core", section: "11.10.4.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "CrashLogs",
                    conformance: "M",
                    xref: { document: "core", section: "11.10.4.1" }
                },

                {
                    tag: "datatype", id: 0x0000, name: "ResponsePayload",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Exhausted",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "NoLogs",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Busy",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Denied",
                    conformance: "M"
                }
            ]
        }
    ]
});
