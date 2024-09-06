/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype } from "../../elements/index.js";

export const fieldId = Datatype({
    name: "field-id", type: "uint32", description: "Field ID", isSeed: true,
    details: "An identifier that indicates a field defined in a struct." +
        "\n" +
        "Field IDs shall be a Manufacturer Extensible Identifier. The specifics of its representation are " +
        "described in Data Model Types.",
    xref: { document: "core", section: "7.18.2.28" }
});

MatterDefinition.children.push(fieldId);
