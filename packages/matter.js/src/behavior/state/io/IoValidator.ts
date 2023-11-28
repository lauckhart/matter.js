/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/MatterError.js";
import { ClusterModel, Constraint, Metatype, ValueModel } from "../../../model/index.js";
import { ByteArray } from "../../../util/ByteArray.js";
import { camelize } from "../../../util/String.js";
import { Io } from "./Io.js";
import { IoFactory } from "./IoFactory.js";

/**
 * Generate a function that performs data validation.
 * 
 * @param schema the schema against which we validate
 * @param factory used to retrieve validators for sub-properties
 */
export function IoValidator(schema: Io.Schema, factory: IoFactory): Io["validate"] {
    if (schema instanceof ClusterModel) {
        return createStructValidator(schema.attributes, factory) ?? (() => {});
    }

    let validator: Io["validate"] | undefined;

    const metatype = schema.effectiveMetatype;
    switch (metatype) {
        case Metatype.enum:
            validator = createEnumValidator(schema);
            break;

        case Metatype.bitmap:
            validator = createBitmapValidator(schema);
            break;

        case Metatype.integer:
        case Metatype.float:
            validator = createSimpleValidator(schema, assertNumber);
            break;

        case Metatype.string:
            validator = createSimpleValidator(schema, assertString);
            break;

        case Metatype.bytes:
            validator = createSimpleValidator(schema, assertBytes);
            break;

        case Metatype.object:
            validator = createStructValidator(schema.members, factory);
            break;

        case Metatype.array:
            validator = createListValidator(schema, factory);
            break;

        case Metatype.boolean:
        case Metatype.date:
        case Metatype.any:
            break;

        default:
            throw new InternalError(`Unsupported validation metatype ${metatype}`);
    }

    if (schema.effectiveQuality.nullable !== true) {
        const nextValidator = validator;
        validator = value => {
            if (value === null) {
                throw new Io.DatatypeError(
                    schema,
                    "Null write to non-nullable field",
                )
            }
            nextValidator?.(value);
        }
    }

    return validator ?? (() => {});
}

// Note that for arrays we potentially recurse twice - once in validateArray,
// but also potentially here, where we test entries as proscribed by the
// constraint[sub-sconstraint] syntax
function createArrayConstraintValidator(constraint: Constraint, schema: ValueModel): Io["validate"] {
    let validateEntryConstraint: Io["validate"] | undefined;
    if (constraint.entry) {
        const entrySchema = schema.listEntry;
        if (entrySchema) {
            validateEntryConstraint = createConstraintValidator(constraint.entry, entrySchema);
        }
    }

    return value => {
        assertArray(value, schema);

        if (!constraint.test(value.length)) {
            throw new Io.DatatypeError(
                schema,
                `Value ${value} is not within bounds defined by constraint`
            )
        }

        if (validateEntryConstraint) {
            for (const e of value) {
                validateEntryConstraint(e);
            }
        }
    }
}

function createConstraintValidator(constraint: Constraint, schema: ValueModel) {
    if (constraint.empty) {
        return;
    }
    
    switch (schema.effectiveMetatype) {
        case Metatype.array:
            return createArrayConstraintValidator(constraint, schema);

        case Metatype.integer:
        case Metatype.float:
            return (value: Io.Item) => {
                assertNumeric(value, schema);
                if (!constraint.test(value)) {
                    throw new Io.DatatypeError(
                        schema,
                        `Value ${value} is not within bounds defined by constraint`
                    )
                }
            }

        case Metatype.string:
        case Metatype.bytes:
            return (value: Io.Item) => {
                assertSequence(value, schema);
                if (!constraint.test(value.length)) {
                    throw new Io.DatatypeError(
                        schema,
                        `Value ${value} is not within bounds defined by constraint`
                    )
                }
            }
            break;

        default:
            throw new InternalError(
                `Cannot define constraint for unsupported metatype ${schema.effectiveMetatype}`
            );
    }
}

