/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BaseElement,
    ClusterElement,
    DeviceTypeElement,
    EndpointElement,
    FabricElement,
    NodeElement,
    MatterElement
} from "../index.js";
import { AnyDataElement } from "./AnyDataElement.js";

/**
 * Any Matter element.
 */
export type AnyElement =
    AnyDataElement
    | ClusterElement
    | DeviceTypeElement
    | EndpointElement
    | FabricElement
    | NodeElement
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
