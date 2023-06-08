/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseDataElement, BaseElement, Mei } from "../index.js"

/**
 * A cluster property description.
 */
export type AttributeElement = BaseDataElement & {
    type: AttributeElement.Type,
    id: Mei
}

export function AttributeElement(definition: AttributeElement.Properties) {
    return BaseDataElement(AttributeElement.Type, definition) as AttributeElement;
}

export namespace AttributeElement {
    export type Type = BaseElement.Type.Attribute;
    export const Type = BaseElement.Type.Attribute;
    export type Properties = BaseElement.Properties<AttributeElement>;
}
