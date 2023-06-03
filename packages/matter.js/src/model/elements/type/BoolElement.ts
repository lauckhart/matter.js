/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseTypeElement, BaseElement } from "../../index.js";

/**
 * Definition of a type detailing a non-composite base type.
 */
export type BoolElement = BaseTypeElement & {
    type: BoolElement.Type,
    default?: boolean
}

export function BoolElement(definition: BaseElement.Typeless<BoolElement>): BoolElement {
    return { ...definition, type: BoolElement.Type }
}

export namespace BoolElement {
    export type Type = BaseElement.Type.Bool;
    export const Type = BaseElement.Type.Bool;
}
