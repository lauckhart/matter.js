/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageContext } from "../../../storage/StorageContext.js";
import { SupportedStorageTypes } from "../../../storage/StringifyTools.js";
import { MaybePromise } from "../../../util/Type.js";
import { Participant } from "../transaction/Participant.js";
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
        return PersistentStorage(storage);
    }
}

export interface Operation {
    path: Persistence.Path;
    values?: Val.Struct;
}

interface StorageParticipant extends Participant {
    journal: Operation[];
}

function PersistentStorage(storage: StorageContext): Persistence {
    return {
        async get(path: Persistence.Path) {
            const context = contextFor(storage, path);

            const result = {} as Val.Struct;
            for (const key of context.keys()) {
                result[key] = context.get(key);
            }

            return result;
        },

        async set(transaction: Transaction, path: Persistence.Path, values: Val.Struct) {
            participantFor(transaction, storage).journal.push({ path, values });
        },

        async delete(transaction: Transaction, path: Persistence.Path) {
            participantFor(transaction, storage).journal.push({ path });
        },
    }
}

function contextFor(storage: StorageContext, path: Persistence.Path) {
    let context = storage;
    
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

/**
 * We create a single participant per storage/transaction pair.  This function
 * handles setup and retrieval of this participant.
 */
function participantFor(transaction: Transaction, storage: StorageContext) {
    let participant = transaction.getParticipant(storage) as StorageParticipant;
    if (participant) {
        return participant as StorageParticipant;
    }

    participant = {
        description: "Storage",

        role: storage,

        journal: Array<Operation>(),

        commit1(): MaybePromise<void> {
            // Persistence serves phase one commit; values are added directly to
            // the journal so nothing necessary here
        },
    
        commit2(): MaybePromise<void> {
            // Commit the journal.  For real two-phase commit this would be writing
            // a marker to the journal indicating successful commit, then it we'd
            // consolidate into the primary store lazily.  For now we just let
            // StorageContext do it's thing
            for (const { path, values } of this.journal) {
                const context = contextFor(storage, path);
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
    
            this.journal = [];
        },
    
        rollback(): MaybePromise<void> {
            // For real two-phase commit we'd truncate the journal on disk
            this.journal = [];
        }
    }
    
    transaction.addParticipants(participant);

    return participant;
}
