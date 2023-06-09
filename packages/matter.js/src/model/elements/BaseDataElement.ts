/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, BaseElement, Conformance, Constraint, Quality } from "../index.js";
import type { AnyDataElement } from "../index.js";

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
    default?: any,

    /**
     * Nested structures that may have data elements include enums, structs and
     * lists.
     */
    children?: AnyDataElement[]
}

export function BaseDataElement(type: BaseElement.Type, definition: BaseDataElement) {
    definition = { ...definition };
    
    if (definition.constraint?.toString().toLowerCase() == "all") {
        delete definition.constraint;
    }

    for (const k of [ "conformance", "quality", "access", "quality" ]) {
        if ((definition as any)[k] == "") {
            delete (definition as any)[k];
        }
    }

    return BaseElement(type, definition) as BaseDataElement;
}

export namespace BaseDataElement {
    export type Properties = BaseElement.Properties<BaseDataElement & { type: `${BaseElement.Type}` }>;

    /**
     * An identifier for every non-derived datatype from the Matter Core
     * Specification.
     */
    export enum Datatype {
        bool = "bool",
        map8 = "map8",
        map16 = "map16",
        map32 = "map32",
        map64 = "map64",
        uint8 = "uint8",
        uint16 = "uint16",
        uint24 = "uint24",
        uint32 = "uint32",
        uint40 = "uint40",
        uint48 = "uint48",
        uint56 = "uint56",
        uint64 = "uint64",
        int8 = "int8",
        int16 = "int16",
        int24 = "int24",
        int32 = "int32",
        int40 = "int40",
        int48 = "int48",
        int56 = "int56",
        int64 = "int64",
        single = "single",
        double = "double",
        octstr = "octstr",
        list = "list",
        struct = "struct"
    }

    /**
     * A pool of datatype definitions indexed by name.
     */
    export type Datatypes = { [name: string]: BaseDataElement };
    
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
