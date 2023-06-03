/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, Constraint, Quality, BaseTypeElement, BaseElement } from "../../index.js"

/**
 * A cluster property description.
 */
export type AttributeElement = BaseTypeElement & {
    type: AttributeElement.Type,
    constraint: Constraint,
    quality: Quality.Definition
    access: Access.Definition,
    conformance: Conformance.Definition,

    default: any
}

export function AttributeElement(definition: BaseElement.Typeless<AttributeElement>): AttributeElement {
    return { ...definition, type: AttributeElement.Type }
}

export namespace AttributeElement {
    export type Type = BaseElement.Type.Attribute;
    export const Type = BaseElement.Type.Attribute;
}
