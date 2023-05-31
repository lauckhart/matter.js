/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonTypeDefinition, Metatype } from "../index.js";

/**
 * Definition of a type detailing a non-composite base type.
 */
export type FloatTypeDefinition = CommonTypeDefinition & {
    datatype: Metatype.Float,
    size: FloatTypeDefinition.Size,
    default?: number
};

export namespace FloatTypeDefinition {
    /**
     * Valid sizes for floats.
     */
    export type Size = 4 | 8;    
}