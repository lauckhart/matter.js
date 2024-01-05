/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import type { Part } from "../../../endpoint/Part.js";
import type { NodeServer } from "../NodeServer.js";
import { ServerPartStore } from "./ServerPartStore.js";
import type { StorageContext } from "../../../storage/StorageContext.js";
import { AsyncConstruction } from "../../../util/AsyncConstruction.js";

const NEXT_NUMBER_KEY = "__nextNumber__";
const KNOWN_KEY = "__known__";

/**
 * Manages all {@link ServerPartStore}s for a {@link NodeServer}.
 * 
 * We eagerly load all available part data from disk because this allows us to keep {@link Part} initialization more
 * synchronous.  We can initialize most behaviors synchronously if their state is already in memory.
 * 
 * TODO - cleanup of storage for permanently removed endpoints
 */
export class ServerPartStores {
    #storage: StorageContext;
    #stores = {} as Record<string, ServerPartStore>;
    #allocatedNumbers = new Set<number>;
    #construction: AsyncConstruction<ServerPartStores>;
    #nextNumber: number;
    #numbersPersisted?: Promise<void>;
    #numbersToPersist?: Record<string, number>;

    // TODO - this is a temporary kludge, don't think it's possible right now to query for sub-contexts?  Instead we
    // maintain this persistent list of all parts
    #knownParts = new Set<string>();

    get construction() {
        return this.#construction;
    }

    constructor(storage: StorageContext, nextNumber: number) {
        this.#storage = storage;

        // Load next number with excessive validation for the off-chance it somehow gets corrupted
        if (typeof nextNumber !== "number") {
            nextNumber = 1;
        }
        this.#nextNumber = storage.get(NEXT_NUMBER_KEY, nextNumber) % 0xffff;
        if (!this.#nextNumber) {
            this.#nextNumber = 1;
        }

        this.#construction = AsyncConstruction(
            this,
            async () => {
                this.#knownParts = new Set(storage.get(KNOWN_KEY, Array<string>()));

                for (const partId in this.#knownParts) {
                    await this.#loadPartStore(partId);
                }
            }
        );
    }

    async [Symbol.asyncDispose]() {
        // We can't dispose until number persistence completes
        if (this.#numbersPersisted) {
            await this.#numbersPersisted;
        }
    }

    async #loadPartStore(partId: string) {
        const partStore = new ServerPartStore(
            partId,
            this.#storage,
            true,
        );
        this.#stores[partId] = partStore;
    }

    get storage() {
        return this.#storage;
    }

    /**
     * Allocate a new endpoint number.
     * 
     * We must persist the assigned number and next endpoint number.  We are fairly resilient to the small chance that
     * persistence fails so we persist lazily and return synchronously.
     */
    assignNumber(part: Part) {
        const startNumber = this.#nextNumber;
        
        while (this.#nextNumber < 2 || this.#allocatedNumbers.has(this.#nextNumber)) {
            this.#nextNumber = (this.#nextNumber + 1) % 0xffff;
            if (this.#nextNumber === startNumber) {
                throw new ImplementationError("Cannot add additional parts because part numbers are exhausted");
            }
        }

        const number = this.#nextNumber++;
        part.number = number;

        this.#allocatedNumbers.add(number);

        this.#persistNumber(part);
    }

    /**
     * Obtain the store for a single {@link Part}.
     * 
     * These stores are cached internally by ID.
     * 
     * TODO - when StorageContext becomes async we can keep this synchronous if we add "StorageContext.subcontexts" or
     * somesuch
     */
    storeForPart(part: Part): ServerPartStore {
        if (!part.lifecycle.hasId) {
            throw new ImplementationError("Cannot access part storage because part has no assigned ID");
        }
        return this.#storeForPartId(part.id);
    }

    #storeForPartId(partId: string) {
        let store = this.#stores[partId];
        if (store === undefined) {
            store = this.#stores[partId] = new ServerPartStore(
                partId,
                this.#storage,
                true
            );

            if (!this.#knownParts.has(partId)) {
                this.#knownParts.add(partId);
                this.#storage.set(KNOWN_KEY, [ ...this.#knownParts ]);
            }
        }

        return store;
    }

    /**
     * Lazily persist a newly allocated number and the next number.
     */
    #persistNumber(part: Part) {
        // If there's already a set of numbers to persist there will be an outstanding promise that will do the work
        // for us
        if (this.#numbersToPersist) {
            this.#numbersToPersist[part.id] = part.number;
            return;
        }

        const numberPersister = async () => {
            const numbersToPersist = this.#numbersToPersist;
            this.#numbersToPersist = undefined;
            for (const partId in numbersToPersist) {
                await this.#storeForPartId(partId).setNumber(numbersToPersist[partId]);
            }
            this.#storage.set(NEXT_NUMBER_KEY, this.#nextNumber);
        }

        this.#numbersToPersist = { [part.id]: part.number };

        // There is a very small chance that there is an outstanding worker that is persisting numbers but hasn't yet
        // completed.  If this is the case then wait our turn.  Otherwise there's an even smaller chance that
        // this.#nextNumber gets persisted in the wrong order
        if (this.#numbersPersisted) {
            this.#numbersPersisted = this.#numbersPersisted.then(numberPersister);
        } else {
            this.#numbersPersisted = numberPersister();
        }
    }
}
