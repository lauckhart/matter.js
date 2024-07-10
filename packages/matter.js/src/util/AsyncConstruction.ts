/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CrashedDependenciesError, CrashedDependencyError, Lifecycle } from "../common/Lifecycle.js";
import { ImplementationError } from "../common/MatterError.js";
import { Logger } from "../log/Logger.js";
import { asError } from "./Error.js";
import { Observable } from "./Observable.js";
import { MaybePromise } from "./Promises.js";

/**
 * Create an instance of a class implementing the {@link AsyncConstructable} pattern.
 */
export async function asyncNew<const A extends any[], const C extends new (...args: A) => AsyncConstructable<any>>(
    constructor: C,
    ...args: A
): Promise<InstanceType<C>> {
    const subject = new constructor(...args);

    try {
        await subject.construction;
    } catch (e) {
        if (subject.construction.error && e instanceof CrashedDependencyError && e.subject === subject) {
            throw subject.construction.error;
        }
        throw e;
    }

    return subject as InstanceType<C>;
}

/**
 * AsyncConstructable as a pattern for asynchronous object initialization.
 *
 * Async construction happens in the initializer parameter of {@link AsyncConstruction}.  You invoke in your constructor
 * and place in a property called "construction".
 *
 * If construction is not in fact asynchronous (does not return a Promise) AsyncConstruction will complete
 * synchronously.
 *
 * To ensure an instance is initialized prior to use you may await construction, so e.g. `await new
 * MyConstructable().construction`. {@link asyncNew} is shorthand for this.
 *
 * Public APIs should provide a static async create() that performs an asyncNew().  The class will then adhere to
 * Matter.js conventions and library users can ignore the complexities associated with async creation.
 *
 * Methods that cannot be used prior to construction can use {@link AsyncConstruction.assert} to ensure construction has
 * completed. High-visibility public APIs can instead check {@link AsyncConstruction.ready} and throw a more specific
 * error.
 *
 * Setup optionally supports cancellation of initialization.  To implement, provide a "cancel" function option to
 * {@link AsyncConstruction}.  Then initialization can be canceled via {@link AsyncConstruction.cancel}.
 *
 * To determine if initialization is complete synchronously you can check {@link AsyncConstruction.ready}.
 */
export interface AsyncConstructable<T = object> {
    readonly construction: AsyncConstruction<T>;
}

export module AsyncConstructable {
    /**
     * An {@link AsyncConstructable} that supports deferred construction.
     *
     * This supports use cases where initialization initiates separately from construction and/or reinitialization is
     * possible.
     */
    export interface Deferred<T, A extends unknown[]> extends AsyncConstructable<T> {
        /**
         * Initiate deferred construction.
         */
        [construct](...args: A): MaybePromise<void>;
    }

    export const construct = Symbol("construct");
}

/**
 * The promise implemented by an {@link AsyncConstructable}.
 */
export interface AsyncConstruction<T> extends Promise<T> {
    /**
     * Becomes true when construction is finished.
     */
    readonly ready: boolean;

    /**
     * If construction ends with an error, the error is saved here.
     */
    readonly error?: Error;

    /**
     * Status of the constructed object.
     */
    readonly status: Lifecycle.Status;

    /**
     * Notifications of state change.  Normally you just await construction but this offers more granular events.
     */
    readonly change: Observable<[status: Lifecycle.Status, subject: T]>;

    /**
     * If you omit the initializer parameter to {@link AsyncConstruction} execution is deferred until you invoke this
     * method.
     */
    start<const T, const A extends unknown[], const This extends AsyncConstruction<AsyncConstructable.Deferred<T, A>>>(
        this: This,
        ...args: A
    ): MaybePromise;

    /**
     * Invoke destruction logic then move to destroyed status.
     */
    close(destructor: () => MaybePromise): MaybePromise;

    /**
     * AsyncConstruction may be cancellable.  If not this method does nothing.  Regardless you must wait for promise
     * resolution even if canceled.
     */
    cancel(): void;

    /**
     * Throws an error if construction is ongoing or incomplete.
     */
    assert(description?: string): void;

