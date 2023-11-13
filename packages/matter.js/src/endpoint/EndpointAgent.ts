/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../behavior/Behavior.js";
import { InvocationContext } from "../behavior/InvocationContext.js";
import type { SupportedBehaviors } from "./part/SupportedBehaviors.js";
import type { Part } from "./Part.js";

/**
 * Endpoint agent offers interaction with a single endpoint.  This is the
 * functional interface to endpoints.  It is separate from the endpoint
 * definition because the endpoint API is only available in the context of
 * a fabric.
 * 
 * An endpoint agent manages one or more {@link Behavior} instances that
 * implement a discrete subset of the agent's functionality.
 * 
 * Each endpoint agent has an associated {@link EndpointAgent.Type} that
 * defines each {@link Behavior.Type} the endpoint supports.
 * 
 * {@link EndpointAgent.Type} is a permanent feature of an endpoint but
 * agent instances themselves are transitory and there is no guarantee they
 * will exist beyond the lifecycle of a single transaction.
 */
export class EndpointAgent {
    #part: Part;
    #context: InvocationContext;
    #behaviors = {} as Record<string, Behavior>;

    constructor(part: Part, context: InvocationContext) {
        this.#part = part;
        this.#context = context;
    }

    /**
     * Access {@link Part} this agent acts on behalf of.
     */
    get part() {
        return this.#part;
    }

    /**
     * Access the agent's {@link InvocationContext}.
     */
    get context() {
        return this.#context;
    }

    /**
     * Test to see if a {@link Behavior.Type} is supported by this agent.
     */
    has<BehaviorT extends Behavior.Type>(type: BehaviorT): this is InstanceType<BehaviorT> {
        return this.#part.behaviors.has(type);
    }

    /**
     * Obtain a {@link Behavior} supported by this agent.  Throws an error if
     * the {@link Behavior.Type} isn't supported.
     */
    get<T extends Behavior.Type>(type: T) {
        let behavior = this.#behaviors[type.id];
        if (!behavior) {
            behavior = this.#part.behaviors.create(type, this);
            this.#behaviors[type.id] = behavior;
        }
        return behavior as InstanceType<T>;
    }

    /**
     * Obtain a {@link Behavior}.  Adds support for the {@link Behavior.Type}
     * if necessary.
     */
    require<T extends Behavior.Type>(type: T): InstanceType<T> {
        this.#part.behaviors.require(type);
        return this.get(type);
    }

    /**
     * Create a new EndpointAgent that supports the specified behaviors.
     */
    static for<B extends SupportedBehaviors>(behaviors: SupportedBehaviors) {
        class Agent extends EndpointAgent {}

        const descriptors = {} as PropertyDescriptorMap;
        Object.values(behaviors).forEach(behavior => {
            descriptors[behavior.id] = {
                get(this: EndpointAgent) {
                    return this.get(behavior);
                },

                enumerable: true
            }
        });

        Object.defineProperties(Agent.prototype, descriptors);

        return Agent as unknown as EndpointAgent.Type<B>;
    }
}

export namespace EndpointAgent {
    /**
     * Static type for EndpointAgent with a property for each statically
     * defined behavior.
     * 
     * Behaviors available at construction time are available as instance
     * properties.  You must use {@link EndpointAgent.get} or
     * {@link EndpointAgent.require} to acquire behaviors added via
     * {@link EndpointAgent.require}.
     */
    export interface Type<B extends SupportedBehaviors = {}> {
        new (context: InvocationContext):
            & EndpointAgent
            & { readonly [K in keyof B & string]: InstanceType<B[K]> };
    }
}
