/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTypeElement, Metatype } from "../index.js";

/**
 * Definition of a type detailing a non-composite base type.
 */
export type IntElement = BaseTypeElement & {
    datatype: Metatype.Integer,
    size?: IntElement.Size,
    default?: bigint
};

export namespace IntElement {
    /**
     * Valid sizes for ints.
     */
    export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;    
}
