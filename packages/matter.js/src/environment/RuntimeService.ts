/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "../log/Diagnostic.js";
import { Logger } from "../log/Logger.js";
import { Observable } from "../util/Observable.js";
import { MaybePromise } from "../util/Promises.js";
import type { Environment } from "./Environment.js";

const logger = Logger.get("Runtime");

/**
 * Handles execution and lifecycle management of other components.
 */
export class RuntimeService {
    #processes?: Map<
        RuntimeService.Process,
        { started?: true, promise?: MaybePromise<void> }
    >;
    #started = Observable<[]>();
    #canceled = Observable<[]>();
    #stopped = Observable<[]>();
    #isCanceled = false;
    #completion?: Promise<void>;

    constructor(environment: Environment) {
        environment.set(RuntimeService, this);
    }

    /**
     * Add a runtime process.  A process:
     * 
     *   - Is started via {@link RuntimeService.Process.run} if supported
     * 
     *   - Keeps the runtime active if it returns a Promise from {@link RuntimeService.Process.run}
     * 
     *   - Is canceled via {@link RuntimeService.Process.cancel} if supported
     * 
     *   - Is destroyed via {@link Symbol.asyncDispose} if supported]
     */
    add(process: RuntimeService.Process) {
        if (!this.#processes) {
            this.#processes = new Map;
        }

        this.#processes?.set(process, {});

        if (this.#completion) {
            this.#startProcess(process);
        }

        if (this.#isCanceled) {
            this.#cancelProcess(process);
        }
    }

    /**
     * Starts any processes that are not yet executing and wait for non-utility processes to complete.
     */
    async run() {
        this.start();
        await this.#completion;
    }

    /**
     * Start any processes that are not yet executing.
     * 
     * If you use start to activate the runtime, you must still await {@link run}().
     */
    start() {
        if (this.#completion || !this.#processes) {
            return;
        }
        if (!this.#processes) {
            return;
        }
        for (const [ process, { started } ] of this.#processes.entries()) {
            if (!started) {
                this.#startProcess(process);
            }
        }
        this.#completion = new Promise(
            resolve => {
                const monitorProcesses = () => {
                    let ongoing = this.#ongoing;
                    if (!ongoing) {
                        // If we're canceled and there are no ongoing promises, our work is finished
                        if (this.#isCanceled) {
                            this.#isCanceled = false;
                            this.#processes = undefined;
                            resolve();
                            return;
                        }

                        // Cancel but then continue monitoring because cancelation may have result in additional work
                        this.cancel();
                        monitorProcesses();
                        return;
                    }
                }
                while (this.#processes?.size) {
                    const ongoing = this.#ongoing;
                    if (!ongoing) {
                        this.cancel();
                    }
                }
            }
        );
    }

    /**
     * Cancel execution.
     */
    cancel() {
        if (this.#isCanceled || !this.#completion) {
            return;
        }

        this.#isCanceled = true;

        if (!this.#processes) {
            return;
        }

        for (const process of this.#processes.keys()) {
            this.#cancelProcess(process);
        }
    }

    /**
     * Emits on start.
     */
    get started() {
        return this.#started;
    }

    /**
     * Emits on cancel.
     */
    get canceled() {
        return this.#canceled;
    }

    /**
     * Emits on completion.
     */
    get stopped() {
        return this.#stopped;
    }

    get [Diagnostic.value]() {
        return "Runtime";
    }

    #startProcess(process: RuntimeService.Process) {
        let promise = process.run?.();
        if (promise) {
            promise = promise
                .catch(e => {
                    logger.error(e);
                    logger.error("Shutting down due to unhandled error");
                    this.cancel();
                })
                .finally(
                    // Once process is complete, dispose.  If disposal returns a promise then don't resolve until
                    // disposal completes
                    () => this.#disposeProcess(process)
                );
        }
        this.#processes?.set(process, { started: true, promise });
    }

    #cancelProcess(process: RuntimeService.Process) {
        if (!this.#processes) {
            return;
        }

        let detail = this.#processes.get(process) ?? {};

        // If there's a promise, disposal is handled via #startProcess.  If there's not we must dispose now
        if (!detail.promise) {
            // Dispose, installing any disposal promise so the runtime doesn't exit until disposal completes
            detail.promise = this.#disposeProcess(process);
        }
    }

    #disposeProcess(process: RuntimeService.Process) {
        return MaybePromise.then(
            () => process[Symbol.asyncDispose]?.(),
            () => {
                this.#processes?.delete(process)
            },
            e => {
                logger.error(`Error disposing of ${process.constructor.name}:`, e);
                this.#processes?.delete(process)
            }
        )
    }

    get #ongoing() {
        const details = this.#processes?.values?.();
        if (!details) {
            return;
        }

        let promises: undefined | Promise<void>[];
        for (const { promise } of details) {
            if (promise) {
                if (!promises) {
                    promises = [];
                }
                promises.push(promise);
            }
        }

        return promises;
    }
}

export namespace RuntimeService {
    export interface Process {
        /**
         * Obtain a promise that resolves when the process completes.  If the process does not support run() it will
         * not prevent the runtime from exiting.
         */
        run?: () => Promise<void>;

        /**
         * Cancel the process.
         */
        cancel?: () => void;

        /**
         * Destruction logic.
         */
        [Symbol.asyncDispose]?: () => MaybePromise<void>;
    }
}
