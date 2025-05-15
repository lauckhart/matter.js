/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const AtomicAttributeStatusStruct = Datatype(
    { name: "AtomicAttributeStatusStruct", type: "struct" },
    Field({ id: 0x0, name: "AttributeId", type: "attrib-id", conformance: "M" }),
    Field({ id: 0x1, name: "StatusCode", type: "status", conformance: "M" })
);
MatterDefinition.children.push(AtomicAttributeStatusStruct);
