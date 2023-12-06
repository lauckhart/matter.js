/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../../common/MatterError.js";
import { ClusterModel, Metatype, ValueModel } from "../../../model/index.js";
import { camelize } from "../../../util/String.js";
import { Schema } from "../Schema.js";
import { ConformanceError, SchemaError, ValidateError } from "../../errors.js";
import { StateManager } from "./StateManager.js";
import {
    assertArray,
    assertBytes,
    assertNumber,
    assertObject,
    assertString,
} from "../validation/assertions.js";
import { createConformanceValidator } from "../validation/conformance.js";
import { createConstraintValidator } from "../validation/constraint.js";
import type { ValueManager } from "./ValueManager.js";
import { ValidationContext } from "../validation/context.js";
import { Val } from "./Val.js";

/**
 * Generate a function that performs data validation.
 * 
 * @param schema the schema against which we validate
 * @param factory used to retrieve validators for sub-properties
 */
export function ValueValidator(
    schema: Schema,
    factory: StateManager
): ValueManager.Validate {
    if (schema instanceof ClusterModel) {
        return createStructValidator(schema.attributes, schema, factory) ?? (() => {});
    }

    let validator: ValueManager.Validate | undefined;

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

function createNullValidator(schema: ValueModel, nextValidator?: ValueManager.Validate): ValueManager.Validate | undefined {
    if (schema.effectiveQuality.nullable !== true) {
        return (value, options) => {
            if (value === null) {
                throw new ValidateError(
                    schema,
                    "Null write to non-nullable field",
                )
            }
            nextValidator?.(value, options);
        }
    }

    return nextValidator;
}

function createEnumValidator(schema: ValueModel): ValueManager.Validate | undefined {
    const valid = new Set(
        schema.members.map(member => member.id).filter(e => e !== undefined)
    );

    return (value) => {
        assertNumber(value, schema);
        if (!valid.has(value)) {
            throw new ValidateError(
                schema,
                `Value ${value} is not a present in enum`
            )
        }
    }
}

function createBitmapValidator(schema: ValueModel): ValueManager.Validate | undefined {
    const fields = {} as Record<string, { schema: ValueModel, max: number }>;
    
    for (const field of schema.members) {
        const constraint = field.effectiveConstraint;
        let max;
        if (typeof constraint.value !== "number") {
            max = 1;
        } else if (typeof constraint.min === "number" && typeof constraint.max === "number") {
            max = constraint.max - constraint.min;
        } else {
            throw new SchemaError(schema, `Bitmap field does not properly constrain bit field`)
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
                throw new ValidateError(
                    schema,
                    `Field ${key} is not present in bitmap`
                );
            }

            const fieldValue = value[key];
            assertNumber(fieldValue, field.schema);

            if (fieldValue > field.max) {
                throw new ValidateError(
                    field.schema,
                    `Value of ${fieldValue} is too large for bitmap field`
                )
            }
        }
    }
}

function createSimpleValidator(
    schema: ValueModel,
    validateType: (value: Val, schema: ValueModel) => void
): ValueManager.Validate {
    const validateConstraint = createConstraintValidator(schema.effectiveConstraint, schema);

    return (value, options) => {
        validateType(value, schema);
        validateConstraint?.(value, options?.siblings);
    }
}

function createStructValidator(
    fields: ValueModel[],
    schema: Schema,
    factory: StateManager
): ValueManager.Validate | undefined {
    const validators = {} as Record<string, ValueManager.Validate>;

    for (const field of fields) {
        validators[camelize(field.name, false)] = factory.get(schema).validate;
    }

    return value => {
        assertObject(value, schema);
        const options: ValidationContext = {
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
                throw new ConformanceError(
                    schema,
                    `Too few fields present for conformance choice ${
                        name
                    } (${
                        choice.count
                    } of min ${
                        choice.target
                    })`
                )
            }
            if (choice.count > choice.target && !choice.orMore) {
                throw new ConformanceError(
                    schema,
                    `Too many fields present for conformance choice ${
                        name
                    } (${
                        choice.count
                    } of max ${
                        choice.target
                    })`
                )
            }
        }
    }
}

function createListValidator(
    schema: ValueModel,
    factory: StateManager,
): ValueManager.Validate | undefined {
    const entry = schema.listEntry;
    let validateEntries: undefined | ((list: Val.List) => void);
    if (entry) {
        let entryValidator = factory.get(entry).validate;

        validateEntries = (list: Val.List) => {
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
