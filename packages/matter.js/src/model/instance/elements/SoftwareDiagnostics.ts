/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0034, name: "SoftwareDiagnostics",
    classification: "node", description: "Software Diagnostics",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "ThreadMetrics",
            access: "R V", conformance: "O", constraint: "max 64", default: undefined, type: "list",
            details: "The ThreadMetrics attribute SHALL be a list of ThreadMetricsStruct " +
                     "structs. Each active thread on the Node SHALL be represented by a " +
                     "single entry within the ThreadMetrics attribute",
            xref: { document: "core", section: "11.12.6.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "ThreadMetricsStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "CurrentHeapFree",
            access: "R V", conformance: "O", default: undefined, type: "uint64",
            details: "The CurrentHeapFree attribute SHALL indicate the current amount of " +
                     "heap memory, in bytes, that are free for allocation. The effective " +
                     "amount MAY be smaller due to heap fragmentation or other reasons",
            xref: { document: "core", section: "11.12.6.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "CurrentHeapUsed",
            access: "R V", conformance: "O", default: undefined, type: "uint64",
            details: "The CurrentHeapUsed attribute SHALL indicate the current amount of " +
                     "heap memory, in bytes, that is being used",
            xref: { document: "core", section: "11.12.6.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "CurrentHeapHighWatermark",
            access: "R V", conformance: "WTRMRK", default: undefined, type: "uint64",
            details: "The CurrentHeapHighWatermark attribute SHALL indicate the maximum " +
                     "amount of heap memory, in bytes, that has been used by the Node. This " +
                     "value SHALL only be reset upon a Node reboot or upon receiving of the " +
                     "ResetWatermarks command",
            xref: { document: "core", section: "11.12.6.4" }
        },

        {
            tag: "event", id: 0x0000, name: "SoftwareFault",
            access: "V", conformance: "O", priority: "info",
            details: "The SoftwareFault Event SHALL be generated when a software fault takes" +
                     " place on the Node. The event’s data are as follows",
            xref: { document: "core", section: "11.12.8.1" },
            children: [
                {
                    tag: "datatype", name: "Id",
                    conformance: "M", type: "uint64"
                },

                {
                    tag: "datatype", name: "Name",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "FaultRecording",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "ResetWatermarks",
            access: "M", conformance: "WTRMRK", direction: "request", response: "status",
            details: "Receipt of this command SHALL reset the following values which track " +
                     "high and lower watermarks",
            xref: { document: "core", section: "11.12.7.1" }
        },

        {
            tag: "datatype", name: "ThreadMetricsStruct",
            conformance: "M", type: "struct",
            details: "ID Field",
            xref: { document: "core", section: "11.12.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Id",
                    conformance: "M", default: undefined, type: "uint64",
                    xref: { document: "core", section: "11.12.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Name",
                    conformance: "O", constraint: "max 8", default: "empty", type: "string",
                    xref: { document: "core", section: "11.12.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "StackFreeCurrent",
                    conformance: "O", default: "MS", type: "uint32",
                    xref: { document: "core", section: "11.12.5.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "StackFreeMinimum",
                    conformance: "O", default: "MS", type: "uint32",
                    xref: { document: "core", section: "11.12.5.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "StackSize",
                    conformance: "O", default: "MS", type: "uint32",
                    xref: { document: "core", section: "11.12.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "ThreadMetricsStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Id",
                    conformance: "M", type: "uint64"
                },

                {
                    tag: "datatype", name: "Name",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "StackFreeCurrent",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "StackFreeMinimum",
                    conformance: "O", type: "uint32"
                },

                {
                    tag: "datatype", name: "StackSize",
                    conformance: "O", type: "uint32"
                }
            ]
        }
    ]
});
