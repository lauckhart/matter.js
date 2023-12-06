/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldElement } from "../../model/index.js";
import { GeneratedClass } from "../../util/GeneratedClass.js";
import { camelize } from "../../util/String.js";
import type { InvocationContext } from "../InvocationContext.js";
import { Schema } from "./Schema.js";
import { State } from "./State.js";
import { ValueManager } from "./managed/ValueManager.js";
import { StateManager } from "./managed/StateManager.js";
import { StructManagerMixin } from "./managed/StructManager.js";

/**
 * A cache of managed state implementation classes.
 */
const cache = new WeakMap<State.Type>();

/**
 * The public {@link State} interface is a bare JS object but internally we
 * need wiring for validation, eventing, transactions, etc.  This function
 * creates a wrapper that performs those functions.
 *
 * This is a pure function for {@link type}.  It caches the generated class.
 */
export function ManagedState<T extends State.Type>(type: T) {
    // First check the cache
    const cached = cache.get(type);
    if (cached) {
        return cached as ManagedState.Type<T>;
    }

    const ioFactory = new StateManager(type.schema);

    // Augment schema with any fields from the original cluster that are not
    // present in the original schema.  This allows overrides to define fields
    // using normal JS class semantics without manually updating the schema
    const schema = getSchema(type);

    // Generate the class
    const managed = GeneratedClass({
        name: `${type.schema.name}$State`,
        base: State,

        // We share implementation of properties with managed struct I/O
        mixins: [
            StructManagerMixin(ioFactory, type.schema)
        ],

        // Function signature here must match that of StructManagerMixin's
        // initializer
        initialize(this: Internal, owner: ) {
            Object.seal(this);

            for (const value of values) {

            }
            this[State.INITIALIZE](values, owner.context);
        },

        // Override the static schema
        staticDescriptors: {
            schema: {
                get() {
                    return schema;
                },

                enumerable: true,
            },
        },
    });

    cache.set(type, managed);

    return managed as ManagedState.Type<T>;
}

export namespace ManagedState {
    /**
     * {@link ManagedState()} returns a constructor with this signature.
     */
    export type Type<T extends State.Type = State.Type> = {
        new (values: InstanceType<T>, owner: ManagedState.Owner): InstanceType<T>;

        set: typeof State.set;
        with: typeof State.with;
        schema: Schema;
        io: ValueManager;
    };
}

function getSchema(type: State.Type) {
    let schema = type.schema;

    const props = new Set<string>();
    for (const field of schema.children) {
        props.add(camelize(field.name.toLowerCase()));
    }

    let cloned = false;
    for (const name in new type) {
        if (!props.has(name)) {
            if (!cloned) {
                schema = schema.clone();
            }

            schema.add({
                tag: FieldElement.Tag,
                name,
                type: "any",
            })
        }
    }

    return schema;
}
