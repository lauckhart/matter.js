/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../common/MatterError.js";
import { GeneratedClass } from "../../util/GeneratedClass.js";
import type { InvocationContext } from "../InvocationContext.js";

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
    static set<This extends State.Type, T extends object>(
        this: This,
        defaults: T
    ) {
        const oldDefaults = new this as Record<string, any>;
        let newDefaults: Record<string, any> | undefined;
        for (const name in defaults) {
            if (oldDefaults.hasOwnProperty(name)) {
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
    static with<This extends State.Type, T extends object>(
        this: This,
        defaults: T,
        options?: State.WithOptions,
    ) {
        const staticProps = {} as { fields?: State.FieldOptions };
        if (options?.fields) {
            staticProps.fields = options.fields;
        }
        
        return GeneratedClass({
            name: options?.name ?? `${this.name}$`,
            base: this,
            instanceProperties: defaults,
            staticProperties: staticProps
        }) as State.Type<InstanceType<This> & T>;
    }

    /**
     * Derivatives may customize handling of state values here.  Fields are
     * optional and convey field-level detail that cannot be captured using
     * standard JS semantics.
     */
    static fields = {} as State.FieldOptions;
}

export namespace State {
    export const SET = Symbol("SET");
    export const INITIALIZE = Symbol("SET");
    export const CONTEXT = Symbol("CONTEXT");

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
         * Low-level setter.  This operates the same as calling "set" but
         * allows for override of the invocation context.
         */
        [SET](name: string, value: any, context?: InvocationContext): void;

        /**
         * Initialize.  This is separate from construction so we can seal the
         * object.  If a derivative will not be subclassed it can initialize in
         * its constructor.
         */
        [INITIALIZE](values?: Record<string, any>, context?: InvocationContext): void;
    }

    /**
     * The base State class does not use these but it carries as metadata for
     * configuration of ManagedState.
     */
    export interface FieldConfiguration {
        fixed?: boolean;
        validate?: (value: any, context: InvocationContext) => void;
    }

    export type WithOptions = {
        name?: string;
        fields?: FieldOptions;
    }

    /**
     * A set of field options.
     */
    export type FieldOptions = Record<string, FieldConfiguration | undefined>;

    /**
     * Generic state class type.
     */
    export type Type<T extends object = {}> = {
        new (values?: Record<string, any>, context?: InvocationContext): State & T;
        set: typeof State.set;
        with: typeof State.with;
        fields: FieldOptions;
    }
}

Object.assign(State.prototype, {
    [State.SET](name: string, value: any) {
        (this as any)[name] = value;
    },

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
});
