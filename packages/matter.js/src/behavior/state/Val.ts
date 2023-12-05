/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * General type for state values.
 */
export type Val = unknown;

export namespace Val {
    /**
     * Type for Matter structs.  In JS this is an object with string keys.
     */
    export type Struct = Record<string, Val>;

    /**
     * Type for Matter lists.  In Js this is an array.
     */
    export type List = Val[];

    /**
     * Any matter collection type.
     */
    export type Collection = Struct | List;

    /**
     * A Reference offers a simple mechanism for referring to properties
     * by reference.
     */
    export interface Reference<T extends Val = Val> {
        /**
         * The current value of the referenced property.
         */
        value: T;

        /**
         * The original value of the referenced property.
         */
        readonly original: T;

        /**
         * Has the value changed?
         */
        changed: boolean;
    }
}
