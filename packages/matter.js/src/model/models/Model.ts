/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { DefinitionError } from "../definitions/DefinitionError.js";
import { AnyElement, BaseElement, ElementType, Specification } from "../index.js";
import { ValidateModel } from "../logic/ValidateModel.js";

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
        if (this.parent && this.parent.type != ElementType.Matter) {
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
     * Element view of children.  For TypeScript this allows children to be
     * added as elements.  For JavaScript this is identical to children().
     */
    get elements(): AnyElement[] {
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

    /**
     * Factory support.  Populated by derivatives upon definition.
     */
    static constructors = {} as { [ type: string ]: new(definition: any) => Model };

    private [CHILDREN]!: Array<any>;

    /**
     * Access the top-most element in the model.
     */
    get root(): Model {
        return this.search(
            model => model.parent,
            model => model.parent ? undefined : model,
            true
        ) as Model;
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
     * Retrieve all models of a specific element type from local scope.
     * 
     * @param type the element type to retrieve
     */
    local<T>(type: Model.Constructor<T>): T[];

    /**
     * Retrieve a model from local scope
     * 
     * @param type the element type to retrieve
     * @param key the ID or name of the model to retrieve
     */
    local<T>(type: Model.Constructor<T>, key: string | number): T | undefined;

    local<T>(type: Model.Constructor<T>, key?: string | number): T | T[] | undefined {
        // Not - not indexed.  Not currently a problem but should address if
        // becomes problematically slow
        const found = key === undefined ? Array<T>() : undefined;
        for (const c of this.children) {
            if (c instanceof type) {
                if (key === undefined) {
                    found!.push(c);
                } else if (c.is(key)) {
                    return c;
                }
            }
        }
        return found;
    }

    /**
     * Retrieve all models of a specific element type from global scope.
     * 
     * @param type the element type to retrieve
     */
    global<T>(type: Model.Constructor<T>): T[];

    /**
     * Retrieve a model from global scope.
     * 
     * @param type the element type to retrieve
     * @param key the ID or name of the model to retrieve
     */
    global<T>(type: Model.Constructor<T>, key: string | number): T;

    global<T>(type: Model.Constructor<T>, key?: string | number): T | T[] | undefined {
        return this.search(
            current => current.parent,
            current => current.local(type, key as any),
            key !== undefined
        );
    }

    search<T>(
        next: (current: Model) => Model | undefined,
        test: (current: Model) => T | undefined,
        first: boolean
    ): T[] | T | undefined {
        const found = first ? undefined : Array<T>();
        const visited = new Set<Model>();
        for (let current: Model | undefined = this; current; current = next(current)) {
            if (visited.has(current)) {
                throw new MatterError("Recursive model structure detected");
            }
            const result = test(current);
            if (result !== undefined) {
                if (first) {
                    return result;
                } else {
                    found!.push(result);
                }
            }
            visited.add(this);
        }
        if (!first) {
            return found;
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
            message,
            xref: this.xref?.toString()
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
        return this.valueOf();
    }

    /**
     * Convert to non-class structure.
     */
    valueOf(): AnyElement {
        const result = { ...this };

        delete result.parent;
        delete result.errors;
        
        return result as AnyElement;
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
     * Validate the model.  Places validation errors into the errors array and
     * casts the default value to the proper type.
     */
    validate() {
        ValidateModel(this);
    }

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
}

export namespace Model {
    export type Constructor<T> = new(...args: any) => T;

    export type PropertyValidation = {
        name: string,
        type: string | (new(...args: any[]) => any) | { [key: string | number]: any } | undefined,
        required?: boolean,
        nullable?: boolean,
        values?: { [name: string]: any }
    }

    export class CrossReference implements Specification.CrossReference {
        document: Specification;
        version: string;
        section: string;

        constructor({ document, section, version }: Specification.CrossReference) {
            this.document = document as Specification;
            this.section = section;
            this.version = version;
        }

        toString() {
            return `${this.document}§${this.section}`
        }
    }
}
