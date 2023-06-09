/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0032, name: "DiagnosticLogs",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        CommandElement({
            id: 0x0000, name: "RetrieveLogsRequest",
            access: "O", conformance: "M", direction: "request", response: "RetrieveLogsResponse",
            details: "Reception of this command starts the process of retrieving diagnostic logs from a Node. The data for this command is as follows:",
            xref: { section: "11.10.5.1", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "RetrieveLogsResponse",
            conformance: "M", direction: "response",
            details: "This SHALL be generated as a response to the RetrieveLogsRequest. The data for this command is shown in the following.",
            xref: { section: "11.10.5.2", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "IntentEnum", base: "enum8.",
            details: "This data type is derived from enum8.",
            xref: { section: "11.10.4.1", document: "core", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "EndUserSupport",
                    conformance: "M",
                    xref: { section: "11.10.4.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "NetworkDiag",
                    conformance: "M",
                    xref: { section: "11.10.4.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "CrashLogs",
                    conformance: "M",
                    xref: { section: "11.10.4.1", document: "core", version: "1.1" }
                })
            ]
        })
    ]
}))