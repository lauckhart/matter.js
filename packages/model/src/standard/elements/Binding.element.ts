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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Binding = Cluster(
    { name: "Binding", id: 0x1e },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "Binding", id: 0x0, type: "list",
            default: [], constraint: "desc", conformance: "M", access: "RW F VM", quality: "N"
        },
        Field({ name: "entry", type: "TargetStruct" })
    ),

    Datatype(
        { name: "TargetStruct", type: "struct" },
        Field({ name: "Node", id: 0x1, type: "node-id", conformance: "Endpoint", access: "F" }),
        Field({ name: "Group", id: 0x2, type: "group-id", constraint: "min 1", conformance: "!Endpoint", access: "F" }),
        Field({ name: "Endpoint", id: 0x3, type: "endpoint-no", conformance: "!Group", access: "F" }),
        Field({ name: "Cluster", id: 0x4, type: "cluster-id", conformance: "O", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(Binding);
