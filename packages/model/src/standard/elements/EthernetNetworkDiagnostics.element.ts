/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const EthernetNetworkDiagnostics = Cluster(
    { id: 0x37, name: "EthernetNetworkDiagnostics", quality: "K" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PKTCNT", constraint: "0", description: "PacketCounts" }),
        Field({ name: "ERRCNT", constraint: "1", description: "ErrorCounts" })
    ),
    Attribute(
        { id: 0x0, name: "PhyRate", type: "PHYRateEnum", access: "R V", conformance: "O", default: null, quality: "X" }
    ),
    Attribute({ id: 0x1, name: "FullDuplex", type: "bool", access: "R V", conformance: "O", default: null, quality: "X" }),
    Attribute({ id: 0x2, name: "PacketRxCount", type: "uint64", access: "R V", conformance: "PKTCNT", default: 0, quality: "C" }),
    Attribute({ id: 0x3, name: "PacketTxCount", type: "uint64", access: "R V", conformance: "PKTCNT", default: 0, quality: "C" }),
    Attribute(
        { id: 0x4, name: "TxErrCount", type: "uint64", access: "R V", conformance: "ERRCNT", default: 0, quality: "C" }
    ),
    Attribute({ id: 0x5, name: "CollisionCount", type: "uint64", access: "R V", conformance: "ERRCNT", default: 0, quality: "C" }),
    Attribute({ id: 0x6, name: "OverrunCount", type: "uint64", access: "R V", conformance: "ERRCNT", default: 0, quality: "C" }),
    Attribute({ id: 0x7, name: "CarrierDetect", type: "bool", access: "R V", conformance: "O", default: null, quality: "X C" }),
    Attribute(
        { id: 0x8, name: "TimeSinceReset", type: "uint64", access: "R V", conformance: "O", default: 0, quality: "C" }
    ),
    Command({
        id: 0x0, name: "ResetCounts",
        access: "M", conformance: "PKTCNT | ERRCNT", direction: "request", response: "status"
    }),

    Datatype(
        { name: "PHYRateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Rate10M", conformance: "M" }),
        Field({ id: 0x1, name: "Rate100M", conformance: "M" }),
        Field({ id: 0x2, name: "Rate1G", conformance: "M" }),
        Field({ id: 0x3, name: "Rate25G", conformance: "M" }),
        Field({ id: 0x4, name: "Rate5G", conformance: "M" }),
        Field({ id: 0x5, name: "Rate10G", conformance: "M" }),
        Field({ id: 0x6, name: "Rate40G", conformance: "M" }),
        Field({ id: 0x7, name: "Rate100G", conformance: "M" }),
        Field({ id: 0x8, name: "Rate200G", conformance: "M" }),
        Field({ id: 0x9, name: "Rate400G", conformance: "M" })
    )
);

MatterDefinition.children.push(EthernetNetworkDiagnostics);
