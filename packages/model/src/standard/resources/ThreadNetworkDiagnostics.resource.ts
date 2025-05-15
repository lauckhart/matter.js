/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThreadNetworkDiagnostics } from "#index.js";

ThreadNetworkDiagnostics.patch({
    details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
        "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
        "Thread Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
        "potential Thread radio running on a Node.",
    xref: { document: "core", section: "11.14" },

    children: [
        undefined,

        {
            children: [
                { description: "PacketCounts" },
                { description: "ErrorCounts" },
                { description: "MleCounts" },
                { description: "MacCounts" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Indicates an unspecified fault." },
                { description: "Indicates the Thread link is down." },
                { description: "Indicates there has been Thread hardware failure." },
                { description: "Indicates the Thread network is jammed." }
            ]
        },

        { children: [{ description: "Node is connected" }, { description: "Node is not connected" }] },

        {
            children: [
                { description: "Unspecified routing role." },
                {
                    description: "The Node does not currently have a role as a result of the Thread interface not currently being configured or operational."
                },
                { description: "The Node acts as a Sleepy End Device with RX-off-when-idle sleepy radio behavior." },
                { description: "The Node acts as an End Device without RX- off-when-idle sleepy radio behavior." },
                { description: "The Node acts as an Router Eligible End Device." },
                { description: "The Node acts as a Router Device." },
                { description: "The Node acts as a Leader Device." }
            ]
        }
    ]
});
