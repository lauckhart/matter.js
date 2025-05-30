/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { BehaviorBacking } from "#behavior/internal/BehaviorBacking.js";
import { ClientBehaviorBacking } from "#behavior/internal/ClientBehaviorBacking.js";
import { ServerBehaviorBacking } from "#behavior/internal/ServerBehaviorBacking.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import type { ClientNode } from "#node/ClientNode.js";
import { NodeStore } from "#node/storage/NodeStore.js";
import { ServerNodeStore } from "#node/storage/ServerNodeStore.js";
import { ClientNodeStructure } from "./ClientNodeStructure.js";

export class ClientEndpointInitializer extends EndpointInitializer {
    #node: ClientNode;
    #store: NodeStore;
    #structure?: ClientNodeStructure;

    constructor(node: ClientNode) {
        super();
        this.#node = node;
        this.#store = node.env.get(ServerNodeStore).clientStores.storeForNode(node);
    }

    async eraseDescendant(endpoint: Endpoint) {
        if (endpoint === this.#node) {
            await this.#store.erase();
            return;
        }

        if (!endpoint.lifecycle.hasId) {
            return;
        }

        const store = this.#store.endpointStores.storeForEndpoint(endpoint);
        await store.erase();
    }

    async deactivateDescendant(_endpoint: Endpoint) {
        // nothing to do
    }

    get ready() {
        return this.#store.construction.ready;
    }

    static async create(node: ClientNode) {
        const instance = new ClientEndpointInitializer(node);
        await instance.ready;
        return instance;
    }

    override createBacking(endpoint: Endpoint, type: Behavior.Type): BehaviorBacking {
        if ((type as ClusterBehavior.Type).cluster === undefined) {
            return new ServerBehaviorBacking(endpoint, type, endpoint.behaviors.optionsFor(type));
        }

        if (this.#structure === undefined) {
            this.#structure = this.#node.env.get(ClientNodeStructure);
        }

        const store = this.#structure.storeFor(endpoint, type as ClusterBehavior.Type);
        return new ClientBehaviorBacking(endpoint, type, store, endpoint.behaviors.optionsFor(type));
    }
}
