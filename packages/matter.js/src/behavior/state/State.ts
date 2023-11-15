/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InvocationContext } from "../InvocationContext.js";

/**
 * Mutable state for a behavior.
 * 
 * State is either "global" or "scoped".  Scoped state is scoped to a Matter
 * fabric.  Each behavior has a separate class for global and scoped state.
 */
export class State {
    // Default state has no properties

    /**
     * You may extend state using normal subclassing or by using this method
     * which overrides and/or adds properties.
     */
    static with<This extends State.Type, T extends object>(
        this: This,
        defaults: T,
        fields: State.FieldOptions = {}
    ) {
        fields = {
            ...this.fields,
            ...fields
        };

        // TypeScript has a weird limitation on mixins, thus the ugly cast in
        // the next line
        class SpecializedState extends (this as unknown as new (...args: any[]) => State) {
            constructor() {
                super();

                Object.assign(this, defaults);
            }

            static fields = fields;
        }
        
        return SpecializedState as unknown as State.Type<InstanceType<This> & T>;
    }

    /**
     * Derivatives may customize handling of state values here.  Fields are
     * optional and convey field-level detail that cannot be captured using
     * standard JS semantics.
     */
    static fields = {} as State.FieldOptions;
}

(State.prototype as any)[State.SET] = function(name: string, value: any, _context?: InvocationContext) {
    (this as any)[name] = value;
}

export namespace State {
    /**
     * Key for low-level setter.
     */
    export const SET = Symbol("SET");

    /**
     * This internal view of state exposes a low-level set method.  This method
     * allows the caller to convey context when performing a set.
     */
    export interface Internal extends State {
        [SET](name: string, value: any, context?: InvocationContext): void;
    }

    /**
     * Field options.  These are affect class generation in ManagedState.
     */
    export interface FieldConfiguration {
        fixed?: boolean;
        validate?: (value: any) => void;
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
        with: typeof State.with;
        fields: FieldOptions;
    }
}
