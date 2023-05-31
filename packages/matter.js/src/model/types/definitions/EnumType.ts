/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonTypeDefinition, Metatype } from "../index.js";

/**
 * Definition of an enumeration type.
 */
export type EnumTypeDefinition = CommonTypeDefinition & {
    datatype: Metatype.Enum,
    values: EnumTypeDefinition.Values,
    default?: string
}

export namespace EnumTypeDefinition {
    export type Values = { [name: string]: number } | { [id: number]: string };
}
