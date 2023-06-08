/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { ByteArray } from "../../util/index.js";
import { Access, BaseDataElement, BaseElement, Conformance, Constraint, DatatypeElement, Globals, Model, Quality } from "../index.js";
import type { DatatypeModel } from "../index.js";

/**
 * Base class for all data element implementations.
 */
export abstract class DataModel extends Model implements BaseDataElement {
    base?: string;
    byteSize?: BaseDataElement.Size;
    default?: any;
    override children!: DatatypeModel[];

    constraint: Constraint;
    conformance: Conformance;
    access: Access;
    quality: Quality;

    override validate() {
        this.validateProperty({ name: "base", type: "string" });
        this.validateProperty({ name: "byteSize", type: "number" });
        this.validateProperty({ name: "constraint", type: Constraint, required: true });
        this.validateProperty({ name: "conformance", type: Conformance, required: true });
        this.validateProperty({ name: "access", type: Access, required: true });
        this.validateProperty({ name: "quality", type: Quality, required: true });

        this.validateType();

        return super.validate();
    }

    protected constructor(definition: BaseDataElement.Properties, parent?: Model) {
        super(definition, parent);

        try {
            this.constraint = new Constraint(definition.constraint);
        } catch (e) {
            if (!(e instanceof MatterError)) {
                throw e;
            }
            this.error(e);
            this.constraint = new Constraint(undefined);
        }

        try {
            this.conformance = new Conformance(definition.conformance);
        } catch (e) {
            if (!(e instanceof MatterError)) {
                throw e;
            }
            this.error(e);
            this.conformance = new Conformance(undefined);
        }
        
        try {
            this.access = new Access(definition.access);
        } catch (e) {
            if (!(e instanceof MatterError)) {
                throw e;
            }
            this.error(e);
            this.access = new Access(undefined);
        }

        try {
            this.quality = new Quality(definition.quality);
        } catch (e) {
            if (!(e instanceof MatterError)) {
                throw e;
            }
            this.error(e);
            this.quality = new Quality(undefined);
        }
    }

    /**
     * Access the DataModel this model derives from, if any.
     */
    get baseModel(): DataModel | undefined  {
        if (this.base) {
            const base = this.global(this.base, DatatypeElement.Type, [ this ]);
            if (!(base instanceof DataModel)) {
                // Ignore error, handled in validation
                return undefined;
            }
            return base.baseModel;
        }
    }

    /**
     * Access the JS type for this data element.
     */
    get nativeType(): DataModel.NativeType | undefined {
        return undefined;
    }
    
    /**
     * Convert a string to the type defined by an element.
     */
    parseValue(value: string) {
        const native = this.nativeType;
        if (native == String) {
            return value;
        }

        switch (native) {
            case Boolean:
                value = value.trim().toLowerCase();
                switch (value) {
                    case "false":
                    case "no":
                    case "":
                        return false;

                    default:
                        return true;
                }
            
            case BigInt:
                try {
                    const i = BigInt(value);
                    const n = Number(i);
                    if (BigInt(n) == i) {
                        return n;
                    }
                    return i;
                } catch (e) {
                    if (e instanceof SyntaxError) {
                        return NaN;
                    } else {
                        throw e;
                    }
                }

            case Number:
                return Number(value);

            case Date:
                return new Date(Date.parse(value));
        }

        return undefined;
    }

    private validateType() {
        if (this.base == undefined) {
            if ((Globals as any)[this.name] != this) {
                this.error("data model has no base type but is not global");
            } else if (!(BaseDataElement.Datatype as any)[this.name]) {
                this.error("data model has no base but is not primitive type");
            }
            return;
        }
        
        const base = this.global(this.base);
        if (base == undefined) {
            this.error(`cannot resolve base type ${this.base}`);
            return;
        }
        if (base.type != BaseElement.Type.Datatype) {
            this.error(`base type ${this.base} resolves to ${base.type} element (expected datatype)`);
            return;
        }

        const T = this.nativeType;
        if (T == undefined) {
            this.error(`native type unknown`);
            return;
        }
        let d = this.default;
        if (d == undefined) {
            // undefined and null are both OK
            return;
        }

        const t = typeof d;
        if (T == String) {
            if (t != "string") {
                this.error(`type is ${t} (expected string)`);
            }
            return;
        }

        if (typeof t == "string") {
            d = this.parseValue(d);
            if (d == undefined) {
                this.error(`default value ${d} does not parse`);
                return;
            }
            if (Number.isNaN(d)) {
                this.error(`default value ${d} parses to NaN`);
                return;
            }
            if (d instanceof Date && Number.isNaN(d.valueOf())) {
                this.error(`default value ${d} parses to invalid date`);
                return;
            }
            this.default = d;
            return;
        }

        d = d.valueOf();
        if (Number.isNaN(d)) {
            this.error(`default value is NaN`);
        }
        let to: string = typeof d;
        if (to == "object") {
            to = d.constructor.name;
        }
        switch (T) {
            case Boolean:
                if (to != "boolean") {
                    this.error(`default value is ${to} (expected boolean)`);
                }

            case BigInt:
            case Number:
                if (to != "number" && to != "bigint") {
                    this.error(`default value is ${to} (expected number or bigint)`);
                }
                break;

            case ByteArray:
                if (!(d instanceof Uint8Array)) {
                    this.error(`default value is ${to} (expected byte array)`);
                }
                break;

            case Array:
                if (!(Array.isArray(d))) {
                    this.error(`default value is ${to} (expected array)`);
                }
                break;

            case Object:
                if (typeof d != "object") {
                    this.error(`default value is ${to} (expected object)`);
                }
                break;

            case Date:
                if (to != "number" && to != "Date") {
                    this.error(`default value is ${to} (expected date)`);
                }
                break;
        }
    }
}

export namespace DataModel {
    export type NativeType =
        typeof Boolean
        | typeof BigInt
        | typeof Number
        | typeof ByteArray
        | typeof Array
        | typeof Object
        | typeof String
        | typeof Date;
}
