/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Participant } from "../../../../src/behavior/state/transaction/Participant.js";
import { Resource } from "../../../../src/behavior/state/transaction/Resource.js";
import { Status } from "../../../../src/behavior/state/transaction/Status.js";
import { Transaction } from "../../../../src/behavior/state/transaction/Transaction.js";
import { MaybePromise } from "../../../../src/util/Type.js";

class TestResource implements Resource {
    description = "Test";
}

class TestParticipant implements Participant {
    invoked = Array<string>();

    resource = new TestResource();

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
    participant: Participant;

    constructor(participant?: Participant) {
        super();
        this.participant = participant ?? new TestParticipant;
    }

    expectInvoked(...invoked: string[]) {
        expect((this.participant as TestParticipant).invoked).deep.equals(invoked);
    }
}

function create({ participant }: { participant?: Participant } = {}) {
    if (!participant) {
        participant = new TestParticipant;
    }
    
    const transaction = new TestTransaction();

    transaction.addParticipants(participant);

    return transaction;
}

describe("Transaction", () => {
    it("handles commit and rollback on shared", async () => {
        const transaction = create();

        await transaction.commit();
        await transaction.rollback();

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
