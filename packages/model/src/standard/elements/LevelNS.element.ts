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

export const LevelNs = SemanticNamespace(
    { id: 0x5, name: "Level" },
    SemanticTag({ id: 0x0, name: "Low" }),
    SemanticTag({ id: 0x1, name: "Medium" }),
    SemanticTag({ id: 0x2, name: "High" })
);

MatterDefinition.children.push(LevelNs);
