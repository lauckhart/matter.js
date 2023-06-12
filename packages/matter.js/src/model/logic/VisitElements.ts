/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnyElement } from "../index.js";

/**
 * Visit multiple elements simultaneously and build state
 */
export function VisitElements<T>(
    parent: T,
    variants: VisitElements.Variants,
    visitor: (parent: T, variants: VisitElements.Variants) => T
) {
    parent = visitor(parent, variants);
    
    // List of children associated by ID or name (ID gets priority)
    const slots = Array<VisitElements.Variants>();

    // Map of IDs to first slot the ID appeared
    const idToSlot = new Map<number, number>();

    // Map of names to first slot the name appeared
    const nameToSlot = new Map<string, number>();

    // Iterate over each model variant
    for (const name in variants) {
        // Get the model
        const element = variants[name];
        if (!element?.children) {
            continue;
        }

        // For each child of this variant, associated it with a slot
        for (const child of element.children as AnyElement[]) {
            if (child.id) {
                // Find existing slot by ID
                let slot = idToSlot.get(child.id);

                // Find existing slot by name
                if (!slot) {
                    slot = nameToSlot.get(child.name);
                }

                // Create a new slot if necessary
                if (!slot) {
                    slot = slots.length;
                    slots.push({});
                }

                // Map the child's ID to the slot
                if (child.id) {
                    if (idToSlot.get(child.id) === undefined) {
                        idToSlot.set(child.id, slot);
                    }
                }

                // Map the child's name to the slot
                if (nameToSlot.get(child.name) === undefined) {
                    nameToSlot.set(child.name, slot);
                }

                // Update the slot
                slots[slot][name] = child;
            }
        }
    }

    // Visit children
    for (const slot of slots) {
        VisitElements(parent, slot, visitor);
    }
}

export namespace VisitElements {
    /**
     * This is the input to VisitElements().  It represents multiple variants
     * of the same element identified by string key.
     */
    export type Variants = { [key: string]: AnyElement };
}
