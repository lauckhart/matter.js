/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../common/MatterError.js";

/**
 * A callback function for observables.
 */
export type Observer<T extends any[] = any[]> = (...payload: T) => void;

/**
 * A discrete event that may be monitored via callback.  Could call it "event"
 * but that could be confused with Matter cluster events and/or DOM events.
 * 
 * @param T arguments, should be a named tuple
 */
export interface Observable<T extends any[] = any[]> {
    /**
     * Add an observer.
     */
    (observer: Observer<T>): void;

    /**
     * Notify observers.
     */
    emit(...args: T): void;

    /**
     * Add an observer (alias for calling "this").
     */
    on(observer: Observer<T>): void;

    /**
     * Remove an observer.
     */
    off(observer: Observer<T>): void;

    /**
     * Add an observer that emits once then is unregistered.
     */
    once(observer: Observer<T>): void;
}

const OBSERVERS = Symbol("observers");
const ONCE = Symbol("ONCE");

const ObservablePrototype: ThisType<Observable<any> & { [OBSERVERS]?: Set<Function>, [ONCE]?: Set<Function> }> = {
    emit(payload: any) {
        if (this[OBSERVERS]) {
            for (const observer of this[OBSERVERS]) {
                observer(payload);
                if (this[ONCE]?.has(observer)) {
                    this[ONCE].delete(observer);
                    this[OBSERVERS].delete(observer);
                }
            }
        }
    },

    on(observer: Observer<any>) {
        if (!this[OBSERVERS]) {
            this[OBSERVERS] = new Set();
        }
        this[OBSERVERS].add(observer);
    },

    off(observer: Observer<any>) {
        this[OBSERVERS]?.delete(observer);
    },

    once(observer: Observer<any>) {
        this.on(observer);
        if (!this[ONCE]) {
            this[ONCE] = new Set();
        }
        this[ONCE].add(observer);
    },
};

function event<E, N extends string>(emitter: E, name: N) {
    const observer = (emitter as any)[name];
    if (typeof !observer?.on !== "function") {
        throw new ImplementationError(`Invalid event name ${name}`);
    }
    return observer as Observable;
}

/**
 * A set of observables.  You can bind events using individual observables or
 * the methods emulating a subset Node's EventEmitter.
 * 
 * To maintain type safety, implementers define events as observable child
 * properties.
 */
export class EventEmitter {
    emit<This, N extends EventEmitter.NamesOf<This>>(this: This, name: N, ...payload: EventEmitter.PayloadOf<This, N>) {
        event(this, name).emit(...payload);
    }

    addListener<This, N extends EventEmitter.NamesOf<This>>(this: This, name: N, handler: EventEmitter.ObserverOf<This, N>) {
        event(this, name).on(handler);
    }

    removeListener<This, N extends EventEmitter.NamesOf<This>>(this: This, name: N, handler: EventEmitter.ObserverOf<This, N>) {
        event(this, name).off(handler);
    }

    get eventNames() {
        return Object.keys(this).filter(k => typeof (this as any)[k]?.on === "function");
    }
}

export namespace EventEmitter {
    /**
     * Legal event names.  If there are no events defined, assume this is an
     * untyped instance and allow any argument.
     */
    export type NamesOf<This> =
        [ EventNames<This> ] extends [ never ] ? string : EventNames<This>;

    export type EventNames<This> =
        string & keyof {
            [K in keyof This as This[K] extends Observable ? K : never]: true
        };

    /**
     * Arguments for an event.  If there are no events defined, assume this is
     * an untyped emitter and allow any argument.
     */
    export type PayloadOf<This, E extends string> =
        [ EventPayload<This, E> ] extends [ never ] ? any[] : EventPayload<This, E>;

    export type EventPayload<This, E extends string> =
        This extends { [K in E]: Observable<infer T> }
            ? T
            : never;

    export type ObserverOf<This, E extends string> =
        Observable<PayloadOf<This, E>>;
}

export function Observable<const T extends any[] = any[]>() {
    const observable = function (observer: Observer<T>) {
        observable.on(observer);
    } as Observable<T>;
    Object.assign(observable, ObservablePrototype);
    return observable;
}

/**
 * A general collection type that allows for observance of insertion and
 * removal.
 */
export interface ReadableObservableSet<T> {
    [Symbol.iterator]: () => Iterator<T, undefined>;
    has(item: T): boolean;

    get size(): number;
    get added(): Observable<[T]>;
    get deleted(): Observable<[T]>;
}

/**
 * Version of {@link ObservableSet} that can have values added but not removed.
 */
export interface WritableObservableSet<T, AddT = T> extends ReadableObservableSet<T> {
    add(definition: AddT): void;
    delete(definition: T): boolean;
    clear(): void;
}

/**
 * A concrete implementation of {@link ObservableSet} with automatic indexing.
 */
export class ObservableSet<T, AddT = T> implements WritableObservableSet<T, AddT> {
    #set = new Set<T>();
    #added = Observable<[T]>();
    #deleted = Observable<[T]>();
    #indices?: { [field in keyof T]?: Map<any, T> };

    [Symbol.iterator]() {
        return this.#set[Symbol.iterator]();
    }

    get size() {
        return this.#set.size;
    }

    has(item: T) {
        return this.#set.has(item);
    }

    add(item: AddT) {
        const created = this.create(item);

        if (this.#set.has(item as any)) {
            return;
        }

        this.#set.add(item as any);

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

        this.#added?.emit(created as T);
    }

    get(key: string, field: keyof T) {
        if (!this.#indices) {
            this.#indices = {};
        }
        let index = this.#indices[field];
        if (index === undefined) {
            index = new Map<any, T>();
            for (const item of this) {
                const value = item[field];
                if (value === undefined || index.has(key)) {
                    continue;
                }
                index.set(value, item);
            }
            this.#indices[field] = index;
        }
        return index?.get(key);
    }

    delete(item: T) {
        if (!this.#set.delete(item)) {
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

        this.deleted.emit(item as T);

        return true;
    }

    clear() {
        this.#set.clear();
    }

    get added() {
        return this.#added;
    }

    get deleted() {
        return this.#deleted;
    }

    protected create(definition: AddT) {
        return definition as unknown as T;
    }
}
