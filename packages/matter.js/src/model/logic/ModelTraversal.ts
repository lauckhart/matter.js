/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/index.js";
import { Datatype, ElementTag } from "../definitions/index.js";
import type { Model } from "../models/index.js";

const OPERATION_DEPTH_LIMIT = 20;

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
    private operationDepth = 0;
    private dismissed?: Set<Model>;

    /**
     * Perform an operation with iteration tracking.  If iteration depth limit
     */
    operation<T>(operator: () => T, toDismiss?: Model): T {
        if (this.operationDepth > OPERATION_DEPTH_LIMIT) {
            throw new InternalError("Likely cycle detected (or OPERATION_DEPTH_LIMIT needs to be bumped)");
        }
        if (toDismiss) {
            if (!this.dismissed) {
                this.dismissed = new Set();
            }
            this.dismissed.add(toDismiss);
        }
        this.operationDepth++;
        try {
            return operator();
        } finally {
            this.operationDepth--;
            if (toDismiss) {
                this.dismissed?.delete(toDismiss);
            }
        }
    }

    /**
     * Perform an operation with a model dismissed from consideration for type
     * lookup.
     */
    operationWithDismissal<T>(toDismiss: Model | undefined, operator: () => T): T {
        return this.operation(operator, toDismiss);
    }

    /**
     * Determine the type for a model.  This is the string name of the base
     * model.  Usually this is simply the type field but we infer the type of
     * some datatypes based on their parent's type.
     */
    getTypeName(model: Model | undefined): string | undefined {
        return this.operation(() => {
            if (!model) {
                return undefined;
            }

            if (model.type) {
                return model.type;
            }

            // Commands and events always represent structs
            if (model.tag == ElementTag.Command || model.tag == ElementTag.Event) {
                return "struct";
            }

            let result: string | undefined;
            const name = model.name;
            this.visitInheritance(model.parent, (ancestor) => {
                // If parented by enum or bitmap, infer type as uint of same size
                if ((ancestor as any).metatype) {
                    switch (ancestor.name) {
                        case Datatype.enum8:
                        case Datatype.map8:
                            result = Datatype.uint8;
                            return false;
            
                        case Datatype.enum16:
                        case Datatype.map16:
                            result = Datatype.uint16;
                            return false;
            
                        case Datatype.map32:
                            result = Datatype.uint32;
                            return false;
            
                        case Datatype.map64:
                            result = Datatype.uint64;
                            return false;
                    }
                }

                // If I override a field my type is the same as the overridden
                // field
                const overridden = this.findLocal(ancestor, name, [ model.tag ]);
                if (overridden?.type) {
                    result = overridden.type;
                    return false;
                }
            });

            return result;
        });
    }

    /**
     * Find the model in my inheritance hierarchy that has semantic meaning.
     * This will be the first inherited model with a metatype.
     */
    findMetabase(model: Model | undefined): Model | undefined {
        return this.operation(() => {
            while (model && !(model as any).metatype) {
                model = this.findBase(model);
            }
            return model;
        });
    }

    /**
     * Find the model a model derives from, if any.
     */
    findBase(model: Model | undefined): Model | undefined {
        return this.operationWithDismissal(model, () => {
            if (!model) {
                return;
            }
            let type = this.getTypeName(model);
            if (type != undefined) {
                return this.findType(model.parent, type, model.allowedBaseTags);
            }
        });
    }

    /**
     * Search inherited scope for a named member.
     */
    findMember(scope: Model | undefined, key: ModelTraversal.ElementSelector, allowedTags: ElementTag[]): Model | undefined {
        return this.operation(() => {
            while (scope) {
                const result = this.findLocal(scope, key, allowedTags);
                if (result) {
                    return result;
                }
                scope = this.findBase(scope);
            }
        });
    }

    /**
     * Search inherited and structural type scope for a named type.
     */
    findType(scope: Model | undefined, name: string, allowedTags: ElementTag[]): Model | undefined {
        return this.operation(() => {
            if (!scope) {
                return;
            }
            const queue = Array<Model>(scope);
            while (scope = queue.shift()) {
                if (scope.isTypeScope) {
                    const result = this.findLocal(scope, name, allowedTags);
                    if (result) {
                        return result;
                    }
                }

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
        });
    }

    /**
     * Visit all nodes in the model tree.
     */
    visit(model: Model, visitor: (model: Model) => boolean | void): boolean | undefined {
        return this.operation(() => {
            if (visitor(model) === false) {
                return false;
            }
            for (const c of model.children) {
                if (this.visit(c, visitor) === false) {
                    return false;
                }
            }
            return true;
        });
    }

    /**
     * Visit all nodes in the inheritance hierarchy.
     */
    visitInheritance(model: Model | undefined, visitor: (model: Model) => boolean | void): boolean | undefined {
        return this.operation(() => {
            if (!model) {
                return;
            }
            if (visitor(model) === false) {
                return false;
            }
            const base = this.findBase(model);
            this.visitInheritance(base, visitor);
        });
    }

    /**
     * Search for a direct child by name.
     */
    private findLocal(scope: Model, key: ModelTraversal.ElementSelector, allowedTags: ElementTag[]) {
        for (const c of scope.children) {
            if (c.is(key) && allowedTags.indexOf(c.tag) != -1 && !this.dismissed?.has(c)) {
                return c;
            }
        }
    }
}

export namespace ModelTraversal {
    export type ElementSelector = string | number | ((model: Model) => boolean);
}
