/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DiagnosticLogs } from "#index.js";

DiagnosticLogs.patch({
    details: "This Cluster supports an interface to a Node. It provides commands for retrieving unstructured " +
        "diagnostic logs from a Node that may be used to aid in diagnostics. It will often be the case that " +
        "unstructured diagnostic logs will be Node-wide and not specific to any subset of Endpoints. When " +
        "present, this Cluster shall be implemented once for the Node. The Node SHOULD also implement the BDX " +
        "Initiator and BDX Sender roles as defined in the BDX Protocol.",
    xref: { document: "core", section: "11.11" },

    children: [
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Logs to be used for end- user support" },
                { description: "Logs to be used for network diagnostics" },
                { description: "Obtain crash logs from the Node" }
            ]
        },

        {
            children: [
                { description: "Successful transfer of logs" },
                { description: "All logs has been transferred" },
                { description: "No logs of the requested type available" },
                { description: "Unable to handle request, retry later" },
                { description: "The request is denied, no logs being transferred" }
            ]
        },

        {
            children: [
                { description: "Logs to be returned as a response" },
                { description: "Logs to be returned using BDX" }
            ]
        }
    ]
});
