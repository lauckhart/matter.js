/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0034, name: "SoftwareDiagnostics",
    description: "Software Diagnostics",
    details: "The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ThreadMetrics", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "ThreadMetricsStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentHeapFree", type: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentHeapUsed", type: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentHeapHighWatermark", type: "uint64",
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
                    name: "Id", type: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "FaultRecording", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadMetricsStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Id", type: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StackFreeCurrent", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StackFreeMinimum", type: "uint32",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "StackSize", type: "uint32",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "SoftwareDiagnosticsFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "WaterMarks",
                    conformance: "M"
                })
            ]
        })
    ]
}));
