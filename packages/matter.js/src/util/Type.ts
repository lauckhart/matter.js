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
export type MergeAll<T> = T extends [ infer O extends Properties, ...infer R ]
    ? Merge<O, MergeAll<R>>
    : T extends []
    ? {}
    : never;

export function MergeAll<T extends Properties[]>(...objects: T): MergeAll<T> {
    return Object.assign({}, ...objects);
}

/** Pluck an item from an array of objects if present */
export type FilteredPluck<K extends string, T extends Properties[]> =
    T extends [ infer E, ...infer R extends Properties[] ]
        ? K extends keyof E
            ? [ E[K], ...FilteredPluck<K, R> ]
            : FilteredPluck<K, R>
        : T extends []
            ? []
        : never;

export function FilteredPluck<K extends string, T extends Properties[]>(key: K, ...objects: T): FilteredPluck<K, T> {
    return objects.map(o => (o as any)[key]).filter(o => o !== undefined) as any;
}
