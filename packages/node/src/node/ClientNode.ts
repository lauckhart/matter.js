/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#behavior/context/ActionContext.js";
import { CommissioningClient } from "#behavior/system/commissioning/CommissioningClient.js";
import { ClientNetworkRuntime } from "#behavior/system/network/ClientNetworkRuntime.js";
import { NetworkClient } from "#behavior/system/network/NetworkClient.js";
import { NetworkRuntime } from "#behavior/system/network/NetworkRuntime.js";
import { Agent } from "#endpoint/Agent.js";
import { EndpointInitializer } from "#endpoint/properties/EndpointInitializer.js";
import { Identity, Lifecycle, MaybePromise } from "#general";
import { ClientInteraction, Interactable, Read, ReadResult } from "#protocol";
import { Matter, MatterModel } from "@matter/model";
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
    #matter: MatterModel;

    constructor(options: ClientNode.Options) {
        const opts = {
            ...options,
            number: 0,
            type: ClientNode.RootEndpoint,
        };

        super(opts);

        this.env.set(Node, this);
        this.env.set(ClientNode, this);

        this.#matter = options.matter ?? Matter;
    }

    /**
     * Model of Matter semantics understood by this node.
     *
     * Matter elements missing from this model will not support all functionality.
     */
    get matter() {
        return this.#matter;
    }

    /**
     * Update the node with attributes selected by a read.
     */
    async refresh(read: Read | ReadResult) {
        if (!(Symbol.asyncIterator in read)) {
            read = this.interaction.read(read);
        }

        for await (const chunk of read) {
            // TODO
            console.log(chunk);
        }
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

    get interaction(): Interactable<ActionContext> {
        return this.env.get(ClientInteraction);
    }
}

export namespace ClientNode {
    export interface Options extends Node.Options<RootEndpoint> {
        matter?: MatterModel;
    }

    export const RootEndpoint = Node.CommonRootEndpoint.with(CommissioningClient, NetworkClient);

    export interface RootEndpoint extends Identity<typeof RootEndpoint> {}
}
