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

export const CompassLocationNs = SemanticNamespace(
    { id: 0x3, name: "CompassLocation" },
    SemanticTag({ id: 0x0, name: "North" }),
    SemanticTag({ id: 0x1, name: "North-East" }),
    SemanticTag({ id: 0x2, name: "East" }),
    SemanticTag({ id: 0x3, name: "South-East" }),
    SemanticTag({ id: 0x4, name: "South" }),
    SemanticTag({ id: 0x5, name: "South-West" }),
    SemanticTag({ id: 0x6, name: "West" }),
    SemanticTag({ id: 0x7, name: "North-West" })
);

MatterDefinition.children.push(CompassLocationNs);
