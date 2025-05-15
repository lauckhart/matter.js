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
    { id: 0x4a, name: "LaundryDryerControls" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            id: 0x0, name: "SupportedDrynessLevels", type: "list",
            access: "R V", conformance: "M", constraint: "1 to 4"
        },
        Field({ name: "entry", type: "DrynessLevelEnum" })
    ),

    Attribute({
        id: 0x1, name: "SelectedDrynessLevel", type: "DrynessLevelEnum",
        access: "RW VO", conformance: "M", constraint: "all", quality: "X"
    }),

    Datatype(
        { name: "DrynessLevelEnum", type: "enum8" },
        Field({ id: 0x0, name: "Low", conformance: "M" }),
        Field({ id: 0x1, name: "Normal", conformance: "M" }),
        Field({ id: 0x2, name: "Extra", conformance: "M" }),
        Field({ id: 0x3, name: "Max", conformance: "M" })
    )
);

MatterDefinition.children.push(LaundryDryerControls);
