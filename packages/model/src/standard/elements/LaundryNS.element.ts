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

export const LaundryNs = SemanticNamespace(
    { id: 0xe, name: "Laundry" },
    SemanticTag({ id: 0x0, name: "Normal" }),
    SemanticTag({ id: 0x1, name: "Light Dry" }),
    SemanticTag({ id: 0x2, name: "Extra Dry" }),
    SemanticTag({ id: 0x3, name: "No Dry" })
);

MatterDefinition.children.push(LaundryNs);
