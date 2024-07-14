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

    // If construction of the subject is not initiated you cannot use asyncNew because something needs to invoke
    // AsyncConstruction#start.
    if (subject.construction.status === Lifecycle.Status.Inactive) {
        throw new ImplementationError(
            `You cannot use asyncNew on ${constructor.name} because its construction is controlled by another component`,
        );
    }

    await subject.construction.primary;

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
     * If construction ends with an error, the error is saved here.
     */
    readonly error?: Error;

    /**
     * Status of the constructed object.
     */
    readonly status: Lifecycle.Status;

    /**
     * Notifications of state change.  Normally you just await construction but this offers more granular events and
     * repeating events.
     */
    readonly change: Observable<[status: Lifecycle.Status, subject: T]>;

    /**
     * True iff the primary error has been or will be reported.
     */
    readonly isErrorHandled: boolean;

    /**
     * If you omit the initializer parameter to {@link AsyncConstruction} execution is deferred until you invoke this
     * method to initiate construction via the {@link AsyncConstructable.Deferred} interface.
     *
     * Unlike the initializer, errors are always reported via the PromiseLike interface even if the constructable throws
     * an error synchronously.
     */
    start<const T, const A extends unknown[], const This extends AsyncConstruction<AsyncConstructable.Deferred<T, A>>>(
        this: This,
        ...args: A
    ): void;

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
     * broadcasting lifecycle changes.  On reset listeners are also reset and must be reinstalled.
     *
     * This method fails if initialization is ongoing; await completion first.
     */
    setStatus(status: Lifecycle.Status): void;

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

    /**
     * A promise that behaves identically to {@link AsyncConstruction} but always throws the primary cause rather than
     * {@link CrashedDependencyError}.
     *
     * Handling errors on this promise will prevent other handlers from seeing the primary cause.
     */
    primary: Promise<T>;

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

    // The promise returned by the initializer if initialization is async
    let initializerPromise: MaybePromise<void>;

    // The promise we use to implement AsyncConstructable.then()
    let awaiterPromise: undefined | Promise<T>;
    let awaiterResolve: undefined | ((subject: T) => void);
    let awaiterReject: undefined | ((error: any) => void);

    let error: undefined | Error;
    let primaryCauseHandled = false;
    let status = Lifecycle.Status.Inactive;
    let change: Observable<[status: Lifecycle.Status, subject: T]> | undefined;

    const self: AsyncConstruction<any> = {
        [Symbol.toStringTag]: "AsyncConstruction",

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

        get isErrorHandled() {
            return primaryCauseHandled;
        },

        start<const T, const A extends [], const This extends AsyncConstruction<AsyncConstructable.Deferred<T, A>>>(
            this: This,
            ...args: A
        ) {
            if (status !== Lifecycle.Status.Inactive) {
                throw new ImplementationError(`Cannot initialize ${subject} because it is already active`);
            }

            assertDeferred(subject);

            status = Lifecycle.Status.Initializing;

            try {
                const initializeDeferred = () => subject[AsyncConstructable.construct](...args);
                invokeInitializer(initializeDeferred);
            } catch (e) {
                rejected(e);
                return;
            }
        },

        cancel: () => {
            if (status !== Lifecycle.Status.Initializing) {
                return;
            }
            if (options?.cancel) {
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
            const handleRejection = onrejected ? () => onrejected?.(crashedError()) as TResult2 : undefined;
            if (status === Lifecycle.Status.Inactive || status === Lifecycle.Status.Initializing) {
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
            const onError = (error: unknown) => {
                const errorHandler = createErrorHandler("onError");

                try {
                    const result = actor(asError(error));
                    if (MaybePromise.is(result)) {
                        return result.then(undefined, errorHandler);
                    }
                } catch (e) {
                    errorHandler(e);
                }
            };

            this.primary.catch(onError);
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

        setStatus(newStatus: Lifecycle.Status) {
            if (this.status === newStatus) {
                return;
            }

            switch (status) {
                case newStatus:
                    return;

                case Lifecycle.Status.Destroying:
                    if (newStatus !== Lifecycle.Status.Destroyed) {
                        throw new ImplementationError("Cannog change status because destruction is ongoing");
                    }
                    break;

                case Lifecycle.Status.Destroyed:
                    throw new ImplementationError("Cannot change status because destruction is final");

                case Lifecycle.Status.Initializing:
                    throw new ImplementationError("Cannot change status because initialization is ongoing");
            }

            switch (newStatus) {
                case Lifecycle.Status.Inactive:
                    awaiterPromise = undefined;
                    primaryCauseHandled = false;
                    error = undefined;
                    break;

                case Lifecycle.Status.Active:
                    awaiterPromise = undefined;
                    error = undefined;
                    break;

                default:
                    break;
            }

            setStatus(newStatus);
        },

        get primary() {
            return {
                [Symbol.toStringTag]: "AsyncConstruction#primary",

                then<TResult1 = T, TResult2 = never>(
                    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
                    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
                ): Promise<TResult1 | TResult2> {
                    let rejectionHandler: undefined | typeof onrejected;
                    if (onrejected) {
                        primaryCauseHandled = true;
                        rejectionHandler = () => onrejected(asError(error));
                    }

                    return self.then(onfulfilled, rejectionHandler);
                },

                catch<TResult = never>(
                    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
                ): Promise<T | TResult> {
                    return self.then(undefined, onrejected);
                },

                finally(onfinally: () => void): Promise<T> {
                    return Promise.prototype.finally.call(this, onfinally);
                },
            };
        },
    };

    if (options?.onerror) {
        self.onError(options.onerror);
    }

    if (initializer) {
        invokeInitializer(initializer);
    }

    return self;

    // Begin initialization.  May throw synchronously or asynchronously
    function invokeInitializer(initializer: () => MaybePromise<void>) {
        status = Lifecycle.Status.Initializing;

        initializerPromise = initializer();

        if (MaybePromise.is(initializerPromise)) {
            initializerPromise.then(resolved, rejected);
        } else {
            resolved();
        }
    }

    // We return the original error for the first rejection.  The stack trace will point to the source of the error.
    // This means that the owner of the object should register error handling first.
    //
    // For subsequent rejections we throw a new CrashedDependencyError for each listener.  This prevents the logs from
    // filling with redundant stack traces and ensures the stack trace details the listener's stack rather than the
    // original error's stack.
    function crashedError() {
        if (!primaryCauseHandled && error) {
            primaryCauseHandled = true;
            return error;
        }

        let what;
        if (subject.toString === Object.prototype.toString) {
            what = subject.constructor.name;
        } else {
            what = subject.toString();
        }

        const crashError = new CrashedDependencyError(what, "unavailable due to initialization error");
        crashError.subject = subject;
        return crashError;
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
        if (status !== Lifecycle.Status.Destroying && status !== Lifecycle.Status.Destroyed) {
            error = cause;
            setStatus(Lifecycle.Status.Crashed);
        }

        if (awaiterReject) {
            const reject = awaiterReject;
            awaiterResolve = awaiterReject = undefined;
            reject(cause);
        }
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
                all(subjects, onerror),
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
    if (typeof (subject as AsyncConstructable.Deferred<any, any>)?.[AsyncConstructable.construct] !== "function") {
        throw new ImplementationError(`No initializer defined for ${subject}`);
    }
}
