/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, MatterError } from "../../common/MatterError.js";
import { Part } from "../Part.js";
import { Transaction, TransactionFlowError } from "./Transaction.js";

interface PartState {
    transactions: Set<Transaction>;
    waitingOn?: Set<Transaction>;
    exclusive?: Transaction;
}

interface ActivePartState extends PartState {
    exclusive: Transaction;
}

/**
 * This is thrown if a transaction attempts to obtain exclusivity in a
 * synchronous context.
 */
export class SynchronousTransactionConflictError extends MatterError {}

/**
 * This is thrown if a transaction attempts to obtain exclusivity in a manner
 * that would lead to deadlock.
 */
export class TransactionDeadlockError extends MatterError {}

/**
 * Internal class that manages interactions between transactions.
 */
export class TransactionCoordinator {
    #state = new Map<Part, PartState>();

    changeStatus(transaction: Transaction, status: Transaction.Status) {
        switch (status) {
            case Transaction.Status.Shared:
                for (const part of transaction.parts) {
                    this.#stateFor(part).transactions.add(transaction);
                }
                break;

            case Transaction.Status.Exclusive:
                for (const part of transaction.parts) {
                    if (this.#stateFor(part).exclusive) {
                        throw new SynchronousTransactionConflictError(
                            `Cannot begin exclusive transaction for part ${
                                part.uniqueId
                            } because there is already an exclusive transaction.  ` +
                            "You can use transaction.begin() to avoid this error"
                        );
                    }
                }
                for (const part of transaction.parts) {
                    this.#stateFor(part).exclusive = transaction;
                }
                break;

            case Transaction.Status.Committing:
                this.#assertExclusive(transaction, "commit");
                break;

            case Transaction.Status.RollingBack:
                this.#assertExclusive(transaction, "roll back");
                break;

            case Transaction.Status.Finished:
                for (const part of transaction.parts) {
                    const state = this.#stateFor(part);
                    if (state.exclusive === transaction) {
                        state.exclusive = undefined;
                    }
                    state.transactions.delete(transaction);
                }
                break;
        }

        return status;
    }

    async addingPart(transaction: Transaction, part: Part) {
        const state = this.#stateFor(part);
        while (state.exclusive && transaction.status === Transaction.Status.Exclusive) {
            await this.#awaitExclusivity(
                [ part ],
                () => {},
                state
            );
        }

        switch (transaction.status) {
            case Transaction.Status.Shared:
            case Transaction.Status.Exclusive:
                break;

            default:
                throw new TransactionFlowError(
                    `Cannot add part to transaction because transaction status became ${
                        transaction.status
                    } while waiting for exclusivity`
                )
        }

        state.transactions.add(transaction);

        if (transaction.status === Transaction.Status.Exclusive) {
            this.#setExclusive([ part ], transaction);
        }
    }

    async begin(transaction: Transaction) {
        const parts = transaction.parts;
        await this.#awaitExclusivity(
            parts,
            () => this.#setExclusive(transaction.parts, transaction)
        );
    }

    /**
     * Obtain the internal state object for a part.
     */
    #stateFor(part: Part) {
        if (part.owner.transactionCoordinator !== this) {
            throw new TransactionFlowError(
                `Cannot add part to transaction because the part is managed by a different coordinator`
            );
        }

        let state = this.#state.get(part);
        if (state === undefined) {
            this.#state.set(part, state = { transactions: new Set });
        }

        return state;
    }

    /**
     * Ensure that a transaction that is committing or rolling back is in fact
     * exclusive for all parts.
     * 
     * This is just a sanity check.
     */
    #assertExclusive(transaction: Transaction, why: string) {
        // Sanity check
        for (const part of transaction.parts) {
            if (this.#stateFor(part).exclusive !== transaction) {
                throw new InternalError(
                    `Transaction attempted ${
                        why
                    } but is not registered as exclusive for all participants`
                );
            }
        }
    }

    /**
     * Set the exclusive transaction for a list of parts.
     * 
     * No part may have an active exclusive transaction or this call will fail.
     */
    #setExclusive(parts: Iterable<Part>, transaction: Transaction) {
        // Sanity check
        for (const part of parts) {
            const state = this.#stateFor(part);
            if (state.exclusive) {
                throw new InternalError(
                    `Transaction set to exclusive with preexisting exclusive transaction`
                );
            }
        }

        // Install
        for (const part of parts) {
            const state = this.#stateFor(part);
            state.exclusive = transaction;
        }
    }

    /**
     * Wait until a list of parts exits exclusive transactions.
     * 
     * Note that this method invokes a callback because otherwise exclusivity
     * could be lost in the ticks between returning and updating local state.
     * A callback means state can be updated synchronously.
     */
    async #awaitExclusivity(
        parts: Iterable<Part>,
        onReady: () => void,
        joining?: PartState,
    ) {
        while (true) {
            let toAwait: undefined | Set<ActivePartState>;

            for (const part of parts) {
                const state = this.#stateFor(part);
                if (state.exclusive) {
                    if (!toAwait) {
                        toAwait = new Set;
                    }
                    toAwait.add(state as ActivePartState);
                }
            }

            if (!toAwait) {
                break;
            }

            if (joining?.exclusive) {
                this.#preventAwaitCycles(
                    joining as ActivePartState,
                    toAwait
                );
            }

            await Promise.all([ ...toAwait ].map(state => state.exclusive.promise));
        }

        onReady();
    }

    /**
     * If two transactions would block each other then we would have a
     * deadlock.
     * 
     * This is unlikely but not impossible.  It can happen if an endpoint is
     * added to an exclusive transaction but a second transaction already has
     * exclusivity on the new endpoint *and* is waiting on the first
     * transaction.
     * 
     * So... detect if the wait graph would have cycles if we an endpoint.  If
     * so, throw an error.
     */
    #preventAwaitCycles(
        joining: ActivePartState,
        blockedBy: Set<ActivePartState>
    ) {
        const allBlocking = new Set<PartState>;
        this.#findAllBlocking(blockedBy, allBlocking);
        if (allBlocking.has(joining)) {
            throw new TransactionDeadlockError(
                "Cycle detected in transaction wait graph; write operation cannot proceed.  " +
                "To prevent this you must ensure you always add endpoints to transactions in the same order"
            );
        }
    }

    /**
     * Recursively expand a set of blocking states into all states that must
     * resolve before the the listed states unblock.
     */
    #findAllBlocking(toAdd: Iterable<PartState>, allBlocking: Set<PartState>) {
        for (const state of toAdd) {
            if (allBlocking.has(state)) {
                continue;
            }

            allBlocking.add(state);

            if (state.waitingOn) {
                const waitingOn = new Set<PartState>;
                for (const transaction of state.waitingOn) {
                    for (const part of transaction.parts) {
                        waitingOn.add(this.#stateFor(part));
                    }
                }
                this.#findAllBlocking(waitingOn, allBlocking);
            }
        }
    }
}
