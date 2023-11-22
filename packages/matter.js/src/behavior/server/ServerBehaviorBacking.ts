/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../common/MatterError.js";
import { Fabric } from "../../fabric/Fabric.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { LifecycleBehavior } from "../definitions/lifecycle/LifecycleBehavior.js";
import { ManagedState } from "../state/ManagedState.js";
import { State } from "../state/State.js";
import { UnifiedState } from "../state/UnifiedState.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #endpointScope?: State;
    #fabricScopes = new Map<Fabric, State>();
    #fabricScopeType?: State.Type;
    #stateType?: UnifiedState.Type;
    #stateOwner?: ManagedState.Owner;

    /**
     * Access endpoint scope.
     */
    get endpointScope() {
        if (!this.#endpointScope) {
            this.#endpointScope = this.createEndpointScope();
        }
        return this.#endpointScope;
    }

    /**
     * Access fabric scope.
     */
    getFabricScope(fabric: Fabric | undefined) {
        if (fabric === undefined) {
            throw new ImplementationError(`Cannot access ${this.type.id} fabric properties without fabric scope`);
        }

        let fabricScope = this.#fabricScopes.get(fabric);

        if (!fabricScope) {
            fabricScope = this.createFabricScope(fabric);

            fabric.addRemoveCallback(() => this.#fabricScopes.delete(fabric));
        }

        return fabricScope;
    }

    createState(context: InvocationContext) {
        const endpointScope = this.endpointScope;

        let fabricScope: State | undefined;
        if (context.fabric) {
            fabricScope = this.getFabricScope(context.fabric);
        }

        if (!this.#stateType) {
            this.#stateType = UnifiedState(this.type.EndpointScope, this.type.FabricScope, this.type.id);
        }

        const instance = new this.#stateType(endpointScope, fabricScope, context);

        return instance;
    }

    /**
     * Create endpoint scope.  Derivatives may override to inject default
     * values.
     */
    protected createEndpointScope(values = {}) {
        const endpointScopeType = ManagedState(this.type.EndpointScope, this.stateOwner);

        this.#endpointScope = new endpointScopeType(values);
        return this.#endpointScope;
    }

    /**
     * Create fabric scope.  Derivatives may override to inject default values.
     */
    protected createFabricScope(fabric: Fabric, values = {}) {
        if (!this.#fabricScopeType) {
            this.#fabricScopeType = ManagedState(this.type.FabricScope, this.stateOwner);
        }

        const scope = new this.type.FabricScope(values);
        this.#fabricScopes.set(fabric, scope);
        return scope;
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
