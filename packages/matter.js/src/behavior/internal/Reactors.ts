/**
 * @license
 * Copyright 2022-2024 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { Logger } from "../../log/Logger.js";
import type { Observable, Observer } from "../../util/Observable.js";
import { MaybePromise } from "../../util/Promises.js";
import { Reactor } from "../Reactor.js";
import { ActionContext } from "../context/ActionContext.js";
import { Contextual } from "../context/Contextual.js";
import { NodeActivity } from "../context/server/ActiveContexts.js";
import { OfflineContext } from "../context/server/OfflineContext.js";
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
            reactor.close();
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
    #reactors: Reactors;
    #handler: Observer<T, R>;
    #reactor: Reactor<T, R>;
    #observable: Observable<T, R>;
    #reaction?: Promise<unknown>; // This is R if R is a promise
    #offline?: boolean;
    #destroying?: boolean;
    #lock?: Iterable<Resource>;

    constructor(
        reactors: Reactors,
        observable: Observable<T, R>,
        reactor: Reactor,
        { offline, once, lock }: Reactor.Options,
    ) {
        this.#reactors = reactors;
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
            // In "once" mode we destroy ourselves once the reaction completes
            const triggerReactorOnce = () => {
                this.#destroying = true;

                let isAsync = false;
                try {
                    const result = this.#react(args);
                    if (MaybePromise.is(result)) {
                        isAsync = true;
                        return result.finally(this.close.bind(this));
                    }
                    return;
                } finally {
                    if (!isAsync) {
                        this.close();
                    }
                }
            }

            // If there is an ongoing reaction, wait until it completes before initiating the next reaction
            if (this.#reaction) {
                this.#reaction = this.#reaction.finally(() => {
                    if (once) {
                        triggerReactorOnce();
                    } else {
                        this.#react(args);
                    }
                });
                return;
            }

            // If there is no ongoing reaction, react immediately
            if (once) {
                return this.#reaction = triggerReactorOnce();
            }
            return this.#reaction = this.#react(args) ?? undefined;
        }) as Observer<T, R>;

        observable.on(this.#handler = reactorListener);
    }

    is(observable: Observable<unknown[], unknown>, reactor: Reactor) {
        return this.#observable === observable && this.#reactor === reactor && !this.#destroying;
    }

    close() {
        if (this.#destroying) {
            return;
        }

        this.#destroying = true;
        return MaybePromise.finally(this.#reaction, () => {
            this.#observable.off(this.#handler);
            this.#reactors.remove(this);
        });
    }

    #react(args: T) {
        let context: undefined | ActionContext;
        if (!this.#offline) {
            context = Contextual.contextOf(args[args.length - 1]);
        }

        // If the emitter's context is available, execute in that
        if (context) {
            try {
                const result = this.#reactWithContext(context, this.#reactors.backing, args);
                if (MaybePromise.is(result)) {
                    return Promise.resolve(result).catch(e => { throw this.#augmentError(e) });
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
            const result = OfflineContext.act(
                purpose,
                this.#reactors.activity,
                context => this.#reactWithContext(context, this.#reactors.backing, args)
            );
            if (MaybePromise.is(result)) {
                return Promise.resolve(result).catch(e => logger.error(this.#augmentError(e)));
            }
            return result;
        } catch (e) {
            logger.error(this.#augmentError(e));
        }
    }

    toString() {
        const reactorName = this.#reactor.name ? `.${this.#reactor.name}` : "";
        return `reactor<${this.#reactors.backing}${reactorName}>`;
    }

    #reactWithContext(context: ActionContext, backing: BehaviorBacking, args: T): MaybePromise<void> {
        if (this.#lock) {
            return this.#lockThenReact(context, backing, args);
        }

        return this.#reactWithLocks(context, backing, args);
    }

    async #lockThenReact(context: ActionContext, backing: BehaviorBacking, args: T) {
        if (!this.#lock) {
            throw new InternalError("No locks to acquire");
        }

        await context.transaction.addResources(...this.#lock);
        await context.transaction.begin();

        for (const resource of context.transaction.resources) {
            if (resource.lockedBy !== context.transaction) {
                throw new InternalError(`Lock of ${resource} should be held by ${this} but is not`);
            }
        }

        await this.#reactWithLocks(context, backing, args);
    }

    #reactWithLocks(context: ActionContext, backing: BehaviorBacking, args: T) {
        const agent = context.agentFor(backing.endpoint);
        const behavior = backing.createBehavior(agent, backing.type);
        return this.#reactor.apply(behavior, args) as MaybePromise<any>;
    }

    #augmentError(cause: any) {
        if (!(cause instanceof Error)) {
            cause = new Error(cause.toString());
        }

        cause.message = `Error in ${this}: ${cause.message}`;

        return cause;
    }
}
