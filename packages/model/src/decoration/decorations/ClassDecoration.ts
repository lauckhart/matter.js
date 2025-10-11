/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Must import these via index to ensure proper initialization
import { DatatypeModel, Model } from "#models/index.js";

import { camelize } from "#general";
import { Scope } from "#logic/Scope.js";
import { any, struct } from "#standard/elements/models.js";
import { InvalidMetadataError, MetadataConflictError } from "../errors.js";
import { Decoration } from "./Decoration.js";
import { FieldDecoration } from "./FieldDecoration.js";

/**
 * Our key into {@link DecoratorContext.metadata}.
 *
 * This is where we store the {@link ClassDecoration} associated with a decorated class.
 */
const matter = Symbol("matter");

/**
 * Our view of {@link DecoratorContext.metadata}.
 *
 * Note that in the case of class inheritance, the metadata also inherits from the parent metadata.  So we need to use
 * {@link Object.hasOwn} to differentiate between the {@link ClassDecoration} for a class and that of its base class.
 */
interface MatterMetadata {
    [matter]?: ClassDecoration;
}

/**
 * Matter semantic metadata attached to a class via decorators.
 *
 * We use decorators to allow for definition of model elements in the context of a specific type.
 *
 * Currently there are JavaScript/TypeScript limitations to be aware of when decorating type definitions:
 *
 *   * Decorators may only be applied to JavaScript classes.  So if you want to define an interface without
 *     implementation, you must implement as a pure abstract class.  That's why this is "class" metadata.
 *
 *   * Decorators may not affect the TypeScript type of an object.  This means that you must define both the Matter type
 *     (e.g. {@link uint32}) and TypeScript type (e.g. `number`).
 */
export class ClassDecoration extends Decoration {
    #name?: string;
    #new?: ClassDecoration.Constructor;
    #definedElements?: Map<string, FieldDecoration>;

