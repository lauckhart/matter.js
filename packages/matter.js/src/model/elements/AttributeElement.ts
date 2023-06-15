/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, ElementType, Mei } from "../index.js";
import { ValueElement } from "./ValueElement.js";

/**
 * A cluster property description.
 */
export type AttributeElement = ValueElement & {
    type: `${AttributeElement.Type}`,
    id: Mei
}

export function AttributeElement(definition: AttributeElement.Properties) {
    return ValueElement(AttributeElement.Type, definition) as AttributeElement;
}

export namespace AttributeElement {
    export type Type = ElementType.Attribute;
    export const Type = ElementType.Attribute;
    export type Properties = BaseElement.Properties<AttributeElement>;
}
