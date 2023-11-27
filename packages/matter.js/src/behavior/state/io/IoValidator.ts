/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/MatterError.js";
import { ClusterModel, Metatype, ValueModel } from "../../../model/index.js";
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
            validator = createNumberValidator(schema);
            break;

        case Metatype.string:
        case Metatype.bytes:
            validator = createSequenceValidator(schema);
            break;

        case Metatype.object:
            validator = createStructValidator(schema.members, factory);
            break;

        case Metatype.array:
            validator = createListValidator(schema, factory);
            break;

        case Metatype.any:
        case Metatype.boolean:
        case Metatype.date:
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

function assertNumber(value: Io.Item, schema: Io.Schema): asserts value is number {
    if (typeof value === "number") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected number but received ${typeof value}`
    );
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

function assertObject(value: Io.Item, schema: Io.Schema): asserts value is Io.Struct {
    if (typeof value === "object") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected object but received ${typeof value}`
    )
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

function assertNumeric(value: Io.Item, schema: ValueModel): asserts value is number | bigint {
    if (typeof value === "number" || typeof value === "bigint") {
        return;
    }
    throw new Io.DatatypeError(
        schema,
        `Expected number or bigint but received ${typeof value}`
    );
}

function createNumberValidator(schema: ValueModel): Io["validate"] | undefined {
    const constraint = schema.effectiveConstraint;
    if (!constraint.empty) {
        return (value: Io.Item) => {
            assertNumeric(value, schema);
            constraint.test(value);
        }
    }
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

function createSequenceValidator(schema: ValueModel): Io["validate"] | undefined {
    const constraint = schema.effectiveConstraint;
    if (!constraint.empty) {
        return (value: Io.Item) => {
            assertSequence(value, schema);
            constraint.test(value.length);
        }
    }
}

function createStructValidator(fields: ValueModel[], factory: IoFactory): Io["validate"] | undefined {
    // TODO
}

function createListValidator(schema: ValueModel, factory: IoFactory): Io["validate"] | undefined {
    // TODO
}
