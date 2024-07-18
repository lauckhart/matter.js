/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningBehavior } from "../behavior/system/commissioning/CommissioningBehavior.js";
import { NetworkServer } from "../behavior/system/network/NetworkServer.js";
import { ServerNetworkRuntime } from "../behavior/system/network/ServerNetworkRuntime.js";
import { ProductDescriptionServer } from "../behavior/system/product-description/ProductDescriptionServer.js";
import { SessionsBehavior } from "../behavior/system/sessions/SessionsBehavior.js";
import { MatterFlowError } from "../common/MatterError.js";
import { Endpoint } from "../endpoint/Endpoint.js";
import { EndpointServer } from "../endpoint/EndpointServer.js";
import { RootEndpoint as BaseRootEndpoint } from "../endpoint/definitions/system/RootEndpoint.js";
import { EndpointInitializer } from "../endpoint/properties/EndpointInitializer.js";
import { DiagnosticSource } from "../log/DiagnosticSource.js";
import { asyncNew } from "../util/Construction.js";
import { Identity } from "../util/Type.js";
import { Node } from "./Node.js";
import { IdentityService } from "./server/IdentityService.js";
import { ServerEndpointInitializer } from "./server/ServerEndpointInitializer.js";
import { ServerStore } from "./server/storage/ServerStore.js";

/**
 * A server-side Matter {@link Node}.
 *
 * The Matter specification often refers to server-side nodes as "devices".
 */
export class ServerNode<T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint> extends Node<T> {
    #runtime?: ServerNetworkRuntime;
    #resetting = false;

    /**
     * Construct a new ServerNode.
     *
     * You can use {@link create} to construct the node and wait for it to initialize fully.
     *
     * @param type the variation of {@link RootEndpoint} that defines the root endpoint's behavior
     * @param options root endpoint options and the node's environment
     */
    constructor(type?: T, options?: Node.Options<T>);

    /**
     * Construct a new ServerNode.
     *
     * You can use {@link create} to construct the node and wait for it to initialize fully.
     *
     * @param config a {@link Endpoint.Configuration} for the root endpoint
     */
    constructor(config: Partial<Node.Configuration<T>>);

    constructor(definition?: T | Node.Configuration<T>, options?: Node.Options<T>) {
        super(Node.nodeConfigFor(ServerNode.RootEndpoint as T, definition, options));

        DiagnosticSource.add(this);
    }

    /**
     * Create a new ServerNode.
     *
     * @param type the variation of {@link RootEndpoint} that defines the root endpoint's behavior
     * @param options root endpoint configuration and, optionally, the node's environment
     */
    static async create<
        This extends typeof ServerNode<any>,
        T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint,
    >(this: This, type?: T, options?: Node.Options<T>): Promise<ServerNode<T>>;

    /**
     * Create a new ServerNode.
     *
     * @param config root endpoint configuration and, optionally, the node's {@link Environment}
     */
    static async create<
        This extends typeof ServerNode<any>,
        T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint,
    >(this: This, config: Partial<Node.Configuration<T>>): Promise<ServerNode<T>>;

    static async create<
        This extends typeof ServerNode<any>,
        T extends ServerNode.RootEndpoint = ServerNode.RootEndpoint,
    >(this: This, definition?: T | Node.Configuration<T>, options?: Node.Options<T>) {
        return await asyncNew(this, definition, options);
    }

    /**
     * Bring the server online.
     *
     * If you add the server as a worker to {@link Environment.runtime} this happens automatically.
     */
    async start() {
        await this.construction.ready;

        if (this.#runtime) {
            throw new MatterFlowError("Server is already started");
        }
        if (this.#resetting) {
            throw new MatterFlowError("Server cannot start because it is performing factory reset");
        }

        this.#runtime = new ServerNetworkRuntime(this);

        await this.#runtime.construction.ready;
    }

    /**
     * Take the server offline but leave state and structure intact.
     *
     * This happens automatically on close.
     */
    cancel() {
        return this.#runtime?.close();
    }

    override close() {
        const close = async () => {
            await this.cancel();

            await super.close();

            if (this.env.has(ServerStore)) {
                const store = this.env.get(ServerStore);
                await store.close();
                this.env.delete(ServerStore, store);
            }

            DiagnosticSource.delete(this);
        };

        return this.construction.close(close);
    }

    /**
     * Perform a factory reset of the node.
     */
    async factoryReset() {
        await this.construction;

        // Go offline before performing reset
        const isOnline = this.lifecycle.isOnline;
        if (isOnline) {
            this.cancel();
        }

        this.#mutex.run(async () => {
            // Inform user
            this.statusUpdate("resetting to factory defaults");

            // Destroy the PartServer hierarchy
            await EndpointServer.forEndpoint(this)[Symbol.asyncDispose]();

            // Reset in-memory state
            await this.reset();

            // Reset persistent state
            await this.resetStorage();

            // Reset reverts node to inactive state; now reinitialize
            this.construction.start();

            // Go back online if we were online at time of reset
            if (isOnline) {
                this.start();
            }
        });

        await this.#mutex;
    }

    async advertiseNow() {
        await this.act(agent => agent.get(NetworkServer).advertiseNow());
    }

    protected override async initialize() {
        // Load the environment with node-specific services
        const serverStore = await ServerStore.create(this.env, this.id);

        this.env.set(ServerStore, serverStore);

        this.env.set(EndpointInitializer, new ServerEndpointInitializer(this.env));

        this.env.set(IdentityService, new IdentityService(this));

        return super.initialize();
    }

    /**
     * By default on factory reset we erase all stored data.
     *
     * If this is inappropriate for your application you may override to alter the behavior.   Matter requires that all
     * "security- and privacy-related data and key material" is removed on factory reset.
     *
     * @see {@link MatterSpecification.v12.Core} § 13.4
     */
    protected async resetStorage() {
        await this.env.get(ServerStore).erase();
    }

    /**
     * ServerNode has no preconditions for construction.
     */
    protected override assertConstructable() {}
}

export namespace ServerNode {
    export const RootEndpoint = BaseRootEndpoint.with(
        CommissioningBehavior,
        NetworkServer,
        ProductDescriptionServer,
        SessionsBehavior,
    );

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
