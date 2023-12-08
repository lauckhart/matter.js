/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, FieldElement, FieldModel } from "../../model/index.js";
import { camelize } from "../../util/String.js";
import type { InvocationContext } from "../InvocationContext.js";
import { Schema } from "./Schema.js";
import { State } from "./State.js";
import { RootManager } from "./managed/values/RootManager.js";
import { Datasource } from "./managed/Datasource.js";
import { Val } from "./managed/Val.js";
import { EventEmitter } from "../../util/Observable.js";
import { Behavior } from "../Behavior.js";

/**
 * The public {@link State} interface is a bare JS object but internally we
 * need wiring for validation, eventing, transactions, etc.
 * 
 * ManagedState is a factory for managed {@link State} instances that perform
 * these functions for an {@link InvocationContext}.
 * 
 * This is the primary function of the files in this folder.  The sub-folders
 * implement various aspects of state management.
 */
export class ManagedState<B extends Behavior.Type = Behavior.Type> {
    #behavior: B;
    #datasource?: Datasource;
    #events?: InstanceType<B["Events"]>;

    constructor(behavior: B) {
        this.#behavior = behavior;
    }

    /**
     * Access the {@link EventEmitter} for datasource events.
     */
    get events() {
        if (this.#events === undefined) {
            this.#events = new this.#behavior.Events as InstanceType<B["Events"]>;
        }
        return this.#events;
    }

    /**
     * Load persisted values.
     */
    async initialize() {
        this.#source.initialize();
    }

    /**
     * Obtain a {@link Behavior.State} instance managed for {@link context}.
     */
    forContext(context: InvocationContext): InstanceType<B["State"]> {
        return this.#source.reference(context) as InstanceType<B["State"]>;
    }

    get #source() {
        if (this.#datasource === undefined) {
            const schema = getSchema(this.#behavior.State);

            const stateManager = new RootManager(schema);
            const rootValueManager = stateManager.get(schema, this.#behavior.State);
    
            this.#datasource = Datasource({
                manager: rootValueManager,
                values: new this.#behavior.State as Val.Struct,
                events: this.events as unknown as Datasource.Events,
            });
        }
        return this.#datasource;
    }
}

/**
 * We store the schema we generate for types so we don't need to recompute for
 * every cluster.  Also, {@link RootManager} uses the schema as a cache key
 * so reusing instances enables that cache as well.
 */
const schemaCache = new WeakMap<State.Type, Schema>();

/**
 * Augment {@link Schema} with any fields from the original state that are not
 * present in the original schema.  This allows overrides to define fields
 * using normal JS class semantics without manually updating the schema.
 * 
 * These fields receive default access levels of View for read and Operate for
 * write.  These fields are not publicly writable like attributes are however,
 * so implementations can rely on command access controls if access should be
 * more limited.
 */
function getSchema(type: State.Type) {
    const cached = schemaCache.get(type);
    if (cached) {
        return cached;
    }

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

            schema.add(new FieldModel({
                tag: FieldElement.Tag,
                name,
                type: "any",

                access: new Access({
                    readPriv: Access.Privilege.View,
                    writePriv: Access.Privilege.Operate,
                }),
            }))
        }
    }

    schemaCache.set(type, schema);

    return schema;
}
