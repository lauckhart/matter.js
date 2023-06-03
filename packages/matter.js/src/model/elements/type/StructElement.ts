/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, BaseTypeElement, MatterElement } from "../../index.js"

/**
 * Definition of a struct type.
 */
export type StructElement = BaseTypeElement & {
    type: StructElement.Type,
    fields: StructElement.Fields
}

export function StructElement(definition: BaseElement.Typeless<StructElement>): StructElement {
    return { ...definition, type: StructElement.Type }
}

export namespace StructElement {
    export type Type = BaseElement.Type.Struct;
    export const Type = BaseElement.Type.Struct;

    export type Fields = MatterElement[];
}
