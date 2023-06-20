/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datatype, ElementTag } from "../definitions/index.js";
import type { Model } from "../models/index.js";

/**
 * This class performs lookups of models in the scope of a specific model.  We
 * use a class so the lookup can maintain state and guard against circular
 * references.
 * 
 * Any logic that requires traversal of a multi-model ownership or inheritance
 * should use this class.
 * 
 * Note that we don't currently utilize any kind of index.  Not currently a
 * problem but may need to address if it becomes too inefficient.
 */
export class ModelTraversal {
    private dismissed?: Set<Model>;

    /**
     * Dismiss a model from consideration.
     */
    dismiss(model: Model) {
        if (!this.dismissed) {
            this.dismissed = new Set<Model>;
        }
        this.dismissed.add(model);
    }

    /**
     * Determine the type for a model.  This is the string name of the base
     * model.  Usually this is simply the type field but we infer the type of
     * some datatypes based on their parent's type.
     */
    getTypeName(model: Model | undefined): string | undefined {
        if (model?.type || model?.tag != ElementTag.Datatype) {
            return model?.type;
        }

        this.dismiss(model);
        const metabase = this.findMetabase(model.parent);
        if (metabase) {
            switch (metabase.name) {
                case "enum8":
                case Datatype.map8:
                    return Datatype.uint8;
    
                case "enum16":
                case Datatype.map16:
                    return Datatype.uint16;
    
                case Datatype.map32:
                    return Datatype.uint32;
    
                case Datatype.map64:
                    return Datatype.uint64;
            }
        }
    }

    /**
     * Find the model in my inheritance hierarchy that has semantic meaning.
     * This will be the first inherited model with a metatype.
     */
    findMetabase(model: Model | undefined): Model | undefined {
        while (model && !(model as any).metatype) {
            model = this.findBase(model);
        }
        return model;
    }

    /**
     * Find the model a model derives from, if any.
     */
    findBase(model: Model | undefined): Model | undefined {
        if (!model || this.dismissed?.has(model)) {
            return;
        }
        let type = model.effectiveType;
        if (type != undefined) {
            this.dismiss(model);
            return this.findType(model.parent, type!, model.allowedBaseTags);
        }
    }

    /**
     * Search inherited scope for a named member.
     */
    findMember(scope: Model | undefined, key: string | number, allowedTags: ElementTag[]): Model | undefined {
        while (scope && !this.dismissed?.has(scope)) {
            const result = this.findLocal(scope, key, allowedTags);
            if (result) {
                return result;
            }
            this.dismiss(scope);
            scope = this.findBase(scope);
        }
    }

    /**
     * Search inherited and structural type scope for a named type.
     */
    findType(scope: Model | undefined, name: string, allowedTags: ElementTag[]): Model | undefined {
        if (!scope) {
            return;
        }
        const queue = Array<Model>(scope);
        while (scope = queue.shift()) {
            if (this.dismissed?.has(scope)) {
                continue;
            }

            if (scope.isTypeScope) {
                const result = this.findLocal(scope, name, allowedTags);
                if (result) {
                    return result;
                }
            }

            this.dismiss(scope);

            // Search inherited scope next
            let inheritedScope = this.findBase(scope);
            if (inheritedScope) {
                queue.unshift(inheritedScope);
            }

            // Search parent scope once all inherited scope is searched
            if (scope.parent) {
                queue.push(scope.parent);
            }
        }
    }

    /**
     * Visit all nodes in the model tree.
     */
    visit(model: Model, visitor: (model: Model) => boolean | void): boolean | undefined {
        if (this.dismissed?.has(model)) {
            return;
        }
        if (visitor(model) === false) {
            return false;
        }
        this.dismiss(model);
        for (const c of model.children) {
            if (this.visit(c, visitor) === false) {
                return false;
            }
        }
        return true;
    }

    /**
     * Visit all nodes in the inheritance hierarchy.
     */
    visitInheritance(model: Model | undefined, visitor: (model: Model) => boolean | void): boolean | undefined {
        if (!model || this.dismissed?.has(model)) {
            return;
        }
        if (visitor(model) === false) {
            return false;
        }
        this.visitInheritance(this.findBase(model), visitor);
    }

    /**
     * Search for a direct child by name.
     */
    private findLocal(scope: Model, key: string | number, allowedTags: ElementTag[]) {
        for (const c of scope.children) {
            if (c.is(key) && allowedTags.indexOf(c.tag) != -1 && !this.dismissed?.has(c)) {
                return c;
            }
        }
    }
}
