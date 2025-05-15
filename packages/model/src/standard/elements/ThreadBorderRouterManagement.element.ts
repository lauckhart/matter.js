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
    CommandElement as Command
} from "../../elements/index.js";

export const ThreadBorderRouterManagement = Cluster(
    { id: 0x452, name: "ThreadBorderRouterManagement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PC", conformance: "O", constraint: "0" })
    ),
    Attribute(
        { id: 0x0, name: "BorderRouterName", type: "string", access: "R V", conformance: "M", constraint: "1 to 63" }
    ),
    Attribute({ id: 0x1, name: "BorderAgentId", type: "octstr", access: "R V", conformance: "M", constraint: "16" }),
    Attribute({ id: 0x2, name: "ThreadVersion", type: "uint16", access: "R V", conformance: "M", quality: "F" }),
    Attribute({ id: 0x3, name: "InterfaceEnabled", type: "bool", access: "R V", conformance: "M", default: false, quality: "N" }),
    Attribute({
        id: 0x4, name: "ActiveDatasetTimestamp", type: "uint64",
        access: "R V", conformance: "M", default: 0, quality: "X N"
    }),
    Attribute({
        id: 0x5, name: "PendingDatasetTimestamp", type: "uint64",
        access: "R V", conformance: "M", default: 0, quality: "X N"
    }),
    Command({
        id: 0x0, name: "GetActiveDatasetRequest",
        access: "M", conformance: "M", direction: "request", response: "DatasetResponse"
    }),
    Command({
        id: 0x1, name: "GetPendingDatasetRequest",
        access: "M", conformance: "M", direction: "request", response: "DatasetResponse"
    }),
    Command(
        { id: 0x2, name: "DatasetResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Dataset", type: "octstr", conformance: "M", constraint: "max 254" })
    ),

    Command(
        {
            id: 0x3, name: "SetActiveDatasetRequest",
            access: "M T", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ActiveDataset", type: "octstr", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x1, name: "Breadcrumb", type: "uint64", conformance: "O" })
    ),

    Command(
        {
            id: 0x4, name: "SetPendingDatasetRequest",
            access: "M T", conformance: "PC", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "PendingDataset", type: "octstr", conformance: "M", constraint: "max 254" })
    )
);

MatterDefinition.children.push(ThreadBorderRouterManagement);
