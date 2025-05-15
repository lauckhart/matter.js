/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const AtomicRequestTypeEnum = Datatype(
    { name: "AtomicRequestTypeEnum", type: "enum8" },
    Field({ id: 0x0, name: "BeginWrite", conformance: "M" }),
    Field({ id: 0x1, name: "CommitWrite", conformance: "M" }),
    Field({ id: 0x2, name: "RollbackWrite", conformance: "M" })
);

MatterDefinition.children.push(AtomicRequestTypeEnum);
