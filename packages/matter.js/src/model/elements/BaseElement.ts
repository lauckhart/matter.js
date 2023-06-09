/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

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
    xref?: BaseElement.CrossReference,

    /**
     * Child elements.
     */
    children?: BaseElement[]
}

export function BaseElement(type: BaseElement.Type, definition: BaseElement) {
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
    export type Properties<T extends { type: `${Type}` }> = Omit<T, "type"> & Partial<Pick<T, "type">>;

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
        DeviceType = "deviceType",
        Datatype = "datatype"
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
        document: `${BaseElement.Specification}`,

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
