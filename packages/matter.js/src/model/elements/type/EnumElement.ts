/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, BaseTypeElement, IntElement } from "../../index.js";

/**
 * Definition of an enumeration type.  We use this element for any matter
 * datatype that consists of a list of named integers, including enums and
 * bitmaps
 */
export type EnumElement = BaseTypeElement & {
    type: EnumElement.Type,
    values: IntElement[],
    size?: number,
    default?: bigint
}

export function EnumElement(definition: BaseElement.Typeless<EnumElement>): EnumElement {
    return { ...definition, type: EnumElement.Type }
}

export namespace EnumElement {
    export type Type = BaseElement.Type.Enum;
    export const Type = BaseElement.Type.Enum;
    
    /**
     * Legal bitmap sizes.  The Matter specification defines enums as
     * extensions of int8 or in16 so the size information is not used for
     * actual enums, just for bitmaps, which are used (somewhat inconsistently)
     * as base types.
     */
    export type Size = 1 | 2 | 4 | 8;

    /**
     * Convert a TypeScript enum to Matter enum values.
     * 
     * Matter enums include conformance and other metadata.  They may also have
     * multiple definitions of the same value selectable by conformance.  So
     * we can't use a TypeScript enum directly.
     */
    export function Values(values: ValueMap): Values {
        const result = Array<IntElement>();

        for (const [k, v] of Object.entries(values)) {
            if (typeof v == "number") {
                result.push({ type: IntElement.Type, id: v, name: k })
            }
        }

        return result;
    }

    /**
     * We express enum values as IntElements as this gives us conformance
     * and other metadata.
     */
    export type Values = IntElement[];

    /**
     * Per the Matter specification, enums are named integers.  The following
     * allows TypeScript enums to be supplied for translation into Matter
     * enums.  To do so, we must accept both numeric and string values.  For
     * generating the Matter enum we ignore the string keys.
     */
    export type ValueMap = { [name: string]: number | string };
}
