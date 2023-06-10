/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { ByteArray } from "../../util/index.js";
import { Access, BaseDataElement, BaseElement, Conformance, Constraint, DatatypeElement, Globals, Model, Quality } from "../index.js";
import { DatatypeModel } from "../index.js";

const CONSTRAINT: unique symbol = Symbol("constraint");
const CONFORMANCE: unique symbol = Symbol("conformance");
const ACCESS: unique symbol = Symbol("access");
const QUALITY: unique symbol = Symbol("quality");

/**
 * Base class for all data element implementations.
 */
export abstract class DataModel extends Model implements BaseDataElement {
    base?: string;
    byteSize?: BaseDataElement.Size;
    default?: any;

    override get children(): DatatypeModel[] {
        return super.children as any;
    }

    override set children(children: (DatatypeModel | DatatypeElement)[]) {
        super.children = children;
    }

    get constraint() {
        return this.getAspect(CONSTRAINT, Constraint);
    }

    set constraint(definition: Constraint | Constraint.Definition) {
        this.setAspect(CONSTRAINT, Constraint, definition);
    }

    get conformance() {
        return this.getAspect(CONFORMANCE, Conformance);
    }

    set conformance(definition: Conformance | Conformance.Definition) {
        this.setAspect(CONFORMANCE, Conformance, definition);
    }

    get access() {
        return this.getAspect(ACCESS, Access);
    }

    set access(definition: Access | Access.Definition) {
        this.setAspect(ACCESS, Access, definition);
    }

    get quality() {
        return this.getAspect(QUALITY, Quality);
    }

    set quality(definition: Quality | Quality.Definition) {
        this.setAspect(QUALITY, Quality, definition);
    }

    override validate() {
        this.validateProperty({ name: "base", type: "string" });
        this.validateProperty({ name: "byteSize", type: "number" });
        this.validateProperty({ name: "constraint", type: Constraint });
        this.validateProperty({ name: "conformance", type: Conformance });
        this.validateProperty({ name: "access", type: Access });
        this.validateProperty({ name: "quality", type: Quality });

        this.validateAspect(CONSTRAINT);
        this.validateAspect(CONFORMANCE);
        this.validateAspect(ACCESS);
        this.validateAspect(QUALITY);

        this.validateType();

        return super.validate();
    }

    protected constructor(definition: BaseDataElement.Properties, parent?: Model) {
        super(definition, parent);
    }

    /**
     * Access the DataModel this model derives from, if any.
     */
    get baseModel(): DataModel | undefined {
        const visited = new Set<Model>();
        let model: DataModel | undefined = this;
        while (model?.base) {
            visited.add(model);
            model = model.global(model.base, DatatypeModel, [ this ]);
            if (model) {
                if (visited.has(model)) {
                    throw new MatterError(`Circular inheritance detected for ${this.path}`);
                }
            }
        }
        return model;
    }

    /**
     * Access the JS type for this data element.
     */
    get nativeType(): DataModel.NativeType | undefined {
        return this.baseModel?.nativeType;
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

    private getAspect(symbol: symbol, constructor: new(definition: any) => any) {
        return (this as any)[symbol] || ((this as any)[symbol] = new constructor(undefined));
    }

    private setAspect(symbol: symbol, constructor: new(definition: any) => any, value: any) {
        if (value instanceof constructor) {
            (this as any)[symbol] = value;
        } else {
            (this as any)[symbol] = new constructor(value);
        }
    }

    private validateAspect(symbol: symbol) {
        const aspect = (this as any)[symbol];
        if (aspect?.errors) {
            this.error(aspect);
        }
    }

    private validateType() {
        if (this.base == undefined) {
            if ((Globals as any)[this.name] != this) {
                this.error("Data model has no base type but is not global");
            } else if (!(BaseDataElement.Datatype as any)[this.name]) {
                this.error("Data model has no base but is not primitive type");
            }
            return;
        }
        
        const base = this.global(this.base, DatatypeModel);
        if (base == undefined) {
            this.error(`Unknown base type ${this.base}`);
            return;
        }

        // This shouldn't happen because we limit search above to datatype.
        // Leaving in as a sanity check though
        if (base.type != BaseElement.Type.Datatype) {
            this.error(`Base type ${this.base} resolves to ${base.type} element (expected datatype)`);
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
                this.error(`Type is ${t} (expected string)`);
            }
            return;
        }

        if (typeof t == "string") {
            d = this.parseValue(d);
            if (d == undefined) {
                this.error(`Default value ${d} does not parse`);
                return;
            }
            if (Number.isNaN(d)) {
                this.error(`Default value ${d} parses to NaN`);
                return;
            }
            if (d instanceof Date && Number.isNaN(d.valueOf())) {
                this.error(`Default value ${d} parses to invalid date`);
                return;
            }
            this.default = d;
            return;
        }

        d = d.valueOf();
        if (Number.isNaN(d)) {
            this.error(`Default value is NaN`);
        }
        let to: string = typeof d;
        if (to == "object") {
            to = d.constructor.name;
        }
        switch (T) {
            case Boolean:
                if (to != "boolean") {
                    this.error(`Default value is ${to} (expected boolean)`);
                }

            case BigInt:
            case Number:
                if (to != "number" && to != "bigint") {
                    this.error(`Default value is ${to} (expected number or bigint)`);
                }
                break;

            case ByteArray:
                if (!(d instanceof Uint8Array)) {
                    this.error(`Default value is ${to} (expected byte array)`);
                }
                break;

            case Array:
                if (!(Array.isArray(d))) {
                    this.error(`Default value is ${to} (expected array)`);
                }
                break;

            case Object:
                if (typeof d != "object") {
                    this.error(`Default value is ${to} (expected object)`);
                }
                break;

            case Date:
                if (to != "number" && to != "Date") {
                    this.error(`Default value is ${to} (expected date)`);
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
