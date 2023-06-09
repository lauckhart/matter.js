/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { Logger } from "../../log/Logger.js";
import { AnyElement, BaseElement, Globals } from "../index.js";

const logger = Logger.get("Model");
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
    errors?: string[];

    get valid() {
        return !this.errors;
    }

    private [CHILDREN]!: Array<any>;

    get children(): Model[] {
        if (!this[CHILDREN]) {
            this.children = [];
        }
        return this[CHILDREN];
    }

    set children(children: (Model | AnyElement)[]) {
        this[CHILDREN] = new Proxy([], {
            get: (target, p, receiver) => {
                let result = Reflect.get(target, p, receiver);
                if (!(result instanceof Model) && typeof p == "string" && p.match(/^[0-9]$/)) {
                    result = Model.create(result);
                    result.parent = this;
                    Reflect.set(target, p, result, receiver);
                }
                return result;
            },

            set: (target, p, newValue, receiver) => {
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
                return Reflect.set(target, p, newValue, receiver);
            }
        });
        this[CHILDREN].push(...children);
    }

    xref?: {
        document: BaseElement.Specification,
        version: string,
        section: string
    };

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
     * @param type an optional type to narrow the search
     */
    local(name: string, type: BaseElement.Type | undefined): Model | undefined {
        for (const c of this.children) {
            if (c.name == name && (!type || c.type == type)) {
                return c;
            }
        }
    }

    /**
     * Retrieve an element from global scope by name.
     * 
     * @param name the name of the element to find
     * @param type an optional type to narrow the search
     * @param ignore a list of Models to ignore; used to handle name conflicts
     */
    global(name: string, type?: BaseElement.Type | undefined, ignore: Model[] = []): Model | undefined {
        let result = this.local(name, type);
        if (result && ignore.indexOf(result) == -1) {
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
        return this.globals[name];
    }

    /**
     * Record a validation error for this model.
     */
    error(error: { errors: string[] } | string) {
        if (!this.errors) {
            this.errors = [];
        }
        if (typeof error == "string") {
            this.errors.push(error);
        } else {
            this.errors.push(...error.errors);
        }
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
            for (const e of this.errors) {
                logger.error(e);
            }
        }

        let index = 0;
        for (const c of this.children) {
            index++;
            logger.debug(`${index}. ${c.type} ${c.name}`)
            Logger.nest(() => {
                errors += c.validate();
            });
        }

        return errors;
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
            this.error(`type is ${this.type} (expected ${type})`);
        }
        if (this.children) {
            let index = 0;
            for (const child of this.children) {
                let ok = false;
                for (const type of childTypes) {
                    if (child instanceof type) {
                        ok = true;
                    }
                }
                if (!ok) {
                    this.error(`children[${index}] type ${child.constructor.name} is not allowed`);
                }
                index++;
            }
        }
    }

    protected validateProperty({ name, type, required, nullable }: Model.PropertyValidation) {
        const value = (this as any)[name];
        if (value === undefined) {
            if (required) {
                this.error(`missing required property ${name}`);
                return;
            }
            return;
        }
        if (value === null) {
            if (nullable) {
                this.error(`property ${name} is null`);
                return;
            }
            return;
        }
        if (Number.isNaN(value)) {
            this.error(`property ${name} is NaN`);
        }
        if (type == undefined) {
            return;
        }
        if (typeof type == "string") {
            if (typeof value != type) {
                this.error(`property ${name} type is ${typeof value} (expected ${type})`);
            }
            return;
        }
        if (typeof type == "function") {
            if (!(value instanceof type)) {
                this.error(`property ${name} is not an instance of ${type.name}`);
            }
            return;
        }
        if (!type[value]) {
            this.error(`property ${name} is not in enum`);
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
}
