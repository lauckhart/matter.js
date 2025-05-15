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

export const CompassDirectionNs = SemanticNamespace(
    { id: 0x2, name: "CompassDirection" },
    SemanticTag({ id: 0x0, name: "Northward" }),
    SemanticTag({ id: 0x1, name: "North-Eastward" }),
    SemanticTag({ id: 0x2, name: "Eastward" }),
    SemanticTag({ id: 0x3, name: "South-Eastward" }),
    SemanticTag({ id: 0x4, name: "Southward" }),
    SemanticTag({ id: 0x5, name: "South-Westward" }),
    SemanticTag({ id: 0x6, name: "Westward" }),
    SemanticTag({ id: 0x7, name: "North-Westward" })
);

MatterDefinition.children.push(CompassDirectionNs);
