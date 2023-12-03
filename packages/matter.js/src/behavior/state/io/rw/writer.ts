/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessLevel } from "../../../../cluster/Cluster.js";
import { ImplementationError, InternalError } from "../../../../common/MatterError.js";
import { StatusResponseError } from "../../../../protocol/interaction/InteractionMessenger.js";
import { StatusCode } from "../../../../protocol/interaction/InteractionProtocol.js";
import { Access, AttributeModel, ClusterModel, FieldValue, Metatype, ValueModel } from "../../../../model/index.js";
import { Io } from "../Io.js";
import { IoFactory } from "../IoFactory.js";
import { camelize } from "../../../../util/String.js";
import { ByteArray } from "../../../../util/ByteArray.js";
import { assertArray, assertStruct } from "./rw-util.js";
import { Schema } from "../../Schema.js";

/**
 * Generates a function that performs validated value reads.
 * 
 * Note that we do some data validation here but more in-depth validation
 * requires use of the I/O validator.
 */
export function IoWriter(schema: Schema, factory: IoFactory): Io.Write {
    if (schema instanceof ClusterModel) {
        return createStructWriter(factory, schema.members, schema);
    }

    const accessLevel = accessLevelFor(schema);
    const access = schema.effectiveAccess;
    const readOnly =
        !access.writable
        || (
            schema instanceof AttributeModel
            && schema.fixed
        );

    const metatype = schema.effectiveMetatype;
    if (metatype === undefined) {
        throw new ImplementationError(
            `Cannot determine type for ${schema.path}`
        );
    }

    const requiresTimed = !!access.timed;

    let baseWriter: Io.Write;
    switch (metatype) {
        case Metatype.object:
            baseWriter = createStructWriter(factory, schema.members, schema);
            break;

        case Metatype.array:
            baseWriter = createListWriter(factory, schema);
            break;

        default:
            baseWriter = createAtomWriter(metatype, schema);
            break;
    }

    let writer: Io.Write = (value, input, options) => {
        if (
            !options?.offline
            && (
                options?.accessLevel === undefined
                || options.accessLevel < accessLevel
            )
        ) {
            throw new StatusResponseError(
                `Write access denied for ${schema.path}`,
                StatusCode.UnsupportedAccess
            );
        }

        return baseWriter(value, input, options);
    }

    if (readOnly) {
        const nextWriter = writer;
        writer = (value, input, options) => {
            if (!options?.offline) {
                throw new StatusResponseError(
                    `Write to read-only value ${schema.path}`,
                    StatusCode.UnsupportedWrite
                );
            }

            return nextWriter(value, input, options);
        }
    }

    if (requiresTimed) {
        const nextWriter = writer;
        writer = (value, input, options) => {
            if (!options?.offline && !options?.timed) {
                throw new StatusResponseError(
                    `Write denied to ${schema.path} without timed interaction`,
                    StatusCode.NeedsTimedInteraction
                );
            }

            return nextWriter(value, input, options);
        }
    }

    return writer;
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
                            `Numeric value ${value} is out of range for ${schema.path}`,
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

                    const length = (value as Array<any> | ByteArray | string).length;
                    if (!constraint.test(length)) {
                        throw new StatusResponseError(
                            `List length ${length} out of range for ${schema.path}`,
                            StatusCode.ConstraintError
                        )
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
                    `Null written to non-nullable field ${schema.path}`,
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
                `Illegal value for ${
                    metatype
                } field ${
                    schema.path
                }`,
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
    writerIndex: Record<string | number, PropertyWriter>
) {
    const writers = {} as Record<string, PropertyWriter>;

    for (const field of fields) {
        const fieldName = camelize(field.name, false);
        const writer = createPropertyWriter(factory, field, fieldName);
        writers[fieldName] = writer;

        writerIndex[fieldName] = writer;
        const childId = field.effectiveId;
        if (childId !== undefined) {
            writerIndex[childId] = writer;
        }
    }

    return writers;
}

function createStructWriter(factory: IoFactory, fields: ValueModel[], schema: Schema): Io.Write {
    const writerIndex = {} as Record<string | number, PropertyWriter>;
    const writers = createPropertyWriters(factory, fields, writerIndex);

    const fabricUnawareWriter: Io.Write = (newValue, oldValue, options) => {
        // Write to single field
        if (options?.path?.length) {
            assertStruct(schema, oldValue);
            
            // Obtain the writer
            const writer = writerIndex[options.path[0]];
            if (writer === undefined) {
                throw new StatusResponseError(
                    `Write to unknown property ${
                        options.path[0]
                    } of ${
                        schema.path
                    }`,
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
                `Value for struct ${schema.path} is not an object`
            );
        }
        assertStruct(schema, newValue);

        const result = {} as Io.Struct;

        // Update each field
        for (const key in newValue) {
            const writer = writers[key];
            if (writer === undefined) {
                throw new Io.DatatypeError(
                    `Write to unknown struct property "${
                        key
                    }" of ${
                        schema.path
                    }`
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
                assertStruct(schema, oldValue);
                if (oldValue.fabricIndex !== undefined && oldValue.fabricIndex !== options.accessingFabric) {
                    throw new InternalError(
                        `Accessing fabric mismatched to owner on write to ${schema.path}`
                    )
                }
            }

            const result = fabricUnawareWriter(newValue, oldValue, options) as Io.Struct;

            // Set fabric index.  In offline mode fabricIndex may be supplied
            // explicitly.  When online it may only come from the session
            if (fabricScoped) {
                if (options?.offline) {
                    if (result.fabricIndex === undefined && options?.accessingFabric) {
                        result.fabricIndex = options?.accessingFabric;
                    }

                    if (result.fabricIndex === undefined) {
                        throw new ImplementationError(
                            `Offline write of ${schema.path} requires fabricIndex because value is fabric scoped`
                        )
                    }
                } else {
                    if (options?.accessingFabric === undefined) {
                        throw new StatusResponseError(
                            `Illegal write to ${schema.path} without fabric`,
                            StatusCode.UnsupportedWrite
                        )
                    }

                    if (result.fabricIndex === undefined) {
                        result.fabricIndex = options.accessingFabric;
                    } else {
                        throw new StatusResponseError(
                            `Illegal write to ${schema.path} with fabricIndex set`,
                            StatusCode.UnsupportedWrite
                        )
                    }
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

    let entryWriter = factory.get(entry).write;

    // For fabric scoped lists, we validate the fabricIndex for entries is
    // correct and map input indices to indices within the unfiltered list
    const fabricScoped = schema.effectiveAccess.fabric !== Access.Fabric.Scoped;

    return (newValue, oldValue, options, context) => {
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
                    `Value for list ${schema.path} is not an array`
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
                assertArray(schema, oldValue);
            }

            // The updated list has all out-of-scope entries from the old list
            // plus any entries contributed by the new list
            const oldEntries = (oldValue as Io.List).filter(e => {
                assertStruct(schema, e);
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
        assertArray(schema, oldValue);
        
        // Obtain the target index
        let targetIndex = options.path[0];
        if (typeof targetIndex === "string") {
            targetIndex = Number.parseInt(targetIndex);
            if (Number.isNaN(targetIndex)) {
                throw new StatusResponseError(
                    "List index is non-numeric",
                    StatusCode.InvalidAction
                )
            }
        }
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
                assertStruct(schema, entry);
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
                    `Write to fabric-scoped list ${
                        schema.path
                    } index ${
                        targetIndex
                    } would leave gaps in list`,
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

        // Perform the write
        newValue = entryWriter(
            newValue,
            oldValue[targetIndex],
            { ...options, path: options?.path?.slice(1) },
            context
        );

        // Sanity check fabric index
        if (fabricScoped && !options?.offline) {
            const fabricIndex =
                typeof newValue === "object"
                    ? (newValue as Record<string, any>).fabricIndex
                    : undefined;
            if (fabricIndex === undefined || fabricIndex !== options?.accessingFabric) {
                throw new InternalError(
                    `Write to entry of fabric-scoped list ${
                        schema.path
                    } did not result in object with correct fabricIndex`
                );
            }
        }

        // Item update
        return [
            ...oldValue.slice(0, targetIndex),
            newValue,
            ...oldValue.slice(targetIndex + 1)
        ]
    }
}
