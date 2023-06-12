/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0034, name: "SoftwareDiagnostics",
    description: "Software Diagnostics",
    details: "The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ThreadMetrics", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "ThreadMetricsStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentHeapFree", base: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentHeapUsed", base: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentHeapHighWatermark", base: "uint64",
            conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "ResetWatermarks",
            conformance: "O", direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "SoftwareFault",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Id", base: "uint64"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "FaultRecording", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadMetricsStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Id", base: "uint64"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StackFreeCurrent", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StackFreeMinimum", base: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StackSize", base: "uint32",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "SoftwareDiagnosticsFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "WaterMarks"
                })
            ]
        })
    ]
}));
