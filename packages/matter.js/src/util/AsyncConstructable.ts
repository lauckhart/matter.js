/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NotInitializedError } from "../common/MatterError.js";
import { MaybePromise } from "./Type.js";

/**
 * Create an instance of a class implementing the {@link AsyncConstructable}
 * pattern.
 */
export async function asyncNew<
    const A extends any[],
    const C extends new(...args: A) => AsyncConstructable<any>
>(constructable: C, ...args: A) {
    return await new constructable(...args).construction;
}

/**
 * AsyncConstructable implements a pattern for asynchronous object
 * initialization.
 * 
 * Async construction happens in the initializer parameter of
 * {@link AsyncConstruction}.  You invoke in your constructor and place in a
 * property called "construction".
 * 
 * If construction is not in fact asynchronous, the initializer can return
 * undefined and AsyncConstruction will complete synchronously.
 * 
 * To ensure an instance is initialized prior to use you may await
 * construction, so e.g. `await new MyConstructable().construction`.
 * {@link asyncNew} is shorthand for this.
 * 
 * Setup optionally supports cancellation of initialization.  To implement,
 * provide a "cancel" function to {@link AsyncConstruction}.  Then
 * initialization can be canceled via {@link AsyncConstruction.cancel}.
 * 
 * To determine if initialization is complete synchronously you can check
 * {@link AsyncConstruction.ready}.
 */
export interface AsyncConstructable<T> {
    readonly construction: AsyncConstruction<T>;
}

/**
 * The promise implemented by an {@link AsyncConstructable}.
 */
export interface AsyncConstruction<T> extends Promise<T> {
    readonly ready: boolean;
    readonly error?: Error;
    cancel(): void;
    assertAvailable(): void;
}

export function AsyncConstruction<T extends AsyncConstructable<any>>(
    target: T,
    initializer?: () => MaybePromise<void>,
    cancel?: () => void
): AsyncConstruction<T> {
    const initialization = initializer?.();
    let error: any;
    let ready: boolean;
    let canceled = false;

    if (MaybePromise.is(initialization)) {
        ready = false;
        initialization.then(
            () => ready = true,
            e => {
                error = e;
                ready = true
            }
        );
    } else {
        ready = true;
    }

    return {
        get ready() {
            return ready;
        },

        get error() {
            return error;
        },

        cancel: () => {
            if (ready || canceled) {
                return;
            }
            if (cancel) {
                canceled = true;
                cancel?.();
            }
        },

        assertAvailable() {
            if (error) {
                throw new NotInitializedError(`Resource unavailable because of initialization failure: ${error}`);
            }
            if (!ready) {
                throw new NotInitializedError("Resource unavailable because initialization is ongoing");
            }
            if (canceled) {
                throw new NotInitializedError("Resource unavailable because initialization was canceled");
            }
        },
        
        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ): Promise<TResult1 | TResult2> {
            if (MaybePromise.is(initialization)) {
                return initialization.then(() => target).then(onfulfilled, onrejected);
            }
            return Promise.resolve(target).then(onfulfilled, onrejected);

        },

        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult> {
            return this.then(undefined, onrejected);
        },

        finally(onfinally) {
            return this.then().finally(onfinally);
        },

        get [Symbol.toStringTag]() {
            return "Promise";
        },
    };
}
