/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AttributeElement,
    BaseElement,
    ClusterElement,
    CommandElement,
    DeviceTypeElement,
    EndpointElement,
    EventElement,
    FabricElement,
    NodeElement,
    DatatypeElement,
    MatterElement
} from "../index.js";

/**
 * A type describing all elements defined by the Matter specification.
 */
export type AnyElement
    = AttributeElement
    | CommandElement
    | EventElement
    | ClusterElement
    | DeviceTypeElement
    | EndpointElement
    | FabricElement
    | NodeElement
    | DatatypeElement
    | MatterElement;

export namespace AnyElement {
    export type Type = BaseElement.Type;
    export const Type = BaseElement.Type;
    export type Specification = BaseElement.Specification;
    export const Specification = BaseElement.Specification;
    export type SpecificationNames = BaseElement.SpecificationNames;
    export const SpecificationNames = BaseElement.SpecificationNames;
    export type CrossReference = BaseElement.CrossReference;
}
