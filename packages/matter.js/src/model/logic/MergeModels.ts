/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/InternalError.js";
import { ElementTag, Metatype } from "../definitions/index.js";
import { AnyElement } from "../elements/index.js";
import { Model, ValueModel } from "../models/index.js";
import { ModelVariantTraversal, TraverseMap, VariantDetail } from "./ModelVariantTraversal.js";

/**
 * Merge multiple variants of an element into a single element.
 */
export function MergeModels(
    variants: TraverseMap,
    priorities = MergeModels.DefaultPriorities
): Model {
    const priority = new PriorityHandler(priorities || MergeModels.DefaultPriorities);
    const visitor = new MergeTraversal<Model>(priority, (variants, recurse) => {
        const merged = merge(variants);

        if (variants.tag === ElementTag.Cluster) {
            reparentToCanonicalParent(priority, variants);
        }

        merged.children = recurse();

        return merged;
    });
    return visitor.traverse(variants);

    /**
     * Merge the fields (excluding children) of a specific model.
     */
    function merge(variants: VariantDetail): Model {
        const variantValues = Object.fromEntries(Object.entries(variants.map).map(([variantName, variant]) => [ variantName, variant.valueOf() ]));

        const keys = new Set(
            Object.values(variantValues).flatMap(v => Object.keys(v))
        );
        keys.delete("children");

        const properties = Object.fromEntries(
            [ ...keys ].map(k => [ k, visitor.pluck(variants.tag, k, variantValues) ])
        );

        // Specialized support for type
        if (properties.type) {
            const type = visitor.chooseType(variants);
            if (type?.type !== undefined && type?.type !== null) {
                properties.type = type.type;
            }
        }

        return Model.create(properties as AnyElement);
    }
}

/**
 * Specialized tree traversal supporting element merge.
 */
class MergeTraversal<S> extends ModelVariantTraversal<S> {
    constructor(
        public priority: PriorityHandler,
        public visitor: (variants: VariantDetail, recurse: () => S[]) => S
    ) {
        super(priority.get("*", "type"));
    }

    visit(
        variants: VariantDetail,
        recurse: () => S[]
    ) {
        return this.visitor(variants, recurse);
    }

    /**
     * Use priority rules to select a single value from available variants.
     */
    pluck(
        tag: ElementTag | "*",
        fieldName: string,
        variantValues: { [ variantName: string ]: { [fieldName: string ]: any }}
    ) {
        const variantPriorities = this.priority.get(tag, fieldName);

        for (const variantName of variantPriorities) {
            const variantValue = variantValues[variantName]?.[fieldName];
            if (variantValue !== undefined) {
                return variantValue;
            }
        }
    }

    /**
     * Type selection is more complicated than other fields.
     */
    chooseType(
        variants: VariantDetail
    ) {
        const variantPriorities = this.priority.get(variants.tag, "type");

        let type: Model | undefined;
        let metatype: Metatype | undefined;
        for (const sourceName of variantPriorities) {
            const variant = variants.map[sourceName];
            if (!variant) {
                continue;
            }

            if (!type) {
                type = variant;
                if (type instanceof ValueModel) {
                    metatype = type.effectiveMetatype;
                }
                continue;
            }
            if (!(type instanceof ValueModel) || !(variant instanceof ValueModel)) {
                continue;
            }

            let overridePriority;
            const variantMetatype = variant.effectiveMetatype;
            if (!metatype) {
                if (variantMetatype) {
                    // This is not the highest priority type but it's actually
                    // useful
                    overridePriority = true;
                }
            } else if (metatype === Metatype.integer) {
                const variantMetatype = variant.effectiveMetatype;
                if (variantMetatype === Metatype.enum || variantMetatype === Metatype.bitmap) {
                    // Even though this is not the highest priority type, it's
                    // more specific
                    overridePriority = true;
                }
            }

            if (overridePriority) {
                type = variant;
                metatype = variantMetatype;
            }
        }

        return type;
    }
}

