/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0037, name: "EthernetNetworkDiagnostics",
    classification: "node", description: "Ethernet Network Diagnostics",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "PhyRate",
            access: "R V", conformance: "O", default: undefined, quality: "X", type: "PHYRateEnum",
            details: "The PHYRate attribute SHALL indicate the current nominal, usable speed" +
                     " at the top of the physical layer of the Node. A value of null SHALL " +
                     "indicate that the interface is not currently configured or operational",
            xref: { document: "core", section: "11.15.6.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "FullDuplex",
            access: "R V", conformance: "O", default: true, quality: "X", type: "bool",
            details: "The FullDuplex attribute SHALL indicate if the Node is currently " +
                     "utilizing the full-duplex operating mode. A value of null SHALL " +
                     "indicate that the interface is not currently configured or operational",
            xref: { document: "core", section: "11.15.6.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "PacketRxCount",
            access: "R V", conformance: "P, KTCNT", default: undefined, type: "uint64",
            details: "The PacketRxCount attribute SHALL indicate the number of packets that " +
                     "have been received on the ethernet network interface. The " +
                     "PacketRxCount attribute SHALL be reset to 0 upon a reboot of the Node",
            xref: { document: "core", section: "11.15.6.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "PacketTxCount",
            access: "R V", conformance: "P, KTCNT", default: undefined, quality: "C", type: "uint64",
            details: "The PacketTxCount attribute SHALL indicate the number of packets that " +
                     "have been successfully transferred on the ethernet network interface. " +
                     "The PacketTxCount attribute SHALL be reset to 0 upon a reboot of the " +
                     "Node",
            xref: { document: "core", section: "11.15.6.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "TxErrCount",
            access: "R V", conformance: "ERRCNT", default: undefined, quality: "C", type: "uint64",
            details: "The TxErrCount attribute SHALL indicate the number of failed packet " +
                     "transmissions that have occurred on the ethernet network interface. " +
                     "The TxErrCount attribute SHALL be reset to 0 upon a reboot of the Node",
            xref: { document: "core", section: "11.15.6.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "CollisionCount",
            access: "R V", conformance: "ERRCNT", default: undefined, quality: "C", type: "uint64",
            details: "The CollisionCount attribute SHALL indicate the number of collisions " +
                     "that have occurred while attempting to transmit a packet on the " +
                     "ethernet network interface. The CollisionCount attribute SHALL be " +
                     "reset to 0 upon a reboot of the Node",
            xref: { document: "core", section: "11.15.6.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "OverrunCount",
            access: "R V", conformance: "ERRCNT", default: undefined, quality: "C", type: "uint64",
            details: "The OverrunCount attribute SHALL indicate the number of packets " +
                     "dropped either at ingress or egress, due to lack of buffer memory to " +
                     "retain all packets on the ethernet network interface. The OverrunCount" +
                     " attribute SHALL be reset to 0 upon a reboot of the Node",
            xref: { document: "core", section: "11.15.6.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "CarrierDetect",
            access: "R V", conformance: "O", default: true, quality: "X C", type: "bool",
            details: "The CarrierDetect attribute SHALL indicate the value of the Carrier " +
                     "Detect control signal present on the ethernet network interface. A " +
                     "value of null SHALL indicate that the interface is not currently " +
                     "configured or operational",
            xref: { document: "core", section: "11.15.6.8" }
        },

        {
            tag: "attribute", id: 0x0008, name: "TimeSinceReset",
            access: "R V", conformance: "O", default: undefined, quality: "C", type: "uint64",
            xref: { document: "core", section: "11.15.6" }
        },

        {
            tag: "command", id: 0x0000, name: "ResetCounts",
            access: "M", conformance: "P, KTCNT | ERRCNT", direction: "request", response: "status",
            details: "Reception of this command SHALL reset the following attributes to 0",
            xref: { document: "core", section: "11.15.7.1" }
        },

        {
            tag: "datatype", name: "PHYRateEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.15.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Rate10M",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Rate100M",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Rate1G",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "Rate25G",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "Rate5G",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0005, name: "Rate10G",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0006, name: "Rate40G",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0007, name: "Rate100G",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0008, name: "Rate200G",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                },

                {
                    tag: "datatype", id: 0x0009, name: "Rate400G",
                    conformance: "M",
                    xref: { document: "core", section: "11.15.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "PhyRateEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Rate10M",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Rate100M",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Rate1G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Rate25G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Rate5G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Rate10G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Rate40G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "Rate100G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Rate200G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "Rate400G",
                    conformance: "M"
                }
            ]
        }
    ]
});
