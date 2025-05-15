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

export const RelativePositionNs = SemanticNamespace(
    { id: 0x12, name: "RelativePosition" },
    SemanticTag({ id: 0x0, name: "Under" }),
    SemanticTag({ id: 0x1, name: "Next To" }),
    SemanticTag({ id: 0x2, name: "Around" }),
    SemanticTag({ id: 0x3, name: "On" }),
    SemanticTag({ id: 0x4, name: "Above" }),
    SemanticTag({ id: 0x5, name: "Front Of" }),
    SemanticTag({ id: 0x6, name: "Behind" })
);

MatterDefinition.children.push(RelativePositionNs);
