/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import { ClusterBehavior } from "#behavior/cluster/ClusterBehavior.js";
import { BehaviorBacking } from "#behavior/internal/BehaviorBacking.js";
import { ServerBehaviorBacking } from "#behavior/internal/ServerBehaviorBacking.js";
import { Datasource } from "#behavior/state/managed/Datasource.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { ClientStructure } from "#node/client/ClientStructure.js";
import { PeerBehavior } from "#node/client/PeerBehavior.js";
import type { Node } from "#node/Node.js";
import { camelize, GeneratedClass } from "@matter/general";
import { CommandModel } from "@matter/model";
import { RemoteBehaviorBacking } from "./RemoteBehaviorBacking.js";
import { RemoteCommandMethod } from "./RemoteCommandMethod.js";

/**
 * Endpoint initializer for remote nodes accessed via WebSocket.
 *
 * Cluster behaviors use {@link RemoteBehaviorBacking} with {@link RemoteCommandMethod}.  Non-cluster behaviors use
 * {@link ServerBehaviorBacking} with an in-memory store.
 */
export class RemoteEndpointInitializer extends EndpointInitializer {
    #node: Node;
    #storeFactory: ClientStructure.StoreFactory;
    #structure?: ClientStructure;
    #wiredBehaviors = new Set<string>();

    constructor(node: Node, storeFactory: ClientStructure.StoreFactory) {
        super();
        this.#node = node;
        this.#storeFactory = storeFactory;
    }

    async eraseDescendant(_endpoint: Endpoint) {
        // Remote endpoints have no persistent storage to erase
    }

    async deactivateDescendant(_endpoint: Endpoint) {
        // Nothing to do
    }

    override createBacking(endpoint: Endpoint, type: Behavior.Type): BehaviorBacking {
        // Non-cluster behaviors that were dynamically wired for remote access get RemoteBehaviorBacking
        // with the structure's store so state reads/writes flow over the wire
        if ((type as ClusterBehavior.Type).cluster === undefined) {
            if (this.#wiredBehaviors.has(type.id)) {
                const store = this.structure.storeForRemoteBehavior(endpoint, type.id);
                return new RemoteBehaviorBacking(endpoint, type, store, endpoint.behaviors.optionsFor(type));
            }

            const store: Datasource.Store = { initialValues: undefined, set: async () => {} };
            return new ServerBehaviorBacking(endpoint, type, store, endpoint.behaviors.optionsFor(type));
        }

        // Cluster behaviors are instrumented for remote access
        const peerType = PeerBehavior({
            kind: "known",
            behavior: type as ClusterBehavior.Type,
            commandFactory: RemoteCommandMethod,
        });
        const store = this.structure.storeForRemote(endpoint, peerType);
        return new RemoteBehaviorBacking(endpoint, peerType, store, endpoint.behaviors.optionsFor(peerType));
    }

    override tryWireRemoteBehavior(endpoint: Endpoint, type: Behavior.Type): boolean {
        // Find command methods in the schema.  Only behaviors with @method/@command decorated methods
        // have CommandModel children in their schema
        const schema = type.schema;
        const commands: Record<string, Function> = {};
        if (schema && "children" in schema) {
            for (const child of schema.children) {
                if (child instanceof CommandModel) {
                    const name = camelize(child.name, false);
                    commands[name] = RemoteCommandMethod(name);
                }
            }
        }

        if (!Object.keys(commands).length) {
            return false;
        }

        // Create a derived behavior type with remote command methods
        const RemoteType = GeneratedClass({
            name: `Remote$${type.id}`,
            base: type as new (...args: any[]) => Behavior,
        }) as unknown as Behavior.Type;

        // Install remote command methods on the prototype
        for (const [name, method] of Object.entries(commands)) {
            Object.defineProperty(RemoteType.prototype, name, {
                value: method,
                writable: true,
                configurable: true,
            });
        }

        // Track and install the behavior on the endpoint
        this.#wiredBehaviors.add(type.id);
        endpoint.behaviors.inject(RemoteType);
        return true;
    }

    get structure() {
        if (this.#structure === undefined) {
            this.#structure = new ClientStructure(this.#node, this.#storeFactory, {
                commandFactory: RemoteCommandMethod,
            });
        }
        return this.#structure;
    }
}