    /**
     * Asserts construction is complete and that an object is defined.
     */
    assert<T>(description: string, dependency: T | undefined): T;

    /**
     * Manually force a specific {@link status}.
     *
     * This offers flexibility in component lifecycle management including resetting component to inactive state and
     * broadcasting lifecycle changes.
     *
     * This method fails if initialization is ongoing; await completion first.
     */
    setStatus(status: Lifecycle.Status): void;

    /**
     * Force "crashed" state with the specified error.
     */
    crashed(cause: any): void;

    /**
     * Invoke a method after construction completes successfully.
     *
     * Errors thrown by this callback are logged but otherwise ignored.
     */
    onSuccess(actor: () => MaybePromise<void>): void;

    /**
     * Invoke a method after construction completes unsuccessfully.
     *
     * If you register an onError handler then the default error handler will not log the error.
     *
     * Errors thrown by this callback are logged but otherwise ignored.
     */
    onError(actor: (error: Error) => MaybePromise<void>): void;

    /**
     * Invoke a method after construction completes successfully or onsuccessfully.
     *
     * Errors thrown by this callback are logged but otherwise ignored.
     */
    onCompletion(actor: () => void): void;

    toString(): string;
}

/**
 * Create an {@link AsyncConstructable} and begin async construction.
 */
export function AsyncConstruction<const T extends AsyncConstructable>(
    subject: T,
    initializer?: () => MaybePromise,
    options?: AsyncConstruction.Options,
): AsyncConstruction<T>;

/**
 * Create an {@link AsyncConstructable} with deferred construction.
 */
export function AsyncConstruction<const T extends AsyncConstructable.Deferred<object, []>>(
    subject: T,
    options?: AsyncConstruction.Options,
): AsyncConstruction<T>;

