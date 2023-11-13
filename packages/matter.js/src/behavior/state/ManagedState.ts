/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InvocationContext } from "../InvocationContext.js";
import { Observable } from "../../util/Observable.js";
import { State } from "./State.js";
import { StateManager } from "./StateManager.js";
import { ImplementationError } from "../../common/MatterError.js";

/**
 * A cache of managed state implementation classes.
 */
const cache = new WeakMap<State.Type>();

const MANAGER = Symbol("manager");
const CONTEXT = Symbol("context");
const VALUES = Symbol("values");

/**
 * These are the internal fields of managed state.  We can't use privates
 * because there is no static context for generated classes.  We use symbols
 * to avoid polluting the public interface.
 */
interface Internal extends State.Internal {
    [MANAGER]?: StateManager;
    [CONTEXT]?: InvocationContext;
    [VALUES]: Record<string, any>;
}

/**
 * Create a "managed state" class.  The public {@link State} interface is a
 * bare JS object but internally we need wiring for validating writes and
 * triggering events.  This class acts as a wrapper and performs those
 * functions.
 */
export function ManagedState<T extends State.Type>(type: T, behaviorName: string = "(behavior)") {
    // First check the cache
    const cached = cache.get(type);
    if (cached) {
        return cached as ManagedState.Type<T>;
    }

    // Instantiate the base to get property names and default values
    const defaults = new type;

    const fields = type.fields;

    // TS's gimpy mixin support makes defining classes inline kind of ugly,
    // so just define the class manually
    function StateType(this: Internal, values?: Record<string, any>, manager?: StateManager, context?: InvocationContext) {
        this[MANAGER] = manager;
        this[CONTEXT] = context;
        this[VALUES] = {
            ...defaults,
            ...values,
        };

        for (const key in this[VALUES]) {
            fields[key]?.validate?.(this[VALUES][key]);
        }

        Object.seal(this);
    }

    Object.assign(StateType.prototype, {
        [State.SET](this: Internal, name: string, value: any, context?: InvocationContext) {
            const oldValue = this[VALUES][name];
            if (oldValue === value) {
                return;
            }

            if (!context) {
                context = this[CONTEXT];
            }
            if (!context) {
                throw new ImplementationError("Managed state must either have context set or passed via SET");
            }

            const property = fields[name];
            if (property?.fixed) {
                throw new ImplementationError(`Illegal write to read-only property ${behaviorName}.state.${name}`);
            } else {
                property?.validate?.(value);
            }
        
            this[MANAGER]?.setStateValue(name, value, context);
            this[VALUES][name] = value;

            const observable = (context?.behavior?.events as undefined | Record<string, Observable>)?.[`${name}$change`];
            if (observable instanceof Observable) {
                observable.emit(value, oldValue, context);
            }
        },

        with: State.with,
        fields: fields,
    })

    const descriptors = {} as PropertyDescriptorMap;
    for (const name in defaults) {
        descriptors[name] = createDescriptor(name);
    }

    Object.defineProperties(StateType.prototype, descriptors);

    cache.set(type, StateType);

    return StateType as unknown as ManagedState.Type<T>;
}

export namespace ManagedState {
    export type Type<T extends State.Type> = {
        new (values?: Record<string, any>, manager?: StateManager, context?: InvocationContext): InstanceType<T>;
        with: typeof State.with;
        fields: State.FieldOptions;
    }
}

function createDescriptor(name: string) {
    const descriptor: PropertyDescriptor = {
        get(this: Internal) {
            return this[VALUES][name];
        },

        set(this: Internal, value: any) {
            this[State.SET](name, value, this[CONTEXT]);
        },

        enumerable: true,
        configurable: false
    }

    return descriptor;
}
