/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FieldValue, Metatype, ValueModel } from "../../src/model/index.js";
import { camelize, serialize } from "../../src/util/String.js";
import { NestedConstantMap as WrappedConstantKeys, TlvGenerator } from "./TlvGenerator.js";

/**
 * Generates a default value for fields based on model definitions.
 */
export class DefaultValueGenerator {
    constructor(private tlv: TlvGenerator) {}

    create(model: ValueModel) {
        const metatype = model.effectiveMetatype;
        
        let defaultValue = model.effectiveDefault;

        if (defaultValue === undefined) {
            if (metatype === Metatype.object) {
                return this.createObject(model);
            }
            return;
        }

        if (defaultValue === null) {
            return defaultValue;
        }

        // TODO - don't currently have a way to express "this field should
        // default to the value of another field" as indicated by
        // model.default.reference
        if (FieldValue.is(defaultValue, FieldValue.reference)) {
            return;
        }

        switch (metatype) {
            case Metatype.integer:
            case Metatype.float:
                return this.createNumeric(defaultValue, model);

            case Metatype.enum:
                return this.createEnum(defaultValue, model);

            case Metatype.bitmap:
                return this.createBitmap(defaultValue, model);

            default:
                return defaultValue;
        }
    }

    /**
     * Simple numbers serialize either as one of our "wrapped ID" things or
     * just as a numeric literal.
     */
    private createNumeric(defaultValue: FieldValue, model: ValueModel) {
        const value = FieldValue.numericValue(defaultValue, model.type);
        const type = model.effectiveType;
        if (type) {
            const fieldName = (WrappedConstantKeys as any)[model.effectiveType];
            if (fieldName) {
                return { [fieldName]: value };
            }
        }
        return value;
    }

    /**
     * For enums, translate ID or string into an enum constant.
     */
    private createEnum(defaultValue: FieldValue, model: ValueModel) {
        if (typeof defaultValue == "number" || typeof defaultValue == "string") {
            const value = model.member(defaultValue);
            if (value) {
                let enumName = this.tlv.nameFor(value.parent);
                if (enumName) {
                    return serialize.asIs(`${enumName}.${value.name}`);
                }
            }
        }
        return defaultValue;
    }

    /**
     * Bitmaps are more complicated.  We need to collect bits into individual
     * fields.  Then we generate a value for each field depending on the field
     * type.
     */
    private createBitmap(defaultValue: FieldValue, model: ValueModel) {
        const bits = FieldValue.numericValue(defaultValue, model.type);
        if (bits === undefined) {
            return defaultValue;
        }

        const fields = new Map<ValueModel, number>();
        for (let bit = 0; Math.pow(bit, 2) <= bits; bit++) {
            if (!(bits & (1 << bit))) {
                continue;
            }

            const definition = model.bitDefinition(bit);
            if (!definition || definition.deprecated) {
                continue;
            }

            const constraint = definition.effectiveConstraint;
            if (constraint.value !== undefined) {
                fields.set(definition, 1);
            } else if (constraint.min !== undefined) {
                const fieldBit = 1 << (bit - (constraint.min as number));
                fields.set(definition, (fields.get(definition) ?? 0) & fieldBit);
            }
        }

        const properties = {} as { [name: string]: boolean | number | string };
        for (const [field, bits] of fields) {
            const name = camelize(field.name, false);
            const constraint = field.effectiveConstraint;
            if (typeof constraint.value === "number") {
                properties[name] = true;
            } else {
                const defining = field.definingModel;
                const enumValue = defining?.member(bits);
                if (enumValue) {
                    properties[name] = serialize.asIs(`${this.tlv.nameFor(defining)}.${enumValue.name}`);
                } else {
                    properties[name] = bits;
                }
            }
        }
        if (!Object.keys(properties).length) {
            return;
        }

        this.tlv.file.addImport("schema/BitmapSchema", "BitsFromPartial");
        return serialize.asIs(`BitsFromPartial(${this.tlv.nameFor(model)}, ${serialize(properties)})`);
    }

    /**
     * Object defaults, if not specified explicitly, are built from field
     * defaults.
     */
    private createObject(model: ValueModel) {
        let result: { [key: string]: any } | undefined;

        for (const child of model.members) {
            const name = camelize(child.name, false);
            if (result && result[name] !== undefined) {
                continue;
            }

            const value = this.create(child);
            if (value !== undefined) {
                if (!result) {
                    result = {};
                }

                result[name] = value;
            }
        }

        return result;
    }
}