export function AsyncConstruction<const T extends AsyncConstructable>(
    subject: T,
    initializerOrOptions?: AsyncConstruction.Options | (() => MaybePromise),
    options?: AsyncConstruction.Options,
): AsyncConstruction<T> {
    let initializer: undefined | (() => MaybePromise);

    if (typeof initializerOrOptions === "function") {
        initializer = initializerOrOptions;
    } else {
        assertDeferred(subject);
        options = initializerOrOptions;
        initializerOrOptions = undefined;
    }

    // The promise we use to implement AsyncConstructable.then()
    let awaiterPromise: undefined | Promise<T>;
    let awaiterResolve: undefined | ((subject: T) => void);
    let awaiterReject: undefined | ((error: any) => void);

    let error: undefined | Error;
    let started = false;
    let ready = false;
    let canceled = false;
    let errorsHandled = false;
    let status = Lifecycle.Status.Initializing;
    let change: Observable<[status: Lifecycle.Status, subject: T]> | undefined;

    const onerror =
        options?.onerror ??
        (e => {
            if (errorsHandled) {
                return;
            }

            unhandledError(e);
        });

    const self: AsyncConstruction<any> = {
        [Symbol.toStringTag]: "AsyncConstruction",

        get ready() {
            return ready;
        },

        get error() {
            return error;
        },

        get status() {
            return status;
        },

        get change() {
            if (change === undefined) {
                change = Observable();
            }
            return change;
        },

        start<const T, const A extends [], const This extends AsyncConstruction<AsyncConstructable.Deferred<T, A>>>(
            this: This,
            ...args: A
        ) {
            if (started) {
                throw new ImplementationError(`Initialization of ${subject} is already ongoing`);
            }

            assertDeferred(subject);

            started = true;

            let initializerPromise;
            try {
                initializerPromise = subject[AsyncConstructable.construct](...args);
            } catch (e) {
                rejected(e);
                return;
            }

            if (MaybePromise.is(initializerPromise)) {
                ready = false;
                initializerPromise.then(resolved, rejected);
            } else {
                resolved();
            }
        },

        cancel: () => {
            if (ready || canceled) {
                return;
            }
            if (options?.cancel) {
                canceled = true;
                if (status === Lifecycle.Status.Initializing) {
                    setStatus(Lifecycle.Status.Destroyed);
                }
                options.cancel();
            }
        },

        assert(description?: string, dependency?: any) {
            Lifecycle.assertActive(status, description ?? subject.constructor.name);

            if (arguments.length < 2) {
                return;
            }

            try {
                if (dependency === undefined) {
                    throw new ImplementationError(`Property is undefined`);
                }
            } catch (e) {
                let error;
                if (e instanceof Error) {
                    error = e;
                } else {
                    error = new ImplementationError(e?.toString() ?? "(unknown error)");
                }
                error.message = `Cannot access ${description}: ${error.message}`;
                throw error;
            }
            return dependency;
        },

        then<TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
        ): Promise<TResult1 | TResult2> {
            // On error awaiters receive CrashedDependencyError rather than the original error.  So we can't pass
            // onrejected to the dependency directly.  If there is no error handler we don't want the error unhandled
            // (we handle the cause in the primary code path) so we add an empty error handler.
            const handleRejection = () => onrejected?.(crashedError()) as TResult2;
            if (!ready) {
                if (!awaiterPromise) {
                    awaiterPromise = new Promise<T>((resolve, reject) => {
                        awaiterResolve = resolve;
                        awaiterReject = reject;
                    });
                }

                return awaiterPromise.then(onfulfilled, handleRejection);
            }

            const promise = error ? Promise.reject(crashedError()) : Promise.resolve(subject);
            return promise.then(onfulfilled, handleRejection);
        },

        catch<TResult = never>(
            onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
        ): Promise<T | TResult> {
            return this.then(undefined, onrejected);
        },

        onSuccess(actor: () => MaybePromise<void>) {
            const onSuccess = () => {
                const errorHandler = createErrorHandler("onSuccess");

                try {
                    const result = actor();
                    if (MaybePromise.is(result)) {
                        return Promise.resolve(result).catch(errorHandler);
                    }
                } catch (e) {
                    errorHandler(e);
                }
            };

            this.then(onSuccess).catch(e => {
                // Failure should result in a CrashedDependencyError which simply means initialization failed.  The
                // actual error is logged so we can safely ignore
                if (e instanceof CrashedDependencyError) {
                    return;
                }

                // If the error was not a CrashedDependencyError then it is unexpected.  We rethrow which will result in
                // the process exiting with an unexpected error
                throw e;
            });
        },

        onError(actor: (error: Error) => MaybePromise<void>) {
            errorsHandled = true;

            const onError = () => {
                const errorHandler = createErrorHandler("onError");

                try {
                    const result = actor(asError(error));
                    if (MaybePromise.is(result)) {
                        return Promise.resolve(result).catch(errorHandler);
                    }
                } catch (e) {
                    errorHandler(e);
                }
            };

            this.catch(onError);
        },

        onCompletion(actor: () => void) {
            const onCompletion = () => {
                const errorHandler = createErrorHandler("onCompletion");

                try {
                    actor();
                } catch (e) {
                    errorHandler(e);
                }
            };

            this.finally(onCompletion);
        },

        close(destructor): MaybePromise {
            if (status === Lifecycle.Status.Destroying || status === Lifecycle.Status.Destroyed) {
                return this;
            }

            function invokeDestructor() {
                status = Lifecycle.Status.Destroying;

                return MaybePromise.finally(
                    MaybePromise.catch(destructor, cause =>
                        unhandledError(`Unhandled error during ${self} close`, cause),
                    ),
                    () => setStatus(Lifecycle.Status.Destroyed),
                );
            }

            if (status === Lifecycle.Status.Initializing) {
                return this.then(invokeDestructor, invokeDestructor);
            }

            return invokeDestructor();
        },

        finally(onfinally: () => void): Promise<T> {
            return Promise.prototype.finally.call(this, onfinally);
        },

        crashed(cause: any) {
            error = asError(cause);
            setStatus(Lifecycle.Status.Crashed);
            onerror(error);
        },

        setStatus(newStatus: Lifecycle.Status) {
            if (this.status === newStatus) {
                return;
            }

            if (status === Lifecycle.Status.Destroyed) {
                throw new ImplementationError("Cannot change status because destruction is final");
            }

            switch (newStatus) {
                case Lifecycle.Status.Inactive:
                    awaiterPromise = undefined;
                    started = ready = canceled = false;
                    error = undefined;
                    break;

                case Lifecycle.Status.Initializing:
                    throw new ImplementationError("Cannot change status because initialization is ongoing");

                case Lifecycle.Status.Active:
                    awaiterPromise = undefined;
                    started = ready = true;
                    canceled = false;
                    error = undefined;
                    break;

                case Lifecycle.Status.Destroying:
                    break;

                case Lifecycle.Status.Destroyed:
                    break;

                default:
                    started = ready = true;
                    break;
            }

            setStatus(status);
        },
    };

    // As a PromiseLike, rejections have the stack trace of the original error.  This can be confusing.  So instead we
    // throw a new CrashedDependencyError for each listener.  This captures the original error but also the trace for
    // the secondary error.
    function crashedError() {
        let what;
        if (subject.toString === Object.prototype.toString) {
            what = subject.constructor.name;
        } else {
            what = subject.toString();
        }
        const error = new CrashedDependencyError(what, "unavailable due to initialization error");
        error.subject = subject;
        return error;
    }

    function setStatus(newStatus: Lifecycle.Status) {
        if (status === newStatus) {
            return;
        }

        status = newStatus;

        if (change) {
            change.emit(status, subject);
        }
    }

    function resolved() {
        ready = true;
        if (status === Lifecycle.Status.Initializing) {
            setStatus(Lifecycle.Status.Active);
        }

        if (awaiterResolve) {
            const resolve = awaiterResolve;
            awaiterResolve = awaiterReject = undefined;
            resolve(subject);
        }
    }

    function rejected(cause: any) {
        let result = undefined;
        ready = true;
        if (status !== Lifecycle.Status.Destroying && status !== Lifecycle.Status.Destroyed) {
            error = cause;
            setStatus(Lifecycle.Status.Crashed);
            result = onerror(asError(error));
        }

        if (awaiterReject) {
            const reject = awaiterReject;
            awaiterResolve = awaiterReject = undefined;
            reject(cause);
        }

        return result;
    }

    function unhandledError(...args: any[]) {
        const logger = Logger.get(subject.constructor.name);
        logger.error(...args);
    }

    function createErrorHandler(name: string) {
        return (e: any) => {
            unhandledError(`Unhandled error in ${self} ${name}:`, e);
        };
    }

    if (initializer) {
        initializer();
    }

    return self;
}

