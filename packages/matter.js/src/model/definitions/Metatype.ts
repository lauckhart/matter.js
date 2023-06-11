/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../util/ByteArray.js";
import { Datatype } from "./Datatype.js";

/**
 * General groupings of Matter types.
 */
export enum Metatype {
    boolean = "boolean",
    bitmap = "bitmap",
    enum = "enum",
    integer = "integer",
    float = "float",
    bytes = "bytes",
    array = "array",
    object = "object",
    string = "string",
    date = "date"
}

export namespace Metatype {
    export const Invalid = Symbol("invalid");

    /**
     * Determine the metatype for a type.  Input type can be a metatype,
     * datatype or any other string type.  If no mapping is not supported
     * returns undefined.
     */
    export function of(type: string | undefined) {
        switch (type) {
            case Datatype.bool:
                return Metatype.boolean;

            case Datatype.map8:
            case Datatype.map16:
            case Datatype.map32:
            case Datatype.map64:
                return Metatype.bitmap;

            case "enum8":
            case "enum16":
                return Metatype.enum;

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
                return Metatype.integer;

            case Datatype.single:
            case Datatype.double:
                return Metatype.float;

            case Datatype.octstr:
                return Metatype.bytes;

            case Datatype.list:
                return Metatype.array;

            case Datatype.struct:
                return Metatype.object;

            case "date":
                return Metatype.date;
                
            case Metatype.boolean:
            case Metatype.bitmap:
            case Metatype.enum:
            case Metatype.integer:
            case Metatype.float:
            case Metatype.bytes:
            case Metatype.array:
            case Metatype.object:
            case Metatype.string:
                return type;
        }
    }

    /**
     * Determine the JS type for a type.
     */
    export function native(type: Metatype | undefined) {
        switch (type) {
            case Metatype.boolean:
                return Boolean;

            case Metatype.integer:
                return BigInt;

            case Metatype.bitmap:
            case Metatype.enum:
            case Metatype.float:
                return Number;

            case Metatype.bytes:
                return ByteArray;

            case Metatype.array:
                return Array;

            case Metatype.object:
                return Object;

            case Metatype.string:
                return String;

            case Metatype.date:
                return Date;
        }
    }

    /**
     * Cast a value to a specific type.
     * 
     * @param type casts to a native equivalent of this type
     * @param value value to cast
     * @returns the cast value or Metatype.Invalid if cast is not possible
     */
    export function cast(type: Metatype, value: any) {
        if (value == undefined) {
            return value;
        }

        switch (type) {
            case Metatype.string:
                return value.toString();

            case Metatype.boolean:
                if (typeof value == "string") {
                    value = value.trim().toLowerCase();
                }
                return value == "false" || value == "no" || !!value;

            case Metatype.bitmap:
            case Metatype.enum:
                const id = Number(value);
                if (Number.isNaN(id)) {
                    // Key name
                    return value.toString();
                }
                // Value
                return id;
            
            case Metatype.integer:
                try {
                    const i = BigInt(value);
                    const n = Number(i);
                    if (BigInt(n) == i) {
                        return n;
                    }
                    return i;
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        return Invalid;
                    }
                    throw e;
                }

            case Metatype.float:
                const float = Number(value);
                if (Number.isNaN(float)) {
                    return Invalid;
                }
                return float.valueOf();

            case Metatype.date:
                value = new Date(value);
                if (Number.isNaN(value.valueOf())) {
                    return Invalid;
                }
                return value;

            case Metatype.object:
                if (value == "null") {
                    return null;
                }
                if (typeof value != "object") {
                    return Invalid;
                }
                return value;

            case Metatype.bytes:
                if (!(value instanceof Uint8Array)) {
                    return Invalid;
                }
                return value;

            case Metatype.array:
                if (!Array.isArray(value)) {
                    return Invalid;
                }
                return value;
        }

        return Invalid;
    }

    /**
     * These are the native types used by this module.
     */
    export type NativeType =
        typeof Boolean
        | typeof BigInt
        | typeof Number
        | typeof ByteArray
        | typeof Array
        | typeof Object
        | typeof String
        | typeof Date;
}
