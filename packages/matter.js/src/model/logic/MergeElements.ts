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

/**
 * Merge multiple variants of an element into a single element.
 */
export function MergeElements(
    variants: VisitElements.Variants,
    priorities = MergeElements.DefaultPriorities
): AnyElement {
    if (!priorities) {
        priorities = MergeElements.DefaultPriorities
    }

    // Cluster datatypes don't have explicit IDs and names can vary between
    // sources.  So we infer equivalence based on usage.  The canonical name
    // for each datatype in each variant is stored here after inference
    const canonicalNames: {
        [clusterId: string]: CanonicalNames
    } = {};

    const rootState: State = {
        parent: { children: Array<AnyElement>() } as AnyElement
    };

    VisitElements({
        state: rootState,
        variants,

        visitor: (state, variants) => {
            const merged = merge(state.parent, variants, state.clusterId);

            let clusterId = state.clusterId;
            if (merged.tag == ElementTag.Cluster) {
                clusterId = merged.id;
                canonicalNames[clusterId] = inferCanonicalNames(variants);
            }

            return {
                parent: merged,
                clusterId
            }
        },

        getName: (variant, parent, element) => {
            if (parent.tag == ElementTag.Cluster && element.tag == ElementTag.Datatype) {
                return getCanonicalDatatypeName(parent.id, variant, element.name);
            }
            return element.name;
        }
    });

    return rootState.parent.children![0] as AnyElement;

    type State = {
        parent: AnyElement,
        clusterId?: number | undefined
    };

    type CanonicalNames = {
        [variantName: string]: {
            [datatypeName: string]: string
        }
    };

    /**
     * Get the canonical name for a datatype.  We use this value to merge
     * equivalent cluster datatypes and to update the "base" field during
     * field merge.
     */
    function getCanonicalDatatypeName(clusterId: number, variantName: string, name: string) {
        const canonical = canonicalNames[clusterId]?.[variantName]?.[name];
        if (canonical != undefined) {
            return canonical;
        }
        return name;
    }

    /**
     * Populate the canonical datatype name lookup for a specific cluster.
     * This is pretty ugly but in pseudo code:
     * 
     * for each datatype that has a base type:
     *     find the name referenced by the variant of highest priority
     *     add a mapping from the referenced name to the name we found
     */
    function inferCanonicalNames(variants: VisitElements.Variants): CanonicalNames {
        const specPriority = getPriority("*", "base");

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
            state: undefined,
            variants,
            visitor: (state, variants) => {
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

                // We don't use state but visitor expects something
                return state;
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

    type VariantValues = { [variant: string]: { [field: string]: any }};

    /**
     * Merge the fields (excluding children) of a specific model.
     */
    function merge(parent: AnyElement, variants: VisitElements.Variants, clusterId: number | undefined): AnyElement {
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
            Array.from(keys).map(k => [ k, pluck(tag, k, variantValues, clusterId)])
        ) as AnyElement;

        if (!parent.children) {
            parent.children = [];
        }
        parent.children.push(definition);

        return definition as AnyElement;
    }

    /**
     * Use priority rules to select a single value from available variants.
     */
    function pluck(
        type: ElementTag | "*",
        fieldName: string,
        variantValues: VariantValues,
        clusterId?: number
    ) {
        const priority = getPriority(type, fieldName);

        for (const variantName of priority) {
            let variantValue = variantValues[variantName]?.[fieldName];

            // Special handling for "base" field - map to canonical datatype
            // name.  We do this here so overrides don't have to override every
            // element that refers to a datatype with the proper base name
            if (fieldName == "base" && clusterId != undefined) {
                variantValue = getCanonicalDatatypeName(clusterId, variantName, variantValue);
            }

            if (variantValue !== undefined) {
                return variantValue;
            }
        }
    }

    function getPriority(typeName: string, fieldName: string) {
        const priority =
            priorities[typeName]?.[fieldName] ||
            priorities["*"]?.[fieldName] ||
            priorities[typeName]?.["*"] ||
            priorities["*"]?.["*"];

        if (!priority) {
            throw new InternalError("No default (*, *) priority available");
        }

        return priority;
    }
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

            // Prefer spec for datatype names
            "base": [ "local", "spec", "chip" ]
        }
    }
}
