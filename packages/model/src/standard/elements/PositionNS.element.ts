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

export const PositionNs = SemanticNamespace(
    { id: 0x8, name: "Position" },
    SemanticTag({ id: 0x0, name: "Left" }),
    SemanticTag({ id: 0x1, name: "Right" }),
    SemanticTag({ id: 0x2, name: "Top" }),
    SemanticTag({ id: 0x3, name: "Bottom" }),
    SemanticTag({ id: 0x4, name: "Middle" }),
    SemanticTag({ id: 0x5, name: "Row" }),
    SemanticTag({ id: 0x6, name: "Column" })
);

MatterDefinition.children.push(PositionNs);
