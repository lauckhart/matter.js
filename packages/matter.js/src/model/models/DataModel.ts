/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    Access,
    BaseDataElement,
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
    Globals
} from "../index.js";

const CONSTRAINT: unique symbol = Symbol("constraint");
const CONFORMANCE: unique symbol = Symbol("conformance");
const ACCESS: unique symbol = Symbol("access");
const QUALITY: unique symbol = Symbol("quality");

/**
 * Each BaseDataElement has a corresponding implementation that derives from
 * this class.
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
     * happens here.
     * 
     * Does not recurse so only returns the direct base type.
     */
    get actualBase() {
        return this.base;
    }

    /**
     * Search the inheritance chain for a child.
     */
    member(key: string | number): Model | undefined {
        return this.find(
            DataModel.nextBase,
            current => current.local(key, DataModel.DatatypeModel)
        );
    }

    /**
     * Determine the metatype of this element.  This requires us to search the
     * inheritance hierarchy until we find a global element with a semantic
     * definition we understand.
     */
    get metatype(): Metatype | undefined {
        return this.find(
            DataModel.nextBase,
            current => {
                if (current instanceof DataModel) {
                    const metatype = Metatype.of(current.name);
                    if (metatype) {
                        const global = (Globals as any)[current.name];
                        if (global && global.base == current.base) {
                            return metatype;
                        }
                    }
                }
            }
        )
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

    protected constructor(definition: BaseDataElement.Properties) {
        super(definition);

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
            if ((Globals as any)[this.name]) {
                // Not a derivative type
                return;
            }

            // Non-global types must specify a base type
            this.error("NO_TYPE", "No type information");
            return;
        }
        
        const base = this.global(this.actualBase, DataModel.DatatypeModel);
        if (base == undefined) {
            this.error("TYPE_UNKOWN", `Unknown type ${this.base}`);
            return;
        }

        const metatype = this.metatype;
        if (metatype == undefined) {
            this.error("METATYPE_UNKOWN", `No metatype for ${this.base}`);
            return;
        }

        // Require a value for enum and bitmap values.  These are any children
        // of enums or bitmaps
        if (this.value == undefined) {
            if (this.parent instanceof DataModel) {
                switch (this.parent.metatype) {
                    case Metatype.enum:
                    case Metatype.bitmap:
                        this.error("MISSING_ITEM_VALUE", `No value for ${this.parent.base} child`)
                }
            }

            // If not an enum or bitmap, undefined and null are both OK
            return;
        }

        // Convert value to proper type if possible
        const value = Metatype.cast(metatype, this.value);
        if (value == Metatype.Invalid) {
            this.error("INVALID_VALUE", `Value "${this.value}" is not a ${metatype}`);
            return;
        }
        this.value = value;

        // For bitmaps and enums, convert string name to numeric ID
        if (metatype == Metatype.bitmap || metatype == Metatype.enum) {
            if (typeof value == "string") {
                const member = this.member(value);
                if (member) {
                    this.value = member.id;
                } else {
                    this.error("INVALID_ENTRY", `"${value}" is not in ${metatype} ${this.base}`);
                }
            }
        }
    }
}

export namespace DataModel {
    // Set in DatatypeModel.ts
    export let DatatypeModel = undefined as unknown as new(properties: DatatypeElement.Properties, parent?: Model) => DatatypeModel;

    export function nextBase(current: Model) {
        if (current instanceof DataModel) {
            return current.global(current.actualBase, DataModel.DatatypeModel);
        }
    }
}
