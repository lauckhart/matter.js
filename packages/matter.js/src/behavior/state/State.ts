/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../common/MatterError.js";
import { GeneratedClass } from "../../util/GeneratedClass.js";
import type { InvocationContext } from "../InvocationContext.js";
import { Schema } from "./Schema.js";

export const SCHEMA = Symbol("schema");
export interface StaticInternal extends State.Type {
    [SCHEMA]: Schema
}

/**
 * Mutable state for a behavior.
 *
 * State is either "global" or "scoped".  Scoped state is scoped to a Matter
 * fabric.  Each behavior has a separate class for global and scoped state.
 *
 * The public interface for state is just a JS object.  {@link State.Internal}
 * is an additional semi-public interface you may access by casting.
 */
export class State {
    // Default state has no properties

    constructor() {
        (this as unknown as State.Internal)[State.CONTEXT] = undefined;
    }

    /**
     * Obtain a new state type with different default values.
     */
    static set<This extends State.Type, T extends object>(this: This, defaults: T) {
        const oldDefaults = new this() as Record<string, any>;
        let newDefaults: Record<string, any> | undefined;
        for (const name in defaults) {
            if (name in oldDefaults) {
                if (oldDefaults[name] !== defaults[name]) {
                    if (newDefaults === undefined) {
                        newDefaults = {};
                    }
                    newDefaults[name] = defaults[name];
                }
            }
        }

        if (newDefaults) {
            return this.with(newDefaults) as unknown as This;
        }

        return this;
    }

    /**
     * You may extend state using normal subclassing or by using this method
     * which overrides and/or adds properties.
     */
    static with<This extends State.Type, T extends object>(this: This, defaults: T, options?: State.WithOptions) {
        return GeneratedClass({
            name: options?.name ?? `${this.name}$`,
            base: this,
            instanceProperties: defaults,
        }) as State.Type<InstanceType<This> & T>;
    }

    /**
     * State structure and legal I/O operations are determined using Matter
     * schema.
     */
    static get schema() {
        const internal = this as unknown as StaticInternal;
        if (internal[SCHEMA] === undefined) {
            internal[SCHEMA] = Schema.Simple(Object.keys(new this));
        }
        return (this as unknown as StaticInternal)[SCHEMA];
    }
}

export namespace State {
    export const INITIALIZE = Symbol("INITIALIZE");
    export const CONTEXT = Symbol("CONTEXT");
    export const TRANSACTION = Symbol("TRANSACTION");
    export const COMMIT = Symbol("COMMIT");

    /**
     * This "internal" view of state exposes methods we don't want to bother
     * the user with.  We achieve this by using symbols and omitting them from
     * the default interface.
     */
    export interface Internal extends State {
        /**
         * Information about the context in which the state is accessed.
         */
        [CONTEXT]: InvocationContext | undefined;

        /**
         * Initialize.  This is separate from construction so we can seal the
         * object.  If a derivative will not be subclassed it may initialize in
         * its constructor.
         */
        [INITIALIZE](values?: Record<string, any>, context?: InvocationContext): void;
    }

    export type WithOptions = {
        name?: string;
        schema?: Schema;
    };

    /**
     * Generic state class type.
     */
    export type Type<T extends object = {}> = {
        new (values?: Record<string, any>, context?: InvocationContext): State & T;
        schema: Schema;
        set: typeof State.set;
        with: typeof State.with;
    };
}

Object.assign(State.prototype, {
    [State.INITIALIZE](this: State.Internal, values?: Record<string, any>, context?: InvocationContext): void {
        Object.seal(this);

        this[State.CONTEXT] = context;

        if (values) {
            for (const name in values) {
                if (!(name in this)) {
                    throw new ImplementationError(`State property "${name}" is not supported`);
                }
                (this as any)[name] = values[name];
            }
        }
    },

    [State.COMMIT]() {
        throw new ImplementationError(
            "Transactionality unsupported on unmanaged state"
        );
    }
});
