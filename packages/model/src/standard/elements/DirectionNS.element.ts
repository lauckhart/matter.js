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

export const DirectionNs = SemanticNamespace(
    { id: 0x4, name: "Direction" },
    SemanticTag({ id: 0x0, name: "Upward" }),
    SemanticTag({ id: 0x1, name: "Downward" }),
    SemanticTag({ id: 0x2, name: "Leftward" }),
    SemanticTag({ id: 0x3, name: "Rightward" }),
    SemanticTag({ id: 0x4, name: "Forward" }),
    SemanticTag({ id: 0x5, name: "Backward" })
);

MatterDefinition.children.push(DirectionNs);
