/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../cluster/Cluster.js";
import { ImplementationError } from "../common/MatterError.js";
import { Agent } from "../endpoint/Agent.js";
import type { Part } from "../endpoint/Part.js";
import { AsyncConstruction } from "../util/AsyncConstruction.js";
import { EventEmitter } from "../util/Observable.js";
import { MaybePromise } from "../util/Type.js";
import type { Behavior } from "./Behavior.js";
import type { InvocationContext } from "./InvocationContext.js";
import { Val } from "./state/managed/Val.js";
import { Transaction } from "./state/transaction/Transaction.js";

/**
 * The "backing" for a behavior manages those portions of behavior that endure
 * for the lifetime of an endpoint.
 */
export abstract class BehaviorBacking {
    #part: Part;
    #type: Behavior.Type;
    #internal?: object;
    #events?: EventEmitter;
    #options?: Behavior.Options;

    abstract readonly construction: AsyncConstruction<BehaviorBacking>;

    constructor(part: Part, type: Behavior.Type, options?: Behavior.Options) {
        this.#part = part;
        this.#type = type;
        this.#options = options;
    }

    /**
     * Initialize state by applying values from options and invoking the
     * behavior's initialize() function.
     * 
     * Called by Behaviors once the backing is installed.
     */
    initialize() {
        this.construction.start(() => {
            // We initialize in a transaction so behaviors can update persistent
            // state values during initialization
            const transaction = new Transaction();

            // Create a transactional offline agent
            const agent = this.#part.getAgent({
                offline: true,
                accessLevel: AccessLevel.View,
                transaction,
            });

            // We use this behavior for initialization.  Do not use agent.get()
            // to access the behavior because it will throw if the behavior
            // isn't initialized
            const behavior = this.createBehavior(agent, this.#type);

            // Perform actual initialization
            let promise: MaybePromise;
            try {
                promise = this.invokeInitializer(behavior, this.#options);

                if (MaybePromise.is(promise)) {
                    promise.then(
                        () => {
                            if (transaction.status === Transaction.Status.Exclusive) {
                                return transaction.commit();
                            }
                        },

                        error => {
                            if (transaction.status === Transaction.Status.Exclusive) {
                                return transaction.rollback().then(() => { throw error });
                            }
                        }
                    )
                } else if (transaction.status === Transaction.Status.Exclusive) {
                    promise = transaction.commit();
                }
            } catch (e) {
                // We don't commit here because initialization may be async.
                // However if there's a synchronous error we do want to perform
                // rollback if in a write transaction
                if (transaction.status === Transaction.Status.Exclusive) {
                    // Rollback is asynchronous so return the promise that will
                    // register as initializing just so we track the promise
                    promise = transaction.rollback().then(() => { throw e });
                } else {
                    throw e;
                }
            }

            return promise;
        });
    }

    /**
     * Set state from options and invoke {@link Behavior.initialize}.
     */
    protected invokeInitializer(behavior: Behavior, options?: Behavior.Options) {
        return behavior.initialize(options);
    }

    /**
     * The {@link Part} that owns the behavior.
     */
    get part() {
        return this.#part;
    }

    /**
     * The {@link Behavior.Type} backed.
     */
    get type() {
        return this.#type;
    }

    /**
     * Create an instance of the backed {@link Behavior}.
     *
     * Derivatives may override to perform additional setup beyond simple
     * instantiation.
     */
    createBehavior(agent: Agent, type: Behavior.Type) {
        const behavior = new this.#type(agent, this);
        if (behavior instanceof type) {
            return behavior;
        }

        throw new ImplementationError(
            `Cannot create behavior ${type.id} because installed implementation is incompatible`,
        );
    }

    /**
     * Obtain state for a behavior instance.
     */
    abstract referenceState(context: InvocationContext): Val.Struct;

    /**
     * Obtain internal state for a behavior instance.
     */
    getInternal() {
        if (!this.#internal) {
            this.#internal = new this.#type.InternalState();
        }

        return this.#internal;
    }

    /**
     * Access the event object.  Unlike state, the events object does not vary
     * by instance.
     */
    get events() {
        if (!this.#events) {
            this.#events = new this.#type.Events();
        }
        return this.#events;
    }
}
