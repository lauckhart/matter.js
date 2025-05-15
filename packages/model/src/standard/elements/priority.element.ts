/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const priority = Datatype(
    { name: "priority", type: "enum8", isSeed: true },
    Field({ id: 0x0, name: "Debug" }),
    Field({ id: 0x1, name: "Info" }),
    Field({ id: 0x2, name: "Critical" })
);

MatterDefinition.children.push(priority);
