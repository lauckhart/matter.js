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
    { name: "ThreadBorderRouterManagement", id: 0x452 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "PC", constraint: "0", conformance: "O", longName: "PanChange" })
    ),
    Attribute(
        { name: "BorderRouterName", id: 0x0, type: "string", constraint: "1 to 63", conformance: "M", access: "R V" }
    ),
    Attribute({ name: "BorderAgentId", id: 0x1, type: "octstr", constraint: "16", conformance: "M", access: "R V" }),
    Attribute({ name: "ThreadVersion", id: 0x2, type: "uint16", conformance: "M", access: "R V", quality: "F" }),
    Attribute({ name: "InterfaceEnabled", id: 0x3, type: "bool", default: false, conformance: "M", access: "R V", quality: "N" }),
    Attribute({
        name: "ActiveDatasetTimestamp", id: 0x4, type: "uint64",
        default: 0, conformance: "M", access: "R V", quality: "X N"
    }),
    Attribute({
        name: "PendingDatasetTimestamp", id: 0x5, type: "uint64",
        default: 0, conformance: "M", access: "R V", quality: "X N"
    }),
    Command({
        name: "GetActiveDatasetRequest", id: 0x0,
        conformance: "M", access: "M", direction: "request", response: "DatasetResponse"
    }),
    Command({
        name: "GetPendingDatasetRequest", id: 0x1,
        conformance: "M", access: "M", direction: "request", response: "DatasetResponse"
    }),
    Command(
        { name: "DatasetResponse", id: 0x2, conformance: "M", direction: "response" },
        Field({ name: "Dataset", id: 0x0, type: "octstr", constraint: "max 254", conformance: "M" })
    ),

    Command(
        {
            name: "SetActiveDatasetRequest", id: 0x3,
            conformance: "M", access: "M T", direction: "request", response: "status"
        },
        Field({ name: "ActiveDataset", id: 0x0, type: "octstr", constraint: "max 254", conformance: "M" }),
        Field({ name: "Breadcrumb", id: 0x1, type: "uint64", conformance: "O" })
    ),

    Command(
        {
            name: "SetPendingDatasetRequest", id: 0x4,
            conformance: "PC", access: "M T", direction: "request", response: "status"
        },
        Field({ name: "PendingDataset", id: 0x0, type: "octstr", constraint: "max 254", conformance: "M" })
    )
);

MatterDefinition.children.push(ThreadBorderRouterManagement);
