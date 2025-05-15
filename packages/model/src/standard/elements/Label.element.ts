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

export const Label = Cluster(
    { name: "Label" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0x0, name: "LabelList", type: "list", conformance: "M", constraint: "derived", default: [] },
        Field({ name: "entry", type: "LabelStruct" })
    ),
    Datatype(
        { name: "LabelStruct", type: "struct" },
        Field({ id: 0x0, name: "Label", type: "string", conformance: "M", constraint: "max 16" }),
        Field({ id: 0x1, name: "Value", type: "string", conformance: "M", constraint: "max 16" })
    )
);

MatterDefinition.children.push(Label);
