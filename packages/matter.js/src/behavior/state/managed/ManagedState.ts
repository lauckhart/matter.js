/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValidationError } from "../../../common/MatterError.js";
import type { FabricIndex } from "../../../datatype/FabricIndex.js";
import { isDeepEqual } from "../../../util/DeepEqual.js";
import { GeneratedClass } from "../../../util/GeneratedClass.js";
import { Observable } from "../../../util/Observable.js";
import { camelize } from "../../../util/String.js";
import type { InvocationContext } from "../../InvocationContext.js";
import type { ClusterEvents } from "../../cluster/ClusterEvents.js";
import { State } from "../State.js";
import { Io } from "../io/Io.js";

/**
 * A cache of managed state implementation classes.
 */
const cache = new WeakMap<State.Type>();

const VALUES = Symbol("values");
const OWNER = Symbol("manager");

/**
 * These are the internal fields of managed state.  We can't use privates
 * because there is no static context for generated classes.  We use symbols
 * to avoid polluting the public interface.
 */
interface Internal extends State.Internal {
    [VALUES]: State.Internal & Record<string, any>;
    [OWNER]: ManagedState.Owner;
}

/**
 * The public {@link State} interface is a bare JS object but internally we
 * need wiring for validating writes and triggering events.  This function
 * creates a wrapper that performs those functions.
 *
 * This is a pure function for {@link type}.  It caches the generated class.
 */
export function ManagedState<T extends State.Type>(type: T, owner: ManagedState.Owner = {}) {
    let className, diagnosticsName: string;
    if (owner.name) {
        className = `${camelize(owner.name, true)}$${type.name}`;
        diagnosticsName = `${camelize(owner.name, false)}.state`;
    } else {
        className = `${type.name}$`;
        diagnosticsName = type.name;
    }

    // First check the cache
    const cached = cache.get(type);
    if (cached) {
        return cached as ManagedState.Type<T>;
    }

    // We add instance descriptors in preprocess() below
    const instanceDescriptors = {
        [State.SET]: {
            value: setter,
        },

        [OWNER]: {
            value: owner,
        },
    } as PropertyDescriptorMap;

    for (const name in new type()) {
        // Delegate all enumerable properties to the [VALUE] instance
        instanceDescriptors[name] = createDescriptor(name);
    }

    // Generate the class
    const managed = GeneratedClass({
        name: className,
        base: State,

        initialize(this: Internal, values, context) {
            this[VALUES] = new type() as (typeof this)[typeof VALUES];
            this[State.INITIALIZE](values, context);
        },

        instanceDescriptors,
        staticDescriptors: {
            schema: {
                get() {
                    return type.schema;
                },

                enumerable: true,
            },
        },
    });

    cache.set(type, managed);

    return managed as ManagedState.Type<T>;

    function setter(this: Internal, name: string, value: any, context?: InvocationContext) {
        const field = fields[name];

        const oldValue = this[VALUES][name];

        if (field?.fabricScoped) {
            const fabric = fabricFor(context);
            if (value === undefined || value === null) {
                value = [];
            }
            
        }

        if (isDeepEqual(oldValue, value)) {
            return;
        }

        if (!context) {
            context = this[State.CONTEXT] ?? {};
        }

        if (field) {
            try {
                if (field.fixed && this[OWNER].online) {
                    throw new ValidationError("Property is read-only");
                }

                field.validate?.(value, context);
            } catch (e) {
                if (e instanceof ValidationError) {
                    e.message = `Cannot set ${diagnosticsName}.${name}: ${e.message}`;
                }
                throw e;
            }
        }

        this[VALUES][name] = value;

        const observable = (context.behavior?.events as undefined | Record<string, Observable>)?.[`${name}$change`];
        if (observable instanceof Observable) {
            (observable as ClusterEvents.AttributeObservable).emit(value, oldValue, context);
        }
    }
}

export namespace ManagedState {
    export type Type<T extends State.Type> = {
        new (values?: Record<string, any>, context?: InvocationContext): InstanceType<T>;

        set: typeof State.set;
        with: typeof State.with;
        io: Io;
    };

    export interface Owner {
        readonly name?: string;
        readonly online?: boolean;
    }
}

function createDescriptor(name: string) {
    const descriptor: PropertyDescriptor = {
        get(this: Internal) {
            return this[VALUES][name];
        },

        set(this: Internal, value: any) {
            this[State.SET](name, value);
        },

        enumerable: true,
        configurable: false,
    };

    return descriptor;
}
