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

export const ProxyConfiguration = Cluster(
    { id: 0x42, name: "ProxyConfiguration" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0x0, name: "ConfigurationList", type: "list", access: "RW", conformance: "M", default: [], quality: "N" },
        Field({ name: "entry", type: "ConfigurationStruct" })
    ),

    Datatype(
        { name: "ConfigurationStruct", type: "struct" },
        Field({
            id: 0x1, name: "ProxyAllNodes", type: "bool",
            access: "RW", conformance: "M", constraint: "all", default: false
        }),

        Field(
            {
                id: 0x2, name: "SourceList", type: "list",
                access: "RW", conformance: "M", constraint: "all", default: []
            },
            Field({ name: "entry", type: "node-id" })
        )
    )
);

MatterDefinition.children.push(ProxyConfiguration);
