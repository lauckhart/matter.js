/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { FieldElement as Field } from "../../elements/index.js";

export const FabricIndex = Field({
    name: "FabricIndex", id: 0xfe, type: "fabric-idx",
    isSeed: true, constraint: "1 to 254", conformance: "M", access: "R F V"
});
MatterDefinition.children.push(FabricIndex);
