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
                if (typeof value == "string") {
                    // Temperature type used by thermostat
                    if (value.endsWith("°C")) {
                        value = Math.floor(Number.parseFloat(value) * 100);
                        return Number.isNaN(value) ? Invalid : value;
                    }

                    // Strip off extra garbage like Number.parseInt would but
                    // BigInt doesn't
                    const match = value.match(/^(0x[0-9a-f]+|\d+)/);
                    if (match) {
                        value = match[1];
                    }
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
                // Eject garbage we've seen in the spec
                if (value == "0" || value == "{0,0}") {
                    return [];
                }
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
