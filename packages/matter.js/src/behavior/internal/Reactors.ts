/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { Agent } from "../../endpoint/Agent.js";
import { Endpoint } from "../../endpoint/Endpoint.js";
import { Logger } from "../../log/Logger.js";
import type { Observable, Observer } from "../../util/Observable.js";
import { MaybePromise, createPromise } from "../../util/Promises.js";
import { Reactor } from "../Reactor.js";
import { ActionContext } from "../context/ActionContext.js";
import { Contextual } from "../context/Contextual.js";
import { NodeActivity } from "../context/server/NodeActivity.js";
import { Resource } from "../state/transaction/Resource.js";
import type { BehaviorBacking } from "./BehaviorBacking.js";

const logger = Logger.get("Reactors");

/**
 * Used by BehaviorBacking to manage reactors and reactions.
 */
export class Reactors {
    #backing: BehaviorBacking;
    #backings = new Set<ReactorBacking<any, any>>();
    #destructionComplete?: () => void;
    #activity: NodeActivity;

    constructor(backing: BehaviorBacking) {
        this.#backing = backing;
        this.#activity = backing.endpoint.env.get(NodeActivity);
    }

    get backing() {
        return this.#backing;
    }

    get activity() {
        return this.#activity;
    }

    async close() {
        for (const reactor of this.#backings) {
            await reactor.close();
        }

        if (this.#backings.size) {
            return new Promise<void>(resolve => (this.#destructionComplete = resolve));
        }
    }

    add<O extends Observable<any[], any>>(
        observable: O,
        reactor: Reactor<Parameters<O["emit"]>, ReturnType<O["emit"]>>,
        options?: Reactor.Options,
    ) {
        // Deduplicate reactors
        for (const backing of this.#backings) {
            if (backing.is(observable, reactor)) {
                return;
            }
        }

        // Install
        this.#backings.add(new ReactorBacking(this, observable, reactor, options ?? {}));
    }

    remove(backing: ReactorBacking<any, any>) {
        this.#backings.delete(backing);
        if (!this.#backings.size) {
            this.#destructionComplete?.();
        }
    }

    get resource() {
        return this.#backing.datasource;
    }
}

/**
 * Implementation of a single reactor.
 */
class ReactorBacking<T extends any[], R> {
    #owner: Reactors;
    #endpoint: Endpoint;
    #listener: Observer<T, R>;
    #reactor: Reactor<T, R>;
    #observable: Observable<T, R>;
    #offline?: boolean;
    #closing?: boolean;
    #lock?: Iterable<Resource>;
    #queue = Array<{
        args: T;
        resolve: (result: R | undefined) => void;
        reject: (cause: any) => void;
    }>();
    #reacting?: Promise<unknown>;
    #resolveReacting?: () => void;

    constructor(
        reactors: Reactors,
        observable: Observable<T, R>,
        reactor: Reactor,
        { offline, once, lock }: Reactor.Options,
    ) {
        this.#owner = reactors;
        this.#endpoint = reactors.backing.endpoint;
        this.#observable = observable;
        this.#offline = offline;
        this.#reactor = reactor;

        if (lock) {
            if (lock === true) {
                lock = [reactors.resource];
            } else if (!Array.isArray(lock)) {
                lock = [lock];
            }
            this.#lock = lock as Resource[];
        }

        const reactorListener = ((...args: T) => {
            // In "once" mode we stop listening immediately and destroy ourselves once the reaction completes
            if (once) {
                return this.#reactOnce(args);
            }

            // Ongoing asynchronous reaction means we must wait our turn
            if (this.#reacting) {
                const { promise, resolver, rejecter } = createPromise<R | undefined>();
                this.#queue.push({
                    args,
                    resolve: resolver,
                    reject: rejecter,
                });

                return promise;
            }

            // There is no ongoing reaction so react immediately
            return this.#react(args);
        }) as Observer<T, R>;

