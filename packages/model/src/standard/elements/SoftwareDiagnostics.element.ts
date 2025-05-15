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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const SoftwareDiagnostics = Cluster(
    { id: 0x34, name: "SoftwareDiagnostics", quality: "K" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({ id: 0xfffc, name: "FeatureMap", type: "FeatureMap" }, Field({ name: "WTRMRK", constraint: "0" })),
    Attribute(
        { id: 0x0, name: "ThreadMetrics", type: "list", access: "R V", conformance: "O", constraint: "max 64" },
        Field({ name: "entry", type: "ThreadMetricsStruct" })
    ),
    Attribute({ id: 0x1, name: "CurrentHeapFree", type: "uint64", access: "R V", conformance: "O" }),
    Attribute({ id: 0x2, name: "CurrentHeapUsed", type: "uint64", access: "R V", conformance: "O" }),
    Attribute({ id: 0x3, name: "CurrentHeapHighWatermark", type: "uint64", access: "R V", conformance: "WTRMRK" }),

    Event(
        { id: 0x0, name: "SoftwareFault", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "Id", type: "uint64", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "O", constraint: "max 8" }),
        Field({ id: 0x2, name: "FaultRecording", type: "octstr", conformance: "O", constraint: "max 1024" })
    ),

    Command({ id: 0x0, name: "ResetWatermarks", access: "M", conformance: "WTRMRK", direction: "request", response: "status" }),

    Datatype(
        { name: "ThreadMetricsStruct", type: "struct" },
        Field({ id: 0x0, name: "Id", type: "uint64", conformance: "M" }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "O", constraint: "max 8" }),
        Field({ id: 0x2, name: "StackFreeCurrent", type: "uint32", conformance: "O" }),
        Field({ id: 0x3, name: "StackFreeMinimum", type: "uint32", conformance: "O" }),
        Field({ id: 0x4, name: "StackSize", type: "uint32", conformance: "O" })
    )
);

MatterDefinition.children.push(SoftwareDiagnostics);
