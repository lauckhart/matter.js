/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../../log/Logger.js";
import { createPromise } from "../../../util/Promises.js";
import { TransactionFlowError } from "./Errors.js";
import { Participant } from "./Participant.js";
import type { Resource } from "./Resource.js";
import { ResourceSet } from "./ResourceSet.js";
import { Status } from "./Status.js";

const logger = Logger.get("Transaction");

/**
 * By default, updates to Matter.js state are transactional.
 * 
 * Transactions are either shared (for reads) or exclusive (for writes).
 * Exclusive transactions do not block shared transactions but state updates
 * will not be visible until the transaction completes.
 * 
 * Writes do block other writes.  Transactions start automatically when a write
 * occurs.  Since this potentially happens synchronously, the best Matter.js
 * can do is throw an error if two write transactions would conflict.  However,
 * you can avoid this by using {@link begin} which ensures writes
 * occur serially.
 * 
 * Persistence is implemented by a list of participants.  Commits are two
 * phase.  If an error is thrown in phase one all participants roll back.
 * An error in phase 2 could result in data inconsistency as we don't have any
 * form of retry as of yet.
 */
export class Transaction {
    #participants = new Set<Participant>();
    #resources = new Set<Resource>();
    #status = Status.Shared;
    #promise?: Promise<void>;
    #resolve?: () => void;
    #waitingOn?: Iterable<Transaction>;

    /**
     * The status of the transaction.
     */
    get status() {
        return this.#status;
    }

    /**
     * Transaction participants.
     */
    get participants() {
        return this.#participants;
    }

    /**
     * Resources addressed by the participants.
     */
    get resources() {
        return this.#resources;
    }

    /**
     * The transactions currently blocking this transaction, if any.
     */
    get waitingOn() {
        return this.#waitingOn;
    }

    /**
     * Obtain a promise that resolves when the transaction commits or rolls
     * back.
     */
    get promise() {
        if (this.#promise === undefined) {
            const { promise, resolver } = createPromise<void>();
            this.#promise = promise;
            this.#resolve = resolver;
        }
        return this.#promise;
    }

