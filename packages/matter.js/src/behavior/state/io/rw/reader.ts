/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../../cluster/Cluster.js";
import { FabricIndex } from "../../../../datatype/FabricIndex.js";
import { StatusCode } from "../../../../protocol/interaction/InteractionProtocol.js";
import { Access, ClusterModel, Metatype, ValueModel,  } from "../../../../model/index.js";
import { Io } from "../Io.js";
import type { IoFactory } from "../IoFactory.js";
import { assertArray, assertStruct, getListIndex } from "./rw-util.js";
import { camelize } from "../../../../util/String.js";
import { Schema } from "../../Schema.js";
import { IoError } from "../IoError.js";

/**
 * Generate a function that performs a data read.  The read transforms the
 * input value into an appropriate output value based on the path, accessing
 * fabric and access level of the current session.
 * 
 * @param options reader configuration
 * @param factory used by the reader to generate sub-value readers
 * @returns the read function
 */
export function IoReader(schema: Schema, factory: IoFactory): Io.Read {    
    const accessLevel = accessLevelFor(schema);

    // Special case ClusterModel because it does not have access contorls
    if (schema instanceof ClusterModel) {
        return createStructReader(factory, schema, accessLevel);
    }

    const metatype = schema.effectiveMetatype;
    const writeOnly = !schema.effectiveAccess.readable;

    if (!schema.effectiveAccess.readable) {
        return () => {
            throw new IoError.ReadError(
                schema,
                `Read from write-only value`,
                StatusCode.UnsupportedRead
            );
        }
    }

    let reader: Io.Read;
    switch (metatype) {
        case Metatype.array:
            reader = createListReader(factory, schema, accessLevel);

        case Metatype.object:
            reader = createStructReader(factory, schema, accessLevel);

        default:
            reader = createAtomReader(schema, accessLevel);
    }

    if (writeOnly) {
        const nextReader = reader;
        return (value, options) => {
            if (!options?.offline) {
                throw new IoError.ReadError(
                    schema,
                    `Read from write-only value ${schema.path}`,
                    StatusCode.UnsupportedRead
                );
            }
            return nextReader(value, options);
        }
    }

    return reader;
}

function accessLevelFor(schema: Schema) {
    if (schema instanceof ClusterModel) {
        return AccessLevel.View;
    }

    return Access.PrivilegePriority[schema.effectiveAccess.readPriv ?? Access.Privilege.View] as AccessLevel;
}

/**
 * Authorize fabric access.
 * 
 * If offline, only enforces when options.accessingFabric is defined.  When
 * online options.accessingFabric is required when context.owningFabric
 * is defined.
 */
function isFabricAuthorized(schema: Schema, options: Io.RwOptions | undefined, context: Io.ValueContext | undefined) {
    const owningFabric = context?.owningFabric;
    if (owningFabric === undefined) {
        return true;
    }

    const accessingFabric = options?.accessingFabric;
    if (accessingFabric === undefined) {
        if (options?.offline) {
            return true;
        }

        throw new IoError.ReadError(
            schema,
            `Illegal read without fabric`
        );
    }

    return accessingFabric === owningFabric;
}

/**
 * Enforce R/W privileges when online.
 * 
 * When offline this is a no-op.
 */
function assertAuthorized(schema: Schema, accessLevel: AccessLevel, options?: Io.RwOptions) {
    if (options?.offline) {
        return;
    }

    if (options?.accessLevel === undefined || options?.accessLevel >= accessLevel) {
        throw new IoError.ReadError(
            schema,
            `Access denied`,
            StatusCode.UnsupportedRead
        );
    };
}

function createAtomReader(schema: Schema, accessLevel: AccessLevel): Io.Read {
    return (item, options) => {
        if (options?.path?.length) {
            throw new IoError.ReadError(
                schema,
                `Illegal access to sub-field ${options.path[0]} of non-container`,
                StatusCode.UnsupportedAttribute
            );
        }

        assertAuthorized(schema, accessLevel, options);

        return item;
    }
}

