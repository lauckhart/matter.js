/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MetadataConflictError, MissingMetadataError } from "#decoration/errors.js";
import { InternalError } from "#general";
import type { Model } from "#models/Model.js";
import type { ClassSemantics } from "./ClassSemantics.js";

/**
 * Base class for Matter semantics associated with JavaScript classes and properties.
 *
 * We model semantics using {@link Model}.  The model may be built declaratively with decorators or programmatically
 * using this interface directly.
 */
export abstract class Semantics {
    #localModel?: Model;

    /**
     * The {@link Model} defined by local decoration, if any.
     */
    get localModel() {
        return this.#localModel;
    }

    /**
     * Set the model.
     *
     * When "setting" the model we need to merge semantics coming from decorators, the prototype hierarchy, and models
     * provided programmatically.
     *
     * The rules for this are as follows:
     *
     *   * If there is no {@link localModel}, we set to {@link model}
     *
     *   * If neither model is frozen, we replace {@link localModel} and move its children to {@link model}
     *
     *   * If only {@link model} is frozen, it becomes the base of {@link localModel}
     *
     *   * If only {@link localModel} is frozen, we replace with {@link model} and it becomes the base of {@link model}
     *
     *   * If both models are frozen throws {@link MetadataConflictError}
     */
    set mutableModel(model: Model) {
        if (this.#localModel === model) {
            return;
        }

        if (this.#localModel === undefined) {
            this.#localModel = model;
            return;
        }

        if (this.#localModel.isFrozen) {
            if (model.isFrozen) {
                throw new MetadataConflictError(
                    `Cannot assign frozen ${model.name} as base of frozen ${this.#localModel.name}`,
                );
            }
            model.operationalBase = this.#localModel;
            this.#localModel = model;
            return;
        }

        if (model.isFrozen) {
            this.#localModel.operationalBase = model;
            return;
        }

        model.children.push(...this.#localModel.children);
        this.#localModel = model;
    }

    /**
     * Obtain a model unconditionally for mutation purposes.
     */
    get mutableModel() {
        if (this.#localModel === undefined) {
            this.#localModel = this.createModel();
        } else if (this.#localModel.isFrozen) {
            this.#localModel = this.#localModel.extend();
        }
        return this.#localModel;
    }

    /**
     * The model's {@link Model.Type}.
     *
     * Field decorators operate prior to class decorators, so we may need to transition the model to a new type when the
     * class is decorated.  This is slightly lossy so type-specific decoration should always occur after assigning kind.
     */
    get modelType(): Model.Type | undefined {
        if (this.#localModel === undefined) {
            return;
        }
        return this.mutableModel.constructor as Model.ConcreteType;
    }

    set modelType(type: Model.ConcreteType) {
        if (this.#localModel === undefined) {
            this.#localModel = this.createModel(type);
            return;
        }

        if (this.#localModel instanceof type) {
            return;
        }

        // Detach original model
        const original = this.#localModel as Model;
        const { parent } = original;
        original.parent = undefined;

        // Create replacement
        const replacement = new type({
            name: original.name,
            id: original.id,
            type: original.type,
            parent,
            operationalBase: original.operationalBase,
            children: original.children,
        });

        if ("quality" in original && "quality" in replacement) {
            replacement.quality = original.quality;
        }

        this.#localModel = replacement;
    }

    protected abstract createModel(type?: Model.ConcreteType): Model;
}

export namespace Semantics {
    /**
     * Access the {@link Semantics} of a {@link DecoratorContext}.
     */
    export function of(context: DecoratorContext) {
        const classSemantics = classOf(context);
        if (context.kind === "class") {
            return classSemantics;
        }
        return classSemantics.fieldFor(context.name);
    }

    /**
     * Access the {@link ClassSemantics} of a constructor or decorator context.
     */
    // eslint-disable-next-line prefer-const
    export let classOf = (_source: ClassSemantics.Source): ClassSemantics => {
        // This should be replaced by ClassSemantics
        throw new InternalError(`Class decoration lookup not installed`);
    };

    /**
     * Access the {@link Model} of a {@link Source}.
     */
    export function modelOf(source: Model.Source) {
        if ("tag" in source) {
            return source;
        }
        const semantics = classOf(source);

        const model = semantics.semanticModel;

        if (model && (model.constructor as Model.ConcreteType).requiresId) {
            throw new MissingMetadataError(`Model ${source.name} is missing mandatory numeric ID`);
        }

        return model;
    }
}
