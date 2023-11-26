/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { FabricIndex } from "../../../datatype/FabricIndex.js";
import { StatusResponseError } from "../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../protocol/interaction/InteractionProtocol.js";
import { camelize } from "../../../util/String.js";
import { Access, AttributeModel, ClusterModel, Metatype, ValueModel,  } from "../../../model/index.js";
import type { Io } from "./Io.js";
import type { IoFactory } from "./IoFactory.js";

/**
 * Generate a function that performs a data read.  The read transforms the
 * input value into an appropriate output value based on the path, accessing
 * fabric and access level of the current session.
 * 
 * @param options reader configuration
 * @param factory used by the reader to generate sub-value readers
 * @returns the read function
 */
export function IoReader(schema: ClusterModel | ValueModel, factory: IoFactory): Io["read"] {    
    const accessLevel = accessLevelFor(schema);
    if (schema instanceof ClusterModel) {
        return createStructReader(factory, factory.attributes, accessLevel);
    }

    const metatype = schema.effectiveMetatype;

    if (!schema.effectiveAccess.readable) {
        return () => {
            throw new StatusResponseError("Value is write-only", StatusCode.UnsupportedRead);
        }
    }

    switch (metatype) {
        case Metatype.array:
            return createListReader(factory, schema, accessLevel);

        case Metatype.object:
            return createStructReader(factory, schema.children, accessLevel);

        default:
            return createAtomReader(accessLevel);

    }
}

function accessLevelFor(schema: ClusterModel | ValueModel) {
    if (schema instanceof ClusterModel) {
        return AccessLevel.View;
    }

    return Access.PrivilegePriority[schema.effectiveAccess.readPriv ?? Access.Privilege.View] as AccessLevel;
}

function isFabricAuthorized(options?: Io.RwOptions) {
    return options?.owningFabric === undefined
        || options?.accessingFabric === undefined
        || options.owningFabric === options.accessingFabric;
}

function assertAuthorized(accessLevel: AccessLevel, options?: Io.RwOptions) {
    if (options?.accessLevel !== undefined && options.accessLevel >= accessLevel) {
        throw new StatusResponseError("Access denied", StatusCode.UnsupportedRead);
    };
}

function createAtomReader(accessLevel: AccessLevel): Io["read"] {
    return (item, options) => {
        if (options?.path?.length) {
            throw new StatusResponseError(
                `Path "${
                    options.path.join(".")
                }" references sub-fields of a value that is not a list or struct`,
                StatusCode.UnsupportedAttribute);
        }

        assertAuthorized(accessLevel, options);

        return item;
    }
}

function createPropertyReader(factory: IoFactory, schema: ClusterModel | ValueModel, fieldName: string) {
    let reader = factory.isGenerating(schema) ? undefined : factory.get(schema).read;
    const accessLevel = accessLevelFor(schema);

    // Per specification, fabric sensitivity is only valid for properties of a
    // structure
    const fabricSensitive = schema instanceof ValueModel && schema.effectiveAccess.fabric === Access.Fabric.Sensitive;

    return (source: Io.Item, options?: Io.RwOptions) => {
        // Ignore properties for which access level is too low
        if (options?.accessLevel !== undefined && options?.accessLevel < accessLevel) {
            return;
        }

        // Ignore sensitive properties from different fabric
        if (fabricSensitive && !isFabricAuthorized(options)) {
            return;
        }
        
        if (reader === undefined) {
            reader = factory.get(schema).read;
        }

        const value = source[fieldName];
        if (value === undefined) {
            return value;
        }

        return reader(value, options);
    }
}

type PropertyReader = ReturnType<typeof createPropertyReader>;

function createPropertyReaders(factory: IoFactory, fields: ValueModel[], readerIndex: Record<number, PropertyReader>) {
    const readers = {} as Record<string, ReturnType<typeof createPropertyReader>>;

    for (const field of fields) {
        const fieldName = camelize(field.name, false);
        const reader = createPropertyReader(factory, field, fieldName);
        readers[fieldName] = reader;

        const childId = field.effectiveId;
        if (childId !== undefined) {
            readerIndex[childId] = reader;
        }
    }

    return readers;
}

function createStructReader(factory: IoFactory, fields: ValueModel[], accessLevel: AccessLevel): Io["read"] {
    const readerIndex = {} as Record<number, PropertyReader>;
    const readers = createPropertyReaders(factory, fields, readerIndex);

    return (item, options) => {
        assertAuthorized(accessLevel, options);

        if (item === undefined || item === null) {
            return item;
        }

        if (typeof item !== "object") {
            throw new ImplementationError(`Struct value should be an object but is "${typeof item}"`);
        }

        const owningFabric = (item as any).fabricIndex as FabricIndex | undefined;
        if (typeof owningFabric === "number") {
            options = {
                ...options,
                owningFabric: owningFabric,
            }
        }

        if (options?.path?.length) {
            const reader = readerIndex[options.path[0]];
            
            if (reader === undefined) {
                throw new StatusResponseError(
                    `Read of unknown struct property ${options.path[0]}`,
                    StatusCode.UnsupportedAttribute
                );
            }

            return reader(item, { ...options, path: options.path.slice(1) });
        }

        const result = {} as Record<string, any>;
        for (const propName in readers) {
            const value = readers[propName](item, options);
            if (value !== undefined) {
                result[propName] = value;
            }
        }

        return result;
    }
}

function createListReader(factory: IoFactory, schema: ValueModel, accessLevel: AccessLevel): Io["read"] {
    const fabricScoped = schema.effectiveAccess.fabric === Access.Fabric.Scoped;

    const entry = schema.listEntry;
    if (entry === undefined) {
        throw new ImplementationError("List data model has no entry type");
    }
    let entryReader = factory.isGenerating(entry) ? undefined : factory.get(entry).read;

    return (item, options) => {
        if (item === undefined || item === null) {
            return item;
        }

        assertAuthorized(accessLevel, options);

        if (!Array.isArray(item)) {
            throw new ImplementationError(`List value should be an array but is "${typeof item}"`);
        }

        if (entryReader === undefined) {
            entryReader = factory.get(schema).read;
        }

        if (fabricScoped && options?.fabricFiltered) {
            const accessingFabric = options?.accessingFabric;
            if (accessingFabric === undefined) {
                throw new ImplementationError("Fabric filtering requested without accessing fabric");
            }
            item = item.filter(child => (child as any).fabricIndex === accessingFabric);
        }

        if (options?.path?.length) {
            let index = options?.path[0];

            if (index < 0) {
                throw new StatusResponseError(
                    `List index ${index} is negative`,
                    StatusCode.UnsupportedAttribute
                )
            }

            if (index > item.length) {
                throw new StatusResponseError(
                    `List index ${index} is out of range`,
                    StatusCode.UnsupportedAttribute
                )
            }

            const subitem = item[index];
            if (subitem === undefined) {
                if (options.path.length > 1) {
                    throw new StatusResponseError(
                        `Cannot access properties of list index ${index} because it is empty`,
                        StatusCode.UnsupportedAttribute
                    )
                }
                return subitem;
            }

            return entryReader(subitem, { ...options, path: options.path.slice(1) });
        }

        return item.map((child: any) => entryReader?.(child, options));
    }
}
