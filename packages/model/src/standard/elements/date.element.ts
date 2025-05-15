/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const date = Datatype(
    { name: "date", type: "struct", isSeed: true, metatype: "date" },
    Field({ id: 0x0, name: "Year", type: "uint8", conformance: "M", default: null, quality: "X" }),
    Field({ id: 0x1, name: "Month", type: "uint8", conformance: "M", constraint: "1 to 12", default: null, quality: "X" }),
    Field({ id: 0x2, name: "Day", type: "uint8", conformance: "M", constraint: "1 to 31", default: null, quality: "X" }),
    Field({ id: 0x3, name: "DayOfWeek", type: "uint8", conformance: "M", constraint: "1 to 7", default: null, quality: "X" })
);

MatterDefinition.children.push(date);
