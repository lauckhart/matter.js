/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommissioningClient } from "#behavior/system/commissioning/CommissioningClient.js";
import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { Identity, NotImplementedError } from "#general";
import { ClientEndpointInitializer } from "./client/ClientEndpointInitializer.js";
import { ClientRegistryService } from "./client/ClientRegistryService.js";
import { Node } from "./Node.js";
import type { ServerNode } from "./ServerNode.js";

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

        super(opts);

        this.env.get(ClientRegistryService).add(this);
    }

    override async initialize() {
        this.env.set(EndpointInitializer, new ClientEndpointInitializer(this));

        await super.initialize();
    }

    override async close() {
        this.env.get(ClientRegistryService).delete(this);
    }

    override get owner(): ServerNode {
        return super.owner as ServerNode;
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
    export interface Options extends Node.Options<RootEndpoint> {}

    export const RootEndpoint = Node.CommonRootEndpoint.with(CommissioningClient);

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
