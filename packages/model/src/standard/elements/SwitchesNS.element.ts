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

export const SwitchesNs = SemanticNamespace(
    { id: 0x43, name: "Switches" },
    SemanticTag({ id: 0x0, name: "On" }),
    SemanticTag({ id: 0x1, name: "Off" }),
    SemanticTag({ id: 0x2, name: "Toggle" }),
    SemanticTag({ id: 0x3, name: "Up" }),
    SemanticTag({ id: 0x4, name: "Down" }),
    SemanticTag({ id: 0x5, name: "Next" }),
    SemanticTag({ id: 0x6, name: "Previous" }),
    SemanticTag({ id: 0x7, name: "Enter/OK/Select" }),
    SemanticTag({ id: 0x8, name: "Custom" })
);

MatterDefinition.children.push(SwitchesNs);
