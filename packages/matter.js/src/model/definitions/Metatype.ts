/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../../util/ByteArray.js";

/**
 * General groupings of Matter types.
 */
export enum Metatype {
    any = "any",
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
     * Does the specific type have children?
     */
    export function hasChildren(type: Metatype | undefined) {
        switch (type) {
            case Metatype.enum:
            case Metatype.bitmap:
            case Metatype.object:
                return true;

            default:
                return false;
        }
    }

    /**
     * Determine the JS type for a metatype.
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
        if (value == undefined || type == Metatype.any) {
            return value;
        }

        if (value == "null") {
            return null;
        }

        if (value == "") {
            if (type == Metatype.string) {
                return "";
            }
            return undefined;
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
                // Temperature type used by thermostat
                if (typeof value == "string" && value.endsWith("°C")) {
                    value = Math.floor(Number.parseFloat(value) * 100);
                    return Number.isNaN(value) ? Invalid : value;
                }

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
                if (value == "empty") {
                    return undefined;
                }
                if (!(value instanceof Uint8Array)) {
                    return Invalid;
                }
                return value;

            case Metatype.array:
                if (value == "empty" || value == "[]" || value == "{}") {
                    return [];
                }
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
