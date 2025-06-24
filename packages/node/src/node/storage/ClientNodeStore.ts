/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointStore } from "#endpoint/storage/EndpointStore.js";
import { MaybePromise, StorageContext } from "#general";
import { NodeStore } from "./NodeStore.js";

export class ClientNodeStore extends NodeStore {
    #storage?: StorageContext;

    override erase() {
        return this.#storage?.clearAll();
    }

    override storeForEndpoint(endpoint: Endpoint): EndpointStore {
        throw new Error("Method not implemented.");
    }

    protected override load(): MaybePromise<void> {
        throw new Error("Method not implemented.");
    }
}
