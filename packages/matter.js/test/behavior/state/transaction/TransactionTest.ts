/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Transaction } from "../../../../src/behavior/state/transaction/Transaction.js";
import { TransactionCoordinator } from "../../../../src/behavior/state/transaction/TransactionCoordinator.js";
import { MaybePromise } from "../../../../src/util/Type.js";

const Status = Transaction.Status;

class TestParticipant implements Transaction.Participant {
    description = "test";

    invoked = Array<string>();

    commit1(): MaybePromise<void> {
        this.invoked.push("commit1");
    }

    commit2(): MaybePromise<void> {
        this.invoked.push("commit2");
    }

    rollback(): MaybePromise<void> {
        this.invoked.push("rollback");
    }
}

class TestTransaction extends Transaction {
    coordinator: TransactionCoordinator;
    participant: Transaction.Participant;

    constructor(coordinator?: TransactionCoordinator, participant?: Transaction.Participant) {
        super(coordinator ?? (coordinator = new TransactionCoordinator));
        this.coordinator = coordinator;
        this.participant = participant ?? new TestParticipant;
    }

    expectInvoked(...invoked: string[]) {
        expect((this.participant as TestParticipant).invoked).deep.equals(invoked);
    }
}

function create(
    { coordinator, participant }:
        { coordinator?: TransactionCoordinator, participant?: Transaction.Participant }
        = {}
) {
    if (!coordinator) {
        coordinator = new TransactionCoordinator;
    }
    if (!participant) {
        participant = new TestParticipant;
    }
    
    const transaction = new TestTransaction(coordinator);

    transaction.join(participant);
console.log([ ...transaction.participants ]);

    return transaction;
}

describe("Transaction", () => {
    it("handles commit and rollback on shared", async () => {
        const transaction = create();
console.log([ ...transaction.participants ]);

        transaction.commit();
        transaction.join(transaction.participant);
        transaction.rollback();

        transaction.expectInvoked("rollback", "rollback");
    })

    it("flows through commit correctly", async () => {
        const transaction = create();

        expect(transaction.status).equals(Status.Shared);
        await transaction.begin();
        expect(transaction.status).equals(Status.Exclusive);
        await transaction.commit();
        expect(transaction.status).equals(Status.Shared);

        transaction.expectInvoked("commit1", "commit2");
    })

    it("flows through rollback correctly", async () => {
        const transaction = create();

        expect(transaction.status).equals(Status.Shared);
        await transaction.begin();
        expect(transaction.status).equals(Status.Exclusive);
        await transaction.rollback();
        expect(transaction.status).equals(Status.Shared);

        transaction.expectInvoked("rollback");
    })
});
