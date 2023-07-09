/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "SoftwareDiagnostics", id: 0x34, classification: "node",
    description: "Software Diagnostics",
    details: "The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that " +
             "MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    xref: { document: "core", section: "11.12" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.12.4" },
            children: [ {
                tag: "datatype", name: "WTRMRK", id: 0x0, description: "Watermarks",
                details: "Node makes available the metrics for high watermark related to memory consumption."
            } ]
        },

        {
            tag: "attribute", name: "ThreadMetrics", id: 0x0, type: "list", access: "R V", conformance: "O",
            constraint: "max 64",
            details: "The ThreadMetrics attribute SHALL be a list of ThreadMetricsStruct structs. Each active thread on " +
                     "the Node SHALL be represented by a single entry within the ThreadMetrics attribute.",
            xref: { document: "core", section: "11.12.6.1" },
            children: [ { tag: "datatype", name: "entry", type: "ThreadMetricsStruct" } ]
        },

        {
            tag: "attribute", name: "CurrentHeapFree", id: 0x1, type: "uint64", access: "R V", conformance: "O",
            default: 0,
            details: "The CurrentHeapFree attribute SHALL indicate the current amount of heap memory, in bytes, that are " +
                     "free for allocation. The effective amount MAY be smaller due to heap fragmentation or other reasons.",
            xref: { document: "core", section: "11.12.6.2" }
        },

        {
            tag: "attribute", name: "CurrentHeapUsed", id: 0x2, type: "uint64", access: "R V", conformance: "O",
            default: 0,
            details: "The CurrentHeapUsed attribute SHALL indicate the current amount of heap memory, in bytes, that is " +
                     "being used.",
            xref: { document: "core", section: "11.12.6.3" }
        },

        {
            tag: "attribute", name: "CurrentHeapHighWatermark", id: 0x3, type: "uint64", access: "R V",
            conformance: "WTRMRK", default: 0,
            details: "The CurrentHeapHighWatermark attribute SHALL indicate the maximum amount of heap memory, in bytes, " +
                     "that has been used by the Node. This value SHALL only be reset upon a Node reboot or upon receiving " +
                     "of the ResetWatermarks command.",
            xref: { document: "core", section: "11.12.6.4" }
        },

        {
            tag: "event", name: "SoftwareFault", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "The SoftwareFault Event SHALL be generated when a software fault takes place on the Node. The " +
                     "event’s data are as follows:",
            xref: { document: "core", section: "11.12.8.1" },

            children: [
                { tag: "datatype", name: "Id", id: 0x0, type: "uint64", conformance: "M", default: 0 },
                {
                    tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "max 8",
                    default: "empty"
                },

                {
                    tag: "datatype", name: "FaultRecording", id: 0x2, type: "octstr", conformance: "O",
                    constraint: "max 1024",
                    details: "The FaultRecording field SHALL be a manufacturer-specified payload intended to convey information " +
                             "to assist in further diagnosing or debugging a software fault. The FaultRecording field MAY be used " +
                             "to convey information such as, but not limited to, thread backtraces or register contents.",
                    xref: { document: "core", section: "11.12.8.1.1" }
                }
            ]
        },

        {
            tag: "command", name: "ResetWatermarks", id: 0x0, access: "M", conformance: "WTRMRK",
            direction: "request", response: "status",
            details: "Receipt of this command SHALL reset the following values which track high and lower watermarks:",
            xref: { document: "core", section: "11.12.7.1" }
        },

        {
            tag: "datatype", name: "ThreadMetricsStruct", type: "struct", conformance: "M",
            xref: { document: "core", section: "11.12.5.1" },

            children: [
                {
                    tag: "datatype", name: "Id", id: 0x0, type: "uint64", conformance: "M",
                    details: "The Id field SHALL be a server-assigned per-thread unique ID that is constant for the duration of " +
                             "the thread. Efforts SHOULD be made to avoid reusing ID values when possible.",
                    xref: { document: "core", section: "11.12.5.1.1" }
                },

                {
                    tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "O", constraint: "max 8",
                    default: "empty",
                    details: "The Name field SHALL be set to a vendor defined name or prefix of the software thread that is " +
                             "static for the duration of the thread.",
                    xref: { document: "core", section: "11.12.5.1.2" }
                },

                {
                    tag: "datatype", name: "StackFreeCurrent", id: 0x2, type: "uint32", conformance: "O",
                    details: "The StackFreeCurrent field SHALL indicate the current amount of stack memory, in bytes, that are " +
                             "not being utilized on the respective thread.",
                    xref: { document: "core", section: "11.12.5.1.3" }
                },

                {
                    tag: "datatype", name: "StackFreeMinimum", id: 0x3, type: "uint32", conformance: "O",
                    details: "The StackFreeMinimum field SHALL indicate the minimum amount of stack memory, in bytes, that has " +
                             "been available at any point between the current time and this attribute being reset or initialized " +
                             "on the respective thread. This value SHALL only be reset upon a Node reboot or upon receiving of " +
                             "the ResetWatermarks command.",
                    xref: { document: "core", section: "11.12.5.1.4" }
                },

                {
                    tag: "datatype", name: "StackSize", id: 0x4, type: "uint32", conformance: "O",
                    details: "The StackSize field SHALL indicate the amount of stack memory, in bytes, that has been allocated",
                    xref: { document: "core", section: "11.12.5.1.5" }
                }
            ]
        }
    ]
});
