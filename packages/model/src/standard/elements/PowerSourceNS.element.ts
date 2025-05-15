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

export const PowerSourceNs = SemanticNamespace(
    { id: 0xf, name: "PowerSource" },
    SemanticTag({ id: 0x0, name: "Unknown" }),
    SemanticTag({ id: 0x1, name: "Grid" }),
    SemanticTag({ id: 0x2, name: "Solar" }),
    SemanticTag({ id: 0x3, name: "Battery" }),
    SemanticTag({ id: 0x4, name: "EV" })
);

MatterDefinition.children.push(PowerSourceNs);
