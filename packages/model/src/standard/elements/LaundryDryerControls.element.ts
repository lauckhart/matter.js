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

export const LaundryDryerControls = Cluster(
    { name: "LaundryDryerControls", id: 0x4a },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "SupportedDrynessLevels", id: 0x0, type: "list",
            constraint: "1 to 4", conformance: "M", access: "R V"
        },
        Field({ name: "entry", type: "DrynessLevelEnum" })
    ),

    Attribute({
        name: "SelectedDrynessLevel", id: 0x1, type: "DrynessLevelEnum",
        constraint: "desc", conformance: "M", access: "RW VO", quality: "X"
    }),

    Datatype(
        { name: "DrynessLevelEnum", type: "enum8" },
        Field({ name: "Low", id: 0x0, conformance: "M" }),
        Field({ name: "Normal", id: 0x1, conformance: "M" }),
        Field({ name: "Extra", id: 0x2, conformance: "M" }),
        Field({ name: "Max", id: 0x3, conformance: "M" })
    )
);

MatterDefinition.children.push(LaundryDryerControls);
