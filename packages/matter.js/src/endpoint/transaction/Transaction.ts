/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, MatterError } from "../../common/MatterError.js";
import { createPromise } from "../../util/Promises.js";
import { Part } from "../Part.js";
import { TransactionCoordinator } from "./TransactionCoordinator.js";

export class TransactionFlowError extends MatterError {}

/**
 * Updates to Matter.js {@link Part} state are transactional.
 * 
 * Transactions are either shared (for reads) or exclusive (for writes).
 * Exclusive transactions do not block shared transactions but state updates
 * will not be visible until the transaction completes.
 * 
 * Writes do block other writes.  Transactions start automatically when a write
 * occurs.  Since this potentially happens synchronously, the best Matter.js
 * can do is throw an error if two write transactions would conflict.  However,
 * you can avoid this by using {@link Transaction.begin} which ensures writes
 * occur serially.
 */
export class Transaction {
    #participants = new Map<Part, Transaction.Control>();
    #status = Transaction.Status.Shared;
    #coordinator: TransactionCoordinator;
    #promise?: Promise<void>;
    #resolve?: () => void;

    constructor(coordinator: TransactionCoordinator) {
        this.#coordinator = coordinator;
        this.#coordinator.changeStatus(this, this.#status);
    }

    /**
     * Obtain the status of the transaction.
     */
    get status() {
        return this.#status;
    }

    /**
     * Obtain the parts participating in the transaction.
     */
    get parts() {
        return this.#participants.keys();
    }

    /**
     * Obtain a promise that will resolve when the transaction completes.
     */
    get promise() {
        if (this.#promise === undefined) {
            if (this.#status === Transaction.Status.Finished) {
                return Promise.resolve();
            }
            const { promise, resolver } = createPromise<void>();
            this.#promise = promise;
            this.#resolve = resolver;
        }
        return this.#promise;
    }

    /**
     * The smallest granularity a transaction may have is at the endpoint
     * level.  By default transactions do not cross endpoint boundaries.
     * 
     * Multiple endpoints may participate in a single transaction but it is up
     * to the Matter.js library user to manage consistency in this case.
     * 
     * This would be possible for example if you are storing state for multiple
     * endpoints in the same database, or if multiple Matter endpoints
     * represent a single bridged device that you update atomically.
     * 
     * In addition to the issues of consistency, cross-endpoint transactions
     * could potentially result in deadlocks.  Matter.js will detect this and
     * throw an error.  You can avoid this by:
     * 
     *   1. Only adding endpoints to shared (non-exclusive) transactions before
     *      a transaction becomes exclusive, or
     *   2. Ensuring that you always add endpoints to transactions in the same
     *      order.
     */
    async addPart(part: Part, control: Transaction.Control) {
        if (this.#participants.has(part)) {
            return;
        }

        switch (this.#status) {
            case Transaction.Status.Shared:
            case Transaction.Status.Exclusive:
                await this.#coordinator.addingPart(this, part);
                this.#participants.set(part, control);
                break;

            default:
                throw new TransactionFlowError(
                    `Cannot add part to transaction because transaction is ${this.status}`
                );
        }
    }

    /**
     * Begin an exclusive transaction.
     * 
     * Transactions begin automitically on write but there are two cases where
     * you may want to use this method:
     * 
     *   1. To serialize writes and prevent conflicting writes from throwing an
     *      error.
     * 
     *   2. To ensure that reads operate on the newest version of state;
     *      otherwise state might contain stale data if there is an active
     *      uncommitted write.
     * 
     * Neither of these are likely to be important for most use cases.
     */
    async begin() {
        switch (this.status) {
            case Transaction.Status.Shared:
                this.#status = Transaction.Status.Waiting;
                try {
                    await this.#coordinator.begin(this);
                } catch (e) {
                    this.#status = Transaction.Status.Shared;
                    throw e;
                }
                this.#status = Transaction.Status.Exclusive;
                break;

            case Transaction.Status.Exclusive:
                return;

            default:
                throw new ImplementationError(
                    `Cannot begin exclusive because transaction is ${
                        this.#status
                    }`);
        }
    }

    /**
     * Begin an exclusive transaction in a synchronous context.
     * 
     * Unlike {@link begin}, this method will throw an error if any part is
     * already participating in an exclusive transaction.
     */
    async beginSync() {
        switch (this.status) {
            case Transaction.Status.Shared:
                this.#status = this.#coordinator.changeStatus(
                    this,
                    Transaction.Status.Exclusive
                );
                break;

            case Transaction.Status.Exclusive:
                return;

            default:
                throw new ImplementationError(
                    `Cannot become exclusive because transaction is ${
                        this.#status
                    }`);
        }
    }

    async commit() {
        this.#finish("commit", "commit");
    }

    async rollback() {
        this.#finish("rollback", "roll back");
    }

    #finish(how: "commit" | "rollback", description: string) {
        switch (this.status) {
            case Transaction.Status.Shared:
                this.#status = this.#coordinator.changeStatus(
                    this,
                    Transaction.Status.Finished
                );
                break;

            case Transaction.Status.Exclusive:
                this.#status = this.#coordinator.changeStatus(
                    this,
                    Transaction.Status.Finished
                );

                try {
                    for (const control of this.#participants.values()) {
                        control[how]();
                    }
                } finally {
                    this.#status = this.#coordinator.changeStatus(
                        this,
                        Transaction.Status.Finished
                    )

                    this.#resolve?.();
                };
                break;

            default:
                throw new ImplementationError(
                    `Cannot ${
                        description
                    } because transaction is ${
                        this.#status
                    }`);
        }
    }
}

export namespace Transaction {
    export enum Status {
        Shared = "shared",
        Waiting = "waiting",
        Exclusive = "exclusive",
        Committing = "committing",
        RollingBack = "rolling back",
        Finished = "finished",
    }
}

export namespace Transaction {
    export interface Control {
        commit: () => void,
        rollback: () => void
    }
}
