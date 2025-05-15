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

export const RoomAirConditionerNs = SemanticNamespace(
    { id: 0x42, name: "RoomAirConditioner" },
    SemanticTag({ id: 0x0, name: "Evaporator" }),
    SemanticTag({ id: 0x1, name: "Condenser" })
);
MatterDefinition.children.push(RoomAirConditionerNs);
