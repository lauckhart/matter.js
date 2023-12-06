/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorageContext } from "../../../storage/StorageContext.js";
import { StorageParticipant } from "../transaction/StorageParticipant.js";
import { Transaction } from "../transaction/Transaction.js";
import { Val } from "./Val.js";

/**
 * A very basic API for persisting managed state.
 */
export interface Persistence {
    open(name: string): Persistence.Context;
}

export namespace Persistence {
    export interface Context {
        /**
         * Retrieve stored values.
         */
        get(): Promise<Record<string, Val>>;

        /**
         * Save stored values as part of a transaction.
         */
        set(transaction: Transaction, values: Promise<Record<string, Val>>): void;
    }

    export function forStorage(context: StorageContext): Persistence {
        return new PersistentStorage;
    }
}

class PersistentStorage implements Persistence {
    #participant?: StorageParticipant;

    open(name) {
        return {
            get: async () => {
                
            },

            set: async () => {

            }
        }
    }
}

function openStorage(name: string, storage: StorageContext): Persistence.Context {
    const context =  storage.createContext(name);
    return {
        async get() {
            const values = {} as Val.Struct;
            for (const key of context.keys()) {
                values[key] = context.get(key);
            }
            return values;
        },

        async set() {

        },
    }
}
