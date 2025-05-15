/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const locationdesc = Datatype(
    { name: "locationdesc", type: "struct", isSeed: true },
    Field({ id: 0x0, name: "LocationName", type: "string", conformance: "M", constraint: "max 128" }),
    Field({ id: 0x1, name: "FloorNumber", type: "int16", conformance: "M", quality: "X" }),
    Field({ id: 0x2, name: "AreaType", type: "tag", conformance: "M", quality: "X" })
);

MatterDefinition.children.push(locationdesc);
