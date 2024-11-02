/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BasicSet, Logger, MatterError } from "#general";
import type { ClientNode } from "#node/ClientNode.js";
import { ExchangeProvider, InteractionClient, InteractionClientMessenger, PeerSet } from "#protocol";
import { InteractionQueue } from "../../../../../protocol/src/peer/InteractionQueue.js";
import { CommissioningClient } from "../commissioning/CommissioningClient.js";
import { RemoteDescriptor } from "../commissioning/RemoteDescriptor.js";
import { ClientExchangeProvider } from "./ClientExchangeProvider.js";
import { NetworkRuntime } from "./NetworkRuntime.js";

export class UncommissionedError extends MatterError {}
export class OfflineError extends MatterError {}

const logger = Logger.get("ClientNetworkRuntime");

/**
 * Handles network functionality for {@link ClientNode}.
 */
export class ClientNetworkRuntime extends NetworkRuntime {
    #connected?: Promise<InteractionClient>;
    #interactions = new BasicSet<Promise<unknown>>();
    #exchangeProvider: ExchangeProvider;
    #queue: InteractionQueue;

    constructor(owner: ClientNode) {
        super(owner);
        this.#queue = owner.env.get(InteractionQueue);
        this.#exchangeProvider = new ClientExchangeProvider(owner);
    }

    /**
     * Interact with the remote node.
     *
     * During interaction an actor function has exclusive access to a messenger for communicating with the ndoe.
     *
     * TODO - wire cancelation into MessageExchange, return CancelablePromise here
     */
    async interact<T>(interactor: (messenger: InteractionClientMessenger) => Promise<T>): Promise<T> {
        const messenger = await InteractionClientMessenger.create(this.#exchangeProvider);

        try {
            return interactor(messenger);
        } finally {
            await messenger.close();
        }
    }

    protected async start() {
        if (!this.owner.lifecycle.isCommissioned) {
            throw new UncommissionedError(`Cannot interact with ${this.owner} because node is uncommissioned`);
        }

        const commissioningState = this.owner.stateOf(CommissioningClient);
        const address = this.owner.stateOf(CommissioningClient).peerAddress!;
        const peers = this.owner.env.get(PeerSet);

        this.#connected = new Promise((resolve, reject) => {
            peers
                .connect(address, {
                    discoveryData: RemoteDescriptor.fromLongForm(commissioningState),
                })
                .then(resolve, reject);
        });
    }

    protected async stop() {
        await this.construction;

        this.blockNewActivity();

        // TODO - cancel connect if/when possible

        try {
            (await this.#connected)?.close();
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
        this.#connected = Promise.reject(new OfflineError(`Connection to ${this.owner} is closing`));
    }
}
