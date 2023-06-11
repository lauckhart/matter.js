/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { ByteArray } from "../../util/index.js";
import {
    Access,
    BaseDataElement,
    BaseElement,
    Conformance,
    Constraint,
    DatatypeElement,
    Model,
    Quality,
    Metatype,

    // This is a circular dependency so just to be safe we only import the
    // type.  We also need the class, though, at runtime.  So just to be safe
    // DatatypeModel installs itself into a special slot in the DataModel
    // namespace.
    type DatatypeModel,
    Globals,
    Datatype
} from "../index.js";

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
    value?: any;

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

    /**
     * In some circumstances the base type can be inferred.  This inference
     * happens here in subclasses.
     * 
     * Does not recurse so only returns the direct base type.
     */
    get actualBase() {
        return this.base;
    }

    /**
     * Access the DataModel this model derives from, if any.
     */
    get baseModel(): DataModel | undefined {
        // Some derivative types have very specialized handling.  In these
        // cases we don't want the actual base model.  This map allows us to
        // detect these cases.
        //
        // Out of an abundance of caution, we only treat a datatype as
        // "special" if it has the correct name (the key in this map) *and*
        // the correct base type (the value in this map)
        const SpecializedDerivatives = {
            [Globals.enum8.name]: Datatype.uint8,
            [Globals.enum16.name]: Datatype.uint16,
            [Globals.string.name]: Datatype.octstr,
            [Globals.date.name]: Datatype.struct
        }

        const visited = new Set<Model>();
        let model: DataModel | undefined = this;
        while (model?.actualBase) {
            if (SpecializedDerivatives[model.name] == model.actualBase) {
                break;
            }

            visited.add(model);
            model = model.global(model.actualBase, DataModel.DatatypeModel, [ this ]);
            if (model) {
                if (visited.has(model)) {
                    throw new MatterError(`Circular inheritance detected for ${this.path}`);
                }
            }
        }
        return model;
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

        const match = this.base?.match(/^list\[(.*)\]$/);
        if (match) {
            this.base = "list";
            this.children.push(new DataModel.DatatypeModel({ name: "entry", base: match[1] }));
        }
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
            this.addErrors(aspect);
        }
    }

    private validateType() {
        if (this.actualBase == undefined) {
            this.error("BASE_INDETERMINATE", "Cannot determine base type")
            return;
        }
        
        const base = this.baseModel;
        if (base == undefined) {
            this.error("BASE_UNKOWN", `Unknown base type ${this.base}`);
            return;
        }

        // This shouldn't happen because base search is limited to datatype.
        // Leaving in as a sanity check though
        if (base.type != BaseElement.Type.Datatype) {
            this.error("BASE_NOT_DATATYPE", `Base type ${this.base} resolves to ${base.type} element (expected datatype)`);
            return;
        }

        const metatype = Metatype.of(base.name);
        const T = Metatype.native(metatype);
        if (T == undefined) {
            this.error("NATIVE_TYPE_UNKOWN", `Native type of ${this.type} unknown`);
            return;
        }
        if (this.value == undefined) {
            // Handle both undefined and null the same way
            if (this.parent instanceof DataModel) {
                switch (Metatype.of(this.parent.base)) {
                    case Metatype.enum:
                    case Metatype.bitmap:
                        this.error("MISSING_ITEM_VALUE", `No value for ${this.parent.base} child`)
                }
            }
            return;
        }

        const t = typeof this.value;
        if (T == String) {
            if (t != "string") {
                this.error("STRING_VALUE_EXPECTED", `Type is ${t} (expected string)`);
            }
            return;
        }

        if (t == "string") {
            const value = Metatype.parse(metatype, this.value);
            if (value === undefined) {
                this.error("VALUE_UNPARSEABLE", `Value ${this.value} does not parse as ${this.actualBase}`);
                return;
            }

            if (Number.isNaN(value)) {
                // For enumerations and bitmap, an item name is acceptable
                if (metatype == Metatype.bitmap || metatype == Metatype.enum) {
                    if (base.local(this.value, DataModel.DatatypeModel)) {
                        return;
                    }
                }
                this.error("STRING_IS_NAN", `Value ${this.value} parses to NaN`);
                return;
            }
            
            if (value instanceof Date && Number.isNaN(value.valueOf())) {
                this.error("INVALID_DATE", `Value ${this.value} parses to invalid date`);
                return;
            }
            
            this.value = value;
            return;
        }

        const value = this.value.valueOf();
        if (Number.isNaN(value)) {
            this.error("VALUE_IS_NAN", `Value is NaN`);
        }
        let to: string = typeof value;
        if (to == "object") {
            to = value.constructor.name;
        }
        switch (T) {
            case Boolean:
                if (to != "boolean") {
                    this.error("VALUE_NOT_BOOLEAN", `Value is ${to} (expected boolean)`);
                }

            case BigInt:
            case Number:
                if (to != "number" && to != "bigint") {
                    this.error("VALUE_NOT_NUMBER", `Value is ${to} (expected number or bigint)`);
                }
                break;

            case ByteArray:
                if (!(value instanceof Uint8Array)) {
                    this.error("VALUE_NOT_BYTES", `Value is ${to} (expected byte array)`);
                }
                break;

            case Array:
                if (!(Array.isArray(value))) {
                    this.error("VALUE_NOT_ARRAY", `Value is ${to} (expected array)`);
                }
                break;

            case Object:
                if (typeof value != "object") {
                    this.error("VALUE_NOT_OBJECT", `Value is ${to} (expected object)`);
                }
                break;

            case Date:
                if (to != "number" && to != "Date") {
                    this.error("VALUE_NOT_DATE", `Value is ${to} (expected date)`);
                }
                break;
        }
    }
}

export namespace DataModel {
    // Set in DatatypeModel.ts
    export let DatatypeModel = undefined as unknown as new(properties: DatatypeElement.Properties, parent?: Model) => DatatypeModel;
}
