/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { GeneratedClass } from "../../../util/GeneratedClass.js";
import { camelize } from "../../../util/String.js";
import type { Schema } from "../Schema.js";
import type { ValueManager } from "../ValueManager.js";
import type { StateManager } from "../StateManager.js";
import { PrimitiveManager } from "./primitive.js";
import { ManagedReference } from "./reference.js";
import { Val } from "../Val.js";
import { AccessEnforcer } from "../../AccessEnforcer.js";
import { SchemaError } from "../../errors.js";

/**
 * For structs we generate a class with accessors for each property in the
 * schema.
 */
export function StructManager(
    factory: StateManager,
    schema: Schema
): ValueManager.Manage {
    let Wrapper = GeneratedClass({
        name: `${schema.name}$Wrapper`,

        ...StructManagerMixin(factory, schema)
    }) as new (value: Val, session: AccessEnforcer.Session) => Val.Struct

    return (value, session) => {
        return new Wrapper(value, session);
    }
}

const REF = Symbol("value");
const SESSION = Symbol("options");
const CONTEXT = Symbol("context");
const MANAGERS = Symbol("properties");

interface Wrapper extends Val.Struct {
    /**
     * A reference to the proxied value.
     */
    [REF]: Val.Reference<Val.Struct>;

    /**
     * The owner of the data structure.
     */
    [SESSION]: AccessEnforcer.Session;

    /**
     * Contextual information about the wrapped value.
     */
    [CONTEXT]?: AccessEnforcer.Context;

    /**
     * Managed values for container fields.
     */
    [MANAGERS]?: Record<string, Val>;
}

/**
 * Configure struct behavior as a mixin.
 * 
 * StructManager and ManagedState both use this to implement struct fields
 * based on schema.
 */
export function StructManagerMixin(factory: StateManager, schema: Schema): GeneratedClass.Mixin {
    const instanceDescriptors = {} as PropertyDescriptorMap;
    let hasFabricIndex = false;

    for (const member of schema.members) {
        instanceDescriptors[camelize(member.name, false)] = createPropertyDescriptor(factory, member);
        if (member.name === "FabricIndex") {
            hasFabricIndex = true;
        }
    }
    
    return {
        initialize(this: Wrapper, ref: Val.Reference, session: AccessEnforcer.Session, context?: AccessEnforcer.Context) {
            // Only objects are acceptable
            if (typeof ref.value !== "object" || Array.isArray(ref.value)) {
                throw new SchemaError(
                    schema,
                    `Cannot manage ${
                        typeof ref.value
                    } because it is not a struct`
                )
            }

            // If we have a fabric index, update the context
            if (hasFabricIndex) {
                const owningFabric = (ref as Val.Reference<Val.Struct>).value.fabricIndex as FabricIndex | undefined
                context = { ...context, owningFabric }
            }

            this[REF] = ref as Val.Reference<Val.Struct>;
            this[SESSION] = session;
            this[CONTEXT] = context;
        },

        instanceDescriptors
    }
}

function createPropertyDescriptor(manager: StateManager, schema: Schema): PropertyDescriptor {
    const name = camelize(schema.name);
    let { access, manage, validate } = manager.get(schema);

    let descriptor: PropertyDescriptor = {
        set(this: Wrapper, value: Val) {
            access.authorizeWrite(this[SESSION], this[CONTEXT]);

            // Note: We validate fully for nested structs but *not* for the
            // current struct.  This is because choice conformance may be
            // violated temporarily as individual fields change.
            //
            // Also, validating fully would require us to validate across all
            // properties for every property write.
            //
            // I think this is OK for now.  If it becomes an issue we'll
            // probably want to wire in a separate validation step that is
            // performed on commit when choice conformance is in play.
            validate(value, { siblings: this[REF].value });

            this[REF].changed = true;
            this[REF].value[name] = value;
        }
    };

    if (manage === PrimitiveManager) {
        // For primitives we don't need a manager so just proxy reads directly
        descriptor.get = function(this: Wrapper) {
            if (access.mayRead(this[SESSION], this[CONTEXT])) {
                return this[REF].value[name];
            }
        };
    } else {
        // For collections we create a managed value
        descriptor.get = function(this: Wrapper) {
            if (!access.mayRead(this[SESSION], this[CONTEXT])) {
                return undefined;
            }

            let managed = this[MANAGERS]?.[name];
            if (managed) {
                return managed;
            }

            const assertWriteOk = (value: Val) => {
                // Note - this needs to mirror behavior in the setter above
                access.authorizeWrite(this[SESSION], this[CONTEXT]);
                validate(value, { siblings: this[REF].value });
            }

            const cloneContainer = (container: Val) => {
                return {
                    ...(container as Val.Struct)
                };
            }

            const ref = ManagedReference(
                this[REF],
                name,
                assertWriteOk,
                cloneContainer,
            );

            managed = manage(
                ref,
                this[SESSION],
                this[CONTEXT],
            );

            if (this[MANAGERS]) {
                this[MANAGERS][name] = managed;
            } else {
                this[MANAGERS] = { [name]: managed };
            }

            return managed;
        }
    }

    return descriptor;
}
