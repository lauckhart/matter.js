/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTypeElement, Metatype } from "../index.js"

/**
 * Definition of an array type.
 */
export type ListElement = BaseTypeElement & {
    datatype: Metatype.Array,
    entry: BaseTypeElement
}
