/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/MatterError.js";
import { ClusterModel, Metatype, ValueModel } from "../../../model/index.js";
import { camelize } from "../../../util/String.js";
import { Schema } from "../Schema.js";
import { Io } from "./Io.js";
import { IoFactory } from "./IoFactory.js";
import {
    assertArray,
    assertBytes,
    assertNumber,
    assertObject,
    assertString,
} from "./validation/assertions.js";
import { createConformanceValidator } from "./validation/conformance.js";
import { createConstraintValidator } from "./validation/constraint.js";

/**
 * Generate a function that performs data validation.
 * 
 * @param schema the schema against which we validate
 * @param factory used to retrieve validators for sub-properties
 */
export function IoValidator(
    schema: Schema,
    factory: IoFactory
): Io.Validate {
    if (schema instanceof ClusterModel) {
        return createStructValidator(schema.attributes, schema, factory) ?? (() => {});
    }

    let validator: Io.Validate | undefined;

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
            validator = createStructValidator(schema.members, schema, factory);
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

    validator = createNullValidator(schema, validator);

    validator = createConformanceValidator(schema, factory.featureMap, factory.supportedFeatures, validator);

    return validator || (() => {});
}

function createNullValidator(schema: ValueModel, nextValidator?: Io.Validate): Io.Validate | undefined {
    if (schema.effectiveQuality.nullable !== true) {
        return (value, options) => {
            if (value === null) {
                throw new Io.DatatypeError(
                    schema,
                    "Null write to non-nullable field",
                )
            }
            nextValidator?.(value, options);
        }
    }

    return nextValidator;
}

function createEnumValidator(schema: ValueModel): Io.Validate | undefined {
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

function createBitmapValidator(schema: ValueModel): Io.Validate | undefined {
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

function createSimpleValidator(
    schema: ValueModel,
    validateType: (value: Io.Val, schema: ValueModel) => void
): Io.Validate {
    const validateConstraint = createConstraintValidator(schema.effectiveConstraint, schema);

    return (value, options) => {
        validateType(value, schema);
        validateConstraint?.(value, options?.siblings);
    }
}

function createStructValidator(
    fields: ValueModel[],
    schema: Schema,
    factory: IoFactory
): Io.Validate | undefined {
    const validators = {} as Record<string, Io.Validate>;

    function createPropertyValidator(schema: ValueModel): Io.Validate {
        const name = camelize(schema.name, false);
        if (factory.isGenerating(schema)) {
            return (value) => {
                const validate = factory.get(schema).validate;
                validators[name] = validate;
                return validate(value)
            }
        }
        return factory.get(schema).validate;
    }

    for (const field of fields) {
        validators[camelize(field.name, false)] = createPropertyValidator(field);
    }

    return value => {
        assertObject(value, schema);
        const options: Io.ValidateOptions = {
            siblings: value,
            choices: {}
        }

        for (const name in validators) {
            const propertyValue = value[name];
            if (propertyValue !== undefined) {
                validators[name](propertyValue, options);
            }
        }

        for (const name in options.choices) {
            const choice = options.choices[name];
            if (choice.count < choice.target) {
                throw new Io.DatatypeError(
                    schema,
                    `Too few fields present for conformance choice ${name} (${choice.count} of min ${choice.target})`
                )
            }
            if (choice.count > choice.target && !choice.orMore) {
                throw new Io.DatatypeError(
                    schema,
                    `Too many fields present for conformance choice ${name} (${choice.count} of max ${choice.target})`
                )
            }
        }
    }
}

function createListValidator(
    schema: ValueModel,
    factory: IoFactory,
): Io.Validate | undefined {
    const entry = schema.listEntry;
    let validateEntries: undefined | ((list: Io.List) => void);
    if (entry) {
        let entryValidator = factory.isGenerating(entry)
            ? undefined
            : factory.get(entry).validate;

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

    return (value, options) => {
        assertArray(value, schema);
        validateConstraint?.(value, options?.siblings);
        validateEntries?.(value);
    }
}
