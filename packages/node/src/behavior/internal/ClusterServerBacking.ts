/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { EndpointServer } from "#endpoint/server/EndpointServer.js";
import { MaybePromise } from "#general";
import { ClusterServer } from "#protocol";
import { Behavior } from "../Behavior.js";
import type { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ServerBehaviorBacking } from "./ServerBehaviorBacking.js";

/**
 * Backing for cluster behaviors on servers.
 *
 * TODO - refactor element server management after we remove the old API
 */
export class ClusterServerBacking extends ServerBehaviorBacking {
    #server: EndpointServer;
    #clusterServer?: ClusterServer;

    get clusterServer() {
        return this.#clusterServer;
    }

    get runtime() {
        return this.#server.endpoint.env.runtime;
    }

    get server() {
        return this.#server;
    }

    override get type() {
        return super.type as ClusterBehavior.Type;
    }

    constructor(server: EndpointServer, type: ClusterBehavior.Type) {
        super(server.endpoint, type);
        this.#server = server;
    }

    protected override invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        const { id, name, attributes, commands, events } = this.type.cluster;

        if (!options) {
            options = {};
        }

        const result = super.invokeInitializer(behavior, options);

        if (MaybePromise.is(result)) {
            return result.then(createClusterServer);
        }

        createClusterServer();
    }

    protected override get datasourceOptions() {
        return {
            ...super.datasourceOptions,
            cluster: this.type.cluster.id,
        };
    }
}
