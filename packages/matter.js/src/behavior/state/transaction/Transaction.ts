/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError, MatterError } from "../../../common/MatterError.js";
import { createPromise } from "../../../util/Promises.js";
import type { TransactionCoordinator } from "./TransactionCoordinator.js";

export class TransactionFlowError extends MatterError {}

/**
 * Updates to Matter.js state are transactional.
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
    #participants = new Set<Transaction.Participant>();
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
    get participants() {
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
     * The smallest granularity a transaction may have is at the participant
     * level.  By default transactions do not cross participant boundaries.
     * 
     * In Matter.js, endpoint state is the primary transaction participant.
     * Multiple endpoints may participate in a single transaction but it is up
     * to the Matter.js library user to manage consistency in this case.
     * 
     * This would be reasonable for example if you are storing state for
     * multiple endpoints in the same database, or if multiple Matter endpoints
     * represent a single bridged device that you update atomically.
     * 
     * In addition to the issues of consistency, cross-endpoint transactions
     * could potentially result in deadlocks.  Matter.js will detect this and
     * throw an error.  You can avoid this by:
     * 
     *   1. Only adding participants to shared (non-exclusive) transactions,
     *      *not* after a transaction becomes exclusive, or
     *   2. Ensuring that you always add endpoints to transactions in the same
     *      order.
     */
    async addParticipant(participant: Transaction.Participant) {
        if (this.#participants.has(participant)) {
            return;
        }

        switch (this.#status) {
            case Transaction.Status.Shared:
            case Transaction.Status.Exclusive:
                await this.#coordinator.addingParticipant(this, participant);
                this.#participants.add(participant);
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
    /**
     * Components with support for transactionality implement this interface.
     */
    export interface Participant {
        /**
         * Transition isolated writes into canonical form.
         */
        commit(): void;

        /**
         * Drop isolated writes and revert to original canonical form.
         */
        rollback(): void;

        /**
         * Textual description used in error messages.
         */
        readonly description: string;
    }

    /**
     * The lifecycle of a transaction adheres to the following discrete stages.
     */
    export enum Status {
        /**
         * Transaction is registered but there are no ACID guarantees.
         */
        Shared = "shared",

        /**
         * Transaction is waiting to obtain exclusive access.
         */
        Waiting = "waiting",

        /**
         * Transaction has exclusive access.  Reads will maintain consistency
         * and writes are allowed.
         */
        Exclusive = "exclusive",

        /**
         * Transaction is in the process of committing.
         */
        Committing = "committing",

        /**
         * Transaction is in the process of rolling back.
         */
        RollingBack = "rolling back",

        /**
         * Transaction is finished.
         */
        Finished = "finished",
    }
}
