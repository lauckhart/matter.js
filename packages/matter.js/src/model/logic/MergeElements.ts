/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/index.js";
import { Logger } from "../../log/index.js";
import { ElementTag } from "../definitions/index.js";
import { AnyElement, ValueElement } from "../elements/index.js";
import { VisitElements } from "./VisitElements.js";

const logger = Logger.get("MergeElements");

type VariantValues = {
    [variant: string]: {
        [field: string]: any
    }
};

/**
 * This type represents state that changes for each cluster.
 */
type ClusterState = {
    /**
     * Cluster datatypes don't have explicit IDs and names can vary between
     * sources.  So we infer equivalence based on usage.  The canonical name
     * for each datatype in each variant is stored here after inference.
     */
    canonicalNames: {
        [variantName: string]: {
            [datatypeName: string]: string
        }
    },

    /**
     * Some datatypes are unused after tree rewrite.  These are noted here
     * so we can discard.
     */
    unusedDatatypes: {
        [name: string]: boolean
    }
};


/**
 * Merge multiple variants of an element into a single element.
 */
export function MergeElements(
    variants: VisitElements.Variants,
    priorities = MergeElements.DefaultPriorities
): AnyElement {
    const priority = new PriorityHandler(priorities || MergeElements.DefaultPriorities);

    let clusterState: ClusterState | undefined;

    // Perform the actual merge
    return VisitElements({
        variants,

        visitor: (variants, recurse) => {
            const merged = merge(variants);

            if (merged.tag == ElementTag.Cluster) {
                clusterState = enterCluster(priority, variants);
            }

            recurse(variants);

            clusterState = undefined;

            return merged;
        },

        getName: (variant, parent, element) => {
            if (parent.tag == ElementTag.Cluster && element.tag == ElementTag.Datatype) {
                return getCanonicalDatatypeName(variant, element.name);
            }
            return element.name;
        }
    });

    /**
     * Merge the fields (excluding children) of a specific model.
     */
    function merge(variants: VisitElements.Variants): AnyElement {
        const variantValues = {} as VariantValues;

        for (const variantName in variants) {
            variantValues[variantName] = variants[variantName].valueOf();
        }

        const keys = new Set(
            Object.values(variantValues).flatMap(Object.keys)
        );
        keys.delete("children");

        const tag = pluck("*", "tag", variantValues) as ElementTag;
        if (!tag || typeof tag != "string") {
            throw new InternalError("Tag field missing from models");
        }

        const definition = Object.fromEntries(
            Array.from(keys).map(k => [ k, pluck(tag, k, variantValues)])
        ) as AnyElement;

        return definition as AnyElement;
    }

    /**
     * Get the canonical name for a datatype.  We use this value to merge
     * equivalent cluster datatypes and to update the "base" field during
     * field merge.
     */
    function getCanonicalDatatypeName(variantName: string, name: string) {
        const canonical = clusterState?.canonicalNames[variantName]?.[name];
        if (canonical != undefined) {
            return canonical;
        }
        return name;
    }

    /**
     * Use priority rules to select a single value from available variants.
     */
    function pluck(
        type: ElementTag | "*",
        fieldName: string,
        variantValues: VariantValues
    ) {
        const variantPriorities = priority.get(type, fieldName);

        for (const variantName of variantPriorities) {
            let variantValue = variantValues[variantName]?.[fieldName];

            // Special handling for "type" field - map to canonical datatype
            // name.  We do this here so overrides don't have to override every
            // element that refers to a datatype with the proper base name
            if (fieldName == "type") {
                variantValue = getCanonicalDatatypeName(variantName, variantValue);
            }

            if (variantValue !== undefined) {
                return variantValue;
            }
        }
    }
}

/**
 * Utility class for working with merge priorities.
 */
class PriorityHandler {
    constructor(private priorities: MergeElements.Priorities) {}

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
 * Preprocess cluster variants and build state.
 */
function enterCluster(priority: PriorityHandler, variants: VisitElements.Variants): ClusterState {
    return {
        canonicalNames: inferCanonicalNames(priority, variants),
        unusedDatatypes: reparentToCanonicalParent(variants)
    }
}

/**
 * Populate the canonical datatype name lookup for a specific cluster.
 * This is pretty ugly but in pseudo code:
 * 
 * for each datatype that has a base type:
 *     find the name referenced by the variant of highest priority
 *     add a mapping from the referenced name to the name we found
 */
function inferCanonicalNames(priority: PriorityHandler, variants: VisitElements.Variants): ClusterState["canonicalNames"] {
    const specPriority = priority.get("*", "base");

    const nameVariants: {
        [variantName: string]: {
            [datatypeName: string]: {
                mapTo: string | undefined,
                priority: number
            }
        }
    } = Object.fromEntries(specPriority.map(specName => [ specName, {} ]));

    // For each element, find the name mapping with the highest priority
    VisitElements({
        variants,
        visitor: (variants, recurse) => {
            let mapEntry: typeof nameVariants[""][""] | undefined;
            
            for (let i = 0; i < specPriority.length; i++) {
                // Only look at ValueElements with a base
                const variantName = specPriority[i];
                const ve = variants[variantName] as ValueElement | undefined;
                if (!ve?.type) {
                    continue;
                }

                // Create a new map entry if this is the highest priority
                // position
                if (!mapEntry) {
                    mapEntry = {
                        mapTo: ve.name,
                        priority: i
                    }
                }

                // Find existing entry
                const existingEntry = nameVariants[variantName][ve.name];

                // Replace existing entry if this is a higher priority.
                // Otherwise the types should in theory be equivalent.  If
                // they're not it's a definition bug that will need to be
                // corrected manually
                if (existingEntry) {
                    if (existingEntry.priority > mapEntry.priority) {
                        nameVariants[variantName][ve.name] = mapEntry;
                    } else if (existingEntry.priority == mapEntry.priority && existingEntry.mapTo != mapEntry.mapTo) {
                        logger.error(`Mapping ${variantName} datatype to ${existingEntry.mapTo} but it also maps to ${mapEntry.mapTo}`);
                    }
                } else {
                    nameVariants[variantName][ve.name] = mapEntry;
                }
            }

            recurse(variants);
        }
    });

    // Convert the internal structure CanonicalNames
    for (const variantName in nameVariants) {
        const variantMappings = nameVariants[variantName];
        for (const datatypeName in variantMappings) {
            variantMappings[datatypeName] = variantMappings[datatypeName].mapTo as any;
        }
    }

    return nameVariants as any;
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
 * To keep things simple we just do this in a separate preprocessing pass
 * before performing the actual merge.
 */
function reparentToCanonicalParent(variants: VisitElements.Variants) {
    // TODO
    variants;
    return {};
}

export namespace MergeElements {
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

            // Prefer spec for element names
            "name": [ "local", "spec", "chip" ],

            // Prefer spec for datatype names (must match element names)
            "type": [ "local", "spec", "chip" ]
        }
    }
}
