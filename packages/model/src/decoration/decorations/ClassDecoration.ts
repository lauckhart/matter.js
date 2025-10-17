/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Must import these via index to ensure proper initialization
import { DatatypeModel, Model } from "#models/index.js";

import { camelize, InternalError } from "#general";
import { Scope } from "#logic/Scope.js";
import { any, struct } from "#standard/elements/models.js";
import { InvalidMetadataError } from "../errors.js";
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
 *     implementation, you must implement as a class and use as an interface.  That's why this is "class" metadata.
 *
 *   * Decorators may not affect the TypeScript type of an object.  This means that you must define both the Matter type
 *     (e.g. {@link uint32}) and TypeScript type (e.g. `number`).
 */
export class ClassDecoration extends Decoration {
    #new?: ClassDecoration.Constructor;
    #definedElements?: Map<string, FieldDecoration>;

    /**
     * The model that represents the semantics for this class.
     *
     * This may be {@link localModel} or {@link decorationBaseModel}
     */
    get semanticModel() {
        if (this.localModel) {
            // Model is defined here
            return this.localModel;
        }

        if (this.#definedElements) {
            // Model has not been defined but should be due to decoration, so define it now
            return this.mutableModel;
        }

        // Return model inherited via prototype, if any.  Otherwise we do not express semantics
        return this.decorationBaseModel;
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
        if (this.#new === fn) {
            return;
        }

        this.#new = fn;

        fn[ClassDecoration.before]?.(this);

        if (!this.localModel) {
            return;
        }

        this.#addBaseSemantics();
    }

    /**
     * The class {@link Model} inherited from {@link new}'s prototype chain, if any.
     */
    get decorationBaseModel(): Model | undefined {
        let current = this.#new?.prototype;
        let base;

        while (current) {
            current = Object.getPrototypeOf(current) as unknown;
            if (typeof current !== "object" || current === null) {
                return;
            }
            const constructor = current.constructor;
            if (constructor === Object) {
                return;
            }
            base = ClassDecoration.maybeOf(constructor);

            if (base?.localModel) {
                // Decoration and model may not mutate once acting as a base
                Object.freeze(base);
                base.localModel.freeze();

                return base.localModel;
            }
        }
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

        const known = this.semanticModel
            ? new Set(
                  Scope(this.semanticModel)
                      .membersOf(this.semanticModel)
                      .map(model => camelize(model.name)),
              )
            : new Set();

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

            this.fieldFor(name).mutableModel.operationalBase = any;
        }
    }

    /**
     * Obtain the {@link ClassDecoration} for {@link source}.
     */
    static override of(source: ClassDecoration.Source) {
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

            if (!decoration.new) {
                decoration.new = source;
            }
        } else {
            const metadata = source.metadata as MatterMetadata;
            if (Object.hasOwn(metadata, matter)) {
                return metadata[matter]!;
            }
            return (metadata[matter] = new ClassDecoration());
        }
        return decoration;
    }

    /**
     * Determine {@link new} has semantic decoration.
     */
    static hasOwnDecoration(source: ClassDecoration.Constructor) {
        return Object.hasOwn(source, Symbol.metadata) && Object.hasOwn(source[Symbol.metadata]!, matter);
    }

    /**
     * Access the {@link ClassDecoration} of {@link new} if it is defined.
     */
    static maybeOf(source: ClassDecoration.Constructor) {
        if (this.hasOwnDecoration(source)) {
            return ClassDecoration.of(source);
        }
    }

    static {
        Decoration.classDecorationOf = this.of;
    }

    override get mutableModel() {
        if (this.localModel === undefined && this.new !== undefined) {
            // Ensure model is initialized prior to installing semantics
            void super.mutableModel;

            this.#addBaseSemantics();
        }

        // Do not return mutable model from above it may have been replaced if semantics changed
        return super.mutableModel;
    }

    override set mutableModel(model) {
        super.mutableModel = model;
    }

    protected override createModel(type: Model.ConcreteType = DatatypeModel) {
        return new type({ name: "Unnamed", operationalBase: struct });
    }

    /**
     * Add semantics from the base class of {@link new} to my model.
     */
    #addBaseSemantics() {
        if (this.#new === undefined) {
            throw new InternalError(`Base wiring attempted without constructor`);
        }
        let model = this.mutableModel;

        // If my model does not yet have an explicit base, I extend my parent class's model
        const { type, base: modelBase } = model;
        if (type === undefined && (modelBase === undefined || modelBase === struct)) {
            const operationalBase = this.decorationBaseModel;
            if (operationalBase) {
                model.operationalBase = operationalBase;
            }
        }

        // If my base is not a datatype, it forces the type of my model
        const { base } = model;
        if (base && base.tag !== "datatype") {
            this.modelType = base.constructor as Model.ConcreteType;
            model = this.mutableModel;
        }

        // Set name to match class
        model.name = this.#new.name;

        // If ID is not already set, force ID to match base
        if (model.id === undefined) {
            model.id = base?.id;
        }

        // Enable custom extension logic
        this.#new[ClassDecoration.after]?.(this);
    }
}

export namespace ClassDecoration {
    /**
     * A standard constructor with an optional decoration extension point.
     */
    export interface Constructor extends NewableFunction {
        /**
         * If present, invoked prior to connecting constructor.
         */
        [before]?: (decoration: ClassDecoration) => void;

        /**
         * If present, invoked after connecting constructor.
         */
        [after]?: (decoration: ClassDecoration) => void;
    }

    /**
     * An object for which a {@link ClassDecoration} may be obtained.
     */
    export type Source = Constructor | DecoratorContext | ClassDecoration;

    export const before = Symbol("before");
    export const after = Symbol("after");
}
