/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0037, name: "EthernetNetworkDiagnostics",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "PKTCNT",
                    description: "Node makes available the counts for the number of received and transmitted packets on the ethernet interface.",
                    xref: { section: "11.15.4", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "ERRCNT",
                    description: "Node makes available the counts for the number of errors that have occurred during the reception and transmission of packets on the ethernet interface.",
                    xref: { section: "11.15.4", document: "core", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "PhyRate", base: "PHYRateEnum",
            access: "R V", conformance: "O", default: "null", quality: "X",
            details: "The PHYRate attribute SHALL indicate the current nominal, usable speed at the top of the physical layer of the Node. A value of null SHALL indicate that the interface is not currently configured or operational.",
            xref: { section: "11.15.6.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "FullDuplex", base: "bool",
            access: "R V", conformance: "O", default: "null", quality: "X",
            details: "The FullDuplex attribute SHALL indicate if the Node is currently utilizing the full-duplex operating mode. A value of null SHALL indicate that the interface is not currently configured or operational.",
            xref: { section: "11.15.6.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "PacketRxCount", base: "uint64",
            access: "R V", conformance: "PKTCNT", default: "0",
            details: "The PacketRxCount attribute SHALL indicate the number of packets that have been received on the ethernet network interface. The PacketRxCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { section: "11.15.6.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "PacketTxCount", base: "uint64",
            access: "R V", conformance: "PKTCNT", default: "0", quality: "C",
            details: "The PacketTxCount attribute SHALL indicate the number of packets that have been successfully transferred on the ethernet network interface. The PacketTxCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { section: "11.15.6.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "TxErrCount", base: "uint64",
            access: "R V", conformance: "ERRCNT", default: "0", quality: "C",
            details: "The TxErrCount attribute SHALL indicate the number of failed packet transmissions that have occurred on the ethernet network interface. The TxErrCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { section: "11.15.6.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "CollisionCount", base: "uint64",
            access: "R V", conformance: "ERRCNT", default: "0", quality: "C",
            details: "The CollisionCount attribute SHALL indicate the number of collisions that have occurred while attempting to transmit a packet on the ethernet network interface. The CollisionCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { section: "11.15.6.6", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "OverrunCount", base: "uint64",
            access: "R V", conformance: "ERRCNT", default: "0", quality: "C",
            details: "The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or egress, due to lack of buffer memory to retain all packets on the ethernet network interface. The OverrunCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { section: "11.15.6.7", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "CarrierDetect", base: "bool",
            access: "R V", conformance: "O", default: "null", quality: "X C",
            details: "The CarrierDetect attribute SHALL indicate the value of the Carrier Detect control signal present on the ethernet network interface. A value of null SHALL indicate that the interface is not currently configured or operational.",
            xref: { section: "11.15.6.8", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "TimeSinceReset", base: "uint64",
            access: "R V", conformance: "O", default: "0", quality: "C",
            xref: { section: "11.15.6", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            access: "M", conformance: "PKTCNT | ERRCNT", direction: "request", response: "status",
            details: "Reception of this command SHALL reset the following attributes to 0:",
            xref: { section: "11.15.7.1", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "PHYRateEnum", base: "enum8.",
            details: "This data type is derived from enum8.",
            xref: { section: "11.15.5.1", document: "core", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Rate10M",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Rate100M",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Rate1G",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "Rate25G",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rate5G",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0005, name: "Rate10G",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0006, name: "Rate40G",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0007, name: "Rate100G",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0008, name: "Rate200G",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0009, name: "Rate400G",
                    conformance: "M",
                    xref: { section: "11.15.5.1", document: "core", version: "1.1" }
                })
            ]
        })
    ]
}));
