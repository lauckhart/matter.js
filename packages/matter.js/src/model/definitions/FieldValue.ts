/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * A FieldValue represents a concrete value for a datatype.  Most values are
 * primitives but some values we encode with specialized typed objects so we
 * can capture the original semantic meaning.
 */
export type FieldValue =
    null
    | string
    | number
    | bigint
    | boolean
    | Date
    | []
    | FieldValue.Reference
    | FieldValue.Percent
    | FieldValue.Celsius
    | FieldValue.Flags;

export namespace FieldValue {
    // Typing with constants should be just as type safe as using an enum but
    // simplifies type definitions

    export const percent = "percent";
    export type percent = typeof percent;

    export const celsius = "celsius";    
    export type celsius = typeof celsius;

    export const reference = "reference";
    export type reference = typeof reference;

    export const flags = "flags";
    export type flags = typeof flags;

    /**
     * If a field value isn't a primitive type, it's an object with a type
     * field indicating one of these types.
     */
    export type Type = percent | celsius | reference | flags;

    /**
     * Test for one of the special placeholder types.
     */
    export function is(value: FieldValue | undefined, type: Type) {
        return value && (value as any).type === type;
    }

    /**
     * Flag for an invalid value.  Not part of the FieldValue union but
     * returned when casting to a field value if the cast is impossible
     */
    export const Invalid: unique symbol = Symbol("invalid");
    export type Invalid = typeof Invalid;

    /**
     * Reference to a named field
     */
    export type Reference = {
        type: reference,
        name: string
    }

    export function Reference(name: string): Reference {
        return { type: reference, name };
    }

    /**
     * Celsius value, typically .1°C or .01°C
     */
    export type Celsius = {
        type: celsius,
        value: number
    }

    export function Celsius(value: number): Celsius {
        return { type: celsius, value }
    }

    /**
     * Percent value, units of either 1% (.01) or .01% (.0001)
     */
    export type Percent = {
        type: percent,
        value: number
    }

    export function Percent(value: number): Percent {
        return { type: percent, value };
    }

    /**
     * A set of feature flags.
     */
    export type Flags = {
        type: flags,
        flags: string[]
    }

    export function Flags(flags: string[]): Flags {
        return { type: FieldValue.flags, flags };
    }

    /**
     * Convert the field value to a "defacto-standard" form.
     */
    export function serialize(value: FieldValue) {
        if (value === null) {
            return "null";
        }
        if (is(value, reference)) {
            return (value as Reference).name;
        }
        if (is(value, celsius)) {
            return `${(value as Celsius).value}°C`;
        }
        if (is(value, percent)) {
            return `${(value as Percent).value}%';`
        }
        if (is(value, flags)) {
            return `[ ${(value as Flags).flags.map(f => JSON.stringify(f)).join(", ")} ]`;
        }
        return value.toString();
    }

    /**
     * Given a type name as a hint, do our best to convert a field value to a
     * number.
     */
    export function numericValue(value: FieldValue | undefined, typeName: string | undefined) {
        if (typeof value === "number") {
            return value;
        }

        if (is(value, celsius)) {
            switch (typeName) {
                case "temperature":
                case "temp-diff":
                    return (value as Celsius).value * 100;

                case "temp-u8":
                case "temp-s8":
                    return (value as Celsius).value * 10;
            }

            // Not sure how to interpret the value
            return;
        }

        if (is(value, percent)) {
            switch (typeName) {
                case "percent100ths":
                    return (value as Percent).value * 100;

                default:
                    return (value as Percent).value;
            }
        }
    }
}