    // Note - we attempt to clear this cache if metadata changes but do not track field changes.  Probably OK as the
    // model generally shouldn't be generated until all fields are annotated but could revisit if necessary
    #cache?: {
        model?: Model;
        fields?: Map<string, FieldDecoration>;
    };

    /**
     * Obtain {@link Model} defined by this metadata.
     */
    get model() {
        let model = this.#cache?.model;

        if (!model) {
            model = this.#generateModel();
            if (this.#cache) {
                this.#cache.model = model;
            } else {
                this.#cache = { model };
            }
        }

        return model;
    }

    /**
     * Set the name for the class's schema.
     */
    get name() {
        return this.#name ?? this.#new?.name;
    }

    set name(name: string | undefined) {
        if (this.#name && this.#name !== name) {
            throw new MetadataConflictError(
                `Cannot assign schema name ${name} because name is already assigned as ${this.#name}`,
            );
        }
        this.#name = name;
        this.#cache = undefined;
    }

    /**
     * Get the class constructor
     */
    get new(): ClassDecoration.Constructor | undefined {
        return this.#new;
    }

    /**
     * Assign the constructor for the class.
     */
    set new(fn: ClassDecoration.Constructor) {
        this.#new = fn;
        this.#cache = undefined;
    }

    override get type(): Model | undefined {
        return super.type;
    }

    override set type(type: Model.Source | undefined) {
        super.type = type;
        this.#cache = undefined;
    }

    override get response(): Model | undefined {
        return super.response;
    }

    override set response(response: Model.Source | undefined) {
        super.response = response;
        this.#cache = undefined;
    }

    override get kind() {
        return super.kind;
    }

    override set kind(kind: Model.ConcreteType | undefined) {
        super.kind = kind;
        this.#cache = undefined;
    }

    override get id() {
        return super.id;
    }

    override set id(id: number | undefined) {
        super.id = id;
        this.#cache = undefined;
    }

    /**
     * A model that represents this class's base type.
     *
     * This may be {@link type} or the type of any decorated class in the inheritance hierarchy.
     */
    get base(): Model | undefined {
        if (this.type) {
            return this.type;
        }
        if (this.#new === undefined) {
            return;
        }

        let prototype = Object.getPrototypeOf(this.#new.prototype);
        while (prototype) {
            const prototypeNew = prototype.constructor as ClassDecoration.Constructor | undefined;
            if (prototypeNew === undefined) {
                break;
            }

            const prototypeDecoration = prototypeNew[Symbol.metadata]?.[matter] as ClassDecoration | undefined;
            if (prototypeDecoration) {
                if (!prototypeDecoration.#new) {
                    prototypeDecoration.#new = prototypeNew;
                }
                return prototypeDecoration.base;
            }

            prototype = Object.getPrototypeOf(prototypeNew.prototype);
        }

        // Fallback to bare struct.  This ensures metatype indicates an object
        return struct;
    }

    /**
     * Obtain a {@link FieldDecoration} for the named field.
     */
    fieldFor(name: string | symbol) {
        if (typeof name !== "string") {
            throw new InvalidMetadataError(`Cannot decorate symbolic function ${String(name)}`);
        }

        if (this.#definedElements === undefined) {
            this.#definedElements = new Map();
        }
        let field = this.#definedElements.get(name);
        if (field === undefined) {
            this.#definedElements.set(name, (field = new FieldDecoration(this, name)));
            this.#cache = undefined;
        }
        return field;
    }

    /**
     * Add logical fields for unrecognized members of an object.
     *
     * This extends the model with untyped fields for properties that are not otherwise typed.
     */
    defineUnknownMembers(instance: unknown) {
        if (instance === undefined || instance === null) {
            return;
        }

        const known = this.#knownElementNames;

        const descriptors = Object.getOwnPropertyDescriptors(instance);

        for (const name in descriptors) {
            // Skip if name is already known
            if (known.has(camelize(name))) {
                continue;
            }

            // We only model string properties
            if (typeof name !== "string") {
                continue;
            }

            // We do not support write-only fields
            const descriptor = descriptors[name];
            if (descriptor.set && !descriptor.get) {
                continue;
            }

            // Methods are not fields
            try {
                if (typeof (instance as Record<string, unknown>)[name] === "function") {
                    continue;
                }
            } catch (e) {
                // We do not support inaccessible fields
                continue;
            }

            this.fieldFor(name).type = any;
        }
    }

    /**
     * Create the model represented by the decoration information contained herein.
     *
     * This involves collecting and merging both Matter and JavaScript semantics.
     */
    #generateModel() {
        const fields = this.#fields;

        const name = this.name ?? "Anon";
        const operationalBase = this.base ?? struct;
        const id = this.id ?? operationalBase?.id;
        const kind = this.kind ?? ((operationalBase.constructor ?? DatatypeModel) as Model.ConcreteType);

        const model = new kind({ name, id, operationalBase });

        const scope = Scope(model);
        for (const [name, definition] of fields) {
            const extension = definition.generateExtension(name, scope, model);
            if (extension) {
                (model.children as Model[]).push(extension);
            }
        }

        return model;
    }

    /**
     * Retrieve defined {@link FieldDecoration}s for this class.
     */
    get #fields() {
        if (this.#cache?.fields) {
            return this.#cache.fields;
        }

        // Give class opportunity to modify metadata prior to generation
        this.#new?.[ClassDecoration.extend]?.(this);

        // Collect fields contributed here
        const fields = new Map(this.#definedElements);

        // Collect fields contributed by prototype
        if (this.#new) {
            const base = Object.getPrototypeOf(this.#new.prototype)?.constructor;
            if (base) {
                for (const [name, field] of Decoration.classDecorationOf(base).#fields) {
                    if (!fields.has(name)) {
                        fields.set(name, field);
                    }
                }
            }
        }

        // We cache fields because we may generate them multiple times if our class is extended
        (this.#cache ??= {}).fields = fields;

        return fields;
    }

    static {
        Decoration.classDecorationOf = (source: ClassDecoration.Source) => {
            let decoration: ClassDecoration;
            if (source instanceof ClassDecoration) {
                return source;
            } else if (typeof source === "function") {
                let metadata: MatterMetadata;
                if (!Object.hasOwn(source, Symbol.metadata)) {
                    metadata = source[Symbol.metadata] = {};
                } else {
                    metadata = source[Symbol.metadata] as MatterMetadata;
                }

                if (!Object.hasOwn(metadata, matter)) {
                    decoration = metadata[matter] = new ClassDecoration();
                } else {
                    decoration = metadata[matter] as ClassDecoration;
                }

                if (!decoration.#new) {
                    decoration.#new = source;
                }
            } else {
                const metadata = source.metadata as MatterMetadata;
                if (Object.hasOwn(metadata, matter)) {
                    return metadata[matter]!;
                }
                return (metadata[matter] = new ClassDecoration());
            }
            return decoration;
        };
    }

    get #knownElementNames() {
        const known = new Set();

        if (this.#definedElements) {
            for (const [name] of this.#definedElements) {
                known.add(camelize(name));
            }
        }

        const base = this.base;
        if (base) {
            for (const { name } of Scope(base).membersOf(base)) {
                known.add(camelize(name));
            }
        }

        return known;
    }
}

export namespace ClassDecoration {
    /**
     * A standard constructor with an optional decoration extension point.
     */
    export interface Constructor extends NewableFunction {
        /**
         * If present, invoked prior to model generation.
         */
        [extend]?: (decoration: ClassDecoration) => void;
    }

    /**
     * An object for which a {@link ClassDecoration} may be obtained.
     */
    export type Source = Constructor | DecoratorContext | ClassDecoration;

    /**
     * Access the {@link ClassDecoration} of a constructor if it is defined.
     */
    export function maybeOf(source: ClassDecoration.Constructor) {
        if (Symbol.metadata in source && matter in (source[Symbol.metadata] as MatterMetadata)) {
            return Decoration.classDecorationOf(source);
        }
    }

    export const extend = Symbol("extend");
}
