/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTypeElement, Metatype } from "../index.js";

/**
 * Definition of a type detailing a non-composite base type.
 */
export type FloatElement = BaseTypeElement & {
    datatype: Metatype.Float,
    size: FloatElement.Size,
    default?: number
};

export namespace FloatElement {
    /**
     * Valid sizes for floats.
     */
    export type Size = 4 | 8;    
}
