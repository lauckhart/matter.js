/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, Constraint, Quality } from "../index.js"
import { TypeDefinition } from "../types/TypeDefinition.js"

/**
 * A cluster property description.
 */
export type AttributeElement = {
    constraint: Constraint,
    quality: Quality.Definition
    access: Access.Definition,
    conformance: Conformance.Definition,

    type: TypeDefinition,
    default: any
}