export namespace AsyncConstruction {
    export interface Options {
        /**
         * Cancellation callback if the subject supports cancellation.
         */
        cancel?: () => void;

        /**
         * By default unhandled initialization errors are logged.  You can override by supplying an error handler here
         * or by handling rejection of {@link AsyncConstruction.initialization}.
         */
        onerror?: (error: Error) => void;
    }

    /**
     * Ensure a pool of {@link AsyncConstructable}s are initialized.  Returns a promise if any constructables are still
     * initializing.
     *
     * @param subjects the constructables to monitor; may mutate whilst construction is ongoing
     * @param onerror error handler; if returns error it is thrown; if omitted throws CrashedDependenciesError
     */
    export function all<T extends AsyncConstructable>(
        subjects: Iterable<T>,
        onerror?: (errored: Iterable<T>) => void | Error,
    ): MaybePromise {
        if (onerror === undefined) {
            onerror = errors => new CrashedDependenciesError(errors);
        }

        const subjectArray = [...subjects];

        const uninitialized = subjectArray.filter(
            subject => subject.construction.status === Lifecycle.Status.Initializing,
        );
        if (uninitialized.length) {
            return Promise.allSettled(uninitialized.map(backing => backing.construction)).then(() =>
                // Recurse to ensure subjects added subsequent to initial "all" settle
                all(subjects),
            );
        }

        const crashed = Object.values(subjectArray).filter(
            backing => backing.construction.status === Lifecycle.Status.Crashed,
        );
        if (crashed.length) {
            const error = onerror(crashed);
            if (error) {
                throw error;
            }
        }
    }
}

function assertDeferred<T>(subject: AsyncConstructable<T>): asserts subject is AsyncConstructable.Deferred<T, any> {
    throw new ImplementationError(`No initializer defined for ${subject}`);
}
