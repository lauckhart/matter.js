/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldModel } from "../../model/index.js";
import { GeneratedClass } from "../../util/GeneratedClass.js";
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
    // Base state has no properties

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
    static readonly schema = new FieldModel({ name: "Empty" });
}

export namespace State {
    export type WithOptions = {
        name?: string;
        schema?: Schema;
    };

    /**
     * Generic state class type.
     */
    export type Type<T extends object = {}> = {
        new (): State & T;
        schema: Schema;
        set: typeof State.set;
        with: typeof State.with;
    };
}
