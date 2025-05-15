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
    { id: 0x1e, name: "Binding" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            id: 0x0, name: "Binding", type: "list",
            access: "RW F VM", conformance: "M", constraint: "all", default: [], quality: "N"
        },
        Field({ name: "entry", type: "TargetStruct" })
    ),

    Datatype(
        { name: "TargetStruct", type: "struct" },
        Field({ id: 0x1, name: "Node", type: "node-id", access: "F", conformance: "Endpoint" }),
        Field({ id: 0x2, name: "Group", type: "group-id", access: "F", conformance: "!Endpoint", constraint: "min 1" }),
        Field({ id: 0x3, name: "Endpoint", type: "endpoint-no", access: "F", conformance: "!Group" }),
        Field({ id: 0x4, name: "Cluster", type: "cluster-id", access: "F", conformance: "O" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    )
);

MatterDefinition.children.push(Binding);
