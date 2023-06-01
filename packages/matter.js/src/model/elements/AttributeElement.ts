/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, Constraint, Quality, BaseTypeElement } from "../index.js"

/**
 * A cluster property description.
 */
export type AttributeElement = BaseTypeElement & {
    constraint: Constraint,
    quality: Quality.Definition
    access: Access.Definition,
    conformance: Conformance.Definition,

    default: any
}
