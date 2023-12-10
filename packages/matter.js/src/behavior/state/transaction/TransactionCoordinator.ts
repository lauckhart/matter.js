/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError, MatterError } from "../../../common/MatterError.js";
import { Transaction, TransactionFlowError } from "./Transaction.js";

interface ParticipantState {
    transactions: Set<Transaction>;
    waitingOn?: Set<Transaction>;
    exclusive?: Transaction;
}

interface ActiveParticipantState extends ParticipantState {
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
 * TransactionCoordinator manages interactions between transactions.
 * 
 * You pass this class to {@link Transaction}.  The methods on
 * TransactionCoordinator should only be invoked by {@link Transaction}.
 */
export class TransactionCoordinator {
    #state = new Map<Transaction.Participant, ParticipantState>();

    changeStatus(transaction: Transaction, status: Transaction.Status) {
        switch (status) {
            case Transaction.Status.Shared:
                switch (transaction.status) {
                    case Transaction.Status.Shared:
                        // Initial status change
                        break;

                    case Transaction.Status.CommittingPhaseTwo:
                    case Transaction.Status.RollingBack:
                        // Just completed exclusive transaction, reverting to
                        // shared.  Deregister all participants as the
                        // transaction will clear its participant list
                        for (const participant of transaction.participants) {
                            const state = this.#state.get(participant);
                            if (state) {
                                state.transactions.delete(transaction);
                                if (!state.transactions.size) {
                                    this.#state.delete(participant);
                                }
                            }
                        }
                        break;

                    default:
                        throw new TransactionFlowError(
                            `Cannot transition transaction from ${
                                this.#formatStatus(transaction.status)
                            } to ${
                                this.#formatStatus(status)
                            }`
                        );
                }

                break;

            case Transaction.Status.Exclusive:
                for (const participant of transaction.participants) {
                    if (this.#stateFor(participant).exclusive) {
                        throw new SynchronousTransactionConflictError(
                            `Cannot begin exclusive transaction for ${
                                participant.description
                            } because there is already an exclusive transaction.  ` +
                            "You can use transaction.begin() to avoid this error"
                        );
                    }
                }
                for (const participant of transaction.participants) {
                    this.#stateFor(participant).exclusive = transaction;
                }
                break;

            case Transaction.Status.CommittingPhaseOne:
                this.#assertStatus(
                    transaction,
                    [Transaction.Status.Exclusive],
                    status
                );
                this.#assertExclusive(transaction, "commit");
                break;

            case Transaction.Status.CommittingPhaseTwo:
                this.#assertStatus(
                    transaction,
                    [Transaction.Status.CommittingPhaseTwo],
                    status
                );
                break;

            case Transaction.Status.RollingBack:
                this.#assertStatus(
                    transaction,
                    [Transaction.Status.Exclusive, Transaction.Status.CommittingPhaseOne],
                    status
                );
                this.#assertExclusive(transaction, "roll back");
                break;
        }

        return status;
    }

    async addingParticipant(transaction: Transaction, participants: Transaction.Participant[]) {
        const states = participants.map(p => this.#stateFor(p));
        while (states.some(s => s.exclusive) && transaction.status === Transaction.Status.Exclusive) {
            await this.#awaitExclusivity(
                participants,
                () => {},
                state
            );
        }
    }

    #addingParticipantWithShared(transaction: Transaction, participants: Transaction.Participant[]) {
        for (const participant of participants) {
            const state = this.#stateFor(participant);

            switch (transaction.status) {
                case Transaction.Status.Shared:
                case Transaction.Status.Exclusive:
                    break;

                default:
                    throw new TransactionFlowError(
                        `Cannot add participants to transaction because transaction status became ${
                            this.#formatStatus(transaction.status)
                        } while awaiting exclusivity`
                    )
            }

            state.transactions.add(transaction);

            if (transaction.status === Transaction.Status.Exclusive) {
                this.#setExclusive([ participant ], transaction);
            }
        }
    }

    async begin(transaction: Transaction) {
        const participants = transaction.participants;
        await this.#awaitExclusivity(
            participants,
            () => this.#setExclusive(transaction.participants, transaction)
        );
    }

    /**
     * Obtain the internal state object for a part.
     */
    #stateFor(participant: Transaction.Participant) {
        let state = this.#state.get(participant);
        if (state === undefined) {
            this.#state.set(participant, state = { transactions: new Set });
        }

        return state;
    }

    /**
     * Ensure that a transaction that is committing or rolling back is in fact
     * exclusive for all participants.
     * 
     * This is just a sanity check.
     */
    #assertExclusive(transaction: Transaction, why: string) {
        // Sanity check
        for (const participant of transaction.participants) {
            if (this.#stateFor(participant).exclusive !== transaction) {
                throw new InternalError(
                    `Transaction attempted ${
                        why
                    } but is not registered as exclusive for all participants`
                );
            }
        }
    }

    /**
     * Set the exclusive transaction for a list of participants.
     * 
     * No part may have an active exclusive transaction or this call will fail.
     */
    #setExclusive(participants: Iterable<Transaction.Participant>, transaction: Transaction) {
        // Sanity check
        for (const participant of participants) {
            const state = this.#stateFor(participant);
            if (state.exclusive) {
                throw new InternalError(
                    `Transaction set to exclusive with preexisting exclusive transaction`
                );
            }
        }

        // Install
        for (const participant of participants) {
            const state = this.#stateFor(participant);
            state.exclusive = transaction;
        }
    }

    /**
     * Wait until a list of participants exits exclusive transactions.
     * 
     * Note that this method invokes a callback because otherwise exclusivity
     * could be lost in the ticks between returning and updating local state.
     * A callback means state can be updated synchronously.
     */
    async #awaitExclusivity(
        participants: Iterable<Transaction.Participant>,
        onReady: () => void,
        joining?: ParticipantState,
    ) {
        while (true) {
            let toAwait: undefined | Set<ActiveParticipantState>;

            for (const participant of participants) {
                const state = this.#stateFor(participant);
                if (state.exclusive) {
                    if (!toAwait) {
                        toAwait = new Set;
                    }
                    toAwait.add(state as ActiveParticipantState);
                }
            }

            if (!toAwait) {
                break;
            }

            if (joining?.exclusive) {
                this.#preventAwaitCycles(
                    joining as ActiveParticipantState,
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
        joining: ActiveParticipantState,
        blockedBy: Set<ActiveParticipantState>
    ) {
        const allBlocking = new Set<ParticipantState>;
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
    #findAllBlocking(toAdd: Iterable<ParticipantState>, allBlocking: Set<ParticipantState>) {
        for (const state of toAdd) {
            if (allBlocking.has(state)) {
                continue;
            }

            allBlocking.add(state);

            if (state.waitingOn) {
                const waitingOn = new Set<ParticipantState>;
                for (const transaction of state.waitingOn) {
                    for (const participant of transaction.participants) {
                        waitingOn.add(this.#stateFor(participant));
                    }
                }
                this.#findAllBlocking(waitingOn, allBlocking);
            }
        }
    }

    #assertStatus(transaction: Transaction, acceptable: Transaction.Status[], target: Transaction.Status) {
        if (acceptable.indexOf(transaction.status) === -1) {
            throw new TransactionFlowError(
                `Cannot transition transaction from ${
                    this.#formatStatus(transaction.status)
                } to ${
                    this.#formatStatus(target)
                }`
            )
        }
    }

    #formatStatus(status: Transaction.Status) {
        return `<${status}>`;
    }
}
