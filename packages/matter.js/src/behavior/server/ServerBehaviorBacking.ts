/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../common/MatterError.js";
import { LifecycleBehavior } from "../../endpoint/part/LifecycleBehavior.js";
import { Fabric } from "../../fabric/Fabric.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { ManagedState } from "../state/ManagedState.js";
import { State } from "../state/State.js";
import { UnifiedState } from "../state/UnifiedState.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #endpointScope?: State;
    #fabricScopes = new Map<Fabric, State>;
    #fabricScopeType?: State.Type;
    #stateType?: UnifiedState.Type;

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
        const endpointScopeType = ManagedState(this.type.EndpointScope);

        this.#endpointScope = new endpointScopeType(values);
        return this.#endpointScope;
    }

    /**
     * Create fabric scope.  Derivatives may override to inject default values.
     */
    protected createFabricScope(fabric: Fabric, values = {}) {
        if (!this.#fabricScopeType) {
            this.#fabricScopeType = ManagedState(this.type.FabricScope);
        }

        const scope = new this.type.FabricScope(values);
        this.#fabricScopes.set(fabric, scope);
        return scope;
    }

    protected createScope(type: State.Type) {
        const part = this.part;

        return ManagedState(type, {
            name: this.type.id,
            
            get online() {
                return part.getAgent().get(LifecycleBehavior).state.online;
            }
        })
    }
}
