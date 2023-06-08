/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterError } from "../../common/MatterError.js";
import { AnyElement, BaseElement, Globals } from "../index.js";

/**
 * A "model" is a class that implements runtime functionality associated with
 * the corresponding element type.
 */
export abstract class Model implements BaseElement {
    abstract type: AnyElement["type"];
    id?: number;
    name!: string;
    description?: string;
    details?: string;
    children: Model[];

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
        for (const [k, v] of definition as any) {
            if (v !== undefined) {
                (this as any)[k] = v;
            }
        }

        if (definition.children) {
            this.children = (definition.children as any).map((c: any) => {
                if (c instanceof Model) {
                    if (c.parent == undefined) {
                        c.parent = this;
                        return c;
                    }
                    if (c.parent == this) {
                        return c;
                    }
                }
                return Model.create(c);
            })
        } else {
            this.children = [];
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
     */
    local(name: string): Model | undefined {
        for (const c of this.children) {
            if (c.name == name) {
                return c;
            }
        }
    }

    /**
     * Retrieve an element from global scope by name.
     */
    global(name: string): Model | undefined {
        let result = this.local(name);
        if (result) {
            return result;
        }
        if (this.parent) {
            return this.parent.global(name);
        }
        return this.globals[name];
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
}

let globalCache: { [name: string]: Model } | undefined;
