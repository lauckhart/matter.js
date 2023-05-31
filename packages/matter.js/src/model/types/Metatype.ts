/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../util/ByteArray.js";
import { Datatype } from "./index.js";

/**
 * Different structures are necessary to describe Matter datatypes.  We call
 * these structures TypeDefinitions and use a "metatype" classification to
 * differentiate variants.
 * 
 * This could also be called "TypeDefinitionType".  That's feels prone to
 * confusion, so introduce the term "metatype" to reduce overloading of the
 * term "type".
 */
enum Metatype {
    boolean = "boolean",
    integer = "integer",
    float = "float",
    bytes = "bytes",
    array = "array",
    object = "object",
}

export namespace Metatype {
    /**
     * A metatype that describes the boolean datatype.
     */
    export type Boolean
        = Datatype.bool;

    /**
     * Boolean datatype identifier as string.
     */
    export type BooleanName = "bool";

    /**
     * A metatype for integer datatypes.
     */
    export type Integer
        = Datatype.map8
        | Datatype.map16
        | Datatype.map32
        | Datatype.map64
        | Datatype.uint8
        | Datatype.uint16
        | Datatype.uint24
        | Datatype.uint32
        | Datatype.uint40
        | Datatype.uint48
        | Datatype.uint56
        | Datatype.uint64
        | Datatype.int8
        | Datatype.int16
        | Datatype.int24
        | Datatype.int32
        | Datatype.int40
        | Datatype.int48
        | Datatype.int56
        | Datatype.int64;

    /**
     * Integer datatype identifiers as strings.
     */
    export type IntegerName = `${Integer}`;

    /**
     * A metatype that describes float datatypes.
     */
    export type Float
        = Datatype.single
        | Datatype.double;

    /**
     * Float datatype identifiers as strings.
     */
    export type FloatName = `${Float}`;

    /**
     * A metatype that describes the octstr datatype.
     */
    export type Bytes
        = Datatype.octstr;

    /**
     * Bytes datatype identifier as string.
     */
    export type BytesName = "octstr";

    /**
     * A metatype that describes the list datatype.
     */
    export type Array
        = Datatype.list;

    /**
     * Array datatype identifier as string.
     */
    export type ArrayName = "list";

    /**
     * A metatype that describes the object datatype.
     */
    export type Object
        = Datatype.struct;

    /**
     * Object datatype identifier as string.
     */
    export type ObjectName = "struct";

    /**
     * A metatype that describes the enum datatype.
     */
    export type Enum
        = Datatype.enum8
        | Datatype.enum16;

    /**
     * Enum datatype identifiers as strings.
     */
    export type EnumName = `${Enum}`;
}

/**
 * Above defines metatypes at the TypeScript type level.  This defines
 * metatypes for ES6 runtime.
 */
export const DatatypeToMetatype = {
    [Datatype.bool]: Metatype.boolean,

    [Datatype.map8]: Metatype.integer,
    [Datatype.map16]: Metatype.integer,
    [Datatype.map32]: Metatype.integer,
    [Datatype.map64]: Metatype.integer,
    [Datatype.uint8]: Metatype.integer,
    [Datatype.uint16]: Metatype.integer,
    [Datatype.uint24]: Metatype.integer,
    [Datatype.uint32]: Metatype.integer,
    [Datatype.uint40]: Metatype.integer,
    [Datatype.uint48]: Metatype.integer,
    [Datatype.uint56]: Metatype.integer,
    [Datatype.uint64]: Metatype.integer,
    [Datatype.int8]: Metatype.integer,
    [Datatype.int16]: Metatype.integer,
    [Datatype.int24]: Metatype.integer,
    [Datatype.int32]: Metatype.integer,
    [Datatype.int40]: Metatype.integer,
    [Datatype.int48]: Metatype.integer,
    [Datatype.int56]: Metatype.integer,
    [Datatype.int64]: Metatype.integer,

    [Datatype.single]: Metatype.float,
    [Datatype.double]: Metatype.float,

    [Datatype.octstr]: Metatype.bytes,

    [Datatype.list]: Metatype.array,

    [Datatype.struct]: Metatype.object
}

/**
 * For completeness, this offers a rough mapping of metatypes to JavaScript
 * types.
 * 
 * The fact there is a 1:1 mapping is incidental; metatypes exist to
 * differentiate type definitions.  Actual mapping from Matter types to ES6
 * types should consider semantics expressed by TypeDefinition.  E.g. "date"
 * could map to a JavaScript Date.
 */
export const MetatypeToClass = {
    [Metatype.boolean]: Boolean,
    [Metatype.integer]: BigInt,
    [Metatype.float]: Number,
    [Metatype.bytes]: ByteArray,
    [Metatype.array]: Array,
    [Metatype.object]: Object
}
