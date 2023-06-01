/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTypeElement, Metatype } from "../index.js"

/**
 * Definition of a struct type.
 */
export type StructElement = BaseTypeElement & {
    datatype: Metatype.Object,
    fields: StructElement.Fields
}

export namespace StructElement {
    export type Fields = { [name: string]: BaseTypeElement };
}
