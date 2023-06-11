/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0037, name: "EthernetNetworkDiagnostics",
    description: "Ethernet Network Diagnostics",
    details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "phyRate", base: "PhyRateEnum",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "fullDuplex", base: "bool",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "packetRxCount", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0003, name: "packetTxCount", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0004, name: "txErrCount", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0005, name: "collisionCount", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0006, name: "ethernetOverrunCount", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0007, name: "carrierDetect", base: "bool",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0008, name: "timeSinceReset", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000000000000000"
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        DatatypeElement({
            name: "PhyRateEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "rate10M",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "rate10M",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "rate100M",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "rate100M",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "rate1G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "rate1G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "rate25G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "rate25G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "rate5G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "rate5G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "rate10G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "rate10G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "rate40G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "rate40G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "rate100G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "rate100G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "rate200G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "rate200G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "rate400G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "rate400G",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                })
            ]
        }),

        DatatypeElement({
            name: "EthernetNetworkDiagnosticsFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "packetCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "packetCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "errorCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "errorCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                })
            ]
        })
    ]
}));