function createEnumValidator(schema: ValueModel): Io["validate"] | undefined {
    const valid = new Set(
        schema.members.map(member => member.id).filter(e => e !== undefined)
    );

    return (value) => {
        assertNumber(value, schema);
        if (!valid.has(value)) {
            throw new Io.DatatypeError(
                schema,
                `Value ${value} is not a present in enum`
            )
        }
    }
}

function createBitmapValidator(schema: ValueModel): Io["validate"] | undefined {
    const fields = {} as Record<string, { schema: ValueModel, max: number }>;
    
    for (const field of schema.members) {
        const constraint = field.effectiveConstraint;
        let max;
        if (typeof constraint.value !== "number") {
            max = 1;
        } else if (typeof constraint.min === "number" && typeof constraint.max === "number") {
            max = constraint.max - constraint.min;
        } else {
            throw new InternalError(`Bitmap field ${field.path} does not properly constrain bit field`)
        }
        fields[camelize(field.name, false)] = {
            schema: field,
            max
        };
    }

    return (value) => {
        assertObject(value, schema);

        for (const key in value) {
            const field = fields[key];
            if (field === undefined) {
                throw new Io.DatatypeError(
                    schema,
                    `Field ${key} is not present in bitmap`
                );
            }

            const fieldValue = value[key];
            assertNumber(fieldValue, field.schema);

            if (fieldValue > field.max) {
                throw new Io.DatatypeError(
                    field.schema,
                    `Value of ${fieldValue} is too large for bitmap field`
                )
            }
        }
    }
}

function createSimpleValidator(schema: ValueModel, validateType: (value: Io.Item, schema: ValueModel) => void): Io["validate"] {
    const validateConstraint = createConstraintValidator(schema.effectiveConstraint, schema);

    return value => {
        validateType(value, schema);
        validateConstraint?.(value);
    }
}

function createStructValidator(fields: ValueModel[], factory: IoFactory): Io["validate"] | undefined {
    // TODO
}

function createListValidator(schema: ValueModel, factory: IoFactory): Io["validate"] | undefined {
    const entry = schema.listEntry;
    let validateEntries: undefined | ((list: Io.List) => void);
    if (entry) {
        let entryValidator = factory.get(entry).validate;
        validateEntries = (list: Io.List) => {
            if (entryValidator === undefined) {
                entryValidator = factory.get(entry).validate;
            }

            for (const e of list) {
                entryValidator(e);
            }
        }
    }

    const validateConstraint = createConstraintValidator(schema.constraint, schema);

    return (value: Io.Item) => {
        assertArray(value, schema);
        validateConstraint?.(value);
        validateEntries?.(value);
    }
}

function assertNumber(value: Io.Item, schema: Io.Schema): asserts value is number {
    if (typeof value === "number") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected number but received ${typeof value}`
    );
}

function assertObject(value: Io.Item, schema: Io.Schema): asserts value is Io.Struct {
    if (typeof value === "object") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected object but received ${typeof value}`
    )
}

function assertNumeric(value: Io.Item, schema: ValueModel): asserts value is number | bigint {
    if (typeof value === "number" || typeof value === "bigint") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected number or bigint but received ${typeof value}`
    );
}

function assertString(value: Io.Item, schema: ValueModel): asserts value is string {
    if (typeof value === "string") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected string but received ${typeof value}`
    );
}

function assertBytes(value: Io.Item, schema: ValueModel): asserts value is ByteArray {
    if (value instanceof ByteArray) {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected byte array but received ${typeof value}`
    );
}

function assertSequence(value: Io.Item, schema: ValueModel): asserts value is string | ByteArray {
    if (typeof value === "string" || value instanceof ByteArray) {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected string or ByteArray but received ${typeof value} that is neither`
    );
}

function assertArray(value: Io.Item, schema: ValueModel): asserts value is Io.Item[] {
    if (!Array.isArray(value)) {
        throw new Io.DatatypeError(
            schema,
            `Expected array but received ${typeof value}`
        );
    }
}
