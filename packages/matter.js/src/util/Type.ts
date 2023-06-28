/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export type Properties = { [key: string]: any };

/** Merges two types into one. */
export type Merge<
    A extends Properties,
    B extends Properties
> = { [K in keyof A as (K extends keyof B ? never : K)]: A[K] } & B;

export function Merge<
    A extends Properties,
    B extends Properties
>(a: A, b: B): Merge<A, B> {
    return { ...a, ...b }
}

/** Type that represents a class constructor of a defined type or extend of it */
export type ClassExtends<C> = { new(...args: any[]): C };

/** Merge an array of objects into one. */
export type MergeAll<T> = T extends [ infer O, ...infer R ]
    ? O extends Properties ? Merge<O, MergeAll<R>> : O
    : T;

export function MergeAll<T extends Properties[]>(...objects: T): MergeAll<T> {
    return Object.assign({}, ...objects);
}

/** Pluck an item from an array of objects */