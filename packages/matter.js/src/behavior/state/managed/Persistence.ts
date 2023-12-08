/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageContext } from "../../../storage/StorageContext.js";
import { SupportedStorageTypes } from "../../../storage/StringifyTools.js";
import { MaybePromise } from "../../../util/Type.js";
import { Transaction } from "../transaction/Transaction.js";
import { Val } from "./Val.js";

/**
 * A very basic API for persistence of managed state.
 */
export interface Persistence {
    /**
     * Retrieve a stored struct.
     * 
     * @param namespace the name of the collection
     * @returns the collection values
     */
    get(path: Persistence.Path): Promise<Val.Struct>;

    /**
     * Stage values for persistence.  Intended for use during commit phase one
     * or earlier.
     * 
     * This is a patch operation.  Only modifies struct keys present.  Keys
     * with undefined values are deleted.
     * 
     * Values are journaled here then persisted permanently during commit
     * phase two.
     * 
     * @param transaction the transaction to join
     * @param path the name of the collection
     * @param values values to set in the collection
     */
    set(transaction: Transaction, path: Persistence.Path, values: Val.Struct): Promise<void>;

    /**
     * Remove a path.
     * 
     * @param transaction the transaction to join
     * @param path the path to delete
     */
    delete(transaction: Transaction, path: Persistence.Path): Promise<void>;
}

export namespace Persistence {
    /**
     * Persistence is a hierarchical key/value store.  The path addresses a
     * single collection.
     */
    export type Path = string | string[];

    /**
     * Adapt the persistence API to a {@link StorageContext}.
     */
    export function forStorage(storage: StorageContext): Persistence {
        return new PersistentStorage(storage);
    }
}

export interface Operation {
    path: Persistence.Path;
    values?: Val.Struct;
}

class PersistentStorage implements Persistence, Transaction.Participant {
    #storage: StorageContext;
    #journal: undefined | Operation[];

    get description() {
        return "PersistentStorage";
    }

    constructor(storage: StorageContext) {
        this.#storage = storage;
    }

    async get(path: Persistence.Path) {
        const context = this.#contextFor(path);

        const result = {} as Val.Struct;
        for (const key of context.keys()) {
            result[key] = context.get(key);
        }

        return result;
    }

    async set(transaction: Transaction, path: Persistence.Path, values: Val.Struct) {
        this.#mutate(transaction, { path, values });
    }

    async delete(transaction: Transaction, path: Persistence.Path) {
        this.#mutate(transaction, { path });
    }

    commit1(): MaybePromise<void> {
        // Persistence serves phase one commit; values are added directly to
        // the journal so nothing necessary here
    }

    commit2(): MaybePromise<void> {
        // Commit the journal.  For real two-phase commit this would be writing
        // a marker to the journal indicating successful commit, then it we'd
        // consolidate into the primary store lazily.  For now we just let
        // StorageContext do it's thing
        if (!this.#journal) {
            return;
        }

        for (const { path, values } of this.#journal) {
            const context = this.#contextFor(path);
            if (values) {
                // Patch operation
                for (const key in values) {
                    const value = values[key];
                    if (value === undefined) {
                        context.delete(key);
                    } else {
                        context.set(key, values[key] as SupportedStorageTypes);
                    }
                }
            } else {
                // Delete operation
                context.clear();
            }
        }

        this.#journal = undefined;
    }

    rollback(): MaybePromise<void> {
        // For real two-phase commit we'd truncate the journal on disk
        this.#journal = [];
    }

    #mutate(transaction: Transaction, operation: Operation) {
        transaction.join(this);
        transaction.beginSync();
        if (!this.#journal) {
            this.#journal = [ operation ];
        } else {
            this.#journal.push(operation);
        }
    }

    #contextFor(path: Persistence.Path) {
        let context = this.#storage;
        
        if (typeof path === "string") {
            path = path.split(".");
        } else {
            path = path.flatMap(segment => segment.split("."));
        }

        for (const segment of path) {
            context = context.createContext(segment);
        }

        return context;
    }
}
