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

export const ClosureNs = SemanticNamespace(
    { id: 0x1, name: "Closure" },
    SemanticTag({ id: 0x0, name: "Opening" }),
    SemanticTag({ id: 0x1, name: "Closing" }),
    SemanticTag({ id: 0x2, name: "Stop" })
);

MatterDefinition.children.push(ClosureNs);
