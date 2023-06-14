/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementType, Specification } from "../index.js";

/**
 * Per the Matter specification, an element is a data construct that supports
 * an instance of data.  So, a class.
 * 
 * Elements as defined by this package are a static data structure.  Each
 * element has a corresponding "Model" that is a proper class with runtime
 * functionality related to the element.
 */
export type BaseElement = {
    /**
     * The ID of the element per Matter specification, either global or
     * context-specific.  A "machine appropriate" semantic differentiator.
     */
    id?: number

    /**
     * The key used for storing this element.  A "human appropriate" semantic
     * differentiator.
     */
    name: string,

    /**
     * A short summary of the element.
     */
    description?: string,

    /**
     * A paragraph summary of the element.
     */
    details?: string,

    /**
     * Reference to Matter specification document.
     */
    xref?: Specification.CrossReference,

    /**
     * Child elements.
     */
    children?: BaseElement[],

    /**
     * A list of errors to ignore.  Used when too little information is
     * available to properly model an element.
     */
    accept?: string[]
}

export function BaseElement(type: ElementType, definition: BaseElement) {
    const result: any = { type: type };
    for (const [ k, v ] of Object.entries(definition)) {
        if (v !== undefined) {
            result[k] = v;
        }
    }
    return result as BaseElement;
}

export namespace BaseElement {
    export type ElementForProperties<P> = P extends Properties<infer T> ? T : never;

    /**
     * Element with optional type; used for factory functions and constructors.
     */
    export type Properties<T extends { type: `${ElementType}` }> = Omit<T, "type"> & Partial<Pick<T, "type">>;
}
