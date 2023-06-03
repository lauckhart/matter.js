/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AttributeElement,
    BaseElement,
    BoolElement,
    ClusterElement,
    CommandElement,
    DatatypeElement,
    DeviceTypeElement,
    EndpointElement,
    EnumElement,
    EventElement,
    FabricElement,
    FloatElement,
    IntElement,
    ListElement,
    NodeElement,
    OctetElement,
    StructElement
} from "../index.js";

/**
 * A type describing all elements defined by the Matter specification.
 */
export type MatterElement
    = BoolElement
    | DatatypeElement
    | EnumElement
    | FloatElement
    | IntElement
    | ListElement
    | OctetElement
    | StructElement
    | AttributeElement
    | CommandElement
    | EventElement
    | ClusterElement
    | DeviceTypeElement
    | EndpointElement
    | FabricElement
    | NodeElement
    | typeof MatterElement.Never;

export namespace MatterElement {
    export type Type = BaseElement.Type;
    export const Type = BaseElement.Type;
    export type Specification = BaseElement.Specification;
    export const Specification = BaseElement.Specification;
    export type SpecificationNames = BaseElement.SpecificationNames;
    export const SpecificationNames = BaseElement.SpecificationNames;
    export type CrossReference = BaseElement.CrossReference;

    /**
     * This is a placeholder for locations where element metadata is required
     * but no element definition exists.  It allows for definition of logical
     * base types that are not meant to be instantiated.
     */
    export const Never = {
        never: true
    }
}
