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

export const ElectricalMeasurementNs = SemanticNamespace(
    { id: 0xa, name: "ElectricalMeasurement" },
    SemanticTag({ id: 0x0, name: "DC" }),
    SemanticTag({ id: 0x1, name: "AC" }),
    SemanticTag({ id: 0x2, name: "ACPhase1" }),
    SemanticTag({ id: 0x3, name: "ACPhase2" }),
    SemanticTag({ id: 0x4, name: "ACPhase3" })
);

MatterDefinition.children.push(ElectricalMeasurementNs);
