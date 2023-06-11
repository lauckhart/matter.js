/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { DefinitionError } from "../definitions/DefinitionError.js";
import { AnyElement, BaseElement } from "../index.js";

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
    parent?: Model;

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

    protected static constructors = {} as { [ type: string ]: new(definition: any) => Model };

    protected constructor(definition: BaseElement) {
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
            throw new MatterError(`Model definition must be object, not ${typeof definition}`);
        }
        const t = definition["type"];
        const constructor = Model.constructors[t];
        if (!constructor) {
            throw new MatterError(`Unknown element type "${t}"`);
        }
        return new constructor(definition);
    }

    /**
     * Retrieve a model from local scope.
     * 
     * Not indexed; may need to address if this become problematically slow.
     * 
     * @param key the name or ID of the element to find
     * @param type the type of the element to find
     * @param ignore a list of Models to ignore; used to handle name conflicts
     */
    local<T>(key: string | number | undefined, type: (new(...args: any) => T), ignore: Model[] = []): T | undefined {
        for (const c of this.children) {
            if (c.is(key) && c instanceof type && ignore.indexOf(c) == -1) {
                return c;
            }
        }
    }

    /**
     * Retrieve an element from visible scope.
     * 
     * @param key the name or ID of the element to find
     * @param type the type of the element to find
     */
    global<T>(key: string | number | undefined, type: (new(...args: any) => T)): T | undefined {
        return this.find(
            current => current.parent,
            current => current.local(key, type)
        );
    }

    /**
     * Search for a related model.  Protects against infinite loops.
     * 
     * @param next moves to the next model
     * @param test return any defined value to terminate the search
     * 
     * @returns the first defined result from `test`
     */
    find<T>(next: (current: Model) => Model | undefined, test: (current: Model) => T | undefined): T | undefined {
        const visited = new Set<Model>();
        for (let current: Model | undefined = this; current; current = next(current)) {
            if (visited.has(current)) {
                throw new MatterError("Recursive model structure detected");
            }
            const result = test(current);
            if (result !== undefined) {
                return result;
            }
            visited.add(this);
        }
    }

    /**
     * Check identity of element by name or ID.
     */
    is(key: string | number | undefined) {
        if (typeof key == "number") {
            return this.id == key;
        }
        return this.name == key;
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

    protected validateStructure(type: BaseElement.Type, requireId: boolean, ...childTypes: (new(...args: any) => Model)[]) {
        this.validateProperty({ name: "id", type: "number", required: requireId });
        if (this.type != type) {
            this.error("UNEXPECTED_TYPE", `Type is ${this.type} (expected ${type})`);
        }
        if (this.children && childTypes.length) {
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
