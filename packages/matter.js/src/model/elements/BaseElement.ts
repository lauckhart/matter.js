/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Per the Matter specification, an element is a data construct that supports
 * an instance of data.  So, a class.
 */
export type BaseElement = {
    /**
     * The ID of the element per Matter specification, either global or
     * context-specific.  A "machine appropriate" semantic differentiator.
     */
    id: number

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
    xref?: BaseElement.CrossReference
}

export namespace BaseElement {
    /**
     * Types of elements per the Matter specification.
     */
    export enum Type {
        // Root element type - not formally part of specification
        Matter = "matter",

        // Element types defined by the Matter specification
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

        // Datatype elements - formally these are all "datatype" per the
        // specification but we use different structures for them so give
        // them different types
        Bool = "bool",
        Enum = "enum",
        Float = "float",
        Int = "int",
        List = "list",
        Octet = "octet",
        Struct = "struct",

        // Placeholder, not part of specification
        Never = "never"
    }

    /**
     * The Matter specification documents.
     */
    export enum Specification {
        Core = "core",
        Cluster = "cluster",
        Device = "device"
    }

    /**
     * Long names for Matter specification documents.
     */
    export enum SpecificationNames {
        core = "Matter Core Specification",
        cluster = "Matter Application Cluster Specification",
        device = "Matter Device Library Specification"
    }

    /**
     * Information on the source of an element.
     */
    export type CrossReference = {
        /**
         * The defining document for the element.
         */
        document: BaseElement.Specification,

        /**
         * The version of the element's defining document.
         */
        version: string,

        /**
         * The section of the defining document that most specifically
         * addresses the element.
         */
        section: string
    }

    /**
     * An element definition without the type field.
     */
    export type Typeless<E extends { type: Type } & BaseElement>
        = Omit<E, "type"> & Partial<Pick<E, "type">>;
}
