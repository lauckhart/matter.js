/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { DefinitionError, ElementTag, Specification } from "../definitions/index.js";
import { AnyElement, BaseElement } from "../elements/index.js";
import { ModelTraversal } from "../logic/ModelTraversal.js";

/**
 * Link to parent model.
 */
const PARENT = Symbol("PARENT");

/**
 * Link to a parent's child collection.
 */
const CHILDREN = Symbol("CHILDREN");

/**
 * Link to previous element in a collection.
 */
const PREV = Symbol("PREV");

/**
 * Link to next element in a collection.
 */
const NEXT = Symbol("NEXT");

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
     * Flag set on elements loaded from Globals.
     */
    global?: boolean;

    /**
     * Indicates that an element may have type definitions as children.
     */
    isTypeScope?: boolean;

    /**
     * Indicates that an element defines a datatype.
     */
    isType?: boolean;

    private [CHILDREN]?: Collection;
    [PARENT]?: Model;
    [PREV]?: Child;
    [NEXT]?: Child;

    /**
     * Did validation find errors?
     */
    get valid() {
        return !this.errors;
    }

    /**
     * Is the model childless?
     */
    get empty() {
        return !this[CHILDREN] || this[CHILDREN].empty;
    }

    /**
     * The full path ("." delimited) in the Matter tree.
     */
    get path(): string {
        if (this.parent && this.parent.tag !== ElementTag.Matter) {
            return `${this.parent.path}.${this.name}`;
        } else {
            return this.name;
        }
    }

    /**
     * Access the hierarchical parent, if any.
     */
    get parent() {
        return this[PARENT];
    }

    /**
     * Access the first child model, if any.
     */
    get firstChild() {
        return this[CHILDREN]?.first;
    }

    /**
     * Access the last child model, if any.
     */
    get lastChild(): Model | undefined {
        return this[CHILDREN]?.last;
    }

    /**
     * Access the previous sibling in the parent, if any.
     */
    get previousSibling(): Model | undefined {
        return this[PARENT] && this[PREV] && this[PARENT][CHILDREN]?.export(this[PREV]);
    }

    /**
     * Access the next sibling in the parent, if any.
     */
    get nextSibling(): Model | undefined {
        return this[PARENT] && this[NEXT] && this[PARENT][CHILDREN]?.export(this[NEXT]);
    }

    /**
     * Set this model's parent.
     */
    set parent(parent: Model | undefined) {
        if (parent) {
            parent.add(this);
        } else {
            this[PARENT]?.remove(this);
        }
    }

    /**
     * Allows subclasses to pull a working ID from an alternate source.
     */
    get effectiveId() {
        return this.id;
    }

    /**
     * Get a string that uniquely identifies this model.  This is normally
     * the effective ID but some models require a generated identifier.
     */
    get key() {
        return this.effectiveId?.toString();
    }

    /**
     * Factory support.  Populated by derivatives upon definition.
     */
    static constructors = {} as { [type: string]: new (definition: any) => Model };

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
    get base() {
        return new ModelTraversal().findBase(this);
    }

    /**
     * Get shadow model, if any.  A "shadow" is an element in my parent's
     * inheritance hierarchy that I override.
     */
    get shadow() {
        return new ModelTraversal().findShadow(this);
    }

    /**
     * Get the first global base type.  This may have semantic meaning more
     * specific than the base primitive type.
     */
    get globalBase() {
        return new ModelTraversal().findGlobalBase(this);
    }

    /**
     * A local or parent xref.
     */
    get effectiveXref() {
        return new ModelTraversal().findXref(this);
    }

    /**
     * The set of tags from which this model may derive.
     */
    get allowedBaseTags() {
        return [this.tag];
    }

    /**
     * Add one or more children.
     */
    add(...children: (Model | AnyElement)[]) {
        const collection = Collection.for(this);
        for (const child of children) {
            collection.add(child);
        }
    }

    /**
     * Replace all children of the model.
     */
    set children(children: Iterable<AnyElement | Model>) {
        // Clone container because if it references a former parent it'll
        // mutate as we add
        children = [ ...children ];

        const collection = Collection.for(this);
        collection.clear();
        for (const child of children) {
            collection.add(child);
        }
    }

    /**
     * Remove one or more children from the model.
     */
    remove(...children: (Model | AnyElement)[]) {
        const collection = this[CHILDREN];
        if (!collection) {
            return;
        }

        for (const child of children) {
            collection.remove(child);
        }
    }

    /**
     * Create a model for an element.
     */
    static create(definition: AnyElement) {
        if (typeof definition !== "object") {
            throw new InternalError(`Model definition must be object, not ${typeof definition}`);
        }
        const t = definition["tag"];
        const constructor = Model.constructors[t];
        if (!constructor) {
            throw new InternalError(`Unknown element tag "${t}"`);
        }
        return new constructor(definition);
    }

    /**
     * Filter children with a predicate.
     */
    filter(fn: (model: Model) => boolean) {
        const result = Array<Model>();
        for (const child of this) {
            if (fn(child)) {
                result.push(child);
            }
        }
        return result;
    }

    /**
     * Find the first child matching a predicate.
     */
    find(fn: (model: Model) => boolean) {
        for (const child of this) {
            if (fn(child)) {
                return child;
            }
        }
    }

    /**
     * Apply a function to each child.
     */
    forEach(fn: (model: Model) => void) {
        for (const child of this) {
            fn(child);
        }
    }

    /**
     * Count the number of children in the model.
     */
    get childCount() {
        let count = 0;
        for (const _child of this) {
            count++;
        }
        return count;
    }

    /**
     * Retrieve all models of a specific element type from local scope.
     *
     * @param constructor model class or a predicate object
     */
    all<T extends Model>(constructor: Model.Constructor<T>) {
        return this.filter(c => c instanceof constructor) as T[];
    }

    /**
     * Retrieve a specific model by ID or name.
     * 
     * Retrieval by name is currently an indexed operation, ID is not.
     */
    get<T extends Model>(constructor: Model.Constructor<T>, key: number | string) {
        if (typeof key === "string") {
            return this[CHILDREN]?.getByName(constructor, key);
        } else {
            return this.find(c =>
                c instanceof constructor && c.effectiveId === key,
            ) as T;
        }
    }

    /**
     * Retrieve a model of a specific type from the ownership hierarchy.
     */
    owner<T extends Model>(constructor: Model.Constructor<T>) {
        return new ModelTraversal().findOwner(constructor, this.parent);
    }

    /**
     * Check identity of element by name or ID.
     */
    is(key: ModelTraversal.ElementSelector | undefined) {
        if (typeof key === "number") {
            return this.id === key;
        } else if (typeof key === "function") {
            return key(this);
        }
        return this.name === key;
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
            xref: this.effectiveXref?.toString(),
        });
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
        const result = {} as { [name: string]: any };

        // Return all iterable properties minus metadata
        for (const key in this) {
            switch (key) {
                case "parent":
                case "errors":
                case "isTypeScope":
                case "isType":
                    continue;

                default:
                    result[key] = this[key];
            }
        }

        return result as AnyElement;
    }

    /**
     * Apply a function to all tree elements.
     */
    visit(visitor: (model: Model) => boolean | void) {
        return new ModelTraversal().visit(this, visitor);
    }

    /**
     * Find all children that reference a specific type.
     */
    references(type: Model) {
        return new ModelTraversal().findReferences(this, type);
    }

    /**
     * Search the inheritance chain for a child property.
     */
    member(
        key: ModelTraversal.ElementSelector,
        allowedTags = [ElementTag.Datatype, ElementTag.Attribute],
    ): Model | undefined {
        return new ModelTraversal().findMember(this, key, allowedTags);
    }

    /**
     * Does this model derive from another?
     */
    instanceOf(other: Model | AnyElement) {
        return new ModelTraversal().instanceOf(this, other);
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
            this.xref = Model.CrossReference.get(this.xref);
        }
    }

    [Symbol.iterator]() {
        return new ModelIterator(this);
    }
}

