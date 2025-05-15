/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "EthernetNetworkDiagnostics", tag: "cluster",
    classification: "node", pics: "DGETH",
    details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics " +
        "metrics that may be used by a Node to assist a user or Administrator in diagnosing potential " +
        "problems. The Ethernet Network Diagnostics Cluster attempts to centralize all metrics that are " +
        "relevant to a potential Ethernet connection to a Node.",
    xref: "core§11.16",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "core§11.16.4",

            children: [
                {
                    name: "PKTCNT", tag: "field",
                    details: "Node makes available the counts for the number of received and transmitted packets on the ethernet " +
                        "interface."
                },
                {
                    name: "ERRCNT", tag: "field",
                    details: "Node makes available the counts for the number of errors that have occurred during the reception and " +
                        "transmission of packets on the ethernet interface."
                }
            ]
        },

        {
            name: "PhyRate", tag: "attribute",
            details: "The PHYRate attribute shall indicate the current nominal, usable speed at the top of the physical " +
                "layer of the Node. A value of null shall indicate that the interface is not currently configured or " +
                "operational.",
            xref: "core§11.16.6.1"
        },

        {
            name: "FullDuplex", tag: "attribute",
            details: "The FullDuplex attribute shall indicate if the Node is currently utilizing the full-duplex operating " +
                "mode. A value of null shall indicate that the interface is not currently configured or operational.",
            xref: "core§11.16.6.2"
        },

        {
            name: "PacketRxCount", tag: "attribute",
            details: "The PacketRxCount attribute shall indicate the number of packets that have been received on the " +
                "ethernet network interface. The PacketRxCount attribute shall be reset to 0 upon a reboot of the " +
                "Node.",
            xref: "core§11.16.6.3"
        },

        {
            name: "PacketTxCount", tag: "attribute",
            details: "The PacketTxCount attribute shall indicate the number of packets that have been successfully " +
                "transferred on the ethernet network interface. The PacketTxCount attribute shall be reset to 0 upon " +
                "a reboot of the Node.",
            xref: "core§11.16.6.4"
        },

        {
            name: "TxErrCount", tag: "attribute",
            details: "The TxErrCount attribute shall indicate the number of failed packet transmissions that have occurred " +
                "on the ethernet network interface. The TxErrCount attribute shall be reset to 0 upon a reboot of the " +
                "Node.",
            xref: "core§11.16.6.5"
        },

        {
            name: "CollisionCount", tag: "attribute",
            details: "The CollisionCount attribute shall indicate the number of collisions that have occurred while " +
                "attempting to transmit a packet on the ethernet network interface. The CollisionCount attribute " +
                "shall be reset to 0 upon a reboot of the Node.",
            xref: "core§11.16.6.6"
        },

        {
            name: "OverrunCount", tag: "attribute",
            details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, " +
                "due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
            xref: "core§11.16.6.7"
        },

        {
            name: "CarrierDetect", tag: "attribute",
            details: "The CarrierDetect attribute shall indicate the value of the Carrier Detect control signal present on " +
                "the ethernet network interface. A value of null shall indicate that the interface is not currently " +
                "configured or operational.",
            xref: "core§11.16.6.8"
        },

        {
            name: "TimeSinceReset", tag: "attribute",
            details: "The TimeSinceReset attribute shall indicate the duration of time, in minutes, that it has been since " +
                "the ethernet network interface has reset for any reason.",
            xref: "core§11.16.6.9"
        },

        {
            name: "ResetCounts", tag: "command",

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

            xref: "core§11.16.7.1"
        },

        {
            name: "PHYRateEnum", tag: "datatype",
            xref: "core§11.16.5.1",

            children: [
                { name: "Rate10M", tag: "field", description: "PHY rate is 10Mbps" },
                { name: "Rate100M", tag: "field", description: "PHY rate is 100Mbps" },
                { name: "Rate1G", tag: "field", description: "PHY rate is 1Gbps" },
                { name: "Rate25G", tag: "field", description: "PHY rate is 2.5Gbps" },
                { name: "Rate5G", tag: "field", description: "PHY rate is 5Gbps" },
                { name: "Rate10G", tag: "field", description: "PHY rate is 10Gbps" },
                { name: "Rate40G", tag: "field", description: "PHY rate is 40Gbps" },
                { name: "Rate100G", tag: "field", description: "PHY rate is 100Gbps" },
                { name: "Rate200G", tag: "field", description: "PHY rate is 200Gbps" },
                { name: "Rate400G", tag: "field", description: "PHY rate is 400Gbps" }
            ]
        }
    ]
});
