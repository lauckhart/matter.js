/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicSet, createPromise, Logger, MatterError, UninitializedDependencyError } from "#general";
import type { ClientNode } from "#node/ClientNode.js";
import { InteractionClient, PeerSet } from "#protocol";
import { CommissioningClient } from "../commissioning/CommissioningClient.js";
import { RemoteDescriptor } from "../commissioning/RemoteDescriptor.js";
import { NetworkRuntime } from "./NetworkRuntime.js";

export class UncommissionedError extends MatterError {}
export class OfflineError extends MatterError {}

const logger = Logger.get("ClientNetworkRuntime");

/**
 * Handles network functionality for {@link ClientNode}.
 */
export class ClientNetworkRuntime extends NetworkRuntime {
    #interactions = new BasicSet<Promise<unknown>>();
    #client?: InteractionClient;

    constructor(owner: ClientNode) {
        super(owner);
    }

    interact<T>(interactor: (client: InteractionClient) => Promise<T>) {
        if (this.#client === undefined) {
            throw new UninitializedDependencyError(`Node ${this.owner}`, `Interaction client unavailable`);
        }

        const { promise, resolver, rejecter } = createPromise<T>();

        this.#interactions.add(promise);

        interactor(this.#client)
            .then(resolver, rejecter)
            .finally(() => this.#interactions.delete(promise));

        return promise;
    }

    protected async start() {
        if (!this.owner.lifecycle.isCommissioned) {
            throw new UncommissionedError(`Node unavailable: ${this.owner} is uncommissioned`);
        }

        const commissioningState = this.owner.stateOf(CommissioningClient);
        const address = this.owner.stateOf(CommissioningClient).peerAddress!;
        const peers = this.owner.env.get(PeerSet);

        this.#client = await peers.connect(address, {
            discoveryData: RemoteDescriptor.fromLongForm(commissioningState),
        });
    }

    protected async stop() {
        await this.construction;

        this.blockNewActivity();

        // TODO - cancel client initialization if/when possible

        try {
            this.#client?.close();
        } catch (e) {
            logger.error(`Error closing connection to ${this.owner}`, e);
        }

        if (this.#interactions.size) {
            // TODO - cancel interactions if/when possible

            await new Promise<void>(resolve => {
                const deletionListener = () => {
                    if (!this.#interactions.size) {
                        this.#interactions.deleted.off(deletionListener);
                        resolve();
                    }
                };

                this.#interactions.deleted.on(deletionListener);
            });
        }
    }

    blockNewActivity() {
        this.#client = undefined;
    }
}