        observable.on((this.#listener = reactorListener));
    }

    is(observable: Observable<unknown[], unknown>, reactor: Reactor) {
        return this.#observable === observable && this.#reactor === reactor && !this.#closing;
    }

    close() {
        if (this.#closing) {
            return;
        }

        this.#observable.off(this.#listener);

        this.#closing = true;

        return MaybePromise.finally(this.#reacting, () => this.#owner.remove(this));
    }

    toString() {
        const reactorName = this.#reactor.name ? `.${this.#reactor.name}` : "";
        return `reactor<${this.#owner.backing}${reactorName}>`;
    }

    /**
     * Invoke a single reactor when no other reactor is active.
     *
     * If the reaction is asynchronous it is tracked via {@link #reactAsync}.
     */
    #react(args: T): MaybePromise<R | undefined> {
        let context: undefined | ActionContext;
        if (!this.#offline) {
            context = Contextual.contextOf(args[args.length - 1]);
        }

        // If the emitter's context is available, execute in that
        //
        // TODO - if emitter doesn't await promise, things will probably go wrong so async reactors need to use the
        // offline option.  Can probably enforce that with types
        if (context) {
            try {
                const result = this.#reactWithAgent(context.agentFor(this.#endpoint), this.#owner.backing, args);
                if (MaybePromise.is(result)) {
                    this.#reactAsync(result);
                }
                return result;
            } catch (e) {
                throw this.#augmentError(e);
            }
        }

        // Otherwise run in independent context and errors do not interfere with emitter
        try {
            let purpose = "react";
            if (this.#reactor.name) {
                purpose = `${purpose}<${this.#reactor.name}>`;
            }
            let result = this.#endpoint.act(agent => this.#reactWithAgent(agent, this.#owner.backing, args));
            if (MaybePromise.is(result)) {
                result = result.then(undefined, e => {
                    logger.error(this.#augmentError(e));
                    return undefined;
                });
                this.#reactAsync(result);
            }
            return result;
        } catch (e) {
            logger.error(this.#augmentError(e));
        }
    }

    /**
     * Handle the promise from an asynchronous reaction.
     */
    #reactAsync(reaction: PromiseLike<R | undefined>) {
        // We cannot use the input promise to await because we don't want this.#reacting to resolve until all reactions
        // complete
        if (!this.#reacting) {
            this.#owner.activity.add(this);
            this.#reacting = new Promise<void>(resolve => (this.#resolveReacting = resolve));
        }

        // Wait for reaction to complete then pass control to #afterAsyncReaction
        //
        // Errors from the reaction promise are either caught by the emitter (when using a parent context), logged in
        // #react (for offline context) or unhandled.  So do not add a catch handler here
        void Promise.resolve(reaction).finally(this.#afterAsyncReaction.bind(this));
    }

    /**
     * Invoked after an asynchronous reactor completes.
     *
     * Invoke next reactor and resolve the reacting promise if complete.
     */
    #afterAsyncReaction() {
        while (true) {
            // Load next reactor
            const next = this.#queue.shift();
            if (!next) {
                this.#owner.activity.delete(this);
                this.#resolveReacting?.();
                return;
            }

            const { args, resolve, reject } = next;

            // React
            try {
                const result = this.#react(args);

                // If Reactor is asynchronous, #reactAsync is re-invoked so my job is done
                if (MaybePromise.is(result)) {
                    result.then(resolve, reject);
                    return;
                }

                // Reactor returned synchronously
                resolve(result);
            } catch (e) {
                // Reactor threw synchronously
                reject(e);
            }
        }
    }

    /**
     * React in "once" mode -- react then close.
     */
    #reactOnce(args: T): MaybePromise<R | undefined> {
        this.#observable.off(this.#listener);

        let isAsync = false;
        try {
            let result = this.#react(args);

            // If reaction is async, wait until it completes to close
            if (MaybePromise.is(result)) {
                isAsync = true;

                this.#reacting = Promise.resolve(result);

                // Close will wait for the reaction to complete so just convert its promise into Promise<R>
                result = Promise.resolve(this.close()).then(() => result);
            }

            return result;
        } finally {
            // If reaction is not async, close now
            if (!isAsync) {
                // Close should not be async
                void this.close();
            }
        }
    }

    /**
     * Invoked by #react once it obtains a context.
     */
    #reactWithAgent(agent: Agent, backing: BehaviorBacking, args: T): MaybePromise<R | undefined> {
        if (this.#lock) {
            return this.#lockThenReact(agent, backing, args);
        }

        return this.#reactWithLocks(agent, backing, args);
    }

    /**
     * Grab locks if so configured before performing reaction.
     */
    async #lockThenReact(agent: Agent, backing: BehaviorBacking, args: T): Promise<R | undefined> {
        if (!this.#lock) {
            throw new InternalError("No locks to acquire");
        }

        const { context } = agent;

        await context.transaction.addResources(...this.#lock);
        await context.transaction.begin();

        for (const resource of context.transaction.resources) {
            if (resource.lockedBy !== context.transaction) {
                throw new InternalError(`Lock of ${resource} should be held by ${this} but is not`);
            }
        }

        return await this.#reactWithLocks(agent, backing, args);
    }

    /**
     * Invoke the actual reactor.
     */
    #reactWithLocks(agent: Agent, backing: BehaviorBacking, args: T): MaybePromise<R | undefined> {
        const behavior = backing.createBehavior(agent, backing.type);
        return this.#reactor.apply(behavior, args) as MaybePromise<R>;
    }

    /**
     * Detail the reactor in error messages for errors triggered during reaction.
     */
    #augmentError(cause: any) {
        if (!(cause instanceof Error)) {
            cause = new Error(cause.toString());
        }

        cause.message = `Error in ${this}: ${cause.message}`;

        return cause;
    }
}
