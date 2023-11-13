/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { State } from "./state/State.js";
import { StateManager } from "./state/StateManager.js";
import type { Behavior } from "./Behavior.js";
import type { InvocationContext } from "./InvocationContext.js";
import type { Part } from "../endpoint/Part.js";
import { EndpointAgent } from "../endpoint/EndpointAgent.js";
import { EventEmitter } from "../util/Observable.js";

/**
 * The "backing" for a behavior manages those portions of behavior that endure
 * for the lifetime of an endpoint.
 */
export abstract class BehaviorBacking implements StateManager {
    #part: Part;
    #type: Behavior.Type;
    #internal?: State;
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
     * Create a behavior.  Derivatives may override to perform additional
     * setup beyond simply instantiating the behavior.
     */
    createBehavior(agent: EndpointAgent) {
        return new this.#type(agent, this);
    }

    /**
     * Obtain state for a behavior instance.  This performs the magic required
     * to give agents a unified view of state with event handling and
     * validation wired in.
     * 
     * To make this perform optimally we generate and cache necessary
     * classes.
     */
    abstract createState(context: InvocationContext): State;

    /**
     * Obtain internal state for a behavior instance.
     */
    getInternal() {
        if (!this.#internal) {
            this.#internal = new this.#type.InternalScope;
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
     * Interception point for state mutation.  Derivatives may override to
     * provide validation and propagate state.
     */
    setStateValue(_name: string, _value: any, _context: InvocationContext) {
    }

    /**
     * Invoked by the part when the backing is no longer needed.
     */
    destroy() {
    }
}
