/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningClient } from "#behavior/system/commissioning/CommissioningClient.js";
import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { Identity, ImplementationError, NotImplementedError } from "#general";
import { ClientEndpointInitializer } from "./client/ClientEndpointInitializer.js";
import { Node } from "./Node.js";
import { ServerNode } from "./ServerNode.js";
import { ServerNodeStore } from "./storage/ServerNodeStore.js";

/**
 * A remote Matter {@link Node}.
 *
 * Client nodes may be peers (commissioned into a shared fabric) or commissionable, in which they are not usable until
 * you invoke {@link commissioned}.
 */
export class ClientNode extends Node<ClientNode.RootEndpoint> {
    constructor(options: ClientNode.Options) {
        const opts = {
            ...options,
            number: 0,
            type: ClientNode.RootEndpoint,
        };
        if (opts.id === undefined) {
            opts.id = opts.owner.env.get(ServerNodeStore).peerStores.allocateId();
        }

        super(opts);
    }

    override async initialize() {
        this.env.set(EndpointInitializer, new ClientEndpointInitializer(this));

        await super.initialize();
    }

    protected async initializeAsCommissionable() {}

    override get owner(): ServerNode {
        return super.owner as ServerNode;
    }

    protected override set owner(node: ServerNode) {
        if (!(node instanceof ServerNode)) {
            throw new ImplementationError("Client node owner must be a server node");
        }
        super.owner = node;
    }

    async commission(options: CommissioningClient.CommissioningOptions) {
        await this.act("commission", agent => agent.commissioning.commission(options));
    }

    protected createRuntime(): NetworkRuntime {
        throw new NotImplementedError();
    }

    protected override get container() {
        return this.owner?.nodes;
    }
}

export namespace ClientNode {
    export interface Options extends Node.Options<RootEndpoint> {
        owner: ServerNode;
    }

    export const RootEndpoint = Node.CommonRootEndpoint.with(CommissioningClient);

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