export namespace Model {
    export type Constructor<T extends Model> = abstract new (...args: any) => T;

    export type LookupPredicate<T extends Model> =
        | Constructor<T>
        | { type: Constructor<T>; test: (model: Model) => boolean };

    export type PropertyValidation = {
        name: string;
        type: string | (new (...args: any[]) => any) | { [key: string | number]: any } | undefined;
        required?: boolean;
        nullable?: boolean;
        values?: { [name: string]: any };
    };

    export class CrossReference implements Specification.CrossReference {
        document: Specification;
        section: string;
        private static instances = {} as { [key: string]: CrossReference };

        private constructor({ document, section }: Specification.CrossReference) {
            this.document = document as Specification;
            this.section = section;
        }

        toString() {
            return `${this.document}§${this.section}`;
        }

        static get(xref: Specification.CrossReference) {
            const key = `${xref.document}:${xref.section}`;
            const canonical = this.instances[key];
            if (canonical) {
                return canonical;
            }
            return (this.instances[key] = new CrossReference(xref));
        }
    }
}

/**
 * Internally we store models as elements or models.  This allows us to
 * efficiently build the structure directly from JSON then lazily instantiate
 * models as they're accessed.
 */
type Child = (AnyElement | Model) & {
    [PARENT]?: Model,
    [PREV]?: Child,
    [NEXT]?: Child
}

/**
 * Iterates over model children.
 */
class ModelIterator implements Iterator<Model, undefined> {
    #value?: Model;

    constructor(parent?: Model) {
        this.#value = parent?.firstChild;
    }

