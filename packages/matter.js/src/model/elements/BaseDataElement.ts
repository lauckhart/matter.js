/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, BaseElement, Conformance, Constraint, Quality } from "../index.js";

/**
 * A base element for all elements that represent data.
 */
export type BaseDataElement = BaseElement & {
    /**
     * Derived datatypes as defined by the Matter Specification must specify
     * the name of the base type.
     */
    base?: string,

    /**
     * Limits on values.
     */
    constraint?: Constraint.Definition,

    /**
     * Optionality control.
     */
    conformance?: Conformance.Definition,

    /**
     * Authorization limits.
     */
    access?: Access.Definition,

    /**
     * Other qualities not covered by conformance or access.
     */
    quality?: Quality.Definition,

    /**
     * Applies to numeric types.
     */
    byteSize?: BaseDataElement.Size,

    /**
     * The default value of instances.
     */
    default?: any
}

export function BaseDataElement(definition: BaseDataElement.Definition) {
    return BaseElement(definition) as BaseDataElement;
}

export namespace BaseDataElement {
    export type Definition = BaseElement.Definition & {
        base?: string,
        byteSize?: Size,
        default?: any,

        constraint?: Constraint.Definition | string,
        conformance?: Conformance.Definition | string,
        access?: Access.Definition | string,
        quality?: Quality.Definition | string
    }
    
    /**
     * Valid sizes for ints.
     */
    export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;    

    /**
     * Legal bitmap sizes.  The Matter specification defines enums as
     * extensions of int8 or in16 so the size information is not used for
     * actual enums, just for bitmaps, which are used (somewhat inconsistently)
     * as base types.
     */
    export type BitmapSize = 1 | 2 | 4 | 8;
}
