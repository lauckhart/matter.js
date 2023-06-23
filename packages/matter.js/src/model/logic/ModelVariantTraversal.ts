/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/index.js";
import { Logger } from "../../log/index.js";
import { ElementTag } from "../definitions/index.js";
import { AnyElement } from "../elements/index.js";
import { CommandModel, Model } from "../models/index.js";
import { ModelTraversal } from "./ModelTraversal.js";

const logger = Logger.get("ModelVariantTraversal");

/**
 * This is a map of equivalent models keyed by "source name".  The source
 * name is a string that identifies the source of the variant, such as "chip",
 * "spec" or "local".
 */
export type VariantMap = { [sourceName: string]: Model };

/**
 * Input to traverse().
 */
export type TraverseMap = { [sourceName: string]: Model | AnyElement }

/**
 * Supplies operational information about a set of variants.
 */
export interface VariantDetail {
    /**
     * The shared tag across all variants.
     */
    tag: ElementTag;

    /**
     * The highest priority ID across all variants, if any variant has an
     * ID.
     */
    id?: number;

    /**
     * The canonical name to use for the variants.
     */
    name: string;

    /**
     * The actual variants.
     */
    map: VariantMap;
}

/**
 * Visits multiple model hierarchies simultaneously and builds state.
 */
export abstract class ModelVariantTraversal<S = void> {
    private clusterState: ClusterState | undefined;
    private visiting = false;
    private modelTraversal = new ModelTraversal();

    /**
     * Create a new visitor.  Must list the valid names of sources.  The order
     * of this list implies the priority used for choosing a name when multiple
     * model variants have different names.
     */
    constructor(private sourceNames: string[]) {}

    /**
     * Initiate traversal.  The class is stateful so this call should not be
     * invoked while traversal is ongoing.
     */
    traverse(variants: TraverseMap): S {
        // Ensure it's clear this class is stateful
        if (this.visiting) {
            throw new InternalError("ModelVariantVisitor.visit called with active visit; reentrancy not supported");
        }

        delete this.clusterState;
        this.visiting = true;
        try {
            return this.visitVariants(this.createVariantDetail(
                Object.fromEntries(Object.entries(variants).map(([ sourceName, element ]) => {
                    if (!(element instanceof Model)) {
                        element = Model.create(element);
                    }
                    return [ sourceName, element ];
                }))
            ));
        } finally {
            this.visiting = false;
        }
    }

    /**
     * This is the primary callback.  It is invoked for every set of variants
     * during traversal.  It may optionally return state that is returned
     * from traverse().
     * 
     * @param variants the set of equivalent models
     * @param recurse call this function to recurse into variant children
     */
    protected abstract visit(variants: VariantDetail, recurse: () => S[]): S;

    /**
     * Get the canonical name for a set of variants.  Within a cluster we use
     * inferred type names if there is one.  Otherwise just returns the Model's
     * name.
     */
    protected getCanonicalName(sourceName: string, variantName: string) {
        if (this.clusterState) {
            const name = this.clusterState.canonicalNames[sourceName][variantName];
            if (name != undefined) {
                return name;
            }
        }
        return variantName;
    }

    /**
     * Determine if we are entering a cluster and install cluster state if so.
     */
    protected enterCluster(variants: VariantDetail) {
        if (variants.tag == ElementTag.Cluster) {
            this.clusterState = {
                canonicalNames: inferCanonicalNames(this.sourceNames, variants)
            };
            return true;
        }
        return false;
    }

    /**
     * This is the function that actually recurses during the visit.
     */
    private visitVariants(variants: VariantDetail): S {
        // Note that the only role ModelTraversal plays here is to protect
        // against loops.  We do the actual traversal ourselves
        const state = this.modelTraversal.operation(() => {
            return this.visit(variants, () => {
                const enteredCluster = this.enterCluster(variants);

                // Group children across variants
                const mappings = this.mapChildren(variants, enteredCluster);            
        
                // Visit children
                const result = Array<S>();
                for (const mapping of Object.values(mappings)) {
                    for (const variants of mapping.slots) {
                        const detail = this.createVariantDetail(variants);
                        result.push(this.visitVariants(detail));
                    }
                }

                // Remove cluster state
                if (enteredCluster) {
                    delete this.clusterState;
                }

                return result;
            })
        });

        return state;
    }

