/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    SemanticNamespaceElement as SemanticNamespace,
    SemanticTagElement as SemanticTag
} from "../../elements/index.js";

export const RefrigeratorNs = SemanticNamespace(
    { id: 0x41, name: "Refrigerator" },
    SemanticTag({ id: 0x0, name: "Refrigerator" }),
    SemanticTag({ id: 0x1, name: "Freezer" })
);
MatterDefinition.children.push(RefrigeratorNs);
