/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementType } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { EndpointElement } from "./EndpointElement.js";

/**
 * Runtime representation of a node.
 */
export type NodeElement = BaseElement & {
    id: number,
    type: `${NodeElement.Type}`,    
    children?: EndpointElement[]
}

export function NodeElement(definition: NodeElement.Properties) {
    return BaseElement(NodeElement.Type, definition) as NodeElement;
}

export namespace NodeElement {
    export type Type = ElementType.Node;
    export const Type = ElementType.Node;
    export type Properties = BaseElement.Properties<NodeElement>;
}
