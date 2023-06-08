/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../util/index.js";
import { Access, BaseElement, Conformance, Constraint, Globals, Quality } from "../index.js";
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

    const result = BaseElement(type, definition) as BaseDataElement;

    let d = definition.default;
    if (typeof d == "string") {
        // TODO - technically we need the cluster-local datatypes to properly
        // resolve to the underlying type in order to select the default value.
        // This should be good enough for now as we're only using this to make
        // the definitions look prettier
        result.default = BaseDataElement.parseValue(result, d);
    }

    return result;
}

export namespace BaseDataElement {
    export type Properties = BaseElement.Properties<BaseDataElement & { type: BaseElement.Type }>;

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
     * Find the undeflying JS type for a data element.
     */
    export function nativeType(el: BaseDataElement, locals: Datatypes = {}) {
        while (el.base) {
            if (locals[el.base]) {
                el = locals[el.base];
            } else if ((Globals as any)[el.base]) {
                el = (Globals as any)[el.base];
                if (el.name == "string") {
                    return String;
                }
            } else {
                break;
            }
        }

        switch (el.name) {
            case Datatype.bool:
                return Boolean;

            case Datatype.map8:
            case Datatype.map16:
            case Datatype.map32:
            case Datatype.map64:
            case Datatype.uint8:
            case Datatype.uint16:
            case Datatype.uint24:
            case Datatype.uint32:
            case Datatype.uint40:
            case Datatype.uint48:
            case Datatype.uint56:
            case Datatype.uint64:
            case Datatype.int8:
            case Datatype.int16:
            case Datatype.int24:
            case Datatype.int32:
            case Datatype.int40:
            case Datatype.int48:
            case Datatype.int56:
            case Datatype.int64:
                return BigInt;

            case Datatype.single:
            case Datatype.double:
                return Number;

            case Datatype.octstr:
                return ByteArray;

            case Datatype.list:
                return Array;

            case Datatype.struct:
                return Object;
        }
    }
    
    /**
     * Convert a string to the type defined by an element.
     */
    export function parseValue(type: BaseDataElement, value: string, locals: Datatypes = {}) {
        const native = BaseDataElement.nativeType(type, locals);
        if (native == String) {
            return value;
        }

        switch (native) {
            case Boolean:
                value = value.trim().toLowerCase();
                switch (value) {
                    case "false":
                    case "no":
                    case "":
                        return false;

                    default:
                        return true;
                }
            
            case BigInt:
                try {
                    const i = BigInt(value);
                    const n = Number(i);
                    if (BigInt(n) == i) {
                        return n;
                    }
                    return i;
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        return NaN;
                    } else {
                        throw e;
                    }
                }

            case Number:
                return Number(value);
        }

        // Better to keep original type or throw?
        return value;
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
