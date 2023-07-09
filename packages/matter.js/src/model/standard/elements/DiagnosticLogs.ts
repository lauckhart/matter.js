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
                {
                    tag: "datatype", name: "Intent", id: 0x0, type: "IntentEnum", conformance: "M",
                    details: "This field SHALL indicate why the diagnostic logs are being retrieved from the Node. A Node MAY " +
                             "utilize this field to selectively determine the logs to transfer.",
                    xref: { document: "core", section: "11.10.5.1.1" }
                },

                {
                    tag: "datatype", name: "RequestedProtocol", id: 0x1, type: "TransferProtocolEnum", conformance: "M",

                    details: "This field SHALL be used to indicate how the log transfer is to be realized. If the field is set to " +
                             "BDX, then if the receiving Node supports BDX it SHALL attempt to use BDX to transfer any potential " +
                             "diagnostic logs; if the receiving Node does not support BDX then the Node SHALL follow the " +
                             "requirements defined for a TransferProtocolEnum of ResponsePayload. If this field is set to " +
                             "ResponsePayload the receiving Node SHALL only utilize the LogContent field of the " +
                             "RetreiveLogsResponse command to transfer diagnostic log information.",

                    xref: { document: "core", section: "11.10.5.1.2" }
                },

                {
                    tag: "datatype", name: "TransferFileDesignator", id: 0x2, type: "string", conformance: "O",
                    constraint: "max 32",
                    details: "This field SHALL be present if the RequestedProtocol is BDX. The TransferFileDesignator SHALL be " +
                             "set as the File Designator of the BDX transfer if initiated.",
                    xref: { document: "core", section: "11.10.5.1.3" }
                }
            ]
        },

        {
            tag: "command", name: "RetrieveLogsResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This SHALL be generated as a response to the RetrieveLogsRequest. The data for this command is " +
                     "shown in the following.",
            xref: { document: "core", section: "11.10.5.2" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                    details: "This field SHALL indicate the result of an attempt to retrieve diagnostic logs.",
                    xref: { document: "core", section: "11.10.5.2.1" }
                },

                {
                    tag: "datatype", name: "LogContent", id: 0x1, type: "octstr", conformance: "M", constraint: "1024",
                    details: "This field SHALL be included in the command if the Status field has a value of Success or " +
                             "Exhausted. A Node SHOULD utilize this field to transfer the newest diagnostic log entries. This " +
                             "field SHALL be empty if BDX is requested and the Status field has a value of Success.",
                    xref: { document: "core", section: "11.10.5.2.2" }
                },

                {
                    tag: "datatype", name: "UtcTimeStamp", id: 0x2, type: "epoch-us", conformance: "O",
                    details: "This field SHOULD be included in the command if the Status field has a value of Success and the " +
                             "Node maintains a wall clock. When included, the UTCTimeStamp field SHALL contain the value of the " +
                             "oldest log entry in the diagnostic logs that are being transferred.",
                    xref: { document: "core", section: "11.10.5.2.3" }
                },

                {
                    tag: "datatype", name: "TimeSinceBoot", id: 0x3, type: "systime-us", conformance: "O",
                    details: "This field SHOULD be included in the command if the Status field has a value of Success. When " +
                             "included, the TimeSinceBoot field SHALL contain the time of the oldest log entry in the diagnostic " +
                             "logs that are being transferred represented by the number of microseconds since the last time the " +
                             "Node went through a reboot.",
                    xref: { document: "core", section: "11.10.5.2.4" }
                }
            ]
        },

        {
            tag: "datatype", name: "IntentEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.10.4.1" },

            children: [
                {
                    tag: "datatype", name: "EndUserSupport", id: 0x0, conformance: "M",
                    details: "SHALL indicate that the purpose of the log request is to retrieve logs for the intention of " +
                             "providing support to an end-user.",
                    xref: { document: "core", section: "11.10.4.1.1" }
                },

                {
                    tag: "datatype", name: "NetworkDiag", id: 0x1, conformance: "M",
                    details: "SHALL indicate that the purpose of the log request is to diagnose the network(s) for which the Node " +
                             "is currently commissioned (and/or connected) or has previously been commissioned (and/or connected).",
                    xref: { document: "core", section: "11.10.4.1.2" }
                },

                {
                    tag: "datatype", name: "CrashLogs", id: 0x2, conformance: "M",
                    details: "SHALL indicate that the purpose of the log request is to retrieve any crash logs that may be " +
                             "present on a Node.",
                    xref: { document: "core", section: "11.10.4.1.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.10.4.2" },

            children: [
                {
                    tag: "datatype", name: "Success", id: 0x0, conformance: "M",
                    details: "SHALL be used if diagnostic logs will be or are being transferred.",
                    xref: { document: "core", section: "11.10.4.2.1" }
                },
                {
                    tag: "datatype", name: "Exhausted", id: 0x1, conformance: "M",
                    details: "SHALL be used when a BDX session is requested, however, all available logs were provided in a",
                    xref: { document: "core", section: "11.10.4.2.2" }
                },

                {
                    tag: "datatype", name: "NoLogs", id: 0x2, conformance: "M",
                    details: "SHALL be used if the Node does not currently have any diagnostic logs of the requested type " +
                             "(Intent) to transfer.",
                    xref: { document: "core", section: "11.10.4.2.3" }
                },

                {
                    tag: "datatype", name: "Busy", id: 0x3, conformance: "M",
                    details: "SHALL be used if the Node is unable to handle the request (e.g. in the process of another transfer) " +
                             "and the Client SHOULD re-attempt the request later.",
                    xref: { document: "core", section: "11.10.4.2.4" }
                },

                {
                    tag: "datatype", name: "Denied", id: 0x4, conformance: "M",
                    details: "SHALL be used if the Node is denying the current transfer of diagnostic logs for any reason.",
                    xref: { document: "core", section: "11.10.4.2.5" }
                }
            ]
        },

        {
            tag: "datatype", name: "TransferProtocolEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.10.4.3" },

            children: [
                {
                    tag: "datatype", name: "ResponsePayload", id: 0x0, conformance: "M",
                    details: "SHALL be used by a Client to request that logs are transferred using the LogContent attribute of " +
                             "the response",
                    xref: { document: "core", section: "11.10.4.3.1" }
                },

                {
                    tag: "datatype", name: "Bdx", id: 0x1, conformance: "M",
                    details: "SHALL be used by a Client to request that logs are transferred using BDX as defined in BDX Protocol",
                    xref: { document: "core", section: "11.10.4.3.2" }
                }
            ]
        }
    ]
});
