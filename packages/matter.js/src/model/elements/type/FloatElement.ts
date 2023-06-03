/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, BaseTypeElement } from "../../index.js";

/**
 * Definition of a type detailing a non-composite base type.
 */
export type FloatElement = BaseTypeElement & {
    type: FloatElement.Type,
    size: FloatElement.Size,
    default?: number
};

export function FloatElement(definition: BaseElement.Typeless<FloatElement>): FloatElement {
    return { ...definition, type: FloatElement.Type }
}

export namespace FloatElement {
    export type Type = BaseElement.Type.Float;
    export const Type = BaseElement.Type.Float;

    /**
     * Valid sizes for floats.
     */
    export type Size = 4 | 8;    
}
