/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "EthernetNetworkDiagnostics", id: 0x37, classification: "node",
    description: "Ethernet Network Diagnostics",
    details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics " +
             "metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential " +
             "problems.",
    xref: { document: "core", section: "11.15" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",

            children: [
                {
                    tag: "datatype", name: "PKTCNT", id: 0x0,
                    description: "Node makes available the counts for the number of received and transmitted packets on the ethernet interface.",
                    xref: { document: "core", section: "11.15.4" }
                },
                {
                    tag: "datatype", name: "ERRCNT", id: 0x1,
                    description: "Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the ethernet interface.",
                    xref: { document: "core", section: "11.15.4" }
                }
            ]
        },

        {
            tag: "attribute", name: "PhyRate", id: 0x0, type: "PHYRateEnum", access: "R V", conformance: "O",
            default: null, quality: "X",
            details: "The PHYRate attribute SHALL indicate the current nominal, usable speed at the top of the physical " +
                     "layer of the Node. A value of null SHALL indicate that the interface is not currently configured or " +
                     "operational.",
            xref: { document: "core", section: "11.15.6.1" }
        },

        {
            tag: "attribute", name: "FullDuplex", id: 0x1, type: "bool", access: "R V", conformance: "O",
            default: null, quality: "X",
            details: "The FullDuplex attribute SHALL indicate if the Node is currently utilizing the full-duplex " +
                     "operating mode. A value of null SHALL indicate that the interface is not currently configured or " +
                     "operational.",
            xref: { document: "core", section: "11.15.6.2" }
        },

        {
            tag: "attribute", name: "PacketRxCount", id: 0x2, type: "uint64", access: "R V",
            conformance: "P, KTCNT",
            details: "The PacketRxCount attribute SHALL indicate the number of packets that have been received on the " +
                     "ethernet network interface. The PacketRxCount attribute SHALL be reset to 0 upon a reboot of the " +
                     "Node.",
            xref: { document: "core", section: "11.15.6.3" }
        },

        {
            tag: "attribute", name: "PacketTxCount", id: 0x3, type: "uint64", access: "R V",
            conformance: "P, KTCNT", quality: "C",
            details: "The PacketTxCount attribute SHALL indicate the number of packets that have been successfully " +
                     "transferred on the ethernet network interface. The PacketTxCount attribute SHALL be reset to 0 upon " +
                     "a reboot of the Node.",
            xref: { document: "core", section: "11.15.6.4" }
        },

        {
            tag: "attribute", name: "TxErrCount", id: 0x4, type: "uint64", access: "R V", conformance: "ERRCNT",
            quality: "C",
            details: "The TxErrCount attribute SHALL indicate the number of failed packet transmissions that have " +
                     "occurred on the ethernet network interface. The TxErrCount attribute SHALL be reset to 0 upon a " +
                     "reboot of the Node.",
            xref: { document: "core", section: "11.15.6.5" }
        },

        {
            tag: "attribute", name: "CollisionCount", id: 0x5, type: "uint64", access: "R V",
            conformance: "ERRCNT", quality: "C",
            details: "The CollisionCount attribute SHALL indicate the number of collisions that have occurred while " +
                     "attempting to transmit a packet on the ethernet network interface. The CollisionCount attribute " +
                     "SHALL be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.15.6.6" }
        },

        {
            tag: "attribute", name: "OverrunCount", id: 0x6, type: "uint64", access: "R V",
            conformance: "ERRCNT", quality: "C",
            details: "The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or " +
                     "egress, due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                     "OverrunCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.15.6.7" }
        },

        {
            tag: "attribute", name: "CarrierDetect", id: 0x7, type: "bool", access: "R V", conformance: "O",
            default: null, quality: "X C",
            details: "The CarrierDetect attribute SHALL indicate the value of the Carrier Detect control signal present " +
                     "on the ethernet network interface. A value of null SHALL indicate that the interface is not " +
                     "currently configured or operational.",
            xref: { document: "core", section: "11.15.6.8" }
        },

        {
            tag: "attribute", name: "TimeSinceReset", id: 0x8, type: "uint64", access: "R V", conformance: "O",
            quality: "C",
            xref: { document: "core", section: "11.15.6" }
        },

        {
            tag: "command", name: "ResetCounts", id: 0x0, access: "M", conformance: "P, KTCNT | ERRCNT",
            direction: "request", response: "status",
            details: "Reception of this command SHALL reset the following attributes to 0:",
            xref: { document: "core", section: "11.15.7.1" }
        },

        {
            tag: "datatype", name: "PHYRateEnum", type: "enum8",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.15.5.1" },

            children: [
                {
                    tag: "datatype", name: "Rate10M", id: 0x0, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate100M", id: 0x1, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate1G", id: 0x2, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate25G", id: 0x3, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate5G", id: 0x4, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate10G", id: 0x5, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate40G", id: 0x6, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate100G", id: 0x7, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate200G", id: 0x8, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },
                {
                    tag: "datatype", name: "Rate400G", id: 0x9, conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "PhyRateEnum", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Rate10M", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Rate100M", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "Rate1G", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "Rate25G", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Rate5G", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Rate10G", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Rate40G", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "Rate100G", id: 0x7, conformance: "M" },
                { tag: "datatype", name: "Rate200G", id: 0x8, conformance: "M" },
                { tag: "datatype", name: "Rate400G", id: 0x9, conformance: "M" }
            ]
        }
    ]
});