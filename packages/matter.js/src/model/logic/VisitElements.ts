/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag } from "../definitions/index.js";
import { AnyElement } from "../elements/index.js";

/**
 * Visit multiple elements simultaneously and build state
 */
export function VisitElements<T>({
    variants,
    visitor,
    getName
}: {
    variants: VisitElements.Variants,
    visitor: (
        variants: VisitElements.Variants,
        recurse: (variants: VisitElements.Variants) => void
    ) => T,
    getName?: (
        variant: string,
        parent: AnyElement,
        element: AnyElement
    ) => string
}): T {
    if (!getName) {
        getName = (_variant, _parent, element) => element.name
    }

    return visitor(variants, (variants: VisitElements.Variants) => {
        type ChildMapping = {
            // List of children associated by ID or name (ID gets priority)
            slots: VisitElements.Variants[],

            // Map of IDs to first slot the ID appeared
            idToSlot: { [id: number]: number },

            // Map of names to first slot the name appeared
            nameToSlot: { [name: string]: number }
        }
        const mappings = {} as { [tag: string]: ChildMapping };

        // Iterate over each model variant
        for (const variantName in variants) {
            // Get the model
            const element = variants[variantName];
            if (!element?.children) {
                continue;
            }

            // For each child of this variant, associated it with a slot
            for (let i = 0; i < element.children.length; i++) {
                const child = element.children[i] as AnyElement;
                const mapping = mappings[child.tag] ||
                    (mappings[child.tag] = { slots: [], idToSlot: {}, nameToSlot: {} });

                const childId = effectiveId(element, child, i);
                const childName = getName!(variantName, element, child);

                let slot;
                if (childId != undefined) {
                    // Find existing slot by ID
                    slot = mapping.idToSlot[childId];
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
                if (childId != undefined) {
                    if (mapping.idToSlot[childId] === undefined) {
                        mapping.idToSlot[childId] = slot;
                    }
                }

                // Map the child's name to the slot
                if (mapping.nameToSlot[childName] === undefined) {
                    mapping.nameToSlot[childName] = slot;
                }

                // Update the slot
                mapping.slots[slot][variantName] = child;
            }
        }

        // Visit children
        for (const mapping of Object.values(mappings)) {
            for (const variants of mapping.slots) {
                VisitElements({ variants, visitor, getName });
            }
        }
    });
}

// For fields, if there is no explicit ID, use the index within the parent
function effectiveId(parent: AnyElement, child: AnyElement, index: number) {
    if (child.id == undefined && child.tag == ElementTag.Datatype) {
        switch (parent.tag) {
            case ElementTag.Attribute:
            case ElementTag.Command:
            case ElementTag.Datatype:
            case ElementTag.Event:
                return index;
        }
    }
    return child.id;
}

export namespace VisitElements {
    /**
     * This is the input to VisitElements().  It represents multiple variants
     * of the same element identified by string key.
     */
    export type Variants = { [key: string]: AnyElement };
}
