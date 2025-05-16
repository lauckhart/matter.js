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
    { name: "SoftwareDiagnostics", id: 0x34, quality: "K" },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "WTRMRK", constraint: "0", longName: "Watermarks" })
    ),
    Attribute(
        { name: "ThreadMetrics", id: 0x0, type: "list", constraint: "max 64", conformance: "O", access: "R V" },
        Field({ name: "entry", type: "ThreadMetricsStruct" })
    ),
    Attribute({ name: "CurrentHeapFree", id: 0x1, type: "uint64", conformance: "O", access: "R V" }),
    Attribute({ name: "CurrentHeapUsed", id: 0x2, type: "uint64", conformance: "O", access: "R V" }),
    Attribute({ name: "CurrentHeapHighWatermark", id: 0x3, type: "uint64", conformance: "WTRMRK", access: "R V" }),

    Event(
        { name: "SoftwareFault", id: 0x0, conformance: "O", access: "V", priority: "info" },
        Field({ name: "Id", id: 0x0, type: "uint64", default: 0, conformance: "M" }),
        Field({ name: "Name", id: 0x1, type: "string", constraint: "max 8", conformance: "O" }),
        Field({ name: "FaultRecording", id: 0x2, type: "octstr", constraint: "max 1024", conformance: "O" })
    ),

    Command({ name: "ResetWatermarks", id: 0x0, conformance: "WTRMRK", access: "M", direction: "request", response: "status" }),

    Datatype(
        { name: "ThreadMetricsStruct", type: "struct" },
        Field({ name: "Id", id: 0x0, type: "uint64", conformance: "M" }),
        Field({ name: "Name", id: 0x1, type: "string", constraint: "max 8", conformance: "O" }),
        Field({ name: "StackFreeCurrent", id: 0x2, type: "uint32", conformance: "O" }),
        Field({ name: "StackFreeMinimum", id: 0x3, type: "uint32", conformance: "O" }),
        Field({ name: "StackSize", id: 0x4, type: "uint32", conformance: "O" })
    )
);

MatterDefinition.children.push(SoftwareDiagnostics);
