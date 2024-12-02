/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "#common/ElementTag.js";
import { ClusterModel } from "#models/ClusterModel.js";
import { Model } from "#models/Model.js";
import { ValueModel } from "#models/ValueModel.js";
import { ModelTraversal } from "./ModelTraversal.js";

/**
 * Tracks extensions for a scope to models in parent scopes.
 *
 * A child model with the same {tag, name} tuple in a derived scope is a semantic extension of the model in the parent
 * scope even if it does not explicitly inherit from the parent via {@link Model#type}.  We refer to the implicit base
 * class as a "shadow".
 *
 * This utility provideds optimized lookup of extensions present in a particular scope.
 */
export interface ScopeExtensions {
    /**
     * Determine if the model is a shadow.
     */
    isShadow(model: ValueModel): boolean;

    /**
     * Retrieve the canonical version of a model for this scope.
     */
    for(model: Model): Model;
}

const cache = new WeakMap<Model, ScopeExtensions>();

export function ScopeExtensions(scope: Model, options: ScopeExtensions.Options = {}) {
    const isFrozen = Object.isFrozen(scope);
    if (isFrozen) {
        const cached = cache.get(scope);
        if (cached) {
            return cached;
        }
    }

    let extensions: undefined | Map<ValueModel, ValueModel>;
    const identities = {} as Record<ElementTag, Record<string, ValueModel>>;

    new ModelTraversal().visitInheritance(scope, scope => {
        const definitions =
            options.useActiveMembers && (scope instanceof ClusterModel || scope instanceof ValueModel)
                ? scope.activeMembers
                : scope.children.all(ValueModel);

        for (const model of definitions) {
            const bucket = identities[model.tag];
            if (bucket === undefined) {
                identities[model.tag] = { [model.name]: model };
            } else {
                const extension = bucket[model.name];
                if (extension && extension.parent !== model.parent) {
                    if (!extensions) {
                        extensions = new Map();
                    }
                    extensions.set(model, extension);
                }
            }
        }
    });

    const result: ScopeExtensions = {
        for: extensions ? model => extensions!.get(model as ValueModel) ?? model : model => model,
        isShadow: extensions ? model => extensions!.has(model) : () => false,
    };

    if (isFrozen) {
        cache.set(scope, result);
    }

    return result;
}

export namespace ScopeExtensions {
    export interface Options {
        /**
         * By default we use the first definition as the "extension".  Enable this to perform conformance-based checks
         * instead.
         */
        useActiveMembers?: boolean;
    }
}
