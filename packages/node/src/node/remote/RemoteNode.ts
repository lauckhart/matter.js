/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#behavior/context/ActionContext.js";
import { NetworkBehavior } from "#behavior/system/network/NetworkBehavior.js";
import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { MutableEndpoint } from "#endpoint/type/MutableEndpoint.js";
import { Node } from "#node/Node.js";
import type { ClientStructure } from "#node/client/ClientStructure.js";
import { ClientStructureEvents } from "#node/client/ClientStructureEvents.js";
import { ChangeNotificationService } from "#node/integration/ChangeNotificationService.js";
import { ProtocolService } from "#node/integration/ProtocolService.js";
import { IdentityService } from "#node/server/IdentityService.js";
import { Abort, asyncNew, Construction, Identity, Observable, Seconds } from "@matter/general";
import { Interactable } from "@matter/protocol";
import { RemoteEndpointInitializer } from "./RemoteEndpointInitializer.js";
import { RemoteNetworkRuntime } from "./RemoteNetworkRuntime.js";
import { RemotePeers } from "./RemotePeers.js";
import { RemoteStoreFactory } from "./RemoteStoreFactory.js";
import { WebSocketConnection } from "./WebSocketConnection.js";

/**
 * Root of the remote client API.
 *
 * Connects to a remote ServerNode over WebSocket and mirrors its endpoint/behavior structure.  Reading state returns
 * cached values maintained via a subscription; writes and command invocations go over the wire.
 */
export class RemoteNode extends Node<RemoteNode.RootEndpoint> {
    #connection: WebSocketConnection;
    #storeFactory: ClientStructure.StoreFactory;
    #peers: RemotePeers;
    #initializer?: RemoteEndpointInitializer;

    #subscribeOptions: false | RemoteNode.SubscribeOptions | undefined;

    constructor(options: RemoteNode.Options) {
        const config = {
            id: options.id ?? "remote",
            number: 0,
            type: MutableEndpoint(RemoteNode.RootEndpoint),
            environment: options.environment,
        };

        super(config);

        this.#subscribeOptions = options.subscribe;
        this.#connection = new WebSocketConnection(options.url, this.env);
        this.#storeFactory = RemoteStoreFactory(this.#connection);
        this.#peers = new RemotePeers(this, this.#storeFactory);

        // Set up environment services
        this.env.set(Node, this);
        this.env.set(WebSocketConnection, this.#connection);
        this.env.set(ClientStructureEvents, new ClientStructureEvents());

        // Identity service for endpoint number validation
        this.env.set(IdentityService, new IdentityService(this));

        // Protocol service for behavior backing registration
        this.env.set(ProtocolService, new ProtocolService(this));

        // No-op change notification — remote nodes don't broadcast state changes locally
        this.env.set(ChangeNotificationService, {
            change: new Observable(),
            broadcastUpdate() {},
            broadcastEvent() {},
            close() {},
        } as unknown as ChangeNotificationService);

        // Set up endpoint initializer
        this.#initializer = new RemoteEndpointInitializer(this, this.#storeFactory);
        this.env.set(EndpointInitializer, this.#initializer);

        this.construction.start();
    }

    /**
     * Connect to a remote ServerNode.
     *
     * If no abort signal is provided, a default 10s timeout is used.
     */
    static async connect(options: RemoteNode.Options): Promise<RemoteNode> {
        using abort = Abort.subtask(options.abort, options.abort ? undefined : Seconds(10));

        const remote = await asyncNew(RemoteNode, options);
        await remote.start(abort.signal);
        return remote;
    }

    /**
     * The WebSocket connection.
     */
    get connection() {
        return this.#connection;
    }

    /**
     * Peers of the remote ServerNode.
     */
    get peers() {
        return this.#peers;
    }

    /**
     * The structure manager.
     */
    get structure() {
        return this.#initializer!.structure;
    }

    /**
     * Controls the state subscription.
     *
     * - `undefined` (default): Subscribe and sync all state
     * - `false`: No subscription — connect without syncing state
     * - Object with filter fields: Subscribe with filters
     */
    get subscribeOptions() {
        return this.#subscribeOptions;
    }

    protected override assertConstructable() {}

    protected createRuntime(startupAbort?: AbortSignal): NetworkRuntime {
        return new RemoteNetworkRuntime(this, startupAbort);
    }

    get interaction(): Interactable<ActionContext> {
        throw new Error("RemoteNode does not support direct interaction");
    }

    async prepareRuntimeShutdown() {
        // Nothing to do
    }

    override async [Construction.destruct]() {
        await this.#peers.close();
        await super[Construction.destruct]();
    }
}

export namespace RemoteNode {
    export interface Options {
        /**
         * WebSocket URL to connect to.
         */
        url: string;

        /**
         * Optional node ID.
         */
        id?: string;

        /**
         * Optional environment.
         */
        environment?: import("@matter/general").Environment;

        /**
         * Optional abort signal.  If not provided, a default 10s timeout is used.
         */
        abort?: AbortSignal;

        /**
         * Controls the state subscription.
         *
         * - `undefined` (default): Subscribe and sync all state
         * - `false`: No subscription — connect without syncing state
         * - Object with filter fields: Subscribe with filters
         */
        subscribe?: false | SubscribeOptions;
    }

    export interface SubscribeOptions {
        nodes?: string[];
        clusters?: string[];
    }

    export const RootEndpoint = MutableEndpoint({
        ...Node.CommonRootEndpoint,
        behaviors: {
            ...Node.CommonRootEndpoint.behaviors,
            network: NetworkBehavior,
        },
    });

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
