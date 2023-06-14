/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeElement, BaseElement, ElementType } from "../index.js"

/**
 * Runtime representation of a fabric.
 */
export type FabricElement = BaseElement & {
    id: number,
    type: `${FabricElement.Type}`,
    children: NodeElement[]
}

export function FabricElement(definition: FabricElement.Properties) {
    return BaseElement(FabricElement.Type, definition);
}

export namespace FabricElement {
    export type Type = ElementType.Fabric;
    export const Type = ElementType.Fabric;
    export type Properties = BaseElement.Properties<FabricElement>;
}
