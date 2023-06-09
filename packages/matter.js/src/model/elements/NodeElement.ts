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
    id: number,
    type: `${NodeElement.Type}`,    
    children?: EndpointElement[]
}

export function NodeElement(definition: NodeElement.Properties) {
    return BaseElement(NodeElement.Type, definition) as NodeElement;
}

export namespace NodeElement {
    export type Type = BaseElement.Type.Node;
    export const Type = BaseElement.Type.Node;
    export type Properties = BaseElement.Properties<NodeElement>;
}
