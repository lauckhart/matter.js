/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const semtag = Datatype(
    { name: "semtag", type: "struct", isSeed: true },
    Field({ id: 0x0, name: "MfgCode", type: "vendor-id", conformance: "M", default: null, quality: "X" }),
    Field({ id: 0x1, name: "NamespaceId", type: "namespace", conformance: "M" }),
    Field({ id: 0x2, name: "Tag", type: "tag", conformance: "M" }),
    Field({ id: 0x3, name: "Label", type: "string", conformance: "O", default: null })
);

MatterDefinition.children.push(semtag);
