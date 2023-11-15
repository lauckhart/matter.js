/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../common/MatterError.js";
import { InvocationContext } from "../InvocationContext.js";
import { State } from "./State.js";

/**
 * "Unified" state includes all state values (endpoint and fabric) for a behavior
 * behavior.
 */
export type UnifiedState<ES extends State.Type, FS extends State.Type> =
    InstanceType<ES> & InstanceType<FS>;

/**
 * Create unified state type that delegates to scoped states.
 */
export function UnifiedState<
    const ES extends State.Type,
    const FS extends State.Type
>(
    EndpointScope: ES,
    FabricScope: FS,
    behaviorName: string = "(behavior)",
) {
    let cacheSlot = cache.get(EndpointScope);
    if (cacheSlot) {
        const cached = cacheSlot.get(FabricScope);
        if (cached) {
            return cached as UnifiedState.Type<ES, FS>;
        }
    } else {
        cache.set(EndpointScope, cacheSlot = new WeakMap);
    }

    const g = new EndpointScope;
    const s = new FabricScope;

    function StateType(this: Internal, endpointScope: State, fabricScope: State | undefined, context: InvocationContext) {
        this[ENDPOINT_SCOPE] = endpointScope as State.Internal;
        this[FABRIC_SCOPE] = fabricScope as State.Internal;
        this[CONTEXT] = context;
        Object.seal(this);
    }

    StateType.prototype = new State;
    StateType.with = State.with;

    const descriptors = {} as PropertyDescriptorMap;
    for (const name in g) {
        descriptors[name] = createDescriptor(ENDPOINT_SCOPE, name, behaviorName);
    }
    for (const name in s) {
        descriptors[name] = createDescriptor(FABRIC_SCOPE, name, behaviorName);
    }
    Object.defineProperties(StateType.prototype, descriptors);

    cacheSlot.set(FabricScope, StateType as unknown as State.Type);

    return StateType as unknown as UnifiedState.Type<ES, FS>;
}

export namespace UnifiedState {
    export type Type<ES extends State.Type = State.Type, FS extends State.Type = State.Type> =
        new (
            endpointScope: InstanceType<ES>,
            fabricScope: InstanceType<FS> | undefined,
            context: InvocationContext
        ) => UnifiedState<ES, FS>;
}

/**
 * Cache for generated classes.
 */
const cache = new WeakMap<
    State.Type,
    WeakMap<
        State.Type,
        UnifiedState<any, any>
    >
>;

const ENDPOINT_SCOPE = Symbol("endpoint-scope");
const FABRIC_SCOPE = Symbol("fabric-scope");
const CONTEXT = Symbol("context");

interface Internal extends State.Internal {
    [ENDPOINT_SCOPE]: State.Internal;
    [FABRIC_SCOPE]?: State.Internal;
    [CONTEXT]: InvocationContext;
}

function createDescriptor(
    property: (typeof ENDPOINT_SCOPE) | (typeof FABRIC_SCOPE),
    name: string,
    behaviorName: string,
): PropertyDescriptor {
    const descriptor = {
        enumerable: true,
        configurable: false
    } as PropertyDescriptor;

    if (property === ENDPOINT_SCOPE) {
        descriptor.get = function(this: Internal) {
            return (this[ENDPOINT_SCOPE] as Record<string, any>)[name]
        }

        descriptor.set = function(this: Internal, value: any) {
            this[ENDPOINT_SCOPE][State.SET](name, value);
        }
    } else {
        descriptor.get = function(this: Internal) {
            if (this[FABRIC_SCOPE] === undefined) {
                throw new ImplementationError(`Illegal read of property ${behaviorName}.state.${name} outside fabric scope`);
            }
            return (this[FABRIC_SCOPE] as Record<string, any>)[name]
        }

        descriptor.set = function(this: Internal, value: any) {
            if (this[FABRIC_SCOPE] === undefined) {
                throw new ImplementationError(`Illegal write to property ${behaviorName}.state.${name} outside fabric scope`);
            }
            this[FABRIC_SCOPE][State.SET](name, value);
        }
    }

    return descriptor;
}
