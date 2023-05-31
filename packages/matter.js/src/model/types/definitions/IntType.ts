/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonTypeDefinition, Metatype } from "../index.js";

/**
 * Definition of a type detailing a non-composite base type.
 */
export type IntTypeDefinition = CommonTypeDefinition & {
    datatype: Metatype.Integer,
    size?: IntTypeDefinition.Size,
    default?: bigint
};

export namespace IntTypeDefinition {
    /**
     * Valid sizes for ints.
     */
    export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;    
}
