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
        Matter = "matter",

        Fabric = "fabric",
        Node = "node",
        Endpoint = "endpoint",
        Cluster = "cluster",
        Command = "command",
        Event = "event",
        Attribute = "attribute",
        CommandField = "commandField",
        EventField = "eventField",
        AttributeField = "structField",
        ListEntry = "listEntry",
        DeviceType = "deviceType",
        Datatype = "dataType"
    }

    /**
     * The Matter specification documents.
     */
    export enum Specification {
        Core = "Matter Core Specification",
        Cluster = "Matter Application Cluster Specification",
        Device = "Matter Device Library Specification"
    }
}

/**
 * Per the Matter specification, an element is a data construct that supports
 * an instance of data.  So, a class.
 */
export type Element = {
    /**
     * The ID of the element per Matter specification in the context of its.  A
     * "machine appropriate" semantic differentiator.  The Matter specification
     * calls this the "ID"; we use code as ID can be confused with instance ID.
     */
    code: number

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
     * Reference to Matter specification document.
     */
    xref?: {
        document: Element.Specification,
        version: string,
        section: string
    }
}

/**
 * An input element definition for which the object model infers the name and
 * type from the context of the element's definition.
 */
export type ContextualElement<T extends Element> = Omit<T, "name" | "type">;
