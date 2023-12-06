/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PersistenceParticipant } from "./PersistenceParticipant.js";
import { Transaction } from "./Transaction.js";
import { Val } from "../managed/Val.js";
import { StorageManager } from "../../../storage/StorageManager.js";
import { SupportedStorageTypes } from "../../../storage/StringifyTools.js";
import { InternalError } from "../../../common/MatterError.js";

/**
 * A {@link PersistenceParticipant} that saves state to the Matter.js
 * {@link StorageManager} API.
 * 
 * TODO - Does *not* currently support true two-phase commit.  It would be
 * be cumbersome and probably inefficient to implement with the current Storage
 * API.  So work is in order there first.
 */
export class StorageParticipant extends PersistenceParticipant {
    #storage: StorageManager;
    #log = Array<{ contextName: string, values: Val.Struct }>();

    constructor(transaction: Transaction, storage: StorageManager, public description = "persistent storage") {
        super(transaction);
        this.#storage = storage;
    }

    protected override async doSet(key: string, value: Val) {
        if (typeof value !== "object" || Array.isArray(value)) {
            throw new InternalError("Commit of non-key/value value");
        }

        this.#log.push({ contextName: key, values: value as Val.Struct });
    }

    protected override async doRollback() {
        this.#log = new Array();
    }

    protected override async doCommit2() {
        for (const { contextName, values } of this.#log) {
            const context = this.#storage.createContext(contextName);
            for (const key in values) {
                context.set(key, values[key] as SupportedStorageTypes);
            }
        }
    }
}