    /**
     * Add a participant to the transaction.
     * 
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
     * 
     *   2. Ensuring that you always add endpoints to transactions in the same
     *      order.
     */
    async join(...participant: Participant.Joining[]) {
        const participants = Participant.dereference(participant)
            .filter(p => !this.#participants.has(p));

        if (!participants.length) {
            return;
        }

        if (this.#status === Status.Exclusive) {
            const resources = ResourceSet.forParticipants(this, participants);
            await resources.acquireLocks();
        } else if (this.#status !== Status.Shared) {
            throw new TransactionFlowError(
                `Cannot join transaction that is ${this.status}`
            );
        }

        for (const participant of participants) {
            this.#participants.add(participant);
            this.#resources.add(participant.resource);
        }
    }

    /**
     * Join a transaction in a synchronous context.
     * 
     * Unlike {@link join}, this method will throw an error if any participant
     * has already joined an exclusive transaction.
     */
    joinSync(...participant: Participant.Joining[]) {
        const participants = Participant.dereference(participant)
            .filter(p => !this.#participants.has(p));

        if (!participants.length) {
            return;
        }

        if (this.#status === Status.Exclusive) {
            const resources = ResourceSet.forParticipants(this, participants);
            resources.acquireLocksSync();
        } else if (this.#status !== Status.Shared) {
            throw new TransactionFlowError(
                `Cannot join transaction that is ${this.status}`
            );
        }

        for (const participant of participants) {
            this.#participants.add(participant);
            this.#resources.add(participant.resource);
        }
    }

    /**
     * Begin an exclusive transaction.
     * 
     * Transactions begin automatically on write but there are a few reasons
     * you may want to use this method to start an exclusive transaction
     * explicitly:
     * 
     *   1. Automatic transactions are started in a synchronous context so
     *      conflicting transactions will throw an error.  If you start a
     *      transaction, your code will await any transaction that would
     *      otherwise throw an error.
     * 
     *   2. Transaction isolation means your view of data may become stale if
     *      a write occurs in another transaction.  Once you start a
     *      transaction you block other writers so can be assured you're
     *      dealing with newest state. 
     *
     *   3. Say transaction A has an exclusive lock on resource 1 and awaits
     *      resource 2.  Transaction B has an exclusive lock on resource 2.
     *      Transaction B cannot then await resource 1 without causing a
     *      deadlock.  Matter.js will detect the deadlock and throw an error.
     *      One way to prevent this is to begin a transaction and acquire locks
     *      in a specific order.
     * 
     * None of the issues above are likely and are probably not a concern for
     * your application.  If you do encounter these issues the error message
     * will suggest solutions.
     */
    async begin() {
        if (this.status === Status.Exclusive) {
            return;
        }
        if (this.status !== Status.Shared) {
            throw new TransactionFlowError(
                `Cannot begin write transaction because transaction is ${
                    this.#status
                }`);
        }

        this.#status = Status.Exclusive;
        try {
            const resources = new ResourceSet(this, this.#resources);
            await resources.acquireLocks();
        } catch (e) {
            this.#status = Status.Shared;
            throw e;
        }
    }

    /**
     * Begin an exclusive transaction in a synchronous context.
     * 
     * Unlike {@link begin}, this method will throw an error if any participant
     * has already joined an exclusive transaction.
     */
    async beginSync() {
        if (this.status === Status.Exclusive) {
            return;
        }
        if (this.status !== Status.Shared) {
            throw new TransactionFlowError(
                `Cannot begin write transaction because transaction is ${
                    this.#status
                }`);
        }

        this.#status = Status.Exclusive;
        try {
            const resources = new ResourceSet(this, this.#resources);
            resources.acquireLocksSync();
        } catch (e) {
            this.#status = Status.Shared;
            throw e;
        }
    }

    /**
     * Commit the transaction.
     * 
     * Matter.js commits automatically when an interaction completes.  You may
     * commit manually to publish your changes mid-interaction.
     * 
     * After commit an exclusive transaction becomes shared and data references
     * refresh to the most recent value.
     */
    async commit() {
        if (this.#status === Status.Shared) {
            // Use rollback() to inform participants to refresh state
            this.rollback();
        } else {
            // Perform an actual commit
            await this.#finish(
                Status.CommittingPhaseOne,
                () => this.#executeCommit()
            );
        }
    }

    /**
     * Roll back the transaction.
     * 
     * Matter.js rolls back automatically when an interaction fails.  You may
     * roll back manually to undo your changes mid-interaction.
     * 
     * After rollback an exclusive transaction becomes shared and data
     * references refresh to the most recent value.
     */
    async rollback() {
        await this.#finish(
            Status.RollingBack,
            () => this.#executeRollback()
        );
    }

    /**
     * Wait for a set of transactions to complete.
     */
    async waitFor(others: Iterable<Transaction>) {
        if (this.waitingOn) {
            throw new TransactionFlowError("Attempted wait on a transaction that is already waiting");
        }

        try {
            this.#waitingOn = others;
            await Promise.all([...others].map(other => other.promise));
        } finally {
            this.#waitingOn = undefined;
        }
    }

    /**
     * Shared implementation for commit and rollback.
     */
    async #finish(status: Status, finalizer: () => Promise<void>) {
        // If this is a shared transaction then just resolve the promise
        if (this.status === Status.Shared) {
            this.#resolvePromise();
            return;
        }

        // Transaction must be exclusive as we are initiating commit or
        // rollback
        if (this.status !== Status.Exclusive) {
            throw new TransactionFlowError(
                `Illegal attempt to enter status ${
                    status
                } when transaction is ${
                    this.#status
                }`);
        }

        // Perform the commit or rollback
        try {
            this.#status = status;
            await finalizer();
        } finally {
            this.#status = Status.Shared;
            this.#resolvePromise();
        }
    }

    /**
     * Resolve the promise and clear the promise fields.
     */
    #resolvePromise() {
        const resolve = this.#resolve;

        this.#promise = undefined;
        this.#resolve = undefined;

        resolve?.();
    }

    /**
     * Commit logic passed to #finish.
     */
    async #executeCommit() {
        // Commit phase 1
        for (const participant of this.participants) {
            try {
                await participant.commit1();
            } catch (e) {
                logger.error(
                    `Error committing ${
                        participant.resource.description
                    } (phase one), rolling back:`,
                    e
                );
                this.#status = Status.RollingBack;
                await this.#executeRollback();
                return;
            }
        }

        // Commit phase 2
        this.#status = Status.CommittingPhaseTwo;
        for (const participant of this.participants) {
            try {
                await participant.commit2();
            } catch (e) {
                logger.error(
                    `Error committing ${
                        participant.resource.description
                    } (phase two), state may become inconsistent:`,
                    e
                );
            }
        }
    }

    /**
     * Rollback logic passed to #finish.
     */
    async #executeRollback() {
        for (const participant of this.participants) {
            try {
                await participant.rollback();
            } catch (e) {
                logger.error(
                    `Error rolling back ${
                        participant.resource.description
                    }, state may become inconsistent:`,
                    e
                );
            }
        }
    }
}
