/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, BaseTypeElement } from "../../index.js";

/**
 * Definition of a type detailing a non-composite base type.
 */
export type IntElement = BaseTypeElement & {
    type: IntElement.Type,
    size?: IntElement.Size,
    default?: bigint
};

export function IntElement(definition: BaseElement.Typeless<IntElement>): IntElement {
    return { ...definition, type: IntElement.Type }
}

export namespace IntElement {
    export type Type = BaseElement.Type.Int;
    export const Type = BaseElement.Type.Int;

    /**
     * Valid sizes for ints.
     */
    export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;    
}
