/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export namespace Element {
    /**
     * Types of elements per the Matter specification.
     */
    export enum Type {
        // Root element type - not formally part of specification
        matter = "matter",

        fabric = "fabric",
        node = "node",
        endpoint = "endpoint",
        cluster = "cluster",
        command = "command",
        event = "event",
        attribute = "attribute",
        commandField = "commandField",
        eventField = "eventField",
        attributeField = "structField",
        listEntry = "listEntry",
        deviceType = "deviceType",
        dataType = "dataType"
    }
}

/**
 * Per the Matter specification, an element is a data construct that supports
 * an instance of data.  So, a class.
 */
export type Element = {
    /**
     * The element type.
     */
    type: Element.Type,

    /**
     * The key used for storing this element.  A "human appropriate" semantic
     * differentiator.
     */
    name: string    
}

/**
 * Elements for which the Matter specification defines a unique numerical code
 * to differentiate the element semantically in the context of some logical
 * namespace.
 */
export type CodedElement = {
    /**
     * The ID of the element per Matter specification in the context of its.  A
     * "machine appropriate" semantic differentiator.
     */
    code: number
}

/**
 * An input element definition for which the object model infers the name and
 * type from the context of the element's definition.
 */
export type ContextualElement<T extends Element> = Omit<T, "name" | "type">;
