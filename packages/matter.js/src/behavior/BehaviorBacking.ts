/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "../endpoint/Agent.js";
import type { Part } from "../endpoint/Part.js";
import { EventEmitter } from "../util/Observable.js";
import type { Behavior } from "./Behavior.js";
import type { InvocationContext } from "./InvocationContext.js";

/**
 * The "backing" for a behavior manages those portions of behavior that endure
 * for the lifetime of an endpoint.
 */
export abstract class BehaviorBacking {
    #part: Part;
    #type: Behavior.Type;
    #internal?: Object;
    #events?: EventEmitter;

    constructor(part: Part, type: Behavior.Type) {
        this.#part = part;
        this.#type = type;
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
    createBehavior(agent: Agent) {
        return new this.#type(agent, this);
    }

    /**
     * Obtain state for a behavior instance.
     */
    abstract createState(context: InvocationContext): Object;

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

    /**
     * Invoked by the part when the backing is no longer needed.
     */
    destroy() {}
}
