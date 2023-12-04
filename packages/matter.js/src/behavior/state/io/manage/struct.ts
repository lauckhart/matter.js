/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricIndex } from "../../../../datatype/FabricIndex.js";
import { ValueModel } from "../../../../model/index.js";
import { GeneratedClass } from "../../../../util/GeneratedClass.js";
import { camelize } from "../../../../util/String.js";
import type { Schema } from "../../Schema.js";
import type { Io } from "../Io.js";
import { IoError } from "../IoError.js";
import type { IoFactory } from "../IoFactory.js";
import { AccessControl } from "./access.js";
import { PrimitiveManager } from "./primitive.js";
import { ManagedReference } from "./reference.js";

/**
 * For structs we generate a class with accessors for each property in the
 * schema.
 */
export function StructManager(
    factory: IoFactory,
    schema: Schema
): Io.Manage {
    let Wrapper = GeneratedClass({
        name: `${schema.name}$Wrapper`,

        ...StructManagerMixin(factory, schema)
    }) as new (value: Io.Val, options: Io.Options) => Io.Struct

    return (value, options) => {
        return new Wrapper(value, options);
    }
}

const REF = Symbol("value");
const OPTIONS = Symbol("options");
const CONTEXT = Symbol("context");
const MANAGERS = Symbol("properties");

interface Wrapper extends Io.Struct {
    /**
     * A reference to the proxied value.
     */
    [REF]: Io.ValueReference<Io.Struct>;

    /**
     * The owner of the data structure.
     */
    [OPTIONS]: Io.Options;

    /**
     * Contextual information about the wrapped value.
     */
    [CONTEXT]?: Io.ValueContext;

    /**
     * Managed values for container fields.
     */
    [MANAGERS]?: Record<string, Io.Val>;
}

/**
 * Configure struct behavior as a mixin.
 * 
 * StructManager and ManagedState both use this to implement struct fields
 * based on schema.
 */
export function StructManagerMixin(factory: IoFactory, schema: Schema): GeneratedClass.Mixin {
    const instanceDescriptors = {} as PropertyDescriptorMap;

    for (const member of schema.members) {
        instanceDescriptors[camelize(member.name, false)] = createPropertyDescriptor(factory, member);
    }
    
    return {
        initialize(this: Wrapper, ref: Io.ValueReference, options: Io.Options, context?: Io.ValueContext) {
            // Only objects are acceptable
            if (typeof ref.value !== "object" || Array.isArray(ref.value)) {
                throw new IoError.SchemaError(
                    schema,
                    `Cannot manage ${
                        typeof ref.value
                    } because it is not a struct`
                )
            }

            // If we are a root property on the
            if (factory.members.has(schema as ValueModel)) {
                context = { ...context, property: schema as ValueModel };
            }

            this[REF] = ref as Io.ValueReference<Io.Struct>;
            this[OPTIONS] = options;
            this[CONTEXT] = context;
        },

        instanceDescriptors
    }
}

function createPropertyDescriptor(factory: IoFactory, schema: Schema): PropertyDescriptor {
    const name = camelize(schema.name);
    let { read, write, manage } = factory.get(schema);

    const limits = AccessControl.get

    // For primitives we don't need a manager so just proxy writes directly
    if (manage === PrimitiveManager) {
        return {
            get(this: Wrapper) {
                return read(
                    this[REF].value[name],
                    this[OPTIONS],
                    this[CONTEXT]
                );
            },

            set(this: Wrapper, value: Io.Val) {
                this[REF].changed = true;
                this[REF].value[name] = write(
                    value,
                    this[REF].value[name],
                    this[OPTIONS],
                    this[CONTEXT]
                );
            }
        }
    }

    return {
        get(this: Wrapper) {
            let managed = this[MANAGERS]?.[name];
            if (managed) {
                return managed;
            }

            const ref = ManagedReference(
                this[REF],
                name,
                value => ({ ...(value as Io.Struct) })
            );

            managed = manage(
                ref,
                this[OPTIONS],
                hasFabricIndex
                    ? {
                        ...this[CONTEXT],
                        owningFabric: this[REF].value.owningFabric as FabricIndex
                    }
                    : this[CONTEXT]
            )

            if (this[MANAGERS]) {
                this[MANAGERS][name] = managed;
            } else {
                this[MANAGERS] = { [name]: managed };
            }

            return read(
                managed;
        },

        set(this: Wrapper, value: Io.Val) {
            // Uh. No.
            this[REF].value[name] = value;
        }
    }
}
