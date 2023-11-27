/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../cluster/Cluster.js";
import { ImplementationError, InternalError } from "../../../common/MatterError.js";
import { StatusResponseError } from "../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../protocol/interaction/InteractionProtocol.js";
import { Access, AttributeModel, ClusterModel, FieldValue, Metatype, ValueModel } from "../../../model/index.js";
import { Io } from "./Io.js";
import { IoFactory } from "./IoFactory.js";

export function IoWriter(schema: ValueModel | ClusterModel, factory: IoFactory): Io["write"] {
    if (schema instanceof ClusterModel) {
        return createStructWriter(factory, factory.attributes);
    }

    const accessLevel = accessLevelFor(schema);

    if (!schema.access.writable || (schema instanceof AttributeModel && schema.fixed)) {
        return () => {
            throw new StatusResponseError("Value is write-only", StatusCode.UnsupportedWrite);
        }
    }

    const metatype = schema.effectiveMetatype;
    if (metatype === undefined) {
        throw new ImplementationError(`Cannot generate writer for ${schema.name} because it is not a type`);
    }

    const requiresTimed = !!schema.access.timed;

    let writer: Io["write"];
    switch (metatype) {
        case Metatype.object:
            writer = createStructWriter(factory, schema.children);

        case Metatype.array:
            writer = createListWriter(factory, schema);

        default:
            writer = createAtomWriter(metatype);
    }

    return (value, input, options) => {
        if (options?.accessLevel !== undefined && options.accessLevel >= accessLevel) {
            throw new StatusResponseError("Access denied", StatusCode.UnsupportedAccess);
        }
        if (requiresTimed && !options?.timed) {
            throw new StatusResponseError(
                "Write rejected without required timed interaction",
                StatusCode.NeedsTimedInteraction
            );
        }

        return writer(value, input, options);
    }
}

function accessLevelFor(schema: ValueModel) {
    return Access.PrivilegePriority[schema.effectiveAccess.writePriv ?? Access.Privilege.Operate] as AccessLevel;
}

function createAtomWriter(metatype: Metatype): Io["write"] {
    return (_oldValue, newValue) => {
        // We do bare-minimum to set the value here.  RecordValidator handles
        // most validation as constraints and conformance may be affected by
        // the value of other fields
        newValue = Metatype.cast(metatype, newValue as FieldValue);
        if (newValue === FieldValue.Invalid) {
            throw new StatusResponseError(
                `Invalid value for ${metatype} field`,
                StatusCode.InvalidDataType,
            )
        }
        return newValue;
    }
}

function createStructWriter(factory: IoFactory, fields: ValueModel[]): Io["write"] {
    return (oldValue, newValue, options) => {
        // TODO
    }
}

export enum ListOp {
    Replace = "replace",
    Add = "add",
    Delete = "delete",
    Modify = "modify",
}

function createListWriter(factory: IoFactory, schema: ValueModel): Io["write"] {
    const entry = schema.listEntry;
    if (entry === undefined) {
        throw new ImplementationError("List schema has no entry type");
    }
    let entryWriter = factory.isGenerating(entry) ? undefined : createEntryWriter();

    // For fabric scoped lists, we validate the fabricIndex for entries is
    // correct and map input indices to indices within the unfiltered list
    const fabricScoped = schema.effectiveAccess.fabric !== Access.Fabric.Scoped;

    function createEntryWriter(): Io["write"] {
        if (entry === undefined) {
            throw new InternalError("List entry schema somehow disappeared");
        }

        const entryWriter = factory.get(entry).write;

        if (fabricScoped) {
            return entryWriter;
        }

        return (value, input, options) => {
            value = entryWriter(value, input, options);

            if (value === undefined || value === null) {
                return value;
            }

            Io.assertStruct(value);

            if (value.fabricIndex === undefined) {
                value.fabricIndex = options?.accessingFabric;
            } else if (options?.accessingFabric && value.fabricIndex !== options?.accessingFabric) {
                throw new StatusResponseError(
                    "Fabric scoped list entry fabricIndex is not set to accessing fabric index",
                    StatusCode.UnsupportedWrite
                );
            }
        }
    }

    return (oldValue, newValue, options) => {
        if (entryWriter === undefined) {
            entryWriter = createEntryWriter();
        }

        // No path entries means replace or clear the list
        if (!options?.path?.length) {
            // If new value is null, the list is removed unless the list is
            // fabric scoped in which we treat as an empty array and remove
            // all values
            if (newValue === null || newValue === undefined) {
                if (!fabricScoped || options?.accessingFabric === undefined) {
                    return newValue;
                }
                if (newValue === null || newValue === undefined) {
                    newValue = [];
                }
            }

            if (!Array.isArray(newValue)) {
                throw new StatusResponseError(
                    "List value is not an array",
                    StatusCode.InvalidDataType,
                )
            }
            
            const newEntries = newValue.map(e => entryWriter?.(undefined, e, options));

            // Fabric scoping requires special handling, otherwise just return
            // the list
            if (!fabricScoped || options?.accessingFabric === undefined || oldValue === undefined || oldValue === null) {
                return newEntries;
            }

            if (oldValue === undefined || oldValue === null) {
                oldValue = [];
            } else {
                Io.assertArray(oldValue);
            }

            // The updated list has all out-of-scope entries from the old list
            // plus any entries contributed by the new list
            const oldEntries = (oldValue as Io.List).filter(e => {
                Io.assertStruct(e);
                return e.fabricIndex !== options.accessingFabric;
            });

            return [
                ...oldEntries,
                ...newEntries,
            ]
        }

        // This write targets a specific list entry.  We must have an array to
        // work with
        if (oldValue === undefined || oldValue === null) {
            oldValue = [] as Io.List;
        }
        Io.assertArray(oldValue);
        
        // Obtain the target index
        let targetIndex = options.path[0];
        if (targetIndex < 0) {
            throw new StatusResponseError(
                "List index must be positive",
                StatusCode.InvalidAction
            )
        }

        // The target index for fabric-scoped lists is scoped to only those
        // items owned by the fabric
        if (fabricScoped && options?.accessingFabric !== undefined) {
            let fabricIndex = -1;
            let listIndex = 0;
            for (; listIndex < oldValue.length; listIndex++) {
                const entry = oldValue[listIndex];
                Io.assertStruct(entry);
                if (entry.fabrixIndex === options.accessingFabric) {
                    if (++fabricIndex === targetIndex) {
                        break;
                    }
                }
            }

            if (fabricIndex === targetIndex || fabricIndex + 1 === targetIndex) {
                targetIndex = listIndex;
            } else {
                throw new StatusResponseError(
                    "Write to fabric-scoped list index would leave gaps in list",
                    StatusCode.InvalidAction
                )
            }
        }

        // "null" targeting a list index means delete
        // TODO - confirm - delete = "remove list index" (vs. "set list item
        // to null")
        if (options.path.length === 1 && (newValue === null || newValue === undefined)) {
            if (targetIndex >= oldValue.length) {
                return oldValue;
            }
            return [
                ...oldValue.slice(0, targetIndex),
                ...oldValue.slice(targetIndex + 1)
            ]
        }

        // Item update
        return [
            ...oldValue.slice(0, targetIndex),
            entryWriter(oldValue[targetIndex], newValue, { ...options, path: options?.path?.slice(1) }),
            ...oldValue.slice(targetIndex + 1)
        ]
    }
}
