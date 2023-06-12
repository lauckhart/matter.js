/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0034, name: "SoftwareDiagnostics",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "WTRMRK",
                    description: "Node makes available the metrics for high watermark related to memory consumption.",
                    xref: { document: "core", section: "11.12.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "ThreadMetrics", base: "list",
            access: "R V", conformance: "O", constraint: "max 64",
            details: "The ThreadMetrics attribute SHALL be a list of ThreadMetricsStruct structs. Each active thread on the Node SHALL be represented by a single entry within the ThreadMetrics attribute.",
            xref: { document: "core", section: "11.12.6.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "ThreadMetricsStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentHeapFree", base: "uint64",
            access: "R V", conformance: "O",
            details: "The CurrentHeapFree attribute SHALL indicate the current amount of heap memory, in bytes, that are free for allocation. The effective amount MAY be smaller due to heap fragmentation or other reasons.",
            xref: { document: "core", section: "11.12.6.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "CurrentHeapUsed", base: "uint64",
            access: "R V", conformance: "O",
            details: "The CurrentHeapUsed attribute SHALL indicate the current amount of heap memory, in bytes, that is being used.",
            xref: { document: "core", section: "11.12.6.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentHeapHighWatermark", base: "uint64",
            access: "R V", conformance: "WTRMRK",
            details: "The CurrentHeapHighWatermark attribute SHALL indicate the maximum amount of heap memory, in bytes, that has been used by the Node. This value SHALL only be reset upon a Node reboot or upon receiving of the ResetWatermarks command.",
            xref: { document: "core", section: "11.12.6.4", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "SoftwareFault",
            access: "V", conformance: "O", priority: "info",
            details: "The SoftwareFault Event SHALL be generated when a software fault takes place on the Node. The event’s data are as follows:",
            xref: { document: "core", section: "11.12.8.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "ResetWatermarks",
            access: "M", conformance: "WTRMRK", direction: "request", response: "status",
            details: "Receipt of this command SHALL reset the following values which track high and lower watermarks:",
            xref: { document: "core", section: "11.12.7.1", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "ThreadMetricsStruct", base: "struct",
            details: "ID Field",
            xref: { document: "core", section: "11.12.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Id", base: "uint64",
                    conformance: "M",
                    xref: { document: "core", section: "11.12.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Name", base: "string",
                    conformance: "O", constraint: "max 8",
                    xref: { document: "core", section: "11.12.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "StackFreeCurrent", base: "uint32",
                    conformance: "O",
                    xref: { document: "core", section: "11.12.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "StackFreeMinimum", base: "uint32",
                    conformance: "O",
                    xref: { document: "core", section: "11.12.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "StackSize", base: "uint32",
                    conformance: "O",
                    xref: { document: "core", section: "11.12.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