/**
 * Utility class for working with merge priorities.
 */
class PriorityHandler {
    constructor(private priorities: MergeModels.Priorities) {}

    /**
     * Get the priority for a specific tag and field.
     */
    get(typeName: string, fieldName: string) {
        const priority =
            this.priorities[typeName]?.[fieldName] ||
            this.priorities["*"]?.[fieldName] ||
            this.priorities[typeName]?.["*"] ||
            this.priorities["*"]?.["*"];

        if (!priority) {
            throw new InternalError("No default (*, *) priority available");
        }

        return priority;
    }
}

/**
 * One complexity of merge is that types can either have children directly, or
 * they can reference a type that contains the children.  For example, the
 * specification defines most attributes as enums and lists values without
 * naming a separate enum type.
 *
 * CHIP XML OTOH doesn't support this structure -- it makes up enum names if
 * the spec doesn't define a separate type.
 *
 * We want to do whatever the spec does.  In this case this means we need to
 * move the children from MyPropertyEnum into MyPropertyAttribute if the final
 * type will be enum8 rather than MyPropertyEnum.
 *
 * To keep things simple we do this in a separate preprocessing pass before
 * performing the actual merge.
 * 
 * Another simplifying assumption we make is that we will only ever move
 * children *into* the direct parent from the cluster-scoped type, not the
 * other way around.  We know this is true because CHIP doesn't support direct
 * children and the structures we build ourselves are already in the preferred
 * format.
 */
function reparentToCanonicalParent(priority: PriorityHandler, variants: VariantDetail) {
    // Collect datatypes from which we move children so we can discard
    const deparented = Array<Model>();

    // Now visit the tree and reparent as necessary
    const traversal = new MergeTraversal(priority, (variants, recurse) => {
       // Determine the canonical type for this element
        const type = traversal.chooseType(variants);
        if (!(type instanceof ValueModel)) {
            recurse();
            return;
        }

        // If the canonical type is a global type that can have children,
        // variants that reference a local type with children need to be
        // rewritten
        if (type.base?.global && Metatype.hasChildren(type.effectiveMetatype)) {
            for (const variantName in variants.map) {
                // Skip if this is the canonical variant or this variant
                // already has children
                const variant = variants.map[variantName];
                if (variant === type || variant.children.length) {
                    continue;
                }

                // Skip if the base type is not local to the cluster or doesn't
                // have children
                const base = variant.base;
                if (!(base instanceof ValueModel) || base.parent?.tag !== ElementTag.Cluster || !base.children.length) {
                    continue;
                }

                // Skip if multiple models reference the type
                if (base.parent?.references(base).length > 1) {
                    continue;
                }

                // Rewrite
                deparented.push(base);
                variant.children = base.children;
                variant.type = base.type;
            }
        }

        recurse();
    });
    traversal.traverse(variants.map);

    // Remove deparented datatypes.  We do this after recursing because
    // removing from a set we're actively visiting may be problematic
    deparented.forEach(m => m.parent = undefined);

    return variants;
}

export namespace MergeModels {
    /**
     * Priorities define rules that control how values are merged.
     */
    export type Priorities = {
        /**
         * An element type or "*" to match all elements.
         */
        [typeName: string]: {
            /**
             * A field name or "*" to match all fields.
             */
            [fieldName: string]: string[]
        }
    };

    /**
     * A default set of priorities for the variants included with matter.js.
     */
    export const DefaultPriorities: Priorities = {
        "*": {
            "*": [ "local", "chip", "spec" ],

            // Prefer spec for elements that are insufficiently defined in
            // chip
            "conformance": [ "local", "spec", "chip" ],
            "constraint": [ "local", "spec", "chip" ],
            "quality": [ "local", "spec", "chip" ],
            "access": [ "local", "spec", "chip" ],

            // Prefer spec for element names
            "name": [ "local", "spec", "chip" ],

            // Prefer spec for datatype names (must match element names)
            "type": [ "local", "spec", "chip" ]
        }
    }
}
