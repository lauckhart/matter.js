/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { LifecycleBehavior } from "../definitions/lifecycle/LifecycleBehavior.js";
import { ManagedState } from "../state/ManagedState.js";
import { State } from "../state/State.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #state?: State;
    #stateType?: State.Type;
    #stateOwner?: ManagedState.Owner;

    /**
     * Access raw (unmanaged) state.
     */
    get state(): Record<string, any> {
        if (!this.#state) {
            this.#state = this.createEndpointScope();
        }
        return this.#state;
    }

    /**
     * Obtain a managed state instance.
     */
    createState(context: InvocationContext) {
        if (!this.#stateType) {
            this.#stateType = ManagedState(this.type.State);
        }

        const instance = new this.#stateType(this.state, context);

        return instance;
    }

    /**
     * Create endpoint scope.  Derivatives may override to inject default
     * values.
     */
    protected createEndpointScope(values = {}) {
        const endpointScopeType = ManagedState(this.type.State, this.stateOwner);

        this.#state = new endpointScopeType(values);
        return this.#state;
    }

    protected get stateOwner() {
        const part = this.part;

        // We need access to lifecycle state to access online status.  Loads
        // lazily to avoid infinite loops but we then cache as this is
        // referenced for every write
        let lifecycleState: LifecycleBehavior.EndpointScope | undefined;

        if (this.#stateOwner === undefined) {
            this.#stateOwner = {
                name: this.type.name,
                get online() {
                    if (lifecycleState === undefined) {
                        lifecycleState = part.agent.get(LifecycleBehavior).state;
                    }
                    return lifecycleState.online;
                },
            };
        }

        return this.#stateOwner;
    }
}
