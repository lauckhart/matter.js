/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeModel, ClusterModel, FieldElement, FieldModel } from "../../model/index.js";
import { GeneratedClass } from "../../util/GeneratedClass.js";
import { camelize } from "../../util/String.js";
import type { InvocationContext } from "../InvocationContext.js";
import { Schema } from "./Schema.js";
import { State } from "./State.js";
import { Io } from "./io/Io.js";
import { IoFactory } from "./io/IoFactory.js";
import { StructManagerMixin } from "./io/manage/struct.js";

/**
 * A cache of managed state implementation classes.
 */
const cache = new WeakMap<State.Type>();

/**
 * The public {@link State} interface is a bare JS object but internally we
 * need wiring for validating writes and triggering events.  This function
 * creates a wrapper that performs those functions.
 *
 * This is a pure function for {@link type}.  It caches the generated class.
 */
export function ManagedState<T extends State.Type>(type: T, ioFactory: IoFactory) {
    // First check the cache
    const cached = cache.get(type);
    if (cached) {
        return cached as ManagedState.Type<T>;
    }

    // Augment schema with any fields from the original cluster that are not
    // present in the original schema.  This allows overrides to define fields
    // using normal JS class semantics without manually updating the schema
    const schema = getSchema(type);

    // Generate the class
    const managed = GeneratedClass({
        name: `${type.schema.name}$State`,
        base: State,

        mixins: [
            StructManagerMixin(ioFactory, type.schema)
        ],

        initialize(this: State.Internal, values, context) {
            this[State.INITIALIZE](values, context);
        },

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
    export type Type<T extends State.Type = State.Type> = {
        new (values?: Record<string, any>, context?: InvocationContext): InstanceType<T>;

        set: typeof State.set;
        with: typeof State.with;
        schema?: Schema;
        io: Io;
    };

    export interface Owner {
        readonly name?: string;
        readonly online?: boolean;
    }
}

function getSchema(type: State.Type) {
    let schema = type.schema;

    const props = new Set<string>();
    for (const field of schema.children) {
        props.add(camelize(field.name.toLowerCase()));
    }

    const PropModel = type instanceof ClusterModel ? AttributeModel : FieldModel;

    let cloned = false;
    for (const name in new type) {
        if (!props.has(name)) {
            if (!cloned) {
                schema = schema.clone();
            }

            schema.add(new PropModel({
                tag: FieldElement.Tag,
                name,
                type: "any",
            })
        }
    }

    return cloned;
}
