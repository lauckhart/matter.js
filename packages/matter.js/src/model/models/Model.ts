/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { DefinitionError } from "../definitions/DefinitionError.js";
import { AnyElement, BaseElement, Globals } from "../index.js";

const CHILDREN = Symbol("children");

/**
 * A "model" is a class that implements runtime functionality associated with
 * the corresponding element type.
 */
export abstract class Model implements BaseElement {
    abstract readonly type: AnyElement["type"];
    id?: number;
    name!: string;
    description?: string;
    details?: string;
    xref?: Model.CrossReference;
    errors?: DefinitionError[];
    accept?: string[];

    /**
     * Did validation find errors?
     */
    get valid() {
        return !this.errors;
    }

    /**
     * The full path ("." delimited) in the Matter tree.
     */
    get path(): string {
        if (this.parent) {
            return `${this.parent.path}.${this.name}`;
        } else {
            return this.name;
        }
    }

    /**
     * Children of models are always models.
     */
    get children(): Model[] {
        if (!this[CHILDREN]) {
            this.children = [];
        }
        return this[CHILDREN];
    }

    /**
     * Children can be added as models or elements.
     */
    set children(children: (Model | AnyElement)[]) {
        this[CHILDREN] = new Proxy([], {
            get: (target, p, receiver) => {
                let result = Reflect.get(target, p, receiver);
                if (!(result instanceof Model) && typeof p == "string" && p.match(/^[0-9]+$/)) {
                    result = Model.create(result);
                    result.parent = this;
                    Reflect.set(target, p, result, receiver);
                }
                return result;
            },

            set: (target, p, newValue, receiver) => {
                if (typeof p == "string" && p.match(/^[0-9]+$/)) {
                    if (newValue instanceof Model) {
                        if (newValue.parent) {
                            newValue = { ...newValue };
                            delete newValue.parent;
                        } else {
                            newValue.parent = this;
                        }
                    } else if (typeof newValue != "object" || newValue === null || !newValue.type) {
                        throw new MatterError("Node child must be Model or AnyElement");
                    }
                }
                return Reflect.set(target, p, newValue, receiver);
            }
        });
        this[CHILDREN].push(...children);
    }

    private [CHILDREN]!: Array<any>;

    protected static constructors = {} as { [ type: string ]: new(definition: any, parent?: Model) => Model };

    protected constructor(definition: BaseElement, public parent?: Model) {
        // Copy all definition properties.  Types will be wrong for some of
        // them but constructors correct this.  Properties for which type is
        // correct are suffixed with "!" to indicate no further initialization
        // is necessary
        for (const [k, v] of Object.entries(definition)) {
            if (v !== undefined) {
                (this as any)[k] = v;
            }
        }
        if (this.xref) {
            this.xref = new Model.CrossReference(this.xref);
        }
    }

    /**
     * Create a model for an element.
     */
    static create(definition: AnyElement) {
        if (typeof definition != "object") {
            throw new MatterError(`Model definition must be objects, not ${typeof definition}`);
        }
        const t = definition["type"];
        const constructor = Model.constructors[t];
        if (!constructor) {
            throw new MatterError(`Unknown model definition type "${t}"`);
        }
        return new constructor(definition);
    }

    /**
     * Retrieve a model from local scope by name.
     * 
     * Not indexed; may need to address if this become problematically slow.
     * 
     * @param name the name of the element to find
     * @param type the type of the element to find
     * @param ignore a list of Models to ignore; used to handle name conflicts
     */
    local<T>(name: string, type: (new(...args: any) => T), ignore: Model[] = []): T | undefined {
        for (const c of this.children) {
            if (c.name == name && c instanceof type && ignore.indexOf(c) == -1) {
                return c;
            }
        }
    }

    /**
     * Retrieve an element from global scope by name.
     * 
     * @param name the name of the element to find
     * @param type the type of the element to find
     * @param ignore a list of Models to ignore; used to avoid infinite loops
     */
    global<T>(name: string, type: (new(...args: any) => T), ignore: Model[] = []): T | undefined {
        let result = this.local(name, type, ignore);
        if (result) {
            return result;
        }

        if (this.parent) {
            ignore.push(this);
            try {
                 return this.parent.global(name, type, ignore);
            } finally {
                ignore.pop();
            }
        }

        const global = this.globals[name];
        if (global instanceof type) {
            return global;
        }
    }

    /**
     * Record a validation error for this model.
     */
    error(code: string, message: string) {
        if (this.accept && this.accept.indexOf(code) != -1) {
            return;
        }

        if (!this.errors) {
            this.errors = [];
        }
        
        this.errors.push({
            code,
            source: this.path,
            message
        })
    }

    /**
     * Record validation errors from an aspect of this model.
     */
    addErrors(aspect: { errors: DefinitionError[] }) {
        aspect.errors?.forEach((e) => this.errors?.push({ ...e, source: `${this.path} ${e.source}`}))
    }

    /**
     * Convert model to JSON.
     */
    toJSON() {
        const fields = { ...this };
        delete fields.parent;
        delete fields.errors;
        return fields;
    }

    /**
     * Validates the model's definition.  Places errors into the errors array
     * of individual elements and logs.
     * 
     * For data elements, parses default values as a side effect.
     * 
     * @return the number of validation errors
     */
    validate(): number {
        this.validateProperty({ name: "name", type: "string", required: true });
        this.validateProperty({ name: "description", type: "string" });
        this.validateProperty({ name: "details", type: "string" });
        this.validateProperty({ name: "children", type: Array });

        let errors = 0;
        if (this.errors) {
            errors += this.errors.length;
        }

        for (const c of this.children) {
            errors += c.validate();
        }

        return errors;
    }

    /**
     * Apply a function to all tree elements.
     */
    visit(visitor: (model: Model) => boolean | void): boolean {
        if (visitor(this) === false) {
            return false;
        }
        for (const c of this.children) {
            if (c.visit(visitor) === false) {
                return false;
            }
        }
        return true;
    }    

    /**
     * Access global scope.  The default implementation returns models for
     * elements defined in Globals.ts.
     */
    protected get globals() {
        if (!globalCache) {
            globalCache = Object.fromEntries(
                Object.entries(Globals).map(
                    ([k, v]) => [ k, Model.create(v) ]
                )
            );
        }
        return globalCache;
    }

    protected validateStructure(type: BaseElement.Type, requireId: boolean, ...childTypes: (new(...args: any) => Model)[]) {
        this.validateProperty({ name: "id", type: "number", required: requireId });
        if (this.type != type) {
            this.error("UNEXPECTED_TYPE", `Type is ${this.type} (expected ${type})`);
        }
        if (this.children) {
            let index = 0;
            for (const child of this.children) {
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
        const value = (this as any)[name];
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

let globalCache: { [name: string]: Model } | undefined;

export namespace Model {
    export type PropertyValidation = {
        name: string,
        type: string | (new(...args: any[]) => any) | { [key: string | number]: any } | undefined,
        required?: boolean,
        nullable?: boolean
    }

    export class CrossReference implements BaseElement.CrossReference {
        document: BaseElement.Specification;
        version: string;
        section: string;

        constructor({ document, section, version }: BaseElement.CrossReference) {
            this.document = document as BaseElement.Specification;
            this.section = section;
            this.version = version;
        }

        toString() {
            return `${this.document}§${this.section}`
        }
    }
}