    next(): IteratorResult<Model, undefined> {
        if (this.#value === undefined) {
            return { value: undefined, done: true };
        }

        const result = this.#value;
        this.#value = this.#value.nextSibling;

        return { value: result };
    }
}

/**
 * The internal implementation of the Model container.
 */
class Collection {
    #first?: Child;
    #last?: Child;
    #array?: Model[];
    #nameIndex = {} as { [name: string]: Child | Child[] }

    constructor(private owner: Model) {}

    static for(parent: Model) {
        return parent[CHILDREN] ?? (parent[CHILDREN] = new Collection(parent));
    }

    get empty() {
        return !this.#first;
    }

    get first(): Model | undefined {
        return this.#first && this.export(this.#first);
    }

    get last(): Model | undefined {
        return this.#last && this.export(this.#last);
    }

    clear() {
        let child = this.#first;
        while (child) {
            const nextChild = child[NEXT];
            delete child[PARENT];
            delete child[PREV];
            delete child[NEXT];
            child = nextChild;
        }
        this.#first = this.#last = undefined;
        this.#nameIndex = {};
        this.#array = undefined;
    }

    add(child: Child) {
        const parent = child[PARENT];
        if (parent === this.owner) {
            return;
        }
        parent?.remove(child);

        if (this.#last) {
            child[PREV] = this.#last;
            this.#last = this.#last[NEXT] = child;
        } else {
            this.#last = this.#first = child;
        }
        this.addToIndex(child);
    }

    remove(child: Child) {
        if (child[PREV]) {
            child[PREV][NEXT] = child[NEXT];
            delete child[PREV];
        }
        if (child[NEXT]) {
            child[NEXT][PREV] = child[PREV];
            delete child[NEXT];
        }
        this.removeFromIndex(child);
        delete child[PARENT];
        delete child[PREV];
        delete child[NEXT];
    }

    export(child: Child) {
        if (child instanceof Model) {
            return child;
        }
        this.removeFromIndex(child);
        const model = Model.create(child) as Child;
        if (child[PREV]) {
            child[PREV][NEXT] = model;
            model[PREV] = child[PREV];
        }
        if (child[NEXT]) {
            child[NEXT][PREV] = model;
            model[NEXT] = child[NEXT];
        }
        this.addToIndex(model);
        return model as Model;
    }

    getByName<T extends Model>(constructor: Model.Constructor<T>, name: string): T | undefined {
        const entry = this.#nameIndex[name];
        let found;
        if (Array.isArray(entry)) {
            found = entry.find(m => m instanceof constructor);
        } else {
            found = entry;
        }
        return found && this.export(found) as T;
    }

    get array(): Model[] {
        if (!this.#array) {
            this.#array = Array<Model>();
            for (let child = this.#first; child; child = child[NEXT]) {
                this.#array.push(this.export(child));
            }
        }
        return this.#array;
    }

    private addToIndex(child: Child) {
        const entry = this.#nameIndex[child.name];
        if (Array.isArray(entry)) {
            entry.push(child);
        } else if (entry) {
            this.#nameIndex[child.name] = [ entry, child ];
        } else {
            this.#nameIndex[child.name] = child;
        }
        this.#array = undefined;
    }

    private removeFromIndex(child: Child) {
        const entry = this.#nameIndex[child.name];
        if (entry === child) {
            delete this.#nameIndex[child.name];
        } else if (Array.isArray(entry)) {
            const index = entry.indexOf(child);
            if (index) {
                entry.splice(index, 1);
            }
        }
        this.#array = undefined;
    }
}

/**
 * All Model subclasses implement an element interface.  This base class
 * specializes child references for those subclasses.
 * 
 * This is a separate class from Model so we needn't do Model<any, any>
 * everywhere a generic Model is required.
 */
export abstract class ElementModel<ChildElement extends AnyElement, ChildModel extends Model> extends Model {
    /**
     * Access child elements as an array.  Implements AnyElement.children.
     * 
     * This is available for compatibility with the Element interface but is
     * not efficient so use should be minimized.  The returned array is
     * immutable.
     */
    override get children(): ChildElement[] {
        return (this[CHILDREN]?.array ?? Object.freeze(Array<ChildElement>())) as ChildElement[];
    }

    override set children(elements: Iterable<ChildElement | ChildModel>) {
        super.children = elements;
    }

    override add(...children: (ChildModel | ChildElement)[]) {
        super.add(...children);
    }

    override [Symbol.iterator]() {
        return super[Symbol.iterator]() as Iterator<ChildModel>;
    }

    override get firstChild() {
        return super.firstChild as ChildModel;
    }

    override get lastChild() {
        return super.lastChild as ChildModel;
    }

    override get nextSibling() {
        return super.nextSibling as ChildModel;
    }

    override get previousSibling() {
        return super.previousSibling as ChildModel;
    }
}
