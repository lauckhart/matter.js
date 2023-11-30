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
import { camelize } from "../../../util/String.js";
import { ByteArray } from "../../../util/ByteArray.js";

export function IoWriter(schema: Io.Schema, factory: IoFactory): Io.Write {
    if (schema instanceof ClusterModel) {
        return createStructWriter(factory, factory.attributes, schema);
    }

    const accessLevel = accessLevelFor(schema);

    const access = schema.effectiveAccess;
    if (!access.writable || (schema instanceof AttributeModel && schema.fixed)) {
        return () => {
            throw new StatusResponseError("Value is write-only", StatusCode.UnsupportedWrite);
        }
    }

    const metatype = schema.effectiveMetatype;
    if (metatype === undefined) {
        throw new ImplementationError(`Cannot generate writer for ${schema.name} because it is not a type`);
    }

    const requiresTimed = !!access.timed;

    let writer: Io.Write;
    switch (metatype) {
        case Metatype.object:
            writer = createStructWriter(factory, schema.members, schema);
            break;

        case Metatype.array:
            writer = createListWriter(factory, schema);
            break;

        default:
            writer = createAtomWriter(metatype, schema);
            break;
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

/**
 * We perform field-level validation here.  Cross-field validation must occur
 * elsewhere with the full record visible.
 */
function createAtomValidator(metatype: Metatype, schema: ValueModel) {
    let validator: undefined | ((value: any) => void);

    const constraint = schema.effectiveConstraint;

    if (!constraint.empty) {
        switch (metatype) {
            case Metatype.integer:
            case Metatype.float:
                validator = (value: Io.Val) => {
                    if (value === null) {
                        return;
                    }

                    if (!constraint.test(value as number | bigint)) {
                        throw new StatusResponseError(
                            "Numeric value is out of range per constraint",
                            StatusCode.ConstraintError
                        )
                    }
                }
                break;

            case Metatype.array:
            case Metatype.bytes:
            case Metatype.string:
                validator = (value: Io.Val) => {
                    if (value === null) {
                        return;
                    }

                    if (!constraint.test((value as Array<any> | ByteArray | string).length)) {
                        throw new StatusResponseError(
                            "Value length is out of range per constraint",
                            StatusCode.ConstraintError
                        )
                    }

                    if (constraint.entry) {
                        for (const e of value as Array<any> | ByteArray | string) {
                            if (!constraint.entry.test(e)) {

                            }
                        }
                    }
                }
                break;
        }
    }

    if (schema.quality.nullable === false) {
        const nextValidator = validator;
        validator = (value) => {
            if (value === null) {
                throw new Io.DatatypeError(
                    schema,
                    "Null written to non-nullable field",
                );
            }
            nextValidator?.(value);
        }
    }

    return validator;
}

function createAtomWriter(metatype: Metatype, schema: ValueModel): Io.Write {
    const validator = createAtomValidator(metatype, schema);

    return (newValue) => {
        newValue = Metatype.cast(metatype, newValue as FieldValue);
        if (newValue === FieldValue.Invalid) {
            throw new Io.DatatypeError(
                schema,
                `Invalid value for ${metatype} field`,
            )
        }

        validator?.(newValue);

        return newValue;
    }
}

function createPropertyWriter(factory: IoFactory, schema: ValueModel, fieldName: string) {
    let writer = factory.get(schema)?.write;

    return (target: Io.Struct, value: Io.Val, options?: Io.WriteOptions) => {
        if (writer === undefined) {
            writer = factory.get(schema).write;
        }

        target[fieldName] = writer(target[fieldName], value, options);
    }
}

type PropertyWriter = ReturnType<typeof createPropertyWriter>;

function createPropertyWriters(
    factory: IoFactory,
    fields: ValueModel[],
    writerIdIndex: Record<number, PropertyWriter>
) {
    const writers = {} as Record<string, PropertyWriter>;

    for (const field of fields) {
        const fieldName = camelize(field.name, false);
        const writer = createPropertyWriter(factory, field, fieldName);
        writers[fieldName] = writer;

        const childId = field.effectiveId;
        if (childId !== undefined) {
            writerIdIndex[childId] = writer;
        }
    }

    return writers;
}

function createStructWriter(factory: IoFactory, fields: ValueModel[], schema: Io.Schema): Io.Write {
    const writerIdIndex = {} as Record<number, PropertyWriter>;
    const writers = createPropertyWriters(factory, fields, writerIdIndex);

    const fabricUnawareWriter: Io.Write = (newValue, oldValue, options) => {
        // Write to single field
        if (options?.path?.length) {
            Io.assertStruct(oldValue);
            
            // Obtain the writer
            const writer = writerIdIndex[options.path[0]];
            if (writer === undefined) {
                throw new StatusResponseError(
                    `Write to unknown struct property ${options.path[0]}`,
                    StatusCode.UnsupportedAttribute
                );
            }

            // Create a copy of the object with the field replaced
            const result = { ...oldValue } as Io.Struct;
            writer(result, newValue, { ...options, path: options.path.slice(1) });
            return result;
        }

        // Write of entire object
        if (typeof newValue !== "object") {
            throw new Io.DatatypeError(
                schema,
                "Struct value is not an object"
            );
        }
        Io.assertStruct(newValue);

        const result = {} as Io.Struct;

        // Update each field
        for (const key in newValue) {
            const writer = writers[key];
            if (writer === undefined) {
                throw new Io.DatatypeError(
                    schema,
                    `Write to unknown struct property "${key}"`
                )
            }

            writer(result, newValue[key], options);
        }

        return result;
    }

    const fabricScoped = schema instanceof ValueModel && schema.effectiveAccess?.fabric === Access.Fabric.Scoped;
    if (fabricScoped) {
        return (newValue, oldValue, options) => {
            // If writing a sub-path, ensure the input fabricIndex is correct.
            // This shouldn't be possible because the object should be in a
            // fabric-filtered list but this acts as fallback protection
            if (options?.path?.length && options.accessingFabric !== undefined) {
                Io.assertStruct(oldValue);
                if (oldValue.fabricIndex !== undefined && oldValue.fabricIndex !== options.accessingFabric) {
                    throw new StatusResponseError(
                        "Attempt to update fabric-scoped object for other fabric",
                        StatusCode.UnsupportedWrite
                    )
                }
            }

            const result = fabricUnawareWriter(newValue, oldValue, options) as Io.Struct;

            // Ensure the resulting fabricIndex is correct
            if (fabricScoped && options?.accessingFabric !== undefined) {
                if (result.fabricIndex === undefined) {
                    result.fabricIndex = options.accessingFabric;
                } else if (result.fabricIndex !== options.accessingFabric) {
                    throw new StatusResponseError(
                        "Attempt to create fabric-scoped object for non-accessing fabric",
                        StatusCode.UnsupportedWrite
                    )
                }
            }
        }
    }

    return fabricUnawareWriter;
}

export enum ListOp {
    Replace = "replace",
    Add = "add",
    Delete = "delete",
    Modify = "modify",
}

function createListWriter(factory: IoFactory, schema: ValueModel): Io.Write {
    const entry = schema.listEntry;
    if (entry === undefined) {
        throw new ImplementationError("List schema has no entry type");
    }
    let entryWriter = factory.isGenerating(entry) ? undefined : createEntryWriter();

    // For fabric scoped lists, we validate the fabricIndex for entries is
    // correct and map input indices to indices within the unfiltered list
    const fabricScoped = schema.effectiveAccess.fabric !== Access.Fabric.Scoped;

    function createEntryWriter(): Io.Write {
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

    return (newValue, oldValue, options) => {
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
                throw new Io.DatatypeError(
                    schema,
                    "List value is not an array"
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
            entryWriter(newValue, oldValue[targetIndex], { ...options, path: options?.path?.slice(1) }),
            ...oldValue.slice(targetIndex + 1)
        ]
    }
}