function createPropertyReader(factory: IoFactory, schema: Schema, fieldName: string) {
    const reader = factory.get(schema).read;
    const accessLevel = accessLevelFor(schema);

    // Per specification, fabric sensitivity is only valid for properties of a
    // structure
    const fabricSensitive = schema instanceof ValueModel && schema.effectiveAccess.fabric === Access.Fabric.Sensitive;

    return (source: Io.Struct, options?: Io.RwOptions, context?: Io.ValueContext) => {
        // Ignore properties for which access level is too low
        if (options?.accessLevel !== undefined && options?.accessLevel < accessLevel) {
            return;
        }

        // Ignore sensitive properties from different fabric
        if (fabricSensitive && !isFabricAuthorized(schema, options, context)) {
            return;
        }

        const value = source[fieldName];
        if (value === undefined) {
            return value;
        }

        return reader(value, options);
    }
}

type PropertyReader = ReturnType<typeof createPropertyReader>;

function createPropertyReaders(factory: IoFactory, fields: ValueModel[], readerIndex: Record<number | string, PropertyReader>) {
    const readers = {} as Record<string, ReturnType<typeof createPropertyReader>>;

    for (const field of fields) {
        const fieldName = camelize(field.name, false);
        const reader = createPropertyReader(factory, field, fieldName);
        readers[fieldName] = reader;

        readerIndex[fieldName] = reader;
        const childId = field.effectiveId;
        if (childId !== undefined) {
            readerIndex[childId] = reader;
        }
    }

    return readers;
}

function createStructReader(
    factory: IoFactory,
    schema: Schema,
    accessLevel: AccessLevel
): Io.Read {
    const readerIndex = {} as Record<number | string, PropertyReader>;
    const readers = createPropertyReaders(factory, schema.members, readerIndex);

    return (item, options, context) => {
        assertAuthorized(schema, accessLevel, options);

        if (item === undefined || item === null) {
            return item;
        }

        assertStruct(schema, item);

        const owningFabric = item.fabricIndex as FabricIndex | undefined;
        if (typeof owningFabric === "number") {
            context = {
                ...context,
                owningFabric: owningFabric,
            }
        }

        if (options?.path?.length) {
            const reader = readerIndex[options.path[0]];
            
            if (reader === undefined) {
                throw new IoError.ReadError(
                    schema,
                    `Read of unknown struct property ${options.path[0]}`,
                    StatusCode.UnsupportedAttribute
                );
            }

            return reader(item, { ...options, path: options.path.slice(1) });
        }

        const result = {} as Record<string, Io.Val>;
        for (const propName in readers) {
            const value = readers[propName](item, options, context);
            if (value !== undefined) {
                result[propName] = value;
            }
        }

        return result;
    }
}

function createListReader(factory: IoFactory, schema: ValueModel, accessLevel: AccessLevel): Io.Read {
    // Per specification, fabric scope applies only to lists
    const fabricScoped = schema.effectiveAccess.fabric === Access.Fabric.Scoped;

    const entry = schema.listEntry;
    if (entry === undefined) {
        throw new IoError.SchemaError(
            schema,
            `List schema has no entry type`
        );
    }
    let entryReader = factory.get(entry).read;

    return (item, options, context) => {
        if (item === undefined || item === null) {
            return item;
        }

        assertAuthorized(
            schema,
            accessLevel,
            options
        );

        if (fabricScoped && options?.fabricFiltered) {
            const accessingFabric = options?.accessingFabric;
            if (accessingFabric === undefined) {
                throw new IoError.SchemaError(
                    schema,
                    `Fabric filtering requested without accessing fabric`
                );
            }

            assertArray(schema, item);
            item = item.filter(child => {
                assertStruct(schema, child);
                child.fabricIndex === accessingFabric
            });
        }
        assertArray(schema, item);

        if (options?.path?.length) {
            const index = getListIndex(schema, options.path);

            if (index > item.length) {
                throw new IoError.ReadError(
                    schema,
                    `List index ${index} is out of range`,
                    StatusCode.UnsupportedAttribute
                )
            }

            const subitem = item[index];
            if (subitem === undefined) {
                if (options.path.length > 1) {
                    throw new IoError.ReadError(
                        schema,
                        `Cannot access index ${index} because list is undefined`,
                        StatusCode.UnsupportedAttribute
                    )
                }
                return subitem;
            }

            return entryReader(subitem, { ...options, path: options.path.slice(1) }, context);
        }

        return item.map(child => entryReader?.(child, options));
    }
}
