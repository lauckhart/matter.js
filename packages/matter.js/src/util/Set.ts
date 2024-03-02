/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Observable } from "./Observable.js";

/**
 * A read-only set.
 */
export interface ImmutableSet<T> {
    [Symbol.iterator]: () => Iterator<T, undefined>;
    has(item: T): boolean;
    get size(): number;
}

/**
 * A write-only set.
 */
export interface MutableSet<T, AddT = T> {
    add(definition: AddT): void;
    delete(definition: T): boolean;
    clear(): void;
}

/**
 * Set change events.
 */
export interface ObservableSet<T> {
    get added(): Observable<[T]>;
    get deleted(): Observable<[T]>;
}

/**
 * An interface for index set lookup.
 */
export interface IndexedSet<T> {
    get<F extends keyof T>(field: F, value: T[F]): T | undefined;
}

/**
 * A generic set implementation supporting all interfaces in this module.
 *
 * Unused features have minimal performance impact.
 */
export class BasicSet<T, AddT = T> implements ImmutableSet<T>, MutableSet<T, AddT>, ObservableSet<T>, IndexedSet<T> {
    #entries = new Set<T>();
    #added?: Observable<[T]>;
    #deleted?: Observable<[T]>;
    #indices?: {
        [field in keyof T]?: Map<any, T>;
    };

    [Symbol.iterator]() {
        return this.#entries[Symbol.iterator]();
    }

    get size() {
        return this.#entries.size;
    }

    has(item: T) {
        return this.#entries.has(item);
    }

    add(item: AddT) {
        const created = this.create(item);

        if (this.#entries.has(item as any)) {
            return;
        }

        this.#entries.add(item as any);

        if (this.#indices) {
            for (const field in this.#indices) {
                const value = created[field];
                if (value === undefined) {
                    continue;
                }

                const index = this.#indices[field];
                if (index === undefined || index.has(value)) {
                    continue;
                }

                index.set(value, created);
            }
        }

        this.#added?.emit(created);
    }

    get<F extends keyof T>(field: F, value: T[F]) {
        if (!this.#indices) {
            this.#indices = {};
        }
        let index = this.#indices[field];
        if (index === undefined) {
            index = new Map<any, T>();
            for (const item of this) {
                const value = item[field];
                if (value === undefined || index.has(value)) {
                    continue;
                }
                index.set(value, item);
            }
            this.#indices[field] = index;
        }
        return index?.get(value);
    }

    delete(item: T) {
        if (!this.#entries.delete(item)) {
            return false;
        }

        if (this.#indices) {
            for (const field in this.#indices) {
                const value = item[field];
                if (value === undefined) {
                    continue;
                }

                const index = this.#indices[field];
                if (index !== undefined && index.get(value) === item) {
                    index.delete(value);
                }
            }
        }

        this.#deleted?.emit(item);

        return true;
    }

    clear() {
        this.#entries.clear();
    }

    get added() {
        if (this.#added === undefined) {
            this.#added = new Observable();
        }
        return this.#added;
    }

    get deleted() {
        if (this.#deleted === undefined) {
            this.#deleted = new Observable();
        }
        return this.#deleted;
    }

    protected create(definition: AddT) {
        return definition as unknown as T;
    }
}
