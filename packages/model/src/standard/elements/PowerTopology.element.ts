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
    FieldElement as Field
} from "../../elements/index.js";

export const PowerTopology = Cluster(
    { id: 0x9c, name: "PowerTopology" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "NODE", conformance: "O.a", constraint: "0" }),
        Field({ name: "TREE", conformance: "O.a", constraint: "1" }),
        Field({ name: "SET", conformance: "O.a", constraint: "2" }),
        Field({ name: "DYPF", conformance: "[SET]", constraint: "3" })
    ),

    Attribute(
        {
            id: 0x0, name: "AvailableEndpoints", type: "list",
            access: "R V", conformance: "SET", constraint: "max 20", quality: "F"
        },
        Field({ name: "entry", type: "endpoint-no" })
    ),

    Attribute(
        {
            id: 0x1, name: "ActiveEndpoints", type: "list",
            access: "R V", conformance: "DYPF", constraint: "max 20", quality: "N"
        },
        Field({ name: "entry", type: "endpoint-no" })
    )
);

MatterDefinition.children.push(PowerTopology);
