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
import { Access, AttributeModel, Metatype, type ValueModel } from "../../index.js";
import type { Io } from "./Io.js";
import type { IoFactory } from "./IoFactory.js";
import { assertAuthorized } from "./IoUtil.js";

export function IoReader(schema: ValueModel, factory: IoFactory): Io["read"] {
    const metatype = schema.effectiveMetatype;
    
    const accessLevel = accessLevelFor(schema);
    let fabricConstraint = schema.access.fabric;
    if (fabricConstraint === Access.Fabric.Unaware) {
        fabricConstraint = undefined;
    }

    if (!schema.access.readable || (schema instanceof AttributeModel && schema.fixed)) {
        return () => {
            throw new StatusResponseError("Value is write-only", StatusCode.UnsupportedRead);
        }
    }

    switch (metatype) {
        case Metatype.array:
            return createListReader(factory, schema, accessLevel, fabricConstraint);

        case Metatype.object:
            return createStructReader(factory, schema, accessLevel, fabricConstraint);

        default:
            return createAtomReader(accessLevel, fabricConstraint);

    }
}

function accessLevelFor(schema: ValueModel) {
    return Access.PrivilegePriority[schema.access.readPriv ?? Access.Privilege.View] as AccessLevel
}

function isFabricAuthorized(auth?: Io.Authorization) {
    return auth?.owningFabric === undefined
        || auth?.accessingFabric === undefined
        || auth.owningFabric === auth.accessingFabric;
}

function assertFabricAuthorized(accessLevel: AccessLevel, fabricConstraint?: Access.Fabric, auth?: Io.Authorization) {
    assertAuthorized(accessLevel, auth);
    if (fabricConstraint === Access.Fabric.Sensitive && !isFabricAuthorized(auth)) {
        throw new StatusResponseError(
            `Illegal read from fabric ${auth?.accessingFabric} to sensitive value owned by fabric ${auth?.owningFabric}`,
            StatusCode.UnsupportedAccess
        );
    }
}

function createAtomReader(accessLevel: AccessLevel, fabricConstraint: Access.Fabric | undefined) {
    return (item: Io.Item, path: Io.Path, auth?: Io.Authorization) => {
        if (path?.length) {
            throw new StatusResponseError(
                `Path "${
                    path.join(".")
                }" references sub-fields of a value that is not a list or struct`,
                StatusCode.InvalidAction);
        }

        assertFabricAuthorized(accessLevel, fabricConstraint, auth);

        if (fabricConstraint === Access.Fabric.Sensitive && auth?.owningFabric !== undefined && auth?.accessingFabric !== undefined) {
            throw new StatusResponseError(
                `Illegal read from fabric ${auth.accessingFabric} to sensitive value owned by fabric ${auth.owningFabric}`,
                StatusCode.UnsupportedAccess
            );
        }

        return item;
    }
}

function createPropertyReader(factory: IoFactory, schema: ValueModel, fieldName: string) {
    let reader = factory.isGenerating(schema) ? undefined : factory.get(schema)?.read;
    const fabricSensitive = schema.access.fabric === Access.Fabric.Sensitive;
    const accessLevel = accessLevelFor(schema);

    return (source: Io.Item, auth: Io.Authorization | undefined, path: Io.Path) => {
        // Ignore properties for which access level is too low
        if (auth?.accessLevel !== undefined && auth.accessLevel < accessLevel) {
            return;
        }

        // Ignore sensitive properties from different fabric
        if (fabricSensitive && !isFabricAuthorized(auth)) {
            return;
        }
        
        if (reader === undefined) {
            reader = factory.get(schema).read;
        }

        const value = source[fieldName];
        if (value === undefined) {
            return value;
        }

        return reader(value, path, auth);
    }
}

function createPropertyReaders(factory: IoFactory, schema: ValueModel) {
    const readers = {} as Record<string, ReturnType<typeof createPropertyReader>>;

    for (const child of schema.children) {
        const fieldName = camelize(child.name, false);
        readers[fieldName] = createPropertyReader(factory, schema, fieldName);
    }

    return readers;
}

function createStructReader(factory: IoFactory, schema: ValueModel, accessLevel: AccessLevel, fabricConstraint: Access.Fabric | undefined) {
    const readers = createPropertyReaders(factory, schema);

    return (item: Io.Item, path: Io.Path, auth?: Io.Authorization) => {
        assertAuthorized(accessLevel, auth);

        if (item === undefined || item === null) {
            return item;
        }

        if (typeof item !== "object") {
            throw new ImplementationError(`Struct should be an object but is "${typeof item}"`);
        }

        const owningFabric = (item as any).fabricIndex as FabricIndex | undefined;
        if (typeof owningFabric === "number") {
            auth = {
                ...auth,
                owningFabric: owningFabric,
            }
        }

        assertFabricAuthorized(accessLevel, fabricConstraint, auth);

        if (path?.length) {
            const reader = readers[path[0]];
            if (reader === undefined) {
                throw new StatusResponseError(
                    `Read of unknown struct property "${path[0]}"`, StatusCode.InvalidAction
                );
            }
            return reader(item, auth, path.slice(1));
        }

        const result = {} as Record<string, any>;
        for (const propName in readers) {
            const value = readers[propName](item, auth, []);
            if (value !== undefined) {
                result[propName] = value;
            }
        }

        return result;
    }
}

function createListReader(factory: IoFactory, schema: ValueModel, accessLevel: AccessLevel, fabricConstraint: Access.Fabric | undefined) {
    return (item: Io.Item, path: Io.Path, auth?: Io.Authorization) => {
        assertFabricAuthorized(accessLevel, fabricConstraint, auth);

        if (item === undefined || item === null) {
            return item;
        }

        if (!Array.isArray(item)) {
            throw new ImplementationError(`List item should be an array but is "${typeof item}"`);
        }

        // TODO
    }
}
