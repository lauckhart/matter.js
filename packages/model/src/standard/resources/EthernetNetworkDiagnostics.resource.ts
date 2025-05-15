/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EthernetNetworkDiagnostics } from "#index.js";

EthernetNetworkDiagnostics.patch({
    classification: "node", pics: "DGETH",
    details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics " +
        "metrics that may be used by a Node to assist a user or Administrator in diagnosing potential " +
        "problems. The Ethernet Network Diagnostics Cluster attempts to centralize all metrics that are " +
        "relevant to a potential Ethernet connection to a Node.",
    xref: { document: "core", section: "11.16" },

    children: [
        undefined,

        {
            xref: { document: "core", section: "11.16.4" },

            children: [
                {
                    description: "PacketCounts",
                    details: "Node makes available the counts for the number of received and transmitted packets on the ethernet " +
                        "interface."
                },
                {
                    description: "ErrorCounts",
                    details: "Node makes available the counts for the number of errors that have occurred during the reception and " +
                        "transmission of packets on the ethernet interface."
                }
            ]
        },

        {
            details: "The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical " +
                "layer of the Node. A value of null shall indicate that the interface is not currently configured or " +
                "operational.",
            xref: { document: "core", section: "11.16.6.1" }
        },

        {
            details: "The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating " +
                "mode. A value of null shall indicate that the interface is not currently configured or operational.",
            xref: { document: "core", section: "11.16.6.2" }
        },

        {
            details: "The PacketRxCount attribute shall indicate the number of packets that have been received on the " +
                "ethernet network interface. The PacketRxCount attribute shall be reset to 0 upon a reboot of the " +
                "Node.",
            xref: { document: "core", section: "11.16.6.3" }
        },

        {
            details: "The PacketTxCount attribute shall indicate the number of packets that have been successfully " +
                "transferred on the ethernet network interface. The PacketTxCount attribute shall be reset to 0 upon " +
                "a reboot of the Node.",
            xref: { document: "core", section: "11.16.6.4" }
        },

        {
            details: "The TxErrCount attribute shall indicate the number of failed packet transmissions that have occurred " +
                "on the ethernet network interface. The TxErrCount attribute shall be reset to 0 upon a reboot of the " +
                "Node.",
            xref: { document: "core", section: "11.16.6.5" }
        },

        {
            details: "The CollisionCount attribute shall indicate the number of collisions that have occurred while " +
                "attempting to transmit a packet on the ethernet network interface. The CollisionCount attribute " +
                "shall be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.16.6.6" }
        },

        {
            details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, " +
                "due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.16.6.7" }
        },

        {
            details: "The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on " +
                "the ethernet network interface. A value of null shall indicate that the interface is not currently " +
                "configured or operational.",
            xref: { document: "core", section: "11.16.6.8" }
        },

        {
            details: "The TimeSinceReset attribute shall indicate the duration of time, in minutes, that it has been since " +
                "the ethernet network interface has reset for any reason.",
            xref: { document: "core", section: "11.16.6.9" }
        },

        {
            details: "Reception of this command shall reset the following attributes to 0:" +
                "\n" +
                "  • PacketRxCount" +
                "\n" +
                "  • PacketTxCount" +
                "\n" +
                "  • TxErrCount" +
                "\n" +
                "  • CollisionCount" +
                "\n" +
                "  • OverrunCount" +
                "\n" +
                "This command has no associated data.",

            xref: { document: "core", section: "11.16.7.1" }
        },

        {
            xref: { document: "core", section: "11.16.5.1" },

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
