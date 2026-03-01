/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#behavior/context/ActionContext.js";
import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { MutableEndpoint } from "#endpoint/type/MutableEndpoint.js";
import { Identity, Observable } from "@matter/general";
import { Node } from "#node/Node.js";
import type { ClientStructure } from "#node/client/ClientStructure.js";
import { ClientStructureEvents } from "#node/client/ClientStructureEvents.js";
import { ChangeNotificationService } from "#node/integration/ChangeNotificationService.js";
import { IdentityService } from "#node/server/IdentityService.js";
import { Interactable } from "@matter/protocol";
import { RemoteEndpointInitializer } from "./RemoteEndpointInitializer.js";
import { RemoteNetworkRuntime } from "./RemoteNetworkRuntime.js";
import type { RemoteNode } from "./RemoteNode.js";

/**
 * Represents a peer of the remote ServerNode.
 *
 * Each RemotePeerNode maps 1:1 to a ClientNode on the remote server.  Its structure is maintained by the parent
 * {@link RemoteNode}'s subscription.
 */
export class RemotePeerNode extends Node<RemotePeerNode.RootEndpoint> {
    #remoteNodeId: string;
    #server: RemoteNode;

    constructor(options: RemotePeerNode.Options) {
        const config = {
            id: options.remoteNodeId,
            type: MutableEndpoint(RemotePeerNode.RootEndpoint),
            environment: options.owner.env,
        };

        super(config);

        this.#remoteNodeId = options.remoteNodeId;
        this.#server = options.owner;

        this.env.set(Node, this);
        this.env.set(IdentityService, new IdentityService(this));
        this.env.set(ClientStructureEvents, new ClientStructureEvents());
        this.env.set(ChangeNotificationService, {
            change: new Observable(),
            broadcastUpdate() {},
            broadcastEvent() {},
            close() {},
        } as unknown as ChangeNotificationService);

        this.construction.start();
    }

    /**
     * The ID of this peer on the remote ServerNode.
     */
    get remoteNodeId() {
        return this.#remoteNodeId;
    }

    /**
     * The owning RemoteNode.
     */
    get server() {
        return this.#server;
    }

    /**
     * Install the endpoint initializer for this remote peer.
     */
    installInitializer(storeFactory: ClientStructure.StoreFactory) {
        const initializer = new RemoteEndpointInitializer(this, storeFactory);
        this.env.set(EndpointInitializer, initializer);
        return initializer;
    }

    protected override assertConstructable() {}

    protected createRuntime(): NetworkRuntime {
        // RemotePeerNode doesn't have its own runtime — the RemoteNode's runtime manages its subscription
        return new RemoteNetworkRuntime(this);
    }

    get interaction(): Interactable<ActionContext> {
        throw new Error("RemotePeerNode does not support direct interaction");
    }

    async prepareRuntimeShutdown() {
        // Nothing to do
    }
}

export namespace RemotePeerNode {
    export interface Options {
        remoteNodeId: string;
        owner: RemoteNode;
    }

    export const RootEndpoint = MutableEndpoint({
        ...Node.CommonRootEndpoint,
    });

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
