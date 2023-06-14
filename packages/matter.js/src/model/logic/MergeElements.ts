/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/InternalError.js";
import {
    AnyElement,
    ChipMatter,
    ElementType,
    LocalMatter,
    SpecMatter
} from "../index.js";
import { VisitElements } from "./VisitElements.js";

/**
 * Merge multiple variants of an element into a single element.
 */
export function MergeElements({
    variants = MergeElements.DefaultVariants,
    priorities = MergeElements.DefaultPriorities
}: {
    variants: VisitElements.Variants,
    priorities: MergeElements.Priorities
} = {
    variants: MergeElements.DefaultVariants,
    priorities: MergeElements.DefaultPriorities
}) {
    type VariantValues = { [variant: string]: { [field: string]: any }};

    const fake = { children: [] as AnyElement[] } as AnyElement;

    VisitElements<AnyElement>(fake, variants as VisitElements.Variants, (parent, models) => {
        return merge(parent, models);
    });

    return fake.children![0] as AnyElement;

    /**
     * Merge the fields (excluding children) of a specific model.
     */
    function merge(parent: AnyElement, variants: VisitElements.Variants): AnyElement {
        const variantValues = {} as VariantValues;

        for (const variantName in variants) {
            variantValues[variantName] = variants[variantName].valueOf();
        }

        const keys = new Set(
            Object.values(variantValues).flatMap(Object.keys)
        );
        keys.delete("children");

        const type = pluck("*", "type", variantValues) as ElementType;
        if (!type || typeof type != "string") {
            // Really just checking to make TS happy
            throw new InternalError("Type field missing from models");
        }

        const definition = Object.fromEntries(
            Array.from(keys).map(k => [ k, pluck(type, k, variantValues)])
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
        type: ElementType | "*",
        fieldName: string,
        variantValues: VariantValues
    ) {
        const priority =
            priorities[type]?.[fieldName] ||
            priorities["*"]?.[fieldName] ||
            priorities[type]?.["*"] ||
            priorities["*"]?.["*"];

        if (!priority) {
            throw new InternalError("No default (*, *) priority available");
        }

        for (const variantName in priority) {
            const variantValue = variantValues[variantName][fieldName];
            if (variantValue !== undefined) {
                return variantValue;
            }
        }
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
            "quality": [ "local", "spec", "chip" ]
        }
    }

    /**
     * A variant set with all variants included with matter.js.
     */
    export const DefaultVariants: VisitElements.Variants = {
        spec: SpecMatter,
        chip: ChipMatter,
        local: LocalMatter
    }
}
