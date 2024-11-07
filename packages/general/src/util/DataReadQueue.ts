/**
 * Promise-based blocking queue.
 *
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterFlowError } from "../MatterError.js";
import { Time } from "../time/Time.js";
import { CancelablePromise } from "./Cancelable.js";
import { EndOfStreamError, NoResponseTimeoutError, Stream } from "./Stream.js";

export class DataReadQueue<T> implements Stream<T> {
    readonly #queue = new Array<T>();
    #pendingRead?: CancelablePromise<T>;
    #resolvePending?: (data: T) => void;
    #closed = false;

    read(timeoutMs = 60_000): CancelablePromise<T> {
        if (this.#closed) {
            return CancelablePromise.reject(new EndOfStreamError());
        }

        const data = this.#queue.shift();
        if (data !== undefined) {
            return CancelablePromise.resolve(data);
        }

        if (this.#pendingRead !== undefined) {
            throw new MatterFlowError("Only one pending read is supported");
        }

        const timeout = Time.getTimer("Read timeout", timeoutMs, () =>
            this.#pendingRead?.cancel(new NoResponseTimeoutError()),
        );

        this.#pendingRead = new CancelablePromise(
            resolve =>
                (this.#resolvePending = (data: T) => {
                    timeout.stop();
                    this.#pendingRead = this.#resolvePending = undefined;
                    resolve(data);
                }),

            reason => {
                timeout.stop();
                this.#pendingRead = this.#resolvePending = undefined;
                throw reason;
            },
        );

        return this.#pendingRead;
    }

    async write(data: T) {
        if (this.#closed) throw new EndOfStreamError();
        if (this.#resolvePending !== undefined) {
            this.#resolvePending(data);
            return;
        }
        this.#queue.push(data);
    }

    close() {
        if (this.#closed) return;
        this.#closed = true;
        if (this.#pendingRead === undefined) return;
        this.#pendingRead.cancel(new EndOfStreamError());
    }
}
