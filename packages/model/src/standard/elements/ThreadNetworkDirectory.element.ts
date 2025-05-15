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

export const ThreadNetworkDirectory = Cluster(
    { id: 0x453, name: "ThreadNetworkDirectory" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({
        id: 0x0, name: "PreferredExtendedPanId", type: "octstr",
        access: "RW VM", conformance: "M", constraint: "8", default: null, quality: "X N"
    }),

    Attribute(
        {
            id: 0x1, name: "ThreadNetworks", type: "list",
            access: "R V", conformance: "M", constraint: "max threadNetworkTableSize", quality: "N"
        },
        Field({ name: "entry", type: "ThreadNetworkStruct" })
    ),

    Attribute({
        id: 0x2, name: "ThreadNetworkTableSize", type: "uint8",
        access: "R V", conformance: "M", constraint: "all", default: 10, quality: "F"
    }),
    Command(
        { id: 0x0, name: "AddNetwork", access: "M T", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "OperationalDataset", type: "octstr", conformance: "M", constraint: "max 254" })
    ),
    Command(
        { id: 0x1, name: "RemoveNetwork", access: "M T", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ExtendedPanId", type: "octstr", conformance: "M", constraint: "8" })
    ),

    Command(
        {
            id: 0x2, name: "GetOperationalDataset",
            access: "M", conformance: "M", direction: "request", response: "OperationalDatasetResponse"
        },
        Field({ id: 0x0, name: "ExtendedPanId", type: "octstr", conformance: "M", constraint: "8" })
    ),

    Command(
        { id: 0x3, name: "OperationalDatasetResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "OperationalDataset", type: "octstr", conformance: "M", constraint: "max 254" })
    ),

    Datatype(
        { name: "ThreadNetworkStruct", type: "struct" },
        Field({ id: 0x0, name: "ExtendedPanId", type: "octstr", conformance: "M", constraint: "8" }),
        Field({ id: 0x1, name: "NetworkName", type: "string", conformance: "M", constraint: "1 to 16" }),
        Field({ id: 0x2, name: "Channel", type: "uint16", conformance: "M" }),
        Field({ id: 0x3, name: "ActiveTimestamp", type: "uint64", conformance: "M" })
    )
);

MatterDefinition.children.push(ThreadNetworkDirectory);
