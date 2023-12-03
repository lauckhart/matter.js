/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../../common/MatterError.js";
import { ValueModel } from "../../../../model/index.js";
import type { Io } from "../Io.js";
import type { IoFactory } from "../IoFactory.js";
import { Schema } from "../../Schema.js";
import { isDeepEqual } from "../../../../util/DeepEqual.js";

/**
 * We must use a proxy to properly encapsulate array data.
 * 
 * This is ideal from a security and data quality perspective but not from a
 * performance perspective.
 * 
 * This can be worked around by replacing an entire array rather than just a
 * single field.  If that is insufficient we may need some type of batch
 * interface or provide a means for accessing the internal array directly.
 */
export function ListManager(
    factory: IoFactory,
    schema: Schema
): Io.Manage {
    const entry = schema instanceof ValueModel ? schema.listEntry : undefined;
    if (entry === undefined) {
        throw new ImplementationError(
            `List schema ${schema.path} has no entry definition`
        );
    }
    // We use this I/O to perform validated I/O on entries
    const { manage, read, write } = factory.get(entry);

    // Return an Io.Manage that manages reads and writes
    return (list, owner, context) => {
        // Sanity check
        if (!Array.isArray(list)) {
            throw new ImplementationError(
                `Cannot manage ${
                    typeof list
                } for ${
                    schema.path
                } because it is not an array`
            );
        }

        let target = list as Record<string, any>;

        return new Proxy(list, {
            // On read we return managed values if the schema is a struct or
            // array type
            get(_target, property, receiver) {
                if (typeof property === "string" && property.match(/^[0-9]+/)) {
                    let readOptions = owner.readOptions;
                    if (context?.owningFabric) {
                        readOptions = {
                            ...readOptions,
                            owningFabric: context?.owningFabric
                        };
                    }
                    return manage(
                        read(target[property], readOptions),
                        owner
                    );
                }

                return Reflect.get(target, property, receiver);
            },
    
            // On write we enter a transaction
            set(_target, property, newValue, receiver) {
                if (typeof property !== "string" || !property.match(/^[0-9]+/)) {
                    return Reflect.set(target, property, newValue, receiver);
                }

                const oldValue = target[property];
                if (isDeepEqual(oldValue, newValue)) {
                    return true;
                }

                if (target === list) {
                    if (owner.beginTransaction()) {
                        target = [ ...list ];
                    }
                }

                let writeOptions = owner.writeOptions;
                if (context?.owningFabric) {
                    writeOptions = {
                        ...writeOptions,
                        owningFabric: context?.owningFabric
                    };
                }

                target[property] = write(
                    newValue,
                    oldValue,
                    writeOptions
                );

                return true;
            }
        });
    }
}
