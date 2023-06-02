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
export type MatterElement = {
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
    xref?: {
        /**
         * The defining document for the element.
         */
        document: Element.Specification,

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
}
