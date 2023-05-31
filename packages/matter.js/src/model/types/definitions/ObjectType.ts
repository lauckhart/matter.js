/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonTypeDefinition, Metatype } from "../index.js"
import { TypeDefinition } from "../TypeDefinition.js"

/**
 * Definition of a struct type.
 */
export type ObjectTypeDefinition = CommonTypeDefinition & {
    datatype: Metatype.Object,
    fields: ObjectTypeDefinition.Fields
}

export namespace ObjectTypeDefinition {
    export type Fields = { [name: string]: TypeDefinition };
}
