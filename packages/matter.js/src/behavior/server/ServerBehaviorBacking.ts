/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, FieldModel } from "../../model/index.js";
import { camelize } from "../../util/String.js";
import { Behavior } from "../Behavior.js";
import { BehaviorBacking } from "../BehaviorBacking.js";
import { InvocationContext } from "../InvocationContext.js";
import { Datasource } from "../state/managed/Datasource.js";
import { Val } from "../state/managed/Val.js";
import { SchemaManager } from "../state/managed/values/SchemaManager.js";

/**
 * This class backs the server implementation of a behavior.
 */
export class ServerBehaviorBacking extends BehaviorBacking {
    #datasource?: Datasource;

    /**
     * Obtain a managed state instance.
     */
    createState(context: InvocationContext) {
        return this.datasource.reference(context);
    }

    /**
     * Obtain the source of raw data that backs managed state instances.
     */
    get datasource() {
        const schemaManager = getSchemaManager(this.type);

        this.#datasource = Datasource({
            manager: schemaManager.valueManager,
            values: new this.type.State as Val.Struct,
            events: this.events as unknown as Datasource.Events,
        });

        return this.#datasource;
    }
}

/**
 * Obtaining a schema manager is relatively expensive so
 * {@link BehaviorSchemaManager} uses this cache to implement a pure function.
 */
const cache = new WeakMap<Behavior.Type, SchemaManager>();

/**
 * Obtain operational schema for a behavior.
 * 
 * Behaviors that extend another behavior may define additional elements that
 * aren't be represented in the schema.  This routine augments the schema for
 * a behavior with these elements.
 */
export function getSchemaManager(type: Behavior.Type): SchemaManager {
    const cached = cache.get(type);
    if (cached) {
        return cached;
    }

    let schema = type.schema;

    const props = new Set<string>();
    for (const field of schema.children) {
        props.add(camelize(field.name));
    }

    let cloned = false;
    for (const name in new type.State) {
        if (!props.has(name)) {
            if (!cloned) {
                schema = schema.clone();
            }

            schema.add(new FieldModel({
                name,
                type: "any",

                access: new Access({
                    readPriv: Access.Privilege.View,
                    writePriv: Access.Privilege.Operate,
                }),
            }))
        }
    }

    const manager = new SchemaManager(schema);

    cache.set(type, new SchemaManager(schema));

    return manager;
}
