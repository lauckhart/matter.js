/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CancelablePromise, Environment, Environmental, NotImplementedError, PromiseQueue } from "#general";
import { ExchangeProvider, InteractionClientMessenger, SubscriptionClient, WriteResponse } from "#protocol";
import { ActionContext } from "./context/ActionContext.js";
import { Interactable } from "./Interactable.js";
import { Invoke } from "./request/Invoke.js";
import { Read } from "./request/Read.js";
import { Subscribe } from "./request/Subscribe.js";
import { Write } from "./request/Write.js";
import { InvokeResult } from "./response/InvokeResult.js";
import { ReadResult } from "./response/ReadResult.js";
import { SubscribeResult } from "./response/SubscribeResult.js";
import { WriteResult } from "./response/WriteResult.js";

export class InteractionQueue extends PromiseQueue {
    static [Environmental.create](env: Environment) {
        const instance = new InteractionQueue();
        env.set(InteractionQueue, instance);
        return instance;
    }
}

export interface ClientInteractableContext {
    exchanges: ExchangeProvider;
    subscriptions: SubscriptionClient;
    queue: PromiseQueue;
}

/**
 * An interactable that
 */
export class ClientInteractable implements Interactable {
    readonly #exchanges: ExchangeProvider;
    readonly #subscriptions: SubscriptionClient;
    readonly #queue?: PromiseQueue;

    constructor(context: ClientInteractableContext) {
        this.#exchanges = context.exchanges;
        this.#subscriptions = context.subscriptions;
        this.#queue = context.queue;
    }

    static [Environmental.create](env: Environment) {
        const instance = new ClientInteractable({
            exchanges: env.get(ExchangeProvider),
            subscriptions: env.get(SubscriptionClient),
            queue: env.get(InteractionQueue),
        });
        env.set(ClientInteractable, instance);
        return instance;
    }

    read(_request: Read, _context?: ActionContext): ReadResult {
        return this.#interact(messenger => {
            // TODO
            throw new NotImplementedError();
        });
    }

    write<T extends Write>(request: T, _context?: ActionContext) {
        return new CancelablePromise<void | WriteResponse>((resolve, reject) => {
            InteractionClientMessenger.create(this.#exchanges).then(messenger => {
                const send = messenger.sendWriteCommand(request);

                let sendResolve;
                if (request.suppressResponse) {
                    sendResolve = send.then(() => {
                        resolve();
                    });
                } else {
                    sendResolve = send.then(resolve);
                }

                sendResolve.catch(reject);
            }, reject);
        }) as WriteResult<T>;
    }

    invoke<T extends Invoke>(request: Invoke, _context?: ActionContext): InvokeResult<T> {
        if (request.suppressResponse) {
            return new CancelablePromise<void>((resolve, reject) => {
                InteractionClientMessenger.create(this.#exchanges)
                    .then(messenger =>
                        messenger
                            .sendInvokeCommand(request)
                            .then(() => resolve())
                            .catch(reject),
                    )
                    .then(resolve, reject);
            }) as InvokeResult<T>;
        }
    }

    subscribe(_request: Subscribe, _context?: ActionContext): SubscribeResult {
        return this.#interact(messenger => {
            // TODO
            throw new NotImplementedError();
        });
    }

    async #interact<T>(interactor: (messenger: InteractionClientMessenger) => T) {
        const messenger = await InteractionClientMessenger.create(this.#exchanges);
        return await interactor(message);
        try {
            return await interactor(messenger);
        } finally {
            await messenger.close();
        }
    }
}
