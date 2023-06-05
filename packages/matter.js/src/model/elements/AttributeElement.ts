/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseDataElement, BaseElement } from "../index.js"

/**
 * A cluster property description.
 */
export type AttributeElement = BaseDataElement & {
    type: AttributeElement.Type,
    children: BaseDataElement[]
}

export function AttributeElement(definition: AttributeElement.Definition) {
    return BaseDataElement({
        type: AttributeElement.Type,
        ...definition
    }) as AttributeElement;
}

export namespace AttributeElement {
    export type Type = BaseElement.Type.Attribute;
    export const Type = BaseElement.Type.Attribute;
    export type Definition = BaseDataElement.Definition & {
        children?: BaseDataElement[];
    }
}
