/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EthernetNetworkDiagnostics } from "#index.js";

EthernetNetworkDiagnostics.patch({
    details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics " +
        "metrics that may be used by a Node to assist a user or Administrator in diagnosing potential " +
        "problems. The Ethernet Network Diagnostics Cluster attempts to centralize all metrics that are " +
        "relevant to a potential Ethernet connection to a Node.",
    xref: { document: "core", section: "11.16" },

    children: [
        undefined,
        { children: [{ description: "PacketCounts" }, { description: "ErrorCounts" }] },
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
                { description: "PHY rate is 10Mbps" },
                { description: "PHY rate is 100Mbps" },
                { description: "PHY rate is 1Gbps" },
                { description: "PHY rate is 2.5Gbps" },
                { description: "PHY rate is 5Gbps" },
                { description: "PHY rate is 10Gbps" },
                { description: "PHY rate is 40Gbps" },
                { description: "PHY rate is 100Gbps" },
                { description: "PHY rate is 200Gbps" },
                { description: "PHY rate is 400Gbps" }
            ]
        }
    ]
});
