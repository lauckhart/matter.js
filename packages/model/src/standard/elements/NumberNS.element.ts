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

export const NumberNs = SemanticNamespace(
    { id: 0x7, name: "Number" },
    SemanticTag({ id: 0x0, name: "Zero" }),
    SemanticTag({ id: 0x1, name: "One" }),
    SemanticTag({ id: 0x2, name: "Two" }),
    SemanticTag({ id: 0x3, name: "Three" }),
    SemanticTag({ id: 0x4, name: "Four" }),
    SemanticTag({ id: 0x5, name: "Five" }),
    SemanticTag({ id: 0x6, name: "Six" }),
    SemanticTag({ id: 0x7, name: "Seven" }),
    SemanticTag({ id: 0x8, name: "Eight" }),
    SemanticTag({ id: 0x9, name: "Nine" }),
    SemanticTag({ id: 0xa, name: "Ten" })
);

MatterDefinition.children.push(NumberNs);
