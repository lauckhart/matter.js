/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseElement, BaseTypeElement } from "../../index.js";

/**
 * Definition of a sequence of octets of fixed length.
 */
export type OctetElement = BaseTypeElement & {
    type: OctetElement.Type
}

export function OctetElement(definition: BaseElement.Typeless<OctetElement>): OctetElement {
    return { ...definition, type: OctetElement.Type }
}

export namespace OctetElement {
    export type Type = BaseElement.Type.Octet;
    export const Type = BaseElement.Type.Octet;
}
