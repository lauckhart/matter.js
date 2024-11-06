/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    ActionContext,
    Invoke,
    InvokeResult,
    Read,
    ReadResult,
    Subscribe,
    SubscribeResult,
    Write,
    WriteResult,
} from "#action/index.js";
import { NetworkBehavior } from "#behavior/index.js";
import { CommissioningClient } from "#behavior/system/commissioning/CommissioningClient.js";
import { ClientNetworkRuntime, OfflineError } from "#behavior/system/network/ClientNetworkRuntime.js";
import { NetworkClient } from "#behavior/system/network/NetworkClient.js";
import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { Agent } from "#endpoint/Agent.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { Identity, Lifecycle, MaybePromise, NotImplementedError } from "#general";
import { ClientEndpointInitializer } from "./client/ClientEndpointInitializer.js";
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
    }

    override async initialize() {
        this.env.set(EndpointInitializer, await ClientEndpointInitializer.create(this));

        await super.initialize();
    }

    override get owner(): ServerNode | undefined {
        return super.owner as ServerNode | undefined;
    }

    override set owner(owner: ServerNode) {
        super.owner = owner;
    }

    async commission(options: CommissioningClient.CommissioningOptions) {
        await this.act("commission", agent => agent.commissioning.commission(options));
    }

    protected createRuntime(): NetworkRuntime {
        return new ClientNetworkRuntime(this);
    }

    async prepareRuntimeShutdown() {}

    read(_request: Read, _context?: ActionContext): ReadResult {
        // TODO
        throw new NotImplementedError();
    }

    write(_request: Write, _context?: ActionContext): WriteResult {
        // TODO
        throw new NotImplementedError();
    }

    invoke(_request: Invoke, _context?: ActionContext): InvokeResult {
        // TODO
        throw new NotImplementedError();
    }

    subscribe(_request: Subscribe, _context?: ActionContext): SubscribeResult {
        // TODO
        throw new NotImplementedError();
    }

    protected override get container() {
        return this.owner?.nodes;
    }

    override act<R>(
        purpose: string,
        actor: (agent: Agent.Instance<ClientNode.RootEndpoint>) => MaybePromise<R>,
    ): MaybePromise<R>;

    override act<R>(actor: (agent: Agent.Instance<ClientNode.RootEndpoint>) => MaybePromise<R>): MaybePromise<R>;

    override act<R>(
        actorOrPurpose: string | ((agent: Agent.Instance<ClientNode.RootEndpoint>) => MaybePromise<R>),
        actor?: (agent: Agent.Instance<ClientNode.RootEndpoint>) => MaybePromise<R>,
    ): MaybePromise<R> {
        if (this.construction.status === Lifecycle.Status.Inactive) {
            this.construction.start();
        }

        if (this.construction.status === Lifecycle.Status.Initializing) {
            return this.construction.then(() => (super.act as any)(actorOrPurpose, actor));
        }

        return (super.act as any)(actorOrPurpose, actor);
    }

    get #client() {
        const runtime = this.behaviors.internalsOf(NetworkBehavior).runtime;
        if (runtime === undefined || !this.lifecycle.isOnline) {
            throw new OfflineError(`Cannot interact with remote node: ${this} is offline`);
        }
        return runtime.client;
    }
}

export namespace ClientNode {
    export interface Options extends Node.Options<RootEndpoint> {}

    export const RootEndpoint = Node.CommonRootEndpoint.with(CommissioningClient, NetworkClient);

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
