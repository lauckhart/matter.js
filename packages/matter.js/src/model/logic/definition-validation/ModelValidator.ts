/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, ElementType, Model } from "../../index.js";

/**
 * Base class for all model validators.
 */
export class ModelValidator<T extends Model> {
    constructor(protected model: T) {
    }

    validate() {
        this.validateProperty({ name: "name", type: "string", required: true });
        this.validateProperty({ name: "description", type: "string" });
        this.validateProperty({ name: "details", type: "string" });
        this.validateProperty({ name: "children", type: Array });
    }

    error(code: string, message: string) {
        this.model.error(code, message);
    }

    protected validateStructure(requireId: boolean, ...childTypes: (new(...args: any) => Model)[]) {
        this.validateProperty({ name: "id", type: "number", required: requireId });
        if (this.model.children && childTypes.length) {
            let index = 0;
            for (const child of this.model.children) {
                let ok = false;
                for (const type of childTypes) {
                    if (child instanceof type) {
                        ok = true;
                        break;
                    }
                }
                if (!ok) {
                    this.error("UNACCEPTABLE_TYPE", `Children[${index}] type ${child.constructor.name} is not allowed`);
                }
                index++;
            }
        }
    }

    protected validateProperty({ name, type, required, nullable }: Model.PropertyValidation) {
        const value = (this.model as any)[name];
        if (value === undefined) {
            if (required) {
                this.error("REQUIRED_PROPERTY", `Missing required property ${name}`);
                return;
            }
            return;
        }
        if (value === null) {
            if (nullable) {
                this.error("NULL_PROPERTY", `Property ${name} is null`);
                return;
            }
            return;
        }
        if (Number.isNaN(value)) {
            this.error("NAN_PROPERTY", `Property ${name} is NaN`);
        }
        if (type == undefined) {
            return;
        }
        if (typeof type == "string") {
            if (typeof value != type) {
                this.error("NON_STRING_PROPERTY", `Property ${name} type is ${typeof value} (expected ${type})`);
            }
            return;
        }
        if (typeof type == "function") {
            if (!(value instanceof type)) {
                this.error("PROPERTY_NOT_INSTANCE", `Property ${name} is not an instance of ${type.name}`);
            }
            return;
        }
        if (Object.values(type).indexOf(value) == -1) {
            this.error("INVALID_ENUM_KEY", `Property ${name} value ${value} is not in enum`);
        }
    }
}

export namespace ModelValidator {
    export const validators = {} as {
        [key in ElementType]: new(model: any) => ModelValidator<any>
    };
}
