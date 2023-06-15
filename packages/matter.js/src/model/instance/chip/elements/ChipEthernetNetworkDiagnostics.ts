/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0037, name: "EthernetNetworkDiagnostics",
    description: "Ethernet Network Diagnostics",
    details: "The Ethernet Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "PhyRate", base: "PhyRateEnum",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "FullDuplex", base: "bool",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "PacketRxCount", base: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "PacketTxCount", base: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "TxErrCount", base: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0005, name: "CollisionCount", base: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0006, name: "EthernetOverrunCount", base: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0007, name: "CarrierDetect", base: "bool",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0008, name: "TimeSinceReset", base: "uint64",
            conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            conformance: "M", direction: "request"
        }),

        DatatypeElement({
            name: "PhyRateEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Rate10M",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Rate100M",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Rate1G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Rate25G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Rate5G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Rate10G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Rate40G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Rate100G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Rate200G",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Rate400G",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "EthernetNetworkDiagnosticsFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PacketCounts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ErrorCounts",
                    conformance: "M"
                })
            ]
        })
    ]
}));
