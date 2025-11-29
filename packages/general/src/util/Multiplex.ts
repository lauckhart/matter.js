/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "#log/Logger.js";
import { MatterAggregateError } from "#MatterError.js";
import { Lifetime } from "./Lifetime.js";
import { MaybePromise } from "./Promises.js";
import { BasicSet } from "./Set.js";

const logger = Logger.get("Multiplex");

/**
 * A "multiplex" tracks an extensible set of promises.
 */
export interface Multiplex {
    add(description: string, worker: Promise<unknown>): void;
    close(): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
}

interface Worker {
    lifetime: Lifetime;
    done: Promise<unknown>;
}

/**
 * A basic multiplex that tracks all promises given to it.
 */
export class BasicMultiplex implements Multiplex, PromiseLike<void> {
    #lifetime: Lifetime;
    #workers = new BasicSet<Worker>();

    constructor(lifetime: Lifetime.Owner, name = "workers") {
        this.#lifetime = lifetime.join(name);
    }

    add(name: string, worker: MaybePromise<unknown>) {
        if (!MaybePromise.is(worker)) {
            return;
        }

        const entry = {
            lifetime: this.#lifetime.join(name),
            done: Promise.resolve(worker)
                .catch(e => {
                    logger.error(`Error ${name}:`, e);
                })
                .finally(() => {
                    this.#workers.delete(entry);
                    entry.lifetime[Symbol.dispose]();
                }),
            name,
        };

        this.#workers.add(entry);
    }

    async close() {
        while (this.#workers.size) {
            await MatterAggregateError.allSettled([...this.#workers].map(entry => entry.done));
        }
        this.#lifetime[Symbol.dispose]();
    }

    then<TResult1 = void, TResult2 = never>(
        onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): PromiseLike<TResult1 | TResult2> {
        return this.close().then(onfulfilled, onrejected);
    }

    [Symbol.asyncDispose] = this.close.bind(this);
}