    private mapChildren(variants: VariantDetail, enteredCluster: boolean) {
        type ChildMapping = {
            // List of children associated by ID or name (ID gets priority)
            slots: VariantMap[],

            // Map of IDs to first slot the ID appeared
            idToSlot: { [id: string]: number },

            // Map of names to first slot the name appeared
            nameToSlot: { [name: string]: number }
        }
        const mappings = {} as { [tag: string]: ChildMapping };

        // Iterate over each model variant
        for (const [ sourceName, variant ] of Object.entries(variants.map)) {
            // For each child of this variant, associated it with a slot
            for (let i = 0; i < variant.children.length; i++) {
                const child = variant.children[i];
                if (child.global) {
                    // Ignore globals, they're managed by the MatterModel
                    continue;
                }

                const mapping = mappings[child.tag] ||
                    (mappings[child.tag] = { slots: [], idToSlot: {}, nameToSlot: {} });

                const childId = child.effectiveId;
                let childName = child.name;

                // If we are directly under cluster and the child is a
                // datatype, its name may have been mapped
                if (enteredCluster && child.tag == ElementTag.Datatype) {
                    childName = this.getCanonicalName(sourceName, childName);
                }

                let slot;
                let idStr: string | undefined;
                if (childId != undefined) {
                    idStr = childId.toString();

                    // Commands may re-use the ID for request and response
                    // So append the direction to the ID
                    if (variant instanceof CommandModel) {
                        idStr = `${idStr}:${(variant as CommandModel).direction}`
                    }

                    // Find existing slot by ID
                    slot = mapping.idToSlot[idStr];
                }

                // Find existing slot by name
                if (slot == undefined) {
                    slot = mapping.nameToSlot[childName];
                }

                // Create a new slot if necessary
                if (slot == undefined) {
                    slot = mapping.slots.length;
                    mapping.slots.push({});
                }

                // Map the child's ID to the slot
                if (idStr != undefined) {
                    if (mapping.idToSlot[idStr] === undefined) {
                        mapping.idToSlot[idStr] = slot;
                    }
                }

                // Map the child's name to the slot
                if (mapping.nameToSlot[childName] === undefined) {
                    mapping.nameToSlot[childName] = slot;
                }

                // Update the slot
                mapping.slots[slot][sourceName] = child;
            }
        }

        return mappings;
    }

    /**
     * Create a VariantDetail from a VariantMap.
     */
    private createVariantDetail(map: VariantMap):
        VariantDetail
    {
        let tag: ElementTag | undefined;
        let id: number | undefined;
        let name: string | undefined;

        this.sourceNames.forEach(sourceName => {
            const variant = map[sourceName];
            if (variant) {
                if (!tag) {
                    tag = variant.tag;
                } else if (tag != variant.tag) {
                    // Sanity check
                    throw new InternalError(`Variant tag mismatch; previous variant identified as ${tag} but ${sourceName} identifies as ${tag}`);
                }
                if (!id) {
                    id = variant.id;
                }
                if (!name) {
                    name = this.getCanonicalName(sourceName, variant.name);
                }
            }
        })

        if (!tag) {
            // Sanity check
            throw new InternalError("No tag identified in variant set");
        }
        if (!name) {
            // Sanity check
            throw new InternalError("No name identified in variant set");
        }

        return { tag, id, name, map };
    }
}

/**
 * This type manages state that changes when we enter a cluster. 
 */
type ClusterState = {
    canonicalNames: {
        [sourceName: string]: {
            [key: string]: any
        }
    }
}

/**
 * Populate the canonical datatype name lookup for a specific cluster.  This is
 * pretty ugly but in pseudo code:
 * 
 * for each datatype that has a base type:
 *     find the name referenced by the variant of highest priority
 *     add a mapping from the referenced name to the name we found
 */
function inferCanonicalNames(
    sourceNames: string[],
    variants: VariantDetail
): ClusterState["canonicalNames"] {
    const nameVariants: {
        [variantName: string]: {
            [datatypeName: string]: {
                mapTo: string | undefined,
                priority: number
            }
        }
    } = Object.fromEntries(sourceNames.map(sourceName => [ sourceName, {} ]));

    // Create a new traversal to visit each element
    const traversal = new class extends ModelVariantTraversal {
        override visit(variants: VariantDetail, recurse: () => void[]) {
            let mapEntry: typeof nameVariants[""][""] | undefined;
            
            for (let priority = 0; priority < sourceNames.length; priority++) {
                const sourceName = sourceNames[priority];
                const variant = variants.map[sourceName];

                // Only elements with a base type local to the cluster are of
                // interest.  Global types we map manually so they should be
                // correct
                const base = variant?.base;
                if (!base || base.parent?.tag != ElementTag.Cluster) {
                    continue;
                }

                // Create a new map entry if this is the highest priority
                // position
                if (!mapEntry) {
                    mapEntry = {
                        mapTo: variant.name,
                        priority
                    }
                }

                // Find existing entry
                const existingEntry = nameVariants[sourceName][variant.name];

                // Replace existing entry if this is a higher priority.
                // Otherwise the types should in theory be equivalent.  If
                // they're not it's a definition bug that will need to be
                // corrected manually
                if (existingEntry) {
                    if (existingEntry.priority > mapEntry.priority) {
                        nameVariants[sourceName][variant.name] = mapEntry;
                    } else if (existingEntry.priority == mapEntry.priority && existingEntry.mapTo != mapEntry.mapTo) {
                        logger.warn(`Mapping ${sourceName} ${variant.tag} ${variant.name} to ${existingEntry.mapTo} but it also maps to ${mapEntry.mapTo}`);
                    }
                } else {
                    nameVariants[sourceName][variant.name] = mapEntry;
                }
            }

            recurse();
        }

        override enterCluster() {
            // Do not call base logic because it is uses inferCanonicalNames
            return false;
        }
    }(sourceNames);
    traversal.traverse(variants.map);

    // Convert the internal structure CanonicalNames
    for (const variantName in nameVariants) {
        const variantMappings = nameVariants[variantName];
        for (const datatypeName in variantMappings) {
            variantMappings[datatypeName] = variantMappings[datatypeName].mapTo as any;
        }
    }

    return nameVariants;
}
