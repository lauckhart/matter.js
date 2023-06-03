/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, BaseTypeElement, MatterElement } from "../../index.js"

/**
 * Definition of an array type.
 */
export type ListElement = BaseTypeElement & {
    type: ListElement.Type,
    entry: MatterElement
}

export function ListElement(definition: BaseElement.Typeless<ListElement>): ListElement {
    return { ...definition, type: ListElement.Type }
}

export namespace ListElement {
    export type Type = BaseElement.Type.List;
    export const Type = BaseElement.Type.List;
}
