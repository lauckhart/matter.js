/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "SoftwareDiagnostics",
    classification: "node", pics: "DGSW",
    details: "The Software Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that " +
        "may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
        "Software Diagnostics Cluster attempts to centralize all metrics that are relevant to the software " +
        "that may be running on a Node.",
    xref: "core§11.13",

    children: [
        {
            tag: "attribute", name: "FeatureMap",
            xref: "core§11.13.4",
            children: [{
                tag: "field", name: "WTRMRK",
                details: "Node makes available the metrics for high watermark related to memory consumption."
            }]
        },

        {
            tag: "attribute", name: "ThreadMetrics",
            details: "The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on " +
                "the Node shall be represented by a single entry within the ThreadMetrics attribute.",
            xref: "core§11.13.6.1"
        },

        {
            tag: "attribute", name: "CurrentHeapFree",
            details: "The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are " +
                "free for allocation. The effective amount may be smaller due to heap fragmentation or other reasons.",
            xref: "core§11.13.6.2"
        },

        {
            tag: "attribute", name: "CurrentHeapUsed",
            details: "The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is " +
                "being used.",
            xref: "core§11.13.6.3"
        },

        {
            tag: "attribute", name: "CurrentHeapHighWatermark",
            details: "The CurrentHeapHighWatermark attribute shall indicate the maximum amount of heap memory, in bytes, " +
                "that has been used by the Node. This value shall only be reset upon a Node reboot or upon receiving " +
                "of the ResetWatermarks command.",
            xref: "core§11.13.6.4"
        },

        {
            tag: "event", name: "SoftwareFault",
            details: "The SoftwareFault Event shall be generated when a software fault takes place on the Node.",
            xref: "core§11.13.8.1",

            children: [
                {
                    tag: "field", name: "Id",
                    details: "The ID field shall be set to the ID of the software thread in which the last software fault " +
                        "occurred.",
                    xref: "core§11.13.8.1.1"
                },

                {
                    tag: "field", name: "Name",
                    details: "The Name field shall be set to a manufacturer-specified name or prefix of the software thread in " +
                        "which the last software fault occurred.",
                    xref: "core§11.13.8.1.2"
                },

                {
                    tag: "field", name: "FaultRecording",
                    details: "The FaultRecording field shall be a manufacturer-specified payload intended to convey information to " +
                        "assist in further diagnosing or debugging a software fault. The FaultRecording field may be used to " +
                        "convey information such as, but not limited to, thread backtraces or register contents.",
                    xref: "core§11.13.8.1.3"
                }
            ]
        },

        {
            tag: "command", name: "ResetWatermarks",

            details: "Receipt of this command shall reset the following values which track high and lower watermarks:" +
                "\n" +
                "  • The StackFreeMinimum field of the ThreadMetrics attribute" +
                "\n" +
                "  • The CurrentHeapHighWatermark attribute This command has no payload." +
                "\n" +
                "Effect on Receipt" +
                "\n" +
                "On receipt of this command, the Node shall make the following modifications to attributes it " +
                "supports:" +
                "\n" +
                "If implemented, the server shall set the value of the CurrentHeapHighWatermark attribute to the " +
                "value of the CurrentHeapUsed attribute." +
                "\n" +
                "If implemented, the server shall set the value of the StackFreeMinimum field for every thread to the " +
                "value of the corresponding thread’s StackFreeCurrent field.",

            xref: "core§11.13.7.1"
        },

        {
            tag: "datatype", name: "ThreadMetricsStruct",
            xref: "core§11.13.5.1",

            children: [
                {
                    tag: "field", name: "Id",
                    details: "The Id field shall be a server-assigned per-thread unique ID that is constant for the duration of " +
                        "the thread. Efforts SHOULD be made to avoid reusing ID values when possible.",
                    xref: "core§11.13.5.1.1"
                },

                {
                    tag: "field", name: "Name",
                    details: "The Name field shall be set to a vendor defined name or prefix of the software thread that is static " +
                        "for the duration of the thread.",
                    xref: "core§11.13.5.1.2"
                },

                {
                    tag: "field", name: "StackFreeCurrent",
                    details: "The StackFreeCurrent field shall indicate the current amount of stack memory, in bytes, that are not " +
                        "being utilized on the respective thread.",
                    xref: "core§11.13.5.1.3"
                },

                {
                    tag: "field", name: "StackFreeMinimum",
                    details: "The StackFreeMinimum field shall indicate the minimum amount of stack memory, in bytes, that has " +
                        "been available at any point between the current time and this attribute being reset or initialized " +
                        "on the respective thread. This value shall only be reset upon a Node reboot or upon receiving of the " +
                        "ResetWatermarks command.",
                    xref: "core§11.13.5.1.4"
                },

                {
                    tag: "field", name: "StackSize",
                    details: "The StackSize field shall indicate the amount of stack memory, in bytes, that has been allocated for " +
                        "use by the respective thread.",
                    xref: "core§11.13.5.1.5"
                }
            ]
        }
    ]
});
