/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/index.js";
import { DefinitionError, ElementTag, Specification } from "../definitions/index.js";
import { AnyElement, BaseElement } from "../elements/index.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";

const CHILDREN = Symbol("children");

/**
 * A "model" is a class that implements runtime functionality associated with
 * the corresponding element type.
 */
export abstract class Model {
    // These fields are defined in BaseElement.  This base class does not
    // implement an element but subclasses do
    abstract readonly tag: ElementTag;
    id?: number;
    name!: string;
    type?: string;
    description?: string;
    details?: string;
    xref?: Model.CrossReference;
    errors?: DefinitionError[];

    /**
     * The structural parent.  This is the model for the element that contains
     * this element's definition.
     */
    parent?: Model;

    /**
     * Flag set on elements loaded from Globals.
     */
    isGlobal?: boolean;

    /**
     * Indicates that an element may have type definitions as children.
     */
    isTypeScope?: boolean;

    /**
     * Indicates that an element defines a datatype.
     */
    isType?: boolean;

    private [CHILDREN]!: Array<any>;

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
        if (this.parent && this.parent.tag != ElementTag.Matter) {
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
     * Allows subclasses to pull a working ID from an alternate source.
     */
    get effectiveId() {
        return this.id;
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
                    } else if (typeof newValue != "object" || newValue === null || !newValue.tag) {
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

    /**
     * In some circumstances the base type can be inferred.  This inference
     * happens here.
     * 
     * Does not recurse so only returns the direct base type.
     */
    get effectiveType() {
        return this.type;
    }

    /**
     * Get a Model for my base type, if any.
     */
    get base(): Model | undefined {
        return new ModelTraversal().findBase(this);
    }

    /**
     * The set of tags from which this model may derive.
     */
    get allowedBaseTags() {
        return [ this.tag ];
    }

    /**
     * Create a model for an element.
     */
    static create(definition: AnyElement) {
        if (typeof definition != "object") {
            throw new MatterError(`Model definition must be object, not ${typeof definition}`);
        }
        const t = definition["tag"];
        const constructor = Model.constructors[t];
        if (!constructor) {
            throw new MatterError(`Unknown element tag "${t}"`);
        }
        return new constructor(definition);
    }

    /**
     * Retrieve all models of a specific element type from local scope.
     * 
     * @param test model class or a predicate object
     */
    childrenOfType<T>(constructor: abstract new(...args: any[]) => T) {
        return this.children.filter(c => c instanceof constructor) as T[];
    }

    /**
     * Retrieve a specific model by ID or name.
     */
    childOfType<T>(constructor: abstract new(...args: any[]) => T, key: number | string) {
        return this.children.find(
            c => c instanceof constructor
            && typeof key == "number" ? c.effectiveId == key : c.name == key
        ) as T;
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
    visit(visitor: (model: Model) => boolean | void) {
        return new ModelTraversal().visit(this, visitor);
    }

    constructor(definition: BaseElement) {
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
    export type Constructor<T> = abstract new(...args: any) => T;

    export type LookupPredicate<T> = Constructor<T> | { type: Constructor<T>, test: (model: Model) => boolean };

    export type PropertyValidation = {
        name: string,
        type: string | (new(...args: any[]) => any) | { [key: string | number]: any } | undefined,
        required?: boolean,
        nullable?: boolean,
        values?: { [name: string]: any }
    }

    export class CrossReference implements Specification.CrossReference {
        document: Specification;
        section: string;

        constructor({ document, section }: Specification.CrossReference) {
            this.document = document as Specification;
            this.section = section;
        }

        toString() {
            return `${this.document}§${this.section}`
        }
    }
}
