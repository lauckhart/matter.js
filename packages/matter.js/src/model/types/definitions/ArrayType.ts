/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonTypeDefinition, Metatype } from "../index.js"
import { TypeDefinition } from "../TypeDefinition.js"

/**
 * Definition of an array type.
 */
export type ArrayTypeDefinition = CommonTypeDefinition & {
    datatype: Metatype.Array,
    entry: TypeDefinition
}
