/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MaybePromise } from "../../../util/Type.js";
import type { Resource } from "./Resource.js";
import type { Transaction } from "./Transaction.js";

/**
 * Components with support for transactionality implement this interface.
 */
export interface Participant {
    /**
     * The resource this participant is mutating.
     */
    readonly resource: Resource;

    /**
     * Commit phase one.
     */
    commit1(): MaybePromise<void>;

    /**
     * Commit phase two.
     */
    commit2(): MaybePromise<void>;

    /**
     * Drop isolated writes and revert to original canonical source.
     */
    rollback(): MaybePromise<void>;
}

export namespace Participant {
    /**
     * Components may implement this interface to join transactions with a
     * referenced participant.
     */
    export interface Indirect {
        /**
         * The participant(s) the transaction will use in
         * {@link Transaction.join}.
         */
        transactionParticipant: Joining;
    }

    /**
     * Participant(s) joining a transaction.
     */
    export type Joining =
        | Participant
        | Indirect
        | Joining[];

    /**
     * Dereference and flatten {@link Joining} into {@link Participant[]}.
     */
    export function dereference(participant: Joining): Participant[] {
        const participants = new Set<Participant>;

        function collect(participant: Joining) {
            if (Array.isArray(participant)) {
                for (const p of participant) {
                    collect(p);
                }
                return;
            }

            const referenced = (participant as Indirect).transactionParticipant;
            if (referenced) {
                return collect(referenced);
            }

            if (!participants.has(participant as Participant)) {
                participants.add(participant as Participant);
            }
        }

        collect(participant);

        return [ ...participants ];
    }
}
