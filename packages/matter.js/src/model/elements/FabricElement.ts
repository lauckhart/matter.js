/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeElement, BaseTypeElement, BaseElement } from "../index.js"

/**
 * Runtime representation of a fabric.
 */
export type FabricElement = BaseTypeElement & {
    type: FabricElement.Type,
    nodes: NodeElement[]
}

export function FabricElement(definition: BaseElement.Typeless<FabricElement>): FabricElement {
    return { ...definition, type: FabricElement.Type }
}

export namespace FabricElement {
    export type Type = BaseElement.Type.Fabric;
    export const Type = BaseElement.Type.Fabric;
}
