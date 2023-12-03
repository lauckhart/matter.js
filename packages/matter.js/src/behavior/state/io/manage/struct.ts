/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../../common/MatterError.js";
import { FabricIndex } from "../../../../datatype/FabricIndex.js";
import { AttributeModel } from "../../../../model/index.js";
import { isDeepEqual } from "../../../../util/DeepEqual.js";
import { GeneratedClass } from "../../../../util/GeneratedClass.js";
import { camelize } from "../../../../util/String.js";
import { Schema } from "../../Schema.js";
import { Io } from "../Io.js";
import { IoFactory } from "../IoFactory.js";

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
    }) as new (value: Io.Val, owner: Io.ValueOwner) => Io.Struct

    return (value, owner) => {
        return new Wrapper(value, owner);
    }
}

const VALUE = Symbol("value");
const TARGET = Symbol("target");
const OWNER = Symbol("owner");
const CONTEXT = Symbol("context");

interface Wrapper extends Io.Struct {
    /**
     * The original value.
     */
    [VALUE]: Io.Struct;

    /**
     * The target for accessors.  May be different than VALUE if in a transaction.
     */
    [TARGET]: Io.Struct;

    /**
     * The owner of the wrapped value.
     */
    [OWNER]: Io.ValueOwner;

    /**
     * Contextual information about the wrapped value.
     */
    [CONTEXT]?: Io.ValueContext;
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
        initialize(this: Wrapper, value: Io.Val, owner: Io.ValueOwner, context?: Io.ValueContext) {
            if (typeof value !== undefined) {
                throw new ImplementationError(
                    `Cannot manage ${
                        typeof value
                    } for ${
                        schema.path
                    } because it is not an object`
                )
            }
            this[TARGET] = this[VALUE] = value as Io.Struct;
            this[OWNER] = owner;
            this[CONTEXT] = context;
        },

        instanceDescriptors
    }
}

function createPropertyDescriptor(factory: IoFactory, schema: Schema): PropertyDescriptor {
    const name = camelize(schema.name);
    let { read, write, manage } = factory.get(schema);

    // The owning attribute and fabric come from structs.  This upgrades the
    // context to include those values if appropriate
    const attribute = schema instanceof AttributeModel ? schema : undefined;
    const hasFabricIndex = schema.children.some(child => child.name === "FabricIndex");
    function augmentContext(wrapper: Wrapper) {
        let context = wrapper[CONTEXT];

        if (attribute) {
            context = { ...context, attribute };
        }

        if (hasFabricIndex) {
            context = { ...context, owningFabric: wrapper.fabricIndex as FabricIndex | undefined};
        }

        return context;
    }

    return {
        get(this: Wrapper) {
            manage(
                read(
                    this[TARGET][name],
                    this[OWNER].readOptions,
                    this[CONTEXT],
                ),
                this[OWNER],
                augmentContext(this)
            );
        },

        set(this: Wrapper, value: Io.Val) {
            const oldValue = this[TARGET][name];
            if (isDeepEqual(oldValue, value)) {
                return true;
            }

            if (this[TARGET] === this[VALUE]) {
                if (this[OWNER].beginTransaction()) {
                    this[TARGET] = { ...this[VALUE] };
                }
            }

            this[TARGET][name] = write(
                value,
                oldValue,
                this[OWNER].writeOptions,
                this[CONTEXT]
            )
        }
    }
}
