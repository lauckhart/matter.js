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
    { name: "PowerTopology", id: 0x9c },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "NODE", constraint: "0", conformance: "O.a", longName: "NodeTopology" }),
        Field({ name: "TREE", constraint: "1", conformance: "O.a", longName: "TreeTopology" }),
        Field({ name: "SET", constraint: "2", conformance: "O.a", longName: "SetTopology" }),
        Field({ name: "DYPF", constraint: "3", conformance: "[SET]", longName: "DynamicPowerFlow" })
    ),

    Attribute(
        {
            name: "AvailableEndpoints", id: 0x0, type: "list",
            constraint: "max 20", conformance: "SET", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "endpoint-no" })
    ),

    Attribute(
        {
            name: "ActiveEndpoints", id: 0x1, type: "list",
            constraint: "max 20", conformance: "DYPF", access: "R V", quality: "N"
        },
        Field({ name: "entry", type: "endpoint-no" })
    )
);

MatterDefinition.children.push(PowerTopology);
