/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../common/MatterError.js";
import { Part } from "../../../endpoint/Part.js";
import type { NodeServer } from "../NodeServer.js";
import { ServerPartStore } from "./ServerPartStore.js";
import { StorageContext } from "../../../storage/StorageContext.js";

/**
 * Manages all {@link ServerPartStore}s for a {@link NodeServer}.
 */
export class ServerPartStores {
    #storage: StorageContext;
    #stores = {} as Record<string, ServerPartStore>;
    #allocatedNumbers = new Set<number>;

    constructor(storage: StorageContext) {
        this.#storage = storage;
    }

    async loadFromStorage(partId: string) {
        const partStore = new ServerPartStore(
            partId,
            this.#storage,
            true,
        );
        this.#stores[partId] = partStore;

        return partStore;
    }

    get storage() {
        return this.#storage;
    }

    get allocatedNumbers() {
        return this.#allocatedNumbers;
    }

    /**
     * Obtain the store for a single {@link Part}.
     * 
     * These stores are cached internally by ID.
     */
    storeForPart(part: Part): ServerPartStore {
        if (!part.lifecycle.hasId) {
            throw new ImplementationError("Cannot access part storage because part has no assigned ID");
        }
        let store = this.#stores[part.id];
        if (store === undefined) {
            store = this.#stores[part.id] = new ServerPartStore(
                part.id,
                this.#storage,
                true
            );
        }
        return store;
    }
}
