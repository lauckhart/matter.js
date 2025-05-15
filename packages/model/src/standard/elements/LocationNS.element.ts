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

export const LocationNs = SemanticNamespace(
    { id: 0x6, name: "Location" },
    SemanticTag({ id: 0x0, name: "Indoor" }),
    SemanticTag({ id: 0x1, name: "Outdoor" }),
    SemanticTag({ id: 0x2, name: "Inside" }),
    SemanticTag({ id: 0x3, name: "Outside" })
);

MatterDefinition.children.push(LocationNs);
