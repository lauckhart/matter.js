/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, EndpointElement } from "../index.js";

/**
 * Runtime representation of a node.
 */
export type NodeElement = BaseElement & {
    type: NodeElement.Type,    
    children: EndpointElement[]
}

export function NodeElement(definition: NodeElement.Definition) {
    return BaseElement(definition) as NodeElement;
}

export namespace NodeElement {
    export type Type = BaseElement.Type.Node;
    export const Type = BaseElement.Type.Node;
    export type Definition = BaseElement.Definition & {
        children?: EndpointElement[]
    };
}
