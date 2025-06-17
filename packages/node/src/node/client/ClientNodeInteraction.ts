/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ActionContext } from "#behavior/context/ActionContext.js";
import type { ClientNode } from "#node/ClientNode.js";
import type {
    Interactable,
    InvokeRequest,
    InvokeResult,
    Read,
    ReadResult,
    Subscribe,
    SubscribeResult,
    Write,
    WriteResult,
} from "#protocol";
import { ClientInteraction } from "#protocol";

/**
 * A {@link ClientInteraction} that brings the node online before attempting interaction.
 */
export class ClientNodeInteraction implements Interactable<ActionContext> {
    #node: ClientNode;

    constructor(node: ClientNode) {
        this.#node = node;
    }

    async *read(request: Read, context?: ActionContext): ReadResult {
        yield* (await this.#connect()).read(request, context);
    }

    async *subscribe(request: Subscribe, context?: ActionContext): SubscribeResult {
        yield* (await this.#connect()).subscribe(request, context);
    }

    async write<T extends Write>(request: T, context?: ActionContext): WriteResult<T> {
        return (await this.#connect()).write(request, context);
    }

    async *invoke(request: InvokeRequest, context?: ActionContext): InvokeResult {
        yield* (await this.#connect()).invoke(request, context);
    }

    async #connect(): Promise<ClientInteraction> {
        if (!this.#node.lifecycle.isOnline) {
            await this.#node.start();
        }
        return this.#node.env.get(ClientInteraction);
    }
}
