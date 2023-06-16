/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, ElementTag, Mei } from "../index.js";
import { ValueElement } from "./ValueElement.js";

/**
 * A cluster property description.
 */
export type AttributeElement = ValueElement & {
    tag: `${AttributeElement.Tag}`,
    id: Mei
}

export function AttributeElement(definition: AttributeElement.Properties) {
    return ValueElement(AttributeElement.Tag, definition) as AttributeElement;
}

export namespace AttributeElement {
    export type Tag = ElementTag.Attribute;
    export const Tag = ElementTag.Attribute;
    export type Properties = BaseElement.Properties<AttributeElement>;
}
