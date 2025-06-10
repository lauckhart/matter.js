/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment, Environmental } from "#general";
import { ClientNode } from "#node/ClientNode.js";
import {
    ClientInteraction,
    ClientInteractionContext,
    ExchangeProvider,
    InteractionSession,
    InvokeRequest,
    InvokeResult,
    Read,
    ReadResult,
    Subscribe,
    SubscribeResult,
    SubscriptionClient,
    Write,
    WriteResult,
} from "#protocol";
import { InteractionQueue } from "../../../../protocol/src/peer/InteractionQueue.js";

export interface ClientNodeInteractionContext extends ClientInteractionContext {
    node: ClientNode;
}

/**
 * A {@link ClientInteraction} that brings the node online before attempting interaction.
 */
export class ClientNodeInteraction extends ClientInteraction {
    #node: ClientNode;

    constructor(context: ClientNodeInteractionContext) {
        super(context);

        this.#node = context.node;
    }

    override async *read(request: Read, session?: InteractionSession): ReadResult {
        await this.#node.start();
        yield* super.read(request, session);
    }

    override async *subscribe(request: Subscribe, session?: InteractionSession): SubscribeResult {
        await this.#node.start();
        yield* super.subscribe(request, session);
    }

    override async write<T extends Write>(request: T, session?: InteractionSession): WriteResult<T> {
        await this.#node.start();
        return super.write(request, session);
    }

    override async *invoke(request: InvokeRequest, session?: InteractionSession): InvokeResult {
        await this.#node.start();
        yield* super.invoke(request, session);
    }

    static override [Environmental.create](env: Environment) {
        const instance = new ClientNodeInteraction({
            exchanges: env.get(ExchangeProvider),
            subscriptions: env.get(SubscriptionClient),
            queue: env.get(InteractionQueue),
            node: env.get(ClientNode),
        });
        env.set(ClientInteraction, instance);
        return instance;
    }
}
